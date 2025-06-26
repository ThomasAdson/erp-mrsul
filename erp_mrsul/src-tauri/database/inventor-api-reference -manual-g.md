GeneralDimension Object
Derived from: DrawingDimension Object
Description
The GeneralDimension object represents a general dimension placed on a sheet.
Methods
Name Description
Delete Method that deletes the DrawingDimension.
GetInspectionDimensionData
Method that returns the data associated with an inspection dimension.
This method returns an error if the IsInspectionDimension property
returns False.
GetReferenceKey Method that generates and returns the reference key for this entity.
PromoteToSketch
Method that copies the dimension to the underlying sketch. This
method only works for dimensions associated with a draft view.
SetInspectionDimensionData
Method that sets the data associated with an inspection dimension. This
method automatically sets the IsInspectionDimension property to True,
if it isn't already.
ShowAllExtensionLines
Method that un-hides all the extension lines associated with this
dimension. If there are no hidden extension lines associated with this
dimension, this method does nothing and returns a success.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ArrowheadsInside Gets and sets the ArrowheadsInside setting.
Attached
Indicates whether this dimension is attached to anything. If not, it is
considered orphaned and can be removed.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
DimensionLine Property that returns the dimension line geometry of the dimension.
FirstArrowheadInside
Read-write property that gets and sets whether the first arrowhead is inside
or outside.
FirstArrowheadType Read-write property that gets and sets the type of the first arrowhead.
GeneralDimensionType Returns an enum indicating the type of general dimension.
HideValue Gets and sets the HideValue setting.
IsInspectionDimension Gets and sets whether this is an inspection dimension.
Layer Gets and sets the layer applied to this dimension.
ModelValue
Property that gets the dimension value as defined in the model or as
measured in the drawing.
GeneralDimension Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
ModelValueOverridden Read-write property that gets and sets whether the model value is overridden
for the dimension.
OverrideModelValue Gets and sets the NominalValue setting.
Parent Property that returns the parent sheet of the object.
Precision Gets and sets the Precision setting.
Retrieved
Property that indicates whether the dimension was created as a result of
retrieving it either from the model or a drawing view sketch. If True, the
RetrievedFrom property returns the object that the dimension was retrieved
from.
RetrievedFrom
Property that returns the object that this dimension was retrieved from.
Possible return objects include all sketch constraint objects that derive from
DimensionConstraint and their proxies, FeatureDimension and
FeatureDimensionProxy. The property returns Nothing if the Retrieved
property returns False.
SecondArrowheadInside
Read-write property that gets and sets whether the second arrowhead is
inside or outside.
SecondArrowheadType Read-write property that gets and sets the type of the second arrowhead.
Style Gets and sets the DimensionStyle associated with the dimension.
Text Gets and sets the DimensionText setting.
Tolerance Property that returns the Tolerance object associated with this dimension.
TolerancePrecision Gets and sets the precision of the tolerance text for the dimension.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeneralDimensions.Item, GeneralDimensionsEnumerator.Item
Derived Classes
AngularGeneralDimension, DiameterGeneralDimension, LinearGeneralDimension,
RadiusGeneralDimension
Version
Introduced in version 9
GeneralDimension.Application Property
Parent Object: GeneralDimension
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
GeneralDimension Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Syntax
GeneralDimension.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
GeneralDimension.ArrowheadsInside Property
Parent Object: GeneralDimension
Description
Gets and sets the ArrowheadsInside setting.
Syntax
GeneralDimension.ArrowheadsInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
GeneralDimension.Attached Property
Parent Object: GeneralDimension
Description
Indicates whether this dimension is attached to anything. If not, it is considered orphaned and can be
removed.
Syntax
GeneralDimension.Attached() As Boolean
GeneralDimension Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
GeneralDimension.AttributeSets Property
Parent Object: GeneralDimension
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GeneralDimension.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
GeneralDimension.Delete Method
Parent Object: GeneralDimension
Description
Method that deletes the DrawingDimension.
Syntax
GeneralDimension.Delete()
Version
Introduced in version 9
GeneralDimension Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimension.DimensionLine Property
Parent Object: GeneralDimension
Description
Property that returns the dimension line geometry of the dimension.
Syntax
GeneralDimension.DimensionLine() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
GeneralDimension.FirstArrowheadInside
Property
Parent Object: GeneralDimension
Description
Read-write property that gets and sets whether the first arrowhead is inside or outside.
Syntax
GeneralDimension.FirstArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GeneralDimension Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimension.FirstArrowheadType
Property
Parent Object: GeneralDimension
Description
Read-write property that gets and sets the type of the first arrowhead.
Syntax
GeneralDimension.FirstArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2011
GeneralDimension.GeneralDimensionType
Property
Parent Object: GeneralDimension
Description
Returns an enum indicating the type of general dimension.
Syntax
GeneralDimension.GeneralDimensionType() As GeneralDimensionTypeEnum
Property Value
This is a read only property whose value is a GeneralDimensionTypeEnum.
Version
Introduced in version 2008
GeneralDimension Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimension.GetInspectionDimensionData
Method
Parent Object: GeneralDimension
Description
Method that returns the data associated with an inspection dimension. This method returns an error if
the IsInspectionDimension property returns False.
Syntax
GeneralDimension.GetInspectionDimensionData( Shape As InspectionDimensionShapeEnum,
Label As String, Rate As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum
Output InspectionDimensionShapeEnum that indicates the
border shape surrounding the inspection dimension text.
Valid return values are kNoInspectionBorder,
kAngularEndsInspectionBorder and
kRoundedEndsInspectionBorder.
Label String
Output string that returns the text placed left of the
dimension value. The string can contain symbols specified
using the StyleOverride tag.
Rate String
Output string that returns the text (typically a percentage
value) placed to the right of the dimension value. The string
can contain symbols specified using the StyleOverride tag.
Version
Introduced in version 2010
GeneralDimension.GetReferenceKey Method
Parent Object: GeneralDimension
Description
Method that generates and returns the reference key for this entity.
Syntax
GeneralDimension.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
GeneralDimension Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
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
GeneralDimension.HideValue Property
Parent Object: GeneralDimension
Description
Gets and sets the HideValue setting.
Syntax
GeneralDimension.HideValue() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
GeneralDimension.IsInspectionDimension
Property
Parent Object: GeneralDimension
Description
Gets and sets whether this is an inspection dimension.
GeneralDimension Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Syntax
GeneralDimension.IsInspectionDimension() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GeneralDimension.Layer Property
Parent Object: GeneralDimension
Description
Gets and sets the layer applied to this dimension.
Syntax
GeneralDimension.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 10
GeneralDimension.ModelValue Property
Parent Object: GeneralDimension
Description
Property that gets the dimension value as defined in the model or as measured in the drawing.
Syntax
GeneralDimension.ModelValue() As Double
GeneralDimension Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 9
GeneralDimension.ModelValueOverridden
Property
Parent Object: GeneralDimension
Description
Read-write property that gets and sets whether the model value is overridden for the dimension.
Syntax
GeneralDimension.ModelValueOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GeneralDimension.OverrideModelValue
Property
Parent Object: GeneralDimension
Description
Gets and sets the NominalValue setting.
Syntax
GeneralDimension.OverrideModelValue() As Double
GeneralDimension Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 9
GeneralDimension.Parent Property
Parent Object: GeneralDimension
Description
Property that returns the parent sheet of the object.
Syntax
GeneralDimension.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 9
GeneralDimension.Precision Property
Parent Object: GeneralDimension
Description
Gets and sets the Precision setting.
Syntax
GeneralDimension.Precision() As Long
Property Value
This is a read/write property whose value is a Long.
GeneralDimension Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Version
Introduced in version 9
GeneralDimension.PromoteToSketch Method
Parent Object: GeneralDimension
Description
Method that copies the dimension to the underlying sketch. This method only works for dimensions
associated with a draft view.
Syntax
GeneralDimension.PromoteToSketch() As DimensionConstraint
Version
Introduced in version 9
GeneralDimension.Retrieved Property
Parent Object: GeneralDimension
Description
Property that indicates whether the dimension was created as a result of retrieving it either from the
model or a drawing view sketch. If True, the RetrievedFrom property returns the object that the
dimension was retrieved from.
Syntax
GeneralDimension.Retrieved() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
GeneralDimension Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimension.RetrievedFrom Property
Parent Object: GeneralDimension
Description
Property that returns the object that this dimension was retrieved from. Possible return objects include
all sketch constraint objects that derive from DimensionConstraint and their proxies,
FeatureDimension and FeatureDimensionProxy. The property returns Nothing if the Retrieved
property returns False.
Syntax
GeneralDimension.RetrievedFrom() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
GeneralDimension.SecondArrowheadInside
Property
Parent Object: GeneralDimension
Description
Read-write property that gets and sets whether the second arrowhead is inside or outside.
Syntax
GeneralDimension.SecondArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GeneralDimension Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimension.SecondArrowheadType
Property
Parent Object: GeneralDimension
Description
Read-write property that gets and sets the type of the second arrowhead.
Syntax
GeneralDimension.SecondArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2011
GeneralDimension.SetInspectionDimensionData
Method
Parent Object: GeneralDimension
Description
Method that sets the data associated with an inspection dimension. This method automatically sets the
IsInspectionDimension property to True, if it isn't already.
Syntax
GeneralDimension.SetInspectionDimensionData( [Shape] As InspectionDimensionShapeEnum,
[Label] As String, [Rate] As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum Optional input InspectionDimensionShapeEnum that
specifies the border shape surrounding the inspection
dimension text. Valid values are kNoInspectionBorder,
kAngularEndsInspectionBorder and
kRoundedEndsInspectionBorder. If not specified,
GeneralDimension Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
kNoInspectionBorder is used.
This is an optional argument whose default value is 79361.
Label String
Optional input string that specifies the text placed left of the
dimension value. The string can contain symbols specified
using the StyleOverride tag.
This is an optional argument whose default value is """".
Rate String
Optional input string that specifies the text (typically a
percentage value) placed to the right of the dimension value.
The string can contain symbols specified using the
StyleOverride tag.
This is an optional argument whose default value is """".
Version
Introduced in version 2010
GeneralDimension.ShowAllExtensionLines
Method
Parent Object: GeneralDimension
Description
Method that un-hides all the extension lines associated with this dimension. If there are no hidden
extension lines associated with this dimension, this method does nothing and returns a success.
Syntax
GeneralDimension.ShowAllExtensionLines()
Version
Introduced in version 2011
GeneralDimension.Style Property
Parent Object: GeneralDimension
Description
Gets and sets the DimensionStyle associated with the dimension.
GeneralDimension Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Syntax
GeneralDimension.Style() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Samples
Name Description
Dimensions -
edit
This sample demonstrates the editing of sheet dimensions and the associated
dimension style.
Version
Introduced in version 9
GeneralDimension.Text Property
Parent Object: GeneralDimension
Description
Gets and sets the DimensionText setting.
Syntax
GeneralDimension.Text() As DimensionText
Property Value
This is a read/write property whose value is a DimensionText.
Version
Introduced in version 9
GeneralDimension.Tolerance Property
Parent Object: GeneralDimension
Description
GeneralDimension Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Property that returns the Tolerance object associated with this dimension.
Syntax
GeneralDimension.Tolerance() As Tolerance
Property Value
This is a read only property whose value is a Tolerance.
Version
Introduced in version 9
GeneralDimension.TolerancePrecision Property
Parent Object: GeneralDimension
Description
Gets and sets the precision of the tolerance text for the dimension.
Syntax
GeneralDimension.TolerancePrecision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2008
GeneralDimension.Type Property
Parent Object: GeneralDimension
Description
Returns an ObjectTypeEnum indicating this object's type.
GeneralDimension Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
Syntax
GeneralDimension.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
GeneralDimension Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE56.htm 16/06/2025
GeneralDimensions Object
Description
The GeneralDimensions collection object provides access to all of the general dimensions ( objects) on
the sheet.
Methods
Name Description
AddAngular
Method that creates an angular dimension. Valid intent combinations are
Three points, Two non-parallel linear curves, One arc curve.
AddAngularForeshortened Creates an angular foreshortened dimension on the drawing sheet.
AddArcLengthForeshortened Creates an arc length foreshortened dimension on the drawing sheet.
AddDiameter Method that creates a diameter dimension.
AddLinear
Method that creates a linear dimension. Valid intent combinations are:
Two points, Two curves, Point and a curve, One linear curve, One arc
curve (with DimensionType set to kAlignedDimensionType for chord
length and kArcLengthDimensionType for arc length).
AddLinear2 Creates a linear dimension on the drawing sheet.
AddLinearForeshortened Creates a linear foreshortened dimension on the drawing sheet.
AddRadius Method that creates a radius dimension.
GetRetrievableDimensions
Method that returns a collection of objects that represent the valid set of
model dimensions that can be retrieved into the input drawing view.
Retrieve Method that retrieves sketch and/or model dimensions into the drawing.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
Count Property that returns the number of items in the collection.
Item Method that returns the specified dimension object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingDimensions.GeneralDimensions
Version
Introduced in version 9
GeneralDimensions Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
GeneralDimensions.AddAngular Method
Parent Object: GeneralDimensions
Description
Method that creates an angular dimension. Valid intent combinations are Three points, Two non-parallel
linear curves, One arc curve.
Syntax
GeneralDimensions.AddAngular( TextOrigin As Point2d, IntentOne As GeometryIntent, [IntentTwo]
As Variant, [IntentThree] As Variant, [ArrowheadsInside] As Boolean, [UseQuadrant] As Boolean,
[OppositeAngle] As Boolean, [DimensionStyle] As Variant, [Layer] As Variant ) As
AngularGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d Object that specifies the position of the dimension text on sheet.
IntentOne GeometryIntent
Object that specifies the first geometry to dimension. The
GeometryIntent object can be created using the CreateGeometryIntent
method on the Sheet object.
IntentTwo Variant
Object that specifies the second geometry to dimension. If three point
intents are provided, this input indicates the apex point of the angle.
The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
This is an optional argument whose default value is null.
IntentThree Variant
Object that specifies the third geometry to dimension. This argument
must be specified if the first and second geometry intents are points.
The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
This is an optional argument whose default value is null.
ArrowheadsInside Boolean
Indicates whether to place the dimension line arrows inside or
outside. If not specified, this argument defaults to True indicating that
arrowheads will be place inside (if possible).
This is an optional argument whose default value is True.
UseQuadrant Boolean
Optional input Boolean that indicates whether to use the quadrant in
which the input text point lies to decide which angle to dimension. If
not specified, the argument defaults to True. If a single (arc) intent is
provided as input, this argument is ignored and assumed to be False.
This is an optional argument whose default value is True.
OppositeAngle Boolean
Indicates whether to dimension the opposite angle. If not specified,
the argument defaults to False.
This is an optional argument whose default value is False.
DimensionStyle Variant Object that specifies the dimension style to use for the dimension. If
not specified, the style defined by the active standard is used.
GeneralDimensions Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
This is an optional argument whose default value is null.
Layer Variant
Object that specifies the layer to use for the dimension. If not
specified, the layer defined by the active standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeneralDimensions.AddAngularForeshortened
Method
Parent Object: GeneralDimensions
Description
Creates an angular foreshortened dimension on the drawing sheet.
Syntax
GeneralDimensions.AddAngularForeshortened( TextOrigin As Point2d, IntentOne As GeometryIntent,
[IntentTwo] As Variant, [IntentThree] As Variant, [HideSecondArrowhead] As Boolean,
[UseQuadrant] As Boolean, [OppositeAngle] As Boolean, [DimensionStyle] As Variant, [Layer] As
Variant ) As AngularGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d
Input Point2d object that specifies the position of the dimension
text on sheet.
IntentOne GeometryIntent
Input GeometryIntent object that specifies the first geometry to
dimension. The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
IntentTwo Variant
Optional input GeometryIntent object that specifies the second
geometry to dimension. If three point intents are provided, this
input indicates the apex point of the angle. The GeometryIntent
object can be created using the CreateGeometryIntent method on
the Sheet object.
This is an optional argument whose default value is null.
IntentThree Variant
Optional input GeometryIntent object that specifies the third
geometry to dimension. This argument must be specified if the
first and second geometry intents are points.The GeometryIntent
object can be created using the CreateGeometryIntent method on
the Sheet object.
This is an optional argument whose default value is null.
GeneralDimensions Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
HideSecondArrowhead Boolean Optional input Boolean that specifies whether hide the second
arrowhead of the dimension.
This is an optional argument whose default value is False.
UseQuadrant Boolean
Optional input Boolean that indicates whether to use the
quadrant in which the input text point lies to decide which angle
to dimension. If not specified, the argument defaults to True. If a
single (arc) intent is provided as input, this argument is ignored
and assumed to be False.
This is an optional argument whose default value is True.
OppositeAngle Boolean
Optional input Boolean that indicates whether to dimension the
opposite angle. If not specified, the argument defaults to False.
This is an optional argument whose default value is False.
DimensionStyle Variant
Optional input DimensionStyle object that specifies the
dimension style to use for the dimension. If not specified, the
style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for the
dimension. If not specified, the layer defined by the active
standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 2015
GeneralDimensions.AddArcLengthForeshortened
Method
Parent Object: GeneralDimensions
Description
Creates an arc length foreshortened dimension on the drawing sheet.
Syntax
GeneralDimensions.AddArcLengthForeshortened( TextOrigin As Point2d, IntentOne As
GeometryIntent, [IntentTwo] As Variant, [IntentThree] As Variant, [VirtualArcPosition] As Variant,
[HideSecondArrowhead] As Boolean, [UseQuadrant] As Boolean, [OppositeAngle] As Boolean,
[DimensionStyle] As Variant, [Layer] As Variant ) As LinearGeneralDimension
Parameters
Name Type Description
GeneralDimensions Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
TextOrigin Point2d Input Point2d object that specifies the position of the dimension
text on sheet.
IntentOne GeometryIntent
Input GeometryIntent object that specifies the first geometry to
dimension. The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
IntentTwo Variant
Optional input GeometryIntent object that specifies the second
geometry to dimension. The GeometryIntent object can be
created using the CreateGeometryIntent method on the Sheet
object.
This is an optional argument whose default value is null.
IntentThree Variant
Optional input GeometryIntent object that specifies the third
geometry to dimension. This argument must be specified if the
first and second geometry intents are points.The GeometryIntent
object can be created using the CreateGeometryIntent method on
the Sheet object.
This is an optional argument whose default value is null.
VirtualArcPosition Variant
Optional input GeometryIntent object that specifies the virtual
arc’s position for dimension. The GeometryIntent object can be
created using the CreateGeometryIntent method on the Sheet
object.
This is an optional argument whose default value is null.
HideSecondArrowhead Boolean
Optional input Boolean that specifies whether hide the second
arrowhead of the dimension.
This is an optional argument whose default value is False.
UseQuadrant Boolean
Optional input Boolean that indicates whether to use the
quadrant in which the input text point lies to decide which angle
to dimension. If not specified, the argument defaults to True. If a
single (arc) intent is provided as input, this argument is ignored
and assumed to be False.
This is an optional argument whose default value is True.
OppositeAngle Boolean
Optional input Boolean that indicates whether to dimension the
opposite angle. If not specified, the argument defaults to False.
This is an optional argument whose default value is False.
DimensionStyle Variant
Optional input DimensionStyle object that specifies the
dimension style to use for the dimension. If not specified, the
style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for the
dimension. If not specified, the layer defined by the active
standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 2015
GeneralDimensions Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
GeneralDimensions.AddDiameter Method
Parent Object: GeneralDimensions
Description
Method that creates a diameter dimension.
Syntax
GeneralDimensions.AddDiameter( TextOrigin As Point2d, Intent As GeometryIntent,
[ArrowheadsInside] As Boolean, [LeaderFromCenter] As Boolean, [SingleDimensionLine] As
Boolean, [DimensionStyle] As Variant, [Layer] As Variant ) As DiameterGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d Specifies the position of the dimension text on sheet.
Intent GeometryIntent
Specifies the arc or circle to dimension. A parameter along the
curve should be specified in the intent. If not, a default is
assumed. The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
ArrowheadsInside Boolean
Indicates whether to place the dimension line arrows inside or
outside. If not specified, this argument defaults to False indicating
that arrowheads will be place outside.
This is an optional argument whose default value is False.
LeaderFromCenter Boolean
Indicates whether the leader starts from the center of the arc or the
circle. If not specified, the argument defaults to False indicating
that the leader will not start from the center.
This is an optional argument whose default value is False.
SingleDimensionLine Boolean
Indicates whether to use a single dimension line. If not specified,
the argument defaults to True indicating a single dimension line
will be used.
This is an optional argument whose default value is True.
DimensionStyle Variant
Specifies the dimension style to use for the dimension. If not
specified, the style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Specifies the layer to use for the dimension. If not specified, the
layer defined by the active standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeneralDimensions Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
GeneralDimensions.AddLinear Method
Parent Object: GeneralDimensions
Description
Method that creates a linear dimension. Valid intent combinations are: Two points, Two curves, Point and
a curve, One linear curve, One arc curve (with DimensionType set to kAlignedDimensionType for chord
length and kArcLengthDimensionType for arc length).
Syntax
GeneralDimensions.AddLinear( TextOrigin As Point2d, IntentOne As GeometryIntent, [IntentTwo] As
Variant, [DimensionType] As DimensionTypeEnum, [ArrowheadsInside] As Boolean, [DimensionStyle]
As Variant, [Layer] As Variant ) As LinearGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d
Object that specifies the position of the dimension text on
sheet.
IntentOne GeometryIntent
Object that specifies the first geometry to dimension. The
GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
IntentTwo Variant
Object that specifies the second geometry to dimension. This
argument must be specified if the first geometry intent is a
point. The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
This is an optional argument whose default value is null.
DimensionType DimensionTypeEnum
Specifies the linear dimension type. Valid values (based on the
input intents) are kAlignedDimensionType,
kHorizontalDimensionType, kVerticalDimensionType,
kArcLengthDimensionType, kSymmetricDimensionType and
kDiametricDimensionType. If not specified, the argument
defaults to kAlignedDimensionType. An error will occur if the
specified type is invalid for the input intents. For instance,
kHorizontalDimensionType is invalid for a vertical dimension
and kSymmetricDimensionType & kDiametricDimensionType
are invalid if only the first intent (an edge) is specified.
kArcLengthDimensionType is only valid if two intents are
supplied and they represent end points of an arc or a single
intent is supplied and it represents an arc.
This is an optional argument whose default value is 60161.
ArrowheadsInside Boolean
Indicates whether to place the dimension line arrows inside or
outside. If not specified, this argument defaults to True
indicating that arrowheads will be place inside (if possible).
This is an optional argument whose default value is True.
DimensionStyle Variant Object that specifies the dimension style to use for the
dimension. If not specified, the style defined by the active
GeneralDimensions Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
standard is used.
This is an optional argument whose default value is null.
Layer Variant
Object that specifies the layer to use for the dimension. If not
specified, the layer defined by the active standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeneralDimensions.AddLinear2 Method
Parent Object: GeneralDimensions
Description
Creates a linear dimension on the drawing sheet.
Syntax
GeneralDimensions.AddLinear2( TextOrigin As Point2d, IntentOne As GeometryIntent, [IntentTwo]
As Variant, [DimensionType] As DimensionTypeEnum, [AlignmentGeometry] As Variant,
[ArrowheadsInside] As Boolean, [DimensionStyle] As Variant, [Layer] As Variant ) As
LinearGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d
Input Point2d object that specifies the position of the
dimension text on sheet.
IntentOne GeometryIntent
Input GeometryIntent object that specifies the first geometry
to dimension. The GeometryIntent object can be created
using the CreateGeometryIntent method on the Sheet object.
IntentTwo Variant
Optional input GeometryIntent object that specifies the
second geometry to dimension. The GeometryIntent object
can be created using the CreateGeometryIntent method on
the Sheet object.
This is an optional argument whose default value is null.
DimensionType DimensionTypeEnum Optional input DimensionTypeEnum that specifies the linear
dimension type. Valid values (based on the input intents) are
kAlignedDimensionType, kHorizontalDimensionType,
kVerticalDimensionType, kArcLengthDimensionType,
kSymmetricDimensionType, kDiametricDimensionType,
kAlignedToCurveDimensionType and
kNormalToCurveDimensionType. If not specified, the
argument defaults to kAlignedDimensionType. An error will
occur if the specified type is invalid for the input intents. For
GeneralDimensions Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
instance, kHorizontalDimensionType is invalid for a vertical
dimension and kSymmetricDimensionType &
kDiametricDimensionType are invalid if only the first intent
(an edge) is specified. kArcLengthDimensionType is only
valid if two intents are supplied and they represent end points
of an arc or a single intent is supplied and it represents an
arc.
This is an optional argument whose default value is 60161.
AlignmentGeometry Variant
Optional input linear geometry object to align the dimension.
Valid objects are DrawingCurve and SketchLine in the same
DrawingView as the dimension. This is only applicable if the
DimensionType is set to kAlignedToCurveDimensionType
or kNormalToCurveDimensionType.
This is an optional argument whose default value is null.
ArrowheadsInside Boolean
Optional input Boolean that indicates whether to place the
dimension line arrows inside or outside. If not specified, this
argument defaults to True indicating that arrowheads will be
place inside (if possible).
This is an optional argument whose default value is True.
DimensionStyle Variant
Optional input DimensionStyle object that specifies the
dimension style to use for the dimension. If not specified, the
style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for
the dimension. If not specified, the layer defined by the
active standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
GeneralDimensions.AddLinearForeshortened
Method
Parent Object: GeneralDimensions
Description
Creates a linear foreshortened dimension on the drawing sheet.
GeneralDimensions Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Syntax
GeneralDimensions.AddLinearForeshortened( TextOrigin As Point2d, IntentOne As GeometryIntent,
IntentTwo As GeometryIntent, [HideSecondArrowhead] As Boolean, [DimensionStyle] As Variant,
[Layer] As Variant ) As LinearGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d
Input Point2d object that specifies the position of the dimension
text on sheet.
IntentOne GeometryIntent
Input GeometryIntent object that specifies the first geometry to
dimension. The GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
IntentTwo GeometryIntent
Input GeometryIntent object that specifies the second geometry
to dimension. The GeometryIntent object can be created using
the CreateGeometryIntent method on the Sheet object.
HideSecondArrowhead Boolean
Optional input Boolean that specifies whether hide the second
arrowhead of the dimension.
This is an optional argument whose default value is False.
DimensionStyle Variant
Optional input DimensionStyle object that specifies the
dimension style to use for the dimension. If not specified, the
style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for the
dimension. If not specified, the layer defined by the active
standard is used.
This is an optional argument whose default value is null.
Samples
Name Description
Create linear foreshortened dimension
sample
This sample demonstrates the creation of a linear foreshortened
dimension.
Version
Introduced in version 2015
GeneralDimensions.AddRadius Method
Parent Object: GeneralDimensions
Description
Method that creates a radius dimension.
GeneralDimensions Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Syntax
GeneralDimensions.AddRadius( TextOrigin As Point2d, Intent As GeometryIntent, [ArrowheadsInside]
As Boolean, [LeaderFromCenter] As Boolean, [Jogged] As Boolean, [DimensionStyle] As Variant,
[Layer] As Variant ) As RadiusGeneralDimension
Parameters
Name Type Description
TextOrigin Point2d Specifies the position of the dimension text on sheet.
Intent GeometryIntent
Specifies the arc or circle to dimension. A parameter along the curve
should be specified in the intent. If not, a default is assumed. The
GeometryIntent object can be created using the
CreateGeometryIntent method on the Sheet object.
ArrowheadsInside Boolean
Indicates whether to place the dimension line arrows inside or
outside. If not specified, this argument defaults to False indicating
that arrowheads will be place outside.
This is an optional argument whose default value is False.
LeaderFromCenter Boolean
Indicates whether the leader starts from the center of the arc or the
circle. If not specified, the argument defaults to False indicating that
the leader will not start from the center. This argument is ignored and
defaulted to True if the ArrowheadsInside argument is specified to
be True.
This is an optional argument whose default value is False.
Jogged Boolean
Indicates whether the dimension is jogged. If not specified, the
argument defaults to False.
This is an optional argument whose default value is False.
DimensionStyle Variant
Specifies the dimension style to use for the dimension. If not
specified, the style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Specifies the layer to use for the dimension. If not specified, the
layer defined by the active standard is used.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeneralDimensions.Application Property
Parent Object: GeneralDimensions
Description
GeneralDimensions Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GeneralDimensions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
GeneralDimensions.Count Property
Parent Object: GeneralDimensions
Description
Property that returns the number of items in the collection.
Syntax
GeneralDimensions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
GeneralDimensions.GetRetrievableDimensions
Method
Parent Object: GeneralDimensions
Description
Method that returns a collection of objects that represent the valid set of model dimensions that can be
retrieved into the input drawing view.
GeneralDimensions Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Syntax
GeneralDimensions.GetRetrievableDimensions( View As DrawingView, [ModelObject] As Variant ) As
ObjectCollection
Parameters
Name Type Description
View DrawingView Input DrawingView object that is to be queried for retrievable dimensions.
ModelObject Variant
Optional input object from the model referenced by the drawing view that
specifies a filter for this method. If specified, only the dimensions related to
this object will be returned. Valid inputs include PlanarSketch, any of the
objects that derive from PartFeature, ComponentOccurrence and the proxies
to all these objects. If not specified, all the valid dimensions for the input
view are returned.
This is an optional argument whose default value is null.
Remarks
Based on the drawing view orientation, not all dimensions from the model can be retrieved into the view.
The returned collection can contain sketch constraint objects or their proxies that derive from
DimensionConstraint, FeatureDimension objects or FeatureDimensionProxy objects.
Version
Introduced in version 2008
GeneralDimensions.Item Property
Parent Object: GeneralDimensions
Description
Method that returns the specified dimension object from the collection.
Syntax
GeneralDimensions.Item( Index As Long ) As GeneralDimension
Property Value
This is a read only property whose value is a GeneralDimension.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
GeneralDimensions Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Samples
Name Description
Dimensions -
edit
This sample demonstrates the editing of sheet dimensions and the associated dimension
style.
Version
Introduced in version 9
GeneralDimensions.Retrieve Method
Parent Object: GeneralDimensions
Description
Method that retrieves sketch and/or model dimensions into the drawing.
Syntax
GeneralDimensions.Retrieve( ViewOrSketch As Object, [DimensionsToRetrieve] As Variant ) As
GeneralDimensionsEnumerator
Parameters
Name Type Description
ViewOrSketch Object
Input object that specifies the DrawingView or the DrawingSketch object
to retrieve dimensions from. If a DrawingSketch object is specified, it
must be owned by a Sheet. A DrawingSketch owned by a drawing view
is invalid input.
DimensionsToRetrieve Variant
Optional input ObjectCollection that specifies the dimensions to retrieve.
If not specified, all dimensions from the specified view or sketch are
retrieved. If specified, the collection can contain sketch constraint objects
or their proxies that derive from DimensionConstraint,
FeatureDimension objects or FeatureDimensionProxy objects. The
objects must belong to the view or sketch specified in the first argument,
else an error will occur.
This is an optional argument whose default value is null.
Version
Introduced in version 9
GeneralDimensions.Type Property
GeneralDimensions Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
Parent Object: GeneralDimensions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeneralDimensions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
GeneralDimensions Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA645.htm 16/06/2025
GeneralDimensionsEnumerator Object
Description
The GeneralDimensionsEnumerator object provides access to the existing objects.
Properties
Name Description
Count Property that returns the number of items in the collection.
Item Returns the specified DrawingStandardStyle object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BaselineDimensionSet.Members, ChainDimensionSet.AddMembers,
ChainDimensionSet.Members, GeneralDimensions.Retrieve
Version
Introduced in version 9
GeneralDimensionsEnumerator.Count
Property
Parent Object: GeneralDimensionsEnumerator
Description
Property that returns the number of items in the collection.
Syntax
GeneralDimensionsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
GeneralDimensionsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC825.htm 16/06/2025
Version
Introduced in version 9
GeneralDimensionsEnumerator.Item
Property
Parent Object: GeneralDimensionsEnumerator
Description
Returns the specified DrawingStandardStyle object from the collection.
Syntax
GeneralDimensionsEnumerator.Item( Index As Long ) As GeneralDimension
Property Value
This is a read only property whose value is a GeneralDimension.
Parameters
Name Type Description
Index Long
Value that specifies the GeneralDimension to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string indicating
the GeneralDimension name. If an out of range index or a name of a non-existent
GeneralDimension is provided, an error will occur.
Version
Introduced in version 9
GeneralDimensionsEnumerator.Type
Property
Parent Object: GeneralDimensionsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
GeneralDimensionsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC825.htm 16/06/2025
Syntax
GeneralDimensionsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
GeneralDimensionsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC825.htm 16/06/2025
GeneralNote Object
Derived from: DrawingNote Object
Description
The GeneralNote object represents a general note on a sheet and derives from the DrawingNote
object.
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
BackgroundColor Gets/Sets the BackgroundColor associated with the GeneralNote.
Color Gets/Sets color of the DrawingNote.
Fitted
Property that returns whether the note remains tightly fitted to the text
within the box.
FittedTextHeight
Property that returns the actual height of the text within the note. This
does not necessarily represent the current height of the note, but only the
text within the note. If the Fitted property is True then this value is the
same as the height of the note.
FittedTextWidth
Property that returns the actual width of the text within the note. This does
not necessarily represent the current width of the note, but only the text
within the note. If the Fitted property is True then this value is the same as
the width of the note.
FormattedText Gets/Sets formatted text of the DrawingNote.
Height Gets/Sets the height of the GeneralNote.
HorizontalJustification Gets/Sets horizontal justification of the DrawingNote.
Layer Gets/Sets the layer used by the DrawingNote.
LineSpacing Gets/Sets the LineSpacing used by the DrawingNote.
LineSpacingType Gets/Sets the LineSpacingType used by the DrawingNote.
Parent Property that returns the parent sheet of the object.
Position Gets/Sets the position of the DrawingNote on the sheet.
RangeBox
GeneralNote Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Property that returns a Box2D object which contains the lower-left and
upper-right corners of a rectangle that is guaranteed to enclose this object.
Rotation Gets/Sets the rotation of the GeneralNote.
ShowTextBorder Gets/Sets whether to show the text border or not.
StackedTextPosition
Gets and sets the position (alignment) of the stacked text with respect to
regular text.
Text Gets/Sets text of the DrawingNote.
TextStyle Gets/Sets the TextStyle of the GeneralNote.
Type Returns an ObjectTypeEnum indicating this object's type.
UnitAttributes Get the unit attributes associated with the GeneralNote.
UseBackgroundColor Gets/Sets the UseBackgroundColor associated with the GeneralNote.
VerticalJustification Gets/Sets vertical justification of the DrawingNote.
Width Gets/Sets the width of the GeneralNote.
WidthScale Gets/Sets the width scale factor of the DrawingNote.
Accessed From
GeneralNotes.AddByRectangle, GeneralNotes.AddFitted, GeneralNotes.Item
Version
Introduced in version 10
GeneralNote.Application Property
Parent Object: GeneralNote
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeneralNote.Application() As Object
Property Value
This is a read only property whose value is an Object.
GeneralNote Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Version
Introduced in version 10
GeneralNote.AttributeSets Property
Parent Object: GeneralNote
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GeneralNote.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
GeneralNote.BackgroundColor Property
Parent Object: GeneralNote
Description
Gets/Sets the BackgroundColor associated with the GeneralNote.
Syntax
GeneralNote.BackgroundColor() As Color
Property Value
This is a read/write property whose value is a Color.
GeneralNote Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Version
Introduced in version 2017
GeneralNote.Color Property
Parent Object: GeneralNote
Description
Gets/Sets color of the DrawingNote.
Syntax
GeneralNote.Color() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 10
GeneralNote.Delete Method
Parent Object: GeneralNote
Description
Method that deletes the DrawingNote.
Syntax
GeneralNote.Delete()
Version
Introduced in version 10
GeneralNote Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
GeneralNote.Fitted Property
Parent Object: GeneralNote
Description
Property that returns whether the note remains tightly fitted to the text within the box.
Syntax
GeneralNote.Fitted() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
GeneralNote.FittedTextHeight Property
Parent Object: GeneralNote
Description
Property that returns the actual height of the text within the note. This does not necessarily
represent the current height of the note, but only the text within the note. If the Fitted property is
True then this value is the same as the height of the note.
Syntax
GeneralNote.FittedTextHeight() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 10
GeneralNote Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
GeneralNote.FittedTextWidth Property
Parent Object: GeneralNote
Description
Property that returns the actual width of the text within the note. This does not necessarily
represent the current width of the note, but only the text within the note. If the Fitted property is
True then this value is the same as the width of the note.
Syntax
GeneralNote.FittedTextWidth() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 10
GeneralNote.FormattedText Property
Parent Object: GeneralNote
Description
Gets/Sets formatted text of the DrawingNote.
Syntax
GeneralNote.FormattedText() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Bullet and Numbering
List
This sample demonstrates how to create bullets and numbering list in a
drawing note.
GeneralNote Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Version
Introduced in version 10
GeneralNote.GetReferenceKey Method
Parent Object: GeneralNote
Description
Method that generates and returns the reference key for this entity.
Syntax
GeneralNote.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
GeneralNote.Height Property
Parent Object: GeneralNote
Description
Gets/Sets the height of the GeneralNote.
GeneralNote Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.Height() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
GeneralNote.HorizontalJustification Property
Parent Object: GeneralNote
Description
Gets/Sets horizontal justification of the DrawingNote.
Syntax
GeneralNote.HorizontalJustification() As HorizontalTextAlignmentEnum
Property Value
This is a read/write property whose value is a HorizontalTextAlignmentEnum.
Version
Introduced in version 10
GeneralNote.Layer Property
Parent Object: GeneralNote
Description
Gets/Sets the layer used by the DrawingNote.
GeneralNote Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 10
GeneralNote.LineSpacing Property
Parent Object: GeneralNote
Description
Gets/Sets the LineSpacing used by the DrawingNote.
Syntax
GeneralNote.LineSpacing() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
GeneralNote.LineSpacingType Property
Parent Object: GeneralNote
Description
Gets/Sets the LineSpacingType used by the DrawingNote.
GeneralNote Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.LineSpacingType() As TextLineSpacingTypeEnum
Property Value
This is a read/write property whose value is a TextLineSpacingTypeEnum.
Version
Introduced in version 10
GeneralNote.Parent Property
Parent Object: GeneralNote
Description
Property that returns the parent sheet of the object.
Syntax
GeneralNote.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 10
GeneralNote.Position Property
Parent Object: GeneralNote
Description
Gets/Sets the position of the DrawingNote on the sheet.
GeneralNote Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 10
GeneralNote.RangeBox Property
Parent Object: GeneralNote
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
GeneralNote.RangeBox() As Box2d
Property Value
This is a read only property whose value is a Box2d.
Version
Introduced in version 2010
GeneralNote.Rotation Property
Parent Object: GeneralNote
Description
Gets/Sets the rotation of the GeneralNote.
GeneralNote Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.Rotation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
GeneralNote.ShowTextBorder Property
Parent Object: GeneralNote
Description
Gets/Sets whether to show the text border or not.
Syntax
GeneralNote.ShowTextBorder() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
GeneralNote.StackedTextPosition Property
Parent Object: GeneralNote
Description
Gets and sets the position (alignment) of the stacked text with respect to regular text.
GeneralNote Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.StackedTextPosition() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2009
GeneralNote.Text Property
Parent Object: GeneralNote
Description
Gets/Sets text of the DrawingNote.
Syntax
GeneralNote.Text() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
GeneralNote.TextStyle Property
Parent Object: GeneralNote
Description
Gets/Sets the TextStyle of the GeneralNote.
GeneralNote Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.TextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Samples
Name Description
Add a general note This sample illustrates creating text (general note) in a sheet.
Version
Introduced in version 10
GeneralNote.Type Property
Parent Object: GeneralNote
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeneralNote.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
GeneralNote.UnitAttributes Property
Parent Object: GeneralNote
GeneralNote Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Description
Get the unit attributes associated with the GeneralNote.
Syntax
GeneralNote.UnitAttributes() As UnitAttributes
Property Value
This is a read only property whose value is a UnitAttributes.
Version
Introduced in version 2016
GeneralNote.UseBackgroundColor Property
Parent Object: GeneralNote
Description
Gets/Sets the UseBackgroundColor associated with the GeneralNote.
Syntax
GeneralNote.UseBackgroundColor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
GeneralNote.VerticalJustification Property
Parent Object: GeneralNote
Description
GeneralNote Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Gets/Sets vertical justification of the DrawingNote.
Syntax
GeneralNote.VerticalJustification() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 10
GeneralNote.Width Property
Parent Object: GeneralNote
Description
Gets/Sets the width of the GeneralNote.
Syntax
GeneralNote.Width() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
GeneralNote.WidthScale Property
Parent Object: GeneralNote
Description
Gets/Sets the width scale factor of the DrawingNote.
GeneralNote Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
Syntax
GeneralNote.WidthScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 10
GeneralNote Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE031.htm 16/06/2025
GeneralNotes Object
Description
GeneralNotes collection object provides access to all of the general notes on the sheet.
Methods
Name Description
AddByRectangle
Method that creates a general note whose size is defined by the input points that
define opposing diagonals of the note.
AddFitted
Method that creates a fitted general note positioned at the specified point on the
sheet.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified GeneralNote object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingNotes.GeneralNotes
Samples
Name Description
Add a general note This sample illustrates creating text (general note) in a sheet.
Version
Introduced in version 10
GeneralNotes.AddByRectangle Method
Parent Object: GeneralNotes
GeneralNotes Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
Description
Method that creates a general note whose size is defined by the input points that define opposing
diagonals of the note.
Syntax
GeneralNotes.AddByRectangle( CornerOne As Point2d, CornerTwo As Point2d, FormattedText
As String, [TextStyle] As Variant ) As GeneralNote
Parameters
Name Type Description
CornerOne Point2d Input Point2d that specifies the first corner of the rectangle.
CornerTwo Point2d Input Point2d that specifies the second corner of the rectangle.
FormattedText String
Input String that specifies the text of the general note. This string can
contain tags that define internal formatting changes, which override the
text style associated with the general note. The formatting is specified
using XML tags within the string. By default, all text in the string will be
displayed using the text style assigned to the note. You can use the XML
tags to override the default style and apply style overrides for all or
portions of the text.
The formatting overrides are defined using tags. There is an opening tag
and closing tag for each formatting override you define. The text between
the opening and closing tags is affected by the override. See the list of
XML text formatting tags under Reference Topics in the Overviews
section.
TextStyle Variant
Optional input Variant that specifies which text style to use for the
general note. The text style can be specified by providing the name of an
existing style or by supplying a TextStyle object.
This is an optional argument whose default value is null.
Version
Introduced in version 10
GeneralNotes.AddFitted Method
Parent Object: GeneralNotes
GeneralNotes Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
Description
Method that creates a fitted general note positioned at the specified point on the sheet.
Syntax
GeneralNotes.AddFitted( PlacementPoint As Point2d, FormattedText As String, [TextStyle] As
Variant ) As GeneralNote
Parameters
Name Type Description
PlacementPoint Point2d
Input Point2d that specifies the position of the general note on the sheet.
The position of this point in relation to the resulting text string is
dependent on the vertical and horizontal justification of the note. For
example if the vertical justification is the top and horizontal is the left,
then the position point defines the upper-left corner of the note. If the
vertical justification is the center and the horizontal justification is the
center, the position point defines the center of the \note.
FormattedText String
Input String that specifies the text of the general note. This string can
contain tags that define internal formatting changes, which override the
text style associated with the general note. The formatting is specified
using XML tags within the string. By default, all text in the string will be
displayed using the text style assigned to the note. You can use the XML
tags to override the default style and apply style overrides for all or
portions of the text.
The formatting overrides are defined using tags. There is an opening tag
and closing tag for each formatting override you define. The text
between the opening and closing tags is affected by the override. See the
list of XML text formatting tags under Reference Topics in the
Overviews section.
TextStyle Variant
Optional input Variant that specifies which text style to use for the
general note. The text style can be specified by providing the name of an
existing style or by supplying a TextStyle object.
This is an optional argument whose default value is null.
Samples
Name Description
Add a general note This sample illustrates creating text (general note) in a sheet.
Creating Stacked
Text
This sample demonstrates the creation of stacked text and text with
superscript & subscript.
GeneralNotes Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
Version
Introduced in version 10
GeneralNotes.Application Property
Parent Object: GeneralNotes
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeneralNotes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
GeneralNotes.Count Property
Parent Object: GeneralNotes
Description
Property that returns the number of items in the collection.
Syntax
GeneralNotes.Count() As Long
Property Value
This is a read only property whose value is a Long.
GeneralNotes Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
Version
Introduced in version 10
GeneralNotes.Item Property
Parent Object: GeneralNotes
Description
Returns the specified GeneralNote object from the collection.
Syntax
GeneralNotes.Item( Index As Long ) As GeneralNote
Property Value
This is a read only property whose value is a GeneralNote.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Samples
Name Description
Add a general note This sample illustrates creating text (general note) in a sheet.
Version
Introduced in version 10
GeneralNotes.Type Property
Parent Object: GeneralNotes
Description
Returns an ObjectTypeEnum indicating this object's type.
GeneralNotes Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
Syntax
GeneralNotes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
GeneralNotes Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2CC.htm 16/06/2025
GeneralNoteSymbolDefinition Object
Description
GeneralNoteSymbolDefinition Object.
Methods
Name Description
Delete Get whether the GeneralNote is tightly fitted to the text box.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set
to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Parent Gets the parent object from whom this object can logically be reached.
SymbolDefinition Get the height of the text within the GeneralNote.
Type Gets the constant that indicates the type of this object.
Accessed From
GeneralNoteSymbolDefinitions.Add, GeneralNoteSymbolDefinitions.Item
Version
Introduced in version 2018
GeneralNoteSymbolDefinition.Application
Property
Parent Object: GeneralNoteSymbolDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced
for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the
Apprentice Server.
Syntax
GeneralNoteSymbolDefinition.Application() As Object
GeneralNoteSymbolDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CAD.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
GeneralNoteSymbolDefinition.Delete Method
Parent Object: GeneralNoteSymbolDefinition
Description
Get whether the GeneralNote is tightly fitted to the text box.
Syntax
GeneralNoteSymbolDefinition.Delete()
Version
Introduced in version 2018
GeneralNoteSymbolDefinition.Parent Property
Parent Object: GeneralNoteSymbolDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
GeneralNoteSymbolDefinition.Parent() As ModelGeneralNoteDefinition
Property Value
This is a read only property whose value is a ModelGeneralNoteDefinition.
Version
Introduced in version 2018
GeneralNoteSymbolDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CAD.htm 16/06/2025
GeneralNoteSymbolDefinition.SymbolDefinition
Property
Parent Object: GeneralNoteSymbolDefinition
Description
Get the height of the text within the GeneralNote.
Syntax
GeneralNoteSymbolDefinition.SymbolDefinition() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2018
GeneralNoteSymbolDefinition.Type Property
Parent Object: GeneralNoteSymbolDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
GeneralNoteSymbolDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
GeneralNoteSymbolDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CAD.htm 16/06/2025
GeneralNoteSymbolDefinitions Object
Description
GeneralNoteSymbolDefinitions Collection Object.
Methods
Name Description
Add Add a GeneralNote with size defined by diagonal corners.
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
ModelGeneralNoteDefinition.SymbolDefinitions
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions.Add Method
Parent Object: GeneralNoteSymbolDefinitions
Description
Add a GeneralNote with size defined by diagonal corners.
Syntax
GeneralNoteSymbolDefinitions.Add( SymbolDefinition As Object, [TargetIndex] As Variant,
[InsertBefore] As Variant ) As GeneralNoteSymbolDefinition
GeneralNoteSymbolDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3304.htm 16/06/2025
Parameters
Name Type Description
SymbolDefinition Object
TargetIndex Variant
This is an optional argument whose default value is null.
InsertBefore Variant
This is an optional argument whose default value is null.
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions.Application
Property
Parent Object: GeneralNoteSymbolDefinitions
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
GeneralNoteSymbolDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions.Count
Property
GeneralNoteSymbolDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3304.htm 16/06/2025
Parent Object: GeneralNoteSymbolDefinitions
Description
Gets the number of items in this collection.
Syntax
GeneralNoteSymbolDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions.Item Property
Parent Object: GeneralNoteSymbolDefinitions
Description
Allows integer-indexed access to items in the collection.
Syntax
GeneralNoteSymbolDefinitions.Item( Index As Long ) As GeneralNoteSymbolDefinition
Property Value
This is a read only property whose value is a GeneralNoteSymbolDefinition.
Parameters
Name Type Description
Index Long
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3304.htm 16/06/2025
GeneralNoteSymbolDefinitions.Type
Property
Parent Object: GeneralNoteSymbolDefinitions
Description
Gets the constant that indicates the type of this object.
Syntax
GeneralNoteSymbolDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
GeneralNoteSymbolDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3304.htm 16/06/2025
GeneralOptions Object
Description
The GeneralOptions object provides access to properties that provide read and write access of the general application
options. This is somewhat equivalent to the General tab of the Application Options dialog.
Properties
Name Description
AnnotationScale Gets/Sets the size of non-model elements in the graphics window.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
EnableLegacyProjectCreation Gets/Sets the creation of shared and semi-isolated legacy projects.
EnableOptimizedSelection Gets and sets whether enables or disables optimized selection.
EnableSpellCheck
Gets and sets whether to enable the spell check or not. This property defaults to
True to indicate the specll check is enabled.
GripSnapOptions
Property that returns the GripSnapOptions object. The GripSnapOptions object
provides access to various grip snap related application level options.
iMateVisibility Gets and sets the Visibility of the iMate Glyph.
SecondLevelTooltipDelay
Gets and sets the length of the delay time (in seconds), before the second tooltip
is displayed.
SelectOtherDelay Gets/Sets the length of the delay time.
ShowAutocompleteForCommandAlias
Gets and sets whether the autocomplete dropdown box should be displayed for
command aliases.
ShowCommandAliasInputDialog Gets and sets whether the input dialog should be displayed for command aliases.
ShowCommandPromptTooltips
Gets and sets whether tooltips should be displayed to prompt for command
inputs.
ShowDocumentTabTooltips Gets and sets whether to show tooltips when hovering over document tabs.
ShowHomeBaseOnStartup Gets and sets whether to use the MyHome Screen.
ShowSecondLevelTooltips
Gets and sets whether to show second level tooltips when hovering over a
command in the ribbon.
ShowTooltips
Gets and sets whether to show tooltips when hovering over a command in the
ribbon.
SpellCheckOptions
Read-only property that returns the SpellCheckOptions object. The
SpellCheckOptions object provides access to various spell check related
application level options.
StartupActionType
Gets and sets the type of startup action to perform each time Autodesk Inventor
is opened.
StartupNewFileTemplateName
Gets and sets the name of the template for the new file that will be automatically
created each time Autodesk Inventor is opened.
StartupProjectFileName
Gets and sets the name of the project file that will be used each time Autodesk
Inventor is opened.
TextAppearance Gets/Sets Text Appearance.
TextSize Gets/Sets Text Size.
ThreadTableQuery
Property that returns the ThreadTableQuery object. This object has methods to
query the thread table data contained in the Thread.xls spreadsheet.
ToleranceValue Gets/Sets the distance (in pixels) where a selection of an object can occur.
TooltipDelay
Gets and sets the length of the delay time (in seconds), while the cursor is
hovering over a command in the ribbon, before the tooltip is displayed.
Type Returns an ObjectTypeEnum indicating this object's type.
UndoFileSize Gets/Sets the size of the temporary file.
UpdatePropertiesOnSaveForFileType
Gets and sets whether properties should be updated when part or assembly files
are saved.
UseAutodeskOnlineHelp
GeneralOptions Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Gets and sets whether to use the Autodesk online help or not. This property
defaults to True to indicate the online help will be used. If local help is installed
set this property to False to use the local help.
UseNegativeIntegralForInertialProperties
Gets/Sets whether the inertial properties should be calculated using the negative
integral.
UserName Gets/Sets user name.
Accessed From
Application.GeneralOptions, InventorServer.GeneralOptions, InventorServerObject.GeneralOptions
Samples
Name Description
Window Selection
This sample demonstrates using the selection events to window-select multiple edges. Selection is
dependent on events and VB only supports events within a class module.
Creating a
ThreadInfo object
Demonstrates the use of a ThreadInfo object.
Version
Introduced in version 8
GeneralOptions.AnnotationScale Property
Parent Object: GeneralOptions
Description
Gets/Sets the size of non-model elements in the graphics window.
Syntax
GeneralOptions.AnnotationScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 11
GeneralOptions.Application Property
Parent Object: GeneralOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
GeneralOptions Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Syntax
GeneralOptions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
GeneralOptions.EnableLegacyProjectCreation Property
Parent Object: GeneralOptions
Description
Gets/Sets the creation of shared and semi-isolated legacy projects.
Syntax
GeneralOptions.EnableLegacyProjectCreation() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GeneralOptions.EnableOptimizedSelection Property
Parent Object: GeneralOptions
Description
Gets and sets whether enables or disables optimized selection.
Syntax
GeneralOptions.EnableOptimizedSelection() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GeneralOptions Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
GeneralOptions.EnableSpellCheck Property
Parent Object: GeneralOptions
Description
Gets and sets whether to enable the spell check or not. This property defaults to True to indicate the specll check is enabled.
Syntax
GeneralOptions.EnableSpellCheck() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
GeneralOptions.GripSnapOptions Property
Parent Object: GeneralOptions
Description
Property that returns the GripSnapOptions object. The GripSnapOptions object provides access to various grip snap related
application level options.
Syntax
GeneralOptions.GripSnapOptions() As GripSnapOptions
Property Value
This is a read only property whose value is a GripSnapOptions.
Version
Introduced in version 2010
GeneralOptions.iMateVisibility Property
Parent Object: GeneralOptions
Description
Gets and sets the Visibility of the iMate Glyph.
Syntax
GeneralOptions.iMateVisibility() As Boolean
GeneralOptions Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GeneralOptions.SecondLevelTooltipDelay Property
Parent Object: GeneralOptions
Description
Gets and sets the length of the delay time (in seconds), before the second tooltip is displayed.
Syntax
GeneralOptions.SecondLevelTooltipDelay() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
GeneralOptions.SelectOtherDelay Property
Parent Object: GeneralOptions
Description
Gets/Sets the length of the delay time.
Syntax
GeneralOptions.SelectOtherDelay() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 11
GeneralOptions.ShowAutocompleteForCommandAlias
Property
GeneralOptions Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Parent Object: GeneralOptions
Description
Gets and sets whether the autocomplete dropdown box should be displayed for command aliases.
Syntax
GeneralOptions.ShowAutocompleteForCommandAlias() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GeneralOptions.ShowCommandAliasInputDialog
Property
Parent Object: GeneralOptions
Description
Gets and sets whether the input dialog should be displayed for command aliases.
Syntax
GeneralOptions.ShowCommandAliasInputDialog() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GeneralOptions.ShowCommandPromptTooltips Property
Parent Object: GeneralOptions
Description
Gets and sets whether tooltips should be displayed to prompt for command inputs.
Syntax
GeneralOptions.ShowCommandPromptTooltips() As Boolean
GeneralOptions Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Window
Selection
This sample demonstrates using the selection events to window-select multiple edges. Selection is
dependent on events and VB only supports events within a class module.
Version
Introduced in version 2008
GeneralOptions.ShowDocumentTabTooltips Property
Parent Object: GeneralOptions
Description
Gets and sets whether to show tooltips when hovering over document tabs.
Syntax
GeneralOptions.ShowDocumentTabTooltips() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GeneralOptions.ShowHomeBaseOnStartup Property
Parent Object: GeneralOptions
Description
Gets and sets whether to use the MyHome Screen.
Syntax
GeneralOptions.ShowHomeBaseOnStartup() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
GeneralOptions Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
GeneralOptions.ShowSecondLevelTooltips Property
Parent Object: GeneralOptions
Description
Gets and sets whether to show second level tooltips when hovering over a command in the ribbon.
Syntax
GeneralOptions.ShowSecondLevelTooltips() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GeneralOptions.ShowTooltips Property
Parent Object: GeneralOptions
Description
Gets and sets whether to show tooltips when hovering over a command in the ribbon.
Syntax
GeneralOptions.ShowTooltips() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GeneralOptions.SpellCheckOptions Property
Parent Object: GeneralOptions
Description
Read-only property that returns the SpellCheckOptions object. The SpellCheckOptions object provides access to various
spell check related application level options.
Syntax
GeneralOptions.SpellCheckOptions() As SpellCheckOptions
GeneralOptions Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Property Value
This is a read only property whose value is a SpellCheckOptions.
Version
Introduced in version 2020
GeneralOptions.StartupActionType Property
Parent Object: GeneralOptions
Description
Gets and sets the type of startup action to perform each time Autodesk Inventor is opened.
Syntax
GeneralOptions.StartupActionType() As StartupActionTypeEnum
Property Value
This is a read/write property whose value is a StartupActionTypeEnum.
Version
Introduced in version 2008
GeneralOptions.StartupNewFileTemplateName Property
Parent Object: GeneralOptions
Description
Gets and sets the name of the template for the new file that will be automatically created each time Autodesk Inventor is
opened.
Syntax
GeneralOptions.StartupNewFileTemplateName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
GeneralOptions.StartupProjectFileName Property
Parent Object: GeneralOptions
GeneralOptions Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Description
Gets and sets the name of the project file that will be used each time Autodesk Inventor is opened.
Syntax
GeneralOptions.StartupProjectFileName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
GeneralOptions.TextAppearance Property
Parent Object: GeneralOptions
Description
Gets/Sets Text Appearance.
Syntax
GeneralOptions.TextAppearance() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
GeneralOptions.TextSize Property
Parent Object: GeneralOptions
Description
Gets/Sets Text Size.
Syntax
GeneralOptions.TextSize() As Long
Property Value
This is a read/write property whose value is a Long.
GeneralOptions Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Version
Introduced in version 8
GeneralOptions.ThreadTableQuery Property
Parent Object: GeneralOptions
Description
Property that returns the ThreadTableQuery object. This object has methods to query the thread table data contained in the
Thread.xls spreadsheet.
Syntax
GeneralOptions.ThreadTableQuery() As ThreadTableQuery
Property Value
This is a read only property whose value is a ThreadTableQuery.
Samples
Name Description
Creating a ThreadInfo object Demonstrates the use of a ThreadInfo object.
Version
Introduced in version 11
GeneralOptions.ToleranceValue Property
Parent Object: GeneralOptions
Description
Gets/Sets the distance (in pixels) where a selection of an object can occur.
Syntax
GeneralOptions.ToleranceValue() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 11
GeneralOptions.TooltipDelay Property
GeneralOptions Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Parent Object: GeneralOptions
Description
Gets and sets the length of the delay time (in seconds), while the cursor is hovering over a command in the ribbon, before
the tooltip is displayed.
Syntax
GeneralOptions.TooltipDelay() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
GeneralOptions.Type Property
Parent Object: GeneralOptions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeneralOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
GeneralOptions.UndoFileSize Property
Parent Object: GeneralOptions
Description
Gets/Sets the size of the temporary file.
Syntax
GeneralOptions.UndoFileSize() As Long
Property Value
This is a read/write property whose value is a Long.
GeneralOptions Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Version
Introduced in version 11
GeneralOptions.UpdatePropertiesOnSaveForFileType
Property
Parent Object: GeneralOptions
Description
Gets and sets whether properties should be updated when part or assembly files are saved.
Syntax
GeneralOptions.UpdatePropertiesOnSaveForFileType() As UpdatePropertiesOnSaveForFileTypeEnum
Property Value
This is a read/write property whose value is a UpdatePropertiesOnSaveForFileTypeEnum.
Version
Introduced in version 2008
GeneralOptions.UseAutodeskOnlineHelp Property
Parent Object: GeneralOptions
Description
Gets and sets whether to use the Autodesk online help or not. This property defaults to True to indicate the online help will
be used. If local help is installed set this property to False to use the local help.
Syntax
GeneralOptions.UseAutodeskOnlineHelp() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2015
GeneralOptions.UseNegativeIntegralForInertialProperties
Property
Parent Object: GeneralOptions
GeneralOptions Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
Description
Gets/Sets whether the inertial properties should be calculated using the negative integral.
Syntax
GeneralOptions.UseNegativeIntegralForInertialProperties() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GeneralOptions.UserName Property
Parent Object: GeneralOptions
Description
Gets/Sets user name.
Syntax
GeneralOptions.UserName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
GeneralOptions Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4D72.htm 16/06/2025
GenericObject Object
Description
Generic object. Weakly-typed (IDispatch).
Properties
Name Description
ObjectType Gets the constant that indicates the real type of this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 4
GenericObject.ObjectType Property
Parent Object: GenericObject
Description
Gets the constant that indicates the real type of this object.
Syntax
GenericObject.ObjectType() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
GenericObject.Type Property
Parent Object: GenericObject
GenericObject Object Page 1 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh756C.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GenericObject.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
GenericObject Object Page 2 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh756C.htm 16/06/2025
GeometricConstraint Object
Description
The GeomtricConstraint object represents the base class of all geometric constraints.
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
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeometricConstraints.Item
Derived Classes
CoincidentConstraint, CollinearConstraint, ConcentricConstraint, EqualLengthConstraint,
EqualRadiusConstraint, GroundConstraint, HorizontalAlignConstraint, HorizontalConstraint,
MidpointConstraint, OffsetConstraint, ParallelConstraint, PatternConstraint,
PerpendicularConstraint, SmoothConstraint, SplineFitPointConstraint, SymmetryConstraint,
TangentSketchConstraint, TextBoxConstraint, VerticalAlignConstraint, VerticalConstraint
Version
Introduced in version 5
GeometricConstraint.Application Property
Parent Object: GeometricConstraint
GeometricConstraint Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9316.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeometricConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GeometricConstraint.AttributeSets Property
Parent Object: GeometricConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GeometricConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
GeometricConstraint.Deletable Property
Parent Object: GeometricConstraint
GeometricConstraint Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9316.htm 16/06/2025
Description
Indicates whether this object is deletable.
Syntax
GeometricConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GeometricConstraint.Delete Method
Parent Object: GeometricConstraint
Description
Method that deletes the constraint.
Syntax
GeometricConstraint.Delete()
Version
Introduced in version 5
GeometricConstraint.GetReferenceKey
Method
Parent Object: GeometricConstraint
Description
Method that generates and returns the reference key for this entity.
GeometricConstraint Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9316.htm 16/06/2025
Syntax
GeometricConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
GeometricConstraint.Parent Property
Parent Object: GeometricConstraint
Description
Property that returns the parent sketch of the object.
Syntax
GeometricConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
GeometricConstraint Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9316.htm 16/06/2025
Version
Introduced in version 5
GeometricConstraint.Type Property
Parent Object: GeometricConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeometricConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GeometricConstraint Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9316.htm 16/06/2025
GeometricConstraint3D Object
Description
The GeometricConstraint3D object represents the base class of all 3D geometric constraints.
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
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeometricConstraints3D.Item
Derived Classes
BendConstraint, CoincidentConstraint3D, CollinearConstraint3D, ConcentricConstraint3D,
ConcentricConstraint3DProxy, CustomConstraint3D, EqualConstraint3D, GroundConstraint3D,
HelicalConstraint3D, HelicalConstraint3DProxy, MidpointConstraint3D, OnFaceConstraint3D,
ParallelConstraint3D, ParallelToXAxisConstraint3D, ParallelToXYPlaneConstraint3D,
ParallelToXZPlaneConstraint3D, ParallelToYAxisConstraint3D,
ParallelToYZPlaneConstraint3D, ParallelToZAxisConstraint3D, PerpendicularConstraint3D,
SmoothConstraint3D, SplineFitPointsConstraint3D, TangentConstraint3D
Version
Introduced in version 6
GeometricConstraint3D Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4E28.htm 16/06/2025
GeometricConstraint3D.Application Property
Parent Object: GeometricConstraint3D
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeometricConstraint3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
GeometricConstraint3D.AttributeSets
Property
Parent Object: GeometricConstraint3D
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GeometricConstraint3D.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
GeometricConstraint3D Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4E28.htm 16/06/2025
GeometricConstraint3D.Deletable Property
Parent Object: GeometricConstraint3D
Description
Indicates whether this object can be deleted.
Syntax
GeometricConstraint3D.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GeometricConstraint3D.Delete Method
Parent Object: GeometricConstraint3D
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
GeometricConstraint3D.Delete()
Version
Introduced in version 6
GeometricConstraint3D.GetReferenceKey
Method
Parent Object: GeometricConstraint3D
GeometricConstraint3D Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4E28.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
GeometricConstraint3D.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 6
GeometricConstraint3D.Parent Property
Parent Object: GeometricConstraint3D
Description
Property that returns the parent sketch of the object.
Syntax
GeometricConstraint3D.Parent() As Sketch3D
GeometricConstraint3D Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4E28.htm 16/06/2025
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 6
GeometricConstraint3D.Type Property
Parent Object: GeometricConstraint3D
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeometricConstraint3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
GeometricConstraint3D Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4E28.htm 16/06/2025
GeometricConstraints Object
Description
The GeometricConstraints object provides access to all the geometric sketch constraints ( objects)
in a sketch and provides methods to create additional geometric sketch constraints.
Methods
Name Description
AddCoincident
Method that creates a new coincident constraint between two entities. One
of the input entities must be a sketch point. The other entity can be a point
or any other type of sketch entity.
AddCollinear
Method that creates a new collinear constraint between the two input sketch
entities. Valid objects for input include lines, ellipses, and elliptical arcs.
Either the major or minor axis of an ellipse is used, depending on the value
of the EllipseMajorAxis input argument. When an ellipse is used, the
specified axis of the ellipse will become collinear to the other entity. This
method will fail if the constraint overconstrains the sketch.
AddConcentric
Method that creates a new concentric constraint between the two input
sketch entities. The two entities must be circles, arcs, ellipses, or elliptical
arcs. This method will fail if the constraint overconstrains the sketch.
AddEqualLength
Method that creates a new equal length constraint between the two input
sketch lines. This method will fail if the constraint overconstrains the
sketch.
AddEqualRadius
Method that creates a new equal radius constraint between the two input
sketch entities. Valid input entities are circles and arcs. This method will fail
if the constraint overconstrains the sketch.
AddGround
Method that creates a new ground constraint on the input sketch entity. This
method will fail if the constraint overconstrains the sketch.
AddHorizontal
Method that creates a new horizontal constraint on the input sketch entity.
Valid input objects are lines, ellipses, and elliptical arcs. Either the major or
minor axis of an ellipse is used depending on the value of the
EllipseMajorAxis input argument. When an ellipse is used, the specified
axis of the ellipse will become horizontal. This method will fail if the
constraint overconstrains the sketch.
AddHorizontalAlign
Method that creates a new horizontal alignment constraint between two
sketch points. This causes the two points to align along the same horizontal
axis. This method will fail if the constraint overconstrains the sketch.
AddMidpoint
Method that creates a new midpoint constraint between the point and line.
This causes the input sketch point to be positioned at the midpoint of the
input line. This method will fail if the constraint overconstrains the sketch.
AddMidPointToArc Creates a new midpoint constraint between the point and arc.
AddParallel Method that creates a new parallel constraint between the two input sketch
entities. Valid objects for input include lines and ellipses. Either the major
or minor axis of an ellipse is used depending on the values of
UseEllipseMajorAxis input arguments. When an ellipse is used, the
GeometricConstraints Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
specified axis of the ellipse will become parallel to the other entity. This
method will fail if the constraint overconstrains the sketch.
AddPerpendicular
Method that creates a new perpendicular constraint between the two input
sketch entities. Valid objects for input include lines and ellipses. Either the
major or minor axis of an ellipse is used depending on the value of
EllipseMajorAxis input argument. When an ellipse is used, the specified
axis of the ellipse will become perpendicular to the other entity. This
method will fail if the constraint overconstrains the sketch.
AddSmooth
Method that creates a new smooth (G2-continuous) constraint. This method
will fail if the constraint overconstrains the sketch.
AddSymmetry
Method that creates a new symmetry constraint between the two input
entities about the specified line. The two input entities must be of the same
type. This method will fail if the constraint overconstrains the sketch.
AddTangent
Method that creates a new tangent constraint. This method will fail if the
constraint overconstrains the sketch.
AddVertical
Method that creates a new vertical constraint on the input sketch entity.
Valid input objects are lines and ellipses. Either the major or minor axis of
an ellipse is used depending on the value of the UseEllipseMajorAxis input
argument. When an ellipse is used, the specified axis of the ellipse will
become vertical. This method will fail if the constraint overconstrains the
sketch.
AddVerticalAlign
Method that creates a new vertical alignment constraint between two sketch
points. This causes the two points to align along the same vertical axis. This
method will fail if the constraint overconstrains the sketch.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified geometric sketch constraint object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingSketch.GeometricConstraints, PlanarSketch.GeometricConstraints,
PlanarSketchProxy.GeometricConstraints, Sketch.GeometricConstraints,
SketchBlockDefinition.GeometricConstraints, SketchBlockDefinitionProxy.GeometricConstraints
Samples
Name Description
Create SketchedSymbol
Definition
This sample illustrates creating a new sketched symbol definition
object and inserting it into the active sheet.
Sketch Spline This sample demonstrates creating and manipulating a sketch spline.
GeometricConstraints Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Version
Introduced in version 5
GeometricConstraints.AddCoincident
Method
Parent Object: GeometricConstraints
Description
Method that creates a new coincident constraint between two entities. One of the input entities
must be a sketch point. The other entity can be a point or any other type of sketch entity.
Syntax
GeometricConstraints.AddCoincident( EntityOne As SketchEntity, EntityTwo As SketchEntity )
As CoincidentConstraint
Parameters
Name Type Description
EntityOne SketchEntity Input sketch entity.
EntityTwo SketchEntity Input sketch entity.
Remarks
Placing a coincident constraint between two points will not cause them to merge into a single
point. Use the Merge method on the SketchPoint object to merge two points. This method will fail
if the constraint overconstrains the sketch.
Samples
Name Description
Create SketchedSymbol
Definition
This sample illustrates creating a new sketched symbol definition
object and inserting it into the active sheet.
Version
Introduced in version 5
GeometricConstraints Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints.AddCollinear Method
Parent Object: GeometricConstraints
Description
Method that creates a new collinear constraint between the two input sketch entities. Valid objects
for input include lines, ellipses, and elliptical arcs. Either the major or minor axis of an ellipse is
used, depending on the value of the EllipseMajorAxis input argument. When an ellipse is used, the
specified axis of the ellipse will become collinear to the other entity. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddCollinear( EntityOne As SketchEntity, EntityTwo As SketchEntity,
[UseEllipseOneMajorAxis] As Boolean, [UseEllipseTwoMajorAxis] As Boolean ) As
CollinearConstraint
Parameters
Name Type Description
EntityOne SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
EntityTwo SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
UseEllipseOneMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityOne
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityOne
argument.
This is an optional argument whose default value is True.
UseEllipseTwoMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityTwo
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityTwo
argument.
This is an optional argument whose default value is True.
Version
Introduced in version 5
GeometricConstraints Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints.AddConcentric
Method
Parent Object: GeometricConstraints
Description
Method that creates a new concentric constraint between the two input sketch entities. The two
entities must be circles, arcs, ellipses, or elliptical arcs. This method will fail if the constraint
overconstrains the sketch.
Syntax
GeometricConstraints.AddConcentric( EntityOne As SketchEntity, EntityTwo As SketchEntity )
As ConcentricConstraint
Parameters
Name Type Description
EntityOne SketchEntity Input sketch entity. Must be a circle, arc, ellipse, or elliptical arc.
EntityTwo SketchEntity Input sketch entity. Must be a circle, arc, ellipse, or elliptical arc.
Version
Introduced in version 5
GeometricConstraints.AddEqualLength
Method
Parent Object: GeometricConstraints
Description
Method that creates a new equal length constraint between the two input sketch lines. This method
will fail if the constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddEqualLength( LineOne As SketchLine, LineTwo As SketchLine ) As
EqualLengthConstraint
GeometricConstraints Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Parameters
Name Type Description
LineOne SketchLine Input SketchLine object.
LineTwo SketchLine Input SketchLine object.
Version
Introduced in version 5
GeometricConstraints.AddEqualRadius
Method
Parent Object: GeometricConstraints
Description
Method that creates a new equal radius constraint between the two input sketch entities. Valid
input entities are circles and arcs. This method will fail if the constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddEqualRadius( EntityOne As SketchEntity, EntityTwo As
SketchEntity ) As EqualRadiusConstraint
Parameters
Name Type Description
EntityOne SketchEntity Input sketch entity. Must be a circle or arc.
EntityTwo SketchEntity Input sketch entity. Must be a circle or arc.
Version
Introduced in version 5
GeometricConstraints.AddGround Method
Parent Object: GeometricConstraints
Description
GeometricConstraints Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Method that creates a new ground constraint on the input sketch entity. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddGround( Entity As SketchEntity ) As GroundConstraint
Parameters
Name Type Description
Entity SketchEntity Input sketch entity.
Samples
Name Description
Sketch Spline This sample demonstrates creating and manipulating a sketch spline.
Version
Introduced in version 5
GeometricConstraints.AddHorizontal Method
Parent Object: GeometricConstraints
Description
Method that creates a new horizontal constraint on the input sketch entity. Valid input objects are
lines, ellipses, and elliptical arcs. Either the major or minor axis of an ellipse is used depending on
the value of the EllipseMajorAxis input argument. When an ellipse is used, the specified axis of
the ellipse will become horizontal. This method will fail if the constraint overconstrains the
sketch.
Syntax
GeometricConstraints.AddHorizontal( Entity As SketchEntity, [UseEllipseMajorAxis] As
Boolean ) As HorizontalConstraint
Parameters
Name Type Description
Entity SketchEntity Input sketch entity. Must be a line, ellipse, or elliptical arc.
UseEllipseMajorAxis Boolean Optional Boolean that specifies whether to use the major or
minor axis for the ellipse. This argument only applies when
GeometricConstraints Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
the input entity is an ellipse or elliptical arc. Inputting True
results in the constraint being applied to the major axis. This
value is ignored when a line is supplied for the entity.
This is an optional argument whose default value is True.
Version
Introduced in version 5
GeometricConstraints.AddHorizontalAlign
Method
Parent Object: GeometricConstraints
Description
Method that creates a new horizontal alignment constraint between two sketch points. This causes
the two points to align along the same horizontal axis. This method will fail if the constraint
overconstrains the sketch.
Syntax
GeometricConstraints.AddHorizontalAlign( PointOne As SketchPoint, PointTwo As
SketchPoint ) As HorizontalAlignConstraint
Parameters
Name Type Description
PointOne SketchPoint Input SketchPoint entity.
PointTwo SketchPoint Input SketchPoint object.
Version
Introduced in version 5
GeometricConstraints.AddMidpoint Method
Parent Object: GeometricConstraints
Description
GeometricConstraints Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Method that creates a new midpoint constraint between the point and line. This causes the input
sketch point to be positioned at the midpoint of the input line. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddMidpoint( Point As SketchPoint, Line As SketchLine ) As
MidpointConstraint
Parameters
Name Type Description
Point SketchPoint Input SketchPoint entity.
Line SketchLine Input SketchLine object.
Version
Introduced in version 5
GeometricConstraints.AddMidPointToArc
Method
Parent Object: GeometricConstraints
Description
Creates a new midpoint constraint between the point and arc.
Syntax
GeometricConstraints.AddMidPointToArc( Point As SketchPoint, Arc As SketchArc ) As
MidpointConstraint
Parameters
Name Type Description
Point SketchPoint Input SketchPoint entity.
Arc SketchArc Input SketchLine entity.
Version
Introduced in version 2015
GeometricConstraints Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints.AddParallel Method
Parent Object: GeometricConstraints
Description
Method that creates a new parallel constraint between the two input sketch entities. Valid objects
for input include lines and ellipses. Either the major or minor axis of an ellipse is used depending
on the values of UseEllipseMajorAxis input arguments. When an ellipse is used, the specified axis
of the ellipse will become parallel to the other entity. This method will fail if the constraint
overconstrains the sketch.
Syntax
GeometricConstraints.AddParallel( EntityOne As SketchEntity, EntityTwo As SketchEntity,
[UseEllipseOneMajorAxis] As Boolean, [UseEllipseTwoMajorAxis] As Boolean ) As
ParallelConstraint
Parameters
Name Type Description
EntityOne SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
EntityTwo SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
UseEllipseOneMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityOne
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityOne
argument.
This is an optional argument whose default value is True.
UseEllipseTwoMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityTwo
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityTwo
argument.
This is an optional argument whose default value is True.
Version
Introduced in version 5
GeometricConstraints Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints.AddPerpendicular
Method
Parent Object: GeometricConstraints
Description
Method that creates a new perpendicular constraint between the two input sketch entities. Valid
objects for input include lines and ellipses. Either the major or minor axis of an ellipse is used
depending on the value of EllipseMajorAxis input argument. When an ellipse is used, the
specified axis of the ellipse will become perpendicular to the other entity. This method will fail if
the constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddPerpendicular( EntityOne As SketchEntity, EntityTwo As
SketchEntity, [UseEllipseOneMajorAxis] As Boolean, [UseEllipseTwoMajorAxis] As Boolean )
As PerpendicularConstraint
Parameters
Name Type Description
EntityOne SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
EntityTwo SketchEntity
Input sketch entity. Must be a line, ellipse, or elliptical
arc.
UseEllipseOneMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityOne
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityOne
argument.
This is an optional argument whose default value is True.
UseEllipseTwoMajorAxis Boolean
Optional Boolean that specifies whether to use the major
or minor axis for the ellipse supplied in the EntityTwo
argument. This argument only applies when the input
entity is an ellipse or elliptical arc. Inputting True results
in the constraint being applied to the major axis. This
value is ignored when a line is supplied as the EntityTwo
argument.
This is an optional argument whose default value is True.
GeometricConstraints Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Version
Introduced in version 5
GeometricConstraints.AddSmooth Method
Parent Object: GeometricConstraints
Description
Method that creates a new smooth (G2-continuous) constraint. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddSmooth( EntityOne As SketchEntity, EntityTwo As SketchEntity,
[ProximityPoint] As Variant ) As SmoothConstraint
Parameters
Name Type Description
EntityOne SketchEntity Input sketch entity.
EntityTwo SketchEntity Input sketch entity.
ProximityPoint Variant
Optional input Point2d object that specifies which ends of the
curves to make smooth in case there are multiple connections.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeometricConstraints.AddSymmetry Method
Parent Object: GeometricConstraints
Description
Method that creates a new symmetry constraint between the two input entities about the specified
line. The two input entities must be of the same type. This method will fail if the constraint
overconstrains the sketch.
GeometricConstraints Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Syntax
GeometricConstraints.AddSymmetry( EntityOne As SketchEntity, EntityTwo As SketchEntity,
SymmetryAxis As SketchLine ) As SymmetryConstraint
Parameters
Name Type Description
EntityOne SketchEntity
Input entity that is to be symmetric. Must be the same type as
EntityTwo.
EntityTwo SketchEntity
Input entity that is to be symmetric. Must be the same type as
EntityOne.
SymmetryAxis SketchLine Input object that defines the axis of symmetry.
Version
Introduced in version 5
GeometricConstraints.AddTangent Method
Parent Object: GeometricConstraints
Description
Method that creates a new tangent constraint. This method will fail if the constraint overconstrains
the sketch.
Syntax
GeometricConstraints.AddTangent( EntityOne As SketchEntity, EntityTwo As SketchEntity,
[ProximityPoint] As Variant ) As TangentSketchConstraint
Parameters
Name Type Description
EntityOne SketchEntity Input sketch object.
EntityTwo SketchEntity Input sketch object.
ProximityPoint Variant
Optional input Point object that specifies where the tangency should
be applied in the case where the input entities share two sketch
points.
This is an optional argument whose default value is null.
GeometricConstraints Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Version
Introduced in version 5
GeometricConstraints.AddVertical Method
Parent Object: GeometricConstraints
Description
Method that creates a new vertical constraint on the input sketch entity. Valid input objects are
lines and ellipses. Either the major or minor axis of an ellipse is used depending on the value of
the UseEllipseMajorAxis input argument. When an ellipse is used, the specified axis of the ellipse
will become vertical. This method will fail if the constraint overconstrains the sketch.
Syntax
GeometricConstraints.AddVertical( Entity As SketchEntity, [UseEllipseMajorAxis] As
Boolean ) As VerticalConstraint
Parameters
Name Type Description
Entity SketchEntity Input sketch entity. Must be a line, ellipse, or elliptical arc.
UseEllipseMajorAxis Boolean
Optional Boolean that specifies whether to use the major or
minor axis for the ellipse. This argument only applies when
the input entity is an ellipse or elliptical arc. Inputting True
results in the constraint being applied to the major axis. This
value is ignored when a line is supplied for the entity.
This is an optional argument whose default value is True.
Version
Introduced in version 5
GeometricConstraints.AddVerticalAlign
Method
Parent Object: GeometricConstraints
GeometricConstraints Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Description
Method that creates a new vertical alignment constraint between two sketch points. This causes
the two points to align along the same vertical axis. This method will fail if the constraint
overconstrains the sketch.
Syntax
GeometricConstraints.AddVerticalAlign( PointOne As SketchPoint, PointTwo As SketchPoint )
As VerticalAlignConstraint
Parameters
Name Type Description
PointOne SketchPoint Input SketchPoint entity.
PointTwo SketchPoint Input SketchLine object.
Version
Introduced in version 5
GeometricConstraints.Application Property
Parent Object: GeometricConstraints
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeometricConstraints.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GeometricConstraints Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints.Count Property
Parent Object: GeometricConstraints
Description
Property that returns the number of items in the collection.
Syntax
GeometricConstraints.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GeometricConstraints.Item Property
Parent Object: GeometricConstraints
Description
Returns the specified geometric sketch constraint object from the collection.
Syntax
GeometricConstraints.Item( Index As Long ) As GeometricConstraint
Property Value
This is a read only property whose value is a GeometricConstraint.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
GeometricConstraints Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
Version
Introduced in version 5
GeometricConstraints.Type Property
Parent Object: GeometricConstraints
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeometricConstraints.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GeometricConstraints Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69AF.htm 16/06/2025
GeometricConstraints3D Object
Description
The GeometricConstraints3D object provides access to all the geometric sketch constraints ( objects) in a
3D sketch and provides methods to create additional geometric sketch constraints.
Methods
Name Description
AddCoincident
Method that creates a new coincident constraint between two entities. One of
the input entities must be a sketch point. The other entity can be any other type
of sketch entity (but not a sketch point). Placing a coincident constraint
between two points will fail. Use the ConnectTo method on the SketchPoint3D
object to merge two points. This method will fail if the constraint
overconstrains the sketch.
AddCollinear
Method that creates a new collinear constraint between the two input objects.
This method will fail if the constraint overconstrains the sketch.
AddCustom Method that creates a new custom constraint on the input sketch entity.
AddEqual Creates a new equal constraint between the input entities.
AddGround
Method that creates a new ground constraint on the input sketch entity. This
method will fail if the constraint overconstrains the sketch.
AddMidpoint
Method that creates a new midpoint constraint between the input point and the
midpoint of the line. This causes the input sketch point to be positioned at the
midpoint of the \input line. This method will fail if the constraint
overconstrains the sketch.
AddOnFace Creates a new on face constraint between the input entity and face.
AddParallel
Method that creates a new parallel constraint between the two input entities.
This method will fail if the constraint overconstrains the sketch.
AddParallelToXAxis Creates a new parallel constraint between the input entity and X-axis.
AddParallelToXYPlane Creates a new parallel constraint between the input entity and XY-plane.
AddParallelToXZPlane Creates a new parallel constraint between the input entity and XZ-plane.
AddParallelToYAxis Creates a new parallel constraint between the input entity and Y-axis.
AddParallelToYZPlane Creates a new parallel constraint between the input entity and YZ-plane.
AddParallelToZAxis Creates a new parallel constraint between the input entity and Z-axis.
AddPerpendicular
Method that creates a new perpendicular constraint between the two input
entities. This method will fail if the constraint overconstrains the sketch.
AddSmooth
Method that creates a new smooth (G2-continuous) constraint. This method
will fail if the constraint overconstrains the sketch.
AddTangent
Method that creates a new tangent constraint. This method will fail if the
constraint overconstrains the sketch or if the two input entities do not share at
least one common sketch point. In creating the constraint, the method attempts
to match the existing orientation between the two curves. If the dot product of
the direction vectors for the curves at the tangent point is greater than 0.0 the
options for the tangent constraint is set to be outward. That means that if you
look at the curves and ignore the parameterization, the curves will be going in
opposite directions.
GeometricConstraints3D Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified geometric sketch constraint object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Sketch3D.GeometricConstraints3D, Sketch3DProxy.GeometricConstraints3D
Version
Introduced in version 6
GeometricConstraints3D.AddCoincident Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new coincident constraint between two entities. One of the input entities must be a
sketch point. The other entity can be any other type of sketch entity (but not a sketch point). Placing a
coincident constraint between two points will fail. Use the ConnectTo method on the SketchPoint3D
object to merge two points. This method will fail if the constraint overconstrains the sketch.
Syntax
GeometricConstraints3D.AddCoincident( EntityOne As SketchEntity3D, EntityTwo As
SketchEntity3D ) As CoincidentConstraint3D
Parameters
Name Type Description
EntityOne SketchEntity3D Input sketch entity.
EntityTwo SketchEntity3D Input sketch entity.
Version
Introduced in version 2009
GeometricConstraints3D Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
GeometricConstraints3D.AddCollinear Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new collinear constraint between the two input objects. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints3D.AddCollinear( EntityOne As Object, EntityTwo As Object, [Reserved1] As
Boolean, [Reserved2] As Boolean ) As CollinearConstraint3D
Parameters
Name Type Description
EntityOne Object Object that specifies the first entity to be constrained.
EntityTwo Object Object that specifies the second entity to be constrained.
Reserved1 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Reserved2 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Remarks
The constraint can currently be applied between two 3D sketch lines, or between a 3D sketch line and a
work axis.
Version
Introduced in version 11
GeometricConstraints3D.AddCustom Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new custom constraint on the input sketch entity.
Syntax
GeometricConstraints3D.AddCustom( Entity As SketchEntity3D, ClientId As String ) As
CustomConstraint3D
GeometricConstraints3D Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Parameters
Name Type Description
Entity SketchEntity3D
SketchEntity3D object that specifies the entity to which the custom constraint
needs to be applied.
ClientId String
String that uniquely identifies the client. This is the CLSID of the AddIn in a
string form, e.g. "{C9A6C580-3817-11D0-BE4E-080036E87B02}".
Version
Introduced in version 11
GeometricConstraints3D.AddEqual Method
Parent Object: GeometricConstraints3D
Description
Creates a new equal constraint between the input entities.
Syntax
GeometricConstraints3D.AddEqual( EntityOne As SketchEntity3D, EntityTwo As SketchEntity3D )
As EqualConstraint3D
Parameters
Name Type Description
EntityOne SketchEntity3D
EntityTwo SketchEntity3D
Version
Introduced in version 2017
GeometricConstraints3D.AddGround Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new ground constraint on the input sketch entity. This method will fail if the
constraint overconstrains the sketch.
GeometricConstraints3D Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Syntax
GeometricConstraints3D.AddGround( Entity As SketchEntity3D ) As GroundConstraint3D
Parameters
Name Type Description
Entity SketchEntity3D SketchEntity3D object that specifies the entity to ground.
Version
Introduced in version 11
GeometricConstraints3D.AddMidpoint Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new midpoint constraint between the input point and the midpoint of the line. This
causes the input sketch point to be positioned at the midpoint of the \input line. This method will fail if
the constraint overconstrains the sketch.
Syntax
GeometricConstraints3D.AddMidpoint( Point As SketchPoint3D, Line As SketchLine3D ) As
MidpointConstraint3D
Parameters
Name Type Description
Point SketchPoint3D Input SketchPoint3D object.
Line SketchLine3D Input SketchLine3D object.
Version
Introduced in version 2009
GeometricConstraints3D.AddOnFace Method
Parent Object: GeometricConstraints3D
Description
Creates a new on face constraint between the input entity and face.
GeometricConstraints3D Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Syntax
GeometricConstraints3D.AddOnFace( Entity As SketchEntity3D, Face As Object ) As
OnFaceConstraint3D
Parameters
Name Type Description
Entity SketchEntity3D
Face Object
Version
Introduced in version 2017
GeometricConstraints3D.AddParallel Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new parallel constraint between the two input entities. This method will fail if the
constraint overconstrains the sketch.
Syntax
GeometricConstraints3D.AddParallel( EntityOne As Object, EntityTwo As Object, [Reserved1] As
Boolean, [Reserved2] As Boolean ) As ParallelConstraint3D
Parameters
Name Type Description
EntityOne Object Object that specifies the first entity to be constrained.
EntityTwo Object Object that specifies the second entity to be constrained.
Reserved1 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Reserved2 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Remarks
The constraint can currently be applied between: * a 3D sketch line and another 3D sketch line, a work
axis, linear edge, or axis of a cylindrical face. * a 3D sketch line and a planar face or work plane.
GeometricConstraints3D Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Version
Introduced in version 11
GeometricConstraints3D.AddParallelToXAxis
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and X-axis.
Syntax
GeometricConstraints3D.AddParallelToXAxis( Line As SketchLine3D ) As
ParallelToXAxisConstraint3D
Parameters
Name Type Description
Line SketchLine3D
Version
Introduced in version 2017
GeometricConstraints3D.AddParallelToXYPlane
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and XY-plane.
Syntax
GeometricConstraints3D.AddParallelToXYPlane( Entity As SketchEntity3D ) As
ParallelToXYPlaneConstraint3D
Parameters
GeometricConstraints3D Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Name Type Description
Entity SketchEntity3D
Version
Introduced in version 2017
GeometricConstraints3D.AddParallelToXZPlane
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and XZ-plane.
Syntax
GeometricConstraints3D.AddParallelToXZPlane( Entity As SketchEntity3D ) As
ParallelToXZPlaneConstraint3D
Parameters
Name Type Description
Entity SketchEntity3D
Version
Introduced in version 2017
GeometricConstraints3D.AddParallelToYAxis
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and Y-axis.
Syntax
GeometricConstraints3D.AddParallelToYAxis( Line As SketchLine3D ) As
ParallelToYAxisConstraint3D
GeometricConstraints3D Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Parameters
Name Type Description
Line SketchLine3D
Version
Introduced in version 2017
GeometricConstraints3D.AddParallelToYZPlane
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and YZ-plane.
Syntax
GeometricConstraints3D.AddParallelToYZPlane( Entity As SketchEntity3D ) As
ParallelToYZPlaneConstraint3D
Parameters
Name Type Description
Entity SketchEntity3D
Version
Introduced in version 2017
GeometricConstraints3D.AddParallelToZAxis
Method
Parent Object: GeometricConstraints3D
Description
Creates a new parallel constraint between the input entity and Z-axis.
GeometricConstraints3D Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Syntax
GeometricConstraints3D.AddParallelToZAxis( Line As SketchLine3D ) As
ParallelToZAxisConstraint3D
Parameters
Name Type Description
Line SketchLine3D
Version
Introduced in version 2017
GeometricConstraints3D.AddPerpendicular
Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new perpendicular constraint between the two input entities. This method will fail
if the constraint overconstrains the sketch.
Syntax
GeometricConstraints3D.AddPerpendicular( EntityOne As Object, EntityTwo As Object, [Reserved1]
As Boolean, [Reserved2] As Boolean ) As PerpendicularConstraint3D
Parameters
Name Type Description
EntityOne Object Object that specifies the first entity to be constrained.
EntityTwo Object Object that specifies the second entity to be constrained.
Reserved1 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Reserved2 Boolean
This argument is reserved for future use and is currently ignored.
This is an optional argument whose default value is True.
Remarks
The constraint can currently be applied between a 3D sketch line and another 3D sketch line, a work
axis, linear edge, work plane or a surface (face).
GeometricConstraints3D Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Version
Introduced in version 11
GeometricConstraints3D.AddSmooth Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new smooth (G2-continuous) constraint. This method will fail if the constraint
overconstrains the sketch.
Syntax
GeometricConstraints3D.AddSmooth( EntityOne As SketchEntity3D, EntityTwo As SketchEntity3D,
[ProximityPoint] As Variant ) As SmoothConstraint3D
Parameters
Name Type Description
EntityOne SketchEntity3D Input sketch entity.
EntityTwo SketchEntity3D Input sketch entity.
ProximityPoint Variant
Optional input Point object that specifies which ends of the curves to
make smooth in case there are multiple connections.
This is an optional argument whose default value is null.
Version
Introduced in version 11
GeometricConstraints3D.AddTangent Method
Parent Object: GeometricConstraints3D
Description
Method that creates a new tangent constraint. This method will fail if the constraint overconstrains the
sketch or if the two input entities do not share at least one common sketch point. In creating the
constraint, the method attempts to match the existing orientation between the two curves. If the dot
product of the direction vectors for the curves at the tangent point is greater than 0.0 the options for the
tangent constraint is set to be outward. That means that if you look at the curves and ignore the
parameterization, the curves will be going in opposite directions.
GeometricConstraints3D Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Syntax
GeometricConstraints3D.AddTangent( EntityOne As SketchEntity3D, EntityTwo As Object,
[ProximityPoint] As Variant ) As TangentConstraint3D
Parameters
Name Type Description
EntityOne SketchEntity3D Input sketch object.
EntityTwo Object Input sketch or edge object.
ProximityPoint Variant
Optional input object that specifies where the tangency should be
applied in the case where the input entities share two sketch points.
This is an optional argument whose default value is null.
Version
Introduced in version 8
GeometricConstraints3D.Application Property
Parent Object: GeometricConstraints3D
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GeometricConstraints3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
GeometricConstraints3D.Count Property
Parent Object: GeometricConstraints3D
GeometricConstraints3D Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Description
Property that returns the number of items in the collection.
Syntax
GeometricConstraints3D.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
GeometricConstraints3D.Item Property
Parent Object: GeometricConstraints3D
Description
Returns the specified geometric sketch constraint object from the collection.
Syntax
GeometricConstraints3D.Item( Index As Long ) As GeometricConstraint3D
Property Value
This is a read only property whose value is a GeometricConstraint3D.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 6
GeometricConstraints3D.Type Property
Parent Object: GeometricConstraints3D
GeometricConstraints3D Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeometricConstraints3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
GeometricConstraints3D Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9090.htm 16/06/2025
GeometryIntent Object
Description
The GeometryIntent object represents a geometry intent for use in various annotation and view
creations.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Geometry Property that returns the geometry associated with the intent.
Intent
Property that returns the intent point on the input geometry. This can be a value
from PointIntentEnum, a geometry if the intent is the intersection of two
geometries, a Point2d object that specifies a sheet point on the geometry or a
double value indicating the parameter on the input curve geometry.
IntentType
Property that returns intent type indicating the type of value that the Intent property
will return. Possible return values are kPointEnumIntent (a PointIntentEnum will
be returned), kPoint2dIntent (a Point2d object will be returned), kParameterIntent
(a double value will be returned), kGeometryIntent (a DrawingCurve or a
SketchEntity will be returned) or kNoPointIntent (the GeometryIntent is not a
point and the Intent property will not return a meaningful value).
Parent Property that returns the parent of this object.
Point
Read-only property that returns a 3d point define by the geometry intent. This
property returns nothing there is not a 3d point intent.
PointOnSheet
Property that returns the point on sheet represented by a point intent. This property
returns Nothing if this is not a point intent.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AngularGeneralDimension.IntentOne, AngularGeneralDimension.IntentThree,
AngularGeneralDimension.IntentTwo, AngularModelDimensionDefinition.IntentOne,
AngularModelDimensionDefinition.IntentThree, AngularModelDimensionDefinition.IntentTwo,
AssemblyComponentDefinition.CreateGeometryIntent, AssemblyJointDefinition.OriginOne,
AssemblyJointDefinition.OriginTwo, BaselineDimensionSet.Origin,
Centerline.GetBisectorEntities, Centerline.PatternCenter, DetailDrawingView.AttachPoint,
DiameterGeneralDimension.Intent, DiameterModelDimensionDefinition.Intent,
FlatPattern.CreateGeometryIntent, HoleThreadNote.Intent, LeaderNode.AttachedEntity,
LinearGeneralDimension.IntentOne, LinearGeneralDimension.IntentThree,
LinearGeneralDimension.IntentTwo, LinearGeneralDimension.VirtualArcPosition,
LinearModelDimensionDefinition.IntentOne, LinearModelDimensionDefinition.IntentTwo,
ModelDatumIdentifierDefinition.Intent, ModelFeatureControlFrameDefinition.Intent,
ModelGeneralNoteDefinition.Intent, ModelHoleThreadNoteDefinition.Intent,
GeometryIntent Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
ModelLeaderNode.Intent, ModelLeaderNoteDefinition.Intent,
ModelSurfaceTextureSymbolDefinition.Intent, ModelWeldingSymbolDefinitions.Intent,
OrdinateDimension.Intent, OriginIndicator.Intent,
PartComponentDefinition.CreateGeometryIntent, Publication.CreateGeometryIntent,
PublicationTrail.Origin, PublicationTrailSegment.Origin,
PublicationTweakDefinition.TriadOrigin, PublicationTweaks.TriadOrigin,
PunchNote.PunchEdge, RadiusGeneralDimension.Intent,
RadiusModelDimensionDefinition.Intent, Sheet.CreateGeometryIntent,
SheetMetalComponentDefinition.CreateGeometryIntent,
WeldmentComponentDefinition.CreateGeometryIntent
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Baseline dimension sets
This sample demonstrates the creation of a baseline set dimension in
a drawing.
Chain dimensions sets
This sample demonstrates the creation of a chain dimension set in a
drawing.
Creating hole tables This sample demonstrates the creation of hole tables in a drawing.
create punch note
This sample demonstrates the creation of a punch note on the drawing
view of a flat pattern.
Create sketched symbol
and leader
This sample illustrates creating sketched symbol with a leader.
Add surface texture
symbol to dimension
This sample demonstrates the creation of a surface texture symbol
attached to the extension line of a drawing dimension.
Version
Introduced in version 11
GeometryIntent.Application Property
Parent Object: GeometryIntent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GeometryIntent.Application() As Object
GeometryIntent Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
GeometryIntent.Geometry Property
Parent Object: GeometryIntent
Description
Property that returns the geometry associated with the intent.
Syntax
GeometryIntent.Geometry() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
GeometryIntent.Intent Property
Parent Object: GeometryIntent
Description
Property that returns the intent point on the input geometry. This can be a value from
PointIntentEnum, a geometry if the intent is the intersection of two geometries, a Point2d object
that specifies a sheet point on the geometry or a double value indicating the parameter on the input
curve geometry.
Syntax
GeometryIntent.Intent() As Variant
GeometryIntent Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 11
GeometryIntent.IntentType Property
Parent Object: GeometryIntent
Description
Property that returns intent type indicating the type of value that the Intent property will return.
Possible return values are kPointEnumIntent (a PointIntentEnum will be returned), kPoint2dIntent
(a Point2d object will be returned), kParameterIntent (a double value will be returned),
kGeometryIntent (a DrawingCurve or a SketchEntity will be returned) or kNoPointIntent (the
GeometryIntent is not a point and the Intent property will not return a meaningful value).
Syntax
GeometryIntent.IntentType() As IntentTypeEnum
Property Value
This is a read only property whose value is an IntentTypeEnum.
Version
Introduced in version 11
GeometryIntent.Parent Property
Parent Object: GeometryIntent
Description
Property that returns the parent of this object.
Syntax
GeometryIntent.Parent() As Object
GeometryIntent Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
GeometryIntent.Point Property
Parent Object: GeometryIntent
Description
Read-only property that returns a 3d point define by the geometry intent. This property returns
nothing there is not a 3d point intent.
Syntax
GeometryIntent.Point() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
GeometryIntent.PointOnSheet Property
Parent Object: GeometryIntent
Description
Property that returns the point on sheet represented by a point intent. This property returns
Nothing if this is not a point intent.
Syntax
GeometryIntent.PointOnSheet() As Point2d
GeometryIntent Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
Property Value
This is a read only property whose value is a Point2d.
Version
Introduced in version 11
GeometryIntent.Type Property
Parent Object: GeometryIntent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GeometryIntent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
GeometryIntent Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB2BE.htm 16/06/2025
GraphicsColorMapper Object
Description
The GraphicsColorMapper object maps scalar values to colors. Use methods provided on the
object to define the scalar values and colors. The same object can be used to define the mapping
for multiple graphics primitives using the ColorMapper property on the primitives.
Methods
Name Description
Delete Method that deletes the GraphicsColorMapper object.
GetColors Method that gets all of the colors in the map.
GetValues Method that gets all of the values in the map.
PutColors
Method that sets all of the colors in the map. This will replace all existing colors
currently defined for the map.
PutValues
Method that sets all of the values in the map. This will replace all existing values
currently defined for the map.
Properties
Name Description
Color Read-write property that gets and sets the color at a given index in the set.
ColorCount Property that returns the number of colors defined within the set.
MappedColor
Property that returns the color at a given value in the map. This property is
informational only and need not be used when assigning a color map to a
primitive.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Read-write property that gets and sets the value at a given index in the set.
ValueCount Property that returns the number of values defined within the set.
Accessed From
GraphicsDataSets.CreateColorMapper, TriangleFanGraphics.ColorMapper,
TriangleGraphics.ColorMapper, TriangleStripGraphics.ColorMapper
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
GraphicsColorMapper Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Version
Introduced in version 2010
GraphicsColorMapper.Color Property
Parent Object: GraphicsColorMapper
Description
Read-write property that gets and sets the color at a given index in the set.
Syntax
GraphicsColorMapper.Color( Index As Long ) As Color
Property Value
This is a read/write property whose value is a Color.
Parameters
Name Type Description
Index Long
Version
Introduced in version 2010
GraphicsColorMapper.ColorCount Property
Parent Object: GraphicsColorMapper
Description
Property that returns the number of colors defined within the set.
Syntax
GraphicsColorMapper.ColorCount() As Long
GraphicsColorMapper Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
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
Introduced in version 2010
GraphicsColorMapper.Delete Method
Parent Object: GraphicsColorMapper
Description
Method that deletes the GraphicsColorMapper object.
Syntax
GraphicsColorMapper.Delete()
Version
Introduced in version 2010
GraphicsColorMapper.GetColors Method
Parent Object: GraphicsColorMapper
Description
Method that gets all of the colors in the map.
GraphicsColorMapper Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Syntax
GraphicsColorMapper.GetColors( Colors() As Byte )
Parameters
Name Type Description
Colors Byte
Output array of bytes that contains the values of the colors. The array is a single
dimension array containing sequential red, green, and blue values. If the array has
been declared undimensioned, this method will redimension its size to be able to
contain the complete set of colors. If the array has been dimensioned, it must be
large enough to contain the entire set of colors or an error will occur.
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
Introduced in version 2010
GraphicsColorMapper.GetValues Method
Parent Object: GraphicsColorMapper
Description
Method that gets all of the values in the map.
Syntax
GraphicsColorMapper.GetValues( Values() As Double )
Parameters
Name Type Description
Values Double Output array of Doubles that contains the values in the map. The array is a single
dimension array containing the scalar values. If the array has been declared
undimensioned, this method will redimension its size to be able to contain the
GraphicsColorMapper Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
complete set of values. If the array has been dimensioned, it must be large enough
to contain the entire set of values or an error will occur.
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
Introduced in version 2010
GraphicsColorMapper.MappedColor
Property
Parent Object: GraphicsColorMapper
Description
Property that returns the color at a given value in the map. This property is informational only and
need not be used when assigning a color map to a primitive.
Syntax
GraphicsColorMapper.MappedColor( Value As Double ) As Color
Property Value
This is a read only property whose value is a Color.
Parameters
Name Type Description
Value Double Double value to retrieve the color for.
Version
Introduced in version 2010
GraphicsColorMapper Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
GraphicsColorMapper.PutColors Method
Parent Object: GraphicsColorMapper
Description
Method that sets all of the colors in the map. This will replace all existing colors currently defined
for the map.
Syntax
GraphicsColorMapper.PutColors( Colors() As Byte )
Parameters
Name Type Description
Colors Byte
Input array of Bytes that contains the values of the colors. The array is a single
dimension array containing sequential red, green, and blue values.
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
Introduced in version 2010
GraphicsColorMapper.PutValues Method
Parent Object: GraphicsColorMapper
Description
Method that sets all of the values in the map. This will replace all existing values currently defined
for the map.
Syntax
GraphicsColorMapper.PutValues( Values() As Double )
GraphicsColorMapper Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Parameters
Name Type Description
Values Double Input array of Doubles that contains the values.
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
Introduced in version 2010
GraphicsColorMapper.Type Property
Parent Object: GraphicsColorMapper
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsColorMapper.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
GraphicsColorMapper.Value Property
Parent Object: GraphicsColorMapper
GraphicsColorMapper Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Description
Read-write property that gets and sets the value at a given index in the set.
Syntax
GraphicsColorMapper.Value( Index As Long ) As Double
Property Value
This is a read/write property whose value is a Double.
Parameters
Name Type Description
Index Long
Version
Introduced in version 2010
GraphicsColorMapper.ValueCount Property
Parent Object: GraphicsColorMapper
Description
Property that returns the number of values defined within the set.
Syntax
GraphicsColorMapper.ValueCount() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
GraphicsColorMapper Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
Version
Introduced in version 2010
GraphicsColorMapper Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD25C.htm 16/06/2025
GraphicsColorSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsColorSet object contains a list of colors. This object can be referenced by any
number of graphic primitives to use in defining triangle or vertex specific colors to use when
rendering.
Methods
Name Description
Add Method that adds a new color to the set.
Delete Method that deletes the GraphicsDataSet.
GetColors Method that gets all of the colors of the set.
PutColors
Method that sets all of the colors of the set. This will replace all existing colors
currently defined for the set.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Color Property that gets and sets the color at a given index in the set.
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateColorSet, LineGraphics.ColorSet, LineStripGraphics.ColorSet,
MeshFeatureEntity.ColorSet, MeshFeatureEntityProxy.ColorSet,
PresentationMeshFeatureEntity.ColorSet, TriangleFanGraphics.ColorSet,
TriangleGraphics.ColorSet, TriangleStripGraphics.ColorSet
Samples
Name Description
Client
graphics
texturebased
color
mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band or
continuous color mapper and allows you to adjust the values of the mapper to change
the range of values that map to various colors.
GraphicsColorSet Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
Client
Graphics -
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the
part. Areas in between are represented by a smooth blend of color from blue to red.
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
Version
Introduced in version 5
GraphicsColorSet.Add Method
Parent Object: GraphicsColorSet
Description
Method that adds a new color to the set.
Syntax
GraphicsColorSet.Add( Index As Long, Red As Byte, Green As Byte, Blue As Byte )
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Red Byte
Input value that specifies the red component of the color. This must be a value
between 0 and 255.
Green Byte
Input Byte that specifies the green component of the color. This value must be
between 0 and 255.
Blue Byte The blue component of the color. A Byte value between 0 and 255.
GraphicsColorSet Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
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
GraphicsColorSet.Color Property
Parent Object: GraphicsColorSet
Description
Property that gets and sets the color at a given index in the set.
Syntax
GraphicsColorSet.Color( Index As Long ) As Color
Property Value
This is a read/write property whose value is a Color.
Parameters
Name Type Description
Index Long
GraphicsColorSet Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
Version
Introduced in version 11
GraphicsColorSet.Count Property
Parent Object: GraphicsColorSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsColorSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsColorSet.Delete Method
Parent Object: GraphicsColorSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsColorSet.Delete()
Version
Introduced in version 5
GraphicsColorSet Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
GraphicsColorSet.GetColors Method
Parent Object: GraphicsColorSet
Description
Method that gets all of the colors of the set.
Syntax
GraphicsColorSet.GetColors( Colors() As Byte )
Parameters
Name Type Description
Colors Byte
Output array of bytes that contains the values of the colors. The array is a single
dimension array containing sequential red, green, and blue values. If the array has
been declared undimensioned, this method will redimension its size to be able to
contain the complete set of colors. If the array has been dimensioned, it must be
large enough to contain the entire set of colors or an error will occur.
Version
Introduced in version 5
GraphicsColorSet.Id Property
Parent Object: GraphicsColorSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsColorSet.Id() As Long
Property Value
This is a read only property whose value is a Long.
GraphicsColorSet Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
Version
Introduced in version 5
GraphicsColorSet.PutColors Method
Parent Object: GraphicsColorSet
Description
Method that sets all of the colors of the set. This will replace all existing colors currently defined
for the set.
Syntax
GraphicsColorSet.PutColors( Colors() As Byte )
Parameters
Name Type Description
Colors Byte
Input array of bytes that contains the values of the colors. The array is a single
dimension array containing sequential red, green, and blue values.
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Version
Introduced in version 5
GraphicsColorSet.Remove Method
GraphicsColorSet Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
Parent Object: GraphicsColorSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsColorSet.Remove( Index As Long )
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 5
GraphicsColorSet.Type Property
Parent Object: GraphicsColorSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsColorSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsColorSet Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA82B.htm 16/06/2025
GraphicsCoordinateSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsCoordinateSet object contains a list of coordinate values. This object can be
referenced by any number of graphic primitives to use in defining their coordinates.
Methods
Name Description
Add Method that adds a single coordinate to the set.
Delete Method that deletes the GraphicsDataSet.
GetCoordinates Method that gets all of the coordinates of the set.
PutCoordinates
Method that sets all of the coordinates of the set. This will replace all existing
coordinates currently defined for the set.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Coordinate Allows integer-indexed access to items in the collection.
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateCoordinateSet, LineGraphics.CoordinateSet,
LineStripGraphics.CoordinateSet, MeshFeatureEntity.CoordinateSet,
MeshFeatureEntityProxy.CoordinateSet, PointGraphics.CoordinateSet,
PresentationMeshFeatureEntity.CoordinateSet, TriangleFanGraphics.CoordinateSet,
TriangleGraphics.CoordinateSet, TriangleStripGraphics.CoordinateSet
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
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band
GraphicsCoordinateSet Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
texturebased
color
mapping
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
OnDrag
Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
GraphicsCoordinateSet.Add Method
Parent Object: GraphicsCoordinateSet
Description
Method that adds a single coordinate to the set.
GraphicsCoordinateSet Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
Syntax
GraphicsCoordinateSet.Add( Index As Long, Coordinate As Point )
Parameters
Name Type Description
Index Long
Specifies the index you want this coordinate to be within the set. All
coordinates above the Index will be shifted up to make room for this index.
Specifying any number greater than the current count of the set will cause the
coordinate to become the last in the set. The coordinate set indices are onebased.
Coordinate Point Input object that specifies the coordinate to add.
Version
Introduced in version 5
GraphicsCoordinateSet.Coordinate Property
Parent Object: GraphicsCoordinateSet
Description
Allows integer-indexed access to items in the collection.
Syntax
GraphicsCoordinateSet.Coordinate( Index As Long ) As Point
Property Value
This is a read/write property whose value is a Point.
Parameters
Name Type Description
Index Long
Version
Introduced in version 5
GraphicsCoordinateSet Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
GraphicsCoordinateSet.Count Property
Parent Object: GraphicsCoordinateSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsCoordinateSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsCoordinateSet.Delete Method
Parent Object: GraphicsCoordinateSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsCoordinateSet.Delete()
Version
Introduced in version 5
GraphicsCoordinateSet.GetCoordinates
Method
Parent Object: GraphicsCoordinateSet
GraphicsCoordinateSet Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
Description
Method that gets all of the coordinates of the set.
Syntax
GraphicsCoordinateSet.GetCoordinates( Coordinates() As Double )
Parameters
Name Type Description
Coordinates Double
Input/output array of Doubles that contains the x-y-z value of the
coordinates. The array is a single dimension array containing sequential x, y,
and z values. If the array has been declared undimensioned, this method will
redimension its size to be able to contain the complete set of coordinates. If
the array has been dimensioned, it must be large enough to contain the entire
set of coordinates or an error will occur.
Version
Introduced in version 5
GraphicsCoordinateSet.Id Property
Parent Object: GraphicsCoordinateSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsCoordinateSet.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsCoordinateSet Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
GraphicsCoordinateSet.PutCoordinates
Method
Parent Object: GraphicsCoordinateSet
Description
Method that sets all of the coordinates of the set. This will replace all existing coordinates
currently defined for the set.
Syntax
GraphicsCoordinateSet.PutCoordinates( Coordinates() As Double )
Parameters
Name Type Description
Coordinates Double
Input/output array of Doubles that contains the x-y-z value of the
coordinates. The array is a single dimension array containing sequential x, y,
z values.
Samples
Name Description
Client Graphics -
Draw Range Box
This sample demonstrates the use of client graphics to draw the range box
of selected entities.
Client graphics
texture-based color
mapping
This test applies texture coordinates expressing distance from the origin to
'the triangle mesh of whatever Part you have open. It then creates either a
discrete-band or continuous color mapper and allows you to adjust the
values of the mapper to change the range of values that map to various
colors.
Client Graphics -
Vertex Color by Z
Height
This sample demonstrates using client graphics and some other functions
that help to support display control. It uses the currently active part and
replaces the part display with a display where the part's color varies from
blue to red where blue is assigned to the lowest Z portion of the part and
red is assigned to the highest Z portion of the part. Areas in between are
represented by a smooth blend of color from blue to red.
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is
used for both types of graphics. Line graphics use two coordinates to define
a line, and then the next two coordinates to define the next line, and so on
through the defined coordinates. For the data provided, this results in gaps
in the drawn curve. Line strips use the first two coordinates to define the
first line and then the last point of the first line becomes the first point of
the second line and the next coordinate is used as the end point of the
second line. This results in the set of points being connected by a
GraphicsCoordinateSet Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
continuous set of lines, drawing a continuous curve. This sample also
demonstrates two methods of defining the color for client graphics. In one
case it uses an existing appearance asset, and in the other, it explicitly
defines a color and assigns it. To use the sample you need to have an
assembly or part document open. The program has two behaviors: the first
time it is run it will draw the graphics. The second time it is run it deletes
the previously drawn graphics.
Client Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using
triange fans and strips. It does this by drawing a cylinder. The end caps are
triangle fans and the cylinder is made from a triangle strip.
InteractionGraphics The sample creates overlay graphics.
Client graphics -
image in point
graphics
The following sample demonstrates creation of point client graphics with a
custom image.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel
to the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 5
GraphicsCoordinateSet.Remove Method
Parent Object: GraphicsCoordinateSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsCoordinateSet.Remove( Index As Long )
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 5
GraphicsCoordinateSet Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
GraphicsCoordinateSet.Type Property
Parent Object: GraphicsCoordinateSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsCoordinateSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsCoordinateSet Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC93F.htm 16/06/2025
GraphicsDataSet Object
Description
The GraphicsDataSet object is the base class for the various utility objects used for creating
custom graphics.
Methods
Name Description
Delete Method that deletes the GraphicsDataSet.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.Item, GraphicsDataSets.ItemById
Derived Classes
GraphicsColorSet, GraphicsCoordinateSet, GraphicsImageSet, GraphicsIndexSet,
GraphicsNormalSet, GraphicsTextureCoordinateSet
Version
Introduced in version 5
GraphicsDataSet.Count Property
Parent Object: GraphicsDataSet
Description
Property that returns the number of objects in this collection.
GraphicsDataSet Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2F1.htm 16/06/2025
Syntax
GraphicsDataSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsDataSet.Delete Method
Parent Object: GraphicsDataSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsDataSet.Delete()
Version
Introduced in version 5
GraphicsDataSet.Id Property
Parent Object: GraphicsDataSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsDataSet.Id() As Long
GraphicsDataSet Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2F1.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsDataSet.Remove Method
Parent Object: GraphicsDataSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsDataSet.Remove( Index As Long )
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 5
GraphicsDataSet.Type Property
Parent Object: GraphicsDataSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsDataSet.Type() As ObjectTypeEnum
GraphicsDataSet Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2F1.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsDataSet Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2F1.htm 16/06/2025
GraphicsDataSets Object
Description
The GrahicsDataSets object supports methods to create the various graphics-related data objects.
Methods
Name Description
CreateColorMapper Method that creates a new GraphicsColorMapper object.
CreateColorSet
Method that creates a new GraphicsColorSet object. You use methods
provided by the ColorSet object to define the colors.
CreateCoordinateSet
Method that creates a new GraphicsCoordinateSet object. You use
methods provided by the CoordinateSet object to define the
coordinates.
CreateImageSet
Method that creates a new GraphicsImageSet object. You use methods
provided by the GraphicsImageSet object to define the images.
CreateIndexSet
Method that creates a new GraphicsIndexSet object. You use methods
provided by the GraphicsIndexSet object to define the indices.
CreateNormalSet
Method that creates a new GraphicsNormalSet object. You use
methods provided by the NormalSet object to define the normal
vectors.
CreateTextureCoordinateSet
Method that creates a new GraphicsTextureCoordinateSet object. You
use methods provided by the GraphicsTextureCoordinateSet object to
define the coordinates.
Delete Method that deletes the GraphicsDataSets object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ClientId
Property that returns the unique identifier for the GraphicsDataSets object. The
ClientId is assigned during the creation of the GraphicsDataSets object.
Typically, it is a GUID in string form, but any string is valid.
Count Property that returns the number of GraphicDataSet objects in this collection.
Item Returns the specified object from the collection.
ItemById Returns the specified object from the collection.
NonTransacting
Read-only property that returns whether the creation of this GraphicsDataSets
object and all its associated data is non-transacting.
Parent Property returns the parent of this object.
SaveWithDocument Property that returns whether to save the GraphicsDataSets with the document.
Type Returns an ObjectTypeEnum indicating this object's type.
GraphicsDataSets Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Accessed From
GraphicsDataSetsCollection.Add, GraphicsDataSetsCollection.Item,
InteractionGraphics.GraphicsDataSets
Samples
Name Description
Client
Graphics -
Draw Range
Box
This sample demonstrates the use of client graphics to draw the range box of selected
entities.
Client
graphics
texturebased
color
mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band or
continuous color mapper and allows you to adjust the values of the mapper to change
the range of values that map to various colors.
Client
Graphics -
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the part.
Areas in between are represented by a smooth blend of color from blue to red.
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
OnDrag
Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y plane.
This sample is dependent on events and VB only supports events within a class
module.
GraphicsDataSets Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Version
Introduced in version 5
GraphicsDataSets.Application Property
Parent Object: GraphicsDataSets
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GraphicsDataSets.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GraphicsDataSets.ClientId Property
Parent Object: GraphicsDataSets
Description
Property that returns the unique identifier for the GraphicsDataSets object. The ClientId is assigned
during the creation of the GraphicsDataSets object. Typically, it is a GUID in string form, but any
string is valid.
Syntax
GraphicsDataSets.ClientId() As String
Property Value
This is a read only property whose value is a String.
GraphicsDataSets Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Version
Introduced in version 5
GraphicsDataSets.Count Property
Parent Object: GraphicsDataSets
Description
Property that returns the number of GraphicDataSet objects in this collection.
Syntax
GraphicsDataSets.Count() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
GraphicsDataSets.CreateColorMapper
Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsColorMapper object.
GraphicsDataSets Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Syntax
GraphicsDataSets.CreateColorMapper() As GraphicsColorMapper
Version
Introduced in version 2010
GraphicsDataSets.CreateColorSet Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsColorSet object. You use methods provided by the ColorSet
object to define the colors.
Syntax
GraphicsDataSets.CreateColorSet( DataSetId As Long ) As GraphicsColorSet
Parameters
Name Type Description
DataSetId Long
Input Long that specifies the unique identifier for the GraphicsDataSet object. This
must be unique with respect to all other GraphicsDataSet objects within this
GraphicsDataSets object.
Samples
Name Description
Client graphics
texture-based color
mapping
This test applies texture coordinates expressing distance from the origin to
'the triangle mesh of whatever Part you have open. It then creates either a
discrete-band or continuous color mapper and allows you to adjust the values
of the mapper to change the range of values that map to various colors.
Client Graphics -
Vertex Color by Z
Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces
the part display with a display where the part's color varies from blue to red
where blue is assigned to the lowest Z portion of the part and red is assigned
to the highest Z portion of the part. Areas in between are represented by a
smooth blend of color from blue to red.
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is used
for both types of graphics. Line graphics use two coordinates to define a line,
and then the next two coordinates to define the next line, and so on through
the defined coordinates. For the data provided, this results in gaps in the
GraphicsDataSets Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
drawn curve. Line strips use the first two coordinates to define the first line
and then the last point of the first line becomes the first point of the second
line and the next coordinate is used as the end point of the second line. This
results in the set of points being connected by a continuous set of lines,
drawing a continuous curve. This sample also demonstrates two methods of
defining the color for client graphics. In one case it uses an existing
appearance asset, and in the other, it explicitly defines a color and assigns it.
To use the sample you need to have an assembly or part document open. The
program has two behaviors: the first time it is run it will draw the graphics.
The second time it is run it deletes the previously drawn graphics.
InteractionGraphics The sample creates overlay graphics.
Version
Introduced in version 5
GraphicsDataSets.CreateCoordinateSet
Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsCoordinateSet object. You use methods provided by the
CoordinateSet object to define the coordinates.
Syntax
GraphicsDataSets.CreateCoordinateSet( DataSetId As Long ) As GraphicsCoordinateSet
Parameters
Name Type Description
DataSetId Long
Input Long that specifies the unique identifier for the GraphicsDataSet object. This
must be unique with respect to all other GraphicsDataSet objects within this
GraphicsDataSets object.
Samples
Name Description
Client Graphics -
Draw Range Box
This sample demonstrates the use of client graphics to draw the range box of
selected entities.
Client graphics
texture-based color
mapping
This test applies texture coordinates expressing distance from the origin to
'the triangle mesh of whatever Part you have open. It then creates either a
discrete-band or continuous color mapper and allows you to adjust the values
of the mapper to change the range of values that map to various colors.
GraphicsDataSets Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Client Graphics -
Vertex Color by Z
Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces
the part display with a display where the part's color varies from blue to red
where blue is assigned to the lowest Z portion of the part and red is assigned
to the highest Z portion of the part. Areas in between are represented by a
smooth blend of color from blue to red.
Client Graphics -
Line
This sample demonstrates the creation of custom graphics using
LineGraphics and LineStripGraphics. The same set of coordinate data is used
for both types of graphics. Line graphics use two coordinates to define a line,
and then the next two coordinates to define the next line, and so on through
the defined coordinates. For the data provided, this results in gaps in the
drawn curve. Line strips use the first two coordinates to define the first line
and then the last point of the first line becomes the first point of the second
line and the next coordinate is used as the end point of the second line. This
results in the set of points being connected by a continuous set of lines,
drawing a continuous curve. This sample also demonstrates two methods of
defining the color for client graphics. In one case it uses an existing
appearance asset, and in the other, it explicitly defines a color and assigns it.
To use the sample you need to have an assembly or part document open. The
program has two behaviors: the first time it is run it will draw the graphics.
The second time it is run it deletes the previously drawn graphics.
Client Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using
triange fans and strips. It does this by drawing a cylinder. The end caps are
triangle fans and the cylinder is made from a triangle strip.
InteractionGraphics The sample creates overlay graphics.
Client graphics -
image in point
graphics
The following sample demonstrates creation of point client graphics with a
custom image.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 5
GraphicsDataSets.CreateImageSet Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsImageSet object. You use methods provided by the
GraphicsImageSet object to define the images.
GraphicsDataSets Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Syntax
GraphicsDataSets.CreateImageSet( DataSetId As Long ) As GraphicsImageSet
Parameters
Name Type Description
DataSetId Long
Specifies the unique identifier for the GraphicsImageSet object. This must be
unique with respect to all other GraphicsDataSet objects within this
GraphicDataSets collection object.
Remarks
This method will fail in the case where the GraphicDataSets object can be saved with the document.
This occurs when the GraphicDataSets object was created using the Add2 method and the
SaveWithDocument argument was True.
Samples
Name Description
Client graphics - image in
point graphics
The following sample demonstrates creation of point client
graphics with a custom image.
Version
Introduced in version 2011
GraphicsDataSets.CreateIndexSet Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsIndexSet object. You use methods provided by the
GraphicsIndexSet object to define the indices.
Syntax
GraphicsDataSets.CreateIndexSet( DataSetId As Long ) As GraphicsIndexSet
Parameters
Name Type Description
DataSetId Long
GraphicsDataSets Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Input Long that specifies the unique identifier for the GraphicsDataSet object. This
must be unique with respect to all other GraphicsDataSet objects within this
GraphicsDataSets object.
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band
or continuous color mapper and allows you to adjust the values of the mapper to
change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that help
to support display control. It uses the currently active part and replaces the part
display with a display where the part's color varies from blue to red where blue is
assigned to the lowest Z portion of the part and red is assigned to the highest Z
portion of the part. Areas in between are represented by a smooth blend of color
from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsDataSets.CreateNormalSet Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsNormalSet object. You use methods provided by the NormalSet
object to define the normal vectors.
Syntax
GraphicsDataSets.CreateNormalSet( DataSetId As Long ) As GraphicsNormalSet
Parameters
Name Type Description
DataSetId Long
Input Long that specifies the unique identifier for the GraphicsDataSet object. This
must be unique with respect to all other GraphicsDataSet objects within this
GraphicsDataSets object.
GraphicsDataSets Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discrete-band
or continuous color mapper and allows you to adjust the values of the mapper to
change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that help
to support display control. It uses the currently active part and replaces the part
display with a display where the part's color varies from blue to red where blue is
assigned to the lowest Z portion of the part and red is assigned to the highest Z
portion of the part. Areas in between are represented by a smooth blend of color
from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsDataSets.CreateTextureCoordinateSet
Method
Parent Object: GraphicsDataSets
Description
Method that creates a new GraphicsTextureCoordinateSet object. You use methods provided by the
GraphicsTextureCoordinateSet object to define the coordinates.
Syntax
GraphicsDataSets.CreateTextureCoordinateSet( DataSetId As Long ) As
GraphicsTextureCoordinateSet
Parameters
Name Type Description
DataSetId Long
Specifies the unique identifier for the GraphicsTextureCoordinateSet object. This
must be unique with respect to all other GraphicsDataSet objects within this
GraphicDataSets collection object.
Samples
GraphicsDataSets Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Version
Introduced in version 2010
GraphicsDataSets.Delete Method
Parent Object: GraphicsDataSets
Description
Method that deletes the GraphicsDataSets object.
Syntax
GraphicsDataSets.Delete()
Samples
Name Description
Client
Graphics -
Draw
Range Box
This sample demonstrates the use of client graphics to draw the range box of selected
entities.
Client
graphics
texturebased
color
mapping
This test applies texture coordinates expressing distance from the origin to 'the triangle
mesh of whatever Part you have open. It then creates either a discrete-band or
continuous color mapper and allows you to adjust the values of the mapper to change
the range of values that map to various colors.
Client
Graphics -
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the part.
Areas in between are represented by a smooth blend of color from blue to red.
Client
Graphics -
Line
This sample demonstrates the creation of custom graphics using LineGraphics and
LineStripGraphics. The same set of coordinate data is used for both types of graphics.
Line graphics use two coordinates to define a line, and then the next two coordinates to
define the next line, and so on through the defined coordinates. For the data provided,
this results in gaps in the drawn curve. Line strips use the first two coordinates to define
the first line and then the last point of the first line becomes the first point of the second
line and the next coordinate is used as the end point of the second line. This results in
GraphicsDataSets Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
the set of points being connected by a continuous set of lines, drawing a continuous
curve. This sample also demonstrates two methods of defining the color for client
graphics. In one case it uses an existing appearance asset, and in the other, it explicitly
defines a color and assigns it. To use the sample you need to have an assembly or part
document open. The program has two behaviors: the first time it is run it will draw the
graphics. The second time it is run it deletes the previously drawn graphics.
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
Version
Introduced in version 5
GraphicsDataSets.Item Property
Parent Object: GraphicsDataSets
Description
Returns the specified object from the collection.
Syntax
GraphicsDataSets.Item( Index As Long ) As GraphicsDataSet
Property Value
This is a read only property whose value is a GraphicsDataSet.
Parameters
Name Type Description
Index Long Input Long that specifies the index within the collection of the item to return.
Samples
Name Description
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
GraphicsDataSets Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
GraphicsDataSets.ItemById Property
Parent Object: GraphicsDataSets
Description
Returns the specified object from the collection.
Syntax
GraphicsDataSets.ItemById( DataSetId As Long ) As GraphicsDataSet
Property Value
This is a read only property whose value is a GraphicsDataSet.
Parameters
Name Type Description
DataSetId Long Input Long that specifies the ID of the object within the collection.
Samples
Name Description
Client Graphics - Draw
Range Box
This sample demonstrates the use of client graphics to draw the range
box of selected entities.
Version
Introduced in version 5
GraphicsDataSets.NonTransacting Property
Parent Object: GraphicsDataSets
GraphicsDataSets Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Description
Read-only property that returns whether the creation of this GraphicsDataSets object and all its
associated data is non-transacting.
Syntax
GraphicsDataSets.NonTransacting() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2012
GraphicsDataSets.Parent Property
Parent Object: GraphicsDataSets
Description
Property returns the parent of this object.
Syntax
GraphicsDataSets.Parent() As GraphicsDataSetsCollection
Property Value
This is a read only property whose value is a GraphicsDataSetsCollection.
Version
Introduced in version 5
GraphicsDataSets.SaveWithDocument
Property
Parent Object: GraphicsDataSets
GraphicsDataSets Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
Description
Property that returns whether to save the GraphicsDataSets with the document.
Syntax
GraphicsDataSets.SaveWithDocument() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
GraphicsDataSets.Type Property
Parent Object: GraphicsDataSets
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsDataSets.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsDataSets Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8EA.htm 16/06/2025
GraphicsDataSetsCollection Object
Description
The ClientGraphicsCollection object allows you to create new objects and supports access to
existing GraphicsDataSets objects. See the article in the overview section for more information.
Methods
Name Description
Add
Method that creates a new GraphicsDataSets object. When the GraphicsDataSetsCollection
object is obtained from a Document, this will always create a transient graphics data
object. That is, its lifetime is only for the period of time the document is open.
When the GraphicsDataSetsCollection object is obtained from a ClientFeatureDefinition
object, the graphics data objects created are persistent and will be saved with the
document. In that case it is only intended to be used for graphics that are associated with a
client feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of coordinates defined within the set.
Item Returns an existing GraphicsDataSets object.
NonTransacting
Read-only property that returns whether the creation of this
GraphicsDataSetsCollection object and all its associated data is non-transacting.
Parent Property returns the parent document of this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyDocument.GraphicsDataSetsCollection,
AssemblyDocument.NonTransactingGraphicsDataSetsCollection,
ClientFeatureDefinition.GraphicsDataSetsCollection,
DetailDrawingView.GraphicsDataSetsCollection, Document.GraphicsDataSetsCollection,
Document.NonTransactingGraphicsDataSetsCollection,
DrawingDocument.GraphicsDataSetsCollection,
DrawingDocument.NonTransactingGraphicsDataSetsCollection,
DrawingView.GraphicsDataSetsCollection, FlatPattern.GraphicsDataSetsCollection,
GraphicsDataSets.Parent, PartDocument.GraphicsDataSetsCollection,
PartDocument.NonTransactingGraphicsDataSetsCollection,
PresentationDocument.GraphicsDataSetsCollection,
PresentationDocument.NonTransactingGraphicsDataSetsCollection,
GraphicsDataSetsCollection Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
PresentationScene.GraphicsDataSetsCollection, Publication.GraphicsDataSetsCollection,
SectionDrawingView.GraphicsDataSetsCollection, Sheet.GraphicsDataSetsCollection
Samples
Name Description
Client
Graphics -
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the
part. Areas in between are represented by a smooth blend of color from blue to red.
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
Version
Introduced in version 5
GraphicsDataSetsCollection.Add Method
Parent Object: GraphicsDataSetsCollection
Description
Method that creates a new GraphicsDataSets object. When the GraphicsDataSetsCollection object
is obtained from a Document, this will always create a transient graphics data object. That is, its
lifetime is only for the period of time the document is open.
GraphicsDataSetsCollection Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
When the GraphicsDataSetsCollection object is obtained from a ClientFeatureDefinition object,
the graphics data objects created are persistent and will be saved with the document. In that case it
is only intended to be used for graphics that are associated with a client feature.
Syntax
GraphicsDataSetsCollection.Add( ClientId As String ) As GraphicsDataSets
Parameters
Name Type Description
ClientId String
Specifies the unique identifier for the GraphicsDataSets object. This must be
unique with respect to all other GraphicsDataSets objects. Typically, this is a
GUID in string form, but any string is valid.
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
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the
part. Areas in between are represented by a smooth blend of color from blue to red.
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
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Client
graphics -
The following sample demonstrates creation of point client graphics with a custom
image.
GraphicsDataSetsCollection Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
image in
point
graphics
Version
Introduced in version 5
GraphicsDataSetsCollection.Application
Property
Parent Object: GraphicsDataSetsCollection
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GraphicsDataSetsCollection.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GraphicsDataSetsCollection.Count Property
Parent Object: GraphicsDataSetsCollection
Description
Property that returns the number of coordinates defined within the set.
Syntax
GraphicsDataSetsCollection.Count() As Long
GraphicsDataSetsCollection Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsDataSetsCollection.Item Property
Parent Object: GraphicsDataSetsCollection
Description
Returns an existing GraphicsDataSets object.
Syntax
GraphicsDataSetsCollection.Item( Index As Variant ) As GraphicsDataSets
Property Value
This is a read only property whose value is a GraphicsDataSets.
Parameters
Name Type Description
Index Variant
Specifies which object to return. This can be a Long, which specifies the index in
the collection, or it can be the client id (which is a string). The property will fail in
the case where an Index is provided that does not identify an existing
GraphicsDataSets object.
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
Vertex
Color by Z
Height
This sample demonstrates using client graphics and some other functions that help to
support display control. It uses the currently active part and replaces the part display
with a display where the part's color varies from blue to red where blue is assigned to
the lowest Z portion of the part and red is assigned to the highest Z portion of the
part. Areas in between are represented by a smooth blend of color from blue to red.
GraphicsDataSetsCollection Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
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
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsDataSetsCollection.NonTransacting
Property
Parent Object: GraphicsDataSetsCollection
Description
Read-only property that returns whether the creation of this GraphicsDataSetsCollection object
and all its associated data is non-transacting.
Syntax
GraphicsDataSetsCollection.NonTransacting() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2017
GraphicsDataSetsCollection Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
GraphicsDataSetsCollection.Parent Property
Parent Object: GraphicsDataSetsCollection
Description
Property returns the parent document of this object.
Syntax
GraphicsDataSetsCollection.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GraphicsDataSetsCollection.Type Property
Parent Object: GraphicsDataSetsCollection
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsDataSetsCollection.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsDataSetsCollection Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC2.htm 16/06/2025
GraphicsImageSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsImageSet defines images that can be used when displaying client graphics objects
that support images. Currently this is limited to the GraphicsPoint object.
Methods
Name Description
Add Method that adds a new custom point to the set.
Delete Method that deletes the GraphicsDataSet.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateImageSet, PointGraphics.GetCustomImage,
TriangleGraphics.GetCustomImage
Samples
Name Description
Client graphics - image in
point graphics
The following sample demonstrates creation of point client
graphics with a custom image.
Version
Introduced in version 2011
GraphicsImageSet.Add Method
Parent Object: GraphicsImageSet
GraphicsImageSet Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3930.htm 16/06/2025
Description
Method that adds a new custom point to the set.
Syntax
GraphicsImageSet.Add( Index As Long, Image As IPictureDisp, [TransparentColor] As Variant,
[HotPointX] As Long, [HotPointY] As Long )
Parameters
Name Type Description
Index Long
Input Long that specifies the position you want this image to have
within the set. All images above the specified index will be
shifted up to make room for this image. Specifying any number
greater than the current count of the set will cause the new image
to become the last in the set.
Image IPictureDisp
Input picture to use for the image. This should be the size that you
want the point to appear on the screen.
TransparentColor Variant
Optional input Color object that defines the transparent color
within the image. If this argument is not supplied and the image
provided doesn't define a transparent color, then there won't be
any transparency.
This is an optional argument whose default value is null.
HotPointX Long
Optional input Integer that defines the x coordinate of the hot spot
as defined in pixels of the image where 0,0 is the top-left corner
of the image. The default value of -1 will result in the center of
the image being used.
This is an optional argument whose default value is -1.
HotPointY Long
Optional input Integer that defines the x coordinate of the hot spot
as defined in pixels of the image where 0,0 is the top-left corner
of the image. The default value of -1 will result in the center of
the image being used.
This is an optional argument whose default value is -1.
Samples
Name Description
Client graphics - image in
point graphics
The following sample demonstrates creation of point client
graphics with a custom image.
GraphicsImageSet Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3930.htm 16/06/2025
Version
Introduced in version 2011
GraphicsImageSet.Count Property
Parent Object: GraphicsImageSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsImageSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
GraphicsImageSet.Delete Method
Parent Object: GraphicsImageSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsImageSet.Delete()
Version
Introduced in version 2011
GraphicsImageSet Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3930.htm 16/06/2025
GraphicsImageSet.Id Property
Parent Object: GraphicsImageSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsImageSet.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
GraphicsImageSet.Remove Method
Parent Object: GraphicsImageSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsImageSet.Remove( Index As Long )
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 2011
GraphicsImageSet Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3930.htm 16/06/2025
GraphicsImageSet.Type Property
Parent Object: GraphicsImageSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsImageSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
GraphicsImageSet Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3930.htm 16/06/2025
GraphicsIndexSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsIndexSet object contains a list of indices. This object can be referenced by any
number of graphic primitives to use in defining the list of indices that index into a coordinate set.
Methods
Name Description
Add Method that adds a new index to the set.
Delete Method that deletes the GraphicsDataSet.
GetIndices Method that gets all of the indices of the set.
PutIndices
Method that sets all of the indices of the set. This will replace any existing indices
currently defined for the set.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
IndexValue Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateIndexSet, LineGraphics.ColorIndexSet,
LineGraphics.CoordinateIndexSet, LineStripGraphics.ColorIndexSet,
LineStripGraphics.CoordinateIndexSet, MeshFeatureEntity.ColorIndexSet,
MeshFeatureEntity.CoordinateIndexSet, MeshFeatureEntity.NormalIndexSet,
MeshFeatureEntityProxy.ColorIndexSet, MeshFeatureEntityProxy.CoordinateIndexSet,
MeshFeatureEntityProxy.NormalIndexSet, PointGraphics.CoordinateIndexSet,
PresentationMeshFeatureEntity.ColorIndexSet,
PresentationMeshFeatureEntity.CoordinateIndexSet,
PresentationMeshFeatureEntity.NormalIndexSet, TriangleFanGraphics.ColorIndexSet,
TriangleFanGraphics.CoordinateIndexSet, TriangleFanGraphics.NormalIndexSet,
TriangleFanGraphics.TextureCoordinateIndexSet, TriangleGraphics.ColorIndexSet,
TriangleGraphics.CoordinateIndexSet, TriangleGraphics.NormalIndexSet,
TriangleGraphics.TextureCoordinateIndexSet, TriangleStripGraphics.ColorIndexSet,
TriangleStripGraphics.CoordinateIndexSet, TriangleStripGraphics.NormalIndexSet,
TriangleStripGraphics.TextureCoordinateIndexSet
GraphicsIndexSet Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsIndexSet.Add Method
Parent Object: GraphicsIndexSet
Description
Method that adds a new index to the set.
Syntax
GraphicsIndexSet.Add( Index As Long, IndexValue As Long )
Parameters
Name Type Description
Index Long
Input Long that specifies the position you want this index to be within the set.
All indices above the position will be shifted up to make room for this index.
Specifying any number greater than the current count of the set will cause the
index to become the last in the set. The index set indices are one-based.
IndexValue Long Input Long that specifies the index value.
Samples
Name Description
GraphicsIndexSet Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsIndexSet.Count Property
Parent Object: GraphicsIndexSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsIndexSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsIndexSet.Delete Method
Parent Object: GraphicsIndexSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsIndexSet.Delete()
GraphicsIndexSet Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Version
Introduced in version 5
GraphicsIndexSet.GetIndices Method
Parent Object: GraphicsIndexSet
Description
Method that gets all of the indices of the set.
Syntax
GraphicsIndexSet.GetIndices( IndexValues() As Long )
Parameters
Name Type Description
IndexValues Long
Output array of longs that contains the indices of the set. The array is a single
dimension array. If the array has been declared undimensioned, this method
will redimension its size to be able to contain the complete set of indices. If
the array has been dimensioned, it must be large enough to contain the entire
set of indices or an error will occur.
Version
Introduced in version 5
GraphicsIndexSet.Id Property
Parent Object: GraphicsIndexSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsIndexSet.Id() As Long
GraphicsIndexSet Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsIndexSet.IndexValue Property
Parent Object: GraphicsIndexSet
Description
Allows integer-indexed access to items in the collection.
Syntax
GraphicsIndexSet.IndexValue( Index As Long ) As Long
Property Value
This is a read/write property whose value is a Long.
Parameters
Name Type Description
Index Long
Version
Introduced in version 5
GraphicsIndexSet.PutIndices Method
Parent Object: GraphicsIndexSet
Description
Method that sets all of the indices of the set. This will replace any existing indices currently
defined for the set.
GraphicsIndexSet Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Syntax
GraphicsIndexSet.PutIndices( IndexValues() As Long )
Parameters
Name Type Description
IndexValues Long
Input array of longs that contains the indices into a an index set. The array is a
single dimension array.
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsIndexSet.Remove Method
Parent Object: GraphicsIndexSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsIndexSet.Remove( Index As Long )
GraphicsIndexSet Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 5
GraphicsIndexSet.Type Property
Parent Object: GraphicsIndexSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsIndexSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsIndexSet Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4FC5.htm 16/06/2025
GraphicsNode Object
Description
The GraphicsNode object provides a logical grouping of Client graphics. It is the lowest level of
detail the user will see when selecting objects.
Methods
Name Description
AddComponentGraphics
Method that creates a new ComponentGraphics object based on the
input ComponentDefinition.
AddCurveGraphics Method that creates a new CurveGraphics graphic primitive.
AddLineGraphics Method that creates a new LineGraphics graphic primitive.
AddLineStripGraphics Method that creates a new LineStripGraphics graphic primitive.
AddPointGraphics Method that creates a new PointGraphics graphic primitive.
AddScalableTextGraphics Method that creates a new (scalable) TextGraphics graphic primitive.
AddSurfaceGraphics
Method that creates a new SurfaceGraphics object based on the input
surface(s).
AddTextGraphics Method that creates a new TextGraphics graphic primitive.
AddTriangleFanGraphics Method that creates a new TriangleFanGraphics graphic primitive.
AddTriangleGraphics Method that creates a new TriangleGraphics graphic primitive.
AddTriangleStripGraphics Method that creates a new TriangleStripGraphics graphic primitive.
ClearSlice Method that clears all the slicing applied to the graphics node.
Copy
Method that creates a copy of this . The copy has the same property
values as the original, a duplicate of all of the graphics primitives, and
the CustomRenderStyle has the same values. A new ID is generated
for the copy.
Delete
Method that deletes the GraphicsNode. This also deletes all associated
graphic primitives.
Properties
Name Description
AllowSliceCapping
Specifies that whether this graphics node will display a cap or not
when sliced.
AllowSlicing Specifies that the node participates in slicing of client graphics.
Appearance Gets and sets the appearance asset associated with the graphics node.
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Count
Property that returns the number of graphic primitive objects
associated with this GraphicsNode object.
DisplayName
GraphicsNode Object Page 1 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Read-write Property that gets and sets display name of this graphics
node.
ExcludedFromViewAll Specifies that the node is not considered when doing a view all.
Id Property that returns the Id of the GraphicsNode.
IsTransparentInPlaceEdit
Read-write Property that gets and sets transparency behavior of this
graphics node in inactive mode.
Item Returns the specified graphic entity from the collection.
ItemById
Returns the specified GraphicsPrimitive from the collection using its
Id as index.
OverrideOpacity Override Opacity that controls the transparencty of the node.
Parent Property that returns the object this graphics node belongs to.
RangeBox
Property that returns a Box object which contains the opposing points
of a rectangular box that is guaranteed to enclose this object.
Selectable
Property that specifies whether the GraphicsNode object can be
selected when the Select command is running in Inventor.
Transformation Property that gets and sets the transformation of the GraphicsNode.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible
Read-write property that gets and sets whether the GraphicsNode is
visible or not.
VisibleInActiveEditObject
Read-write property that gets and sets whether this graphics node is
visible when the containing object is not the active edit object. A
value of True indicates that this node is visible only when the
containing object is activated. The value of this property is ignored if
the Visible property on GraphicsNode is False.
VisibleInViews
Property that returns a object containing the Views that this graphics
node is visible in. If there are no views in the list, the node is visible
in all views. Views may be added or removed from the list. This
property is ignored if the Visible property on GraphicsNode is False.
Accessed From
ClientGraphics.AddNode, ClientGraphics.Item, ClientGraphics.ItemById,
ComponentGraphics.Parent, CurveGraphics.Parent, FeatureGraphics.Parent, GraphicsNode.Copy,
GraphicsNodeProxy.Copy, GraphicsNodeProxy.NativeObject, GraphicsPrimitive.Parent,
LineGraphics.Parent, LineStripGraphics.Parent, PointGraphics.Parent, SurfaceGraphics.Parent,
SweepGraphics.Parent, TextGraphics.Parent, TriangleFanGraphics.Parent,
TriangleGraphics.Parent, TriangleStripGraphics.Parent
Derived Classes
GraphicsNodeProxy
Samples
Name Description
Client
Graphics -
This sample demonstrates the use of client graphics to draw the range box of
selected entities.
GraphicsNode Object Page 2 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Draw Range
Box
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
becomes the first point of the second line and the next coordinate is used as the end
point of the second line. This results in the set of points being connected by a
continuous set of lines, drawing a continuous curve. This sample also demonstrates
two methods of defining the color for client graphics. In one case it uses an existing
appearance asset, and in the other, it explicitly defines a color and assigns it. To use
the sample you need to have an assembly or part document open. The program has
two behaviors: the first time it is run it will draw the graphics. The second time it is
run it deletes the previously drawn graphics.
Client
graphics
from SAT
file body
The following sample demonstrates how to display client graphics based on bodies
read in from a SAT file.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
3D Curve
from
Parametric
Curve
Demonstrates the conversion of a 2d parameteric space curve into the equivalent 3d
model space curve. To use this sample you must have a part open. You can select
any face and 3D curves will be drawn on the face using client graphics.
Client
graphics -
image in
point
graphics
The following sample demonstrates creation of point client graphics with a custom
image.
Selection of
Surface
Graphics
Primitives
This demonstrates the ability to select client graphic primitives, by creating
SurfaceGraphics and showing how you can select B-Rep entities within the
graphics. You must have a part or assembly open and select a part of sat file which
will be read in and displayed as client graphics. Depending on our responses to the
program it will create the graphics so that only the node is selectable (which is all
that was supported before), so that all of the primitives are selected, or so that only
certain primitives are selectable (every other face in this case).
GraphicsNode Object Page 3 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
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
Introduced in version 5
GraphicsNode.AddComponentGraphics
Method
Parent Object: GraphicsNode
Description
Method that creates a new ComponentGraphics object based on the input ComponentDefinition.
Syntax
GraphicsNode.AddComponentGraphics( ComponentDefinition As ComponentDefinition ) As
ComponentGraphics
Parameters
Name Type Description
ComponentDefinition ComponentDefinition
Input ComponentDefinition object (either from a
part or an assembly) to create the graphics from.
Version
Introduced in version 2011
GraphicsNode Object Page 4 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNode.AddCurveGraphics Method
Parent Object: GraphicsNode
Description
Method that creates a new CurveGraphics graphic primitive.
Syntax
GraphicsNode.AddCurveGraphics( Curve As Object ) As CurveGraphics
Parameters
Name Type Description
Curve Object
Input object that defines the curve. This can be one of the following: LineSegment,
Circle, Arc3d, EllipseFull, EllipticalArc, BSplineCurve and Polyline3d.
Samples
Name Description
3D Curve from
Parametric Curve
Demonstrates the conversion of a 2d parameteric space curve into the
equivalent 3d model space curve. To use this sample you must have a part
open. You can select any face and 3D curves will be drawn on the face using
client graphics.
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
Create curve
primitives
This sample demonstrates the creation of curve primitives (lines, arcs, circles,
etc.) using client graphics.
Version
Introduced in version 2008
GraphicsNode.AddLineGraphics Method
Parent Object: GraphicsNode
Description
GraphicsNode Object Page 5 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Method that creates a new LineGraphics graphic primitive.
Syntax
GraphicsNode.AddLineGraphics() As LineGraphics
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
GraphicsNode.AddLineStripGraphics
Method
Parent Object: GraphicsNode
Description
Method that creates a new LineStripGraphics graphic primitive.
Syntax
GraphicsNode.AddLineStripGraphics() As LineStripGraphics
GraphicsNode Object Page 6 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
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
GraphicsNode.AddPointGraphics Method
Parent Object: GraphicsNode
Description
Method that creates a new PointGraphics graphic primitive.
Syntax
GraphicsNode.AddPointGraphics() As PointGraphics
Samples
Name Description
Client graphics -
image in point
graphics
The following sample demonstrates creation of point client graphics with a
custom image.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
GraphicsNode Object Page 7 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 5
GraphicsNode.AddScalableTextGraphics
Method
Parent Object: GraphicsNode
Description
Method that creates a new (scalable) TextGraphics graphic primitive.
Syntax
GraphicsNode.AddScalableTextGraphics() As TextGraphics
Version
Introduced in version 2008
GraphicsNode.AddSurfaceGraphics Method
Parent Object: GraphicsNode
Description
Method that creates a new SurfaceGraphics object based on the input surface(s).
Syntax
GraphicsNode.AddSurfaceGraphics( Surfaces As Object ) As SurfaceGraphics
Parameters
Name Type Description
Surfaces Object
Input object that defines the surfaces. This can be one of the following:
SurfaceBody, Face, Faces or a FaceCollection object. If a FaceCollection is
provided, all the Face objects in the collection must belong to the same
SurfaceBody, else an error will occur. Use the various body primitive creation
methods on the TransientBRep object to create bodies for input to this method.
GraphicsNode Object Page 8 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Notes
The input body (or the body associated with the input faces) is copied and the copied body is
displayed. The client graphics does not remain associative to the original input body and the
copied body cannot be edited in any manner.
Samples
Name Description
Client
graphics
from SAT
file body
The following sample demonstrates how to display client graphics based on bodies
read in from a SAT file.
Selection of
Surface
Graphics
Primitives
This demonstrates the ability to select client graphic primitives, by creating
SurfaceGraphics and showing how you can select B-Rep entities within the
graphics. You must have a part or assembly open and select a part of sat file which
will be read in and displayed as client graphics. Depending on our responses to the
program it will create the graphics so that only the node is selectable (which is all
that was supported before), so that all of the primitives are selected, or so that only
certain primitives are selectable (every other face in this case).
Transient
solid body
creation
The following sample demonstrates the creation of a transient solid block body.
The newly created body is then displayed using client graphics in a part.
Client
graphics
creation of
3D primitives
This sample demonstrates the creation of 3D primitives (cylinder, cone, etc.) using
client graphics.
Version
Introduced in version 2009
GraphicsNode.AddTextGraphics Method
Parent Object: GraphicsNode
Description
Method that creates a new TextGraphics graphic primitive.
Syntax
GraphicsNode.AddTextGraphics() As TextGraphics
GraphicsNode Object Page 9 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Samples
Name Description
Text Using Client Graphics
(Simple)
This sample demonstrates creating text using client graphics. It
illustrates the simple case where the text is one font and is one line.
Text Using Client Graphics
(Multiple fonts and lines)
This sample demonstrates creating text using client graphics. It
illustrates the more complex case of changes in font and more than
one line.
Anchored Client Grahics
This sample demonstrates the creation of client graphics that is fully
anchored in a view.
Version
Introduced in version 5
GraphicsNode.AddTriangleFanGraphics
Method
Parent Object: GraphicsNode
Description
Method that creates a new TriangleFanGraphics graphic primitive.
Syntax
GraphicsNode.AddTriangleFanGraphics() As TriangleFanGraphics
Samples
Name Description
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsNode.AddTriangleGraphics Method
Parent Object: GraphicsNode
GraphicsNode Object Page 10 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Description
Method that creates a new TriangleGraphics graphic primitive.
Syntax
GraphicsNode.AddTriangleGraphics() As TriangleGraphics
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Version
Introduced in version 5
GraphicsNode.AddTriangleStripGraphics
Method
Parent Object: GraphicsNode
Description
Method that creates a new TriangleStripGraphics graphic primitive.
Syntax
GraphicsNode.AddTriangleStripGraphics() As TriangleStripGraphics
Samples
Name Description
GraphicsNode Object Page 11 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsNode.AllowSliceCapping Property
Parent Object: GraphicsNode
Description
Specifies that whether this graphics node will display a cap or not when sliced.
Syntax
GraphicsNode.AllowSliceCapping() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
GraphicsNode.AllowSlicing Property
Parent Object: GraphicsNode
Description
Specifies that the node participates in slicing of client graphics.
Syntax
GraphicsNode.AllowSlicing() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
GraphicsNode Object Page 12 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 2010
GraphicsNode.Appearance Property
Parent Object: GraphicsNode
Description
Gets and sets the appearance asset associated with the graphics node.
Syntax
GraphicsNode.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
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
Client
Graphics
- Triangle
This sample demonstrates the creation of client graphics triangles using triange fans
and strips. It does this by drawing a cylinder. The end caps are triangle fans and the
cylinder is made from a triangle strip.
Version
Introduced in version 2014
GraphicsNode Object Page 13 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNode.Application Property
Parent Object: GraphicsNode
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GraphicsNode.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GraphicsNode.ClearSlice Method
Parent Object: GraphicsNode
Description
Method that clears all the slicing applied to the graphics node.
Syntax
GraphicsNode.ClearSlice()
Version
Introduced in version 2010
GraphicsNode.Copy Method
Parent Object: GraphicsNode
GraphicsNode Object Page 14 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Description
Method that creates a copy of this . The copy has the same property values as the original, a
duplicate of all of the graphics primitives, and the CustomRenderStyle has the same values. A new
ID is generated for the copy.
Syntax
GraphicsNode.Copy( Transformation As Matrix, NodeId As Long ) As GraphicsNode
Parameters
Name Type Description
Transformation Matrix Input that defines the transform for the copy.
NodeId Long
Input Long that specifies the identifier for the newly created node. This id
needs to be unique with respect to all other object in this ClientGraphics
object.
Version
Introduced in version 5
GraphicsNode.Count Property
Parent Object: GraphicsNode
Description
Property that returns the number of graphic primitive objects associated with this GraphicsNode
object.
Syntax
GraphicsNode.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsNode Object Page 15 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNode.Delete Method
Parent Object: GraphicsNode
Description
Method that deletes the GraphicsNode. This also deletes all associated graphic primitives.
Syntax
GraphicsNode.Delete()
Version
Introduced in version 5
GraphicsNode.DisplayName Property
Parent Object: GraphicsNode
Description
Read-write Property that gets and sets display name of this graphics node.
Syntax
GraphicsNode.DisplayName() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Selection of
Surface
Graphics
Primitives
This demonstrates the ability to select client graphic primitives, by creating
SurfaceGraphics and showing how you can select B-Rep entities within the
graphics. You must have a part or assembly open and select a part of sat file which
will be read in and displayed as client graphics. Depending on our responses to the
program it will create the graphics so that only the node is selectable (which is all
that was supported before), so that all of the primitives are selected, or so that only
certain primitives are selectable (every other face in this case).
GraphicsNode Object Page 16 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 2012
GraphicsNode.ExcludedFromViewAll
Property
Parent Object: GraphicsNode
Description
Specifies that the node is not considered when doing a view all.
Syntax
GraphicsNode.ExcludedFromViewAll() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
GraphicsNode.Id Property
Parent Object: GraphicsNode
Description
Property that returns the Id of the GraphicsNode.
Syntax
GraphicsNode.Id() As Long
Property Value
This is a read/write property whose value is a Long.
GraphicsNode Object Page 17 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 5
GraphicsNode.IsTransparentInPlaceEdit
Property
Parent Object: GraphicsNode
Description
Read-write Property that gets and sets transparency behavior of this graphics node in inactive
mode.
Syntax
GraphicsNode.IsTransparentInPlaceEdit() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
GraphicsNode.Item Property
Parent Object: GraphicsNode
Description
Returns the specified graphic entity from the collection.
Syntax
GraphicsNode.Item( Index As Long ) As GraphicsPrimitive
Property Value
This is a read only property whose value is a GraphicsPrimitive.
GraphicsNode Object Page 18 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Parameters
Name Type Description
Index Long Specifies which object to return. This is an index into the collection.
Version
Introduced in version 5
GraphicsNode.ItemById Property
Parent Object: GraphicsNode
Description
Returns the specified GraphicsPrimitive from the collection using its Id as index.
Syntax
GraphicsNode.ItemById( DataSetId As Long ) As GraphicsPrimitive
Property Value
This is a read only property whose value is a GraphicsPrimitive.
Parameters
Name Type Description
DataSetId Long Input Long value that indicates the Id of a GraphicsPrimitive object to return.
Version
Introduced in version 2017
GraphicsNode.OverrideOpacity Property
Parent Object: GraphicsNode
Description
Override Opacity that controls the transparencty of the node.
GraphicsNode Object Page 19 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Syntax
GraphicsNode.OverrideOpacity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2013
GraphicsNode.Parent Property
Parent Object: GraphicsNode
Description
Property that returns the object this graphics node belongs to.
Syntax
GraphicsNode.Parent() As ClientGraphics
Property Value
This is a read only property whose value is a ClientGraphics.
Version
Introduced in version 5
GraphicsNode.RangeBox Property
Parent Object: GraphicsNode
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
GraphicsNode Object Page 20 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Syntax
GraphicsNode.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
GraphicsNode.Selectable Property
Parent Object: GraphicsNode
Description
Property that specifies whether the GraphicsNode object can be selected when the Select
command is running in Inventor.
Syntax
GraphicsNode.Selectable() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Client
Graphics -
Draw Range
Box
This sample demonstrates the use of client graphics to draw the range box of
selected entities.
Selection of
Surface
Graphics
Primitives
This demonstrates the ability to select client graphic primitives, by creating
SurfaceGraphics and showing how you can select B-Rep entities within the
graphics. You must have a part or assembly open and select a part of sat file which
will be read in and displayed as client graphics. Depending on our responses to the
program it will create the graphics so that only the node is selectable (which is all
that was supported before), so that all of the primitives are selected, or so that only
certain primitives are selectable (every other face in this case).
GraphicsNode Object Page 21 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 5
GraphicsNode.Transformation Property
Parent Object: GraphicsNode
Description
Property that gets and sets the transformation of the GraphicsNode.
Syntax
GraphicsNode.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
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
GraphicsNode Object Page 22 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNode.Type Property
Parent Object: GraphicsNode
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsNode.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsNode.Visible Property
Parent Object: GraphicsNode
Description
Read-write property that gets and sets whether the GraphicsNode is visible or not.
Syntax
GraphicsNode.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
GraphicsNode Object Page 23 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNode.VisibleInActiveEditObject
Property
Parent Object: GraphicsNode
Description
Read-write property that gets and sets whether this graphics node is visible when the containing
object is not the active edit object. A value of True indicates that this node is visible only when the
containing object is activated. The value of this property is ignored if the Visible property on
GraphicsNode is False.
Syntax
GraphicsNode.VisibleInActiveEditObject() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
GraphicsNode.VisibleInViews Property
Parent Object: GraphicsNode
Description
Property that returns a object containing the Views that this graphics node is visible in. If there are
no views in the list, the node is visible in all views. Views may be added or removed from the list.
This property is ignored if the Visible property on GraphicsNode is False.
Syntax
GraphicsNode.VisibleInViews() As ViewList
Property Value
This is a read only property whose value is a ViewList.
GraphicsNode Object Page 24 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
Version
Introduced in version 9
GraphicsNode Object Page 25 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh682F.htm 16/06/2025
GraphicsNodeProxy Object
Derived from: GraphicsNode Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
AddComponentGraphics
Method that creates a new ComponentGraphics object based on the input
ComponentDefinition.
AddCurveGraphics Method that creates a new CurveGraphics graphic primitive.
AddLineGraphics Method that creates a new LineGraphics graphic primitive.
AddLineStripGraphics Method that creates a new LineStripGraphics graphic primitive.
AddPointGraphics Method that creates a new PointGraphics graphic primitive.
AddScalableTextGraphics Method that creates a new (scalable) TextGraphics graphic primitive.
AddSurfaceGraphics
Method that creates a new SurfaceGraphics object based on the input
surface(s).
AddTextGraphics Method that creates a new TextGraphics graphic primitive.
AddTriangleFanGraphics Method that creates a new TriangleFanGraphics graphic primitive.
AddTriangleGraphics Method that creates a new TriangleGraphics graphic primitive.
AddTriangleStripGraphics Method that creates a new TriangleStripGraphics graphic primitive.
ClearSlice Method that clears all the slicing applied to the graphics node.
Copy
Method that creates a copy of this . The copy has the same property
values as the original, a duplicate of all of the graphics primitives, and
the CustomRenderStyle has the same values. A new ID is generated for
the copy.
Delete
Method that deletes the GraphicsNode. This also deletes all associated
graphic primitives.
Properties
Name Description
AllowSliceCapping
Specifies that whether this graphics node will display a cap or not when
sliced.
AllowSlicing Specifies that the node participates in slicing of client graphics.
Appearance Gets and sets the appearance asset associated with the graphics node.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
GraphicsNodeProxy Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Count Property that returns the number of graphic primitive objects associated
with this GraphicsNode object.
DisplayName
Read-write Property that gets and sets display name of this graphics
node.
ExcludedFromViewAll Specifies that the node is not considered when doing a view all.
Id Property that returns the Id of the GraphicsNode.
IsTransparentInPlaceEdit
Read-write Property that gets and sets transparency behavior of this
graphics node in inactive mode.
Item Returns the specified graphic entity from the collection.
ItemById
Returns the specified GraphicsPrimitive from the collection using its Id
as index.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
OverrideOpacity Override Opacity that controls the transparencty of the node.
Parent Property that returns the object this graphics node belongs to.
RangeBox
Property that returns a Box object which contains the opposing points of
a rectangular box that is guaranteed to enclose this object.
Selectable
Property that specifies whether the GraphicsNode object can be selected
when the Select command is running in Inventor.
Transformation Property that gets and sets the transformation of the GraphicsNode.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible
Read-write property that gets and sets whether the GraphicsNode is
visible or not.
VisibleInActiveEditObject
Read-write property that gets and sets whether this graphics node is
visible when the containing object is not the active edit object. A value of
True indicates that this node is visible only when the containing object is
activated. The value of this property is ignored if the Visible property on
GraphicsNode is False.
VisibleInViews
Property that returns a object containing the Views that this graphics
node is visible in. If there are no views in the list, the node is visible in
all views. Views may be added or removed from the list. This property is
ignored if the Visible property on GraphicsNode is False.
Version
Introduced in version 2008
GraphicsNodeProxy.AddComponentGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new ComponentGraphics object based on the input ComponentDefinition.
GraphicsNodeProxy Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Syntax
GraphicsNodeProxy.AddComponentGraphics( ComponentDefinition As ComponentDefinition )
As ComponentGraphics
Parameters
Name Type Description
ComponentDefinition ComponentDefinition
Input ComponentDefinition object (either from a part
or an assembly) to create the graphics from.
Version
Introduced in version 2011
GraphicsNodeProxy.AddCurveGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new CurveGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddCurveGraphics( Curve As Object ) As CurveGraphics
Parameters
Name Type Description
Curve Object
Input object that defines the curve. This can be one of the following: LineSegment,
Circle, Arc3d, EllipseFull, EllipticalArc, BSplineCurve and Polyline3d.
Version
Introduced in version 2008
GraphicsNodeProxy.AddLineGraphics Method
Parent Object: GraphicsNodeProxy
GraphicsNodeProxy Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Description
Method that creates a new LineGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddLineGraphics() As LineGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddLineStripGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new LineStripGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddLineStripGraphics() As LineStripGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddPointGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new PointGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddPointGraphics() As PointGraphics
GraphicsNodeProxy Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2008
GraphicsNodeProxy.AddScalableTextGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new (scalable) TextGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddScalableTextGraphics() As TextGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddSurfaceGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new SurfaceGraphics object based on the input surface(s).
Syntax
GraphicsNodeProxy.AddSurfaceGraphics( Surfaces As Object ) As SurfaceGraphics
Parameters
Name Type Description
Surfaces Object
Input object that defines the surfaces. This can be one of the following:
SurfaceBody, Face, Faces or a FaceCollection object. If a FaceCollection is
provided, all the Face objects in the collection must belong to the same
SurfaceBody, else an error will occur. Use the various body primitive creation
methods on the TransientBRep object to create bodies for input to this method.
GraphicsNodeProxy Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2009
GraphicsNodeProxy.AddTextGraphics Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new TextGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddTextGraphics() As TextGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddTriangleFanGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new TriangleFanGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddTriangleFanGraphics() As TriangleFanGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddTriangleGraphics
Method
Parent Object: GraphicsNodeProxy
GraphicsNodeProxy Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Description
Method that creates a new TriangleGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddTriangleGraphics() As TriangleGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AddTriangleStripGraphics
Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a new TriangleStripGraphics graphic primitive.
Syntax
GraphicsNodeProxy.AddTriangleStripGraphics() As TriangleStripGraphics
Version
Introduced in version 2008
GraphicsNodeProxy.AllowSliceCapping
Property
Parent Object: GraphicsNodeProxy
Description
Specifies that whether this graphics node will display a cap or not when sliced.
Syntax
GraphicsNodeProxy.AllowSliceCapping() As Boolean
GraphicsNodeProxy Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
GraphicsNodeProxy.AllowSlicing Property
Parent Object: GraphicsNodeProxy
Description
Specifies that the node participates in slicing of client graphics.
Syntax
GraphicsNodeProxy.AllowSlicing() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GraphicsNodeProxy.Appearance Property
Parent Object: GraphicsNodeProxy
Description
Gets and sets the appearance asset associated with the graphics node.
Syntax
GraphicsNodeProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
GraphicsNodeProxy Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2014
GraphicsNodeProxy.Application Property
Parent Object: GraphicsNodeProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GraphicsNodeProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
GraphicsNodeProxy.ClearSlice Method
Parent Object: GraphicsNodeProxy
Description
Method that clears all the slicing applied to the graphics node.
Syntax
GraphicsNodeProxy.ClearSlice()
Version
Introduced in version 2010
GraphicsNodeProxy Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNodeProxy.ContainingOccurrence
Property
Parent Object: GraphicsNodeProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
GraphicsNodeProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2008
GraphicsNodeProxy.Copy Method
Parent Object: GraphicsNodeProxy
Description
Method that creates a copy of this . The copy has the same property values as the original, a duplicate
of all of the graphics primitives, and the CustomRenderStyle has the same values. A new ID is
generated for the copy.
Syntax
GraphicsNodeProxy.Copy( Transformation As Matrix, NodeId As Long ) As GraphicsNode
Parameters
Name Type Description
Transformation Matrix Input that defines the transform for the copy.
NodeId Long
Input Long that specifies the identifier for the newly created node. This id
needs to be unique with respect to all other object in this ClientGraphics
object.
GraphicsNodeProxy Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2008
GraphicsNodeProxy.Count Property
Parent Object: GraphicsNodeProxy
Description
Property that returns the number of graphic primitive objects associated with this GraphicsNode
object.
Syntax
GraphicsNodeProxy.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2008
GraphicsNodeProxy.Delete Method
Parent Object: GraphicsNodeProxy
Description
Method that deletes the GraphicsNode. This also deletes all associated graphic primitives.
Syntax
GraphicsNodeProxy.Delete()
Version
Introduced in version 2008
GraphicsNodeProxy Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNodeProxy.DisplayName Property
Parent Object: GraphicsNodeProxy
Description
Read-write Property that gets and sets display name of this graphics node.
Syntax
GraphicsNodeProxy.DisplayName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2012
GraphicsNodeProxy.ExcludedFromViewAll
Property
Parent Object: GraphicsNodeProxy
Description
Specifies that the node is not considered when doing a view all.
Syntax
GraphicsNodeProxy.ExcludedFromViewAll() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GraphicsNodeProxy Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNodeProxy.Id Property
Parent Object: GraphicsNodeProxy
Description
Property that returns the Id of the GraphicsNode.
Syntax
GraphicsNodeProxy.Id() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2008
GraphicsNodeProxy.IsTransparentInPlaceEdit
Property
Parent Object: GraphicsNodeProxy
Description
Read-write Property that gets and sets transparency behavior of this graphics node in inactive mode.
Syntax
GraphicsNodeProxy.IsTransparentInPlaceEdit() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
GraphicsNodeProxy Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNodeProxy.Item Property
Parent Object: GraphicsNodeProxy
Description
Returns the specified graphic entity from the collection.
Syntax
GraphicsNodeProxy.Item( Index As Long ) As GraphicsPrimitive
Property Value
This is a read only property whose value is a GraphicsPrimitive.
Parameters
Name Type Description
Index Long Specifies which object to return. This is an index into the collection.
Version
Introduced in version 2008
GraphicsNodeProxy.ItemById Property
Parent Object: GraphicsNodeProxy
Description
Returns the specified GraphicsPrimitive from the collection using its Id as index.
Syntax
GraphicsNodeProxy.ItemById( DataSetId As Long ) As GraphicsPrimitive
Property Value
This is a read only property whose value is a GraphicsPrimitive.
Parameters
Name Type Description
GraphicsNodeProxy Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
DataSetId Long Input Long value that indicates the Id of a GraphicsPrimitive object to return.
Version
Introduced in version 2017
GraphicsNodeProxy.NativeObject Property
Parent Object: GraphicsNodeProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
GraphicsNodeProxy.NativeObject() As GraphicsNode
Property Value
This is a read only property whose value is a GraphicsNode.
Version
Introduced in version 2008
GraphicsNodeProxy.OverrideOpacity Property
Parent Object: GraphicsNodeProxy
Description
Override Opacity that controls the transparencty of the node.
Syntax
GraphicsNodeProxy.OverrideOpacity() As Double
Property Value
This is a read/write property whose value is a Double.
GraphicsNodeProxy Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2013
GraphicsNodeProxy.Parent Property
Parent Object: GraphicsNodeProxy
Description
Property that returns the object this graphics node belongs to.
Syntax
GraphicsNodeProxy.Parent() As ClientGraphics
Property Value
This is a read only property whose value is a ClientGraphics.
Version
Introduced in version 2008
GraphicsNodeProxy.RangeBox Property
Parent Object: GraphicsNodeProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
GraphicsNodeProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
GraphicsNodeProxy Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2008
GraphicsNodeProxy.Selectable Property
Parent Object: GraphicsNodeProxy
Description
Property that specifies whether the GraphicsNode object can be selected when the Select command is
running in Inventor.
Syntax
GraphicsNodeProxy.Selectable() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GraphicsNodeProxy.Transformation Property
Parent Object: GraphicsNodeProxy
Description
Property that gets and sets the transformation of the GraphicsNode.
Syntax
GraphicsNodeProxy.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
GraphicsNodeProxy Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2008
GraphicsNodeProxy.Type Property
Parent Object: GraphicsNodeProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsNodeProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
GraphicsNodeProxy.Visible Property
Parent Object: GraphicsNodeProxy
Description
Read-write property that gets and sets whether the GraphicsNode is visible or not.
Syntax
GraphicsNodeProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GraphicsNodeProxy Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNodeProxy.VisibleInActiveEditObject
Property
Parent Object: GraphicsNodeProxy
Description
Read-write property that gets and sets whether this graphics node is visible when the containing
object is not the active edit object. A value of True indicates that this node is visible only when the
containing object is activated. The value of this property is ignored if the Visible property on
GraphicsNode is False.
Syntax
GraphicsNodeProxy.VisibleInActiveEditObject() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
GraphicsNodeProxy.VisibleInViews Property
Parent Object: GraphicsNodeProxy
Description
Property that returns a object containing the Views that this graphics node is visible in. If there are no
views in the list, the node is visible in all views. Views may be added or removed from the list. This
property is ignored if the Visible property on GraphicsNode is False.
Syntax
GraphicsNodeProxy.VisibleInViews() As ViewList
Property Value
This is a read only property whose value is a ViewList.
GraphicsNodeProxy Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
Version
Introduced in version 2008
GraphicsNodeProxy Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8DE7.htm 16/06/2025
GraphicsNormalSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsNormalSet object contains a list of normals. This object can be referenced by any
number of graphic primitives to help define the normals to be used when rendering.
Methods
Name Description
Add Method that adds a new normal to the set.
Delete Method that deletes the GraphicsDataSet.
GetNormals Method that gets all of the normals of the set.
PutNormals
Method that sets all of the normals of the set. This will replace any existing normals
currently defined for the set.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
Normal Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateNormalSet, MeshFeatureEntity.NormalSet,
MeshFeatureEntityProxy.NormalSet, PresentationMeshFeatureEntity.NormalSet,
TriangleFanGraphics.NormalSet, TriangleGraphics.NormalSet, TriangleStripGraphics.NormalSet
Samples
Name Description
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
GraphicsNormalSet Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsNormalSet.Add Method
Parent Object: GraphicsNormalSet
Description
Method that adds a new normal to the set.
Syntax
GraphicsNormalSet.Add( Index As Long, Normal As UnitVector )
Parameters
Name Type Description
Index Long
Specifies the position you want this normal to have within the set. All
normals above the position will be shifted up to make room for this normal.
Specifying any number greater than the current count of the set will cause the
normal to become the last in the set. The normal set indices are one-based,
meaning the first normal in the set has an index of one.
Normal UnitVector Input object that specifies the normal to add to the set.
Samples
Name Description
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsNormalSet Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
GraphicsNormalSet.Count Property
Parent Object: GraphicsNormalSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsNormalSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsNormalSet.Delete Method
Parent Object: GraphicsNormalSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsNormalSet.Delete()
Version
Introduced in version 5
GraphicsNormalSet.GetNormals Method
Parent Object: GraphicsNormalSet
Description
GraphicsNormalSet Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
Method that gets all of the normals of the set.
Syntax
GraphicsNormalSet.GetNormals( Normals() As Double )
Parameters
Name Type Description
Normals Double
Input/output array of Doubles that contains the x-y-z values of the normals. The
array is a single dimension array containing sequential x, y, and z values. If the
array has been declared undimensioned, this method will redimension its size to
be able to contain the complete set of normals. If the array has been
dimensioned, it must be large enough to contain the entire set of normals or an
error will occur.
Version
Introduced in version 5
GraphicsNormalSet.Id Property
Parent Object: GraphicsNormalSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsNormalSet.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
GraphicsNormalSet.Normal Property
Parent Object: GraphicsNormalSet
GraphicsNormalSet Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
Description
Allows integer-indexed access to items in the collection.
Syntax
GraphicsNormalSet.Normal( Index As Long ) As UnitVector
Property Value
This is a read/write property whose value is a UnitVector.
Parameters
Name Type Description
Index Long
Version
Introduced in version 5
GraphicsNormalSet.PutNormals Method
Parent Object: GraphicsNormalSet
Description
Method that sets all of the normals of the set. This will replace any existing normals currently
defined for the set.
Syntax
GraphicsNormalSet.PutNormals( Normals() As Double )
Parameters
Name Type Description
Normals Double
Input/output array of Doubles that contains the x-y-z values of the normals. The
array is a single dimension array containing sequential x, y, and z values.
Samples
Name Description
GraphicsNormalSet Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
Client
graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the
triangle mesh of whatever Part you have open. It then creates either a discreteband
or continuous color mapper and allows you to adjust the values of the
mapper to change the range of values that map to various colors.
Client
Graphics -
Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth blend
of color from blue to red.
Client
Graphics -
Triangle
This sample demonstrates the creation of client graphics triangles using triange
fans and strips. It does this by drawing a cylinder. The end caps are triangle fans
and the cylinder is made from a triangle strip.
Version
Introduced in version 5
GraphicsNormalSet.Remove Method
Parent Object: GraphicsNormalSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsNormalSet.Remove( Index As Long )
Parameters
Name Type Description
Index Long
Specifies the index you want to remove from the set. All coordinates above the Index
will be shifted down. The coordinate set indices are one-based.
Version
Introduced in version 5
GraphicsNormalSet.Type Property
Parent Object: GraphicsNormalSet
GraphicsNormalSet Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsNormalSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsNormalSet Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB40D.htm 16/06/2025
GraphicsPrimitive Object
Description
The GraphicsPrimitive object is the base class for all the various primitive types of client graphics.
Methods
Name Description
Delete Method that deletes the graphics primitive.
GetViewSpaceAnchor
Method that gets the anchor information of the graphics object. This
method returns an error if the 'Anchored' property returns False.
RemoveViewSpaceAnchor
The RemoveViewSpaceAnchor method removes the view space
anchor from the object, and sets the Anchored property to false.
SetViewSpaceAnchor
Method that anchors the graphics object at the specified point in view
space. The Anchored property is set to True.
Properties
Name Description
Anchored
Property that indicates whether this graphics primitive is anchored in view space.
This property can only be set to False. The Anchored property is automatically set to
True by the SetViewSpaceAnchor method.
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Id Read-only property that returns the Id of the object.
Parent
Property that returns the parent object from whom this object can logically be
reached.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsNode.Item, GraphicsNode.ItemById, GraphicsNodeProxy.Item,
GraphicsNodeProxy.ItemById
Derived Classes
ComponentGraphics, CurveGraphics, LineGraphics, LineStripGraphics, PointGraphics,
SurfaceGraphics, TextGraphics, TriangleFanGraphics, TriangleGraphics, TriangleStripGraphics
GraphicsPrimitive Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Version
Introduced in version 5
GraphicsPrimitive.Anchored Property
Parent Object: GraphicsPrimitive
Description
Property that indicates whether this graphics primitive is anchored in view space. This property
can only be set to False. The Anchored property is automatically set to True by the
SetViewSpaceAnchor method.
Syntax
GraphicsPrimitive.Anchored() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
GraphicsPrimitive.Application Property
Parent Object: GraphicsPrimitive
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GraphicsPrimitive.Application() As Object
Property Value
This is a read only property whose value is an Object.
GraphicsPrimitive Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Version
Introduced in version 5
GraphicsPrimitive.Delete Method
Parent Object: GraphicsPrimitive
Description
Method that deletes the graphics primitive.
Syntax
GraphicsPrimitive.Delete()
Version
Introduced in version 5
GraphicsPrimitive.GetViewSpaceAnchor
Method
Parent Object: GraphicsPrimitive
Description
Method that gets the anchor information of the graphics object. This method returns an error if the
'Anchored' property returns False.
Syntax
GraphicsPrimitive.GetViewSpaceAnchor( Origin As Point, Anchor As Point2d,
AnchorRelativeTo As ViewLayoutEnum )
Parameters
Name Type Description
Origin Point Output that specifies the origin of the coordinate system.
Anchor Point2d
Output that indicates which point is unaffected by the
transform behavior.
AnchorRelativeTo ViewLayoutEnum
GraphicsPrimitive Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Output constant indicating which corner of the view the
anchor is relative to.
Version
Introduced in version 9
GraphicsPrimitive.Id Property
Parent Object: GraphicsPrimitive
Description
Read-only property that returns the Id of the object.
Syntax
GraphicsPrimitive.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2017
GraphicsPrimitive.Parent Property
Parent Object: GraphicsPrimitive
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
GraphicsPrimitive.Parent() As GraphicsNode
Property Value
This is a read only property whose value is a GraphicsNode.
GraphicsPrimitive Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Version
Introduced in version 5
GraphicsPrimitive.RangeBox Property
Parent Object: GraphicsPrimitive
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
GraphicsPrimitive.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
GraphicsPrimitive.RemoveViewSpaceAnchor
Method
Parent Object: GraphicsPrimitive
Description
The RemoveViewSpaceAnchor method removes the view space anchor from the object, and sets
the Anchored property to false.
Syntax
GraphicsPrimitive.RemoveViewSpaceAnchor()
GraphicsPrimitive Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Version
Introduced in version 9
GraphicsPrimitive.SetViewSpaceAnchor
Method
Parent Object: GraphicsPrimitive
Description
Method that anchors the graphics object at the specified point in view space. The Anchored
property is set to True.
Syntax
GraphicsPrimitive.SetViewSpaceAnchor( Origin As Point, Anchor As Point2d,
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
GraphicsPrimitive.Type Property
Parent Object: GraphicsPrimitive
Description
Returns an ObjectTypeEnum indicating this object's type.
GraphicsPrimitive Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
Syntax
GraphicsPrimitive.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GraphicsPrimitive Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCB7D.htm 16/06/2025
GraphicsTextureCoordinateSet Object
Derived from: GraphicsDataSet Object
Description
The GraphicsTextureCoordinateSet object contains a list of coordinate values
Methods
Name Description
Add Method that adds a single coordinate to the set.
Delete Method that deletes the GraphicsDataSet.
GetCoordinates Method that gets all of the coordinates of the set.
PutCoordinates
Method that sets all of the coordinates of the set. This will replace all existing coordinates
currently defined for the set.
Remove Method that removes a coordinate from the set.
Properties
Name Description
Coordinate Read-write property that gets and sets the value of a specific coordinate within the set.
Count Property that returns the number of objects in this collection.
Id Property returning the unique id of this GraphicsDataSet.
TextureDimension Read-write property that defines the dimension of the texture coordinate array.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GraphicsDataSets.CreateTextureCoordinateSet, TriangleFanGraphics.TextureCoordinateSet,
TriangleGraphics.TextureCoordinateSet, TriangleStripGraphics.TextureCoordinateSet
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the triangle
mesh of whatever Part you have open. It then creates either a discrete-band or
continuous color mapper and allows you to adjust the values of the mapper to change
the range of values that map to various colors.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
GraphicsTextureCoordinateSet.Add Method
Parent Object: GraphicsTextureCoordinateSet
Description
Method that adds a single coordinate to the set.
Syntax
GraphicsTextureCoordinateSet.Add( Index As Long, Coordinate As Variant )
Parameters
Name Type Description
Index Long
Specifies the index you want this coordinate to be within the set. All coordinates
above the Index will be shifted up to make room for this index. Specifying any
number greater than the current count of the set will cause the coordinate to become
the last in the set. The coordinate set indices are one-based.
Coordinate Variant
Input Double that specifies the value of the coordinate to add. The input is currently
limited to double values.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.Coordinate
Property
Parent Object: GraphicsTextureCoordinateSet
Description
Read-write property that gets and sets the value of a specific coordinate within the set.
Syntax
GraphicsTextureCoordinateSet.Coordinate( Index As Long ) As Variant
Property Value
This is a read/write property whose value is a Variant.
Parameters
Name Type Description
GraphicsTextureCoordinateSet Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
Index Long
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.Count Property
Parent Object: GraphicsTextureCoordinateSet
Description
Property that returns the number of objects in this collection.
Syntax
GraphicsTextureCoordinateSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.Delete Method
Parent Object: GraphicsTextureCoordinateSet
Description
Method that deletes the GraphicsDataSet.
Syntax
GraphicsTextureCoordinateSet.Delete()
Version
Introduced in version 2010
GraphicsTextureCoordinateSet Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
GraphicsTextureCoordinateSet.GetCoordinates
Method
Parent Object: GraphicsTextureCoordinateSet
Description
Method that gets all of the coordinates of the set.
Syntax
GraphicsTextureCoordinateSet.GetCoordinates( Coordinates() As Double )
Parameters
Name Type Description
Coordinates Double
Output array of doubles that contains the scalar texture coordinates. The array is a
single dimension array containing texture coordinates. If the array has been declared
undimensioned, this method will redimension its size to contain the complete set of
coordinates. If the array has been dimensioned, it must be large enough to contain the
entire set of coordinates or an error will occur.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.Id Property
Parent Object: GraphicsTextureCoordinateSet
Description
Property returning the unique id of this GraphicsDataSet.
Syntax
GraphicsTextureCoordinateSet.Id() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
GraphicsTextureCoordinateSet.PutCoordinates
Method
Parent Object: GraphicsTextureCoordinateSet
Description
Method that sets all of the coordinates of the set. This will replace all existing coordinates currently defined
for the set.
Syntax
GraphicsTextureCoordinateSet.PutCoordinates( Coordinates() As Double )
Parameters
Name Type Description
Coordinates Double Input array of doubles that contains value of the texture coordinates.
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the triangle
mesh of whatever Part you have open. It then creates either a discrete-band or
continuous color mapper and allows you to adjust the values of the mapper to change
the range of values that map to various colors.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.Remove Method
Parent Object: GraphicsTextureCoordinateSet
Description
Method that removes a coordinate from the set.
Syntax
GraphicsTextureCoordinateSet.Remove( Index As Long )
Parameters
Name Type Description
GraphicsTextureCoordinateSet Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
Index Long Specifies the index you want to remove from the set. All coordinates above the Index will be
shifted down. The coordinate set indices are one-based.
Version
Introduced in version 2010
GraphicsTextureCoordinateSet.TextureDimension
Property
Parent Object: GraphicsTextureCoordinateSet
Description
Read-write property that defines the dimension of the texture coordinate array.
Syntax
GraphicsTextureCoordinateSet.TextureDimension() As TextureDimensionEnum
Property Value
This is a read/write property whose value is a TextureDimensionEnum.
Version
Introduced in version 2012
GraphicsTextureCoordinateSet.Type Property
Parent Object: GraphicsTextureCoordinateSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GraphicsTextureCoordinateSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
GraphicsTextureCoordinateSet Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
Version
Introduced in version 2010
GraphicsTextureCoordinateSet Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE30C.htm 16/06/2025
GrillFeature Object
Derived from: PartFeature Object
Description
The GrillFeature object represents a grill feature within the model.
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
GrillFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
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
GrillFeatureProxy.NativeObject, GrillFeatures.Item
Derived Classes
GrillFeatureProxy
Version
Introduced in version 2010
GrillFeature.Adaptive Property
Parent Object: GrillFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
GrillFeature.Adaptive() As Boolean
GrillFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeature.Appearance Property
Parent Object: GrillFeature
Description
Gets and sets the current appearance of the feature.
Syntax
GrillFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
GrillFeature.AppearanceSourceType
Property
Parent Object: GrillFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
GrillFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
GrillFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
GrillFeature.Application Property
Parent Object: GrillFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GrillFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
GrillFeature.AttributeSets Property
Parent Object: GrillFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GrillFeature.AttributeSets() As AttributeSets
GrillFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
GrillFeature.ConsumeInputs Property
Parent Object: GrillFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
GrillFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeature.Delete Method
Parent Object: GrillFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
GrillFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
GrillFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
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
GrillFeature.ExtendedName Property
Parent Object: GrillFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
GrillFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
GrillFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2012
GrillFeature.Faces Property
Parent Object: GrillFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
GrillFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
GrillFeature.FeatureDimensions Property
Parent Object: GrillFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
GrillFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
GrillFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeature.GetReferenceKey Method
Parent Object: GrillFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
GrillFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
GrillFeature.GetSuppressionCondition
Method
Parent Object: GrillFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
GrillFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Syntax
GrillFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
GrillFeature.HealthStatus Property
Parent Object: GrillFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
GrillFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
GrillFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
GrillFeature.IsOwnedByFeature Property
Parent Object: GrillFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
GrillFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeature.Name Property
Parent Object: GrillFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
GrillFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
GrillFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
GrillFeature.OwnedBy Property
Parent Object: GrillFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
GrillFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
GrillFeature.Parameters Property
Parent Object: GrillFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
GrillFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
GrillFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
GrillFeature.Parent Property
Parent Object: GrillFeature
Description
Property that returns the parent of the feature.
Syntax
GrillFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
GrillFeature.Participants Property
Parent Object: GrillFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
GrillFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
GrillFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
GrillFeature.RangeBox Property
Parent Object: GrillFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
GrillFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
GrillFeature.RemoveParticipant Method
Parent Object: GrillFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
GrillFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
GrillFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeature.SetAffectedBodies Method
Parent Object: GrillFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
GrillFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
GrillFeature.SetEndOfPart Method
Parent Object: GrillFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
GrillFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
GrillFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
GrillFeature.SetSuppressionCondition
Method
Parent Object: GrillFeature
Description
Method that sets the suppression condition for the feature.
Syntax
GrillFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
GrillFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeature.Shared Property
Parent Object: GrillFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
GrillFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeature.Suppressed Property
Parent Object: GrillFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
GrillFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
GrillFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeature.SurfaceBodies Property
Parent Object: GrillFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
GrillFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
GrillFeature.Type Property
Parent Object: GrillFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GrillFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
GrillFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDE7.htm 16/06/2025
GrillFeatureProxy Object
Derived from: GrillFeature Object
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
GrillFeatureProxy Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
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
GrillFeatureProxy.Adaptive Property
Parent Object: GrillFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
GrillFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
GrillFeatureProxy Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.Appearance Property
Parent Object: GrillFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
GrillFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
GrillFeatureProxy.AppearanceSourceType
Property
Parent Object: GrillFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
GrillFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
GrillFeatureProxy Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2014
GrillFeatureProxy.Application Property
Parent Object: GrillFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GrillFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
GrillFeatureProxy.AttributeSets Property
Parent Object: GrillFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GrillFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
GrillFeatureProxy Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.ConsumeInputs Property
Parent Object: GrillFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
GrillFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeatureProxy.ContainingOccurrence
Property
Parent Object: GrillFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
GrillFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
GrillFeatureProxy Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.Delete Method
Parent Object: GrillFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
GrillFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
GrillFeatureProxy Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.ExtendedName Property
Parent Object: GrillFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
GrillFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
GrillFeatureProxy.Faces Property
Parent Object: GrillFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
GrillFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
GrillFeatureProxy Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.FeatureDimensions
Property
Parent Object: GrillFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
GrillFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
GrillFeatureProxy.GetReferenceKey Method
Parent Object: GrillFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
GrillFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
GrillFeatureProxy Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
GrillFeatureProxy.GetSuppressionCondition
Method
Parent Object: GrillFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
GrillFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
GrillFeatureProxy Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.HealthStatus Property
Parent Object: GrillFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
GrillFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
GrillFeatureProxy.IsOwnedByFeature
Property
Parent Object: GrillFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
GrillFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
GrillFeatureProxy Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.Name Property
Parent Object: GrillFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
GrillFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
GrillFeatureProxy.NativeObject Property
Parent Object: GrillFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
GrillFeatureProxy.NativeObject() As GrillFeature
Property Value
This is a read only property whose value is a GrillFeature.
GrillFeatureProxy Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.OwnedBy Property
Parent Object: GrillFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
GrillFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
GrillFeatureProxy.Parameters Property
Parent Object: GrillFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
GrillFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
GrillFeatureProxy Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.Parent Property
Parent Object: GrillFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
GrillFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
GrillFeatureProxy.Participants Property
Parent Object: GrillFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
GrillFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
GrillFeatureProxy Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.RangeBox Property
Parent Object: GrillFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
GrillFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
GrillFeatureProxy.RemoveParticipant
Method
Parent Object: GrillFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
GrillFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
GrillFeatureProxy Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2010
GrillFeatureProxy.SetAffectedBodies Method
Parent Object: GrillFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
GrillFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
GrillFeatureProxy.SetEndOfPart Method
Parent Object: GrillFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
GrillFeatureProxy.SetEndOfPart( Before As Boolean )
GrillFeatureProxy Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
GrillFeatureProxy.SetSuppressionCondition
Method
Parent Object: GrillFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
GrillFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
GrillFeatureProxy Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 2010
GrillFeatureProxy.Shared Property
Parent Object: GrillFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
GrillFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GrillFeatureProxy.Suppressed Property
Parent Object: GrillFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
GrillFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
GrillFeatureProxy Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy.SurfaceBodies Property
Parent Object: GrillFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
GrillFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
GrillFeatureProxy.Type Property
Parent Object: GrillFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GrillFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
GrillFeatureProxy Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
Version
Introduced in version 2010
GrillFeatureProxy Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FB7.htm 16/06/2025
GrillFeatures Object
Description
The GrillFeatures collection object provides access to existing grill features.
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
PartFeatures.GrillFeatures, SheetMetalFeatures.GrillFeatures
Version
Introduced in version 2010
GrillFeatures.Application Property
Parent Object: GrillFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GrillFeatures.Application() As Object
GrillFeatures Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42DF.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
GrillFeatures.Count Property
Parent Object: GrillFeatures
Description
Property that returns the number of items in this collection.
Syntax
GrillFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
GrillFeatures.Item Property
Parent Object: GrillFeatures
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
Syntax
GrillFeatures.Item( Index As Variant ) As GrillFeature
GrillFeatures Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42DF.htm 16/06/2025
Property Value
This is a read only property whose value is a GrillFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a String
indicating the feature name. If an out of range index or a name of a non-existent
feature is provided, an error occurs.
Version
Introduced in version 2010
GrillFeatures.Type Property
Parent Object: GrillFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GrillFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
GrillFeatures Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42DF.htm 16/06/2025
GripSnapOptions Object
Description
The GripSnapOptions object provides access to various grip snap related application level options. This object is obtained from the
GeneralOptions.GripSnapOptions property.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
DisplayObjectInOriginalLocation
Gets and sets whether or not to maintain a static reference image of the selection set while
transient graphics represent the translation or rotation in drag and snap and reference
geometry workflows.
SelectGroundedComponentsAndWorkGeometry
Gets and sets whether grounded components and work geometries can be included for
move/rotate.
ShowDegreesOfFreedom
Gets and sets whether or not to add boxes to the end of the heads-up display (HUD) for
translational and rotational degrees of freedom related to the active component or assembly
selection.
Type Returns an ObjectTypeEnum indicating this object's type.
UseFreeDrag
Gets and sets whether or not to use the free drag option for each geometry type, skipping the
step to select Free Drag from the Grip Snap move options.
UseTemporaryConstraints
Gets and sets whether or not to use transient constraints during multiple manipulations of the
same selection set.
Accessed From
GeneralOptions.GripSnapOptions
Version
Introduced in version 2010
GripSnapOptions.Application Property
Parent Object: GripSnapOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
Syntax
GripSnapOptions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
GripSnapOptions.DisplayObjectInOriginalLocation Property
Parent Object: GripSnapOptions
Description
GripSnapOptions Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5A5F.htm 16/06/2025
Gets and sets whether or not to maintain a static reference image of the selection set while transient graphics represent the translation or rotation
in drag and snap and reference geometry workflows.
Syntax
GripSnapOptions.DisplayObjectInOriginalLocation() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GripSnapOptions.SelectGroundedComponentsAndWorkGeometry
Property
Parent Object: GripSnapOptions
Description
Gets and sets whether grounded components and work geometries can be included for move/rotate.
Syntax
GripSnapOptions.SelectGroundedComponentsAndWorkGeometry() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GripSnapOptions.ShowDegreesOfFreedom Property
Parent Object: GripSnapOptions
Description
Gets and sets whether or not to add boxes to the end of the heads-up display (HUD) for translational and rotational degrees of freedom related
to the active component or assembly selection.
Syntax
GripSnapOptions.ShowDegreesOfFreedom() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GripSnapOptions.Type Property
Parent Object: GripSnapOptions
GripSnapOptions Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5A5F.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GripSnapOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
GripSnapOptions.UseFreeDrag Property
Parent Object: GripSnapOptions
Description
Gets and sets whether or not to use the free drag option for each geometry type, skipping the step to select Free Drag from the Grip Snap move
options.
Syntax
GripSnapOptions.UseFreeDrag() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GripSnapOptions.UseTemporaryConstraints Property
Parent Object: GripSnapOptions
Description
Gets and sets whether or not to use transient constraints during multiple manipulations of the same selection set.
Syntax
GripSnapOptions.UseTemporaryConstraints() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
GripSnapOptions Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5A5F.htm 16/06/2025
GroundConstraint Object
Derived from: GeometricConstraint Object
Description
The GroundConstraint object represents a constraint that grounds an entity.
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
Entity Property that returns entity being grounded.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeometricConstraints.AddGround, GroundConstraintProxy.NativeObject
Derived Classes
GroundConstraintProxy
Version
Introduced in version 5
GroundConstraint.Application Property
Parent Object: GroundConstraint
GroundConstraint Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh71B0.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GroundConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
GroundConstraint.AttributeSets Property
Parent Object: GroundConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GroundConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
GroundConstraint.Deletable Property
Parent Object: GroundConstraint
GroundConstraint Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh71B0.htm 16/06/2025
Description
Indicates whether this object is deletable.
Syntax
GroundConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GroundConstraint.Delete Method
Parent Object: GroundConstraint
Description
Method that deletes the constraint.
Syntax
GroundConstraint.Delete()
Version
Introduced in version 5
GroundConstraint.Entity Property
Parent Object: GroundConstraint
Description
Property that returns entity being grounded.
GroundConstraint Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh71B0.htm 16/06/2025
Syntax
GroundConstraint.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 5
GroundConstraint.GetReferenceKey Method
Parent Object: GroundConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
GroundConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
GroundConstraint.Parent Property
GroundConstraint Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh71B0.htm 16/06/2025
Parent Object: GroundConstraint
Description
Property that returns the parent sketch of the object.
Syntax
GroundConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 5
GroundConstraint.Type Property
Parent Object: GroundConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GroundConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
GroundConstraint Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh71B0.htm 16/06/2025
GroundConstraint3D Object
Derived from: GeometricConstraint3D Object
Description
The GroundConstraint3D object represents a constraint that grounds an entity.
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
Entity Property that returns the entity being grounded.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
GeometricConstraints3D.AddGround, GroundConstraint3DProxy.NativeObject
Derived Classes
GroundConstraint3DProxy
Version
Introduced in version 10
GroundConstraint3D.Application Property
Parent Object: GroundConstraint3D
GroundConstraint3D Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh89AC.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
GroundConstraint3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
GroundConstraint3D.AttributeSets Property
Parent Object: GroundConstraint3D
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GroundConstraint3D.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
GroundConstraint3D.Deletable Property
Parent Object: GroundConstraint3D
GroundConstraint3D Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh89AC.htm 16/06/2025
Description
Indicates whether this object can be deleted.
Syntax
GroundConstraint3D.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GroundConstraint3D.Delete Method
Parent Object: GroundConstraint3D
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
GroundConstraint3D.Delete()
Version
Introduced in version 10
GroundConstraint3D.Entity Property
Parent Object: GroundConstraint3D
Description
Property that returns the entity being grounded.
GroundConstraint3D Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh89AC.htm 16/06/2025
Syntax
GroundConstraint3D.Entity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
GroundConstraint3D.GetReferenceKey
Method
Parent Object: GroundConstraint3D
Description
Method that generates and returns the reference key for this entity.
Syntax
GroundConstraint3D.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
GroundConstraint3D Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh89AC.htm 16/06/2025
GroundConstraint3D.Parent Property
Parent Object: GroundConstraint3D
Description
Property that returns the parent sketch of the object.
Syntax
GroundConstraint3D.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 10
GroundConstraint3D.Type Property
Parent Object: GroundConstraint3D
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GroundConstraint3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
GroundConstraint3D Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh89AC.htm 16/06/2025
GroundConstraint3DProxy Object
Derived from: GroundConstraint3D Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the constraint. In the case of coincident constraint, all the connected
lines are disconnected and the constraint is deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Deletable Indicates whether this object can be deleted.
Entity Property that returns the entity being grounded.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 10
GroundConstraint3DProxy.Application Property
Parent Object: GroundConstraint3DProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GroundConstraint3DProxy.Application() As Object
GroundConstraint3DProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
GroundConstraint3DProxy.AttributeSets
Property
Parent Object: GroundConstraint3DProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GroundConstraint3DProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
GroundConstraint3DProxy.ContainingOccurrence
Property
Parent Object: GroundConstraint3DProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Syntax
GroundConstraint3DProxy.ContainingOccurrence() As ComponentOccurrence
GroundConstraint3DProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 10
GroundConstraint3DProxy.Deletable Property
Parent Object: GroundConstraint3DProxy
Description
Indicates whether this object can be deleted.
Syntax
GroundConstraint3DProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GroundConstraint3DProxy.Delete Method
Parent Object: GroundConstraint3DProxy
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
GroundConstraint3DProxy.Delete()
Version
Introduced in version 10
GroundConstraint3DProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
GroundConstraint3DProxy.Entity Property
Parent Object: GroundConstraint3DProxy
Description
Property that returns the entity being grounded.
Syntax
GroundConstraint3DProxy.Entity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
GroundConstraint3DProxy.GetReferenceKey
Method
Parent Object: GroundConstraint3DProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
GroundConstraint3DProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse
and Vertex objects). A key context is created using the CreateKeyContext method of
the ReferenceKeyManager object. For all other object types, the key context argument
is not used and is ignored if provided.
This is an optional argument whose default value is 0.
GroundConstraint3DProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
Version
Introduced in version 10
GroundConstraint3DProxy.NativeObject Property
Parent Object: GroundConstraint3DProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
GroundConstraint3DProxy.NativeObject() As GroundConstraint3D
Property Value
This is a read only property whose value is a GroundConstraint3D.
Version
Introduced in version 10
GroundConstraint3DProxy.Parent Property
Parent Object: GroundConstraint3DProxy
Description
Property that returns the parent sketch of the object.
Syntax
GroundConstraint3DProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 10
GroundConstraint3DProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
GroundConstraint3DProxy.Type Property
Parent Object: GroundConstraint3DProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GroundConstraint3DProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
GroundConstraint3DProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1D8.htm 16/06/2025
GroundConstraintProxy Object
Derived from: GroundConstraint Object
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
Entity Property that returns entity being grounded.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
GroundConstraintProxy.Application Property
Parent Object: GroundConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
GroundConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
Syntax
GroundConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
GroundConstraintProxy.AttributeSets
Property
Parent Object: GroundConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
GroundConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
GroundConstraintProxy.ContainingOccurrence
Property
Parent Object: GroundConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
GroundConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
Syntax
GroundConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
GroundConstraintProxy.Deletable Property
Parent Object: GroundConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
GroundConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
GroundConstraintProxy.Delete Method
Parent Object: GroundConstraintProxy
Description
Method that deletes the constraint.
Syntax
GroundConstraintProxy.Delete()
GroundConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
Version
Introduced in version 6
GroundConstraintProxy.Entity Property
Parent Object: GroundConstraintProxy
Description
Property that returns entity being grounded.
Syntax
GroundConstraintProxy.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
GroundConstraintProxy.GetReferenceKey
Method
Parent Object: GroundConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
GroundConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
GroundConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 6
GroundConstraintProxy.NativeObject
Property
Parent Object: GroundConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
GroundConstraintProxy.NativeObject() As GroundConstraint
Property Value
This is a read only property whose value is a GroundConstraint.
Version
Introduced in version 6
GroundConstraintProxy.Parent Property
Parent Object: GroundConstraintProxy
Description
Property that returns the parent sketch of the object.
Syntax
GroundConstraintProxy.Parent() As Sketch
GroundConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
GroundConstraintProxy.Type Property
Parent Object: GroundConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GroundConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
GroundConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBBE8.htm 16/06/2025
GroundPlaneSettings Object
Description
Methods
Name Description
GetSize
Method that gets the current size of the displayed graphics for the ground plane. The plane is
functionally infinite but has a plane that is displayed to allow the user to visualize it.
SetSize
Method that sets the current size of the displayed graphics for the ground plane. The plane is
functionally infinite but has a plane that is displayed to allow the user to visualize it. This method will
fail if the AutoResize property is set to True.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AutoResize
Gets or sets whether the ground plane should be resized automatically based on
the component size.
Color
Read-write property that gets and sets the color for the ground plane for the area
inside the margin.
DisplayGridLines Read-write property that specifies whether to display grid lines.
FrontDirection Gets front directon of the ground plane.
HeightOffset Gets and sets the offset of the ground plane from the specified position.
MinorGridLineSpacing Gets and sets the spacing between minor grid lines in centimeters.
MinorLinesPerMajorGridLine Gets and sets the number of minor lines to appear between major lines.
Opacity Gets and sets the opacity of the ground plane.
Plane
Property that returns the geometry of the ground plane. The returned Plane
object provides information about the position and normal of the work plane.
Position Gets and sets the position of the ground plane.
ReflectionBlur
Gets and sets the reflection’s blurriness, specifying the amount of blur the
ground plane surface will produce.
ReflectionBlurFalloff Gets and sets where the model reflection seems to fade away.
Reflectivity Gets and sets the reflectivity of the ground plane.
Type Returns an ObjectTypeEnum indicating this object's type.
UpDirection Gets up directon of the ground plane.
Accessed From
DisplaySettings.GroundPlaneSettings
Version
Introduced in version 2011
GroundPlaneSettings Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
GroundPlaneSettings.Application Property
Parent Object: GroundPlaneSettings
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
GroundPlaneSettings.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
GroundPlaneSettings.AutoResize Property
Parent Object: GroundPlaneSettings
Description
Gets or sets whether the ground plane should be resized automatically based on the component size.
Syntax
GroundPlaneSettings.AutoResize() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
GroundPlaneSettings.Color Property
Parent Object: GroundPlaneSettings
Description
Read-write property that gets and sets the color for the ground plane for the area inside the margin.
GroundPlaneSettings Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Syntax
GroundPlaneSettings.Color() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 2011
GroundPlaneSettings.DisplayGridLines Property
Parent Object: GroundPlaneSettings
Description
Read-write property that specifies whether to display grid lines.
Syntax
GroundPlaneSettings.DisplayGridLines() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
GroundPlaneSettings.FrontDirection Property
Parent Object: GroundPlaneSettings
Description
Gets front directon of the ground plane.
Syntax
GroundPlaneSettings.FrontDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
GroundPlaneSettings Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Version
Introduced in version 2012
GroundPlaneSettings.GetSize Method
Parent Object: GroundPlaneSettings
Description
Method that gets the current size of the displayed graphics for the ground plane. The plane is functionally
infinite but has a plane that is displayed to allow the user to visualize it.
Syntax
GroundPlaneSettings.GetSize( PointOne As Point, PointTwo As Point )
Parameters
Name Type Description
PointOne Point Point object that returns the first corner of the ground plane in model space.
PointTwo Point Point object that returns the diagonally opposite corner of the ground plane in model space.
Version
Introduced in version 2011
GroundPlaneSettings.HeightOffset Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the offset of the ground plane from the specified position.
Syntax
GroundPlaneSettings.HeightOffset() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
GroundPlaneSettings Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
GroundPlaneSettings.MinorGridLineSpacing
Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the spacing between minor grid lines in centimeters.
Syntax
GroundPlaneSettings.MinorGridLineSpacing() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
GroundPlaneSettings.MinorLinesPerMajorGridLine
Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the number of minor lines to appear between major lines.
Syntax
GroundPlaneSettings.MinorLinesPerMajorGridLine() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
GroundPlaneSettings.Opacity Property
Parent Object: GroundPlaneSettings
GroundPlaneSettings Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Description
Gets and sets the opacity of the ground plane.
Syntax
GroundPlaneSettings.Opacity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
GroundPlaneSettings.Plane Property
Parent Object: GroundPlaneSettings
Description
Property that returns the geometry of the ground plane. The returned Plane object provides information about
the position and normal of the work plane.
Syntax
GroundPlaneSettings.Plane() As Plane
Property Value
This is a read only property whose value is a Plane.
Version
Introduced in version 2011
GroundPlaneSettings.Position Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the position of the ground plane.
Syntax
GroundPlaneSettings.Position() As Object
GroundPlaneSettings Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2011
GroundPlaneSettings.ReflectionBlur Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the reflection’s blurriness, specifying the amount of blur the ground plane surface will produce.
Syntax
GroundPlaneSettings.ReflectionBlur() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
GroundPlaneSettings.ReflectionBlurFalloff
Property
Parent Object: GroundPlaneSettings
Description
Gets and sets where the model reflection seems to fade away.
Syntax
GroundPlaneSettings.ReflectionBlurFalloff() As Double
Property Value
This is a read/write property whose value is a Double.
GroundPlaneSettings Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Version
Introduced in version 2011
GroundPlaneSettings.Reflectivity Property
Parent Object: GroundPlaneSettings
Description
Gets and sets the reflectivity of the ground plane.
Syntax
GroundPlaneSettings.Reflectivity() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
GroundPlaneSettings.SetSize Method
Parent Object: GroundPlaneSettings
Description
Method that sets the current size of the displayed graphics for the ground plane. The plane is functionally
infinite but has a plane that is displayed to allow the user to visualize it. This method will fail if the AutoResize
property is set to True.
Syntax
GroundPlaneSettings.SetSize( PointOne As Point, PointTwo As Point )
Parameters
Name Type Description
PointOne Point
Point object that defines the first corner of the ground plane in model space. If the input point
does not lie on the ground plane, the point is projected to the plane.
PointTwo Point
Point object that defines the diagonally opposite corner of the ground plane in model space. If
the input point does not lie on the ground plane, the point is projected to the plane.
GroundPlaneSettings Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025
Version
Introduced in version 2011
GroundPlaneSettings.Type Property
Parent Object: GroundPlaneSettings
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
GroundPlaneSettings.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
GroundPlaneSettings.UpDirection Property
Parent Object: GroundPlaneSettings
Description
Gets up directon of the ground plane.
Syntax
GroundPlaneSettings.UpDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2012
GroundPlaneSettings Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD55B.htm 16/06/2025