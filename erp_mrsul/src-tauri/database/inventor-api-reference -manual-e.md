Edge Object
Description
The Edge object. See the Boundary Representation article in the overviews section.
Methods
Name Description
CalculateStrokes
Method that calculates the set of strokes that approximate all of the
edges of the SurfaceBody, Face or Edge from which the method
was called. The Tolerance argument defines the accuracy of the
strokes. The output from this method represents a series of line
segments, not connected polylines.
CalculateStrokesWithOptions
Method that creates a new set of strokes within the specified
conditions.
GetClosestPointTo
Method that returns a point on the edge that is closest to the input
point. A single point is returned even if multiple equidistant points
are found. To get the u parameter of the returned point on the edge,
use Edge.Evaluator.GetParamAtPoint method.
GetExistingStrokes
Method that returns the specified set of strokes from the
SurfaceBody, Face or Edge the method was called from. Existing
strokes are stored to single-precision floating point accuracy. This
is typically adequate accuracy for display purposes. If a more
accurate result is required you can use the CalculateStrokes
method, which will calculate new strokes to a given tolerance at
double-precision accuracy. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize
Apprentice for access to strokes. Setting this property to True
before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
GetExistingStrokeTolerances
Method that gets the tolerances that were used to calculate the
existing sets of display strokes. These can be used to determine if
any existing strokes have been calculated within your desired
accuracy. The tolerance value is also used as an index to specify
which set of existing strokes to retrieve when using the
GetExistingStrokes method. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize
Apprentice for access to strokes. Setting this property to True
before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSourceEdge
Method that gets the source edge that has been overridden by this
edge. The method returns Nothing if this edge is not an override.
An error is returned if this method is called on an edge in a part.
Edge Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is
returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
EdgeUses Gets the that reference this Edge.
Evaluator Gets the CurveEvaluator for this Edge.
Faces Property that returns the that this Edge is referenced from.
Geometry
Property that returns the underlying geometry of the edge (e.g.
Arc2D, Circle, Cone etc.)
GeometryForm
Gets the form of the underlying geometry as a combination of one
or more CurveGeometryFormEnum values.
GeometryType
Get the curve type of the curve that will be returned from the
Geometry property.
IsParamReversed
Gets whether the parameterization of the geometry obtained from
the Geometry property is aligned or opposed to the topological
sense of this Edge.
IsTolerant
Indicates if this Edge is using tolerant modeling to allow a nonexact
model.
Parent
Property that returns the parent object from whom this object can
logically be reached.
PointOnEdge
Property that returns a characteristic somewhere in the middle of
the Edge.
StartVertex Gets the Vertex referenced at the start of this Edge.
StopVertex Gets the Vertex referenced at the end of this Edge.
TangentiallyConnectedEdges
Property that returns an that contains the input edge and all
tangentially connected edges. The CollectionType of the output
EdgeCollection is set to kTangentiallyConnected.
Tolerance
Returns the tolerance being used for modeling calculations and this
Edge.
TransientKey
Property that obtains an ID key that can be used to bind back to the
live object. This transient key is only valid as long as the document
state has not changed. For more information, see the
ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Wire
Get the Wire containing this Edge. Returns Nothing if this Edge
does not belong to a Wire.
Accessed From
AnalyticEdgeWorkAxisDef.Edge, CenteredWidthExtent.Edge, Edge.GetSourceEdge,
EdgeProxy.GetSourceEdge, EdgeProxy.NativeObject, Edges.Item, EdgeUse.Edge,
EdgeUseProxy.Edge, EdgeWidthExtent.Edge, FilletIntermediateRadius.Edge, FilletSetback.Edge,
Edge Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
FlatBendResult.Edge, FromToWidthExtent.Edge, MeshEdge.Edge, MeshEdgeProxy.Edge,
MidPointWorkPointDef.Edge, NonLinearEdgeWorkPointDef.Edge, OffsetWidthExtent.Edge,
PublicationMeshEdge.Edge, RuledSurfaceEdgeFacePair.GetData, SurfaceGraphicsEdge.Edge,
WidthOffsetWidthExtent.Edge
Derived Classes
EdgeProxy
Samples
Name Description
Add assembly insert
constraint
This sample demonstrates the creation of an assembly insert constraint.
Delete Face,
Boundary Patch and
Stitch features
Demonstrates creating Face, Boundary Patch and Stitch features.
Create sheet metal
face and fold features
This sample demonstrates the creation of sheet metal face and fold
features.
Sketch Edit
Orientation
This sample demonstrates modifying the orientation of a sketch.
Sketch Add Oriented
This sample demonstrates the creation of a sketch using the
Sketches.AddWithOrientation method.
Create sheet metal rip
feature
This sample demonstrates the creation of a rip sheet metal feature.
Window Selection
This sample demonstrates using the selection events to window-select
multiple edges. Selection is dependent on events and VB only supports
events within a class module.
Create sheet metal
face and flange
features
This sample demonstrates the creation of sheet metal face and flange
features.
Thread Feature Create
This sample demonstrates the creation of a thread feature. It creates a
cylinder in a new part document and creates a thread feature on the
cylinder.
Version
Introduced in version 4
Edge.Application Property
Parent Object: Edge
Description
Edge Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Edge.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
Edge.AttributeSets Property
Parent Object: Edge
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
Edge.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
Edge.CalculateStrokes Method
Parent Object: Edge
Description
Edge Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Method that calculates the set of strokes that approximate all of the edges of the SurfaceBody,
Face or Edge from which the method was called. The Tolerance argument defines the accuracy of
the strokes. The output from this method represents a series of line segments, not connected
polylines.
Syntax
Edge.CalculateStrokes( Tolerance As Double, VertexCount As Long, SegmentCount As Long,
VertexCoordinates() As Double, VertexIndices() As Long )
Parameters
Name Type Description
Tolerance Double
Input Double that defines the accuracy of the strokes. This is a "chord
height" tolerance. This is the maximum distance the stroke can be
from the actual curve.
VertexCount Long
Output Long that returns the number of vertices that were generated
for the strokes. This is the number of vertices that will be returned by
the VertexCoordinates argument.
SegmentCount Long
Output Long that returns the number of line segments represented by
the strokes.
VertexCoordinates Double Output array of Doubles that contains the coordinates of the vertices.
VertexIndices Long
Output array of Longs that are used to index into the vertex
coordinates array. These indices provide the information that defines
how the vertices are connected to create the strokes.
Version
Introduced in version 5.3
Edge.CalculateStrokesWithOptions Method
Parent Object: Edge
Description
Method that creates a new set of strokes within the specified conditions.
Syntax
Edge.CalculateStrokesWithOptions( ChordalTolerance As Double, Options As
NameValueMap, VertexCount As Long, VertexCoordinates() As Double, PolylineCount As
Long, PolylineLengths() As Long )
Edge Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Parameters
Name Type Description
ChordalTolerance Double
Input Double that specifies the maximum distance that the
stroke can deviate from the smooth curve. This value is in
centimeters. Smaller values can result in a much greater
number of strokes being returned and will require more
processing time to calculate.
Options NameValueMap
Input NameValueMap that specifies additional tolerances
that can be used to control the output strokes. The supported
options are:
Name: MaxSideLength, Value: Defines the maximum side
of any stroke in the polyline. A value of 0, or not supplying
this value indicates that no maximum length is specified
Name: MaxNormalDeviation, Value: Defines the maximum
deviation between adjacent vertex normals. This value is the
maximum angle allowed between normals and is input as
radians. A value of 0, or not supplying this value indicates
that no normal deviation is supplied.
VertexCount Long
Output Long that specifies the number of vertices used to
define all of the output strokes.
VertexCoordinates Double
Output array of Doubles that contains the coordinate
locations of the vertices. The values are defined in x, y, z
order within the array and represent coordinates within the
model space of the stroked object.
PolylineCount Long
Output Long that specifies the number of polylines that the
strokes represent.
PolylineLengths Long
Output array of Longs that specifies the number of vertices
that are used to define each polyline.
Version
Introduced in version 2017
Edge.EdgeUses Property
Parent Object: Edge
Description
Gets the that reference this Edge.
Edge Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Syntax
Edge.EdgeUses() As EdgeUses
Property Value
This is a read only property whose value is an EdgeUses.
Version
Introduced in version 4
Edge.Evaluator Property
Parent Object: Edge
Description
Gets the CurveEvaluator for this Edge.
Syntax
Edge.Evaluator() As CurveEvaluator
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 4
Edge.Faces Property
Parent Object: Edge
Description
Property that returns the that this Edge is referenced from.
Edge Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Syntax
Edge.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 4
Edge.Geometry Property
Parent Object: Edge
Description
Property that returns the underlying geometry of the edge (e.g. Arc2D, Circle, Cone etc.)
Syntax
Edge.Geometry() As Object
Property Value
This is a read only property whose value is an Object.
Samples
Name Description
Create sheet
metal face and
fold features
This sample demonstrates the creation of sheet metal face and fold features.
Create sheet
metal rip
feature
This sample demonstrates the creation of a rip sheet metal feature.
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Edge Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Version
Introduced in version 6
Edge.GeometryForm Property
Parent Object: Edge
Description
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
Syntax
Edge.GeometryForm() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
Edge.GeometryType Property
Parent Object: Edge
Description
Get the curve type of the curve that will be returned from the Geometry property.
Syntax
Edge.GeometryType() As CurveTypeEnum
Property Value
This is a read only property whose value is a CurveTypeEnum.
Edge Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Samples
Name Description
Window
Selection
This sample demonstrates using the selection events to window-select multiple
edges. Selection is dependent on events and VB only supports events within a
class module.
Tapered Surface
Using Offset
Curve and
Ruled Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 2008
Edge.GetClosestPointTo Method
Parent Object: Edge
Description
Method that returns a point on the edge that is closest to the input point. A single point is returned
even if multiple equidistant points are found. To get the u parameter of the returned point on the
edge, use Edge.Evaluator.GetParamAtPoint method.
Syntax
Edge.GetClosestPointTo( InputPoint As Point ) As Point
Parameters
Name Type Description
InputPoint Point
Point object that specifies the point for which the closest point on the edge is to
be located. If the input point lies on the Edge, the coordinates of the input point
are returned.
Version
Introduced in version 11
Edge Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Edge.GetExistingStrokes Method
Parent Object: Edge
Description
Method that returns the specified set of strokes from the SurfaceBody, Face or Edge the method
was called from. Existing strokes are stored to single-precision floating point accuracy. This is
typically adequate accuracy for display purposes. If a more accurate result is required you can use
the CalculateStrokes method, which will calculate new strokes to a given tolerance at doubleprecision
accuracy. If you are using this method within Apprentice, you can use the
DisplayAffinity property to optimize Apprentice for access to strokes. Setting this property to
True before you begin to traverse an assembly notifies Apprentice not to load any B-rep entities.
Syntax
Edge.GetExistingStrokes( ToleranceIndex As Double, VertexCount As Long,
VertexCoordinates() As Double, PolylineCount As Long, PolylineLengths() As Long )
Parameters
Name Type Description
ToleranceIndex Double
Input Double that serves as an index into which set of existing strokes
you want to retrieve. If the input tolerance does not match an existing
set an error will occur. The tolerances for existing strokes can be
obtained using the GetExistingStrokeTolerances method.
VertexCount Long
Output Long that returns the number of vertices that were generated
for the strokes. This is the number of vertices will be returned by the
VertexCoordinates argument.
VertexCoordinates Double Output array of Doubles that contains the coordinates of the vertices.
PolylineCount Long
Output Long that specifies the number of polylines that are
represented by the strokes.
PolylineLengths Long
Output array of Longs that specifies the number of vertices that are
used for each polyline.
Version
Introduced in version 5.3
Edge.GetExistingStrokeTolerances Method
Parent Object: Edge
Edge Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Description
Method that gets the tolerances that were used to calculate the existing sets of display strokes.
These can be used to determine if any existing strokes have been calculated within your desired
accuracy. The tolerance value is also used as an index to specify which set of existing strokes to
retrieve when using the GetExistingStrokes method. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize Apprentice for access to strokes.
Setting this property to True before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
Syntax
Edge.GetExistingStrokeTolerances( ToleranceCount As Long, ExistingTolerances() As
Double )
Parameters
Name Type Description
ToleranceCount Long Output Long that specifies the number of existing stroke sets.
ExistingTolerances Double
Output array of Doubles that contains the tolerances that were used to
compute the existing sets of display strokes.
Version
Introduced in version 5.3
Edge.GetReferenceKey Method
Parent Object: Edge
Description
Method that generates and returns the reference key for this entity.
Syntax
Edge.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To
obtain the entity at a later time using the reference key you use the BindKeyToObject method of
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 5
Edge.GetSourceEdge Method
Parent Object: Edge
Description
Method that gets the source edge that has been overridden by this edge. The method returns
Nothing if this edge is not an override. An error is returned if this method is called on an edge in a
part.
Syntax
Edge.GetSourceEdge( [GetLeafSource] As Boolean ) As Edge
Parameters
Name Type Description
GetLeafSource Boolean
Optional input Boolean that specifies whether to get the 'leaf' source
edge in the case where there are multiple levels of override. If specified
to be False, the method returns the next level override edge. If not
specified, the argument defaults to True indicating that the leaf source
will be returned.
This is an optional argument whose default value is True.
Edge Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Version
Introduced in version 10
Edge.IsParamReversed Property
Parent Object: Edge
Description
Gets whether the parameterization of the geometry obtained from the Geometry property is
aligned or opposed to the topological sense of this Edge.
Syntax
Edge.IsParamReversed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
Edge.IsTolerant Property
Parent Object: Edge
Description
Indicates if this Edge is using tolerant modeling to allow a non-exact model.
Syntax
Edge.IsTolerant() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Edge Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Version
Introduced in version 2011
Edge.Parent Property
Parent Object: Edge
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
Edge.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 5
Edge.PointOnEdge Property
Parent Object: Edge
Description
Property that returns a characteristic somewhere in the middle of the Edge.
Syntax
Edge.PointOnEdge() As Point
Property Value
This is a read only property whose value is a Point.
Edge Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Version
Introduced in version 9
Edge.StartVertex Property
Parent Object: Edge
Description
Gets the Vertex referenced at the start of this Edge.
Syntax
Edge.StartVertex() As Vertex
Property Value
This is a read only property whose value is a Vertex.
Samples
Name Description
Edit width
extent of an
existing flange
feature
This sample demonstrates editing the width extent of an existing flange feature.
This expects an existing sheet metal document that contains a flange feature that
contains for physical flanges. It changes the type of width extent for each of the
physical flanges. The result from the FlangeWidthsCreation sample can be used
as the document to run this macro in.
Creating flange
features
Demonstrates creating flange features of various width extents. This creates a
new document, creates a face feature and adds a flange feature on four edges.
Finding Bend
Extent
(Tangent)
Edges
This sample demonstrates how to retrieve the bend extent edges (a.k.a. tangent
edges) associated with the selected bend edge on a flat pattern.
Sketch Add
Oriented
This sample demonstrates the creation of a sketch using the
Sketches.AddWithOrientation method.
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Edge Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Version
Introduced in version 4
Edge.StopVertex Property
Parent Object: Edge
Description
Gets the Vertex referenced at the end of this Edge.
Syntax
Edge.StopVertex() As Vertex
Property Value
This is a read only property whose value is a Vertex.
Samples
Name Description
Edit width
extent of an
existing flange
feature
This sample demonstrates editing the width extent of an existing flange feature.
This expects an existing sheet metal document that contains a flange feature that
contains for physical flanges. It changes the type of width extent for each of the
physical flanges. The result from the FlangeWidthsCreation sample can be used
as the document to run this macro in.
Creating flange
features
Demonstrates creating flange features of various width extents. This creates a
new document, creates a face feature and adds a flange feature on four edges.
Finding Bend
Extent
(Tangent) Edges
This sample demonstrates how to retrieve the bend extent edges (a.k.a. tangent
edges) associated with the selected bend edge on a flat pattern.
Tapered Surface
Using Offset
Curve and
Ruled Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
Edge Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Edge.TangentiallyConnectedEdges Property
Parent Object: Edge
Description
Property that returns an that contains the input edge and all tangentially connected edges. The
CollectionType of the output EdgeCollection is set to kTangentiallyConnected.
Syntax
Edge.TangentiallyConnectedEdges() As EdgeCollection
Property Value
This is a read only property whose value is an EdgeCollection.
Version
Introduced in version 5.3
Edge.Tolerance Property
Parent Object: Edge
Description
Returns the tolerance being used for modeling calculations and this Edge.
Syntax
Edge.Tolerance() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2011
Edge Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Edge.TransientKey Property
Parent Object: Edge
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
Edge.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
Edge.Type Property
Parent Object: Edge
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Edge.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
Edge Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
Edge.Wire Property
Parent Object: Edge
Description
Get the Wire containing this Edge. Returns Nothing if this Edge does not belong to a Wire.
Syntax
Edge.Wire() As Wire
Property Value
This is a read only property whose value is a Wire.
Version
Introduced in version 2008
Edge Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62F2.htm 16/06/2025
EdgeCollection Object
Derived from: ObjectCollection Object
Description
The EdgeCollection object provides access to all of the and EdgeCollection objects in a collection
and provides methods to add Edge and EdgeCollection objects to the collection.
Methods
Name Description
Add Adds an object to the generic collection.
Clear Removes all objects from the generic collection.
Remove Method that removes the specified object from the generic collection.
RemoveByObject Method that removes the specified object from the generic object collection.
Properties
Name Description
CollectionType
Property that returns how the edge collection was constructed. Valid returns are
kAllConcave, kAllConvex, kTangentiallyConnected, and kUndefined. This
property is set when the EdgeCollection object is originally created. When the
ConcaveEdges property of the SurfaceBody object is used, it is set to
kAllConcave. When the ConvexEdges property of the SurfaceBody object is
used, it is set to kAllConvex. When the TangentiallyConnectedEdges property of
the Edge object is used, it is set to kTangentiallyConnected. When it is created
using the CreateEdgeCollection method of the TransientObjects it is set to
kUndefined. If an EdgeCollection has a collection type other than kUndefined
and the contents are changed by adding or removing items from the collection,
the CollectionType will be reset to kUndefined.
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BendDefinition.Edges, ChamferDefinition.ChamferedEdges, ContourFlangeDefinition.Edges,
CornerChamferDefinition.CornerEdges, CornerDefinition.Edges, CornerRoundEdgeSet.Edges,
CosmeticWeldDefinition.Edges, DerivedAssemblyDefinition.GetHolePatchingOptions,
Edge.TangentiallyConnectedEdges, EdgeProxy.TangentiallyConnectedEdges,
FaceDraftDefinition.FixedEdges, FilletConstantRadiusEdgeSet.Edges,
FilletRadiusEdgeSet.Edges, FilletVariableRadiusEdgeSet.Edges, FlangeDefinition.Edges,
HemDefinition.Edges, PartialChamferEdge.Edge, SurfaceBody.ConcaveEdges,
SurfaceBody.ConvexEdges, SurfaceBodyProxy.ConcaveEdges, SurfaceBodyProxy.ConvexEdges,
EdgeCollection Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
TransientObjects.CreateEdgeCollection, UnwrapDefinition.LinearResult,
UnwrapDefinition.RigidResult
Samples
Name Description
Delete Face, Boundary Patch and
Stitch features
Demonstrates creating Face, Boundary Patch and Stitch
features.
Create sheet metal rip feature
This sample demonstrates the creation of a rip sheet metal
feature.
Create sheet metal face and flange
features
This sample demonstrates the creation of sheet metal face
and flange features.
Version
Introduced in version 5.3
EdgeCollection.Add Method
Parent Object: EdgeCollection
Description
Adds an object to the generic collection.
Syntax
EdgeCollection.Add( Object As Object )
Parameters
Name Type Description
Object Object Input Object to add to the collection.
Samples
Name Description
Delete Face,
Boundary Patch and
Stitch features
Demonstrates creating Face, Boundary Patch and Stitch features.
Fillet Feature
(Complex)
This sample demonstrates creating a complex fillet. The result in this case
has several different constant radii fillets and two edges that use variable
radius, with one of these having a different radius defined along the edge.
EdgeCollection Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
Creating flange
features
Demonstrates creating flange features of various width extents. This
creates a new document, creates a face feature and adds a flange feature on
four edges.
Version
Introduced in version 5.3
EdgeCollection.Clear Method
Parent Object: EdgeCollection
Description
Removes all objects from the generic collection.
Syntax
EdgeCollection.Clear()
Version
Introduced in version 2009
EdgeCollection.CollectionType Property
Parent Object: EdgeCollection
Description
Property that returns how the edge collection was constructed. Valid returns are kAllConcave,
kAllConvex, kTangentiallyConnected, and kUndefined. This property is set when the
EdgeCollection object is originally created. When the ConcaveEdges property of the SurfaceBody
object is used, it is set to kAllConcave. When the ConvexEdges property of the SurfaceBody
object is used, it is set to kAllConvex. When the TangentiallyConnectedEdges property of the
Edge object is used, it is set to kTangentiallyConnected. When it is created using the
CreateEdgeCollection method of the TransientObjects it is set to kUndefined. If an
EdgeCollection has a collection type other than kUndefined and the contents are changed by
adding or removing items from the collection, the CollectionType will be reset to kUndefined.
Syntax
EdgeCollection.CollectionType() As EdgeCollectionEnum
EdgeCollection Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
Property Value
This is a read only property whose value is an EdgeCollectionEnum.
Version
Introduced in version 5.3
EdgeCollection.Count Property
Parent Object: EdgeCollection
Description
Property that returns the number of items in this collection.
Syntax
EdgeCollection.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
EdgeCollection.Item Property
Parent Object: EdgeCollection
Description
Allows integer-indexed access to items in the collection.
Syntax
EdgeCollection.Item( Index As Long ) As Object
EdgeCollection Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Samples
Name Description
Creating flange
features
Demonstrates creating flange features of various width extents. This creates a
new document, creates a face feature and adds a flange feature on four edges.
Version
Introduced in version 5.3
EdgeCollection.Remove Method
Parent Object: EdgeCollection
Description
Method that removes the specified object from the generic collection.
Syntax
EdgeCollection.Remove( Index As Long )
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to remove.
Version
Introduced in version 5.3
EdgeCollection Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
EdgeCollection.RemoveByObject Method
Parent Object: EdgeCollection
Description
Method that removes the specified object from the generic object collection.
Syntax
EdgeCollection.RemoveByObject( Object As Object )
Parameters
Name Type Description
Object Object Input Object to remove.
Version
Introduced in version 7
EdgeCollection.Type Property
Parent Object: EdgeCollection
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeCollection.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
EdgeCollection Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF97.htm 16/06/2025
EdgeDefinition Object
Description
The EdgeDefinition represents a transient definition of an Edge object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
AssociativeID
Gets and sets the associate ID of this edge. This ID will be transferred
to the corresponding edge when this SurfaceBodyDefinition is used to
create a SurfaceBody. It is used by Inventor as the identifier for the
edge and is used for tracking this geometry f.
EndVertex
Gets and sets the end vertex of the edge. This can be Nothing where
no end vertex is specifically defined.
FaceOne
Gets and sets the associated FaceDefinition object. This is used in two
cases. The first case is where the edge is being defined by a parameter
space curve and this face defines the parameter space of the curve
provided through the ParameterSpaceCurveOne pro.
FaceTwo
Gets and sets the associated FaceDefinition object. This is used in two
cases. The first case is where the edge is being defined by a parameter
space curve and this face defines the parameter space of the curve
provided through the ParameterSpaceCurveTwo pro.
IsParamReversed
Gets and sets if the orientation of this EdgeUse is in the same
direction or not relative to the associated EdgeDefinition object.
ModelSpaceCurve
Gets and sets the definition of the edge in model space. This can be
Nothing in the case where no model space geometry is specified for
this edge.
ParameterSpaceCurveOne
Gets and sets the definition of the edge in parameter space. If this is
provided then the FaceOne property must also be set to define the
parameter space this curve is defined within. This can be Nothing in
the case where no parameter space curve is defined f.
ParameterSpaceCurveTwo
Gets and sets the definition of the edge in parameter space. If this is
provided then the FaceTwo property must also be set to define the
parameter space this curve is defined within. This can be Nothing in
the case where no parameter space curve is defined f.
StartVertex
Gets and sets the starting vertex of the edge. This can be Nothing
where no start vertex is specifically defined.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeDefinitions.Add, EdgeDefinitions.Item, EdgeUseDefinition.EdgeDefinition
EdgeDefinition Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Samples
Name Description
Transient solid
body creation
The following sample demonstrates the creation of a transient solid block
body. The newly created body is then displayed using client graphics in a part.
Version
Introduced in version 2011
EdgeDefinition.Application Property
Parent Object: EdgeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeDefinition.AssociativeID Property
Parent Object: EdgeDefinition
Description
Gets and sets the associate ID of this edge. This ID will be transferred to the corresponding edge
when this SurfaceBodyDefinition is used to create a SurfaceBody. It is used by Inventor as the
identifier for the edge and is used for tracking this geometry f.
EdgeDefinition Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Syntax
EdgeDefinition.AssociativeID() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
EdgeDefinition.EndVertex Property
Parent Object: EdgeDefinition
Description
Gets and sets the end vertex of the edge. This can be Nothing where no end vertex is specifically
defined.
Syntax
EdgeDefinition.EndVertex() As VertexDefinition
Property Value
This is a read/write property whose value is a VertexDefinition.
Version
Introduced in version 2011
EdgeDefinition.FaceOne Property
Parent Object: EdgeDefinition
Description
Gets and sets the associated FaceDefinition object. This is used in two cases. The first case is
where the edge is being defined by a parameter space curve and this face defines the parameter
space of the curve provided through the ParameterSpaceCurveOne pro.
EdgeDefinition Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Syntax
EdgeDefinition.FaceOne() As FaceDefinition
Property Value
This is a read/write property whose value is a FaceDefinition.
Version
Introduced in version 2011
EdgeDefinition.FaceTwo Property
Parent Object: EdgeDefinition
Description
Gets and sets the associated FaceDefinition object. This is used in two cases. The first case is
where the edge is being defined by a parameter space curve and this face defines the parameter
space of the curve provided through the ParameterSpaceCurveTwo pro.
Syntax
EdgeDefinition.FaceTwo() As FaceDefinition
Property Value
This is a read/write property whose value is a FaceDefinition.
Version
Introduced in version 2011
EdgeDefinition.IsParamReversed Property
Parent Object: EdgeDefinition
Description
Gets and sets if the orientation of this EdgeUse is in the same direction or not relative to the
associated EdgeDefinition object.
EdgeDefinition Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Syntax
EdgeDefinition.IsParamReversed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
EdgeDefinition.ModelSpaceCurve Property
Parent Object: EdgeDefinition
Description
Gets and sets the definition of the edge in model space. This can be Nothing in the case where no
model space geometry is specified for this edge.
Syntax
EdgeDefinition.ModelSpaceCurve() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2011
EdgeDefinition.ParameterSpaceCurveOne
Property
Parent Object: EdgeDefinition
Description
EdgeDefinition Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Gets and sets the definition of the edge in parameter space. If this is provided then the FaceOne
property must also be set to define the parameter space this curve is defined within. This can be
Nothing in the case where no parameter space curve is defined f.
Syntax
EdgeDefinition.ParameterSpaceCurveOne() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2011
EdgeDefinition.ParameterSpaceCurveTwo
Property
Parent Object: EdgeDefinition
Description
Gets and sets the definition of the edge in parameter space. If this is provided then the FaceTwo
property must also be set to define the parameter space this curve is defined within. This can be
Nothing in the case where no parameter space curve is defined f.
Syntax
EdgeDefinition.ParameterSpaceCurveTwo() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2011
EdgeDefinition.StartVertex Property
Parent Object: EdgeDefinition
EdgeDefinition Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
Description
Gets and sets the starting vertex of the edge. This can be Nothing where no start vertex is
specifically defined.
Syntax
EdgeDefinition.StartVertex() As VertexDefinition
Property Value
This is a read/write property whose value is a VertexDefinition.
Version
Introduced in version 2011
EdgeDefinition.Type Property
Parent Object: EdgeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeDefinition Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE793.htm 16/06/2025
EdgeLoopDefinition Object
Description
The FaceDefinition represents a transient definition of a Face object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
EdgeUseDefinitions
Property that returns the collection of EdgeUseDefinition objects associated
with this EdgeLoopDefinition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeLoopDefinitions.Add, EdgeLoopDefinitions.Item
Samples
Name Description
Transient solid
body creation
The following sample demonstrates the creation of a transient solid block body.
The newly created body is then displayed using client graphics in a part.
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
EdgeLoopDefinition.Application Property
Parent Object: EdgeLoopDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
EdgeLoopDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh463E.htm 16/06/2025
Syntax
EdgeLoopDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeLoopDefinition.EdgeUseDefinitions
Property
Parent Object: EdgeLoopDefinition
Description
Property that returns the collection of EdgeUseDefinition objects associated with this
EdgeLoopDefinition object.
Syntax
EdgeLoopDefinition.EdgeUseDefinitions() As EdgeUseDefinitions
Property Value
This is a read only property whose value is an EdgeUseDefinitions.
Samples
Name Description
Transient solid
body creation
The following sample demonstrates the creation of a transient solid block body.
The newly created body is then displayed using client graphics in a part.
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
EdgeLoopDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh463E.htm 16/06/2025
EdgeLoopDefinition.Type Property
Parent Object: EdgeLoopDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeLoopDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeLoopDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh463E.htm 16/06/2025
EdgeDefinitions Object
Description
The EdgeDefinitions collection provides access to existing EdgeDefinition objects and allows
creation of new EdgeDefinition objects.
Methods
Name Description
Add Method that creates a new EdgeDefinition within the associated SurfaceBodyDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Property that returns an item from the collection. The index of the first item in the
collection is 1.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SurfaceBodyDefinition.EdgeDefinitions
Version
Introduced in version 2011
EdgeDefinitions.Add Method
Parent Object: EdgeDefinitions
Description
Method that creates a new EdgeDefinition within the associated SurfaceBodyDefinition.
EdgeDefinitions Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBD.htm 16/06/2025
Syntax
EdgeDefinitions.Add( StartVertex As VertexDefinition, EndVertex As VertexDefinition,
[ModelSpaceCurve] As Variant, [ParameterSpaceCurveOne] As Variant, [FaceOne] As Variant,
[ParameterSpaceCurveTwo] As Variant, [FaceTwo] As Variant ) As EdgeDefinition
Parameters
Name Type Description
StartVertex VertexDefinition
Optional input VertexDefinition object that defines
the start of the edge.
EndVertex VertexDefinition
Optional input VertexDefinition object that defines
the end of the edge.
ModelSpaceCurve Variant
Optional input transient geometry curve object that
defines the shape of this edge using 3d geometry in
model space. Valid input is Arc3d, BsplineCurve,
Circle, EllipseFull, EllipticalArc, LineSegment and
Polyline3D.
This is an optional argument whose default value is
null.
ParameterSpaceCurveOne Variant
Optional input transient geometry curve object that
defines the shape of this edge using 2d geometry in
the parametric space of the surface defined by the
FaceOne argument. Valid input is Arc2d,
BsplineCurve2d, Circle2d, EllipseFull2d,
EllipticalArc2d, LineSegment2d and Polyline2D.
This is an optional argument whose default value is
null.
FaceOne Variant
Optional input FaceDefinition object that either
defines the parametric space that the curve provided
in ParameterSpaceCurveOne argument is defined
within or it defines the first of two faces to be
intersected to calculate the edge.
This is an optional argument whose default value is
null.
ParameterSpaceCurveTwo Variant
Optional input transient geometry curve object that
defines the shape of this edge using 2d geometry in
the parametric space of the surface defined by the
FaceOne argument. Valid input is Arc2d,
BsplineCurve2d, Circle2d, EllipseFull2d,
EllipticalArc2d, LineSegment2d and Polyline2D.
This is an optional argument whose default value is
null.
FaceTwo Variant Optional input FaceDefinition object that either
defines the parametric space that the curve provided
in ParameterSpaceCurveTwo argument is defined
EdgeDefinitions Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBD.htm 16/06/2025
within or it defines the second of two faces to be
intersected to calculate the edge.
This is an optional argument whose default value is
null.
Remarks
Various combinations of the input arguments can be used to define the edge in different ways. The
various valid combinations are described below: * If you know the geometry of the edge as a 3d
curve in model space then just the ModelSpaceCurve argument can be supplied. * If you know the
geometry of the edge in parametric space of one of the faces then you can supply the
ParameterSpaceCurveOne that defines the 2d parameter space curve and the FaceOne argument
that defines the parameter space that curve is defined within. Optionally you can also supply the
ParameterSpaceCurveTwo and FaceTwo arguments to define the edge in parametric space of the
second face too. * You can also define the edge as the intersection of two faces by supplying only
the FaceOne and FaceTwo arguments.
Version
Introduced in version 2011
EdgeDefinitions.Application Property
Parent Object: EdgeDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeDefinitions Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBD.htm 16/06/2025
EdgeDefinitions.Count Property
Parent Object: EdgeDefinitions
Description
Property that returns the number of items in this collection.
Syntax
EdgeDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
EdgeDefinitions.Item Property
Parent Object: EdgeDefinitions
Description
Property that returns an item from the collection. The index of the first item in the collection is 1.
Syntax
EdgeDefinitions.Item( Index As Long ) As EdgeDefinition
Property Value
This is a read only property whose value is an EdgeDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the EdgeDefinition object within the collection to
return.
EdgeDefinitions Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBD.htm 16/06/2025
Version
Introduced in version 2011
EdgeDefinitions.Type Property
Parent Object: EdgeDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeDefinitions Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBD.htm 16/06/2025
EdgeLoop Object
Description
The EdgeLoop object. See the article in the overviews section.
Methods
Name Description
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
Edges Gets the referenced by this EdgeLoop.
EdgeUses Gets the referenced by this EdgeLoop.
Face Gets the containing this EdgeLoop.
IsOuterEdgeLoop
Gets whether this EdgeLoop is an external loop, or a loop that encloses
material as opposed to a void.
Parent
Property that returns the parent object from whom this object can logically be
reached.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
TransientKey
Property that obtains an ID key that can be used to bind back to the live object.
This transient key is only valid as long as the document state has not changed.
For more information, see the ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeLoopProxy.NativeObject, EdgeLoops.Item, EdgeUse.EdgeLoop, EdgeUseProxy.EdgeLoop
Derived Classes
EdgeLoopProxy
Samples
EdgeLoop Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
Name Description
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeLoop.Application Property
Parent Object: EdgeLoop
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeLoop.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
EdgeLoop.AttributeSets Property
Parent Object: EdgeLoop
Description
Property that returns the AttributeSets collection object associated with this object.
EdgeLoop Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
Syntax
EdgeLoop.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
EdgeLoop.Edges Property
Parent Object: EdgeLoop
Description
Gets the referenced by this EdgeLoop.
Syntax
EdgeLoop.Edges() As Edges
Property Value
This is a read only property whose value is an Edges.
Version
Introduced in version 4
EdgeLoop.EdgeUses Property
Parent Object: EdgeLoop
Description
Gets the referenced by this EdgeLoop.
EdgeLoop Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
Syntax
EdgeLoop.EdgeUses() As EdgeUses
Property Value
This is a read only property whose value is an EdgeUses.
Samples
Name Description
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeLoop.Face Property
Parent Object: EdgeLoop
Description
Gets the containing this EdgeLoop.
Syntax
EdgeLoop.Face() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 4
EdgeLoop Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
EdgeLoop.GetReferenceKey Method
Parent Object: EdgeLoop
Description
Method that generates and returns the reference key for this entity.
Syntax
EdgeLoop.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To
obtain the entity at a later time using the reference key you use the BindKeyToObject method of
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 5
EdgeLoop.IsOuterEdgeLoop Property
Parent Object: EdgeLoop
Description
Gets whether this EdgeLoop is an external loop, or a loop that encloses material as opposed to a
void.
EdgeLoop Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
Syntax
EdgeLoop.IsOuterEdgeLoop() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Samples
Name Description
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeLoop.Parent Property
Parent Object: EdgeLoop
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
EdgeLoop.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 5
EdgeLoop Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
EdgeLoop.RangeBox Property
Parent Object: EdgeLoop
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
EdgeLoop.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 4
EdgeLoop.TransientKey Property
Parent Object: EdgeLoop
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
EdgeLoop.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
EdgeLoop Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
EdgeLoop.Type Property
Parent Object: EdgeLoop
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeLoop.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EdgeLoop Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh29AD.htm 16/06/2025
EdgeLoopDefinitions Object
Description
The EdgeLoopsDefinitions collection provides access to existing EdgeLoopDefinition objects and
allows creation of new EdgeLoopDefinition objects.
Methods
Name Description
Add
Method that creates a new EdgeLoopDefinition within the associated
SurfaceBodyDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Property that returns an item from the collection. The index of the first item in the
collection is 1.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
FaceDefinition.EdgeLoopDefinitions
Version
Introduced in version 2011
EdgeLoopDefinitions.Add Method
Parent Object: EdgeLoopDefinitions
Description
Method that creates a new EdgeLoopDefinition within the associated SurfaceBodyDefinition.
EdgeLoopDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7194.htm 16/06/2025
Syntax
EdgeLoopDefinitions.Add() As EdgeLoopDefinition
Version
Introduced in version 2011
EdgeLoopDefinitions.Application Property
Parent Object: EdgeLoopDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeLoopDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeLoopDefinitions.Count Property
Parent Object: EdgeLoopDefinitions
Description
Property that returns the number of items in this collection.
Syntax
EdgeLoopDefinitions.Count() As Long
EdgeLoopDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7194.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
EdgeLoopDefinitions.Item Property
Parent Object: EdgeLoopDefinitions
Description
Property that returns an item from the collection. The index of the first item in the collection is 1.
Syntax
EdgeLoopDefinitions.Item( Index As Long ) As EdgeLoopDefinition
Property Value
This is a read only property whose value is an EdgeLoopDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the EdgeLoopDefinition object within the collection
to return.
Version
Introduced in version 2011
EdgeLoopDefinitions.Type Property
Parent Object: EdgeLoopDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
EdgeLoopDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7194.htm 16/06/2025
Syntax
EdgeLoopDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeLoopDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7194.htm 16/06/2025
EdgeLoopProxy Object
Derived from: EdgeLoop Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
Edges Gets the referenced by this EdgeLoop.
EdgeUses Gets the referenced by this EdgeLoop.
Face Gets the containing this EdgeLoop.
IsOuterEdgeLoop
Gets whether this EdgeLoop is an external loop, or a loop that encloses
material as opposed to a void.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent
Property that returns the parent object from whom this object can logically
be reached.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
TransientKey
Property that obtains an ID key that can be used to bind back to the live
object. This transient key is only valid as long as the document state has
not changed. For more information, see the ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
EdgeLoopProxy Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
EdgeLoopProxy.Application Property
Parent Object: EdgeLoopProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeLoopProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
EdgeLoopProxy.AttributeSets Property
Parent Object: EdgeLoopProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EdgeLoopProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
EdgeLoopProxy Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
EdgeLoopProxy.ContainingOccurrence
Property
Parent Object: EdgeLoopProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
EdgeLoopProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
EdgeLoopProxy.Edges Property
Parent Object: EdgeLoopProxy
Description
Gets the referenced by this EdgeLoop.
Syntax
EdgeLoopProxy.Edges() As Edges
Property Value
This is a read only property whose value is an Edges.
Version
Introduced in version 4
EdgeLoopProxy Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
EdgeLoopProxy.EdgeUses Property
Parent Object: EdgeLoopProxy
Description
Gets the referenced by this EdgeLoop.
Syntax
EdgeLoopProxy.EdgeUses() As EdgeUses
Property Value
This is a read only property whose value is an EdgeUses.
Version
Introduced in version 4
EdgeLoopProxy.Face Property
Parent Object: EdgeLoopProxy
Description
Gets the containing this EdgeLoop.
Syntax
EdgeLoopProxy.Face() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 4
EdgeLoopProxy.GetReferenceKey Method
EdgeLoopProxy Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
Parent Object: EdgeLoopProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EdgeLoopProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EdgeLoopProxy.IsOuterEdgeLoop Property
Parent Object: EdgeLoopProxy
Description
Gets whether this EdgeLoop is an external loop, or a loop that encloses material as opposed to a
void.
Syntax
EdgeLoopProxy.IsOuterEdgeLoop() As Boolean
Property Value
This is a read only property whose value is a Boolean.
EdgeLoopProxy Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
Version
Introduced in version 4
EdgeLoopProxy.NativeObject Property
Parent Object: EdgeLoopProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EdgeLoopProxy.NativeObject() As EdgeLoop
Property Value
This is a read only property whose value is an EdgeLoop.
Version
Introduced in version 4
EdgeLoopProxy.Parent Property
Parent Object: EdgeLoopProxy
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
EdgeLoopProxy.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
EdgeLoopProxy Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
Version
Introduced in version 5
EdgeLoopProxy.RangeBox Property
Parent Object: EdgeLoopProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
EdgeLoopProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 4
EdgeLoopProxy.TransientKey Property
Parent Object: EdgeLoopProxy
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
EdgeLoopProxy.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
EdgeLoopProxy Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
Version
Introduced in version 9
EdgeLoopProxy.Type Property
Parent Object: EdgeLoopProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeLoopProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EdgeLoopProxy Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8A3C.htm 16/06/2025
EdgeLoops Object
Description
The EdgeLoops object is a collection of objects. See the article in the overviews section.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to objects in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Face.EdgeLoops, FaceProxy.EdgeLoops
Version
Introduced in version 4
EdgeLoops.Count Property
Parent Object: EdgeLoops
Description
Property that returns the number of items in this collection.
Syntax
EdgeLoops.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
EdgeLoops Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA3BF.htm 16/06/2025
EdgeLoops.Item Property
Parent Object: EdgeLoops
Description
Allows integer-indexed access to objects in the collection.
Syntax
EdgeLoops.Item( Index As Long ) As EdgeLoop
Property Value
This is a read only property whose value is an EdgeLoop.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 4
EdgeLoops.Type Property
Parent Object: EdgeLoops
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeLoops.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
EdgeLoops Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA3BF.htm 16/06/2025
Version
Introduced in version 4
EdgeLoops Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA3BF.htm 16/06/2025
EdgeProxy Object
Derived from: Edge Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
CalculateStrokes
Method that calculates the set of strokes that approximate all of the
edges of the SurfaceBody, Face or Edge from which the method
was called. The Tolerance argument defines the accuracy of the
strokes. The output from this method represents a series of line
segments, not connected polylines.
CalculateStrokesWithOptions
Method that creates a new set of strokes within the specified
conditions.
GetClosestPointTo
Method that returns a point on the edge that is closest to the input
point. A single point is returned even if multiple equidistant points
are found. To get the u parameter of the returned point on the edge,
use Edge.Evaluator.GetParamAtPoint method.
GetExistingStrokes
Method that returns the specified set of strokes from the
SurfaceBody, Face or Edge the method was called from. Existing
strokes are stored to single-precision floating point accuracy. This
is typically adequate accuracy for display purposes. If a more
accurate result is required you can use the CalculateStrokes
method, which will calculate new strokes to a given tolerance at
double-precision accuracy. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize
Apprentice for access to strokes. Setting this property to True
before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
GetExistingStrokeTolerances
Method that gets the tolerances that were used to calculate the
existing sets of display strokes. These can be used to determine if
any existing strokes have been calculated within your desired
accuracy. The tolerance value is also used as an index to specify
which set of existing strokes to retrieve when using the
GetExistingStrokes method. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize
Apprentice for access to strokes. Setting this property to True
before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSourceEdge
Method that gets the source edge that has been overridden by this
edge. The method returns Nothing if this edge is not an override.
An error is returned if this method is called on an edge in a part.
EdgeProxy Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is
returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native
object is being referenced through. The returned occurrence is the
containing occurrence.
EdgeUses Gets the that reference this Edge.
Evaluator Gets the CurveEvaluator for this Edge.
Faces Property that returns the that this Edge is referenced from.
Geometry
Property that returns the underlying geometry of the edge (e.g.
Arc2D, Circle, Cone etc.)
GeometryForm
Gets the form of the underlying geometry as a combination of one
or more CurveGeometryFormEnum values.
GeometryType
Get the curve type of the curve that will be returned from the
Geometry property.
IsParamReversed
Gets whether the parameterization of the geometry obtained from
the Geometry property is aligned or opposed to the topological
sense of this Edge.
IsTolerant
Indicates if this Edge is using tolerant modeling to allow a nonexact
model.
NativeObject
Gets the object in the context of the definition instead of the
containing assembly.
Parent
Property that returns the parent object from whom this object can
logically be reached.
PointOnEdge
Property that returns a characteristic somewhere in the middle of
the Edge.
StartVertex Gets the Vertex referenced at the start of this Edge.
StopVertex Gets the Vertex referenced at the end of this Edge.
TangentiallyConnectedEdges
Property that returns an that contains the input edge and all
tangentially connected edges. The CollectionType of the output
EdgeCollection is set to kTangentiallyConnected.
Tolerance
Returns the tolerance being used for modeling calculations and this
Edge.
TransientKey
Property that obtains an ID key that can be used to bind back to the
live object. This transient key is only valid as long as the document
state has not changed. For more information, see the
ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Wire
Get the Wire containing this Edge. Returns Nothing if this Edge
does not belong to a Wire.
EdgeProxy Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 4
EdgeProxy.Application Property
Parent Object: EdgeProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
EdgeProxy.AttributeSets Property
Parent Object: EdgeProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EdgeProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
EdgeProxy Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 5
EdgeProxy.CalculateStrokes Method
Parent Object: EdgeProxy
Description
Method that calculates the set of strokes that approximate all of the edges of the SurfaceBody,
Face or Edge from which the method was called. The Tolerance argument defines the accuracy of
the strokes. The output from this method represents a series of line segments, not connected
polylines.
Syntax
EdgeProxy.CalculateStrokes( Tolerance As Double, VertexCount As Long, SegmentCount As
Long, VertexCoordinates() As Double, VertexIndices() As Long )
Parameters
Name Type Description
Tolerance Double
Input Double that defines the accuracy of the strokes. This is a "chord
height" tolerance. This is the maximum distance the stroke can be
from the actual curve.
VertexCount Long
Output Long that returns the number of vertices that were generated
for the strokes. This is the number of vertices that will be returned by
the VertexCoordinates argument.
SegmentCount Long
Output Long that returns the number of line segments represented by
the strokes.
VertexCoordinates Double Output array of Doubles that contains the coordinates of the vertices.
VertexIndices Long
Output array of Longs that are used to index into the vertex
coordinates array. These indices provide the information that defines
how the vertices are connected to create the strokes.
Version
Introduced in version 5.3
EdgeProxy Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
EdgeProxy.CalculateStrokesWithOptions
Method
Parent Object: EdgeProxy
Description
Method that creates a new set of strokes within the specified conditions.
Syntax
EdgeProxy.CalculateStrokesWithOptions( ChordalTolerance As Double, Options As
NameValueMap, VertexCount As Long, VertexCoordinates() As Double, PolylineCount As
Long, PolylineLengths() As Long )
Parameters
Name Type Description
ChordalTolerance Double
Input Double that specifies the maximum distance that the
stroke can deviate from the smooth curve. This value is in
centimeters. Smaller values can result in a much greater
number of strokes being returned and will require more
processing time to calculate.
Options NameValueMap
Input NameValueMap that specifies additional tolerances
that can be used to control the output strokes. The supported
options are:
Name: MaxSideLength, Value: Defines the maximum side
of any stroke in the polyline. A value of 0, or not supplying
this value indicates that no maximum length is specified
Name: MaxNormalDeviation, Value: Defines the maximum
deviation between adjacent vertex normals. This value is the
maximum angle allowed between normals and is input as
radians. A value of 0, or not supplying this value indicates
that no normal deviation is supplied.
VertexCount Long
Output Long that specifies the number of vertices used to
define all of the output strokes.
VertexCoordinates Double
Output array of Doubles that contains the coordinate
locations of the vertices. The values are defined in x, y, z
order within the array and represent coordinates within the
model space of the stroked object.
PolylineCount Long
Output Long that specifies the number of polylines that the
strokes represent.
EdgeProxy Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
PolylineLengths Long Output array of Longs that specifies the number of vertices
that are used to define each polyline.
Version
Introduced in version 2017
EdgeProxy.ContainingOccurrence Property
Parent Object: EdgeProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
EdgeProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
EdgeProxy.EdgeUses Property
Parent Object: EdgeProxy
Description
Gets the that reference this Edge.
Syntax
EdgeProxy.EdgeUses() As EdgeUses
Property Value
This is a read only property whose value is an EdgeUses.
EdgeProxy Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 4
EdgeProxy.Evaluator Property
Parent Object: EdgeProxy
Description
Gets the CurveEvaluator for this Edge.
Syntax
EdgeProxy.Evaluator() As CurveEvaluator
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 4
EdgeProxy.Faces Property
Parent Object: EdgeProxy
Description
Property that returns the that this Edge is referenced from.
Syntax
EdgeProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
EdgeProxy Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 4
EdgeProxy.Geometry Property
Parent Object: EdgeProxy
Description
Property that returns the underlying geometry of the edge (e.g. Arc2D, Circle, Cone etc.)
Syntax
EdgeProxy.Geometry() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EdgeProxy.GeometryForm Property
Parent Object: EdgeProxy
Description
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
Syntax
EdgeProxy.GeometryForm() As Long
Property Value
This is a read only property whose value is a Long.
EdgeProxy Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 4
EdgeProxy.GeometryType Property
Parent Object: EdgeProxy
Description
Get the curve type of the curve that will be returned from the Geometry property.
Syntax
EdgeProxy.GeometryType() As CurveTypeEnum
Property Value
This is a read only property whose value is a CurveTypeEnum.
Version
Introduced in version 2008
EdgeProxy.GetClosestPointTo Method
Parent Object: EdgeProxy
Description
Method that returns a point on the edge that is closest to the input point. A single point is returned
even if multiple equidistant points are found. To get the u parameter of the returned point on the
edge, use Edge.Evaluator.GetParamAtPoint method.
Syntax
EdgeProxy.GetClosestPointTo( InputPoint As Point ) As Point
Parameters
Name Type Description
InputPoint Point
EdgeProxy Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Point object that specifies the point for which the closest point on the edge is to
be located. If the input point lies on the Edge, the coordinates of the input point
are returned.
Version
Introduced in version 11
EdgeProxy.GetExistingStrokes Method
Parent Object: EdgeProxy
Description
Method that returns the specified set of strokes from the SurfaceBody, Face or Edge the method
was called from. Existing strokes are stored to single-precision floating point accuracy. This is
typically adequate accuracy for display purposes. If a more accurate result is required you can use
the CalculateStrokes method, which will calculate new strokes to a given tolerance at doubleprecision
accuracy. If you are using this method within Apprentice, you can use the
DisplayAffinity property to optimize Apprentice for access to strokes. Setting this property to
True before you begin to traverse an assembly notifies Apprentice not to load any B-rep entities.
Syntax
EdgeProxy.GetExistingStrokes( ToleranceIndex As Double, VertexCount As Long,
VertexCoordinates() As Double, PolylineCount As Long, PolylineLengths() As Long )
Parameters
Name Type Description
ToleranceIndex Double
Input Double that serves as an index into which set of existing strokes
you want to retrieve. If the input tolerance does not match an existing
set an error will occur. The tolerances for existing strokes can be
obtained using the GetExistingStrokeTolerances method.
VertexCount Long
Output Long that returns the number of vertices that were generated
for the strokes. This is the number of vertices will be returned by the
VertexCoordinates argument.
VertexCoordinates Double Output array of Doubles that contains the coordinates of the vertices.
PolylineCount Long
Output Long that specifies the number of polylines that are
represented by the strokes.
PolylineLengths Long
Output array of Longs that specifies the number of vertices that are
used for each polyline.
EdgeProxy Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 5.3
EdgeProxy.GetExistingStrokeTolerances
Method
Parent Object: EdgeProxy
Description
Method that gets the tolerances that were used to calculate the existing sets of display strokes.
These can be used to determine if any existing strokes have been calculated within your desired
accuracy. The tolerance value is also used as an index to specify which set of existing strokes to
retrieve when using the GetExistingStrokes method. If you are using this method within
Apprentice, you can use the DisplayAffinity property to optimize Apprentice for access to strokes.
Setting this property to True before you begin to traverse an assembly notifies Apprentice not to
load any B-rep entities.
Syntax
EdgeProxy.GetExistingStrokeTolerances( ToleranceCount As Long, ExistingTolerances() As
Double )
Parameters
Name Type Description
ToleranceCount Long Output Long that specifies the number of existing stroke sets.
ExistingTolerances Double
Output array of Doubles that contains the tolerances that were used to
compute the existing sets of display strokes.
Version
Introduced in version 5.3
EdgeProxy.GetReferenceKey Method
Parent Object: EdgeProxy
Description
Method that generates and returns the reference key for this entity.
EdgeProxy Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Syntax
EdgeProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EdgeProxy.GetSourceEdge Method
Parent Object: EdgeProxy
Description
Method that gets the source edge that has been overridden by this edge. The method returns
Nothing if this edge is not an override. An error is returned if this method is called on an edge in a
part.
Syntax
EdgeProxy.GetSourceEdge( [GetLeafSource] As Boolean ) As Edge
Parameters
Name Type Description
GetLeafSource Boolean
Optional input Boolean that specifies whether to get the 'leaf' source
edge in the case where there are multiple levels of override. If specified
to be False, the method returns the next level override edge. If not
specified, the argument defaults to True indicating that the leaf source
will be returned.
This is an optional argument whose default value is True.
EdgeProxy Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 10
EdgeProxy.IsParamReversed Property
Parent Object: EdgeProxy
Description
Gets whether the parameterization of the geometry obtained from the Geometry property is
aligned or opposed to the topological sense of this Edge.
Syntax
EdgeProxy.IsParamReversed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
EdgeProxy.IsTolerant Property
Parent Object: EdgeProxy
Description
Indicates if this Edge is using tolerant modeling to allow a non-exact model.
Syntax
EdgeProxy.IsTolerant() As Boolean
Property Value
This is a read only property whose value is a Boolean.
EdgeProxy Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 2011
EdgeProxy.NativeObject Property
Parent Object: EdgeProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EdgeProxy.NativeObject() As Edge
Property Value
This is a read only property whose value is an Edge.
Version
Introduced in version 4
EdgeProxy.Parent Property
Parent Object: EdgeProxy
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
EdgeProxy.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
EdgeProxy Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 5
EdgeProxy.PointOnEdge Property
Parent Object: EdgeProxy
Description
Property that returns a characteristic somewhere in the middle of the Edge.
Syntax
EdgeProxy.PointOnEdge() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 9
EdgeProxy.StartVertex Property
Parent Object: EdgeProxy
Description
Gets the Vertex referenced at the start of this Edge.
Syntax
EdgeProxy.StartVertex() As Vertex
Property Value
This is a read only property whose value is a Vertex.
EdgeProxy Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 4
EdgeProxy.StopVertex Property
Parent Object: EdgeProxy
Description
Gets the Vertex referenced at the end of this Edge.
Syntax
EdgeProxy.StopVertex() As Vertex
Property Value
This is a read only property whose value is a Vertex.
Version
Introduced in version 4
EdgeProxy.TangentiallyConnectedEdges
Property
Parent Object: EdgeProxy
Description
Property that returns an that contains the input edge and all tangentially connected edges. The
CollectionType of the output EdgeCollection is set to kTangentiallyConnected.
Syntax
EdgeProxy.TangentiallyConnectedEdges() As EdgeCollection
Property Value
This is a read only property whose value is an EdgeCollection.
EdgeProxy Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 5.3
EdgeProxy.Tolerance Property
Parent Object: EdgeProxy
Description
Returns the tolerance being used for modeling calculations and this Edge.
Syntax
EdgeProxy.Tolerance() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2011
EdgeProxy.TransientKey Property
Parent Object: EdgeProxy
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
EdgeProxy.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
EdgeProxy Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 9
EdgeProxy.Type Property
Parent Object: EdgeProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EdgeProxy.Wire Property
Parent Object: EdgeProxy
Description
Get the Wire containing this Edge. Returns Nothing if this Edge does not belong to a Wire.
Syntax
EdgeProxy.Wire() As Wire
Property Value
This is a read only property whose value is a Wire.
EdgeProxy Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Version
Introduced in version 2008
EdgeProxy Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBAA3.htm 16/06/2025
Edges Object
Description
The Edges object is a collection of objects. See the article in the overviews section.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to objects in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeLoop.Edges, EdgeLoopProxy.Edges, Face.Edges, FaceProxy.Edges, FaceShell.Edges,
FaceShellProxy.Edges, FlatPattern.GetEdgesOfType, FlatPatternPlate.GetBendExtentEdges,
FlatPunchResult.SketchRepresentationEdges, MarkFeature.ResultEdges,
MarkFeatureProxy.ResultEdges, SurfaceBody.Edges, SurfaceBodyProxy.Edges,
ThreadFeature.StartEdge, ThreadFeatureProxy.StartEdge, TransientBRep.ImprintBodies,
Vertex.Edges, VertexProxy.Edges, Wire.Edges
Samples
Name Description
Sketch Edit
Orientation
This sample demonstrates modifying the orientation of a sketch.
Window
Selection
This sample demonstrates using the selection events to window-select multiple
edges. Selection is dependent on events and VB only supports events within a
class module.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder in
a new part document and creates a thread feature on the cylinder.
Version
Introduced in version 4
Edges.Count Property
Parent Object: Edges
Edges Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDB3A.htm 16/06/2025
Description
Property that returns the number of items in this collection.
Syntax
Edges.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
Edges.Item Property
Parent Object: Edges
Description
Allows integer-indexed access to objects in the collection.
Syntax
Edges.Item( Index As Long ) As Edge
Property Value
This is a read only property whose value is an Edge.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Samples
Name Description
Sketch Add
Oriented
This sample demonstrates the creation of a sketch using the
Sketches.AddWithOrientation method.
Edges Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDB3A.htm 16/06/2025
Thread
Feature Create
This sample demonstrates the creation of a thread feature. It creates a cylinder in a
new part document and creates a thread feature on the cylinder.
Version
Introduced in version 4
Edges.Type Property
Parent Object: Edges
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Edges.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
Edges Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDB3A.htm 16/06/2025
EdgeSymbol Object
Description
EdgeSymbol Object.
Methods
Name Description
CopyTo Method that copies the edge symbol to specified sheet.
Delete Method that deletes the EdgeSymbol.
GetReferenceKey
Generate the sequence of bytes, called this object's reference key, which can be
held onto beyond document edits and which will allow the caller to be bound
back to the live object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set
to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
AttributeSets Gets the Attribute Sets collection on this object.
Definition
Read-write property that gets and sets the EdgeSymbolDefinition object associated
with this edge symbol.
Parent Gets the parent object from whom this object can logically be reached.
Position Read-write property that gets and sets the position of the edge symbol on the sheet.
Type Gets the constant that indicates the type of this object.
Accessed From
EdgeSymbol.CopyTo, EdgeSymbolDefinition.Parent, EdgeSymbols.Add, EdgeSymbols.Item
Samples
Name Description
EdgeSymbol Creation
Sample
This sample is to demonstrate how to create a EdgeSymbol in
drawing document.
Version
Introduced in version 2024
EdgeSymbol Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
EdgeSymbol.Application Property
Parent Object: EdgeSymbol
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
EdgeSymbol.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
EdgeSymbol.AttributeSets Property
Parent Object: EdgeSymbol
Description
Gets the Attribute Sets collection on this object.
Syntax
EdgeSymbol.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2024
EdgeSymbol Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
EdgeSymbol.CopyTo Method
Parent Object: EdgeSymbol
Description
Method that copies the edge symbol to specified sheet.
Syntax
EdgeSymbol.CopyTo( TargetSheet As Sheet, [NewName] As Variant, [Position] As Variant ) As
EdgeSymbol
Parameters
Name Type Description
TargetSheet Sheet
NewName Variant
This is an optional argument whose default value is null.
Position Variant
This is an optional argument whose default value is null.
Version
Introduced in version 2024
EdgeSymbol.Definition Property
Parent Object: EdgeSymbol
Description
Read-write property that gets and sets the EdgeSymbolDefinition object associated with this edge
symbol.
Syntax
EdgeSymbol.Definition() As EdgeSymbolDefinition
Property Value
This is a read/write property whose value is an EdgeSymbolDefinition.
EdgeSymbol Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbol.Delete Method
Parent Object: EdgeSymbol
Description
Method that deletes the EdgeSymbol.
Syntax
EdgeSymbol.Delete()
Version
Introduced in version 2024
EdgeSymbol.GetReferenceKey Method
Parent Object: EdgeSymbol
Description
Generate the sequence of bytes, called this object's reference key, which can be held onto beyond
document edits and which will allow the caller to be bound back to the live object.
Syntax
EdgeSymbol.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte
KeyContext Long
This is an optional argument whose default value is 0.
EdgeSymbol Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbol.Parent Property
Parent Object: EdgeSymbol
Description
Gets the parent object from whom this object can logically be reached.
Syntax
EdgeSymbol.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 2024
EdgeSymbol.Position Property
Parent Object: EdgeSymbol
Description
Read-write property that gets and sets the position of the edge symbol on the sheet.
Syntax
EdgeSymbol.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
EdgeSymbol Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbol.Type Property
Parent Object: EdgeSymbol
Description
Gets the constant that indicates the type of this object.
Syntax
EdgeSymbol.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
EdgeSymbol Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF4CD.htm 16/06/2025
EdgeSymbolDefinition Object
Description
EdgeSymbolDefinition Object.
Methods
Name Description
Copy Method that creates a copy of this EdgeSymbolDefinition object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set
to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Edges Read-write property that gets and sets the edges text.
HorizontalValue Read-write property that gets and sets the horizontal value of the EdgeSymbol.
HorizontalValueLower
Read-write property that gets and sets the horizontal value lower of the
EdgeSymbol.
IndicationType Read-write property that gets and sets the indication type of the edge symbol.
Layer Read-write property that gets and sets the layer associated with this object.
Parent Gets the parent object from whom this object can logically be reached.
RangeOfValues Read-write property that gets and sets whether to use range of values.
ReferenceToISO Read-write property that gets and sets whether to reference to ISO 13715.
SidesDefined
Read-write property that gets and sets whether to enable the states of all edges
around the profile of a part with sides clearly defined.
StatesOfAllEdgesAroundProfile
Read-write property that gets and sets whether to enable the states of all edges
around the profile of a part.
Style
Read-write property that gets and sets the edge symbol style associated with this
object.
Type Gets the constant that indicates the type of this object.
UndefinedValue Read-write property that gets and sets the undefined value of the EdgeSymbol.
UndefinedValueLower
Read-write property that gets and sets the undefined value lower of the
EdgeSymbol.
ValuePositionType Read-write property that gets and sets the value position type of the edge symbol.
VerticalValue Read-write property that gets and sets the vertical value of the EdgeSymbol.
VerticalValueLower Read-write property that gets and sets the vertical value lower of the EdgeSymbol.
Accessed From
EdgeSymbol.Definition, EdgeSymbolDefinition.Copy, EdgeSymbols.CreateDefinition
Version
Introduced in version 2024
EdgeSymbolDefinition.Application Property
EdgeSymbolDefinition Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Parent Object: EdgeSymbolDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for)
'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
EdgeSymbolDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
EdgeSymbolDefinition.Copy Method
Parent Object: EdgeSymbolDefinition
Description
Method that creates a copy of this EdgeSymbolDefinition object.
Syntax
EdgeSymbolDefinition.Copy() As EdgeSymbolDefinition
Version
Introduced in version 2024
EdgeSymbolDefinition.Edges Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the edges text.
Syntax
EdgeSymbolDefinition.Edges() As String
Property Value
This is a read/write property whose value is a String.
EdgeSymbolDefinition Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbolDefinition.HorizontalValue Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the horizontal value of the EdgeSymbol.
Syntax
EdgeSymbolDefinition.HorizontalValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition.HorizontalValueLower
Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the horizontal value lower of the EdgeSymbol.
Syntax
EdgeSymbolDefinition.HorizontalValueLower() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition.IndicationType Property
Parent Object: EdgeSymbolDefinition
EdgeSymbolDefinition Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Description
Read-write property that gets and sets the indication type of the edge symbol.
Syntax
EdgeSymbolDefinition.IndicationType() As EdgeSymbolIndicationTypeEnum
Property Value
This is a read/write property whose value is an EdgeSymbolIndicationTypeEnum.
Version
Introduced in version 2024
EdgeSymbolDefinition.Layer Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the layer associated with this object.
Syntax
EdgeSymbolDefinition.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 2024
EdgeSymbolDefinition.Parent Property
Parent Object: EdgeSymbolDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
EdgeSymbolDefinition.Parent() As EdgeSymbol
Property Value
This is a read only property whose value is an EdgeSymbol.
EdgeSymbolDefinition Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbolDefinition.RangeOfValues Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets whether to use range of values.
Syntax
EdgeSymbolDefinition.RangeOfValues() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolDefinition.ReferenceToISO Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets whether to reference to ISO 13715.
Syntax
EdgeSymbolDefinition.ReferenceToISO() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolDefinition.SidesDefined Property
Parent Object: EdgeSymbolDefinition
EdgeSymbolDefinition Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Description
Read-write property that gets and sets whether to enable the states of all edges around the profile of a part with sides
clearly defined.
Syntax
EdgeSymbolDefinition.SidesDefined() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolDefinition.StatesOfAllEdgesAroundProfile
Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets whether to enable the states of all edges around the profile of a part.
Syntax
EdgeSymbolDefinition.StatesOfAllEdgesAroundProfile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolDefinition.Style Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the edge symbol style associated with this object.
Syntax
EdgeSymbolDefinition.Style() As EdgeSymbolStyle
EdgeSymbolDefinition Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Property Value
This is a read/write property whose value is an EdgeSymbolStyle.
Version
Introduced in version 2024
EdgeSymbolDefinition.Type Property
Parent Object: EdgeSymbolDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
EdgeSymbolDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
EdgeSymbolDefinition.UndefinedValue Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the undefined value of the EdgeSymbol.
Syntax
EdgeSymbolDefinition.UndefinedValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
EdgeSymbolDefinition.UndefinedValueLower
Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the undefined value lower of the EdgeSymbol.
Syntax
EdgeSymbolDefinition.UndefinedValueLower() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition.ValuePositionType Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the value position type of the edge symbol.
Syntax
EdgeSymbolDefinition.ValuePositionType() As EdgeSymbolValuePositionTypeEnum
Property Value
This is a read/write property whose value is an EdgeSymbolValuePositionTypeEnum.
Version
Introduced in version 2024
EdgeSymbolDefinition.VerticalValue Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the vertical value of the EdgeSymbol.
EdgeSymbolDefinition Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
Syntax
EdgeSymbolDefinition.VerticalValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition.VerticalValueLower Property
Parent Object: EdgeSymbolDefinition
Description
Read-write property that gets and sets the vertical value lower of the EdgeSymbol.
Syntax
EdgeSymbolDefinition.VerticalValueLower() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolDefinition Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD85.htm 16/06/2025
EdgeSymbols Object
Description
EdgeSymbols Object.
Methods
Name Description
Add
Method that creates a new edge symbol. The newly created EdgeSymbol object
is returned.
CreateDefinition Method that creates a new edge symbol definition.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Count Gets the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Gets the constant that indicates the type of this object.
Accessed From
Sheet.EdgeSymbols
Samples
Name Description
EdgeSymbol Creation
Sample
This sample is to demonstrate how to create a EdgeSymbol in
drawing document.
Version
Introduced in version 2024
EdgeSymbols.Add Method
Parent Object: EdgeSymbols
EdgeSymbols Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2822.htm 16/06/2025
Description
Method that creates a new edge symbol. The newly created EdgeSymbol object is returned.
Syntax
EdgeSymbols.Add( LeaderPoints As ObjectCollection, EdgeSymbolDefinition As
EdgeSymbolDefinition ) As EdgeSymbol
Parameters
Name Type Description
LeaderPoints ObjectCollection
EdgeSymbolDefinition EdgeSymbolDefinition
Samples
Name Description
EdgeSymbol Creation
Sample
This sample is to demonstrate how to create a EdgeSymbol in
drawing document.
Version
Introduced in version 2024
EdgeSymbols.Application Property
Parent Object: EdgeSymbols
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
EdgeSymbols.Application() As Object
Property Value
This is a read only property whose value is an Object.
EdgeSymbols Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2822.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbols.Count Property
Parent Object: EdgeSymbols
Description
Gets the number of items in this collection.
Syntax
EdgeSymbols.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2024
EdgeSymbols.CreateDefinition Method
Parent Object: EdgeSymbols
Description
Method that creates a new edge symbol definition.
Syntax
EdgeSymbols.CreateDefinition( [ValuePositionType] As Variant, [IndicationType] As Variant,
[SymbolOptions] As Variant ) As EdgeSymbolDefinition
Parameters
Name Type Description
ValuePositionType Variant
EdgeSymbols Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2822.htm 16/06/2025
This is an optional argument whose default value is null.
IndicationType Variant
This is an optional argument whose default value is null.
SymbolOptions Variant
This is an optional argument whose default value is null.
Samples
Name Description
EdgeSymbol Creation
Sample
This sample is to demonstrate how to create a EdgeSymbol in
drawing document.
Version
Introduced in version 2024
EdgeSymbols.Item Property
Parent Object: EdgeSymbols
Description
Allows integer-indexed access to items in the collection.
Syntax
EdgeSymbols.Item( Index As Long ) As EdgeSymbol
Property Value
This is a read only property whose value is an EdgeSymbol.
Parameters
Name Type Description
Index Long
EdgeSymbols Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2822.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbols.Type Property
Parent Object: EdgeSymbols
Description
Gets the constant that indicates the type of this object.
Syntax
EdgeSymbols.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
EdgeSymbols Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2822.htm 16/06/2025
EdgeSymbolStyle Object
Derived from: Style Object
Description
EdgeSymbolStyle object.
Methods
Name Description
ConvertToLocal
Method that creates a local cached copy of a global style and returns the local
style.
Copy
Method that creates a new local Style object. The newly created style is
returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same
name is found in the repository, that style is updated.
UpdateFromGlobal Method that updates this style from the global repository.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Comments Gets and sets comments associated with the style.
InternalName
Property that returns the internal name of the style. The name is the internal
English name of the standard style. This name will remain constant and is not
affected by locale. This name is never displayed to the user. Note that this name is
not guaranteed to be unique.
InUse Property that indicates if this style is in use.
LeaderStyle
Read-write property that gets and sets the leader style used for the edge symbol
style.
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
StyleLocation
Property that returns the location of this style, i.e. local to the document, cached
locally in the document, exists in the library. Styles that exist in the library cannot
be edited.
StyleType Gets the type of the style.
TextStyle Read-write property that gets and sets the text style used for the edge symbol style.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate Property that gets the up-to-date status of the style against the global repository.
EdgeSymbolStyle Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Accessed From
EdgeSymbolDefinition.Style, EdgeSymbolStylesEnumerator.Item,
ObjectDefaultsStyle.EdgeSymbolStyle
Version
Introduced in version 2024
EdgeSymbolStyle.Application Property
Parent Object: EdgeSymbolStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeSymbolStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
EdgeSymbolStyle.Comments Property
Parent Object: EdgeSymbolStyle
Description
Gets and sets comments associated with the style.
Syntax
EdgeSymbolStyle.Comments() As String
EdgeSymbolStyle Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolStyle.ConvertToLocal Method
Parent Object: EdgeSymbolStyle
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
EdgeSymbolStyle.ConvertToLocal() As Style
Version
Introduced in version 2024
EdgeSymbolStyle.Copy Method
Parent Object: EdgeSymbolStyle
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
EdgeSymbolStyle.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String Input String that specifies the name for the new style. This name must be unique
with respect to all other styles of a similar type in the document. That is, if a
EdgeSymbolStyle Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
dimension style is being copied, the name must be unique with respect to all the
other dimension styles. If it is not unique the method will fail.
Version
Introduced in version 2024
EdgeSymbolStyle.Delete Method
Parent Object: EdgeSymbolStyle
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
EdgeSymbolStyle.Delete()
Version
Introduced in version 2024
EdgeSymbolStyle.GetReferenceKey Method
Parent Object: EdgeSymbolStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
EdgeSymbolStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
EdgeSymbolStyle Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2024
EdgeSymbolStyle.InternalName Property
Parent Object: EdgeSymbolStyle
Description
Property that returns the internal name of the style. The name is the internal English name of the
standard style. This name will remain constant and is not affected by locale. This name is never
displayed to the user. Note that this name is not guaranteed to be unique.
Syntax
EdgeSymbolStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolStyle.InUse Property
Parent Object: EdgeSymbolStyle
Description
Property that indicates if this style is in use.
Syntax
EdgeSymbolStyle.InUse() As Boolean
EdgeSymbolStyle Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolStyle.LeaderStyle Property
Parent Object: EdgeSymbolStyle
Description
Read-write property that gets and sets the leader style used for the edge symbol style.
Syntax
EdgeSymbolStyle.LeaderStyle() As LeaderStyle
Property Value
This is a read/write property whose value is a LeaderStyle.
Version
Introduced in version 2024
EdgeSymbolStyle.Name Property
Parent Object: EdgeSymbolStyle
Description
Gets/Sets the name of the Style.
Syntax
EdgeSymbolStyle.Name() As String
EdgeSymbolStyle Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
EdgeSymbolStyle.Parent Property
Parent Object: EdgeSymbolStyle
Description
Property returning the parent of this object.
Syntax
EdgeSymbolStyle.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
EdgeSymbolStyle.SaveToGlobal Method
Parent Object: EdgeSymbolStyle
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
Syntax
EdgeSymbolStyle.SaveToGlobal()
EdgeSymbolStyle Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbolStyle.StyleLocation Property
Parent Object: EdgeSymbolStyle
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the
document, exists in the library. Styles that exist in the library cannot be edited.
Syntax
EdgeSymbolStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2024
EdgeSymbolStyle.StyleType Property
Parent Object: EdgeSymbolStyle
Description
Gets the type of the style.
Syntax
EdgeSymbolStyle.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
EdgeSymbolStyle Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbolStyle.TextStyle Property
Parent Object: EdgeSymbolStyle
Description
Read-write property that gets and sets the text style used for the edge symbol style.
Syntax
EdgeSymbolStyle.TextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2024
EdgeSymbolStyle.Type Property
Parent Object: EdgeSymbolStyle
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeSymbolStyle.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
EdgeSymbolStyle Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
Version
Introduced in version 2024
EdgeSymbolStyle.UpdateFromGlobal Method
Parent Object: EdgeSymbolStyle
Description
Method that updates this style from the global repository.
Syntax
EdgeSymbolStyle.UpdateFromGlobal()
Version
Introduced in version 2024
EdgeSymbolStyle.UpToDate Property
Parent Object: EdgeSymbolStyle
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
EdgeSymbolStyle.UpToDate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2024
EdgeSymbolStyle Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3FF0.htm 16/06/2025
EdgeSymbolStylesEnumerator Object
Description
EdgeSymbolStylesEnumerator object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Count Gets the number of items in this collection.
Item
Allows VARIANT-indexed access to items in the collection. You can use names as
indexes as well.
Type Gets the constant that indicates the type of this object.
Accessed From
DrawingStylesManager.EdgeSymbolStyles
Version
Introduced in version 2024
EdgeSymbolStylesEnumerator.Application
Property
Parent Object: EdgeSymbolStylesEnumerator
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
EdgeSymbolStylesEnumerator.Application() As Object
EdgeSymbolStylesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BB5.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
EdgeSymbolStylesEnumerator.Count
Property
Parent Object: EdgeSymbolStylesEnumerator
Description
Gets the number of items in this collection.
Syntax
EdgeSymbolStylesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2024
EdgeSymbolStylesEnumerator.Item Property
Parent Object: EdgeSymbolStylesEnumerator
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as
well.
Syntax
EdgeSymbolStylesEnumerator.Item( Index As Variant ) As EdgeSymbolStyle
EdgeSymbolStylesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BB5.htm 16/06/2025
Property Value
This is a read only property whose value is an EdgeSymbolStyle.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the EdgeSymbolStyle to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the EdgeSymbolStyle name. If an out of range index or a name
of a non-existent EdgeSymbolStyle is provided, an error will occur.
Version
Introduced in version 2024
EdgeSymbolStylesEnumerator.Type Property
Parent Object: EdgeSymbolStylesEnumerator
Description
Gets the constant that indicates the type of this object.
Syntax
EdgeSymbolStylesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
EdgeSymbolStylesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BB5.htm 16/06/2025
EdgeUse Object
Description
The EdgeUse object. See the article in the overviews section.
Methods
Name Description
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
CurveType
Gets the type of the underlying curve geometry that this EdgeUse is defined
by.
Edge Gets the that this EdgeUse references.
EdgeLoop Gets the that contains this EdgeUse.
Evaluator Gets the Curve2dEvaluator for this edge use.
Geometry Property that returns the underlying geometry of the edge use.
GeometryForm
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
IsOpposedToEdge
Gets whether this EdgeUse is opposed to or aligned with the orientation of the
referenced Edge.
IsParamReversed
Gets whether the parameterization of the geometry obtained from the Curve
property is aligned or opposed to the topological sense of this EdgeUse.
Next Gets the next in the connected list of EdgeUses in the EdgeLoop.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Partner
In a solid, Face objects are connected to other Face objects by virtue of
sharing at least one Edge. The shared Edge is the same object. objects,
however ,are unique to a particular face. The Partner property returns the
corresponding EdgeUse that belongs to the connected face.
Previous Gets the previous .
TransientKey
Property that obtains an ID key that can be used to bind back to the live
object. This transient key is only valid as long as the document state has not
changed. For more information, see the ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Wire
Get the Wire containing this EdgeUse. Returns Nothing if this EdgeUse does
not belong to a Wire.
EdgeUse Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Accessed From
EdgeUse.Next, EdgeUse.Partner, EdgeUse.Previous, EdgeUseProxy.NativeObject,
EdgeUseProxy.Next, EdgeUseProxy.Partner, EdgeUseProxy.Previous, EdgeUses.Item
Derived Classes
EdgeUseProxy
Samples
Name Description
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeUse.Application Property
Parent Object: EdgeUse
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeUse.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
EdgeUse Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
EdgeUse.CurveType Property
Parent Object: EdgeUse
Description
Gets the type of the underlying curve geometry that this EdgeUse is defined by.
Syntax
EdgeUse.CurveType() As Curve2dTypeEnum
Property Value
This is a read only property whose value is a Curve2dTypeEnum.
Version
Introduced in version 4
EdgeUse.Edge Property
Parent Object: EdgeUse
Description
Gets the that this EdgeUse references.
Syntax
EdgeUse.Edge() As Edge
Property Value
This is a read only property whose value is an Edge.
Samples
Name Description
Tapered
Surface Using
Offset Curve
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
EdgeUse Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
and Ruled
Surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeUse.EdgeLoop Property
Parent Object: EdgeUse
Description
Gets the that contains this EdgeUse.
Syntax
EdgeUse.EdgeLoop() As EdgeLoop
Property Value
This is a read only property whose value is an EdgeLoop.
Version
Introduced in version 4
EdgeUse.Evaluator Property
Parent Object: EdgeUse
Description
Gets the Curve2dEvaluator for this edge use.
Syntax
EdgeUse.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
EdgeUse Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 4
EdgeUse.Geometry Property
Parent Object: EdgeUse
Description
Property that returns the underlying geometry of the edge use.
Syntax
EdgeUse.Geometry() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EdgeUse.GeometryForm Property
Parent Object: EdgeUse
Description
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
Syntax
EdgeUse.GeometryForm() As Long
Property Value
This is a read only property whose value is a Long.
EdgeUse Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 4
EdgeUse.GetReferenceKey Method
Parent Object: EdgeUse
Description
Method that generates and returns the reference key for this entity.
Syntax
EdgeUse.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To
obtain the entity at a later time using the reference key you use the BindKeyToObject method of
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 5
EdgeUse.IsOpposedToEdge Property
Parent Object: EdgeUse
EdgeUse Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Description
Gets whether this EdgeUse is opposed to or aligned with the orientation of the referenced Edge.
Syntax
EdgeUse.IsOpposedToEdge() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Samples
Name Description
Tapered
Surface Using
Offset Curve
and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 4
EdgeUse.IsParamReversed Property
Parent Object: EdgeUse
Description
Gets whether the parameterization of the geometry obtained from the Curve property is aligned or
opposed to the topological sense of this EdgeUse.
Syntax
EdgeUse.IsParamReversed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
EdgeUse Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 4
EdgeUse.Next Property
Parent Object: EdgeUse
Description
Gets the next in the connected list of EdgeUses in the EdgeLoop.
Syntax
EdgeUse.Next() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUse.Parent Property
Parent Object: EdgeUse
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
EdgeUse.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
EdgeUse Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 5
EdgeUse.Partner Property
Parent Object: EdgeUse
Description
In a solid, Face objects are connected to other Face objects by virtue of sharing at least one Edge.
The shared Edge is the same object. objects, however ,are unique to a particular face. The Partner
property returns the corresponding EdgeUse that belongs to the connected face.
Syntax
EdgeUse.Partner() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUse.Previous Property
Parent Object: EdgeUse
Description
Gets the previous .
Syntax
EdgeUse.Previous() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
EdgeUse Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 4
EdgeUse.TransientKey Property
Parent Object: EdgeUse
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
EdgeUse.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
EdgeUse.Type Property
Parent Object: EdgeUse
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeUse.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
EdgeUse Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
Version
Introduced in version 5
EdgeUse.Wire Property
Parent Object: EdgeUse
Description
Get the Wire containing this EdgeUse. Returns Nothing if this EdgeUse does not belong to a Wire.
Syntax
EdgeUse.Wire() As Wire
Property Value
This is a read only property whose value is a Wire.
Version
Introduced in version 2008
EdgeUse Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70D3.htm 16/06/2025
EdgeUseDefinition Object
Description
The FaceDefinition represents a transient definition of a Face object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
EdgeDefinition Gets and set the associated EdgeDefinition object.
IsOpposedToEdge
Gets and sets if the orientation of this EdgeUse is in the same direction or not
relative to the associated EdgeDefinition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeUseDefinitions.Add, EdgeUseDefinitions.Item
Samples
Name Description
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
EdgeUseDefinition.Application Property
Parent Object: EdgeUseDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
EdgeUseDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B7F.htm 16/06/2025
Syntax
EdgeUseDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeUseDefinition.EdgeDefinition Property
Parent Object: EdgeUseDefinition
Description
Gets and set the associated EdgeDefinition object.
Syntax
EdgeUseDefinition.EdgeDefinition() As EdgeDefinition
Property Value
This is a read/write property whose value is an EdgeDefinition.
Samples
Name Description
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
EdgeUseDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B7F.htm 16/06/2025
EdgeUseDefinition.IsOpposedToEdge
Property
Parent Object: EdgeUseDefinition
Description
Gets and sets if the orientation of this EdgeUse is in the same direction or not relative to the
associated EdgeDefinition object.
Syntax
EdgeUseDefinition.IsOpposedToEdge() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
EdgeUseDefinition.Type Property
Parent Object: EdgeUseDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeUseDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeUseDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B7F.htm 16/06/2025
EdgeUseDefinitions Object
Description
The EdgeUseDefinitions collection object provides access to existing EdgeUseDefinition objects,
and allows creation of new EdgeUseDefinition objects.
Methods
Name Description
Add Method that creates a new EdgeUseDefinition within the associated EdgeLoopDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Property that returns an item from the collection. The index of the first item in the
collection is 1.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeLoopDefinition.EdgeUseDefinitions
Version
Introduced in version 2011
EdgeUseDefinitions.Add Method
Parent Object: EdgeUseDefinitions
Description
Method that creates a new EdgeUseDefinition within the associated EdgeLoopDefinition.
EdgeUseDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2EF.htm 16/06/2025
Syntax
EdgeUseDefinitions.Add( EdgeDefinition As EdgeDefinition, IsOpposedToEdge As Boolean )
As EdgeUseDefinition
Parameters
Name Type Description
EdgeDefinition EdgeDefinition
Input EdgeDefinition that defines the geometry for this
EdgeUseDefinition.
IsOpposedToEdge Boolean
Input Boolean that indicates if the parameterization of this
EdgeUseDefinition is reversed with respect to the associated
EdgeDefinition object.
Version
Introduced in version 2011
EdgeUseDefinitions.Application Property
Parent Object: EdgeUseDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeUseDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
EdgeUseDefinitions.Count Property
Parent Object: EdgeUseDefinitions
EdgeUseDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2EF.htm 16/06/2025
Description
Property that returns the number of items in this collection.
Syntax
EdgeUseDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
EdgeUseDefinitions.Item Property
Parent Object: EdgeUseDefinitions
Description
Property that returns an item from the collection. The index of the first item in the collection is 1.
Syntax
EdgeUseDefinitions.Item( Index As Long ) As EdgeUseDefinition
Property Value
This is a read only property whose value is an EdgeUseDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the EdgeUseDefinition object within the collection to
return.
Version
Introduced in version 2011
EdgeUseDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2EF.htm 16/06/2025
EdgeUseDefinitions.Type Property
Parent Object: EdgeUseDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeUseDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
EdgeUseDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2EF.htm 16/06/2025
EdgeUseProxy Object
Derived from: EdgeUse Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
CurveType
Gets the type of the underlying curve geometry that this EdgeUse is
defined by.
Edge Gets the that this EdgeUse references.
EdgeLoop Gets the that contains this EdgeUse.
Evaluator Gets the Curve2dEvaluator for this edge use.
Geometry Property that returns the underlying geometry of the edge use.
GeometryForm
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
IsOpposedToEdge
Gets whether this EdgeUse is opposed to or aligned with the orientation of
the referenced Edge.
IsParamReversed
Gets whether the parameterization of the geometry obtained from the
Curve property is aligned or opposed to the topological sense of this
EdgeUse.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Next Gets the next in the connected list of EdgeUses in the EdgeLoop.
Parent
Property that returns the parent object from whom this object can logically
be reached.
Partner
In a solid, Face objects are connected to other Face objects by virtue of
sharing at least one Edge. The shared Edge is the same object. objects,
however ,are unique to a particular face. The Partner property returns the
corresponding EdgeUse that belongs to the connected face.
EdgeUseProxy Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Previous Gets the previous .
TransientKey
Property that obtains an ID key that can be used to bind back to the live
object. This transient key is only valid as long as the document state has
not changed. For more information, see the ReferenceKeys overview.
Type Returns an ObjectTypeEnum indicating this object's type.
Wire
Get the Wire containing this EdgeUse. Returns Nothing if this EdgeUse
does not belong to a Wire.
Version
Introduced in version 4
EdgeUseProxy.Application Property
Parent Object: EdgeUseProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeUseProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
EdgeUseProxy.ContainingOccurrence
Property
Parent Object: EdgeUseProxy
Description
EdgeUseProxy Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
EdgeUseProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
EdgeUseProxy.CurveType Property
Parent Object: EdgeUseProxy
Description
Gets the type of the underlying curve geometry that this EdgeUse is defined by.
Syntax
EdgeUseProxy.CurveType() As Curve2dTypeEnum
Property Value
This is a read only property whose value is a Curve2dTypeEnum.
Version
Introduced in version 4
EdgeUseProxy.Edge Property
Parent Object: EdgeUseProxy
Description
Gets the that this EdgeUse references.
EdgeUseProxy Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Syntax
EdgeUseProxy.Edge() As Edge
Property Value
This is a read only property whose value is an Edge.
Version
Introduced in version 4
EdgeUseProxy.EdgeLoop Property
Parent Object: EdgeUseProxy
Description
Gets the that contains this EdgeUse.
Syntax
EdgeUseProxy.EdgeLoop() As EdgeLoop
Property Value
This is a read only property whose value is an EdgeLoop.
Version
Introduced in version 4
EdgeUseProxy.Evaluator Property
Parent Object: EdgeUseProxy
Description
Gets the Curve2dEvaluator for this edge use.
EdgeUseProxy Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Syntax
EdgeUseProxy.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Version
Introduced in version 4
EdgeUseProxy.Geometry Property
Parent Object: EdgeUseProxy
Description
Property that returns the underlying geometry of the edge use.
Syntax
EdgeUseProxy.Geometry() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EdgeUseProxy.GeometryForm Property
Parent Object: EdgeUseProxy
Description
Gets the form of the underlying geometry as a combination of one or more
CurveGeometryFormEnum values.
EdgeUseProxy Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Syntax
EdgeUseProxy.GeometryForm() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
EdgeUseProxy.GetReferenceKey Method
Parent Object: EdgeUseProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EdgeUseProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EdgeUseProxy.IsOpposedToEdge Property
EdgeUseProxy Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Parent Object: EdgeUseProxy
Description
Gets whether this EdgeUse is opposed to or aligned with the orientation of the referenced Edge.
Syntax
EdgeUseProxy.IsOpposedToEdge() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
EdgeUseProxy.IsParamReversed Property
Parent Object: EdgeUseProxy
Description
Gets whether the parameterization of the geometry obtained from the Curve property is aligned or
opposed to the topological sense of this EdgeUse.
Syntax
EdgeUseProxy.IsParamReversed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
EdgeUseProxy.NativeObject Property
Parent Object: EdgeUseProxy
EdgeUseProxy Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EdgeUseProxy.NativeObject() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUseProxy.Next Property
Parent Object: EdgeUseProxy
Description
Gets the next in the connected list of EdgeUses in the EdgeLoop.
Syntax
EdgeUseProxy.Next() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUseProxy.Parent Property
Parent Object: EdgeUseProxy
Description
EdgeUseProxy Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Property that returns the parent object from whom this object can logically be reached.
Syntax
EdgeUseProxy.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 5
EdgeUseProxy.Partner Property
Parent Object: EdgeUseProxy
Description
In a solid, Face objects are connected to other Face objects by virtue of sharing at least one Edge.
The shared Edge is the same object. objects, however ,are unique to a particular face. The Partner
property returns the corresponding EdgeUse that belongs to the connected face.
Syntax
EdgeUseProxy.Partner() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUseProxy.Previous Property
Parent Object: EdgeUseProxy
Description
Gets the previous .
EdgeUseProxy Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Syntax
EdgeUseProxy.Previous() As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Version
Introduced in version 4
EdgeUseProxy.TransientKey Property
Parent Object: EdgeUseProxy
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview.
Syntax
EdgeUseProxy.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
EdgeUseProxy.Type Property
Parent Object: EdgeUseProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
EdgeUseProxy Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
Syntax
EdgeUseProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EdgeUseProxy.Wire Property
Parent Object: EdgeUseProxy
Description
Get the Wire containing this EdgeUse. Returns Nothing if this EdgeUse does not belong to a Wire.
Syntax
EdgeUseProxy.Wire() As Wire
Property Value
This is a read only property whose value is a Wire.
Version
Introduced in version 2008
EdgeUseProxy Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC05B.htm 16/06/2025
EdgeUses Object
Description
The EdgeUses object is a collection of objects. See the article in the overviews section.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to objects in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Edge.EdgeUses, EdgeLoop.EdgeUses, EdgeLoopProxy.EdgeUses, EdgeProxy.EdgeUses,
Wire.EdgeUses
Version
Introduced in version 4
EdgeUses.Count Property
Parent Object: EdgeUses
Description
Property that returns the number of items in this collection.
Syntax
EdgeUses.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
EdgeUses Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDA4B.htm 16/06/2025
EdgeUses.Item Property
Parent Object: EdgeUses
Description
Allows integer-indexed access to objects in the collection.
Syntax
EdgeUses.Item( Index As Long ) As EdgeUse
Property Value
This is a read only property whose value is an EdgeUse.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 4
EdgeUses.Type Property
Parent Object: EdgeUses
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeUses.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
EdgeUses Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDA4B.htm 16/06/2025
Version
Introduced in version 4
EdgeUses Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDA4B.htm 16/06/2025
EdgeWidthExtent Object
Derived from: PartFeatureExtent Object
Description
The EdgeWidthExtent is used by sheet metal features when the width of the feature is defined by
an edge.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Edge Property that gets the Edge object that the width is defined relative to.
Parent Property that returns the parent PartFeature of the definition.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2009
EdgeWidthExtent.Application Property
Parent Object: EdgeWidthExtent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EdgeWidthExtent.Application() As Object
Property Value
This is a read only property whose value is an Object.
EdgeWidthExtent Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 16/06/2025
Version
Introduced in version 2009
EdgeWidthExtent.Edge Property
Parent Object: EdgeWidthExtent
Description
Property that gets the Edge object that the width is defined relative to.
Syntax
EdgeWidthExtent.Edge() As Edge
Property Value
This is a read only property whose value is an Edge.
Version
Introduced in version 2009
EdgeWidthExtent.Parent Property
Parent Object: EdgeWidthExtent
Description
Property that returns the parent PartFeature of the definition.
Syntax
EdgeWidthExtent.Parent() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
EdgeWidthExtent Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 16/06/2025
Version
Introduced in version 2009
EdgeWidthExtent.Type Property
Parent Object: EdgeWidthExtent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EdgeWidthExtent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
EdgeWidthExtent Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 16/06/2025
EllipseFull Object
Description
The EllipseFull object. The object created is a transient mathematical object and is not displayed
graphically
Methods
Name Description
Copy
Creates a copy of this EllipseFull object. The result is entirely independent
and can be edited without affecting the original EllipseFull object.
GetEllipseFullData Get the data defining this ellipse.
PutEllipseFullData Method that sets the data defining this ellipse.
Properties
Name Description
Center Specifies the center of the ellipse.
Evaluator Gets the CurveEvaluator for this ellipse.
MajorAxisVector Specifies the direction of the major axis of the ellipse.
MinorMajorRatio Specifies the ratio of the minor and major axes of the ellipse.
Normal Specifies the axis of the ellipse. The axis extends out of the ellipse.
Accessed From
EllipseFull.Copy, SketchEllipse.Geometry3d, SketchEllipse3D.Geometry,
SketchEllipse3DProxy.Geometry, SketchEllipseProxy.Geometry3d,
TransientGeometry.CreateEllipseFull
Version
Introduced in version 4
EllipseFull.Center Property
Parent Object: EllipseFull
Description
Specifies the center of the ellipse.
EllipseFull Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh311.htm 16/06/2025
Syntax
EllipseFull.Center() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 4
EllipseFull.Copy Method
Parent Object: EllipseFull
Description
Creates a copy of this EllipseFull object. The result is entirely independent and can be edited
without affecting the original EllipseFull object.
Syntax
EllipseFull.Copy() As EllipseFull
Version
Introduced in version 2013
EllipseFull.Evaluator Property
Parent Object: EllipseFull
Description
Gets the CurveEvaluator for this ellipse.
Syntax
EllipseFull.Evaluator() As CurveEvaluator
EllipseFull Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh311.htm 16/06/2025
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 4
EllipseFull.GetEllipseFullData Method
Parent Object: EllipseFull
Description
Get the data defining this ellipse.
Syntax
EllipseFull.GetEllipseFullData( Center() As Double, AxisVector() As Double, MajorAxis() As
Double, MinorMajorRatio As Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the entity's center.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Output Double that specifies the ratio of the minor and major axes of
the ellipse.
Version
Introduced in version 4
EllipseFull.MajorAxisVector Property
Parent Object: EllipseFull
Description
Specifies the direction of the major axis of the ellipse.
EllipseFull Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh311.htm 16/06/2025
Syntax
EllipseFull.MajorAxisVector() As Vector
Property Value
This is a read/write property whose value is a Vector.
Version
Introduced in version 4
EllipseFull.MinorMajorRatio Property
Parent Object: EllipseFull
Description
Specifies the ratio of the minor and major axes of the ellipse.
Syntax
EllipseFull.MinorMajorRatio() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
EllipseFull.Normal Property
Parent Object: EllipseFull
Description
Specifies the axis of the ellipse. The axis extends out of the ellipse.
EllipseFull Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh311.htm 16/06/2025
Syntax
EllipseFull.Normal() As UnitVector
Property Value
This is a read/write property whose value is a UnitVector.
Version
Introduced in version 4
EllipseFull.PutEllipseFullData Method
Parent Object: EllipseFull
Description
Method that sets the data defining this ellipse.
Syntax
EllipseFull.PutEllipseFullData( Center() As Double, AxisVector() As Double, MajorAxis() As
Double, MinorMajorRatio As Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the entity's center.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Input Double that specifies the ratio of the minor and major axes of the
ellipse.
Version
Introduced in version 4
EllipseFull Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh311.htm 16/06/2025
EllipseFull2d Object
Description
The EllipseFull2d object. The object is a transient mathematical object and is not displayed
graphically.
Methods
Name Description
Copy
Creates a copy of this EllipseFull2d object. The result is entirely independent
and can be edited without affecting the original EllipseFull2d object.
GetEllipseFullData Get the data defining this ellipse.
PutEllipseFullData Method that sets the data defining this ellipse.
Properties
Name Description
Center Specifies the center of the ellipse.
Evaluator Gets the Curve2dEvaluator for this ellipse.
MajorAxisVector Specifies the direction of the major axis of the ellipse.
MinorMajorRatio Specifies the ratio of the minor and major axes of the ellipse.
Accessed From
EllipseFull2d.Copy, SketchEllipse.Geometry, SketchEllipseProxy.Geometry,
TransientGeometry.CreateEllipseFull2d
Version
Introduced in version 4
EllipseFull2d.Center Property
Parent Object: EllipseFull2d
Description
Specifies the center of the ellipse.
EllipseFull2d Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CD3.htm 16/06/2025
Syntax
EllipseFull2d.Center() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 4
EllipseFull2d.Copy Method
Parent Object: EllipseFull2d
Description
Creates a copy of this EllipseFull2d object. The result is entirely independent and can be edited
without affecting the original EllipseFull2d object.
Syntax
EllipseFull2d.Copy() As EllipseFull2d
Version
Introduced in version 2013
EllipseFull2d.Evaluator Property
Parent Object: EllipseFull2d
Description
Gets the Curve2dEvaluator for this ellipse.
Syntax
EllipseFull2d.Evaluator() As Curve2dEvaluator
EllipseFull2d Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CD3.htm 16/06/2025
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Version
Introduced in version 4
EllipseFull2d.GetEllipseFullData Method
Parent Object: EllipseFull2d
Description
Get the data defining this ellipse.
Syntax
EllipseFull2d.GetEllipseFullData( Center() As Double, MajorAxis() As Double,
MinorMajorRatio As Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the entity's center.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Output Double that specifies the ratio of the minor and major axes of
the ellipse.
Version
Introduced in version 4
EllipseFull2d.MajorAxisVector Property
Parent Object: EllipseFull2d
Description
Specifies the direction of the major axis of the ellipse.
EllipseFull2d Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CD3.htm 16/06/2025
Syntax
EllipseFull2d.MajorAxisVector() As Vector2d
Property Value
This is a read/write property whose value is a Vector2d.
Version
Introduced in version 4
EllipseFull2d.MinorMajorRatio Property
Parent Object: EllipseFull2d
Description
Specifies the ratio of the minor and major axes of the ellipse.
Syntax
EllipseFull2d.MinorMajorRatio() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
EllipseFull2d.PutEllipseFullData Method
Parent Object: EllipseFull2d
Description
Method that sets the data defining this ellipse.
EllipseFull2d Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CD3.htm 16/06/2025
Syntax
EllipseFull2d.PutEllipseFullData( Center() As Double, MajorAxis() As Double,
MinorMajorRatio As Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the Ellipse's center.
MajorAxis Double Input/output Double that specifies the Ellipse's major axis.
MinorMajorRatio Double
Input Double that specifies the ratio of the minor and major axes of the
Ellipse.
Version
Introduced in version 4
EllipseFull2d Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CD3.htm 16/06/2025
EllipseRadiusDimConstraint Object
Derived from: DimensionConstraint Object
Description
The EllipseRadiusDimConstraint object represents a constraint that controls either the major or minor radius of
an ellipse.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AnchorPoints Gets the anchor points of dimension.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
DimensionCenterPoint Gets the center of the dimension line.
Driven
Gets and sets whether this dimension constraint is driving the geometry or the
geometry is defining the value associated with the constraint.
Entity Property that returns the ellipse or elliptical arc being constrained.
MajorRadius
Property that returns whether the proxy constraint is controlling the major or minor
radius of the ellipse. Returns true if it is the major radius.
Parameter
Property that returns the parameter associated with this dimension constraint. If the
Driven property of the constraint is True, this will return a ReferenceParameter object.
Otherwise it will return a ModelParameter object.
Parent Property that returns the parent sketch of the object.
TextPoint Gets and sets the position of the dimension text.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DimensionConstraints.AddEllipseRadius, EllipseRadiusDimConstraintProxy.NativeObject
Derived Classes
EllipseRadiusDimConstraintProxy
Samples
Name Description
Create sketch elliptical
arc
This sample demonstrates creating an elliptical arc in a sketch and dimensioning its
minor radius.
EllipseRadiusDimConstraint Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
Version
Introduced in version 5
EllipseRadiusDimConstraint.AnchorPoints
Property
Parent Object: EllipseRadiusDimConstraint
Description
Gets the anchor points of dimension.
Syntax
EllipseRadiusDimConstraint.AnchorPoints() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2012
EllipseRadiusDimConstraint.Application Property
Parent Object: EllipseRadiusDimConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EllipseRadiusDimConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
EllipseRadiusDimConstraint Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
EllipseRadiusDimConstraint.AttributeSets
Property
Parent Object: EllipseRadiusDimConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EllipseRadiusDimConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
EllipseRadiusDimConstraint.Delete Method
Parent Object: EllipseRadiusDimConstraint
Description
Method that deletes the constraint.
Syntax
EllipseRadiusDimConstraint.Delete()
Version
Introduced in version 5
EllipseRadiusDimConstraint.DimensionCenterPoint
Property
Parent Object: EllipseRadiusDimConstraint
Description
Gets the center of the dimension line.
EllipseRadiusDimConstraint Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
Syntax
EllipseRadiusDimConstraint.DimensionCenterPoint() As Point2d
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 10
EllipseRadiusDimConstraint.Driven Property
Parent Object: EllipseRadiusDimConstraint
Description
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining the value
associated with the constraint.
Syntax
EllipseRadiusDimConstraint.Driven() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
EllipseRadiusDimConstraint.Entity Property
Parent Object: EllipseRadiusDimConstraint
Description
Property that returns the ellipse or elliptical arc being constrained.
Syntax
EllipseRadiusDimConstraint.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
EllipseRadiusDimConstraint Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
Version
Introduced in version 5
EllipseRadiusDimConstraint.GetReferenceKey
Method
Parent Object: EllipseRadiusDimConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
EllipseRadiusDimConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and
Vertex objects). A key context is created using the CreateKeyContext method of the
ReferenceKeyManager object. For all other object types, the key context argument is not
used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EllipseRadiusDimConstraint.MajorRadius
Property
Parent Object: EllipseRadiusDimConstraint
Description
Property that returns whether the proxy constraint is controlling the major or minor radius of the ellipse.
Returns true if it is the major radius.
Syntax
EllipseRadiusDimConstraint.MajorRadius() As Boolean
EllipseRadiusDimConstraint Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
EllipseRadiusDimConstraint.Parameter Property
Parent Object: EllipseRadiusDimConstraint
Description
Property that returns the parameter associated with this dimension constraint. If the Driven property of the
constraint is True, this will return a ReferenceParameter object. Otherwise it will return a ModelParameter
object.
Syntax
EllipseRadiusDimConstraint.Parameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
EllipseRadiusDimConstraint.Parent Property
Parent Object: EllipseRadiusDimConstraint
Description
Property that returns the parent sketch of the object.
Syntax
EllipseRadiusDimConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
EllipseRadiusDimConstraint Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
Version
Introduced in version 5
EllipseRadiusDimConstraint.TextPoint Property
Parent Object: EllipseRadiusDimConstraint
Description
Gets and sets the position of the dimension text.
Syntax
EllipseRadiusDimConstraint.TextPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 5
EllipseRadiusDimConstraint.Type Property
Parent Object: EllipseRadiusDimConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EllipseRadiusDimConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EllipseRadiusDimConstraint Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh34CF.htm 16/06/2025
EllipseRadiusDimConstraintProxy Object
Derived from: EllipseRadiusDimConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object. F
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AnchorPoints Gets the anchor points of dimension.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
DimensionCenterPoint Gets the center of the dimension line.
Driven
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining
the value associated with the constraint.
Entity Property that returns the ellipse or elliptical arc being constrained.
MajorRadius
Property that returns whether the proxy constraint is controlling the major or minor radius of the
ellipse. Returns true if it is the major radius.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parameter
Property that returns the parameter associated with this dimension constraint. If the Driven
property of the constraint is True, this will return a ReferenceParameter object. Otherwise it will
return a ModelParameter object.
Parent Property that returns the parent sketch of the object.
TextPoint Gets and sets the position of the dimension text.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.AnchorPoints
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Gets the anchor points of dimension.
EllipseRadiusDimConstraintProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
Syntax
EllipseRadiusDimConstraintProxy.AnchorPoints() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2012
EllipseRadiusDimConstraintProxy.Application Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EllipseRadiusDimConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.AttributeSets
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EllipseRadiusDimConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
EllipseRadiusDimConstraintProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.ContainingOccurrence
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence
is the containing occurrence.
Syntax
EllipseRadiusDimConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.Delete Method
Parent Object: EllipseRadiusDimConstraintProxy
Description
Method that deletes the constraint.
Syntax
EllipseRadiusDimConstraintProxy.Delete()
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.DimensionCenterPoint
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Gets the center of the dimension line.
EllipseRadiusDimConstraintProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
Syntax
EllipseRadiusDimConstraintProxy.DimensionCenterPoint() As Point2d
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 10
EllipseRadiusDimConstraintProxy.Driven Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining the value associated
with the constraint.
Syntax
EllipseRadiusDimConstraintProxy.Driven() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.Entity Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns the ellipse or elliptical arc being constrained.
Syntax
EllipseRadiusDimConstraintProxy.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
EllipseRadiusDimConstraintProxy.GetReferenceKey
Method
Parent Object: EllipseRadiusDimConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EllipseRadiusDimConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context
is created using the CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.MajorRadius
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns whether the proxy constraint is controlling the major or minor radius of the ellipse. Returns true if it is
the major radius.
Syntax
EllipseRadiusDimConstraintProxy.MajorRadius() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
EllipseRadiusDimConstraintProxy.NativeObject
Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EllipseRadiusDimConstraintProxy.NativeObject() As EllipseRadiusDimConstraint
Property Value
This is a read only property whose value is an EllipseRadiusDimConstraint.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.Parameter Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns the parameter associated with this dimension constraint. If the Driven property of the constraint is
True, this will return a ReferenceParameter object. Otherwise it will return a ModelParameter object.
Syntax
EllipseRadiusDimConstraintProxy.Parameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.Parent Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Property that returns the parent sketch of the object.
EllipseRadiusDimConstraintProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
Syntax
EllipseRadiusDimConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.TextPoint Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Gets and sets the position of the dimension text.
Syntax
EllipseRadiusDimConstraintProxy.TextPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy.Type Property
Parent Object: EllipseRadiusDimConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EllipseRadiusDimConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
EllipseRadiusDimConstraintProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E31.htm 16/06/2025
EllipticalArc Object
Description
The EllipticalArc object. The object created is a transient mathematical object and is not displayed
graphically
Methods
Name Description
Copy
Creates a copy of this EllipticalArc object. The result is entirely
independent and can be edited without affecting the original EllipticalArc
object.
GetEllipticalArcData Get the data defining this elliptical arc.
PutEllipticalArcData Method that sets the data defining this elliptical arc.
Properties
Name Description
Center Specifies the center point for the arc.
EndPoint Gets the end point for the arc.
Evaluator Gets the CurveEvaluator for the arc.
MajorAxis Specifies the major axis for the ellipse.
MajorRadius Specifies the major radius for the ellipse.
MinorAxis Specifies the minor axis for the ellipse.
MinorRadius Specifies the minor radius for the ellipse.
StartAngle Specifies the start angle for the arc.
StartPoint Gets the start point for the arc.
SweepAngle Specifies the sweep angle from the start angle for the arc.
Accessed From
EllipticalArc.Copy, SketchEllipticalArc.Geometry3d, SketchEllipticalArc3D.Geometry,
SketchEllipticalArc3DProxy.Geometry, SketchEllipticalArcProxy.Geometry3d,
TransientGeometry.CreateEllipticalArc
Version
Introduced in version 6
EllipticalArc Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
EllipticalArc.Center Property
Parent Object: EllipticalArc
Description
Specifies the center point for the arc.
Syntax
EllipticalArc.Center() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 6
EllipticalArc.Copy Method
Parent Object: EllipticalArc
Description
Creates a copy of this EllipticalArc object. The result is entirely independent and can be edited
without affecting the original EllipticalArc object.
Syntax
EllipticalArc.Copy() As EllipticalArc
Version
Introduced in version 2013
EllipticalArc.EndPoint Property
Parent Object: EllipticalArc
EllipticalArc Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
Description
Gets the end point for the arc.
Syntax
EllipticalArc.EndPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 6
EllipticalArc.Evaluator Property
Parent Object: EllipticalArc
Description
Gets the CurveEvaluator for the arc.
Syntax
EllipticalArc.Evaluator() As CurveEvaluator
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 6
EllipticalArc.GetEllipticalArcData Method
Parent Object: EllipticalArc
Description
EllipticalArc Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
Get the data defining this elliptical arc.
Syntax
EllipticalArc.GetEllipticalArcData( Center() As Double, MajorAxis() As Double, MinorAxis()
As Double, MajorRadius As Double, MinorRadius As Double, StartAngle As Double,
SweepAngle As Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the elliptical arc's center.
MajorAxis Double Input/output Double that specifies major axis.
MinorAxis Double Input/output Double that specifies minor axis.
MajorRadius Double Output Double that specifies major radius.
MinorRadius Double Output Double that specifies the minor radius.
StartAngle Double
Output Double that specifies the elliptical arc's start angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
SweepAngle Double
Output Double that specifies the elliptical arc's sweep angle. This angle is
an elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
Version
Introduced in version 6
EllipticalArc.MajorAxis Property
Parent Object: EllipticalArc
Description
Specifies the major axis for the ellipse.
Syntax
EllipticalArc.MajorAxis() As UnitVector
EllipticalArc Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
Property Value
This is a read/write property whose value is a UnitVector.
Version
Introduced in version 6
EllipticalArc.MajorRadius Property
Parent Object: EllipticalArc
Description
Specifies the major radius for the ellipse.
Syntax
EllipticalArc.MajorRadius() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 6
EllipticalArc.MinorAxis Property
Parent Object: EllipticalArc
Description
Specifies the minor axis for the ellipse.
Syntax
EllipticalArc.MinorAxis() As UnitVector
EllipticalArc Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
Property Value
This is a read/write property whose value is a UnitVector.
Version
Introduced in version 6
EllipticalArc.MinorRadius Property
Parent Object: EllipticalArc
Description
Specifies the minor radius for the ellipse.
Syntax
EllipticalArc.MinorRadius() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 6
EllipticalArc.PutEllipticalArcData Method
Parent Object: EllipticalArc
Description
Method that sets the data defining this elliptical arc.
Syntax
EllipticalArc.PutEllipticalArcData( Center() As Double, MajorAxis() As Double, MinorAxis()
As Double, MajorRadius As Double, MinorRadius As Double, StartAngle As Double,
SweepAngle As Double )
EllipticalArc Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
Parameters
Name Type Description
Center Double Input/output Double that specifies the elliptical arc's center.
MajorAxis Double Input/output Double that specifies major axis.
MinorAxis Double Input/output Double that specifies minor axis.
MajorRadius Double Input Double that specifies major radius.
MinorRadius Double Input Double that specifies the minor radius.
StartAngle Double
Input Double that specifies the elliptical arc's start angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
SweepAngle Double
Input Double that specifies the elliptical arc's sweep angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
Version
Introduced in version 6
EllipticalArc.StartAngle Property
Parent Object: EllipticalArc
Description
Specifies the start angle for the arc.
Syntax
EllipticalArc.StartAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 6
EllipticalArc Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
EllipticalArc.StartPoint Property
Parent Object: EllipticalArc
Description
Gets the start point for the arc.
Syntax
EllipticalArc.StartPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 6
EllipticalArc.SweepAngle Property
Parent Object: EllipticalArc
Description
Specifies the sweep angle from the start angle for the arc.
Syntax
EllipticalArc.SweepAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 6
EllipticalArc Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F26.htm 16/06/2025
EllipticalArc2d Object
Description
The EllipticalArc2d object. The object created is a transient mathematical object and is not
displayed graphically.
Methods
Name Description
Copy
Creates a copy of this EllipticalArc2d object. The result is entirely
independent and can be edited without affecting the original
EllipticalArc2d object.
GetEllipticalArcData Get the data defining this elliptical arc.
PutEllipticalArcData Method that sets the data defining this elliptical arc.
Properties
Name Description
Center Specifies the center point for the arc.
EndPoint Gets the end point for the arc.
Evaluator Gets the Curve2DEvaluator for the arc.
MajorAxis Specifies the major axis for the ellipse.
MajorRadius Specifies the major radius for the ellipse.
MinorRadius Specifies the minor radius for the ellipse.
StartAngle Specifies the start angle for the arc.
StartPoint Gets the start point for the arc.
SweepAngle Specifies the sweep angle from the start angle for the arc.
Accessed From
EllipticalArc2d.Copy, SketchEllipticalArc.Geometry, SketchEllipticalArcProxy.Geometry,
TransientGeometry.CreateEllipticalArc2d
Version
Introduced in version 5
EllipticalArc2d.Center Property
Parent Object: EllipticalArc2d
EllipticalArc2d Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Description
Specifies the center point for the arc.
Syntax
EllipticalArc2d.Center() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 5
EllipticalArc2d.Copy Method
Parent Object: EllipticalArc2d
Description
Creates a copy of this EllipticalArc2d object. The result is entirely independent and can be edited
without affecting the original EllipticalArc2d object.
Syntax
EllipticalArc2d.Copy() As EllipticalArc2d
Version
Introduced in version 2013
EllipticalArc2d.EndPoint Property
Parent Object: EllipticalArc2d
Description
Gets the end point for the arc.
EllipticalArc2d Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Syntax
EllipticalArc2d.EndPoint() As Point2d
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 5
EllipticalArc2d.Evaluator Property
Parent Object: EllipticalArc2d
Description
Gets the Curve2DEvaluator for the arc.
Syntax
EllipticalArc2d.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Version
Introduced in version 5
EllipticalArc2d.GetEllipticalArcData Method
Parent Object: EllipticalArc2d
Description
Get the data defining this elliptical arc.
EllipticalArc2d Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Syntax
EllipticalArc2d.GetEllipticalArcData( Center() As Double, MajorAxis() As Double,
MajorRadius As Double, MinorRadius As Double, StartAngle As Double, SweepAngle As
Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the elliptical arc's center.
MajorAxis Double Input/output Double that specifies major axis.
MajorRadius Double Output Double that specifies major radius.
MinorRadius Double Output Double that specifies the minor radius.
StartAngle Double
Output Double that specifies the elliptical arc's start angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
SweepAngle Double
Output Double that specifies the elliptical arc's sweep angle. This angle is
an elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
Version
Introduced in version 5
EllipticalArc2d.MajorAxis Property
Parent Object: EllipticalArc2d
Description
Specifies the major axis for the ellipse.
Syntax
EllipticalArc2d.MajorAxis() As UnitVector2d
Property Value
This is a read/write property whose value is a UnitVector2d.
EllipticalArc2d Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Version
Introduced in version 5
EllipticalArc2d.MajorRadius Property
Parent Object: EllipticalArc2d
Description
Specifies the major radius for the ellipse.
Syntax
EllipticalArc2d.MajorRadius() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 5
EllipticalArc2d.MinorRadius Property
Parent Object: EllipticalArc2d
Description
Specifies the minor radius for the ellipse.
Syntax
EllipticalArc2d.MinorRadius() As Double
Property Value
This is a read/write property whose value is a Double.
EllipticalArc2d Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Version
Introduced in version 5
EllipticalArc2d.PutEllipticalArcData Method
Parent Object: EllipticalArc2d
Description
Method that sets the data defining this elliptical arc.
Syntax
EllipticalArc2d.PutEllipticalArcData( Center() As Double, MajorAxis() As Double,
MajorRadius As Double, MinorRadius As Double, StartAngle As Double, SweepAngle As
Double )
Parameters
Name Type Description
Center Double Input/output Double that specifies the elliptical arc's center.
MajorAxis Double Input/output Double that specifies major axis.
MajorRadius Double Input Double that specifies major radius.
MinorRadius Double Input Double that specifies the minor radius.
StartAngle Double
Input Double that specifies the elliptical arc's start angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
SweepAngle Double
Input Double that specifies the elliptical arc's sweep angle. This angle is an
elliptical angle, not a circular angle, unlike the user interface which uses
circular angles in all cases. To convert from an elliptical angle to a circular
angle CircAngle = atn( tan(EllipAngle) * MinorRadius / MajorRadius ) To
convert from a circular angle to an elliptical angle EllipAngle = atn( tan
(CircAngle) * MajorRadius / MinorRadius )
Version
Introduced in version 5
EllipticalArc2d Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
EllipticalArc2d.StartAngle Property
Parent Object: EllipticalArc2d
Description
Specifies the start angle for the arc.
Syntax
EllipticalArc2d.StartAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 5
EllipticalArc2d.StartPoint Property
Parent Object: EllipticalArc2d
Description
Gets the start point for the arc.
Syntax
EllipticalArc2d.StartPoint() As Point2d
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 5
EllipticalArc2d.SweepAngle Property
EllipticalArc2d Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
Parent Object: EllipticalArc2d
Description
Specifies the sweep angle from the start angle for the arc.
Syntax
EllipticalArc2d.SweepAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 5
EllipticalArc2d Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh986B.htm 16/06/2025
EllipticalCone Object
Description
The EllipticalCone object. The object created is a transient mathematical object and is not
displayed graphically.
Methods
Name Description
Copy
Creates a copy of this EllipticalCone object. The result is entirely
independent and can be edited without affecting the original
EllipticalCone object.
GetEllipticalConeData Get the data defining this elliptical cone.
PutEllipticalConeData Method that sets the data defining this elliptical cone.
Properties
Name Description
AxisVector Specifies the direction of the axis of the elliptical cone.
BasePoint Specifies the base of the elliptical cone.
Evaluator Gets the surface evaluator for this elliptical cone.
HalfAngle
Specifies the taper angle of the elliptical cone. This is the angle measured from
the axis to the side of the elliptical cone.
IsExpanding
Specifies whether the taper of the elliptical cone is expanding outwards or
inwards in the direction of the axis vector. If True and the HalfAngle is
positive, then the elliptical cone is expanding outward along the axis vector.
MajorAxisVector Specifies the direction of the major axis of the elliptical cone.
MinorMajorRatio Specifies the ratio of the minor and major axes of the elliptical cone.
Accessed From
EllipticalCone.Copy, TransientGeometry.CreateEllipticalCone
Version
Introduced in version 4
EllipticalCone.AxisVector Property
Parent Object: EllipticalCone
EllipticalCone Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
Description
Specifies the direction of the axis of the elliptical cone.
Syntax
EllipticalCone.AxisVector() As UnitVector
Property Value
This is a read/write property whose value is a UnitVector.
Version
Introduced in version 4
EllipticalCone.BasePoint Property
Parent Object: EllipticalCone
Description
Specifies the base of the elliptical cone.
Syntax
EllipticalCone.BasePoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 4
EllipticalCone.Copy Method
Parent Object: EllipticalCone
Description
EllipticalCone Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
Creates a copy of this EllipticalCone object. The result is entirely independent and can be edited
without affecting the original EllipticalCone object.
Syntax
EllipticalCone.Copy() As EllipticalCone
Version
Introduced in version 2013
EllipticalCone.Evaluator Property
Parent Object: EllipticalCone
Description
Gets the surface evaluator for this elliptical cone.
Syntax
EllipticalCone.Evaluator() As SurfaceEvaluator
Property Value
This is a read only property whose value is a SurfaceEvaluator.
Version
Introduced in version 4
EllipticalCone.GetEllipticalConeData Method
Parent Object: EllipticalCone
Description
Get the data defining this elliptical cone.
EllipticalCone Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
Syntax
EllipticalCone.GetEllipticalConeData( BasePoint() As Double, AxisVector() As Double,
MajorAxis() As Double, MinorMajorRatio As Double, HalfAngle As Double, IsExpanding As
Boolean )
Parameters
Name Type Description
BasePoint Double Input/output Double that specifies base point.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Output Double that specifies the ratio of the minor and major axes of
the elliptical cone.
HalfAngle Double
Output Double that specifies the half-angle value for the elliptical
cone.
IsExpanding Boolean
Output Boolean that specifies whether the radius of the cone is
expanding or not, in the direction of the axis vector.
Version
Introduced in version 4
EllipticalCone.HalfAngle Property
Parent Object: EllipticalCone
Description
Specifies the taper angle of the elliptical cone. This is the angle measured from the axis to the side
of the elliptical cone.
Syntax
EllipticalCone.HalfAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
EllipticalCone Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
EllipticalCone.IsExpanding Property
Parent Object: EllipticalCone
Description
Specifies whether the taper of the elliptical cone is expanding outwards or inwards in the direction
of the axis vector. If True and the HalfAngle is positive, then the elliptical cone is expanding
outward along the axis vector.
Syntax
EllipticalCone.IsExpanding() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
EllipticalCone.MajorAxisVector Property
Parent Object: EllipticalCone
Description
Specifies the direction of the major axis of the elliptical cone.
Syntax
EllipticalCone.MajorAxisVector() As Vector
Property Value
This is a read/write property whose value is a Vector.
Version
Introduced in version 4
EllipticalCone Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
EllipticalCone.MinorMajorRatio Property
Parent Object: EllipticalCone
Description
Specifies the ratio of the minor and major axes of the elliptical cone.
Syntax
EllipticalCone.MinorMajorRatio() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
EllipticalCone.PutEllipticalConeData Method
Parent Object: EllipticalCone
Description
Method that sets the data defining this elliptical cone.
Syntax
EllipticalCone.PutEllipticalConeData( BasePoint() As Double, AxisVector() As Double,
MajorAxis() As Double, MinorMajorRatio As Double, HalfAngle As Double, IsExpanding As
Boolean )
Parameters
Name Type Description
BasePoint Double Input/output Double that specifies base point.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Input Double that specifies the ratio of the minor and major axes of
the elliptical cone.
HalfAngle Double Input Double that specifies the half-angle value for the elliptical cone.
EllipticalCone Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
IsExpanding Boolean Input Boolean that specifies whether the radius of the cone is
expanding or not, in the direction of the axis vector.
Version
Introduced in version 4
EllipticalCone Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB23D.htm 16/06/2025
EllipticalCylinder Object
Description
The EllipticalCylinder object. The object created is a transient mathematical object and is not
displayed graphically.
Methods
Name Description
Copy
Creates a copy of this EllipticalCylinder object. The result is entirely
independent and can be edited without affecting the original
EllipticalCylinder object.
GetEllipticalCylinderData Get the data defining this elliptical cylinder.
PutEllipticalCylinderData Method that sets the data defining this elliptical cylinder.
Properties
Name Description
AxisVector Specifies the direction of the axis of the elliptical cylinder.
BasePoint Specifies the base of the elliptical cylinder.
Evaluator Gets the surface evaluator for this elliptical cylinder.
MajorAxisVector Specifies the direction of the major axis of the elliptical cylinder.
MinorMajorRatio Specifies the ratio of the minor and major axes of the elliptical cylinder.
Accessed From
EllipticalCylinder.Copy, TransientGeometry.CreateEllipticalCylinder
Version
Introduced in version 4
EllipticalCylinder.AxisVector Property
Parent Object: EllipticalCylinder
Description
Specifies the direction of the axis of the elliptical cylinder.
EllipticalCylinder Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCBC0.htm 16/06/2025
Syntax
EllipticalCylinder.AxisVector() As UnitVector
Property Value
This is a read/write property whose value is a UnitVector.
Version
Introduced in version 4
EllipticalCylinder.BasePoint Property
Parent Object: EllipticalCylinder
Description
Specifies the base of the elliptical cylinder.
Syntax
EllipticalCylinder.BasePoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 4
EllipticalCylinder.Copy Method
Parent Object: EllipticalCylinder
Description
Creates a copy of this EllipticalCylinder object. The result is entirely independent and can be
edited without affecting the original EllipticalCylinder object.
EllipticalCylinder Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCBC0.htm 16/06/2025
Syntax
EllipticalCylinder.Copy() As EllipticalCylinder
Version
Introduced in version 2013
EllipticalCylinder.Evaluator Property
Parent Object: EllipticalCylinder
Description
Gets the surface evaluator for this elliptical cylinder.
Syntax
EllipticalCylinder.Evaluator() As SurfaceEvaluator
Property Value
This is a read only property whose value is a SurfaceEvaluator.
Version
Introduced in version 4
EllipticalCylinder.GetEllipticalCylinderData
Method
Parent Object: EllipticalCylinder
Description
Get the data defining this elliptical cylinder.
Syntax
EllipticalCylinder.GetEllipticalCylinderData( BasePoint() As Double, AxisVector() As Double,
MajorAxis() As Double, MinorMajorRatio As Double )
EllipticalCylinder Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCBC0.htm 16/06/2025
Parameters
Name Type Description
BasePoint Double Input/output Double that specifies base point.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Output Double that specifies the ratio of the minor and major axes of
the elliptical cylinder.
Version
Introduced in version 4
EllipticalCylinder.MajorAxisVector Property
Parent Object: EllipticalCylinder
Description
Specifies the direction of the major axis of the elliptical cylinder.
Syntax
EllipticalCylinder.MajorAxisVector() As Vector
Property Value
This is a read/write property whose value is a Vector.
Version
Introduced in version 4
EllipticalCylinder.MinorMajorRatio Property
Parent Object: EllipticalCylinder
Description
Specifies the ratio of the minor and major axes of the elliptical cylinder.
EllipticalCylinder Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCBC0.htm 16/06/2025
Syntax
EllipticalCylinder.MinorMajorRatio() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
EllipticalCylinder.PutEllipticalCylinderData
Method
Parent Object: EllipticalCylinder
Description
Method that sets the data defining this elliptical cylinder.
Syntax
EllipticalCylinder.PutEllipticalCylinderData( BasePoint() As Double, AxisVector() As Double,
MajorAxis() As Double, MinorMajorRatio As Double )
Parameters
Name Type Description
BasePoint Double Input/output Double that specifies base point.
AxisVector Double Input/output Double that specifies axis vector.
MajorAxis Double Input/output Double that specifies major axis.
MinorMajorRatio Double
Input Double that specifies the ratio of the minor and major axes of the
elliptical cylinder.
Version
Introduced in version 4
EllipticalCylinder Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCBC0.htm 16/06/2025
EmbossFeature Object
Derived from: PartFeature Object
Description
The EmbossFeature object represents an emboss feature on a part.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over
which dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method
returns False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly
feature. This method fails for features in a part.
SetAffectedBodies
Method that sets a collection of SurfaceBody objects affected by this
feature.
SetEmbossEngraveFromPlane
Method that redefines the emboss feature by embossing and/or
engraving a profile on one or more faces in the model.
SetEmbossFromFace
Method that redefines the emboss feature by embossing a profile on one
or more faces in the model.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from.
SetEngraveFromFace
Method that redefines the emboss feature by engraving a profile on one
or more faces in the model.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
Depth
Property returns the parameter controlling the depth of the emboss
feature.
Direction
Gets and sets the direction of the emboss feature relative to the sketch
plane that contains the emboss profile.
EmbossFeature Object Page 1 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossType Property that returns the type of emboss feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the
faces of the feature. The Faces collection object will return the faces
that still currently exist in the part. For example, if a face has been
consumed by additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
Name
Gets/Sets the name of this Part Feature within the scope of this
Document.
OwnedBy
Property that returns the owning PartFeature object. This property
returns Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature.
This list is empty for features in a part.
Profile Gets and sets the Profile object that defines the shape of the emboss.
RangeBox
Property that returns a Box object which contains the opposing points
of a rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies
Property that returns the bodies that this feature has created or
modified.
Taper
Property that returns the parameter controlling the taper angle of the
emboss feature.
TopFaceAppearance Gets and sets the top face appearance of the emboss feature.
TopFaceAppearanceSourceType
Gets and sets the source of the appearance for the top face of the
emboss feature.
Type Returns an ObjectTypeEnum indicating this object's type.
WrapFace Gets and sets the face around which the emboss feature is wrapped.
WrapToFace
Property that returns a Boolean indicating if the emboss feature is
wrapped around a face.
Accessed From
EmbossFeatureProxy.NativeObject, EmbossFeatures.AddEmbossEngraveFromPlane,
EmbossFeatures.AddEmbossFromFace, EmbossFeatures.AddEngraveFromFace, EmbossFeatures.Item
Derived Classes
EmbossFeatureProxy
EmbossFeature Object Page 2 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 6
EmbossFeature.Adaptive Property
Parent Object: EmbossFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
EmbossFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
EmbossFeature.Appearance Property
Parent Object: EmbossFeature
Description
Gets and sets the current appearance of the feature.
Syntax
EmbossFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
EmbossFeature Object Page 3 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeature.AppearanceSourceType
Property
Parent Object: EmbossFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
EmbossFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
EmbossFeature.Application Property
Parent Object: EmbossFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EmbossFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EmbossFeature Object Page 4 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeature.AttributeSets Property
Parent Object: EmbossFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EmbossFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
EmbossFeature.ConsumeInputs Property
Parent Object: EmbossFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
EmbossFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
EmbossFeature.Delete Method
Parent Object: EmbossFeature
EmbossFeature Object Page 5 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
EmbossFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature this
argument is ignored.
This is an optional argument whose default value is
False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent
features should be deleted. If there are no dependent
features this argument is ignored.
This is an optional argument whose default value is
False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent
work features should be deleted. If there are no
dependent work features this argument is ignored.
This is an optional argument whose default value is
False.
Version
Introduced in version 6
EmbossFeature.Depth Property
Parent Object: EmbossFeature
Description
Property returns the parameter controlling the depth of the emboss feature.
Syntax
EmbossFeature.Depth() As Parameter
EmbossFeature Object Page 6 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
EmbossFeature.Direction Property
Parent Object: EmbossFeature
Description
Gets and sets the direction of the emboss feature relative to the sketch plane that contains the emboss
profile.
Syntax
EmbossFeature.Direction() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
Version
Introduced in version 2008
EmbossFeature.EmbossType Property
Parent Object: EmbossFeature
Description
Property that returns the type of emboss feature.
Syntax
EmbossFeature.EmbossType() As EmbossTypeEnum
Property Value
This is a read only property whose value is an EmbossTypeEnum.
EmbossFeature Object Page 7 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 2008
EmbossFeature.ExtendedName Property
Parent Object: EmbossFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
EmbossFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
EmbossFeature.Faces Property
Parent Object: EmbossFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has been
consumed by additional modeling operations it will not be returned.
Syntax
EmbossFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
EmbossFeature Object Page 8 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 6
EmbossFeature.FeatureDimensions Property
Parent Object: EmbossFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
EmbossFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
EmbossFeature.GetReferenceKey Method
Parent Object: EmbossFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
EmbossFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge,
EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
EmbossFeature Object Page 9 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 6
EmbossFeature.GetSuppressionCondition
Method
Parent Object: EmbossFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has
been applied.
Syntax
EmbossFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is
to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison.
Valid return types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string or a parameter
object.
Version
Introduced in version 11
EmbossFeature.HealthStatus Property
Parent Object: EmbossFeature
EmbossFeature Object Page 10 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
EmbossFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 6
EmbossFeature.IsOwnedByFeature Property
Parent Object: EmbossFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns
the owning feature.
Syntax
EmbossFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
EmbossFeature.Name Property
Parent Object: EmbossFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
EmbossFeature Object Page 11 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Syntax
EmbossFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
EmbossFeature.OwnedBy Property
Parent Object: EmbossFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
EmbossFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
EmbossFeature.Parameters Property
Parent Object: EmbossFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
EmbossFeature.Parameters() As ParametersEnumerator
EmbossFeature Object Page 12 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
EmbossFeature.Parent Property
Parent Object: EmbossFeature
Description
Property that returns the parent of the feature.
Syntax
EmbossFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 6
EmbossFeature.Participants Property
Parent Object: EmbossFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a
part.
Syntax
EmbossFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
EmbossFeature Object Page 13 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 10
EmbossFeature.Profile Property
Parent Object: EmbossFeature
Description
Gets and sets the Profile object that defines the shape of the emboss.
Syntax
EmbossFeature.Profile() As Profile
Property Value
This is a read/write property whose value is a Profile.
Version
Introduced in version 2008
EmbossFeature.RangeBox Property
Parent Object: EmbossFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
EmbossFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 6
EmbossFeature Object Page 14 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeature.RemoveParticipant Method
Parent Object: EmbossFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for features
in a part.
Syntax
EmbossFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be
removed. An error occurs if the input ComponentOccurrence is not
a participant.
Version
Introduced in version 10
EmbossFeature.SetAffectedBodies Method
Parent Object: EmbossFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
EmbossFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
EmbossFeature Object Page 15 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeature.SetEmbossEngraveFromPlane
Method
Parent Object: EmbossFeature
Description
Method that redefines the emboss feature by embossing and/or engraving a profile on one or more faces
in the model.
Syntax
EmbossFeature.SetEmbossEngraveFromPlane( Taper As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
Taper Variant
Input Variant that defines the taper angle of the
emboss. This can be either a numeric value or a
string. A parameter for this value will be created
and the supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the
sketch plane the emboss feature should be placed.
Valid input is one of the constants in
PartFeatureExtentDirectionEnum:
kPositiveExtentDirection,
kNegativeExtentDirection or
kSymmetricExtentDirection. The value
kPositiveExtentDirection defines the emboss
direction to be in the same direction as the normal
of the sketch plane that contains the profile to be
embossed.
Version
Introduced in version 2008
EmbossFeature.SetEmbossFromFace Method
Parent Object: EmbossFeature
EmbossFeature Object Page 16 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Description
Method that redefines the emboss feature by embossing a profile on one or more faces in the model.
Syntax
EmbossFeature.SetEmbossFromFace( Distance As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [WrapFace] As Variant )
Parameters
Name Type Description
Distance Variant
Input Variant that defines the depth of the emboss.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter.
If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of
the string or it will default to the current length units
of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the
sketch plane the emboss feature should be placed.
Valid input is either kPositiveExtentDirection or
kNegativeExtentDirection constant value in
PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection
direction of the profile to be in the same direction as
the normal of the sketch plane that contains the
profile to be embossed. If
kSymmetricExtentDirection is specified, then the
emboss feature will fail to be redefined.
WrapFace Variant
Optional Input Variant that specifies the face around
which the emboss feature should be wrapped. The
valid input is a Face object. This argument can be
used to specify a curved face around which the
emboss feature should be wrapped. The face can
only be planar or conical, not a spline. If the emboss
profile is large relative to the amount of curvature,
the embossed or engraved area distorts slightly as it
projects to the curved face. The wrap stops when a
perpendicular face is encountered. If this argument
is not specified, then it implies that the emboss
feature should not be wrapped around any face, but
created as a result of straight projection onto the
face.
This is an optional argument whose default value is
null.
EmbossFeature Object Page 17 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 2008
EmbossFeature.SetEndOfPart Method
Parent Object: EmbossFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
EmbossFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or
after this work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 6
EmbossFeature.SetEngraveFromFace Method
Parent Object: EmbossFeature
Description
Method that redefines the emboss feature by engraving a profile on one or more faces in the model.
Syntax
EmbossFeature.SetEngraveFromFace( Distance As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [WrapFace] As Variant )
Parameters
Name Type Description
Distance Variant Input Variant that defines the depth of the emboss.
This can be either a numeric value or a string. A
parameter for this value will be created and the
EmbossFeature Object Page 18 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
supplied string or value is assigned to the parameter.
If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of
the string or it will default to the current length units
of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the
sketch plane the emboss feature should be placed.
Valid input is either kPositiveExtentDirection or
kNegativeExtentDirection constant value in
PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection
direction of the profile to be in the same direction as
the normal of the sketch plane that contains the
profile to be embossed. If
kSymmetricExtentDirection is specified, then the
emboss feature will fail to be redefined.
WrapFace Variant
Optional Input Variant that specifies the face around
which the emboss feature should be wrapped. The
valid input is a Face object. This argument can be
used to specify a curved face around which the
emboss feature should be wrapped. The face can
only be planar or conical, not a spline. If the emboss
profile is large relative to the amount of curvature,
the embossed or engraved area distorts slightly as it
projects to the curved face. The wrap stops when a
perpendicular face is encountered. If this argument
is not specified, then it implies that the emboss
feature should not be wrapped around any face, but
created as a result of straight projection onto the
face.
This is an optional argument whose default value is
null.
Version
Introduced in version 2008
EmbossFeature.SetSuppressionCondition
Method
Parent Object: EmbossFeature
Description
Method that sets the suppression condition for the feature.
EmbossFeature Object Page 19 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Syntax
EmbossFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is
to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison.
Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string, a value or a
parameter object. If a value is input, the database units for
the units defined by the parameter are used. For instance, if
the parameter defines length units, the value is assumed to be
in centimeters. If a string is input, the units can be specified
as part of the string or it will default to the current units of
the document. For instance, if the parameter defines length
units, the current length units of the document are used.
Version
Introduced in version 11
EmbossFeature.Shared Property
Parent Object: EmbossFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
EmbossFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
EmbossFeature Object Page 20 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Version
Introduced in version 11
EmbossFeature.Suppressed Property
Parent Object: EmbossFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
EmbossFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
EmbossFeature.SurfaceBodies Property
Parent Object: EmbossFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
EmbossFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
EmbossFeature Object Page 21 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeature.Taper Property
Parent Object: EmbossFeature
Description
Property that returns the parameter controlling the taper angle of the emboss feature.
Syntax
EmbossFeature.Taper() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
EmbossFeature.TopFaceAppearance Property
Parent Object: EmbossFeature
Description
Gets and sets the top face appearance of the emboss feature.
Syntax
EmbossFeature.TopFaceAppearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
EmbossFeature.TopFaceAppearanceSourceType
Property
EmbossFeature Object Page 22 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Parent Object: EmbossFeature
Description
Gets and sets the source of the appearance for the top face of the emboss feature.
Syntax
EmbossFeature.TopFaceAppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
EmbossFeature.Type Property
Parent Object: EmbossFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EmbossFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
EmbossFeature.WrapFace Property
Parent Object: EmbossFeature
Description
Gets and sets the face around which the emboss feature is wrapped.
EmbossFeature Object Page 23 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
Syntax
EmbossFeature.WrapFace() As Face
Property Value
This is a read/write property whose value is a Face.
Version
Introduced in version 2008
EmbossFeature.WrapToFace Property
Parent Object: EmbossFeature
Description
Property that returns a Boolean indicating if the emboss feature is wrapped around a face.
Syntax
EmbossFeature.WrapToFace() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
EmbossFeature Object Page 24 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE33F.htm 16/06/2025
EmbossFeatureProxy Object
Derived from: EmbossFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which dependent
objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns False
if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature. This
method fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEmbossEngraveFromPlane
Method that redefines the emboss feature by embossing and/or engraving a profile
on one or more faces in the model.
SetEmbossFromFace
Method that redefines the emboss feature by embossing a profile on one or more
faces in the model.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this method is
called from.
SetEngraveFromFace
Method that redefines the emboss feature by engraving a profile on one or more
faces in the model.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under this feature
in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Depth Property returns the parameter controlling the depth of the emboss feature.
Direction
Gets and sets the direction of the emboss feature relative to the sketch plane that
contains the emboss profile.
EmbossType Property that returns the type of emboss feature.
ExtendedName
Read-only property that returns the full feature name including any extended
information.
Faces Property that returns a collection that provides access to all of the faces of the
feature. The Faces collection object will return the faces that still currently exist in
EmbossFeatureProxy Object Page 1 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
the part. For example, if a face has been consumed by additional modeling
operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the
OwnedBy property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing
if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list is
empty for features in a part.
Profile Gets and sets the Profile object that defines the shape of the emboss.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to surface
features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Taper
Property that returns the parameter controlling the taper angle of the emboss
feature.
TopFaceAppearance Gets and sets the top face appearance of the emboss feature.
TopFaceAppearanceSourceType Gets and sets the source of the appearance for the top face of the emboss feature.
Type Returns an ObjectTypeEnum indicating this object's type.
WrapFace Gets and sets the face around which the emboss feature is wrapped.
WrapToFace
Property that returns a Boolean indicating if the emboss feature is wrapped around
a face.
Version
Introduced in version 9
EmbossFeatureProxy.Adaptive Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
EmbossFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
EmbossFeatureProxy Object Page 2 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Version
Introduced in version 9
EmbossFeatureProxy.Appearance Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
EmbossFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
EmbossFeatureProxy.AppearanceSourceType
Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
EmbossFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
EmbossFeatureProxy.Application Property
Parent Object: EmbossFeatureProxy
EmbossFeatureProxy Object Page 3 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EmbossFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
EmbossFeatureProxy.AttributeSets Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EmbossFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
EmbossFeatureProxy.ConsumeInputs Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
EmbossFeatureProxy.ConsumeInputs() As Boolean
EmbossFeatureProxy Object Page 4 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
EmbossFeatureProxy.ContainingOccurrence Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
EmbossFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
EmbossFeatureProxy.Delete Method
Parent Object: EmbossFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
EmbossFeatureProxy.Delete( [RetainConsumedSketches] As Boolean, [RetainDependentFeaturesAndSketches]
As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within the
feature should be deleted. If the feature being deleted is not a
sketch based feature this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean
EmbossFeatureProxy Object Page 5 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Optional input Boolean that specifies if dependent features should
be deleted. If there are no dependent features this argument is
ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features
should be deleted. If there are no dependent work features this
argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 9
EmbossFeatureProxy.Depth Property
Parent Object: EmbossFeatureProxy
Description
Property returns the parameter controlling the depth of the emboss feature.
Syntax
EmbossFeatureProxy.Depth() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
EmbossFeatureProxy.Direction Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the direction of the emboss feature relative to the sketch plane that contains the emboss profile.
Syntax
EmbossFeatureProxy.Direction() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
EmbossFeatureProxy Object Page 6 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Version
Introduced in version 2008
EmbossFeatureProxy.EmbossType Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the type of emboss feature.
Syntax
EmbossFeatureProxy.EmbossType() As EmbossTypeEnum
Property Value
This is a read only property whose value is an EmbossTypeEnum.
Version
Introduced in version 2008
EmbossFeatureProxy.ExtendedName Property
Parent Object: EmbossFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
EmbossFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
EmbossFeatureProxy.Faces Property
Parent Object: EmbossFeatureProxy
EmbossFeatureProxy Object Page 7 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
Syntax
EmbossFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
EmbossFeatureProxy.FeatureDimensions Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
EmbossFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
EmbossFeatureProxy.GetReferenceKey Method
Parent Object: EmbossFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EmbossFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
EmbossFeatureProxy Object Page 8 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working
with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex
objects). A key context is created using the CreateKeyContext method of the
ReferenceKeyManager object. For all other object types, the key context argument is not used
and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 9
EmbossFeatureProxy.GetSuppressionCondition
Method
Parent Object: EmbossFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been
applied.
Syntax
EmbossFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be
checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid
return types are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter
value. This can either be a string or a parameter object.
Version
Introduced in version 11
EmbossFeatureProxy.HealthStatus Property
Parent Object: EmbossFeatureProxy
EmbossFeatureProxy Object Page 9 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
EmbossFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
EmbossFeatureProxy.IsOwnedByFeature Property
Parent Object: EmbossFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Syntax
EmbossFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
EmbossFeatureProxy.Name Property
Parent Object: EmbossFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
EmbossFeatureProxy.Name() As String
EmbossFeatureProxy Object Page 10 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
EmbossFeatureProxy.NativeObject Property
Parent Object: EmbossFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EmbossFeatureProxy.NativeObject() As EmbossFeature
Property Value
This is a read only property whose value is an EmbossFeature.
Version
Introduced in version 9
EmbossFeatureProxy.OwnedBy Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Syntax
EmbossFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
EmbossFeatureProxy Object Page 11 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
EmbossFeatureProxy.Parameters Property
Parent Object: EmbossFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
EmbossFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
EmbossFeatureProxy.Parent Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
EmbossFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
EmbossFeatureProxy.Participants Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
EmbossFeatureProxy Object Page 12 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Syntax
EmbossFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
EmbossFeatureProxy.Profile Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the Profile object that defines the shape of the emboss.
Syntax
EmbossFeatureProxy.Profile() As Profile
Property Value
This is a read/write property whose value is a Profile.
Version
Introduced in version 2008
EmbossFeatureProxy.RangeBox Property
Parent Object: EmbossFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Syntax
EmbossFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
EmbossFeatureProxy Object Page 13 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Version
Introduced in version 9
EmbossFeatureProxy.RemoveParticipant Method
Parent Object: EmbossFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
EmbossFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed. An
error occurs if the input ComponentOccurrence is not a participant.
Version
Introduced in version 10
EmbossFeatureProxy.SetAffectedBodies Method
Parent Object: EmbossFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
EmbossFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
EmbossFeatureProxy Object Page 14 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
EmbossFeatureProxy.SetEmbossEngraveFromPlane
Method
Parent Object: EmbossFeatureProxy
Description
Method that redefines the emboss feature by embossing and/or engraving a profile on one or more faces in the
model.
Syntax
EmbossFeatureProxy.SetEmbossEngraveFromPlane( Taper As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
Taper Variant
Input Variant that defines the taper angle of the emboss. This
can be either a numeric value or a string. A parameter for this
value will be created and the supplied string or value is assigned
to the parameter. If a value is input, the units are centimeters. If
a string is input, the units can be specified as part of the string or
it will default to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the sketch plane
the emboss feature should be placed. Valid input is one of the
constants in PartFeatureExtentDirectionEnum:
kPositiveExtentDirection, kNegativeExtentDirection or
kSymmetricExtentDirection. The value
kPositiveExtentDirection defines the emboss direction to be in
the same direction as the normal of the sketch plane that contains
the profile to be embossed.
Version
Introduced in version 2008
EmbossFeatureProxy.SetEmbossFromFace Method
Parent Object: EmbossFeatureProxy
Description
Method that redefines the emboss feature by embossing a profile on one or more faces in the model.
Syntax
EmbossFeatureProxy.SetEmbossFromFace( Distance As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [WrapFace] As Variant )
EmbossFeatureProxy Object Page 15 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Parameters
Name Type Description
Distance Variant
Input Variant that defines the depth of the emboss. This can be
either a numeric value or a string. A parameter for this value will
be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the sketch plane
the emboss feature should be placed. Valid input is either
kPositiveExtentDirection or kNegativeExtentDirection constant
value in PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection direction of the
profile to be in the same direction as the normal of the sketch
plane that contains the profile to be embossed. If
kSymmetricExtentDirection is specified, then the emboss feature
will fail to be redefined.
WrapFace Variant
Optional Input Variant that specifies the face around which the
emboss feature should be wrapped. The valid input is a Face
object. This argument can be used to specify a curved face
around which the emboss feature should be wrapped. The face
can only be planar or conical, not a spline. If the emboss profile
is large relative to the amount of curvature, the embossed or
engraved area distorts slightly as it projects to the curved face.
The wrap stops when a perpendicular face is encountered. If this
argument is not specified, then it implies that the emboss feature
should not be wrapped around any face, but created as a result of
straight projection onto the face.
This is an optional argument whose default value is null.
Version
Introduced in version 2008
EmbossFeatureProxy.SetEndOfPart Method
Parent Object: EmbossFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
EmbossFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this
work feature. A value of True indicates before and False indicates after.
EmbossFeatureProxy Object Page 16 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Version
Introduced in version 9
EmbossFeatureProxy.SetEngraveFromFace Method
Parent Object: EmbossFeatureProxy
Description
Method that redefines the emboss feature by engraving a profile on one or more faces in the model.
Syntax
EmbossFeatureProxy.SetEngraveFromFace( Distance As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [WrapFace] As Variant )
Parameters
Name Type Description
Distance Variant
Input Variant that defines the depth of the emboss. This can be
either a numeric value or a string. A parameter for this value will
be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the sketch plane
the emboss feature should be placed. Valid input is either
kPositiveExtentDirection or kNegativeExtentDirection constant
value in PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection direction of the
profile to be in the same direction as the normal of the sketch
plane that contains the profile to be embossed. If
kSymmetricExtentDirection is specified, then the emboss feature
will fail to be redefined.
WrapFace Variant
Optional Input Variant that specifies the face around which the
emboss feature should be wrapped. The valid input is a Face
object. This argument can be used to specify a curved face
around which the emboss feature should be wrapped. The face
can only be planar or conical, not a spline. If the emboss profile
is large relative to the amount of curvature, the embossed or
engraved area distorts slightly as it projects to the curved face.
The wrap stops when a perpendicular face is encountered. If this
argument is not specified, then it implies that the emboss feature
should not be wrapped around any face, but created as a result of
straight projection onto the face.
This is an optional argument whose default value is null.
Version
Introduced in version 2008
EmbossFeatureProxy Object Page 17 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
EmbossFeatureProxy.SetSuppressionCondition
Method
Parent Object: EmbossFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
EmbossFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be
checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid types
are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter
value. This can either be a string, a value or a parameter object. If a value
is input, the database units for the units defined by the parameter are
used. For instance, if the parameter defines length units, the value is
assumed to be in centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units, the current
length units of the document are used.
Version
Introduced in version 11
EmbossFeatureProxy.Shared Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
EmbossFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
EmbossFeatureProxy Object Page 18 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Version
Introduced in version 11
EmbossFeatureProxy.Suppressed Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
EmbossFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
EmbossFeatureProxy.SurfaceBodies Property
Parent Object: EmbossFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
EmbossFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
EmbossFeatureProxy.Taper Property
Parent Object: EmbossFeatureProxy
EmbossFeatureProxy Object Page 19 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Description
Property that returns the parameter controlling the taper angle of the emboss feature.
Syntax
EmbossFeatureProxy.Taper() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
EmbossFeatureProxy.TopFaceAppearance Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the top face appearance of the emboss feature.
Syntax
EmbossFeatureProxy.TopFaceAppearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
EmbossFeatureProxy.TopFaceAppearanceSourceType
Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the source of the appearance for the top face of the emboss feature.
Syntax
EmbossFeatureProxy.TopFaceAppearanceSourceType() As AppearanceSourceTypeEnum
EmbossFeatureProxy Object Page 20 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
EmbossFeatureProxy.Type Property
Parent Object: EmbossFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EmbossFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
EmbossFeatureProxy.WrapFace Property
Parent Object: EmbossFeatureProxy
Description
Gets and sets the face around which the emboss feature is wrapped.
Syntax
EmbossFeatureProxy.WrapFace() As Face
Property Value
This is a read/write property whose value is a Face.
Version
Introduced in version 2008
EmbossFeatureProxy Object Page 21 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
EmbossFeatureProxy.WrapToFace Property
Parent Object: EmbossFeatureProxy
Description
Property that returns a Boolean indicating if the emboss feature is wrapped around a face.
Syntax
EmbossFeatureProxy.WrapToFace() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
EmbossFeatureProxy Object Page 22 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CED.htm 16/06/2025
EmbossFeatures Object
Description
The EmbossFeatures object represents a collection of objects on a part.
Methods
Name Description
AddEmbossEngraveFromPlane
Method that creates a new emboss feature by embossing and/or
engraving a profile on one or more faces in the model.
AddEmbossFromFace
Method that creates a new emboss feature by embossing a profile on
one or more faces in the model.
AddEngraveFromFace
Method that creates a new emboss feature by engraving a profile on
one or more faces in the model.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified EmbossFeature object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
FlatPatternFeatures.EmbossFeatures, PartFeatures.EmbossFeatures,
SheetMetalFeatures.EmbossFeatures
Version
Introduced in version 6
EmbossFeatures.AddEmbossEngraveFromPlane
Method
Parent Object: EmbossFeatures
Description
EmbossFeatures Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
Method that creates a new emboss feature by embossing and/or engraving a profile on one or more
faces in the model.
Syntax
EmbossFeatures.AddEmbossEngraveFromPlane( Profile As Profile, Taper As Variant,
ExtentDirection As PartFeatureExtentDirectionEnum, [TopFaceColor] As Variant ) As
EmbossFeature
Parameters
Name Type Description
Profile Profile
Input Profile object used to define the shape of the
emboss. The specified profile must be closed,
otherwise (i.e. if the profile is open), the creation
of the emboss feature will fail. The closed profiles
can constitute both sketch entities as well as text.
Taper Variant
Input Variant that defines the taper angle of the
emboss. This can be either a numeric value or a
string. A parameter for this value will be created
and the supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to
the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the
sketch plane the emboss feature should be created.
The profile will be extended to create the emboss
feature starting from the sketch plane until any
existing face in the model is intersected. Valid
input is any one of the constants in
PartFeatureExtentDirectionEnum:
kPositiveExtentDirection,
kNegativeExtentDirection or
kSymmetricExtentDirection. The value
kPositiveExtentDirection defines the emboss
direction to be in the same direction as the normal
of the sketch plane that contains the profile to be
embossed.
TopFaceColor Variant
Optional Input Variant that defines the render style
to use for the top face of the emboss feature. The
valid input is a RenderStyle object. If no input is
specified, then the default render style will be
applied.
This is an optional argument whose default value is
null.
EmbossFeatures Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
Remarks
If the emboss feature is created successfully, an EmbossFeature object corresponding to the newly
created emboss feature is returned from this method.
Version
Introduced in version 2008
EmbossFeatures.AddEmbossFromFace Method
Parent Object: EmbossFeatures
Description
Method that creates a new emboss feature by embossing a profile on one or more faces in the model.
Syntax
EmbossFeatures.AddEmbossFromFace( Profile As Profile, Distance As Variant, ExtentDirection
As PartFeatureExtentDirectionEnum, [TopFaceColor] As Variant, [WrapFace] As Variant ) As
EmbossFeature
Parameters
Name Type Description
Profile Profile
Input Profile object used to define the shape of the
emboss. The specified profile must be closed,
otherwise (i.e. if the profile is open), the creation
of the emboss feature will fail. The closed profiles
can constitute both sketch entities as well as text.
Distance Variant
Input Variant that defines the depth of the emboss.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to
the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum Input constant that indicates on which side of the
sketch plane the emboss feature should be created.
First, the profile will be projected along the
specified direction onto all faces that are in that
direction. Then, the emboss feature will be
generated by embossing the projected profile on
these faces. Valid input is either
kPositiveExtentDirection or
EmbossFeatures Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
kNegativeExtentDirection constant value in
PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection
direction of the profile to be in the same direction
as the normal of the sketch plane that contains the
profile to be embossed. If
kSymmetricExtentDirection is specified, then the
creation of the emboss feature will fail.
TopFaceColor Variant
Optional Input Variant that defines the render style
to use for the top face of the emboss feature. The
valid input is a RenderStyle object. If no input is
specified, then the default render style will be
applied.
This is an optional argument whose default value is
null.
WrapFace Variant
Optional Input Variant that specifies the face
around which the emboss feature should be
wrapped. The valid input is a Face object. This
argument can be used to specify a curved face
around which the emboss feature should be
wrapped. The face can only be planar or conical,
not a spline. If the emboss profile is large relative
to the amount of curvature, the embossed or
engraved area distorts slightly as it projects to the
curved face. The wrap stops when a perpendicular
face is encountered. If this argument is not
specified, then it implies that the emboss feature
should not be wrapped around any face, but
created as a result of straight projection onto the
face.
This is an optional argument whose default value is
null.
Remarks
If the emboss feature is created successfully, an EmbossFeature object corresponding to the newly
created emboss feature is returned from this method.
Version
Introduced in version 2008
EmbossFeatures Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
EmbossFeatures.AddEngraveFromFace
Method
Parent Object: EmbossFeatures
Description
Method that creates a new emboss feature by engraving a profile on one or more faces in the model.
Syntax
EmbossFeatures.AddEngraveFromFace( Profile As Profile, Distance As Variant, ExtentDirection
As PartFeatureExtentDirectionEnum, [TopFaceColor] As Variant, [WrapFace] As Variant ) As
EmbossFeature
Parameters
Name Type Description
Profile Profile
Input Profile object used to define the shape of the
emboss. The specified profile must be closed,
otherwise (i.e. if the profile is open), the creation
of the emboss feature will fail. The closed profiles
can constitute both sketch entities as well as text.
Distance Variant
Input Variant that defines the depth of the emboss.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to
the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates on which side of the
sketch plane the emboss feature should be created.
First, the profile will be projected along the
specified direction onto all faces that are in that
direction. Then, the emboss feature will be
generated by engraving the projected profile on
these faces. Valid input is either
kPositiveExtentDirection or
kNegativeExtentDirection constant value in
PartFeatureExtentDirectionEnum. The value
kPositiveExtentDirection defines the projection
direction of the profile to be in the same direction
as the normal of the sketch plane that contains the
profile to be embossed. If
kSymmetricExtentDirection is specified, then the
creation of the emboss feature will fail.
EmbossFeatures Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
TopFaceColor Variant Optional Input Variant that defines the render style
to use for the top face of the emboss feature. The
valid input is a RenderStyle object. If no input is
specified, then the default render style will be
applied.
This is an optional argument whose default value is
null.
WrapFace Variant
Optional Input Variant that specifies the face
around which the emboss feature should be
wrapped. The valid input is a Face object. This
argument can be used to specify a curved face
around which the emboss feature should be
wrapped. The face can only be planar or conical,
not a spline. If the emboss profile is large relative
to the amount of curvature, the embossed or
engraved area distorts slightly as it projects to the
curved face. The wrap stops when a perpendicular
face is encountered. If this argument is not
specified, then it implies that the emboss feature
should not be wrapped around any face, but
created as a result of straight projection onto the
face.
This is an optional argument whose default value is
null.
Remarks
If the emboss feature is created successfully, an EmbossFeature object corresponding to the newly
created emboss feature is returned from this method.
Version
Introduced in version 2008
EmbossFeatures.Application Property
Parent Object: EmbossFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
EmbossFeatures Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
Syntax
EmbossFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EmbossFeatures.Count Property
Parent Object: EmbossFeatures
Description
Property that returns the number of items in this collection.
Syntax
EmbossFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
EmbossFeatures.Item Property
Parent Object: EmbossFeatures
Description
Returns the specified EmbossFeature object from the collection.
Syntax
EmbossFeatures.Item( Index As Variant ) As EmbossFeature
EmbossFeatures Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
Property Value
This is a read only property whose value is an EmbossFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string indicating
the feature name. If an out of range index or a name of a non-existent feature is
provided, an error occurs.
Version
Introduced in version 6
EmbossFeatures.Type Property
Parent Object: EmbossFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EmbossFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
EmbossFeatures Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh55B0.htm 16/06/2025
EndOfFeatures Object
Description
This object represents the End of Part marker in the browser. When traversing through the browser
hierarchy, this is one of the nodes that is encountered, indicating the position of the marker in the
browser.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 10
EndOfFeatures.Application Property
Parent Object: EndOfFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EndOfFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
EndOfFeatures Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7202.htm 16/06/2025
Version
Introduced in version 10
EndOfFeatures.Parent Property
Parent Object: EndOfFeatures
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
EndOfFeatures.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 10
EndOfFeatures.Type Property
Parent Object: EndOfFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EndOfFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
EndOfFeatures Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7202.htm 16/06/2025
Version
Introduced in version 10
EndOfFeatures Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7202.htm 16/06/2025
Environment Object
Description
The Environment object represents any Autodesk Inventor environment. Example environments
are Part, Assembly, Sketch, etc. The Environment represents the current state of an environment.
See the UI customization and Environments overviews for more information.
Methods
Name Description
Delete
Method that deletes the environment. This method will fail for built-in
environments.
GetRadialMarkingMenu
Returns the RadialMarkingMenu object that can be used to query and
set the commands available in the radial menu for the input object type.
Properties
Name Description
AdditionalVisibleRibbonTabs
Gets and sets an array of strings containing the internal names
of ribbon tabs that should be displayed in this environment.
These are in addition to the tabs displayed as a result of setting
the InheritAllRibbonTabs property to True.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is
returned.
BuiltIn
Property that specifies if the Environment a standard Autodesk
Inventor Environment or if it has been added by a client. Builtin
environments have restrictions in the edits that can be
performed. For example, build-in environments cannot be
deleted. For more information, see the Environments overview.
ClientId
Property that returns the string that uniquely identifies the
client. This is the CLSID of the AddIn in a string form, e.g.
"{C9A6C580-3817-11D0-BE4E-080036E87B02}".
DefaultRibbonTab
Gets and sets the internal name of the ribbon tab that should be
displayed when this environment is activated.
DisabledCommandList
Property that returns the DisabledCommandList object. This
object allows the environment to disable commands when this
environment is active. This list contains commands that are
disabled in addition to those specified by the
DisabledCommandTypes property.
DisabledCommandTypes Gets list of disabled command types for the Environment.
DisplayName Display Name of the Environment.
ExitDisplayName Gets and sets the exit display name of the environment, to be
used on the Finish button. As default this will be the same as
Environment Object Page 1 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
the DisplayName. This is the name displayed to the user and
should be localized for the current locale.
InheritAllRibbonTabs
Gets and sets whether this environment should inherit all ribbon
tabs from the 'base' environment. This property applies only to
custom environments. If set to True, all visible tabs in the base
environment are displayed in this environment.
InternalName Property that indicates the name of the environment.
LargeIcon Gets and sets the LargeIcon for the Environment.
Parent Property that returns the parent of the environment.
PreserveWhenSwitchModelState
Gets and sets whether the environment status would be
preserved when switch model state in an assembly. This would
make sure the environment to be preserved when switch
between substitute model state and other model state in an
assembly.For built-in environmen.
RadialMarkingMenus
Returns the RadialMarkingMenus object that can be used to
query and set the selection based radial menu.
Ribbon
Property that returns the Ribbon object associated with this
environment. This property returns Nothing when the
environment is initially created and not yet applied as an
override or a parallel environment.
StandardIcon Gets and sets the StandardIcon for the Environment.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EnvironmentList.Item, EnvironmentManager.BaseEnvironment,
EnvironmentManager.EditObjectEnvironment, EnvironmentManager.GetCurrentEnvironment,
EnvironmentManager.OverrideEnvironment, Environments.Add, Environments.Item,
PanelBar.Parent, UserInterfaceManager.ActiveEnvironment
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override
environment.
Version
Introduced in version 5
Environment Object Page 2 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Environment.AdditionalVisibleRibbonTabs
Property
Parent Object: Environment
Description
Gets and sets an array of strings containing the internal names of ribbon tabs that should be
displayed in this environment. These are in addition to the tabs displayed as a result of setting the
InheritAllRibbonTabs property to True.
Syntax
Environment.AdditionalVisibleRibbonTabs() As Variant
Property Value
This is a read/write property whose value is a Variant.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override
environment.
Version
Introduced in version 2010
Environment.Application Property
Parent Object: Environment
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Environment Object Page 3 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Syntax
Environment.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 5
Environment.BuiltIn Property
Parent Object: Environment
Description
Property that specifies if the Environment a standard Autodesk Inventor Environment or if it has
been added by a client. Built-in environments have restrictions in the edits that can be performed.
For example, build-in environments cannot be deleted. For more information, see the
Environments overview.
Syntax
Environment.BuiltIn() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
Environment.ClientId Property
Parent Object: Environment
Description
Property that returns the string that uniquely identifies the client. This is the CLSID of the AddIn
in a string form, e.g. "{C9A6C580-3817-11D0-BE4E-080036E87B02}".
Environment Object Page 4 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Syntax
Environment.ClientId() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
Environment.DefaultRibbonTab Property
Parent Object: Environment
Description
Gets and sets the internal name of the ribbon tab that should be displayed when this environment
is activated.
Syntax
Environment.DefaultRibbonTab() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override
environment.
Version
Introduced in version 2010
Environment Object Page 5 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Environment.Delete Method
Parent Object: Environment
Description
Method that deletes the environment. This method will fail for built-in environments.
Syntax
Environment.Delete()
Version
Introduced in version 9
Environment.DisabledCommandList
Property
Parent Object: Environment
Description
Property that returns the DisabledCommandList object. This object allows the environment to
disable commands when this environment is active. This list contains commands that are disabled
in addition to those specified by the DisabledCommandTypes property.
Syntax
Environment.DisabledCommandList() As DisabledCommandList
Property Value
This is a read only property whose value is a DisabledCommandList.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Environment Object Page 6 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Version
Introduced in version 10
Environment.DisabledCommandTypes
Property
Parent Object: Environment
Description
Gets list of disabled command types for the Environment.
Syntax
Environment.DisabledCommandTypes() As CommandTypesEnum
Property Value
This is a read/write property whose value is a CommandTypesEnum.
Version
Introduced in version 10
Environment.DisplayName Property
Parent Object: Environment
Description
Display Name of the Environment.
Syntax
Environment.DisplayName() As String
Property Value
This is a read/write property whose value is a String.
Environment Object Page 7 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Version
Introduced in version 5
Environment.ExitDisplayName Property
Parent Object: Environment
Description
Gets and sets the exit display name of the environment, to be used on the Finish button. As default
this will be the same as the DisplayName. This is the name displayed to the user and should be
localized for the current locale.
Syntax
Environment.ExitDisplayName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2020
Environment.GetRadialMarkingMenu
Method
Parent Object: Environment
Description
Returns the RadialMarkingMenu object that can be used to query and set the commands available
in the radial menu for the input object type.
Syntax
Environment.GetRadialMarkingMenu( [ObjectType] As Variant ) As RadialMarkingMenu
Parameters
Environment Object Page 8 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Name Type Description
ObjectType Variant
Optional input ObjectTypeEnum that specifies the object type to retrieve the
marking menu for. If not provided, the marking menu for the default
environment state (no selections) is returned.
This is an optional argument whose default value is null.
Version
Introduced in version 2012
Environment.InheritAllRibbonTabs Property
Parent Object: Environment
Description
Gets and sets whether this environment should inherit all ribbon tabs from the 'base' environment.
This property applies only to custom environments. If set to True, all visible tabs in the base
environment are displayed in this environment.
Syntax
Environment.InheritAllRibbonTabs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Creation of an override environment for
a document
A new ribbon tab is created and associated with the
override environment.
Version
Introduced in version 2010
Environment.InternalName Property
Parent Object: Environment
Environment Object Page 9 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Description
Property that indicates the name of the environment.
Syntax
Environment.InternalName() As String
Property Value
This is a read only property whose value is a String.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Play back a simulation This sample plays back an existing dynamic simulation.
Version
Introduced in version 5
Environment.LargeIcon Property
Parent Object: Environment
Description
Gets and sets the LargeIcon for the Environment.
Syntax
Environment.LargeIcon() As IPictureDisp
Property Value
This is a read/write property whose value is an IPictureDisp.
Version
Introduced in version 10
Environment Object Page 10 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Environment.Parent Property
Parent Object: Environment
Description
Property that returns the parent of the environment.
Syntax
Environment.Parent() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 5
Environment.PreserveWhenSwitchModelState
Property
Parent Object: Environment
Description
Gets and sets whether the environment status would be preserved when switch model state in an
assembly. This would make sure the environment to be preserved when switch between substitute
model state and other model state in an assembly.For built-in environmen.
Syntax
Environment.PreserveWhenSwitchModelState() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2022
Environment Object Page 11 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Environment.RadialMarkingMenus Property
Parent Object: Environment
Description
Returns the RadialMarkingMenus object that can be used to query and set the selection based
radial menu.
Syntax
Environment.RadialMarkingMenus() As RadialMarkingMenus
Property Value
This is a read only property whose value is a RadialMarkingMenus.
Version
Introduced in version 2013
Environment.Ribbon Property
Parent Object: Environment
Description
Property that returns the Ribbon object associated with this environment. This property returns
Nothing when the environment is initially created and not yet applied as an override or a parallel
environment.
Syntax
Environment.Ribbon() As Ribbon
Property Value
This is a read only property whose value is a Ribbon.
Version
Introduced in version 2010
Environment Object Page 12 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
Environment.StandardIcon Property
Parent Object: Environment
Description
Gets and sets the StandardIcon for the Environment.
Syntax
Environment.StandardIcon() As IPictureDisp
Property Value
This is a read/write property whose value is an IPictureDisp.
Version
Introduced in version 10
Environment.Type Property
Parent Object: Environment
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Environment.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
Environment Object Page 13 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88D6.htm 16/06/2025
EnvironmentList Object
Description
The EnvironmentList object defines a list of environments that are displayed to the user in various
contexts. For more information, refer to the Environments overviews.
Methods
Name Description
Add
Method that adds an Environment object to the list. The method returns an error if a
built-in Environment is supplied.
Remove Method that removes the specified Environment from the list.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of environments currently in the list.
Item Returns the specified Environment object from the list.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UserInterfaceManager.ParallelEnvironments
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Version
Introduced in version 10
EnvironmentList.Add Method
Parent Object: EnvironmentList
EnvironmentList Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA6AF.htm 16/06/2025
Description
Method that adds an Environment object to the list. The method returns an error if a built-in
Environment is supplied.
Syntax
EnvironmentList.Add( Environment As Environment )
Parameters
Name Type Description
Environment Environment Input Environment object to add to the list.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Version
Introduced in version 10
EnvironmentList.Application Property
Parent Object: EnvironmentList
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EnvironmentList.Application() As Application
Property Value
This is a read only property whose value is an Application.
EnvironmentList Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA6AF.htm 16/06/2025
Version
Introduced in version 10
EnvironmentList.Count Property
Parent Object: EnvironmentList
Description
Property that returns the number of environments currently in the list.
Syntax
EnvironmentList.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
EnvironmentList.Item Property
Parent Object: EnvironmentList
Description
Returns the specified Environment object from the list.
Syntax
EnvironmentList.Item( Index As Long ) As Environment
Property Value
This is a read only property whose value is an Environment.
Parameters
EnvironmentList Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA6AF.htm 16/06/2025
Name Type Description
Index Long Input Long that specifies the object within the list to return.
Version
Introduced in version 10
EnvironmentList.Remove Method
Parent Object: EnvironmentList
Description
Method that removes the specified Environment from the list.
Syntax
EnvironmentList.Remove( Index As Long )
Parameters
Name Type Description
Index Long Long that specifies the index of the Environment to remove from the list.
Version
Introduced in version 10
EnvironmentList.Type Property
Parent Object: EnvironmentList
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EnvironmentList.Type() As ObjectTypeEnum
EnvironmentList Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA6AF.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
EnvironmentList Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA6AF.htm 16/06/2025
EnvironmentManager Object
Description
This object provides methods and properties to get and set the base and override environments for
this document. For more information, refer to the Environments overviews.
Methods
Name Description
GetCurrentEnvironment
Method that gets the current Environment for this document. This is the
environment that the document is currently displayed in.
SetCurrentEnvironment
Method that sets the current Environment for this document. This is the
environment that the document is currently displayed in. The change is not
persisted with the document; i.e. the next time the document is opened, it
will show up in its base environment or the override environment if
specified.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BaseEnvironment
Property that returns the Environment that is defined as the default for this
document. This is the environment displayed when the document is opened
unless an override environment has been specified for this document.
EditObjectEnvironment
This method returns the environment associated with the currently active
edit object. This is the environment which is the topmost entry in the
Application menu. Since Autodesk Inventor 10, the active environment and
EditObjectEnvironment are not necessarily the same. Using parallel
environments, one can switch to a parallel environment for the same edit
object.
OverrideEnvironment Gets and sets the current override environment for this document.
Parent Property that returns the parent of the EnvironmentManager.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyDocument.EnvironmentManager, DrawingDocument.EnvironmentManager,
PartDocument.EnvironmentManager, PresentationDocument.EnvironmentManager
Samples
Name Description
Play back a simulation This sample plays back an existing dynamic simulation.
EnvironmentManager Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
Creation of an override environment for a
document
A new ribbon tab is created and associated with the
override environment.
Version
Introduced in version 10
EnvironmentManager.Application Property
Parent Object: EnvironmentManager
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EnvironmentManager.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 10
EnvironmentManager.BaseEnvironment
Property
Parent Object: EnvironmentManager
Description
Property that returns the Environment that is defined as the default for this document. This is the
environment displayed when the document is opened unless an override environment has been
specified for this document.
Syntax
EnvironmentManager.BaseEnvironment() As Environment
EnvironmentManager Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
Property Value
This is a read only property whose value is an Environment.
Version
Introduced in version 10
EnvironmentManager.EditObjectEnvironment
Property
Parent Object: EnvironmentManager
Description
This method returns the environment associated with the currently active edit object. This is the
environment which is the topmost entry in the Application menu. Since Autodesk Inventor 10, the
active environment and EditObjectEnvironment are not necessarily the same. Using parallel
environments, one can switch to a parallel environment for the same edit object.
Syntax
EnvironmentManager.EditObjectEnvironment() As Environment
Property Value
This is a read only property whose value is an Environment.
Version
Introduced in version 10
EnvironmentManager.GetCurrentEnvironment
Method
Parent Object: EnvironmentManager
Description
Method that gets the current Environment for this document. This is the environment that the
document is currently displayed in.
EnvironmentManager Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
Syntax
EnvironmentManager.GetCurrentEnvironment( Environment As Environment, EditTargetId As
String )
Parameters
Name Type Description
Environment Environment Output Environment that the document is currently displayed in.
EditTargetId String
Output string (if available) that contains the edit target identifier if
specified by the client. The string indicates the edit target associated with
this instance of the environment.
Version
Introduced in version 10
EnvironmentManager.OverrideEnvironment
Property
Parent Object: EnvironmentManager
Description
Gets and sets the current override environment for this document.
Syntax
EnvironmentManager.OverrideEnvironment() As Environment
Property Value
This is a read/write property whose value is an Environment.
Samples
Name Description
Creation of an override environment for a
document
A new ribbon tab is created and associated with the
override environment.
Version
Introduced in version 10
EnvironmentManager Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
EnvironmentManager.Parent Property
Parent Object: EnvironmentManager
Description
Property that returns the parent of the EnvironmentManager.
Syntax
EnvironmentManager.Parent() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 10
EnvironmentManager.SetCurrentEnvironment
Method
Parent Object: EnvironmentManager
Description
Method that sets the current Environment for this document. This is the environment that the
document is currently displayed in. The change is not persisted with the document; i.e. the next time
the document is opened, it will show up in its base environment or the override environment if
specified.
Syntax
EnvironmentManager.SetCurrentEnvironment( Environment As Environment, [EditObjectId] As
String )
Parameters
Name Type Description
Environment Environment Environment that the document should be displayed in.
EditObjectId String
This is an optional argument whose default value is """".
EnvironmentManager Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
Samples
Name Description
Play back a simulation This sample plays back an existing dynamic simulation.
Version
Introduced in version 10
EnvironmentManager.Type Property
Parent Object: EnvironmentManager
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EnvironmentManager.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
EnvironmentManager Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF28.htm 16/06/2025
Environments Object
Description
The Environments collection object provides access to all of the existing objects, and allows
creation of new ones. See the UI customization and Environments overviews for more
information.
Methods
Name Description
Add Method that creates a new Environment object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of Environments in the collection.
Item Returns the specified Environment object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UserInterfaceManager.Environments
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override
environment.
Version
Introduced in version 5
Environments.Add Method
Parent Object: Environments
Environments Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD8CB.htm 16/06/2025
Description
Method that creates a new Environment object.
Syntax
Environments.Add( DisplayName As String, InternalName As String, [ClientId] As Variant,
[StandardIcon] As Variant, [LargeIcon] As Variant ) As Environment
Parameters
Name Type Description
DisplayName String
Input string that defines the display name of the environment. This is the
name that is displayed to the user and should be localized for different
locales.
InternalName String
Input string that defines the name of the environment. This is the internal
name and is not displayed to the user. The name must be unique with
respect to all other environments and is typically a GUID. The name
should remain constant in all locales to it can be used to find a specific
environment.
ClientId Variant
Optional input string that uniquely identifies the client. Ignored for VBA
clients, but Addins should supply the CLSID of the AddIn in a string form,
e.g. "{C9A6C580-3817-11D0-BE4E-080036E87B02}". If supplied, this
string is used at Inventor start up time to determine whether the AddIn that
created this environment has since been uninstalled. If so, the environment
is deleted. If a ClientId is supplied, it must be the CLSID of an Add-in,
else the method returns a failure.
This is an optional argument whose default value is null.
StandardIcon Variant
Optional input Picture object that specifies the standard size icon to use for
the environment. A standard size icon is 16 pixels wide and 16 pixels high.
All icons use 16 colors. If not supplied the icon from the source
environment will be used.
This is an optional argument whose default value is null.
LargeIcon Variant
Optional input Picture object that specifies the large size icon to use for the
environment. A large size icon is 24 pixels wide and 24 pixels high. All
icons use 16 colors. If not supplied and a standard size icon is supplied a
large icon will be automatically created by scaling the standard size icon.
Because scaling a bitmap does not necessarily create a good image, it is
recommended that you create and supply a large bitmap.
This is an optional argument whose default value is null.
Samples
Name Description
Environments Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD8CB.htm 16/06/2025
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel
environments and contextual ribbon tabs.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override
environment.
Version
Introduced in version 10
Environments.Application Property
Parent Object: Environments
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Environments.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 5
Environments.Count Property
Parent Object: Environments
Description
Property that returns the number of Environments in the collection.
Syntax
Environments.Count() As Long
Environments Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD8CB.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
Environments.Item Property
Parent Object: Environments
Description
Returns the specified Environment object from the collection.
Syntax
Environments.Item( Index As Variant ) As Environment
Property Value
This is a read only property whose value is an Environment.
Parameters
Name Type Description
Index Variant
Input Variant that specifies the environment within the collection to return. This
can be either a Long to indicate the index of the item within the collection or a
String indicating the name of the environment. If the specified name does not exist
for a control, a failure occurs.
Samples
Name Description
Play back a simulation This sample plays back an existing dynamic simulation.
Version
Introduced in version 5
Environments Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD8CB.htm 16/06/2025
Environments.Type Property
Parent Object: Environments
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Environments.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
Environments Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD8CB.htm 16/06/2025
EqualConstraint3D Object
Derived from: GeometricConstraint3D Object
Description
EqualConstraint3D Object.
Methods
Name Description
Delete
Method that deletes the constraint. In the case of coincident constraint, all the
connected lines are disconnected and the constraint is deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Deletable Indicates whether this object can be deleted.
EntityOne Read-only property that returns the first 3D sketch entity being constrained.
EntityTwo Read-only property that returns the second 3D sketch entity being constrained.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EqualConstraint3DProxy.NativeObject, GeometricConstraints3D.AddEqual
Derived Classes
EqualConstraint3DProxy
Version
Introduced in version 2017
EqualConstraint3D Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
EqualConstraint3D.Application Property
Parent Object: EqualConstraint3D
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EqualConstraint3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2017
EqualConstraint3D.AttributeSets Property
Parent Object: EqualConstraint3D
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualConstraint3D.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2017
EqualConstraint3D Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
EqualConstraint3D.Deletable Property
Parent Object: EqualConstraint3D
Description
Indicates whether this object can be deleted.
Syntax
EqualConstraint3D.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2017
EqualConstraint3D.Delete Method
Parent Object: EqualConstraint3D
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
EqualConstraint3D.Delete()
Version
Introduced in version 2017
EqualConstraint3D.EntityOne Property
Parent Object: EqualConstraint3D
EqualConstraint3D Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
Description
Read-only property that returns the first 3D sketch entity being constrained.
Syntax
EqualConstraint3D.EntityOne() As SketchEntity3D
Property Value
This is a read only property whose value is a SketchEntity3D.
Version
Introduced in version 2017
EqualConstraint3D.EntityTwo Property
Parent Object: EqualConstraint3D
Description
Read-only property that returns the second 3D sketch entity being constrained.
Syntax
EqualConstraint3D.EntityTwo() As SketchEntity3D
Property Value
This is a read only property whose value is a SketchEntity3D.
Version
Introduced in version 2017
EqualConstraint3D.GetReferenceKey Method
Parent Object: EqualConstraint3D
Description
EqualConstraint3D Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
Method that generates and returns the reference key for this entity.
Syntax
EqualConstraint3D.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2017
EqualConstraint3D.Parent Property
Parent Object: EqualConstraint3D
Description
Property that returns the parent sketch of the object.
Syntax
EqualConstraint3D.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2017
EqualConstraint3D Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
EqualConstraint3D.Type Property
Parent Object: EqualConstraint3D
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualConstraint3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2017
EqualConstraint3D Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF2BB.htm 16/06/2025
EqualConstraint3DProxy Object
Derived from: EqualConstraint3D Object
Description
EqualConstraint3DProxy Object.
Methods
Name Description
Delete
Method that deletes the constraint. In the case of coincident constraint, all the
connected lines are disconnected and the constraint is deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Deletable Indicates whether this object can be deleted.
EntityOne Read-only property that returns the first 3D sketch entity being constrained.
EntityTwo Read-only property that returns the second 3D sketch entity being constrained.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2017
EqualConstraint3DProxy.Application Property
Parent Object: EqualConstraint3DProxy
Description
EqualConstraint3DProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EqualConstraint3DProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2017
EqualConstraint3DProxy.AttributeSets
Property
Parent Object: EqualConstraint3DProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualConstraint3DProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2017
EqualConstraint3DProxy.ContainingOccurrence
Property
Parent Object: EqualConstraint3DProxy
Description
EqualConstraint3DProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Syntax
EqualConstraint3DProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2017
EqualConstraint3DProxy.Deletable Property
Parent Object: EqualConstraint3DProxy
Description
Indicates whether this object can be deleted.
Syntax
EqualConstraint3DProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2017
EqualConstraint3DProxy.Delete Method
Parent Object: EqualConstraint3DProxy
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
EqualConstraint3DProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Syntax
EqualConstraint3DProxy.Delete()
Version
Introduced in version 2017
EqualConstraint3DProxy.EntityOne Property
Parent Object: EqualConstraint3DProxy
Description
Read-only property that returns the first 3D sketch entity being constrained.
Syntax
EqualConstraint3DProxy.EntityOne() As SketchEntity3D
Property Value
This is a read only property whose value is a SketchEntity3D.
Version
Introduced in version 2017
EqualConstraint3DProxy.EntityTwo Property
Parent Object: EqualConstraint3DProxy
Description
Read-only property that returns the second 3D sketch entity being constrained.
Syntax
EqualConstraint3DProxy.EntityTwo() As SketchEntity3D
Property Value
This is a read only property whose value is a SketchEntity3D.
EqualConstraint3DProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Version
Introduced in version 2017
EqualConstraint3DProxy.GetReferenceKey
Method
Parent Object: EqualConstraint3DProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EqualConstraint3DProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge,
EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2017
EqualConstraint3DProxy.NativeObject
Property
Parent Object: EqualConstraint3DProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
EqualConstraint3DProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Syntax
EqualConstraint3DProxy.NativeObject() As EqualConstraint3D
Property Value
This is a read only property whose value is an EqualConstraint3D.
Version
Introduced in version 2017
EqualConstraint3DProxy.Parent Property
Parent Object: EqualConstraint3DProxy
Description
Property that returns the parent sketch of the object.
Syntax
EqualConstraint3DProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2017
EqualConstraint3DProxy.Type Property
Parent Object: EqualConstraint3DProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualConstraint3DProxy.Type() As ObjectTypeEnum
EqualConstraint3DProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2017
EqualConstraint3DProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC2.htm 16/06/2025
EqualLengthConstraint Object
Derived from: GeometricConstraint Object
Description
The EqualLengthConstraint object represents a constraint that makes two lines equal in length.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Deletable Indicates whether this object is deletable.
LineOne Property that returns the sketch line being constrained.
LineTwo Property that returns the sketch line being constrained.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EqualLengthConstraintProxy.NativeObject, GeometricConstraints.AddEqualLength
Derived Classes
EqualLengthConstraintProxy
Version
Introduced in version 5
EqualLengthConstraint.Application Property
EqualLengthConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
Parent Object: EqualLengthConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EqualLengthConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
EqualLengthConstraint.AttributeSets
Property
Parent Object: EqualLengthConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualLengthConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
EqualLengthConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
EqualLengthConstraint.Deletable Property
Parent Object: EqualLengthConstraint
Description
Indicates whether this object is deletable.
Syntax
EqualLengthConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
EqualLengthConstraint.Delete Method
Parent Object: EqualLengthConstraint
Description
Method that deletes the constraint.
Syntax
EqualLengthConstraint.Delete()
Version
Introduced in version 5
EqualLengthConstraint.GetReferenceKey
Method
Parent Object: EqualLengthConstraint
EqualLengthConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
EqualLengthConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EqualLengthConstraint.LineOne Property
Parent Object: EqualLengthConstraint
Description
Property that returns the sketch line being constrained.
Syntax
EqualLengthConstraint.LineOne() As SketchLine
Property Value
This is a read only property whose value is a SketchLine.
EqualLengthConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
Version
Introduced in version 5
EqualLengthConstraint.LineTwo Property
Parent Object: EqualLengthConstraint
Description
Property that returns the sketch line being constrained.
Syntax
EqualLengthConstraint.LineTwo() As SketchLine
Property Value
This is a read only property whose value is a SketchLine.
Version
Introduced in version 5
EqualLengthConstraint.Parent Property
Parent Object: EqualLengthConstraint
Description
Property that returns the parent sketch of the object.
Syntax
EqualLengthConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
EqualLengthConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
Version
Introduced in version 5
EqualLengthConstraint.Type Property
Parent Object: EqualLengthConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualLengthConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EqualLengthConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28EE.htm 16/06/2025
EqualLengthConstraintProxy Object
Derived from: EqualLengthConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced
through. The returned occurrence is the containing occurrence.
Deletable Indicates whether this object is deletable.
LineOne Property that returns the sketch line being constrained.
LineTwo Property that returns the sketch line being constrained.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
EqualLengthConstraintProxy.Application Property
Parent Object: EqualLengthConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EqualLengthConstraintProxy.Application() As Object
EqualLengthConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EqualLengthConstraintProxy.AttributeSets
Property
Parent Object: EqualLengthConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualLengthConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
EqualLengthConstraintProxy.ContainingOccurrence
Property
Parent Object: EqualLengthConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
EqualLengthConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
EqualLengthConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
Version
Introduced in version 6
EqualLengthConstraintProxy.Deletable Property
Parent Object: EqualLengthConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
EqualLengthConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
EqualLengthConstraintProxy.Delete Method
Parent Object: EqualLengthConstraintProxy
Description
Method that deletes the constraint.
Syntax
EqualLengthConstraintProxy.Delete()
Version
Introduced in version 6
EqualLengthConstraintProxy.GetReferenceKey
Method
Parent Object: EqualLengthConstraintProxy
Description
EqualLengthConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
Method that generates and returns the reference key for this entity.
Syntax
EqualLengthConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working
with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex
objects). A key context is created using the CreateKeyContext method of the
ReferenceKeyManager object. For all other object types, the key context argument is not
used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 6
EqualLengthConstraintProxy.LineOne Property
Parent Object: EqualLengthConstraintProxy
Description
Property that returns the sketch line being constrained.
Syntax
EqualLengthConstraintProxy.LineOne() As SketchLine
Property Value
This is a read only property whose value is a SketchLine.
Version
Introduced in version 6
EqualLengthConstraintProxy.LineTwo Property
Parent Object: EqualLengthConstraintProxy
Description
Property that returns the sketch line being constrained.
EqualLengthConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
Syntax
EqualLengthConstraintProxy.LineTwo() As SketchLine
Property Value
This is a read only property whose value is a SketchLine.
Version
Introduced in version 6
EqualLengthConstraintProxy.NativeObject Property
Parent Object: EqualLengthConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EqualLengthConstraintProxy.NativeObject() As EqualLengthConstraint
Property Value
This is a read only property whose value is an EqualLengthConstraint.
Version
Introduced in version 6
EqualLengthConstraintProxy.Parent Property
Parent Object: EqualLengthConstraintProxy
Description
Property that returns the parent sketch of the object.
Syntax
EqualLengthConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
EqualLengthConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
Version
Introduced in version 6
EqualLengthConstraintProxy.Type Property
Parent Object: EqualLengthConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualLengthConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
EqualLengthConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh431E.htm 16/06/2025
EqualRadiusConstraint Object
Derived from: GeometricConstraint Object
Description
The EqualRadiusConstraint object represents a constraint that makes the radius of two circular
entities equal.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Deletable Indicates whether this object is deletable.
EntityOne Property that returns the sketch circle or arc being constrained.
EntityTwo Property that returns the sketch circle or arc being constrained.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EqualRadiusConstraintProxy.NativeObject, GeometricConstraints.AddEqualRadius
Derived Classes
EqualRadiusConstraintProxy
Version
Introduced in version 5
EqualRadiusConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
EqualRadiusConstraint.Application Property
Parent Object: EqualRadiusConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
EqualRadiusConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
EqualRadiusConstraint.AttributeSets
Property
Parent Object: EqualRadiusConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualRadiusConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
EqualRadiusConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
EqualRadiusConstraint.Deletable Property
Parent Object: EqualRadiusConstraint
Description
Indicates whether this object is deletable.
Syntax
EqualRadiusConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
EqualRadiusConstraint.Delete Method
Parent Object: EqualRadiusConstraint
Description
Method that deletes the constraint.
Syntax
EqualRadiusConstraint.Delete()
Version
Introduced in version 5
EqualRadiusConstraint.EntityOne Property
Parent Object: EqualRadiusConstraint
Description
EqualRadiusConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
Property that returns the sketch circle or arc being constrained.
Syntax
EqualRadiusConstraint.EntityOne() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 5
EqualRadiusConstraint.EntityTwo Property
Parent Object: EqualRadiusConstraint
Description
Property that returns the sketch circle or arc being constrained.
Syntax
EqualRadiusConstraint.EntityTwo() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 5
EqualRadiusConstraint.GetReferenceKey
Method
Parent Object: EqualRadiusConstraint
Description
Method that generates and returns the reference key for this entity.
EqualRadiusConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
Syntax
EqualRadiusConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
EqualRadiusConstraint.Parent Property
Parent Object: EqualRadiusConstraint
Description
Property that returns the parent sketch of the object.
Syntax
EqualRadiusConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 5
EqualRadiusConstraint.Type Property
EqualRadiusConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
Parent Object: EqualRadiusConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualRadiusConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
EqualRadiusConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh60F6.htm 16/06/2025
EqualRadiusConstraintProxy Object
Derived from: EqualRadiusConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Deletable Indicates whether this object is deletable.
EntityOne Property that returns the sketch circle or arc being constrained.
EntityTwo Property that returns the sketch circle or arc being constrained.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
EqualRadiusConstraintProxy.Application Property
Parent Object: EqualRadiusConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
EqualRadiusConstraintProxy.Application() As Object
EqualRadiusConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
EqualRadiusConstraintProxy.AttributeSets
Property
Parent Object: EqualRadiusConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
EqualRadiusConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
EqualRadiusConstraintProxy.ContainingOccurrence
Property
Parent Object: EqualRadiusConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
EqualRadiusConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
EqualRadiusConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
Version
Introduced in version 6
EqualRadiusConstraintProxy.Deletable Property
Parent Object: EqualRadiusConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
EqualRadiusConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
EqualRadiusConstraintProxy.Delete Method
Parent Object: EqualRadiusConstraintProxy
Description
Method that deletes the constraint.
Syntax
EqualRadiusConstraintProxy.Delete()
Version
Introduced in version 6
EqualRadiusConstraintProxy.EntityOne Property
Parent Object: EqualRadiusConstraintProxy
Description
Property that returns the sketch circle or arc being constrained.
EqualRadiusConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
Syntax
EqualRadiusConstraintProxy.EntityOne() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
EqualRadiusConstraintProxy.EntityTwo Property
Parent Object: EqualRadiusConstraintProxy
Description
Property that returns the sketch circle or arc being constrained.
Syntax
EqualRadiusConstraintProxy.EntityTwo() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
EqualRadiusConstraintProxy.GetReferenceKey
Method
Parent Object: EqualRadiusConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
EqualRadiusConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
EqualRadiusConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working
with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex
objects). A key context is created using the CreateKeyContext method of the
ReferenceKeyManager object. For all other object types, the key context argument is not
used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 6
EqualRadiusConstraintProxy.NativeObject
Property
Parent Object: EqualRadiusConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
EqualRadiusConstraintProxy.NativeObject() As EqualRadiusConstraint
Property Value
This is a read only property whose value is an EqualRadiusConstraint.
Version
Introduced in version 6
EqualRadiusConstraintProxy.Parent Property
Parent Object: EqualRadiusConstraintProxy
Description
Property that returns the parent sketch of the object.
Syntax
EqualRadiusConstraintProxy.Parent() As Sketch
EqualRadiusConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
EqualRadiusConstraintProxy.Type Property
Parent Object: EqualRadiusConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
EqualRadiusConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
EqualRadiusConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh81AD.htm 16/06/2025
ErrorManager Object
Description
The ErrorManager object contains methods and properties to get errors and warnings that occurred
during an API call, add to Inventor's errors or to display them.
Methods
Name Description
AddMessage Method that adds a new message at the current level in the message tree.
Clear
Method that clears all errors and warnings. This method returns a failure if
there are any active message sections (indicated by the
IsMessageSectionActive property).
Show
Method that displays the current error/warning or the stack of
errors/warnings to the user.
StartMessageSection
Method that starts a message section and returns a MessageSection object
which can be used to clear, adopt or retain error/warning messages created
during the section.
Properties
Name Description
AllMessages
Property that returns an XML string containing all messages (errors and
warnings).
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
HasErrors Property that returns whether there are any recorded errors.
HasWarnings Property that returns whether there are any recorded warnings.
IsMessageSectionActive Property that returns whether there is any message section active.
LastMessage
Property that returns the last recorded error/warning message. If there is
a tree of errors/warnings, this property returns the most recent leaf
error/warning.
Parent Property that returns the parent Application object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.ErrorManager, InventorServer.ErrorManager, InventorServerObject.ErrorManager,
MessageSection.Parent
Samples
ErrorManager Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Name Description
Using Inventor's error dialog Demonstrates using Inventor's error dialog.
Display custom error messages Demonstrates displaying custom error messages.
Version
Introduced in version 2010
ErrorManager.AddMessage Method
Parent Object: ErrorManager
Description
Method that adds a new message at the current level in the message tree.
Syntax
ErrorManager.AddMessage( Message As String, Error As Boolean, [Reserved] As Variant )
Parameters
Name Type Description
Message String Input String that specifies the error or warning message.
Error Boolean
Input Boolean that specifies whether this is an error or a warning. True
indicates error.
Reserved Variant
Optional input Variant reserved for future use. Currently unused.
This is an optional argument whose default value is null.
Samples
Name Description
Display custom error messages Demonstrates displaying custom error messages.
Version
Introduced in version 2010
ErrorManager.AllMessages Property
Parent Object: ErrorManager
ErrorManager Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Description
Property that returns an XML string containing all messages (errors and warnings).
Syntax
ErrorManager.AllMessages() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2010
ErrorManager.Application Property
Parent Object: ErrorManager
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ErrorManager.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
ErrorManager.Clear Method
Parent Object: ErrorManager
ErrorManager Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Description
Method that clears all errors and warnings. This method returns a failure if there are any active
message sections (indicated by the IsMessageSectionActive property).
Syntax
ErrorManager.Clear()
Version
Introduced in version 2010
ErrorManager.HasErrors Property
Parent Object: ErrorManager
Description
Property that returns whether there are any recorded errors.
Syntax
ErrorManager.HasErrors() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
ErrorManager.HasWarnings Property
Parent Object: ErrorManager
Description
Property that returns whether there are any recorded warnings.
ErrorManager Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Syntax
ErrorManager.HasWarnings() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
ErrorManager.IsMessageSectionActive
Property
Parent Object: ErrorManager
Description
Property that returns whether there is any message section active.
Syntax
ErrorManager.IsMessageSectionActive() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
ErrorManager.LastMessage Property
Parent Object: ErrorManager
Description
Property that returns the last recorded error/warning message. If there is a tree of errors/warnings,
this property returns the most recent leaf error/warning.
ErrorManager Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Syntax
ErrorManager.LastMessage() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2010
ErrorManager.Parent Property
Parent Object: ErrorManager
Description
Property that returns the parent Application object.
Syntax
ErrorManager.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
ErrorManager.Show Method
Parent Object: ErrorManager
Description
Method that displays the current error/warning or the stack of errors/warnings to the user.
ErrorManager Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Syntax
ErrorManager.Show( Title As String, AllowAccept As Boolean, AllowEdit As Boolean ) As
ButtonTypeEnum
Parameters
Name Type Description
Title String
Input string that specifies the title of the message dialog. The display name
of the product (e.g. 'Autodesk Inventor 2010 ' ') is prefixed to the string
automatically.
AllowAccept Boolean
Input Boolean that indicates whether the 'Accept' button should be
available. This user choice implies that the user would like to continue
despite any errors/warnings.
AllowEdit Boolean
Input Boolean that indicates whether the 'Edit' button should be available.
This user choice implies that implies that the user would like to go back
into the command to correct the situation.
Remarks
The method returns an error if there are no errors or warnings. If there were errors or warnings, the
method \returns a ButtonTypeEnum value indicating the user's choice. The return value can be one
of the three values listed below and should be handled as described: * kCancelButtonType -
Implies that the user does not want to continue. Any partial success during the execution is to be
aborted. The command would have thus behaved like a no-op. * kAcceptButtonType - Implies
that the user would like to continue despite the errors/warnings. The entire operation should return
success, with the partially successful results committed to the document(s). * kEditButtonType -
Implies that the user would like to go back into the command to correct the situation. The entire
operation should be aborted, including any partial success and control should be returned back to
the command.
Samples
Name Description
Using Inventor's error dialog Demonstrates using Inventor's error dialog.
Display custom error messages Demonstrates displaying custom error messages.
Version
Introduced in version 2010
ErrorManager.StartMessageSection Method
Parent Object: ErrorManager
ErrorManager Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
Description
Method that starts a message section and returns a MessageSection object which can be used to
clear, adopt or retain error/warning messages created during the section.
Syntax
ErrorManager.StartMessageSection() As MessageSection
Samples
Name Description
Using Inventor's error dialog Demonstrates using Inventor's error dialog.
Display custom error messages Demonstrates displaying custom error messages.
Version
Introduced in version 2010
ErrorManager.Type Property
Parent Object: ErrorManager
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ErrorManager.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
ErrorManager Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9DC1.htm 16/06/2025
ExpressionLimits Object
Description
The ExpressionLimits object provides access to the various range values that can be specified when defining
a custom expression for a column.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DefaultValue Gets/Sets the default value for this expression.
IncrementValue Gets/Sets the increment value for this expression.
MaximumValue Gets/Sets the maximum value for this expression.
MaximumValueComparisonType Gets/Sets the type of comparison to perform against the maximum value.
MinimumValue Gets/Sets the minimum value for this expression.
MinimumValueComparisonType Gets/Sets the type of comparison to perform against the minimum value.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ContentTableColumns.CreateExpressionLimits
Version
Introduced in version 2010
ExpressionLimits.Application Property
Parent Object: ExpressionLimits
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ExpressionLimits.Application() As Object
Property Value
This is a read only property whose value is an Object.
ExpressionLimits Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8DA.htm 16/06/2025
Version
Introduced in version 2010
ExpressionLimits.DefaultValue Property
Parent Object: ExpressionLimits
Description
Gets/Sets the default value for this expression.
Syntax
ExpressionLimits.DefaultValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
ExpressionLimits.IncrementValue Property
Parent Object: ExpressionLimits
Description
Gets/Sets the increment value for this expression.
Syntax
ExpressionLimits.IncrementValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
ExpressionLimits.MaximumValue Property
ExpressionLimits Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8DA.htm 16/06/2025
Parent Object: ExpressionLimits
Description
Gets/Sets the maximum value for this expression.
Syntax
ExpressionLimits.MaximumValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
ExpressionLimits.MaximumValueComparisonType
Property
Parent Object: ExpressionLimits
Description
Gets/Sets the type of comparison to perform against the maximum value.
Syntax
ExpressionLimits.MaximumValueComparisonType() As ComparisonTypeEnum
Property Value
This is a read/write property whose value is a ComparisonTypeEnum.
Version
Introduced in version 2010
ExpressionLimits.MinimumValue Property
Parent Object: ExpressionLimits
Description
Gets/Sets the minimum value for this expression.
ExpressionLimits Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8DA.htm 16/06/2025
Syntax
ExpressionLimits.MinimumValue() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
ExpressionLimits.MinimumValueComparisonType
Property
Parent Object: ExpressionLimits
Description
Gets/Sets the type of comparison to perform against the minimum value.
Syntax
ExpressionLimits.MinimumValueComparisonType() As ComparisonTypeEnum
Property Value
This is a read/write property whose value is a ComparisonTypeEnum.
Version
Introduced in version 2010
ExpressionLimits.Type Property
Parent Object: ExpressionLimits
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExpressionLimits.Type() As ObjectTypeEnum
ExpressionLimits Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8DA.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
ExpressionLimits Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8DA.htm 16/06/2025
ExpressionList Object
Description
The ExpressionList provides access to a list of possible expressions that can be used for the
associated parameter.
Methods
Name Description
ClearAll Method that removes all items from the list.
GetExpressionList
Rreturns an array of Strings that represents the list of expressions used in the
list.
SetExpressionList
Method that sets the list of expressions for the parameter this expression list is
associated with. The current value of the associated parameter will be modifed
to match one of the values in the list. The CurrentValueIndex argument allows
you control over which value from the list is used.
Properties
Name Description
AllowCustomValues Gets/Sets whether to allow users to specify custom values.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Count Property that specifies the number of expressions in the list.
CustomOrder
Read-write property that gets and sets whether to disable automatically
sorting the custom values. If you assign a list of values using
SetExpressionList, that operation will automatically set CustomOrder to
True. If you want to assign a list using SetExpressi.
Item Property that gets the specified expression in the list.
Parent Property that returns the parent Parameter object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DerivedParameter.ExpressionList, FinishParameter.ExpressionList,
ModelParameter.ExpressionList, Parameter.ExpressionList, ReferenceParameter.ExpressionList,
TableParameter.ExpressionList, UserParameter.ExpressionList
Version
Introduced in version 2011
ExpressionList Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
ExpressionList.AllowCustomValues Property
Parent Object: ExpressionList
Description
Gets/Sets whether to allow users to specify custom values.
Syntax
ExpressionList.AllowCustomValues() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
ExpressionList.Application Property
Parent Object: ExpressionList
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ExpressionList.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
ExpressionList Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
ExpressionList.ClearAll Method
Parent Object: ExpressionList
Description
Method that removes all items from the list.
Syntax
ExpressionList.ClearAll()
Version
Introduced in version 2011
ExpressionList.Count Property
Parent Object: ExpressionList
Description
Property that specifies the number of expressions in the list.
Syntax
ExpressionList.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
ExpressionList.CustomOrder Property
Parent Object: ExpressionList
Description
ExpressionList Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
Read-write property that gets and sets whether to disable automatically sorting the custom values.
If you assign a list of values using SetExpressionList, that operation will automatically set
CustomOrder to True. If you want to assign a list using SetExpressi.
Syntax
ExpressionList.CustomOrder() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
ExpressionList.GetExpressionList Method
Parent Object: ExpressionList
Description
Rreturns an array of Strings that represents the list of expressions used in the list.
Syntax
ExpressionList.GetExpressionList() As String()
Version
Introduced in version 2011
ExpressionList.Item Property
Parent Object: ExpressionList
Description
Property that gets the specified expression in the list.
Syntax
ExpressionList.Item( Index As Long ) As String
ExpressionList Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Parameters
Name Type Description
Index Long Input Long value that specifies the expression to return.
Version
Introduced in version 2011
ExpressionList.Parent Property
Parent Object: ExpressionList
Description
Property that returns the parent Parameter object.
Syntax
ExpressionList.Parent() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2011
ExpressionList.SetExpressionList Method
Parent Object: ExpressionList
Description
Method that sets the list of expressions for the parameter this expression list is associated with.
The current value of the associated parameter will be modifed to match one of the values in the
list. The CurrentValueIndex argument allows you control over which value from the list is used.
ExpressionList Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
Syntax
ExpressionList.SetExpressionList( ExpressionList() As String, [ChangeCurrentValue] As
Boolean, [CurrentValueIndex] As Long )
Parameters
Name Type Description
ExpressionList String
Input array of Strings that defines a list of valid expressions that
the user will be able to select from when setting the value of the
associated parameter.
ChangeCurrentValue Boolean
This is an optional argument whose default value is False.
CurrentValueIndex Long
Input Long value that specifies which value within the expression
list should be used as the current value of the parameter. The first
value in the expression list is index 0.
For a numerical parameter, the default value of -1 will result in the
expression that is closest to the current value of the parameter
being used." Otherwise the index value specified will be used.
For a String parameter, the default value of -1 will result in using
the value from the list if there's one that matches the current value
of the parameter. If -1 is specified and the current parameter value
doesn't match one of the values in the list the first value in the list
is used.
This method is not valid for Boolean type parameters since they
are already limited to True or False.
This is an optional argument whose default value is -1.
Version
Introduced in version 2011
ExpressionList.Type Property
Parent Object: ExpressionList
Description
Returns an ObjectTypeEnum indicating this object's type.
ExpressionList Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
Syntax
ExpressionList.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
ExpressionList Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2AC.htm 16/06/2025
ExtendFeature Object
Derived from: PartFeature Object
Description
For information on this object, please refer to PartFeature, which provides identical or very similar
functionality.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over
which dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method
returns False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly
feature. This method fails for features in a part.
SetAffectedBodies
Method that sets a collection of SurfaceBody objects affected by this
feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
ExtendFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True,
the OwnedBy property returns the owning feature.
Name
Gets/Sets the name of this Part Feature within the scope of this
Document.
OwnedBy
Property that returns the owning PartFeature object. This property
returns Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This
list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of
a rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ExtendFeatureProxy.NativeObject, ExtendFeatures.Item
Derived Classes
ExtendFeatureProxy
Version
Introduced in version 11
ExtendFeature.Adaptive Property
Parent Object: ExtendFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
ExtendFeature.Adaptive() As Boolean
ExtendFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeature.Appearance Property
Parent Object: ExtendFeature
Description
Gets and sets the current appearance of the feature.
Syntax
ExtendFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
ExtendFeature.AppearanceSourceType
Property
Parent Object: ExtendFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
ExtendFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
ExtendFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
ExtendFeature.Application Property
Parent Object: ExtendFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ExtendFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
ExtendFeature.AttributeSets Property
Parent Object: ExtendFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ExtendFeature.AttributeSets() As AttributeSets
ExtendFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
ExtendFeature.ConsumeInputs Property
Parent Object: ExtendFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
ExtendFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeature.Delete Method
Parent Object: ExtendFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
ExtendFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
ExtendFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If
the feature being deleted is not a sketch based
feature this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if
dependent features should be deleted. If there are
no dependent features this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 11
ExtendFeature.ExtendedName Property
Parent Object: ExtendFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
ExtendFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
ExtendFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 2012
ExtendFeature.Faces Property
Parent Object: ExtendFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
ExtendFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 11
ExtendFeature.FeatureDimensions Property
Parent Object: ExtendFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
ExtendFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
ExtendFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 2008
ExtendFeature.GetReferenceKey Method
Parent Object: ExtendFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
ExtendFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 11
ExtendFeature.GetSuppressionCondition
Method
Parent Object: ExtendFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
ExtendFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Syntax
ExtendFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 11
ExtendFeature.HealthStatus Property
Parent Object: ExtendFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
ExtendFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 11
ExtendFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
ExtendFeature.IsOwnedByFeature Property
Parent Object: ExtendFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
ExtendFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
ExtendFeature.Name Property
Parent Object: ExtendFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
ExtendFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
ExtendFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
ExtendFeature.OwnedBy Property
Parent Object: ExtendFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
ExtendFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
ExtendFeature.Parameters Property
Parent Object: ExtendFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
ExtendFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
ExtendFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
ExtendFeature.Parent Property
Parent Object: ExtendFeature
Description
Property that returns the parent of the feature.
Syntax
ExtendFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 11
ExtendFeature.Participants Property
Parent Object: ExtendFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
ExtendFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 11
ExtendFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
ExtendFeature.RangeBox Property
Parent Object: ExtendFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
ExtendFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 11
ExtendFeature.RemoveParticipant Method
Parent Object: ExtendFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
ExtendFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
ExtendFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 11
ExtendFeature.SetAffectedBodies Method
Parent Object: ExtendFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
ExtendFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
ExtendFeature.SetEndOfPart Method
Parent Object: ExtendFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ExtendFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
ExtendFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 11
ExtendFeature.SetSuppressionCondition
Method
Parent Object: ExtendFeature
Description
Method that sets the suppression condition for the feature.
Syntax
ExtendFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string, a value
or a parameter object. If a value is input, the database
units for the units defined by the parameter are used.
For instance, if the parameter defines length units, the
value is assumed to be in centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current units of the document. For
instance, if the parameter defines length units, the
current length units of the document are used.
ExtendFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 11
ExtendFeature.Shared Property
Parent Object: ExtendFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
ExtendFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeature.Suppressed Property
Parent Object: ExtendFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
ExtendFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
ExtendFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 11
ExtendFeature.SurfaceBodies Property
Parent Object: ExtendFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
ExtendFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
ExtendFeature.Type Property
Parent Object: ExtendFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtendFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
ExtendFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
Version
Introduced in version 11
ExtendFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF46C.htm 16/06/2025
ExtendFeatureProxy Object
Derived from: ExtendFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which
dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method
returns False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature.
This method fails for features in a part.
SetAffectedBodies
Method that sets a collection of SurfaceBody objects affected by this
feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under this
feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces of
the feature. The Faces collection object will return the faces that still
ExtendFeatureProxy Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the
OwnedBy property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This
list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 11
ExtendFeatureProxy.Adaptive Property
Parent Object: ExtendFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
ExtendFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
ExtendFeatureProxy Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Version
Introduced in version 11
ExtendFeatureProxy.Appearance Property
Parent Object: ExtendFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
ExtendFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
ExtendFeatureProxy.AppearanceSourceType
Property
Parent Object: ExtendFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
ExtendFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
ExtendFeatureProxy Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Version
Introduced in version 2014
ExtendFeatureProxy.Application Property
Parent Object: ExtendFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ExtendFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
ExtendFeatureProxy.AttributeSets Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ExtendFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
ExtendFeatureProxy Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Version
Introduced in version 11
ExtendFeatureProxy.ConsumeInputs Property
Parent Object: ExtendFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
ExtendFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeatureProxy.ContainingOccurrence
Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
ExtendFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
ExtendFeatureProxy Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Version
Introduced in version 11
ExtendFeatureProxy.Delete Method
Parent Object: ExtendFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
ExtendFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature
this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent
features should be deleted. If there are no
dependent features this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent
work features should be deleted. If there are no
dependent work features this argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 11
ExtendFeatureProxy Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
ExtendFeatureProxy.ExtendedName Property
Parent Object: ExtendFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
ExtendFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
ExtendFeatureProxy.Faces Property
Parent Object: ExtendFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
ExtendFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 11
ExtendFeatureProxy Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
ExtendFeatureProxy.FeatureDimensions
Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
ExtendFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
ExtendFeatureProxy.GetReferenceKey
Method
Parent Object: ExtendFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ExtendFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
ExtendFeatureProxy Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 11
ExtendFeatureProxy.GetSuppressionCondition
Method
Parent Object: ExtendFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Syntax
ExtendFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value
is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid return types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 11
ExtendFeatureProxy.HealthStatus Property
Parent Object: ExtendFeatureProxy
ExtendFeatureProxy Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
ExtendFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 11
ExtendFeatureProxy.IsOwnedByFeature
Property
Parent Object: ExtendFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
ExtendFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
ExtendFeatureProxy.Name Property
Parent Object: ExtendFeatureProxy
ExtendFeatureProxy Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
ExtendFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
ExtendFeatureProxy.NativeObject Property
Parent Object: ExtendFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
ExtendFeatureProxy.NativeObject() As ExtendFeature
Property Value
This is a read only property whose value is an ExtendFeature.
Version
Introduced in version 11
ExtendFeatureProxy.OwnedBy Property
Parent Object: ExtendFeatureProxy
Description
ExtendFeatureProxy Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
ExtendFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
ExtendFeatureProxy.Parameters Property
Parent Object: ExtendFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
ExtendFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
ExtendFeatureProxy.Parent Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the parent of the feature.
ExtendFeatureProxy Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Syntax
ExtendFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 11
ExtendFeatureProxy.Participants Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in
a part.
Syntax
ExtendFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 11
ExtendFeatureProxy.RangeBox Property
Parent Object: ExtendFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
ExtendFeatureProxy Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Syntax
ExtendFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 11
ExtendFeatureProxy.RemoveParticipant
Method
Parent Object: ExtendFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
ExtendFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input ComponentOccurrence
is not a participant.
Version
Introduced in version 11
ExtendFeatureProxy.SetAffectedBodies
Method
Parent Object: ExtendFeatureProxy
ExtendFeatureProxy Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
ExtendFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
ExtendFeatureProxy.SetEndOfPart Method
Parent Object: ExtendFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ExtendFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before
or after this work feature. A value of True indicates before and False indicates
after.
Version
Introduced in version 11
ExtendFeatureProxy Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
ExtendFeatureProxy.SetSuppressionCondition
Method
Parent Object: ExtendFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
ExtendFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value
is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string, a value or a
parameter object. If a value is input, the database units for
the units defined by the parameter are used. For instance,
if the parameter defines length units, the value is assumed
to be in centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current units of the document. For instance, if the
parameter defines length units, the current length units of
the document are used.
Version
Introduced in version 11
ExtendFeatureProxy.Shared Property
Parent Object: ExtendFeatureProxy
ExtendFeatureProxy Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
ExtendFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeatureProxy.Suppressed Property
Parent Object: ExtendFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
ExtendFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtendFeatureProxy.SurfaceBodies Property
Parent Object: ExtendFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
ExtendFeatureProxy Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
Syntax
ExtendFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
ExtendFeatureProxy.Type Property
Parent Object: ExtendFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtendFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
ExtendFeatureProxy Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh280F.htm 16/06/2025
ExtendFeatures Object
Description
For information on this object, please refer to PartFeatures, which provides identical or very
similar functionality.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Property that returns an item from the collection. You can provide either the index of
the item in the collection, where the first item is index 1, or you can provide the
name of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.ExtendFeatures, SheetMetalFeatures.ExtendFeatures
Version
Introduced in version 11
ExtendFeatures.Application Property
Parent Object: ExtendFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ExtendFeatures.Application() As Object
ExtendFeatures Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5355.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
ExtendFeatures.Count Property
Parent Object: ExtendFeatures
Description
Property that returns the number of items in this collection.
Syntax
ExtendFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
ExtendFeatures.Item Property
Parent Object: ExtendFeatures
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
Syntax
ExtendFeatures.Item( Index As Variant ) As ExtendFeature
ExtendFeatures Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5355.htm 16/06/2025
Property Value
This is a read only property whose value is an ExtendFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a String
indicating the feature name. If an out of range index or a name of a non-existent
feature is provided, an error occurs.
Version
Introduced in version 11
ExtendFeatures.Type Property
Parent Object: ExtendFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtendFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
ExtendFeatures Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5355.htm 16/06/2025
ExtrudeDefinition Object
Description
ExtrudeDefinition Object.
Methods
Name Description
Copy
Method that creates a copy of this ExtrudeDefinition object. The new
ExtrudeDefinition object is independent of any feature. It can edited and
used as input to edit an existing feature or to create a new Extrude feature.
SetDistanceExtent
Method that changes the extents to be “distance” extents. If this method is
called on an asymmetric extrude, the second direction extent is removed.
To change extent values, use the properties on the object returned by the
Extent property.
SetDistanceExtentTwo
Method that sets the second direction extent to be “distance” extents. This
method returns an error if the first extent type is not distance extent.
SetDistanceFromFaceExtent Method that changes the extents to be “Distance From Face” extents.
SetFromToExtent Method that changes the extents to be “from and to face” extents.
SetThroughAllExtent Method that changes the extents to be “through all” extents.
SetToExtent Method that changes the extents to be “to entity” extents.
SetToNextExtent Method that changes the extents to be “to next face” extents.
Properties
Name Description
AffectedBodies
Read-write property that gets and sets the collection of bodies affected by this
feature. If this property is not set for multi-body parts, the default solid body is
used as the affected body. This property applies only to features in a part.
AffectedOccurrences
Read-write property that gets and sets the collection of occurrences that should
participate in this feature. If this property is not set, all possible occurrences will
participate. This property applies only to features in an assembly.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Extent
Read-only property that returns the PartFeatureExtent object that defines how the
extent of the feature is defined. The type of extent object returne.
ExtentTwo
Read-only property that returns the PartFeatureExtent object that defines how the
second direction extent of the feature is defined. The type of exte.
ExtentTwoType
Read-only property that returns an enum indicating how the second direction
extent of the feature is defined. This indicates the type of object retur.
ExtentType
Read-only property that returns an enum indicating how the extent of the feature
is defined. This indicates the type of object returned by the Extent.
InferiMates
Read-write property that gets and sets whether to automatically place iMates on
full circular edges. If set to True, Inventor places the iMates on cl.
IsTwoDirectional
Read-only property that returns whether extents have been defined in two
directions for the extrude. If this property returns True, the ExtentTwoType.
ExtrudeDefinition Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
MatchShape Read-write property that gets and sets how open profiles are handled.
Operation
Read-write property that gets and sets the type of operation used to add the feature
to the model. Valid inputs are kNewBodyOperation, kJoinOperation,
kCutOperation, kIntersectOperation and kSurfaceOperation.
Parent Gets the parent object from whom this object can logically be reached.
Profile Read-write property gets and sets the sketch profile used for the extrude feature.
TaperAngle
Read-write property that provides access to the taper angle of an extrude feature.
If not supplied, the feature will be created with a taper angle of.
TaperAngleTwo
Read-write property that provides access to the second direction taper angle of an
asymmetric extrude feature. This property is not applicable and ret.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ExtrudeDefinition.Copy, ExtrudeFeature.Definition, ExtrudeFeatureProxy.Definition,
ExtrudeFeatures.CreateExtrudeDefinition
Samples
Name Description
Display feature
information
Displays information about all of the extrude features in the active document. A
part document must be active when this is run.
Version
Introduced in version 2012
ExtrudeDefinition.AffectedBodies Property
Parent Object: ExtrudeDefinition
Description
Read-write property that gets and sets the collection of bodies affected by this feature. If this property is
not set for multi-body parts, the default solid body is used as the affected body. This property applies
only to features in a part.
Syntax
ExtrudeDefinition.AffectedBodies() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
ExtrudeDefinition Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Version
Introduced in version 2012
ExtrudeDefinition.AffectedOccurrences
Property
Parent Object: ExtrudeDefinition
Description
Read-write property that gets and sets the collection of occurrences that should participate in this
feature. If this property is not set, all possible occurrences will participate. This property applies only to
features in an assembly.
Syntax
ExtrudeDefinition.AffectedOccurrences() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2012
ExtrudeDefinition.Application Property
Parent Object: ExtrudeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ExtrudeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
ExtrudeDefinition Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Version
Introduced in version 2012
ExtrudeDefinition.Copy Method
Parent Object: ExtrudeDefinition
Description
Method that creates a copy of this ExtrudeDefinition object. The new ExtrudeDefinition object is
independent of any feature. It can edited and used as input to edit an existing feature or to create a new
Extrude feature.
Syntax
ExtrudeDefinition.Copy() As ExtrudeDefinition
Version
Introduced in version 2012
ExtrudeDefinition.Extent Property
Parent Object: ExtrudeDefinition
Description
Read-only property that returns the PartFeatureExtent object that defines how the extent of the feature is
defined. The type of extent object returne.
Syntax
ExtrudeDefinition.Extent() As PartFeatureExtent
Property Value
This is a read only property whose value is a PartFeatureExtent.
Samples
Name Description
Display feature
information
Displays information about all of the extrude features in the active document. A
part document must be active when this is run.
ExtrudeDefinition Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Version
Introduced in version 2012
ExtrudeDefinition.ExtentTwo Property
Parent Object: ExtrudeDefinition
Description
Read-only property that returns the PartFeatureExtent object that defines how the second direction extent
of the feature is defined. The type of exte.
Syntax
ExtrudeDefinition.ExtentTwo() As PartFeatureExtent
Property Value
This is a read only property whose value is a PartFeatureExtent.
Version
Introduced in version 2012
ExtrudeDefinition.ExtentTwoType Property
Parent Object: ExtrudeDefinition
Description
Read-only property that returns an enum indicating how the second direction extent of the feature is
defined. This indicates the type of object retur.
Syntax
ExtrudeDefinition.ExtentTwoType() As PartFeatureExtentEnum
Property Value
This is a read only property whose value is a PartFeatureExtentEnum.
Version
Introduced in version 2012
ExtrudeDefinition Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
ExtrudeDefinition.ExtentType Property
Parent Object: ExtrudeDefinition
Description
Read-only property that returns an enum indicating how the extent of the feature is defined. This
indicates the type of object returned by the Extent.
Syntax
ExtrudeDefinition.ExtentType() As PartFeatureExtentEnum
Property Value
This is a read only property whose value is a PartFeatureExtentEnum.
Samples
Name Description
Display feature
information
Displays information about all of the extrude features in the active document. A
part document must be active when this is run.
Version
Introduced in version 2012
ExtrudeDefinition.InferiMates Property
Parent Object: ExtrudeDefinition
Description
Read-write property that gets and sets whether to automatically place iMates on full circular edges. If set
to True, Inventor places the iMates on cl.
Syntax
ExtrudeDefinition.InferiMates() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
ExtrudeDefinition Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Version
Introduced in version 2012
ExtrudeDefinition.IsTwoDirectional Property
Parent Object: ExtrudeDefinition
Description
Read-only property that returns whether extents have been defined in two directions for the extrude. If
this property returns True, the ExtentTwoType.
Syntax
ExtrudeDefinition.IsTwoDirectional() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2012
ExtrudeDefinition.MatchShape Property
Parent Object: ExtrudeDefinition
Description
Read-write property that gets and sets how open profiles are handled.
Syntax
ExtrudeDefinition.MatchShape() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2012
ExtrudeDefinition Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
ExtrudeDefinition.Operation Property
Parent Object: ExtrudeDefinition
Description
Read-write property that gets and sets the type of operation used to add the feature to the model. Valid
inputs are kNewBodyOperation, kJoinOperation, kCutOperation, kIntersectOperation and
kSurfaceOperation.
Syntax
ExtrudeDefinition.Operation() As PartFeatureOperationEnum
Property Value
This is a read/write property whose value is a PartFeatureOperationEnum.
Version
Introduced in version 2012
ExtrudeDefinition.Parent Property
Parent Object: ExtrudeDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ExtrudeDefinition.Parent() As ExtrudeFeature
Property Value
This is a read only property whose value is an ExtrudeFeature.
Version
Introduced in version 2012
ExtrudeDefinition.Profile Property
Parent Object: ExtrudeDefinition
ExtrudeDefinition Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Description
Read-write property gets and sets the sketch profile used for the extrude feature.
Syntax
ExtrudeDefinition.Profile() As Profile
Property Value
This is a read/write property whose value is a Profile.
Samples
Name Description
Edit profile of an extrude feature This sample demonstrates editing the profile of an extrude feature.
Sketch Share This sample demonstrates setting a sketch so it is shared.
Version
Introduced in version 2012
ExtrudeDefinition.SetDistanceExtent Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “distance” extents. If this method is called on an asymmetric
extrude, the second direction extent is removed. To change extent values, use the properties on the object
returned by the Extent property.
Syntax
ExtrudeDefinition.SetDistanceExtent( Distance As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
Distance Variant Input Variant that defines the length of the
extrusion. This can be either a numeric value or a
string. A parameter for this value will be created and
the supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
ExtrudeDefinition Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
specified as part of the string or it will default to the
current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude towards. Valid input is
kPositiveExtentDirection, kNegativeExtentDirection,
or
kSymmetricExtentDirection. kPositiveExtentDirection
defines the offset direction to be in the same direction
as the normal of the sketch plane.
Samples
Name Description
Delete Face,
Boundary Patch
and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch features.
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This is
equivalent to the Promote command, but the API is much more flexible. In order for
the sample to be self-contained, it creates two parts on the fly that will be used to
demonstrate copying a body from one part to another. When copying a body into a
part, you provide the surface body and a matrix to define its position in the new part.
This sample creates a matrix based on the position of these parts within an assembly.
Add a decal
feature
This sample demonstrates the creation of a decal feature.
Derived Parts
and Assemblies
This sample demonstrates the use of the API to create derived parts and assemblies.
Using Inventor's
error dialog
Demonstrates using Inventor's error dialog.
Extrude Feature -
Create Block
with Pocket
This sample demonstrates creating a simple solid consisting a block with a pocket. It
shows how to create a sketch plane at a specified orientation to existing geometry.
Edit profile of an
extrude feature
This sample demonstrates editing the profile of an extrude feature.
Extrude sketch
text
This sample demonstrates the creation of an extrude feature from sketch text.
Add iMate
Definition
Add iMate definitions using AddMateiMateDefinition and AddInsertiMateDefinition.
Create and Edit
an Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to create a
sketch plane at a specified orientation to existing geometry.
Sketch from
Face Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates some
new sketch lines from the actual edges and the apparent (silhouette) edges of the
cylinder.
Sketch profile
control
This sample demonstrates the usage of the Profiles API to control the shape of the
profile. The sample creates three concntric circles and creates an extrusion of the
region between the inner circles.
Create sheet
metal rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder in a
new part document and creates a thread feature on the cylinder.
ExtrudeDefinition Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Version
Introduced in version 2012
ExtrudeDefinition.SetDistanceExtentTwo
Method
Parent Object: ExtrudeDefinition
Description
Method that sets the second direction extent to be “distance” extents. This method returns an error if the
first extent type is not distance extent.
Syntax
ExtrudeDefinition.SetDistanceExtentTwo( Distance As Variant )
Parameters
Name Type Description
Distance Variant
Input Variant that defines the length of the extrusion in the other direction for an
asymmetric extrude. This can be either a numeric value or a string. A parameter for
this value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current length units of the
document.
Version
Introduced in version 2012
ExtrudeDefinition.SetDistanceFromFaceExtent
Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “Distance From Face” extents.
ExtrudeDefinition Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Syntax
ExtrudeDefinition.SetDistanceFromFaceExtent( FromFace As Object, ExtendFromFace As Boolean,
ExtentDirection As PartFeatureExtentDirectionEnum, Distance As Variant, [IsTwoDirectional] As
Variant, [DistanceTwo] As Variant )
Parameters
Name Type Description
FromFace Object
Input object that indicates from which to do the
offset extrusion. This can be a Face or WorkPlane
object.
ExtendFromFace Boolean
Input Boolean that defines whether the “from face”
should be extended to contain the extents of the
profile.
ExtentDirection PartFeatureExtentDirectionEnum
Input PartFeatureExtentDirectionEnum that defines
the distance direction of the feature. Valid input is
kPositiveExtentDirection,
kNegativeExtentDirection, or
kSymmetricExtentDirection.
kPositiveExtentDirection defines the offset
direction to be in the same direction as the normal
of the sketch plane.
Distance Variant
Input Variant that defines the length of the
extrusion. This can be either a numeric value or a
string. A parameter for this value will be created
and the supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
IsTwoDirectional Variant
Optional input Boolean that indicates if the extents
have been defined in two directions for the
extrusion. This is ignored if the ExtentDirection is
set to kSymmetricExtentDirection. This defaults to
False if not specified.
This is an optional argument whose default value is
null.
DistanceTwo Variant Optional input Variant that defines the length of the
extrusion in the other direction for an asymmetric
extrude. This can be either a numeric value or a
string. A parameter for this value will be created
and the supplied string or value is assigned to the
parameter. If a value is input, the units are
centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document. This is
ignored if the IsTwoDirectional is set to False,
otherwise this is required to specify the distance for
the extrusion in the other direction for an
asymmetric extrude.
ExtrudeDefinition Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
This is an optional argument whose default value is
null.
Version
Introduced in version 2019
ExtrudeDefinition.SetFromToExtent Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “from and to face” extents.
Syntax
ExtrudeDefinition.SetFromToExtent( FromFace As Object, ExtendFromFace As Boolean, ToFace
As Object, ExtendToFace As Boolean )
Parameters
Name Type Description
FromFace Object
Input Object that defines the “from face”. This can be either a Face or
WorkPlane object.
ExtendFromFace Boolean
Input Boolean that defines whether the “from face” should be extended to
contain the extents of the profile.
ToFace Object
Input Object that defines the “to face”. This can be either a Face or
WorkPlane object.
ExtendToFace Boolean
Input Boolean that defines whether the “to face” should be extended to
contain the extents of the profile.
Version
Introduced in version 2012
ExtrudeDefinition.SetThroughAllExtent Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “through all” extents.
ExtrudeDefinition Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Syntax
ExtrudeDefinition.SetThroughAllExtent( ExtentDirection As PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude towards. Valid input is
kPositiveExtentDirection, kNegativeExtentDirection,
or
kSymmetricExtentDirection. kPositiveExtentDirection
defines the offset direction to be in the same direction
as the normal of the sketch plane.
Version
Introduced in version 2012
ExtrudeDefinition.SetToExtent Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “to entity” extents.
Syntax
ExtrudeDefinition.SetToExtent( ToEntity As Object, [ExtendToFace] As Boolean )
Parameters
Name Type Description
ToEntity Object
Input Object that defines the “to entity”.
This can be one of the following types:
• Planar entity: Face or WorkPlane object.
• Point entity: Vertex, SketchPoint, SketchPoint3D, WorkPoint or Edge
object.
ExtrudeDefinition Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
If an Edge object is specified, only its mid-point will be used as input. If
other points (e.g. start point or end point) of the edge need to be used as
input, they have to be specified using the corresponding Vertex object.
ExtendToFace Boolean
Optional Input Boolean that defines whether the plane defined by the “to entity”
should be extended to contain the extents of the profile.
This argument is applicable only if the ToEntity argument is a Face. If no value
is explicitly specified, a default value of False will be assumed.
If the ToEntity argument is not a Face, this argument will be ignored.
This is an optional argument whose default value is False.
Samples
Name Description
Create and Edit an Extrude
Feature with a pocket
This sample demonstrates how to edit an extrude feature. It shows how to
create a sketch plane at a specified orientation to existing geometry.
Version
Introduced in version 2012
ExtrudeDefinition.SetToNextExtent Method
Parent Object: ExtrudeDefinition
Description
Method that changes the extents to be “to next face” extents.
Syntax
ExtrudeDefinition.SetToNextExtent( ExtentDirection As PartFeatureExtentDirectionEnum,
Terminator As SurfaceBody )
ExtrudeDefinition Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Parameters
Name Type Description
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude towards. Valid input is
kPositiveExtentDirection or
kNegativeExtentDirection. kPositiveExtentDirection
defines the offset direction to be in the same
direction as the normal of the sketch plane.
Terminator SurfaceBody
Input SurfaceBody object that specifies the solid or
the surface on which to terminate the extrude.
Version
Introduced in version 2012
ExtrudeDefinition.TaperAngle Property
Parent Object: ExtrudeDefinition
Description
Read-write property that provides access to the taper angle of an extrude feature. If not supplied, the
feature will be created with a taper angle of.
Syntax
ExtrudeDefinition.TaperAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2012
ExtrudeDefinition.TaperAngleTwo Property
Parent Object: ExtrudeDefinition
Description
Read-write property that provides access to the second direction taper angle of an asymmetric extrude
feature. This property is not applicable and ret.
ExtrudeDefinition Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
Syntax
ExtrudeDefinition.TaperAngleTwo() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2012
ExtrudeDefinition.Type Property
Parent Object: ExtrudeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtrudeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
ExtrudeDefinition Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6C6B.htm 16/06/2025
ExtrudeFeature Object
Derived from: PartFeature Object
Description
The ExtrudeFeature object represents extruded modeling features.
Methods
Name Description
AddParticipant
Method that adds the specified participant to the assembly feature. This
method fails for features in a part.
Delete
Method that deletes the feature. The arguments allow control over
which dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method
returns False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly
feature. This method fails for features in a part.
SetAffectedBodies
Method that sets a collection of SurfaceBody objects affected by this
feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
Definition
Read-write property that gets and sets the ExtrudeDefinition object
associated with this feature.
EndFaces Property that returns the set of that cap one end of the extrusion.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
ExtrudeFeature Object Page 1 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True,
the OwnedBy property returns the owning feature.
Name
Gets/Sets the name of this Part Feature within the scope of this
Document.
OwnedBy
Property that returns the owning PartFeature object. This property
returns Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This
list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of
a rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
SideFaces
Property that returns a object that provides access to all of the faces
created around the perimeter of the feature.
StartFaces
Property that returns the set of that cap one end of the extrusion and are
coincident with the sketch plane. In the case of a symmetric extrusion
these faces are the ones on the positive normal side of the sketch plane.
In the case where there aren't any start faces this property will return
Nothing.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ExtrudeDefinition.Parent, ExtrudeFeatureProxy.NativeObject, ExtrudeFeatures.Add,
ExtrudeFeatures.Item
Derived Classes
ExtrudeFeatureProxy
Samples
Name Description
Delete Face, Boundary
Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch features.
Add a decal feature This sample demonstrates the creation of a decal feature.
ExtrudeFeature Object Page 2 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Display feature
information
Displays information about all of the extrude features in the active
document. A part document must be active when this is run.
Using Inventor's error
dialog
Demonstrates using Inventor's error dialog.
Edit profile of an
extrude feature
This sample demonstrates editing the profile of an extrude feature.
Create and Edit an
Extrude Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how
to create a sketch plane at a specified orientation to existing geometry.
Sketch from Face
Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and
creates some new sketch lines from the actual edges and the apparent
(silhouette) edges of the cylinder.
Sketch profile control
This sample demonstrates the usage of the Profiles API to control the
shape of the profile. The sample creates three concntric circles and
creates an extrusion of the region between the inner circles.
Create sheet metal rip
feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread Feature Create
This sample demonstrates the creation of a thread feature. It creates a
cylinder in a new part document and creates a thread feature on the
cylinder.
Version
Introduced in version 5
ExtrudeFeature.Adaptive Property
Parent Object: ExtrudeFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
ExtrudeFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
ExtrudeFeature Object Page 3 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
ExtrudeFeature.AddParticipant Method
Parent Object: ExtrudeFeature
Description
Method that adds the specified participant to the assembly feature. This method fails for features
in a part.
Syntax
ExtrudeFeature.AddParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be added. An error occurs if the input ComponentOccurrence
is not a leaf occurrence.
Version
Introduced in version 11
ExtrudeFeature.Appearance Property
Parent Object: ExtrudeFeature
Description
Gets and sets the current appearance of the feature.
Syntax
ExtrudeFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
ExtrudeFeature Object Page 4 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Version
Introduced in version 2014
ExtrudeFeature.AppearanceSourceType
Property
Parent Object: ExtrudeFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
ExtrudeFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
ExtrudeFeature.Application Property
Parent Object: ExtrudeFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ExtrudeFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
ExtrudeFeature Object Page 5 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Version
Introduced in version 5
ExtrudeFeature.AttributeSets Property
Parent Object: ExtrudeFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ExtrudeFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
ExtrudeFeature.ConsumeInputs Property
Parent Object: ExtrudeFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
ExtrudeFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
ExtrudeFeature Object Page 6 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Version
Introduced in version 11
ExtrudeFeature.Definition Property
Parent Object: ExtrudeFeature
Description
Read-write property that gets and sets the ExtrudeDefinition object associated with this feature.
Syntax
ExtrudeFeature.Definition() As ExtrudeDefinition
Property Value
This is a read/write property whose value is an ExtrudeDefinition.
Samples
Name Description
Display feature information
Displays information about all of the extrude features in the active
document. A part document must be active when this is run.
Edit profile of an extrude
feature
This sample demonstrates editing the profile of an extrude feature.
Create and Edit an Extrude
Feature with a pocket
This sample demonstrates how to edit an extrude feature. It shows
how to create a sketch plane at a specified orientation to existing
geometry.
Sketch Share This sample demonstrates setting a sketch so it is shared.
Version
Introduced in version 2012
ExtrudeFeature.Delete Method
Parent Object: ExtrudeFeature
Description
ExtrudeFeature Object Page 7 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
ExtrudeFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If
the feature being deleted is not a sketch based
feature this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if
dependent features should be deleted. If there are
no dependent features this argument is ignored.
This is an optional argument whose default value
is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 5
ExtrudeFeature.EndFaces Property
Parent Object: ExtrudeFeature
Description
Property that returns the set of that cap one end of the extrusion.
ExtrudeFeature Object Page 8 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Syntax
ExtrudeFeature.EndFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Samples
Name Description
Fillet Feature
(Simple)
This sample demonstrates using the AddSimple method of the FilletFeatures
collection to create a constant radius fillet.
Highlight
Feature Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting
them in different colors. The HighlightFeatureFaces sub highlights the feature
faces. Since the highlight set objects are declared outside of this sub, the
highlighting remains after the sub has finished executing. Use the ClearHighlight
sub to clear the highlighting that does so by releasing the HighlightSet objects.
Create and
Edit an
Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to create a
sketch plane at a specified orientation to existing geometry.
Sketch from
Face
Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates
some new sketch lines from the actual edges and the apparent (silhouette) edges
of the cylinder.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder in
a new part document and creates a thread feature on the cylinder.
Version
Introduced in version 5
ExtrudeFeature.ExtendedName Property
Parent Object: ExtrudeFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
ExtrudeFeature.ExtendedName() As String
ExtrudeFeature Object Page 9 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
ExtrudeFeature.Faces Property
Parent Object: ExtrudeFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
ExtrudeFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5
ExtrudeFeature.FeatureDimensions Property
Parent Object: ExtrudeFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
ExtrudeFeature.FeatureDimensions() As FeatureDimensions
ExtrudeFeature Object Page 10 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
ExtrudeFeature.GetReferenceKey Method
Parent Object: ExtrudeFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
ExtrudeFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 5
ExtrudeFeature.GetSuppressionCondition
Method
Parent Object: ExtrudeFeature
ExtrudeFeature Object Page 11 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
ExtrudeFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 11
ExtrudeFeature.HealthStatus Property
Parent Object: ExtrudeFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
ExtrudeFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
ExtrudeFeature Object Page 12 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Version
Introduced in version 5
ExtrudeFeature.IsOwnedByFeature Property
Parent Object: ExtrudeFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
ExtrudeFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
ExtrudeFeature.Name Property
Parent Object: ExtrudeFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
ExtrudeFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
ExtrudeFeature Object Page 13 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Samples
Name Description
Display feature
information
Displays information about all of the extrude features in the active
document. A part document must be active when this is run.
Version
Introduced in version 5
ExtrudeFeature.OwnedBy Property
Parent Object: ExtrudeFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
ExtrudeFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
ExtrudeFeature.Parameters Property
Parent Object: ExtrudeFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
ExtrudeFeature.Parameters() As ParametersEnumerator
ExtrudeFeature Object Page 14 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
ExtrudeFeature.Parent Property
Parent Object: ExtrudeFeature
Description
Property that returns the parent of the feature.
Syntax
ExtrudeFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5
ExtrudeFeature.Participants Property
Parent Object: ExtrudeFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
ExtrudeFeature.Participants() As ComponentOccurrencesEnumerator
ExtrudeFeature Object Page 15 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
ExtrudeFeature.RangeBox Property
Parent Object: ExtrudeFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
ExtrudeFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
ExtrudeFeature.RemoveParticipant Method
Parent Object: ExtrudeFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
ExtrudeFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
ExtrudeFeature Object Page 16 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
ExtrudeFeature.SetAffectedBodies Method
Parent Object: ExtrudeFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
ExtrudeFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
ExtrudeFeature.SetEndOfPart Method
Parent Object: ExtrudeFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
ExtrudeFeature Object Page 17 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Syntax
ExtrudeFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
ExtrudeFeature.SetSuppressionCondition
Method
Parent Object: ExtrudeFeature
Description
Method that sets the suppression condition for the feature.
Syntax
ExtrudeFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant Specifies the expression used for the comparison with
the parameter value. This can either be a string, a value
or a parameter object. If a value is input, the database
units for the units defined by the parameter are used.
ExtrudeFeature Object Page 18 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
For instance, if the parameter defines length units, the
value is assumed to be in centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current units of the document. For
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 11
ExtrudeFeature.Shared Property
Parent Object: ExtrudeFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
ExtrudeFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtrudeFeature.SideFaces Property
Parent Object: ExtrudeFeature
Description
Property that returns a object that provides access to all of the faces created around the perimeter
of the feature.
Syntax
ExtrudeFeature.SideFaces() As Faces
ExtrudeFeature Object Page 19 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a Faces.
Samples
Name Description
Add a decal
feature
This sample demonstrates the creation of a decal feature.
Highlight
Feature
Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting them
in different colors. The HighlightFeatureFaces sub highlights the feature faces.
Since the highlight set objects are declared outside of this sub, the highlighting
remains after the sub has finished executing. Use the ClearHighlight sub to clear the
highlighting that does so by releasing the HighlightSet objects.
Sketch from
Face
Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates some
new sketch lines from the actual edges and the apparent (silhouette) edges of the
cylinder.
Create sheet
metal rip
feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread
Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder in a
new part document and creates a thread feature on the cylinder.
Version
Introduced in version 5
ExtrudeFeature.StartFaces Property
Parent Object: ExtrudeFeature
Description
Property that returns the set of that cap one end of the extrusion and are coincident with the sketch
plane. In the case of a symmetric extrusion these faces are the ones on the positive normal side of
the sketch plane. In the case where there aren't any start faces this property will return Nothing.
Syntax
ExtrudeFeature.StartFaces() As Faces
ExtrudeFeature Object Page 20 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Property Value
This is a read only property whose value is a Faces.
Samples
Name Description
Delete Face,
Boundary
Patch and
Stitch features
Demonstrates creating Face, Boundary Patch and Stitch features.
Extrude
Feature -
Create Block
with Pocket
This sample demonstrates creating a simple solid consisting a block with a
pocket. It shows how to create a sketch plane at a specified orientation to
existing geometry.
Fillet Feature
(Complex)
This sample demonstrates creating a complex fillet. The result in this case has
several different constant radii fillets and two edges that use variable radius, with
one of these having a different radius defined along the edge.
Fillet Feature
(Simple)
This sample demonstrates using the AddSimple method of the FilletFeatures
collection to create a constant radius fillet.
Highlight
Feature Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting
them in different colors. The HighlightFeatureFaces sub highlights the feature
faces. Since the highlight set objects are declared outside of this sub, the
highlighting remains after the sub has finished executing. Use the ClearHighlight
sub to clear the highlighting that does so by releasing the HighlightSet objects.
Create and Edit
an Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to create
a sketch plane at a specified orientation to existing geometry.
Sketch from
Face Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates
some new sketch lines from the actual edges and the apparent (silhouette) edges
of the cylinder.
Version
Introduced in version 5
ExtrudeFeature.Suppressed Property
Parent Object: ExtrudeFeature
Description
Gets and sets whether this feature is suppressed or not.
ExtrudeFeature Object Page 21 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Syntax
ExtrudeFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
ExtrudeFeature.SurfaceBodies Property
Parent Object: ExtrudeFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
ExtrudeFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
ExtrudeFeature.Type Property
Parent Object: ExtrudeFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
ExtrudeFeature Object Page 22 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
Syntax
ExtrudeFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
ExtrudeFeature Object Page 23 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9427.htm 16/06/2025
ExtrudeFeatureProxy Object
Derived from: ExtrudeFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
AddParticipant
Method that adds the specified participant to the assembly feature. This
method fails for features in a part.
Delete
Method that deletes the feature. The arguments allow control over which
dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method
returns False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature.
This method fails for features in a part.
SetAffectedBodies
Method that sets a collection of SurfaceBody objects affected by this
feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under this
feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
Definition
Read-write property that gets and sets the ExtrudeDefinition object
associated with this feature.
EndFaces Property that returns the set of that cap one end of the extrusion.
ExtendedName
ExtrudeFeatureProxy Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Read-only property that returns the full feature name including any extended
information.
Faces
Property that returns a collection that provides access to all of the faces of
the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the
OwnedBy property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list
is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to surface
features.
SideFaces
Property that returns a object that provides access to all of the faces created
around the perimeter of the feature.
StartFaces
Property that returns the set of that cap one end of the extrusion and are
coincident with the sketch plane. In the case of a symmetric extrusion these
faces are the ones on the positive normal side of the sketch plane. In the case
where there aren't any start faces this property will return Nothing.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
ExtrudeFeatureProxy.Adaptive Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
ExtrudeFeatureProxy Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Syntax
ExtrudeFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
ExtrudeFeatureProxy.AddParticipant Method
Parent Object: ExtrudeFeatureProxy
Description
Method that adds the specified participant to the assembly feature. This method fails for features in a
part.
Syntax
ExtrudeFeatureProxy.AddParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be
added. An error occurs if the input ComponentOccurrence is not a
leaf occurrence.
Version
Introduced in version 11
ExtrudeFeatureProxy.Appearance Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets the current appearance of the feature.
ExtrudeFeatureProxy Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Syntax
ExtrudeFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
ExtrudeFeatureProxy.AppearanceSourceType
Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
ExtrudeFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
ExtrudeFeatureProxy.Application Property
Parent Object: ExtrudeFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
ExtrudeFeatureProxy Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Syntax
ExtrudeFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
ExtrudeFeatureProxy.AttributeSets Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ExtrudeFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
ExtrudeFeatureProxy.ConsumeInputs Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
ExtrudeFeatureProxy.ConsumeInputs() As Boolean
ExtrudeFeatureProxy Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtrudeFeatureProxy.ContainingOccurrence
Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Syntax
ExtrudeFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
ExtrudeFeatureProxy.Definition Property
Parent Object: ExtrudeFeatureProxy
Description
Read-write property that gets and sets the ExtrudeDefinition object associated with this feature.
Syntax
ExtrudeFeatureProxy.Definition() As ExtrudeDefinition
ExtrudeFeatureProxy Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Property Value
This is a read/write property whose value is an ExtrudeDefinition.
Version
Introduced in version 2012
ExtrudeFeatureProxy.Delete Method
Parent Object: ExtrudeFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
ExtrudeFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature
this argument is ignored.
This is an optional argument whose default value is
False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent
features should be deleted. If there are no dependent
features this argument is ignored.
This is an optional argument whose default value is
False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent
work features should be deleted. If there are no
dependent work features this argument is ignored.
This is an optional argument whose default value is
False.
ExtrudeFeatureProxy Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Version
Introduced in version 9
ExtrudeFeatureProxy.EndFaces Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the set of that cap one end of the extrusion.
Syntax
ExtrudeFeatureProxy.EndFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
ExtrudeFeatureProxy.ExtendedName Property
Parent Object: ExtrudeFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
ExtrudeFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
ExtrudeFeatureProxy Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
ExtrudeFeatureProxy.Faces Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
ExtrudeFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
ExtrudeFeatureProxy.FeatureDimensions
Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
ExtrudeFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
ExtrudeFeatureProxy Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
ExtrudeFeatureProxy.GetReferenceKey
Method
Parent Object: ExtrudeFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ExtrudeFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 9
ExtrudeFeatureProxy.GetSuppressionCondition
Method
Parent Object: ExtrudeFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Syntax
ExtrudeFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
ExtrudeFeatureProxy Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is
to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid return types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string or a parameter
object.
Version
Introduced in version 11
ExtrudeFeatureProxy.HealthStatus Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
ExtrudeFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
ExtrudeFeatureProxy.IsOwnedByFeature
Property
Parent Object: ExtrudeFeatureProxy
ExtrudeFeatureProxy Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns
the owning feature.
Syntax
ExtrudeFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
ExtrudeFeatureProxy.Name Property
Parent Object: ExtrudeFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
ExtrudeFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
ExtrudeFeatureProxy.NativeObject Property
Parent Object: ExtrudeFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
ExtrudeFeatureProxy Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Syntax
ExtrudeFeatureProxy.NativeObject() As ExtrudeFeature
Property Value
This is a read only property whose value is an ExtrudeFeature.
Version
Introduced in version 9
ExtrudeFeatureProxy.OwnedBy Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
ExtrudeFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
ExtrudeFeatureProxy.Parameters Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
ExtrudeFeatureProxy.Parameters() As ParametersEnumerator
ExtrudeFeatureProxy Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
ExtrudeFeatureProxy.Parent Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
ExtrudeFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
ExtrudeFeatureProxy.Participants Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a
part.
Syntax
ExtrudeFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
ExtrudeFeatureProxy Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Version
Introduced in version 10
ExtrudeFeatureProxy.RangeBox Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
ExtrudeFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
ExtrudeFeatureProxy.RemoveParticipant
Method
Parent Object: ExtrudeFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
ExtrudeFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ExtrudeFeatureProxy Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
ComponentOccurrence object that specifies the participant to be
removed. An error occurs if the input ComponentOccurrence is
not a participant.
Version
Introduced in version 10
ExtrudeFeatureProxy.SetAffectedBodies
Method
Parent Object: ExtrudeFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
ExtrudeFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
ExtrudeFeatureProxy.SetEndOfPart Method
Parent Object: ExtrudeFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ExtrudeFeatureProxy.SetEndOfPart( Before As Boolean )
ExtrudeFeatureProxy Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before
or after this work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 9
ExtrudeFeatureProxy.SetSuppressionCondition
Method
Parent Object: ExtrudeFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
ExtrudeFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is
to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of
comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string, a value or a
parameter object. If a value is input, the database units for
the units defined by the parameter are used. For instance, if
the parameter defines length units, the value is assumed to
be in centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current
units of the document. For instance, if the parameter defines
length units, the current length units of the document are
used.
ExtrudeFeatureProxy Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Version
Introduced in version 11
ExtrudeFeatureProxy.Shared Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
ExtrudeFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
ExtrudeFeatureProxy.SideFaces Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns a object that provides access to all of the faces created around the perimeter of
the feature.
Syntax
ExtrudeFeatureProxy.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
ExtrudeFeatureProxy Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Version
Introduced in version 9
ExtrudeFeatureProxy.StartFaces Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the set of that cap one end of the extrusion and are coincident with the sketch
plane. In the case of a symmetric extrusion these faces are the ones on the positive normal side of the
sketch plane. In the case where there aren't any start faces this property will return Nothing.
Syntax
ExtrudeFeatureProxy.StartFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
ExtrudeFeatureProxy.Suppressed Property
Parent Object: ExtrudeFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
ExtrudeFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
ExtrudeFeatureProxy Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
Version
Introduced in version 9
ExtrudeFeatureProxy.SurfaceBodies Property
Parent Object: ExtrudeFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
ExtrudeFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
ExtrudeFeatureProxy.Type Property
Parent Object: ExtrudeFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtrudeFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
ExtrudeFeatureProxy Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBDB7.htm 16/06/2025
ExtrudeFeatures Object
Description
The ExtrudeFeatures collection object provides access to all of the ExtrudeFeature object in a part
component definition and provides methods to create additional ExtrudeFeatures.
Methods
Name Description
Add Method that creates a new Extrude feature.
CreateExtrudeDefinition
Method that creates a new ExtrudeDefinition object. The object created
does not represent an extrude feature but instead is a representation of
the information that defines an extrude feature. You can use this object
as input to the ExtrudeFeatures.Add method to create the actual feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Features.ExtrudeFeatures, FlatPatternFeatures.ExtrudeFeatures, PartFeatures.ExtrudeFeatures,
SheetMetalFeatures.ExtrudeFeatures
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more
flexible. In order for the sample to be self-contained, it creates two parts on the
fly that will be used to demonstrate copying a body from one part to another.
When copying a body into a part, you provide the surface body and a matrix to
define its position in the new part. This sample creates a matrix based on the
position of these parts within an assembly.
Add a decal
feature
This sample demonstrates the creation of a decal feature.
ExtrudeFeatures Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
Display feature
information
Displays information about all of the extrude features in the active document.
A part document must be active when this is run.
Using Inventor's
error dialog
Demonstrates using Inventor's error dialog.
Edit profile of an
extrude feature
This sample demonstrates editing the profile of an extrude feature.
Create and Edit
an Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to
create a sketch plane at a specified orientation to existing geometry.
Sketch profile
control
This sample demonstrates the usage of the Profiles API to control the shape of
the profile. The sample creates three concntric circles and creates an extrusion
of the region between the inner circles.
Create sheet
metal rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder
in a new part document and creates a thread feature on the cylinder.
Version
Introduced in version 5
ExtrudeFeatures.Add Method
Parent Object: ExtrudeFeatures
Description
Method that creates a new Extrude feature.
Syntax
ExtrudeFeatures.Add( Definition As ExtrudeDefinition ) As ExtrudeFeature
Parameters
Name Type Description
Definition ExtrudeDefinition
Input ExtrudeDefinition object that defines the extrude feature you
want to create. An ExtrudeDefinition object can be created using
the ExtrudeFeatures.CreateExtrudeDefinition method. It can also be
obtained from an existing ExtrudeFeature object.
Samples
Name Description
ExtrudeFeatures Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
Delete Face,
Boundary Patch
and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch features.
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more flexible.
In order for the sample to be self-contained, it creates two parts on the fly that
will be used to demonstrate copying a body from one part to another. When
copying a body into a part, you provide the surface body and a matrix to define
its position in the new part. This sample creates a matrix based on the position
of these parts within an assembly.
Add a decal
feature
This sample demonstrates the creation of a decal feature.
Derived Parts
and Assemblies
This sample demonstrates the use of the API to create derived parts and
assemblies.
Using Inventor's
error dialog
Demonstrates using Inventor's error dialog.
Extrude Feature
- Create Block
with Pocket
This sample demonstrates creating a simple solid consisting a block with a
pocket. It shows how to create a sketch plane at a specified orientation to
existing geometry.
Edit profile of
an extrude
feature
This sample demonstrates editing the profile of an extrude feature.
Extrude sketch
text
This sample demonstrates the creation of an extrude feature from sketch text.
Add iMate
Definition
Add iMate definitions using AddMateiMateDefinition and
AddInsertiMateDefinition.
Create and Edit
an Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to
create a sketch plane at a specified orientation to existing geometry.
Sketch from
Face Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates
some new sketch lines from the actual edges and the apparent (silhouette) edges
of the cylinder.
Sketch profile
control
This sample demonstrates the usage of the Profiles API to control the shape of
the profile. The sample creates three concntric circles and creates an extrusion
of the region between the inner circles.
Create sheet
metal rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder
in a new part document and creates a thread feature on the cylinder.
Version
Introduced in version 2012
ExtrudeFeatures Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
ExtrudeFeatures.Application Property
Parent Object: ExtrudeFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ExtrudeFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
ExtrudeFeatures.Count Property
Parent Object: ExtrudeFeatures
Description
Property that returns the number of items in this collection.
Syntax
ExtrudeFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
ExtrudeFeatures Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
ExtrudeFeatures.CreateExtrudeDefinition
Method
Parent Object: ExtrudeFeatures
Description
Method that creates a new ExtrudeDefinition object. The object created does not represent an
extrude feature but instead is a representation of the information that defines an extrude
feature. You can use this object as input to the ExtrudeFeatures.Add method to create the actual
feature.
Syntax
ExtrudeFeatures.CreateExtrudeDefinition( Profile As Profile, Operation As
PartFeatureOperationEnum ) As ExtrudeDefinition
Parameters
Name Type Description
Profile Profile
Input Profile object that specifies the sketch profile to use
for the extrude feature.
Operation PartFeatureOperationEnum
Input that specifies the type of operation used to add the
feature to the model. Valid inputs are
kNewBodyOperation, kJoinOperation, kCutOperation,
kIntersectOperation and kSurfaceOperation.
Remarks
The ExtrudeDefinition object returned is fully defined and can be used to create an extrude
feature. However, defaults are used for extrude options (including a distance extent type with a
value of “1.0 in”), so you may want to change some of the property values of the
ExtrudeDefinition object before using it to create a feature.
Samples
Name Description
Delete Face,
Boundary Patch
and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch features.
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more flexible.
In order for the sample to be self-contained, it creates two parts on the fly that
will be used to demonstrate copying a body from one part to another. When
copying a body into a part, you provide the surface body and a matrix to define
ExtrudeFeatures Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
its position in the new part. This sample creates a matrix based on the position
of these parts within an assembly.
Add a decal
feature
This sample demonstrates the creation of a decal feature.
Derived Parts
and Assemblies
This sample demonstrates the use of the API to create derived parts and
assemblies.
Using Inventor's
error dialog
Demonstrates using Inventor's error dialog.
Extrude Feature
- Create Block
with Pocket
This sample demonstrates creating a simple solid consisting a block with a
pocket. It shows how to create a sketch plane at a specified orientation to
existing geometry.
Edit profile of
an extrude
feature
This sample demonstrates editing the profile of an extrude feature.
Extrude sketch
text
This sample demonstrates the creation of an extrude feature from sketch text.
Add iMate
Definition
Add iMate definitions using AddMateiMateDefinition and
AddInsertiMateDefinition.
Create and Edit
an Extrude
Feature with a
pocket
This sample demonstrates how to edit an extrude feature. It shows how to
create a sketch plane at a specified orientation to existing geometry.
Sketch from
Face Silhouette
This sample creates a cylindrical solid, creates a new sketch plane and creates
some new sketch lines from the actual edges and the apparent (silhouette) edges
of the cylinder.
Sketch profile
control
This sample demonstrates the usage of the Profiles API to control the shape of
the profile. The sample creates three concntric circles and creates an extrusion
of the region between the inner circles.
Create sheet
metal rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Thread Feature
Create
This sample demonstrates the creation of a thread feature. It creates a cylinder
in a new part document and creates a thread feature on the cylinder.
Version
Introduced in version 2012
ExtrudeFeatures.Item Property
Parent Object: ExtrudeFeatures
Description
Returns the specified object from the collection.
ExtrudeFeatures Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
Syntax
ExtrudeFeatures.Item( Index As Variant ) As ExtrudeFeature
Property Value
This is a read only property whose value is an ExtrudeFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string
indicating the feature name. If an out of range index or a name of a non-existent
feature is provided, an error occurs.
Samples
Name Description
Sketch Share This sample demonstrates setting a sketch so it is shared.
Version
Introduced in version 5
ExtrudeFeatures.Type Property
Parent Object: ExtrudeFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ExtrudeFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
ExtrudeFeatures Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025
Version
Introduced in version 5
ExtrudeFeatures Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE7A6.htm 16/06/2025