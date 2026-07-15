import { Manifold } from 'manifold-3d/manifoldCAD';

// Dimensions in millimeters
const cutDepth = 15;      // Height needed to cut completely through the clay
const imprintDepth = 13;   // Shorter height to just leave an impression

// Radii for the three concentric rings (adjust these to your desired size)
const outerCutRadius = 30;
const middleImprintRadius = 26;
const innerCutRadius = 22;

// Thickness of the thin cutting edges and the imprint line
const wallThickness = 1;

// 1. OUTER CUTTING RING
const outerCyl1 = Manifold.cylinder(cutDepth, outerCutRadius);
const outerCyl2 = Manifold.cylinder(cutDepth, outerCutRadius - wallThickness);
const outerCuttingRing = outerCyl1.subtract(outerCyl2);

// 2. MIDDLE IMPRINT RING (Shorter depth)
const midCyl1 = Manifold.cylinder(imprintDepth, middleImprintRadius);
const midCyl2 = Manifold.cylinder(imprintDepth, middleImprintRadius - wallThickness);
const middleImprintRing = midCyl1.subtract(midCyl2);

// 3. INNER CUTTING RING
const innerCyl1 = Manifold.cylinder(cutDepth, innerCutRadius);
const innerCyl2 = Manifold.cylinder(cutDepth, innerCutRadius - wallThickness);
const innerCuttingRing = innerCyl1.subtract(innerCyl2);

// FIX: Combine all three elements using the static array method
const combinedStamp = Manifold.union([outerCuttingRing, middleImprintRing, innerCuttingRing]);

// Export the final tool geometry
export const result = combinedStamp;