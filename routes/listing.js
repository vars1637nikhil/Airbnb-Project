const express = require('express');
const router = express.Router()
const { listingSchema } = require("../schema.js");
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listing.js');
const {isloggedIn, isOwner, validatelisting} = require('../middleware.js');
const listingController = require("../controllers/listing.js");
// const multer  = require('multer');
// const { storage } = require("../cloudConfig.js");
// const upload = multer({ storage });

router.route("/search").get(wrapAsync(listingController.search));

router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isloggedIn,
    // upload.single("listing[image]"),
    validatelisting,
    wrapAsync(listingController.createListing)
);


//New Route
router.get("/new", isloggedIn, listingController.rendernewform);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isloggedIn,
    isOwner,
    validatelisting,
    // upload.single("listing[image]"),
    wrapAsync(listingController.updatelisting)
)
.delete(
    isloggedIn,
    isOwner,
    wrapAsync(listingController.destroylisting)
)

//Edit Route
router.get("/:id/edit", 
    isloggedIn,
    isOwner,
    wrapAsync(listingController.renderEditform)
);

module.exports = router;