const bcrypt = require('bcrypt');
const { user } = require('pg/lib/defaults');

module.exports = function(router, database) {

  // Create a new user
  router.post('/', (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    database.addUser(user)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.userId = user.id;
      res.send("🤗");
    })
    .catch(e => res.send(e));
  });

  /**
   * Check if a user exists with a given username and password
   * @param {String} email
   * @param {String} password encrypted
   */
  const login =  function(email, password) {
    // console.log("DATA: ", database)
    // console.log("USER: ", user)
    // console.log("EMAIL: ", email)
    // console.log("PW: ", password)

    return database.getUserWithEmail(email)
    .then(user => {
    // console.log("USER: ", user)

      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
  }
  exports.login = login;

  router.post('/login', (req, res) => {
    const {email, password} = req.body;
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.userId = user.id;
        res.send({user: {name: user.name, email: user.email, id: user.id}});
      })
      .catch(e => res.send(e));
  });
  
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send({message: "not logged in"});
      return;
    }

    database.getUserWithId(userId)
      .then(user => {
        if (!user) {
          res.send({error: "no user with that id"});
          return;
        }
    
        res.send({user: {name: user.name, email: user.email, id: userId}});
      })
      .catch(e => res.send(e));
  });

  return router;
}


  // // 1
  // const queryParams = [];
  // // 2
  // let queryString = `
  // SELECT properties.*, avg(property_reviews.rating) as average_rating
  // FROM properties
  // JOIN property_reviews ON properties.id = property_id
  // `;
  // if (options.city) {
  //   queryParams.push(`%${options.city}%`);
  //   queryString += `WHERE city LIKE $${queryParams.length} `;
  // // } else if (options.owner_id) {
  // //   queryParams.push(`%${options.owner_id}%`);
  // //   queryString += `WHERE owner_id LIKE $${queryParams.length} `;
  // } else if (options.cost_per_night) {
  //   queryParams.push(`%${options.minimum_price_per_night}%`);
  //   queryParams.push(`%${options.maximum_price_per_night}%`);
  //   queryString += `WHERE cost_per_night > $${queryParams.length} AND < $${queryParams.length}`;
  //   // queryString += `AND < $${queryParams.length} `;
  // // } else if (options.minimum_rating) {
  // //   queryParams.push(`%${options.average_rating}%`);
  // //   queryString += `WHERE average_rating >= $${queryParams.length} `;
  // }
  
  // queryParams.push(limit);
  // queryString += `
  // GROUP BY properties.id
  // ORDER BY cost_per_night
  // LIMIT $${queryParams.length};
  // `;

  // // console.log(options)
  // console.log(queryString, queryParams);

  // return pool.query(queryString, queryParams)
  // .then(res => res.rows);