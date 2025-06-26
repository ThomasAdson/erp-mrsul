KeyboardEvents Object
Description
The KeyboardEvents object supports a set of events that can be received by the client when a key
on the keyboard is pressed while the InteractionEvents object has been started AND the
InteractionDisabled flag is set to False.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Parent Gets the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Events
Name Description
OnKeyDown
Event that occurs when the user presses a button on the keyboard. Only the keys
specified in the enumerator are handled through this event. The input signifies the
hardware key that was actually depressed.
OnKeyPress
Event that occurs when the user presses and releases an ANSI key on the keyboard.
The ANSI value of the key pressed is returned.
OnKeyUp
Event that occurs when the user releases a button on the keyboard . Only the keys
specified in the enumerator are handled through this event. The input signifies the
hardware key that was actually depressed.
Accessed From
InteractionEvents.KeyboardEvents
Version
Introduced in version 5
KeyboardEvents.Application Property
Parent Object: KeyboardEvents
KeyboardEvents Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB171.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
KeyboardEvents.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 5
KeyboardEvents.OnKeyDown Event
Parent Object: KeyboardEvents
Description
Event that occurs when the user presses a button on the keyboard. Only the keys specified in the
enumerator are handled through this event. The input signifies the hardware key that was actually
depressed.
Syntax
KeyboardEvents.OnKeyDown( Key As Long, ShiftKeys As ShiftStateEnum )
Parameters
Name Type Description
Key Long
Returns a key code, such as kKeyF1 (the F1 key) or kKeyHome (the
HOME key). The key codes are defined in the constant list
KeyCodeEnum.
ShiftKeys ShiftStateEnum Returns an enumerated constant that corresponds to the state of the
SHIFT, CTRL, and ALT keys when the button specified in the button
argument is clicked. The constants correspond to one or more of those
three keys being down. Each of these keys corresponds to a bit:
SHIFT key (bit 0), the CTRL key (bit 1), and the ALT key (bit 2).
These bits correspond to the values 1, 2, and 4, respectively.
Combinations of these are provided as conveniences in the
KeyboardEvents Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB171.htm 16/06/2025
enumerator. For example, if only the ALT key was down, the constant
kShiftStateAlt would be returned corresponding to the integer 4. If
CTRL and ALT were pressed, the constant kShiftStateCtrlAlt would
be returned whose integer value would be 6.
Version
Introduced in version 5
KeyboardEvents.OnKeyPress Event
Parent Object: KeyboardEvents
Description
Event that occurs when the user presses and releases an ANSI key on the keyboard. The ANSI
value of the key pressed is returned.
Syntax
KeyboardEvents.OnKeyPress( KeyASCII As Long )
Parameters
Name Type Description
KeyASCII Long
Returns a Long that is a standard numeric ANSI keycode. KeyASCII is passed
by value. Changing KeyASCII to 0 cancels the keystroke so the object receives
no character.
Version
Introduced in version 5
KeyboardEvents.OnKeyUp Event
Parent Object: KeyboardEvents
Description
Event that occurs when the user releases a button on the keyboard . Only the keys specified in the
enumerator are handled through this event. The input signifies the hardware key that was actually
depressed.
KeyboardEvents Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB171.htm 16/06/2025
Syntax
KeyboardEvents.OnKeyUp( Key As Long, ShiftKeys As ShiftStateEnum )
Parameters
Name Type Description
Key Long
Returns a key code, such as kKeyF1 (the F1 key) or kKeyHome (the
HOME key). The key codes are defined in the constant list
KeyCodeEnum.
ShiftKeys ShiftStateEnum
Returns an enumerated constant that corresponds to the state of the
SHIFT, CTRL, and ALT keys when the button specified in the button
argument is clicked. The constants correspond to one or more of those
three keys being down. Each of these keys corresponds to a bit:
SHIFT key (bit 0), the CTRL key (bit 1), and the ALT key (bit 2).
These bits correspond to the values 1, 2, and 4, respectively.
Combinations of these are provided as conveniences in the
enumerator. For example, if only the ALT key was down, the constant
kShiftStateAlt would be returned corresponding to the integer 4. If
CTRL and ALT were pressed, the constant kShiftStateCtrlAlt would
be returned whose integer value would be 6.
Version
Introduced in version 5
KeyboardEvents.Parent Property
Parent Object: KeyboardEvents
Description
Gets the parent object from whom this object can logically be reached.
Syntax
KeyboardEvents.Parent() As InteractionEvents
Property Value
This is a read only property whose value is an InteractionEvents.
KeyboardEvents Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB171.htm 16/06/2025
Version
Introduced in version 5
KeyboardEvents.Type Property
Parent Object: KeyboardEvents
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
KeyboardEvents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
KeyboardEvents Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB171.htm 16/06/2025
KnitFeature Object
Derived from: PartFeature Object
Description
The KnitFeature object represents a knit feature on a part. Knit features connect edge-matched
surfaces together to create a quilt.
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
KnitFeature Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True,
the OwnedBy property returns the owning feature.
MaintainAsSurface
Gets and sets whether to maintain the resulting body as a surface in the
case where the resulting body of the stitch operation could potentially be
a solid.
MaximumTolerance
Gets and sets the maximum distance between the edges of two faces
before being knit together.
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
Surfaces Gets and sets the set of surfaces associated with the Knit Feature.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
KnitFeatureProxy.NativeObject, KnitFeatures.Add, KnitFeatures.Item
Derived Classes
KnitFeatureProxy
Samples
Name Description
Delete Face, Boundary Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch
features.
Version
Introduced in version 6
KnitFeature Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
KnitFeature.Adaptive Property
Parent Object: KnitFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
KnitFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
KnitFeature.Appearance Property
Parent Object: KnitFeature
Description
Gets and sets the current appearance of the feature.
Syntax
KnitFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
KnitFeature Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
KnitFeature.AppearanceSourceType
Property
Parent Object: KnitFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
KnitFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
KnitFeature.Application Property
Parent Object: KnitFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
KnitFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
KnitFeature Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
KnitFeature.AttributeSets Property
Parent Object: KnitFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
KnitFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
KnitFeature.ConsumeInputs Property
Parent Object: KnitFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
KnitFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
KnitFeature.Delete Method
KnitFeature Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Parent Object: KnitFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
KnitFeature.Delete( [RetainConsumedSketches] As Boolean,
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
Introduced in version 6
KnitFeature.ExtendedName Property
Parent Object: KnitFeature
KnitFeature Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Read-only property that returns the full feature name including any extended information.
Syntax
KnitFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
KnitFeature.Faces Property
Parent Object: KnitFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
KnitFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 6
KnitFeature.FeatureDimensions Property
Parent Object: KnitFeature
KnitFeature Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Property that returns the FeatureDimensions collection object.
Syntax
KnitFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
KnitFeature.GetReferenceKey Method
Parent Object: KnitFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
KnitFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
KnitFeature Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Version
Introduced in version 6
KnitFeature.GetSuppressionCondition
Method
Parent Object: KnitFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
KnitFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
KnitFeature.HealthStatus Property
Parent Object: KnitFeature
KnitFeature Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
KnitFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 6
KnitFeature.IsOwnedByFeature Property
Parent Object: KnitFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
KnitFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
KnitFeature.MaintainAsSurface Property
Parent Object: KnitFeature
KnitFeature Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Gets and sets whether to maintain the resulting body as a surface in the case where the resulting
body of the stitch operation could potentially be a solid.
Syntax
KnitFeature.MaintainAsSurface() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
KnitFeature.MaximumTolerance Property
Parent Object: KnitFeature
Description
Gets and sets the maximum distance between the edges of two faces before being knit together.
Syntax
KnitFeature.MaximumTolerance() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
KnitFeature.Name Property
Parent Object: KnitFeature
KnitFeature Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
KnitFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
KnitFeature.OwnedBy Property
Parent Object: KnitFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
KnitFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
KnitFeature.Parameters Property
Parent Object: KnitFeature
KnitFeature Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Property that returns all the parameters associated with the feature.
Syntax
KnitFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
KnitFeature.Parent Property
Parent Object: KnitFeature
Description
Property that returns the parent of the feature.
Syntax
KnitFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 6
KnitFeature.Participants Property
Parent Object: KnitFeature
Description
KnitFeature Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
KnitFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
KnitFeature.RangeBox Property
Parent Object: KnitFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
KnitFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 6
KnitFeature.RemoveParticipant Method
Parent Object: KnitFeature
Description
KnitFeature Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
KnitFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
KnitFeature.SetAffectedBodies Method
Parent Object: KnitFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
KnitFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
KnitFeature.SetEndOfPart Method
Parent Object: KnitFeature
KnitFeature Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
KnitFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
KnitFeature.SetSuppressionCondition
Method
Parent Object: KnitFeature
Description
Method that sets the suppression condition for the feature.
Syntax
KnitFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
KnitFeature Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
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
KnitFeature.Shared Property
Parent Object: KnitFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
KnitFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
KnitFeature.Suppressed Property
Parent Object: KnitFeature
Description
Gets and sets whether this feature is suppressed or not.
KnitFeature Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Syntax
KnitFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
KnitFeature.SurfaceBodies Property
Parent Object: KnitFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
KnitFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
KnitFeature.Surfaces Property
Parent Object: KnitFeature
Description
Gets and sets the set of surfaces associated with the Knit Feature.
KnitFeature Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
Syntax
KnitFeature.Surfaces() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2008
KnitFeature.Type Property
Parent Object: KnitFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
KnitFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
KnitFeature Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD99A.htm 16/06/2025
KnitFeatureProxy Object
Derived from: KnitFeature Object
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
KnitFeatureProxy Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True,
the OwnedBy property returns the owning feature.
MaintainAsSurface
Gets and sets whether to maintain the resulting body as a surface in the
case where the resulting body of the stitch operation could potentially be
a solid.
MaximumTolerance
Gets and sets the maximum distance between the edges of two faces
before being knit together.
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
Surfaces Gets and sets the set of surfaces associated with the Knit Feature.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
KnitFeatureProxy.Adaptive Property
Parent Object: KnitFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
KnitFeatureProxy.Adaptive() As Boolean
KnitFeatureProxy Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
KnitFeatureProxy.Appearance Property
Parent Object: KnitFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
KnitFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
KnitFeatureProxy.AppearanceSourceType
Property
Parent Object: KnitFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
KnitFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
KnitFeatureProxy Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
KnitFeatureProxy.Application Property
Parent Object: KnitFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
KnitFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
KnitFeatureProxy.AttributeSets Property
Parent Object: KnitFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
KnitFeatureProxy.AttributeSets() As AttributeSets
KnitFeatureProxy Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
KnitFeatureProxy.ConsumeInputs Property
Parent Object: KnitFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
KnitFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
KnitFeatureProxy.ContainingOccurrence
Property
Parent Object: KnitFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
KnitFeatureProxy.ContainingOccurrence() As ComponentOccurrence
KnitFeatureProxy Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
KnitFeatureProxy.Delete Method
Parent Object: KnitFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
KnitFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
KnitFeatureProxy Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Version
Introduced in version 9
KnitFeatureProxy.ExtendedName Property
Parent Object: KnitFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
KnitFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
KnitFeatureProxy.Faces Property
Parent Object: KnitFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
KnitFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
KnitFeatureProxy Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Version
Introduced in version 9
KnitFeatureProxy.FeatureDimensions
Property
Parent Object: KnitFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
KnitFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
KnitFeatureProxy.GetReferenceKey Method
Parent Object: KnitFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
KnitFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KnitFeatureProxy Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 9
KnitFeatureProxy.GetSuppressionCondition
Method
Parent Object: KnitFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
KnitFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
KnitFeatureProxy Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Version
Introduced in version 11
KnitFeatureProxy.HealthStatus Property
Parent Object: KnitFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
KnitFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
KnitFeatureProxy.IsOwnedByFeature
Property
Parent Object: KnitFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
KnitFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
KnitFeatureProxy Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Version
Introduced in version 2008
KnitFeatureProxy.MaintainAsSurface
Property
Parent Object: KnitFeatureProxy
Description
Gets and sets whether to maintain the resulting body as a surface in the case where the resulting
body of the stitch operation could potentially be a solid.
Syntax
KnitFeatureProxy.MaintainAsSurface() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
KnitFeatureProxy.MaximumTolerance
Property
Parent Object: KnitFeatureProxy
Description
Gets and sets the maximum distance between the edges of two faces before being knit together.
Syntax
KnitFeatureProxy.MaximumTolerance() As Double
KnitFeatureProxy Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
KnitFeatureProxy.Name Property
Parent Object: KnitFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
KnitFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
KnitFeatureProxy.NativeObject Property
Parent Object: KnitFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
KnitFeatureProxy.NativeObject() As KnitFeature
KnitFeatureProxy Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read only property whose value is a KnitFeature.
Version
Introduced in version 9
KnitFeatureProxy.OwnedBy Property
Parent Object: KnitFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
KnitFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
KnitFeatureProxy.Parameters Property
Parent Object: KnitFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
KnitFeatureProxy.Parameters() As ParametersEnumerator
KnitFeatureProxy Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
KnitFeatureProxy.Parent Property
Parent Object: KnitFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
KnitFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
KnitFeatureProxy.Participants Property
Parent Object: KnitFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
KnitFeatureProxy.Participants() As ComponentOccurrencesEnumerator
KnitFeatureProxy Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
KnitFeatureProxy.RangeBox Property
Parent Object: KnitFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
KnitFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
KnitFeatureProxy.RemoveParticipant
Method
Parent Object: KnitFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
KnitFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
KnitFeatureProxy Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
KnitFeatureProxy.SetAffectedBodies Method
Parent Object: KnitFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
KnitFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
KnitFeatureProxy.SetEndOfPart Method
Parent Object: KnitFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
KnitFeatureProxy Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Syntax
KnitFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 9
KnitFeatureProxy.SetSuppressionCondition
Method
Parent Object: KnitFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
KnitFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
KnitFeatureProxy Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
For instance, if the parameter defines length units, the
value is assumed to be in centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current units of the document. For
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 11
KnitFeatureProxy.Shared Property
Parent Object: KnitFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
KnitFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
KnitFeatureProxy.Suppressed Property
Parent Object: KnitFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
KnitFeatureProxy.Suppressed() As Boolean
KnitFeatureProxy Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
KnitFeatureProxy.SurfaceBodies Property
Parent Object: KnitFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
KnitFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
KnitFeatureProxy.Surfaces Property
Parent Object: KnitFeatureProxy
Description
Gets and sets the set of surfaces associated with the Knit Feature.
Syntax
KnitFeatureProxy.Surfaces() As ObjectCollection
KnitFeatureProxy Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2008
KnitFeatureProxy.Type Property
Parent Object: KnitFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
KnitFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
KnitFeatureProxy Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDEB.htm 16/06/2025
KnitFeatures Object
Description
The KnitFeatures object represents a collection of knit features ( objects) on a part. Knit features
connect edge-matched surfaces together to create a quilt.
Methods
Name Description
Add Method that creates a new knit feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified KnitFeature object from the collection. This is the default
property of the KnitFeatures collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.KnitFeatures, SheetMetalFeatures.KnitFeatures
Version
Introduced in version 6
KnitFeatures.Add Method
Parent Object: KnitFeatures
Description
Method that creates a new knit feature.
KnitFeatures Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F5E.htm 16/06/2025
Syntax
KnitFeatures.Add( Surfaces As ObjectCollection, [MaximumTolerance] As Double,
[MaintainAsSurface] As Boolean ) As KnitFeature
Parameters
Name Type Description
Surfaces ObjectCollection
Input ObjectCollection that defines the input surfaces for
the knit feature. Valid objects for the surfaces are
WorkSurface objects and the result solid body obtained
from PartComponentDefinition.SurfaceBodies.Item(1).
MaximumTolerance Double
Optional Input Double that defines the maximum distance
between the edges of two faces before being knit
together. This value is defined in centimeters.
This is an optional argument whose default value is 0.0.
MaintainAsSurface Boolean
Optional input Boolean that specifies if the resulting
SurfaceBody should, if closed should continue to be
treated as a surface or a solid. If the result is not closed it
will always result in a surface.
This is an optional argument whose default value is False.
Samples
Name Description
Delete Face, Boundary
Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch features.
Adding a new stitch
(knit) feature
This sample demonstrates the creation of a stitch feature (known as the
Knit feature in the API). The sample creates two work surfaces using
surface extrusions and stitches them together.
Version
Introduced in version 2008
KnitFeatures.Application Property
Parent Object: KnitFeatures
Description
KnitFeatures Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F5E.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
KnitFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
KnitFeatures.Count Property
Parent Object: KnitFeatures
Description
Property that returns the number of items in this collection.
Syntax
KnitFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
KnitFeatures.Item Property
Parent Object: KnitFeatures
Description
KnitFeatures Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F5E.htm 16/06/2025
Returns the specified KnitFeature object from the collection. This is the default property of the
KnitFeatures collection object.
Syntax
KnitFeatures.Item( Index As Variant ) As KnitFeature
Property Value
This is a read only property whose value is a KnitFeature.
Parameters
Name Type Description
Index Variant
Value that specifies the index of the KnitFeature to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the attribute set name. If an out-of-range index or a name of a
nonexistent attribute set is provided, an error occurs.
Version
Introduced in version 6
KnitFeatures.Type Property
Parent Object: KnitFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
KnitFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
KnitFeatures Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F5E.htm 16/06/2025