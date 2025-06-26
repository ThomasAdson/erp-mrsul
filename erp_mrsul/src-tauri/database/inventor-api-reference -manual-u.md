UnfoldFeature Object
Derived from: PartFeature Object
Description
The UnfoldFeature object (together with it's complementary RefoldFeature object) allows sheet
metal features to be added when the model is flat (unfolded) and then the model can be refolded.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over
which dependent objects are also deleted.
Edit
Method that edits an existing unfold feature. The stop node should be
positioned immediately before this feature before calling this method
so that all of the input is available and in a valid state.
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
Bends
Property that returns the collection of Bend objects unfolded by this
feature.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
ExtendedName
UnfoldFeature Object Page 1 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputSketches
Property that returns the sketches that were specifies as \input when
creating this feature.
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
ResultSketches
Property that returns the sketches that were created as a \result of this
feature. The ReferencedEntity property of the sketches returned will
return the input sketch this result is based on.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
StationaryFace
Property that returns the Face object that was specified as the stationary
face during creation. This property can return Nothing in the case where
the face has been consumed by another operation and no longer exists in
the model. Rolling back the state of the model to a point where the face
exists will allow you to access it.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UnfoldFeatures.Add, UnfoldFeatures.Item
Derived Classes
UnfoldFeatureProxy
UnfoldFeature Object Page 2 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeature.Adaptive Property
Parent Object: UnfoldFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
UnfoldFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeature.Appearance Property
Parent Object: UnfoldFeature
Description
Gets and sets the current appearance of the feature.
Syntax
UnfoldFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
UnfoldFeature Object Page 3 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Version
Introduced in version 2014
UnfoldFeature.AppearanceSourceType
Property
Parent Object: UnfoldFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
UnfoldFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
UnfoldFeature.Application Property
Parent Object: UnfoldFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UnfoldFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
UnfoldFeature Object Page 4 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeature.AttributeSets Property
Parent Object: UnfoldFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
UnfoldFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
UnfoldFeature.Bends Property
Parent Object: UnfoldFeature
Description
Property that returns the collection of Bend objects unfolded by this feature.
Syntax
UnfoldFeature.Bends() As BendsEnumerator
Property Value
This is a read only property whose value is a BendsEnumerator.
UnfoldFeature Object Page 5 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeature.ConsumeInputs Property
Parent Object: UnfoldFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
UnfoldFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeature.Delete Method
Parent Object: UnfoldFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
UnfoldFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
UnfoldFeature Object Page 6 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
RetainConsumedSketches Boolean Optional input Boolean indicating if consumed
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
UnfoldFeature.Edit Method
Parent Object: UnfoldFeature
Description
Method that edits an existing unfold feature. The stop node should be positioned immediately
before this feature before calling this method so that all of the input is available and in a valid
state.
Syntax
UnfoldFeature.Edit( StationaryFace As Face, [Bends] As Variant, [Sketches] As Variant )
Parameters
Name Type Description
StationaryFace Face
Input Face object that specifies the geometry that will remain fixed while
other geometry unfolds. See Remarks.
Bends Variant Optional input ObjectCollection that defines the bend(s) to unfold. The
bends specified must be in a folded state (IsFlat equals False). Not
UnfoldFeature Object Page 7 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
providing this argument or inputting Nothing indicates that all flat bends
are to be unfolded.
This is an optional argument whose default value is null.
Sketches Variant
Optional input ObjectCollection that specifies any sketches to be copied
and transformed as part of the unfolding operation. The input sketches
must be a child of one of the faces being unfolded. Also only one sketch
per unfolded face is allowed.
This is an optional argument whose default value is null.
Remarks
For most models the Face specified in the StationaryFace parameter must be on the top or bottom
of the part, not around the edge. The exception to this is a part where all of the faces on the top
and bottom of the part are cylindrical, as shown below.
When using the Refold command in the user interface for parts like this, the user must specify one
of the ends. The user interface displays what looks like work planes at each end of the part, as
shown below, for the user to select. When using the API you must supply the equivalent Face
objects at the end of the part.
UnfoldFeature Object Page 8 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeature.ExtendedName Property
Parent Object: UnfoldFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
UnfoldFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
UnfoldFeature Object Page 9 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
UnfoldFeature.Faces Property
Parent Object: UnfoldFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
UnfoldFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
UnfoldFeature.FeatureDimensions Property
Parent Object: UnfoldFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
UnfoldFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
UnfoldFeature Object Page 10 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
UnfoldFeature.GetReferenceKey Method
Parent Object: UnfoldFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
UnfoldFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
UnfoldFeature.GetSuppressionCondition
Method
Parent Object: UnfoldFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
UnfoldFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
UnfoldFeature Object Page 11 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
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
UnfoldFeature.HealthStatus Property
Parent Object: UnfoldFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
UnfoldFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
UnfoldFeature.InputSketches Property
Parent Object: UnfoldFeature
UnfoldFeature Object Page 12 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Property that returns the sketches that were specifies as \input when creating this feature.
Syntax
UnfoldFeature.InputSketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2010
UnfoldFeature.IsOwnedByFeature Property
Parent Object: UnfoldFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
UnfoldFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeature.Name Property
Parent Object: UnfoldFeature
UnfoldFeature Object Page 13 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
UnfoldFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UnfoldFeature.OwnedBy Property
Parent Object: UnfoldFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
UnfoldFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
UnfoldFeature.Parameters Property
Parent Object: UnfoldFeature
UnfoldFeature Object Page 14 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Property that returns all the parameters associated with the feature.
Syntax
UnfoldFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
UnfoldFeature.Parent Property
Parent Object: UnfoldFeature
Description
Property that returns the parent of the feature.
Syntax
UnfoldFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
UnfoldFeature.Participants Property
Parent Object: UnfoldFeature
Description
UnfoldFeature Object Page 15 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
UnfoldFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
UnfoldFeature.RangeBox Property
Parent Object: UnfoldFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
UnfoldFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
UnfoldFeature.RemoveParticipant Method
Parent Object: UnfoldFeature
Description
UnfoldFeature Object Page 16 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
UnfoldFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2010
UnfoldFeature.ResultSketches Property
Parent Object: UnfoldFeature
Description
Property that returns the sketches that were created as a \result of this feature. The
ReferencedEntity property of the sketches returned will return the input sketch this result is based
on.
Syntax
UnfoldFeature.ResultSketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2010
UnfoldFeature.SetAffectedBodies Method
Parent Object: UnfoldFeature
UnfoldFeature Object Page 17 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
UnfoldFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
UnfoldFeature.SetEndOfPart Method
Parent Object: UnfoldFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
UnfoldFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
UnfoldFeature Object Page 18 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
UnfoldFeature.SetSuppressionCondition
Method
Parent Object: UnfoldFeature
Description
Method that sets the suppression condition for the feature.
Syntax
UnfoldFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Version
Introduced in version 2010
UnfoldFeature.Shared Property
Parent Object: UnfoldFeature
UnfoldFeature Object Page 19 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
UnfoldFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeature.StationaryFace Property
Parent Object: UnfoldFeature
Description
Property that returns the Face object that was specified as the stationary face during creation. This
property can return Nothing in the case where the face has been consumed by another operation
and no longer exists in the model. Rolling back the state of the model to a point where the face
exists will allow you to access it.
Syntax
UnfoldFeature.StationaryFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 2010
UnfoldFeature.Suppressed Property
Parent Object: UnfoldFeature
UnfoldFeature Object Page 20 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Description
Gets and sets whether this feature is suppressed or not.
Syntax
UnfoldFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeature.SurfaceBodies Property
Parent Object: UnfoldFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
UnfoldFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
UnfoldFeature.Type Property
Parent Object: UnfoldFeature
Description
UnfoldFeature Object Page 21 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnfoldFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UnfoldFeature Object Page 22 of 22
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5499.htm 17/06/2025
UnfoldFeatureProxy Object
Derived from: UnfoldFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over
which dependent objects are also deleted.
Edit
Method that edits an existing unfold feature. The stop node should be
positioned immediately before this feature before calling this method so
that all of the input is available and in a valid state.
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
Bends
Property that returns the collection of Bend objects unfolded by this
feature.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
UnfoldFeatureProxy Object Page 1 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Property that returns a collection that provides access to all of the faces of
the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputSketches
Property that returns the sketches that were specifies as \input when
creating this feature.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True,
the OwnedBy property returns the owning feature.
Name
Gets/Sets the name of this Part Feature within the scope of this
Document.
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
ResultSketches
Property that returns the sketches that were created as a \result of this
feature. The ReferencedEntity property of the sketches returned will
return the input sketch this result is based on.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
StationaryFace
Property that returns the Face object that was specified as the stationary
face during creation. This property can return Nothing in the case where
the face has been consumed by another operation and no longer exists in
the model. Rolling back the state of the model to a point where the face
exists will allow you to access it.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2010
UnfoldFeatureProxy.Adaptive Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
UnfoldFeatureProxy Object Page 2 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Syntax
UnfoldFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeatureProxy.Appearance Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
UnfoldFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
UnfoldFeatureProxy.AppearanceSourceType
Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
UnfoldFeatureProxy Object Page 3 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Syntax
UnfoldFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
UnfoldFeatureProxy.Application Property
Parent Object: UnfoldFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
UnfoldFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
UnfoldFeatureProxy.AttributeSets Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
UnfoldFeatureProxy Object Page 4 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Syntax
UnfoldFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
UnfoldFeatureProxy.Bends Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns the collection of Bend objects unfolded by this feature.
Syntax
UnfoldFeatureProxy.Bends() As BendsEnumerator
Property Value
This is a read only property whose value is a BendsEnumerator.
Version
Introduced in version 2010
UnfoldFeatureProxy.ConsumeInputs Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
UnfoldFeatureProxy.ConsumeInputs() As Boolean
UnfoldFeatureProxy Object Page 5 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeatureProxy.Delete Method
Parent Object: UnfoldFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
UnfoldFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
UnfoldFeatureProxy Object Page 6 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeatureProxy.Edit Method
Parent Object: UnfoldFeatureProxy
Description
Method that edits an existing unfold feature. The stop node should be positioned immediately
before this feature before calling this method so that all of the input is available and in a valid state.
Syntax
UnfoldFeatureProxy.Edit( StationaryFace As Face, [Bends] As Variant, [Sketches] As Variant )
Parameters
Name Type Description
StationaryFace Face
Input Face object that specifies the geometry that will remain fixed while
other geometry unfolds. See Remarks.
Bends Variant
Optional input ObjectCollection that defines the bend(s) to unfold. The
bends specified must be in a folded state (IsFlat equals False). Not
providing this argument or inputting Nothing indicates that all flat bends
are to be unfolded.
This is an optional argument whose default value is null.
Sketches Variant
Optional input ObjectCollection that specifies any sketches to be copied
and transformed as part of the unfolding operation. The input sketches
must be a child of one of the faces being unfolded. Also only one sketch
per unfolded face is allowed.
This is an optional argument whose default value is null.
Version
Introduced in version 2010
UnfoldFeatureProxy.ExtendedName Property
Parent Object: UnfoldFeatureProxy
UnfoldFeatureProxy Object Page 7 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Description
Read-only property that returns the full feature name including any extended information.
Syntax
UnfoldFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
UnfoldFeatureProxy.Faces Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
UnfoldFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
UnfoldFeatureProxy.FeatureDimensions
Property
Parent Object: UnfoldFeatureProxy
UnfoldFeatureProxy Object Page 8 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Description
Property that returns the FeatureDimensions collection object.
Syntax
UnfoldFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
UnfoldFeatureProxy.GetReferenceKey
Method
Parent Object: UnfoldFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
UnfoldFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
UnfoldFeatureProxy Object Page 9 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeatureProxy.GetSuppressionCondition
Method
Parent Object: UnfoldFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Syntax
UnfoldFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
UnfoldFeatureProxy.HealthStatus Property
Parent Object: UnfoldFeatureProxy
UnfoldFeatureProxy Object Page 10 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
UnfoldFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
UnfoldFeatureProxy.InputSketches Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns the sketches that were specifies as \input when creating this feature.
Syntax
UnfoldFeatureProxy.InputSketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2010
UnfoldFeatureProxy.IsOwnedByFeature
Property
Parent Object: UnfoldFeatureProxy
UnfoldFeatureProxy Object Page 11 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
UnfoldFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeatureProxy.Name Property
Parent Object: UnfoldFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
UnfoldFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UnfoldFeatureProxy.OwnedBy Property
Parent Object: UnfoldFeatureProxy
Description
UnfoldFeatureProxy Object Page 12 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
UnfoldFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
UnfoldFeatureProxy.Parameters Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
UnfoldFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
UnfoldFeatureProxy.Parent Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns the parent of the feature.
UnfoldFeatureProxy Object Page 13 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Syntax
UnfoldFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
UnfoldFeatureProxy.Participants Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
UnfoldFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
UnfoldFeatureProxy.RangeBox Property
Parent Object: UnfoldFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
UnfoldFeatureProxy Object Page 14 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Syntax
UnfoldFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
UnfoldFeatureProxy.RemoveParticipant
Method
Parent Object: UnfoldFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
UnfoldFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2010
UnfoldFeatureProxy.ResultSketches Property
Parent Object: UnfoldFeatureProxy
UnfoldFeatureProxy Object Page 15 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Description
Property that returns the sketches that were created as a \result of this feature. The
ReferencedEntity property of the sketches returned will return the input sketch this result is based
on.
Syntax
UnfoldFeatureProxy.ResultSketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2010
UnfoldFeatureProxy.SetAffectedBodies
Method
Parent Object: UnfoldFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
UnfoldFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
UnfoldFeatureProxy.SetEndOfPart Method
UnfoldFeatureProxy Object Page 16 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Parent Object: UnfoldFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
UnfoldFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
UnfoldFeatureProxy.SetSuppressionCondition
Method
Parent Object: UnfoldFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
UnfoldFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum ComparisonTypeEnum that specifies the type of
comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
UnfoldFeatureProxy Object Page 17 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string, a value
or a parameter object. If a value is input, the database
units for the units defined by the parameter are used. For
instance, if the parameter defines length units, the value
is assumed to be in centimeters. If a string is input, the
units can be specified as part of the string or it will
default to the current units of the document. For
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 2010
UnfoldFeatureProxy.Shared Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
UnfoldFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeatureProxy.StationaryFace Property
Parent Object: UnfoldFeatureProxy
Description
UnfoldFeatureProxy Object Page 18 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Property that returns the Face object that was specified as the stationary face during creation. This
property can return Nothing in the case where the face has been consumed by another operation
and no longer exists in the model. Rolling back the state of the model to a point where the face
exists will allow you to access it.
Syntax
UnfoldFeatureProxy.StationaryFace() As Face
Property Value
This is a read only property whose value is a Face.
Version
Introduced in version 2010
UnfoldFeatureProxy.Suppressed Property
Parent Object: UnfoldFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
UnfoldFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UnfoldFeatureProxy.SurfaceBodies Property
Parent Object: UnfoldFeatureProxy
Description
UnfoldFeatureProxy Object Page 19 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
Property that returns the bodies that this feature has created or modified.
Syntax
UnfoldFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
UnfoldFeatureProxy.Type Property
Parent Object: UnfoldFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnfoldFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UnfoldFeatureProxy Object Page 20 of 20
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AF.htm 17/06/2025
UnfoldFeatures Object
Description
Object allowing iteration of the collection of UnfoldFeature objects, and allows creation of
UnfoldFeature objects.
Methods
Name Description
Add Method that creates a new unfold feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of UnfoldFeature objects in the collection.
Item Returns the specified UnfoldFeature object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SheetMetalFeatures.UnfoldFeatures
Version
Introduced in version 2010
UnfoldFeatures.Add Method
Parent Object: UnfoldFeatures
Description
Method that creates a new unfold feature.
Syntax
UnfoldFeatures.Add( StationaryFace As Face, [Bends] As Variant, [Sketches] As Variant ) As
UnfoldFeature
UnfoldFeatures Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2BEE.htm 17/06/2025
Parameters
Name Type Description
StationaryFace Face
Input Face object that specifies the geometry that will remain fixed while
other geometry unfolds. See Remarks.
Bends Variant
Optional input ObjectCollection that defines the bend(s) to unfold. The
bends specified must be in a folded state (IsFlat equals False). Not
providing this argument or inputting Nothing indicates that all flat bends
are to be unfolded.
This is an optional argument whose default value is null.
Sketches Variant
Optional input ObjectCollection that specifies any sketches to be copied
and transformed as part of the unfolding operation. The input sketches
must be a child of one of the faces being unfolded. Also only one sketch
per unfolded face is allowed.
This is an optional argument whose default value is null.
Remarks
For most models the Face specified in the StationaryFace parameter must be on the top or bottom
of the part, not around the edge. The exception to this is a part where all of the faces on the top
and bottom of the part are cylindrical, as shown below.
When using the Refold command in the user interface for parts like this, the user must specify one
of the ends. The user interface displays what looks like work planes at each end of the part, as
shown below, for the user to select. When using the API you must supply the equivalent Face
UnfoldFeatures Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2BEE.htm 17/06/2025
objects at the end of the part.
Version
Introduced in version 2010
UnfoldFeatures.Application Property
Parent Object: UnfoldFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UnfoldFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
UnfoldFeatures Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2BEE.htm 17/06/2025
Version
Introduced in version 2010
UnfoldFeatures.Count Property
Parent Object: UnfoldFeatures
Description
Property that returns the number of UnfoldFeature objects in the collection.
Syntax
UnfoldFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
UnfoldFeatures.Item Property
Parent Object: UnfoldFeatures
Description
Returns the specified UnfoldFeature object from the collection.
Syntax
UnfoldFeatures.Item( Index As Variant ) As UnfoldFeature
Property Value
This is a read only property whose value is a UnfoldFeature.
Parameters
UnfoldFeatures Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2BEE.htm 17/06/2025
Name Type Description
Index Variant
Input Long or String value that specifies the UnfoldFeature object within the
collection to return. A Long value indicates the index of the feature within the
collection to return. A String indicates the name of the feature. If an out of range
index or an unknown name is supplied the property will fail.
Version
Introduced in version 2010
UnfoldFeatures.Type Property
Parent Object: UnfoldFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnfoldFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UnfoldFeatures Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2BEE.htm 17/06/2025
UnfoldMethod Object
Derived from: Style Object
Description
The UnfoldMethod object provides access to the information associated with a specific unfold method. This object derives from the Style object.
Methods
Name Description
ConvertToLocal Method that creates a local cached copy of a global style and returns the local style.
Copy Method that creates a new local Style object. The newly created style is returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
DeleteEquation
Method that deletes the specified equation. An equation unfold method always needs to have at least one equation. Deleting
the last equation will cause a default equation to be created.
GetEquation Method that sets this unfold method to be an equation type of unfold method and defines the associated equation and limits.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same name is found in the repository, that style is
updated.
SetEquation
Method that creates or edits an equation associated with this unfold method. Creating the first equation will change the
unfold method be to a custom equation type of unfold method.
UpdateFromGlobal Method that updates this style from the global repository.
WriteBendTableToFile
Method that writes the bend table information of the UnfoldMethod object into an external file. This method is only valid
in the case where UnfoldMethodType is kBendTableUnfoldMethod.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
BendAngleType Gets and sets whether the bend or open angle value is to be used for the angle in equations.
Comments Gets and sets comments associated with the style.
EquationCount
Property that reports the number of equations currently associated with this unfold method. This property is only used in the
case where the UnfoldMethodType property returns kCustomEquationUnfoldMethod and will return 0 for other unfold
method types.
EquationType
Property that specifies the type of equation defined for the unfold method. This property is only valid in the case where the
UnfoldMethodType property returns kCustomEquationUnfoldMethod. In all other cases the value of this property should be
ignored.
InternalName
Property that returns the internal name of the style. The name is the internal English name of the standard style. This name will
remain constant and is not affected by locale. This name is never displayed to the user. Note that this name is not guaranteed to
be unique.
InUse Property that indicates if this style is in use.
kFactor Gets/sets the kFactor associated with this unfold method.
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
SplineFactor Gets and sets the factor used when unfolding ruled surfaces defined using ellipses and splines.
StyleLocation
Property that returns the location of this style, i.e. local to the document, cached locally in the document, exists in the library.
Styles that exist in the library cannot be edited.
StyleType Gets the type of the style.
Type Returns an ObjectTypeEnum indicating this object's type.
UnfoldMethodType
Property that returns the type of unfold method used by this UnfoldMethod object. kLinearUnfoldMethod,
kBendTableUnfoldMethod, and kCustomEquationUnfoldMethod are possible return values.
UpToDate Property that gets the up-to-date status of the style against the global repository.
Accessed From
BendDefinition.UnfoldMethod, ContourFlangeDefinition.UnfoldMethod, FlangeDefinition.UnfoldMethod, FoldDefinition.UnfoldMethod,
HemDefinition.UnfoldMethod, LoftedFlangeDefinition.UnfoldMethod, SheetMetalComponentDefinition.UnfoldMethod,
SheetMetalStyle.UnfoldMethod, UnfoldMethods.AddBendTableFromFile, UnfoldMethods.AddEquationUnfoldMethod,
UnfoldMethods.AddLinearUnfoldMethod, UnfoldMethods.Item
Samples
Name Description
Sheet Metal
Style Display
This sample illustrates getting information about sheet metal styles.
UnfoldMethod Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Sheet Metal
Style Creation
This sample illustrates creating a new sheet metal style. It uses a bend table and assumes the sample bend table delivered with
Inventor is available. You can edit the path below to reference any existing bend table. To use the sample make sure a bend table is
available at the specified path, open a sheet metal document, and run the sample.
Version
Introduced in version 5.3
UnfoldMethod.Application Property
Parent Object: UnfoldMethod
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Syntax
UnfoldMethod.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
UnfoldMethod.BendAngleType Property
Parent Object: UnfoldMethod
Description
Gets and sets whether the bend or open angle value is to be used for the angle in equations.
Syntax
UnfoldMethod.BendAngleType() As BendAngleTypeEnum
Property Value
This is a read/write property whose value is a BendAngleTypeEnum.
Version
Introduced in version 2010
UnfoldMethod.Comments Property
Parent Object: UnfoldMethod
Description
Gets and sets comments associated with the style.
Syntax
UnfoldMethod.Comments() As String
Property Value
This is a read/write property whose value is a String.
UnfoldMethod Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Version
Introduced in version 2009
UnfoldMethod.ConvertToLocal Method
Parent Object: UnfoldMethod
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
UnfoldMethod.ConvertToLocal() As Style
Version
Introduced in version 2009
UnfoldMethod.Copy Method
Parent Object: UnfoldMethod
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
UnfoldMethod.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String
Input String that specifies the name for the new style. This name must be unique with respect to all other styles of a similar type in the
document. That is, if a dimension style is being copied, the name must be unique with respect to all the other dimension styles. If it is
not unique the method will fail.
Version
Introduced in version 2009
UnfoldMethod.Delete Method
Parent Object: UnfoldMethod
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
UnfoldMethod.Delete()
Version
Introduced in version 5.3
UnfoldMethod.DeleteEquation Method
Parent Object: UnfoldMethod
UnfoldMethod Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Description
Method that deletes the specified equation. An equation unfold method always needs to have at least one equation. Deleting the last equation will
cause a default equation to be created.
Syntax
UnfoldMethod.DeleteEquation( Index As Long )
Parameters
Name Type Description
Index Long
Input Long that specifies which equation to delete. Valid values are 1 to the current value of the UnfoldMethod.EquationCount
property.
Version
Introduced in version 2010
UnfoldMethod.EquationCount Property
Parent Object: UnfoldMethod
Description
Property that reports the number of equations currently associated with this unfold method. This property is only used in the case where the
UnfoldMethodType property returns kCustomEquationUnfoldMethod and will return 0 for other unfold method types.
Syntax
UnfoldMethod.EquationCount() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
UnfoldMethod.EquationType Property
Parent Object: UnfoldMethod
Description
Property that specifies the type of equation defined for the unfold method. This property is only valid in the case where the UnfoldMethodType
property returns kCustomEquationUnfoldMethod. In all other cases the value of this property should be ignored.
Syntax
UnfoldMethod.EquationType() As UnfoldMethodEquationTypeEnum
Property Value
This is a read only property whose value is a UnfoldMethodEquationTypeEnum.
Version
Introduced in version 2010
UnfoldMethod.GetEquation Method
UnfoldMethod Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Parent Object: UnfoldMethod
Description
Method that sets this unfold method to be an equation type of unfold method and defines the associated equation and limits.
Syntax
UnfoldMethod.GetEquation( Index As Long, Equation As String, MinimumValue As String, MinimumCompareCondition As
ComparisonTypeEnum, BoundedVariable As String, MaximumValue As String, MaximumCompareCondition As ComparisonTypeEnum )
Parameters
Name Type Description
Index Long
Input Long that specifies which equation to get. Valid values are 1 to the current value of the
UnfoldMethod.EquationCount property.
Equation String
Output String that contains the equation. This String uses xml like syntax to allow the
inclusion of predefined variables. The available variables and an example of their use are
shown below.
<Angle\> - Variable used to specify the bend angle within an equation (β).
<Thickness\> - Variable used to specify the thickness within an equation (μ).
<Radius\> - Variable used to specify the inner radius within an equation (ρ).
<Pi\> - Variable used to specify pi within an equation (π).
Example:
"<Pi\> * ((180 deg - <Angle\>)/180 deg) * (<Radius\> + (<Thickness\>/2 ul)
* (0.65 ul + 0.5 ul * log(<Radius\> / <Thickness\>))) – 2 ul * (<Radius\> +
<Thickness\> * tan(( 180 deg - <Angle\>) / 2 ul)"
MinimumValue String Output String that specifies the minimum value.
MinimumCompareCondition ComparisonTypeEnum
Output value that specifies the comparison type used for the minimum value. Valid values
are kGreaterThanComparisonType, kGreaterThanOrEqualToComparisonType, and
kEqualToComparisonType.
BoundedVariable String
Output String that specifies the name of the variable whose values are being bounded.
Possible returned values are "Angle" (β), "Thickness" (μ), and "Radius" (ρ).
MaximumValue String
Output String that specifies the maximum value. If an empty string is returned then no
maximum value is defined.
MaximumCompareCondition ComparisonTypeEnum
Output value that specifies the comparison type used for the maximum value. If the
MaximumValue is an empty string the value of this argument should be ignored. Valid
values are kLessThanComparisonType or kLessThanOrEqualToComparisonType.
Version
Introduced in version 2010
UnfoldMethod Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
UnfoldMethod.GetReferenceKey Method
Parent Object: UnfoldMethod
Description
Method that generates and returns the reference key for this entity.
Syntax
UnfoldMethod.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities (and
SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the CreateKeyContext
method of the ReferenceKeyManager object. For all other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2009
UnfoldMethod.InternalName Property
Parent Object: UnfoldMethod
Description
Property that returns the internal name of the style. The name is the internal English name of the standard style. This name will remain constant and
is not affected by locale. This name is never displayed to the user. Note that this name is not guaranteed to be unique.
Syntax
UnfoldMethod.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
UnfoldMethod.InUse Property
Parent Object: UnfoldMethod
Description
Property that indicates if this style is in use.
Syntax
UnfoldMethod.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
UnfoldMethod Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Version
Introduced in version 2009
UnfoldMethod.kFactor Property
Parent Object: UnfoldMethod
Description
Gets/sets the kFactor associated with this unfold method.
Syntax
UnfoldMethod.kFactor() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
UnfoldMethod.Name Property
Parent Object: UnfoldMethod
Description
Gets/Sets the name of the Style.
Syntax
UnfoldMethod.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5.3
UnfoldMethod.Parent Property
Parent Object: UnfoldMethod
Description
Property returning the parent of this object.
Syntax
UnfoldMethod.Parent() As Object
Property Value
This is a read only property whose value is an Object.
UnfoldMethod Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Version
Introduced in version 2009
UnfoldMethod.SaveToGlobal Method
Parent Object: UnfoldMethod
Description
Method that saves this style to the global repository. If a style with the same name is found in the repository, that style is updated.
Syntax
UnfoldMethod.SaveToGlobal()
Version
Introduced in version 2009
UnfoldMethod.SetEquation Method
Parent Object: UnfoldMethod
Description
Method that creates or edits an equation associated with this unfold method. Creating the first equation will change the unfold method be to a
custom equation type of unfold method.
Syntax
UnfoldMethod.SetEquation( Index As Long, EquationType As UnfoldMethodEquationTypeEnum, Equation As String, [MinimumValue] As
String, [MinimumCompareCondition] As ComparisonTypeEnum, [BoundedVariable] As String, [MaximumValue] As String,
[MaximumCompareCondition] As ComparisonTypeEnum )
Parameters
Name Type Description
Index Long
Input Long that specifies which equation to set. When editing an existing
equation, valid values are 1 to the current value of the
UnfoldMethod.EquationCount property. Any value outside of this range will
cause a new equation to be created.
If a new equation is created it will be positioned within the existing equations
depending on how its bounding conditions compare to the other equations. This is
the same behavior as in the user-interface.
EquationType UnfoldMethodEquationTypeEnum
Input value from UnfoldMethodEquationTypeEnum that specifies the type of
equation being defined.
Equation String
Inputt String that contains the equation. This String uses xml like syntax to allow
the inclusion of predefined variables. The available variables and an example of
their use are shown below.
<Angle\> - Variable used to specify the bend angle within an equation (β).
<Thickness\> - Variable used to specify the thickness within an equation (μ).
UnfoldMethod Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
<Radius\> - Variable used to specify the inner radius within an equation (ρ).
<Pi\> - Variable used to specify pi within an equation (π).
Example:
"<Pi\> * ((180 deg - <Angle\>)/180 deg) * (<Radius\> +
(<Thickness\>/2 ul) * (0.65 ul + 0.5 ul * log(<Radius\> /
<Thickness\>))) – 2 ul * (<Radius\> + <Thickness\> * tan(( 180 deg
- <Angle\>) / 2 ul)"
MinimumValue String
Optional input String that specifies the minimum value. This can be any valid
expression. If this argument is supplied the MinimumCompareCondition and
BoundedVariable arguments must also be provided. The maximum value is
optional. If this is not supplied then there is no minimum limit to the value.
This is an optional argument whose default value is ""0 deg"".
MinimumCompareCondition ComparisonTypeEnum
Optional input value from ComparisonTypeEnum that specifies the method used
to compare the value to the minimum value. Valid values are
kGreaterThanComparisonTypekLessThanComparisonType,
kGreaterThanOrEqualToComparisonTypekLessThanOrEqualToComparisonType,
or kEqualToComparisonType. If this argument is supplied the MinimumValue
and BoundedVariable arguments must also be provided.
This is an optional argument whose default value is 60421.
BoundedVariable String
Optional input String that specifies the name of the variable whose values are
being bounded. Possible values are "Angle" (β), "Thickness" (μ), and
"Radius" (ρ).
This is an optional argument whose default value is ""Angle"".
MaximumValue String
Optional input String that specifies the maximum value as an expression. This
argument is ignored in the case where the MinimumCompareCondition is
kEqualToComparisonType.
This is an optional argument whose default value is ""180 deg"".
MaximumCompareCondition ComparisonTypeEnum
Optional input value from ComparisonTypeEnum that specifies the method used
to compare the value to the maximum value. Valid values are
kLessThanComparisonType or kLessThanOrEqualToComparisonType. This
argument is ignored in the case where the MinimumCompareCondition is
kEqualToComparisonType.
This is an optional argument whose default value is 60421.
Version
Introduced in version 2010
UnfoldMethod.SplineFactor Property
Parent Object: UnfoldMethod
Description
Gets and sets the factor used when unfolding ruled surfaces defined using ellipses and splines.
Syntax
UnfoldMethod.SplineFactor() As String
UnfoldMethod Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UnfoldMethod.StyleLocation Property
Parent Object: UnfoldMethod
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the document, exists in the library. Styles that exist in the
library cannot be edited.
Syntax
UnfoldMethod.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2009
UnfoldMethod.StyleType Property
Parent Object: UnfoldMethod
Description
Gets the type of the style.
Syntax
UnfoldMethod.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2009
UnfoldMethod.Type Property
Parent Object: UnfoldMethod
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnfoldMethod.Type() As ObjectTypeEnum
UnfoldMethod Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
UnfoldMethod.UnfoldMethodType Property
Parent Object: UnfoldMethod
Description
Property that returns the type of unfold method used by this UnfoldMethod object. kLinearUnfoldMethod, kBendTableUnfoldMethod, and
kCustomEquationUnfoldMethod are possible return values.
Syntax
UnfoldMethod.UnfoldMethodType() As UnfoldMethodTypeEnum
Property Value
This is a read only property whose value is a UnfoldMethodTypeEnum.
Samples
Name Description
Sheet Metal Style Display This sample illustrates getting information about sheet metal styles.
Version
Introduced in version 5.3
UnfoldMethod.UpdateFromGlobal Method
Parent Object: UnfoldMethod
Description
Method that updates this style from the global repository.
Syntax
UnfoldMethod.UpdateFromGlobal()
Version
Introduced in version 2009
UnfoldMethod.UpToDate Property
Parent Object: UnfoldMethod
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
UnfoldMethod.UpToDate() As Boolean
UnfoldMethod Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
UnfoldMethod.WriteBendTableToFile Method
Parent Object: UnfoldMethod
Description
Method that writes the bend table information of the UnfoldMethod object into an external file. This method is only valid in the case where
UnfoldMethodType is kBendTableUnfoldMethod.
Syntax
UnfoldMethod.WriteBendTableToFile( FileName As String )
Parameters
Name Type Description
FileName String Input String that specifies the name of the file to write bend table information to.
Version
Introduced in version 5.3
UnfoldMethod Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh465C.htm 17/06/2025
UnfoldMethods Object
Description
Provides access to the unfold method list (collection of objects) for a particular sheet metal style.
Methods
Name Description
AddBendTableFromFile
Method that adds a BendTable unfold method to the collection and
returns the created UnfoldMethod object.
AddEquationUnfoldMethod
Method that adds an equation linear unfold method to the collection
and returns the created UnfoldMethod object. The new unfold
method will have a single equation that specifies that the bend
compensation will be 0 for a bend from 0 to 180 degrees. You can
edit the equation to the desired equation using the functionality of
the returned UnfoldMethod object.
AddLinearUnfoldMethod
Method that adds a linear unfold method to the collection and
returns the created UnfoldMethod object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified UnfoldMethod object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SheetMetalComponentDefinition.UnfoldMethods
Version
Introduced in version 5.3
UnfoldMethods.AddBendTableFromFile
Method
Parent Object: UnfoldMethods
UnfoldMethods Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
Description
Method that adds a BendTable unfold method to the collection and returns the created
UnfoldMethod object.
Syntax
UnfoldMethods.AddBendTableFromFile( Name As String, FileName As String ) As
UnfoldMethod
Parameters
Name Type Description
Name String
Input String used to specify the name of bendtable UnfoldMethod. This name
must be unique with respect to other UnfoldMethod objects. If a unique name is
not provided, an error will occur.
FileName String
Input String used to specify the name of the bend table. This is a text file in the
format specified in the Sheet Metal documentation. When the UnfoldMethod
object is created, the bend table information is extracted from the input file and
saved in the sheet metal document. Not relationship is maintained to the original
bend table file to it can moved or deleted without any loss of bend table info.
This also means that if the text file is changed later, the UnfoldMethod object
will not detect the changes and it will have no impact on the bend table.
Samples
Name Description
Sheet Metal
Style
Creation
This sample illustrates creating a new sheet metal style. It uses a bend table and
assumes the sample bend table delivered with Inventor is available. You can edit the
path below to reference any existing bend table. To use the sample make sure a
bend table is available at the specified path, open a sheet metal document, and run
the sample.
Version
Introduced in version 5.3
UnfoldMethods.AddEquationUnfoldMethod
Method
Parent Object: UnfoldMethods
Description
UnfoldMethods Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
Method that adds an equation linear unfold method to the collection and returns the created
UnfoldMethod object. The new unfold method will have a single equation that specifies that the
bend compensation will be 0 for a bend from 0 to 180 degrees. You can edit the equation to the
desired equation using the functionality of the returned UnfoldMethod object.
Syntax
UnfoldMethods.AddEquationUnfoldMethod( Name As String ) As UnfoldMethod
Parameters
Name Type Description
Name String
Input String used to specify the name of the UnfoldMethod. This name must be
unique with respect to other UnfoldMethod objects. If a unique name is not
provided, an error will occur.
Version
Introduced in version 2011
UnfoldMethods.AddLinearUnfoldMethod
Method
Parent Object: UnfoldMethods
Description
Method that adds a linear unfold method to the collection and returns the created UnfoldMethod
object.
Syntax
UnfoldMethods.AddLinearUnfoldMethod( Name As String, Value As String ) As
UnfoldMethod
Parameters
Name Type Description
Name String
Input String used to specify the name of the UnfoldMethod. This name must be
unique with respect to other UnfoldMethod objects. If a unique name is not
provided, an error will occur.
Value String Input String used to specify the k Factor value for this UnfoldMethod object. This
can be an expression. This parameter determines where the bend allowance is
calculated. The allowable range is from 0 to 1. The bend allowance is calculated
UnfoldMethods Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
using the following equation: 2*Pi*(Bend Radius + Linear Offset*Thickness/2)*
(Bend Angle/360)
Samples
Name Description
Sheet Metal
Style
Creation
This sample illustrates creating a new sheet metal style. It uses a bend table and
assumes the sample bend table delivered with Inventor is available. You can edit the
path below to reference any existing bend table. To use the sample make sure a
bend table is available at the specified path, open a sheet metal document, and run
the sample.
Version
Introduced in version 5.3
UnfoldMethods.Application Property
Parent Object: UnfoldMethods
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UnfoldMethods.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
UnfoldMethods.Count Property
Parent Object: UnfoldMethods
UnfoldMethods Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
Description
Property that returns the number of items in the collection.
Syntax
UnfoldMethods.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
UnfoldMethods.Item Property
Parent Object: UnfoldMethods
Description
Returns the specified UnfoldMethod object from the collection.
Syntax
UnfoldMethods.Item( Index As Variant ) As UnfoldMethod
Property Value
This is a read only property whose value is a UnfoldMethod.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the UnfoldMethod object to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a String indicating the UnfoldMethod name. If an out of range index or a name of
a non-existent UnfoldMethod is provided, an error occurs.
Version
Introduced in version 5.3
UnfoldMethods Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
UnfoldMethods.Type Property
Parent Object: UnfoldMethods
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnfoldMethods.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
UnfoldMethods Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6657.htm 17/06/2025
UnitAttributes Object
Description
UnitAttributes Object.
Properties
Name Description
AlternateDecimalMarkerType
Gets and sets the character to be used as decimal marker for
alternate values.
AlternateLeadingZerosDisplay
Gets and sets whether display the leading zeros for alternate
values.
AlternateLinearPrecision Gets and sets the linear precision for alternate units.
AlternateLinearUnits Gets and sets the alternate units of length measurement.
AlternateTrailingZerosDisplay
Gets and sets whether display the trailing zeros for alternate
values.
AlternateUnitsDisplay Gets and sets whether to display the alternate units.
AlternateUnitTypeDisplay Gets and sets whether display the alternate unit type.
Application
Gets the root Application object. Where the property is weaklytyped,
it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running
with the Apprentice Server.
DisplayStyleProp Gets and sets the display style for alternate units.
Parent
Gets the parent object from whom this object can logically be
reached.
PrimaryDecimalMarkerType
Gets and sets the character to be used as decimal marker for
primary values.
PrimaryLeadingZerosDisplay
Gets and sets whether display the leading zeros for primary
values.
PrimaryLinearUnits Gets and sets the primary units of length measurement.
PrimaryTrailingZerosDisplay
Gets and sets whether display the trailing zeros for primary
values.
PrimaryUnitTypeDisplay Gets and sets whether display the primary unit type.
Type Gets the constant that indicates the type of this object.
UseStandardsNotation Gets and sets whether use the standards notation.
Accessed From
BendNote.UnitAttributes, ChamferNote.UnitAttributes, GeneralNote.UnitAttributes,
LeaderNote.UnitAttributes, PunchNote.UnitAttributes
UnitAttributes Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.AlternateDecimalMarkerType
Property
Parent Object: UnitAttributes
Description
Gets and sets the character to be used as decimal marker for alternate values.
Syntax
UnitAttributes.AlternateDecimalMarkerType() As DecimalMarkerTypeEnum
Property Value
This is a read/write property whose value is a DecimalMarkerTypeEnum.
Version
Introduced in version 2016
UnitAttributes.AlternateLeadingZerosDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the leading zeros for alternate values.
Syntax
UnitAttributes.AlternateLeadingZerosDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UnitAttributes Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.AlternateLinearPrecision
Property
Parent Object: UnitAttributes
Description
Gets and sets the linear precision for alternate units.
Syntax
UnitAttributes.AlternateLinearPrecision() As LinearPrecisionEnum
Property Value
This is a read/write property whose value is a LinearPrecisionEnum.
Version
Introduced in version 2016
UnitAttributes.AlternateLinearUnits
Property
Parent Object: UnitAttributes
Description
Gets and sets the alternate units of length measurement.
Syntax
UnitAttributes.AlternateLinearUnits() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
UnitAttributes Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.AlternateTrailingZerosDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the trailing zeros for alternate values.
Syntax
UnitAttributes.AlternateTrailingZerosDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
UnitAttributes.AlternateUnitsDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether to display the alternate units.
Syntax
UnitAttributes.AlternateUnitsDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UnitAttributes Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.AlternateUnitTypeDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the alternate unit type.
Syntax
UnitAttributes.AlternateUnitTypeDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
UnitAttributes.Application Property
Parent Object: UnitAttributes
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
UnitAttributes.Application() As Object
Property Value
This is a read only property whose value is an Object.
UnitAttributes Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.DisplayStyleProp Property
Parent Object: UnitAttributes
Description
Gets and sets the display style for alternate units.
Syntax
UnitAttributes.DisplayStyleProp() As DimensionStyleFormatEnum
Property Value
This is a read/write property whose value is a DimensionStyleFormatEnum.
Version
Introduced in version 2016
UnitAttributes.Parent Property
Parent Object: UnitAttributes
Description
Gets the parent object from whom this object can logically be reached.
Syntax
UnitAttributes.Parent() As Object
Property Value
This is a read only property whose value is an Object.
UnitAttributes Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.PrimaryDecimalMarkerType
Property
Parent Object: UnitAttributes
Description
Gets and sets the character to be used as decimal marker for primary values.
Syntax
UnitAttributes.PrimaryDecimalMarkerType() As DecimalMarkerTypeEnum
Property Value
This is a read/write property whose value is a DecimalMarkerTypeEnum.
Version
Introduced in version 2016
UnitAttributes.PrimaryLeadingZerosDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the leading zeros for primary values.
Syntax
UnitAttributes.PrimaryLeadingZerosDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UnitAttributes Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.PrimaryLinearUnits Property
Parent Object: UnitAttributes
Description
Gets and sets the primary units of length measurement.
Syntax
UnitAttributes.PrimaryLinearUnits() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Version
Introduced in version 2016
UnitAttributes.PrimaryTrailingZerosDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the trailing zeros for primary values.
Syntax
UnitAttributes.PrimaryTrailingZerosDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UnitAttributes Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.PrimaryUnitTypeDisplay
Property
Parent Object: UnitAttributes
Description
Gets and sets whether display the primary unit type.
Syntax
UnitAttributes.PrimaryUnitTypeDisplay() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
UnitAttributes.Type Property
Parent Object: UnitAttributes
Description
Gets the constant that indicates the type of this object.
Syntax
UnitAttributes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
UnitAttributes Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
Version
Introduced in version 2016
UnitAttributes.UseStandardsNotation
Property
Parent Object: UnitAttributes
Description
Gets and sets whether use the standards notation.
Syntax
UnitAttributes.UseStandardsNotation() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
UnitAttributes Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7E54.htm 17/06/2025
UnitsFormatting Object
Description
UnitsFormatting Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can
be set to (QueryInterfaced for) 'Application' when running with Inventor
whereas, 'ApprenticeServer' when running with the Apprentice Server.
DecimalMarkerType Gets and sets the decimal marker type.
DisplayFormat Gets and sets the display format.
FractionalTextScale Gets and sets the display format.
Parent Gets the parent object from whom this object can logically be reached.
Precision Gets and sets the precision.
ShowUnitString Gets and sets whether to show the unit string or not.
Type Gets the constant that indicates the type of this object.
Units Gets and sets the units.
UnitType Gets and sets the value units type.
Accessed From
HoleTableColumn.UnitsFormatting
Version
Introduced in version 2021
UnitsFormatting.Application Property
Parent Object: UnitsFormatting
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
UnitsFormatting Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
Syntax
UnitsFormatting.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2021
UnitsFormatting.DecimalMarkerType
Property
Parent Object: UnitsFormatting
Description
Gets and sets the decimal marker type.
Syntax
UnitsFormatting.DecimalMarkerType() As DecimalMarkerTypeEnum
Property Value
This is a read/write property whose value is a DecimalMarkerTypeEnum.
Version
Introduced in version 2021
UnitsFormatting.DisplayFormat Property
Parent Object: UnitsFormatting
Description
Gets and sets the display format.
UnitsFormatting Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
Syntax
UnitsFormatting.DisplayFormat() As DisplayFormatEnum
Property Value
This is a read/write property whose value is a DisplayFormatEnum.
Version
Introduced in version 2021
UnitsFormatting.FractionalTextScale
Property
Parent Object: UnitsFormatting
Description
Gets and sets the display format.
Syntax
UnitsFormatting.FractionalTextScale() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2021
UnitsFormatting.Parent Property
Parent Object: UnitsFormatting
Description
Gets the parent object from whom this object can logically be reached.
UnitsFormatting Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
Syntax
UnitsFormatting.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2021
UnitsFormatting.Precision Property
Parent Object: UnitsFormatting
Description
Gets and sets the precision.
Syntax
UnitsFormatting.Precision() As CustomPropertyPrecisionEnum
Property Value
This is a read/write property whose value is a CustomPropertyPrecisionEnum.
Version
Introduced in version 2021
UnitsFormatting.ShowUnitString Property
Parent Object: UnitsFormatting
Description
Gets and sets whether to show the unit string or not.
UnitsFormatting Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
Syntax
UnitsFormatting.ShowUnitString() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
UnitsFormatting.Type Property
Parent Object: UnitsFormatting
Description
Gets the constant that indicates the type of this object.
Syntax
UnitsFormatting.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
UnitsFormatting.Units Property
Parent Object: UnitsFormatting
Description
Gets and sets the units.
UnitsFormatting Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
Syntax
UnitsFormatting.Units() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Version
Introduced in version 2021
UnitsFormatting.UnitType Property
Parent Object: UnitsFormatting
Description
Gets and sets the value units type.
Syntax
UnitsFormatting.UnitType() As ValueUnitsTypeEnum
Property Value
This is a read/write property whose value is a ValueUnitsTypeEnum.
Version
Introduced in version 2021
UnitsFormatting Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh969F.htm 17/06/2025
UnitsOfMeasure Object
Description
The UnitsOfMeasure object supports various functions to allow you to interact with the units associated with
the document.
Methods
Name Description
CompatibleUnits
Method that evaluates the two input expressions and determines if the
result in units that have the same base unit type.
ConvertUnits
Method that converts a value from one unit to another. The input and
output unit specifiers must both define compatible units. For example,
"in" (inches) and "cm" (centimeters) will work because they both define
lengths. If incompatible units are specified, this method will fail. The
converted value, in the units specified by the OutputUnitsSpecifier
argument is returned.
GetDatabaseUnitsFromExpression Evaluates an input string and returns equivalent database units as a string.
GetDrivingParameters
Obtains the driving parameters enumerator corresponding to the input
string.
GetLocaleCorrectedExpression
This method converts the input expression to a locale-friendly version.
For instance, if you input "1.0 in" on a machine set to the German locale,
the return value is "1,0 in". In this case, the decimal separator is different.
GetPreciseStringFromValue
Obtains the precise string along with the units, given a value. The output
units needs to be specified as well.
GetStringFromType
Given a unit type from the UnitsTypeEnum as input, this method returns
the string that can be used to specify the same unit type.
GetStringFromValue
Method that creates a string that represents the input value evaluated
using the specified units.
GetTypeFromString
Given a string defining a unit this method returns the corresponding unit
from the UnitsTypeEnum constant list. If the unit specified by the string
does not exist in the constant list an error will occur. For example,
inputting "mm" will return kMillimeterLengthUnits. This method is not
currently supported when the UnitsOfMeasure object was obtained using
Apprentice.
GetValueFromExpression
Method that evaluates the input expression using the units specified and
returns a value in database units.
IsExpressionValid Returns whether the input expression is valid or not.
Properties
Name Description
AngleDisplayPrecision
Gets/Sets the number of places to display after the decimal point, when displaying
an angle value.
AngleUnits Gets/Sets the default unit of angle for this Document.
LengthDisplayPrecision
Gets/Sets the number of places to display after the decimal point, when displaying a
length value.
LengthUnits Gets/Sets the default unit of length for this Document.
MassUnits Gets/Sets the default unit of mass for this Document.
UnitsOfMeasure Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Parent Property returning the parent Document object.
TimeUnits Gets/Sets the default unit of time for this Document.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.UnitsOfMeasure, ApprenticeServerDocument.UnitsOfMeasure,
ApprenticeServerDrawingDocument.UnitsOfMeasure, AssemblyDocument.UnitsOfMeasure,
Document.UnitsOfMeasure, DrawingDocument.UnitsOfMeasure, InventorServer.UnitsOfMeasure,
InventorServerObject.UnitsOfMeasure, PartDocument.UnitsOfMeasure,
PresentationDocument.UnitsOfMeasure
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the triangle mesh
of whatever Part you have open. It then creates either a discrete-band or continuous color
mapper and allows you to adjust the values of the mapper to change the range of values that
map to various colors.
Create or
update custom
iProperty
This example creates a custom iProperty if it doesn't exist and updates the value if it does
already exist. A part document must be open before runnin the sample.
Using measure
events
This sample demonstrates using the measure events to measure distance and angle.
Interactive measure is dependent on events and VB only supports events within a class
module. To use the sample copy the InteractiveMeasureDistance and
InteractiveMeasureAngle subs into a code module. Create a new class module called
clsMeasure and copy all of the rest of the code into it.
True length of
sweep feature
This sample demonstrates the calculation of the true length of a sweep feature. If the
centroid of the sweep profile does not lie on the sweep path, the true length of the sweep
feature is not the same as the sum of lengths of the path entities.
Version
Introduced in version 4
UnitsOfMeasure.AngleDisplayPrecision Property
Parent Object: UnitsOfMeasure
Description
Gets/Sets the number of places to display after the decimal point, when displaying an angle value.
Syntax
UnitsOfMeasure.AngleDisplayPrecision() As Long
Property Value
This is a read/write property whose value is a Long.
UnitsOfMeasure Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Version
Introduced in version 4
UnitsOfMeasure.AngleUnits Property
Parent Object: UnitsOfMeasure
Description
Gets/Sets the default unit of angle for this Document.
Syntax
UnitsOfMeasure.AngleUnits() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Version
Introduced in version 4
UnitsOfMeasure.CompatibleUnits Method
Parent Object: UnitsOfMeasure
Description
Method that evaluates the two input expressions and determines if the result in units that have the same base
unit type.
Syntax
UnitsOfMeasure.CompatibleUnits( Expression1 As String, UnitsSpecifier1 As Variant, Expression2 As
String, UnitsSpecifier2 As Variant ) As Boolean
Parameters
Name Type Description
Expression1 String The first expression to be used in the comparison.
UnitsSpecifier1 Variant Input variant value that specifies the unit type the first expression is to be evaluated
with. You specify a unit type using a value from UnitsTypeEnum or a string that
describes a unit. For example, both of the following are valid unit specifiers for
inch\: kInchLengthUnits and "in". String specifiers are typically used for units that
are not defined in the enum list. For example, the volume measure for cubic inches
UnitsOfMeasure Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
is not defined in the enum list but you can specify it using the string "in in in". A
common use of this method will be to evaluate an expression using the current
display units of the document. For example if the expression should define a length
you can use kDefaultDisplayLengthUnit as the unit specifier so the expression will
be evaluated as a length in the current document units. The enum values that specify
to use the document default display units are kDefaultDisplayLengthUnit,
kDefaultDisplayAngleUnit, kDefaultDisplayMassUnit, kDefaultDisplayTimeUnit,
and kDefaultDisplayTemperatureUnit.
Expression2 String The second expression to be used in the comparison.
UnitsSpecifier2 Variant
Input variant value that specifies the unit type the second expression is to be
evaluated with. You specify a unit type using a value from UnitsTypeEnum or a
string that describes a unit. For example, both of the following are valid unit
specifiers for inch\: kInchLengthUnits and "in". String specifiers are typically used
for units that are not defined in the enum list. For example, the volume measure for
cubic inches is not defined in the enum list but you can specify it using the string "in
in in". A common use of this method will be to evaluate an expression using the
current display units of the document. For example if the expression should define a
length you can use kDefaultDisplayLengthUnit as the unit specifier so the
expression will be evaluated as a length in the current document units. The enum
values that specify to use the document default display units are
kDefaultDisplayLengthUnit, kDefaultDisplayAngleUnit, kDefaultDisplayMassUnit,
kDefaultDisplayTimeUnit, and kDefaultDisplayTemperatureUnit.
Remarks
For example comparing the two expressions '3.45 in + 3 cm' and '1 ft' will return True because both
expressions result in values that defined lengths. The two expression '3 cm * 5 cm' and '1 ft' will return False
because the first expression results in an area and the second is a length. This method will also return False in
the case where either Expression1 or Expression2 is not valid and cannot be evaluated.
Version
Introduced in version 8
UnitsOfMeasure.ConvertUnits Method
Parent Object: UnitsOfMeasure
Description
Method that converts a value from one unit to another. The input and output unit specifiers must both define
compatible units. For example, "in" (inches) and "cm" (centimeters) will work because they both define
lengths. If incompatible units are specified, this method will fail. The converted value, in the units specified
by the OutputUnitsSpecifier argument is returned.
Syntax
UnitsOfMeasure.ConvertUnits( Value As Double, InputUnitsSpecifier As Variant, OutputUnitsSpecifier
As Variant ) As Double
UnitsOfMeasure Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Parameters
Name Type Description
Value Double
Input Double value that specifies the value to be converted. This value is in the
units specified by the InputUnitsSpecifier argument.
InputUnitsSpecifier Variant
Input Variant value that specifies the unit type of the input value. You specify
a unit type using a value from UnitsTypeEnum or a string that describes a unit.
For example, both of the following are valid unit specifiers for inch:
kInchLengthUnits and "in". String specifiers are typically used for units that
are not defined in the enum list. For example, the volume measure for cubic
inches is not defined in the enum list but you can specify it using the string "in
in in".
OutputUnitsSpecifier Variant
Input Variant value that specifies the unit type of the output value. You
specify a unit type using a value from UnitsTypeEnum or a string that
describes a unit. For example, both of the following are valid unit specifiers
for inch: kInchLengthUnits and "in". String specifiers are typically used for
units that are not defined in the enum list. For example, the volume measure
for cubic inches is not defined in the enum list but you can specify it using the
string "in in in".
Version
Introduced in version 8
UnitsOfMeasure.GetDatabaseUnitsFromExpression
Method
Parent Object: UnitsOfMeasure
Description
Evaluates an input string and returns equivalent database units as a string.
Syntax
UnitsOfMeasure.GetDatabaseUnitsFromExpression( Expression As String, UnitsSpecifier As Variant ) As
String
Parameters
Name Type Description
Expression String
Input String value that contains the expression to evaluate. This string is evaluated
the same ways a string entered in any of the Autodesk Inventor dialogs are evaluated.
For example "3 in / 2 cm" is a valid string for input.
UnitsSpecifier Variant
Input Variant value that specifies the unit type of the input value. You specify a unit
type using a value from UnitsTypeEnum or a string that describes a unit. For
example, both of the following are valid unit specifiers for inch: kInchLengthUnits
and "in". String specifiers are typically used for units that are not defined in the enum
list. For example, the volume measure for cubic inches is not defined in the enum list
but you can specify it using the string "in in in".
UnitsOfMeasure Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Version
Introduced in version 11
UnitsOfMeasure.GetDrivingParameters Method
Parent Object: UnitsOfMeasure
Description
Obtains the driving parameters enumerator corresponding to the input string.
Syntax
UnitsOfMeasure.GetDrivingParameters( Expression As String ) As ParametersEnumerator
Parameters
Name Type Description
Expression String
Input String value that contains the expression to evaluate. This string is evaluated the
same ways a string entered in any of the Autodesk Inventor dialogs are evaluated. For
example "3 in / 2 cm" is a valid string for input.
Version
Introduced in version 11
UnitsOfMeasure.GetLocaleCorrectedExpression
Method
Parent Object: UnitsOfMeasure
Description
This method converts the input expression to a locale-friendly version. For instance, if you input "1.0 in" on a
machine set to the German locale, the return value is "1,0 in". In this case, the decimal separator is different.
Syntax
UnitsOfMeasure.GetLocaleCorrectedExpression( Expression As String, UnitsSpecifier As Variant ) As
String
Parameters
Name Type Description
Expression String
UnitsOfMeasure Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Input String value that contains the expression to evaluate. This string is evaluated
the same ways a string entered in any of the Autodesk Inventor dialogs are evaluated.
For example "3 in / 2 cm" is a valid string for input.
UnitsSpecifier Variant
Input variant value that specifies the unit type the string is to be returned in. You
specify a unit type using a value from UnitsTypeEnum or a string that describes a
unit. For example, both of the following are valid unit specifiers for inch:
kInchLengthUnits and 'in'. string specifiers are typically used for units that are not
defined in the enum list. For example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string 'in in in'.
Version
Introduced in version 10
UnitsOfMeasure.GetPreciseStringFromValue
Method
Parent Object: UnitsOfMeasure
Description
Obtains the precise string along with the units, given a value. The output units needs to be specified as well.
Syntax
UnitsOfMeasure.GetPreciseStringFromValue( Value As Double, UnitsSpecifier As Variant ) As String
Parameters
Name Type Description
Value Double Value from which to obtain precise string and units.
UnitsSpecifier Variant
Input variant value that specifies the unit type the string is to be returned in. You
specify a unit type using a value from UnitsTypeEnum or a string that describes a
unit. For example, both of the following are valid unit specifiers for inch:
kInchLengthUnits and "in". string specifiers are typically used for units that are not
defined in the enum list. For example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string "in in in".
Version
Introduced in version 11
UnitsOfMeasure.GetStringFromType Method
Parent Object: UnitsOfMeasure
Description
UnitsOfMeasure Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Given a unit type from the UnitsTypeEnum as input, this method returns the string that can be used to specify
the same unit type.
Syntax
UnitsOfMeasure.GetStringFromType( UnitsType As UnitsTypeEnum ) As String
Parameters
Name Type Description
UnitsType UnitsTypeEnum Input constant value that specifies the unit type.
Remarks
For example if you input k kInchLengthUnits it will return the string "in." If one of the default unit types is
specified, (kDefaultDisplayLengthUnits, kDefaultDisplayAngleUnits, kDefaultDisplayMassUnits,
kDefaultDisplayTimeUnits, or kDefaultDisplayTemperatureUnits) this will return the string corresponding to
the document default for that unit type. This method is currently not supported when the UnitsOfMeasure
object was obtained using Apprentice.
Samples
Name Description
Create or update
custom iProperty
This example creates a custom iProperty if it doesn't exist and updates the value if it
does already exist. A part document must be open before runnin the sample.
Version
Introduced in version 4
UnitsOfMeasure.GetStringFromValue Method
Parent Object: UnitsOfMeasure
Description
Method that creates a string that represents the input value evaluated using the specified units.
Syntax
UnitsOfMeasure.GetStringFromValue( Value As Double, UnitsSpecifier As Variant ) As String
Parameters
Name Type Description
Value Double
Input Double value that contains the value in database units for the unit category
specified in the second argument.
UnitsSpecifier Variant
UnitsOfMeasure Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Input variant value that specifies the unit type the string is to be returned in. You
specify a unit type using a value from UnitsTypeEnum or a string that describes a
unit. For example, both of the following are valid unit specifiers for inch:
kInchLengthUnits and "in". string specifiers are typically used for units that are not
defined in the enum list. For example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string "in in in".
Remarks
The input value is always in database units. The units can be defined using one the predefined units in the
UnitTypeEnum enum or you can define your own unit type by combining known units in a string. You can
also use the default unit types, (kDefaultDisplayLengthUnits, kDefaultDisplayAngleUnits,
kDefaultDisplayMassUnits, kDefaultDisplayTimeUnits, or kDefaultDisplayTemperatureUnits), to use the
current unit type defined in the document. For example, if the current length unit of the document is Inches
and the precision for the length units is 3 decimal places, inputting 25.0 for the value and
kDefaultDisplayLengthUnits for the units specifier will return the string '9.843 in'. This method fails when
the value cannot be evaluated using the specified units specifier. This method is currently not supported when
the UnitsOfMeasure object was obtained using Apprentice. A common use of this method will be to evaluate
a value using the current display units of the document. For \example if the value defines a length you can use
kDefaultDisplayLengthUnits as the unit specifier so the value will be evaluated as a length in the current
document units. The enum values that specify to use the document default display units are
kDefaultDisplayLengthUnits, kDefaultDisplayAngleUnits, kDefaultDisplayMassUnits,
kDefaultDisplayTimeUnits, and kDefaultDisplayTemperatureUnits.
Samples
Name Description
Create or
update
custom
iProperty
This example creates a custom iProperty if it doesn't exist and updates the value if it does
already exist. A part document must be open before runnin the sample.
Using
measure
events
This sample demonstrates using the measure events to measure distance and angle. Interactive
measure is dependent on events and VB only supports events within a class module. To use
the sample copy the InteractiveMeasureDistance and InteractiveMeasureAngle subs into a
code module. Create a new class module called clsMeasure and copy all of the rest of the code
into it.
True length
of sweep
feature
This sample demonstrates the calculation of the true length of a sweep feature. If the centroid
of the sweep profile does not lie on the sweep path, the true length of the sweep feature is not
the same as the sum of lengths of the path entities.
Version
Introduced in version 4
UnitsOfMeasure.GetTypeFromString Method
Parent Object: UnitsOfMeasure
Description
Given a string defining a unit this method returns the corresponding unit from the UnitsTypeEnum constant
list. If the unit specified by the string does not exist in the constant list an error will occur. For example,
UnitsOfMeasure Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
inputting "mm" will return kMillimeterLengthUnits. This method is not currently supported when the
UnitsOfMeasure object was obtained using Apprentice.
Syntax
UnitsOfMeasure.GetTypeFromString( UnitsString As String ) As UnitsTypeEnum
Parameters
Name Type Description
UnitsString String Input string specifies the unit type.
Version
Introduced in version 4
UnitsOfMeasure.GetValueFromExpression
Method
Parent Object: UnitsOfMeasure
Description
Method that evaluates the input expression using the units specified and returns a value in database units.
Syntax
UnitsOfMeasure.GetValueFromExpression( Expression As String, UnitsSpecifier As Variant ) As Variant
Parameters
Name Type Description
Expression String
Input String value that contains the expression to evaluate. This string is evaluated
the same ways a string entered in any of the Autodesk Inventor dialogs are evaluated.
For example "3 in / 2 cm" is a valid string for input.
UnitsSpecifier Variant
Input variant value that specifies the unit type the expression is to be evaluated with.
You specify a unit type using a value from UnitsTypeEnum or a string that describes
a unit. For example, both of the following are valid unit specifiers for inch:
kInchLengthUnits and "in." String specifiers are typically used for units that are not
defined in the enum list. For example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string "in in in."
Remarks
Example: the string "34 in / 2" with a length unit specifier, will return the value 43.1800. The UnitsSpecifier
is used to determine the type of unit that is expected, (i.e.. area, volume, velocity, etc.) and is used for values
that do not have an explicit type defined. For example the expression "4 * 5" with a units specifier of "mm
mm" would be assumed to be "4 mm * 5 mm." An error occurs if the string cannot be evaluated. This method
is currently not supported when the UnitsOfMeasure object was obtained using Apprentice. A common use of
UnitsOfMeasure Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
this method will be to evaluate an expression using the current display units of the document. For example if
the expression should define a length you can use kDefaultDisplayLengthUnits as the unit specifier so the
expression will be evaluated as a length in the current document units. The enum values that specify to use
the document default display units are kDefaultDisplayLengthUnits, kDefaultDisplayAngleUnits,
kDefaultDisplayMassUnits, kDefaultDisplayTimeUnits, and kDefaultDisplayTemperatureUnits. The input
expression is specified by a string. This string may or may not specify a unit type (for example, "1" versus "1
in"). In the case where the string expression does not specify a unit type, the additional unit-type argument is
required to determine the unit type. Note: Up to and including Autodesk Inventor 10, if the string expression
does specify a unit type, the UnitsSpecifier type specified will be ignored because the unit type is obtained
from the string expression. However, subsequent releases of Autodesk Inventor will return an error condition
if the two unit types do not match.
Version
Introduced in version 4
UnitsOfMeasure.IsExpressionValid Method
Parent Object: UnitsOfMeasure
Description
Returns whether the input expression is valid or not.
Syntax
UnitsOfMeasure.IsExpressionValid( Expression As String, UnitsSpecifier As Variant ) As Boolean
Parameters
Name Type Description
Expression String
Input String value that specifies the equation. This string is evaluated the same way
as strings entered in any of the Inventor dialogs are evaluated. For example '3 in + 2
cm' is a valid string for input.
UnitsSpecifier Variant
Input value that specifies the type of unit the expression should be evaluated. The
units can be specified using either a string defining a valid unit or an item from the
UnitsTypeEnum. If the expression does specify a unit type, it should match the unit
type specified by the UnitsSpecifier, otherwise an error will occur.
Version
Introduced in version 2008
UnitsOfMeasure.LengthDisplayPrecision Property
Parent Object: UnitsOfMeasure
Description
UnitsOfMeasure Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Gets/Sets the number of places to display after the decimal point, when displaying a length value.
Syntax
UnitsOfMeasure.LengthDisplayPrecision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 4
UnitsOfMeasure.LengthUnits Property
Parent Object: UnitsOfMeasure
Description
Gets/Sets the default unit of length for this Document.
Syntax
UnitsOfMeasure.LengthUnits() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Samples
Name Description
Client graphics
texture-based
color mapping
This test applies texture coordinates expressing distance from the origin to 'the triangle
mesh of whatever Part you have open. It then creates either a discrete-band or continuous
color mapper and allows you to adjust the values of the mapper to change the range of
values that map to various colors.
Create or update
custom iProperty
This example creates a custom iProperty if it doesn't exist and updates the value if it does
already exist. A part document must be open before runnin the sample.
Version
Introduced in version 4
UnitsOfMeasure.MassUnits Property
Parent Object: UnitsOfMeasure
UnitsOfMeasure Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Description
Gets/Sets the default unit of mass for this Document.
Syntax
UnitsOfMeasure.MassUnits() As UnitsTypeEnum
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Version
Introduced in version 4
UnitsOfMeasure.Parent Property
Parent Object: UnitsOfMeasure
Description
Property returning the parent Document object.
Syntax
UnitsOfMeasure.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
UnitsOfMeasure.TimeUnits Property
Parent Object: UnitsOfMeasure
Description
Gets/Sets the default unit of time for this Document.
Syntax
UnitsOfMeasure.TimeUnits() As UnitsTypeEnum
UnitsOfMeasure Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
Property Value
This is a read/write property whose value is a UnitsTypeEnum.
Version
Introduced in version 4
UnitsOfMeasure.Type Property
Parent Object: UnitsOfMeasure
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnitsOfMeasure.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
UnitsOfMeasure Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A82.htm 17/06/2025
UnitVector Object
Description
The UnitVector object. For more information, see the Transient Geometry overview.
Methods
Name Description
AngleTo Determines the angle between this vector and the specified vector.
AsVector Get the vector equivalent of this unit vector.
Copy
Creates a copy of this UnitVector object. The result is entirely independent
and can be edited without affecting the original UnitVector object.
CrossProduct Determine the cross product between this vector and the specified vector.
DotProduct Determine the dot product of this vector to the specified vector.
GetUnitVectorData Get the data defining this unit vector.
IsEqualTo Compare this unit vector for equality to the specified unit vector.
IsParallelTo Determine if this vector is parallel to the specified vector.
IsPerpendicularTo Determine if this vector is perpendicular to the specified vector.
PutUnitVectorData Method that sets the data defining this unit vector.
TransformBy Transform this vector by the specified matrix.
Properties
Name Description
X Specifies the X coordinate of the vector. If not supplied, the X value will default to 0.
Y Specifies the Y coordinate of the vector. If not supplied, the Y value will default to 0.
Z Specifies the Z coordinate of the vector. If not supplied, the Z value will default to 1.
Accessed From
Arc3d.Normal, Arc3d.ReferenceVector, AssemblyWorkAxisDef.Axis,
AssemblyWorkAxisDef.GetData, AssemblyWorkPlaneDef.GetData,
AssemblyWorkPlaneDef.XAxis, AssemblyWorkPlaneDef.YAxis,
BIMCableTrayConnectorDefinition.Direction,
BIMCableTrayConnectorDefinition.HeightDirection,
BIMCableTrayConnectorDefinition.WidthDirection, BIMConduitConnectorDefinition.Direction,
BIMConnectorDefinition.Direction, BIMDuctConnectorDefinition.Direction,
BIMDuctConnectorDefinition.HeightDirection, BIMDuctConnectorDefinition.WidthDirection,
BIMElectricalConnectorDefinition.Direction, BIMPipeConnectorDefinition.Direction,
Camera.UpVector, Circle.Normal, Cone.AxisVector, CoreCavityDefinition.PullDirection,
Cylinder.AxisVector, DWGArc.Normal, DWGArcProxy.Normal, DWGEllipticalArc.Normal,
DWGEllipticalArcProxy.Normal, DWGLine.Direction, DWGLineProxy.Direction,
EllipseFull.Normal, EllipticalArc.MajorAxis, EllipticalArc.MinorAxis,
UnitVector Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
EllipticalCone.AxisVector, EllipticalCylinder.AxisVector, FixedWorkAxisDef.Axis,
FixedWorkAxisDef.GetData, FixedWorkPlaneDef.GetData, FixedWorkPlaneDef.XAxis,
FixedWorkPlaneDef.YAxis, GraphicsNormalSet.Normal, GroundPlaneSettings.FrontDirection,
GroundPlaneSettings.UpDirection, Line.Direction, LineSegment.Direction,
MoldDefinition.PullDirection, Plane.Normal, PointCloudPlane.GetPlaneRectangle,
PointCloudPlaneProxy.GetPlaneRectangle, PresentationTweak.GetRotationData,
SketchEllipse3D.MajorAxisVector, SketchEllipse3DProxy.MajorAxisVector,
SketchEllipticalArc3D.MajorAxisVector, SketchEllipticalArc3DProxy.MajorAxisVector,
SketchSplineHandle3D.Tangent, SketchSplineHandle3DProxy.Tangent, Torus.AxisVector,
TransientGeometry.CreateUnitVector, UnitVector.Copy, UnitVector.CrossProduct,
Vector.AsUnitVector, WorkPlane.GetPosition, WorkPlaneProxy.GetPosition
Samples
Name Description
Offset a 2D
sketch
This sample demonstrates the creation of offsets in 2d sketches. Two ways of
creating the offset are shown - one uses a distance and the other uses the input
point.
Create curve
primitives
This sample demonstrates the creation of curve primitives (lines, arcs, circles,
etc.) using client graphics.
Version
Introduced in version 4
UnitVector.AngleTo Method
Parent Object: UnitVector
Description
Determines the angle between this vector and the specified vector.
Syntax
UnitVector.AngleTo( Argument As UnitVector ) As Double
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Remarks
When one of the input vectors is null (0,0,0) this method will return -NaN.
UnitVector Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Version
Introduced in version 4
UnitVector.AsVector Method
Parent Object: UnitVector
Description
Get the vector equivalent of this unit vector.
Syntax
UnitVector.AsVector() As Vector
Samples
Name Description
Is cylindrical face
interior or exterior?
This sample shows how to determine whether the selected cylindircal
face is an exterior face or an interior (hollow) face.
Version
Introduced in version 4
UnitVector.Copy Method
Parent Object: UnitVector
Description
Creates a copy of this UnitVector object. The result is entirely independent and can be edited
without affecting the original UnitVector object.
Syntax
UnitVector.Copy() As UnitVector
UnitVector Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Version
Introduced in version 2013
UnitVector.CrossProduct Method
Parent Object: UnitVector
Description
Determine the cross product between this vector and the specified vector.
Syntax
UnitVector.CrossProduct( Argument As UnitVector ) As UnitVector
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Samples
Name Description
Create a 3D sketch
dimension
This sample demonstrates the creation of a 3d sketch line and a dimension
between the start and the end points of the line.
Offset a 2D sketch
This sample demonstrates the creation of offsets in 2d sketches. Two ways of
creating the offset are shown - one uses a distance and the other uses the input
point.
Version
Introduced in version 4
UnitVector.DotProduct Method
Parent Object: UnitVector
Description
Determine the dot product of this vector to the specified vector.
UnitVector Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Syntax
UnitVector.DotProduct( Argument As UnitVector ) As Double
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Version
Introduced in version 4
UnitVector.GetUnitVectorData Method
Parent Object: UnitVector
Description
Get the data defining this unit vector.
Syntax
UnitVector.GetUnitVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
UnitVector.IsEqualTo Method
Parent Object: UnitVector
Description
Compare this unit vector for equality to the specified unit vector.
UnitVector Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Syntax
UnitVector.IsEqualTo( Argument As UnitVector, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining
whether the UnitVectors are equal.
This is an optional argument whose default value is 0.0.
Samples
Name Description
Offset a 2D
sketch
This sample demonstrates the creation of offsets in 2d sketches. Two ways of
creating the offset are shown - one uses a distance and the other uses the input point.
Version
Introduced in version 4
UnitVector.IsParallelTo Method
Parent Object: UnitVector
Description
Determine if this vector is parallel to the specified vector.
Syntax
UnitVector.IsParallelTo( Argument As UnitVector, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining
whether the UnitVectors are parallel.
This is an optional argument whose default value is 0.0.
UnitVector Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Version
Introduced in version 4
UnitVector.IsPerpendicularTo Method
Parent Object: UnitVector
Description
Determine if this vector is perpendicular to the specified vector.
Syntax
UnitVector.IsPerpendicularTo( Argument As UnitVector, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Argument UnitVector Input used for comparison.
Tolerance Double
Input Double that specifies the tolerance to be used when determining
whether the vectors are perpendicular.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 4
UnitVector.PutUnitVectorData Method
Parent Object: UnitVector
Description
Method that sets the data defining this unit vector.
Syntax
UnitVector.PutUnitVectorData( Coords() As Double )
UnitVector Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
UnitVector.TransformBy Method
Parent Object: UnitVector
Description
Transform this vector by the specified matrix.
Syntax
UnitVector.TransformBy( Matrix As Matrix )
Parameters
Name Type Description
Matrix Matrix Input Matrix object that specifies the matrix to transform the vector by.
Version
Introduced in version 4
UnitVector.X Property
Parent Object: UnitVector
Description
Specifies the X coordinate of the vector. If not supplied, the X value will default to 0.
Syntax
UnitVector.X() As Double
UnitVector Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
UnitVector.Y Property
Parent Object: UnitVector
Description
Specifies the Y coordinate of the vector. If not supplied, the Y value will default to 0.
Syntax
UnitVector.Y() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
UnitVector.Z Property
Parent Object: UnitVector
Description
Specifies the Z coordinate of the vector. If not supplied, the Z value will default to 1.
Syntax
UnitVector.Z() As Double
UnitVector Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
UnitVector Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh502B.htm 17/06/2025
UnitVector2d Object
Description
The UnitVector2d object. For more information, see the Transient Geometry overview.
Methods
Name Description
AngleTo
Determines the angle between this unit vector2d and the specified unit
vector2d.
AsVector Get the vector2d equivalent of this unit vector2d.
Copy
Creates a copy of this UnitVector2d object. The result is entirely independent
and can be edited without affecting the original UnitVector2d object.
DotProduct Determine the dot product of this unit vector2d to the specified unit vector2d.
GetUnitVectorData Get the data defining this unit vector.
IsEqualTo Compare this unit vector2d for equality to the specified unit vector2d.
IsParallelTo Determine if this unit vector2d is parallel to the specified unit vector2d.
IsPerpendicularTo
Determine if this unit vector2d is perpendicular to the specified unit
vector2d.
PutUnitVectorData Method that sets the data defining this unit vector.
TransformBy Transform this unit vector2d by the specified matrix.
Properties
Name Description
X Gets the X-component for this UnitVector2d.
Y Gets the Y-component for this UnitVector2d.
Accessed From
Centermark.ExtensionPointFourDirection, Centermark.ExtensionPointOneDirection,
Centermark.ExtensionPointThreeDirection, Centermark.ExtensionPointTwoDirection,
EllipticalArc2d.MajorAxis, Line2d.Direction, LineSegment2d.Direction,
SketchEllipse.MajorAxisVector, SketchEllipseProxy.MajorAxisVector,
SketchEllipticalArc.MajorAxisVector, SketchEllipticalArcProxy.MajorAxisVector,
SketchSplineHandle.Tangent, SketchSplineHandleProxy.Tangent,
TransientGeometry.CreateUnitVector2d, UnitVector2d.Copy, Vector2d.AsUnitVector
Samples
Name Description
UnitVector2d Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Offset a 2D
sketch
This sample demonstrates the creation of offsets in 2d sketches. Two ways of
creating the offset are shown - one uses a distance and the other uses the input
point.
Create sketch
elliptical arc
This sample demonstrates creating an elliptical arc in a sketch and dimensioning
its minor radius.
Version
Introduced in version 4
UnitVector2d.AngleTo Method
Parent Object: UnitVector2d
Description
Determines the angle between this unit vector2d and the specified unit vector2d.
Syntax
UnitVector2d.AngleTo( Vector As UnitVector2d ) As Double
Parameters
Name Type Description
Vector UnitVector2d 2nd vector to measure to.
Version
Introduced in version 11
UnitVector2d.AsVector Method
Parent Object: UnitVector2d
Description
Get the vector2d equivalent of this unit vector2d.
Syntax
UnitVector2d.AsVector() As Vector2d
UnitVector2d Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Version
Introduced in version 11
UnitVector2d.Copy Method
Parent Object: UnitVector2d
Description
Creates a copy of this UnitVector2d object. The result is entirely independent and can be edited
without affecting the original UnitVector2d object.
Syntax
UnitVector2d.Copy() As UnitVector2d
Version
Introduced in version 2013
UnitVector2d.DotProduct Method
Parent Object: UnitVector2d
Description
Determine the dot product of this unit vector2d to the specified unit vector2d.
Syntax
UnitVector2d.DotProduct( Vector As UnitVector2d ) As Double
Parameters
Name Type Description
Vector UnitVector2d 2nd vector to use to calculate dot product.
Version
Introduced in version 11
UnitVector2d Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
UnitVector2d.GetUnitVectorData Method
Parent Object: UnitVector2d
Description
Get the data defining this unit vector.
Syntax
UnitVector2d.GetUnitVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
UnitVector2d.IsEqualTo Method
Parent Object: UnitVector2d
Description
Compare this unit vector2d for equality to the specified unit vector2d.
Syntax
UnitVector2d.IsEqualTo( Vector As UnitVector2d, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Vector UnitVector2d Vector to compare to.
Tolerance Double
Tolerance for comparison.
This is an optional argument whose default value is 0.0.
UnitVector2d Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Version
Introduced in version 11
UnitVector2d.IsParallelTo Method
Parent Object: UnitVector2d
Description
Determine if this unit vector2d is parallel to the specified unit vector2d.
Syntax
UnitVector2d.IsParallelTo( Vector As UnitVector2d, [Tolerance] As Double ) As Boolean
Parameters
Name Type Description
Vector UnitVector2d Vector with which to test parallel status.
Tolerance Double
Tolerance for test.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 11
UnitVector2d.IsPerpendicularTo Method
Parent Object: UnitVector2d
Description
Determine if this unit vector2d is perpendicular to the specified unit vector2d.
Syntax
UnitVector2d.IsPerpendicularTo( Vector As UnitVector2d, [Tolerance] As Double ) As
Boolean
UnitVector2d Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Parameters
Name Type Description
Vector UnitVector2d Vector with which to test perpendicular status.
Tolerance Double
Tolerance for test.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 11
UnitVector2d.PutUnitVectorData Method
Parent Object: UnitVector2d
Description
Method that sets the data defining this unit vector.
Syntax
UnitVector2d.PutUnitVectorData( Coords() As Double )
Parameters
Name Type Description
Coords Double Input/output Double that specifies the entity's coordinates.
Version
Introduced in version 4
UnitVector2d.TransformBy Method
Parent Object: UnitVector2d
Description
Transform this unit vector2d by the specified matrix.
UnitVector2d Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Syntax
UnitVector2d.TransformBy( Value As Matrix2d )
Parameters
Name Type Description
Value Matrix2d Matrix2d for transform.
Version
Introduced in version 11
UnitVector2d.X Property
Parent Object: UnitVector2d
Description
Gets the X-component for this UnitVector2d.
Syntax
UnitVector2d.X() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
UnitVector2d.Y Property
Parent Object: UnitVector2d
Description
Gets the Y-component for this UnitVector2d.
UnitVector2d Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
Syntax
UnitVector2d.Y() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 4
UnitVector2d Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6818.htm 17/06/2025
UnwrapDefinition Object
Description
UnwrapDefinition Object.
Methods
Name Description
Copy
Method that creates a copy of this UnwrapDefinition object. The new UnwrapDefinition
object is independent of any feature. It can edited and used as input to edit an existing
feature or to create a new unwrap feature. One typical use of this method is when you need
to make several changes to an existing unwrap feature. If you edit the UnwrapDefinition
object associated with the unwrap feature, the feature will recompute after each edit. It’s
more efficient to make a copy, edit the copy, and then assign the copy to the feature. This
will result in a single recompute. The UnwrapFeatures.CreateDefinition method can also
be used to create an independent UnwrapDefinition object. The difference is that one
created with the Copy method will have the same initial values as the object is was copied
from. One that’s created with the CreateDefinition method will be initialized to predefined
default values.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can
be set to (QueryInterfaced for) 'Application' when running with Inventor
whereas, 'ApprenticeServer' when running with the Apprentice Server.
AutomaticFaceChain
Read-write Property that gets and sets whether or not to use all tangentially
connected faces. A value of True indicates that automatic face chaining of
tangentially connected faces should be performed.
InputFaces Read-write property that gets and sets the faces to unwrap.
LinearResult
Read-write property that gets and sets an EdgeCollection that specifies a set
of consecutive edges to become a single colinear segment in the result. The
edges should be from the faces in the Faces property and only outer edges
that enclose the faces are valid.
MergeResultBody Read-write property that gets and sets whether merge the result body or not.
Origin Read-write property that gets and sets the vertex as origin.
Parent Gets the parent object from whom this object can logically be reached.
ResultAlignment Read-write property that gets and sets alignment of the deformed result.
RigidResult
Read-write property that gets and sets an EdgeCollection that specifies a set
of consecutive planar edges to remain undeformed.
Type Gets the constant that indicates the type of this object.
UnwrapDefinition Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Accessed From
UnwrapDefinition.Copy, UnwrapFeature.Definition, UnwrapFeatureProxy.Definition,
UnwrapFeatures.CreateDefinition
Version
Introduced in version 2020
UnwrapDefinition.Application Property
Parent Object: UnwrapDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
UnwrapDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2020
UnwrapDefinition.AutomaticFaceChain
Property
Parent Object: UnwrapDefinition
Description
Read-write Property that gets and sets whether or not to use all tangentially connected faces. A
value of True indicates that automatic face chaining of tangentially connected faces should be
performed.
UnwrapDefinition Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Syntax
UnwrapDefinition.AutomaticFaceChain() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapDefinition.Copy Method
Parent Object: UnwrapDefinition
Description
Method that creates a copy of this UnwrapDefinition object. The new UnwrapDefinition object is
independent of any feature. It can edited and used as input to edit an existing feature or to create a
new unwrap feature.
One typical use of this method is when you need to make several changes to an existing unwrap
feature. If you edit the UnwrapDefinition object associated with the unwrap feature, the feature
will recompute after each edit. It’s more efficient to make a copy, edit the copy, and then assign
the copy to the feature. This will result in a single recompute.
The UnwrapFeatures.CreateDefinition method can also be used to create an independent
UnwrapDefinition object. The difference is that one created with the Copy method will have the
same initial values as the object is was copied from. One that’s created with the CreateDefinition
method will be initialized to predefined default values.
Syntax
UnwrapDefinition.Copy() As UnwrapDefinition
Version
Introduced in version 2020
UnwrapDefinition.InputFaces Property
Parent Object: UnwrapDefinition
UnwrapDefinition Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Description
Read-write property that gets and sets the faces to unwrap.
Syntax
UnwrapDefinition.InputFaces() As FaceCollection
Property Value
This is a read/write property whose value is a FaceCollection.
Version
Introduced in version 2020
UnwrapDefinition.LinearResult Property
Parent Object: UnwrapDefinition
Description
Read-write property that gets and sets an EdgeCollection that specifies a set of consecutive edges
to become a single colinear segment in the result. The edges should be from the faces in the Faces
property and only outer edges that enclose the faces are valid.
Syntax
UnwrapDefinition.LinearResult() As EdgeCollection
Property Value
This is a read/write property whose value is an EdgeCollection.
Version
Introduced in version 2020
UnwrapDefinition.MergeResultBody
Property
Parent Object: UnwrapDefinition
UnwrapDefinition Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Description
Read-write property that gets and sets whether merge the result body or not.
Syntax
UnwrapDefinition.MergeResultBody() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapDefinition.Origin Property
Parent Object: UnwrapDefinition
Description
Read-write property that gets and sets the vertex as origin.
Syntax
UnwrapDefinition.Origin() As Vertex
Property Value
This is a read/write property whose value is a Vertex.
Version
Introduced in version 2020
UnwrapDefinition.Parent Property
Parent Object: UnwrapDefinition
Description
UnwrapDefinition Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Gets the parent object from whom this object can logically be reached.
Syntax
UnwrapDefinition.Parent() As UnwrapFeature
Property Value
This is a read only property whose value is a UnwrapFeature.
Version
Introduced in version 2020
UnwrapDefinition.ResultAlignment Property
Parent Object: UnwrapDefinition
Description
Read-write property that gets and sets alignment of the deformed result.
Syntax
UnwrapDefinition.ResultAlignment() As UnwrapResultAlignmentEnum
Property Value
This is a read/write property whose value is a UnwrapResultAlignmentEnum.
Version
Introduced in version 2020
UnwrapDefinition.RigidResult Property
Parent Object: UnwrapDefinition
Description
Read-write property that gets and sets an EdgeCollection that specifies a set of consecutive planar
edges to remain undeformed.
UnwrapDefinition Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
Syntax
UnwrapDefinition.RigidResult() As EdgeCollection
Property Value
This is a read/write property whose value is an EdgeCollection.
Version
Introduced in version 2020
UnwrapDefinition.Type Property
Parent Object: UnwrapDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
UnwrapDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2020
UnwrapDefinition Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh82A5.htm 17/06/2025
UnwrapFeature Object
Derived from: PartFeature Object
Description
Part Unwrap Feature Object.
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
Definition
Property that gets and sets the UnwrapDefinition object associated with
this unwrap feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
UnwrapFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
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
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UnwrapDefinition.Parent, UnwrapFeatureProxy.NativeObject, UnwrapFeatures.Add,
UnwrapFeatures.Item
Derived Classes
UnwrapFeatureProxy
Version
Introduced in version 2020
UnwrapFeature.Adaptive Property
Parent Object: UnwrapFeature
Description
Gets and sets whether this feature is adaptive or not.
UnwrapFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Syntax
UnwrapFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeature.Appearance Property
Parent Object: UnwrapFeature
Description
Gets and sets the current appearance of the feature.
Syntax
UnwrapFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2020
UnwrapFeature.AppearanceSourceType
Property
Parent Object: UnwrapFeature
Description
Gets and sets the source of the appearance for the feature.
UnwrapFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Syntax
UnwrapFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2020
UnwrapFeature.Application Property
Parent Object: UnwrapFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UnwrapFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2020
UnwrapFeature.AttributeSets Property
Parent Object: UnwrapFeature
Description
Property that returns the AttributeSets collection object associated with this object.
UnwrapFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Syntax
UnwrapFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2020
UnwrapFeature.ConsumeInputs Property
Parent Object: UnwrapFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
UnwrapFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeature.Definition Property
Parent Object: UnwrapFeature
Description
Property that gets and sets the UnwrapDefinition object associated with this unwrap feature.
UnwrapFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Syntax
UnwrapFeature.Definition() As UnwrapDefinition
Property Value
This is a read/write property whose value is a UnwrapDefinition.
Version
Introduced in version 2020
UnwrapFeature.Delete Method
Parent Object: UnwrapFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
UnwrapFeature.Delete( [RetainConsumedSketches] As Boolean,
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
RetainDependentWorkFeatures Boolean Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
UnwrapFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 2020
UnwrapFeature.ExtendedName Property
Parent Object: UnwrapFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
UnwrapFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2020
UnwrapFeature.Faces Property
Parent Object: UnwrapFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
UnwrapFeature.Faces() As Faces
UnwrapFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2020
UnwrapFeature.FeatureDimensions Property
Parent Object: UnwrapFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
UnwrapFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2020
UnwrapFeature.GetReferenceKey Method
Parent Object: UnwrapFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
UnwrapFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
UnwrapFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
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
Introduced in version 2020
UnwrapFeature.GetSuppressionCondition
Method
Parent Object: UnwrapFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
UnwrapFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
UnwrapFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeature.HealthStatus Property
Parent Object: UnwrapFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
UnwrapFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2020
UnwrapFeature.IsOwnedByFeature Property
Parent Object: UnwrapFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
UnwrapFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
UnwrapFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeature.Name Property
Parent Object: UnwrapFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
UnwrapFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2020
UnwrapFeature.OwnedBy Property
Parent Object: UnwrapFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
UnwrapFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
UnwrapFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeature.Parameters Property
Parent Object: UnwrapFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
UnwrapFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2020
UnwrapFeature.Parent Property
Parent Object: UnwrapFeature
Description
Property that returns the parent of the feature.
Syntax
UnwrapFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
UnwrapFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeature.Participants Property
Parent Object: UnwrapFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
UnwrapFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2020
UnwrapFeature.RangeBox Property
Parent Object: UnwrapFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
UnwrapFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
UnwrapFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeature.RemoveParticipant Method
Parent Object: UnwrapFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
UnwrapFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2020
UnwrapFeature.SetAffectedBodies Method
Parent Object: UnwrapFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
UnwrapFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
UnwrapFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2020
UnwrapFeature.SetEndOfPart Method
Parent Object: UnwrapFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
UnwrapFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2020
UnwrapFeature.SetSuppressionCondition
Method
Parent Object: UnwrapFeature
Description
Method that sets the suppression condition for the feature.
UnwrapFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Syntax
UnwrapFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Version
Introduced in version 2020
UnwrapFeature.Shared Property
Parent Object: UnwrapFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
UnwrapFeature.Shared() As Boolean
UnwrapFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeature.Suppressed Property
Parent Object: UnwrapFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
UnwrapFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeature.SurfaceBodies Property
Parent Object: UnwrapFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
UnwrapFeature.SurfaceBodies() As SurfaceBodies
UnwrapFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2020
UnwrapFeature.Type Property
Parent Object: UnwrapFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnwrapFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2020
UnwrapFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9BDA.htm 17/06/2025
UnwrapFeatureProxy Object
Derived from: UnwrapFeature Object
Description
Part Unwrap Feature Proxy Object.
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
Property that gets and sets the UnwrapDefinition object associated with this
unwrap feature.
ExtendedName
Read-only property that returns the full feature name including any extended
information.
Faces Property that returns a collection that provides access to all of the faces of
the feature. The Faces collection object will return the faces that still
UnwrapFeatureProxy Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
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
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2020
UnwrapFeatureProxy.Adaptive Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
UnwrapFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UnwrapFeatureProxy Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.Appearance Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
UnwrapFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2020
UnwrapFeatureProxy.AppearanceSourceType
Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
UnwrapFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
UnwrapFeatureProxy Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.Application Property
Parent Object: UnwrapFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
UnwrapFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2020
UnwrapFeatureProxy.AttributeSets Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
UnwrapFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
UnwrapFeatureProxy Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.ConsumeInputs Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
UnwrapFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeatureProxy.ContainingOccurrence
Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Syntax
UnwrapFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
UnwrapFeatureProxy Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.Definition Property
Parent Object: UnwrapFeatureProxy
Description
Property that gets and sets the UnwrapDefinition object associated with this unwrap feature.
Syntax
UnwrapFeatureProxy.Definition() As UnwrapDefinition
Property Value
This is a read/write property whose value is a UnwrapDefinition.
Version
Introduced in version 2020
UnwrapFeatureProxy.Delete Method
Parent Object: UnwrapFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
Syntax
UnwrapFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature
UnwrapFeatureProxy Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
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
Version
Introduced in version 2020
UnwrapFeatureProxy.ExtendedName Property
Parent Object: UnwrapFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
UnwrapFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2020
UnwrapFeatureProxy.Faces Property
Parent Object: UnwrapFeatureProxy
UnwrapFeatureProxy Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
UnwrapFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2020
UnwrapFeatureProxy.FeatureDimensions
Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
UnwrapFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2020
UnwrapFeatureProxy.GetReferenceKey
Method
Parent Object: UnwrapFeatureProxy
UnwrapFeatureProxy Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
UnwrapFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2020
UnwrapFeatureProxy.GetSuppressionCondition
Method
Parent Object: UnwrapFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Syntax
UnwrapFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is
to be checked for feature suppression.
ComparisonType ComparisonTypeEnum ComparisonTypeEnum that specifies the type of
comparison. Valid return types are kEqualToComparison,
UnwrapFeatureProxy Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string or a parameter
object.
Version
Introduced in version 2020
UnwrapFeatureProxy.HealthStatus Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
UnwrapFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2020
UnwrapFeatureProxy.IsOwnedByFeature
Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns
the owning feature.
UnwrapFeatureProxy Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Syntax
UnwrapFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeatureProxy.Name Property
Parent Object: UnwrapFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
UnwrapFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2020
UnwrapFeatureProxy.NativeObject Property
Parent Object: UnwrapFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
UnwrapFeatureProxy.NativeObject() As UnwrapFeature
UnwrapFeatureProxy Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Property Value
This is a read only property whose value is a UnwrapFeature.
Version
Introduced in version 2020
UnwrapFeatureProxy.OwnedBy Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
UnwrapFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2020
UnwrapFeatureProxy.Parameters Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
UnwrapFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
UnwrapFeatureProxy Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.Parent Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
UnwrapFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2020
UnwrapFeatureProxy.Participants Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a
part.
Syntax
UnwrapFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
UnwrapFeatureProxy Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.RangeBox Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
UnwrapFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2020
UnwrapFeatureProxy.RemoveParticipant
Method
Parent Object: UnwrapFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
UnwrapFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
UnwrapFeatureProxy Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
ComponentOccurrence object that specifies the participant to be
removed. An error occurs if the input ComponentOccurrence is
not a participant.
Version
Introduced in version 2020
UnwrapFeatureProxy.SetAffectedBodies
Method
Parent Object: UnwrapFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
UnwrapFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2020
UnwrapFeatureProxy.SetEndOfPart Method
Parent Object: UnwrapFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
UnwrapFeatureProxy.SetEndOfPart( Before As Boolean )
UnwrapFeatureProxy Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before
or after this work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 2020
UnwrapFeatureProxy.SetSuppressionCondition
Method
Parent Object: UnwrapFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
UnwrapFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
UnwrapFeatureProxy Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatureProxy.Shared Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
UnwrapFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeatureProxy.Suppressed Property
Parent Object: UnwrapFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
UnwrapFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2020
UnwrapFeatureProxy Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
UnwrapFeatureProxy.SurfaceBodies Property
Parent Object: UnwrapFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
UnwrapFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2020
UnwrapFeatureProxy.Type Property
Parent Object: UnwrapFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UnwrapFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2020
UnwrapFeatureProxy Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC04.htm 17/06/2025
UnwrapFeatures Object
Description
Part Unwrap Features Collection Object.
Methods
Name Description
Add
Method that creates a new Unwrap feature. The newly created UnwrapFeature
object is returned.
CreateDefinition
Method that creates a new UnwrapDefinition object. The object created does
not represent a Unwrap feature but instead is a representation of the information
that defines a Unwrap feature. You can use this object as input to the
UnwrapFeatures.Add method to create the actual feature.
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
PartFeatures.UnwrapFeatures, SheetMetalFeatures.UnwrapFeatures
Version
Introduced in version 2020
UnwrapFeatures.Add Method
Parent Object: UnwrapFeatures
Description
Method that creates a new Unwrap feature. The newly created UnwrapFeature object is returned.
UnwrapFeatures Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
Syntax
UnwrapFeatures.Add( Definition As UnwrapDefinition ) As UnwrapFeature
Parameters
Name Type Description
Definition UnwrapDefinition
Input UnwrapDefinition object that defins the unwrap feature you
want to create.An UnwrapDefinition object can be created using the
UnwrapFeatures.CreateDefinition method. It can also be obtained
from an existing UnwrapFeature object.
Version
Introduced in version 2020
UnwrapFeatures.Application Property
Parent Object: UnwrapFeatures
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
UnwrapFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2020
UnwrapFeatures.Count Property
Parent Object: UnwrapFeatures
UnwrapFeatures Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
Description
Gets the number of items in this collection.
Syntax
UnwrapFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2020
UnwrapFeatures.CreateDefinition Method
Parent Object: UnwrapFeatures
Description
Method that creates a new UnwrapDefinition object. The object created does not represent a
Unwrap feature but instead is a representation of the information that defines a Unwrap
feature. You can use this object as input to the UnwrapFeatures.Add method to create the actual
feature.
Syntax
UnwrapFeatures.CreateDefinition( Faces As FaceCollection, [pOrigin] As Variant, [Align] As
UnwrapResultAlignmentEnum, [LinearResult] As Variant, [RigidResult] As Variant,
[AutomaticFaceChain] As Boolean, [MergeResultBody] As Boolean ) As UnwrapDefinition
Parameters
Name Type Description
Faces FaceCollection
Input FaceCollection object that specifies
the faces to Unwrap. The faces should be
from the same body, otherwise an error
would occur.
pOrigin Variant
Optional input a Vertex object that specifies
the origin.
This is an optional argument whose default
value is null.
UnwrapFeatures Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
Align UnwrapResultAlignmentEnum Optional input
UnwrapResultAlignmentEnum that
specifies the alignment of the deformed
result. This defaults to kOriginAlignment if
it is not specified.
This is an optional argument whose default
value is 116993.
LinearResult Variant
Optional input EdgeCollection that
specifies a set of consecutive edges to
become a single colinear segment in the
result.
The edges should be from the faces in the
InputFaces property and only outer edges
that enclose the faces are valid.
This is an optional argument whose default
value is null.
RigidResult Variant
Optional input EdgeCollection that
specifies a set of
consecutive planar edges to remain rigid in
the result. The edges should be from the
faces in the InputFaces property and only
outer edges that enclose the faces are valid.
This is an optional argument whose default
value is null.
AutomaticFaceChain Boolean
Optional input Boolean that defines if
automatic face chaining along tangentially
connected faces should be performed. The
default value is True.
This is an optional argument whose default
value is True.
MergeResultBody Boolean
Optional input Boolean that defines if
merge result body or not. The default value
is True.
This is an optional argument whose default
value is True.
Version
Introduced in version 2020
UnwrapFeatures.Item Property
UnwrapFeatures Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
Parent Object: UnwrapFeatures
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as
well.
Syntax
UnwrapFeatures.Item( Index As Variant ) As UnwrapFeature
Property Value
This is a read only property whose value is a UnwrapFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the UnwrapFeature to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the UnwrapFeature name. If an out of range index or a name of a nonexistent
UnwrapFeature is provided, an error will occur.
Version
Introduced in version 2020
UnwrapFeatures.Type Property
Parent Object: UnwrapFeatures
Description
Gets the constant that indicates the type of this object.
Syntax
UnwrapFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
UnwrapFeatures Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
Version
Introduced in version 2020
UnwrapFeatures Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE055.htm 17/06/2025
UserCoordinateSystem Object
Description
The UserCoordinateSystem object represents a user coordinate system.
Methods
Name Description
Delete Method that deletes the UserCoordinateSystem.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end of part marker relative to the object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
Definition
Property that returns the UserCoordinateSystemDefinition object that can be
used to get and set the inputs for the coordinate system and redefine the
coordinate system.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature (such as a
ClientFeature). If True, the OwnedBy property returns the feature.
Name Gets and sets the name of the UserCoordinateSystem.
Origin
Property that returns the work point that represents the origin of the
coordinate system.
OwnedBy
Property that returns the PartFeature object that owns this object. This
property returns Nothing if the IsOwnedByFeature property returns False.
Parent Property that returns the parent ComponentDefinition object.
Transformation Gets and sets the transformation matrix for the coordinate system.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets and sets the visibility of the coordinate system.
XAngle
Property that returns the parameter associated with the rotation angle about
the x-axis.
XAxis
Property that returns the work axis that represents the x-axis of the coordinate
system.
XOffset Property that returns the parameter associated with the X offset value.
XYPlane
Property that returns the work plane that represents the X-Y plane of the
coordinate system.
XZPlane
UserCoordinateSystem Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Property that returns the work plane that represents the X-Z plane of the
coordinate system.
YAngle
Property that returns the parameter associated with the rotation angle about
the y-axis.
YAxis
Property that returns the work axis that represents the y-axis of the coordinate
system.
YOffset Property that returns the parameter associated with the Y offset value.
YZPlane
Property that returns the work plane that represents the Y-Z plane of the
coordinate system.
ZAngle
Property that returns the parameter associated with the rotation angle about
the z-axis.
ZAxis
Property that returns the work axis that represents the z-axis of the coordinate
system.
ZOffset Property that returns the parameter associated with the Z offset value.
Accessed From
BIMComponentDescription.UserCoordinateSystemOrientation,
UserCoordinateSystemDefinition.Parent, UserCoordinateSystemProxy.NativeObject,
UserCoordinateSystems.Add, UserCoordinateSystems.Item
Derived Classes
UserCoordinateSystemProxy
Samples
Name Description
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
UCS by
transformation
matrix
This sample demonstrates the creation of a user coordinate system (UCS)
by specifying a transformation matrix.
Version
Introduced in version 2010
UserCoordinateSystem.Application Property
Parent Object: UserCoordinateSystem
Description
UserCoordinateSystem Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UserCoordinateSystem.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
UserCoordinateSystem.AttributeSets
Property
Parent Object: UserCoordinateSystem
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
UserCoordinateSystem.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
UserCoordinateSystem.Definition Property
Parent Object: UserCoordinateSystem
UserCoordinateSystem Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Description
Property that returns the UserCoordinateSystemDefinition object that can be used to get and set
the inputs for the coordinate system and redefine the coordinate system.
Syntax
UserCoordinateSystem.Definition() As UserCoordinateSystemDefinition
Property Value
This is a read only property whose value is a UserCoordinateSystemDefinition.
Version
Introduced in version 2011
UserCoordinateSystem.Delete Method
Parent Object: UserCoordinateSystem
Description
Method that deletes the UserCoordinateSystem.
Syntax
UserCoordinateSystem.Delete( [RetainDependentFeaturesAndSketches] As Boolean,
[RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies whether to
retain dependent features and sketches. Defaults
to False.
This is an optional argument whose default value
is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies whether to
retain dependent work features. Defaults to
False.
This is an optional argument whose default value
is False.
UserCoordinateSystem Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystem.GetReferenceKey
Method
Parent Object: UserCoordinateSystem
Description
Method that generates and returns the reference key for this entity.
Syntax
UserCoordinateSystem.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2010
UserCoordinateSystem Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
UserCoordinateSystem.HealthStatus Property
Parent Object: UserCoordinateSystem
Description
Property that returns an enum indicating the current state of the object.
Syntax
UserCoordinateSystem.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
UserCoordinateSystem.IsOwnedByFeature
Property
Parent Object: UserCoordinateSystem
Description
Property that returns whether this object is owned by a feature (such as a ClientFeature). If True,
the OwnedBy property returns the feature.
Syntax
UserCoordinateSystem.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystem Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
UserCoordinateSystem.Name Property
Parent Object: UserCoordinateSystem
Description
Gets and sets the name of the UserCoordinateSystem.
Syntax
UserCoordinateSystem.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UserCoordinateSystem.Origin Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work point that represents the origin of the coordinate system.
Syntax
UserCoordinateSystem.Origin() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Version
Introduced in version 2010
UserCoordinateSystem.OwnedBy Property
UserCoordinateSystem Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Parent Object: UserCoordinateSystem
Description
Property that returns the PartFeature object that owns this object. This property returns Nothing if
the IsOwnedByFeature property returns False.
Syntax
UserCoordinateSystem.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
UserCoordinateSystem.Parent Property
Parent Object: UserCoordinateSystem
Description
Property that returns the parent ComponentDefinition object.
Syntax
UserCoordinateSystem.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
UserCoordinateSystem.SetEndOfPart
Method
UserCoordinateSystem Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Parent Object: UserCoordinateSystem
Description
Method that repositions the end of part marker relative to the object.
Syntax
UserCoordinateSystem.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that specifies whether to position the end of part marker before or
after the object.
Version
Introduced in version 2010
UserCoordinateSystem.Transformation
Property
Parent Object: UserCoordinateSystem
Description
Gets and sets the transformation matrix for the coordinate system.
Syntax
UserCoordinateSystem.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
Version
Introduced in version 2010
UserCoordinateSystem Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
UserCoordinateSystem.Type Property
Parent Object: UserCoordinateSystem
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserCoordinateSystem.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UserCoordinateSystem.Visible Property
Parent Object: UserCoordinateSystem
Description
Gets and sets the visibility of the coordinate system.
Syntax
UserCoordinateSystem.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystem.XAngle Property
UserCoordinateSystem Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Parent Object: UserCoordinateSystem
Description
Property that returns the parameter associated with the rotation angle about the x-axis.
Syntax
UserCoordinateSystem.XAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem.XAxis Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work axis that represents the x-axis of the coordinate system.
Syntax
UserCoordinateSystem.XAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 2010
UserCoordinateSystem.XOffset Property
Parent Object: UserCoordinateSystem
UserCoordinateSystem Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Description
Property that returns the parameter associated with the X offset value.
Syntax
UserCoordinateSystem.XOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem.XYPlane Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work plane that represents the X-Y plane of the coordinate system.
Syntax
UserCoordinateSystem.XYPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystem.XZPlane Property
Parent Object: UserCoordinateSystem
Description
UserCoordinateSystem Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Property that returns the work plane that represents the X-Z plane of the coordinate system.
Syntax
UserCoordinateSystem.XZPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystem.YAngle Property
Parent Object: UserCoordinateSystem
Description
Property that returns the parameter associated with the rotation angle about the y-axis.
Syntax
UserCoordinateSystem.YAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem.YAxis Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work axis that represents the y-axis of the coordinate system.
UserCoordinateSystem Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Syntax
UserCoordinateSystem.YAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 2010
UserCoordinateSystem.YOffset Property
Parent Object: UserCoordinateSystem
Description
Property that returns the parameter associated with the Y offset value.
Syntax
UserCoordinateSystem.YOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem.YZPlane Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work plane that represents the Y-Z plane of the coordinate system.
UserCoordinateSystem Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Syntax
UserCoordinateSystem.YZPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystem.ZAngle Property
Parent Object: UserCoordinateSystem
Description
Property that returns the parameter associated with the rotation angle about the z-axis.
Syntax
UserCoordinateSystem.ZAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem.ZAxis Property
Parent Object: UserCoordinateSystem
Description
Property that returns the work axis that represents the z-axis of the coordinate system.
UserCoordinateSystem Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
Syntax
UserCoordinateSystem.ZAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 2010
UserCoordinateSystem.ZOffset Property
Parent Object: UserCoordinateSystem
Description
Property that returns the parameter associated with the Z offset value.
Syntax
UserCoordinateSystem.ZOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystem Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8AF.htm 17/06/2025
UserCoordinateSystemDefinition Object
Description
The UserCoordinateSystemDefinition object represents the information that defines a coordinate system. You
can use this object as input to the UserCoordinateSystems.Add method to create the actual coordinate system.
Methods
Name Description
GetByThreePoints
Method that gets the inputs that fully define the coordinate system. The objects returned
will be Nothing if the coordinate system was not parametrically defined (i.e. if the
DefinitionType property returns kTransformationDefinitionType). This method returns a
failure in assembly documents.
SetByThreePoints
Method that sets the inputs that fully define the coordinate system. This method returns a
failure in assembly documents.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
DefinitionType
Property that returns how the inputs for the coordinate system are defined. This can return
either kTransformationDefinitionType or kThreePointsDefinitionType.
Parent
Property that returns the parent UserCoordinateSystem of this definition. In the case where
this is a newly created UserCoordinateSystemDefinition object, this property will return
Nothing because there is not a logical parent for the object.
Transformation Gets and puts the transformation matrix.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UserCoordinateSystem.Definition, UserCoordinateSystemProxy.Definition,
UserCoordinateSystems.CreateDefinition
Samples
Name Description
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS) based on 3
points that define the origin, x-direction and y-direction for the UCS.
UCS by
transformation matrix
This sample demonstrates the creation of a user coordinate system (UCS) by
specifying a transformation matrix.
Version
Introduced in version 2011
UserCoordinateSystemDefinition Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A80.htm 17/06/2025
UserCoordinateSystemDefinition.Application
Property
Parent Object: UserCoordinateSystemDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
UserCoordinateSystemDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
UserCoordinateSystemDefinition.DefinitionType
Property
Parent Object: UserCoordinateSystemDefinition
Description
Property that returns how the inputs for the coordinate system are defined. This can return either
kTransformationDefinitionType or kThreePointsDefinitionType.
Syntax
UserCoordinateSystemDefinition.DefinitionType() As UCSDefinitionTypeEnum
Property Value
This is a read only property whose value is a UCSDefinitionTypeEnum.
Version
Introduced in version 2011
UserCoordinateSystemDefinition Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A80.htm 17/06/2025
UserCoordinateSystemDefinition.GetByThreePoints
Method
Parent Object: UserCoordinateSystemDefinition
Description
Method that gets the inputs that fully define the coordinate system. The objects returned will be Nothing if the
coordinate system was not parametrically defined (i.e. if the DefinitionType property returns
kTransformationDefinitionType). This method returns a failure in assembly documents.
Syntax
UserCoordinateSystemDefinition.GetByThreePoints( Origin As Object, XDirectionPoint As Object,
YDirectionPoint As Object )
Parameters
Name Type Description
Origin Object
Output object that specifies the origin of the coordinate system. This can be one of
the following objects: WorkPoint, Vertex, SketchPoint, SketchPoint3D or Edge. If a
linear Edge is specified, it's midpoint is used. If circular or elliptical edges are
specified, their center is used.
XDirectionPoint Object
Output object that specifies a point defining the x-direction for the coordinate system.
The vector from the origin to this point defines the x-direction vector. This can be
one of the following objects: WorkPoint, Vertex, SketchPoint, SketchPoint3D or
Edge. If a linear Edge is specified, it's midpoint is used. If circular or elliptical edges
are specified, their center is used.
YDirectionPoint Object
Output object that specifies a point defining the y-direction for the coordinate system.
This can be one of the following objects: WorkPoint, Vertex, SketchPoint,
SketchPoint3D or Edge. If a linear Edge is specified, it's midpoint is used. If circular
or elliptical edges are specified, their center is used.
Version
Introduced in version 2011
UserCoordinateSystemDefinition.Parent Property
Parent Object: UserCoordinateSystemDefinition
Description
Property that returns the parent UserCoordinateSystem of this definition. In the case where this is a newly
created UserCoordinateSystemDefinition object, this property will return Nothing because there is not a logical
parent for the object.
Syntax
UserCoordinateSystemDefinition.Parent() As UserCoordinateSystem
UserCoordinateSystemDefinition Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A80.htm 17/06/2025
Property Value
This is a read only property whose value is a UserCoordinateSystem.
Version
Introduced in version 2011
UserCoordinateSystemDefinition.SetByThreePoints
Method
Parent Object: UserCoordinateSystemDefinition
Description
Method that sets the inputs that fully define the coordinate system. This method returns a failure in assembly
documents.
Syntax
UserCoordinateSystemDefinition.SetByThreePoints( Origin As Object, XDirectionPoint As Object,
YDirectionPoint As Object )
Parameters
Name Type Description
Origin Object
Input object that specifies the origin of the coordinate system. This can be one of the
following objects: WorkPoint, Vertex, SketchPoint, SketchPoint3D or Edge. If a
linear Edge is specified, it's midpoint is used. If circular or elliptical edges are
specified, their center is used.
XDirectionPoint Object
Input object that specifies a point defining the x-direction for the coordinate system.
The vector from the origin to this point defines the x-direction vector. This can be
one of the following objects: WorkPoint, Vertex, SketchPoint, SketchPoint3D or
Edge. If a linear Edge is specified, it's midpoint is used. If circular or elliptical edges
are specified, their center is used.
YDirectionPoint Object
Input object that specifies a point defining the y-direction for the coordinate system.
This can be one of the following objects: WorkPoint, Vertex, SketchPoint,
SketchPoint3D or Edge. If a linear Edge is specified, it's midpoint is used. If circular
or elliptical edges are specified, their center is used.
Samples
Name Description
UCS by three
points
This sample demonstrates the creation of a User Coordinate System (UCS) based on 3 points
that define the origin, x-direction and y-direction for the UCS.
Version
Introduced in version 2011
UserCoordinateSystemDefinition Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A80.htm 17/06/2025
UserCoordinateSystemDefinition.Transformation
Property
Parent Object: UserCoordinateSystemDefinition
Description
Gets and puts the transformation matrix.
Syntax
UserCoordinateSystemDefinition.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
Version
Introduced in version 2011
UserCoordinateSystemDefinition.Type Property
Parent Object: UserCoordinateSystemDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserCoordinateSystemDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
UserCoordinateSystemDefinition Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A80.htm 17/06/2025
UserCoordinateSystemProxy Object
Derived from: UserCoordinateSystem Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the UserCoordinateSystem.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end of part marker relative to the object.
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
Definition
Property that returns the UserCoordinateSystemDefinition object that can be used to
get and set the inputs for the coordinate system and redefine the coordinate system.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature (such as a
ClientFeature). If True, the OwnedBy property returns the feature.
Name Gets and sets the name of the UserCoordinateSystem.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Origin Property that returns the work point that represents the origin of the coordinate system.
OwnedBy
Property that returns the PartFeature object that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Parent Property that returns the parent ComponentDefinition object.
Transformation Gets and sets the transformation matrix for the coordinate system.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets and sets the visibility of the coordinate system.
XAngle Property that returns the parameter associated with the rotation angle about the x-axis.
XAxis Property that returns the work axis that represents the x-axis of the coordinate system.
XOffset Property that returns the parameter associated with the X offset value.
XYPlane
Property that returns the work plane that represents the X-Y plane of the coordinate
system.
XZPlane
Property that returns the work plane that represents the X-Z plane of the coordinate
system.
YAngle Property that returns the parameter associated with the rotation angle about the y-axis.
YAxis Property that returns the work axis that represents the y-axis of the coordinate system.
YOffset Property that returns the parameter associated with the Y offset value.
YZPlane
UserCoordinateSystemProxy Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Property that returns the work plane that represents the Y-Z plane of the coordinate
system.
ZAngle Property that returns the parameter associated with the rotation angle about the z-axis.
ZAxis Property that returns the work axis that represents the z-axis of the coordinate system.
ZOffset Property that returns the parameter associated with the Z offset value.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Application Property
Parent Object: UserCoordinateSystemProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
UserCoordinateSystemProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
UserCoordinateSystemProxy.AttributeSets
Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
UserCoordinateSystemProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
UserCoordinateSystemProxy Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystemProxy.ContainingOccurrence
Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Syntax
UserCoordinateSystemProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Definition Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the UserCoordinateSystemDefinition object that can be used to get and set the inputs for
the coordinate system and redefine the coordinate system.
Syntax
UserCoordinateSystemProxy.Definition() As UserCoordinateSystemDefinition
Property Value
This is a read only property whose value is a UserCoordinateSystemDefinition.
Version
Introduced in version 2011
UserCoordinateSystemProxy Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
UserCoordinateSystemProxy.Delete Method
Parent Object: UserCoordinateSystemProxy
Description
Method that deletes the UserCoordinateSystem.
Syntax
UserCoordinateSystemProxy.Delete( [RetainDependentFeaturesAndSketches] As Boolean,
[RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies whether to retain
dependent features and sketches. Defaults to False.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies whether to retain
dependent work features. Defaults to False.
This is an optional argument whose default value is False.
Version
Introduced in version 2010
UserCoordinateSystemProxy.GetReferenceKey
Method
Parent Object: UserCoordinateSystemProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
UserCoordinateSystemProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and
Vertex objects). A key context is created using the CreateKeyContext method of the
UserCoordinateSystemProxy Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
ReferenceKeyManager object. For all other object types, the key context argument is not
used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
UserCoordinateSystemProxy.HealthStatus
Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
UserCoordinateSystemProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
UserCoordinateSystemProxy.IsOwnedByFeature
Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns whether this object is owned by a feature (such as a ClientFeature). If True, the OwnedBy
property returns the feature.
Syntax
UserCoordinateSystemProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
UserCoordinateSystemProxy Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystemProxy.Name Property
Parent Object: UserCoordinateSystemProxy
Description
Gets and sets the name of the UserCoordinateSystem.
Syntax
UserCoordinateSystemProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UserCoordinateSystemProxy.NativeObject
Property
Parent Object: UserCoordinateSystemProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
UserCoordinateSystemProxy.NativeObject() As UserCoordinateSystem
Property Value
This is a read only property whose value is a UserCoordinateSystem.
Version
Introduced in version 2010
UserCoordinateSystemProxy Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
UserCoordinateSystemProxy.Origin Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work point that represents the origin of the coordinate system.
Syntax
UserCoordinateSystemProxy.Origin() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Version
Introduced in version 2010
UserCoordinateSystemProxy.OwnedBy Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the PartFeature object that owns this object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
UserCoordinateSystemProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Parent Property
Parent Object: UserCoordinateSystemProxy
Description
UserCoordinateSystemProxy Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Property that returns the parent ComponentDefinition object.
Syntax
UserCoordinateSystemProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
UserCoordinateSystemProxy.SetEndOfPart
Method
Parent Object: UserCoordinateSystemProxy
Description
Method that repositions the end of part marker relative to the object.
Syntax
UserCoordinateSystemProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that specifies whether to position the end of part marker before or after the
object.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Transformation
Property
Parent Object: UserCoordinateSystemProxy
Description
Gets and sets the transformation matrix for the coordinate system.
UserCoordinateSystemProxy Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Syntax
UserCoordinateSystemProxy.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Type Property
Parent Object: UserCoordinateSystemProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserCoordinateSystemProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UserCoordinateSystemProxy.Visible Property
Parent Object: UserCoordinateSystemProxy
Description
Gets and sets the visibility of the coordinate system.
Syntax
UserCoordinateSystemProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UserCoordinateSystemProxy Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystemProxy.XAngle Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the rotation angle about the x-axis.
Syntax
UserCoordinateSystemProxy.XAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy.XAxis Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work axis that represents the x-axis of the coordinate system.
Syntax
UserCoordinateSystemProxy.XAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 2010
UserCoordinateSystemProxy.XOffset Property
UserCoordinateSystemProxy Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the X offset value.
Syntax
UserCoordinateSystemProxy.XOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy.XYPlane Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work plane that represents the X-Y plane of the coordinate system.
Syntax
UserCoordinateSystemProxy.XYPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystemProxy.XZPlane Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work plane that represents the X-Z plane of the coordinate system.
UserCoordinateSystemProxy Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Syntax
UserCoordinateSystemProxy.XZPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystemProxy.YAngle Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the rotation angle about the y-axis.
Syntax
UserCoordinateSystemProxy.YAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy.YAxis Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work axis that represents the y-axis of the coordinate system.
Syntax
UserCoordinateSystemProxy.YAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
UserCoordinateSystemProxy Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystemProxy.YOffset Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the Y offset value.
Syntax
UserCoordinateSystemProxy.YOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy.YZPlane Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work plane that represents the Y-Z plane of the coordinate system.
Syntax
UserCoordinateSystemProxy.YZPlane() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 2010
UserCoordinateSystemProxy.ZAngle Property
UserCoordinateSystemProxy Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the rotation angle about the z-axis.
Syntax
UserCoordinateSystemProxy.ZAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy.ZAxis Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the work axis that represents the z-axis of the coordinate system.
Syntax
UserCoordinateSystemProxy.ZAxis() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 2010
UserCoordinateSystemProxy.ZOffset Property
Parent Object: UserCoordinateSystemProxy
Description
Property that returns the parameter associated with the Z offset value.
UserCoordinateSystemProxy Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
Syntax
UserCoordinateSystemProxy.ZOffset() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
UserCoordinateSystemProxy Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh35C8.htm 17/06/2025
UserCoordinateSystems Object
Description
The UserCoordinateSystems collection object contains all user coordinate systems within the
document and provides methods to create additional ones.
Methods
Name Description
Add
Method that creates a new User Coordinate System. The newly created
UserCoordinateSystem object is returned.
CreateDefinition Method that creates a new UserCoordinateSystemDefinition object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified UserCoordinateSystem object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.UserCoordinateSystems, FlatPattern.UserCoordinateSystems,
PartComponentDefinition.UserCoordinateSystems,
SheetMetalComponentDefinition.UserCoordinateSystems,
WeldmentComponentDefinition.UserCoordinateSystems
Samples
Name Description
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
UCS by
transformation
matrix
This sample demonstrates the creation of a user coordinate system (UCS)
by specifying a transformation matrix.
UserCoordinateSystems Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5D84.htm 17/06/2025
Version
Introduced in version 2010
UserCoordinateSystems.Add Method
Parent Object: UserCoordinateSystems
Description
Method that creates a new User Coordinate System. The newly created UserCoordinateSystem
object is returned.
Syntax
UserCoordinateSystems.Add( Definition As UserCoordinateSystemDefinition ) As
UserCoordinateSystem
Parameters
Name Type Description
Definition UserCoordinateSystemDefinition
Input UserCoordinateSystemDefinition object that
defines the coordinate system you want to create. A
UserCoordinateSystemDefinition object can be
created using the
UserCoordinateSystems.CreateDefinition method. It
can also be obtained from an existing
UserCoordinateSystem object.
Samples
Name Description
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
UCS by
transformation
matrix
This sample demonstrates the creation of a user coordinate system (UCS)
by specifying a transformation matrix.
Version
Introduced in version 2011
UserCoordinateSystems Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5D84.htm 17/06/2025
UserCoordinateSystems.Application Property
Parent Object: UserCoordinateSystems
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UserCoordinateSystems.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
UserCoordinateSystems.Count Property
Parent Object: UserCoordinateSystems
Description
Property that returns the number of items in the collection.
Syntax
UserCoordinateSystems.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
UserCoordinateSystems Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5D84.htm 17/06/2025
UserCoordinateSystems.CreateDefinition
Method
Parent Object: UserCoordinateSystems
Description
Method that creates a new UserCoordinateSystemDefinition object.
Syntax
UserCoordinateSystems.CreateDefinition() As UserCoordinateSystemDefinition
Samples
Name Description
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
UCS by
transformation
matrix
This sample demonstrates the creation of a user coordinate system (UCS)
by specifying a transformation matrix.
Version
Introduced in version 2011
UserCoordinateSystems.Item Property
Parent Object: UserCoordinateSystems
Description
Returns the specified UserCoordinateSystem object from the collection.
Syntax
UserCoordinateSystems.Item( Index As Variant ) As UserCoordinateSystem
Property Value
This is a read only property whose value is a UserCoordinateSystem.
UserCoordinateSystems Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5D84.htm 17/06/2025
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the UserCoordinateSystem to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the UserCoordinateSystem name. If an out of range index or a
name of a non-existent UserCoordinateSystem is provided, an error will occur.
Version
Introduced in version 2010
UserCoordinateSystems.Type Property
Parent Object: UserCoordinateSystems
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserCoordinateSystems.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UserCoordinateSystems Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5D84.htm 17/06/2025
UserCoordinateSystemSettings Object
Description
The UserCoordinateSystemSettings object provides access to various UCS related document level
settings. This object is obtained from the ModelingSettings.UserCoordinateSystemSettings
property.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DefaultPlane Gets and sets the default plane to use for user coordinate systems.
NamingPrefix Gets and sets the prefix to use for the name of new user coordinate systems.
ShowOrigin Gets and sets whether whether or not to make the origin visible.
ShowTriad Gets and sets whether whether or not to display the UCS triad.
ShowXAxis Gets and sets whether whether or not to make the X axis visible.
ShowXYPlane Gets and sets whether whether or not to make the XY plane visible.
ShowXZPlane Gets and sets whether whether or not to make the XZ plane visible.
ShowYAxis Gets and sets whether whether or not to make the Y axis visible.
ShowYZPlane Gets and sets whether whether or not to make the YZ plane visible.
ShowZAxis Gets and sets whether whether or not to make the Z axis visible.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ModelingSettings.UserCoordinateSystemSettings
Version
Introduced in version 2010
UserCoordinateSystemSettings.Application
Property
Parent Object: UserCoordinateSystemSettings
Description
UserCoordinateSystemSettings Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UserCoordinateSystemSettings.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
UserCoordinateSystemSettings.DefaultPlane
Property
Parent Object: UserCoordinateSystemSettings
Description
Gets and sets the default plane to use for user coordinate systems.
Syntax
UserCoordinateSystemSettings.DefaultPlane() As CoordinateSystemPlaneEnum
Property Value
This is a read/write property whose value is a CoordinateSystemPlaneEnum.
Version
Introduced in version 2010
UserCoordinateSystemSettings.NamingPrefix
Property
Parent Object: UserCoordinateSystemSettings
UserCoordinateSystemSettings Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Description
Gets and sets the prefix to use for the name of new user coordinate systems.
Syntax
UserCoordinateSystemSettings.NamingPrefix() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowOrigin
Property
Parent Object: UserCoordinateSystemSettings
Description
Gets and sets whether whether or not to make the origin visible.
Syntax
UserCoordinateSystemSettings.ShowOrigin() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowTriad
Property
Parent Object: UserCoordinateSystemSettings
UserCoordinateSystemSettings Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Description
Gets and sets whether whether or not to display the UCS triad.
Syntax
UserCoordinateSystemSettings.ShowTriad() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowXAxis
Property
Parent Object: UserCoordinateSystemSettings
Description
Gets and sets whether whether or not to make the X axis visible.
Syntax
UserCoordinateSystemSettings.ShowXAxis() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowXYPlane
Property
Parent Object: UserCoordinateSystemSettings
UserCoordinateSystemSettings Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Description
Gets and sets whether whether or not to make the XY plane visible.
Syntax
UserCoordinateSystemSettings.ShowXYPlane() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowXZPlane
Property
Parent Object: UserCoordinateSystemSettings
Description
Gets and sets whether whether or not to make the XZ plane visible.
Syntax
UserCoordinateSystemSettings.ShowXZPlane() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowYAxis
Property
Parent Object: UserCoordinateSystemSettings
UserCoordinateSystemSettings Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Description
Gets and sets whether whether or not to make the Y axis visible.
Syntax
UserCoordinateSystemSettings.ShowYAxis() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowYZPlane
Property
Parent Object: UserCoordinateSystemSettings
Description
Gets and sets whether whether or not to make the YZ plane visible.
Syntax
UserCoordinateSystemSettings.ShowYZPlane() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.ShowZAxis
Property
Parent Object: UserCoordinateSystemSettings
UserCoordinateSystemSettings Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
Description
Gets and sets whether whether or not to make the Z axis visible.
Syntax
UserCoordinateSystemSettings.ShowZAxis() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserCoordinateSystemSettings.Type Property
Parent Object: UserCoordinateSystemSettings
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserCoordinateSystemSettings.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
UserCoordinateSystemSettings Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7D41.htm 17/06/2025
UserInputEvents Object
Description
The UserInputEvents object provides input event notification. For example, use of the context
menu.
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
OnActivateCommand
The OnActivateCommand event notifies the client when a command
has been invoked.
OnContextualMiniToolbar
Fires before contextual commands are displayed to the user in the
graphics window when the user selects an object.
OnDeleteKeyUp
Fires when the user performs a delete key click when no command is
active.
OnDoubleClick Event that is sent when the user double-clicks in the window.
OnDrag
The OnDrag event notifies the client whenever the end-user performs
a drag operation in the graphics window. Using this event, the client
can override Inventor's standard drag behavior.
OnLinearMarkingMenu Fires before the overflow context menu is displayed to the user.
OnPreSelect
Fires when the user hovers over an Inventor object, and it is a
potential candidate for selection.
OnRadialMarkingMenu
Fires before the marking menu is displayed to the user or before the
user gestures using the right mouse button.
OnSelect Fires when the user selects an object by clicking.
OnStopPreSelect
Fires when the user hovers away from an Inventor object and it is no
longer highlighted.
OnTerminateCommand
The OnTerminateCommand event notifies the client when a command
has been terminated.
OnUnSelect
Event that occurs when the user unselects an entity. This is done in
the user interface by pressing the Shift button and selecting a
previously selected entity.
UserInputEvents Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Accessed From
CommandManager.UserInputEvents
Samples
Name Description
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 4
UserInputEvents.Application Property
Parent Object: UserInputEvents
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UserInputEvents.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 6
UserInputEvents.OnActivateCommand Event
Parent Object: UserInputEvents
UserInputEvents Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Description
The OnActivateCommand event notifies the client when a command has been invoked.
Syntax
UserInputEvents.OnActivateCommand( CommandName As String, Context As
NameValueMap )
Parameters
Name Type Description
CommandName String
The internal name of the command. This is the same name as
the internal name of the ControlDefinition object associated
with this command.
Context NameValueMap
Input NameValueMap object that can be used to determine the
context of why the event fired. No context information is
provided for this event.
Version
Introduced in version 10
UserInputEvents.OnContextualMiniToolbar
Event
Parent Object: UserInputEvents
Description
Fires before contextual commands are displayed to the user in the graphics window when the user
selects an object.
Syntax
UserInputEvents.OnContextualMiniToolbar( SelectedEntities As ObjectsEnumerator,
DisplayedCommands As NameValueMap, AdditionalInfo As NameValueMap )
Parameters
Name Type Description
SelectedEntities ObjectsEnumerator
Input ObjectsEnumerator that contains the selected
entities. This is the same set of entities currently
contained in the document’s SelectSet.
UserInputEvents Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
DisplayedCommands NameValueMap
Input NameValueMap object that contains the
commands that should be displayed. Name contains the
internal name of the command and Value contains the
entity to be highlighted when the user hovers over this
command in the contextual toolbar.
AdditionalInfo NameValueMap
Input NameValueMap object that contains additional
information about why the menu is being displayed.
This is currently empty.
Version
Introduced in version 2012
UserInputEvents.OnDeleteKeyUp Event
Parent Object: UserInputEvents
Description
Fires when the user performs a delete key click when no command is active.
Syntax
UserInputEvents.OnDeleteKeyUp( SelectedEntities As ObjectsEnumerator, SelectionDevice As
SelectionDeviceEnum, View As View, AdditionalInfo As NameValueMap, HandlingCode As
HandlingCodeEnum )
Parameters
Name Type Description
SelectedEntities ObjectsEnumerator
SelectionDevice SelectionDeviceEnum
View View
AdditionalInfo NameValueMap
HandlingCode HandlingCodeEnum
Version
Introduced in version 2018
UserInputEvents.OnDoubleClick Event
Parent Object: UserInputEvents
UserInputEvents Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Description
Event that is sent when the user double-clicks in the window.
Syntax
UserInputEvents.OnDoubleClick( SelectedEntities As ObjectsEnumerator, SelectionDevice As
SelectionDeviceEnum, Button As MouseButtonEnum, ShiftKeys As ShiftStateEnum,
ModelPosition As Point, ViewPosition As Point2d, View As View, AdditionalInfo As
NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
SelectedEntities ObjectsEnumerator
Enumerator of entities selected by double click. Count of
SelectedEntities will be 0 if user double-clicks in space.
If any of the selected objects are not supported by the
API, no notification is sent.
SelectionDevice SelectionDeviceEnum
Button MouseButtonEnum
Returns an enumerated constant that identifies the button
that was clicked to cause the event. The constants
correspond to the left button (bit 0), right button (bit 1),
and middle button (bit 2). These bits correspond to the
values 1, 2, and 4, respectively. Only one of the bits is
set, indicating the button that caused the event.
ShiftKeys ShiftStateEnum
Returns an enumerated constant that corresponds to the
state of the SHIFT, CTRL, and ALT keys when the
button specified in the button argument is clicked. The
constants correspond to one or more of those three keys
being down. Each of these keys corresponds to a bit:
SHIFT key (bit 0), the CTRL key (bit 1), and the ALT
key (bit 2). These bits correspond to the values 1, 2, and
4, respectively. Combinations of these are provided as
conveniences in the enumerator. For example, if only the
ALT key was down, the constant kShiftStateAlt would be
returned corresponding to the integer 4. If CTRL and
ALT were pressed, the constant kShiftStateCtrlAlt would
be returned whose integer value would be 6.
ModelPosition Point
Returns the coordinates that specify the current location
of the mouse pointer in model space and are returned in
centimeters. Model Returns Nothing if user double-clicks
in browser.
ViewPosition Point2d
Returns the coordinates that specify the current location
of the mouse pointer in window space and are returned in
pixels. Model Returns Nothing if user double-clicks in
browser.
View View Returns the View object where the mouse was pressed.
AdditionalInfo NameValueMap
HandlingCode HandlingCodeEnum
UserInputEvents Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Returning kEventCanceled or kEventHandled as the
HandlingCode cancels regular Inventor behavior.
Version
Introduced in version 2009
UserInputEvents.OnDrag Event
Parent Object: UserInputEvents
Description
The OnDrag event notifies the client whenever the end-user performs a drag operation in the
graphics window. Using this event, the client can override Inventor's standard drag behavior.
Syntax
UserInputEvents.OnDrag( DragState As DragStateEnum, ShiftKeys As ShiftStateEnum,
ModelPosition As Point, ViewPosition As Point2d, View As View, AdditionalInfo As
NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
DragState DragStateEnum
indicating the current state of the drag operation. When the
drag is initially started this value is
kDragStateDragHandlerSelection, indicating the selection of
an entity to be dragged. During the drag, this value is
kDragStateOnDrag. When the mouse button is released to
stop the drag operation this value is kDragStateEndDrag.
ShiftKeys ShiftStateEnum
A value indicating what combinations of the Shift, Control,
and Alt keys are currently pressed. This allows you to use
combinations of these keys to control options for the
command implementing the drag. For example, a Control
drag might result in copying the entity.
ModelPosition Point The current position of the mouse in model space.
ViewPosition Point2d
The current position of the mouse in view space. The
coordinates are pixels where the upper-left corner of the
view is (0,0).
View View The View object the drag is taking place within.
AdditionalInfo NameValueMap
Input object that contains additional information about why
the context menu is being displayed. No additional
information is provided for this event.
HandlingCode HandlingCodeEnum Output that indicates how you are handling the event. Setting
this argument to kEventHandled results in turning off
UserInputEvents Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Inventor's standard behavior for the drag operation and
causing additional OnDrag event notifications to be sent as
the end-user continues the drag operation. By responding to
these events the client can define their own behavior for the
entity being dragged. Setting this to kEventNotHandled will
cause Inventor to use its standard drag behavior for the entity
being dragged. kEventCanceled is not supported and will
result in the same behavior as kEventNotHandled.
Remarks
The following discusses the principles a client needs to understand in order to take advantage of
the full capabilities of this event. The OnDrag event notification is sent whenever the end-user
begins to perform a drag operation in the graphics window. When the drag is initiated the
DragState argument is equal to kDragStateDragHandlerSelection. The client can determine what
object is being dragged by checking the contents of the SelectSet object of the active document. If
the client wants to override Inventor's standard drag behavior for the object, they need to set the
HandlingCode argument to kEventHandled indicating they will handle the drag. If the
HandlingCode is set to kEventNotHandled then Inventor will handle the drag. A handling code of
kEventCanceled is not supported and will result in the same thing as kEventNotHandled. If the
HandlingCode has been set to kEventHandled then the OnDrag event notification will continue to
be sent as the end-user continues the drag operation. The DrageState argument will be equal to
kDragStateOnDrag while the end-user continues to drag. When the end-user releases the mouse
button to stop the drag operation, the DragState argument will be equal to kDragStateEndDrag. By
handling the drag, Inventor expects the client to handle all aspects of the drag. The only thing that
Inventor does is change the icon to a drag icon and continues to fire the OnDrag event notification.
It is up to the client to provide any dynamic feedback during the drag and to perform whatever the
final action of the drag is expected to produce, (typically the repositioning of an entity). Using the
ModelPosition and ViewPosition arguments Inventor notifies the client of the current position of
the mouse to allow them to create any preview graphics.
Version
Introduced in version 9
UserInputEvents.OnLinearMarkingMenu
Event
Parent Object: UserInputEvents
Description
Fires before the overflow context menu is displayed to the user.
UserInputEvents Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Syntax
UserInputEvents.OnLinearMarkingMenu( SelectedEntities As ObjectsEnumerator,
SelectionDevice As SelectionDeviceEnum, LinearMenu As CommandControls, AdditionalInfo
As NameValueMap )
Parameters
Name Type Description
SelectedEntities ObjectsEnumerator
Input ObjectsEnumerator that contains the selected
entities. This is the same set of entities currently
contained in the document’s SelectSet.
SelectionDevice SelectionDeviceEnum
Input constant denoting whether the menu was invoked
via a click in a graphics window
(kGraphicsWindowSelection) or by a click in the browser
(kBrowserSelection).
LinearMenu CommandControls
Input/Output CommandControls object. This object
represents the contents of the linear menu that will be
displayed to the user. Using the functionality of the
CommandControls object you can iterate over the current
contents and add and remove items from the menu.
AdditionalInfo NameValueMap
Input NameValueMap object that contains additional
information about why the menu is being displayed. This
is currently empty.
Version
Introduced in version 2012
UserInputEvents.OnPreSelect Event
Parent Object: UserInputEvents
Description
Fires when the user hovers over an Inventor object, and it is a potential candidate for selection.
Syntax
UserInputEvents.OnPreSelect( PreSelectEntity As Object, DoHighlight As Boolean,
MorePreSelectEntities As ObjectCollection, SelectionDevice As SelectionDeviceEnum,
ModelPosition As Point, ViewPosition As Point2d, View As View )
Parameters
UserInputEvents Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Name Type Description
PreSelectEntity Object
When called, Inventor returns the entity the mouse
is currently over. The client though has a chance to
change this entity to some other, if so desired. The
entity passed back from the call is the one Inventor
will highlight for the pre-select.
DoHighlight Boolean
Input value that specifies whether the entity should
be available for selection or not. If True, this
signifies a successful pre-selection and the entity is
highlighted by Inventor.
MorePreSelectEntities ObjectCollection
Input argument through which you can supply a
group of objects that are logically pre-selected
along with the one that Inventor found on its own.
This argument is ignored if DoHighLight is False.
Inventor passes in an empty collection that you can
add additional entities to.
SelectionDevice SelectionDeviceEnum
Returns a constant denoting whether the selection
was made via a pick in a graphics window or was it
by a pick in the browser or by some other means.
An object can also be selected programmatically by
calling the selection simulation methods on the
CommandManager. A value of
kGraphicsWindowSelection indicates it was
selected in a graphic window. For all other values
the View, ModelPosition, and ViewPosition
arguments are meaningless.
ModelPosition Point
Returns the coordinates that result from projecting
the click point onto the selected entity. This is
returned in centimeters relative to model space.
Applicable only when the SelectionDevice
argument is kGraphicsWindowSelection.
ViewPosition Point2d
Returns the coordinates that specify the current
location of the mouse pointer in window space and
are returned in pixels. Applicable only when the
SelectionDevice argument is
kGraphicsWindowSelection.
View View
Returns the View object where the selection took
place. Applicable only when the SelectionDevice
argument is kGraphicsWindowSelection.
Version
Introduced in version 2011
UserInputEvents.OnRadialMarkingMenu
Event
UserInputEvents Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Parent Object: UserInputEvents
Description
Fires before the marking menu is displayed to the user or before the user gestures using the right
mouse button.
Syntax
UserInputEvents.OnRadialMarkingMenu( SelectedEntities As ObjectsEnumerator,
SelectionDevice As SelectionDeviceEnum, RadialMenu As RadialMarkingMenu, AdditionalInfo
As NameValueMap )
Parameters
Name Type Description
SelectedEntities ObjectsEnumerator
Input ObjectsEnumerator that contains the selected
entities. This is the same set of entities currently
contained in the document’s SelectSet.
SelectionDevice SelectionDeviceEnum
Input constant denoting whether the menu was invoked
via a click in a graphics window
(kGraphicsWindowSelection) or by a click in the browser
(kBrowserSelection).
RadialMenu RadialMarkingMenu
Input/Output RadialMarkingMenu object. This object
represents the contents of the radial menu that will be
displayed to the user. The radial marking menu that
Inventor would usually show in the current context is
passed through this argument. You can then choose to
modify the contents of that marking menu. Any changes
you make are transient and will only be used for that
display of the marking menu.
Instead of modifying the marking menu you can instead
return a different marking menu. For example, you can
create a custom radial marking menu, and then in certain
contexts, provide that marking menu.
AdditionalInfo NameValueMap
Input NameValueMap object that contains additional
information about why the menu is being displayed. This
is currently empty.
Version
Introduced in version 2012
UserInputEvents.OnSelect Event
UserInputEvents Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Parent Object: UserInputEvents
Description
Fires when the user selects an object by clicking.
Syntax
UserInputEvents.OnSelect( JustSelectedEntities As ObjectsEnumerator, MoreSelectedEntities
As ObjectCollection, SelectionDevice As SelectionDeviceEnum, ModelPosition As Point,
ViewPosition As Point2d, View As View )
Parameters
Name Type Description
JustSelectedEntities ObjectsEnumerator
Returns the object(s) that were just selected by the
user. This may be the only one selected so far or the
latest one in a series during this selection process.
Multiple objects may be returned if the user does a
window (area) select.
MoreSelectedEntities ObjectCollection Subsequently selected entities.
SelectionDevice SelectionDeviceEnum
Returns a constant denoting whether the selection
was made via a pick in a graphics window or was it
by a pick in the browser or by some other means.
An object can also be selected programmatically by
calling the selection simulation methods on the
CommandManager. A value of
kGraphicsWindowSelection indicates it was
selected in a graphic window. For all other values
the View, ModelPosition, and ViewPosition
arguments are meaningless.
ModelPosition Point
Returns the coordinates that result from projecting
the click point onto the selected entity. This is
returned in centimeters relative to model space.
Applicable only when the SelectionDevice argument
is kGraphicsWindowSelection.
ViewPosition Point2d
Returns the coordinates that specify the current
location of the mouse pointer in window space and
are returned in pixels. Applicable only when the
SelectionDevice argument is
kGraphicsWindowSelection.
View View
Returns the View object where the selection took
place. Applicable only when the SelectionDevice
argument is kGraphicsWindowSelection.
UserInputEvents Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Version
Introduced in version 2011
UserInputEvents.OnStopPreSelect Event
Parent Object: UserInputEvents
Description
Fires when the user hovers away from an Inventor object and it is no longer highlighted.
Syntax
UserInputEvents.OnStopPreSelect( ModelPosition As Point, ViewPosition As Point2d, View As
View )
Parameters
Name Type Description
ModelPosition Point
Returns the coordinates that result from projecting the click point onto the
selected entity. This is returned in centimeters relative to model space.
Applicable only when the SelectionDevice argument is
kGraphicsWindowSelection.
ViewPosition Point2d
Returns the coordinates that specify the current location of the mouse
pointer in window space and are returned in pixels. Applicable only when
the SelectionDevice argument is kGraphicsWindowSelection.
View View
Returns the View object where the selection took place. Applicable only
when the SelectionDevice argument is kGraphicsWindowSelection.
Version
Introduced in version 2011
UserInputEvents.OnTerminateCommand
Event
Parent Object: UserInputEvents
Description
The OnTerminateCommand event notifies the client when a command has been terminated.
UserInputEvents Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Syntax
UserInputEvents.OnTerminateCommand( CommandName As String, Context As
NameValueMap )
Parameters
Name Type Description
CommandName String
The internal name of the command. This is the same name as
the internal name of the ControlDefinition object associated
with this command.
Context NameValueMap
Input NameValueMap object that can be used to determine the
context of why the event fired. No context information is
provided for this event.
Remarks
There are several things that cause a command to be terminated. When a command finishes it will
terminate. For example when you execute the Extrude command, after the extrusion has finished
the command terminates. Starting another command while one command is active will cause the
active command to terminate. An exception to this is the viewing commands. They just
temporarily suspend the active command rather than terminate it. Pressing the escape key will
terminate the current command.
Version
Introduced in version 10
UserInputEvents.OnUnSelect Event
Parent Object: UserInputEvents
Description
Event that occurs when the user unselects an entity. This is done in the user interface by pressing
the Shift button and selecting a previously selected entity.
Syntax
UserInputEvents.OnUnSelect( UnSelectedEntities As ObjectsEnumerator, SelectionDevice As
SelectionDeviceEnum, ModelPosition As Point, ViewPosition As Point2d, View As View )
Parameters
Name Type Description
UserInputEvents Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
UnSelectedEntities ObjectsEnumerator Returns the object(s) (un)selected by the user to be
taken out of the selection set being built.
SelectionDevice SelectionDeviceEnum
Returns a constant denoting whether the (un)selection
was made via a pick in a graphics window or was it by
a pick in the browser or by some other means. An
object can also be selected programmatically by
calling the selection simulation methods on the
CommandManager. A value of
kGraphicsWindowSelection indicates it was (un)
selected in a graphic window. For all other values the
View, ModelPosition, and ViewPosition arguments are
meaningless.
ModelPosition Point
Returns the coordinates that result from projecting the
click point onto the (un)selected entity. This is
returned in centimeters relative to model space.
Applicable only when the SelectionDevice argument is
kGraphicsWindowSelection.
ViewPosition Point2d
Returns the coordinates that specify the current
location of the mouse pointer in window space and are
returned in pixels. Applicable only when the
SelectionDevice argument is
kGraphicsWindowSelection.
View View
Returns the View object where the selection took
place. Applicable only when the SelectionDevice
argument is kGraphicsWindowSelection.
Version
Introduced in version 2011
UserInputEvents.Parent Property
Parent Object: UserInputEvents
Description
Gets the parent object from whom this object can logically be reached.
Syntax
UserInputEvents.Parent() As CommandManager
Property Value
This is a read only property whose value is a CommandManager.
UserInputEvents Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
Version
Introduced in version 6
UserInputEvents.Type Property
Parent Object: UserInputEvents
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserInputEvents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
UserInputEvents Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9993.htm 17/06/2025
UserInterfaceEvents Object
Description
This object provides notification of environment and command bar reset events.
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
OnEnvironmentChange
The OnEnvironmentChange event notifies the client when the active
environment switches from one environment to another.
OnResetEnvironments
The OnResetEnvironments event notifies the client when environments
have been reset.
OnResetInventorLayout Event that is fired when the Inventor layout is reset.
OnResetMarkingMenu
Event that is fired when the user resets an individual or all radial
marking menus.
OnResetRibbonInterface Event that is fired when the ribbon user interface is reset.
OnResetShortcuts
Event that is fired when command shortcuts/aliases are reset in the
Customize dialog (using either the "Reset All Keys" or "Reset All"
button).
Accessed From
UserInterfaceManager.UserInterfaceEvents
Version
Introduced in version 10
UserInterfaceEvents.Application Property
Parent Object: UserInterfaceEvents
UserInterfaceEvents Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
UserInterfaceEvents.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 10
UserInterfaceEvents.OnEnvironmentChange
Event
Parent Object: UserInterfaceEvents
Description
The OnEnvironmentChange event notifies the client when the active environment switches from
one environment to another.
Syntax
UserInterfaceEvents.OnEnvironmentChange( Environment As Environment, EnvironmentState
As EnvironmentStateEnum, BeforeOrAfter As EventTimingEnum, Context As NameValueMap,
HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
Environment Environment The environment object whose state is changing.
EnvironmentState EnvironmentStateEnum
Indicates the transition state the environment is going
through.
BeforeOrAfter EventTimingEnum
Input EventTimingEnum indicating when the event is
being fired. Notification is sent before and after the
environment change.
Context NameValueMap
UserInterfaceEvents Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Input NameValueMap object that contains additional
information about the event. Name = "Document".
Value = The Document object this environment is
associated with. Name = "Reason for event". Value =
"Undo" or "Redo". The activation of environments is
transacted so environments can be activated as a result
of an undo or redo operation. If this value is " " then
the activation is occurring from an explicit action
either from the end-user or through the API. If this
value is "Undo" then the activation occurred as the
result of an undo operation and if it is "Redo" then it
is the result of a redo operation.
HandlingCode HandlingCodeEnum
Output HandlingCodeEnum that indicates how you
are handling the event. You can cancel the
environment change by changing this value to
kEventCanceled.
Remarks
Many end-user actions can cause the environment to change. This notification is sent regardless of
what triggered the environment change. When the environment changes, this notification will be
sent four times; a before and after notification for the environment that was active before the
change and is being suspended or terminated and a before and after notification for the
environment that is becoming the active environment. In the context of environment change,
Inventor considers an environment to be tied with a particular document. For example, Inventor
defines a single Part environment but if you have two part documents open there is a unique Part
environment associated with each document. This means that the OnEnvironmentChange event
notification is sent if the end-user should switch between the two part documents.
Version
Introduced in version 10
UserInterfaceEvents.OnResetEnvironments
Event
Parent Object: UserInterfaceEvents
Description
The OnResetEnvironments event notifies the client when environments have been reset.
Syntax
UserInterfaceEvents.OnResetEnvironments( Environments As ObjectsEnumerator, Context As
NameValueMap )
UserInterfaceEvents Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Parameters
Name Type Description
Environments ObjectsEnumerator
A collection of the Environment objects that have been reset.
In the case where the end-user uses the "Reset" button this
collection will contain a single Environment object. If the
"Reset All" button is pressed this collection contains all of the
Environment objects.
Context NameValueMap
Input NameValueMap object that contains additional
information about the event. No context information is
provided for this event.
Remarks
The end-user resets environments using the "Reset" and "Reset All" buttons on the Environments
tab of the Customize dialog. * The "Reset" button on the Environments tab will cause this
notification to be sent for the currently selected environment. * The "Reset All" button causes this
notification to be sent where the Environments argument will contain all of the existing
environments. When an environment is reset it is set back the default state, but the environment is
not deleted. The primary use of this notification is to allow add-ins to reconfigure their
environments after a reset has occurred. In most cases this will involved performing the same
actions that the add-in performed when it was initialized and the FirstTime argument is True. The
exception is the creation of the environment since they are not deleted as a result of the reset. Only
the configuration of the environment needs to be performed. Event that is fired when the end user
clicks the Reset button in the UI customization dialog. Typically, the client application should
then perform the following actions. * Populate custom environments. * Populate custom toolbars.
* Modify Inventor environments. * Modify Inventor toolbars.
Version
Introduced in version 10
UserInterfaceEvents.OnResetInventorLayout
Event
Parent Object: UserInterfaceEvents
Description
Event that is fired when the Inventor layout is reset.
Syntax
UserInterfaceEvents.OnResetInventorLayout( Context As NameValueMap )
UserInterfaceEvents Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Parameters
Name Type Description
Context NameValueMap
Input NameValueMap object that contains additional information about
the event. No additional information is provided for this event.
Version
Introduced in version 2022
UserInterfaceEvents.OnResetMarkingMenu
Event
Parent Object: UserInterfaceEvents
Description
Event that is fired when the user resets an individual or all radial marking menus.
Syntax
UserInterfaceEvents.OnResetMarkingMenu( MarkingMenuInternalName As String, Context
As NameValueMap )
Parameters
Name Type Description
MarkingMenuInternalName String
The internal name of the radial marking menu that
was reset. In the case of an add-in created radial
marking menu, the marking menu is deleted by
Inventor and will need to be re-created by the addin
in response to this event. For built-in marking
menus, this name can be used to obtain the existing
marking menu and apply any desired modifications.
If the user has chosen to reset all marking menus
then this argument will be an empty String.
Context NameValueMap
Input NameValueMap object that contains
additional information about the event. No
additional information is currently provided for this
event.
UserInterfaceEvents Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Version
Introduced in version 2013
UserInterfaceEvents.OnResetRibbonInterface
Event
Parent Object: UserInterfaceEvents
Description
Event that is fired when the ribbon user interface is reset.
Syntax
UserInterfaceEvents.OnResetRibbonInterface( Context As NameValueMap )
Parameters
Name Type Description
Context NameValueMap
Input NameValueMap object that contains additional information about
the event. Currently, this argument does not contain any information.
Version
Introduced in version 2010
UserInterfaceEvents.OnResetShortcuts Event
Parent Object: UserInterfaceEvents
Description
Event that is fired when command shortcuts/aliases are reset in the Customize dialog (using either
the "Reset All Keys" or "Reset All" button).
Syntax
UserInterfaceEvents.OnResetShortcuts( Context As NameValueMap )
UserInterfaceEvents Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Parameters
Name Type Description
Context NameValueMap
Input NameValueMap object that contains additional information about
the event. No additional information is provided for this event.
Version
Introduced in version 2008
UserInterfaceEvents.Parent Property
Parent Object: UserInterfaceEvents
Description
Gets the parent object from whom this object can logically be reached.
Syntax
UserInterfaceEvents.Parent() As UserInterfaceManager
Property Value
This is a read only property whose value is a UserInterfaceManager.
Version
Introduced in version 10
UserInterfaceEvents.Type Property
Parent Object: UserInterfaceEvents
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserInterfaceEvents.Type() As ObjectTypeEnum
UserInterfaceEvents Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
UserInterfaceEvents Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB691.htm 17/06/2025
UserParameters Object
Description
Provides access to the user parameters ( objects) associated with the object the collection was
obtained from.
Methods
Name Description
AddByExpression Method that creates a new parameter given a name and expression.
AddByValue Method that creates a new parameter given a name and equation.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item
Returns the specified UserParameter object from the collection. This is the default
property of the UserParameters collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Parameters.UserParameters
Samples
Name Description
Create user
parameters
This sample demonstrates creating user parameters using an expression and a
value. A part document must be open and it must not contain user parameters
named "NewParam1" and "NewParam2".
Version
Introduced in version 4
UserParameters.AddByExpression Method
Parent Object: UserParameters
UserParameters Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh21ED.htm 17/06/2025
Description
Method that creates a new parameter given a name and expression.
Syntax
UserParameters.AddByExpression( Name As String, Expression As String, UnitsSpecifier As
Variant ) As UserParameter
Parameters
Name Type Description
Name String
Input String value that specifies the name for the parameter. The name
must be unique with respect to all other parameters in this document. If a
unique name is not specified an error will occur.
Expression String
Input String value that specifies the equation for the parameter. This string
is evaluated the same way as strings entered in any of the Autodesk
Inventor dialogs are evaluated. For example "x + 3 in / 2 cm" is a valid
string for input.
UnitsSpecifier Variant
Input value that specifies the type of unit the parameter is. The units can
be specified using either a string defining a valid unit or an item from the
UnitsTypeEnum. If the equation references existing parameters, this unit
type must be consistent with the unit type defined by the equation,
otherwise an error will occur. You specify a unit type using a value from
UnitsTypeEnum or a string that describes a unit. For example, both of the
following are valid unit specifiers for inch: kInchLengthUnits and "in".
String specifiers are typically used for units that are not defined in the
enum list. For example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string "in in in".
Samples
Name Description
Create user
parameters
This sample demonstrates creating user parameters using an expression and a
value. A part document must be open and it must not contain user parameters
named "NewParam1" and "NewParam2".
Version
Introduced in version 4
UserParameters.AddByValue Method
Parent Object: UserParameters
UserParameters Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh21ED.htm 17/06/2025
Description
Method that creates a new parameter given a name and equation.
Syntax
UserParameters.AddByValue( Name As String, Value As Variant, UnitsSpecifier As Variant )
As UserParameter
Parameters
Name Type Description
Name String
Input String value that specifies the name for the parameter. The name
must be unique with respect to all other parameters in this document. If a
unique name is not specified an error will occur.
Value Variant
Input Double value that specifies the value for the parameter. This value is
given in database units for the unit type defined by the UnitType
argument.
UnitsSpecifier Variant
Input value that specifies the type of unit the parameter is. The units can
be specified using either a string defining a valid unit or an item from the
UnitsTypeEnum. If the equation references existing parameters, this unit
type must be consistent with the unit type defined by the equation,
otherwise an error will occur. You specify a unit type using a value from
UnitsTypeEnum or a string that describes a unit. For example, both of the
following are valid unit specifiers for inch: kInchLengthUnits and "in".
String specifiers are typically used for units that are not defined in the
enum list. For \example, the volume measure for cubic inches is not
defined in the enum list but you can specify it using the string "in in in".
Samples
Name Description
Create user
parameters
This sample demonstrates creating user parameters using an expression and
a value. A part document must be open and it must not contain user
parameters named "NewParam1" and "NewParam2".
Text and Boolean
user parameter
creation
This sample demonstrates how to create Text and Boolean user parameter.
Version
Introduced in version 4
UserParameters Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh21ED.htm 17/06/2025
UserParameters.Count Property
Parent Object: UserParameters
Description
Property that returns the number of items in this collection.
Syntax
UserParameters.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
UserParameters.Item Property
Parent Object: UserParameters
Description
Returns the specified UserParameter object from the collection. This is the default property of the
UserParameters collection object.
Syntax
UserParameters.Item( Index As Variant ) As UserParameter
Property Value
This is a read only property whose value is a UserParameter.
Parameters
Name Type Description
Index Variant Input Variant value that specifies the UserParameter to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
UserParameters Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh21ED.htm 17/06/2025
indicating the parameter name. If an out of range index or a name of a non-existent
parameter is provided, an error occurs.
Version
Introduced in version 4
UserParameters.Type Property
Parent Object: UserParameters
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserParameters.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
UserParameters Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh21ED.htm 17/06/2025
UserInterfaceManager Object
Description
The UserInterfaceManager object, through which all UI customization objects can be accessed. See Ribbon Customization for an
overview.
Methods
Name Description
AllReferencedControls
Method that returns all command controls in Inventor's ribbon interface that reference the input
ControlDefinition. Controls from ribbons panels, Quick Access Toolbar and the File Browser (application
menu) are returned.
DoEvents Allows Inventor to process all Windows messages currently in the message queue.
GetCommandPaths Method that returns all the paths that the given command is found in, optionally filtered to an environment.
ResetRibbonInterface Method that removes all customizations from the ribbon user interface.
Properties
Name Description
ActiveEnvironment Property that returns the Environment that is currently active.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
BalloonTips Read-only property that returns the BalloonTips collection object.
CapacityMeterEnabled Gets and sets whether to enable the capacity meter display in Inventor's status bar.
DockableWindows Property that returns the DockableWindows collection object.
Environments Property that returns the Environments collection object.
ExpertMode Gets/Sets the Boolean flag indicating whether the UI is in Expert mode.
FileBrowserControls
Property that returns a CommandControls collection containing the controls in the File
Browser (a.k.a Application Menu).
HelpControls
Property that returns a CommandControls collection containing the controls in the Help
Menu.
OverflowMenuBehavior Read-write property that gets and sets the behavior of the overflow menu.
ParallelEnvironments
Property that returns the list of Environments valid for the edit target or the environment
being switched to. Environments can be added to or removed from the list as seen
appropriate by the client when an OnNewEditObject or an OnEnvironmentChange event is
received. This list of environments will show in the Applications menu item. This list may
only contain non-built-in environments.
Parent Property that returns the parent object from whom this object can logically be reached.
PinMiniToolbarPosition Read-only property that gets whether the MiniToolbar position is pinned or not.
RibbonAppearance Gets and sets the appearance of the ribbon.
RibbonDockingState Gets and sets the docking state of the ribbon.
Ribbons Property that returns the Ribbons collection object.
RibbonState
Gets and sets the display state of the ribbon. Valid values are kFullRibbon,
kMinimizeToTabs, kMinimizeToPanelTitles and kMinimizeToPanelButtons.
ShowBrowser Show/Hide Browser.
ShowCleanScreen Gets sets whether the viewed screen area is maximized.
ShowDocumentTabs Gets and sets whether document tabs are displayed.
ShowMarkingMenu Property that gets and sets whether to use the marking menu.
ShowNavigationBar Read-write property that gets and sets whether the navigation bar is displayed.
ShowQuickAccessControlsBelowRibbon Gets and sets whether the Quick Access Toolbar (QAT) is shown below or above the ribbon.
ShowStatusBar Show/Hide StatusBar.
ShowSteeringWheel Read-write property that gets and sets whether the steering wheel control is displayed.
ShowViewCube Read-write property that gets and sets whether the view cube is displayed.
Type Returns an ObjectTypeEnum indicating this object's type.
UserInteractionDisabled Enable/Disable user interaction.
UserInterfaceEvents Property returning the UserInterfaceEvents object.
UserInterfaceManager Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Accessed From
Application.UserInterfaceManager, BalloonTip.Parent, DockableWindow.Parent, Ribbon.Parent, UserInterfaceEvents.Parent,
WebBrowserDockableWindow.Parent
Samples
Name Description
Add commands to the
application menu
Demonstrates adding command to the application menu.
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel environments and contextual ribbon tabs.
Dockable window This sample demonstrates creating a dockable window and adding a dialog into it.
Print information about all
available ribbons.
This sample prints out all of the elements of the ribbons. This output is very useful when customizing
the ribbon to be able to get the names of the various existing ribbons, tabs, and panels.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override environment.
Version
Introduced in version 9
UserInterfaceManager.ActiveEnvironment Property
Parent Object: UserInterfaceManager
Description
Property that returns the Environment that is currently active.
Syntax
UserInterfaceManager.ActiveEnvironment() As Environment
Property Value
This is a read only property whose value is an Environment.
Samples
Name Description
Play back a simulation This sample plays back an existing dynamic simulation.
Version
Introduced in version 9
UserInterfaceManager.AllReferencedControls Method
Parent Object: UserInterfaceManager
Description
Method that returns all command controls in Inventor's ribbon interface that reference the input ControlDefinition. Controls from
ribbons panels, Quick Access Toolbar and the File Browser (application menu) are returned.
Syntax
UserInterfaceManager.AllReferencedControls( Definition As ControlDefinition ) As CommandControlsEnumerator
UserInterfaceManager Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Parameters
Name Type Description
Definition ControlDefinition Input ControlDefinition object to find the controls for.
Version
Introduced in version 2010
UserInterfaceManager.Application Property
Parent Object: UserInterfaceManager
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Syntax
UserInterfaceManager.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 9
UserInterfaceManager.BalloonTips Property
Parent Object: UserInterfaceManager
Description
Read-only property that returns the BalloonTips collection object.
Syntax
UserInterfaceManager.BalloonTips() As BalloonTips
Property Value
This is a read only property whose value is a BalloonTips.
Version
Introduced in version 2012
UserInterfaceManager.CapacityMeterEnabled Property
Parent Object: UserInterfaceManager
Description
Gets and sets whether to enable the capacity meter display in Inventor's status bar.
UserInterfaceManager Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Syntax
UserInterfaceManager.CapacityMeterEnabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
UserInterfaceManager.DockableWindows Property
Parent Object: UserInterfaceManager
Description
Property that returns the DockableWindows collection object.
Syntax
UserInterfaceManager.DockableWindows() As DockableWindows
Property Value
This is a read only property whose value is a DockableWindows.
Version
Introduced in version 2011
UserInterfaceManager.DoEvents Method
Parent Object: UserInterfaceManager
Description
Allows Inventor to process all Windows messages currently in the message queue.
Syntax
UserInterfaceManager.DoEvents()
Samples
Name Description
Basic Selection Using
Interaction Events
This sample demonstrates using the selection events to select a face. Selection is dependent on events
and VB only supports events within a class module.
Version
Introduced in version 2010
UserInterfaceManager.Environments Property
Parent Object: UserInterfaceManager
UserInterfaceManager Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Description
Property that returns the Environments collection object.
Syntax
UserInterfaceManager.Environments() As Environments
Property Value
This is a read only property whose value is an Environments.
Samples
Name Description
Add parallel environment with contextual tabs
The following sample demonstrates the use of parallel environments and contextual
ribbon tabs.
Creation of an override environment for a
document
A new ribbon tab is created and associated with the override environment.
Version
Introduced in version 9
UserInterfaceManager.ExpertMode Property
Parent Object: UserInterfaceManager
Description
Gets/Sets the Boolean flag indicating whether the UI is in Expert mode.
Syntax
UserInterfaceManager.ExpertMode() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
UserInterfaceManager.FileBrowserControls Property
Parent Object: UserInterfaceManager
Description
Property that returns a CommandControls collection containing the controls in the File Browser (a.k.a Application Menu).
Syntax
UserInterfaceManager.FileBrowserControls() As CommandControls
Property Value
This is a read only property whose value is a CommandControls.
UserInterfaceManager Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Samples
Name Description
Add commands to the
application menu
Demonstrates adding command to the application menu.
Print information about all
available ribbons.
This sample prints out all of the elements of the ribbons. This output is very useful when customizing the
ribbon to be able to get the names of the various existing ribbons, tabs, and panels.
Version
Introduced in version 2010
UserInterfaceManager.GetCommandPaths Method
Parent Object: UserInterfaceManager
Description
Method that returns all the paths that the given command is found in, optionally filtered to an environment.
Syntax
UserInterfaceManager.GetCommandPaths( CommandInternalName As String, [Environment] As Variant ) As String
Parameters
Name Type Description
CommandInternalName String Input String that specifies the internal name of a ControlDefinition.
Environment Variant
Optional input Environment object that specifies which Environment to return the paths for. If not
specified, paths from all environments are returned.
This is an optional argument whose default value is null.
Remarks
The paths begin with the display name of the environment, followed by the tab and panel names. If the command is within a split
button, the display name of the split button control is also included. Finally the path contains the display name of the command. Paths
are comma separated.
For example, if "PartExtrudeCmd" is provided as the internal name, the returned string is: "Part > Model > Create > Extrude, Flat
Pattern > Flat Pattern > Create > Extrude, Assembly > Model > Modify Assembly > Extrude, Weldment Assembly > Weld >
Preparation and Machining > Extrude"
Version
Introduced in version 2011
UserInterfaceManager.HelpControls Property
Parent Object: UserInterfaceManager
Description
Property that returns a CommandControls collection containing the controls in the Help Menu.
Syntax
UserInterfaceManager.HelpControls() As CommandControls
UserInterfaceManager Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Property Value
This is a read only property whose value is a CommandControls.
Samples
Name Description
Print information about all
available ribbons.
This sample prints out all of the elements of the ribbons. This output is very useful when customizing the
ribbon to be able to get the names of the various existing ribbons, tabs, and panels.
Version
Introduced in version 2010
UserInterfaceManager.OverflowMenuBehavior Property
Parent Object: UserInterfaceManager
Description
Read-write property that gets and sets the behavior of the overflow menu.
Syntax
UserInterfaceManager.OverflowMenuBehavior() As OverflowMenuBehaviorEnum
Property Value
This is a read/write property whose value is an OverflowMenuBehaviorEnum.
Version
Introduced in version 2013
UserInterfaceManager.ParallelEnvironments Property
Parent Object: UserInterfaceManager
Description
Property that returns the list of Environments valid for the edit target or the environment being switched to. Environments can be added
to or removed from the list as seen appropriate by the client when an OnNewEditObject or an OnEnvironmentChange event is received.
This list of environments will show in the Applications menu item. This list may only contain non-built-in environments.
Syntax
UserInterfaceManager.ParallelEnvironments() As EnvironmentList
Property Value
This is a read only property whose value is an EnvironmentList.
Samples
Name Description
Add parallel environment with contextual
tabs
The following sample demonstrates the use of parallel environments and contextual
ribbon tabs.
UserInterfaceManager Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Version
Introduced in version 10
UserInterfaceManager.Parent Property
Parent Object: UserInterfaceManager
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
UserInterfaceManager.Parent() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 9
UserInterfaceManager.PinMiniToolbarPosition Property
Parent Object: UserInterfaceManager
Description
Read-only property that gets whether the MiniToolbar position is pinned or not.
Syntax
UserInterfaceManager.PinMiniToolbarPosition() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2018
UserInterfaceManager.ResetRibbonInterface Method
Parent Object: UserInterfaceManager
Description
Method that removes all customizations from the ribbon user interface.
Syntax
UserInterfaceManager.ResetRibbonInterface()
UserInterfaceManager Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Version
Introduced in version 2010
UserInterfaceManager.RibbonAppearance Property
Parent Object: UserInterfaceManager
Description
Gets and sets the appearance of the ribbon.
Syntax
UserInterfaceManager.RibbonAppearance() As RibbonAppearanceEnum
Property Value
This is a read/write property whose value is a RibbonAppearanceEnum.
Version
Introduced in version 2010
UserInterfaceManager.RibbonDockingState Property
Parent Object: UserInterfaceManager
Description
Gets and sets the docking state of the ribbon.
Syntax
UserInterfaceManager.RibbonDockingState() As RibbonDockingStateEnum
Property Value
This is a read/write property whose value is a RibbonDockingStateEnum.
Version
Introduced in version 2010
UserInterfaceManager.Ribbons Property
Parent Object: UserInterfaceManager
Description
Property that returns the Ribbons collection object.
Syntax
UserInterfaceManager.Ribbons() As Ribbons
UserInterfaceManager Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Property Value
This is a read only property whose value is a Ribbons.
Samples
Name Description
Add parallel environment with
contextual tabs
The following sample demonstrates the use of parallel environments and contextual ribbon tabs.
Print information about all
available ribbons.
This sample prints out all of the elements of the ribbons. This output is very useful when customizing
the ribbon to be able to get the names of the various existing ribbons, tabs, and panels.
Creation of an override
environment for a document
A new ribbon tab is created and associated with the override environment.
Create a ribbon panel in an
existing tab
Demonstrates creating a new ribbon panel within an existing ribbon tab.
Version
Introduced in version 2010
UserInterfaceManager.RibbonState Property
Parent Object: UserInterfaceManager
Description
Gets and sets the display state of the ribbon. Valid values are kFullRibbon, kMinimizeToTabs, kMinimizeToPanelTitles and
kMinimizeToPanelButtons.
Syntax
UserInterfaceManager.RibbonState() As RibbonStateEnum
Property Value
This is a read/write property whose value is a RibbonStateEnum.
Version
Introduced in version 2010
UserInterfaceManager.ShowBrowser Property
Parent Object: UserInterfaceManager
Description
Show/Hide Browser.
Syntax
UserInterfaceManager.ShowBrowser() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UserInterfaceManager Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Version
Introduced in version 9
UserInterfaceManager.ShowCleanScreen Property
Parent Object: UserInterfaceManager
Description
Gets sets whether the viewed screen area is maximized.
Syntax
UserInterfaceManager.ShowCleanScreen() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserInterfaceManager.ShowDocumentTabs Property
Parent Object: UserInterfaceManager
Description
Gets and sets whether document tabs are displayed.
Syntax
UserInterfaceManager.ShowDocumentTabs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserInterfaceManager.ShowMarkingMenu Property
Parent Object: UserInterfaceManager
Description
Property that gets and sets whether to use the marking menu.
Syntax
UserInterfaceManager.ShowMarkingMenu() As Boolean
UserInterfaceManager Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2012
UserInterfaceManager.ShowNavigationBar Property
Parent Object: UserInterfaceManager
Description
Read-write property that gets and sets whether the navigation bar is displayed.
Syntax
UserInterfaceManager.ShowNavigationBar() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
UserInterfaceManager.ShowQuickAccessControlsBelowRibbon
Property
Parent Object: UserInterfaceManager
Description
Gets and sets whether the Quick Access Toolbar (QAT) is shown below or above the ribbon.
Syntax
UserInterfaceManager.ShowQuickAccessControlsBelowRibbon() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
UserInterfaceManager.ShowStatusBar Property
Parent Object: UserInterfaceManager
Description
Show/Hide StatusBar.
UserInterfaceManager Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Syntax
UserInterfaceManager.ShowStatusBar() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
UserInterfaceManager.ShowSteeringWheel Property
Parent Object: UserInterfaceManager
Description
Read-write property that gets and sets whether the steering wheel control is displayed.
Syntax
UserInterfaceManager.ShowSteeringWheel() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
UserInterfaceManager.ShowViewCube Property
Parent Object: UserInterfaceManager
Description
Read-write property that gets and sets whether the view cube is displayed.
Syntax
UserInterfaceManager.ShowViewCube() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
UserInterfaceManager.Type Property
Parent Object: UserInterfaceManager
UserInterfaceManager Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
UserInterfaceManager.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
UserInterfaceManager.UserInteractionDisabled Property
Parent Object: UserInterfaceManager
Description
Enable/Disable user interaction.
Syntax
UserInterfaceManager.UserInteractionDisabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
UserInterfaceManager.UserInterfaceEvents Property
Parent Object: UserInterfaceManager
Description
Property returning the UserInterfaceEvents object.
Syntax
UserInterfaceManager.UserInterfaceEvents() As UserInterfaceEvents
Property Value
This is a read only property whose value is a UserInterfaceEvents.
Version
Introduced in version 10
UserInterfaceManager Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD0EF.htm 17/06/2025
UserParameter Object
Derived from: Parameter Object
Description
Object that represents a parameter that was created by the user.
Methods
Name Description
ConvertToModelParameter
Method that causes the parameter to be converted to a model
parameter. The new ModelParameter object is returned.
ConvertToReferenceParameter
Method that causes the parameter to be converted to a reference
parameter. The new ReferenceParameter object is returned.
Delete Method that deletes this Parameter.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
Comment Gets the user comments against this parameter.
CustomPropertyFormat
Property that returns the CustomPropertyFormat object associated with this
parameter. The CustomPropertyFormat provides control over how the
parameter value is formatted when it is exposed as a custom iProperty.
Dependents
Property that returns the collection of objects that have a direct dependency
on the parameter.
DisabledActionTypes Gets and sets the action types valid for this parameter.
DisplayFormat Gets and sets the display format for the parameter.
DrivenBy
Method that returns the collection objects that the parameter is dependent
on.
ExposedAsProperty
Gets/(Sets) the Boolean indicating if this parameter is exposed as a
property of this Document.
Expression
Gets/(Sets) the string that denotes the algebraic expression making up the
definition of this parameter. Maybe a constant. 'Set' may not be allowed on
some parameter types.
ExpressionList Property that returns the expression list associated with this parameter.
HealthStatus Property that returns an enum indicating the current state of the object.
InUse
Property that returns whether whether this parameter is currently in use (by
a dimension, feature or by any other parameter).
IsKey
Gets and sets whether this parameter is a key parameter or not. Key
parameters are typically those that need to be easily accessed and are
designated as key to be filtered out from the rest of the parameters.
UserParameter Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
ModelValue Property that returns the evaluation of this parameter (in database units)
that is currently used by the model. This takes into account the value
computed from the expression and the tolerance. This method is only valid
for numeric unit types and will fail for Text and Boolean unit types.
ModelValueType
Gets/(Sets) the setting which is used for determining the method used to
compute the model value.
Name Gets/Sets the name of this parameter.
ParameterType
Property that allows you to get the type of the parameter. The parameter
type can be either kModelParameterType, kDerivedParameter,
kReferenceParameterType, kTableParameterType, or
kUserParameterType.
Parent Property that returns the parent Document of this parameter.
Precision
Gets/(Sets) the the number of decimal places displayed for this parameter.
Note that the precision is used when applying a standard tolerance to the
parameter.
Tolerance
Property that returns the tolerance for this parameter. This property returns
Nothing in the case where the unit type of this parameter is kTextUnits or
kBooleanUnits.
Type Returns an ObjectTypeEnum indicating this object's type.
Units
Gets/(Sets) the units of the parameter. Note that the units is always
retrieved as a string, but may be set using a constant from UnitsTypeEnum.
'Set' may not be allowed on some parameter types.
Value
Gets/(Sets) the value of this parameter. Numeric values are in database
units. Setting this is equivalent to setting the 'Expression' with a constant
string. 'Set' may not be allowed on some parameter types.
Accessed From
ModelParameter.ConvertToUserParameter, ReferenceParameter.ConvertToUserParameter,
TableParameter.ConvertToUserParameter, UserParameters.AddByExpression,
UserParameters.AddByValue, UserParameters.Item
Samples
Name Description
Creating a new
parameter group
This sample demonstrates the creation of model, reference and user
parameters and copying these parameters to a newly created group.
Version
Introduced in version 4
UserParameter.AttributeSets Property
Parent Object: UserParameter
UserParameter Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
UserParameter.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
UserParameter.Comment Property
Parent Object: UserParameter
Description
Gets the user comments against this parameter.
Syntax
UserParameter.Comment() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
UserParameter.ConvertToModelParameter
Method
Parent Object: UserParameter
UserParameter Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Description
Method that causes the parameter to be converted to a model parameter. The new ModelParameter
object is returned.
Syntax
UserParameter.ConvertToModelParameter() As ModelParameter
Version
Introduced in version 10
UserParameter.ConvertToReferenceParameter
Method
Parent Object: UserParameter
Description
Method that causes the parameter to be converted to a reference parameter. The new
ReferenceParameter object is returned.
Syntax
UserParameter.ConvertToReferenceParameter() As ReferenceParameter
Version
Introduced in version 10
UserParameter.CustomPropertyFormat
Property
Parent Object: UserParameter
Description
Property that returns the CustomPropertyFormat object associated with this parameter. The
CustomPropertyFormat provides control over how the parameter value is formatted when it is
exposed as a custom iProperty.
UserParameter Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Syntax
UserParameter.CustomPropertyFormat() As CustomPropertyFormat
Property Value
This is a read only property whose value is a CustomPropertyFormat.
Version
Introduced in version 2010
UserParameter.Delete Method
Parent Object: UserParameter
Description
Method that deletes this Parameter.
Syntax
UserParameter.Delete()
Version
Introduced in version 4
UserParameter.Dependents Property
Parent Object: UserParameter
Description
Property that returns the collection of objects that have a direct dependency on the parameter.
Syntax
UserParameter.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
UserParameter Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Version
Introduced in version 4
UserParameter.DisabledActionTypes Property
Parent Object: UserParameter
Description
Gets and sets the action types valid for this parameter.
Syntax
UserParameter.DisabledActionTypes() As ActionTypeEnum
Property Value
This is a read/write property whose value is an ActionTypeEnum.
Version
Introduced in version 9
UserParameter.DisplayFormat Property
Parent Object: UserParameter
Description
Gets and sets the display format for the parameter.
Syntax
UserParameter.DisplayFormat() As ParameterDisplayFormatEnum
Property Value
This is a read/write property whose value is a ParameterDisplayFormatEnum.
UserParameter Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Version
Introduced in version 2011
UserParameter.DrivenBy Property
Parent Object: UserParameter
Description
Method that returns the collection objects that the parameter is dependent on.
Syntax
UserParameter.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
UserParameter.ExposedAsProperty Property
Parent Object: UserParameter
Description
Gets/(Sets) the Boolean indicating if this parameter is exposed as a property of this Document.
Syntax
UserParameter.ExposedAsProperty() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
UserParameter Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Version
Introduced in version 5.3
UserParameter.Expression Property
Parent Object: UserParameter
Description
Gets/(Sets) the string that denotes the algebraic expression making up the definition of this
parameter. Maybe a constant. 'Set' may not be allowed on some parameter types.
Syntax
UserParameter.Expression() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
UserParameter.ExpressionList Property
Parent Object: UserParameter
Description
Property that returns the expression list associated with this parameter.
Syntax
UserParameter.ExpressionList() As ExpressionList
Property Value
This is a read only property whose value is an ExpressionList.
UserParameter Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Version
Introduced in version 2011
UserParameter.GetReferenceKey Method
Parent Object: UserParameter
Description
Method that generates and returns the reference key for this entity.
Syntax
UserParameter.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 5
UserParameter.HealthStatus Property
Parent Object: UserParameter
Description
Property that returns an enum indicating the current state of the object.
Syntax
UserParameter.HealthStatus() As HealthStatusEnum
UserParameter Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 4
UserParameter.InUse Property
Parent Object: UserParameter
Description
Property that returns whether whether this parameter is currently in use (by a dimension, feature or
by any other parameter).
Syntax
UserParameter.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
UserParameter.IsKey Property
Parent Object: UserParameter
Description
Gets and sets whether this parameter is a key parameter or not. Key parameters are typically those
that need to be easily accessed and are designated as key to be filtered out from the rest of the
parameters.
Syntax
UserParameter.IsKey() As Boolean
UserParameter Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
UserParameter.ModelValue Property
Parent Object: UserParameter
Description
Property that returns the evaluation of this parameter (in database units) that is currently used by the
model. This takes into account the value computed from the expression and the tolerance. This
method is only valid for numeric unit types and will fail for Text and Boolean unit types.
Syntax
UserParameter.ModelValue() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 6
UserParameter.ModelValueType Property
Parent Object: UserParameter
Description
Gets/(Sets) the setting which is used for determining the method used to compute the model value.
Syntax
UserParameter.ModelValueType() As ModelValueTypeEnum
UserParameter Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Property Value
This is a read/write property whose value is a ModelValueTypeEnum.
Version
Introduced in version 6
UserParameter.Name Property
Parent Object: UserParameter
Description
Gets/Sets the name of this parameter.
Syntax
UserParameter.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
UserParameter.ParameterType Property
Parent Object: UserParameter
Description
Property that allows you to get the type of the parameter. The parameter type can be either
kModelParameterType, kDerivedParameter, kReferenceParameterType, kTableParameterType, or
kUserParameterType.
Syntax
UserParameter.ParameterType() As ParameterTypeEnum
UserParameter Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Property Value
This is a read only property whose value is a ParameterTypeEnum.
Version
Introduced in version 4
UserParameter.Parent Property
Parent Object: UserParameter
Description
Property that returns the parent Document of this parameter.
Syntax
UserParameter.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
UserParameter.Precision Property
Parent Object: UserParameter
Description
Gets/(Sets) the the number of decimal places displayed for this parameter. Note that the precision is
used when applying a standard tolerance to the parameter.
Syntax
UserParameter.Precision() As Long
UserParameter Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
UserParameter.Tolerance Property
Parent Object: UserParameter
Description
Property that returns the tolerance for this parameter. This property returns Nothing in the case
where the unit type of this parameter is kTextUnits or kBooleanUnits.
Syntax
UserParameter.Tolerance() As Tolerance
Property Value
This is a read only property whose value is a Tolerance.
Samples
Name Description
Display information about
parameter tolerances.
Dumps out information to the Immediate window about tolerance
information associated with parameters. A part document must be active
when this is run.
Version
Introduced in version 6
UserParameter.Type Property
Parent Object: UserParameter
Description
Returns an ObjectTypeEnum indicating this object's type.
UserParameter Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Syntax
UserParameter.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
UserParameter.Units Property
Parent Object: UserParameter
Description
Gets/(Sets) the units of the parameter. Note that the units is always retrieved as a string, but may be
set using a constant from UnitsTypeEnum. 'Set' may not be allowed on some parameter types.
Syntax
UserParameter.Units() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
UserParameter.Value Property
Parent Object: UserParameter
Description
Gets/(Sets) the value of this parameter. Numeric values are in database units. Setting this is
equivalent to setting the 'Expression' with a constant string. 'Set' may not be allowed on some
parameter types.
UserParameter Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025
Syntax
UserParameter.Value() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 4
UserParameter Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFDCB.htm 17/06/2025