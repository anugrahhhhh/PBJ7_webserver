module.exports = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request ke ${req.url}`);
    next();
};
