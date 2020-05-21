export default (req, res) => {
    res.status(200).send({ text: 'Hello' })
}

// export default (req, res) => {
//     const email = req.body.email
//     // Then save email to your database, etc...
// }