VbaApplication Object
Description
The VBAApplication object represents the currently available VBA application.
Properties
Name Description
ThisApplication Gets the VBA application interface.
ThisServer Gets the VBA InventorServer interface.
Version
Introduced in version 5
VbaApplication.ThisApplication Property
Parent Object: VbaApplication
Description
Gets the VBA application interface.
Syntax
VbaApplication.ThisApplication() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 5
VbaApplication.ThisServer Property
Parent Object: VbaApplication
VbaApplication Object Page 1 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CF.htm 17/06/2025
Description
Gets the VBA InventorServer interface.
Syntax
VbaApplication.ThisServer() As InventorServerObject
Property Value
This is a read only property whose value is an InventorServerObject.
Version
Introduced in version 2011
VbaApplication Object Page 2 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CF.htm 17/06/2025
Vector Object
Description
The Vector object. For more information, see the Transient Geometry overview.
Methods
Name Description
AddVector Add the specified vector to this vector.
AngleTo Determines the angle between this vector and the specified vector.
AsUnitVector Get the unit vector equivalent of this vector normalized.
Copy
Creates a copy of this Vector object. The result is entirely independent and can
be edited without affecting the original Vector object.
CrossProduct Determine the cross product between this vector and the specified vector.
DotProduct Determine the dot product of this vector to the specified vector.
GetVectorData Get the data defining this vector.
IsEqualTo Compare this vector for equality to the specified vector.
IsParallelTo Determine if this vector is parallel to the specified vector.
IsPerpendicularTo Determine if this vector is perpendicular to the specified vector.
Normalize Normalize this vector to result in a length equal to 1.0.
PutVectorData Method that sets the data defining this vector.
ScaleBy Scale this vector by the specified scale factor.
SubtractVector Subtract the specified vector from this vector.
TransformBy Transform this vector by the specified matrix.
Properties
Name Description
Length Get the length of this vector.
X Specifies the X coordinate of the vector. If not supplied, the X value will default to 0.
Y Specifies the Y coordinate of the vector. If not supplied, the Y value will default to 0.
Z Specifies the Z coordinate of the vector. If not supplied, the Z value will default to 0.
Accessed From
DerivedPartCoordinateSystemDef.GetCoordinateSystem, DSLoadDefinition.Vector,
EllipseFull.MajorAxisVector, EllipticalCone.MajorAxisVector,
EllipticalCylinder.MajorAxisVector, HoleTapInfo.ThreadDirection, Light.Direction,
Matrix.GetCoordinateSystem, Matrix.Translation, OrientedBox.DirectionOne,
OrientedBox.DirectionThree, OrientedBox.DirectionTwo, OrientedBox.GetOrientedBoxData,
Point.VectorTo, PresentationTweak.Translation, RegionProperties.PrincipalAxes,
StandardThreadInfo.ThreadDirection, TaperedThreadInfo.ThreadDirection,
Vector Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
ThreadInfo.ThreadDirection, TransientGeometry.CreateVector, UnitVector.AsVector,
Vector.Copy, Vector.CrossProduct
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This
is equivalent to the Promote command, but the API is much more flexible. In
order for the sample to be self-contained, it creates two parts on the fly that will
be used to demonstrate copying a body from one part to another. When copying
a body into a part, you provide the surface body and a matrix to define its
position in the new part. This sample creates a matrix based on the position of
these parts within an assembly.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 4
Vector.AddVector Method
Parent Object: Vector
Description
Add the specified vector to this vector.
Syntax
Vector.AddVector( Argument As Vector )
Parameters
Name Type Description
Argument Vector Input to add.
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This is
equivalent to the Promote command, but the API is much more flexible. In order
for the sample to be self-contained, it creates two parts on the fly that will be used
Vector Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
to demonstrate copying a body from one part to another. When copying a body
into a part, you provide the surface body and a matrix to define its position in the
new part. This sample creates a matrix based on the position of these parts within
an assembly.
Version
Introduced in version 4
Vector.AngleTo Method
Parent Object: Vector
Description
Determines the angle between this vector and the specified vector.
Syntax
Vector.AngleTo( Argument As Vector ) As Double
Parameters
Name Type Description
Argument Vector Input used for comparison.
Remarks
When one of the input vectors is null (0,0,0) this method will return -NaN.
Version
Introduced in version 4
Vector.AsUnitVector Method
Parent Object: Vector
Description
Get the unit vector equivalent of this vector normalized.
Vector Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Syntax
Vector.AsUnitVector() As UnitVector
Version
Introduced in version 4
Vector.Copy Method
Parent Object: Vector
Description
Creates a copy of this Vector object. The result is entirely independent and can be edited without
affecting the original Vector object.
Syntax
Vector.Copy() As Vector
Version
Introduced in version 2013
Vector.CrossProduct Method
Parent Object: Vector
Description
Determine the cross product between this vector and the specified vector.
Syntax
Vector.CrossProduct( Argument As Vector ) As Vector
Parameters
Name Type Description
Argument Vector Input used for comparison.
Vector Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Version
Introduced in version 4
Vector.DotProduct Method
Parent Object: Vector
Description
Determine the dot product of this vector to the specified vector.
Syntax
Vector.DotProduct( Argument As Vector ) As Double
Parameters
Name Type Description
Argument Vector Input used for comparison.
Version
Introduced in version 4
Vector.GetVectorData Method
Parent Object: Vector
Description
Get the data defining this vector.
Syntax
Vector.GetVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Vector Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Version
Introduced in version 4
Vector.IsEqualTo Method
Parent Object: Vector
Description
Compare this vector for equality to the specified vector.
Syntax
Vector.IsEqualTo( Argument As Vector, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Argument Vector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining whether
the vectors are equal.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 4
Vector.IsParallelTo Method
Parent Object: Vector
Description
Determine if this vector is parallel to the specified vector.
Syntax
Vector.IsParallelTo( Argument As Vector, [Tolerance] As Double ) As Boolean
Vector Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Parameters
Name Type Description
Argument Vector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining whether
the vectors are parallel.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 4
Vector.IsPerpendicularTo Method
Parent Object: Vector
Description
Determine if this vector is perpendicular to the specified vector.
Syntax
Vector.IsPerpendicularTo( Argument As Vector, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Argument Vector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining whether
the vectors are perpendicular.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 4
Vector.Length Property
Parent Object: Vector
Vector Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Description
Get the length of this vector.
Syntax
Vector.Length() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 4
Vector.Normalize Method
Parent Object: Vector
Description
Normalize this vector to result in a length equal to 1.0.
Syntax
Vector.Normalize()
Version
Introduced in version 5
Vector.PutVectorData Method
Parent Object: Vector
Description
Method that sets the data defining this vector.
Vector Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Syntax
Vector.PutVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
Vector.ScaleBy Method
Parent Object: Vector
Description
Scale this vector by the specified scale factor.
Syntax
Vector.ScaleBy( Scale As Double )
Parameters
Name Type Description
Scale Double Input Double that specifies the scale.
Samples
Name Description
Is cylindrical
face interior or
exterior?
This sample shows how to determine whether the selected cylindircal face is
an exterior face or an interior (hollow) face.
Tapered Surface
Using Offset
Curve and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample
then creates a trasient wire body using the geometry of the outside of the
selected face. It then transforms and offsets that wire, and finally creates a
ruled surface between the original wire and the offset wire. A base feature is
created with the ruled surface.
Vector Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Version
Introduced in version 4
Vector.SubtractVector Method
Parent Object: Vector
Description
Subtract the specified vector from this vector.
Syntax
Vector.SubtractVector( Argument As Vector )
Parameters
Name Type Description
Argument Vector Input to subtract.
Version
Introduced in version 4
Vector.TransformBy Method
Parent Object: Vector
Description
Transform this vector by the specified matrix.
Syntax
Vector.TransformBy( Matrix As Matrix )
Parameters
Name Type Description
Matrix Matrix Input Matrix object that specifies the position and orientation of the occurrence.
Vector Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Version
Introduced in version 4
Vector.X Property
Parent Object: Vector
Description
Specifies the X coordinate of the vector. If not supplied, the X value will default to 0.
Syntax
Vector.X() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
Vector.Y Property
Parent Object: Vector
Description
Specifies the Y coordinate of the vector. If not supplied, the Y value will default to 0.
Syntax
Vector.Y() As Double
Property Value
This is a read/write property whose value is a Double.
Vector Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Version
Introduced in version 4
Vector.Z Property
Parent Object: Vector
Description
Specifies the Z coordinate of the vector. If not supplied, the Z value will default to 0.
Syntax
Vector.Z() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
Vector Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9A0B.htm 17/06/2025
Vector2d Object
Description
The Vector2d object. For more information, see the Transient Geometry overview.
Methods
Name Description
AddVector Add the specified vector2d to this vector2d.
AngleTo Determines the angle between this vector2d and the specified vector2d.
AsUnitVector Get the unit vector2d equivalent of this vector2d normalized.
Copy
Creates a copy of this Vector2d object. The result is entirely independent and
can be edited without affecting the original Vector2d object.
DotProduct Determine the dot product of this vector2d to the specified vector2d.
GetVectorData Get the data defining this vector.
IsEqualTo Compare this vector2d for equality to the specified vector2d.
IsParallelTo Determine if this vector2d is parallel to the specified vector2d.
IsPerpendicularTo Determine if this vector2d is perpendicular to the specified vector2d.
Normalize Normalize this vector2d to result in a length equal to 1.0.
PutVectorData Method that sets the data defining this vector.
ScaleBy Scale this vector2d by the specified scale factor.
SubtractVector Subtract the specified vector2d from this vector2d.
TransformBy Transform this vector2d by the specified matrix.
Properties
Name Description
Length Get the length of this vector2d.
X Gets the X-component for this Vector2d.
Y Gets the Y-component for this Vector2d.
Accessed From
EllipseFull2d.MajorAxisVector, Matrix2d.GetCoordinateSystem, Matrix2d.Translation,
Point2d.VectorTo, TransientGeometry.CreateVector2d, UnitVector2d.AsVector, Vector2d.Copy
Samples
Name Description
Move sketch
entities
This sample demonstrates the translation of all the objects on the active sketch
by a certain distance.
Vector2d Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Version
Introduced in version 4
Vector2d.AddVector Method
Parent Object: Vector2d
Description
Add the specified vector2d to this vector2d.
Syntax
Vector2d.AddVector( Value As Vector2d )
Parameters
Name Type Description
Value Vector2d Vector2d to add.
Version
Introduced in version 11
Vector2d.AngleTo Method
Parent Object: Vector2d
Description
Determines the angle between this vector2d and the specified vector2d.
Syntax
Vector2d.AngleTo( Vector As Vector2d ) As Double
Parameters
Name Type Description
Vector Vector2d Vector to measure to.
Vector2d Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Version
Introduced in version 11
Vector2d.AsUnitVector Method
Parent Object: Vector2d
Description
Get the unit vector2d equivalent of this vector2d normalized.
Syntax
Vector2d.AsUnitVector() As UnitVector2d
Version
Introduced in version 11
Vector2d.Copy Method
Parent Object: Vector2d
Description
Creates a copy of this Vector2d object. The result is entirely independent and can be edited
without affecting the original Vector2d object.
Syntax
Vector2d.Copy() As Vector2d
Version
Introduced in version 2013
Vector2d.DotProduct Method
Parent Object: Vector2d
Vector2d Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Description
Determine the dot product of this vector2d to the specified vector2d.
Syntax
Vector2d.DotProduct( Vector As Vector2d ) As Double
Parameters
Name Type Description
Vector Vector2d Vector with which to calculate the dot product.
Version
Introduced in version 11
Vector2d.GetVectorData Method
Parent Object: Vector2d
Description
Get the data defining this vector.
Syntax
Vector2d.GetVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
Vector2d.IsEqualTo Method
Parent Object: Vector2d
Vector2d Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Description
Compare this vector2d for equality to the specified vector2d.
Syntax
Vector2d.IsEqualTo( Vector As Vector2d, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Vector Vector2d Vector to compare to.
Tolerance Double
Tolerance for comparison.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 11
Vector2d.IsParallelTo Method
Parent Object: Vector2d
Description
Determine if this vector2d is parallel to the specified vector2d.
Syntax
Vector2d.IsParallelTo( Vector As Vector2d, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Vector Vector2d Vector to use for parallel test.
Tolerance Double
Tolerance value for test.
This is an optional argument whose default value is 0.0.
Samples
Name Description
Vector2d Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Create ordinate
dimension
This sample demonstrates the creation of ordinate dimensions in a
drawing document.
Version
Introduced in version 11
Vector2d.IsPerpendicularTo Method
Parent Object: Vector2d
Description
Determine if this vector2d is perpendicular to the specified vector2d.
Syntax
Vector2d.IsPerpendicularTo( Vector As Vector2d, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Vector Vector2d Vector to use for perpendicular test.
Tolerance Double
Tolerance value for test.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 11
Vector2d.Length Property
Parent Object: Vector2d
Description
Get the length of this vector2d.
Syntax
Vector2d.Length() As Double
Vector2d Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 11
Vector2d.Normalize Method
Parent Object: Vector2d
Description
Normalize this vector2d to result in a length equal to 1.0.
Syntax
Vector2d.Normalize()
Version
Introduced in version 11
Vector2d.PutVectorData Method
Parent Object: Vector2d
Description
Method that sets the data defining this vector.
Syntax
Vector2d.PutVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Vector2d Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Version
Introduced in version 4
Vector2d.ScaleBy Method
Parent Object: Vector2d
Description
Scale this vector2d by the specified scale factor.
Syntax
Vector2d.ScaleBy( Value As Double )
Parameters
Name Type Description
Value Double Scale factor to use.
Version
Introduced in version 11
Vector2d.SubtractVector Method
Parent Object: Vector2d
Description
Subtract the specified vector2d from this vector2d.
Syntax
Vector2d.SubtractVector( Value As Vector2d )
Parameters
Name Type Description
Value Vector2d Vector2d to subtract.
Vector2d Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Version
Introduced in version 11
Vector2d.TransformBy Method
Parent Object: Vector2d
Description
Transform this vector2d by the specified matrix.
Syntax
Vector2d.TransformBy( Value As Matrix2d )
Parameters
Name Type Description
Value Matrix2d Matrix2d for transform.
Version
Introduced in version 11
Vector2d.X Property
Parent Object: Vector2d
Description
Gets the X-component for this Vector2d.
Syntax
Vector2d.X() As Double
Property Value
This is a read/write property whose value is a Double.
Vector2d Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Version
Introduced in version 4
Vector2d.Y Property
Parent Object: Vector2d
Description
Gets the Y-component for this Vector2d.
Syntax
Vector2d.Y() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
Vector2d Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D1.htm 17/06/2025
Vertex Object
Description
The Vertex object represents a transient point in boundary representation data.
Methods
Name Description
GetPoint Method that gets the coordinates of the vertex point.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSourceVertex
Method that gets the source vertex that has been overridden by this vertex. The
method returns Nothing if this vertex is not an override. An error is returned if
this method is called on a vertex in a part.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Edges Gets the referenced by this Vertex.
Faces Property that returns the that this Vertex is referenced from.
IsTolerant Indicates if this vertex is using tolerant modeling to allow a non-exact model.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Point
Property that returns a Point geometry object. The Point object returned provides
information about the position of the vertex.
Tolerance Returns the tolerance being used for modeling calculations and this Vertex.
TransientKey
Property that obtains an ID key that can be used to bind back to the live object.
This transient key is only valid as long as the document state has not changed. For
more information, see the ReferenceKeys overview
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Edge.StartVertex, Edge.StopVertex, EdgeProxy.StartVertex, EdgeProxy.StopVertex,
FilletSetbackVertex.Vertex, SurfaceGraphicsVertex.Vertex, UnwrapDefinition.Origin,
Vertex.GetSourceVertex, VertexProxy.GetSourceVertex, VertexProxy.NativeObject,
Vertices.Item
Vertex Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Derived Classes
VertexProxy
Samples
Name Description
Sketch Add
Oriented
This sample demonstrates the creation of a sketch using the
Sketches.AddWithOrientation method.
Version
Introduced in version 4
Vertex.Application Property
Parent Object: Vertex
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Vertex.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
Vertex.AttributeSets Property
Parent Object: Vertex
Description
Vertex Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Property that returns the AttributeSets collection object associated with this object.
Syntax
Vertex.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
Vertex.Edges Property
Parent Object: Vertex
Description
Gets the referenced by this Vertex.
Syntax
Vertex.Edges() As Edges
Property Value
This is a read only property whose value is an Edges.
Version
Introduced in version 4
Vertex.Faces Property
Parent Object: Vertex
Description
Property that returns the that this Vertex is referenced from.
Vertex Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Syntax
Vertex.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 4
Vertex.GetPoint Method
Parent Object: Vertex
Description
Method that gets the coordinates of the vertex point.
Syntax
Vertex.GetPoint( Point() As Double )
Parameters
Name Type Description
Point Double Output Double array that returns the coordinates of the vertex point.
Version
Introduced in version 4
Vertex.GetReferenceKey Method
Parent Object: Vertex
Description
Method that generates and returns the reference key for this entity.
Vertex Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Syntax
Vertex.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Vertex.GetSourceVertex Method
Parent Object: Vertex
Description
Method that gets the source vertex that has been overridden by this vertex. The method returns
Nothing if this vertex is not an override. An error is returned if this method is called on a vertex in
a part.
Syntax
Vertex.GetSourceVertex( [GetLeafSource] As Boolean ) As Vertex
Parameters
Name Type Description
Vertex Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
GetLeafSource Boolean Optional input Boolean that specifies whether to get the 'leaf' source
vertex in the case where there are multiple levels of override. If specified
to be False, the method returns the next level override vertex. If not
specified, the argument defaults to True indicating that the leaf source
will be returned.
This is an optional argument whose default value is True.
Version
Introduced in version 10
Vertex.IsTolerant Property
Parent Object: Vertex
Description
Indicates if this vertex is using tolerant modeling to allow a non-exact model.
Syntax
Vertex.IsTolerant() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2011
Vertex.Parent Property
Parent Object: Vertex
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
Vertex.Parent() As SurfaceBody
Vertex Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 5
Vertex.Point Property
Parent Object: Vertex
Description
Property that returns a Point geometry object. The Point object returned provides information
about the position of the vertex.
Syntax
Vertex.Point() As Point
Property Value
This is a read only property whose value is a Point.
Samples
Name Description
Finding Bend
Extent (Tangent)
Edges
This sample demonstrates how to retrieve the bend extent edges (a.k.a. tangent
edges) associated with the selected bend edge on a flat pattern.
Tapered Surface
Using Offset
Curve and Ruled
Surface
This sample demonstrates much of the wire body creation functionality. To run
the sample you must have a part open and select a planar face. This sample then
creates a trasient wire body using the geometry of the outside of the selected
face. It then transforms and offsets that wire, and finally creates a ruled surface
between the original wire and the offset wire. A base feature is created with the
ruled surface.
Version
Introduced in version 6
Vertex Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Vertex.Tolerance Property
Parent Object: Vertex
Description
Returns the tolerance being used for modeling calculations and this Vertex.
Syntax
Vertex.Tolerance() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2011
Vertex.TransientKey Property
Parent Object: Vertex
Description
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview
Syntax
Vertex.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
Vertex Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
Vertex.Type Property
Parent Object: Vertex
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Vertex.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
Vertex Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0FA.htm 17/06/2025
VertexDefinition Object
Description
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AssociativeID
Gets and sets the associate ID of this vertex. This ID will be transferred to the
corresponding vertex when this SurfaceBodyDefinition is used to create a
SurfaceBody. It is used by Inventor as the identifier for the vertex and is used for
tracking this geom.
Position Gets and sets the defined location of the vertex.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
EdgeDefinition.EndVertex, EdgeDefinition.StartVertex, VertexDefinitions.Add,
VertexDefinitions.Item, WireEdgeDefinition.EndVertex, WireEdgeDefinition.StartVertex
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
VertexDefinition.Application Property
Parent Object: VertexDefinition
Description
VertexDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9F0.htm 17/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VertexDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
VertexDefinition.AssociativeID Property
Parent Object: VertexDefinition
Description
Gets and sets the associate ID of this vertex. This ID will be transferred to the corresponding
vertex when this SurfaceBodyDefinition is used to create a SurfaceBody. It is used by Inventor as
the identifier for the vertex and is used for tracking this geom.
Syntax
VertexDefinition.AssociativeID() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
VertexDefinition.Position Property
Parent Object: VertexDefinition
VertexDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9F0.htm 17/06/2025
Description
Gets and sets the defined location of the vertex.
Syntax
VertexDefinition.Position() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2011
VertexDefinition.Type Property
Parent Object: VertexDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VertexDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
VertexDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9F0.htm 17/06/2025
VertexDefinitions Object
Description
Methods
Name Description
Add Method that creates a new VertexDefinition within the associated SurfaceBodyDefinition.
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
SurfaceBodyDefinition.VertexDefinitions
Version
Introduced in version 2011
VertexDefinitions.Add Method
Parent Object: VertexDefinitions
Description
Method that creates a new VertexDefinition within the associated SurfaceBodyDefinition.
Syntax
VertexDefinitions.Add( Position As Point ) As VertexDefinition
VertexDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh596.htm 17/06/2025
Parameters
Name Type Description
Position Point Input Point object that specifies the position of the vertex.
Samples
Name Description
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
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
Transient B-Rep
Ruled Surface
with Lines
Demonstrate creating a transient ruled surface. This sample uses all straight line
segments for each of the sections. A part document must be open.
Transient B-Rep
Ruled Surface
with Arc and
Line
Demonstrate creating a transient ruled surface. This sample uses straight line
segments for once section and an arc for the second. A part document must be
open.
Version
Introduced in version 2011
VertexDefinitions.Application Property
Parent Object: VertexDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VertexDefinitions.Application() As Object
VertexDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh596.htm 17/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
VertexDefinitions.Count Property
Parent Object: VertexDefinitions
Description
Property that returns the number of items in this collection.
Syntax
VertexDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
VertexDefinitions.Item Property
Parent Object: VertexDefinitions
Description
Property that returns an item from the collection. The index of the first item in the collection is 1.
Syntax
VertexDefinitions.Item( Index As Long ) As VertexDefinition
VertexDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh596.htm 17/06/2025
Property Value
This is a read only property whose value is a VertexDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the VertexDefinition object within the collection to
return.
Version
Introduced in version 2011
VertexDefinitions.Type Property
Parent Object: VertexDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VertexDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
VertexDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh596.htm 17/06/2025
VertexProxy Object
Derived from: Vertex Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
GetPoint Method that gets the coordinates of the vertex point.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSourceVertex
Method that gets the source vertex that has been overridden by this vertex. The
method returns Nothing if this vertex is not an override. An error is returned if
this method is called on a vertex in a part.
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
Edges Gets the referenced by this Vertex.
Faces Property that returns the that this Vertex is referenced from.
IsTolerant
Indicates if this vertex is using tolerant modeling to allow a non-exact
model.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent
Property that returns the parent object from whom this object can logically
be reached.
Point
Property that returns a Point geometry object. The Point object returned
provides information about the position of the vertex.
Tolerance
Returns the tolerance being used for modeling calculations and this
Vertex.
TransientKey
Property that obtains an ID key that can be used to bind back to the live
object. This transient key is only valid as long as the document state has
not changed. For more information, see the ReferenceKeys overview
Type Returns an ObjectTypeEnum indicating this object's type.
VertexProxy Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Version
Introduced in version 4
VertexProxy.Application Property
Parent Object: VertexProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VertexProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
VertexProxy.AttributeSets Property
Parent Object: VertexProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
VertexProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
VertexProxy Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Version
Introduced in version 5
VertexProxy.ContainingOccurrence Property
Parent Object: VertexProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
VertexProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
VertexProxy.Edges Property
Parent Object: VertexProxy
Description
Gets the referenced by this Vertex.
Syntax
VertexProxy.Edges() As Edges
Property Value
This is a read only property whose value is an Edges.
VertexProxy Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Version
Introduced in version 4
VertexProxy.Faces Property
Parent Object: VertexProxy
Description
Property that returns the that this Vertex is referenced from.
Syntax
VertexProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 4
VertexProxy.GetPoint Method
Parent Object: VertexProxy
Description
Method that gets the coordinates of the vertex point.
Syntax
VertexProxy.GetPoint( Point() As Double )
Parameters
Name Type Description
Point Double Output Double array that returns the coordinates of the vertex point.
VertexProxy Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Version
Introduced in version 4
VertexProxy.GetReferenceKey Method
Parent Object: VertexProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
VertexProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
VertexProxy.GetSourceVertex Method
Parent Object: VertexProxy
Description
Method that gets the source vertex that has been overridden by this vertex. The method returns
Nothing if this vertex is not an override. An error is returned if this method is called on a vertex in
a part.
VertexProxy Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Syntax
VertexProxy.GetSourceVertex( [GetLeafSource] As Boolean ) As Vertex
Parameters
Name Type Description
GetLeafSource Boolean
Optional input Boolean that specifies whether to get the 'leaf' source
vertex in the case where there are multiple levels of override. If specified
to be False, the method returns the next level override vertex. If not
specified, the argument defaults to True indicating that the leaf source
will be returned.
This is an optional argument whose default value is True.
Version
Introduced in version 10
VertexProxy.IsTolerant Property
Parent Object: VertexProxy
Description
Indicates if this vertex is using tolerant modeling to allow a non-exact model.
Syntax
VertexProxy.IsTolerant() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2011
VertexProxy.NativeObject Property
Parent Object: VertexProxy
VertexProxy Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
VertexProxy.NativeObject() As Vertex
Property Value
This is a read only property whose value is a Vertex.
Version
Introduced in version 4
VertexProxy.Parent Property
Parent Object: VertexProxy
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
VertexProxy.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 5
VertexProxy.Point Property
Parent Object: VertexProxy
Description
VertexProxy Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Property that returns a Point geometry object. The Point object returned provides information
about the position of the vertex.
Syntax
VertexProxy.Point() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 6
VertexProxy.Tolerance Property
Parent Object: VertexProxy
Description
Returns the tolerance being used for modeling calculations and this Vertex.
Syntax
VertexProxy.Tolerance() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2011
VertexProxy.TransientKey Property
Parent Object: VertexProxy
Description
VertexProxy Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
Property that obtains an ID key that can be used to bind back to the live object. This transient key
is only valid as long as the document state has not changed. For more information, see the
ReferenceKeys overview
Syntax
VertexProxy.TransientKey() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
VertexProxy.Type Property
Parent Object: VertexProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VertexProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
VertexProxy Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C89.htm 17/06/2025
VerticalAlignConstraint Object
Derived from: GeometricConstraint Object
Description
The VeticalAlignConstraint object represents a constraint the makes two sketch points align
vertically.
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
Parent Property that returns the parent sketch of the object.
PointOne Property that returns the first sketch point being constrained.
PointTwo Property that returns the second sketch point being constrained.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeometricConstraints.AddVerticalAlign, VerticalAlignConstraintProxy.NativeObject
Derived Classes
VerticalAlignConstraintProxy
Version
Introduced in version 5
VerticalAlignConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
VerticalAlignConstraint.Application Property
Parent Object: VerticalAlignConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VerticalAlignConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
VerticalAlignConstraint.AttributeSets
Property
Parent Object: VerticalAlignConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
VerticalAlignConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
VerticalAlignConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
VerticalAlignConstraint.Deletable Property
Parent Object: VerticalAlignConstraint
Description
Indicates whether this object is deletable.
Syntax
VerticalAlignConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
VerticalAlignConstraint.Delete Method
Parent Object: VerticalAlignConstraint
Description
Method that deletes the constraint.
Syntax
VerticalAlignConstraint.Delete()
Version
Introduced in version 5
VerticalAlignConstraint.GetReferenceKey
Method
Parent Object: VerticalAlignConstraint
VerticalAlignConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
VerticalAlignConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
VerticalAlignConstraint.Parent Property
Parent Object: VerticalAlignConstraint
Description
Property that returns the parent sketch of the object.
Syntax
VerticalAlignConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
VerticalAlignConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
Version
Introduced in version 5
VerticalAlignConstraint.PointOne Property
Parent Object: VerticalAlignConstraint
Description
Property that returns the first sketch point being constrained.
Syntax
VerticalAlignConstraint.PointOne() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 5
VerticalAlignConstraint.PointTwo Property
Parent Object: VerticalAlignConstraint
Description
Property that returns the second sketch point being constrained.
Syntax
VerticalAlignConstraint.PointTwo() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
VerticalAlignConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
Version
Introduced in version 5
VerticalAlignConstraint.Type Property
Parent Object: VerticalAlignConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VerticalAlignConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
VerticalAlignConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh36A9.htm 17/06/2025
VerticalAlignConstraintProxy Object
Derived from: VerticalAlignConstraint Object
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
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
PointOne Property that returns the first sketch point being constrained.
PointTwo Property that returns the second sketch point being constrained.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
VerticalAlignConstraintProxy.Application Property
Parent Object: VerticalAlignConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
VerticalAlignConstraintProxy.Application() As Object
VerticalAlignConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
VerticalAlignConstraintProxy.AttributeSets
Property
Parent Object: VerticalAlignConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
VerticalAlignConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
VerticalAlignConstraintProxy.ContainingOccurrence
Property
Parent Object: VerticalAlignConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
VerticalAlignConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
VerticalAlignConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
Version
Introduced in version 6
VerticalAlignConstraintProxy.Deletable Property
Parent Object: VerticalAlignConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
VerticalAlignConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
VerticalAlignConstraintProxy.Delete Method
Parent Object: VerticalAlignConstraintProxy
Description
Method that deletes the constraint.
Syntax
VerticalAlignConstraintProxy.Delete()
Version
Introduced in version 6
VerticalAlignConstraintProxy.GetReferenceKey
Method
Parent Object: VerticalAlignConstraintProxy
Description
VerticalAlignConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
Method that generates and returns the reference key for this entity.
Syntax
VerticalAlignConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
VerticalAlignConstraintProxy.NativeObject
Property
Parent Object: VerticalAlignConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
VerticalAlignConstraintProxy.NativeObject() As VerticalAlignConstraint
Property Value
This is a read only property whose value is a VerticalAlignConstraint.
Version
Introduced in version 6
VerticalAlignConstraintProxy.Parent Property
Parent Object: VerticalAlignConstraintProxy
Description
VerticalAlignConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
Property that returns the parent sketch of the object.
Syntax
VerticalAlignConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
VerticalAlignConstraintProxy.PointOne Property
Parent Object: VerticalAlignConstraintProxy
Description
Property that returns the first sketch point being constrained.
Syntax
VerticalAlignConstraintProxy.PointOne() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 6
VerticalAlignConstraintProxy.PointTwo Property
Parent Object: VerticalAlignConstraintProxy
Description
Property that returns the second sketch point being constrained.
Syntax
VerticalAlignConstraintProxy.PointTwo() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
VerticalAlignConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
Version
Introduced in version 6
VerticalAlignConstraintProxy.Type Property
Parent Object: VerticalAlignConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VerticalAlignConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
VerticalAlignConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F03.htm 17/06/2025
VerticalConstraint Object
Derived from: GeometricConstraint Object
Description
The VerticalConstraint object represents a vertical constraint within a sketch.
Methods
Name Description
Delete Method that deletes the constraint.
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
Deletable Indicates whether this object is deletable.
Entity
Property that returns the sketch entity being constrained. This can be a
sketch line, ellipse, or elliptical arc.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
UseEllipseMajorAxis
Property used in the case where the entity returned by the Entity property is
an ellipse. This property specifies if the major or minor axis of the ellipse
is vertical. True if it is the major axis.
Accessed From
GeometricConstraints.AddVertical, VerticalConstraintProxy.NativeObject
Derived Classes
VerticalConstraintProxy
Version
Introduced in version 5
VerticalConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
VerticalConstraint.Application Property
Parent Object: VerticalConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VerticalConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
VerticalConstraint.AttributeSets Property
Parent Object: VerticalConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
VerticalConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
VerticalConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
VerticalConstraint.Deletable Property
Parent Object: VerticalConstraint
Description
Indicates whether this object is deletable.
Syntax
VerticalConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
VerticalConstraint.Delete Method
Parent Object: VerticalConstraint
Description
Method that deletes the constraint.
Syntax
VerticalConstraint.Delete()
Version
Introduced in version 5
VerticalConstraint.Entity Property
Parent Object: VerticalConstraint
Description
VerticalConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
Property that returns the sketch entity being constrained. This can be a sketch line, ellipse, or
elliptical arc.
Syntax
VerticalConstraint.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 5
VerticalConstraint.GetReferenceKey Method
Parent Object: VerticalConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
VerticalConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
VerticalConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
VerticalConstraint.Parent Property
Parent Object: VerticalConstraint
Description
Property that returns the parent sketch of the object.
Syntax
VerticalConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 5
VerticalConstraint.Type Property
Parent Object: VerticalConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VerticalConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
VerticalConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
VerticalConstraint.UseEllipseMajorAxis
Property
Parent Object: VerticalConstraint
Description
Property used in the case where the entity returned by the Entity property is an ellipse. This
property specifies if the major or minor axis of the ellipse is vertical. True if it is the major axis.
Syntax
VerticalConstraint.UseEllipseMajorAxis() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
VerticalConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68E4.htm 17/06/2025
VerticalConstraintProxy Object
Derived from: VerticalConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the constraint.
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
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
Deletable Indicates whether this object is deletable.
Entity
Property that returns the sketch entity being constrained. This can be a sketch
line, ellipse, or elliptical arc.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
UseEllipseMajorAxis
Property used in the case where the entity returned by the Entity property is
an ellipse. This property specifies if the major or minor axis of the ellipse is
vertical. True if it is the major axis.
Version
Introduced in version 6
VerticalConstraintProxy.Application Property
Parent Object: VerticalConstraintProxy
VerticalConstraintProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
VerticalConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
VerticalConstraintProxy.AttributeSets
Property
Parent Object: VerticalConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
VerticalConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
VerticalConstraintProxy.ContainingOccurrence
Property
Parent Object: VerticalConstraintProxy
VerticalConstraintProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
VerticalConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
VerticalConstraintProxy.Deletable Property
Parent Object: VerticalConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
VerticalConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
VerticalConstraintProxy.Delete Method
Parent Object: VerticalConstraintProxy
Description
Method that deletes the constraint.
VerticalConstraintProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Syntax
VerticalConstraintProxy.Delete()
Version
Introduced in version 6
VerticalConstraintProxy.Entity Property
Parent Object: VerticalConstraintProxy
Description
Property that returns the sketch entity being constrained. This can be a sketch line, ellipse, or
elliptical arc.
Syntax
VerticalConstraintProxy.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
VerticalConstraintProxy.GetReferenceKey
Method
Parent Object: VerticalConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
VerticalConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
VerticalConstraintProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
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
Introduced in version 6
VerticalConstraintProxy.NativeObject
Property
Parent Object: VerticalConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
VerticalConstraintProxy.NativeObject() As VerticalConstraint
Property Value
This is a read only property whose value is a VerticalConstraint.
Version
Introduced in version 6
VerticalConstraintProxy.Parent Property
Parent Object: VerticalConstraintProxy
Description
VerticalConstraintProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Property that returns the parent sketch of the object.
Syntax
VerticalConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
VerticalConstraintProxy.Type Property
Parent Object: VerticalConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VerticalConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
VerticalConstraintProxy.UseEllipseMajorAxis
Property
Parent Object: VerticalConstraintProxy
Description
Property used in the case where the entity returned by the Entity property is an ellipse. This property
specifies if the major or minor axis of the ellipse is vertical. True if it is the major axis.
VerticalConstraintProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Syntax
VerticalConstraintProxy.UseEllipseMajorAxis() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
VerticalConstraintProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB733.htm 17/06/2025
Vertices Object
Description
The Vertices object represents a collection of objects.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Face.Vertices, FaceProxy.Vertices, SurfaceBody.Vertices, SurfaceBodyProxy.Vertices
Version
Introduced in version 4
Vertices.Count Property
Parent Object: Vertices
Description
Property that returns the number of items in this collection.
Syntax
Vertices.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
Vertices Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2E9.htm 17/06/2025
Vertices.Item Property
Parent Object: Vertices
Description
Allows integer-indexed access to items in the collection.
Syntax
Vertices.Item( Index As Long ) As Vertex
Property Value
This is a read only property whose value is a Vertex.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the Vertex to return.
Version
Introduced in version 4
Vertices.Type Property
Parent Object: Vertices
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Vertices.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Vertices Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2E9.htm 17/06/2025
Version
Introduced in version 4
Vertices Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD2E9.htm 17/06/2025
View Object
Description
The View object represents a view in a document.
Methods
Name Description
Activate
Method that causes this view to become the active view (i.e.
receive user-focus).
Close
Method that closes the view. If only one view exists for a
document and the Close method is called it will also cause the
Document to close.
Fit
Method that fits all of the contents of the document within the
view. Can optionally cause the display of the view to be updated.
GetWindowExtents
Method that returns the current size and position of the view's
window.
GoHome Method that sets the view to the default view of the model.
Move Method that moves the window this view is contained within.
ResetFront Method that resets the front view to the factory default.
SaveAsBitmap Method that saves the view as a bitmap.
SaveAsBitmapWithOptions
Method that saves the view as a bitmap with more options. The
width and height arguments define the aspect ratio and the
number of pixels in the output image. The Options argument
allow you to define more effects for the bitmap.
SaveAsBitmapWithRayTracing
Method that saves the view with ray tracing on as a bitmap in
one of the following types: bmp, jpg, png, tiff, and gif.
SetCurrentAsFront Method that sets the current view as the front view.
SetCurrentAsHome Method that sets the current view as the home view.
SetCurrentAsTop Method that sets the current view as the top view.
StartRenderingRateRecord
Method that starts a rendering rate record for the graphics
window.
StopRenderingRateRecord
Method that stops the rendering rate record for the graphics
window and gets the results.
Update
Method that causes the view to update. In some cases, changes
made to a model or to the view will not immediately be shown in
the view and the Update method must be called to cause the view
to refresh.
Properties
Name Description
Application
View Object Page 1 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
AreTexturesOn Gets and sets whether to turn textures on.
Camera
Property that returns a Camera object which contains the information
that defines the current contents of the view.
Caption Gets/Sets the caption on this View's window.
DisplayMode Gets/Sets the Display Mode on this View's window.
Document Property that returns the the view is associated with.
Height Gets/Sets the Height of the view window.
HWND
Property that returns the hWnd for the window. This provides
convenient access to the window's hWnd. Having the hWnd allows you
to use various Windows API calls with the window.
IsRayTracingPaused
Gets and sets whether the current ray tracing process is paused. If this
property returns true then set it to false will continue the current ray
tracing.
Left
Gets/Sets the distance between the left edge of the view window and left
edge of the frame window.
NoiseReductionEnabled
Read-write property that gets and sets whether the noise reduction is
enabled or not when ray tracing is enabled.
Parent
Property that returns the parent object from whom this object can
logically be reached.
RayTracing Gets and sets whether to enable ray tracing for the view.
RayTracingProgress Gets the progress in percentage of the ray tracing process.
RayTracingQuality Gets and sets the quality used when ray tracing is enabled.
ShowAmbientShadows Gets and sets whether to display ambient shadows.
ShowGroundPlane Gets and sets whether to display the ground plane.
ShowGroundReflections Gets and sets whether to display ground reflections.
ShowGroundShadows Gets and sets whether to display ground shadows.
ShowObjectShadows Gets and sets whether to display object shadows.
Top
Gets/Sets the distance between the top of the view window and top of
the frame window.
Type Returns an ObjectTypeEnum indicating this object's type.
ViewFrame Read-only property that returns the ViewFrame this view is located in.
ViewTab Read-only property that returns the ViewTab of this view.
Visible Gets/Sets the visibility of this View.
Width Gets/Sets the Width of the view window.
WindowState Gets/Sets this windows state.
Accessed From
Application.ActiveView, ViewList.Item, Views.Add, Views.Item, ViewsEnumerator.Item
Samples
View Object Page 2 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Name Description
Drive the camera
This sample will fly the camera around the model. To simplify the code, the
target is hard coded at the origin and the up vector is the positive Z.
Create sheet metal
face and fold
features
This sample demonstrates the creation of sheet metal face and fold features.
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Create sheet metal
lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted flange
feature.
Client graphics -
image in point
graphics
The following sample demonstrates creation of point client graphics with a
custom image.
Create sheet metal
rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Transient solid
body creation
The following sample demonstrates the creation of a transient solid block
body. The newly created body is then displayed using client graphics in a part.
Client graphics
creation of 3D
primitives
This sample demonstrates the creation of 3D primitives (cylinder, cone, etc.)
using client graphics.
Create curve
primitives
This sample demonstrates the creation of curve primitives (lines, arcs, circles,
etc.) using client graphics.
Cancel a double
click
Demonstrates how to receive (and in this case, cancel) a double click from a
user.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 4
View.Activate Method
Parent Object: View
Description
Method that causes this view to become the active view (i.e. receive user-focus).
View Object Page 3 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Syntax
View.Activate()
Version
Introduced in version 4
View.Application Property
Parent Object: View
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
View.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
View.AreTexturesOn Property
Parent Object: View
Description
Gets and sets whether to turn textures on.
Syntax
View.AreTexturesOn() As Boolean
View Object Page 4 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
View.Camera Property
Parent Object: View
Description
Property that returns a Camera object which contains the information that defines the current
contents of the view.
Syntax
View.Camera() As Camera
Property Value
This is a read only property whose value is a Camera.
Samples
Name Description
Drive the camera
This sample will fly the camera around the model. To simplify the code, the
target is hard coded at the origin and the up vector is the positive Z.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 4
View.Caption Property
Parent Object: View
View Object Page 5 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Gets/Sets the caption on this View's window.
Syntax
View.Caption() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Cancel a double
click
Demonstrates how to receive (and in this case, cancel) a double click from a
user.
Version
Introduced in version 4
View.Close Method
Parent Object: View
Description
Method that closes the view. If only one view exists for a document and the Close method is
called it will also cause the Document to close.
Syntax
View.Close()
Version
Introduced in version 4
View.DisplayMode Property
Parent Object: View
View Object Page 6 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Gets/Sets the Display Mode on this View's window.
Syntax
View.DisplayMode() As DisplayModeEnum
Property Value
This is a read/write property whose value is a DisplayModeEnum.
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Version
Introduced in version 5
View.Document Property
Parent Object: View
Description
Property that returns the the view is associated with.
Syntax
View.Document() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 4
View Object Page 7 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
View.Fit Method
Parent Object: View
Description
Method that fits all of the contents of the document within the view. Can optionally cause the
display of the view to be updated.
Syntax
View.Fit( [DoUpdate] As Boolean )
Parameters
Name Type Description
DoUpdate Boolean
Input Boolean that specifies whether to update the view after the document
contents have been fitted into it. The default is to perform the update.
This is an optional argument whose default value is True.
Version
Introduced in version 4
View.GetWindowExtents Method
Parent Object: View
Description
Method that returns the current size and position of the view's window.
Syntax
View.GetWindowExtents( Top As Long, Left As Long, Height As Long, Width As Long )
Parameters
Name Type Description
Top Long
Output Long that contains the position of the top edge of the window (including the
entire frame of the window). The value returned is in pixels relative to screen space.
Left Long
View Object Page 8 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Output Long that contains the position of the left edge of the window (including the
entire frame of the window). The value returned is in pixels relative to screen space.
Height Long
Output Long that contains the height of the window (including the entire frame of
the window). The value returned is in pixels.
Width Long
Output Long that contains the width of the window (including the entire frame of
the window). The value returned is in pixels.
Version
Introduced in version 4
View.GoHome Method
Parent Object: View
Description
Method that sets the view to the default view of the model.
Syntax
View.GoHome()
Samples
Name Description
Create sheet metal face and
fold features
This sample demonstrates the creation of sheet metal face and
fold features.
Create sheet metal lofted
flange feature
The following sample demonstrates the creation of a sheet metal
lofted flange feature.
Create sheet metal rip feature
This sample demonstrates the creation of a rip sheet metal
feature.
Version
Introduced in version 2011
View.Height Property
Parent Object: View
View Object Page 9 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Gets/Sets the Height of the view window.
Syntax
View.Height() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
View.HWND Property
Parent Object: View
Description
Property that returns the hWnd for the window. This provides convenient access to the window's
hWnd. Having the hWnd allows you to use various Windows API calls with the window.
Syntax
View.HWND() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
View.IsRayTracingPaused Property
Parent Object: View
View Object Page 10 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Gets and sets whether the current ray tracing process is paused. If this property returns true then
set it to false will continue the current ray tracing.
Syntax
View.IsRayTracingPaused() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
View.Left Property
Parent Object: View
Description
Gets/Sets the distance between the left edge of the view window and left edge of the frame
window.
Syntax
View.Left() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
View.Move Method
Parent Object: View
View Object Page 11 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Method that moves the window this view is contained within.
Syntax
View.Move( Top As Long, Left As Long, Height As Long, Width As Long )
Parameters
Name Type Description
Top Long
Input Long that specifies the position of the top edge of the window (including the
entire frame of the window). The value specified is in pixels and relative to screen
space.
Left Long
Input Long that specifies the position of the left edge of the window (including the
entire frame of the window). The value specified is in pixels and relative to screen
space.
Height Long
Input Long that specifies the height of the window (including the entire frame of the
window). The value specified is in pixels.
Width Long
Input Long that specifies the width of the window (including the entire frame of the
window). The value specified is in pixels.
Version
Introduced in version 6
View.NoiseReductionEnabled Property
Parent Object: View
Description
Read-write property that gets and sets whether the noise reduction is enabled or not when ray
tracing is enabled.
Syntax
View.NoiseReductionEnabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
View Object Page 12 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Version
Introduced in version 2024
View.Parent Property
Parent Object: View
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
View.Parent() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 4
View.RayTracing Property
Parent Object: View
Description
Gets and sets whether to enable ray tracing for the view.
Syntax
View.RayTracing() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
View Object Page 13 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Version
Introduced in version 2012
View.RayTracingProgress Property
Parent Object: View
Description
Gets the progress in percentage of the ray tracing process.
Syntax
View.RayTracingProgress() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2016
View.RayTracingQuality Property
Parent Object: View
Description
Gets and sets the quality used when ray tracing is enabled.
Syntax
View.RayTracingQuality() As RayTracingQualityEnum
Property Value
This is a read/write property whose value is a RayTracingQualityEnum.
View Object Page 14 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Version
Introduced in version 2012
View.ResetFront Method
Parent Object: View
Description
Method that resets the front view to the factory default.
Syntax
View.ResetFront()
Version
Introduced in version 2011
View.SaveAsBitmap Method
Parent Object: View
Description
Method that saves the view as a bitmap.
Syntax
View.SaveAsBitmap( FullFileName As String, Width As Long, Height As Long )
Parameters
Name Type Description
FullFileName String
Input String value that specifies the full filename of the file to which to save
the view.
Width Long Input Long that specifies the width of the view.
Height Long Input Long that specifies the height of the view.
View Object Page 15 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Version
Introduced in version 6
View.SaveAsBitmapWithOptions Method
Parent Object: View
Description
Method that saves the view as a bitmap with more options. The width and height arguments define
the aspect ratio and the number of pixels in the output image. The Options argument allow you to
define more effects for the bitmap.
Syntax
View.SaveAsBitmapWithOptions( FullFileName As String, Width As Long, Height As Long,
Options As NameValueMap )
Parameters
Name Type Description
FullFileName String
Input String value that specifies the full filename of the file to
which to save the view. The extension of this filename controls
the type of file that’s created. Valid extensions are bmp, jpg, png,
tiff, and gif.
Width Long
Input Long that specifies the width of the view. A value of 0 will
use the current width of the view.
Height Long
Input Long that specifies the height of the view. A value of 0 will
use the current height of the view.
Options NameValueMap
Input NameValueMap that specifies more options to create the
bitmap. The valid values for the options are:
Name
Value
Type
Description
TransparentBackground Boolean
Specifies whether the saved
bitmap will have transparent
background. If not specified
this will default to False.
Version
Introduced in version 2019
View Object Page 16 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
View.SaveAsBitmapWithRayTracing Method
Parent Object: View
Description
Method that saves the view with ray tracing on as a bitmap in one of the following types: bmp,
jpg, png, tiff, and gif.
Syntax
View.SaveAsBitmapWithRayTracing( FullFileName As String )
Parameters
Name Type Description
FullFileName String
Input String value that specifies the full filename of the file to which to save
the view. The extension of this filename controls the type of file that’s
created. Valid extensions are bmp, jpg, png, tiff, and gif.
Version
Introduced in version 2016
View.SetCurrentAsFront Method
Parent Object: View
Description
Method that sets the current view as the front view.
Syntax
View.SetCurrentAsFront()
Version
Introduced in version 2011
View.SetCurrentAsHome Method
View Object Page 17 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Parent Object: View
Description
Method that sets the current view as the home view.
Syntax
View.SetCurrentAsHome( [FitToView] As Boolean )
Parameters
Name Type Description
FitToView Boolean
Optional input Boolean that specifies whether to set the view extent as "view
all" (fit to view) or to the extent of the model that currently fills the view
(fixed distance).
This is an optional argument whose default value is True.
Version
Introduced in version 2011
View.SetCurrentAsTop Method
Parent Object: View
Description
Method that sets the current view as the top view.
Syntax
View.SetCurrentAsTop()
Version
Introduced in version 2011
View.ShowAmbientShadows Property
Parent Object: View
View Object Page 18 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Description
Gets and sets whether to display ambient shadows.
Syntax
View.ShowAmbientShadows() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
View.ShowGroundPlane Property
Parent Object: View
Description
Gets and sets whether to display the ground plane.
Syntax
View.ShowGroundPlane() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
View.ShowGroundReflections Property
Parent Object: View
Description
View Object Page 19 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Gets and sets whether to display ground reflections.
Syntax
View.ShowGroundReflections() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
View.ShowGroundShadows Property
Parent Object: View
Description
Gets and sets whether to display ground shadows.
Syntax
View.ShowGroundShadows() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
View.ShowObjectShadows Property
Parent Object: View
Description
Gets and sets whether to display object shadows.
View Object Page 20 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Syntax
View.ShowObjectShadows() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
View.StartRenderingRateRecord Method
Parent Object: View
Description
Method that starts a rendering rate record for the graphics window.
Syntax
View.StartRenderingRateRecord()
Version
Introduced in version 2023
View.StopRenderingRateRecord Method
Parent Object: View
Description
Method that stops the rendering rate record for the graphics window and gets the results.
Syntax
View.StopRenderingRateRecord( frames As Long, ElapsedTime As Double )
Parameters
View Object Page 21 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Name Type Description
frames Long Output Long value that indicates the count of the frame increases.
ElapsedTime Double Output Double value that indicates the elapsed time for frames change.
Version
Introduced in version 2023
View.Top Property
Parent Object: View
Description
Gets/Sets the distance between the top of the view window and top of the frame window.
Syntax
View.Top() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
View.Type Property
Parent Object: View
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
View.Type() As ObjectTypeEnum
View Object Page 22 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
View.Update Method
Parent Object: View
Description
Method that causes the view to update. In some cases, changes made to a model or to the view
will not immediately be shown in the view and the Update method must be called to cause the
view to refresh.
Syntax
View.Update()
Samples
Name Description
Client
Graphics -
Draw Range
Box
This sample demonstrates the use of client graphics to draw the range box of
selected entities.
Client
graphics
texturebased
color
mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band
or continuous color mapper and allows you to adjust the values of the mapper to
change the range of values that map to various colors.
Client
Graphics -
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help
to support display control. It uses the currently active part and replaces the part
display with a display where the part's color varies from blue to red where blue is
assigned to the lowest Z portion of the part and red is assigned to the highest Z
portion of the part. Areas in between are represented by a smooth blend of color
from blue to red.
Client
Graphics -
Line
This sample demonstrates the creation of custom graphics using LineGraphics and
LineStripGraphics. The same set of coordinate data is used for both types of
graphics. Line graphics use two coordinates to define a line, and then the next two
coordinates to define the next line, and so on through the defined coordinates. For
the data provided, this results in gaps in the drawn curve. Line strips use the first
two coordinates to define the first line and then the last point of the first line
View Object Page 23 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
becomes the first point of the second line and the next coordinate is used as the end
point of the second line. This results in the set of points being connected by a
continuous set of lines, drawing a continuous curve. This sample also demonstrates
two methods of defining the color for client graphics. In one case it uses an existing
appearance asset, and in the other, it explicitly defines a color and assigns it. To use
the sample you need to have an assembly or part document open. The program has
two behaviors: the first time it is run it will draw the graphics. The second time it is
run it deletes the previously drawn graphics.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Client
graphics -
image in
point
graphics
The following sample demonstrates creation of point client graphics with a custom
image.
Transient
solid body
creation
The following sample demonstrates the creation of a transient solid block body. The
newly created body is then displayed using client graphics in a part.
Client
graphics
creation of
3D
primitives
This sample demonstrates the creation of 3D primitives (cylinder, cone, etc.) using
client graphics.
Create curve
primitives
This sample demonstrates the creation of curve primitives (lines, arcs, circles, etc.)
using client graphics.
OnDrag
Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 4
View.ViewFrame Property
Parent Object: View
Description
Read-only property that returns the ViewFrame this view is located in.
Syntax
View.ViewFrame() As ViewFrame
View Object Page 24 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Property Value
This is a read only property whose value is a ViewFrame.
Version
Introduced in version 2021
View.ViewTab Property
Parent Object: View
Description
Read-only property that returns the ViewTab of this view.
Syntax
View.ViewTab() As ViewTab
Property Value
This is a read only property whose value is a ViewTab.
Samples
Name Description
Move view tab between
different view frames
This sample demonstrates how to move views using ViewTab
between different view frames.
Version
Introduced in version 2022
View.Visible Property
Parent Object: View
Description
Gets/Sets the visibility of this View.
View Object Page 25 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Syntax
View.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
View.Width Property
Parent Object: View
Description
Gets/Sets the Width of the view window.
Syntax
View.Width() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
View.WindowState Property
Parent Object: View
Description
Gets/Sets this windows state.
View Object Page 26 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
Syntax
View.WindowState() As WindowsSizeEnum
Property Value
This is a read/write property whose value is a WindowsSizeEnum.
Version
Introduced in version 6
View Object Page 27 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF093.htm 17/06/2025
ViewFrame Object
Description
ViewFrame Object.
Methods
Name Description
Arrange Method that tiles the views in the view frame window.
Close Method that closes this view frame.
Close2
Method that closes this view frame. Close a ViewFrame may cause
documents to close, use the argument to specify the documents to save if
necessary. This does nothing if try to close the default ViewFrame.
Move Method that moves the view frame window.
RestorePreviousLayout Method that restores the previous layout for this view frame window.
Properties
Name Description
Application Read-only property that returns the root Application object.
Caption Read-only property that returns the caption of this view frame.
Height Read-write property that gets and sets the height of the view frame.
IsDefault Read-only property that returns whether this view frame is the default one.
Left
Read-only property that returns the distance between the left edge of the screen
and left edge of the view frame.
Parent Gets the parent object from whom this object can logically be reached.
Top
Read-only property that returns the distance between the top edge of the screen
and top edge of the view frame.
Type Read-only property returning kViewFrameObject indicating this object’s type.
ViewTabGroups
Read-only property that returns the ViewTabGroupsEnumerator collection
object.
ViewTabs Read-only property that returns the view tabs that are located in this view frame.
Width Read-write property that gets and sets the width of the view frame.
WindowState Read-write property that gets and sets the window state of this view frame.
Accessed From
Application.ActiveViewFrame, View.ViewFrame, ViewFramesEnumerator.Item,
ViewTab.MoveToNewViewFrame, ViewTab.ViewFrame,
ViewTabGroup.MoveToNewViewFrame, ViewTabGroup.ViewFrame
ViewFrame Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Samples
Name Description
Dock browser pane to a custom
ViewFrame
This sample demonstrates how to dock the browser pane to a
custom ViewFrame.
Move view tab between different
view frames
This sample demonstrates how to move views using ViewTab
between different view frames.
Version
Introduced in version 2021
ViewFrame.Application Property
Parent Object: ViewFrame
Description
Read-only property that returns the root Application object.
Syntax
ViewFrame.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2021
ViewFrame.Arrange Method
Parent Object: ViewFrame
Description
Method that tiles the views in the view frame window.
ViewFrame Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Syntax
ViewFrame.Arrange( [Value] As ViewTileTypeEnum )
Parameters
Name Type Description
Value ViewTileTypeEnum
This is an optional argument whose default value is 117762.
Version
Introduced in version 2021
ViewFrame.Caption Property
Parent Object: ViewFrame
Description
Read-only property that returns the caption of this view frame.
Syntax
ViewFrame.Caption() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2021
ViewFrame.Close Method
Parent Object: ViewFrame
Description
Method that closes this view frame.
ViewFrame Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Syntax
ViewFrame.Close()
Version
Introduced in version 2021
ViewFrame.Close2 Method
Parent Object: ViewFrame
Description
Method that closes this view frame. Close a ViewFrame may cause documents to close, use the
argument to specify the documents to save if necessary. This does nothing if try to close the
default ViewFrame.
Syntax
ViewFrame.Close2( [SaveDocuments] As Boolean, [DocumentsToSave] As Variant )
Parameters
Name Type Description
SaveDocuments Boolean
Optional input Boolean value to specify whether to save the
documents.
This is an optional argument whose default value is False.
DocumentsToSave Variant
Optional input ObjectCollection including the documents to
save. This is ignored if the SaveDocuments is specified as False. If
the SaveDocuments is set to True and this is not specified then all
the documents being closed in this ViewFrame will be saved.
This is an optional argument whose default value is null.
Version
Introduced in version 2024
ViewFrame.Height Property
Parent Object: ViewFrame
ViewFrame Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Description
Read-write property that gets and sets the height of the view frame.
Syntax
ViewFrame.Height() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2021
ViewFrame.IsDefault Property
Parent Object: ViewFrame
Description
Read-only property that returns whether this view frame is the default one.
Syntax
ViewFrame.IsDefault() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2021
ViewFrame.Left Property
Parent Object: ViewFrame
Description
ViewFrame Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Read-only property that returns the distance between the left edge of the screen and left edge of
the view frame.
Syntax
ViewFrame.Left() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2021
ViewFrame.Move Method
Parent Object: ViewFrame
Description
Method that moves the view frame window.
Syntax
ViewFrame.Move( Top As Long, Left As Long, Height As Long, Width As Long )
Parameters
Name Type Description
Top Long
Input Long that specifies the position of the top edge of the window. The value
specified is in pixels and relative to screen space.
Left Long
Input Long that specifies the position of the left edge of the window. The value
specified is in pixels and relative to screen space.
Height Long Input Long that specifies the height of the window. The value specified is in pixels.
Width Long Input Long that specifies the width of the window. The value specified is in pixels.
Version
Introduced in version 2021
ViewFrame Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
ViewFrame.Parent Property
Parent Object: ViewFrame
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ViewFrame.Parent() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2021
ViewFrame.RestorePreviousLayout Method
Parent Object: ViewFrame
Description
Method that restores the previous layout for this view frame window.
Syntax
ViewFrame.RestorePreviousLayout()
Version
Introduced in version 2021
ViewFrame.Top Property
Parent Object: ViewFrame
Description
ViewFrame Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Read-only property that returns the distance between the top edge of the screen and top edge of
the view frame.
Syntax
ViewFrame.Top() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2021
ViewFrame.Type Property
Parent Object: ViewFrame
Description
Read-only property returning kViewFrameObject indicating this object’s type.
Syntax
ViewFrame.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
ViewFrame.ViewTabGroups Property
Parent Object: ViewFrame
Description
Read-only property that returns the ViewTabGroupsEnumerator collection object.
ViewFrame Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Syntax
ViewFrame.ViewTabGroups() As ViewTabGroupsEnumerator
Property Value
This is a read only property whose value is a ViewTabGroupsEnumerator.
Version
Introduced in version 2022
ViewFrame.ViewTabs Property
Parent Object: ViewFrame
Description
Read-only property that returns the view tabs that are located in this view frame.
Syntax
ViewFrame.ViewTabs() As ViewTabsEnumerator
Property Value
This is a read only property whose value is a ViewTabsEnumerator.
Version
Introduced in version 2022
ViewFrame.Width Property
Parent Object: ViewFrame
Description
Read-write property that gets and sets the width of the view frame.
ViewFrame Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
Syntax
ViewFrame.Width() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2021
ViewFrame.WindowState Property
Parent Object: ViewFrame
Description
Read-write property that gets and sets the window state of this view frame.
Syntax
ViewFrame.WindowState() As WindowsSizeEnum
Property Value
This is a read/write property whose value is a WindowsSizeEnum.
Version
Introduced in version 2021
ViewFrame Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh17F1.htm 17/06/2025
ViewFramesEnumerator Object
Description
ViewFrames enumerator object.
Properties
Name Description
Application Read-only property that returns the root Application object.
Count Read-only property that returns the number of items in the collection.
Item Allows integer-indexed access to items in the collection.
Type
Read-only property returning kViewFramesEnumeratorObject indicating this
object’s type.
Accessed From
Application.ViewFrames
Version
Introduced in version 2021
ViewFramesEnumerator.Application
Property
Parent Object: ViewFramesEnumerator
Description
Read-only property that returns the root Application object.
Syntax
ViewFramesEnumerator.Application() As Application
Property Value
This is a read only property whose value is an Application.
ViewFramesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3452.htm 17/06/2025
Version
Introduced in version 2021
ViewFramesEnumerator.Count Property
Parent Object: ViewFramesEnumerator
Description
Read-only property that returns the number of items in the collection.
Syntax
ViewFramesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2021
ViewFramesEnumerator.Item Property
Parent Object: ViewFramesEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
ViewFramesEnumerator.Item( Index As Long ) As ViewFrame
Property Value
This is a read only property whose value is a ViewFrame.
Parameters
ViewFramesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3452.htm 17/06/2025
Name Type Description
Index Long Input Long value that specifies the index of the item to retrun.
Version
Introduced in version 2021
ViewFramesEnumerator.Type Property
Parent Object: ViewFramesEnumerator
Description
Read-only property returning kViewFramesEnumeratorObject indicating this object’s type.
Syntax
ViewFramesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
ViewFramesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3452.htm 17/06/2025
Views Object
Derived from: ViewsEnumerator Object
Description
The Views collection object provides access to all of the graphic objects associated with a
particular document. It also provides functionality to create new views.
Methods
Name Description
Add Create a new view of the document.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyDocument.Views, Document.Views, DrawingDocument.Views, PartDocument.Views,
PresentationDocument.Views
Version
Introduced in version 4
Views.Add Method
Parent Object: Views
Description
Create a new view of the document.
Syntax
Views.Add() As View
Views Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6565.htm 17/06/2025
Version
Introduced in version 4
Views.Count Property
Parent Object: Views
Description
Property that returns the number of items in this collection.
Syntax
Views.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
Views.Item Property
Parent Object: Views
Description
Allows integer-indexed access to items in the collection.
Syntax
Views.Item( Index As Long ) As View
Property Value
This is a read only property whose value is a View.
Parameters
Views Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6565.htm 17/06/2025
Name Type Description
Index Long Input Long value that specifies the index of the View to return.
Version
Introduced in version 4
Views.Type Property
Parent Object: Views
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Views.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
Views Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6565.htm 17/06/2025
ViewList Object
Description
A ViewList object is a collection of objects.
Methods
Name Description
Add Method that adds a View object to the collection.
Remove Method that removes a View object from the collection.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Returns the specified object in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsNode.VisibleInViews, GraphicsNodeProxy.VisibleInViews
Version
Introduced in version 9
ViewList.Add Method
Parent Object: ViewList
Description
Method that adds a View object to the collection.
Syntax
ViewList.Add( View As View )
Parameters
ViewList Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF7.htm 17/06/2025
Name Type Description
View View View object to add.
Version
Introduced in version 9
ViewList.Count Property
Parent Object: ViewList
Description
Property that returns the number of items in this collection.
Syntax
ViewList.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
ViewList.Item Property
Parent Object: ViewList
Description
Returns the specified object in the collection.
Syntax
ViewList.Item( Index As Long ) As View
Property Value
This is a read only property whose value is a View.
ViewList Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF7.htm 17/06/2025
Parameters
Name Type Description
Index Long Input Long that specifies the index within the collection of the item to return.
Version
Introduced in version 9
ViewList.Remove Method
Parent Object: ViewList
Description
Method that removes a View object from the collection.
Syntax
ViewList.Remove( View As View )
Parameters
Name Type Description
View View View object to remove.
Version
Introduced in version 9
ViewList.Type Property
Parent Object: ViewList
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ViewList.Type() As ObjectTypeEnum
ViewList Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF7.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
ViewList Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF7.htm 17/06/2025
ViewsEnumerator Object
Description
The ViewsEnumerator object provides access to a list of objects.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.Views
Derived Classes
Views
Version
Introduced in version 4
ViewsEnumerator.Count Property
Parent Object: ViewsEnumerator
Description
Property that returns the number of items in this collection.
Syntax
ViewsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
ViewsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F07.htm 17/06/2025
Version
Introduced in version 4
ViewsEnumerator.Item Property
Parent Object: ViewsEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
ViewsEnumerator.Item( Index As Long ) As View
Property Value
This is a read only property whose value is a View.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the View to return.
Version
Introduced in version 4
ViewsEnumerator.Type Property
Parent Object: ViewsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ViewsEnumerator.Type() As ObjectTypeEnum
ViewsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F07.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
ViewsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F07.htm 17/06/2025
ViewTab Object
Description
ViewTab Object.
Methods
Name Description
Close Method that closes this ViewTab.
MoveToGroup
Method that moves the current view tab to a ViewTabGroup. The
ViewTabGroup the current ViewTab moves into will be returned.
MoveToNewViewFrame Method that moves current ViewTab to a new ViewFrame.
Properties
Name Description
Application Read-only property that returns the root Application object.
Type Gets the constant that indicates the type of this object.
View
Read-only property that returns the View or WebView this view tab is associated
with.
ViewFrame Read-only property that returns the ViewFrame this view tab is located in.
ViewTabGroup
Read-only property that returns the ViewTabGroup this view tab is located in.
This returns Nothing if the ViewTab is not grouped.
Accessed From
View.ViewTab, ViewTabGroup.Item, ViewTabsEnumerator.Item
Samples
Name Description
Dock browser pane to a custom
ViewFrame
This sample demonstrates how to dock the browser pane to a
custom ViewFrame.
Move view tab between different
view frames
This sample demonstrates how to move views using ViewTab
between different view frames.
Version
Introduced in version 2022
ViewTab Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
ViewTab.Application Property
Parent Object: ViewTab
Description
Read-only property that returns the root Application object.
Syntax
ViewTab.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2022
ViewTab.Close Method
Parent Object: ViewTab
Description
Method that closes this ViewTab.
Syntax
ViewTab.Close()
Version
Introduced in version 2022
ViewTab.MoveToGroup Method
Parent Object: ViewTab
Description
ViewTab Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
Method that moves the current view tab to a ViewTabGroup. The ViewTabGroup the current
ViewTab moves into will be returned.
Syntax
ViewTab.MoveToGroup( CreateNewGroup As Boolean, TargetViewTab As ViewTab,
DockingState As DockingStateEnum, [AdditionalViewTabs] As Variant ) As ViewTabGroup
Parameters
Name Type Description
CreateNewGroup Boolean
Input Boolean value that specifies whether to move the
current ViewTab to a newly created ViewTabGroup or
an existing ViewTabGroup. If set this as True then a
new ViewTabGroup containing this ViewTab will be
created. If this is set to False current ViewTab will be
moved to an existing ViewTabGroup that contains the
TargetViewTab.
TargetViewTab ViewTab
Input ViewTab object that specifies the target
ViewTab.
DockingState DockingStateEnum
Input DockingStateEnum value that specifies the
docking state of the current ViewTab. If the
CreateNewGroup is set to True then the current
ViewTab will be docked to the location against the
TargetViewTab’s group, valid values for this argument
are: kDockBottom, kDockTop, kDockLeft and
kDockRight. If the CreateNewGroup is set to False,
then the current ViewTab will be moved to the left or
right side of the TargetViewTab, so valid values for this
argument are: kDockLeft and kDockRight.
AdditionalViewTabs Variant
Optional input ObjectCollection object containing
ViewTab objects as additional view tabs to move to the
group with current ViewTab.
This is an optional argument whose default value is
null.
Samples
Name Description
Move view tab between
different view frames
This sample demonstrates how to move views using ViewTab
between different view frames.
Version
Introduced in version 2022
ViewTab Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
ViewTab.MoveToNewViewFrame Method
Parent Object: ViewTab
Description
Method that moves current ViewTab to a new ViewFrame.
Syntax
ViewTab.MoveToNewViewFrame( [ViewFrameWidth] As Variant, [ViewFrameHeight] As
Variant, [ViewFrameLeft] As Variant, [ViewFrameTop] As Variant, [AdditionalViewTabs] As
Variant ) As ViewFrame
Parameters
Name Type Description
ViewFrameWidth Variant
Optioanl input Long value that specifies the width of the new
ViewFrame.
This is an optional argument whose default value is null.
ViewFrameHeight Variant
Optioanl input Long value that specifies the height of the new
ViewFrame.
This is an optional argument whose default value is null.
ViewFrameLeft Variant
Optioanl input Long value that specifies the left of the new
ViewFrame.
This is an optional argument whose default value is null.
ViewFrameTop Variant
Optioanl input Long value that specifies the top of the new
ViewFrame.
This is an optional argument whose default value is null.
AdditionalViewTabs Variant
Optional input ObjectCollection object containing ViewTab objects
as additional view tabs to move to the ViewFrame with current
ViewTab.
This is an optional argument whose default value is null.
Samples
Name Description
Dock browser pane to a custom
ViewFrame
This sample demonstrates how to dock the browser pane to a
custom ViewFrame.
Move view tab between different
view frames
This sample demonstrates how to move views using ViewTab
between different view frames.
ViewTab Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
Version
Introduced in version 2022
ViewTab.Type Property
Parent Object: ViewTab
Description
Gets the constant that indicates the type of this object.
Syntax
ViewTab.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2022
ViewTab.View Property
Parent Object: ViewTab
Description
Read-only property that returns the View or WebView this view tab is associated with.
Syntax
ViewTab.View() As Object
Property Value
This is a read only property whose value is an Object.
ViewTab Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
Version
Introduced in version 2022
ViewTab.ViewFrame Property
Parent Object: ViewTab
Description
Read-only property that returns the ViewFrame this view tab is located in.
Syntax
ViewTab.ViewFrame() As ViewFrame
Property Value
This is a read only property whose value is a ViewFrame.
Version
Introduced in version 2022
ViewTab.ViewTabGroup Property
Parent Object: ViewTab
Description
Read-only property that returns the ViewTabGroup this view tab is located in. This returns
Nothing if the ViewTab is not grouped.
Syntax
ViewTab.ViewTabGroup() As ViewTabGroup
Property Value
This is a read only property whose value is a ViewTabGroup.
ViewTab Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
Version
Introduced in version 2022
ViewTab Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98F8.htm 17/06/2025
ViewTabGroup Object
Description
ViewTabGroup object.
Methods
Name Description
Close Method that closes this ViewTabGroup.
MoveToGroup
Method that moves the current ViewTabGroup to another
ViewTabGroup. The ViewTabGroup the current ViewTabGroup moves
into will be returned.
MoveToNewViewFrame Method that moves current ViewTabGroup to a new ViewFrame.
Properties
Name Description
Application Read-only property that returns the root Application object.
Count Read-only property that returns the number of view tabs in this view tab group.
Item Read-only property that returns the specified ViewTab object from the collection.
Type Gets the constant that indicates the type of this object.
ViewFrame Read-only property that returns the ViewFrame this view tab Group is located in.
Accessed From
ViewTab.MoveToGroup, ViewTab.ViewTabGroup, ViewTabGroup.MoveToGroup,
ViewTabGroupsEnumerator.Item
Version
Introduced in version 2022
ViewTabGroup.Application Property
Parent Object: ViewTabGroup
Description
Read-only property that returns the root Application object.
ViewTabGroup Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
Syntax
ViewTabGroup.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2022
ViewTabGroup.Close Method
Parent Object: ViewTabGroup
Description
Method that closes this ViewTabGroup.
Syntax
ViewTabGroup.Close()
Version
Introduced in version 2022
ViewTabGroup.Count Property
Parent Object: ViewTabGroup
Description
Read-only property that returns the number of view tabs in this view tab group.
Syntax
ViewTabGroup.Count() As Long
ViewTabGroup Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2022
ViewTabGroup.Item Property
Parent Object: ViewTabGroup
Description
Read-only property that returns the specified ViewTab object from the collection.
Syntax
ViewTabGroup.Item( Index As Long ) As ViewTab
Property Value
This is a read only property whose value is a ViewTab.
Parameters
Name Type Description
Index Long Input Long value that specifies the ViewTab to return.
Version
Introduced in version 2022
ViewTabGroup.MoveToGroup Method
Parent Object: ViewTabGroup
Description
Method that moves the current ViewTabGroup to another ViewTabGroup. The ViewTabGroup
the current ViewTabGroup moves into will be returned.
ViewTabGroup Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
Syntax
ViewTabGroup.MoveToGroup( TargetViewTab As ViewTab, DockingState As
DockingStateEnum ) As ViewTabGroup
Parameters
Name Type Description
TargetViewTab ViewTab Input ViewTab object that specifies the target ViewTab.
DockingState DockingStateEnum
Input DockingStateEnum value that specifies the docking
state of the current ViewTabGroup. Valid values for this
argument are: kDockLeft and kDockRight.
Version
Introduced in version 2022
ViewTabGroup.MoveToNewViewFrame
Method
Parent Object: ViewTabGroup
Description
Method that moves current ViewTabGroup to a new ViewFrame.
Syntax
ViewTabGroup.MoveToNewViewFrame( [ViewFrameWidth] As Variant, [ViewFrameHeight]
As Variant, [ViewFrameLeft] As Variant, [ViewFrameTop] As Variant ) As ViewFrame
Parameters
Name Type Description
ViewFrameWidth Variant
Optioanl input Long value that specifies the width of the new
ViewFrame.
This is an optional argument whose default value is null.
ViewFrameHeight Variant
Optioanl input Long value that specifies the height of the new
ViewFrame.
This is an optional argument whose default value is null.
ViewFrameLeft Variant Optioanl input Long value that specifies the left of the new
ViewFrame.
ViewTabGroup Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
This is an optional argument whose default value is null.
ViewFrameTop Variant
Optioanl input Long value that specifies the top of the new
ViewFrame.
This is an optional argument whose default value is null.
Version
Introduced in version 2022
ViewTabGroup.Type Property
Parent Object: ViewTabGroup
Description
Gets the constant that indicates the type of this object.
Syntax
ViewTabGroup.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2022
ViewTabGroup.ViewFrame Property
Parent Object: ViewTabGroup
Description
Read-only property that returns the ViewFrame this view tab Group is located in.
Syntax
ViewTabGroup.ViewFrame() As ViewFrame
ViewTabGroup Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
Property Value
This is a read only property whose value is a ViewFrame.
Version
Introduced in version 2022
ViewTabGroup Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5D7.htm 17/06/2025
ViewTabGroupsEnumerator Object
Description
ViewTabGroupsEnumerator object.
Properties
Name Description
Application Read-only property that returns the root Application object.
Count Read-only property that returns the number of items in the collection.
Item Allows integer-indexed access to items in the collection.
Type Gets the constant that indicates the type of this object.
Accessed From
ViewFrame.ViewTabGroups
Version
Introduced in version 2022
ViewTabGroupsEnumerator.Application
Property
Parent Object: ViewTabGroupsEnumerator
Description
Read-only property that returns the root Application object.
Syntax
ViewTabGroupsEnumerator.Application() As Object
Property Value
This is a read only property whose value is an Object.
ViewTabGroupsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD380.htm 17/06/2025
Version
Introduced in version 2022
ViewTabGroupsEnumerator.Count Property
Parent Object: ViewTabGroupsEnumerator
Description
Read-only property that returns the number of items in the collection.
Syntax
ViewTabGroupsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2022
ViewTabGroupsEnumerator.Item Property
Parent Object: ViewTabGroupsEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
ViewTabGroupsEnumerator.Item( Index As Long ) As ViewTabGroup
Property Value
This is a read only property whose value is a ViewTabGroup.
Parameters
ViewTabGroupsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD380.htm 17/06/2025
Name Type Description
Index Long Input Long value that specifies the ViewTabGroup to return.
Version
Introduced in version 2022
ViewTabGroupsEnumerator.Type Property
Parent Object: ViewTabGroupsEnumerator
Description
Gets the constant that indicates the type of this object.
Syntax
ViewTabGroupsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2022
ViewTabGroupsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD380.htm 17/06/2025
ViewTabsEnumerator Object
Description
ViewTabsEnumerator object.
Properties
Name Description
Application Read-only property that returns the root Application object.
Count Read-only property that returns the number of view tabs in this view tab group.
Item Allows integer-indexed access to items in the collection.
Type Gets the constant that indicates the type of this object.
Accessed From
ViewFrame.ViewTabs
Version
Introduced in version 2022
ViewTabsEnumerator.Application Property
Parent Object: ViewTabsEnumerator
Description
Read-only property that returns the root Application object.
Syntax
ViewTabsEnumerator.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2022
ViewTabsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE8A.htm 17/06/2025
ViewTabsEnumerator.Count Property
Parent Object: ViewTabsEnumerator
Description
Read-only property that returns the number of view tabs in this view tab group.
Syntax
ViewTabsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2022
ViewTabsEnumerator.Item Property
Parent Object: ViewTabsEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
ViewTabsEnumerator.Item( Index As Long ) As ViewTab
Property Value
This is a read only property whose value is a ViewTab.
Parameters
Name Type Description
Index Long Input Long value that specifies the ViewTab to return.
ViewTabsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE8A.htm 17/06/2025
Version
Introduced in version 2022
ViewTabsEnumerator.Type Property
Parent Object: ViewTabsEnumerator
Description
Gets the constant that indicates the type of this object.
Syntax
ViewTabsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2022
ViewTabsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE8A.htm 17/06/2025
VirtualComponentDefinition Object
Derived from: ComponentDefinition Object
Description
This object derives from the ComponentDefinition object. It represents a ComponentDefinition that exists solely for the
BOM.
Methods
Name Description
FindUsingPoint Method that finds all the entities of the specified type at the specified location.
FindUsingVector
Method that finds all the entities of the specified type along the specified vector using either a
cylinder or cone that to define the tolerance within the defined vector.
GetUnusedGeometries Method that gets the unused sketches and work features.
PurgeUnusedGeometries Method that purges unused sketches and work features.
Properties
Name Description
ActiveMaterial Gets and sets the material for the VirtualComponentDefinition.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BOMQuantity Property that returns the BOMQuantity object.
BOMStructure Gets and sets how the component is used/viewed in a BOM.
ClientGraphicsCollection Property that returns the ClientGraphicsCollection object.
DataIO
Gets the object that directly deals with I/O to and from a storage-medium, including Streams
(IStream).
DisplayName Gets and sets the name of the virtual component.
Document Property that returns the containing Document object.
ModelGeometryVersion
Property that returns a string that can be used to determine if the document has been modified.
This version string is changed every time the assembly is modified. By saving a previous
version string, you can compare the current version string to see if the assembly has been
modified.
Occurrences Property that returns the collection object.
OrientedMinimumRangeBox Read-only property that returns the oriented minimum range box for this object.
PreciseRangeBox
Gets a bounding box that tightly encloses all the solid and surface bodies under the
ComponentDefinition.
PropertySets Property that gets the PropertySets object associated with the virtual component.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box that
is guaranteed to enclose this object.
SurfaceBodies
Property that returns all of the result SurfaceBody objects contained within this
ComponentDefinition.
Type Returns an ObjectTypeEnum indicating this object's type.
Samples
Name Description
Using the BOM APIs This sample demonstrates the Bill of Materials API functionality in assemblies.
VirtualComponentDefinition Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Version
Introduced in version 10
VirtualComponentDefinition.ActiveMaterial Property
Parent Object: VirtualComponentDefinition
Description
Gets and sets the material for the VirtualComponentDefinition.
Syntax
VirtualComponentDefinition.ActiveMaterial() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2024
VirtualComponentDefinition.Application Property
Parent Object: VirtualComponentDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
VirtualComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
VirtualComponentDefinition.AttributeSets Property
Parent Object: VirtualComponentDefinition
Description
Property that returns the AttributeSets collection object associated with this object.
VirtualComponentDefinition Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Syntax
VirtualComponentDefinition.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
VirtualComponentDefinition.BOMQuantity Property
Parent Object: VirtualComponentDefinition
Description
Property that returns the BOMQuantity object.
Syntax
VirtualComponentDefinition.BOMQuantity() As BOMQuantity
Property Value
This is a read only property whose value is a BOMQuantity.
Version
Introduced in version 10
VirtualComponentDefinition.BOMStructure Property
Parent Object: VirtualComponentDefinition
Description
Gets and sets how the component is used/viewed in a BOM.
Syntax
VirtualComponentDefinition.BOMStructure() As BOMStructureEnum
Property Value
This is a read/write property whose value is a BOMStructureEnum.
Version
Introduced in version 10
VirtualComponentDefinition Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
VirtualComponentDefinition.ClientGraphicsCollection
Property
Parent Object: VirtualComponentDefinition
Description
Property that returns the ClientGraphicsCollection object.
Syntax
VirtualComponentDefinition.ClientGraphicsCollection() As ClientGraphicsCollection
Property Value
This is a read only property whose value is a ClientGraphicsCollection.
Version
Introduced in version 10
VirtualComponentDefinition.DataIO Property
Parent Object: VirtualComponentDefinition
Description
Gets the object that directly deals with I/O to and from a storage-medium, including Streams(IStream).
Syntax
VirtualComponentDefinition.DataIO() As DataIO
Property Value
This is a read only property whose value is a DataIO.
Version
Introduced in version 10
VirtualComponentDefinition.DisplayName Property
Parent Object: VirtualComponentDefinition
Description
Gets and sets the name of the virtual component.
Syntax
VirtualComponentDefinition.DisplayName() As String
VirtualComponentDefinition Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
VirtualComponentDefinition.Document Property
Parent Object: VirtualComponentDefinition
Description
Property that returns the containing Document object.
Syntax
VirtualComponentDefinition.Document() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
VirtualComponentDefinition.FindUsingPoint Method
Parent Object: VirtualComponentDefinition
Description
Method that finds all the entities of the specified type at the specified location.
Syntax
VirtualComponentDefinition.FindUsingPoint( Point As Point, ObjectTypes() As SelectionFilterEnum,
[ProximityTolerance] As Variant, [VisibleObjectsOnly] As Boolean ) As ObjectsEnumerator
Parameters
Name Type Description
Point Point Input Point object that specifies the model space point at which to find the entities.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to find.
The values are the enum values from the SelectionFilterEnum and can be
combined to specify multiple object types.
ProximityTolerance Variant
Input Double that specifies the tolerance value for the search. This value defines
the radius of a sphere at the input point. All objects that intersect this sphere will
be returned. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean Optional input Boolean that indicates whether or not invisible objects should be
included in the search. Defaults to True indicating that invisible objects will be
VirtualComponentDefinition Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
ignored.
This is an optional argument whose default value is True.
Version
Introduced in version 2009
VirtualComponentDefinition.FindUsingVector Method
Parent Object: VirtualComponentDefinition
Description
Method that finds all the entities of the specified type along the specified vector using either a cylinder or cone that to define
the tolerance within the defined vector.
Syntax
VirtualComponentDefinition.FindUsingVector( OriginPoint As Point, Direction As UnitVector, ObjectTypes() As
SelectionFilterEnum, [UseCylinder] As Boolean, [ProximityTolerance] As Variant, [VisibleObjectsOnly] As Boolean,
[LocationPoints] As Variant ) As ObjectsEnumerator
Parameters
Name Type Description
OriginPoint Point Input Point that defines the model space location to position the vector.
Direction UnitVector
Input UnitVector that defines direction to find all entities that the vector
penetrates. The vector is treated as infinite in both directions from the origin point
so all entities that lie in the path of the vector on either side of the origin point will
be returned.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to find.
The values are the enum values from the SelectionFilterEnum and can be
combined to specify multiple object types.
UseCylinder Boolean
Input argument that specifies if the vector defines a cylinder or cone when
checking to see if an entity is hit by the ray.
This is an optional argument whose default value is True.
ProximityTolerance Variant
Optional input Double that specifies the tolerance value for the search. This value
defines the radius of a cylinder if UseCylinder is True or the angle of the cone if
False. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean
Optional input Boolean that indicates whether or not invisible objects should be
included in the search. Defaults to True indicating that invisible objects will be
ignored.
This is an optional argument whose default value is True.
LocationPoints Variant
Optional output that returns a set of Point objects. One Point object is returned for
each entity in the FoundEntities list. The point defines the coordinate of the
intersection between the vector and the corresponding entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
VirtualComponentDefinition Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
VirtualComponentDefinition.GetUnusedGeometries
Method
Parent Object: VirtualComponentDefinition
Description
Method that gets the unused sketches and work features.
Syntax
VirtualComponentDefinition.GetUnusedGeometries( UnusedGeometries As ObjectCollection )
Parameters
Name Type Description
UnusedGeometries ObjectCollection Output ObjectCollection object the includes the unused sketches and work features.
Version
Introduced in version 2024
VirtualComponentDefinition.ModelGeometryVersion
Property
Parent Object: VirtualComponentDefinition
Description
Property that returns a string that can be used to determine if the document has been modified. This version string is changed
every time the assembly is modified. By saving a previous version string, you can compare the current version string to see if
the assembly has been modified.
Syntax
VirtualComponentDefinition.ModelGeometryVersion() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
VirtualComponentDefinition.Occurrences Property
Parent Object: VirtualComponentDefinition
Description
Property that returns the collection object.
VirtualComponentDefinition Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Syntax
VirtualComponentDefinition.Occurrences() As ComponentOccurrences
Property Value
This is a read only property whose value is a ComponentOccurrences.
Version
Introduced in version 10
VirtualComponentDefinition.OrientedMinimumRangeBox
Property
Parent Object: VirtualComponentDefinition
Description
Read-only property that returns the oriented minimum range box for this object.
Syntax
VirtualComponentDefinition.OrientedMinimumRangeBox() As OrientedBox
Property Value
This is a read only property whose value is an OrientedBox.
Version
Introduced in version 2024
VirtualComponentDefinition.PreciseRangeBox Property
Parent Object: VirtualComponentDefinition
Description
Gets a bounding box that tightly encloses all the solid and surface bodies under the ComponentDefinition.
Syntax
VirtualComponentDefinition.PreciseRangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2023
VirtualComponentDefinition Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
VirtualComponentDefinition.PropertySets Property
Parent Object: VirtualComponentDefinition
Description
Property that gets the PropertySets object associated with the virtual component.
Syntax
VirtualComponentDefinition.PropertySets() As PropertySets
Property Value
This is a read only property whose value is a PropertySets.
Samples
Name Description
Using the BOM APIs This sample demonstrates the Bill of Materials API functionality in assemblies.
Version
Introduced in version 10
VirtualComponentDefinition.PurgeUnusedGeometries
Method
Parent Object: VirtualComponentDefinition
Description
Method that purges unused sketches and work features.
Syntax
VirtualComponentDefinition.PurgeUnusedGeometries( [UnusedGeometries] As Variant )
Parameters
Name Type Description
UnusedGeometries Variant
Optional input ObjectCollection that including the sketches and work features to purge. The
unused sketches and work features can be retrieved using GetUnusedGeometries method. If this
is not provided then all unused sketches and work features will be purged.
This is an optional argument whose default value is null.
Version
Introduced in version 2024
VirtualComponentDefinition.RangeBox Property
VirtualComponentDefinition Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Parent Object: VirtualComponentDefinition
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose this
object.
Syntax
VirtualComponentDefinition.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 11
VirtualComponentDefinition.SurfaceBodies Property
Parent Object: VirtualComponentDefinition
Description
Property that returns all of the result SurfaceBody objects contained within this ComponentDefinition.
Syntax
VirtualComponentDefinition.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 10
VirtualComponentDefinition.Type Property
Parent Object: VirtualComponentDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VirtualComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
VirtualComponentDefinition Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
Version
Introduced in version 10
VirtualComponentDefinition Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh781.htm 17/06/2025
VisibleOccurrenceFinder Object
Description
The VisibleOccurrenceFinder object is a utility object created using the
AssemblyComponentDefinition.CreateVisibleOccurrenceFinder method. It is used to find
occurrences in the assembly based on their visibility. It is equivalent to the “Select Internal
Components”, “Select External Components”, and “Select All in Camera” commands in Inventor.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
CompactResult
Read-write property Boolean that defines if all components that are found
within an assembly will be consolidated so that their paraent assembly is
returned instead of each one of the child components.
FoundOccurrences
Read-only property that returns the occurrences that meet the current criteria
defined by the other properties on the VisibleOccurrenceFinder object.
PercentageVisible
Read-write property Double that defines the percentage of the component that
can be visible or hidden.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Read-write property that defines if visible or hidden objects should be found.
Accessed From
AssemblyComponentDefinition.CreateVisibleOccurrenceFinder,
WeldmentComponentDefinition.CreateVisibleOccurrenceFinder
Version
Introduced in version 2013
VisibleOccurrenceFinder.Application
Property
Parent Object: VisibleOccurrenceFinder
Description
VisibleOccurrenceFinder Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CDB.htm 17/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
VisibleOccurrenceFinder.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2013
VisibleOccurrenceFinder.CompactResult
Property
Parent Object: VisibleOccurrenceFinder
Description
Read-write property Boolean that defines if all components that are found within an assembly will
be consolidated so that their paraent assembly is returned instead of each one of the child
components.
Syntax
VisibleOccurrenceFinder.CompactResult() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
VisibleOccurrenceFinder Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CDB.htm 17/06/2025
VisibleOccurrenceFinder.FoundOccurrences
Property
Parent Object: VisibleOccurrenceFinder
Description
Read-only property that returns the occurrences that meet the current criteria defined by the other
properties on the VisibleOccurrenceFinder object.
Syntax
VisibleOccurrenceFinder.FoundOccurrences() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2013
VisibleOccurrenceFinder.PercentageVisible
Property
Parent Object: VisibleOccurrenceFinder
Description
Read-write property Double that defines the percentage of the component that can be visible or
hidden.
Syntax
VisibleOccurrenceFinder.PercentageVisible() As Double
Property Value
This is a read/write property whose value is a Double.
VisibleOccurrenceFinder Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CDB.htm 17/06/2025
Version
Introduced in version 2013
VisibleOccurrenceFinder.Type Property
Parent Object: VisibleOccurrenceFinder
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
VisibleOccurrenceFinder.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2013
VisibleOccurrenceFinder.Visible Property
Parent Object: VisibleOccurrenceFinder
Description
Read-write property that defines if visible or hidden objects should be found.
Syntax
VisibleOccurrenceFinder.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
VisibleOccurrenceFinder Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CDB.htm 17/06/2025
Version
Introduced in version 2013
VisibleOccurrenceFinder Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CDB.htm 17/06/2025