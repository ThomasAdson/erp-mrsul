LineAndPointWorkAxisDef Object
Description
Object that allows you to get and set the information that specifies a work axis that is along a line
and passes through a point.
Methods
Name Description
GetData
Method that gets all of the data defining a work axis that is along a line and passes
through a point.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Line
Property that returns the line used to define a work axis that is along a line and
passes through a point. This object can be a linear Edge, WorkAxis, SketchLine, or
SketchLine3D object.
Parent Property that returns the parent WorkAxis object.
Point
Property that returns the point used to define a work axis that is along a line and
passes through a point.. This object can be a vertex, WorkPoint, SketchPoint, or
SketchPoint3D object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 11
LineAndPointWorkAxisDef.Application
Property
Parent Object: LineAndPointWorkAxisDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
LineAndPointWorkAxisDef Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB55.htm 16/06/2025
Syntax
LineAndPointWorkAxisDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LineAndPointWorkAxisDef.GetData Method
Parent Object: LineAndPointWorkAxisDef
Description
Method that gets all of the data defining a work axis that is along a line and passes through a
point.
Syntax
LineAndPointWorkAxisDef.GetData( Line As Object, Point As Object )
Parameters
Name Type Description
Line Object
Object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Point Object
Output object that represents a point. This object can be a vertex, WorkPoint,
SketchPoint, or SketchPoint3D object.
Version
Introduced in version 11
LineAndPointWorkAxisDef.Line Property
Parent Object: LineAndPointWorkAxisDef
LineAndPointWorkAxisDef Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB55.htm 16/06/2025
Description
Property that returns the line used to define a work axis that is along a line and passes through a
point. This object can be a linear Edge, WorkAxis, SketchLine, or SketchLine3D object.
Syntax
LineAndPointWorkAxisDef.Line() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LineAndPointWorkAxisDef.Parent Property
Parent Object: LineAndPointWorkAxisDef
Description
Property that returns the parent WorkAxis object.
Syntax
LineAndPointWorkAxisDef.Parent() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 11
LineAndPointWorkAxisDef.Point Property
Parent Object: LineAndPointWorkAxisDef
LineAndPointWorkAxisDef Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB55.htm 16/06/2025
Description
Property that returns the point used to define a work axis that is along a line and passes through a
point.. This object can be a vertex, WorkPoint, SketchPoint, or SketchPoint3D object.
Syntax
LineAndPointWorkAxisDef.Point() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LineAndPointWorkAxisDef.Type Property
Parent Object: LineAndPointWorkAxisDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineAndPointWorkAxisDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LineAndPointWorkAxisDef Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB55.htm 16/06/2025
LineAndTangentWorkPlaneDef Object
Description
Object that allows you to get and set the information that specifies a work plane that passes through a
line and is tangent to a surface.
Methods
Name Description
GetData
Method that gets all of the data defining a work that passes through the line and is tangent
to the input face.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Face
Property that returns the tangent of the work plane. This face must either be a
cylinder whose axis is parallel to the line, a cone that is positioned such that a valid
tangent exists, or a sphere.
Line
Property that returns the line of a work plane that passes through a line and is
tangent to a surface. This object can be a linear Edge, WorkAxis, or SketchLine
object.
Parent Property returning the parent WorkPlane object.
ProximityPoint
Property that returns the proximity point. The proximity point defines which of the
two possible solutions is chosen when computing the tangent plane. This point is
used for the initial computation and the specific point is not stored. During a
recompute of the model the plane will remain on the same side of the tangent surface
regardless of its position relative to the originally specified point. The point returned
by this property is as an arbitrary point along the tangent between the face and plane.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.Application
Property
Parent Object: LineAndTangentWorkPlaneDef
LineAndTangentWorkPlaneDef Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE47A.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LineAndTangentWorkPlaneDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.Face Property
Parent Object: LineAndTangentWorkPlaneDef
Description
Property that returns the tangent of the work plane. This face must either be a cylinder whose axis is
parallel to the line, a cone that is positioned such that a valid tangent exists, or a sphere.
Syntax
LineAndTangentWorkPlaneDef.Face() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.GetData
Method
Parent Object: LineAndTangentWorkPlaneDef
LineAndTangentWorkPlaneDef Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE47A.htm 16/06/2025
Description
Method that gets all of the data defining a work that passes through the line and is tangent to the input
face.
Syntax
LineAndTangentWorkPlaneDef.GetData( Line As Object, Face As Face, ProximityPoint As Point )
Parameters
Name Type Description
Line Object
Output object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object. The work plane passes through this line.
Face Face
Output Face object that indicates the tangent surface. This face will be a
cylinder, cone, or sphere.
ProximityPoint Point
Output object that indicates which of the possible two solutions was used
when calculating the tangent plane. The proximity point itself is not stored.
The point returned is calculated as an arbitrary point along the tangent
between the face and plane.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.Line Property
Parent Object: LineAndTangentWorkPlaneDef
Description
Property that returns the line of a work plane that passes through a line and is tangent to a surface.
This object can be a linear Edge, WorkAxis, or SketchLine object.
Syntax
LineAndTangentWorkPlaneDef.Line() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE47A.htm 16/06/2025
LineAndTangentWorkPlaneDef.Parent
Property
Parent Object: LineAndTangentWorkPlaneDef
Description
Property returning the parent WorkPlane object.
Syntax
LineAndTangentWorkPlaneDef.Parent() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.ProximityPoint
Property
Parent Object: LineAndTangentWorkPlaneDef
Description
Property that returns the proximity point. The proximity point defines which of the two possible
solutions is chosen when computing the tangent plane. This point is used for the initial computation
and the specific point is not stored. During a recompute of the model the plane will remain on the
same side of the tangent surface regardless of its position relative to the originally specified point.
The point returned by this property is as an arbitrary point along the tangent between the face and
plane.
Syntax
LineAndTangentWorkPlaneDef.ProximityPoint() As Point
Property Value
This is a read only property whose value is a Point.
LineAndTangentWorkPlaneDef Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE47A.htm 16/06/2025
Version
Introduced in version 4
LineAndTangentWorkPlaneDef.Type Property
Parent Object: LineAndTangentWorkPlaneDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineAndTangentWorkPlaneDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
LineAndTangentWorkPlaneDef Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE47A.htm 16/06/2025
LinearGeneralDimension Object
Derived from: GeneralDimension Object
Description
The LinearGeneralDimension object represents a linear general dimension placed on a sheet.
Methods
Name Description
CenterText Method that centers the dimension text on the dimension line.
Delete Method that deletes the DrawingDimension.
GetInspectionDimensionData
Method that returns the data associated with an inspection dimension. This method
returns an error if the IsInspectionDimension property returns False.
GetReferenceKey Method that generates and returns the reference key for this entity.
PromoteToSketch
Method that copies the dimension to the underlying sketch. This method only works
for dimensions associated with a draft view.
SetInspectionDimensionData
Method that sets the data associated with an inspection dimension. This method
automatically sets the IsInspectionDimension property to True, if it isn't already.
ShowAllExtensionLines
Method that un-hides all the extension lines associated with this dimension. If there
are no hidden extension lines associated with this dimension, this method does nothing
and returns a success.
Properties
Name Description
AlignmentGeometry
Read-only property that returns the geometry that defines the direction the linear
dimension aligns to.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
ArrowheadsInside Gets and sets the ArrowheadsInside setting.
Attached
Indicates whether this dimension is attached to anything. If not, it is considered orphaned
and can be removed.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BaselineDimensionSet Property that returns the BaselineDimensionSet that owns this dimension.
ChainDimensionSet
Property that returns the ChainDimensionSet that owns this dimension. This property
returns nothing if this dimension is not a chain dimension set member. This can be
checked using the IsChainSetMember property.
DimensionLine Property that returns the dimension line geometry of the dimension.
DimensionType
Property that returns the dimension type. Possible values are kAlignedDimensionType,
kHorizontalDimensionType, kVerticalDimensionType, kArcLengthDimensionType,
kSymmetricDimensionType and kDiametricDimensionType.
ExtensionLineOne Property that returns the first extension line of the dimension.
ExtensionLineOneVisible Gets and sets whether the first extension line is visible.
ExtensionLineTwo Property that returns the second extension line of the dimension.
ExtensionLineTwoVisible Gets and sets whether the second extension line is visible.
FirstArrowheadInside Read-write property that gets and sets whether the first arrowhead is inside or outside.
FirstArrowheadType Read-write property that gets and sets the type of the first arrowhead.
FullDimensionLine
Gets and sets whether the full dimension line should be displayed for linear diametric
dimensions.
GeneralDimensionType Returns an enum indicating the type of general dimension.
LinearGeneralDimension Object Page 1 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
HideSecondArrowhead Gets and sets whether hide the second arrowhead of the dimension.
HideValue Gets and sets the HideValue setting.
IntentOne Gets the sets first geometry associated with the dimension.
IntentThree Gets the sets the third geometry associated with the dimension.
IntentTwo
Gets the sets second geometry associated with the dimension. This may return Nothing in
some cases where a single geometry was used for the dimension creation.
IsBaselineSetMember
Property that returns whether this dimension is a member of a baseline dimension set. If
this property returns True, the BaselineDimensionSet object is returned by the
BaselineDimensionSet property.
IsChainSetMember
Property that returns whether this dimension is a member of a chain dimension set. If this
property returns True, the ChainDimensionSet object is returned by the
ChainDimensionSet property.
IsInspectionDimension Gets and sets whether this is an inspection dimension.
Layer Gets and sets the layer applied to this dimension.
ModelValue
Property that gets the dimension value as defined in the model or as measured in the
drawing.
ModelValueOverridden
Read-write property that gets and sets whether the model value is overridden for the
dimension.
OverrideModelValue Gets and sets the NominalValue setting.
Parent Property that returns the parent sheet of the object.
Precision Gets and sets the Precision setting.
Retrieved
Property that indicates whether the dimension was created as a result of retrieving it
either from the model or a drawing view sketch. If True, the RetrievedFrom property
returns the object that the dimension was retrieved from.
RetrievedFrom
Property that returns the object that this dimension was retrieved from. Possible return
objects include all sketch constraint objects that derive from DimensionConstraint and
their proxies, FeatureDimension and FeatureDimensionProxy. The property returns
Nothing if the Retrieved property returns False.
SecondArrowheadInside Read-write property that gets and sets whether the second arrowhead is inside or outside.
SecondArrowheadPosition Gets and sets the position of the second arrowhead.
SecondArrowheadType Read-write property that gets and sets the type of the second arrowhead.
ShowLeader Gets and sets whether to display a leader line for the dimension text.
Style Gets and sets the DimensionStyle associated with the dimension.
Text Gets and sets the DimensionText setting.
Tolerance Property that returns the Tolerance object associated with this dimension.
TolerancePrecision Gets and sets the precision of the tolerance text for the dimension.
Type Returns an ObjectTypeEnum indicating this object's type.
VirtualArcPosition Gets and sets the geometry that defines the position of the virtual arc.
Accessed From
BaselineDimensionSet.AddMember, GeneralDimensions.AddArcLengthForeshortened,
GeneralDimensions.AddLinear, GeneralDimensions.AddLinear2, GeneralDimensions.AddLinearForeshortened
Samples
Name Description
Center Dimension Text
This sample demonstrates how to center the text of all dimensions on the active sheet
in a drawing.
Add surface texture symbol to
dimension
This sample demonstrates the creation of a surface texture symbol attached to the
extension line of a drawing dimension.
LinearGeneralDimension Object Page 2 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 11
LinearGeneralDimension.AlignmentGeometry
Property
Parent Object: LinearGeneralDimension
Description
Read-only property that returns the geometry that defines the direction the linear dimension aligns to.
Syntax
LinearGeneralDimension.AlignmentGeometry() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2021
LinearGeneralDimension.Application Property
Parent Object: LinearGeneralDimension
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LinearGeneralDimension.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LinearGeneralDimension.ArrowheadsInside Property
Parent Object: LinearGeneralDimension
LinearGeneralDimension Object Page 3 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Description
Gets and sets the ArrowheadsInside setting.
Syntax
LinearGeneralDimension.ArrowheadsInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.Attached Property
Parent Object: LinearGeneralDimension
Description
Indicates whether this dimension is attached to anything. If not, it is considered orphaned and can be removed.
Syntax
LinearGeneralDimension.Attached() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.AttributeSets Property
Parent Object: LinearGeneralDimension
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LinearGeneralDimension.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
LinearGeneralDimension Object Page 4 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 11
LinearGeneralDimension.BaselineDimensionSet
Property
Parent Object: LinearGeneralDimension
Description
Property that returns the BaselineDimensionSet that owns this dimension.
Syntax
LinearGeneralDimension.BaselineDimensionSet() As BaselineDimensionSet
Property Value
This is a read only property whose value is a BaselineDimensionSet.
Version
Introduced in version 2010
LinearGeneralDimension.CenterText Method
Parent Object: LinearGeneralDimension
Description
Method that centers the dimension text on the dimension line.
Syntax
LinearGeneralDimension.CenterText()
Version
Introduced in version 2008
LinearGeneralDimension.ChainDimensionSet
Property
Parent Object: LinearGeneralDimension
Description
LinearGeneralDimension Object Page 5 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Property that returns the ChainDimensionSet that owns this dimension. This property returns nothing if this
dimension is not a chain dimension set member. This can be checked using the IsChainSetMember property.
Syntax
LinearGeneralDimension.ChainDimensionSet() As ChainDimensionSet
Property Value
This is a read only property whose value is a ChainDimensionSet.
Version
Introduced in version 2011
LinearGeneralDimension.Delete Method
Parent Object: LinearGeneralDimension
Description
Method that deletes the DrawingDimension.
Syntax
LinearGeneralDimension.Delete()
Version
Introduced in version 11
LinearGeneralDimension.DimensionLine Property
Parent Object: LinearGeneralDimension
Description
Property that returns the dimension line geometry of the dimension.
Syntax
LinearGeneralDimension.DimensionLine() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LinearGeneralDimension Object Page 6 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
LinearGeneralDimension.DimensionType Property
Parent Object: LinearGeneralDimension
Description
Property that returns the dimension type. Possible values are kAlignedDimensionType, kHorizontalDimensionType,
kVerticalDimensionType, kArcLengthDimensionType, kSymmetricDimensionType and kDiametricDimensionType.
Syntax
LinearGeneralDimension.DimensionType() As DimensionTypeEnum
Property Value
This is a read only property whose value is a DimensionTypeEnum.
Version
Introduced in version 11
LinearGeneralDimension.ExtensionLineOne Property
Parent Object: LinearGeneralDimension
Description
Property that returns the first extension line of the dimension.
Syntax
LinearGeneralDimension.ExtensionLineOne() As Object
Property Value
This is a read only property whose value is an Object.
Samples
Name Description
Add surface texture symbol to
dimension
This sample demonstrates the creation of a surface texture symbol attached to the
extension line of a drawing dimension.
Version
Introduced in version 2008
LinearGeneralDimension Object Page 7 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
LinearGeneralDimension.ExtensionLineOneVisible
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether the first extension line is visible.
Syntax
LinearGeneralDimension.ExtensionLineOneVisible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
LinearGeneralDimension.ExtensionLineTwo Property
Parent Object: LinearGeneralDimension
Description
Property that returns the second extension line of the dimension.
Syntax
LinearGeneralDimension.ExtensionLineTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LinearGeneralDimension.ExtensionLineTwoVisible
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether the second extension line is visible.
LinearGeneralDimension Object Page 8 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Syntax
LinearGeneralDimension.ExtensionLineTwoVisible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
LinearGeneralDimension.FirstArrowheadInside
Property
Parent Object: LinearGeneralDimension
Description
Read-write property that gets and sets whether the first arrowhead is inside or outside.
Syntax
LinearGeneralDimension.FirstArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.FirstArrowheadType
Property
Parent Object: LinearGeneralDimension
Description
Read-write property that gets and sets the type of the first arrowhead.
Syntax
LinearGeneralDimension.FirstArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
LinearGeneralDimension Object Page 9 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 2011
LinearGeneralDimension.FullDimensionLine Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether the full dimension line should be displayed for linear diametric dimensions.
Syntax
LinearGeneralDimension.FullDimensionLine() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
LinearGeneralDimension.GeneralDimensionType
Property
Parent Object: LinearGeneralDimension
Description
Returns an enum indicating the type of general dimension.
Syntax
LinearGeneralDimension.GeneralDimensionType() As GeneralDimensionTypeEnum
Property Value
This is a read only property whose value is a GeneralDimensionTypeEnum.
Version
Introduced in version 2008
LinearGeneralDimension.GetInspectionDimensionData
Method
LinearGeneralDimension Object Page 10 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Parent Object: LinearGeneralDimension
Description
Method that returns the data associated with an inspection dimension. This method returns an error if the
IsInspectionDimension property returns False.
Syntax
LinearGeneralDimension.GetInspectionDimensionData( Shape As InspectionDimensionShapeEnum, Label As
String, Rate As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum
Output InspectionDimensionShapeEnum that indicates the border shape
surrounding the inspection dimension text. Valid return values are
kNoInspectionBorder, kAngularEndsInspectionBorder and
kRoundedEndsInspectionBorder.
Label String
Output string that returns the text placed left of the dimension value. The
string can contain symbols specified using the StyleOverride tag.
Rate String
Output string that returns the text (typically a percentage value) placed to
the right of the dimension value. The string can contain symbols specified
using the StyleOverride tag.
Version
Introduced in version 2010
LinearGeneralDimension.GetReferenceKey Method
Parent Object: LinearGeneralDimension
Description
Method that generates and returns the reference key for this entity.
Syntax
LinearGeneralDimension.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with
any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A
key context is created using the CreateKeyContext method of the ReferenceKeyManager object.
For all other object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
LinearGeneralDimension Object Page 11 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 11
LinearGeneralDimension.HideSecondArrowhead
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether hide the second arrowhead of the dimension.
Syntax
LinearGeneralDimension.HideSecondArrowhead() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2015
LinearGeneralDimension.HideValue Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the HideValue setting.
Syntax
LinearGeneralDimension.HideValue() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.IntentOne Property
Parent Object: LinearGeneralDimension
LinearGeneralDimension Object Page 12 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Description
Gets the sets first geometry associated with the dimension.
Syntax
LinearGeneralDimension.IntentOne() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 11
LinearGeneralDimension.IntentThree Property
Parent Object: LinearGeneralDimension
Description
Gets the sets the third geometry associated with the dimension.
Syntax
LinearGeneralDimension.IntentThree() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2015
LinearGeneralDimension.IntentTwo Property
Parent Object: LinearGeneralDimension
Description
Gets the sets second geometry associated with the dimension. This may return Nothing in some cases where a single
geometry was used for the dimension creation.
Syntax
LinearGeneralDimension.IntentTwo() As GeometryIntent
LinearGeneralDimension Object Page 13 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 11
LinearGeneralDimension.IsBaselineSetMember
Property
Parent Object: LinearGeneralDimension
Description
Property that returns whether this dimension is a member of a baseline dimension set. If this property returns True,
the BaselineDimensionSet object is returned by the BaselineDimensionSet property.
Syntax
LinearGeneralDimension.IsBaselineSetMember() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
LinearGeneralDimension.IsChainSetMember Property
Parent Object: LinearGeneralDimension
Description
Property that returns whether this dimension is a member of a chain dimension set. If this property returns True, the
ChainDimensionSet object is returned by the ChainDimensionSet property.
Syntax
LinearGeneralDimension.IsChainSetMember() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2011
LinearGeneralDimension Object Page 14 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
LinearGeneralDimension.IsInspectionDimension
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether this is an inspection dimension.
Syntax
LinearGeneralDimension.IsInspectionDimension() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LinearGeneralDimension.Layer Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the layer applied to this dimension.
Syntax
LinearGeneralDimension.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 11
LinearGeneralDimension.ModelValue Property
Parent Object: LinearGeneralDimension
Description
Property that gets the dimension value as defined in the model or as measured in the drawing.
LinearGeneralDimension Object Page 15 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Syntax
LinearGeneralDimension.ModelValue() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 11
LinearGeneralDimension.ModelValueOverridden
Property
Parent Object: LinearGeneralDimension
Description
Read-write property that gets and sets whether the model value is overridden for the dimension.
Syntax
LinearGeneralDimension.ModelValueOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.OverrideModelValue
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the NominalValue setting.
Syntax
LinearGeneralDimension.OverrideModelValue() As Double
Property Value
This is a read/write property whose value is a Double.
LinearGeneralDimension Object Page 16 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 11
LinearGeneralDimension.Parent Property
Parent Object: LinearGeneralDimension
Description
Property that returns the parent sheet of the object.
Syntax
LinearGeneralDimension.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 11
LinearGeneralDimension.Precision Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the Precision setting.
Syntax
LinearGeneralDimension.Precision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 11
LinearGeneralDimension.PromoteToSketch Method
Parent Object: LinearGeneralDimension
LinearGeneralDimension Object Page 17 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Description
Method that copies the dimension to the underlying sketch. This method only works for dimensions associated with a
draft view.
Syntax
LinearGeneralDimension.PromoteToSketch() As DimensionConstraint
Version
Introduced in version 11
LinearGeneralDimension.Retrieved Property
Parent Object: LinearGeneralDimension
Description
Property that indicates whether the dimension was created as a result of retrieving it either from the model or a
drawing view sketch. If True, the RetrievedFrom property returns the object that the dimension was retrieved from.
Syntax
LinearGeneralDimension.Retrieved() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
LinearGeneralDimension.RetrievedFrom Property
Parent Object: LinearGeneralDimension
Description
Property that returns the object that this dimension was retrieved from. Possible return objects include all sketch
constraint objects that derive from DimensionConstraint and their proxies, FeatureDimension and
FeatureDimensionProxy. The property returns Nothing if the Retrieved property returns False.
Syntax
LinearGeneralDimension.RetrievedFrom() As Object
Property Value
This is a read only property whose value is an Object.
LinearGeneralDimension Object Page 18 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 2008
LinearGeneralDimension.SecondArrowheadInside
Property
Parent Object: LinearGeneralDimension
Description
Read-write property that gets and sets whether the second arrowhead is inside or outside.
Syntax
LinearGeneralDimension.SecondArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.SecondArrowheadPosition
Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the position of the second arrowhead.
Syntax
LinearGeneralDimension.SecondArrowheadPosition() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2015
LinearGeneralDimension Object Page 19 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
LinearGeneralDimension.SecondArrowheadType
Property
Parent Object: LinearGeneralDimension
Description
Read-write property that gets and sets the type of the second arrowhead.
Syntax
LinearGeneralDimension.SecondArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2011
LinearGeneralDimension.SetInspectionDimensionData
Method
Parent Object: LinearGeneralDimension
Description
Method that sets the data associated with an inspection dimension. This method automatically sets the
IsInspectionDimension property to True, if it isn't already.
Syntax
LinearGeneralDimension.SetInspectionDimensionData( [Shape] As InspectionDimensionShapeEnum, [Label] As
String, [Rate] As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum
Optional input InspectionDimensionShapeEnum that specifies the border
shape surrounding the inspection dimension text. Valid values are
kNoInspectionBorder, kAngularEndsInspectionBorder and
kRoundedEndsInspectionBorder. If not specified, kNoInspectionBorder is
used.
This is an optional argument whose default value is 79361.
Label String
Optional input string that specifies the text placed left of the dimension
value. The string can contain symbols specified using the StyleOverride tag.
This is an optional argument whose default value is """".
Rate String Optional input string that specifies the text (typically a percentage value)
placed to the right of the dimension value. The string can contain symbols
LinearGeneralDimension Object Page 20 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
specified using the StyleOverride tag.
This is an optional argument whose default value is """".
Version
Introduced in version 2010
LinearGeneralDimension.ShowAllExtensionLines
Method
Parent Object: LinearGeneralDimension
Description
Method that un-hides all the extension lines associated with this dimension. If there are no hidden extension lines
associated with this dimension, this method does nothing and returns a success.
Syntax
LinearGeneralDimension.ShowAllExtensionLines()
Version
Introduced in version 2011
LinearGeneralDimension.ShowLeader Property
Parent Object: LinearGeneralDimension
Description
Gets and sets whether to display a leader line for the dimension text.
Syntax
LinearGeneralDimension.ShowLeader() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LinearGeneralDimension.Style Property
Parent Object: LinearGeneralDimension
LinearGeneralDimension Object Page 21 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Description
Gets and sets the DimensionStyle associated with the dimension.
Syntax
LinearGeneralDimension.Style() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 11
LinearGeneralDimension.Text Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the DimensionText setting.
Syntax
LinearGeneralDimension.Text() As DimensionText
Property Value
This is a read/write property whose value is a DimensionText.
Version
Introduced in version 11
LinearGeneralDimension.Tolerance Property
Parent Object: LinearGeneralDimension
Description
Property that returns the Tolerance object associated with this dimension.
Syntax
LinearGeneralDimension.Tolerance() As Tolerance
Property Value
This is a read only property whose value is a Tolerance.
LinearGeneralDimension Object Page 22 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Version
Introduced in version 11
LinearGeneralDimension.TolerancePrecision Property
Parent Object: LinearGeneralDimension
Description
Gets and sets the precision of the tolerance text for the dimension.
Syntax
LinearGeneralDimension.TolerancePrecision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2008
LinearGeneralDimension.Type Property
Parent Object: LinearGeneralDimension
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearGeneralDimension.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LinearGeneralDimension.VirtualArcPosition Property
Parent Object: LinearGeneralDimension
LinearGeneralDimension Object Page 23 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
Description
Gets and sets the geometry that defines the position of the virtual arc.
Syntax
LinearGeneralDimension.VirtualArcPosition() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2015
LinearGeneralDimension Object Page 24 of 24
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3E.htm 16/06/2025
LinearHolePlacementDefinition Object
Derived from: HolePlacementDefinition Object
Description
The LinearHolePlacementDefinition object defines the placement of a hole feature with respect to two linear entities.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
DirectionOneReversed
Gets and sets whether the direction of the hole placement with respect to the first reference
entity is reversed.
DirectionTwoReversed
Gets and sets whether the direction of the hole placement with respect to the second
reference entity is reversed.
DistanceOne
Property that returns the parameter controlling the distance of the hole center from the first
reference entity.
DistanceTwo
Property that returns the parameter controlling the distance of the hole center from the
second reference entity.
Parent
Property that returns the parent PartFeature of the definition. This property returns Nothing
in the case where the definition object is created using one of the Create methods on the
HoleFeatures object.
Plane
Property that indicates the plane on which the hole feature is placed. This can be a planar
Face object or a WorkPlane object.
ReferenceEntityOne
Property that indicates the first entity referenced for dimensioning the placement of the hole.
This can only be a linear Edge.
ReferenceEntityTwo
Property that indicates the second entity referenced for dimensioning the placement of the
hole. This can only be a linear Edge.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleFeatures.CreateLinearPlacementDefinition
Samples
Name Description
Hole feature linear
placement
This sample demonstrates the creation of a hole feature using the linear placement
type.
Version
Introduced in version 10
LinearHolePlacementDefinition.Application Property
Parent Object: LinearHolePlacementDefinition
LinearHolePlacementDefinition Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LinearHolePlacementDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LinearHolePlacementDefinition.DirectionOneReversed
Property
Parent Object: LinearHolePlacementDefinition
Description
Gets and sets whether the direction of the hole placement with respect to the first reference entity is reversed.
Syntax
LinearHolePlacementDefinition.DirectionOneReversed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
LinearHolePlacementDefinition.DirectionTwoReversed
Property
Parent Object: LinearHolePlacementDefinition
Description
Gets and sets whether the direction of the hole placement with respect to the second reference entity is reversed.
Syntax
LinearHolePlacementDefinition.DirectionTwoReversed() As Boolean
LinearHolePlacementDefinition Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
LinearHolePlacementDefinition.DistanceOne Property
Parent Object: LinearHolePlacementDefinition
Description
Property that returns the parameter controlling the distance of the hole center from the first reference entity.
Syntax
LinearHolePlacementDefinition.DistanceOne() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 10
LinearHolePlacementDefinition.DistanceTwo Property
Parent Object: LinearHolePlacementDefinition
Description
Property that returns the parameter controlling the distance of the hole center from the second reference entity.
Syntax
LinearHolePlacementDefinition.DistanceTwo() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 10
LinearHolePlacementDefinition Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
LinearHolePlacementDefinition.Parent Property
Parent Object: LinearHolePlacementDefinition
Description
Property that returns the parent PartFeature of the definition. This property returns Nothing in the case where the
definition object is created using one of the Create methods on the HoleFeatures object.
Syntax
LinearHolePlacementDefinition.Parent() As HoleFeature
Property Value
This is a read only property whose value is a HoleFeature.
Version
Introduced in version 10
LinearHolePlacementDefinition.Plane Property
Parent Object: LinearHolePlacementDefinition
Description
Property that indicates the plane on which the hole feature is placed. This can be a planar Face object or a WorkPlane
object.
Syntax
LinearHolePlacementDefinition.Plane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LinearHolePlacementDefinition.ReferenceEntityOne
Property
Parent Object: LinearHolePlacementDefinition
Description
LinearHolePlacementDefinition Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
Property that indicates the first entity referenced for dimensioning the placement of the hole. This can only be a linear
Edge.
Syntax
LinearHolePlacementDefinition.ReferenceEntityOne() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LinearHolePlacementDefinition.ReferenceEntityTwo
Property
Parent Object: LinearHolePlacementDefinition
Description
Property that indicates the second entity referenced for dimensioning the placement of the hole. This can only be a
linear Edge.
Syntax
LinearHolePlacementDefinition.ReferenceEntityTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LinearHolePlacementDefinition.Type Property
Parent Object: LinearHolePlacementDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearHolePlacementDefinition.Type() As ObjectTypeEnum
LinearHolePlacementDefinition Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LinearHolePlacementDefinition Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2944.htm 16/06/2025
LinearModelDimension Object
Derived from: ModelDimension Object
Description
The LinearModelDimension object represents a linear general dimension in a part or assembly.
Methods
Name Description
CenterText Method that centers the dimension text on the dimension line.
Delete Method that deletes the ModelDimension.
GetDisplayGeometry
Method that returns simple linear geometry that represents the display geometry of the annotation.
The result is returned as groups of connected lines (polylines). Groups can optionally be filled with
internal voids.
GetFilledAreaFacetsInfo Returns facets’ coordinates of the filled areas of the annotation.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
CompositeAnnotation
Read-only property that returns the ModelCompositeAnnotation object if this annotation
is a member of it. This returns Nothing if the IsMemberOfCompositeAnnotation returns
False.
Definition
Read-write property that gets and sets the definition associated with this dimension.
When reading this property, the definition returned remains associated to the dimension
and any changes made to the definition will be immediately reflected in the dimension.
HealthStatus Property that returns an enum indicating the current state of the object.
InternalName Gets the internal name (GUID) of the model annotation.
IsMemberOfCompositeAnnotation Returns whether this annotation is a member of a ModelCompositeAnnotation.
IsOwnedByToleranceFeature Returns whether this annotation is owned by a ModelToleranceFeature.
ModelValue Read-only property that gets the dimension value as defined in the model.
Name Read-write property that gets and sets the name of the annotation.
OwnedByToleranceFeature Returns the owning ModelToleranceFeature object.
Parent Read-only property that returns the parent component definition of the object.
TopToleranceFeature Returns the top ModelToleranceFeature object.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets and sets the visibility of the annotation.
Accessed From
LinearModelDimensionProxy.NativeObject, LinearModelDimensions.Add, LinearModelDimensions.Item
Derived Classes
LinearModelDimensionProxy
Version
Introduced in version 2018
LinearModelDimension Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
LinearModelDimension.Application Property
Parent Object: LinearModelDimension
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LinearModelDimension.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2018
LinearModelDimension.AttributeSets Property
Parent Object: LinearModelDimension
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LinearModelDimension.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2018
LinearModelDimension.CenterText Method
Parent Object: LinearModelDimension
Description
Method that centers the dimension text on the dimension line.
Syntax
LinearModelDimension.CenterText()
LinearModelDimension Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Version
Introduced in version 2018
LinearModelDimension.CompositeAnnotation Property
Parent Object: LinearModelDimension
Description
Read-only property that returns the ModelCompositeAnnotation object if this annotation is a member of it. This returns
Nothing if the IsMemberOfCompositeAnnotation returns False.
Syntax
LinearModelDimension.CompositeAnnotation() As ModelCompositeAnnotation
Property Value
This is a read only property whose value is a ModelCompositeAnnotation.
Version
Introduced in version 2018
LinearModelDimension.Definition Property
Parent Object: LinearModelDimension
Description
Read-write property that gets and sets the definition associated with this dimension. When reading this property, the
definition returned remains associated to the dimension and any changes made to the definition will be immediately reflected
in the dimension.
Syntax
LinearModelDimension.Definition() As ModelDimensionDefinition
Property Value
This is a read/write property whose value is a ModelDimensionDefinition.
Version
Introduced in version 2018
LinearModelDimension.Delete Method
Parent Object: LinearModelDimension
Description
LinearModelDimension Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Method that deletes the ModelDimension.
Syntax
LinearModelDimension.Delete()
Version
Introduced in version 2018
LinearModelDimension.GetDisplayGeometry Method
Parent Object: LinearModelDimension
Description
Method that returns simple linear geometry that represents the display geometry of the annotation. The result is returned as
groups of connected lines (polylines). Groups can optionally be filled with internal voids.
Syntax
LinearModelDimension.GetDisplayGeometry( Camera As Camera, GroupCount As Long, PolylinesPerGroup() As Long,
FilledGroups() As Boolean, PolylineCount As Long, PolylineLengths() As Long, VertexCount As Long,
VertexCoordinates() As Double )
Parameters
Name Type Description
Camera Camera
Input Camera object that specifies the view orientation. This can either be a transient Camera
object or that got from View object etc.. And the camera properties can be changed but not
applied.
GroupCount Long
Output Long that indicates the number of groups. A group is a set of related polylines where
there can be one outer and multiple inner polylines. Groups can optionally also be filled.
PolylinesPerGroup Long
Output array of Longs that indicates the number of polylines in each of the groups. The array
size will be GroupCount where each value of this array indicates the number of polylines within
each group.
When reading the polylines within a group, the first polyline is the outer polyline and any
additional closed polylines represent internal voids if the group is filled.
FilledGroups Boolean
Output array of Booleans that indicates which groups are filled. A value of True indicates the
corresponding group is filled. The array size will be GroupCount. If a group is filled, the first
polyline in the group defines the outer loop. Any other polylines for that group represent
internal loops and voids in the fill.
PolylineCount Long Output Long that indicates the total number of polylines.
PolylineLengths Long Output array of Longs that indicates the number of vertices used in each polyline.
VertexCount Long Output Long that indicates the total number of vertices.
VertexCoordinates Double Output array of Doubles that contains the coordinates.
Version
Introduced in version 2018
LinearModelDimension.GetFilledAreaFacetsInfo Method
Parent Object: LinearModelDimension
LinearModelDimension Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Description
Returns facets’ coordinates of the filled areas of the annotation.
Syntax
LinearModelDimension.GetFilledAreaFacetsInfo( Camera As Camera, TextVertexCount As Long, TextFacetCount As
Long, TextVertexCoordinates() As Double, TextVertexIndices() As Long, SymbolVertexCount As Long,
SymbolFacetCount As Long, SymbolVertexCoordinates() As Double, SymbolVertexIndices() As Long )
Parameters
Name Type Description
Camera Camera
Input Camera object that specifies the view orientation. This can either be a transient
Camera object or that got from View object etc.. And the camera properties can be
changed but not applied.
TextVertexCount Long Output Long value that indicates vertex count of filled texts.
TextFacetCount Long Output Long value that indicates facet count of filled texts.
TextVertexCoordinates Double
Output array of Doubles that indicates the vertices coordinates of the filled texts. The
array is a single dimension array containing sequential x, y, z values.
TextVertexIndices Long
Output array of Longs that are used as index values to index into the filled text vertex
coordinate list. The first coordinate in the vertex coordinate list is index 1. Using vertex
indices allows vertex coordinates to be reused by more than one triangle, thus reducing
the overall resources required to define the entire mesh.
SymbolVertexCount Long Output Long value that indicates vertex count of filled symbols.
SymbolFacetCount Long Output Long value that indicates facet count of filled symbols.
SymbolVertexCoordinates Double
Output array of Doubles that indicates the vertices coordinates of the filled symbols. The
array is a single dimension array containing sequential x, y, z values.
SymbolVertexIndices Long
Output array of Longs that are used as index values to index into the filled symbol vertex
coordinate list. The first coordinate in the vertex coordinate list is index 1. Using vertex
indices allows vertex coordinates to be reused by more than one triangle, thus reducing
the overall resources required to define the entire mesh.
Version
Introduced in version 2018
LinearModelDimension.GetReferenceKey Method
Parent Object: LinearModelDimension
Description
Method that generates and returns the reference key for this entity.
Syntax
LinearModelDimension.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context
is created using the CreateKeyContext method of the ReferenceKeyManager object. For all other object
types, the key context argument is not used and is ignored if provided.
LinearModelDimension Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 2018
LinearModelDimension.HealthStatus Property
Parent Object: LinearModelDimension
Description
Property that returns an enum indicating the current state of the object.
Syntax
LinearModelDimension.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2018
LinearModelDimension.InternalName Property
Parent Object: LinearModelDimension
Description
Gets the internal name (GUID) of the model annotation.
Syntax
LinearModelDimension.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2022
LinearModelDimension.IsMemberOfCompositeAnnotation
Property
Parent Object: LinearModelDimension
LinearModelDimension Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Description
Returns whether this annotation is a member of a ModelCompositeAnnotation.
Syntax
LinearModelDimension.IsMemberOfCompositeAnnotation() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimension.IsOwnedByToleranceFeature
Property
Parent Object: LinearModelDimension
Description
Returns whether this annotation is owned by a ModelToleranceFeature.
Syntax
LinearModelDimension.IsOwnedByToleranceFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2019
LinearModelDimension.ModelValue Property
Parent Object: LinearModelDimension
Description
Read-only property that gets the dimension value as defined in the model.
Syntax
LinearModelDimension.ModelValue() As Double
Property Value
This is a read only property whose value is a Double.
LinearModelDimension Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Version
Introduced in version 2018
LinearModelDimension.Name Property
Parent Object: LinearModelDimension
Description
Read-write property that gets and sets the name of the annotation.
Syntax
LinearModelDimension.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2018
LinearModelDimension.OwnedByToleranceFeature
Property
Parent Object: LinearModelDimension
Description
Returns the owning ModelToleranceFeature object.
Syntax
LinearModelDimension.OwnedByToleranceFeature() As ModelToleranceFeature
Property Value
This is a read only property whose value is a ModelToleranceFeature.
Version
Introduced in version 2019
LinearModelDimension.Parent Property
Parent Object: LinearModelDimension
Description
Read-only property that returns the parent component definition of the object.
LinearModelDimension Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
Syntax
LinearModelDimension.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2018
LinearModelDimension.TopToleranceFeature Property
Parent Object: LinearModelDimension
Description
Returns the top ModelToleranceFeature object.
Syntax
LinearModelDimension.TopToleranceFeature() As ModelToleranceFeature
Property Value
This is a read only property whose value is a ModelToleranceFeature.
Version
Introduced in version 2019
LinearModelDimension.Type Property
Parent Object: LinearModelDimension
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearModelDimension.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
LinearModelDimension Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
LinearModelDimension.Visible Property
Parent Object: LinearModelDimension
Description
Gets and sets the visibility of the annotation.
Syntax
LinearModelDimension.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimension Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh423A.htm 16/06/2025
LinearModelDimensionDefinition Object
Derived from: ModelDimensionDefinition Object
Description
LinearModelDimensionDefinition Object.
Methods
Name Description
Copy
Method that creates a copy of this LinearModelDimensionDefinition object. The new
LinearModelDimensionDefinition object is independent of any dimension. It can edited and used as
input to edit an existing dimension or to create a new dimension.
GetInspectionDimensionData
Method that returns the data associated with an inspection dimension. This method returns an error if the
IsInspectionDimension property returns False.
IsValidAnnotationPlane
Method that returns the wheather a planer object is valid to be used as an annotation plane for this model
dimension.
SetInspectionDimensionData
Method that sets the data associated with an inspection dimension. This method automatically sets the
IsInspectionDimension property to True, if it isn’t already.
Properties
Name Description
AnnotationPlane
Read-write property that gets and sets the annotation plane for the dimension. Will return nothing in the
case where the ModelDimensionDefinition object is transient and not associated with a dimension.
AnnotationPlaneDefinition Read-write property that gets and sets the annotation plane definition for the dimension.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
DimensionType
Read-only property that returns the dimension type. Possible values are kAlignedDimensionType,
kHorizontalDimensionType, kVerticalDimensionType, kArcLengthDimensionType,
kSymmetricDimensionType and kDiametricDimensionType.
FirstArrowheadType Read-write property that gets and sets the type of the first arrowhead. This is a style override.
IntentOne Read-write property that gets and sets the first geometry associated with the dimension.
IntentTwo Read-write property that gets and sets the second geometry associated with the dimension.
IsExtensionLineOneVisible Read-write property that gets and sets whether the first extension line is visible.
IsExtensionLineTwoVisible
Read-write property that gets and sets whether the second extension line is visible. This property returns
False and cannot be set to True for linear symmetric dimensions. For linear diametric dimensions, this
property returns False and cannot be set to True.
IsFirstArrowheadInside Read-write property that gets and sets whether the first arrowhead is inside or not.
IsInspectionDimension
Read-write property that gets and sets whether this is an inspection dimension. Inspection dimensions are
used during the quality control process. They are formatted specifically to indicate which dimensions
must be checked before accepting a part. The dimens.
IsModelValueOverridden
Read-write property that gets and sets whether the model value is overridden for the dimension. Setting
the OverrideModelValue property automatically toggles this property to True.
IsOppositeAngleOfArc
Read-write property that gets and sets whether the opposite angle of an arc is dimensioned or not. This is
only applicable when an arc is dimensioned and the value of this property should be ignored in other
cases.
IsSecondArrowheadInside Read-write property that gets and sets whether the second arrowhead is inside or not.
IsValueHidden Read-write property that gets and sets whether to display the dimension value.
OverrideModelValue Read-write property that gets and sets the display value for the dimension.
Parent
Read-only property that returns the parent model annotation that the definition is associated with. This
property will return Nothing in the case where the definition is not associated with any annotation. This is
the case when it’s been created using one of the create definition methods and when it’s been copied from
another definition object.
Precision
Read-write property that gets and sets the number of decimal places displayed for this dimension. Values
are truncated and rounded to the specified precision. Valid range of values is 0 to 8.
SecondArrowheadType
Read-write property that gets and sets the type of the second arrowhead. This is a style override. This
property returns an error and cannot be set for the following dimension types: radius dimensions, diameter
dimensions with the SingleDimensionLine property.
Text
Read-only property that gets the text of the dimension. Properties on the returned ModelAnnotationText
object can be edited to change the displayed text.
LinearModelDimensionDefinition Object Page 1 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
TextPosition Read-write property that controls the position of the dimension text. When being set, the input point will
be projected onto the orientation plane.
Tolerance
Read-only property that returns the Tolerance object associated with this dimension. Methods and
properties on the returned Tolerance object can be used to add/edit tolerance information for the
dimension.
TolerancePrecision
Read-write property that gets and sets the number of decimal places displayed for this dimension
tolerance. Values are truncated and rounded to the specified precision. Valid range of values is 0 to 8.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LinearModelDimensionDefinition.Copy, LinearModelDimensions.CreateDefinition
Version
Introduced in version 2018
LinearModelDimensionDefinition.AnnotationPlane Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the annotation plane for the dimension. Will return nothing in the case where the
ModelDimensionDefinition object is transient and not associated with a dimension.
Syntax
LinearModelDimensionDefinition.AnnotationPlane() As AnnotationPlane
Property Value
This is a read/write property whose value is an AnnotationPlane.
Version
Introduced in version 2018
LinearModelDimensionDefinition.AnnotationPlaneDefinition
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the annotation plane definition for the dimension.
Syntax
LinearModelDimensionDefinition.AnnotationPlaneDefinition() As AnnotationPlaneDefinition
Property Value
This is a read/write property whose value is an AnnotationPlaneDefinition.
Version
Introduced in version 2018
LinearModelDimensionDefinition Object Page 2 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
LinearModelDimensionDefinition.Application Property
Parent Object: LinearModelDimensionDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Syntax
LinearModelDimensionDefinition.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2018
LinearModelDimensionDefinition.Copy Method
Parent Object: LinearModelDimensionDefinition
Description
Method that creates a copy of this LinearModelDimensionDefinition object. The new LinearModelDimensionDefinition object is
independent of any dimension. It can edited and used as input to edit an existing dimension or to create a new dimension.
Syntax
LinearModelDimensionDefinition.Copy() As LinearModelDimensionDefinition
Version
Introduced in version 2018
LinearModelDimensionDefinition.DimensionType Property
Parent Object: LinearModelDimensionDefinition
Description
Read-only property that returns the dimension type. Possible values are kAlignedDimensionType, kHorizontalDimensionType,
kVerticalDimensionType, kArcLengthDimensionType, kSymmetricDimensionType and kDiametricDimensionType.
Syntax
LinearModelDimensionDefinition.DimensionType() As DimensionTypeEnum
Property Value
This is a read only property whose value is a DimensionTypeEnum.
Version
Introduced in version 2018
LinearModelDimensionDefinition Object Page 3 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
LinearModelDimensionDefinition.FirstArrowheadType
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the type of the first arrowhead. This is a style override.
Syntax
LinearModelDimensionDefinition.FirstArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2018
LinearModelDimensionDefinition.GetInspectionDimensionData
Method
Parent Object: LinearModelDimensionDefinition
Description
Method that returns the data associated with an inspection dimension. This method returns an error if the IsInspectionDimension
property returns False.
Syntax
LinearModelDimensionDefinition.GetInspectionDimensionData( Shape As InspectionDimensionShapeEnum, Label As String, Rate
As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum
Output InspectionDimensionShapeEnum that indicates the border shape surrounding the
inspection dimension text. Valid return values are kNoInspectionBorder,
kAngularEndsInspectionBorder and kRoundedEndsInspectionBorder.
Label String
Output string that returns the text placed left of the dimension value. The string can contain
symbols specified using the StyleOverride tag. For instance, it can contain “<StyleOverride
Font='AIGDT'>m</StyleOverride>Hi They'WithI donno p” to specify .
Rate String
Output string that returns the text (typically a percentage value) placed to the right of the
dimension value. The string can contain symbols specified using the StyleOverride tag. For
instance, it can contain “<'StyleOverride> Font='AIGDT'>m</StyleOverride>” to specify .
Version
Introduced in version 2018
LinearModelDimensionDefinition.IntentOne Property
Parent Object: LinearModelDimensionDefinition
LinearModelDimensionDefinition Object Page 4 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Description
Read-write property that gets and sets the first geometry associated with the dimension.
Syntax
LinearModelDimensionDefinition.IntentOne() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IntentTwo Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the second geometry associated with the dimension.
Syntax
LinearModelDimensionDefinition.IntentTwo() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsExtensionLineOneVisible
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether the first extension line is visible.
Syntax
LinearModelDimensionDefinition.IsExtensionLineOneVisible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition Object Page 5 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
LinearModelDimensionDefinition.IsExtensionLineTwoVisible
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether the second extension line is visible. This property returns False and cannot be set to True
for linear symmetric dimensions. For linear diametric dimensions, this property returns False and cannot be set to True.
Syntax
LinearModelDimensionDefinition.IsExtensionLineTwoVisible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsFirstArrowheadInside
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether the first arrowhead is inside or not.
Syntax
LinearModelDimensionDefinition.IsFirstArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsInspectionDimension
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether this is an inspection dimension. Inspection dimensions are used during the quality
control process. They are formatted specifically to indicate which dimensions must be checked before accepting a part. The dimens.
Syntax
LinearModelDimensionDefinition.IsInspectionDimension() As Boolean
LinearModelDimensionDefinition Object Page 6 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsModelValueOverridden
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether the model value is overridden for the dimension. Setting the OverrideModelValue
property automatically toggles this property to True.
Syntax
LinearModelDimensionDefinition.IsModelValueOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsOppositeAngleOfArc
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether the opposite angle of an arc is dimensioned or not. This is only applicable when an arc is
dimensioned and the value of this property should be ignored in other cases.
Syntax
LinearModelDimensionDefinition.IsOppositeAngleOfArc() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsSecondArrowheadInside
Property
Parent Object: LinearModelDimensionDefinition
LinearModelDimensionDefinition Object Page 7 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Description
Read-write property that gets and sets whether the second arrowhead is inside or not.
Syntax
LinearModelDimensionDefinition.IsSecondArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsValidAnnotationPlane
Method
Parent Object: LinearModelDimensionDefinition
Description
Method that returns the wheather a planer object is valid to be used as an annotation plane for this model dimension.
Syntax
LinearModelDimensionDefinition.IsValidAnnotationPlane( pPlane As Object ) As Boolean
Parameters
Name Type Description
pPlane Object
Input planar object to check if it can be an annotation plane for the model dimension. This can be a Face or WorkPlane
object.
Version
Introduced in version 2018
LinearModelDimensionDefinition.IsValueHidden Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets whether to display the dimension value.
Syntax
LinearModelDimensionDefinition.IsValueHidden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LinearModelDimensionDefinition Object Page 8 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Version
Introduced in version 2018
LinearModelDimensionDefinition.OverrideModelValue
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the display value for the dimension.
Syntax
LinearModelDimensionDefinition.OverrideModelValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2018
LinearModelDimensionDefinition.Parent Property
Parent Object: LinearModelDimensionDefinition
Description
Read-only property that returns the parent model annotation that the definition is associated with. This property will return Nothing in
the case where the definition is not associated with any annotation. This is the case when it’s been created using one of the create
definition methods and when it’s been copied from another definition object.
Syntax
LinearModelDimensionDefinition.Parent() As ModelDimension
Property Value
This is a read only property whose value is a ModelDimension.
Version
Introduced in version 2018
LinearModelDimensionDefinition.Precision Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the number of decimal places displayed for this dimension. Values are truncated and rounded to
the specified precision. Valid range of values is 0 to 8.
LinearModelDimensionDefinition Object Page 9 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Syntax
LinearModelDimensionDefinition.Precision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2018
LinearModelDimensionDefinition.SecondArrowheadType
Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the type of the second arrowhead. This is a style override. This property returns an error and
cannot be set for the following dimension types: radius dimensions, diameter dimensions with the SingleDimensionLine property.
Syntax
LinearModelDimensionDefinition.SecondArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2018
LinearModelDimensionDefinition.SetInspectionDimensionData
Method
Parent Object: LinearModelDimensionDefinition
Description
Method that sets the data associated with an inspection dimension. This method automatically sets the IsInspectionDimension property
to True, if it isn’t already.
Syntax
LinearModelDimensionDefinition.SetInspectionDimensionData( [Shape] As InspectionDimensionShapeEnum, [Label] As String,
[Rate] As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum
Optional input InspectionDimensionShapeEnum that specifies the border shape surrounding
the inspection dimension text. Valid values are kNoInspectionBorder,
kAngularEndsInspectionBorder and kRoundedEndsInspectionBorder. If not specified,
kNoInspectionBorder is used.
This is an optional argument whose default value is 79361.
Label String
LinearModelDimensionDefinition Object Page 10 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Optional input string that specifies the text placed left of the dimension value. The string can
contain symbols specified using the StyleOverride tag. For instance, it can contain
“<StyleOverride Font='AIGDT'>m</StyleOverride>” to specify .
This is an optional argument whose default value is """".
Rate String
Optional input string that specifies the text (typically a percentage value) placed to the right of
the dimension value. The string can contain symbols specified using the StyleOverride
tag. For instance, it can contain “<StyleOverride Font='AIGDT'>m</StyleOverride>” to
specify .
This is an optional argument whose default value is """".
Version
Introduced in version 2018
LinearModelDimensionDefinition.Text Property
Parent Object: LinearModelDimensionDefinition
Description
Read-only property that gets the text of the dimension. Properties on the returned ModelAnnotationText object can be edited to change
the displayed text.
Syntax
LinearModelDimensionDefinition.Text() As ModelAnnotationText
Property Value
This is a read only property whose value is a ModelAnnotationText.
Version
Introduced in version 2018
LinearModelDimensionDefinition.TextPosition Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that controls the position of the dimension text. When being set, the input point will be projected onto the
orientation plane.
Syntax
LinearModelDimensionDefinition.TextPosition() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2018
LinearModelDimensionDefinition Object Page 11 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
LinearModelDimensionDefinition.Tolerance Property
Parent Object: LinearModelDimensionDefinition
Description
Read-only property that returns the Tolerance object associated with this dimension. Methods and properties on the returned Tolerance
object can be used to add/edit tolerance information for the dimension.
Syntax
LinearModelDimensionDefinition.Tolerance() As Tolerance
Property Value
This is a read only property whose value is a Tolerance.
Version
Introduced in version 2018
LinearModelDimensionDefinition.TolerancePrecision Property
Parent Object: LinearModelDimensionDefinition
Description
Read-write property that gets and sets the number of decimal places displayed for this dimension tolerance. Values are truncated and
rounded to the specified precision. Valid range of values is 0 to 8.
Syntax
LinearModelDimensionDefinition.TolerancePrecision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2018
LinearModelDimensionDefinition.Type Property
Parent Object: LinearModelDimensionDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearModelDimensionDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LinearModelDimensionDefinition Object Page 12 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
Version
Introduced in version 2018
LinearModelDimensionDefinition Object Page 13 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6226.htm 16/06/2025
LinearModelDimensionProxy Object
Derived from: LinearModelDimension Object
Description
LinearModelDimensionProxy Object.
Methods
Name Description
CenterText Method that centers the dimension text on the dimension line.
Delete Method that deletes the ModelDimension.
GetDisplayGeometry
Method that returns simple linear geometry that represents the display geometry of the annotation. The result is
returned as groups of connected lines (polylines). Groups can optionally be filled with internal voids.
GetFilledAreaFacetsInfo Returns facets’ coordinates of the filled areas of the annotation.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
CompositeAnnotation
Read-only property that returns the ModelCompositeAnnotation object if this annotation is a member
of it. This returns Nothing if the IsMemberOfCompositeAnnotation returns False.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Definition
Read-write property that gets and sets the definition associated with this dimension. When reading
this property, the definition returned remains associated to the dimension and any changes made to
the definition will be immediately reflected in the dimension.
HealthStatus Property that returns an enum indicating the current state of the object.
InternalName Gets the internal name (GUID) of the model annotation.
IsMemberOfCompositeAnnotation Returns whether this annotation is a member of a ModelCompositeAnnotation.
IsOwnedByToleranceFeature Returns whether this annotation is owned by a ModelToleranceFeature.
ModelValue Read-only property that gets the dimension value as defined in the model.
Name Read-write property that gets and sets the name of the annotation.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OwnedByToleranceFeature Returns the owning ModelToleranceFeature object.
Parent Read-only property that returns the parent component definition of the object.
TopToleranceFeature Returns the top ModelToleranceFeature object.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets and sets the visibility of the annotation.
Version
Introduced in version 2018
LinearModelDimensionProxy.Application Property
Parent Object: LinearModelDimensionProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
LinearModelDimensionProxy Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Syntax
LinearModelDimensionProxy.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2018
LinearModelDimensionProxy.AttributeSets Property
Parent Object: LinearModelDimensionProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LinearModelDimensionProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2018
LinearModelDimensionProxy.CenterText Method
Parent Object: LinearModelDimensionProxy
Description
Method that centers the dimension text on the dimension line.
Syntax
LinearModelDimensionProxy.CenterText()
Version
Introduced in version 2018
LinearModelDimensionProxy.CompositeAnnotation Property
Parent Object: LinearModelDimensionProxy
Description
Read-only property that returns the ModelCompositeAnnotation object if this annotation is a member of it. This returns Nothing if the
IsMemberOfCompositeAnnotation returns False.
LinearModelDimensionProxy Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Syntax
LinearModelDimensionProxy.CompositeAnnotation() As ModelCompositeAnnotation
Property Value
This is a read only property whose value is a ModelCompositeAnnotation.
Version
Introduced in version 2018
LinearModelDimensionProxy.ContainingOccurrence Property
Parent Object: LinearModelDimensionProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is the
containing occurrence.
Syntax
LinearModelDimensionProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2018
LinearModelDimensionProxy.Definition Property
Parent Object: LinearModelDimensionProxy
Description
Read-write property that gets and sets the definition associated with this dimension. When reading this property, the definition returned
remains associated to the dimension and any changes made to the definition will be immediately reflected in the dimension.
Syntax
LinearModelDimensionProxy.Definition() As ModelDimensionDefinition
Property Value
This is a read/write property whose value is a ModelDimensionDefinition.
Version
Introduced in version 2018
LinearModelDimensionProxy.Delete Method
Parent Object: LinearModelDimensionProxy
LinearModelDimensionProxy Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Description
Method that deletes the ModelDimension.
Syntax
LinearModelDimensionProxy.Delete()
Version
Introduced in version 2018
LinearModelDimensionProxy.GetDisplayGeometry Method
Parent Object: LinearModelDimensionProxy
Description
Method that returns simple linear geometry that represents the display geometry of the annotation. The result is returned as groups of
connected lines (polylines). Groups can optionally be filled with internal voids.
Syntax
LinearModelDimensionProxy.GetDisplayGeometry( Camera As Camera, GroupCount As Long, PolylinesPerGroup() As Long,
FilledGroups() As Boolean, PolylineCount As Long, PolylineLengths() As Long, VertexCount As Long, VertexCoordinates() As
Double )
Parameters
Name Type Description
Camera Camera
Input Camera object that specifies the view orientation. This can either be a transient Camera object or that
got from View object etc.. And the camera properties can be changed but not applied.
GroupCount Long
Output Long that indicates the number of groups. A group is a set of related polylines where there can be
one outer and multiple inner polylines. Groups can optionally also be filled.
PolylinesPerGroup Long
Output array of Longs that indicates the number of polylines in each of the groups. The array size will be
GroupCount where each value of this array indicates the number of polylines within each group.
When reading the polylines within a group, the first polyline is the outer polyline and any additional closed
polylines represent internal voids if the group is filled.
FilledGroups Boolean
Output array of Booleans that indicates which groups are filled. A value of True indicates the corresponding
group is filled. The array size will be GroupCount. If a group is filled, the first polyline in the group defines
the outer loop. Any other polylines for that group represent internal loops and voids in the fill.
PolylineCount Long Output Long that indicates the total number of polylines.
PolylineLengths Long Output array of Longs that indicates the number of vertices used in each polyline.
VertexCount Long Output Long that indicates the total number of vertices.
VertexCoordinates Double Output array of Doubles that contains the coordinates.
Version
Introduced in version 2018
LinearModelDimensionProxy.GetFilledAreaFacetsInfo Method
Parent Object: LinearModelDimensionProxy
Description
Returns facets’ coordinates of the filled areas of the annotation.
LinearModelDimensionProxy Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Syntax
LinearModelDimensionProxy.GetFilledAreaFacetsInfo( Camera As Camera, TextVertexCount As Long, TextFacetCount As Long,
TextVertexCoordinates() As Double, TextVertexIndices() As Long, SymbolVertexCount As Long, SymbolFacetCount As Long,
SymbolVertexCoordinates() As Double, SymbolVertexIndices() As Long )
Parameters
Name Type Description
Camera Camera
Input Camera object that specifies the view orientation. This can either be a transient Camera object
or that got from View object etc.. And the camera properties can be changed but not applied.
TextVertexCount Long Output Long value that indicates vertex count of filled texts.
TextFacetCount Long Output Long value that indicates facet count of filled texts.
TextVertexCoordinates Double
Output array of Doubles that indicates the vertices coordinates of the filled texts. The array is a single
dimension array containing sequential x, y, z values.
TextVertexIndices Long
Output array of Longs that are used as index values to index into the filled text vertex coordinate list.
The first coordinate in the vertex coordinate list is index 1. Using vertex indices allows vertex
coordinates to be reused by more than one triangle, thus reducing the overall resources required to
define the entire mesh.
SymbolVertexCount Long Output Long value that indicates vertex count of filled symbols.
SymbolFacetCount Long Output Long value that indicates facet count of filled symbols.
SymbolVertexCoordinates Double
Output array of Doubles that indicates the vertices coordinates of the filled symbols. The array is a
single dimension array containing sequential x, y, z values.
SymbolVertexIndices Long
Output array of Longs that are used as index values to index into the filled symbol vertex coordinate
list. The first coordinate in the vertex coordinate list is index 1. Using vertex indices allows vertex
coordinates to be reused by more than one triangle, thus reducing the overall resources required to
define the entire mesh.
Version
Introduced in version 2018
LinearModelDimensionProxy.GetReferenceKey Method
Parent Object: LinearModelDimensionProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
LinearModelDimensionProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities
(and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key context argument
is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2018
LinearModelDimensionProxy.HealthStatus Property
LinearModelDimensionProxy Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Parent Object: LinearModelDimensionProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
LinearModelDimensionProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2018
LinearModelDimensionProxy.InternalName Property
Parent Object: LinearModelDimensionProxy
Description
Gets the internal name (GUID) of the model annotation.
Syntax
LinearModelDimensionProxy.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2022
LinearModelDimensionProxy.IsMemberOfCompositeAnnotation
Property
Parent Object: LinearModelDimensionProxy
Description
Returns whether this annotation is a member of a ModelCompositeAnnotation.
Syntax
LinearModelDimensionProxy.IsMemberOfCompositeAnnotation() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionProxy Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
LinearModelDimensionProxy.IsOwnedByToleranceFeature
Property
Parent Object: LinearModelDimensionProxy
Description
Returns whether this annotation is owned by a ModelToleranceFeature.
Syntax
LinearModelDimensionProxy.IsOwnedByToleranceFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2019
LinearModelDimensionProxy.ModelValue Property
Parent Object: LinearModelDimensionProxy
Description
Read-only property that gets the dimension value as defined in the model.
Syntax
LinearModelDimensionProxy.ModelValue() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2018
LinearModelDimensionProxy.Name Property
Parent Object: LinearModelDimensionProxy
Description
Read-write property that gets and sets the name of the annotation.
Syntax
LinearModelDimensionProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
LinearModelDimensionProxy Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Version
Introduced in version 2018
LinearModelDimensionProxy.NativeObject Property
Parent Object: LinearModelDimensionProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
LinearModelDimensionProxy.NativeObject() As LinearModelDimension
Property Value
This is a read only property whose value is a LinearModelDimension.
Version
Introduced in version 2018
LinearModelDimensionProxy.OwnedByToleranceFeature
Property
Parent Object: LinearModelDimensionProxy
Description
Returns the owning ModelToleranceFeature object.
Syntax
LinearModelDimensionProxy.OwnedByToleranceFeature() As ModelToleranceFeature
Property Value
This is a read only property whose value is a ModelToleranceFeature.
Version
Introduced in version 2019
LinearModelDimensionProxy.Parent Property
Parent Object: LinearModelDimensionProxy
Description
Read-only property that returns the parent component definition of the object.
Syntax
LinearModelDimensionProxy.Parent() As ComponentDefinition
LinearModelDimensionProxy Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2018
LinearModelDimensionProxy.TopToleranceFeature Property
Parent Object: LinearModelDimensionProxy
Description
Returns the top ModelToleranceFeature object.
Syntax
LinearModelDimensionProxy.TopToleranceFeature() As ModelToleranceFeature
Property Value
This is a read only property whose value is a ModelToleranceFeature.
Version
Introduced in version 2019
LinearModelDimensionProxy.Type Property
Parent Object: LinearModelDimensionProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearModelDimensionProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
LinearModelDimensionProxy.Visible Property
Parent Object: LinearModelDimensionProxy
Description
Gets and sets the visibility of the annotation.
LinearModelDimensionProxy Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
Syntax
LinearModelDimensionProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LinearModelDimensionProxy Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh854E.htm 16/06/2025
LinearModelDimensions Object
Description
The LinearModelDimensions collection object provides access to all of the linear model
dimensions in a part or assembly and provides functionality to create new linear dimensions.
Methods
Name Description
Add Method that creates a linear dimension.
CreateDefinition
Method that creates a linear dimension definition. This is a not a linear
dimension but an object that encapsulates all of the information that defines a
dimension. You use the methods an properties of this object to define the
dimension you want to create and then provide it as input to the Add method.
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
ModelDimensions.LinearModelDimensions
Version
Introduced in version 2018
LinearModelDimensions.Add Method
Parent Object: LinearModelDimensions
Description
LinearModelDimensions Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
Method that creates a linear dimension.
Syntax
LinearModelDimensions.Add( Definition As LinearModelDimensionDefinition ) As
LinearModelDimension
Parameters
Name Type Description
Definition LinearModelDimensionDefinition
Input LinearModelDimensionDefinition object that
defines the dimension to be created.
Version
Introduced in version 2018
LinearModelDimensions.Application
Property
Parent Object: LinearModelDimensions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LinearModelDimensions.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2018
LinearModelDimensions.Count Property
LinearModelDimensions Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
Parent Object: LinearModelDimensions
Description
Property that returns the number of items in this collection.
Syntax
LinearModelDimensions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2018
LinearModelDimensions.CreateDefinition
Method
Parent Object: LinearModelDimensions
Description
Method that creates a linear dimension definition. This is a not a linear dimension but an object
that encapsulates all of the information that defines a dimension. You use the methods an
properties of this object to define the dimension you want to create and then provide it as input to
the Add method.
Syntax
LinearModelDimensions.CreateDefinition( IntentOne As GeometryIntent, IntentTwo As
GeometryIntent, AnnotationPlaneDefinition As AnnotationPlaneDefinition, TextPosition As
Point, DimensionType As DimensionTypeEnum ) As LinearModelDimensionDefinition
Parameters
Name Type Description
IntentOne GeometryIntent
Input GeometryIntent object that defines
the first geometry to dimension to. The
GeometryIntent object can be created
using the CreateGeometryIntent method
LinearModelDimensions Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
on the PartComponentDefinition or
AssemblyComponentDefinition object.
Valid entity combinations for the
IntentOne and IntentTwo arguments are:
• Two points.
• Two linear entities. (Non-parallel
lines will result in an angular
dimension.)
• A linear entity and a point.
• A point and a linear entity.
• One linear entity.
• One circular entity (with
DimensionType set to
kAlignedDimensionType for chord
length and
kArcLengthDimensionType for arc
length)
IntentTwo GeometryIntent
Input entity that specifies the second
geometry to dimension. In the cases
where there is only one entity needed this
argument should be set to Nothing (null);
AnnotationPlaneDefinition AnnotationPlaneDefinition
Input AnnotationPlaneDefinition object
that defines the annotation plane the
annotation will be created on. An existing
annotation plane can be specified by using
the AnnotationPlaneDefinition object
associated with the existing annotation
plane.
TextPosition Point
Input Point object that specifies the
position of the dimension text. The point
will be projected onto the orientation
plane.
DimensionType DimensionTypeEnum
LinearModelDimensions Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
Input DimensionTypeEnum that specifies
the linear dimension type. Valid values
(based on the input intents) are
kAlignedDimensionType,
kHorizontalDimensionType,
kVerticalDimensionType,
kArcLengthDimensionType,
kSymmetricDimensionType,
kDiametricDimensionType, and
kArcLengthDimensionType
An error will occur if the specified type is
invalid for the input intents. For instance,
kSymmetricDimensionType &
kDiametricDimensionType are valid only
when two intents are providedone intent is
provided as input. the first intent (an
edge) is
specified. kArcLengthDimensionType is
only valid if two intents are supplied and
they represent end points of an arc or a
single intent is supplied and it represents
an arc.
Version
Introduced in version 2018
LinearModelDimensions.Item Property
Parent Object: LinearModelDimensions
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
Syntax
LinearModelDimensions.Item( Index As Variant ) As LinearModelDimension
Property Value
This is a read only property whose value is a LinearModelDimension.
LinearModelDimensions Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the object to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string
indicating the dimension name. If an out of range index or a name of a nonexistent
dimension is provided, an error occurs.
Version
Introduced in version 2018
LinearModelDimensions.Type Property
Parent Object: LinearModelDimensions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinearModelDimensions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
LinearModelDimensions Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA4AD.htm 16/06/2025
LineGraphics Object
Derived from: GraphicsPrimitive Object
Description
The LineGraphics object defines one or more disconnected lines.
Methods
Name Description
Delete Method that deletes the graphics primitive.
GetCustomLineType
Method that returns information regarding the custom line type in
use. The method returns a failure if the return value of the LineType
property is not kCustomLineType.
GetTransformBehavior
Returns the current view transformation settings (e.g. pixel scaling
and front facing).
GetViewSpaceAnchor
Method that gets the anchor information of the graphics object. This
method returns an error if the 'Anchored' property returns False.
RemoveViewSpaceAnchor
The RemoveViewSpaceAnchor method removes the view space
anchor from the object, and sets the Anchored property to false.
SetCustomLineType
Method that sets a custom line type to the curve from the
specified .lin file. The method automatically changes the value of
LineType property to kCustomLineType.
SetTransformBehavior
Sets the view transformation settings (e.g. pixel scaling and front
facing).
SetViewSpaceAnchor
Method that anchors the graphics object at the specified point in view
space. The Anchored property is set to True.
Properties
Name Description
Anchored
Property that indicates whether this graphics primitive is anchored in view
space. This property can only be set to False. The Anchored property is
automatically set to True by the SetViewSpaceAnchor method.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BurnThrough
Read-write property that specifies whether or not graphics are always
visible even if they are blocked by other objects.
ColorBinding Gets and sets how colors are defined for the line.
ColorIndexSet
Gets and sets the GraphicsIndexSet that defines the indices within the
GraphicsColorSet to use.
ColorSet Gets and sets the GraphicsColorSet associated with the set.
CoordinateIndexSet
LineGraphics Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Gets and sets the GraphicsCoordinateIndexSet that defines the indices
within the coordinate set to use for the lines of the set.
CoordinateSet Gets and sets the GraphicsCoordinateSet associated with the set.
DepthPriority
Read-write property that allows you to specify a display priority to the line
graphics.
Id Read-only property that returns the Id of the object.
LineDefinitionSpace Gets and sets the LineDefinitionSpace applied to this line graphics.
LineScale Gets and sets the LineScale applied to this line graphics.
LineType
Property that gets and sets the line type override. Setting the property to
kDefaultLineType restores the default line type. If the property returns
kCustomLineType, the GetCustomLineType method can be used to get
further details about the line type.
LineWeight Gets and sets the LineWeight applied to this line graphics.
Parent
Property that returns the parent object from whom this object can logically
be reached.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsNode.AddLineGraphics, GraphicsNodeProxy.AddLineGraphics
Samples
Name Description
Client
Graphics -
Draw
Range
Box
This sample demonstrates the use of client graphics to draw the range box of selected
entities.
Client
Graphics -
Line
This sample demonstrates the creation of custom graphics using LineGraphics and
LineStripGraphics. The same set of coordinate data is used for both types of graphics.
Line graphics use two coordinates to define a line, and then the next two coordinates
to define the next line, and so on through the defined coordinates. For the data
provided, this results in gaps in the drawn curve. Line strips use the first two
coordinates to define the first line and then the last point of the first line becomes the
first point of the second line and the next coordinate is used as the end point of the
second line. This results in the set of points being connected by a continuous set of
lines, drawing a continuous curve. This sample also demonstrates two methods of
defining the color for client graphics. In one case it uses an existing appearance asset,
and in the other, it explicitly defines a color and assigns it. To use the sample you
need to have an assembly or part document open. The program has two behaviors: the
first time it is run it will draw the graphics. The second time it is run it deletes the
previously drawn graphics.
LineGraphics Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Version
Introduced in version 5
LineGraphics.Anchored Property
Parent Object: LineGraphics
Description
Property that indicates whether this graphics primitive is anchored in view space. This property
can only be set to False. The Anchored property is automatically set to True by the
SetViewSpaceAnchor method.
Syntax
LineGraphics.Anchored() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
LineGraphics.Application Property
Parent Object: LineGraphics
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LineGraphics.Application() As Object
Property Value
This is a read only property whose value is an Object.
LineGraphics Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Version
Introduced in version 5
LineGraphics.BurnThrough Property
Parent Object: LineGraphics
Description
Read-write property that specifies whether or not graphics are always visible even if they are
blocked by other objects.
Syntax
LineGraphics.BurnThrough() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
LineGraphics.ColorBinding Property
Parent Object: LineGraphics
Description
Gets and sets how colors are defined for the line.
Syntax
LineGraphics.ColorBinding() As ColorBindingEnum
Property Value
This is a read/write property whose value is a ColorBindingEnum.
LineGraphics Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Version
Introduced in version 5
LineGraphics.ColorIndexSet Property
Parent Object: LineGraphics
Description
Gets and sets the GraphicsIndexSet that defines the indices within the GraphicsColorSet to use.
Syntax
LineGraphics.ColorIndexSet() As GraphicsIndexSet
Property Value
This is a read/write property whose value is a GraphicsIndexSet.
Version
Introduced in version 5
LineGraphics.ColorSet Property
Parent Object: LineGraphics
Description
Gets and sets the GraphicsColorSet associated with the set.
Syntax
LineGraphics.ColorSet() As GraphicsColorSet
Property Value
This is a read/write property whose value is a GraphicsColorSet.
LineGraphics Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Version
Introduced in version 5
LineGraphics.CoordinateIndexSet Property
Parent Object: LineGraphics
Description
Gets and sets the GraphicsCoordinateIndexSet that defines the indices within the coordinate set to
use for the lines of the set.
Syntax
LineGraphics.CoordinateIndexSet() As GraphicsIndexSet
Property Value
This is a read/write property whose value is a GraphicsIndexSet.
Version
Introduced in version 5
LineGraphics.CoordinateSet Property
Parent Object: LineGraphics
Description
Gets and sets the GraphicsCoordinateSet associated with the set.
Syntax
LineGraphics.CoordinateSet() As GraphicsCoordinateSet
Property Value
This is a read/write property whose value is a GraphicsCoordinateSet.
LineGraphics Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Samples
Name Description
Client Graphics -
Draw Range Box
This sample demonstrates the use of client graphics to draw the range box
of selected entities.
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is
used for both types of graphics. Line graphics use two coordinates to define
a line, and then the next two coordinates to define the next line, and so on
through the defined coordinates. For the data provided, this results in gaps
in the drawn curve. Line strips use the first two coordinates to define the
first line and then the last point of the first line becomes the first point of the
second line and the next coordinate is used as the end point of the second
line. This results in the set of points being connected by a continuous set of
lines, drawing a continuous curve. This sample also demonstrates two
methods of defining the color for client graphics. In one case it uses an
existing appearance asset, and in the other, it explicitly defines a color and
assigns it. To use the sample you need to have an assembly or part
document open. The program has two behaviors: the first time it is run it
will draw the graphics. The second time it is run it deletes the previously
drawn graphics.
InteractionGraphics The sample creates overlay graphics.
Version
Introduced in version 5
LineGraphics.Delete Method
Parent Object: LineGraphics
Description
Method that deletes the graphics primitive.
Syntax
LineGraphics.Delete()
Version
Introduced in version 5
LineGraphics Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
LineGraphics.DepthPriority Property
Parent Object: LineGraphics
Description
Read-write property that allows you to specify a display priority to the line graphics.
Syntax
LineGraphics.DepthPriority() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 5
LineGraphics.GetCustomLineType Method
Parent Object: LineGraphics
Description
Method that returns information regarding the custom line type in use. The method returns a
failure if the return value of the LineType property is not kCustomLineType.
Syntax
LineGraphics.GetCustomLineType( LineTypeName As String, LineTypeDescription As String )
Parameters
Name Type Description
LineTypeName String Output string that returns the name of the line type.
LineTypeDescription String Output string that returns the description of the line type.
Version
Introduced in version 2008
LineGraphics Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
LineGraphics.GetTransformBehavior
Method
Parent Object: LineGraphics
Description
Returns the current view transformation settings (e.g. pixel scaling and front facing).
Syntax
LineGraphics.GetTransformBehavior( TextAnchor As Point, BehaviorType As
DisplayTransformBehaviorEnum, PixelScale As Double )
Parameters
Name Type Description
TextAnchor Point
Output Point that returns the point that is
unaffected by the transform behavior.
BehaviorType DisplayTransformBehaviorEnum
Output DisplayTransformBehaviorEnum that
returns the transform behaviors currently being
used.
PixelScale Double
Output Double that returns the number of pixels
that are used to draw one model unit when pixel
scaling is used.
Version
Introduced in version 5
LineGraphics.GetViewSpaceAnchor Method
Parent Object: LineGraphics
Description
Method that gets the anchor information of the graphics object. This method returns an error if the
'Anchored' property returns False.
Syntax
LineGraphics.GetViewSpaceAnchor( Origin As Point, Anchor As Point2d, AnchorRelativeTo
As ViewLayoutEnum )
LineGraphics Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Parameters
Name Type Description
Origin Point Output that specifies the origin of the coordinate system.
Anchor Point2d
Output that indicates which point is unaffected by the
transform behavior.
AnchorRelativeTo ViewLayoutEnum
Output constant indicating which corner of the view the
anchor is relative to.
Version
Introduced in version 9
LineGraphics.Id Property
Parent Object: LineGraphics
Description
Read-only property that returns the Id of the object.
Syntax
LineGraphics.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2017
LineGraphics.LineDefinitionSpace Property
Parent Object: LineGraphics
Description
Gets and sets the LineDefinitionSpace applied to this line graphics.
LineGraphics Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Syntax
LineGraphics.LineDefinitionSpace() As LineDefinitionSpaceEnum
Property Value
This is a read/write property whose value is a LineDefinitionSpaceEnum.
Version
Introduced in version 2008
LineGraphics.LineScale Property
Parent Object: LineGraphics
Description
Gets and sets the LineScale applied to this line graphics.
Syntax
LineGraphics.LineScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LineGraphics.LineType Property
Parent Object: LineGraphics
Description
Property that gets and sets the line type override. Setting the property to kDefaultLineType
restores the default line type. If the property returns kCustomLineType, the GetCustomLineType
method can be used to get further details about the line type.
LineGraphics Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Syntax
LineGraphics.LineType() As LineTypeEnum
Property Value
This is a read/write property whose value is a LineTypeEnum.
Version
Introduced in version 2008
LineGraphics.LineWeight Property
Parent Object: LineGraphics
Description
Gets and sets the LineWeight applied to this line graphics.
Syntax
LineGraphics.LineWeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LineGraphics.Parent Property
Parent Object: LineGraphics
Description
Property that returns the parent object from whom this object can logically be reached.
LineGraphics Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Syntax
LineGraphics.Parent() As GraphicsNode
Property Value
This is a read only property whose value is a GraphicsNode.
Version
Introduced in version 5
LineGraphics.RangeBox Property
Parent Object: LineGraphics
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LineGraphics.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
LineGraphics.RemoveViewSpaceAnchor
Method
Parent Object: LineGraphics
Description
The RemoveViewSpaceAnchor method removes the view space anchor from the object, and sets
the Anchored property to false.
LineGraphics Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Syntax
LineGraphics.RemoveViewSpaceAnchor()
Version
Introduced in version 9
LineGraphics.SetCustomLineType Method
Parent Object: LineGraphics
Description
Method that sets a custom line type to the curve from the specified .lin file. The method
automatically changes the value of LineType property to kCustomLineType.
Syntax
LineGraphics.SetCustomLineType( FullFileName As String, LineTypeName As String,
ReplaceExisting As Boolean )
Parameters
Name Type Description
FullFileName String
Input string that specifies the full file name of the *.lin file containing
the custom line types.
LineTypeName String OInput string that specifies the name of the line type.
ReplaceExisting Boolean
Input Boolean that specifies whether to replace the existing line type if
a line type of the same name exists. If set to False, and a line type of the
same name exists, this method returns an error.
Version
Introduced in version 2008
LineGraphics.SetTransformBehavior Method
Parent Object: LineGraphics
Description
LineGraphics Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Sets the view transformation settings (e.g. pixel scaling and front facing).
Syntax
LineGraphics.SetTransformBehavior( Anchor As Point, BehaviorType As
DisplayTransformBehaviorEnum, [PixelScale] As Double )
Parameters
Name Type Description
Anchor Point
Input that indicates which point is unaffected by
the transform behavior.
BehaviorType DisplayTransformBehaviorEnum
Input DisplayTransformBehaviorEnum that
specifies which transform behaviors are to be
used.
PixelScale Double
Input Double that indicates how many pixels
should be used to draw one model unit when
pixel scaling is used.
This is an optional argument whose default
value is 1.0.
Version
Introduced in version 5
LineGraphics.SetViewSpaceAnchor Method
Parent Object: LineGraphics
Description
Method that anchors the graphics object at the specified point in view space. The Anchored
property is set to True.
Syntax
LineGraphics.SetViewSpaceAnchor( Origin As Point, Anchor As Point2d, AnchorRelativeTo
As ViewLayoutEnum )
Parameters
Name Type Description
Origin Point Input that specifies the origin of the coordinate system.
Anchor Point2d
LineGraphics Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
Input that indicates which point is unaffected by the
transform behavior.
AnchorRelativeTo ViewLayoutEnum
Input constant indicating which corner of the view the
anchor is relative to.
Version
Introduced in version 9
LineGraphics.Type Property
Parent Object: LineGraphics
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineGraphics.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
LineGraphics Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBEEC.htm 16/06/2025
LineLengthDimConstraint3D Object
Derived from: DimensionConstraint3D Object
Description
The LineLengthDimConstraint3D object represents a constraint that controls the length of a 3D
sketch line.
Methods
Name Description
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AnchorPoints Gets the anchor points of dimension.
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
DimensionPlane
Property that returns the transient dimension plane used to place and position the
dimension text for this dimension constraint.
Driven
Gets and sets whether this dimension constraint is driving the geometry or the
geometry is defining the value associated with the constraint.
Line Property that returns the 3D sketch line being constrained.
Parameter
Property that returns the parameter associated with this dimension constraint. If the
Driven property of the constraint is True, this will return a ReferenceParameter
object. Otherwise it will return a ModelParameter object.
Parent Property that returns the parent sketch of the object.
TextPoint Gets and sets the position of the dimension text.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DimensionConstraints3D.AddLineLength, LineLengthDimConstraint3DProxy.NativeObject
Derived Classes
LineLengthDimConstraint3DProxy
LineLengthDimConstraint3D Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3D.AnchorPoints
Property
Parent Object: LineLengthDimConstraint3D
Description
Gets the anchor points of dimension.
Syntax
LineLengthDimConstraint3D.AnchorPoints() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2012
LineLengthDimConstraint3D.Application
Property
Parent Object: LineLengthDimConstraint3D
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LineLengthDimConstraint3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
LineLengthDimConstraint3D Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3D.AttributeSets
Property
Parent Object: LineLengthDimConstraint3D
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LineLengthDimConstraint3D.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
LineLengthDimConstraint3D.Delete Method
Parent Object: LineLengthDimConstraint3D
Description
Method that deletes the constraint.
Syntax
LineLengthDimConstraint3D.Delete()
Version
Introduced in version 11
LineLengthDimConstraint3D Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
LineLengthDimConstraint3D.DimensionPlane
Property
Parent Object: LineLengthDimConstraint3D
Description
Property that returns the transient dimension plane used to place and position the dimension text for
this dimension constraint.
Syntax
LineLengthDimConstraint3D.DimensionPlane() As Plane
Property Value
This is a read only property whose value is a Plane.
Version
Introduced in version 11
LineLengthDimConstraint3D.Driven Property
Parent Object: LineLengthDimConstraint3D
Description
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining
the value associated with the constraint.
Syntax
LineLengthDimConstraint3D.Driven() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LineLengthDimConstraint3D Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
LineLengthDimConstraint3D.GetReferenceKey
Method
Parent Object: LineLengthDimConstraint3D
Description
Method that generates and returns the reference key for this entity.
Syntax
LineLengthDimConstraint3D.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 11
LineLengthDimConstraint3D.Line Property
Parent Object: LineLengthDimConstraint3D
Description
Property that returns the 3D sketch line being constrained.
Syntax
LineLengthDimConstraint3D.Line() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
LineLengthDimConstraint3D Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3D.Parameter
Property
Parent Object: LineLengthDimConstraint3D
Description
Property that returns the parameter associated with this dimension constraint. If the Driven property
of the constraint is True, this will return a ReferenceParameter object. Otherwise it will return a
ModelParameter object.
Syntax
LineLengthDimConstraint3D.Parameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 11
LineLengthDimConstraint3D.Parent Property
Parent Object: LineLengthDimConstraint3D
Description
Property that returns the parent sketch of the object.
Syntax
LineLengthDimConstraint3D.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
LineLengthDimConstraint3D Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3D.TextPoint
Property
Parent Object: LineLengthDimConstraint3D
Description
Gets and sets the position of the dimension text.
Syntax
LineLengthDimConstraint3D.TextPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 11
LineLengthDimConstraint3D.Type Property
Parent Object: LineLengthDimConstraint3D
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineLengthDimConstraint3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LineLengthDimConstraint3D Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3D Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2A1.htm 16/06/2025
LineLengthDimConstraint3DProxy Object
Derived from: LineLengthDimConstraint3D Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
DimensionPlane
Property that returns the transient dimension plane used to place and position the dimension text for
this dimension constraint.
Driven
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining
the value associated with the constraint.
Line Property that returns the 3D sketch line being constrained.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parameter
Property that returns the parameter associated with this dimension constraint. If the Driven property
of the constraint is True, this will return a ReferenceParameter object. Otherwise it will return a
ModelParameter object.
Parent Property that returns the parent sketch of the object.
TextPoint Gets and sets the position of the dimension text.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.AnchorPoints
Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Gets the anchor points of dimension.
Syntax
LineLengthDimConstraint3DProxy.AnchorPoints() As ObjectCollection
LineLengthDimConstraint3DProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2012
LineLengthDimConstraint3DProxy.Application Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LineLengthDimConstraint3DProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.AttributeSets
Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LineLengthDimConstraint3DProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
LineLengthDimConstraint3DProxy.ContainingOccurrence
Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is
the containing occurrence.
Syntax
LineLengthDimConstraint3DProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.Delete Method
Parent Object: LineLengthDimConstraint3DProxy
Description
Method that deletes the constraint.
Syntax
LineLengthDimConstraint3DProxy.Delete()
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.DimensionPlane
Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Property that returns the transient dimension plane used to place and position the dimension text for this dimension
constraint.
Syntax
LineLengthDimConstraint3DProxy.DimensionPlane() As Plane
LineLengthDimConstraint3DProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
Property Value
This is a read only property whose value is a Plane.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.Driven Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Gets and sets whether this dimension constraint is driving the geometry or the geometry is defining the value associated with
the constraint.
Syntax
LineLengthDimConstraint3DProxy.Driven() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.GetReferenceKey
Method
Parent Object: LineLengthDimConstraint3DProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
LineLengthDimConstraint3DProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context
is created using the CreateKeyContext method of the ReferenceKeyManager object. For all other object
types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
LineLengthDimConstraint3DProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.Line Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Property that returns the 3D sketch line being constrained.
Syntax
LineLengthDimConstraint3DProxy.Line() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.NativeObject
Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
LineLengthDimConstraint3DProxy.NativeObject() As LineLengthDimConstraint3D
Property Value
This is a read only property whose value is a LineLengthDimConstraint3D.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.Parameter Property
Parent Object: LineLengthDimConstraint3DProxy
Description
LineLengthDimConstraint3DProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
Property that returns the parameter associated with this dimension constraint. If the Driven property of the constraint is True,
this will return a ReferenceParameter object. Otherwise it will return a ModelParameter object.
Syntax
LineLengthDimConstraint3DProxy.Parameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.Parent Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Property that returns the parent sketch of the object.
Syntax
LineLengthDimConstraint3DProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy.TextPoint Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Gets and sets the position of the dimension text.
Syntax
LineLengthDimConstraint3DProxy.TextPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
LineLengthDimConstraint3DProxy.Type Property
Parent Object: LineLengthDimConstraint3DProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineLengthDimConstraint3DProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LineLengthDimConstraint3DProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF7F.htm 16/06/2025
LinePlaneAndAngleWorkPlaneDef Object
Description
Object that allows you to get and set the information that specifies a work plane that passes through
a line and is a specified angle to a plane.
Methods
Name Description
GetData
Method that gets all of the data defining a work planed defined by a line, plane and an
angle. The work plane passes through the line and is a specified angle to the plane.
Properties
Name Description
Angle
Property that returns the parameter controlling the angle of a line, plane and angle
defined work plane. The angle of the plane can be read and modified by accessing the
returned Parameter object. The positive angle direction is computed by crossing the
axis vector with the plane normal vector. Changes made will not be visible until the
model is recomputed.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Line
Property that returns the line of a line, plane and angle defined work plane. This object
can be a linear Edge, WorkAxis, or SketchLine object. The work plane passes through
the line.
Parent Property returning the parent WorkPlane object.
Plane
Property that indicates the plane of a line, plane and angle defined work plane. This
object can be a planar Face, WorkPlane, or Sketch object. The angle of the plane is
measured with respect to this plane.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Angle
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
LinePlaneAndAngleWorkPlaneDef Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A99.htm 16/06/2025
Description
Property that returns the parameter controlling the angle of a line, plane and angle defined work
plane. The angle of the plane can be read and modified by accessing the returned Parameter object.
The positive angle direction is computed by crossing the axis vector with the plane normal vector.
Changes made will not be visible until the model is recomputed.
Syntax
LinePlaneAndAngleWorkPlaneDef.Angle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Application
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LinePlaneAndAngleWorkPlaneDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A99.htm 16/06/2025
LinePlaneAndAngleWorkPlaneDef.GetData
Method
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
Method that gets all of the data defining a work planed defined by a line, plane and an angle. The
work plane passes through the line and is a specified angle to the plane.
Syntax
LinePlaneAndAngleWorkPlaneDef.GetData( Line As Object, Plane As Object, Angle As
Parameter )
Parameters
Name Type Description
Line Object
Output object that represents a line. This object can be a linear Edge, WorkAxis,
or SketchLine object. The work plane passes through this line.
Plane Object
Output object that represents a plane. This object can be a planar Face,
WorkPlane, or Sketch object. The angle of the work plane is measured with
respect to this plane.
Angle Parameter
Output Parameter that defines the angle of the work plane to the plane. The
positive angle direction is computed by crossing the axis vector with the plane
normal vector.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Line
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
Property that returns the line of a line, plane and angle defined work plane. This object can be a
linear Edge, WorkAxis, or SketchLine object. The work plane passes through the line.
LinePlaneAndAngleWorkPlaneDef Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A99.htm 16/06/2025
Syntax
LinePlaneAndAngleWorkPlaneDef.Line() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Parent
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
Property returning the parent WorkPlane object.
Syntax
LinePlaneAndAngleWorkPlaneDef.Parent() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Plane
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
LinePlaneAndAngleWorkPlaneDef Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A99.htm 16/06/2025
Property that indicates the plane of a line, plane and angle defined work plane. This object can be a
planar Face, WorkPlane, or Sketch object. The angle of the plane is measured with respect to this
plane.
Syntax
LinePlaneAndAngleWorkPlaneDef.Plane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef.Type
Property
Parent Object: LinePlaneAndAngleWorkPlaneDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LinePlaneAndAngleWorkPlaneDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
LinePlaneAndAngleWorkPlaneDef Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A99.htm 16/06/2025
LineSegment Object
Description
The LineSegment object represents a line segment. The object created is a transient mathematical
object and is not displayed graphically.
Methods
Name Description
Copy
Creates a copy of this LineSegment object. The result is entirely
independent and can be edited without affecting the original LineSegment
object.
DistanceTo Method that returns the distance to the specified point.
GetLineSegmentData Method that returns the data defining this line segment.
IntersectWithCurve
Method that returns Point objects that represent the points at the
intersection of the Line/LineSegment and the input curve. Returns Nothing
if the curves overlap or are parallel.
IntersectWithSurface
Method that returns Point objects that represent the points at the
intersection of the Line/LineSegment and the input surface. Returns
Nothing if the Line/LineSegment lies on the surface or it is parallel to the
surface.
PutLineSegmentData Method that sets the data defining this line segment.
Properties
Name Description
Direction Property that returns the direction of the line segment.
EndPoint Specifies the end point of the line segment.
Evaluator Property that returns the CurveEvaluator for this line segment.
MidPoint Property that returns the midpoint of the line segment.
StartPoint Specifies the start point of the line segment.
Accessed From
AngularModelDimension.ExtensionLineOne, AngularModelDimension.ExtensionLineTwo,
AngularModelDimensionProxy.ExtensionLineOne,
AngularModelDimensionProxy.ExtensionLineTwo, DWGEntityLineSegment.Geometry,
DWGEntityLineSegmentProxy.Geometry, LineSegment.Copy, SketchLine.Geometry3d,
SketchLine3D.Geometry, SketchLine3DProxy.Geometry, SketchLineProxy.Geometry3d,
SketchSplineHandle.Geometry3d, SketchSplineHandle3D.Geometry,
SketchSplineHandle3DProxy.Geometry, SketchSplineHandleProxy.Geometry3d,
TransientGeometry.CreateLineSegment
LineSegment Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Samples
Name Description
Create sheet
metal rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Create curve
primitives
This sample demonstrates the creation of curve primitives (lines, arcs, circles,
etc.) using client graphics.
Version
Introduced in version 6
LineSegment.Copy Method
Parent Object: LineSegment
Description
Creates a copy of this LineSegment object. The result is entirely independent and can be edited
without affecting the original LineSegment object.
Syntax
LineSegment.Copy() As LineSegment
Version
Introduced in version 2013
LineSegment.Direction Property
Parent Object: LineSegment
Description
Property that returns the direction of the line segment.
LineSegment Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Syntax
LineSegment.Direction() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 6
LineSegment.DistanceTo Method
Parent Object: LineSegment
Description
Method that returns the distance to the specified point.
Syntax
LineSegment.DistanceTo( Point As Point ) As Double
Parameters
Name Type Description
Point Point Point object that specifies the point to which the distance is to be returned.
Version
Introduced in version 11
LineSegment.EndPoint Property
Parent Object: LineSegment
Description
Specifies the end point of the line segment.
LineSegment Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Syntax
LineSegment.EndPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Samples
Name Description
Sweep
Feature Add
This sample demonstrates the creation of a sweep feature. The profile is a circle,
but the path is made up of a 3D sketch and a 2D sketch.
Version
Introduced in version 6
LineSegment.Evaluator Property
Parent Object: LineSegment
Description
Property that returns the CurveEvaluator for this line segment.
Syntax
LineSegment.Evaluator() As CurveEvaluator
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 6
LineSegment.GetLineSegmentData Method
Parent Object: LineSegment
LineSegment Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Description
Method that returns the data defining this line segment.
Syntax
LineSegment.GetLineSegmentData( StartPoint() As Double, EndPoint() As Double )
Parameters
Name Type Description
StartPoint Double Input/output Double that specifies the start point.
EndPoint Double Input/output Double that specifies the end point.
Version
Introduced in version 6
LineSegment.IntersectWithCurve Method
Parent Object: LineSegment
Description
Method that returns Point objects that represent the points at the intersection of the
Line/LineSegment and the input curve. Returns Nothing if the curves overlap or are parallel.
Syntax
LineSegment.IntersectWithCurve( Curve As Object, [Tolerance] As Double ) As
ObjectsEnumerator
Parameters
Name Type Description
Curve Object
Input object. This can be a Line, LineSegment, Arc3d, EllipticalArc, Circle,
EllipseFull, or a BSplineCurve.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
LineSegment Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Version
Introduced in version 2008
LineSegment.IntersectWithSurface Method
Parent Object: LineSegment
Description
Method that returns Point objects that represent the points at the intersection of the
Line/LineSegment and the input surface. Returns Nothing if the Line/LineSegment lies on the
surface or it is parallel to the surface.
Syntax
LineSegment.IntersectWithSurface( Surface As Object, [Tolerance] As Double ) As
ObjectsEnumerator
Parameters
Name Type Description
Surface Object
Input object. This can be a Plane, Cone, Cylinder, EllipticalCone,
EllipticalCylinder, Sphere, Torus or a BSplineSurface.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2008
LineSegment.MidPoint Property
Parent Object: LineSegment
Description
Property that returns the midpoint of the line segment.
LineSegment Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
Syntax
LineSegment.MidPoint() As Point
Property Value
This is a read only property whose value is a Point.
Samples
Name Description
Add surface texture
symbol to dimension
This sample demonstrates the creation of a surface texture symbol
attached to the extension line of a drawing dimension.
Version
Introduced in version 6
LineSegment.PutLineSegmentData Method
Parent Object: LineSegment
Description
Method that sets the data defining this line segment.
Syntax
LineSegment.PutLineSegmentData( StartPoint() As Double, EndPoint() As Double )
Parameters
Name Type Description
StartPoint Double Input/output Double that specifies the start point.
EndPoint Double Input/output Double that defines the end point.
Version
Introduced in version 6
LineSegment Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
LineSegment.StartPoint Property
Parent Object: LineSegment
Description
Specifies the start point of the line segment.
Syntax
LineSegment.StartPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 6
LineSegment Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC495.htm 16/06/2025
LineSegment2d Object
Description
The LineSegment2d object. The object is a transient mathematical object and is not displayed
graphically.
Methods
Name Description
Copy
Creates a copy of this LineSegment2d object. Creates a copy of this
LineSegment2d object. The result is entirely independent and can be edited
without affecting the original LineSegment2d object.
DistanceTo Method that returns the distance to the specified point.
GetLineSegmentData Get the data defining this line segment.
IntersectWithCurve
Method that returns Point2d objects that represent the points at the
intersection of the Line2d/LineSegment2d and the input curve. Returns
Nothing if the curves overlap or are parallel.
PutLineSegmentData Method that sets the data defining this line segment.
Properties
Name Description
Direction Gets the direction of the line segment.
EndPoint Specifies the end point of the line segment.
Evaluator Gets the Curve2dEvaluator for this line segment.
MidPoint Gets the mid point of the line segment.
StartPoint Specifies the start point of the line segment.
Accessed From
LineSegment2d.Copy, SketchLine.Geometry, SketchLineProxy.Geometry,
SketchSplineHandle.Geometry, SketchSplineHandleProxy.Geometry,
TransientGeometry.CreateLineSegment2d
Version
Introduced in version 5
LineSegment2d.Copy Method
Parent Object: LineSegment2d
LineSegment2d Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
Description
Creates a copy of this LineSegment2d object.
Creates a copy of this LineSegment2d object. The result is entirely independent and can be edited
without affecting the original LineSegment2d object.
Syntax
LineSegment2d.Copy() As LineSegment2d
Version
Introduced in version 2013
LineSegment2d.Direction Property
Parent Object: LineSegment2d
Description
Gets the direction of the line segment.
Syntax
LineSegment2d.Direction() As UnitVector2d
Property Value
This is a read only property whose value is a UnitVector2d.
Version
Introduced in version 5
LineSegment2d.DistanceTo Method
Parent Object: LineSegment2d
Description
Method that returns the distance to the specified point.
LineSegment2d Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
Syntax
LineSegment2d.DistanceTo( Point As Point2d ) As Double
Parameters
Name Type Description
Point Point2d Point2d object that specifies the point to which the distance is to be returned.
Version
Introduced in version 11
LineSegment2d.EndPoint Property
Parent Object: LineSegment2d
Description
Specifies the end point of the line segment.
Syntax
LineSegment2d.EndPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 5
LineSegment2d.Evaluator Property
Parent Object: LineSegment2d
Description
Gets the Curve2dEvaluator for this line segment.
LineSegment2d Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
Syntax
LineSegment2d.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Version
Introduced in version 5
LineSegment2d.GetLineSegmentData Method
Parent Object: LineSegment2d
Description
Get the data defining this line segment.
Syntax
LineSegment2d.GetLineSegmentData( StartPoint() As Double, EndPoint() As Double )
Parameters
Name Type Description
StartPoint Double Input/output Double that specifies the start point.
EndPoint Double Input/output Double that defines the end point.
Version
Introduced in version 5
LineSegment2d.IntersectWithCurve Method
Parent Object: LineSegment2d
Description
Method that returns Point2d objects that represent the points at the intersection of the
Line2d/LineSegment2d and the input curve. Returns Nothing if the curves overlap or are parallel.
LineSegment2d Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
Syntax
LineSegment2d.IntersectWithCurve( Curve As Object, [Tolerance] As Double ) As
ObjectsEnumerator
Parameters
Name Type Description
Curve Object
Input object. This can be a Line2d, LineSegment2d, Arc2d, EllipticalArc2d,
Circle2d, EllipseFull2d, or a BSplineCurve2d.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2008
LineSegment2d.MidPoint Property
Parent Object: LineSegment2d
Description
Gets the mid point of the line segment.
Syntax
LineSegment2d.MidPoint() As Point2d
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 5
LineSegment2d.PutLineSegmentData Method
Parent Object: LineSegment2d
LineSegment2d Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
Description
Method that sets the data defining this line segment.
Syntax
LineSegment2d.PutLineSegmentData( StartPoint() As Double, EndPoint() As Double )
Parameters
Name Type Description
StartPoint Double Input/output Double that specifies the start point.
EndPoint Double Input/output Double that defines the end point.
Version
Introduced in version 5
LineSegment2d.StartPoint Property
Parent Object: LineSegment2d
Description
Specifies the start point of the line segment.
Syntax
LineSegment2d.StartPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 5
LineSegment2d Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE26D.htm 16/06/2025
LineStripGraphics Object
Derived from: GraphicsPrimitive Object
Description
The LineStripGraphics Object. The LineStripGraphics object defines a set of connected lines.
Methods
Name Description
Delete Method that deletes the graphics primitive.
GetCustomLineType
Method that returns information regarding the custom line type in
use. The method returns a failure if the return value of the LineType
property is not kCustomLineType.
GetStripLengths
Method that returns the current strip lengths. The strip lengths are
defined by the number of coordinates used for each strip.
GetTransformBehavior
Returns the current view transformation settings (e.g. pixel scaling
and front facing).
GetViewSpaceAnchor
Method that gets the anchor information of the graphics object. This
method returns an error if the 'Anchored' property returns False.
PutStripLengths
Method that sets the current strip lengths. The strip lengths are
defined by the number of coordinates used for each strip.
RemoveViewSpaceAnchor
The RemoveViewSpaceAnchor method removes the view space
anchor from the object, and sets the Anchored property to false.
SetCustomLineType
Method that sets a custom line type to the curve from the
specified .lin file. The method automatically changes the value of
LineType property to kCustomLineType.
SetTransformBehavior
Sets the view transformation settings (e.g. pixel scaling and front
facing).
SetViewSpaceAnchor
Method that anchors the graphics object at the specified point in view
space. The Anchored property is set to True.
Properties
Name Description
Anchored
Property that indicates whether this graphics primitive is anchored in view
space. This property can only be set to False. The Anchored property is
automatically set to True by the SetViewSpaceAnchor method.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BurnThrough
Read-write property that specifies whether or not graphics are always
visible even if they are blocked by other objects.
ColorBinding Gets and sets how colors are defined for the line.
LineStripGraphics Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
ColorIndexSet Gets and sets the GraphicsIndexSet that defines the indices within the
GraphicsColorSet to use.
ColorSet Gets and sets the GraphicsColorSet associated with the set.
CoordinateIndexSet
Gets and sets the GraphicsCoordinateIndexSet that defines the indices
within the coordinate set to use for the lines of the set.
CoordinateSet Gets and sets the GraphicsCoordinateSet associated with the set.
DepthPriority Read-write property that allows you to specify a display priority to the set.
Id Read-only property that returns the Id of the object.
LineDefinitionSpace Gets and sets the LineDefinitionSpace applied to this line strip graphics.
LineScale Gets and sets the LineScale applied to this line strip graphics.
LineType
Property that gets and sets the line type override. Setting the property to
kDefaultLineType restores the default line type. If the property returns
kCustomLineType, the GetCustomLineType method can be used to get
further details about the line type.
LineWeight Gets and sets the LineWeight applied to this line strip graphics.
Parent
Property that returns the parent object from whom this object can logically
be reached.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsNode.AddLineStripGraphics, GraphicsNodeProxy.AddLineStripGraphics
Samples
Name Description
Client
Graphics
- Line
This sample demonstrates the creation of custom graphics using LineGraphics and
LineStripGraphics. The same set of coordinate data is used for both types of graphics.
Line graphics use two coordinates to define a line, and then the next two coordinates to
define the next line, and so on through the defined coordinates. For the data provided,
this results in gaps in the drawn curve. Line strips use the first two coordinates to
define the first line and then the last point of the first line becomes the first point of the
second line and the next coordinate is used as the end point of the second line. This
results in the set of points being connected by a continuous set of lines, drawing a
continuous curve. This sample also demonstrates two methods of defining the color for
client graphics. In one case it uses an existing appearance asset, and in the other, it
explicitly defines a color and assigns it. To use the sample you need to have an
assembly or part document open. The program has two behaviors: the first time it is
run it will draw the graphics. The second time it is run it deletes the previously drawn
graphics.
Version
Introduced in version 5
LineStripGraphics Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
LineStripGraphics.Anchored Property
Parent Object: LineStripGraphics
Description
Property that indicates whether this graphics primitive is anchored in view space. This property
can only be set to False. The Anchored property is automatically set to True by the
SetViewSpaceAnchor method.
Syntax
LineStripGraphics.Anchored() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
LineStripGraphics.Application Property
Parent Object: LineStripGraphics
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LineStripGraphics.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
LineStripGraphics Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
LineStripGraphics.BurnThrough Property
Parent Object: LineStripGraphics
Description
Read-write property that specifies whether or not graphics are always visible even if they are
blocked by other objects.
Syntax
LineStripGraphics.BurnThrough() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
LineStripGraphics.ColorBinding Property
Parent Object: LineStripGraphics
Description
Gets and sets how colors are defined for the line.
Syntax
LineStripGraphics.ColorBinding() As ColorBindingEnum
Property Value
This is a read/write property whose value is a ColorBindingEnum.
Version
Introduced in version 5
LineStripGraphics Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
LineStripGraphics.ColorIndexSet Property
Parent Object: LineStripGraphics
Description
Gets and sets the GraphicsIndexSet that defines the indices within the GraphicsColorSet to use.
Syntax
LineStripGraphics.ColorIndexSet() As GraphicsIndexSet
Property Value
This is a read/write property whose value is a GraphicsIndexSet.
Version
Introduced in version 5
LineStripGraphics.ColorSet Property
Parent Object: LineStripGraphics
Description
Gets and sets the GraphicsColorSet associated with the set.
Syntax
LineStripGraphics.ColorSet() As GraphicsColorSet
Property Value
This is a read/write property whose value is a GraphicsColorSet.
Samples
Name Description
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is
used for both types of graphics. Line graphics use two coordinates to define
a line, and then the next two coordinates to define the next line, and so on
LineStripGraphics Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
through the defined coordinates. For the data provided, this results in gaps in
the drawn curve. Line strips use the first two coordinates to define the first
line and then the last point of the first line becomes the first point of the
second line and the next coordinate is used as the end point of the second
line. This results in the set of points being connected by a continuous set of
lines, drawing a continuous curve. This sample also demonstrates two
methods of defining the color for client graphics. In one case it uses an
existing appearance asset, and in the other, it explicitly defines a color and
assigns it. To use the sample you need to have an assembly or part document
open. The program has two behaviors: the first time it is run it will draw the
graphics. The second time it is run it deletes the previously drawn graphics.
InteractionGraphics The sample creates overlay graphics.
Version
Introduced in version 5
LineStripGraphics.CoordinateIndexSet
Property
Parent Object: LineStripGraphics
Description
Gets and sets the GraphicsCoordinateIndexSet that defines the indices within the coordinate set to
use for the lines of the set.
Syntax
LineStripGraphics.CoordinateIndexSet() As GraphicsIndexSet
Property Value
This is a read/write property whose value is a GraphicsIndexSet.
Version
Introduced in version 5
LineStripGraphics.CoordinateSet Property
Parent Object: LineStripGraphics
LineStripGraphics Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Description
Gets and sets the GraphicsCoordinateSet associated with the set.
Syntax
LineStripGraphics.CoordinateSet() As GraphicsCoordinateSet
Property Value
This is a read/write property whose value is a GraphicsCoordinateSet.
Samples
Name Description
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is
used for both types of graphics. Line graphics use two coordinates to define
a line, and then the next two coordinates to define the next line, and so on
through the defined coordinates. For the data provided, this results in gaps in
the drawn curve. Line strips use the first two coordinates to define the first
line and then the last point of the first line becomes the first point of the
second line and the next coordinate is used as the end point of the second
line. This results in the set of points being connected by a continuous set of
lines, drawing a continuous curve. This sample also demonstrates two
methods of defining the color for client graphics. In one case it uses an
existing appearance asset, and in the other, it explicitly defines a color and
assigns it. To use the sample you need to have an assembly or part document
open. The program has two behaviors: the first time it is run it will draw the
graphics. The second time it is run it deletes the previously drawn graphics.
InteractionGraphics The sample creates overlay graphics.
Version
Introduced in version 5
LineStripGraphics.Delete Method
Parent Object: LineStripGraphics
Description
Method that deletes the graphics primitive.
LineStripGraphics Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Syntax
LineStripGraphics.Delete()
Version
Introduced in version 5
LineStripGraphics.DepthPriority Property
Parent Object: LineStripGraphics
Description
Read-write property that allows you to specify a display priority to the set.
Syntax
LineStripGraphics.DepthPriority() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 5
LineStripGraphics.GetCustomLineType
Method
Parent Object: LineStripGraphics
Description
Method that returns information regarding the custom line type in use. The method returns a
failure if the return value of the LineType property is not kCustomLineType.
Syntax
LineStripGraphics.GetCustomLineType( LineTypeName As String, LineTypeDescription As
String )
LineStripGraphics Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Parameters
Name Type Description
LineTypeName String Output string that returns the name of the line type.
LineTypeDescription String Output string that returns the description of the line type.
Version
Introduced in version 2008
LineStripGraphics.GetStripLengths Method
Parent Object: LineStripGraphics
Description
Method that returns the current strip lengths. The strip lengths are defined by the number of
coordinates used for each strip.
Syntax
LineStripGraphics.GetStripLengths( StripLengths() As Long )
Parameters
Name Type Description
StripLengths Long
Array of Longs that defines the strip lengths. The length of a strip is defined
by specifying the number of coordinates used for each strip.
Version
Introduced in version 5
LineStripGraphics.GetTransformBehavior
Method
Parent Object: LineStripGraphics
Description
Returns the current view transformation settings (e.g. pixel scaling and front facing).
LineStripGraphics Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Syntax
LineStripGraphics.GetTransformBehavior( TextAnchor As Point, BehaviorType As
DisplayTransformBehaviorEnum, PixelScale As Double )
Parameters
Name Type Description
TextAnchor Point
Output Point that returns the point that is
unaffected by the transform behavior.
BehaviorType DisplayTransformBehaviorEnum
Output DisplayTransformBehaviorEnum that
returns the transform behaviors currently being
used.
PixelScale Double
Output Double that returns the number of pixels
that are used to draw one model unit when pixel
scaling is used.
Version
Introduced in version 5
LineStripGraphics.GetViewSpaceAnchor
Method
Parent Object: LineStripGraphics
Description
Method that gets the anchor information of the graphics object. This method returns an error if the
'Anchored' property returns False.
Syntax
LineStripGraphics.GetViewSpaceAnchor( Origin As Point, Anchor As Point2d,
AnchorRelativeTo As ViewLayoutEnum )
Parameters
Name Type Description
Origin Point Output that specifies the origin of the coordinate system.
Anchor Point2d
Output that indicates which point is unaffected by the
transform behavior.
AnchorRelativeTo ViewLayoutEnum
Output constant indicating which corner of the view the
anchor is relative to.
LineStripGraphics Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Version
Introduced in version 9
LineStripGraphics.Id Property
Parent Object: LineStripGraphics
Description
Read-only property that returns the Id of the object.
Syntax
LineStripGraphics.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2017
LineStripGraphics.LineDefinitionSpace
Property
Parent Object: LineStripGraphics
Description
Gets and sets the LineDefinitionSpace applied to this line strip graphics.
Syntax
LineStripGraphics.LineDefinitionSpace() As LineDefinitionSpaceEnum
Property Value
This is a read/write property whose value is a LineDefinitionSpaceEnum.
LineStripGraphics Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Version
Introduced in version 2008
LineStripGraphics.LineScale Property
Parent Object: LineStripGraphics
Description
Gets and sets the LineScale applied to this line strip graphics.
Syntax
LineStripGraphics.LineScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LineStripGraphics.LineType Property
Parent Object: LineStripGraphics
Description
Property that gets and sets the line type override. Setting the property to kDefaultLineType
restores the default line type. If the property returns kCustomLineType, the GetCustomLineType
method can be used to get further details about the line type.
Syntax
LineStripGraphics.LineType() As LineTypeEnum
Property Value
This is a read/write property whose value is a LineTypeEnum.
LineStripGraphics Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Version
Introduced in version 2008
LineStripGraphics.LineWeight Property
Parent Object: LineStripGraphics
Description
Gets and sets the LineWeight applied to this line strip graphics.
Syntax
LineStripGraphics.LineWeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LineStripGraphics.Parent Property
Parent Object: LineStripGraphics
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
LineStripGraphics.Parent() As GraphicsNode
Property Value
This is a read only property whose value is a GraphicsNode.
LineStripGraphics Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Version
Introduced in version 5
LineStripGraphics.PutStripLengths Method
Parent Object: LineStripGraphics
Description
Method that sets the current strip lengths. The strip lengths are defined by the number of
coordinates used for each strip.
Syntax
LineStripGraphics.PutStripLengths( StripLengths() As Long )
Parameters
Name Type Description
StripLengths Long
Array of Longs that defines the strip lengths. The length of a strip is defined
by specifying the number of coordinates used for each strip.
Version
Introduced in version 5
LineStripGraphics.RangeBox Property
Parent Object: LineStripGraphics
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LineStripGraphics.RangeBox() As Box
LineStripGraphics Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
LineStripGraphics.RemoveViewSpaceAnchor
Method
Parent Object: LineStripGraphics
Description
The RemoveViewSpaceAnchor method removes the view space anchor from the object, and sets
the Anchored property to false.
Syntax
LineStripGraphics.RemoveViewSpaceAnchor()
Version
Introduced in version 9
LineStripGraphics.SetCustomLineType
Method
Parent Object: LineStripGraphics
Description
Method that sets a custom line type to the curve from the specified .lin file. The method
automatically changes the value of LineType property to kCustomLineType.
Syntax
LineStripGraphics.SetCustomLineType( FullFileName As String, LineTypeName As String,
ReplaceExisting As Boolean )
LineStripGraphics Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Parameters
Name Type Description
FullFileName String
Input string that specifies the full file name of the *.lin file containing
the custom line types.
LineTypeName String OInput string that specifies the name of the line type.
ReplaceExisting Boolean
Input Boolean that specifies whether to replace the existing line type if
a line type of the same name exists. If set to False, and a line type of the
same name exists, this method returns an error.
Version
Introduced in version 2008
LineStripGraphics.SetTransformBehavior
Method
Parent Object: LineStripGraphics
Description
Sets the view transformation settings (e.g. pixel scaling and front facing).
Syntax
LineStripGraphics.SetTransformBehavior( Anchor As Point, BehaviorType As
DisplayTransformBehaviorEnum, [PixelScale] As Double )
Parameters
Name Type Description
Anchor Point
Input that indicates which point is unaffected by
the transform behavior.
BehaviorType DisplayTransformBehaviorEnum
Input DisplayTransformBehaviorEnum that
specifies which transform behaviors are to be
used.
PixelScale Double
Input Double that indicates how many pixels
should be used to draw one model unit when
pixel scaling is used.
This is an optional argument whose default
value is 1.0.
LineStripGraphics Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Version
Introduced in version 5
LineStripGraphics.SetViewSpaceAnchor
Method
Parent Object: LineStripGraphics
Description
Method that anchors the graphics object at the specified point in view space. The Anchored
property is set to True.
Syntax
LineStripGraphics.SetViewSpaceAnchor( Origin As Point, Anchor As Point2d,
AnchorRelativeTo As ViewLayoutEnum )
Parameters
Name Type Description
Origin Point Input that specifies the origin of the coordinate system.
Anchor Point2d
Input that indicates which point is unaffected by the
transform behavior.
AnchorRelativeTo ViewLayoutEnum
Input constant indicating which corner of the view the
anchor is relative to.
Version
Introduced in version 9
LineStripGraphics.Type Property
Parent Object: LineStripGraphics
Description
Returns an ObjectTypeEnum indicating this object's type.
LineStripGraphics Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
Syntax
LineStripGraphics.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
LineStripGraphics Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFBE1.htm 16/06/2025
LineWorkAxisDef Object
Description
Object that allows you to get and set the information that specifies a work axis along a line.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Line
Property that returns the line of a line defined work axis. This object can be a linear
Edge, WorkAxis, or SketchLine object.
Parent Property returning the parent WorkAxis object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
LineWorkAxisDef.Application Property
Parent Object: LineWorkAxisDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LineWorkAxisDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
LineWorkAxisDef Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1BDC.htm 16/06/2025
Version
Introduced in version 4
LineWorkAxisDef.Line Property
Parent Object: LineWorkAxisDef
Description
Property that returns the line of a line defined work axis. This object can be a linear Edge,
WorkAxis, or SketchLine object.
Syntax
LineWorkAxisDef.Line() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineWorkAxisDef.Parent Property
Parent Object: LineWorkAxisDef
Description
Property returning the parent WorkAxis object.
Syntax
LineWorkAxisDef.Parent() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
LineWorkAxisDef Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1BDC.htm 16/06/2025
Version
Introduced in version 4
LineWorkAxisDef.Type Property
Parent Object: LineWorkAxisDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineWorkAxisDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
LineWorkAxisDef Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1BDC.htm 16/06/2025
LipFeature Object
Derived from: PartFeature Object
Description
The LipFeature object represents a lip feature within the model.
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
FeatureDimensions Property that returns the FeatureDimensions collection object.
LipFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
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
LipFeatureProxy.NativeObject, LipFeatures.Item
Derived Classes
LipFeatureProxy
Version
Introduced in version 2010
LipFeature.Adaptive Property
Parent Object: LipFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
LipFeature.Adaptive() As Boolean
LipFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LipFeature.Appearance Property
Parent Object: LipFeature
Description
Gets and sets the current appearance of the feature.
Syntax
LipFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
LipFeature.AppearanceSourceType Property
Parent Object: LipFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
LipFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
LipFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
LipFeature.Application Property
Parent Object: LipFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LipFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LipFeature.AttributeSets Property
Parent Object: LipFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LipFeature.AttributeSets() As AttributeSets
LipFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
LipFeature.ConsumeInputs Property
Parent Object: LipFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LipFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LipFeature.Delete Method
Parent Object: LipFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
LipFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
LipFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
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
Introduced in version 2010
LipFeature.ExtendedName Property
Parent Object: LipFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
LipFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
LipFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2012
LipFeature.Faces Property
Parent Object: LipFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
LipFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
LipFeature.FeatureDimensions Property
Parent Object: LipFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
LipFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
LipFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2010
LipFeature.GetReferenceKey Method
Parent Object: LipFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
LipFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2010
LipFeature.GetSuppressionCondition Method
Parent Object: LipFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
LipFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Syntax
LipFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 2010
LipFeature.HealthStatus Property
Parent Object: LipFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
LipFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
LipFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
LipFeature.IsOwnedByFeature Property
Parent Object: LipFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
LipFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
LipFeature.Name Property
Parent Object: LipFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
LipFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LipFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
LipFeature.OwnedBy Property
Parent Object: LipFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
LipFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
LipFeature.Parameters Property
Parent Object: LipFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
LipFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
LipFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
LipFeature.Parent Property
Parent Object: LipFeature
Description
Property that returns the parent of the feature.
Syntax
LipFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
LipFeature.Participants Property
Parent Object: LipFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
LipFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
LipFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
LipFeature.RangeBox Property
Parent Object: LipFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LipFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
LipFeature.RemoveParticipant Method
Parent Object: LipFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
LipFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
LipFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2010
LipFeature.SetAffectedBodies Method
Parent Object: LipFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LipFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LipFeature.SetEndOfPart Method
Parent Object: LipFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
LipFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
LipFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
LipFeature.SetSuppressionCondition Method
Parent Object: LipFeature
Description
Method that sets the suppression condition for the feature.
Syntax
LipFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
LipFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2010
LipFeature.Shared Property
Parent Object: LipFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LipFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LipFeature.Suppressed Property
Parent Object: LipFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
LipFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LipFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2010
LipFeature.SurfaceBodies Property
Parent Object: LipFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
LipFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
LipFeature.Type Property
Parent Object: LipFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LipFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LipFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
Version
Introduced in version 2010
LipFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A13.htm 16/06/2025
LipFeatureProxy Object
Derived from: LipFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
LipFeatureProxy Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
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
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
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
Version
Introduced in version 2010
LipFeatureProxy.Adaptive Property
Parent Object: LipFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
LipFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LipFeatureProxy Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.Appearance Property
Parent Object: LipFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
LipFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
LipFeatureProxy.AppearanceSourceType
Property
Parent Object: LipFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
LipFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
LipFeatureProxy Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2014
LipFeatureProxy.Application Property
Parent Object: LipFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LipFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LipFeatureProxy.AttributeSets Property
Parent Object: LipFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LipFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
LipFeatureProxy Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.ConsumeInputs Property
Parent Object: LipFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LipFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LipFeatureProxy.ContainingOccurrence
Property
Parent Object: LipFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
LipFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
LipFeatureProxy Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.Delete Method
Parent Object: LipFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
LipFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
LipFeatureProxy Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.ExtendedName Property
Parent Object: LipFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
LipFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
LipFeatureProxy.Faces Property
Parent Object: LipFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
LipFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
LipFeatureProxy Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.FeatureDimensions
Property
Parent Object: LipFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
LipFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
LipFeatureProxy.GetReferenceKey Method
Parent Object: LipFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
LipFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
LipFeatureProxy Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
LipFeatureProxy.GetSuppressionCondition
Method
Parent Object: LipFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
LipFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
LipFeatureProxy Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.HealthStatus Property
Parent Object: LipFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
LipFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
LipFeatureProxy.IsOwnedByFeature
Property
Parent Object: LipFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
LipFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
LipFeatureProxy Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.Name Property
Parent Object: LipFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
LipFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LipFeatureProxy.NativeObject Property
Parent Object: LipFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
LipFeatureProxy.NativeObject() As LipFeature
Property Value
This is a read only property whose value is a LipFeature.
LipFeatureProxy Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.OwnedBy Property
Parent Object: LipFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
LipFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
LipFeatureProxy.Parameters Property
Parent Object: LipFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
LipFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
LipFeatureProxy Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.Parent Property
Parent Object: LipFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
LipFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
LipFeatureProxy.Participants Property
Parent Object: LipFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
LipFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
LipFeatureProxy Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.RangeBox Property
Parent Object: LipFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LipFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
LipFeatureProxy.RemoveParticipant Method
Parent Object: LipFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
LipFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
LipFeatureProxy Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2010
LipFeatureProxy.SetAffectedBodies Method
Parent Object: LipFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LipFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LipFeatureProxy.SetEndOfPart Method
Parent Object: LipFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
LipFeatureProxy.SetEndOfPart( Before As Boolean )
LipFeatureProxy Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
LipFeatureProxy.SetSuppressionCondition
Method
Parent Object: LipFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
LipFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
For instance, if the parameter defines length units, the
value is assumed to be in centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current units of the document. For
LipFeatureProxy Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 2010
LipFeatureProxy.Shared Property
Parent Object: LipFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LipFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LipFeatureProxy.Suppressed Property
Parent Object: LipFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
LipFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LipFeatureProxy Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy.SurfaceBodies Property
Parent Object: LipFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
LipFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
LipFeatureProxy.Type Property
Parent Object: LipFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LipFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LipFeatureProxy Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
Version
Introduced in version 2010
LipFeatureProxy Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5905.htm 16/06/2025
LipFeatures Object
Description
The LipFeatures collection object provides access to existing Lip features.
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
PartFeatures.LipFeatures, SheetMetalFeatures.LipFeatures
Version
Introduced in version 2010
LipFeatures.Application Property
Parent Object: LipFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LipFeatures.Application() As Object
LipFeatures Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B04.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LipFeatures.Count Property
Parent Object: LipFeatures
Description
Property that returns the number of items in this collection.
Syntax
LipFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
LipFeatures.Item Property
Parent Object: LipFeatures
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
Syntax
LipFeatures.Item( Index As Variant ) As LipFeature
LipFeatures Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B04.htm 16/06/2025
Property Value
This is a read only property whose value is a LipFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a String
indicating the feature name. If an out of range index or a name of a non-existent
feature is provided, an error occurs.
Version
Introduced in version 2010
LipFeatures.Type Property
Parent Object: LipFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LipFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
LipFeatures Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B04.htm 16/06/2025
LoftDefinition Object
Description
The LoftDefinition object is used to define additional input required for creating loft features.
Methods
Name Description
Copy Method that creates and returns a copy of this loft definition.
Properties
Name Description
Centerline
Property that specifies the centerline for the loft. Valid objects
includes Profile, Profile3D, EdgeLoop and EdgeCollection. When
this LoftDefinition is associative with an existing LoftFeature or
if it is copied from an LoftDefinition that is associative with a
LoftFeature, then set this property you should follow below rules,
otherwise an error would occur:
• If the LoftDefinition.LoftType returns kRegularLoft you
can set this property directly.
• If the LoftDefinition.LoftType returns kLoftWithRails you
need to clear the LoftDefinition.LoftRails before setting this
property.
• If the LoftDefinition.LoftType returns
kLoftWithAreaGraphSections you need to clear the
LoftDefinition.LoftSectionDimensions if any before setting
this property,
Closed Property that specifies whether the loft needs to be closed or not.
FirstSectionAngle
Property that specifies the angle of the loft in relation to the
sketch plane of the starting section.
FirstSectionCondition
Property that specifies the condition of the loft at the starting
section.
FirstSectionDirectionReversed
Property that specifies whether the takeoff direction for the
starting section should be reversed from its default direction.
FirstSectionImpact
Property that specifies the impact the starting section's condition
has on the shape of the entire loft.
FirstSectionTangentPlane
Property that specifies the tangent plane for the starting section in
the case that the section is a point.
LastSectionAngle
Property that specifies the angle of the loft in relation to the
sketch plane of the ending section.
LastSectionCondition
Property that specifies the condition of the loft at the ending
section.
LoftDefinition Object Page 1 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
LastSectionDirectionReversed Property that specifies whether the takeoff direction for the
ending section should be reversed from its default direction.
LastSectionImpact
Property that specifies the impact the ending section's condition
has on the shape of the entire loft.
LastSectionTangentPlane
Property that specifies the tangent plane for the ending section in
the case that the section is a point.
LoftRails
Read-only property that specifies the rails for the loft. If the
LoftDefinition.LoftType is not kRegularLoft or kLoftWithRails
then set this property will raise error, you should follow below
rules to set this property:
• If the LoftDefinition.LoftType returns kRegularLoft you
can set this property directly.
• If the LoftDefinition.LoftType returns kLoftWithCenterline
you need to clear the LoftDefinition.Centerline before
setting this property.
• If the LoftDefinition.LoftType returns
kLoftWithAreaGraphSections you need to clear the
LoftDefinition.LoftSectionDimensions if any and
LoftDefinition.Centerline before setting this property,
LoftSectionDimensions
Read-only property that specifies the placed section dimensions
for an area-graph type loft. Before adding new
LoftSectionDimension into this collection the
LoftDefinition.Centerline should be set first, otherwise an error
would occur.
LoftType Property that gets the type of loft feature.
MapPointCurves Property that specifies the mapping to use between sections.
MergeTangentFaces
Property that specifies if the tangent faces of the loft should be
merged or not.
Operation
Property that specifies the type of operation used to add the
feature to the model.
Sections Property that specifies the sections used for a loft.
Accessed From
LoftDefinition.Copy, LoftFeature.Definition, LoftFeatureProxy.Definition,
LoftFeatures.CreateLoftDefinition
Samples
Name Description
Loft Feature
With Non-
Planar Section
This sample demonstrates the creation of a loft feature. It uses two sections for
the loft, one is from a 2d sketch and the other is a non-planar section from a 3d
sketch. Because one of the sketches isn't planar, a surface is created instead of a
solid.
LoftDefinition Object Page 2 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Version
Introduced in version 2008
LoftDefinition.Centerline Property
Parent Object: LoftDefinition
Description
Property that specifies the centerline for the loft. Valid objects includes Profile, Profile3D,
EdgeLoop and EdgeCollection. When this LoftDefinition is associative with an existing
LoftFeature or if it is copied from an LoftDefinition that is associative with a LoftFeature, then set
this property you should follow below rules, otherwise an error would occur:
• If the LoftDefinition.LoftType returns kRegularLoft you can set this property directly.
• If the LoftDefinition.LoftType returns kLoftWithRails you need to clear the
LoftDefinition.LoftRails before setting this property.
• If the LoftDefinition.LoftType returns kLoftWithAreaGraphSections you need to clear the
LoftDefinition.LoftSectionDimensions if any before setting this property,
Syntax
LoftDefinition.Centerline() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2008
LoftDefinition Object Page 3 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
LoftDefinition.Closed Property
Parent Object: LoftDefinition
Description
Property that specifies whether the loft needs to be closed or not.
Syntax
LoftDefinition.Closed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftDefinition.Copy Method
Parent Object: LoftDefinition
Description
Method that creates and returns a copy of this loft definition.
Syntax
LoftDefinition.Copy() As LoftDefinition
Version
Introduced in version 2008
LoftDefinition.FirstSectionAngle Property
Parent Object: LoftDefinition
Description
LoftDefinition Object Page 4 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Property that specifies the angle of the loft in relation to the sketch plane of the starting section.
Syntax
LoftDefinition.FirstSectionAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2008
LoftDefinition.FirstSectionCondition
Property
Parent Object: LoftDefinition
Description
Property that specifies the condition of the loft at the starting section.
Syntax
LoftDefinition.FirstSectionCondition() As LoftConditionEnum
Property Value
This is a read/write property whose value is a LoftConditionEnum.
Version
Introduced in version 2008
LoftDefinition.FirstSectionDirectionReversed
Property
Parent Object: LoftDefinition
LoftDefinition Object Page 5 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Description
Property that specifies whether the takeoff direction for the starting section should be reversed
from its default direction.
Syntax
LoftDefinition.FirstSectionDirectionReversed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftDefinition.FirstSectionImpact Property
Parent Object: LoftDefinition
Description
Property that specifies the impact the starting section's condition has on the shape of the entire
loft.
Syntax
LoftDefinition.FirstSectionImpact() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2008
LoftDefinition.FirstSectionTangentPlane
Property
Parent Object: LoftDefinition
LoftDefinition Object Page 6 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Description
Property that specifies the tangent plane for the starting section in the case that the section is a
point.
Syntax
LoftDefinition.FirstSectionTangentPlane() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2008
LoftDefinition.LastSectionAngle Property
Parent Object: LoftDefinition
Description
Property that specifies the angle of the loft in relation to the sketch plane of the ending section.
Syntax
LoftDefinition.LastSectionAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2008
LoftDefinition.LastSectionCondition Property
Parent Object: LoftDefinition
LoftDefinition Object Page 7 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Description
Property that specifies the condition of the loft at the ending section.
Syntax
LoftDefinition.LastSectionCondition() As LoftConditionEnum
Property Value
This is a read/write property whose value is a LoftConditionEnum.
Version
Introduced in version 2008
LoftDefinition.LastSectionDirectionReversed
Property
Parent Object: LoftDefinition
Description
Property that specifies whether the takeoff direction for the ending section should be reversed
from its default direction.
Syntax
LoftDefinition.LastSectionDirectionReversed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftDefinition.LastSectionImpact Property
Parent Object: LoftDefinition
LoftDefinition Object Page 8 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Description
Property that specifies the impact the ending section's condition has on the shape of the entire loft.
Syntax
LoftDefinition.LastSectionImpact() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2008
LoftDefinition.LastSectionTangentPlane
Property
Parent Object: LoftDefinition
Description
Property that specifies the tangent plane for the ending section in the case that the section is a
point.
Syntax
LoftDefinition.LastSectionTangentPlane() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2008
LoftDefinition.LoftRails Property
Parent Object: LoftDefinition
LoftDefinition Object Page 9 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Description
Read-only property that specifies the rails for the loft. If the LoftDefinition.LoftType is not
kRegularLoft or kLoftWithRails then set this property will raise error, you should follow below
rules to set this property:
• If the LoftDefinition.LoftType returns kRegularLoft you can set this property directly.
• If the LoftDefinition.LoftType returns kLoftWithCenterline you need to clear the
LoftDefinition.Centerline before setting this property.
• If the LoftDefinition.LoftType returns kLoftWithAreaGraphSections you need to clear the
LoftDefinition.LoftSectionDimensions if any and LoftDefinition.Centerline before setting
this property,
Syntax
LoftDefinition.LoftRails() As LoftRails
Property Value
This is a read only property whose value is a LoftRails.
Version
Introduced in version 2008
LoftDefinition.LoftSectionDimensions
Property
Parent Object: LoftDefinition
Description
Read-only property that specifies the placed section dimensions for an area-graph type loft. Before
adding new LoftSectionDimension into this collection the LoftDefinition.Centerline should be set
first, otherwise an error would occur.
LoftDefinition Object Page 10 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Syntax
LoftDefinition.LoftSectionDimensions() As LoftSectionDimensions
Property Value
This is a read only property whose value is a LoftSectionDimensions.
Version
Introduced in version 2008
LoftDefinition.LoftType Property
Parent Object: LoftDefinition
Description
Property that gets the type of loft feature.
Syntax
LoftDefinition.LoftType() As LoftTypeEnum
Property Value
This is a read only property whose value is a LoftTypeEnum.
Version
Introduced in version 2008
LoftDefinition.MapPointCurves Property
Parent Object: LoftDefinition
Description
Property that specifies the mapping to use between sections.
LoftDefinition Object Page 11 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Syntax
LoftDefinition.MapPointCurves() As MapPointCurves
Property Value
This is a read/write property whose value is a MapPointCurves.
Version
Introduced in version 2008
LoftDefinition.MergeTangentFaces Property
Parent Object: LoftDefinition
Description
Property that specifies if the tangent faces of the loft should be merged or not.
Syntax
LoftDefinition.MergeTangentFaces() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftDefinition.Operation Property
Parent Object: LoftDefinition
Description
Property that specifies the type of operation used to add the feature to the model.
LoftDefinition Object Page 12 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
Syntax
LoftDefinition.Operation() As PartFeatureOperationEnum
Property Value
This is a read/write property whose value is a PartFeatureOperationEnum.
Version
Introduced in version 2008
LoftDefinition.Sections Property
Parent Object: LoftDefinition
Description
Property that specifies the sections used for a loft.
Syntax
LoftDefinition.Sections() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2008
LoftDefinition Object Page 13 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh913B.htm 16/06/2025
LoftedFlangeDefinition Object
Description
The LoftedFlangeDefinition object represents all of the information that defines a lofted flange feature. The
LoftedFlangeDefinition object is used in two ways. First it is used as input when creating a lofted flange
feature. Second it is used to query and edit existing lofted flange features.
Methods
Name Description
Copy
Method that creates a copy of this LoftedFlangeDefinition object. The new
LoftedFlangeDefinition object is independent of any feature. It can edited and used as input to
edit an existing feature or to create a new lofted flange feature.
SetOutputType Method that sets the technique that will be used to calculate the lofted flange.
Properties
Name Description
AffectedBodies
Gets and sets the collection of bodies affected by this feature. If this property is
not set for multi-body parts, the default solid body is used as the affected body.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BendRadius
Read-write property that provides access to the bend radius of a lofted flange
feature.
Converge
Read-write property that defines whether the corner of the lofted flange should
converge.
ExtentDirection
Gets and sets the which side of the sketch entities is the direction for the material
to be added.
FacetTolerance
Property that returns the parameter controlling the tolerance used to calculate the
lofted flange. This will return Nothing in the case where the OutputType property
returns kDieFormedLoftedFlange and where the LoftedFlangeDefinition object is
not associated with an existing lofted flange.
IsUnfoldMethodOverridden
Read-write property that gets and set whether the unfold method has been
overridden for this feature. Setting this property to False clears the override.
Setting the property to True returns a failure.
Operation
Gets and sets the type of operation used to add the feature to the model. Valid
inputs are kNewBodyOperation, kJoinOperation.
OutputType
Property that returns the technique being used to calculate the shape of the lofted
flange. To set the output type use the SetOutputType method.
Parent Property that returns the parent LoftedFlangeFeature object.
ProfileOne Gets and sets the first of two profiles defining the lofted flange.
ProfileTwo Gets and sets the second of two profiles defining the lofted flange.
SheetMetalRule
Read-write property that gets and sets the sheet metal style for the body the
feature is in. Set this property is applicable only when the feature is the first
feature in a solid body. When set this property the default sheet metal rule will be
overridden and.
Type Returns an ObjectTypeEnum indicating this object's type.
UnfoldMethod
Gets and set the UnfoldMethod object that defines how the bends associated with
this lofted flange feature are unfolded.
LoftedFlangeDefinition Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
UseDefaultSheetMetalRule Read-write property that gets and sets whether to use the document active sheet
metal style for the body the feature is in. Set this property is applicable only
when the feature is the first feature in a solid body and this can only be set to
True from False.
Accessed From
LoftedFlangeDefinition.Copy, LoftedFlangeFeature.Definition, LoftedFlangeFeatureProxy.Definition,
LoftedFlangeFeatures.CreateLoftedFlangeDefinition
Samples
Name Description
Create sheet metal lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted
flange feature.
Version
Introduced in version 2011
LoftedFlangeDefinition.AffectedBodies Property
Parent Object: LoftedFlangeDefinition
Description
Gets and sets the collection of bodies affected by this feature. If this property is not set for multi-body parts,
the default solid body is used as the affected body.
Syntax
LoftedFlangeDefinition.AffectedBodies() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2016
LoftedFlangeDefinition.Application Property
Parent Object: LoftedFlangeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
LoftedFlangeDefinition Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Syntax
LoftedFlangeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
LoftedFlangeDefinition.BendRadius Property
Parent Object: LoftedFlangeDefinition
Description
Read-write property that provides access to the bend radius of a lofted flange feature.
Syntax
LoftedFlangeDefinition.BendRadius() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
LoftedFlangeDefinition.Converge Property
Parent Object: LoftedFlangeDefinition
Description
Read-write property that defines whether the corner of the lofted flange should converge.
Syntax
LoftedFlangeDefinition.Converge() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LoftedFlangeDefinition Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Version
Introduced in version 2011
LoftedFlangeDefinition.Copy Method
Parent Object: LoftedFlangeDefinition
Description
Method that creates a copy of this LoftedFlangeDefinition object. The new LoftedFlangeDefinition object is
independent of any feature. It can edited and used as input to edit an existing feature or to create a new lofted
flange feature.
Syntax
LoftedFlangeDefinition.Copy() As LoftedFlangeDefinition
Version
Introduced in version 2011
LoftedFlangeDefinition.ExtentDirection Property
Parent Object: LoftedFlangeDefinition
Description
Gets and sets the which side of the sketch entities is the direction for the material to be added.
Syntax
LoftedFlangeDefinition.ExtentDirection() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
Version
Introduced in version 2011
LoftedFlangeDefinition.FacetTolerance Property
Parent Object: LoftedFlangeDefinition
LoftedFlangeDefinition Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Description
Property that returns the parameter controlling the tolerance used to calculate the lofted flange. This will return
Nothing in the case where the OutputType property returns kDieFormedLoftedFlange and where the
LoftedFlangeDefinition object is not associated with an existing lofted flange.
Syntax
LoftedFlangeDefinition.FacetTolerance() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2011
LoftedFlangeDefinition.IsUnfoldMethodOverridden
Property
Parent Object: LoftedFlangeDefinition
Description
Read-write property that gets and set whether the unfold method has been overridden for this feature. Setting
this property to False clears the override. Setting the property to True returns a failure.
Syntax
LoftedFlangeDefinition.IsUnfoldMethodOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
LoftedFlangeDefinition.Operation Property
Parent Object: LoftedFlangeDefinition
Description
Gets and sets the type of operation used to add the feature to the model. Valid inputs are kNewBodyOperation,
kJoinOperation.
LoftedFlangeDefinition Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Syntax
LoftedFlangeDefinition.Operation() As PartFeatureOperationEnum
Property Value
This is a read/write property whose value is a PartFeatureOperationEnum.
Version
Introduced in version 2016
LoftedFlangeDefinition.OutputType Property
Parent Object: LoftedFlangeDefinition
Description
Property that returns the technique being used to calculate the shape of the lofted flange. To set the output type
use the SetOutputType method.
Syntax
LoftedFlangeDefinition.OutputType() As LoftedFlangeOutputTypeEnum
Property Value
This is a read only property whose value is a LoftedFlangeOutputTypeEnum.
Version
Introduced in version 2011
LoftedFlangeDefinition.Parent Property
Parent Object: LoftedFlangeDefinition
Description
Property that returns the parent LoftedFlangeFeature object.
Syntax
LoftedFlangeDefinition.Parent() As LoftedFlangeFeature
Property Value
This is a read only property whose value is a LoftedFlangeFeature.
LoftedFlangeDefinition Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Version
Introduced in version 2011
LoftedFlangeDefinition.ProfileOne Property
Parent Object: LoftedFlangeDefinition
Description
Gets and sets the first of two profiles defining the lofted flange.
Syntax
LoftedFlangeDefinition.ProfileOne() As Path
Property Value
This is a read/write property whose value is a Path.
Version
Introduced in version 2011
LoftedFlangeDefinition.ProfileTwo Property
Parent Object: LoftedFlangeDefinition
Description
Gets and sets the second of two profiles defining the lofted flange.
Syntax
LoftedFlangeDefinition.ProfileTwo() As Path
Property Value
This is a read/write property whose value is a Path.
Version
Introduced in version 2011
LoftedFlangeDefinition.SetOutputType Method
LoftedFlangeDefinition Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Parent Object: LoftedFlangeDefinition
Description
Method that sets the technique that will be used to calculate the lofted flange.
Syntax
LoftedFlangeDefinition.SetOutputType( OutputType As LoftedFlangeOutputTypeEnum, [FacetTolerance]
As Variant )
Parameters
Name Type Description
OutputType LoftedFlangeOutputTypeEnum
Constant that defines the how the lofted flange will be
calculated. Valid values are kDieFormedLoftedFlange,
kPressBrakeChordToleranceLoftedFlange,
kPressBrakeFacetAngleLoftedFlange, and
kPressBrakeFacetDistanceLoftedFlange.
FacetTolerance Variant
Optional Variant that defines the tolerance value used when
calculating the lofted flange. This only applies to the press
brake methods and is ignored if the OutputType argument is
kDieFormedLoftedFlange.
This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value
is assigned to the parameter. If a value is input and the output
type is kPressBrakeChordToleranceLoftedFlange or
kPressBrakeFacetDistanceLoftedFlange, the units are
centimeters. If the output type is
kPressBrakeFacetAngleLoftedFlange, the units are radians. If
a string is input, the units can be specified as part of the string
or it will default to the current length or angle units of the
document.
This is an optional argument whose default value is null.
Samples
Name Description
Create sheet metal lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted
flange feature.
Version
Introduced in version 2011
LoftedFlangeDefinition.SheetMetalRule Property
Parent Object: LoftedFlangeDefinition
LoftedFlangeDefinition Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Description
Read-write property that gets and sets the sheet metal style for the body the feature is in. Set this property is
applicable only when the feature is the first feature in a solid body. When set this property the default sheet
metal rule will be overridden and.
Syntax
LoftedFlangeDefinition.SheetMetalRule() As SheetMetalStyle
Property Value
This is a read/write property whose value is a SheetMetalStyle.
Version
Introduced in version 2018
LoftedFlangeDefinition.Type Property
Parent Object: LoftedFlangeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftedFlangeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
LoftedFlangeDefinition.UnfoldMethod Property
Parent Object: LoftedFlangeDefinition
Description
Gets and set the UnfoldMethod object that defines how the bends associated with this lofted flange feature are
unfolded.
LoftedFlangeDefinition Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
Syntax
LoftedFlangeDefinition.UnfoldMethod() As UnfoldMethod
Property Value
This is a read/write property whose value is a UnfoldMethod.
Version
Introduced in version 2011
LoftedFlangeDefinition.UseDefaultSheetMetalRule
Property
Parent Object: LoftedFlangeDefinition
Description
Read-write property that gets and sets whether to use the document active sheet metal style for the body the
feature is in. Set this property is applicable only when the feature is the first feature in a solid body and this can
only be set to True from False.
Syntax
LoftedFlangeDefinition.UseDefaultSheetMetalRule() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
LoftedFlangeDefinition Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAC84.htm 16/06/2025
LoftedFlangeFeature Object
Derived from: PartFeature Object
Description
The LoftedFlangeFeature object represents a lofted flange sheet metal feature.
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
Definition
Gets and sets the LoftedFlangeDefinition object associated with this lofted
flange feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the faces of
the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
LoftedFlangeFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the
OwnedBy property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
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
Accessed From
LoftedFlangeDefinition.Parent, LoftedFlangeFeatures.Add, LoftedFlangeFeatures.Item
Derived Classes
LoftedFlangeFeatureProxy
Samples
Name Description
Create sheet metal lofted
flange feature
The following sample demonstrates the creation of a sheet metal
lofted flange feature.
Version
Introduced in version 2010
LoftedFlangeFeature.Adaptive Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets whether this feature is adaptive or not.
LoftedFlangeFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Syntax
LoftedFlangeFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeature.Appearance Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets the current appearance of the feature.
Syntax
LoftedFlangeFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
LoftedFlangeFeature.AppearanceSourceType
Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets the source of the appearance for the feature.
LoftedFlangeFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Syntax
LoftedFlangeFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
LoftedFlangeFeature.Application Property
Parent Object: LoftedFlangeFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LoftedFlangeFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LoftedFlangeFeature.AttributeSets Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the AttributeSets collection object associated with this object.
LoftedFlangeFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Syntax
LoftedFlangeFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
LoftedFlangeFeature.ConsumeInputs Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LoftedFlangeFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeature.Definition Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets the LoftedFlangeDefinition object associated with this lofted flange feature.
Syntax
LoftedFlangeFeature.Definition() As LoftedFlangeDefinition
LoftedFlangeFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Property Value
This is a read/write property whose value is a LoftedFlangeDefinition.
Version
Introduced in version 2011
LoftedFlangeFeature.Delete Method
Parent Object: LoftedFlangeFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
LoftedFlangeFeature.Delete( [RetainConsumedSketches] As Boolean,
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
LoftedFlangeFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.ExtendedName Property
Parent Object: LoftedFlangeFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
LoftedFlangeFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
LoftedFlangeFeature.Faces Property
Parent Object: LoftedFlangeFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
LoftedFlangeFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
LoftedFlangeFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.FeatureDimensions
Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
LoftedFlangeFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
LoftedFlangeFeature.GetReferenceKey
Method
Parent Object: LoftedFlangeFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
LoftedFlangeFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
LoftedFlangeFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
LoftedFlangeFeature.GetSuppressionCondition
Method
Parent Object: LoftedFlangeFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Syntax
LoftedFlangeFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
LoftedFlangeFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.HealthStatus Property
Parent Object: LoftedFlangeFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
LoftedFlangeFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
LoftedFlangeFeature.IsOwnedByFeature
Property
Parent Object: LoftedFlangeFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
LoftedFlangeFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
LoftedFlangeFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.Name Property
Parent Object: LoftedFlangeFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
LoftedFlangeFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LoftedFlangeFeature.OwnedBy Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
LoftedFlangeFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
LoftedFlangeFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.Parameters Property
Parent Object: LoftedFlangeFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
LoftedFlangeFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
LoftedFlangeFeature.Parent Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the parent of the feature.
Syntax
LoftedFlangeFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
LoftedFlangeFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.Participants Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in
a part.
Syntax
LoftedFlangeFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
LoftedFlangeFeature.RangeBox Property
Parent Object: LoftedFlangeFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LoftedFlangeFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
LoftedFlangeFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.RemoveParticipant
Method
Parent Object: LoftedFlangeFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
LoftedFlangeFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input ComponentOccurrence
is not a participant.
Version
Introduced in version 2010
LoftedFlangeFeature.SetAffectedBodies
Method
Parent Object: LoftedFlangeFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LoftedFlangeFeature.SetAffectedBodies( Bodies As ObjectCollection )
LoftedFlangeFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LoftedFlangeFeature.SetEndOfPart Method
Parent Object: LoftedFlangeFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
LoftedFlangeFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before
or after this work feature. A value of True indicates before and False indicates
after.
Version
Introduced in version 2010
LoftedFlangeFeature.SetSuppressionCondition
Method
Parent Object: LoftedFlangeFeature
Description
Method that sets the suppression condition for the feature.
LoftedFlangeFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Syntax
LoftedFlangeFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 2010
LoftedFlangeFeature.Shared Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LoftedFlangeFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LoftedFlangeFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.Suppressed Property
Parent Object: LoftedFlangeFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
LoftedFlangeFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeature.SurfaceBodies Property
Parent Object: LoftedFlangeFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
LoftedFlangeFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
LoftedFlangeFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeature.Type Property
Parent Object: LoftedFlangeFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftedFlangeFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
LoftedFlangeFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC943.htm 16/06/2025
LoftedFlangeFeatureProxy Object
Derived from: LoftedFlangeFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which dependent
objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns False if
no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature. This method
fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this method is
called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under this feature in the
browser.
Definition
Gets and sets the LoftedFlangeDefinition object associated with this lofted flange
feature.
ExtendedName
Read-only property that returns the full feature name including any extended
information.
Faces
Property that returns a collection that provides access to all of the faces of the feature.
The Faces collection object will return the faces that still currently exist in the part. For
example, if a face has been consumed by additional modeling operations it will not be
returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy
property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
LoftedFlangeFeatureProxy Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list is empty
for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular
box that is guaranteed to enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Adaptive Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
LoftedFlangeFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Appearance Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
LoftedFlangeFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
LoftedFlangeFeatureProxy Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Version
Introduced in version 2014
LoftedFlangeFeatureProxy.AppearanceSourceType
Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
LoftedFlangeFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
LoftedFlangeFeatureProxy.Application Property
Parent Object: LoftedFlangeFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LoftedFlangeFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
LoftedFlangeFeatureProxy.AttributeSets Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LoftedFlangeFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.ConsumeInputs Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LoftedFlangeFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Definition Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets the LoftedFlangeDefinition object associated with this lofted flange feature.
LoftedFlangeFeatureProxy Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Syntax
LoftedFlangeFeatureProxy.Definition() As LoftedFlangeDefinition
Property Value
This is a read/write property whose value is a LoftedFlangeDefinition.
Version
Introduced in version 2011
LoftedFlangeFeatureProxy.Delete Method
Parent Object: LoftedFlangeFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
LoftedFlangeFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within
the feature should be deleted. If the feature being deleted is not
a sketch based feature this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent features
should be deleted. If there are no dependent features this
argument is ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work
features should be deleted. If there are no dependent work
features this argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.ExtendedName Property
LoftedFlangeFeatureProxy Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Parent Object: LoftedFlangeFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
LoftedFlangeFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
LoftedFlangeFeatureProxy.Faces Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
Syntax
LoftedFlangeFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.FeatureDimensions
Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
LoftedFlangeFeatureProxy Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Syntax
LoftedFlangeFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.GetReferenceKey
Method
Parent Object: LoftedFlangeFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
LoftedFlangeFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2010
LoftedFlangeFeatureProxy.GetSuppressionCondition
Method
Parent Object: LoftedFlangeFeatureProxy
Description
LoftedFlangeFeatureProxy Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Method that gets the suppression condition for the feature. The method returns False if no condition has been
applied.
Syntax
LoftedFlangeFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter
value. This can either be a string or a parameter object.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.HealthStatus Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
LoftedFlangeFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.IsOwnedByFeature
Property
Parent Object: LoftedFlangeFeatureProxy
LoftedFlangeFeatureProxy Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Syntax
LoftedFlangeFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Name Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
LoftedFlangeFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.OwnedBy Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Syntax
LoftedFlangeFeatureProxy.OwnedBy() As PartFeature
LoftedFlangeFeatureProxy Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Parameters Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
LoftedFlangeFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Parent Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
LoftedFlangeFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
LoftedFlangeFeatureProxy.Participants Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
LoftedFlangeFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.RangeBox Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Syntax
LoftedFlangeFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.RemoveParticipant
Method
Parent Object: LoftedFlangeFeatureProxy
Description
LoftedFlangeFeatureProxy Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
LoftedFlangeFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed.
An error occurs if the input ComponentOccurrence is not a participant.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.SetAffectedBodies
Method
Parent Object: LoftedFlangeFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LoftedFlangeFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.SetEndOfPart Method
Parent Object: LoftedFlangeFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
LoftedFlangeFeatureProxy Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Syntax
LoftedFlangeFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this
work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.SetSuppressionCondition
Method
Parent Object: LoftedFlangeFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
LoftedFlangeFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be
checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid
types are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter
value. This can either be a string, a value or a parameter object. If a
value is input, the database units for the units defined by the parameter
are used. For instance, if the parameter defines length units, the value
is assumed to be in centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current units of
the document. For instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
LoftedFlangeFeatureProxy.Shared Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LoftedFlangeFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Suppressed Property
Parent Object: LoftedFlangeFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
LoftedFlangeFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.SurfaceBodies Property
Parent Object: LoftedFlangeFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
LoftedFlangeFeatureProxy Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
Syntax
LoftedFlangeFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy.Type Property
Parent Object: LoftedFlangeFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftedFlangeFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
LoftedFlangeFeatureProxy Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEBFE.htm 16/06/2025
LoftedFlangeFeatures Object
Description
The LoftedFlangeFeatures collection object provides access to the LoftedFlangeFeature objects.
Methods
Name Description
Add
Method that creates a new lofted flange feature. The newly created
LoftedFlangeFeature object is returned.
CreateLoftedFlangeDefinition Method that creates a new LoftedFlangeDefinition object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified LoftedFlangeFeature object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SheetMetalFeatures.LoftedFlangeFeatures
Samples
Name Description
Create sheet metal lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted
flange feature.
Version
Introduced in version 2010
LoftedFlangeFeatures.Add Method
Parent Object: LoftedFlangeFeatures
Description
Method that creates a new lofted flange feature. The newly created LoftedFlangeFeature object is returned.
Syntax
LoftedFlangeFeatures.Add( LoftedFlangeDefinition As LoftedFlangeDefinition ) As LoftedFlangeFeature
LoftedFlangeFeatures Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD80.htm 16/06/2025
Parameters
Name Type Description
LoftedFlangeDefinition LoftedFlangeDefinition
Object that defines the lofted flange feature you want to
create. A LoftedFlangeDefinition object can be created using
the CreateLoftedFlangeDefinition method on the
LoftedFlangeFeatures object.
Samples
Name Description
Create sheet metal lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted
flange feature.
Version
Introduced in version 2011
LoftedFlangeFeatures.Application Property
Parent Object: LoftedFlangeFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LoftedFlangeFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LoftedFlangeFeatures.Count Property
Parent Object: LoftedFlangeFeatures
Description
Property that returns the number of items in this collection.
LoftedFlangeFeatures Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD80.htm 16/06/2025
Syntax
LoftedFlangeFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
LoftedFlangeFeatures.CreateLoftedFlangeDefinition
Method
Parent Object: LoftedFlangeFeatures
Description
Method that creates a new LoftedFlangeDefinition object.
Syntax
LoftedFlangeFeatures.CreateLoftedFlangeDefinition( ProfileOne As Path, ProfileTwo As Path ) As
LoftedFlangeDefinition
Parameters
Name Type Description
ProfileOne Path
The first of two profiles that defines the shape of the lofted flange. Use
PartFeatures.CreatePath method to create this path.
ProfileTwo Path
The second of two profiles that defines the shape of the lofted flange. Use
PartFeatures.CreatePath method to create this path.
Remarks
This object is not a lofted flange feature but contains the information that defines a lofted flange and can be used
to create a new lofted flange. The definition created defines a die formed lofted flange. To create press brake
types of lofted flanges you can edit the definition before using it to create the lofted flange feature.
Samples
Name Description
Create sheet metal lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted
flange feature.
LoftedFlangeFeatures Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD80.htm 16/06/2025
Version
Introduced in version 2011
LoftedFlangeFeatures.Item Property
Parent Object: LoftedFlangeFeatures
Description
Returns the specified LoftedFlangeFeature object from the collection.
Syntax
LoftedFlangeFeatures.Item( Index As Variant ) As LoftedFlangeFeature
Property Value
This is a read only property whose value is a LoftedFlangeFeature.
Parameters
Name Type Description
Index Variant
Input Long or String that specifies the LoftedFlangeFeature object within the collection to
return. Inputting a Long indicates the index of the LoftedFlangeFeature within the collection to
return. A String can also be used to specify the name of the feature. The property will fail is the
index is out of range or the name does not exist.
Version
Introduced in version 2010
LoftedFlangeFeatures.Type Property
Parent Object: LoftedFlangeFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftedFlangeFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LoftedFlangeFeatures Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD80.htm 16/06/2025
Version
Introduced in version 2010
LoftedFlangeFeatures Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD80.htm 16/06/2025
LoftFeature Object
Derived from: PartFeature Object
Description
The LoftFeature object represents an existing loft in an Autodesk Inventor part document. The
LoftFeature is derived from the PartFeature object and inherits all of its methods and properties.
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
Definition Gets and sets the definition for the loft feature.
EndFace
Property that returns the that acts as the cap of the last section of the loft.
This property will return nothing in the cases where the loft does not
have a ending face. These cases are when the loft sections are not closed
or when the loft operation does not result in a solid.
ExtendedName
LoftFeature Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the faces
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
StartFace
Property that returns the that acts as the cap of the first section of the
loft. This property will return nothing in the cases where the loft does not
have a starting face. These cases are when the loft sections are not closed
or when the loft operation does not result in a solid.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LoftFeatureProxy.NativeObject, LoftFeatures.Add, LoftFeatures.Item
Derived Classes
LoftFeatureProxy
Version
Introduced in version 5
LoftFeature Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
LoftFeature.Adaptive Property
Parent Object: LoftFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
LoftFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
LoftFeature.Appearance Property
Parent Object: LoftFeature
Description
Gets and sets the current appearance of the feature.
Syntax
LoftFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
LoftFeature.AppearanceSourceType Property
LoftFeature Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Parent Object: LoftFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
LoftFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
LoftFeature.Application Property
Parent Object: LoftFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LoftFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
LoftFeature.AttributeSets Property
Parent Object: LoftFeature
LoftFeature Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LoftFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
LoftFeature.ConsumeInputs Property
Parent Object: LoftFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LoftFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LoftFeature.Definition Property
Parent Object: LoftFeature
Description
LoftFeature Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Gets and sets the definition for the loft feature.
Syntax
LoftFeature.Definition() As LoftDefinition
Property Value
This is a read/write property whose value is a LoftDefinition.
Version
Introduced in version 2008
LoftFeature.Delete Method
Parent Object: LoftFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
LoftFeature.Delete( [RetainConsumedSketches] As Boolean,
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
LoftFeature Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 5
LoftFeature.EndFace Property
Parent Object: LoftFeature
Description
Property that returns the that acts as the cap of the last section of the loft. This property will return
nothing in the cases where the loft does not have a ending face. These cases are when the loft
sections are not closed or when the loft operation does not result in a solid.
Syntax
LoftFeature.EndFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 6
LoftFeature.ExtendedName Property
Parent Object: LoftFeature
Description
Read-only property that returns the full feature name including any extended information.
LoftFeature Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
LoftFeature.Faces Property
Parent Object: LoftFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
LoftFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5
LoftFeature.FeatureDimensions Property
Parent Object: LoftFeature
Description
Property that returns the FeatureDimensions collection object.
LoftFeature Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
LoftFeature.GetReferenceKey Method
Parent Object: LoftFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
LoftFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
LoftFeature Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
LoftFeature.GetSuppressionCondition
Method
Parent Object: LoftFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
LoftFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
LoftFeature.HealthStatus Property
Parent Object: LoftFeature
Description
Property that returns an enum indicating the current state of the object.
LoftFeature Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
LoftFeature.IsOwnedByFeature Property
Parent Object: LoftFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
LoftFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
LoftFeature.Name Property
Parent Object: LoftFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
LoftFeature Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
LoftFeature.OwnedBy Property
Parent Object: LoftFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
LoftFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
LoftFeature.Parameters Property
Parent Object: LoftFeature
Description
Property that returns all the parameters associated with the feature.
LoftFeature Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
LoftFeature.Parent Property
Parent Object: LoftFeature
Description
Property that returns the parent of the feature.
Syntax
LoftFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5
LoftFeature.Participants Property
Parent Object: LoftFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
LoftFeature Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
LoftFeature.RangeBox Property
Parent Object: LoftFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LoftFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
LoftFeature.RemoveParticipant Method
Parent Object: LoftFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
LoftFeature Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
LoftFeature.SetAffectedBodies Method
Parent Object: LoftFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LoftFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LoftFeature.SetEndOfPart Method
Parent Object: LoftFeature
Description
LoftFeature Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
LoftFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
LoftFeature.SetSuppressionCondition
Method
Parent Object: LoftFeature
Description
Method that sets the suppression condition for the feature.
Syntax
LoftFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
LoftFeature Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
or a parameter object. If a value is input, the database
units for the units defined by the parameter are used.
For instance, if the parameter defines length units, the
value is assumed to be in centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current units of the document. For
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 11
LoftFeature.Shared Property
Parent Object: LoftFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LoftFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LoftFeature.SideFaces Property
Parent Object: LoftFeature
Description
Property that returns a object that provides access to all of the faces created around the perimeter
of the feature.
LoftFeature Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 6
LoftFeature.StartFace Property
Parent Object: LoftFeature
Description
Property that returns the that acts as the cap of the first section of the loft. This property will return
nothing in the cases where the loft does not have a starting face. These cases are when the loft
sections are not closed or when the loft operation does not result in a solid.
Syntax
LoftFeature.StartFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 6
LoftFeature.Suppressed Property
Parent Object: LoftFeature
Description
Gets and sets whether this feature is suppressed or not.
LoftFeature Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
LoftFeature.SurfaceBodies Property
Parent Object: LoftFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
LoftFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
LoftFeature.Type Property
Parent Object: LoftFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
LoftFeature Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
Syntax
LoftFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
LoftFeature Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh28C8.htm 16/06/2025
LanguageTools Object
Description
The LanguageTools object provides a means of determining the logical boolean value of
iPart/iComponent table strings.
Methods
Name Description
GetiComponentStringValue
Method that returns the logical value of the input iComponent string. For
instance, if the input string is 'Include', a value of True is returned. The input
string can be in any of the supported localized languages.
IsValidPrimaryModelState
Method that returns whether the input primary model state string is valid or
not. The input primary model state string can be in any language that
Inventor supports.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
CurrentPrimaryModelStateString
Read-only property that returns the primary ModelState string in
current language.
Parent Property that returns the parent Application object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.LanguageTools, InventorServer.LanguageTools, InventorServerObject.LanguageTools
Version
Introduced in version 2008
LanguageTools.Application Property
Parent Object: LanguageTools
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
LanguageTools Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE.htm 16/06/2025
Syntax
LanguageTools.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LanguageTools.CurrentPrimaryModelStateString
Property
Parent Object: LanguageTools
Description
Read-only property that returns the primary ModelState string in current language.
Syntax
LanguageTools.CurrentPrimaryModelStateString() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
LanguageTools.GetiComponentStringValue
Method
Parent Object: LanguageTools
Description
Method that returns the logical value of the input iComponent string. For instance, if the input string is
'Include', a value of True is returned. The input string can be in any of the supported localized languages.
LanguageTools Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE.htm 16/06/2025
Syntax
LanguageTools.GetiComponentStringValue( iComponentString As String ) As Boolean
Parameters
Name Type Description
iComponentString String Return the logical value of this string.
Remarks
This method will only deal with strings that have a Boolean value associated with them. For instance, if
any of the following strings is input, the return value from the method will be True: * Include (English) *
Einschlieen (German) * Inclure (French) * Incluir (Spanish) * Yes (Synonym) * yes (Synonym) * YES
(Synonym) * 1 (Synonym) This method will not work with strings that don't have a clear Boolean value,
for example: * Family * Designation * Class
Version
Introduced in version 2008
LanguageTools.IsValidPrimaryModelState
Method
Parent Object: LanguageTools
Description
Method that returns whether the input primary model state string is valid or not. The input primary model
state string can be in any language that Inventor supports.
Syntax
LanguageTools.IsValidPrimaryModelState( PrimaryName As String ) As Boolean
Parameters
Name Type Description
PrimaryName String Input String value that specifies the primary model state string. This string can be in
any language that Inventor supports. Below are the valid localized string for
primary model state string in different languages:
{"en-US", "[Primary]"},
{"ja-JP", "[プライマリ]"},
{"de-DE", "[Primär]"},
{"cs-CZ", "[Primární]"},
{"pl-PL", "[Główny]"},
LanguageTools Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE.htm 16/06/2025
{"ru-RU", "[Oсновной]"},
{"it-IT", "[Primario]"},
{"fr-FR", "[Principale]"},
{"es-ES", "[Principal]"},
{"pt-BR", "[Principal]"},
{"ko-KR", "[1차]"},
{"zh-CN", "[主要]"},
{"zh-TW", "[主要]"}.
Version
Introduced in version 2023
LanguageTools.Parent Property
Parent Object: LanguageTools
Description
Property that returns the parent Application object.
Syntax
LanguageTools.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LanguageTools.Type Property
Parent Object: LanguageTools
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LanguageTools.Type() As ObjectTypeEnum
LanguageTools Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
LanguageTools Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE.htm 16/06/2025
Layer Object
Derived from: Style Object
Description
The Layer object represents a layer in a drawing document.
Methods
Name Description
ConvertToLocal
Method that creates a local cached copy of a global style and returns the
local style.
Copy
Method that creates a new local Style object. The newly created style is
returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
GetCustomLineType
Method that returns information regarding the custom line type in use, or a
failure if it is not a kCustomLineType.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same
name is found in the repository, that style is updated.
SetCustomLineType
Method that sets a custom line type to the entity from the specified .lin file.
The method automatically changes the value of the LineType property to
kCustomLineType.
UpdateFromGlobal Method that updates this style from the global repository.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AutomaticColor
Property that gets and sets whether to use the default color for the layer. This
property can only be set to True. Setting the Color property automatically
sets this property to False.
Color Property that gets and sets the color used for the layer.
Comments Gets and sets comments associated with the style.
InternalName
Property that returns the internal name of the style. The name is the internal
English name of the standard style. This name will remain constant and is
not affected by locale. This name is never displayed to the user. Note that
this name is not guaranteed to be unique.
InUse Property that indicates if this style is in use.
LineType Property that gets and sets the line type override. Setting the property to
kDefaultLineType restores the default line type. If the property returns
Layer Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
kCustomLineType, the GetCustomLineType method can be used to get
further details about the line type.
LineWeight
Property that gets and sets the thickness of this primitive/object. If
LineDefinitionSpace is set to kScreenSpace, this value is defined in pixels.
If LineDefinitionSpace is set to kModelSpace, this value is defined in model
units (centimeters).
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
Plot
Property that gets and sets whether this layer is plotted. If set to False, the
layer continues to display in the drawing but will neither get printed nor
published.
ScaleByLineWeight
Property that gets and sets whether to scale the line type based on the line
weight value.
StyleLocation
Property that returns the location of this style, i.e. local to the document,
cached locally in the document, exists in the library. Styles that exist in the
library cannot be edited.
StyleType Gets the type of the style.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate
Property that gets the up-to-date status of the style against the global
repository.
Visible Property that gets and sets whether the layer is turned on or off.
Accessed From
AngularGeneralDimension.Layer, AutoCADBlock.Layer, Balloon.Layer,
BaselineDimensionSet.Layer, BendNote.Layer, BreakOperation.Layer, Centerline.Layer,
Centermark.Layer, ChainDimensionSet.Layer, ChamferNote.Layer, CustomTable.Layer,
DetailDrawingView.BoundaryLayer, DiameterGeneralDimension.Layer,
DrawingCurveSegment.Layer, DrawingDimension.Layer, DrawingNote.Layer,
DrawingViewHatchRegion.Layer, DrawingViewLabel.Layer, DrawingWeldingSymbol.Layer,
EdgeSymbolDefinition.Layer, FeatureControlFrame.Layer, GeneralDimension.Layer,
GeneralNote.Layer, HoleTable.Layer, HoleTag.Layer, HoleThreadNote.Layer,
LayersEnumerator.Item, LeaderNote.Layer, LinearGeneralDimension.Layer,
ObjectDefaultsStyle.AngularDimensionLayer, ObjectDefaultsStyle.BalloonLayer,
ObjectDefaultsStyle.BaselineDimensionLayer, ObjectDefaultsStyle.BendNoteLayer,
ObjectDefaultsStyle.BendTableLayer, ObjectDefaultsStyle.BendTagLayer,
ObjectDefaultsStyle.BorderGeometryLayer, ObjectDefaultsStyle.BorderTextLayer,
ObjectDefaultsStyle.CenterlineLayer, ObjectDefaultsStyle.CentermarkLayer,
ObjectDefaultsStyle.CenterOfGravityLayer, ObjectDefaultsStyle.ChainDimensionLayer,
ObjectDefaultsStyle.ChamferNoteLayer, ObjectDefaultsStyle.ConfigurationTableLayer,
ObjectDefaultsStyle.DiameterDimensionLayer, ObjectDefaultsStyle.EdgeSymbolLayer,
ObjectDefaultsStyle.FeatureControlFrameLayer, ObjectDefaultsStyle.GeneralNoteLayer,
ObjectDefaultsStyle.HoleNoteLayer, ObjectDefaultsStyle.HoleTableLayer,
ObjectDefaultsStyle.HoleTagLayer, ObjectDefaultsStyle.LeaderTextLayer,
ObjectDefaultsStyle.LinearDimensionLayer, ObjectDefaultsStyle.OrdinateDimensionLayer,
ObjectDefaultsStyle.OrdinateDimensionSetLayer, ObjectDefaultsStyle.OriginIndicatorLayer,
ObjectDefaultsStyle.PartsListLayer, ObjectDefaultsStyle.PunchNoteLayer,
ObjectDefaultsStyle.RadialDimensionLayer, ObjectDefaultsStyle.RevisionTableLayer,
ObjectDefaultsStyle.RevisionTagLayer, ObjectDefaultsStyle.SheetMetalPunchLayer,
ObjectDefaultsStyle.Sketch3DGeometryLayer,
Layer Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
ObjectDefaultsStyle.SketchedSymbolGeometryLayer,
ObjectDefaultsStyle.SketchedSymbolLeaderLayer,
ObjectDefaultsStyle.SketchedSymbolTextLayer, ObjectDefaultsStyle.SketchGeometryLayer,
ObjectDefaultsStyle.SketchTextLayer, ObjectDefaultsStyle.SurfaceTextureLayer,
ObjectDefaultsStyle.TableLayer, ObjectDefaultsStyle.ThreadNoteLayer,
ObjectDefaultsStyle.TitleBlockGeometryLayer, ObjectDefaultsStyle.TitleBlockTextLayer,
ObjectDefaultsStyle.ViewLabelLayer, ObjectDefaultsStyle.WeldSymbolLayer,
ObjectDefaultsStyle.WorkAxisLayer, ObjectDefaultsStyle.WorkPlaneLayer,
ObjectDefaultsStyle.WorkPointLayer, OrdinateDimension.Layer, OrdinateDimensionSet.Layer,
OriginIndicator.Layer, PartsList.Layer, PunchNote.Layer, RadiusGeneralDimension.Layer,
RevisionCloudDefinition.Layer, RevisionTable.Layer, SketchArc.Layer, SketchArcProxy.Layer,
SketchCircle.Layer, SketchCircleProxy.Layer, SketchControlPointSpline.Layer,
SketchControlPointSplineProxy.Layer, SketchedSymbol.Layer, SketchEllipse.Layer,
SketchEllipseProxy.Layer, SketchEllipticalArc.Layer, SketchEllipticalArcProxy.Layer,
SketchEntity.Layer, SketchEquationCurve.Layer, SketchEquationCurveProxy.Layer,
SketchFixedSpline.Layer, SketchFixedSplineProxy.Layer, SketchHatchRegion.Layer,
SketchLine.Layer, SketchLineProxy.Layer, SketchOffsetSpline.Layer,
SketchOffsetSplineProxy.Layer, SketchPoint.Layer, SketchPointProxy.Layer,
SketchSpline.Layer, SketchSplineHandle.Layer, SketchSplineHandleProxy.Layer,
SketchSplineProxy.Layer, SurfaceTextureSymbol.Layer, TextBox.Layer, TextBoxProxy.Layer
Samples
Name Description
Moving sketch entities to
a new layer
This sample demonstrates the creation of a new layer and moving
sketch entities onto this newly created layer.
Version
Introduced in version 10
Layer.Application Property
Parent Object: Layer
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Layer.Application() As Object
Layer Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
Layer.AutomaticColor Property
Parent Object: Layer
Description
Property that gets and sets whether to use the default color for the layer. This property can only be
set to True. Setting the Color property automatically sets this property to False.
Syntax
Layer.AutomaticColor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
Layer.Color Property
Parent Object: Layer
Description
Property that gets and sets the color used for the layer.
Syntax
Layer.Color() As Color
Layer Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 10
Layer.Comments Property
Parent Object: Layer
Description
Gets and sets comments associated with the style.
Syntax
Layer.Comments() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
Layer.ConvertToLocal Method
Parent Object: Layer
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
Layer.ConvertToLocal() As Style
Layer Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Version
Introduced in version 10
Layer.Copy Method
Parent Object: Layer
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
Layer.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String
Input String that specifies the name for the new style. This name must be unique
with respect to all other styles of a similar type in the document. That is, if a
dimension style is being copied, the name must be unique with respect to all the
other dimension styles. If it is not unique the method will fail.
Samples
Name Description
Moving sketch entities to
a new layer
This sample demonstrates the creation of a new layer and moving
sketch entities onto this newly created layer.
Version
Introduced in version 10
Layer.Delete Method
Parent Object: Layer
Description
Method that deletes the Style/Layer/UnfoldMethod.
Layer Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Syntax
Layer.Delete()
Version
Introduced in version 10
Layer.GetCustomLineType Method
Parent Object: Layer
Description
Method that returns information regarding the custom line type in use, or a failure if it is not a
kCustomLineType.
Syntax
Layer.GetCustomLineType( LineTypeName As String, LineTypeDescription As String )
Parameters
Name Type Description
LineTypeName String The name of the custom line type in use.
LineTypeDescription String The description of the line type in use.
Version
Introduced in version 2008
Layer.GetReferenceKey Method
Parent Object: Layer
Description
Method that generates and returns the reference key for this entity.
Syntax
Layer.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Layer Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
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
Introduced in version 2008
Layer.InternalName Property
Parent Object: Layer
Description
Property that returns the internal name of the style. The name is the internal English name of the
standard style. This name will remain constant and is not affected by locale. This name is never
displayed to the user. Note that this name is not guaranteed to be unique.
Syntax
Layer.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
Layer.InUse Property
Parent Object: Layer
Layer Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Description
Property that indicates if this style is in use.
Syntax
Layer.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
Layer.LineType Property
Parent Object: Layer
Description
Property that gets and sets the line type override. Setting the property to kDefaultLineType
restores the default line type. If the property returns kCustomLineType, the GetCustomLineType
method can be used to get further details about the line type.
Syntax
Layer.LineType() As LineTypeEnum
Property Value
This is a read/write property whose value is a LineTypeEnum.
Samples
Name Description
Moving sketch entities to
a new layer
This sample demonstrates the creation of a new layer and moving
sketch entities onto this newly created layer.
Version
Introduced in version 10
Layer Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Layer.LineWeight Property
Parent Object: Layer
Description
Property that gets and sets the thickness of this primitive/object. If LineDefinitionSpace is set to
kScreenSpace, this value is defined in pixels. If LineDefinitionSpace is set to kModelSpace, this
value is defined in model units (centimeters).
Syntax
Layer.LineWeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Layer.Name Property
Parent Object: Layer
Description
Gets/Sets the name of the Style.
Syntax
Layer.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
Layer Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Layer.Parent Property
Parent Object: Layer
Description
Property returning the parent of this object.
Syntax
Layer.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
Layer.Plot Property
Parent Object: Layer
Description
Property that gets and sets whether this layer is plotted. If set to False, the layer continues to
display in the drawing but will neither get printed nor published.
Syntax
Layer.Plot() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
Layer Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Layer.SaveToGlobal Method
Parent Object: Layer
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
Syntax
Layer.SaveToGlobal()
Version
Introduced in version 10
Layer.ScaleByLineWeight Property
Parent Object: Layer
Description
Property that gets and sets whether to scale the line type based on the line weight value.
Syntax
Layer.ScaleByLineWeight() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
Layer.SetCustomLineType Method
Parent Object: Layer
Layer Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Description
Method that sets a custom line type to the entity from the specified .lin file. The method
automatically changes the value of the LineType property to kCustomLineType.
Syntax
Layer.SetCustomLineType( FullFileName As String, LineTypeName As String,
ReplaceExisting As Boolean )
Parameters
Name Type Description
FullFileName String The full path and file name of the .lin file.
LineTypeName String The linetype name specified in the .lin file.
ReplaceExisting Boolean Indicates whether to override an existing line type of the same name.
Version
Introduced in version 2008
Layer.StyleLocation Property
Parent Object: Layer
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the
document, exists in the library. Styles that exist in the library cannot be edited.
Syntax
Layer.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 10
Layer Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Layer.StyleType Property
Parent Object: Layer
Description
Gets the type of the style.
Syntax
Layer.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2008
Layer.Type Property
Parent Object: Layer
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Layer.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
Layer.UpdateFromGlobal Method
Layer Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Parent Object: Layer
Description
Method that updates this style from the global repository.
Syntax
Layer.UpdateFromGlobal()
Version
Introduced in version 10
Layer.UpToDate Property
Parent Object: Layer
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
Layer.UpToDate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
Layer.Visible Property
Parent Object: Layer
Description
Property that gets and sets whether the layer is turned on or off.
Layer Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
Syntax
Layer.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Moving sketch entities to
a new layer
This sample demonstrates the creation of a new layer and moving
sketch entities onto this newly created layer.
Version
Introduced in version 10
Layer Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh560F.htm 16/06/2025
LayersEnumerator Object
Description
The LayersEnumerator object provides access to the existing Layer objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified Layer object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingStylesManager.Layers
Version
Introduced in version 10
LayersEnumerator.Application Property
Parent Object: LayersEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LayersEnumerator.Application() As Object
Property Value
This is a read only property whose value is an Object.
LayersEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7484.htm 16/06/2025
Version
Introduced in version 10
LayersEnumerator.Count Property
Parent Object: LayersEnumerator
Description
Property that returns the number of items in the collection.
Syntax
LayersEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
LayersEnumerator.Item Property
Parent Object: LayersEnumerator
Description
Returns the specified Layer object from the collection.
Syntax
LayersEnumerator.Item( Index As Variant ) As Layer
Property Value
This is a read only property whose value is a Layer.
Parameters
LayersEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7484.htm 16/06/2025
Name Type Description
Index Variant
Input Variant value that specifies the Layer to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string
indicating the internal name of a Layer. If an out of range index or a name of a
non-existent Layer is provided, an error will occur.
Samples
Name Description
Moving sketch entities to
a new layer
This sample demonstrates the creation of a new layer and moving
sketch entities onto this newly created layer.
Version
Introduced in version 10
LayersEnumerator.Type Property
Parent Object: LayersEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LayersEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LayersEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7484.htm 16/06/2025
LayoutConstraint Object
Description
The LayoutConstraint object represents a layout constraint within an assembly.
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
HealthStatus Property that returns an enum indicating the current state of the object.
Name Gets/Sets the displayable name of this constraint.
Parent Property that returns the parent of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
XYFlushConstraint
Property that returns the flush constraint that defines the XY plane of the
layout constraint.
XZFlushConstraint
Property that returns the flush constraint that defines the XZ plane of the
layout constraint.
YZFlushConstraint
Property that returns the flush constraint that defines the YZ plane of the
layout constraint.
ZAngleConstraint
Property that returns the angle constraint that defines the rotation about the Z
axis of the layout constraint.
Accessed From
AngleConstraint.LayoutConstraint, AngleConstraintProxy.LayoutConstraint,
AssemblyConstraint.LayoutConstraint, AssemblySymmetryConstraint.LayoutConstraint,
AssemblySymmetryConstraintProxy.LayoutConstraint, CustomConstraint.LayoutConstraint,
CustomConstraintProxy.LayoutConstraint, FlushConstraint.LayoutConstraint,
FlushConstraintProxy.LayoutConstraint, InsertConstraint.LayoutConstraint,
InsertConstraintProxy.LayoutConstraint, LayoutConstraintProxy.NativeObject,
MateConstraint.LayoutConstraint, MateConstraintProxy.LayoutConstraint,
RotateRotateConstraint.LayoutConstraint, RotateRotateConstraintProxy.LayoutConstraint,
RotateTranslateConstraint.LayoutConstraint, RotateTranslateConstraintProxy.LayoutConstraint,
TangentConstraint.LayoutConstraint, TangentConstraintProxy.LayoutConstraint,
LayoutConstraint Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
TransitionalConstraint.LayoutConstraint, TransitionalConstraintProxy.LayoutConstraint,
TranslateTranslateConstraint.LayoutConstraint,
TranslateTranslateConstraintProxy.LayoutConstraint
Derived Classes
LayoutConstraintProxy
Version
Introduced in version 2010
LayoutConstraint.Application Property
Parent Object: LayoutConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LayoutConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LayoutConstraint.AttributeSets Property
Parent Object: LayoutConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
LayoutConstraint Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
Syntax
LayoutConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
LayoutConstraint.Delete Method
Parent Object: LayoutConstraint
Description
Method that deletes the constraint.
Syntax
LayoutConstraint.Delete()
Version
Introduced in version 2010
LayoutConstraint.GetReferenceKey Method
Parent Object: LayoutConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
LayoutConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
LayoutConstraint Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
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
Introduced in version 2010
LayoutConstraint.HealthStatus Property
Parent Object: LayoutConstraint
Description
Property that returns an enum indicating the current state of the object.
Syntax
LayoutConstraint.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
LayoutConstraint Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
LayoutConstraint.Name Property
Parent Object: LayoutConstraint
Description
Gets/Sets the displayable name of this constraint.
Syntax
LayoutConstraint.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LayoutConstraint.Parent Property
Parent Object: LayoutConstraint
Description
Property that returns the parent of the object.
Syntax
LayoutConstraint.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
Version
Introduced in version 2010
LayoutConstraint.Type Property
LayoutConstraint Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
Parent Object: LayoutConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LayoutConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
LayoutConstraint.XYFlushConstraint
Property
Parent Object: LayoutConstraint
Description
Property that returns the flush constraint that defines the XY plane of the layout constraint.
Syntax
LayoutConstraint.XYFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
Version
Introduced in version 2010
LayoutConstraint Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
LayoutConstraint.XZFlushConstraint
Property
Parent Object: LayoutConstraint
Description
Property that returns the flush constraint that defines the XZ plane of the layout constraint.
Syntax
LayoutConstraint.XZFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
Version
Introduced in version 2010
LayoutConstraint.YZFlushConstraint
Property
Parent Object: LayoutConstraint
Description
Property that returns the flush constraint that defines the YZ plane of the layout constraint.
Syntax
LayoutConstraint.YZFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
Version
Introduced in version 2010
LayoutConstraint Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
LayoutConstraint.ZAngleConstraint Property
Parent Object: LayoutConstraint
Description
Property that returns the angle constraint that defines the rotation about the Z axis of the layout
constraint.
Syntax
LayoutConstraint.ZAngleConstraint() As AngleConstraint
Property Value
This is a read only property whose value is an AngleConstraint.
Version
Introduced in version 2010
LayoutConstraint Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C23.htm 16/06/2025
LayoutConstraintProxy Object
Derived from: LayoutConstraint Object
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
HealthStatus Property that returns an enum indicating the current state of the object.
Name Gets/Sets the displayable name of this constraint.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent Property that returns the parent of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
XYFlushConstraint
Property that returns the flush constraint that defines the XY plane of the
layout constraint.
XZFlushConstraint
Property that returns the flush constraint that defines the XZ plane of the
layout constraint.
YZFlushConstraint
Property that returns the flush constraint that defines the YZ plane of the
layout constraint.
ZAngleConstraint
Property that returns the angle constraint that defines the rotation about the
Z axis of the layout constraint.
Version
Introduced in version 2010
LayoutConstraintProxy Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
LayoutConstraintProxy.Application Property
Parent Object: LayoutConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LayoutConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
LayoutConstraintProxy.AttributeSets
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LayoutConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
LayoutConstraintProxy Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
LayoutConstraintProxy.ContainingOccurrence
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
LayoutConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2010
LayoutConstraintProxy.Delete Method
Parent Object: LayoutConstraintProxy
Description
Method that deletes the constraint.
Syntax
LayoutConstraintProxy.Delete()
Version
Introduced in version 2010
LayoutConstraintProxy.GetReferenceKey
Method
LayoutConstraintProxy Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Parent Object: LayoutConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
LayoutConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2010
LayoutConstraintProxy.HealthStatus Property
Parent Object: LayoutConstraintProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
LayoutConstraintProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
LayoutConstraintProxy Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Version
Introduced in version 2010
LayoutConstraintProxy.Name Property
Parent Object: LayoutConstraintProxy
Description
Gets/Sets the displayable name of this constraint.
Syntax
LayoutConstraintProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
LayoutConstraintProxy.NativeObject
Property
Parent Object: LayoutConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
LayoutConstraintProxy.NativeObject() As LayoutConstraint
Property Value
This is a read only property whose value is a LayoutConstraint.
LayoutConstraintProxy Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Version
Introduced in version 2010
LayoutConstraintProxy.Parent Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the parent of the object.
Syntax
LayoutConstraintProxy.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
Version
Introduced in version 2010
LayoutConstraintProxy.Type Property
Parent Object: LayoutConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LayoutConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LayoutConstraintProxy Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Version
Introduced in version 2010
LayoutConstraintProxy.XYFlushConstraint
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the flush constraint that defines the XY plane of the layout constraint.
Syntax
LayoutConstraintProxy.XYFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
Version
Introduced in version 2010
LayoutConstraintProxy.XZFlushConstraint
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the flush constraint that defines the XZ plane of the layout constraint.
Syntax
LayoutConstraintProxy.XZFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
LayoutConstraintProxy Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Version
Introduced in version 2010
LayoutConstraintProxy.YZFlushConstraint
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the flush constraint that defines the YZ plane of the layout constraint.
Syntax
LayoutConstraintProxy.YZFlushConstraint() As FlushConstraint
Property Value
This is a read only property whose value is a FlushConstraint.
Version
Introduced in version 2010
LayoutConstraintProxy.ZAngleConstraint
Property
Parent Object: LayoutConstraintProxy
Description
Property that returns the angle constraint that defines the rotation about the Z axis of the layout
constraint.
Syntax
LayoutConstraintProxy.ZAngleConstraint() As AngleConstraint
Property Value
This is a read only property whose value is an AngleConstraint.
LayoutConstraintProxy Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Version
Introduced in version 2010
LayoutConstraintProxy Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA911.htm 16/06/2025
Leader Object
Description
The Leader object represents a leader associated with a drawing annotation.
Methods
Name Description
AddLeader
Method that adds a leader branch with the input points. This is the equivalent
of the 'Add Leader' command in the user interface. This method will succeed
only if the HasRootNode property returns False (i.e. there are no existing
leader segments). If there are existing leader segments, this method will fail
you should use the LeaderNode.AddLeader method instead.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AllLeafNodes
Property that returns a flat collection of all the leaf nodes in the leader tree. This
property will return Nothing if the HasRootNode property returns False.
AllNodes
Property that returns a flat collection of all the nodes in the leader tree. This
property will return Nothing if the HasRootNode property returns False.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ArrowheadType Gets and sets the arrowhead type of the leader.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
HasRootNode
Property that returns if a root node exists for this leader. If False, there are no
leader segments associated with this leader and the RootNode property will
return Nothing.
Parent Property that returns the parent of this leader object.
RootNode
Property that returns the root node of this leader. This property will return
Nothing if the HasRootNode property returns False.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Balloon.Leader, BendNote.Leader, ChamferNote.Leader, DrawingWeldingSymbol.Leader,
FeatureControlFrame.Leader, HoleTag.Leader, LeaderNote.Leader, PunchNote.Leader,
SketchedSymbol.Leader, SurfaceTextureSymbol.Leader
Leader Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Version
Introduced in version 11
Leader.AddLeader Method
Parent Object: Leader
Description
Method that adds a leader branch with the input points. This is the equivalent of the 'Add Leader'
command in the user interface. This method will succeed only if the HasRootNode property
returns False (i.e. there are no existing leader segments). If there are existing leader segments, this
method will fail you should use the LeaderNode.AddLeader method instead.
Syntax
Leader.AddLeader( Points As ObjectCollection )
Parameters
Name Type Description
Points ObjectCollection
ObjectCollection containing a series of Point2d objects representing a
leader branch originating at the drawing annotation or symbol. The first
point indicates the position of the root node. The last item in the
collection can be a GeometryIntent object indicating a geometry to
attach the leader branch to. The ObjectCollection must contain at least
two items, else the method will fail.
Version
Introduced in version 11
Leader.AllLeafNodes Property
Parent Object: Leader
Description
Property that returns a flat collection of all the leaf nodes in the leader tree. This property will
return Nothing if the HasRootNode property returns False.
Leader Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Syntax
Leader.AllLeafNodes() As LeaderNodesEnumerator
Property Value
This is a read only property whose value is a LeaderNodesEnumerator.
Version
Introduced in version 11
Leader.AllNodes Property
Parent Object: Leader
Description
Property that returns a flat collection of all the nodes in the leader tree. This property will return
Nothing if the HasRootNode property returns False.
Syntax
Leader.AllNodes() As LeaderNodesEnumerator
Property Value
This is a read only property whose value is a LeaderNodesEnumerator.
Version
Introduced in version 11
Leader.Application Property
Parent Object: Leader
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Leader Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Syntax
Leader.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
Leader.ArrowheadType Property
Parent Object: Leader
Description
Gets and sets the arrowhead type of the leader.
Syntax
Leader.ArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2008
Leader.AttributeSets Property
Parent Object: Leader
Description
Property that returns the AttributeSets collection object associated with this object.
Leader Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Syntax
Leader.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
Leader.GetReferenceKey Method
Parent Object: Leader
Description
Method that generates and returns the reference key for this entity.
Syntax
Leader.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Leader Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Version
Introduced in version 11
Leader.HasRootNode Property
Parent Object: Leader
Description
Property that returns if a root node exists for this leader. If False, there are no leader segments
associated with this leader and the RootNode property will return Nothing.
Syntax
Leader.HasRootNode() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
Leader.Parent Property
Parent Object: Leader
Description
Property that returns the parent of this leader object.
Syntax
Leader.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Leader Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Version
Introduced in version 11
Leader.RootNode Property
Parent Object: Leader
Description
Property that returns the root node of this leader. This property will return Nothing if the
HasRootNode property returns False.
Syntax
Leader.RootNode() As LeaderNode
Property Value
This is a read only property whose value is a LeaderNode.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
Leader.Type Property
Parent Object: Leader
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Leader.Type() As ObjectTypeEnum
Leader Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
Leader Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6DA.htm 16/06/2025
LeaderNode Object
Description
The LeaderNode object represents a node in a leader.
Methods
Name Description
AddLeader
Method that adds a leader branch with the input points. This is the equivalent
of the 'Add Leader' command in the user interface.
Delete Method that deletes this leader node.
GetReferenceKey Method that generates and returns the reference key for this entity.
InsertNode
Method that adds a LeaderNode at the specified position between two existing
leader nodes. This is the equivalent of the 'Add Vertex' command in the user
interface. This method does not apply for leaf nodes.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttachedEntity Gets and sets the attached entity of the leaf leader node.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
ChildNodes
Property that returns the children nodes under this node. The count will return 0 if
the node is a leaf node.
Parent
Property that returns the parent of this leader node object. This could either be
another LeaderNode object or the Leader object in case of a root node.
Position Gets and sets the leader node location on the sheet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Leader.RootNode, LeaderNode.InsertNode, LeaderNodesEnumerator.Item
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
LeaderNode Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Version
Introduced in version 11
LeaderNode.AddLeader Method
Parent Object: LeaderNode
Description
Method that adds a leader branch with the input points. This is the equivalent of the 'Add Leader'
command in the user interface.
Syntax
LeaderNode.AddLeader( Points As ObjectCollection )
Parameters
Name Type Description
Points ObjectCollection
ObjectCollection containing a series of points representing a leader
branch, that originates at the node that the branch is being attached to
and terminates at the leaf of the branch. If the first point specified has the
same position as the node that the branch is being attached to, then the
first point is ignored. The last item in the collection can be a
GeometryIntent object indicating a geometry to attach the leader branch
to. The ObjectCollection must contain at least one item, else the method
will fail.
Version
Introduced in version 11
LeaderNode.Application Property
Parent Object: LeaderNode
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
LeaderNode Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Syntax
LeaderNode.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LeaderNode.AttachedEntity Property
Parent Object: LeaderNode
Description
Gets and sets the attached entity of the leaf leader node.
Syntax
LeaderNode.AttachedEntity() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 11
LeaderNode.AttributeSets Property
Parent Object: LeaderNode
Description
Property that returns the AttributeSets collection object associated with this object.
LeaderNode Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Syntax
LeaderNode.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
LeaderNode.ChildNodes Property
Parent Object: LeaderNode
Description
Property that returns the children nodes under this node. The count will return 0 if the node is a
leaf node.
Syntax
LeaderNode.ChildNodes() As LeaderNodesEnumerator
Property Value
This is a read only property whose value is a LeaderNodesEnumerator.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
LeaderNode.Delete Method
Parent Object: LeaderNode
LeaderNode Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Description
Method that deletes this leader node.
Syntax
LeaderNode.Delete( [RetainDependentNodes] As Boolean )
Parameters
Name Type Description
RetainDependentNodes Boolean
Optional input Boolean that indicates whether to delete all the
dependent nodes as well. If specified to be True, dependent
nodes are not deleted. Instead, their ownership is transferred to
the parent of this node. If not specified, the argument defaults to
False, indicating that all dependent nodes will be deleted.
This is an optional argument whose default value is False.
Remarks
* If a root node has more than one child node and RetainDependentNodes is true, an error will be
returned. * If a root node has one child node and RetainDependentNodes is true, the root node will
be moved to the child node. * If a root node and RetainDependentNodes is false, all nodes are
deleted. * RetainDependentNodes is ignored for all leaf nodes. * For leaf nodes where the parent
is the root, the leader branch is deleted. * If leaf node, then new leaf node will be the parent node
and the attachment is lost.
Version
Introduced in version 11
LeaderNode.GetReferenceKey Method
Parent Object: LeaderNode
Description
Method that generates and returns the reference key for this entity.
Syntax
LeaderNode.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
LeaderNode Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
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
Introduced in version 11
LeaderNode.InsertNode Method
Parent Object: LeaderNode
Description
Method that adds a LeaderNode at the specified position between two existing leader nodes. This
is the equivalent of the 'Add Vertex' command in the user interface. This method does not apply
for leaf nodes.
Syntax
LeaderNode.InsertNode( ChildNode As LeaderNode, Position As Point2d ) As LeaderNode
Parameters
Name Type Description
ChildNode LeaderNode
LeaderNode object that specifies a child node of this node. The new
node will be inserted between these two nodes. If the input node is not an
immediate child, an error will occur.
Position Point2d
LeaderNode Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Point2d object that specifies the position of the node to add. The method
fails if the input position is not on the leader segment connecting the two
leader nodes.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
LeaderNode.Parent Property
Parent Object: LeaderNode
Description
Property that returns the parent of this leader node object. This could either be another
LeaderNode object or the Leader object in case of a root node.
Syntax
LeaderNode.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LeaderNode.Position Property
Parent Object: LeaderNode
Description
Gets and sets the leader node location on the sheet.
LeaderNode Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
Syntax
LeaderNode.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 11
LeaderNode.Type Property
Parent Object: LeaderNode
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LeaderNode.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LeaderNode Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2BF.htm 16/06/2025
LeaderNodesEnumerator Object
Description
The LeaderNodesEnumerator object provides an enumeration of LeaderNode objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Method that returns the specified LeaderNode object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Leader.AllLeafNodes, Leader.AllNodes, LeaderNode.ChildNodes
Version
Introduced in version 11
LeaderNodesEnumerator.Application
Property
Parent Object: LeaderNodesEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LeaderNodesEnumerator.Application() As Object
LeaderNodesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF20.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LeaderNodesEnumerator.Count Property
Parent Object: LeaderNodesEnumerator
Description
Property that returns the number of items in the collection.
Syntax
LeaderNodesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
LeaderNodesEnumerator.Item Property
Parent Object: LeaderNodesEnumerator
Description
Method that returns the specified LeaderNode object from the collection.
Syntax
LeaderNodesEnumerator.Item( Index As Variant ) As LeaderNode
LeaderNodesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF20.htm 16/06/2025
Property Value
This is a read only property whose value is a LeaderNode.
Parameters
Name Type Description
Index Variant Value that specifies the index of the object to return.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
LeaderNodesEnumerator.Type Property
Parent Object: LeaderNodesEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LeaderNodesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LeaderNodesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFF20.htm 16/06/2025
LeaderNote Object
Derived from: DrawingNote Object
Description
The LeaderNote object represents a note with an attached leader on a sheet and derives from the
DrawingNote object. The properties and methods listed below are in addition to those supported
by the DrawingNote object.
Methods
Name Description
Delete Method that deletes the DrawingNote.
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
BackgroundColor Gets/Sets the BackgroundColor associated with the LeaderNote.
Color Gets/Sets color of the DrawingNote.
DimensionStyle Gets/Sets the DimensionStyle associated with the LeaderNote.
FormattedText Gets/Sets formatted text of the DrawingNote.
HorizontalJustification Gets/Sets horizontal justification of the DrawingNote.
Layer Gets/Sets the layer used by the DrawingNote.
Leader Property that returns the Leader object.
LineSpacing Gets/Sets the LineSpacing used by the DrawingNote.
LineSpacingType Gets/Sets the LineSpacingType used by the DrawingNote.
Parent Property that returns the parent sheet of the object.
Position Gets/Sets the position of the DrawingNote on the sheet.
RangeBox
Property that returns a Box2D object which contains the lower-left and
upper-right corners of a rectangle that is guaranteed to enclose this object.
Rotation Gets/Sets the rotation of the LeaderNote.
ShowTextBorder Gets/Sets whether to show the text border or not.
StackedTextPosition
Gets and sets the position (alignment) of the stacked text with respect to
regular text.
Text Gets/Sets text of the DrawingNote.
Type Returns an ObjectTypeEnum indicating this object's type.
LeaderNote Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
UnitAttributes Get the unit attributes associated with the LeaderNote.
UseBackgroundColor Gets/Sets the UseBackgroundColor associated with the LeaderNote.
VerticalJustification Gets/Sets vertical justification of the DrawingNote.
WidthScale Gets/Sets the width scale factor of the DrawingNote.
Accessed From
LeaderNotes.Add, LeaderNotes.Item
Derived Classes
BendNote, ChamferNote, PunchNote
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 10
LeaderNote.Application Property
Parent Object: LeaderNote
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LeaderNote.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LeaderNote Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
LeaderNote.AttributeSets Property
Parent Object: LeaderNote
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LeaderNote.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
LeaderNote.BackgroundColor Property
Parent Object: LeaderNote
Description
Gets/Sets the BackgroundColor associated with the LeaderNote.
Syntax
LeaderNote.BackgroundColor() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 2017
LeaderNote.Color Property
LeaderNote Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Parent Object: LeaderNote
Description
Gets/Sets color of the DrawingNote.
Syntax
LeaderNote.Color() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 10
LeaderNote.Delete Method
Parent Object: LeaderNote
Description
Method that deletes the DrawingNote.
Syntax
LeaderNote.Delete()
Version
Introduced in version 10
LeaderNote.DimensionStyle Property
Parent Object: LeaderNote
Description
Gets/Sets the DimensionStyle associated with the LeaderNote.
LeaderNote Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Syntax
LeaderNote.DimensionStyle() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 10
LeaderNote.FormattedText Property
Parent Object: LeaderNote
Description
Gets/Sets formatted text of the DrawingNote.
Syntax
LeaderNote.FormattedText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
LeaderNote.GetReferenceKey Method
Parent Object: LeaderNote
Description
Method that generates and returns the reference key for this entity.
LeaderNote Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Syntax
LeaderNote.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 10
LeaderNote.HorizontalJustification Property
Parent Object: LeaderNote
Description
Gets/Sets horizontal justification of the DrawingNote.
Syntax
LeaderNote.HorizontalJustification() As HorizontalTextAlignmentEnum
Property Value
This is a read/write property whose value is a HorizontalTextAlignmentEnum.
Version
Introduced in version 10
LeaderNote.Layer Property
LeaderNote Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Parent Object: LeaderNote
Description
Gets/Sets the layer used by the DrawingNote.
Syntax
LeaderNote.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 10
LeaderNote.Leader Property
Parent Object: LeaderNote
Description
Property that returns the Leader object.
Syntax
LeaderNote.Leader() As Leader
Property Value
This is a read only property whose value is a Leader.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
LeaderNote Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
LeaderNote.LineSpacing Property
Parent Object: LeaderNote
Description
Gets/Sets the LineSpacing used by the DrawingNote.
Syntax
LeaderNote.LineSpacing() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
LeaderNote.LineSpacingType Property
Parent Object: LeaderNote
Description
Gets/Sets the LineSpacingType used by the DrawingNote.
Syntax
LeaderNote.LineSpacingType() As TextLineSpacingTypeEnum
Property Value
This is a read/write property whose value is a TextLineSpacingTypeEnum.
Version
Introduced in version 10
LeaderNote.Parent Property
LeaderNote Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Parent Object: LeaderNote
Description
Property that returns the parent sheet of the object.
Syntax
LeaderNote.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 10
LeaderNote.Position Property
Parent Object: LeaderNote
Description
Gets/Sets the position of the DrawingNote on the sheet.
Syntax
LeaderNote.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 10
LeaderNote.RangeBox Property
Parent Object: LeaderNote
LeaderNote Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
LeaderNote.RangeBox() As Box2d
Property Value
This is a read only property whose value is a Box2d.
Version
Introduced in version 2010
LeaderNote.Rotation Property
Parent Object: LeaderNote
Description
Gets/Sets the rotation of the LeaderNote.
Syntax
LeaderNote.Rotation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2016
LeaderNote.ShowTextBorder Property
Parent Object: LeaderNote
LeaderNote Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Description
Gets/Sets whether to show the text border or not.
Syntax
LeaderNote.ShowTextBorder() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
LeaderNote.StackedTextPosition Property
Parent Object: LeaderNote
Description
Gets and sets the position (alignment) of the stacked text with respect to regular text.
Syntax
LeaderNote.StackedTextPosition() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2009
LeaderNote.Text Property
Parent Object: LeaderNote
Description
LeaderNote Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Gets/Sets text of the DrawingNote.
Syntax
LeaderNote.Text() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
LeaderNote.Type Property
Parent Object: LeaderNote
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LeaderNote.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LeaderNote.UnitAttributes Property
Parent Object: LeaderNote
Description
Get the unit attributes associated with the LeaderNote.
LeaderNote Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Syntax
LeaderNote.UnitAttributes() As UnitAttributes
Property Value
This is a read only property whose value is a UnitAttributes.
Version
Introduced in version 2016
LeaderNote.UseBackgroundColor Property
Parent Object: LeaderNote
Description
Gets/Sets the UseBackgroundColor associated with the LeaderNote.
Syntax
LeaderNote.UseBackgroundColor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
LeaderNote.VerticalJustification Property
Parent Object: LeaderNote
Description
Gets/Sets vertical justification of the DrawingNote.
LeaderNote Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
Syntax
LeaderNote.VerticalJustification() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 10
LeaderNote.WidthScale Property
Parent Object: LeaderNote
Description
Gets/Sets the width scale factor of the DrawingNote.
Syntax
LeaderNote.WidthScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
LeaderNote Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1690.htm 16/06/2025
LeaderNotes Object
Description
The LeaderNotes collection object provides access to all of the leader notes on the sheet.
Methods
Name Description
Add Method that creates a leader note.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified LeaderNote object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingNotes.LeaderNotes
Version
Introduced in version 10
LeaderNotes.Add Method
Parent Object: LeaderNotes
Description
Method that creates a leader note.
Syntax
LeaderNotes.Add( LeaderPoints As ObjectCollection, FormattedText As String,
[DimensionStyle] As Variant ) As LeaderNote
LeaderNotes Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh33FC.htm 16/06/2025
Parameters
Name Type Description
LeaderPoints ObjectCollection
ObjectCollection containing a series of Point2d objects
representing the leader originating at the note. The last item in
the collection (even if it is the only item) can be a
GeometryIntent object indicating a geometry to attach the
leader to. A GeometryIntent object can be created using the
Sheet.CreateGeometryIntent method. The ObjectCollection
must contain at least one item, else the method will fail.
FormattedText String
Input String that specifies the text of the general note. This
string can contain tags that define internal formatting changes,
which override the text style associated with the general note.
The formatting is specified using XML tags within the string.
By default, all text in the string will be displayed using the text
style assigned to the note. You can use the XML tags to
override the default style and apply style overrides for all or
portions of the text. The formatting overrides are defined using
tags. There is an opening tag and closing tag for each
formatting override you define. The text between the opening
and closing tags is affected by the override. See the list of
XML text formatting tags under Reference Topics in the
Overviews section.
DimensionStyle Variant
Specifies which dimension style to use for the leader note. The
dimension style can be specified by providing the name of an
existing style or by supplying a DimensionStyle object.
This is an optional argument whose default value is null.
Samples
Name Description
Add new leader note This sample illustrates creating leader text on a sheet.
Version
Introduced in version 11
LeaderNotes.Application Property
Parent Object: LeaderNotes
Description
LeaderNotes Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh33FC.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LeaderNotes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LeaderNotes.Count Property
Parent Object: LeaderNotes
Description
Property that returns the number of items in the collection.
Syntax
LeaderNotes.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
LeaderNotes.Item Property
Parent Object: LeaderNotes
Description
Returns the specified LeaderNote object from the collection.
LeaderNotes Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh33FC.htm 16/06/2025
Syntax
LeaderNotes.Item( Index As Long ) As LeaderNote
Property Value
This is a read only property whose value is a LeaderNote.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 10
LeaderNotes.Type Property
Parent Object: LeaderNotes
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LeaderNotes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LeaderNotes Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh33FC.htm 16/06/2025
LeaderStyle Object
Derived from: Style Object
Description
The LeaderStyle object represents a leader style in a drawing. The properties and methods listed
below are in addition to those supported by the Style object.
Methods
Name Description
ConvertToLocal
Method that creates a local cached copy of a global style and returns the
local style.
Copy
Method that creates a new local Style object. The newly created style is
returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
GetCustomLineType
Method that returns information regarding the custom line type in use. The
method returns a failure if the return value of the LineType property is not
kCustomLineType.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same
name is found in the repository, that style is updated.
SetCustomLineType
Method that sets a custom line type to the style from the specified .lin file.
The method automatically changes the value of LineType property to
kCustomLineType.
UpdateFromGlobal Method that updates this style from the global repository.
Properties
Name Description
AllAroundSymbolDiameter
Property that gets and sets the size of the all-around symbol for
Feature Control Frames, Surface symbols, and Weld symbols
(circular only). This value is used only if the ScaleToTextHeight
property is set to False.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
ArrowheadHeight
Property that gets and sets the height of the arrowhead relative to the
associated line.
ArrowheadSize
Property that gets and sets the size of the arrowhead (i.e. the
terminator). The value is that of width of the arrow if the terminator
is an arrowhead or for diameter if the terminator is a circle.
ArrowheadType Property that gets and sets the arrowhead style to use.
Color
LeaderStyle Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Property that gets and sets the color for the style. Setting the property
to Nothing restores the style to the color defined by the layer.
Comments Gets and sets comments associated with the style.
ExtensionLineOffset
Property that gets and sets the space from the end of the edge to
which the leader attaches to the beginning of the leader extension
line.
ExtensionLineOvershoot
Property that gets and sets the length of the leader extension line past
the end of the terminator.
InternalName
Property that returns the internal name of the style. The name is the
internal English name of the standard style. This name will remain
constant and is not affected by locale. This name is never displayed
to the user. Note that this name is not guaranteed to be unique.
InUse Property that indicates if this style is in use.
LineType
Property that gets and sets the line type override. Setting the property
to kDefaultLineType restores the default line type. If the property
returns kCustomLineType, the GetCustomLineType method can be
used to get further details about the line type.
LineWeight
Property that gets and sets the thickness of this primitive/object. If
LineDefinitionSpace is set to kScreenSpace, this value is defined in
pixels. If LineDefinitionSpace is set to kModelSpace, this value is
defined in model units (centimeters).
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
ScaleToTextHeight
Property that gets and sets whether to define the all-around symbol
size by the height of text from the symbol's text style. This specifies
the size of the all-around symbol for Feature Control Frames,
Surface symbols, and Weld symbols (circular only).
StyleLocation
Property that returns the location of this style, i.e. local to the
document, cached locally in the document, exists in the library.
Styles that exist in the library cannot be edited.
StyleType Gets the type of the style.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate
Property that gets the up-to-date status of the style against the global
repository.
Accessed From
BalloonStyle.AlternateLeaderStyle, BalloonStyle.LeaderStyle, DimensionStyle.LeaderStyle,
EdgeSymbolStyle.LeaderStyle, FeatureControlFrameStyle.LeaderStyle,
LeaderStylesEnumerator.Item, ObjectDefaultsStyle.OriginIndicatorStyle,
ObjectDefaultsStyle.SketchedSymbolLeaderStyle, OriginIndicator.LeaderStyle,
RevisionTableStyle.RevisionTagLeaderStyle, SketchedSymbol.LeaderStyle,
SurfaceTextureStyle.LeaderStyle, WeldSymbolStyle.LeaderStyle
Version
Introduced in version 2009
LeaderStyle Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
LeaderStyle.AllAroundSymbolDiameter
Property
Parent Object: LeaderStyle
Description
Property that gets and sets the size of the all-around symbol for Feature Control Frames, Surface
symbols, and Weld symbols (circular only). This value is used only if the ScaleToTextHeight
property is set to False.
Syntax
LeaderStyle.AllAroundSymbolDiameter() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
LeaderStyle.Application Property
Parent Object: LeaderStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LeaderStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
LeaderStyle Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Version
Introduced in version 2009
LeaderStyle.ArrowheadHeight Property
Parent Object: LeaderStyle
Description
Property that gets and sets the height of the arrowhead relative to the associated line.
Syntax
LeaderStyle.ArrowheadHeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
LeaderStyle.ArrowheadSize Property
Parent Object: LeaderStyle
Description
Property that gets and sets the size of the arrowhead (i.e. the terminator). The value is that of
width of the arrow if the terminator is an arrowhead or for diameter if the terminator is a circle.
Syntax
LeaderStyle.ArrowheadSize() As Double
Property Value
This is a read/write property whose value is a Double.
LeaderStyle Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Version
Introduced in version 2009
LeaderStyle.ArrowheadType Property
Parent Object: LeaderStyle
Description
Property that gets and sets the arrowhead style to use.
Syntax
LeaderStyle.ArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2009
LeaderStyle.Color Property
Parent Object: LeaderStyle
Description
Property that gets and sets the color for the style. Setting the property to Nothing restores the style
to the color defined by the layer.
Syntax
LeaderStyle.Color() As Color
Property Value
This is a read/write property whose value is a Color.
LeaderStyle Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Version
Introduced in version 2010
LeaderStyle.Comments Property
Parent Object: LeaderStyle
Description
Gets and sets comments associated with the style.
Syntax
LeaderStyle.Comments() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
LeaderStyle.ConvertToLocal Method
Parent Object: LeaderStyle
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
LeaderStyle.ConvertToLocal() As Style
Version
Introduced in version 2009
LeaderStyle Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
LeaderStyle.Copy Method
Parent Object: LeaderStyle
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
LeaderStyle.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String
Input String that specifies the name for the new style. This name must be unique
with respect to all other styles of a similar type in the document. That is, if a
dimension style is being copied, the name must be unique with respect to all the
other dimension styles. If it is not unique the method will fail.
Version
Introduced in version 2009
LeaderStyle.Delete Method
Parent Object: LeaderStyle
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
LeaderStyle.Delete()
Version
Introduced in version 2009
LeaderStyle.ExtensionLineOffset Property
LeaderStyle Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Parent Object: LeaderStyle
Description
Property that gets and sets the space from the end of the edge to which the leader attaches to the
beginning of the leader extension line.
Syntax
LeaderStyle.ExtensionLineOffset() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
LeaderStyle.ExtensionLineOvershoot
Property
Parent Object: LeaderStyle
Description
Property that gets and sets the length of the leader extension line past the end of the terminator.
Syntax
LeaderStyle.ExtensionLineOvershoot() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
LeaderStyle.GetCustomLineType Method
LeaderStyle Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Parent Object: LeaderStyle
Description
Method that returns information regarding the custom line type in use. The method returns a
failure if the return value of the LineType property is not kCustomLineType.
Syntax
LeaderStyle.GetCustomLineType( LineTypeName As String, LineTypeDescription As String )
Parameters
Name Type Description
LineTypeName String Output string that returns the name of the line type.
LineTypeDescription String Output string that returns the description of the line type.
Version
Introduced in version 2009
LeaderStyle.GetReferenceKey Method
Parent Object: LeaderStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
LeaderStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
LeaderStyle Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 2009
LeaderStyle.InternalName Property
Parent Object: LeaderStyle
Description
Property that returns the internal name of the style. The name is the internal English name of the
standard style. This name will remain constant and is not affected by locale. This name is never
displayed to the user. Note that this name is not guaranteed to be unique.
Syntax
LeaderStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
LeaderStyle.InUse Property
Parent Object: LeaderStyle
Description
Property that indicates if this style is in use.
Syntax
LeaderStyle.InUse() As Boolean
LeaderStyle Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
LeaderStyle.LineType Property
Parent Object: LeaderStyle
Description
Property that gets and sets the line type override. Setting the property to kDefaultLineType
restores the default line type. If the property returns kCustomLineType, the GetCustomLineType
method can be used to get further details about the line type.
Syntax
LeaderStyle.LineType() As LineTypeEnum
Property Value
This is a read/write property whose value is a LineTypeEnum.
Version
Introduced in version 2009
LeaderStyle.LineWeight Property
Parent Object: LeaderStyle
Description
Property that gets and sets the thickness of this primitive/object. If LineDefinitionSpace is set to
kScreenSpace, this value is defined in pixels. If LineDefinitionSpace is set to kModelSpace, this
value is defined in model units (centimeters).
Syntax
LeaderStyle.LineWeight() As Double
LeaderStyle Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
LeaderStyle.Name Property
Parent Object: LeaderStyle
Description
Gets/Sets the name of the Style.
Syntax
LeaderStyle.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
LeaderStyle.Parent Property
Parent Object: LeaderStyle
Description
Property returning the parent of this object.
Syntax
LeaderStyle.Parent() As Object
LeaderStyle Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
LeaderStyle.SaveToGlobal Method
Parent Object: LeaderStyle
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
Syntax
LeaderStyle.SaveToGlobal()
Version
Introduced in version 2009
LeaderStyle.ScaleToTextHeight Property
Parent Object: LeaderStyle
Description
Property that gets and sets whether to define the all-around symbol size by the height of text from
the symbol's text style. This specifies the size of the all-around symbol for Feature Control
Frames, Surface symbols, and Weld symbols (circular only).
Syntax
LeaderStyle.ScaleToTextHeight() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LeaderStyle Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Version
Introduced in version 2009
LeaderStyle.SetCustomLineType Method
Parent Object: LeaderStyle
Description
Method that sets a custom line type to the style from the specified .lin file. The method
automatically changes the value of LineType property to kCustomLineType.
Syntax
LeaderStyle.SetCustomLineType( FullFileName As String, LineTypeName As String,
ReplaceExisting As Boolean )
Parameters
Name Type Description
FullFileName String
Input string that specifies the full file name of the *.lin file containing
the custom line types.
LineTypeName String Input string that specifies the name of the line type.
ReplaceExisting Boolean
Input Boolean that specifies whether to replace the existing line type if
a line type of the same name exists. If set to False, and a line type of the
same name exists, this method returns an error.
Version
Introduced in version 2009
LeaderStyle.StyleLocation Property
Parent Object: LeaderStyle
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the
document, exists in the library. Styles that exist in the library cannot be edited.
LeaderStyle Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Syntax
LeaderStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2009
LeaderStyle.StyleType Property
Parent Object: LeaderStyle
Description
Gets the type of the style.
Syntax
LeaderStyle.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2009
LeaderStyle.Type Property
Parent Object: LeaderStyle
Description
Returns an ObjectTypeEnum indicating this object's type.
LeaderStyle Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Syntax
LeaderStyle.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
LeaderStyle.UpdateFromGlobal Method
Parent Object: LeaderStyle
Description
Method that updates this style from the global repository.
Syntax
LeaderStyle.UpdateFromGlobal()
Version
Introduced in version 2009
LeaderStyle.UpToDate Property
Parent Object: LeaderStyle
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
LeaderStyle.UpToDate() As Boolean
LeaderStyle Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
LeaderStyle Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4F25.htm 16/06/2025
LeaderStylesEnumerator Object
Description
The LeaderStylesEnumerator object provides access to the existing LeaderStyle objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified LeaderStyle object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingStylesManager.LeaderStyles
Version
Introduced in version 2009
LeaderStylesEnumerator.Application
Property
Parent Object: LeaderStylesEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LeaderStylesEnumerator.Application() As Object
LeaderStylesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F6E.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
LeaderStylesEnumerator.Count Property
Parent Object: LeaderStylesEnumerator
Description
Property that returns the number of items in the collection.
Syntax
LeaderStylesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
LeaderStylesEnumerator.Item Property
Parent Object: LeaderStylesEnumerator
Description
Returns the specified LeaderStyle object from the collection.
Syntax
LeaderStylesEnumerator.Item( Index As Variant ) As LeaderStyle
LeaderStylesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F6E.htm 16/06/2025
Property Value
This is a read only property whose value is a LeaderStyle.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the LeaderStyle to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the LeaderStyle name. If an out of range index or a name of a nonexistent
LeaderStyle is provided, an error will occur.
Version
Introduced in version 2009
LeaderStylesEnumerator.Type Property
Parent Object: LeaderStylesEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LeaderStylesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
LeaderStylesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F6E.htm 16/06/2025
LegacyDistanceHeightExtent Object
Derived from: PartFeatureExtent Object
Description
The LegacyDistanceHeightExtent is used by the FlangeFeature object when the 'Old Method' is
specified in the Flange feature dialog.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Distance Property that returns the parameter controlling the extent distance of the flange.
FlangeDirection Gets and sets the direction of the flange.
Parent Property that returns the parent PartFeature of the definition.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2009
LegacyDistanceHeightExtent.Application
Property
Parent Object: LegacyDistanceHeightExtent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LegacyDistanceHeightExtent.Application() As Object
Property Value
This is a read only property whose value is an Object.
LegacyDistanceHeightExtent Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8613.htm 16/06/2025
Version
Introduced in version 2009
LegacyDistanceHeightExtent.Distance
Property
Parent Object: LegacyDistanceHeightExtent
Description
Property that returns the parameter controlling the extent distance of the flange.
Syntax
LegacyDistanceHeightExtent.Distance() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2009
LegacyDistanceHeightExtent.FlangeDirection
Property
Parent Object: LegacyDistanceHeightExtent
Description
Gets and sets the direction of the flange.
Syntax
LegacyDistanceHeightExtent.FlangeDirection() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
LegacyDistanceHeightExtent Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8613.htm 16/06/2025
Version
Introduced in version 2009
LegacyDistanceHeightExtent.Parent Property
Parent Object: LegacyDistanceHeightExtent
Description
Property that returns the parent PartFeature of the definition.
Syntax
LegacyDistanceHeightExtent.Parent() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2009
LegacyDistanceHeightExtent.Type Property
Parent Object: LegacyDistanceHeightExtent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LegacyDistanceHeightExtent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LegacyDistanceHeightExtent Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8613.htm 16/06/2025
Version
Introduced in version 2009
LegacyDistanceHeightExtent Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8613.htm 16/06/2025
LibraryFolder Object
Description
LibraryFolder Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weaklytyped,
it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running
with the Apprentice Server.
ChildFolders
Read-only property that returns a collection of all library folders
contained directly under this folder in the library.
Name Read-only property that returns the name of the library folder object.
Parent
Gets the parent object from whom this object can logically be
reached.
ParentFolder
Read-only property that returns the parent LibraryFolder for this
library folder object.
SketchedSymbolDefinitions
Read-only property that returns the collection of library sketched
symbol definitions under this library folder object.
Type Gets the constant that indicates the type of this object.
Accessed From
LibraryFolder.ParentFolder, LibraryFolders.Add, LibraryFolders.Item,
LibrarySketchedSymbolDefinition.ParentFolder
Version
Introduced in version 2016
LibraryFolder.Application Property
Parent Object: LibraryFolder
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
LibraryFolder Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9F58.htm 16/06/2025
Syntax
LibraryFolder.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
LibraryFolder.ChildFolders Property
Parent Object: LibraryFolder
Description
Read-only property that returns a collection of all library folders contained directly under this
folder in the library.
Syntax
LibraryFolder.ChildFolders() As LibraryFolders
Property Value
This is a read only property whose value is a LibraryFolders.
Version
Introduced in version 2016
LibraryFolder.Name Property
Parent Object: LibraryFolder
Description
Read-only property that returns the name of the library folder object.
LibraryFolder Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9F58.htm 16/06/2025
Syntax
LibraryFolder.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
LibraryFolder.Parent Property
Parent Object: LibraryFolder
Description
Gets the parent object from whom this object can logically be reached.
Syntax
LibraryFolder.Parent() As SketchedSymbolDefinitionLibrary
Property Value
This is a read only property whose value is a SketchedSymbolDefinitionLibrary.
Version
Introduced in version 2016
LibraryFolder.ParentFolder Property
Parent Object: LibraryFolder
Description
Read-only property that returns the parent LibraryFolder for this library folder object.
LibraryFolder Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9F58.htm 16/06/2025
Syntax
LibraryFolder.ParentFolder() As LibraryFolder
Property Value
This is a read only property whose value is a LibraryFolder.
Version
Introduced in version 2016
LibraryFolder.SketchedSymbolDefinitions
Property
Parent Object: LibraryFolder
Description
Read-only property that returns the collection of library sketched symbol definitions under this
library folder object.
Syntax
LibraryFolder.SketchedSymbolDefinitions() As LibrarySketchedSymbolDefinitions
Property Value
This is a read only property whose value is a LibrarySketchedSymbolDefinitions.
Version
Introduced in version 2016
LibraryFolder.Type Property
Parent Object: LibraryFolder
Description
Gets the constant that indicates the type of this object.
LibraryFolder Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9F58.htm 16/06/2025
Syntax
LibraryFolder.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
LibraryFolder Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9F58.htm 16/06/2025
LibraryFolders Object
Description
LibraryFolders Object.
Methods
Name Description
Add creates a new library folder.
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
LibraryFolder.ChildFolders, SketchedSymbolDefinitionLibrary.Folders
Version
Introduced in version 2016
LibraryFolders.Add Method
Parent Object: LibraryFolders
Description
creates a new library folder.
Syntax
LibraryFolders.Add( [Name] As Variant ) As LibraryFolder
LibraryFolders Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB63B.htm 16/06/2025
Parameters
Name Type Description
Name Variant
Optional input String value to specify the name of the library folder.
This is an optional argument whose default value is null.
Version
Introduced in version 2016
LibraryFolders.Application Property
Parent Object: LibraryFolders
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
LibraryFolders.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
LibraryFolders.Count Property
Parent Object: LibraryFolders
Description
Gets the number of items in this collection.
LibraryFolders Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB63B.htm 16/06/2025
Syntax
LibraryFolders.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2016
LibraryFolders.Item Property
Parent Object: LibraryFolders
Description
Allows integer-indexed access to items in the collection.
Syntax
LibraryFolders.Item( Index As Variant ) As LibraryFolder
Property Value
This is a read only property whose value is a LibraryFolder.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the index of library folder in the library. This can
be either a numeric value indicating the index of the item in the collection or it can
be a string indicating the name of the library folder. If an out of range index is
specified, an error occurs.
Version
Introduced in version 2016
LibraryFolders.Type Property
LibraryFolders Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB63B.htm 16/06/2025
Parent Object: LibraryFolders
Description
Gets the constant that indicates the type of this object.
Syntax
LibraryFolders.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
LibraryFolders Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB63B.htm 16/06/2025
LibrarySketchedSymbolDefinition Object
Description
LibrarySketchedSymbolDefinition Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Name Read-only property that returns the name of the library sketched symbol definition.
Parent Gets the parent object from whom this object can logically be reached.
ParentFolder
Read-only property that returns the parent LibraryFolder for this library sketched
symbol definition object.
Type Gets the constant that indicates the type of this object.
Accessed From
LibrarySketchedSymbolDefinitions.Item
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition.Application
Property
Parent Object: LibrarySketchedSymbolDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced
for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the
Apprentice Server.
Syntax
LibrarySketchedSymbolDefinition.Application() As Object
LibrarySketchedSymbolDefinition Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD00D.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition.Name
Property
Parent Object: LibrarySketchedSymbolDefinition
Description
Read-only property that returns the name of the library sketched symbol definition.
Syntax
LibrarySketchedSymbolDefinition.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition.Parent
Property
Parent Object: LibrarySketchedSymbolDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
LibrarySketchedSymbolDefinition.Parent() As SketchedSymbolDefinitionLibrary
LibrarySketchedSymbolDefinition Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD00D.htm 16/06/2025
Property Value
This is a read only property whose value is a SketchedSymbolDefinitionLibrary.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition.ParentFolder
Property
Parent Object: LibrarySketchedSymbolDefinition
Description
Read-only property that returns the parent LibraryFolder for this library sketched symbol definition
object.
Syntax
LibrarySketchedSymbolDefinition.ParentFolder() As LibraryFolder
Property Value
This is a read only property whose value is a LibraryFolder.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition.Type
Property
Parent Object: LibrarySketchedSymbolDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
LibrarySketchedSymbolDefinition.Type() As ObjectTypeEnum
LibrarySketchedSymbolDefinition Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD00D.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinition Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD00D.htm 16/06/2025
LibrarySketchedSymbolDefinitions Object
Description
LibrarySketchedSymbolDefinitions Object.
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
LibraryFolder.SketchedSymbolDefinitions,
SketchedSymbolDefinitionLibrary.SketchedSymbolDefinitions
Version
Introduced in version 2016
LibrarySketchedSymbolDefinitions.Application
Property
Parent Object: LibrarySketchedSymbolDefinitions
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
LibrarySketchedSymbolDefinitions.Application() As Object
LibrarySketchedSymbolDefinitions Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB17.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinitions.Count
Property
Parent Object: LibrarySketchedSymbolDefinitions
Description
Gets the number of items in this collection.
Syntax
LibrarySketchedSymbolDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinitions.Item
Property
Parent Object: LibrarySketchedSymbolDefinitions
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as well.
Syntax
LibrarySketchedSymbolDefinitions.Item( Index As Variant ) As LibrarySketchedSymbolDefinition
LibrarySketchedSymbolDefinitions Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB17.htm 16/06/2025
Property Value
This is a read only property whose value is a LibrarySketchedSymbolDefinition.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the index of sketched symbol definition in the
library. This can be either a numeric value indicating the index of the item in the
collection or it can be a string indicating the name of the sketched symbol definition.
If an out of range index is specified, an error occurs.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinitions.Type
Property
Parent Object: LibrarySketchedSymbolDefinitions
Description
Gets the constant that indicates the type of this object.
Syntax
LibrarySketchedSymbolDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
LibrarySketchedSymbolDefinitions Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB17.htm 16/06/2025
LicenseManager Object
Description
LicenseManager Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set
to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
LicenseModel Read-only property that returns the license model.
LicenseUsage Read-only property that returns the license usage.
Parent Gets the parent object from whom this object can logically be reached.
Type Gets the constant that indicates the type of this object.
Version
Introduced in version 2022
LicenseManager.Application Property
Parent Object: LicenseManager
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
LicenseManager.Application() As Application
Property Value
This is a read only property whose value is an Application.
LicenseManager Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh323.htm 16/06/2025
Version
Introduced in version 2022
LicenseManager.LicenseModel Property
Parent Object: LicenseManager
Description
Read-only property that returns the license model.
Syntax
LicenseManager.LicenseModel() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2022
LicenseManager.LicenseUsage Property
Parent Object: LicenseManager
Description
Read-only property that returns the license usage.
Syntax
LicenseManager.LicenseUsage() As String
Property Value
This is a read only property whose value is a String.
LicenseManager Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh323.htm 16/06/2025
Version
Introduced in version 2022
LicenseManager.Parent Property
Parent Object: LicenseManager
Description
Gets the parent object from whom this object can logically be reached.
Syntax
LicenseManager.Parent() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2022
LicenseManager.Type Property
Parent Object: LicenseManager
Description
Gets the constant that indicates the type of this object.
Syntax
LicenseManager.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LicenseManager Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh323.htm 16/06/2025
Version
Introduced in version 2022
LicenseManager Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh323.htm 16/06/2025
Light Object
Description
The Light object provides access to all of the properties that define a specific light source.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Color Gets and sets the color of the light source.
ConstantAttenuation Gets and sets the QuadraticAttenuation value.
Direction Gets and sets the direction of the light.
Intensity Gets and sets the intensity value.
LightDefinitionType Returning the light definition type.
LightType Returning kLightObject indicating the type of object.
LinearAttenuation Gets and sets the LinearAttenuation value.
On Gets and sets whether this light is switched on.
Parent Property returning the parent of the object.
Position Gets and sets the position of the light in model space.
QuadraticAttenuation Gets and sets the QuadraticAttenuation value.
SpotLightCutoffAngle Gets and sets the SpotLightCutoffAngle value.
SpotLightFalloff Gets and sets the SpotLightFalloff value.
SpotLightInnerAngle Gets and sets the SpotLightInnerAngle value.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Lights.Add, Lights.Item
Version
Introduced in version 10
Light.Application Property
Parent Object: Light
Light Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Light.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
Light.Color Property
Parent Object: Light
Description
Gets and sets the color of the light source.
Syntax
Light.Color() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 10
Light.ConstantAttenuation Property
Parent Object: Light
Light Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Description
Gets and sets the QuadraticAttenuation value.
Syntax
Light.ConstantAttenuation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.Direction Property
Parent Object: Light
Description
Gets and sets the direction of the light.
Syntax
Light.Direction() As Vector
Property Value
This is a read/write property whose value is a Vector.
Version
Introduced in version 10
Light.Intensity Property
Parent Object: Light
Description
Light Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Gets and sets the intensity value.
Syntax
Light.Intensity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.LightDefinitionType Property
Parent Object: Light
Description
Returning the light definition type.
Syntax
Light.LightDefinitionType() As LightDefinitionTypeEnum
Property Value
This is a read/write property whose value is a LightDefinitionTypeEnum.
Version
Introduced in version 10
Light.LightType Property
Parent Object: Light
Description
Returning kLightObject indicating the type of object.
Light Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Syntax
Light.LightType() As LightTypeEnum
Property Value
This is a read/write property whose value is a LightTypeEnum.
Version
Introduced in version 10
Light.LinearAttenuation Property
Parent Object: Light
Description
Gets and sets the LinearAttenuation value.
Syntax
Light.LinearAttenuation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.On Property
Parent Object: Light
Description
Gets and sets whether this light is switched on.
Light Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Syntax
Light.On() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
Light.Parent Property
Parent Object: Light
Description
Property returning the parent of the object.
Syntax
Light.Parent() As LightingStyle
Property Value
This is a read only property whose value is a LightingStyle.
Version
Introduced in version 10
Light.Position Property
Parent Object: Light
Description
Gets and sets the position of the light in model space.
Light Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Syntax
Light.Position() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 10
Light.QuadraticAttenuation Property
Parent Object: Light
Description
Gets and sets the QuadraticAttenuation value.
Syntax
Light.QuadraticAttenuation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.SpotLightCutoffAngle Property
Parent Object: Light
Description
Gets and sets the SpotLightCutoffAngle value.
Light Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Syntax
Light.SpotLightCutoffAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.SpotLightFalloff Property
Parent Object: Light
Description
Gets and sets the SpotLightFalloff value.
Syntax
Light.SpotLightFalloff() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.SpotLightInnerAngle Property
Parent Object: Light
Description
Gets and sets the SpotLightInnerAngle value.
Light Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
Syntax
Light.SpotLightInnerAngle() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
Light.Type Property
Parent Object: Light
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Light.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
Light Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1989.htm 16/06/2025
LightingStyle Object
Description
The LightingStyle object provides access to all of the properties that define a specific lighting
style.
Methods
Name Description
ConvertToLocal
Method that creates a local cached copy of a global style and returns the local
style. This method fails if this style is already local. Use the StyleLocation
property to determine whether the style is local.
Copy
Method that copies the rendering style and assigns the specified name to the
copy. The new style is returned by the method.
Delete Method that deletes the LightingStyle.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same
name is found in the repository, that style is updated.
UpdateFromGlobal Method that updates this style from the global repository.
UploadImage Upload an IBL image to current lighting style.
Properties
Name Description
Ambience Gets and sets the ambience of the lighting style.
AmbientShadowIntensity Gets and sets the intensity of the ambient shadow (occlusion).
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is
returned.
AttributeSets
Property that returns the AttributeSets collection object
associated with this object.
Brightness Gets and sets the brightness of the lighting style.
Exposure Gets and sets the exposure of the lighting style.
ImageBasedLightingBrightness Gets and sets the brightness of the lighting style.
ImageBasedLightingRotation Gets and sets the rotation to be applied to the image.
ImageBasedLightingScale Gets and sets the scale to be applied to the image.
ImageBasedLightingShowImage
Gets and sets whether to display the image in the graphics
scene.
InternalName
property that returns the unique name of the style. The name is
the internal English name of the style. This name will remain
constant and is not affected by locale. This name is never
displayed to the user.
LightingStyle Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
InUse Property that indicates if this style is in use.
LightingStyleType Gets the lighting style type.
Lights Property that returns the Lights collection object.
Name Gets and sets the lighting style name.
Parent Property returning the parent of the object.
ShadowDensity
Gets and sets the direction of the light source that controls the
shadow.
ShadowDirection
Gets and sets the direction of the light source that controls the
shadow.
ShadowSoftness
Gets and sets the blending between shadowed and nonshadowed
areas.
StyleLocation
Property that returns the location of this lighting style, i.e. local
to the document, cached locally in the document, exists in the
library. Lighting styles that exist in the library cannot be edited.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate
Property that gets the up-to-date status of the style against the
global repository.
Accessed From
AssemblyDocument.ActiveLightingStyle, Light.Parent, LightingStyle.ConvertToLocal,
LightingStyle.Copy, LightingStyles.Add, LightingStyles.Item,
PartDocument.ActiveLightingStyle, PresentationDocument.ActiveLightingStyle
Version
Introduced in version 10
LightingStyle.Ambience Property
Parent Object: LightingStyle
Description
Gets and sets the ambience of the lighting style.
Syntax
LightingStyle.Ambience() As Double
Property Value
This is a read/write property whose value is a Double.
LightingStyle Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Version
Introduced in version 10
LightingStyle.AmbientShadowIntensity
Property
Parent Object: LightingStyle
Description
Gets and sets the intensity of the ambient shadow (occlusion).
Syntax
LightingStyle.AmbientShadowIntensity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle.Application Property
Parent Object: LightingStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LightingStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
LightingStyle Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Version
Introduced in version 10
LightingStyle.AttributeSets Property
Parent Object: LightingStyle
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LightingStyle.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2011
LightingStyle.Brightness Property
Parent Object: LightingStyle
Description
Gets and sets the brightness of the lighting style.
Syntax
LightingStyle.Brightness() As Double
Property Value
This is a read/write property whose value is a Double.
Samples
LightingStyle Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Name Description
Adjust the brightness of
lighting
This sample demonstrates how to adjust lighting brightness with
mini-toolbar slider.
Version
Introduced in version 10
LightingStyle.ConvertToLocal Method
Parent Object: LightingStyle
Description
Method that creates a local cached copy of a global style and returns the local style. This method
fails if this style is already local. Use the StyleLocation property to determine whether the style is
local.
Syntax
LightingStyle.ConvertToLocal() As LightingStyle
Version
Introduced in version 10
LightingStyle.Copy Method
Parent Object: LightingStyle
Description
Method that copies the rendering style and assigns the specified name to the copy. The new style
is returned by the method.
Syntax
LightingStyle.Copy( NewName As String ) As LightingStyle
Parameters
Name Type Description
NewName String
LightingStyle Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Input String that specifies the name for the new lighting style. This name must
be unique with respect to all other lighting styles in the document. If it is not
unique the method will fail.
Version
Introduced in version 10
LightingStyle.Delete Method
Parent Object: LightingStyle
Description
Method that deletes the LightingStyle.
Syntax
LightingStyle.Delete()
Version
Introduced in version 10
LightingStyle.Exposure Property
Parent Object: LightingStyle
Description
Gets and sets the exposure of the lighting style.
Syntax
LightingStyle.Exposure() As Long
Property Value
This is a read/write property whose value is a Long.
LightingStyle Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Version
Introduced in version 2016
LightingStyle.GetReferenceKey Method
Parent Object: LightingStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
LightingStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2011
LightingStyle Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
LightingStyle.ImageBasedLightingBrightness
Property
Parent Object: LightingStyle
Description
Gets and sets the brightness of the lighting style.
Syntax
LightingStyle.ImageBasedLightingBrightness() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle.ImageBasedLightingRotation
Property
Parent Object: LightingStyle
Description
Gets and sets the rotation to be applied to the image.
Syntax
LightingStyle.ImageBasedLightingRotation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
LightingStyle.ImageBasedLightingScale
Property
Parent Object: LightingStyle
Description
Gets and sets the scale to be applied to the image.
Syntax
LightingStyle.ImageBasedLightingScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle.ImageBasedLightingShowImage
Property
Parent Object: LightingStyle
Description
Gets and sets whether to display the image in the graphics scene.
Syntax
LightingStyle.ImageBasedLightingShowImage() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
LightingStyle Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
LightingStyle.InternalName Property
Parent Object: LightingStyle
Description
property that returns the unique name of the style. The name is the internal English name of the
style. This name will remain constant and is not affected by locale. This name is never displayed
to the user.
Syntax
LightingStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
LightingStyle.InUse Property
Parent Object: LightingStyle
Description
Property that indicates if this style is in use.
Syntax
LightingStyle.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
LightingStyle Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
LightingStyle.LightingStyleType Property
Parent Object: LightingStyle
Description
Gets the lighting style type.
Syntax
LightingStyle.LightingStyleType() As LightingStyleTypeEnum
Property Value
This is a read only property whose value is a LightingStyleTypeEnum.
Version
Introduced in version 2024
LightingStyle.Lights Property
Parent Object: LightingStyle
Description
Property that returns the Lights collection object.
Syntax
LightingStyle.Lights() As Lights
Property Value
This is a read only property whose value is a Lights.
Version
Introduced in version 10
LightingStyle.Name Property
LightingStyle Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Parent Object: LightingStyle
Description
Gets and sets the lighting style name.
Syntax
LightingStyle.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
LightingStyle.Parent Property
Parent Object: LightingStyle
Description
Property returning the parent of the object.
Syntax
LightingStyle.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LightingStyle.SaveToGlobal Method
Parent Object: LightingStyle
LightingStyle Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
Syntax
LightingStyle.SaveToGlobal()
Version
Introduced in version 10
LightingStyle.ShadowDensity Property
Parent Object: LightingStyle
Description
Gets and sets the direction of the light source that controls the shadow.
Syntax
LightingStyle.ShadowDensity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle.ShadowDirection Property
Parent Object: LightingStyle
Description
Gets and sets the direction of the light source that controls the shadow.
LightingStyle Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Syntax
LightingStyle.ShadowDirection() As ShadowDirectionEnum
Property Value
This is a read/write property whose value is a ShadowDirectionEnum.
Version
Introduced in version 2011
LightingStyle.ShadowSoftness Property
Parent Object: LightingStyle
Description
Gets and sets the blending between shadowed and non-shadowed areas.
Syntax
LightingStyle.ShadowSoftness() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
LightingStyle.StyleLocation Property
Parent Object: LightingStyle
Description
Property that returns the location of this lighting style, i.e. local to the document, cached locally in
the document, exists in the library. Lighting styles that exist in the library cannot be edited.
LightingStyle Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Syntax
LightingStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 10
LightingStyle.Type Property
Parent Object: LightingStyle
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LightingStyle.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LightingStyle.UpdateFromGlobal Method
Parent Object: LightingStyle
Description
Method that updates this style from the global repository.
LightingStyle Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Syntax
LightingStyle.UpdateFromGlobal()
Version
Introduced in version 10
LightingStyle.UploadImage Method
Parent Object: LightingStyle
Description
Upload an IBL image to current lighting style.
Syntax
LightingStyle.UploadImage( ImageFileName As String, [EnvName] As Variant )
Parameters
Name Type Description
ImageFileName String
Input String value that specifies the image file name. Valid image
extension types are: .hdr and .exr.
EnvName Variant
Optional input String value that specifies the environment name. If not
specified the default file name will be used.
This is an optional argument whose default value is null.
Version
Introduced in version 2024
LightingStyle.UpToDate Property
Parent Object: LightingStyle
Description
Property that gets the up-to-date status of the style against the global repository.
LightingStyle Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
Syntax
LightingStyle.UpToDate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
LightingStyle Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3A5F.htm 16/06/2025
LightingStyles Object
Description
The LightingStyles collection object allows for the creation of new LightingStyle objects and
provides access to existing LightingStyle objects.
Methods
Name Description
Add
Method that creates a new LightingStyle object. The name of the new style is specified,
while the rendering attributes are initialized with the same values as the Default style.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of objects in the collection.
Item Returns the specified from the collection.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyDocument.LightingStyles, PartDocument.LightingStyles,
PresentationDocument.LightingStyles
Version
Introduced in version 10
LightingStyles.Add Method
Parent Object: LightingStyles
Description
Method that creates a new LightingStyle object. The name of the new style is specified, while the
rendering attributes are initialized with the same values as the Default style.
LightingStyles Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh59EE.htm 16/06/2025
Syntax
LightingStyles.Add( Name As String ) As LightingStyle
Parameters
Name Type Description
Name String
Input String that specifies the name of the new rendering style. This name must be
unique with respect to all other rendering styles defined in the document. The
method will fail if the name is not unique.
Version
Introduced in version 10
LightingStyles.Application Property
Parent Object: LightingStyles
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LightingStyles.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LightingStyles.Count Property
Parent Object: LightingStyles
LightingStyles Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh59EE.htm 16/06/2025
Description
Property that returns the number of objects in the collection.
Syntax
LightingStyles.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
LightingStyles.Item Property
Parent Object: LightingStyles
Description
Returns the specified from the collection.
Syntax
LightingStyles.Item( Index As Variant ) As LightingStyle
Property Value
This is a read only property whose value is a LightingStyle.
Parameters
Name Type Description
Index Variant
Value that specifies the index number of the LightingStyle to return. If an out of
range index is provided, an error will occur.
Version
Introduced in version 10
LightingStyles Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh59EE.htm 16/06/2025
LightingStyles.Parent Property
Parent Object: LightingStyles
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
LightingStyles.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
LightingStyles.Type Property
Parent Object: LightingStyles
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LightingStyles.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
LightingStyles Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh59EE.htm 16/06/2025
Lights Object
Description
The Lights collection object allows for the creation of new Light objects and provides access to
existing model space and view space lights.
Methods
Name Description
Add Method that creates a new Light object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of Light objects in the collection.
Item Returns the specified Light from the collection.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LightingStyle.Lights
Version
Introduced in version 10
Lights.Add Method
Parent Object: Lights
Description
Method that creates a new Light object.
Lights Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F79.htm 16/06/2025
Syntax
Lights.Add( LightType As LightTypeEnum ) As Light
Parameters
Name Type Description
LightType LightTypeEnum Specifies the light type - model space or view space.
Version
Introduced in version 10
Lights.Application Property
Parent Object: Lights
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Lights.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
Lights.Count Property
Parent Object: Lights
Description
Property that returns the number of Light objects in the collection.
Lights Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F79.htm 16/06/2025
Syntax
Lights.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
Lights.Item Property
Parent Object: Lights
Description
Returns the specified Light from the collection.
Syntax
Lights.Item( Index As Variant ) As Light
Property Value
This is a read only property whose value is a Light.
Parameters
Name Type Description
Index Variant
Value that specifies the index number of the Light to return. If an out of range
index is provided, an error will occur.
Version
Introduced in version 10
Lights.Parent Property
Parent Object: Lights
Lights Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F79.htm 16/06/2025
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
Lights.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
Lights.Type Property
Parent Object: Lights
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Lights.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
Lights Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F79.htm 16/06/2025
Line Object
Description
The Line object. The object created is a transient mathematical object and is not displayed
graphically. For more information, see the Transient Geometry article in the overview section.
Methods
Name Description
Copy
Creates a copy of this Line object. The result is entirely independent and
can be edited without affecting the original Line object.
DistanceTo Method that returns the distance to the specified point.
GetLineData Get the data defining this line.
IntersectWithCurve
Method that returns Point objects that represent the points at the
intersection of the Line/LineSegment and the input curve. Returns Nothing
if the curves overlap or are parallel.
IntersectWithSurface
Method that returns Point objects that represent the points at the
intersection of the Line/LineSegment and the input surface. Returns
Nothing if the Line/LineSegment lies on the surface or it is parallel to the
surface.
PutLineData Method that sets the data defining this line.
Properties
Name Description
Direction Specifies the direction of the line.
Evaluator Gets the CurveEvaluator for the line.
IsColinearTo
Property that gets whether this line is colinear to the specified line, within the
specified tolerance.
RootPoint Specifies the root point of the line.
Accessed From
AnnotationPlaneDefinition.XAxis, DetailDrawingView.DrawingViewToModelSpace,
DetailDrawingView.SheetToModelSpace, DrawingView.DrawingViewToModelSpace,
DrawingView.SheetToModelSpace, Line.Copy, PlanarSketch.AxisEntityGeometry,
PlanarSketchProxy.AxisEntityGeometry, Plane.IntersectWithPlane,
SectionDrawingView.DrawingViewToModelSpace, SectionDrawingView.SheetToModelSpace,
SketchBlockDefinition.AxisEntityGeometry, SketchBlockDefinitionProxy.AxisEntityGeometry,
TransientGeometry.CreateLine, WorkAxis.Line, WorkAxisProxy.Line
Samples
Line Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Name Description
Sketch Edit Orientation This sample demonstrates modifying the orientation of a sketch.
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 4
Line.Copy Method
Parent Object: Line
Description
Creates a copy of this Line object. The result is entirely independent and can be edited without
affecting the original Line object.
Syntax
Line.Copy() As Line
Version
Introduced in version 2013
Line.Direction Property
Parent Object: Line
Description
Specifies the direction of the line.
Syntax
Line.Direction() As UnitVector
Property Value
This is a read/write property whose value is a UnitVector.
Line Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Samples
Name Description
Sketch Edit Orientation This sample demonstrates modifying the orientation of a sketch.
Version
Introduced in version 4
Line.DistanceTo Method
Parent Object: Line
Description
Method that returns the distance to the specified point.
Syntax
Line.DistanceTo( Point As Point ) As Double
Parameters
Name Type Description
Point Point Point object that specifies the point to which the distance is to be returned.
Version
Introduced in version 11
Line.Evaluator Property
Parent Object: Line
Description
Gets the CurveEvaluator for the line.
Syntax
Line.Evaluator() As CurveEvaluator
Line Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 4
Line.GetLineData Method
Parent Object: Line
Description
Get the data defining this line.
Syntax
Line.GetLineData( RootPoint() As Double, Direction() As Double )
Parameters
Name Type Description
RootPoint Double Input/output Double that specifies the root point of the line.
Direction Double Input/output Double that specifies the direction of the line.
Version
Introduced in version 4
Line.IntersectWithCurve Method
Parent Object: Line
Description
Method that returns Point objects that represent the points at the intersection of the
Line/LineSegment and the input curve. Returns Nothing if the curves overlap or are parallel.
Syntax
Line.IntersectWithCurve( Curve As Object, [Tolerance] As Double ) As ObjectsEnumerator
Line Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Parameters
Name Type Description
Curve Object
Input object. This can be a Line, LineSegment, Arc3d, EllipticalArc, Circle,
EllipseFull, or a BSplineCurve.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2008
Line.IntersectWithSurface Method
Parent Object: Line
Description
Method that returns Point objects that represent the points at the intersection of the
Line/LineSegment and the input surface. Returns Nothing if the Line/LineSegment lies on the
surface or it is parallel to the surface.
Syntax
Line.IntersectWithSurface( Surface As Object, [Tolerance] As Double ) As ObjectsEnumerator
Parameters
Name Type Description
Surface Object
Input object. This can be a Plane, Cone, Cylinder, EllipticalCone,
EllipticalCylinder, Sphere, Torus or a BSplineSurface.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2008
Line Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Line.IsColinearTo Property
Parent Object: Line
Description
Property that gets whether this line is colinear to the specified line, within the specified tolerance.
Syntax
Line.IsColinearTo( Line As Object, [Tolerance] As Double ) As Boolean
Property Value
This is a read only property whose value is a Boolean.
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
or SketchLine object.
Tolerance Double
Input Double that specifies the tolerance.
This is an optional argument whose default value is 0.0.
Samples
Name Description
Is cylindrical face
interior or exterior?
This sample shows how to determine whether the selected cylindircal
face is an exterior face or an interior (hollow) face.
Version
Introduced in version 9
Line.PutLineData Method
Parent Object: Line
Description
Method that sets the data defining this line.
Line Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Syntax
Line.PutLineData( RootPoint() As Double, Direction() As Double )
Parameters
Name Type Description
RootPoint Double Input/output Double that specifies the root point of the line.
Direction Double Input/output Double that specifies the direction of the line.
Version
Introduced in version 4
Line.RootPoint Property
Parent Object: Line
Description
Specifies the root point of the line.
Syntax
Line.RootPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 4
Line Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh86DA.htm 16/06/2025
Line2d Object
Description
The Line2d object. A Line2d object is infinite. The object created is a transient mathematical
object and is not displayed graphically.
Methods
Name Description
Copy
Creates a copy of this Line2d object. The result is entirely independent and
can be edited without affecting the original Line2d object.
DistanceTo Method that returns the distance to the specified point.
GetLineData Get the data defining this line.
IntersectWithCurve
Method that returns Point2d objects that represent the points at the
intersection of the Line2d/LineSegment2d and the input curve. Returns
Nothing if the curves overlap or are parallel.
PutLineData Method that sets the data defining this line.
Properties
Name Description
Direction Specifies the direction of the line.
Evaluator Gets the Curve2DEvaluator for the line.
RootPoint Specifies the root point of the line.
Accessed From
Line2d.Copy, TransientGeometry.CreateLine2d
Version
Introduced in version 4
Line2d.Copy Method
Parent Object: Line2d
Description
Creates a copy of this Line2d object. The result is entirely independent and can be edited without
affecting the original Line2d object.
Line2d Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EA7.htm 16/06/2025
Syntax
Line2d.Copy() As Line2d
Version
Introduced in version 2013
Line2d.Direction Property
Parent Object: Line2d
Description
Specifies the direction of the line.
Syntax
Line2d.Direction() As UnitVector2d
Property Value
This is a read/write property whose value is a UnitVector2d.
Version
Introduced in version 4
Line2d.DistanceTo Method
Parent Object: Line2d
Description
Method that returns the distance to the specified point.
Syntax
Line2d.DistanceTo( Point As Point2d ) As Double
Parameters
Line2d Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EA7.htm 16/06/2025
Name Type Description
Point Point2d Point2d object that specifies the point to which the distance is to be returned.
Version
Introduced in version 11
Line2d.Evaluator Property
Parent Object: Line2d
Description
Gets the Curve2DEvaluator for the line.
Syntax
Line2d.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Version
Introduced in version 4
Line2d.GetLineData Method
Parent Object: Line2d
Description
Get the data defining this line.
Syntax
Line2d.GetLineData( RootPoint() As Double, Direction() As Double )
Parameters
Name Type Description
Line2d Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EA7.htm 16/06/2025
RootPoint Double Input/output Double that specifies the root point of the line.
Direction Double Input/output Double that specifies the direction of the line.
Version
Introduced in version 4
Line2d.IntersectWithCurve Method
Parent Object: Line2d
Description
Method that returns Point2d objects that represent the points at the intersection of the
Line2d/LineSegment2d and the input curve. Returns Nothing if the curves overlap or are parallel.
Syntax
Line2d.IntersectWithCurve( Curve As Object, [Tolerance] As Double ) As ObjectsEnumerator
Parameters
Name Type Description
Curve Object
Input object. This can be a Line2d, LineSegment2d, Arc2d, EllipticalArc2d,
Circle2d, EllipseFull2d, or a BSplineCurve2d.
Tolerance Double
Optional input Double that specifies the linear tolerance to use for intersection
computation. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2008
Line2d.PutLineData Method
Parent Object: Line2d
Description
Method that sets the data defining this line.
Line2d Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EA7.htm 16/06/2025
Syntax
Line2d.PutLineData( RootPoint() As Double, Direction() As Double )
Parameters
Name Type Description
RootPoint Double Input/output Double that specifies the root point of the line.
Direction Double Input/output Double that specifies the direction of the line.
Version
Introduced in version 4
Line2d.RootPoint Property
Parent Object: Line2d
Description
Specifies the root point of the line.
Syntax
Line2d.RootPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 4
Line2d Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EA7.htm 16/06/2025
LineAndPlaneWorkAxisDef Object
Description
Object that allows you to get and set the information that specifies a work axis that is along a line
defined by projecting a line onto a plane along the plane normal.
Methods
Name Description
GetData
Method that gets all of the data defining a work axis that is along a line defined by
projecting a line onto a plane along the plane normal.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Line
Property that returns the point of a work axis that is along a line defined by
projecting a line onto a plane along the plane normal. This object can be a linear
Edge, WorkAxis, or SketchLine object.
Parent Property returning the parent WorkAxis object.
Plane
Property that indicates the plane of a work axis that is along a line defined by
projecting a line onto a plane along the plane normal. This object can be a planar
Face, WorkPlane, or Sketch object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.Application
Property
Parent Object: LineAndPlaneWorkAxisDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
LineAndPlaneWorkAxisDef Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5E8.htm 16/06/2025
Syntax
LineAndPlaneWorkAxisDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.GetData Method
Parent Object: LineAndPlaneWorkAxisDef
Description
Method that gets all of the data defining a work axis that is along a line defined by projecting a
line onto a plane along the plane normal.
Syntax
LineAndPlaneWorkAxisDef.GetData( Line As Object, Plane As Object )
Parameters
Name Type Description
Line Object
Output object that represents a line. This object can be a linear Edge, WorkAxis, or
SketchLine object.
Plane Object
Output object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.Line Property
Parent Object: LineAndPlaneWorkAxisDef
LineAndPlaneWorkAxisDef Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5E8.htm 16/06/2025
Description
Property that returns the point of a work axis that is along a line defined by projecting a line onto a
plane along the plane normal. This object can be a linear Edge, WorkAxis, or SketchLine object.
Syntax
LineAndPlaneWorkAxisDef.Line() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.Parent Property
Parent Object: LineAndPlaneWorkAxisDef
Description
Property returning the parent WorkAxis object.
Syntax
LineAndPlaneWorkAxisDef.Parent() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.Plane Property
Parent Object: LineAndPlaneWorkAxisDef
LineAndPlaneWorkAxisDef Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5E8.htm 16/06/2025
Description
Property that indicates the plane of a work axis that is along a line defined by projecting a line
onto a plane along the plane normal. This object can be a planar Face, WorkPlane, or Sketch
object.
Syntax
LineAndPlaneWorkAxisDef.Plane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef.Type Property
Parent Object: LineAndPlaneWorkAxisDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LineAndPlaneWorkAxisDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
LineAndPlaneWorkAxisDef Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB5E8.htm 16/06/2025
LoftFeatureProxy Object
Derived from: LoftFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
Definition Gets and sets the definition for the loft feature.
EndFace Property that returns the that acts as the cap of the last section of the loft.
This property will return nothing in the cases where the loft does not
LoftFeatureProxy Object Page 1 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
have a ending face. These cases are when the loft sections are not closed
or when the loft operation does not result in a solid.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the faces
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
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
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
StartFace
Property that returns the that acts as the cap of the first section of the
loft. This property will return nothing in the cases where the loft does not
have a starting face. These cases are when the loft sections are not closed
or when the loft operation does not result in a solid.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
LoftFeatureProxy.Adaptive Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 2 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Gets and sets whether this feature is adaptive or not.
Syntax
LoftFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
LoftFeatureProxy.Appearance Property
Parent Object: LoftFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
LoftFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
LoftFeatureProxy.AppearanceSourceType
Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 3 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Gets and sets the source of the appearance for the feature.
Syntax
LoftFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
LoftFeatureProxy.Application Property
Parent Object: LoftFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LoftFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
LoftFeatureProxy.AttributeSets Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 4 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
LoftFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
LoftFeatureProxy.ConsumeInputs Property
Parent Object: LoftFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
LoftFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LoftFeatureProxy.ContainingOccurrence
Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 5 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
LoftFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
LoftFeatureProxy.Definition Property
Parent Object: LoftFeatureProxy
Description
Gets and sets the definition for the loft feature.
Syntax
LoftFeatureProxy.Definition() As LoftDefinition
Property Value
This is a read/write property whose value is a LoftDefinition.
Version
Introduced in version 2008
LoftFeatureProxy.Delete Method
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 6 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
LoftFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
Introduced in version 9
LoftFeatureProxy.EndFace Property
Parent Object: LoftFeatureProxy
Description
LoftFeatureProxy Object Page 7 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Property that returns the that acts as the cap of the last section of the loft. This property will return
nothing in the cases where the loft does not have a ending face. These cases are when the loft
sections are not closed or when the loft operation does not result in a solid.
Syntax
LoftFeatureProxy.EndFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 9
LoftFeatureProxy.ExtendedName Property
Parent Object: LoftFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
LoftFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
LoftFeatureProxy.Faces Property
Parent Object: LoftFeatureProxy
Description
LoftFeatureProxy Object Page 8 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
LoftFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
LoftFeatureProxy.FeatureDimensions
Property
Parent Object: LoftFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
LoftFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
LoftFeatureProxy.GetReferenceKey Method
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 9 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
LoftFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 9
LoftFeatureProxy.GetSuppressionCondition
Method
Parent Object: LoftFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
LoftFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
LoftFeatureProxy Object Page 10 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
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
LoftFeatureProxy.HealthStatus Property
Parent Object: LoftFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
LoftFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
LoftFeatureProxy.IsOwnedByFeature
Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 11 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
LoftFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
LoftFeatureProxy.Name Property
Parent Object: LoftFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
LoftFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
LoftFeatureProxy.NativeObject Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 12 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
LoftFeatureProxy.NativeObject() As LoftFeature
Property Value
This is a read only property whose value is a LoftFeature.
Version
Introduced in version 9
LoftFeatureProxy.OwnedBy Property
Parent Object: LoftFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
LoftFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
LoftFeatureProxy.Parameters Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 13 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Property that returns all the parameters associated with the feature.
Syntax
LoftFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
LoftFeatureProxy.Parent Property
Parent Object: LoftFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
LoftFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
LoftFeatureProxy.Participants Property
Parent Object: LoftFeatureProxy
Description
LoftFeatureProxy Object Page 14 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
LoftFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
LoftFeatureProxy.RangeBox Property
Parent Object: LoftFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
LoftFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
LoftFeatureProxy.RemoveParticipant
Method
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 15 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
LoftFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
LoftFeatureProxy.SetAffectedBodies Method
Parent Object: LoftFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
LoftFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
LoftFeatureProxy Object Page 16 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
LoftFeatureProxy.SetEndOfPart Method
Parent Object: LoftFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
LoftFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 9
LoftFeatureProxy.SetSuppressionCondition
Method
Parent Object: LoftFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
LoftFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
LoftFeatureProxy Object Page 17 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
ComparisonType ComparisonTypeEnum ComparisonTypeEnum that specifies the type of
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
Version
Introduced in version 11
LoftFeatureProxy.Shared Property
Parent Object: LoftFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
LoftFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
LoftFeatureProxy.SideFaces Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 18 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Property that returns a object that provides access to all of the faces created around the perimeter
of the feature.
Syntax
LoftFeatureProxy.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
LoftFeatureProxy.StartFace Property
Parent Object: LoftFeatureProxy
Description
Property that returns the that acts as the cap of the first section of the loft. This property will return
nothing in the cases where the loft does not have a starting face. These cases are when the loft
sections are not closed or when the loft operation does not result in a solid.
Syntax
LoftFeatureProxy.StartFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 9
LoftFeatureProxy.Suppressed Property
Parent Object: LoftFeatureProxy
LoftFeatureProxy Object Page 19 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Description
Gets and sets whether this feature is suppressed or not.
Syntax
LoftFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
LoftFeatureProxy.SurfaceBodies Property
Parent Object: LoftFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
LoftFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
LoftFeatureProxy.Type Property
Parent Object: LoftFeatureProxy
Description
LoftFeatureProxy Object Page 20 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
LoftFeatureProxy Object Page 21 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4921.htm 16/06/2025
LoftFeatures Object
Description
The LoftFeatures collection object provides access to existing loft features and supports the ability
to create new loft features.
Methods
Name Description
Add Method that creates a new loft.
CreateLoftDefinition
Method that creates a LoftDefinition object that defines the input definition
for a loft feature.
CreateMapCurves
Method that creates a new MapPointCurves object. You then use
functionality provided by the resulting MapPointCurves object to define the
specific point mapping.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified LoftFeature object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.LoftFeatures, SheetMetalFeatures.LoftFeatures
Samples
Name Description
Loft Feature
With Non-
Planar Section
This sample demonstrates the creation of a loft feature. It uses two sections for
the loft, one is from a 2d sketch and the other is a non-planar section from a 3d
sketch. Because one of the sketches isn't planar, a surface is created instead of a
solid.
Version
Introduced in version 5
LoftFeatures Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
LoftFeatures.Add Method
Parent Object: LoftFeatures
Description
Method that creates a new loft.
Syntax
LoftFeatures.Add( Definition As LoftDefinition ) As LoftFeature
Parameters
Name Type Description
Definition LoftDefinition
Input LoftDefinition object that defines the input definition for the loft.
The LoftDefinition object can be created using the
CreateLoftDefinition method of the LoftFeatures object. The
LoftDefinition object defines the following input data for creating the
loft feature: the loft sections, the boundary conditions for the starting
and ending sections, a centerline or rails with any applicable boundary
conditions, the mapping between the sections, an option to indicate
whether the loft should be closed or not and an option to indicate
whether tangent faces should be merged or not.
Samples
Name Description
Loft Feature
With Non-
Planar Section
This sample demonstrates the creation of a loft feature. It uses two sections for
the loft, one is from a 2d sketch and the other is a non-planar section from a 3d
sketch. Because one of the sketches isn't planar, a surface is created instead of a
solid.
Version
Introduced in version 6
LoftFeatures.Application Property
Parent Object: LoftFeatures
Description
LoftFeatures Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LoftFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
LoftFeatures.Count Property
Parent Object: LoftFeatures
Description
Property that returns the number of items in this collection.
Syntax
LoftFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
LoftFeatures.CreateLoftDefinition Method
Parent Object: LoftFeatures
Description
Method that creates a LoftDefinition object that defines the input definition for a loft feature.
LoftFeatures Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
Syntax
LoftFeatures.CreateLoftDefinition( Sections As ObjectCollection, Operation As
PartFeatureOperationEnum ) As LoftDefinition
Parameters
Name Type Description
Sections ObjectCollection
Input ObjectCollection that contains the sections for the
loft. Valid objects for sections are Profile, Profile3D,
EdgeLoop, EdgeCollection, SketchPoint, SketchPoint3D,
WorkPoint and Vertex objects. If a point (SketchPoint,
SketchPoint3D, WorkPoint or Vertex object) is used, it
must be either the first section or the last section and there
must be at least one other intermediate section which is not
a point. If an EdgeCollection object is used it may contain
either a single edge or a set of tangentially connected
edges. The order of the sections within the
ObjectCollection defines the fit order of the loft through
the sections. The sections must be either all open or all
closed; you cannot mix open and closed sections.
Operation PartFeatureOperationEnum
Input constant that indicates the type of operation to
perform. Valid input is kJoinOperation, kCutOperation,
kIntersectOperation or kSurfaceOperation.
Remarks
The functionality provided by the resulting LoftDefinition object can also be used to define
additional input data for creating the loft feature which includes the following: the boundary
conditions for the starting and ending sections, a centerline or rails with any applicable boundary
conditions, the mapping between the sections, an option to indicate whether the loft should be
closed or not and an option to indicate whether tangent faces should be merged or not.
Samples
Name Description
Loft Feature
With Non-
Planar Section
This sample demonstrates the creation of a loft feature. It uses two sections for
the loft, one is from a 2d sketch and the other is a non-planar section from a 3d
sketch. Because one of the sketches isn't planar, a surface is created instead of a
solid.
Version
Introduced in version 2008
LoftFeatures Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
LoftFeatures.CreateMapCurves Method
Parent Object: LoftFeatures
Description
Method that creates a new MapPointCurves object. You then use functionality provided by the
resulting MapPointCurves object to define the specific point mapping.
Syntax
LoftFeatures.CreateMapCurves( Sections As ObjectCollection ) As MapPointCurves
Parameters
Name Type Description
Sections ObjectCollection
Input ObjectCollection that contains the sections for the loft. The
sections provided for input must be the same sections that will be used
as input for the LoftFeatures.Add method.
Version
Introduced in version 6
LoftFeatures.Item Property
Parent Object: LoftFeatures
Description
Returns the specified LoftFeature object from the collection.
Syntax
LoftFeatures.Item( Index As Variant ) As LoftFeature
Property Value
This is a read only property whose value is a LoftFeature.
Parameters
Name Type Description
LoftFeatures Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
Index Variant Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string
indicating the feature name. If an out of range index or a name of a non-existent
feature is provided, an error occurs.
Version
Introduced in version 5
LoftFeatures.Type Property
Parent Object: LoftFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
LoftFeatures Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6AB3.htm 16/06/2025
LoftRail Object
Description
The LoftRail object is used to define a rail in a loft feature.
Methods
Name Description
Delete Method that deletes this loft rail.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Condition
Returns an enum indicating the condition of the loft at the rail if the rail has
conditions associated with it.
HasConditions Property that specifies whether the rail has conditions associated with it.
Impact
Property that returns the Parameter object that controls the amount of influence
the rail has on the shape of the entire loft.
Rail Property that gets the rail for the loft feature.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LoftRails.Add, LoftRails.Item
Version
Introduced in version 11
LoftRail.Application Property
Parent Object: LoftRail
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
LoftRail Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh887C.htm 16/06/2025
Syntax
LoftRail.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LoftRail.Condition Property
Parent Object: LoftRail
Description
Returns an enum indicating the condition of the loft at the rail if the rail has conditions associated
with it.
Syntax
LoftRail.Condition() As LoftConditionEnum
Property Value
This is a read/write property whose value is a LoftConditionEnum.
Version
Introduced in version 11
LoftRail.Delete Method
Parent Object: LoftRail
Description
Method that deletes this loft rail.
LoftRail Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh887C.htm 16/06/2025
Syntax
LoftRail.Delete()
Version
Introduced in version 2008
LoftRail.HasConditions Property
Parent Object: LoftRail
Description
Property that specifies whether the rail has conditions associated with it.
Syntax
LoftRail.HasConditions() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
LoftRail.Impact Property
Parent Object: LoftRail
Description
Property that returns the Parameter object that controls the amount of influence the rail has on the
shape of the entire loft.
Syntax
LoftRail.Impact() As Parameter
LoftRail Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh887C.htm 16/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 11
LoftRail.Rail Property
Parent Object: LoftRail
Description
Property that gets the rail for the loft feature.
Syntax
LoftRail.Rail() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LoftRail.Type Property
Parent Object: LoftRail
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftRail.Type() As ObjectTypeEnum
LoftRail Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh887C.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LoftRail Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh887C.htm 16/06/2025
LoftRails Object
Description
The LoftRails object is used to define the rails and their conditions in a loft feature.
Methods
Name Description
Add Method that creates a new LoftRail that represents a rail for a loft feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of LoftRail objects in the collection.
Item Method that returns the specified LoftRail object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LoftDefinition.LoftRails
Version
Introduced in version 11
LoftRails.Add Method
Parent Object: LoftRails
Description
Method that creates a new LoftRail that represents a rail for a loft feature.
Syntax
LoftRails.Add( Value As Object, [Condition] As Variant, [Impact] As Variant ) As LoftRail
LoftRails Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA059.htm 16/06/2025
Parameters
Name Type Description
Value Object
Input Object that defines a rail for a loft feature. Valid input objects for rails
are Profile, Profile3D, EdgeLoop and EdgeCollection objects. The
EdgeCollection object may contain either a single edge or a set of tangentially
connected edges. Since all the rails for a loft must be either open or all closed,
if the existing rails in the collection are open, then the rail specified using this
argument must be open. Similarly, if the existing rails in the collection are
closed, then the rail specified using this argument must be closed.
Condition Variant
Optional input constant that defines the condition of the loft at the rail. Valid
input is one of the following constants in LoftConditionEnum:
kFreeLoftCondition, kTangentLoftCondition or kSmoothLoftCondition. If any
other constant in LoftConditionEnum is specified, then the creation of the loft
rail will fail. Since the condition is only applicable for a rail to which boundary
conditions can be applied, the rail condition must not be specified using this
argument if boundary conditions cannot be applied to the rail specified by the
Rail argument, otherwise the creation of the loft rail will fail. If the rail is a rail
to which boundary conditions can be applied and if no value is explicitly
specified for this argument, then the default value of kFreeLoftCondition will
be assumed.
This is an optional argument whose default value is null.
Impact Variant
Optional input Variant that defines the impact the rail's condition has on the
shape of the entire loft. The value can be specified either as a numeric value or
a string. A parameter for this value will be created and the supplied string or
value is assigned to the parameter. If a value is \input, it is unitless. If a string
is input it must resolve to a unitless value. Since the impact is only applicable
for a rail to which the tangent or smooth condition can been applied, the
impact value should be specified only if both of the following conditions are
satisfied:
• The loft rail is a rail to which boundary conditions can be applied.
• The Condition argument is specified to be kTangentLoftCondition or
kSmoothLoftCondition to indicate tangent or smooth condition.
If any one or both of the above conditions are not satisfied and an impact value
is specified, then this method will fail to create the loft rail. If both the
conditions are satisfied and if no value is explicitly specified for this argument,
then the default value of 0 will be assumed.
This is an optional argument whose default value is null.
LoftRails Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA059.htm 16/06/2025
Remarks
The Condition and Impact arguments can be used to specify the boundary conditions for a rail
only if these conditions can be applied to the rail. Therefore, these arguments are valid only if
boundary conditions are applicable to the rail specified using the Rail argument. If boundary
conditions cannot be applied to the rail and either one of or both the Condition and Impact
arguments are specified, then this method will fail.
Version
Introduced in version 2008
LoftRails.Application Property
Parent Object: LoftRails
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LoftRails.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
LoftRails.Count Property
Parent Object: LoftRails
Description
Property that specifies the number of LoftRail objects in the collection.
LoftRails Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA059.htm 16/06/2025
Syntax
LoftRails.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
LoftRails.Item Property
Parent Object: LoftRails
Description
Method that returns the specified LoftRail object from the collection.
Syntax
LoftRails.Item( Index As Long ) As LoftRail
Property Value
This is a read only property whose value is a LoftRail.
Parameters
Name Type Description
Index Long Value that specifies the LoftRail to return.
Version
Introduced in version 11
LoftRails.Type Property
Parent Object: LoftRails
LoftRails Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA059.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftRails.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
LoftRails Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA059.htm 16/06/2025
LoftSectionDimension Object
Description
The LoftSectionDimension object is used to define the position and area for a placed section of an areagraph
type loft.
Methods
Name Description
Delete Method that deletes this placed section of an area-graph type loft.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
IsDrivingSection
Read-write property that specifies whether the placed section for an areagraph
type loft is driving or driven.
Position
Read-write property that gets and sets the positional distance (from the
starting section) of the placed section for an area-graph type loft.
PositionAsAbsoluteDistance
Read-write Boolean property that gets and sets the whether the positional
distance of the placed section for an area-graph type loft is specified as an
absolute distance value.
Size
Read-write property that gets and sets the size of the placed section for an
area-graph type loft.
SizeAsScaleFactor
Read-write property that gets and sets whether the size of the placed section
for an area-graph type loft is specified as a scale factor with respect to its
default size.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LoftSectionDimensions.AddDrivenSection, LoftSectionDimensions.AddDrivingSection,
LoftSectionDimensions.Item
Version
Introduced in version 2008
LoftSectionDimension.Application Property
Parent Object: LoftSectionDimension
LoftSectionDimension Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF0D.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
LoftSectionDimension.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LoftSectionDimension.Delete Method
Parent Object: LoftSectionDimension
Description
Method that deletes this placed section of an area-graph type loft.
Syntax
LoftSectionDimension.Delete()
Version
Introduced in version 2008
LoftSectionDimension.IsDrivingSection Property
Parent Object: LoftSectionDimension
Description
Read-write property that specifies whether the placed section for an area-graph type loft is driving or
driven.
Syntax
LoftSectionDimension.IsDrivingSection() As Boolean
LoftSectionDimension Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF0D.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftSectionDimension.Position Property
Parent Object: LoftSectionDimension
Description
Read-write property that gets and sets the positional distance (from the starting section) of the placed
section for an area-graph type loft.
Syntax
LoftSectionDimension.Position() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LoftSectionDimension.PositionAsAbsoluteDistance
Property
Parent Object: LoftSectionDimension
Description
Read-write Boolean property that gets and sets the whether the positional distance of the placed section for
an area-graph type loft is specified as an absolute distance value.
Syntax
LoftSectionDimension.PositionAsAbsoluteDistance() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
LoftSectionDimension Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF0D.htm 16/06/2025
Version
Introduced in version 2008
LoftSectionDimension.Size Property
Parent Object: LoftSectionDimension
Description
Read-write property that gets and sets the size of the placed section for an area-graph type loft.
Syntax
LoftSectionDimension.Size() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2008
LoftSectionDimension.SizeAsScaleFactor
Property
Parent Object: LoftSectionDimension
Description
Read-write property that gets and sets whether the size of the placed section for an area-graph type loft is
specified as a scale factor with respect to its default size.
Syntax
LoftSectionDimension.SizeAsScaleFactor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
LoftSectionDimension Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF0D.htm 16/06/2025
LoftSectionDimension.Type Property
Parent Object: LoftSectionDimension
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftSectionDimension.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
LoftSectionDimension Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF0D.htm 16/06/2025
LoftSectionDimensions Object
Description
The LoftSectionDimensions object is used to define the placed section dimensions for an areagraph
type loft.
Methods
Name Description
AddDrivenSection
Method that creates a new LoftSectionDimension that represents a driven
placed section for an area-graph type loft feature.
AddDrivingSection
Method that creates a new LoftSectionDimension that represents a driving
placed section for an area-graph type loft feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of LoftSectionDimension objects in the collection.
Item Returns the specified LoftSectionDimension object from the collection
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LoftDefinition.LoftSectionDimensions
Version
Introduced in version 2008
LoftSectionDimensions.AddDrivenSection
Method
Parent Object: LoftSectionDimensions
Description
LoftSectionDimensions Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
Method that creates a new LoftSectionDimension that represents a driven placed section for an
area-graph type loft feature.
Syntax
LoftSectionDimensions.AddDrivenSection( Position As Double, [PositionAsAbsoluteDistance]
As Boolean ) As LoftSectionDimension
Parameters
Name Type Description
Position Double
Specifies the positional distance (from the starting section)
of the placed section for an area-graph type loft feature.
The valid range of values for this argument depends on the
value of the PositionAsAbsoluteDistance argument. If the
PositionAsAbsoluteDistance argument is True, then the
value specified by this argument represents an absolute
distance value (measured along the centerline of the loft
from the starting section) and any Double value that
represents this absolute distance can be specified. If the
PositionAsAbsoluteDistance argument is False, then the
value specified by this argument represents a proportional
distance value (relative to the starting section). The valid
range of values for the proportional distance is 0.0 to 1.0
(including 0.0 and 1.0). This proportional distance is
defined as the absolute distance of the placed section from
the starting section divided by the absolute distance of the
ending section from the starting section where both the
distances are measured along the centerline of the loft. For
example, for a placed section that coincides with the
starting section the value of the proportional distance will
be 0.0 and for a placed section that coincides with the
ending section the value of the proportional distance will
be 1.0. For intermediate placed sections, the value of the
proportional distance will be between 0.0 and 1.0.
PositionAsAbsoluteDistance Boolean Indicates whether the positional distance of the placed
section for an area-graph type loft feature is specified as an
absolute distance value. A value of True indicates that the
positional distance (specified by the Position argument) of
the placed section is specified as an absolute distance value
(measured along the centerline of the loft from the starting
section). A value of False indicates that the positional
distance (specified by the Position argument) of the placed
section is specified as a proportional distance value
(relative to the starting section). This proportional distance
is defined as the absolute distance of the placed section
from the starting section divided by the absolute distance
of the ending section from the starting section where both
the distances are measured along the centerline of the loft.
For example, for a placed section that coincides with the
starting section the value of the proportional distance will
LoftSectionDimensions Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
be 0.0 and for a placed section that coincides with the
ending section the value of the proportional distance will
be 1.0. For intermediate placed sections, the value of the
proportional distance will be between 0.0 and 1.0. If no
value is explicitly specified, a default value of False will be
assumed to indicate that positional distance is specified as
a proportional distance value.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
LoftSectionDimensions.AddDrivingSection
Method
Parent Object: LoftSectionDimensions
Description
Method that creates a new LoftSectionDimension that represents a driving placed section for an
area-graph type loft feature.
Syntax
LoftSectionDimensions.AddDrivingSection( Position As Double, Size As Double,
[PositionAsAbsoluteDistance] As Boolean, [SizeAsScaleFactor] As Boolean ) As
LoftSectionDimension
Parameters
Name Type Description
Position Double Specifies the positional distance (from the starting section)
of the placed section for an area-graph type loft feature.
The valid range of values for this argument depends on the
value of the PositionAsAbsoluteDistance argument. If the
PositionAsAbsoluteDistance argument is True, then the
value specified by this argument represents an absolute
distance value (measured along the centerline of the loft
from the starting section) and any Double value that
represents this absolute distance can be specified. If the
PositionAsAbsoluteDistance argument is False, then the
value specified by this argument represents a proportional
distance value (relative to the starting section). The valid
range of values for the proportional distance is 0.0 to 1.0
LoftSectionDimensions Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
(including 0.0 and 1.0). This proportional distance is
defined as the absolute distance of the placed section from
the starting section divided by the absolute distance of the
ending section from the starting section where both the
distances are measured along the centerline of the loft. For
example, for a placed section that coincides with the
starting section the value of the proportional distance will
be 0.0 and for a placed section that coincides with the
ending section the value of the proportional distance will
be 1.0. For intermediate placed sections, the value of the
proportional distance will be between 0.0 and 1.0.
Size Double
Specifies the size of the placed section for an area-graph
type loft feature. The specified value will either represent
an absolute area value or a scale factor value depending on
the value of the SizeAsScaleFactor argument. If the
SizeAsScaleFactor argument is True, then the value
specified by this argument represents a scale factor for the
size of the placed section (i.e. by what scale factor should
the placed section be re-sized from its default size). For
example, for a placed section whose area needs to be the
same as its default size, the value of the scale factor will be
1.0 and for a placed section whose area needs to be half the
default size, the value of the scale factor will be 0.5. If the
SizeAsScaleFactor argument is False, then the value
specified by this argument represents the absolute area of
the placed section.
PositionAsAbsoluteDistance Boolean
Indicates whether the positional distance of the placed
section for an area-graph type loft feature is specified as an
absolute distance value. A value of True indicates that the
positional distance (specified by the Position argument) of
the placed section is specified as an absolute distance value
(measured along the centerline of the loft from the starting
section). A value of False indicates that the positional
distance (specified by the Position argument) of the placed
section is specified as a proportional distance value
(relative to the starting section). This proportional distance
is defined as the absolute distance of the placed section
from the starting section divided by the absolute distance
of the ending section from the starting section where both
the distances are measured along the centerline of the loft.
For example, for a placed section that coincides with the
starting section the value of the proportional distance will
be 0.0 and for a placed section that coincides with the
ending section the value of the proportional distance will
be 1.0. For intermediate placed sections, the value of the
proportional distance will be between 0.0 and 1.0. If no
value is explicitly specified, a default value of False will be
assumed to indicate that positional distance is specified as
a proportional distance value.
This is an optional argument whose default value is False.
SizeAsScaleFactor Boolean
LoftSectionDimensions Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
Indicates whether the size of the placed section for an areagraph
type loft feature is specified as a scale factor with
respect to its default size. A value of True indicates that the
size (specified by the Size argument) of the placed section
is specified in terms of a scale factor with respect to its
default size. For example, for a placed section whose area
needs to be the same as its default size, the value of the
scale factor will be 1.0 and for a placed section whose area
needs to be half the default size, the value of the scale
factor will be 0.5. A value of False indicates that the size
(specified by the Size argument) of the placed section is
specified as an absolute area value. If no value is explicitly
specified, a default value of False will be assumed to
indicate that that the size of the placed section is specified
as an absolute area value.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
LoftSectionDimensions.Application Property
Parent Object: LoftSectionDimensions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LoftSectionDimensions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
LoftSectionDimensions Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
LoftSectionDimensions.Count Property
Parent Object: LoftSectionDimensions
Description
Property that specifies the number of LoftSectionDimension objects in the collection.
Syntax
LoftSectionDimensions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2008
LoftSectionDimensions.Item Property
Parent Object: LoftSectionDimensions
Description
Returns the specified LoftSectionDimension object from the collection
Syntax
LoftSectionDimensions.Item( Index As Long ) As LoftSectionDimension
Property Value
This is a read only property whose value is a LoftSectionDimension.
Parameters
Name Type Description
Index Long Specifies the LoftSectionDimension to return.
LoftSectionDimensions Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
Version
Introduced in version 2008
LoftSectionDimensions.Type Property
Parent Object: LoftSectionDimensions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LoftSectionDimensions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
LoftSectionDimensions Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD729.htm 16/06/2025
LumpDefinition Object
Description
The LumpDefinition represents a transient definition of a lump. A lump represents a bounded area
of space. It can consist of one or more FaceShell objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
FaceShellDefinitions
Property that returns the collection of FaceShellDefinitionobjects associated
with this LumpDefinition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
LumpDefinitions.Add, LumpDefinitions.Item
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
LumpDefinition Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF09C.htm 16/06/2025
Version
Introduced in version 2011
LumpDefinition.Application Property
Parent Object: LumpDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LumpDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
LumpDefinition.FaceShellDefinitions
Property
Parent Object: LumpDefinition
Description
Property that returns the collection of FaceShellDefinitionobjects associated with this
LumpDefinition object.
Syntax
LumpDefinition.FaceShellDefinitions() As FaceShellDefinitions
LumpDefinition Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF09C.htm 16/06/2025
Property Value
This is a read only property whose value is a FaceShellDefinitions.
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
LumpDefinition.Type Property
Parent Object: LumpDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LumpDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
LumpDefinition Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF09C.htm 16/06/2025
Version
Introduced in version 2011
LumpDefinition Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF09C.htm 16/06/2025
LumpDefinitions Object
Description
Methods
Name Description
Add Method that creates a new LumpDefinition within the associated SurfaceBodyDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of LumpDefinition objects in the collection.
Item Returns the specified LumpDefinition object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SurfaceBodyDefinition.LumpDefinitions
Version
Introduced in version 2011
LumpDefinitions.Add Method
Parent Object: LumpDefinitions
Description
Method that creates a new LumpDefinition within the associated SurfaceBodyDefinition.
Syntax
LumpDefinitions.Add() As LumpDefinition
Samples
LumpDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AD9.htm 16/06/2025
Name Description
Transient solid
body creation
The following sample demonstrates the creation of a transient solid block body.
The newly created body is then displayed using client graphics in a part.
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
LumpDefinitions.Application Property
Parent Object: LumpDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
LumpDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
LumpDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AD9.htm 16/06/2025
LumpDefinitions.Count Property
Parent Object: LumpDefinitions
Description
Property that returns the number of LumpDefinition objects in the collection.
Syntax
LumpDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
LumpDefinitions.Item Property
Parent Object: LumpDefinitions
Description
Returns the specified LumpDefinition object from the collection.
Syntax
LumpDefinitions.Item( Index As Long ) As LumpDefinition
Property Value
This is a read only property whose value is a LumpDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the LumpDefinition object within the collection to
return.
LumpDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AD9.htm 16/06/2025
Version
Introduced in version 2011
LumpDefinitions.Type Property
Parent Object: LumpDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
LumpDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
LumpDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AD9.htm 16/06/2025