import Listing from "../models/listing.model.js";

export async function createListing(req, res, next) {
  try {
    console.log("createlisting");
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
}
