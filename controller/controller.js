const mysqlConnection = require('../connection');

class Controller {
    static getIndex = async (req, res) => {
        try {
            return res.status(201).render('home', {
                title: "Home"
            })
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static putData = async (req, res) => {
        try {
            const { title, content } = req.body;
            mysqlConnection.query(`INSERT INTO blog(title,content) VALUES("${title}","${content}");`, [], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    return res.redirect("/");
                }
            });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static getAllData = async (req, res) => {
        mysqlConnection.query('Select * from `blog`;', (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                return res.render('list', {
                    title: "Data list",
                    data: rows
                })
            }
        });
    }

    static getDataById = async (req, res) => {
        mysqlConnection.query('Select * from `blog` where id = ?', [req.params.id], (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                return res.render('list', {
                    title: "Data list",
                    data: rows
                })
            }
        })
    }

    static getUpdate = async (req, res) => {
        try {
            mysqlConnection.query('Select * from `blog` where id = ?', [req.params.id], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    return res.status(201).render('update', {
                        title: "Update Data",
                        data: rows[0]
                    });
                }
            });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static updateData = async (req, res) => {
        const { title, content } = req.body;
        mysqlConnection.query(`UPDATE blog set title = "${title}", content = "${content}" where id = ${req.params.id}`, [], (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                return res.redirect('/get-data')
            }
        })
    }

    static deleteData = async (req, res) => {
        mysqlConnection.query('delete from blog where id = ?', [req.body.id], (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                return res.redirect('/get-data')
            }
        })
    }
}


module.exports = Controller;