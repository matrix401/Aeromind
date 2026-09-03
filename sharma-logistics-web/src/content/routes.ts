import type { RouteLane } from "@/lib/types";

/**
 * Interstate routes shown on the homepage. Price and delivery-time ranges
 * are left undefined (the RouteCard renders an explicit [VERIFY_...]
 * placeholder) until real pricing data is supplied — see Phase 8.
 */
export const homepageRoutes: RouteLane[] = [
  { slug: "hyderabad-to-bengaluru", from: "Hyderabad", to: "Bengaluru" },
  { slug: "hyderabad-to-chennai", from: "Hyderabad", to: "Chennai" },
  { slug: "hyderabad-to-pune", from: "Hyderabad", to: "Pune" },
  { slug: "hyderabad-to-mumbai", from: "Hyderabad", to: "Mumbai" },
  { slug: "hyderabad-to-delhi", from: "Hyderabad", to: "Delhi NCR" },
  { slug: "hyderabad-to-ahmedabad", from: "Hyderabad", to: "Ahmedabad" },
  { slug: "hyderabad-to-nagpur", from: "Hyderabad", to: "Nagpur" },
  { slug: "hyderabad-to-vijayawada", from: "Hyderabad", to: "Vijayawada" },
  { slug: "hyderabad-to-visakhapatnam", from: "Hyderabad", to: "Visakhapatnam" },
  { slug: "hyderabad-to-warangal", from: "Hyderabad", to: "Warangal" },
  { slug: "hyderabad-to-tirupati", from: "Hyderabad", to: "Tirupati" },
  { slug: "hyderabad-to-kolkata", from: "Hyderabad", to: "Kolkata" },
];
