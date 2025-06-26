HardwareOptions Object
Description
The HardwareOptions object provides access to properties that provide read and write access of the hardware
related application options. This is somewhat equivalent to the Hardware tab of the Application Options
dialog.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Diagnostics Property that returns a string with results of diagnostic testing.
EnableViewportGPURayTracing Read-write property that specifies whether to use GPU Raytracing.
GraphicsSettingType
Read-write property that specifies the type of the graphics hardware setting
to use.
Type Returns an ObjectTypeEnum indicating this object's type.
UseSoftwareGraphics Read-write property that specifies whether to use software graphics.
Accessed From
Application.HardwareOptions, ApprenticeServer.HardwareOptions,
ApprenticeServerComponent.HardwareOptions, InventorServer.HardwareOptions,
InventorServerObject.HardwareOptions
Version
Introduced in version 11
HardwareOptions.Application Property
Parent Object: HardwareOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
HardwareOptions.Application() As Object
Property Value
This is a read only property whose value is an Object.
HardwareOptions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A70.htm 16/06/2025
Version
Introduced in version 11
HardwareOptions.Diagnostics Property
Parent Object: HardwareOptions
Description
Property that returns a string with results of diagnostic testing.
Syntax
HardwareOptions.Diagnostics() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2010
HardwareOptions.EnableViewportGPURayTracing
Property
Parent Object: HardwareOptions
Description
Read-write property that specifies whether to use GPU Raytracing.
Syntax
HardwareOptions.EnableViewportGPURayTracing() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
HardwareOptions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A70.htm 16/06/2025
HardwareOptions.GraphicsSettingType Property
Parent Object: HardwareOptions
Description
Read-write property that specifies the type of the graphics hardware setting to use.
Syntax
HardwareOptions.GraphicsSettingType() As GraphicsSettingTypeEnum
Property Value
This is a read/write property whose value is a GraphicsSettingTypeEnum.
Version
Introduced in version 2011
HardwareOptions.Type Property
Parent Object: HardwareOptions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HardwareOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
HardwareOptions.UseSoftwareGraphics Property
Parent Object: HardwareOptions
Description
Read-write property that specifies whether to use software graphics.
HardwareOptions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A70.htm 16/06/2025
Syntax
HardwareOptions.UseSoftwareGraphics() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HardwareOptions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2A70.htm 16/06/2025
HeadsUpDisplayOptions Object
Description
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
DimensionInputEnabled Gets and sets whether to enable dimension input where possible.
DimensionInputInCartesianCoordinates
Gets and sets whether dimension input is in Cartesian or Polar coordinates. If set to False, input is
in Polar coordinates.
Enabled Gets and sets whether heads-up display is enabled for sketches.
Parent Property that returns the parent SketchOptions object.
PointerInputEnabled Gets and sets whether pointer input is enabled for sketches.
PointerInputInCartesianCoordinates
Gets and sets whether pointer input is in Cartesian or Polar coordinates. If set to False, input is in
Polar coordinates.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SketchOptions.HeadsUpDisplayOptions
Version
Introduced in version 2011
HeadsUpDisplayOptions.Application Property
Parent Object: HeadsUpDisplayOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Syntax
HeadsUpDisplayOptions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
HeadsUpDisplayOptions.DimensionInputEnabled Property
Parent Object: HeadsUpDisplayOptions
Description
Gets and sets whether to enable dimension input where possible.
Syntax
HeadsUpDisplayOptions.DimensionInputEnabled() As Boolean
HeadsUpDisplayOptions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5420.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HeadsUpDisplayOptions.DimensionInputInCartesianCoordinates
Property
Parent Object: HeadsUpDisplayOptions
Description
Gets and sets whether dimension input is in Cartesian or Polar coordinates. If set to False, input is in Polar coordinates.
Syntax
HeadsUpDisplayOptions.DimensionInputInCartesianCoordinates() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HeadsUpDisplayOptions.Enabled Property
Parent Object: HeadsUpDisplayOptions
Description
Gets and sets whether heads-up display is enabled for sketches.
Syntax
HeadsUpDisplayOptions.Enabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HeadsUpDisplayOptions.Parent Property
Parent Object: HeadsUpDisplayOptions
Description
Property that returns the parent SketchOptions object.
HeadsUpDisplayOptions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5420.htm 16/06/2025
Syntax
HeadsUpDisplayOptions.Parent() As SketchOptions
Property Value
This is a read only property whose value is a SketchOptions.
Version
Introduced in version 2011
HeadsUpDisplayOptions.PointerInputEnabled Property
Parent Object: HeadsUpDisplayOptions
Description
Gets and sets whether pointer input is enabled for sketches.
Syntax
HeadsUpDisplayOptions.PointerInputEnabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HeadsUpDisplayOptions.PointerInputInCartesianCoordinates
Property
Parent Object: HeadsUpDisplayOptions
Description
Gets and sets whether pointer input is in Cartesian or Polar coordinates. If set to False, input is in Polar coordinates.
Syntax
HeadsUpDisplayOptions.PointerInputInCartesianCoordinates() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HeadsUpDisplayOptions.Type Property
Parent Object: HeadsUpDisplayOptions
Description
HeadsUpDisplayOptions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5420.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HeadsUpDisplayOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
HeadsUpDisplayOptions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5420.htm 16/06/2025
HelicalConstraint3D Object
Derived from: GeometricConstraint3D Object
Description
This object represents a helix-based constraint.
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
HelicalConstraint3DProxy.NativeObject
Version
Introduced in version 2010
HelicalConstraint3D.Application Property
Parent Object: HelicalConstraint3D
Description
HelicalConstraint3D Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F0B.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HelicalConstraint3D.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HelicalConstraint3D.AttributeSets Property
Parent Object: HelicalConstraint3D
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HelicalConstraint3D.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
HelicalConstraint3D.Deletable Property
Parent Object: HelicalConstraint3D
Description
Indicates whether this object can be deleted.
HelicalConstraint3D Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F0B.htm 16/06/2025
Syntax
HelicalConstraint3D.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
HelicalConstraint3D.Delete Method
Parent Object: HelicalConstraint3D
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
HelicalConstraint3D.Delete()
Version
Introduced in version 2010
HelicalConstraint3D.GetReferenceKey
Method
Parent Object: HelicalConstraint3D
Description
Method that generates and returns the reference key for this entity.
Syntax
HelicalConstraint3D.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
HelicalConstraint3D Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F0B.htm 16/06/2025
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
HelicalConstraint3D.Parent Property
Parent Object: HelicalConstraint3D
Description
Property that returns the parent sketch of the object.
Syntax
HelicalConstraint3D.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2010
HelicalConstraint3D.Type Property
Parent Object: HelicalConstraint3D
Description
HelicalConstraint3D Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F0B.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HelicalConstraint3D.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
HelicalConstraint3D Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F0B.htm 16/06/2025
HelicalConstraint3DProxy Object
Derived from: GeometricConstraint3D Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2010
HelicalConstraint3DProxy.Application Property
Parent Object: HelicalConstraint3DProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
HelicalConstraint3DProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
Syntax
HelicalConstraint3DProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HelicalConstraint3DProxy.AttributeSets
Property
Parent Object: HelicalConstraint3DProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HelicalConstraint3DProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
HelicalConstraint3DProxy.ContainingOccurrence
Property
Parent Object: HelicalConstraint3DProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
HelicalConstraint3DProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
Syntax
HelicalConstraint3DProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2010
HelicalConstraint3DProxy.Deletable Property
Parent Object: HelicalConstraint3DProxy
Description
Indicates whether this object can be deleted.
Syntax
HelicalConstraint3DProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
HelicalConstraint3DProxy.Delete Method
Parent Object: HelicalConstraint3DProxy
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
HelicalConstraint3DProxy.Delete()
HelicalConstraint3DProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
Version
Introduced in version 2010
HelicalConstraint3DProxy.GetReferenceKey
Method
Parent Object: HelicalConstraint3DProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HelicalConstraint3DProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge,
EdgeUse and Vertex objects). A key context is created using the CreateKeyContext
method of the ReferenceKeyManager object. For all other object types, the key
context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
HelicalConstraint3DProxy.NativeObject
Property
Parent Object: HelicalConstraint3DProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
HelicalConstraint3DProxy.NativeObject() As HelicalConstraint3D
HelicalConstraint3DProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
Property Value
This is a read only property whose value is a HelicalConstraint3D.
Version
Introduced in version 2010
HelicalConstraint3DProxy.Parent Property
Parent Object: HelicalConstraint3DProxy
Description
Property that returns the parent sketch of the object.
Syntax
HelicalConstraint3DProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2010
HelicalConstraint3DProxy.Type Property
Parent Object: HelicalConstraint3DProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HelicalConstraint3DProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
HelicalConstraint3DProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
Version
Introduced in version 2010
HelicalConstraint3DProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh890B.htm 16/06/2025
HelicalCurve Object
Derived from: SketchEntity3D Object
Description
HelicalCurve object.
Methods
Name Description
Delete Method that deletes the sketch entity.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
Constraints3D
Property that returns a collection of sketch constraints that are tied
directly to this entity. This collection consists of geometric and bend
constraints.
ConstraintStatus
Property that returns an enum indicating the constraint status of the
sketch entity, signifying whether it is fully constrained, over
constrained, or under constrained.
Construction Gets / sets the Sketch3D Construction Property.
Definition Gets and sets the shape definition of the helical curve.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
Name Gets and sets the name of the helical curve.
OwnedBy Property indicating entity or entities that own this object.
Parent Property that returns the parent sketch of the entity.
RangeBox
Property that returns a Box object which contains the opposing points
of a rectangular box that is guaranteed to enclose this object.
Reference Gets and sets whether this entity is a reference entity or not.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity Property that returns the object this entity is dependent on. When
sketch entities are created by projecting model edges or intersecting the
model, the resulting entities are driven by the original model entities
and cannot be modified. This property returns the model entity the
HelicalCurve Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
sketch entity is dependent on. The Reference property indicates
whether the sketch entity is driven by a model entity or not. If the
sketch entity is not referencing a model entity, this property will return
Nothing. This property can also return nothing even when the sketch
entity is referencing a model entity in the case where the model entity
has been consumed by some subsequent modeling operation.
SketchEntities Returns a collection of sketch entities that belong to the helical curve.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HelicalCurveConstantShapeDefinition.Parent, HelicalCurveDefinition.Parent,
HelicalCurveProxy.NativeObject, HelicalCurves.Add, HelicalCurves.Item,
HelicalCurveVariableShapeDefinition.Parent
Derived Classes
HelicalCurveProxy
Version
Introduced in version 2019
HelicalCurve.Application Property
Parent Object: HelicalCurve
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HelicalCurve.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurve Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
HelicalCurve.AttributeSets Property
Parent Object: HelicalCurve
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HelicalCurve.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2019
HelicalCurve.Constraints3D Property
Parent Object: HelicalCurve
Description
Property that returns a collection of sketch constraints that are tied directly to this entity. This
collection consists of geometric and bend constraints.
Syntax
HelicalCurve.Constraints3D() As SketchConstraints3DEnumerator
Property Value
This is a read only property whose value is a SketchConstraints3DEnumerator.
Version
Introduced in version 2019
HelicalCurve Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
HelicalCurve.ConstraintStatus Property
Parent Object: HelicalCurve
Description
Property that returns an enum indicating the constraint status of the sketch entity, signifying
whether it is fully constrained, over constrained, or under constrained.
Syntax
HelicalCurve.ConstraintStatus() As ConstraintStatusEnum
Property Value
This is a read only property whose value is a ConstraintStatusEnum.
Version
Introduced in version 2019
HelicalCurve.Construction Property
Parent Object: HelicalCurve
Description
Gets / sets the Sketch3D Construction Property.
Syntax
HelicalCurve.Construction() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurve Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
HelicalCurve.Definition Property
Parent Object: HelicalCurve
Description
Gets and sets the shape definition of the helical curve.
Syntax
HelicalCurve.Definition() As HelicalCurveDefinition
Property Value
This is a read/write property whose value is a HelicalCurveDefinition.
Version
Introduced in version 2019
HelicalCurve.Delete Method
Parent Object: HelicalCurve
Description
Method that deletes the sketch entity.
Syntax
HelicalCurve.Delete()
Version
Introduced in version 2019
HelicalCurve.GetReferenceKey Method
Parent Object: HelicalCurve
Description
HelicalCurve Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
Method that generates and returns the reference key for this entity.
Syntax
HelicalCurve.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2019
HelicalCurve.HasReferenceComponent
Property
Parent Object: HelicalCurve
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
HelicalCurve.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurve Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
HelicalCurve.Name Property
Parent Object: HelicalCurve
Description
Gets and sets the name of the helical curve.
Syntax
HelicalCurve.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2019
HelicalCurve.OwnedBy Property
Parent Object: HelicalCurve
Description
Property indicating entity or entities that own this object.
Syntax
HelicalCurve.OwnedBy() As SketchEntities3DEnumerator
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2019
HelicalCurve.Parent Property
HelicalCurve Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
Parent Object: HelicalCurve
Description
Property that returns the parent sketch of the entity.
Syntax
HelicalCurve.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2019
HelicalCurve.RangeBox Property
Parent Object: HelicalCurve
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
HelicalCurve.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2019
HelicalCurve.Reference Property
Parent Object: HelicalCurve
HelicalCurve Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
Description
Gets and sets whether this entity is a reference entity or not.
Syntax
HelicalCurve.Reference() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurve.ReferenceComponent Property
Parent Object: HelicalCurve
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
HelicalCurve.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2019
HelicalCurve.ReferencedEntity Property
Parent Object: HelicalCurve
Description
HelicalCurve Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
Property that returns the object this entity is dependent on. When sketch entities are created by
projecting model edges or intersecting the model, the resulting entities are driven by the original
model entities and cannot be modified. This property returns the model entity the sketch entity is
dependent on. The Reference property indicates whether the sketch entity is driven by a model
entity or not. If the sketch entity is not referencing a model entity, this property will return
Nothing. This property can also return nothing even when the sketch entity is referencing a model
entity in the case where the model entity has been consumed by some subsequent modeling
operation.
Syntax
HelicalCurve.ReferencedEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurve.SketchEntities Property
Parent Object: HelicalCurve
Description
Returns a collection of sketch entities that belong to the helical curve.
Syntax
HelicalCurve.SketchEntities() As SketchEntities3DEnumerator
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2019
HelicalCurve.Type Property
HelicalCurve Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
Parent Object: HelicalCurve
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HelicalCurve.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurve Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA31B.htm 16/06/2025
HelicalCurveConstantShapeDefinition Object
Derived from: HelicalCurveDefinition Object
Description
HelicalCurveConstantShapeDefinition object.
Methods
Name Description
Copy Creates a copy of this HelicalCurveDefinition object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for)
'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice
Server.
AxisEndPoint Gets and sets the axis end point of the helical curve.
AxisStartPoint Gets and sets the axis start point of the helical curve.
Clockwise Gets and sets the rotation of the helical curve.
CurveStart Gets and sets the start point of the helical curve.
Diameter Gets and sets the diameter of the helical curve.
Height Gets and sets the height of the helical curve.
HelixEndEndType Gets and sets the helix end end type.
HelixEndFlatAngle Gets and sets the helix end flat angle.
HelixEndTransitionAngle Gets and sets the helix end transition angle.
HelixStartEndType Gets and sets the helix start end type.
HelixStartFlatAngle Gets and sets the helix start flat angle.
HelixStartTransitionAngle Gets and sets the helix start transition angle.
Parent Gets the parent object from whom this object can logically be reached.
Pitch Gets and sets the pitch of the helical curve.
Revolution Gets and sets the revolution of the helical curve.
ShapeDefinitionType Gets and sets the shape definition type of the helical curve.
Taper Gets and sets the taper angle of the helical curve.
Type Gets the constant that indicates the type of this object.
Accessed From
HelicalCurves.CreateConstantShapeDefinition
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Application Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when running with
Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
HelicalCurveConstantShapeDefinition.Application() As Object
HelicalCurveConstantShapeDefinition Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.AxisEndPoint Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the axis end point of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.AxisEndPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.AxisStartPoint Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the axis start point of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.AxisStartPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Clockwise Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the rotation of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Clockwise() As Boolean
HelicalCurveConstantShapeDefinition Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Copy Method
Parent Object: HelicalCurveConstantShapeDefinition
Description
Creates a copy of this HelicalCurveDefinition object.
Syntax
HelicalCurveConstantShapeDefinition.Copy() As HelicalCurveDefinition
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.CurveStart Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the start point of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.CurveStart() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Diameter Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the diameter of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Diameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
HelicalCurveConstantShapeDefinition Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Height Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the height of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Height() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixEndEndType
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the helix end end type.
Syntax
HelicalCurveConstantShapeDefinition.HelixEndEndType() As HelixEndTypeEnum
Property Value
This is a read/write property whose value is a HelixEndTypeEnum.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixEndFlatAngle
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the helix end flat angle.
Syntax
HelicalCurveConstantShapeDefinition.HelixEndFlatAngle() As Variant
HelicalCurveConstantShapeDefinition Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixEndTransitionAngle
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the helix end transition angle.
Syntax
HelicalCurveConstantShapeDefinition.HelixEndTransitionAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixStartEndType
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the helix start end type.
Syntax
HelicalCurveConstantShapeDefinition.HelixStartEndType() As HelixEndTypeEnum
Property Value
This is a read/write property whose value is a HelixEndTypeEnum.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixStartFlatAngle
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
HelicalCurveConstantShapeDefinition Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Gets and sets the helix start flat angle.
Syntax
HelicalCurveConstantShapeDefinition.HelixStartFlatAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.HelixStartTransitionAngle
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the helix start transition angle.
Syntax
HelicalCurveConstantShapeDefinition.HelixStartTransitionAngle() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Parent Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
HelicalCurveConstantShapeDefinition.Parent() As HelicalCurve
Property Value
This is a read only property whose value is a HelicalCurve.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Pitch Property
Parent Object: HelicalCurveConstantShapeDefinition
HelicalCurveConstantShapeDefinition Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Description
Gets and sets the pitch of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Pitch() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Revolution Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the revolution of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Revolution() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.ShapeDefinitionType
Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the shape definition type of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.ShapeDefinitionType() As HelicalShapeDefinitionTypeEnum
Property Value
This is a read/write property whose value is a HelicalShapeDefinitionTypeEnum.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Taper Property
HelicalCurveConstantShapeDefinition Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets and sets the taper angle of the helical curve.
Syntax
HelicalCurveConstantShapeDefinition.Taper() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition.Type Property
Parent Object: HelicalCurveConstantShapeDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
HelicalCurveConstantShapeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveConstantShapeDefinition Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC578.htm 16/06/2025
HelicalCurveDefinition Object
Description
HelicalCurveDefinition object.
Methods
Name Description
Copy Creates a copy of this HelicalCurveDefinition object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it
can be set to (QueryInterfaced for) 'Application' when running with
Inventor whereas, 'ApprenticeServer' when running with the Apprentice
Server.
AxisEndPoint Gets and sets the axis end point of the helical curve.
AxisStartPoint Gets and sets the axis start point of the helical curve.
Clockwise Gets and sets the rotation of the helical curve.
CurveStart Gets and sets the start point of the helical curve.
Parent Gets the parent object from whom this object can logically be reached.
ShapeDefinitionType Gets and sets the shape definition type of the helical curve.
Type Gets the constant that indicates the type of this object.
Accessed From
HelicalCurve.Definition, HelicalCurveConstantShapeDefinition.Copy,
HelicalCurveDefinition.Copy, HelicalCurveProxy.Definition,
HelicalCurveVariableShapeDefinition.Copy
Derived Classes
HelicalCurveConstantShapeDefinition, HelicalCurveVariableShapeDefinition
Version
Introduced in version 2019
HelicalCurveDefinition.Application Property
HelicalCurveDefinition Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
Parent Object: HelicalCurveDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
HelicalCurveDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveDefinition.AxisEndPoint
Property
Parent Object: HelicalCurveDefinition
Description
Gets and sets the axis end point of the helical curve.
Syntax
HelicalCurveDefinition.AxisEndPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveDefinition Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
HelicalCurveDefinition.AxisStartPoint
Property
Parent Object: HelicalCurveDefinition
Description
Gets and sets the axis start point of the helical curve.
Syntax
HelicalCurveDefinition.AxisStartPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveDefinition.Clockwise Property
Parent Object: HelicalCurveDefinition
Description
Gets and sets the rotation of the helical curve.
Syntax
HelicalCurveDefinition.Clockwise() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveDefinition Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
HelicalCurveDefinition.Copy Method
Parent Object: HelicalCurveDefinition
Description
Creates a copy of this HelicalCurveDefinition object.
Syntax
HelicalCurveDefinition.Copy() As HelicalCurveDefinition
Version
Introduced in version 2019
HelicalCurveDefinition.CurveStart Property
Parent Object: HelicalCurveDefinition
Description
Gets and sets the start point of the helical curve.
Syntax
HelicalCurveDefinition.CurveStart() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveDefinition.Parent Property
Parent Object: HelicalCurveDefinition
Description
HelicalCurveDefinition Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
Gets the parent object from whom this object can logically be reached.
Syntax
HelicalCurveDefinition.Parent() As HelicalCurve
Property Value
This is a read only property whose value is a HelicalCurve.
Version
Introduced in version 2019
HelicalCurveDefinition.ShapeDefinitionType
Property
Parent Object: HelicalCurveDefinition
Description
Gets and sets the shape definition type of the helical curve.
Syntax
HelicalCurveDefinition.ShapeDefinitionType() As HelicalShapeDefinitionTypeEnum
Property Value
This is a read/write property whose value is a HelicalShapeDefinitionTypeEnum.
Version
Introduced in version 2019
HelicalCurveDefinition.Type Property
Parent Object: HelicalCurveDefinition
Description
Gets the constant that indicates the type of this object.
HelicalCurveDefinition Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
Syntax
HelicalCurveDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveDefinition Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE787.htm 16/06/2025
HelicalCurveProxy Object
Derived from: HelicalCurve Object
Description
Helical Curve Proxy Object.
Methods
Name Description
Delete Method that deletes the sketch entity.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
Constraints3D
Property that returns a collection of sketch constraints that are tied
directly to this entity. This collection consists of geometric and bend
constraints.
ConstraintStatus
Property that returns an enum indicating the constraint status of the
sketch entity, signifying whether it is fully constrained, over
constrained, or under constrained.
Construction Gets / sets the Sketch3D Construction Property.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object
is being referenced through. The returned occurrence is the containing
occurrence.
Definition Gets and sets the shape definition of the helical curve.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
Name Gets and sets the name of the helical curve.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
OwnedBy Property indicating entity or entities that own this object.
Parent Property that returns the parent sketch of the entity.
RangeBox
Property that returns a Box object which contains the opposing points
of a rectangular box that is guaranteed to enclose this object.
Reference Gets and sets whether this entity is a reference entity or not.
ReferenceComponent
HelicalCurveProxy Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the object this entity is dependent on. When
sketch entities are created by projecting model edges or intersecting the
model, the resulting entities are driven by the original model entities
and cannot be modified. This property returns the model entity the
sketch entity is dependent on. The Reference property indicates
whether the sketch entity is driven by a model entity or not. If the
sketch entity is not referencing a model entity, this property will return
Nothing. This property can also return nothing even when the sketch
entity is referencing a model entity in the case where the model entity
has been consumed by some subsequent modeling operation.
SketchEntities Returns a collection of sketch entities that belong to the helical curve.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2019
HelicalCurveProxy.Application Property
Parent Object: HelicalCurveProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HelicalCurveProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveProxy.AttributeSets Property
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HelicalCurveProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2019
HelicalCurveProxy.Constraints3D Property
Parent Object: HelicalCurveProxy
Description
Property that returns a collection of sketch constraints that are tied directly to this entity. This
collection consists of geometric and bend constraints.
Syntax
HelicalCurveProxy.Constraints3D() As SketchConstraints3DEnumerator
Property Value
This is a read only property whose value is a SketchConstraints3DEnumerator.
Version
Introduced in version 2019
HelicalCurveProxy.ConstraintStatus
Property
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Property that returns an enum indicating the constraint status of the sketch entity, signifying
whether it is fully constrained, over constrained, or under constrained.
Syntax
HelicalCurveProxy.ConstraintStatus() As ConstraintStatusEnum
Property Value
This is a read only property whose value is a ConstraintStatusEnum.
Version
Introduced in version 2019
HelicalCurveProxy.Construction Property
Parent Object: HelicalCurveProxy
Description
Gets / sets the Sketch3D Construction Property.
Syntax
HelicalCurveProxy.Construction() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveProxy.ContainingOccurrence
Property
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
HelicalCurveProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2019
HelicalCurveProxy.Definition Property
Parent Object: HelicalCurveProxy
Description
Gets and sets the shape definition of the helical curve.
Syntax
HelicalCurveProxy.Definition() As HelicalCurveDefinition
Property Value
This is a read/write property whose value is a HelicalCurveDefinition.
Version
Introduced in version 2019
HelicalCurveProxy.Delete Method
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Method that deletes the sketch entity.
Syntax
HelicalCurveProxy.Delete()
Version
Introduced in version 2019
HelicalCurveProxy.GetReferenceKey Method
Parent Object: HelicalCurveProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HelicalCurveProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2019
HelicalCurveProxy Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
HelicalCurveProxy.HasReferenceComponent
Property
Parent Object: HelicalCurveProxy
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
HelicalCurveProxy.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveProxy.Name Property
Parent Object: HelicalCurveProxy
Description
Gets and sets the name of the helical curve.
Syntax
HelicalCurveProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2019
HelicalCurveProxy Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
HelicalCurveProxy.NativeObject Property
Parent Object: HelicalCurveProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
HelicalCurveProxy.NativeObject() As HelicalCurve
Property Value
This is a read only property whose value is a HelicalCurve.
Version
Introduced in version 2019
HelicalCurveProxy.OwnedBy Property
Parent Object: HelicalCurveProxy
Description
Property indicating entity or entities that own this object.
Syntax
HelicalCurveProxy.OwnedBy() As SketchEntities3DEnumerator
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2019
HelicalCurveProxy.Parent Property
HelicalCurveProxy Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Parent Object: HelicalCurveProxy
Description
Property that returns the parent sketch of the entity.
Syntax
HelicalCurveProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2019
HelicalCurveProxy.RangeBox Property
Parent Object: HelicalCurveProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
HelicalCurveProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2019
HelicalCurveProxy.Reference Property
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Gets and sets whether this entity is a reference entity or not.
Syntax
HelicalCurveProxy.Reference() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveProxy.ReferenceComponent
Property
Parent Object: HelicalCurveProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
HelicalCurveProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2019
HelicalCurveProxy.ReferencedEntity
Property
Parent Object: HelicalCurveProxy
HelicalCurveProxy Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
Description
Property that returns the object this entity is dependent on. When sketch entities are created by
projecting model edges or intersecting the model, the resulting entities are driven by the original
model entities and cannot be modified. This property returns the model entity the sketch entity is
dependent on. The Reference property indicates whether the sketch entity is driven by a model
entity or not. If the sketch entity is not referencing a model entity, this property will return
Nothing. This property can also return nothing even when the sketch entity is referencing a model
entity in the case where the model entity has been consumed by some subsequent modeling
operation.
Syntax
HelicalCurveProxy.ReferencedEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveProxy.SketchEntities Property
Parent Object: HelicalCurveProxy
Description
Returns a collection of sketch entities that belong to the helical curve.
Syntax
HelicalCurveProxy.SketchEntities() As SketchEntities3DEnumerator
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2019
HelicalCurveProxy Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
HelicalCurveProxy.Type Property
Parent Object: HelicalCurveProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HelicalCurveProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveProxy Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFE1.htm 16/06/2025
HelicalCurves Object
Description
HelicalCurves Object.
Methods
Name Description
Add Creates a helical curve.
CreateConstantShapeDefinition
Creates a helical curve shape definition which can be used to
create a helical curve.
CreateVariableShapeDefinition
Creates a helical curve shape definition which can be used to
create a helical curve.
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
Sketch3D.HelicalCurves, Sketch3DProxy.HelicalCurves
Version
Introduced in version 2019
HelicalCurves.Add Method
Parent Object: HelicalCurves
Description
Creates a helical curve.
HelicalCurves Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
Syntax
HelicalCurves.Add( HelicalCurveDefinition As HelicalCurveDefinition ) As HelicalCurve
Parameters
Name Type Description
HelicalCurveDefinition HelicalCurveDefinition
Input HelicalCurveDefinition object that defines
the inputs of the helical curve.
Version
Introduced in version 2019
HelicalCurves.Application Property
Parent Object: HelicalCurves
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
HelicalCurves.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurves.Count Property
Parent Object: HelicalCurves
Description
HelicalCurves Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
Gets the number of items in this collection.
Syntax
HelicalCurves.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2019
HelicalCurves.CreateConstantShapeDefinition
Method
Parent Object: HelicalCurves
Description
Creates a helical curve shape definition which can be used to create a helical curve.
Syntax
HelicalCurves.CreateConstantShapeDefinition( ShapeDefinitionType As
HelicalShapeDefinitionTypeEnum, AxisStartPoint As Point, AxisEndPoint As Point,
CurveStartPoint As Point, Diameter As Variant, [Pitch] As Variant, [Revolution] As Variant,
[Height] As Variant ) As HelicalCurveConstantShapeDefinition
Parameters
Name Type Description
ShapeDefinitionType HelicalShapeDefinitionTypeEnum
Input
HelicalShapeDefinitionTypeEnum that
defines the helical curve shape
definition type. Valid value includes:
kPitchAndRevolutionShapeType,
kPitchAndHeightShapeType,
kRevolutionAndHeightShapeType and
kSpiralShapeType.
AxisStartPoint Point
Input Point object that defines the axis
start point of the helical curve.
AxisEndPoint Point Input Point object that defines the axis
end point of the helical curve.
HelicalCurves Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
CurveStartPoint Point
Input Point object that defines the start
point of the helical curve. This maybe
not the exact position of the start point
of the helical curve, but defines the
direction of the helical curve start point
will be in, the direction is from the
AxisStartPoint to CurveStartPoint. If
the CurveStartPoint is not on the plane
that is perpendicular to the axis and
across the AxisStartPoint then it will be
projected onto the plane.
Diameter Variant
Input value that defines the diameter of
the helical curve. This can be either a
numeric value or a string. A parameter
for this value will be created and the
supplied string or value is assigned to
the parameter. If a value is input, the
units are centimeters. If a string is input,
the units can be specified as part of the
string or it will default to the current
length units of the document.
Pitch Variant
Optional input value that defines the
pitch of the helical curve. This can be
either a numeric value or a string. A
parameter for this value will be created
and the supplied string or value is
assigned to the parameter. If a value is
input, the units are centimeters. If a
string is input, the units can be specified
as part of the string or it will default to
the current length units of the
document. This is required if the
ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType,
kPitchAndHeightShapeType or
kSpiralShapeType.
This is an optional argument whose
default value is null.
Revolution Variant
Optional input Double value that
defines the revolution of the helical
curve. This is required if the
ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType,
kRevolutionAndHeightShapeType or
kSpiralShapeType.
This is an optional argument whose
default value is null.
Height Variant Optional input value that defines the
height of the helical curve. This can be
either a numeric value or a string. A
HelicalCurves Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
parameter for this value will be created
and the supplied string or value is
assigned to the parameter. If a value is
input, the units are centimeters. If a
string is input, the units can be specified
as part of the string or it will default to
the current length units of the
document. This is required if the
ShapeDefinitionType is specified as
kPitchAndHeightShapeType or
kRevolutionAndHeightShapeType.
This is an optional argument whose
default value is null.
Version
Introduced in version 2019
HelicalCurves.CreateVariableShapeDefinition
Method
Parent Object: HelicalCurves
Description
Creates a helical curve shape definition which can be used to create a helical curve.
Syntax
HelicalCurves.CreateVariableShapeDefinition( ShapeDefinitionType As
HelicalShapeDefinitionTypeEnum, AxisStartPoint As Point, AxisEndPoint As Point,
CurveStartPoint As Point, Diameter As Variant, [Pitch] As Variant, [Revolution] As Variant,
[Height] As Variant ) As HelicalCurveVariableShapeDefinition
Parameters
Name Type Description
ShapeDefinitionType HelicalShapeDefinitionTypeEnum
Input
HelicalShapeDefinitionTypeEnum that
defines the helical curve shape
definition type. Valid value includes:
kPitchAndRevolutionShapeType,
kPitchAndHeightShapeType, and
kRevolutionAndHeightShapeType.
AxisStartPoint Point
HelicalCurves Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
Input Point object that defines the axis
start point of the helical curve.
AxisEndPoint Point
Input Point object that defines the axis
end point of the helical curve.
CurveStartPoint Point
Input Point object that defines the start
point of the helical curve. This maybe
not the exact position of the start point
of the helical curve, but defines the
direction of the helical curve start point
will be in, the direction is from the
AxisStartPoint to CurveStartPoint. If
the CurveStartPoint is not on the plane
that is perpendicular to the axis and
across the AxisStartPoint then it will be
projected onto the plane.
Diameter Variant
Input value that defines the diameter of
the helical curve. This can be either a
numeric value or a string. A parameter
for this value will be created and the
supplied string or value is assigned to
the parameter. If a value is input, the
units are centimeters. If a string is input,
the units can be specified as part of the
string or it will default to the current
length units of the document.
Pitch Variant
Optional input value that defines the
pitch of the helical curve. This can be
either a numeric value or a string. A
parameter for this value will be created
and the supplied string or value is
assigned to the parameter. If a value is
input, the units are centimeters. If a
string is input, the units can be specified
as part of the string or it will default to
the current length units of the
document. This is required if the
ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType,
kPitchAndHeightShapeType or
kSpiralShapeType.
This is an optional argument whose
default value is null.
Revolution Variant Optional input Double value that
defines the revolution of the helical
curve. This is required if the
ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType,
kRevolutionAndHeightShapeType or
kSpiralShapeType.
HelicalCurves Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
This is an optional argument whose
default value is null.
Height Variant
Optional input value that defines the
height of the helical curve. This can be
either a numeric value or a string. A
parameter for this value will be created
and the supplied string or value is
assigned to the parameter. If a value is
input, the units are centimeters. If a
string is input, the units can be specified
as part of the string or it will default to
the current length units of the
document. This is required if the
ShapeDefinitionType is specified as
kPitchAndHeightShapeType or
kRevolutionAndHeightShapeType.
This is an optional argument whose
default value is null.
Version
Introduced in version 2019
HelicalCurves.Item Property
Parent Object: HelicalCurves
Description
Allows integer-indexed access to items in the collection.
Syntax
HelicalCurves.Item( Index As Variant ) As HelicalCurve
Property Value
This is a read only property whose value is a HelicalCurve.
Parameters
Name Type Description
Index Variant Input Variant value that specifies the helical curve to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
HelicalCurves Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
indicating the helical curve name. If an out of range index or a name of a nonexistent
helical curve is provided, an error occurs.
Version
Introduced in version 2019
HelicalCurves.Type Property
Parent Object: HelicalCurves
Description
Gets the constant that indicates the type of this object.
Syntax
HelicalCurves.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurves Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D5C.htm 16/06/2025
HelicalCurveShapeDefinitionRow Object
Description
HelicalCurveShapeDefinitionRow object.
Methods
Name Description
Delete Deletes this row.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Diameter Gets and sets the diameter of the helical curve.
Height Gets and sets the height of the helical curve.
Index Returns the index of the row.
Parent Gets the parent object from whom this object can logically be reached.
Pitch Gets and sets the pitch of the helical curve.
Revolution Gets and sets the revolution of the helical curve.
Type Gets the constant that indicates the type of this object.
Accessed From
HelicalCurveShapeDefinitionRows.Add, HelicalCurveShapeDefinitionRows.Item
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Application
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
HelicalCurveShapeDefinitionRow Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
HelicalCurveShapeDefinitionRow.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Delete
Method
Parent Object: HelicalCurveShapeDefinitionRow
Description
Deletes this row.
Syntax
HelicalCurveShapeDefinitionRow.Delete()
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Diameter
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets and sets the diameter of the helical curve.
HelicalCurveShapeDefinitionRow Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRow.Diameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Height
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets and sets the height of the helical curve.
Syntax
HelicalCurveShapeDefinitionRow.Height() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Index
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Returns the index of the row.
HelicalCurveShapeDefinitionRow Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRow.Index() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Parent
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets the parent object from whom this object can logically be reached.
Syntax
HelicalCurveShapeDefinitionRow.Parent() As HelicalCurveVariableShapeDefinition
Property Value
This is a read only property whose value is a HelicalCurveVariableShapeDefinition.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Pitch
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets and sets the pitch of the helical curve.
HelicalCurveShapeDefinitionRow Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRow.Pitch() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Revolution
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets and sets the revolution of the helical curve.
Syntax
HelicalCurveShapeDefinitionRow.Revolution() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow.Type
Property
Parent Object: HelicalCurveShapeDefinitionRow
Description
Gets the constant that indicates the type of this object.
HelicalCurveShapeDefinitionRow Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRow.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRow Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3AB8.htm 16/06/2025
HelicalCurveShapeDefinitionRows Object
Description
HelicalCurveShapeDefinitionRows object.
Methods
Name Description
Add Adds a new HelicalCurveShapeDefinitionRow.
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
HelicalCurveVariableShapeDefinition.ShapeDefinitionRows
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows.Add
Method
Parent Object: HelicalCurveShapeDefinitionRows
Description
Adds a new HelicalCurveShapeDefinitionRow.
HelicalCurveShapeDefinitionRows Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh565E.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRows.Add( Diameter As Variant, [Pitch] As Variant, [Revolution]
As Variant, [Height] As Variant, [Index] As Variant ) As HelicalCurveShapeDefinitionRow
Parameters
Name Type Description
Diameter Variant
Input value that defines the diameter of the helical curve. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of
the string or it will default to the current length units of the document.
Pitch Variant
Optional input value that defines the pitch of the helical curve. This can be
either a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value is
input, the units are centimeters. If a string is input, the units can be specified as
part of the string or it will default to the current length units of the document.
This is required if the ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType or kPitchAndHeightShapeType.
This is an optional argument whose default value is null.
Revolution Variant
Optional input Double value that defines the revolution of the helical curve.
This is required if the ShapeDefinitionType is specified as
kPitchAndRevolutionShapeType or kRevolutionAndHeightShapeType.
This is an optional argument whose default value is null.
Height Variant
Optional input value that defines the overall height of the helical curve till this
row. This can be either a numeric value or a string. A parameter for this value
will be created and the supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current length units of the
document. This is required if the ShapeDefinitionType is specified as
kPitchAndHeightShapeType or kRevolutionAndHeightShapeType.
This is an optional argument whose default value is null.
Index Variant
Optional input value that specifies the index of the row to insert. If not
provided this defaults to 0 means it will be placed at last.
This is an optional argument whose default value is 0.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh565E.htm 16/06/2025
HelicalCurveShapeDefinitionRows.Application
Property
Parent Object: HelicalCurveShapeDefinitionRows
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
HelicalCurveShapeDefinitionRows.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows.Count
Property
Parent Object: HelicalCurveShapeDefinitionRows
Description
Gets the number of items in this collection.
Syntax
HelicalCurveShapeDefinitionRows.Count() As Long
Property Value
This is a read only property whose value is a Long.
HelicalCurveShapeDefinitionRows Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh565E.htm 16/06/2025
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows.Item
Property
Parent Object: HelicalCurveShapeDefinitionRows
Description
Allows integer-indexed access to items in the collection.
Syntax
HelicalCurveShapeDefinitionRows.Item( Index As Variant ) As HelicalCurveShapeDefinitionRow
Property Value
This is a read only property whose value is a HelicalCurveShapeDefinitionRow.
Parameters
Name Type Description
Index Variant Input Long value that specifies the HelicalCurveShapeDefinitionRow to return.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows.Type
Property
Parent Object: HelicalCurveShapeDefinitionRows
Description
Gets the constant that indicates the type of this object.
HelicalCurveShapeDefinitionRows Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh565E.htm 16/06/2025
Syntax
HelicalCurveShapeDefinitionRows.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveShapeDefinitionRows Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh565E.htm 16/06/2025
HelicalCurveVariableShapeDefinition Object
Derived from: HelicalCurveDefinition Object
Description
HelicalCurveVariableShapeDefinition object.
Methods
Name Description
Copy Creates a copy of this HelicalCurveDefinition object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced
for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the
Apprentice Server.
AxisEndPoint Gets and sets the axis end point of the helical curve.
AxisStartPoint Gets and sets the axis start point of the helical curve.
Clockwise Gets and sets the rotation of the helical curve.
CurveStart Gets and sets the start point of the helical curve.
Parent Gets the parent object from whom this object can logically be reached.
ShapeDefinitionRows Returns the HelicalCurveShapeDefinitionRows collection object.
ShapeDefinitionType Gets and sets the shape definition type of the helical curve.
Type Gets the constant that indicates the type of this object.
Accessed From
HelicalCurves.CreateVariableShapeDefinition, HelicalCurveShapeDefinitionRow.Parent
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.Application
Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
HelicalCurveVariableShapeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
HelicalCurveVariableShapeDefinition Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh710A.htm 16/06/2025
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.AxisEndPoint
Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets and sets the axis end point of the helical curve.
Syntax
HelicalCurveVariableShapeDefinition.AxisEndPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.AxisStartPoint
Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets and sets the axis start point of the helical curve.
Syntax
HelicalCurveVariableShapeDefinition.AxisStartPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.Clockwise Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
HelicalCurveVariableShapeDefinition Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh710A.htm 16/06/2025
Gets and sets the rotation of the helical curve.
Syntax
HelicalCurveVariableShapeDefinition.Clockwise() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.Copy Method
Parent Object: HelicalCurveVariableShapeDefinition
Description
Creates a copy of this HelicalCurveDefinition object.
Syntax
HelicalCurveVariableShapeDefinition.Copy() As HelicalCurveDefinition
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.CurveStart Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets and sets the start point of the helical curve.
Syntax
HelicalCurveVariableShapeDefinition.CurveStart() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.Parent Property
Parent Object: HelicalCurveVariableShapeDefinition
HelicalCurveVariableShapeDefinition Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh710A.htm 16/06/2025
Description
Gets the parent object from whom this object can logically be reached.
Syntax
HelicalCurveVariableShapeDefinition.Parent() As HelicalCurve
Property Value
This is a read only property whose value is a HelicalCurve.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.ShapeDefinitionRows
Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Returns the HelicalCurveShapeDefinitionRows collection object.
Syntax
HelicalCurveVariableShapeDefinition.ShapeDefinitionRows() As HelicalCurveShapeDefinitionRows
Property Value
This is a read only property whose value is a HelicalCurveShapeDefinitionRows.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.ShapeDefinitionType
Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets and sets the shape definition type of the helical curve.
Syntax
HelicalCurveVariableShapeDefinition.ShapeDefinitionType() As HelicalShapeDefinitionTypeEnum
Property Value
This is a read/write property whose value is a HelicalShapeDefinitionTypeEnum.
HelicalCurveVariableShapeDefinition Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh710A.htm 16/06/2025
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition.Type Property
Parent Object: HelicalCurveVariableShapeDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
HelicalCurveVariableShapeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2019
HelicalCurveVariableShapeDefinition Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh710A.htm 16/06/2025
HelpEvents Object
Description
Object that provides access to help related events.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Type Returns an ObjectTypeEnum indicating this object's type.
Events
Name Description
OnApplicationHelp Event that fires before Application Help is displayed.
Accessed From
HelpManager.HelpEvents
Version
Introduced in version 2012
HelpEvents.Application Property
Parent Object: HelpEvents
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HelpEvents.Application() As Object
HelpEvents Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B58.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2012
HelpEvents.OnApplicationHelp Event
Parent Object: HelpEvents
Description
Event that fires before Application Help is displayed.
Syntax
HelpEvents.OnApplicationHelp( Context As NameValueMap, HandlingCode As
HandlingCodeEnum )
Parameters
Name Type Description
Context NameValueMap
Input NameValueMap object that can be used to determine
the context of why the event fired.
HandlingCode HandlingCodeEnum
Output HandlingCodeEnum that indicates how you are
handling the event.
Version
Introduced in version 2012
HelpEvents.Type Property
Parent Object: HelpEvents
Description
Returns an ObjectTypeEnum indicating this object's type.
HelpEvents Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B58.htm 16/06/2025
Syntax
HelpEvents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
HelpEvents Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B58.htm 16/06/2025
HelpManager Object
Description
The HelpManager object encapsulates all of the help functionality.
Properties
Name Description
HelpEvents Gets the object that fires Help related events.
HelpPath Gets the full path location of the help directory.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.HelpManager, ApprenticeServer.HelpManager,
ApprenticeServerComponent.HelpManager
Version
Introduced in version 4
HelpManager.HelpEvents Property
Parent Object: HelpManager
Description
Gets the object that fires Help related events.
Syntax
HelpManager.HelpEvents() As HelpEvents
Property Value
This is a read only property whose value is a HelpEvents.
HelpManager Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9FCB.htm 16/06/2025
Version
Introduced in version 2012
HelpManager.HelpPath Property
Parent Object: HelpManager
Description
Gets the full path location of the help directory.
Syntax
HelpManager.HelpPath() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2010
HelpManager.Parent Property
Parent Object: HelpManager
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
HelpManager.Parent() As Object
Property Value
This is a read only property whose value is an Object.
HelpManager Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9FCB.htm 16/06/2025
Version
Introduced in version 4
HelpManager.Type Property
Parent Object: HelpManager
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HelpManager.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
HelpManager Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9FCB.htm 16/06/2025
HemDefinition Object
Description
The HemDefinition object represents all of the information that defines a hem feature.
Methods
Name Description
Copy Method that creates a copy of this HemDefinition object.
SetCenteredWidthExtent
Method that changes the HemDefinition object to define a hem
that's centered along the edge and has a defined width.
SetDoubleHemType
Method that changes the HemDefinition object to define a hem
whose shape has a double bend.
SetEdgeWidthExtent
Method that changes the ContourFlangeDefinition object to define a
hem whose width is defined by the length of the input edge(s).
These are the same edges that were specified to define the location
of the hems.
SetFromToWidthExtent
Method that changes the FlangeDefinition object to define a hem
whose width is defined as being between two entities.
SetOffsetWidthExtent
Method that changes the HemDefinition object to define a hem
whose width is defined with respect to two entities.
SetRolledHemType
Method that changes the HemDefinition object to define a hem
whose shape has a rolled bend.
SetSingleHemType
Method that changes the HemDefinition object to define a hem
whose shape has a single bend.
SetTeardropHemType
Method that changes the HemDefinition object to define a hem
whose shape has a teardrop bend.
SetWidthOffsetWidthExtent
Method that changes the ContourFlangeDefinition object to define a
hem whose width is defined relative to another entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
BendOptions
Gets and sets the bend options associated with this contour flange
feature.
Edges
Gets and sets the EdgeCollection object that contains the edges that
are used to define the hem feature.
HemType Property that returns the method used to define the type of hem.
HemTypeDefinition
Property that returns the HemTypeDefinition object that defines the
type of hem.
HemDefinition Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
IsOnEdgeSide Gets and sets the side of the part that the hem is on.
IsUnfoldMethodOverridden
Read-write property that gets and set whether the unfold method has
been overridden for this feature. Setting this property to False clears
the override. Setting the property to True returns a failure.
Parent
Property that returns the parent HemFeature of this HemDefinition
object.
Type Returns an ObjectTypeEnum indicating this object's type.
UnfoldMethod
Gets and sets the UnfoldMethod object that defines how the bends
associated with this contour flange feature are unfolded.
WidthExtent
Property that returns the PartFeatureExtent object that defines how
the width extent of the hem feature is defined.
WidthExtentType Property that returns the method used to define the width extent.
Accessed From
DoubleHemDefinition.Parent, HemDefinition.Copy, HemFeature.Definition,
HemFeatureProxy.Definition, HemFeatures.CreateHemDefinition, RolledHemDefinition.Parent,
SingleHemDefinition.Parent, TeardropHemDefinition.Parent
Version
Introduced in version 2009
HemDefinition.Application Property
Parent Object: HemDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HemDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HemDefinition Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
HemDefinition.BendOptions Property
Parent Object: HemDefinition
Description
Gets and sets the bend options associated with this contour flange feature.
Syntax
HemDefinition.BendOptions() As BendOptions
Property Value
This is a read/write property whose value is a BendOptions.
Version
Introduced in version 2009
HemDefinition.Copy Method
Parent Object: HemDefinition
Description
Method that creates a copy of this HemDefinition object.
Syntax
HemDefinition.Copy() As HemDefinition
Version
Introduced in version 2010
HemDefinition.Edges Property
Parent Object: HemDefinition
Description
HemDefinition Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Gets and sets the EdgeCollection object that contains the edges that are used to define the hem
feature.
Syntax
HemDefinition.Edges() As EdgeCollection
Property Value
This is a read/write property whose value is an EdgeCollection.
Version
Introduced in version 2009
HemDefinition.HemType Property
Parent Object: HemDefinition
Description
Property that returns the method used to define the type of hem.
Syntax
HemDefinition.HemType() As HemTypeEnum
Property Value
This is a read only property whose value is a HemTypeEnum.
Version
Introduced in version 2009
HemDefinition.HemTypeDefinition Property
Parent Object: HemDefinition
Description
Property that returns the HemTypeDefinition object that defines the type of hem.
HemDefinition Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Syntax
HemDefinition.HemTypeDefinition() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HemDefinition.IsOnEdgeSide Property
Parent Object: HemDefinition
Description
Gets and sets the side of the part that the hem is on.
Syntax
HemDefinition.IsOnEdgeSide() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HemDefinition.IsUnfoldMethodOverridden
Property
Parent Object: HemDefinition
Description
Read-write property that gets and set whether the unfold method has been overridden for this
feature. Setting this property to False clears the override. Setting the property to True returns a
failure.
HemDefinition Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Syntax
HemDefinition.IsUnfoldMethodOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
HemDefinition.Parent Property
Parent Object: HemDefinition
Description
Property that returns the parent HemFeature of this HemDefinition object.
Syntax
HemDefinition.Parent() As HemFeature
Property Value
This is a read only property whose value is a HemFeature.
Version
Introduced in version 2009
HemDefinition.SetCenteredWidthExtent
Method
Parent Object: HemDefinition
Description
Method that changes the HemDefinition object to define a hem that's centered along the edge and
has a defined width.
HemDefinition Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Syntax
HemDefinition.SetCenteredWidthExtent( Width As Variant )
Parameters
Name Type Description
Width Variant
Input Variant that defines the distance used for the width extent of the hem. This
value is used to define that distance. This can be either a numeric value or a string.
A parameter for this value will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units are centimeters. If a string
is input, the units can be specified as part of the string or it will default to the
current length units of the document.
Version
Introduced in version 2010
HemDefinition.SetDoubleHemType Method
Parent Object: HemDefinition
Description
Method that changes the HemDefinition object to define a hem whose shape has a double bend.
Syntax
HemDefinition.SetDoubleHemType( Gap As Variant, Length As Variant )
Parameters
Name Type Description
Gap Variant
Length Variant
Version
Introduced in version 2010
HemDefinition.SetEdgeWidthExtent Method
HemDefinition Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Parent Object: HemDefinition
Description
Method that changes the ContourFlangeDefinition object to define a hem whose width is defined
by the length of the input edge(s). These are the same edges that were specified to define the
location of the hems.
Syntax
HemDefinition.SetEdgeWidthExtent()
Version
Introduced in version 2010
HemDefinition.SetFromToWidthExtent
Method
Parent Object: HemDefinition
Description
Method that changes the FlangeDefinition object to define a hem whose width is defined as being
between two entities.
Syntax
HemDefinition.SetFromToWidthExtent( FromEntity As Object, ToEntity As Object )
Parameters
Name Type Description
FromEntity Object
Input Object that defines the 'from' extents. This can be a planar Face,
WorkPlane, Vertex, or WorkPoint object that intersects the selected edge.
ToEntity Object
Input Object that defines the 'to' extents. This can be a planar Face,
WorkPlane, Vertex, or WorkPoint object that intersects the selected edge.
Version
Introduced in version 2010
HemDefinition Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
HemDefinition.SetOffsetWidthExtent Method
Parent Object: HemDefinition
Description
Method that changes the HemDefinition object to define a hem whose width is defined with
respect to two entities.
Syntax
HemDefinition.SetOffsetWidthExtent( OffsetEntityOne As Object, OffsetDistanceOne As
Variant, OffsetEntityTwo As Object, OffsetDistanceTwo As Variant )
Parameters
Name Type Description
OffsetEntityOne Object
Input Object that defines the first entity the distance is measured
relative to. This can be a point (WorkPoint or a Vertex object) or a
plane (Face or WorkPlane object that is perpendicular to the selected
edge).
OffsetDistanceOne Variant
Input Variant that defines the distance of the hem from offset entity
one. This can be either a numeric value or a string. A parameter for
this value will be created and the supplied string or value is assigned
to the parameter. If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of the string or it will
default to the current length units of the document.
OffsetEntityTwo Object
Input Object that defines the second entity the distance is measured
relative to. This can be a point (WorkPoint or a Vertex object) or a
plane (Face or WorkPlane object that is perpendicular to the selected
edge).
OffsetDistanceTwo Variant
Input Variant that defines the distance of the hem from offset entity
two. This can be either a numeric value or a string. A parameter for
this value will be created and the supplied string or value is assigned
to the parameter. If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of the string or it will
default to the current length units of the document.
Version
Introduced in version 2010
HemDefinition.SetRolledHemType Method
Parent Object: HemDefinition
HemDefinition Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Description
Method that changes the HemDefinition object to define a hem whose shape has a rolled bend.
Syntax
HemDefinition.SetRolledHemType( Radius As Variant, Angle As Variant )
Parameters
Name Type Description
Radius Variant
Input Variant that defines the radius of the hem. This can be either a numeric
value or a string. A parameter for this value will be created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
centimeters. If a string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
Angle Variant
Input Variant that defines the angle of the hem. This can be either a numeric
value or a string. A parameter for this value will be created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
radians. If a string is input, the units can be specified as part of the string or it will
default to the current angle units of the document.
Version
Introduced in version 2010
HemDefinition.SetSingleHemType Method
Parent Object: HemDefinition
Description
Method that changes the HemDefinition object to define a hem whose shape has a single bend.
Syntax
HemDefinition.SetSingleHemType( Gap As Variant, Length As Variant )
Parameters
Name Type Description
Gap Variant Input Variant that defines the gap of the hem. This can be either a numeric value
or a string. A parameter for this value will be created and the supplied string or
value is assigned to the parameter. If a value is input, the units are centimeters. If
HemDefinition Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
a string is input, the units can be specified as part of the string or it will default to
the current length units of the document.
Length Variant
Input Variant that defines the length of the hem. This can be either a numeric
value or a string. A parameter for this value will be created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
centimeters. If a string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
Version
Introduced in version 2010
HemDefinition.SetTeardropHemType
Method
Parent Object: HemDefinition
Description
Method that changes the HemDefinition object to define a hem whose shape has a teardrop bend.
Syntax
HemDefinition.SetTeardropHemType( Radius As Variant, Angle As Variant )
Parameters
Name Type Description
Radius Variant
Input Variant that defines the radius of the hem. This can be either a numeric
value or a string. A parameter for this value will be created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
centimeters. If a string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
Angle Variant
Input Variant that defines the angle of the hem. This can be either a numeric
value or a string. A parameter for this value will be created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
radians. If a string is input, the units can be specified as part of the string or it will
default to the current angle units of the document.
Version
Introduced in version 2010
HemDefinition Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
HemDefinition.SetWidthOffsetWidthExtent
Method
Parent Object: HemDefinition
Description
Method that changes the ContourFlangeDefinition object to define a hem whose width is defined
relative to another entity.
Syntax
HemDefinition.SetWidthOffsetWidthExtent( Width As Variant, OffsetDistance As Variant,
OffsetEntity As Object, PositiveDirection As Boolean )
Parameters
Name Type Description
Width Variant
Input Variant that defines the distance to use for the width extent of
the hem. This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units are centimeters.
If a string is input, the units can be specified as part of the string or it
will default to the current length units of the document.
OffsetDistance Variant
Input Variant that defines the distance of the hem from the offset
entity. This can be either a numeric value or a string. A parameter for
this value will be created and the supplied string or value is assigned
to the parameter. If a value is input, the units are centimeters. If a
string is input, the units can be specified as part of the string or it will
default to the current length units of the document.
OffsetEntity Object
Input Object that defines the entity the distance is measured relative
to. This can be a point (WorkPoint or a Vertex object) or a plane (Face
or WorkPlane object that is perpendicular to the selected edge).
PositiveDirection Boolean Input Boolean that specifies the side of the offset entity the hem is on.
Version
Introduced in version 2010
HemDefinition.Type Property
Parent Object: HemDefinition
HemDefinition Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HemDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
HemDefinition.UnfoldMethod Property
Parent Object: HemDefinition
Description
Gets and sets the UnfoldMethod object that defines how the bends associated with this contour
flange feature are unfolded.
Syntax
HemDefinition.UnfoldMethod() As UnfoldMethod
Property Value
This is a read/write property whose value is a UnfoldMethod.
Version
Introduced in version 2009
HemDefinition.WidthExtent Property
Parent Object: HemDefinition
HemDefinition Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
Description
Property that returns the PartFeatureExtent object that defines how the width extent of the hem
feature is defined.
Syntax
HemDefinition.WidthExtent() As PartFeatureExtent
Property Value
This is a read only property whose value is a PartFeatureExtent.
Version
Introduced in version 2009
HemDefinition.WidthExtentType Property
Parent Object: HemDefinition
Description
Property that returns the method used to define the width extent.
Syntax
HemDefinition.WidthExtentType() As PartFeatureExtentEnum
Property Value
This is a read only property whose value is a PartFeatureExtentEnum.
Version
Introduced in version 2009
HemDefinition Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB798.htm 16/06/2025
HemFeature Object
Derived from: PartFeature Object
Description
The HemFeature object represents a sheet metal hem feature.
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
Property that gets the HemDefinition object associated with this fold
feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
HemFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
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
HemDefinition.Parent, HemFeatures.Add, HemFeatures.Item
Derived Classes
HemFeatureProxy
Samples
Name Description
Sheet Metal Feature
Display
This sample illustrates getting basic information from the various sheet
metal features.
Version
Introduced in version 5.3
HemFeature.Adaptive Property
Parent Object: HemFeature
HemFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Description
Gets and sets whether this feature is adaptive or not.
Syntax
HemFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5.3
HemFeature.Appearance Property
Parent Object: HemFeature
Description
Gets and sets the current appearance of the feature.
Syntax
HemFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
HemFeature.AppearanceSourceType
Property
Parent Object: HemFeature
HemFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Description
Gets and sets the source of the appearance for the feature.
Syntax
HemFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
HemFeature.Application Property
Parent Object: HemFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HemFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
HemFeature.AttributeSets Property
Parent Object: HemFeature
HemFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HemFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5.3
HemFeature.ConsumeInputs Property
Parent Object: HemFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
HemFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HemFeature.Definition Property
Parent Object: HemFeature
Description
HemFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Property that gets the HemDefinition object associated with this fold feature.
Syntax
HemFeature.Definition() As HemDefinition
Property Value
This is a read only property whose value is a HemDefinition.
Version
Introduced in version 2009
HemFeature.Delete Method
Parent Object: HemFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
HemFeature.Delete( [RetainConsumedSketches] As Boolean,
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
HemFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 5.3
HemFeature.ExtendedName Property
Parent Object: HemFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
HemFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
HemFeature.Faces Property
Parent Object: HemFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
HemFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Syntax
HemFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5.3
HemFeature.FeatureDimensions Property
Parent Object: HemFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
HemFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
HemFeature.GetReferenceKey Method
Parent Object: HemFeature
Description
Method that generates and returns the reference key for this entity.
HemFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Syntax
HemFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 5.3
HemFeature.GetSuppressionCondition
Method
Parent Object: HemFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
HemFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum ComparisonTypeEnum that specifies the type of
comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison,
HemFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 11
HemFeature.HealthStatus Property
Parent Object: HemFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
HemFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5.3
HemFeature.IsOwnedByFeature Property
Parent Object: HemFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
HemFeature.IsOwnedByFeature() As Boolean
HemFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
HemFeature.Name Property
Parent Object: HemFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
HemFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5.3
HemFeature.OwnedBy Property
Parent Object: HemFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
HemFeature.OwnedBy() As PartFeature
HemFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
HemFeature.Parameters Property
Parent Object: HemFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
HemFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
HemFeature.Parent Property
Parent Object: HemFeature
Description
Property that returns the parent of the feature.
Syntax
HemFeature.Parent() As ComponentDefinition
HemFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5.3
HemFeature.Participants Property
Parent Object: HemFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
HemFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
HemFeature.RangeBox Property
Parent Object: HemFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
HemFeature.RangeBox() As Box
HemFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5.3
HemFeature.RemoveParticipant Method
Parent Object: HemFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
HemFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
HemFeature.SetAffectedBodies Method
Parent Object: HemFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
HemFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Syntax
HemFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
HemFeature.SetEndOfPart Method
Parent Object: HemFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
HemFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
HemFeature.SetSuppressionCondition
Method
Parent Object: HemFeature
HemFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Description
Method that sets the suppression condition for the feature.
Syntax
HemFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 11
HemFeature.Shared Property
Parent Object: HemFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
HemFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Syntax
HemFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HemFeature.Suppressed Property
Parent Object: HemFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
HemFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5.3
HemFeature.SurfaceBodies Property
Parent Object: HemFeature
Description
Property that returns the bodies that this feature has created or modified.
HemFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
Syntax
HemFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
HemFeature.Type Property
Parent Object: HemFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HemFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
HemFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD6F8.htm 16/06/2025
HemFeatureProxy Object
Derived from: HemFeature Object
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
Definition
Property that gets the HemDefinition object associated with this fold
feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
HemFeatureProxy Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
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
Version
Introduced in version 9
HemFeatureProxy.Adaptive Property
Parent Object: HemFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
HemFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HemFeatureProxy Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.Appearance Property
Parent Object: HemFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
HemFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
HemFeatureProxy.AppearanceSourceType
Property
Parent Object: HemFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
HemFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
HemFeatureProxy Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 2014
HemFeatureProxy.Application Property
Parent Object: HemFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HemFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
HemFeatureProxy.AttributeSets Property
Parent Object: HemFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HemFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
HemFeatureProxy Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.ConsumeInputs Property
Parent Object: HemFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
HemFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HemFeatureProxy.Definition Property
Parent Object: HemFeatureProxy
Description
Property that gets the HemDefinition object associated with this fold feature.
Syntax
HemFeatureProxy.Definition() As HemDefinition
Property Value
This is a read only property whose value is a HemDefinition.
HemFeatureProxy Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 2009
HemFeatureProxy.Delete Method
Parent Object: HemFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
HemFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
HemFeatureProxy Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.ExtendedName Property
Parent Object: HemFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
HemFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
HemFeatureProxy.Faces Property
Parent Object: HemFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
HemFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
HemFeatureProxy Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.FeatureDimensions
Property
Parent Object: HemFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
HemFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
HemFeatureProxy.GetReferenceKey Method
Parent Object: HemFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HemFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
HemFeatureProxy Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 9
HemFeatureProxy.GetSuppressionCondition
Method
Parent Object: HemFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
HemFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
HemFeatureProxy Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 11
HemFeatureProxy.HealthStatus Property
Parent Object: HemFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
HemFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
HemFeatureProxy.IsOwnedByFeature
Property
Parent Object: HemFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
HemFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
HemFeatureProxy Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 2008
HemFeatureProxy.Name Property
Parent Object: HemFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
HemFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
HemFeatureProxy.OwnedBy Property
Parent Object: HemFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
HemFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
HemFeatureProxy Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 2008
HemFeatureProxy.Parameters Property
Parent Object: HemFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
HemFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
HemFeatureProxy.Parent Property
Parent Object: HemFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
HemFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
HemFeatureProxy Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.Participants Property
Parent Object: HemFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
HemFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
HemFeatureProxy.RangeBox Property
Parent Object: HemFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
HemFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
HemFeatureProxy Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Version
Introduced in version 9
HemFeatureProxy.RemoveParticipant
Method
Parent Object: HemFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
HemFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
HemFeatureProxy.SetAffectedBodies Method
Parent Object: HemFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
HemFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
HemFeatureProxy Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
HemFeatureProxy.SetEndOfPart Method
Parent Object: HemFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
HemFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 9
HemFeatureProxy.SetSuppressionCondition
Method
Parent Object: HemFeatureProxy
Description
Method that sets the suppression condition for the feature.
HemFeatureProxy Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Syntax
HemFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 11
HemFeatureProxy.Shared Property
Parent Object: HemFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
HemFeatureProxy.Shared() As Boolean
HemFeatureProxy Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HemFeatureProxy.Suppressed Property
Parent Object: HemFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
HemFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
HemFeatureProxy.SurfaceBodies Property
Parent Object: HemFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
HemFeatureProxy.SurfaceBodies() As SurfaceBodies
HemFeatureProxy Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
HemFeatureProxy.Type Property
Parent Object: HemFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HemFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
HemFeatureProxy Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh150A.htm 16/06/2025
HemFeatures Object
Description
The HemFeatures collection object provides access to all of the objects in a sheet metal
component definition.
Methods
Name Description
Add
Method that creates a new hem feature. The newly created HemFeature
object is returned.
CreateHemDefinition Method that creates a new HemDefinition object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified HemFeature object from the collection. This is the default
property of the HemFeatures collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SheetMetalFeatures.HemFeatures
Version
Introduced in version 5.3
HemFeatures.Add Method
Parent Object: HemFeatures
Description
Method that creates a new hem feature. The newly created HemFeature object is returned.
HemFeatures Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3DDF.htm 16/06/2025
Syntax
HemFeatures.Add( HemDefinition As HemDefinition ) As HemFeature
Parameters
Name Type Description
HemDefinition HemDefinition
Input HemDefinition object that defines the hem feature you want
to create. A HemDefinition object can be created using the
HemFeatures.CreateHemDefinition method. It can also be
obtained from an existing HemFeature object.
Version
Introduced in version 2010
HemFeatures.Application Property
Parent Object: HemFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HemFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
HemFeatures.Count Property
Parent Object: HemFeatures
HemFeatures Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3DDF.htm 16/06/2025
Description
Property that returns the number of items in this collection.
Syntax
HemFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
HemFeatures.CreateHemDefinition Method
Parent Object: HemFeatures
Description
Method that creates a new HemDefinition object.
Syntax
HemFeatures.CreateHemDefinition( Edges As EdgeCollection ) As HemDefinition
Parameters
Name Type Description
Edges EdgeCollection
Input EdgeCollection object that specifies the edges to create a hem
feature on.
Remarks
The object created does not represent a hem feature but instead is a representation of the
information that defines a hem feature. You can use this object as input to the HemFeatures.Add
method to create the actual hem feature. The HemDefinition object returned is fully defined and
can be used to create a hem feature. However, defaults are used for most of the hem options so
you may want to change some of the property values of the HemDefinition object before using it
to create a hem feature.
HemFeatures Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3DDF.htm 16/06/2025
Version
Introduced in version 2010
HemFeatures.Item Property
Parent Object: HemFeatures
Description
Returns the specified HemFeature object from the collection. This is the default property of the
HemFeatures collection object.
Syntax
HemFeatures.Item( Index As Variant ) As HemFeature
Property Value
This is a read only property whose value is a HemFeature.
Parameters
Name Type Description
Index Variant Input Variant value that specifies the index of the to return.
Version
Introduced in version 5.3
HemFeatures.Type Property
Parent Object: HemFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HemFeatures.Type() As ObjectTypeEnum
HemFeatures Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3DDF.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
HemFeatures Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3DDF.htm 16/06/2025
HighlightSet Object
Description
The HighlightSet object defines a set of objects and an associated color to display them with.
Methods
Name Description
AddItem Method that adds an entity to the highlight set.
AddMultipleItems Adds multiple entities to the highlight set.
Clear Method that removes all objects from the highlight set.
Delete Method that deletes the HighlightSet object.
Remove Method that removes the specified object from the highlight set.
Properties
Name Description
Color Gets/Sets the color of the highlight set.
Count Property that returns the number of objects in the highlight set.
Item Returns the specified object from the highlight set.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ApprenticeServerDocument.CreateHighlightSet,
ApprenticeServerDrawingDocument.CreateHighlightSet,
AssemblyDocument.CreateHighlightSet, Document.CreateHighlightSet,
DrawingDocument.CreateHighlightSet, HighlightSets.Add, HighlightSets.Item,
PartDocument.CreateHighlightSet, PresentationDocument.CreateHighlightSet
Samples
Name Description
Interference
Analysis
This sample demonstrates the functions used to calculate interference analysis in
an assembly.
Creating a
HighlightSet
Demonstrates creating a highlight set.
Highlight
Feature Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting
them in different colors. The HighlightFeatureFaces sub highlights the feature
faces. Since the highlight set objects are declared outside of this sub, the
highlighting remains after the sub has finished executing. Use the ClearHighlight
sub to clear the highlighting that does so by releasing the HighlightSet objects.
HighlightSet Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Version
Introduced in version 5
HighlightSet.AddItem Method
Parent Object: HighlightSet
Description
Method that adds an entity to the highlight set.
Syntax
HighlightSet.AddItem( Entity As Object )
Parameters
Name Type Description
Entity Object Input Autodesk Inventor object that is valid to be highlighted.
Samples
Name Description
Interference
Analysis
This sample demonstrates the functions used to calculate interference
analysis in an assembly.
Creating a
HighlightSet
Demonstrates creating a highlight set.
Version
Introduced in version 5
HighlightSet.AddMultipleItems Method
Parent Object: HighlightSet
Description
Adds multiple entities to the highlight set.
HighlightSet Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Syntax
HighlightSet.AddMultipleItems( Entities As ObjectCollection )
Parameters
Name Type Description
Entities ObjectCollection Input ObjectCollection that specifies the entities to highlight.
Version
Introduced in version 2019
HighlightSet.Clear Method
Parent Object: HighlightSet
Description
Method that removes all objects from the highlight set.
Syntax
HighlightSet.Clear()
Samples
Name Description
Interference
Analysis
This sample demonstrates the functions used to calculate interference
analysis in an assembly.
Version
Introduced in version 5
HighlightSet.Color Property
Parent Object: HighlightSet
Description
Gets/Sets the color of the highlight set.
HighlightSet Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Syntax
HighlightSet.Color() As Color
Property Value
This is a read/write property whose value is a Color.
Samples
Name Description
Interference
Analysis
This sample demonstrates the functions used to calculate interference analysis in
an assembly.
Creating a
HighlightSet
Demonstrates creating a highlight set.
Highlight
Feature Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting
them in different colors. The HighlightFeatureFaces sub highlights the feature
faces. Since the highlight set objects are declared outside of this sub, the
highlighting remains after the sub has finished executing. Use the ClearHighlight
sub to clear the highlighting that does so by releasing the HighlightSet objects.
Version
Introduced in version 11
HighlightSet.Count Property
Parent Object: HighlightSet
Description
Property that returns the number of objects in the highlight set.
Syntax
HighlightSet.Count() As Long
Property Value
This is a read only property whose value is a Long.
HighlightSet Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Version
Introduced in version 5
HighlightSet.Delete Method
Parent Object: HighlightSet
Description
Method that deletes the HighlightSet object.
Syntax
HighlightSet.Delete()
Version
Introduced in version 5
HighlightSet.Item Property
Parent Object: HighlightSet
Description
Returns the specified object from the highlight set.
Syntax
HighlightSet.Item( Index As Long ) As Object
Property Value
This is a read only property whose value is an Object.
Parameters
Name Type Description
Index Long Input Long that specifies the index of the item within the collection to return.
HighlightSet Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Version
Introduced in version 5
HighlightSet.Remove Method
Parent Object: HighlightSet
Description
Method that removes the specified object from the highlight set.
Syntax
HighlightSet.Remove( Index As Variant )
Parameters
Name Type Description
Index Variant
Input value that specifies the object to remove. This can be a Long, which
specifies the index within the collection of the item to remove, or it can be the
object you wish to remove. This method only removes the object from the
highlight set. It does not delete it from the document.
Version
Introduced in version 5
HighlightSet.Type Property
Parent Object: HighlightSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HighlightSet.Type() As ObjectTypeEnum
HighlightSet Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
HighlightSet Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6434.htm 16/06/2025
HoleClearanceInfo Object
Description
HoleClearanceInfo object.
Methods
Name Description
SetClearanceInfo Method that set HoleClearanceInfo data.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be
set to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
FastenerFitType Read-write property that gets and sets the fastener fit type.
FastenerSize Read-write property that gets and sets the fastener size.
FastenerStandard Read-write property that gets and sets the fastener standard.
FastenerType Read-write property that gets and sets the fastener type.
Parent
Read-only property that returns the parent object from whom this object can
logically be reached.
Type Gets the constant that indicates the type of this object.
Accessed From
HoleFeature.ClearanceInfo, HoleFeatureProxy.ClearanceInfo, HoleFeatures.CreateClearanceInfo,
ModelHoleThreadNotes.CreateClearanceInfo
Version
Introduced in version 2018
HoleClearanceInfo.Application Property
Parent Object: HoleClearanceInfo
Description
HoleClearanceInfo Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh821C.htm 16/06/2025
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
HoleClearanceInfo.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
HoleClearanceInfo.FastenerFitType Property
Parent Object: HoleClearanceInfo
Description
Read-write property that gets and sets the fastener fit type.
Syntax
HoleClearanceInfo.FastenerFitType() As FastenerFitType
Property Value
This is a read/write property whose value is a FastenerFitType.
Version
Introduced in version 2018
HoleClearanceInfo.FastenerSize Property
Parent Object: HoleClearanceInfo
Description
Read-write property that gets and sets the fastener size.
HoleClearanceInfo Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh821C.htm 16/06/2025
Syntax
HoleClearanceInfo.FastenerSize() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2018
HoleClearanceInfo.FastenerStandard
Property
Parent Object: HoleClearanceInfo
Description
Read-write property that gets and sets the fastener standard.
Syntax
HoleClearanceInfo.FastenerStandard() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2018
HoleClearanceInfo.FastenerType Property
Parent Object: HoleClearanceInfo
Description
Read-write property that gets and sets the fastener type.
HoleClearanceInfo Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh821C.htm 16/06/2025
Syntax
HoleClearanceInfo.FastenerType() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2018
HoleClearanceInfo.Parent Property
Parent Object: HoleClearanceInfo
Description
Read-only property that returns the parent object from whom this object can logically be reached.
Syntax
HoleClearanceInfo.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
HoleClearanceInfo.SetClearanceInfo Method
Parent Object: HoleClearanceInfo
Description
Method that set HoleClearanceInfo data.
HoleClearanceInfo Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh821C.htm 16/06/2025
Syntax
HoleClearanceInfo.SetClearanceInfo( FastenerStandard As String, FastenerType As String,
FastenerSize As String, [FastenerFitType] As Variant )
Parameters
Name Type Description
FastenerStandard String
Input String value that specifies the fastener standard. The standard is
the name of the sheet in the Clearance.xls file that is used to define the
clearance info.
FastenerType String Input String value that specifies the fastener type.
FastenerSize String Input String value that specifies the fastener size.
FastenerFitType Variant
Optinal input FastenerFitTypeEnum value that specifies the fastener fit
type. If not provided the default kNormalFitType will be used.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
HoleClearanceInfo.Type Property
Parent Object: HoleClearanceInfo
Description
Gets the constant that indicates the type of this object.
Syntax
HoleClearanceInfo.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2018
HoleClearanceInfo Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh821C.htm 16/06/2025
HoleFeature Object
Derived from: PartFeature Object
Description
The HoleFeature object represents hole modeling features.
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
SetCBore
Method that changes the hole to be a counterbore hole type. If the hole
is already a counterbore type you can access and modify the
counterbore parameters using the CBoreDiameter and CBoreDepth
properties of the HoleFeature object.
SetCSink
Method that changes the hole to be a countersink hole type. If the hole
is already a countersink type you can access and modify the
counterbore parameters using the CSinkDiameter and CSinkAngle
properties of the HoleFeature object.
SetDistanceExtent
Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines the hole's termination at a
particular distance.
SetDrilled Method that changes the hole to be a drilled hole type.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from.
SetSpotFace
Method that changes the hole to be a spotface hole type. If the hole is
already a spotface type you can access and modify the spotface
parameters using the SpotFaceDiameter and SpotFaceDepth properties
of the HoleFeature object. This method will fail of the hole contains a
tapered thread.
SetSuppressionCondition Method that sets the suppression condition for the feature.
SetThroughAllExtent Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
HoleFeature Object Page 1 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines a through-all termination
type.
SetToFaceExtent
Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines the hole's termination at a
particular face.
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
BottomTipAngle
Property that returns the Parameter that defines the included angle of the
tip of a blind hole, one that has been specified by a distance extent or 'to
face' extent . If this is a Flat Bottomed hole then the property will return
Nothing.
CBoreDepth
Property that returns the parameter controlling the CBore depth. This
property will return Nothing in the case where the HoleType is not
kCounterBoreHole.
CBoreDiameter
Property that returns the parameter controlling the CBore diameter. This
property will return Nothing in the case where the HoleType is not
kCounterBoreHole.
ClearanceInfo Gets and sets the HoleClearanceInfo object associated with the hole.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
CSinkAngle
Property that returns the parameter controlling the CSink angle. This
property will return Nothing in the case where the HoleType is not
kCounterSinkHole.
CSinkDepth Gets depth of hole coutersink.
CSinkDiameter
Property that returns the parameter controlling the CSink diameter. This
property will return Nothing in the case where the HoleType is not
kCounterSinkHole.
Depth Gets depth of hole.
EndFaces
Property that returns the set of that cap the end of the hole. In the cases
where there aren't any such end faces this property will return Nothing.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
ExtendStart
Gets and sets whether to extend the start of the hole feature. When set
this to True the hole feature will be extended to cut the body that is
adjacent to the hole feature starting face.
HoleFeature Object Page 2 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Extent Property that returns the object that defines how the extent of the feature
is defined. The type of extent object that this property will return can be
determined by using the ExtentType property.
ExtentType
Property that returns an enum indicating how the extent of the feature is
defined. This indicates the type of object returned by the Extent
property.
Faces
Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
FlatBottom
Read-only property that returns whether the hole bottom is flat or has tip
angle.
HealthStatus Property that returns an enum indicating the current state of the object.
HoleCenterPoints
Property that returns the set of points that define the centers of the holes
of this feature.
HoleDiameter
Property that returns the parameter controlling the diameter of the hole.
This property will return Nothing if the diameter is being read off a
value from the HoleTapInfo, when this hole is tapped.
HoleType
Property that returns the type of hole. Can be kDrilledHole,
kCounterBoreHole, kCounterSinkHole, or kSpotFaceHole. The hole
type can be set by using the SetToCBore, SetToCSink, SetDrilled, and
SetToSpotFace methods.
IsClearanceHole
Read – only property that returns the Boolean flag indicating whether the
hole is clearance hole or not.
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
PlacementDefinition Gets the Placement Definition for the hole feature.
PlacementType Property that returns a constant indicating the type of hole placement.
RangeBox
Property that returns a Box object which contains the opposing points of
a rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
SideFaces
Property that returns a object that provides access to all of the faces
created around the perimeter of the feature.
Sketch
Property that returns the Sketch object that contains the points the hole is
based on.
SpotFaceDepth
Property that returns the parameter controlling the SpotFace depth. This
property will return Nothing in the case where the HoleType is not
kSpotFaceHole.
HoleFeature Object Page 3 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
SpotFaceDiameter Property that returns the parameter controlling the SpotFace diameter.
This property will return Nothing in the case where the HoleType is not
kSpotFaceHole.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
TapInfo
Property that gets and sets the HoleTapInfo or TaperedThreadInfo object
associated with the hole.
Tapped
Property that returns the Boolean flag indicating whether the hole is
tapped or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ConcentricHolePlacementDefinition.Parent, HoleFeatureProxy.NativeObject,
HoleFeatures.AddCBoreByDistanceExtent, HoleFeatures.AddCBoreByThroughAllExtent,
HoleFeatures.AddCBoreByToFaceExtent, HoleFeatures.AddCSinkByDistanceExtent,
HoleFeatures.AddCSinkByThroughAllExtent, HoleFeatures.AddCSinkByToFaceExtent,
HoleFeatures.AddDrilledByDistanceExtent, HoleFeatures.AddDrilledByThroughAllExtent,
HoleFeatures.AddDrilledByToFaceExtent, HoleFeatures.AddSpotFaceByDistanceExtent,
HoleFeatures.AddSpotFaceByThroughAllExtent, HoleFeatures.AddSpotFaceByToFaceExtent,
HoleFeatures.Item, HolePlacementDefinition.Parent, LinearHolePlacementDefinition.Parent,
PointHolePlacementDefinition.Parent, SketchHolePlacementDefinition.Parent
Derived Classes
HoleFeatureProxy
Version
Introduced in version 5
HoleFeature.Adaptive Property
Parent Object: HoleFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
HoleFeature.Adaptive() As Boolean
HoleFeature Object Page 4 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
HoleFeature.AddParticipant Method
Parent Object: HoleFeature
Description
Method that adds the specified participant to the assembly feature. This method fails for features
in a part.
Syntax
HoleFeature.AddParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be added. An error occurs if the input ComponentOccurrence
is not a leaf occurrence.
Version
Introduced in version 11
HoleFeature.Appearance Property
Parent Object: HoleFeature
Description
Gets and sets the current appearance of the feature.
HoleFeature Object Page 5 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
HoleFeature.AppearanceSourceType
Property
Parent Object: HoleFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
HoleFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
HoleFeature.Application Property
Parent Object: HoleFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
HoleFeature Object Page 6 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
HoleFeature.AttributeSets Property
Parent Object: HoleFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HoleFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
HoleFeature.BottomTipAngle Property
Parent Object: HoleFeature
Description
Property that returns the Parameter that defines the included angle of the tip of a blind hole, one
that has been specified by a distance extent or 'to face' extent . If this is a Flat Bottomed hole then
the property will return Nothing.
HoleFeature Object Page 7 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.BottomTipAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.CBoreDepth Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the CBore depth. This property will return Nothing
in the case where the HoleType is not kCounterBoreHole.
Syntax
HoleFeature.CBoreDepth() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.CBoreDiameter Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the CBore diameter. This property will return
Nothing in the case where the HoleType is not kCounterBoreHole.
HoleFeature Object Page 8 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.CBoreDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.ClearanceInfo Property
Parent Object: HoleFeature
Description
Gets and sets the HoleClearanceInfo object associated with the hole.
Syntax
HoleFeature.ClearanceInfo() As HoleClearanceInfo
Property Value
This is a read/write property whose value is a HoleClearanceInfo.
Version
Introduced in version 2018
HoleFeature.ConsumeInputs Property
Parent Object: HoleFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
HoleFeature Object Page 9 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HoleFeature.CSinkAngle Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the CSink angle. This property will return Nothing
in the case where the HoleType is not kCounterSinkHole.
Syntax
HoleFeature.CSinkAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.CSinkDepth Property
Parent Object: HoleFeature
Description
Gets depth of hole coutersink.
HoleFeature Object Page 10 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.CSinkDepth() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2018
HoleFeature.CSinkDiameter Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the CSink diameter. This property will return
Nothing in the case where the HoleType is not kCounterSinkHole.
Syntax
HoleFeature.CSinkDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.Delete Method
Parent Object: HoleFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
HoleFeature Object Page 11 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Delete( [RetainConsumedSketches] As Boolean,
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
HoleFeature.Depth Property
Parent Object: HoleFeature
Description
Gets depth of hole.
Syntax
HoleFeature.Depth() As Double
HoleFeature Object Page 12 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2018
HoleFeature.EndFaces Property
Parent Object: HoleFeature
Description
Property that returns the set of that cap the end of the hole. In the cases where there aren't any such
end faces this property will return Nothing.
Syntax
HoleFeature.EndFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Samples
Name Description
Highlight
Feature
Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting them
in different colors. The HighlightFeatureFaces sub highlights the feature faces. Since
the highlight set objects are declared outside of this sub, the highlighting remains
after the sub has finished executing. Use the ClearHighlight sub to clear the
highlighting that does so by releasing the HighlightSet objects.
Version
Introduced in version 5
HoleFeature.ExtendedName Property
Parent Object: HoleFeature
HoleFeature Object Page 13 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Read-only property that returns the full feature name including any extended information.
Syntax
HoleFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
HoleFeature.ExtendStart Property
Parent Object: HoleFeature
Description
Gets and sets whether to extend the start of the hole feature. When set this to True the hole feature
will be extended to cut the body that is adjacent to the hole feature starting face.
Syntax
HoleFeature.ExtendStart() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
HoleFeature.Extent Property
Parent Object: HoleFeature
HoleFeature Object Page 14 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Property that returns the object that defines how the extent of the feature is defined. The type of
extent object that this property will return can be determined by using the ExtentType property.
Syntax
HoleFeature.Extent() As PartFeatureExtent
Property Value
This is a read only property whose value is a PartFeatureExtent.
Version
Introduced in version 5
HoleFeature.ExtentType Property
Parent Object: HoleFeature
Description
Property that returns an enum indicating how the extent of the feature is defined. This indicates
the type of object returned by the Extent property.
Syntax
HoleFeature.ExtentType() As PartFeatureExtentEnum
Property Value
This is a read only property whose value is a PartFeatureExtentEnum.
Version
Introduced in version 5
HoleFeature.Faces Property
Parent Object: HoleFeature
HoleFeature Object Page 15 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
HoleFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5
HoleFeature.FeatureDimensions Property
Parent Object: HoleFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
HoleFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
HoleFeature.FlatBottom Property
Parent Object: HoleFeature
HoleFeature Object Page 16 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Read-only property that returns whether the hole bottom is flat or has tip angle.
Syntax
HoleFeature.FlatBottom() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
HoleFeature.GetReferenceKey Method
Parent Object: HoleFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
HoleFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
HoleFeature Object Page 17 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Version
Introduced in version 5
HoleFeature.GetSuppressionCondition
Method
Parent Object: HoleFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
HoleFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
HoleFeature.HealthStatus Property
Parent Object: HoleFeature
HoleFeature Object Page 18 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
HoleFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
HoleFeature.HoleCenterPoints Property
Parent Object: HoleFeature
Description
Property that returns the set of points that define the centers of the holes of this feature.
Syntax
HoleFeature.HoleCenterPoints() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 5
HoleFeature.HoleDiameter Property
Parent Object: HoleFeature
Description
HoleFeature Object Page 19 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Property that returns the parameter controlling the diameter of the hole. This property will return
Nothing if the diameter is being read off a value from the HoleTapInfo, when this hole is tapped.
Syntax
HoleFeature.HoleDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleFeature.HoleType Property
Parent Object: HoleFeature
Description
Property that returns the type of hole. Can be kDrilledHole, kCounterBoreHole,
kCounterSinkHole, or kSpotFaceHole. The hole type can be set by using the SetToCBore,
SetToCSink, SetDrilled, and SetToSpotFace methods.
Syntax
HoleFeature.HoleType() As HoleTypeEnum
Property Value
This is a read only property whose value is a HoleTypeEnum.
Version
Introduced in version 5
HoleFeature.IsClearanceHole Property
Parent Object: HoleFeature
Description
HoleFeature Object Page 20 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Read – only property that returns the Boolean flag indicating whether the hole is clearance hole or
not.
Syntax
HoleFeature.IsClearanceHole() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2018
HoleFeature.IsOwnedByFeature Property
Parent Object: HoleFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
HoleFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
HoleFeature.Name Property
Parent Object: HoleFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
HoleFeature Object Page 21 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
HoleFeature.OwnedBy Property
Parent Object: HoleFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
HoleFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
HoleFeature.Parameters Property
Parent Object: HoleFeature
Description
Property that returns all the parameters associated with the feature.
HoleFeature Object Page 22 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
HoleFeature.Parent Property
Parent Object: HoleFeature
Description
Property that returns the parent of the feature.
Syntax
HoleFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5
HoleFeature.Participants Property
Parent Object: HoleFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
HoleFeature Object Page 23 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
HoleFeature.PlacementDefinition Property
Parent Object: HoleFeature
Description
Gets the Placement Definition for the hole feature.
Syntax
HoleFeature.PlacementDefinition() As HolePlacementDefinition
Property Value
This is a read/write property whose value is a HolePlacementDefinition.
Version
Introduced in version 10
HoleFeature.PlacementType Property
Parent Object: HoleFeature
Description
Property that returns a constant indicating the type of hole placement.
HoleFeature Object Page 24 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.PlacementType() As HolePlacementTypeEnum
Property Value
This is a read only property whose value is a HolePlacementTypeEnum.
Version
Introduced in version 9
HoleFeature.RangeBox Property
Parent Object: HoleFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
HoleFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
HoleFeature.RemoveParticipant Method
Parent Object: HoleFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
HoleFeature Object Page 25 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
HoleFeature.SetAffectedBodies Method
Parent Object: HoleFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
HoleFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
HoleFeature.SetCBore Method
Parent Object: HoleFeature
Description
HoleFeature Object Page 26 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Method that changes the hole to be a counterbore hole type. If the hole is already a counterbore
type you can access and modify the counterbore parameters using the CBoreDiameter and
CBoreDepth properties of the HoleFeature object.
Syntax
HoleFeature.SetCBore( CBoreDiameter As Variant, CBoreDepth As Variant )
Parameters
Name Type Description
CBoreDiameter Variant
Input Variant that defines the diameter of the counterbore. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units can
be specified as part of the string or it will default to the current length
units.
CBoreDepth Variant
Input Variant that defines the depth of the counterbore. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units can
be specified as part of the string or it will default to the current length
units of the document.
Version
Introduced in version 5
HoleFeature.SetCSink Method
Parent Object: HoleFeature
Description
Method that changes the hole to be a countersink hole type. If the hole is already a countersink
type you can access and modify the counterbore parameters using the CSinkDiameter and
CSinkAngle properties of the HoleFeature object.
Syntax
HoleFeature.SetCSink( CSinkDiameter As Variant, CSinkAngle As Variant )
Parameters
Name Type Description
HoleFeature Object Page 27 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
CSinkDiameter Variant Input Variant that defines the diameter of the countersink. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can
be specified as part of the string or it will default to the current length
units of the document.
CSinkAngle Variant
Input Variant that defines the angle of the countersink. This can be either
a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value is
input, the units are radians. If a string is input, the units can be specified
as part of the string or it will default to the current angle units of the
document.
Version
Introduced in version 5
HoleFeature.SetDistanceExtent Method
Parent Object: HoleFeature
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines the hole's termination at a particular
distance.
Syntax
HoleFeature.SetDistanceExtent( Depth As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [FlatBottom] As Boolean, [BottomTipAngle] As Variant )
Parameters
Name Type Description
Depth Variant
Input Variant that specifies the depth to
which to extend the hole feature.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that specifies the direction in
which to extend the hole feature.
FlatBottom Boolean
Optional input Boolean that determines
whether the hole feature has a flat bottom.
This is an optional argument whose default
value is True.
BottomTipAngle Variant
HoleFeature Object Page 28 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Optional input Variant that specifies the angle
of the hole feature's bottom tip (if FlatBottom
is False.)
This is an optional argument whose default
value is null.
Version
Introduced in version 6
HoleFeature.SetDrilled Method
Parent Object: HoleFeature
Description
Method that changes the hole to be a drilled hole type.
Syntax
HoleFeature.SetDrilled()
Version
Introduced in version 5
HoleFeature.SetEndOfPart Method
Parent Object: HoleFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
HoleFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
HoleFeature Object Page 29 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
HoleFeature.SetSpotFace Method
Parent Object: HoleFeature
Description
Method that changes the hole to be a spotface hole type. If the hole is already a spotface type you
can access and modify the spotface parameters using the SpotFaceDiameter and SpotFaceDepth
properties of the HoleFeature object. This method will fail of the hole contains a tapered thread.
Syntax
HoleFeature.SetSpotFace( SpotFaceDiameter As Variant, SpotFaceDepth As Variant )
Parameters
Name Type Description
SpotFaceDiameter Variant
Input Variant that defines the diameter of the spotface. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current
length units of the document.
SpotFaceDepth Variant
Input Variant that defines the depth of the spotface. This can be either
a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value
is input, the units are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current length
units of the document.
Version
Introduced in version 2008
HoleFeature Object Page 30 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
HoleFeature.SetSuppressionCondition
Method
Parent Object: HoleFeature
Description
Method that sets the suppression condition for the feature.
Syntax
HoleFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 11
HoleFeature.SetThroughAllExtent Method
Parent Object: HoleFeature
HoleFeature Object Page 31 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines a through-all termination type.
Syntax
HoleFeature.SetThroughAllExtent( ExtentDirection As PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
ExtentDirection PartFeatureExtentDirectionEnum
Input argument identifying the direction in
which to extend the hole feature.
Version
Introduced in version 6
HoleFeature.SetToFaceExtent Method
Parent Object: HoleFeature
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines the hole's termination at a particular
face.
Syntax
HoleFeature.SetToFaceExtent( ToFace As Object, ExtendToFace As Boolean )
Parameters
Name Type Description
ToFace Object
Input Object that defines the 'to face.' This can be either a or WorkPlane
object.
ExtendToFace Boolean Input Boolean that specifies whether to extend to the face.
HoleFeature Object Page 32 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Version
Introduced in version 6
HoleFeature.Shared Property
Parent Object: HoleFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
HoleFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HoleFeature.SideFaces Property
Parent Object: HoleFeature
Description
Property that returns a object that provides access to all of the faces created around the perimeter
of the feature.
Syntax
HoleFeature.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
HoleFeature Object Page 33 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Samples
Name Description
Highlight
Feature
Faces
This sample highlights the faces of an extrusion, revolution, or hole feature. It
differentiates the faces on the start cap, end cap, and side faces by highlighting them
in different colors. The HighlightFeatureFaces sub highlights the feature faces. Since
the highlight set objects are declared outside of this sub, the highlighting remains
after the sub has finished executing. Use the ClearHighlight sub to clear the
highlighting that does so by releasing the HighlightSet objects.
Version
Introduced in version 5
HoleFeature.Sketch Property
Parent Object: HoleFeature
Description
Property that returns the Sketch object that contains the points the hole is based on.
Syntax
HoleFeature.Sketch() As PlanarSketch
Property Value
This is a read only property whose value is a PlanarSketch.
Version
Introduced in version 5
HoleFeature.SpotFaceDepth Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the SpotFace depth. This property will return
Nothing in the case where the HoleType is not kSpotFaceHole.
HoleFeature Object Page 34 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.SpotFaceDepth() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
HoleFeature.SpotFaceDiameter Property
Parent Object: HoleFeature
Description
Property that returns the parameter controlling the SpotFace diameter. This property will return
Nothing in the case where the HoleType is not kSpotFaceHole.
Syntax
HoleFeature.SpotFaceDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
HoleFeature.Suppressed Property
Parent Object: HoleFeature
Description
Gets and sets whether this feature is suppressed or not.
HoleFeature Object Page 35 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
HoleFeature.SurfaceBodies Property
Parent Object: HoleFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
HoleFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
HoleFeature.TapInfo Property
Parent Object: HoleFeature
Description
Property that gets and sets the HoleTapInfo or TaperedThreadInfo object associated with the hole.
HoleFeature Object Page 36 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.TapInfo() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 5
HoleFeature.Tapped Property
Parent Object: HoleFeature
Description
Property that returns the Boolean flag indicating whether the hole is tapped or not.
Syntax
HoleFeature.Tapped() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
HoleFeature.Type Property
Parent Object: HoleFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
HoleFeature Object Page 37 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
Syntax
HoleFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
HoleFeature Object Page 38 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA0A1.htm 16/06/2025
HoleFeatureProxy Object
Derived from: HoleFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
SetCBore
Method that changes the hole to be a counterbore hole type. If the hole
is already a counterbore type you can access and modify the
counterbore parameters using the CBoreDiameter and CBoreDepth
properties of the HoleFeature object.
SetCSink
Method that changes the hole to be a countersink hole type. If the hole
is already a countersink type you can access and modify the
counterbore parameters using the CSinkDiameter and CSinkAngle
properties of the HoleFeature object.
SetDistanceExtent
Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines the hole's termination at a
particular distance.
SetDrilled Method that changes the hole to be a drilled hole type.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from.
SetSpotFace
Method that changes the hole to be a spotface hole type. If the hole is
already a spotface type you can access and modify the spotface
parameters using the SpotFaceDiameter and SpotFaceDepth properties
of the HoleFeature object. This method will fail of the hole contains a
tapered thread.
SetSuppressionCondition Method that sets the suppression condition for the feature.
SetThroughAllExtent Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
HoleFeatureProxy Object Page 1 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines a through-all termination
type.
SetToFaceExtent
Method that specifies the termination type for the hole feature. Hole
features can be specified to terminate at a particular distance or object,
or can be specified as "through all," which means it extends through all
faces of the feature. This method defines the hole's termination at a
particular face.
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
BottomTipAngle
Property that returns the Parameter that defines the included angle of the
tip of a blind hole, one that has been specified by a distance extent or 'to
face' extent . If this is a Flat Bottomed hole then the property will return
Nothing.
CBoreDepth
Property that returns the parameter controlling the CBore depth. This
property will return Nothing in the case where the HoleType is not
kCounterBoreHole.
CBoreDiameter
Property that returns the parameter controlling the CBore diameter. This
property will return Nothing in the case where the HoleType is not
kCounterBoreHole.
ClearanceInfo Gets and sets the HoleClearanceInfo object associated with the hole.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested under
this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
CSinkAngle
Property that returns the parameter controlling the CSink angle. This
property will return Nothing in the case where the HoleType is not
kCounterSinkHole.
CSinkDepth Gets depth of hole coutersink.
CSinkDiameter
Property that returns the parameter controlling the CSink diameter. This
property will return Nothing in the case where the HoleType is not
kCounterSinkHole.
Depth Gets depth of hole.
EndFaces
Property that returns the set of that cap the end of the hole. In the cases
where there aren't any such end faces this property will return Nothing.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
HoleFeatureProxy Object Page 2 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
ExtendStart Gets and sets whether to extend the start of the hole feature. When set
this to True the hole feature will be extended to cut the body that is
adjacent to the hole feature starting face.
Extent
Property that returns the object that defines how the extent of the feature
is defined. The type of extent object that this property will return can be
determined by using the ExtentType property.
ExtentType
Property that returns an enum indicating how the extent of the feature is
defined. This indicates the type of object returned by the Extent
property.
Faces
Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by
additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
FlatBottom
Read-only property that returns whether the hole bottom is flat or has tip
angle.
HealthStatus Property that returns an enum indicating the current state of the object.
HoleCenterPoints
Property that returns the set of points that define the centers of the holes
of this feature.
HoleDiameter
Property that returns the parameter controlling the diameter of the hole.
This property will return Nothing if the diameter is being read off a
value from the HoleTapInfo, when this hole is tapped.
HoleType
Property that returns the type of hole. Can be kDrilledHole,
kCounterBoreHole, kCounterSinkHole, or kSpotFaceHole. The hole
type can be set by using the SetToCBore, SetToCSink, SetDrilled, and
SetToSpotFace methods.
IsClearanceHole
Read – only property that returns the Boolean flag indicating whether the
hole is clearance hole or not.
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
PlacementDefinition Gets the Placement Definition for the hole feature.
PlacementType Property that returns a constant indicating the type of hole placement.
RangeBox
Property that returns a Box object which contains the opposing points of
a rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to
surface features.
SideFaces
Property that returns a object that provides access to all of the faces
created around the perimeter of the feature.
HoleFeatureProxy Object Page 3 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Sketch Property that returns the Sketch object that contains the points the hole is
based on.
SpotFaceDepth
Property that returns the parameter controlling the SpotFace depth. This
property will return Nothing in the case where the HoleType is not
kSpotFaceHole.
SpotFaceDiameter
Property that returns the parameter controlling the SpotFace diameter.
This property will return Nothing in the case where the HoleType is not
kSpotFaceHole.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
TapInfo
Property that gets and sets the HoleTapInfo or TaperedThreadInfo object
associated with the hole.
Tapped
Property that returns the Boolean flag indicating whether the hole is
tapped or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
HoleFeatureProxy.Adaptive Property
Parent Object: HoleFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
HoleFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
HoleFeatureProxy.AddParticipant Method
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 4 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Method that adds the specified participant to the assembly feature. This method fails for features
in a part.
Syntax
HoleFeatureProxy.AddParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be added. An error occurs if the input ComponentOccurrence
is not a leaf occurrence.
Version
Introduced in version 11
HoleFeatureProxy.Appearance Property
Parent Object: HoleFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
HoleFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
HoleFeatureProxy Object Page 5 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.AppearanceSourceType
Property
Parent Object: HoleFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
HoleFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
HoleFeatureProxy.Application Property
Parent Object: HoleFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
HoleFeatureProxy Object Page 6 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.AttributeSets Property
Parent Object: HoleFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HoleFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
HoleFeatureProxy.BottomTipAngle Property
Parent Object: HoleFeatureProxy
Description
Property that returns the Parameter that defines the included angle of the tip of a blind hole, one
that has been specified by a distance extent or 'to face' extent . If this is a Flat Bottomed hole then
the property will return Nothing.
Syntax
HoleFeatureProxy.BottomTipAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy Object Page 7 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.CBoreDepth Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the CBore depth. This property will return Nothing
in the case where the HoleType is not kCounterBoreHole.
Syntax
HoleFeatureProxy.CBoreDepth() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy.CBoreDiameter Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the CBore diameter. This property will return
Nothing in the case where the HoleType is not kCounterBoreHole.
Syntax
HoleFeatureProxy.CBoreDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy Object Page 8 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.ClearanceInfo Property
Parent Object: HoleFeatureProxy
Description
Gets and sets the HoleClearanceInfo object associated with the hole.
Syntax
HoleFeatureProxy.ClearanceInfo() As HoleClearanceInfo
Property Value
This is a read/write property whose value is a HoleClearanceInfo.
Version
Introduced in version 2018
HoleFeatureProxy.ConsumeInputs Property
Parent Object: HoleFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
HoleFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HoleFeatureProxy Object Page 9 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.ContainingOccurrence
Property
Parent Object: HoleFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
HoleFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
HoleFeatureProxy.CSinkAngle Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the CSink angle. This property will return Nothing
in the case where the HoleType is not kCounterSinkHole.
Syntax
HoleFeatureProxy.CSinkAngle() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy Object Page 10 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.CSinkDepth Property
Parent Object: HoleFeatureProxy
Description
Gets depth of hole coutersink.
Syntax
HoleFeatureProxy.CSinkDepth() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2018
HoleFeatureProxy.CSinkDiameter Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the CSink diameter. This property will return
Nothing in the case where the HoleType is not kCounterSinkHole.
Syntax
HoleFeatureProxy.CSinkDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy Object Page 11 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatureProxy.Delete Method
Parent Object: HoleFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
HoleFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
HoleFeatureProxy.Depth Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 12 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Gets depth of hole.
Syntax
HoleFeatureProxy.Depth() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2018
HoleFeatureProxy.EndFaces Property
Parent Object: HoleFeatureProxy
Description
Property that returns the set of that cap the end of the hole. In the cases where there aren't any such
end faces this property will return Nothing.
Syntax
HoleFeatureProxy.EndFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
HoleFeatureProxy.ExtendedName Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 13 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Read-only property that returns the full feature name including any extended information.
Syntax
HoleFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
HoleFeatureProxy.ExtendStart Property
Parent Object: HoleFeatureProxy
Description
Gets and sets whether to extend the start of the hole feature. When set this to True the hole feature
will be extended to cut the body that is adjacent to the hole feature starting face.
Syntax
HoleFeatureProxy.ExtendStart() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
HoleFeatureProxy.Extent Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 14 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Property that returns the object that defines how the extent of the feature is defined. The type of
extent object that this property will return can be determined by using the ExtentType property.
Syntax
HoleFeatureProxy.Extent() As PartFeatureExtent
Property Value
This is a read only property whose value is a PartFeatureExtent.
Version
Introduced in version 9
HoleFeatureProxy.ExtentType Property
Parent Object: HoleFeatureProxy
Description
Property that returns an enum indicating how the extent of the feature is defined. This indicates
the type of object returned by the Extent property.
Syntax
HoleFeatureProxy.ExtentType() As PartFeatureExtentEnum
Property Value
This is a read only property whose value is a PartFeatureExtentEnum.
Version
Introduced in version 9
HoleFeatureProxy.Faces Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 15 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
HoleFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
HoleFeatureProxy.FeatureDimensions
Property
Parent Object: HoleFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
HoleFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
HoleFeatureProxy.FlatBottom Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 16 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Read-only property that returns whether the hole bottom is flat or has tip angle.
Syntax
HoleFeatureProxy.FlatBottom() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
HoleFeatureProxy.GetReferenceKey Method
Parent Object: HoleFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HoleFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
HoleFeatureProxy Object Page 17 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Version
Introduced in version 9
HoleFeatureProxy.GetSuppressionCondition
Method
Parent Object: HoleFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
HoleFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
HoleFeatureProxy.HealthStatus Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 18 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
HoleFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
HoleFeatureProxy.HoleCenterPoints
Property
Parent Object: HoleFeatureProxy
Description
Property that returns the set of points that define the centers of the holes of this feature.
Syntax
HoleFeatureProxy.HoleCenterPoints() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 9
HoleFeatureProxy.HoleDiameter Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 19 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Property that returns the parameter controlling the diameter of the hole. This property will return
Nothing if the diameter is being read off a value from the HoleTapInfo, when this hole is tapped.
Syntax
HoleFeatureProxy.HoleDiameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 9
HoleFeatureProxy.HoleType Property
Parent Object: HoleFeatureProxy
Description
Property that returns the type of hole. Can be kDrilledHole, kCounterBoreHole,
kCounterSinkHole, or kSpotFaceHole. The hole type can be set by using the SetToCBore,
SetToCSink, SetDrilled, and SetToSpotFace methods.
Syntax
HoleFeatureProxy.HoleType() As HoleTypeEnum
Property Value
This is a read only property whose value is a HoleTypeEnum.
Version
Introduced in version 9
HoleFeatureProxy.IsClearanceHole Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 20 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Read – only property that returns the Boolean flag indicating whether the hole is clearance hole or
not.
Syntax
HoleFeatureProxy.IsClearanceHole() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2018
HoleFeatureProxy.IsOwnedByFeature
Property
Parent Object: HoleFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
HoleFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
HoleFeatureProxy.Name Property
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 21 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
HoleFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
HoleFeatureProxy.NativeObject Property
Parent Object: HoleFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
HoleFeatureProxy.NativeObject() As HoleFeature
Property Value
This is a read only property whose value is a HoleFeature.
Version
Introduced in version 9
HoleFeatureProxy.OwnedBy Property
Parent Object: HoleFeatureProxy
Description
HoleFeatureProxy Object Page 22 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
HoleFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
HoleFeatureProxy.Parameters Property
Parent Object: HoleFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
HoleFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
HoleFeatureProxy.Parent Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parent of the feature.
HoleFeatureProxy Object Page 23 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Syntax
HoleFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
HoleFeatureProxy.Participants Property
Parent Object: HoleFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
HoleFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
HoleFeatureProxy.PlacementDefinition
Property
Parent Object: HoleFeatureProxy
Description
Gets the Placement Definition for the hole feature.
HoleFeatureProxy Object Page 24 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Syntax
HoleFeatureProxy.PlacementDefinition() As HolePlacementDefinition
Property Value
This is a read/write property whose value is a HolePlacementDefinition.
Version
Introduced in version 10
HoleFeatureProxy.PlacementType Property
Parent Object: HoleFeatureProxy
Description
Property that returns a constant indicating the type of hole placement.
Syntax
HoleFeatureProxy.PlacementType() As HolePlacementTypeEnum
Property Value
This is a read only property whose value is a HolePlacementTypeEnum.
Version
Introduced in version 9
HoleFeatureProxy.RangeBox Property
Parent Object: HoleFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
HoleFeatureProxy Object Page 25 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Syntax
HoleFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
HoleFeatureProxy.RemoveParticipant
Method
Parent Object: HoleFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
HoleFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
HoleFeatureProxy.SetAffectedBodies Method
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 26 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
HoleFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
HoleFeatureProxy.SetCBore Method
Parent Object: HoleFeatureProxy
Description
Method that changes the hole to be a counterbore hole type. If the hole is already a counterbore
type you can access and modify the counterbore parameters using the CBoreDiameter and
CBoreDepth properties of the HoleFeature object.
Syntax
HoleFeatureProxy.SetCBore( CBoreDiameter As Variant, CBoreDepth As Variant )
Parameters
Name Type Description
CBoreDiameter Variant
Input Variant that defines the diameter of the counterbore. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units can
be specified as part of the string or it will default to the current length
units.
CBoreDepth Variant Input Variant that defines the depth of the counterbore. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units can
HoleFeatureProxy Object Page 27 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
be specified as part of the string or it will default to the current length
units of the document.
Version
Introduced in version 9
HoleFeatureProxy.SetCSink Method
Parent Object: HoleFeatureProxy
Description
Method that changes the hole to be a countersink hole type. If the hole is already a countersink
type you can access and modify the counterbore parameters using the CSinkDiameter and
CSinkAngle properties of the HoleFeature object.
Syntax
HoleFeatureProxy.SetCSink( CSinkDiameter As Variant, CSinkAngle As Variant )
Parameters
Name Type Description
CSinkDiameter Variant
Input Variant that defines the diameter of the countersink. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can
be specified as part of the string or it will default to the current length
units of the document.
CSinkAngle Variant
Input Variant that defines the angle of the countersink. This can be either
a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value is
input, the units are radians. If a string is input, the units can be specified
as part of the string or it will default to the current angle units of the
document.
Version
Introduced in version 9
HoleFeatureProxy.SetDistanceExtent Method
Parent Object: HoleFeatureProxy
HoleFeatureProxy Object Page 28 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines the hole's termination at a particular
distance.
Syntax
HoleFeatureProxy.SetDistanceExtent( Depth As Variant, ExtentDirection As
PartFeatureExtentDirectionEnum, [FlatBottom] As Boolean, [BottomTipAngle] As Variant )
Parameters
Name Type Description
Depth Variant
Input Variant that specifies the depth to
which to extend the hole feature.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that specifies the direction in
which to extend the hole feature.
FlatBottom Boolean
Optional input Boolean that determines
whether the hole feature has a flat bottom.
This is an optional argument whose default
value is True.
BottomTipAngle Variant
Optional input Variant that specifies the angle
of the hole feature's bottom tip (if FlatBottom
is False.)
This is an optional argument whose default
value is null.
Version
Introduced in version 9
HoleFeatureProxy.SetDrilled Method
Parent Object: HoleFeatureProxy
Description
Method that changes the hole to be a drilled hole type.
HoleFeatureProxy Object Page 29 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Syntax
HoleFeatureProxy.SetDrilled()
Version
Introduced in version 9
HoleFeatureProxy.SetEndOfPart Method
Parent Object: HoleFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
HoleFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 9
HoleFeatureProxy.SetSpotFace Method
Parent Object: HoleFeatureProxy
Description
Method that changes the hole to be a spotface hole type. If the hole is already a spotface type you
can access and modify the spotface parameters using the SpotFaceDiameter and SpotFaceDepth
properties of the HoleFeature object. This method will fail of the hole contains a tapered thread.
HoleFeatureProxy Object Page 30 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Syntax
HoleFeatureProxy.SetSpotFace( SpotFaceDiameter As Variant, SpotFaceDepth As Variant )
Parameters
Name Type Description
SpotFaceDiameter Variant
Input Variant that defines the diameter of the spotface. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current
length units of the document.
SpotFaceDepth Variant
Input Variant that defines the depth of the spotface. This can be either
a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value
is input, the units are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current length
units of the document.
Version
Introduced in version 2008
HoleFeatureProxy.SetSuppressionCondition
Method
Parent Object: HoleFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
HoleFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
HoleFeatureProxy Object Page 31 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
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
Introduced in version 11
HoleFeatureProxy.SetThroughAllExtent
Method
Parent Object: HoleFeatureProxy
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines a through-all termination type.
Syntax
HoleFeatureProxy.SetThroughAllExtent( ExtentDirection As
PartFeatureExtentDirectionEnum )
Parameters
Name Type Description
ExtentDirection PartFeatureExtentDirectionEnum
Input argument identifying the direction in
which to extend the hole feature.
HoleFeatureProxy Object Page 32 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Version
Introduced in version 9
HoleFeatureProxy.SetToFaceExtent Method
Parent Object: HoleFeatureProxy
Description
Method that specifies the termination type for the hole feature. Hole features can be specified to
terminate at a particular distance or object, or can be specified as "through all," which means it
extends through all faces of the feature. This method defines the hole's termination at a particular
face.
Syntax
HoleFeatureProxy.SetToFaceExtent( ToFace As Object, ExtendToFace As Boolean )
Parameters
Name Type Description
ToFace Object
Input Object that defines the 'to face.' This can be either a or WorkPlane
object.
ExtendToFace Boolean Input Boolean that specifies whether to extend to the face.
Version
Introduced in version 9
HoleFeatureProxy.Shared Property
Parent Object: HoleFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
HoleFeatureProxy.Shared() As Boolean
HoleFeatureProxy Object Page 33 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
HoleFeatureProxy.SideFaces Property
Parent Object: HoleFeatureProxy
Description
Property that returns a object that provides access to all of the faces created around the perimeter
of the feature.
Syntax
HoleFeatureProxy.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
HoleFeatureProxy.Sketch Property
Parent Object: HoleFeatureProxy
Description
Property that returns the Sketch object that contains the points the hole is based on.
Syntax
HoleFeatureProxy.Sketch() As PlanarSketch
HoleFeatureProxy Object Page 34 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property Value
This is a read only property whose value is a PlanarSketch.
Version
Introduced in version 9
HoleFeatureProxy.SpotFaceDepth Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the SpotFace depth. This property will return
Nothing in the case where the HoleType is not kSpotFaceHole.
Syntax
HoleFeatureProxy.SpotFaceDepth() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
HoleFeatureProxy.SpotFaceDiameter
Property
Parent Object: HoleFeatureProxy
Description
Property that returns the parameter controlling the SpotFace diameter. This property will return
Nothing in the case where the HoleType is not kSpotFaceHole.
Syntax
HoleFeatureProxy.SpotFaceDiameter() As Parameter
HoleFeatureProxy Object Page 35 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2008
HoleFeatureProxy.Suppressed Property
Parent Object: HoleFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
HoleFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
HoleFeatureProxy.SurfaceBodies Property
Parent Object: HoleFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
HoleFeatureProxy.SurfaceBodies() As SurfaceBodies
HoleFeatureProxy Object Page 36 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
HoleFeatureProxy.TapInfo Property
Parent Object: HoleFeatureProxy
Description
Property that gets and sets the HoleTapInfo or TaperedThreadInfo object associated with the hole.
Syntax
HoleFeatureProxy.TapInfo() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 9
HoleFeatureProxy.Tapped Property
Parent Object: HoleFeatureProxy
Description
Property that returns the Boolean flag indicating whether the hole is tapped or not.
Syntax
HoleFeatureProxy.Tapped() As Boolean
HoleFeatureProxy Object Page 37 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
HoleFeatureProxy.Type Property
Parent Object: HoleFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
HoleFeatureProxy Object Page 38 of 38
file:///C:/Users/Cliente/AppData/Local/Temp/~hh501A.htm 16/06/2025
HoleFeatures Object
Description
The HoleFeatures object provides access to all of the objects in a component definition and provides methods
to create additional HoleFeature objects.
Methods
Name Description
AddCBoreByDistanceExtent
Method that creates a new counterbore HoleFeature using distance
extents. The new HoleFeature is returned.
AddCBoreByThroughAllExtent
Method that creates a new counterbore HoleFeature using 'through all'
extents. The new HoleFeature is returned.
AddCBoreByToFaceExtent
Method that creates a new counterbore HoleFeature using 'to face'
extents. The new HoleFeature is returned.
AddCSinkByDistanceExtent
Method that creates a new countersink HoleFeature using distance
extents. The new HoleFeature is returned.
AddCSinkByThroughAllExtent
Method that creates a new counter sink HoleFeature using 'through all'
extents. The new HoleFeature is returned.
AddCSinkByToFaceExtent
Method that creates a new countersink HoleFeature using 'to face'
extents. The new HoleFeature is returned.
AddDrilledByDistanceExtent
Method that creates a new drilled HoleFeature using distance extents.
The new HoleFeature is returned.
AddDrilledByThroughAllExtent
Method that creates a new drilled HoleFeature using 'through all'
extents. The new HoleFeature is returned.
AddDrilledByToFaceExtent
Method that creates a new drilled HoleFeature using 'to face' extents.
The new HoleFeature is returned.
AddSpotFaceByDistanceExtent
Method that creates a new spotface HoleFeature using distance extents.
The new HoleFeature is returned.
AddSpotFaceByThroughAllExtent
Method that creates a new spotface HoleFeature using 'through all'
extents. The new HoleFeature is returned.
AddSpotFaceByToFaceExtent
Method that creates a new spotface HoleFeature using 'to face' extents.
The new HoleFeature is returned.
CreateClearanceInfo Creates a new ClearanceInfo object.
CreateConcentricPlacementDefinition
Method that creates a new ConcentricHolePlacementDefinition object
that can be used for defining the placement of Hole features concentric
with a circular edge or a cylindrical face.
CreateLinearPlacementDefinition
Method that creates a new LinearHolePlacementDefinition object that
can be used for defining the placement of Hole features with respect to
two linear edges.
CreatePointPlacementDefinition
Method that creates a new PointHolePlacementDefinition object that
can be used for defining the placement of Hole features coincident with
a work point and positioned with respect to an axis, edge or work
plane.
CreateSketchPlacementDefinition
Method that creates a new SketchHolePlacementDefinition object that
can be used for defining the placement of Hole features using sketch
points.
CreateTaperedTapInfo
Method that creates a new TaperedThreadInfo object that can be used
in creating HoleFeature objects. See the Thread.xls file that is delivered
with Inventor for examples of valid input for these arguments. The
spreadsheet columns match one for one with these arguments.
HoleFeatures Object Page 1 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
CreateTapInfo
Method that creates a new HoleTapInfo object that can be used in
creating threads for Hole features. See the Thread.xls file that is
delivered with Autodesk Inventor for examples of valid input for these
arguments.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified HoleFeature object from the collection. This is the default property of the
HoleFeatures collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Features.HoleFeatures, FlatPatternFeatures.HoleFeatures, PartFeatures.HoleFeatures,
SheetMetalFeatures.HoleFeatures
Version
Introduced in version 5
HoleFeatures.AddCBoreByDistanceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new counterbore HoleFeature using distance extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddCBoreByDistanceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, Depth As Variant, ExtentDirection As PartFeatureExtentDirectionEnum, CBoreDiameter As Variant,
CBoreDepth As Variant, [FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
HoleFeatures Object Page 2 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo object). In the case
of a tapped hole, the tap information defines the
diameter of the hole. When the diameter is supplied,
this can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter.
Depth Variant
Input Variant that defines the depth of the hole. This
can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or
value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default
to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
CBoreDiameter Variant
Input Variant that defines the diameter of the
counterbore. This can be either a numeric value or a
string. A parameter for this value will be created and
the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters.
If a string is input, the units can be specified as part of
the string or it will default to the current length units
of the document.
CBoreDepth Variant
Input Variant that defines the depth of the counterbore.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom
of the hole should be flat or pointed. True indicates a
flat hole. If False then the BottomTipAngle argument
needs to be provided to specify the angle. The default
value is True.
This is an optional argument whose default value is
True.
BottomTipAngle Variant Optional input Variant that defines the angle of the tip
at the bottom of a hole. This argument is only used
when the FlatBottom argument is False. If FlatBottom
is false and this argument is not supplied a default
value of 118 degrees is assigned. This can be either a
numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
HoleFeatures Object Page 3 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
are radians. If a string is input, the units can be
specified as part of the string or it will default to the
current angle units of the document.
This is an optional argument whose default value is
null.
Version
Introduced in version 5
HoleFeatures.AddCBoreByThroughAllExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new counterbore HoleFeature using 'through all' extents. The new HoleFeature is
returned.
Syntax
HoleFeatures.AddCBoreByThroughAllExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ExtentDirection As PartFeatureExtentDirectionEnum, CBoreDiameter As Variant, CBoreDepth As
Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo object). In the case
of a tapped hole, the tap information defines the
diameter of the hole. When the diameter is supplied,
this can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
HoleFeatures Object Page 4 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
CBoreDiameter Variant
Input Variant that defines the diameter of the
counterbore. This can be either a numeric value or a
string. A parameter for this value will be created and
the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters.
If a string is input, the units can be specified as part of
the string or it will default to the current length units
of the document.
CBoreDepth Variant
Input Variant that defines the depth of the counterbore.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
Version
Introduced in version 5
HoleFeatures.AddCBoreByToFaceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new counterbore HoleFeature using 'to face' extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddCBoreByToFaceExtent( PlacementDefinition As Object, DiameterOrTapInfo As Variant,
ToFace As Object, ExtendToFace As Boolean, CBoreDiameter As Variant, CBoreDepth As Variant,
[FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Object that defines the centerpoint(s) of the hole feature. This object can be one
of the following four objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition, LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition, PointHolePlacementDefinition. These
objects can be created using methods provided on this HoleFeatures object.
This argument also supports an ObjectCollection of SketchPoints for
compatibility with the older version of this method.
DiameterOrTapInfo Variant Defines either the diameter of the hole or the tap information (using a
HoleTapInfo object). In the case of a tapped hole, the tap information defines
HoleFeatures Object Page 5 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
the diameter of the hole. When the diameter is supplied, this can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
ToFace Object Input Object that defines the 'to face.' This can be either a or WorkPlane object.
ExtendToFace Boolean
Input Boolean that defines whether the 'to face' should be extended to contain
the extents of the hole.
CBoreDiameter Variant
Input Variant that defines the diameter of the counterbore. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
CBoreDepth Variant
Input Variant that defines the depth of the counterbore. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom of the hole should be flat
or pointed. True indicates a flat hole. If False then the BottomTipAngle
argument needs to be provided to specify the angle. The default value is True.
This is an optional argument whose default value is True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip at the bottom of a hole.
This argument is only used when the FlatBottom argument is False. If
FlatBottom is false and this argument is not supplied a default value of 118
degrees is assigned. This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are radians. If a string is input, the units
can be specified as part of the string or it will default to the current angle units
of the document.
This is an optional argument whose default value is null.
Version
Introduced in version 5
HoleFeatures.AddCSinkByDistanceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new countersink HoleFeature using distance extents. The new HoleFeature is returned.
HoleFeatures Object Page 6 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Syntax
HoleFeatures.AddCSinkByDistanceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, Depth As Variant, ExtentDirection As PartFeatureExtentDirectionEnum, CSinkDiameter As Variant,
CSinkAngle As Variant, [FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
Depth Variant
Input Variant that defines the depth of the hole. This
can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or
value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default
to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
CSinkDiameter Variant
Input Variant that defines the diameter of the
countersink. This can be either a numeric value or a
string. A parameter for this value will be created and
the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters.
If a string is input the units can be specified as part of
the string or it will default to the current length units
of the document.
CSinkAngle Variant Input Variant that defines the angle of the countersink.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are radians. If a string is
input, the units can be specified as part of the string or
HoleFeatures Object Page 7 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
it will default to the current angle units of the
document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom
of the hole should be flat or pointed. True indicates a
flat hole. If False then the BottomTipAngle argument
needs to be provided to specify the angle. The default
value is True.
This is an optional argument whose default value is
True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip
at the bottom of a hole. This argument is only used
when the FlatBottom argument is False. If FlatBottom
is false and this argument is not supplied a default
value of 118 degrees is assigned. This can be either a
numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are radians. If a string is input, the units can be
specified as part of the string or it will default to the
current angle units of the document.
This is an optional argument whose default value is
null.
Version
Introduced in version 5
HoleFeatures.AddCSinkByThroughAllExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new counter sink HoleFeature using 'through all' extents. The new HoleFeature is
returned.
Syntax
HoleFeatures.AddCSinkByThroughAllExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ExtentDirection As PartFeatureExtentDirectionEnum, CSinkDiameter As Variant, CSinkAngle As
Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
HoleFeatures Object Page 8 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
CSinkDiameter Variant
Input Variant that defines the diameter of the
countersink. This can be either a numeric value or a
string. A parameter for this value will be created and
the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters.
If a string is input, the units can be specified as part of
the string or it will default to the current length units
of the document.
CSinkAngle Variant
Input Variant that defines the angle of the countersink.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are radians. If a string is
input, the units can be specified as part of the string or
it will default to the current angle units of the
document.
Version
Introduced in version 5
HoleFeatures.AddCSinkByToFaceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new countersink HoleFeature using 'to face' extents. The new HoleFeature is returned.
HoleFeatures Object Page 9 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Syntax
HoleFeatures.AddCSinkByToFaceExtent( PlacementDefinition As Object, DiameterOrTapInfo As Variant,
ToFace As Object, ExtendToFace As Boolean, CSinkDiameter As Variant, CSinkAngle As Variant,
[FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Object that defines the centerpoint(s) of the hole feature. This object can be one
of the following four objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition, LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition, PointHolePlacementDefinition. These
objects can be created using methods provided on this HoleFeatures object.
This argument also supports an ObjectCollection of SketchPoints for
compatibility with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap information (using a
HoleTapInfo or a TaperedThreadInfo object). In the case of a tapped hole, the
tap information defines the diameter of the hole. When the diameter is supplied,
this can be either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a value
is input, the units are centimeters. If a string is input, the units can be specified
as part of the string or it will default to the current length units of the document.
ToFace Object Input Object that defines the 'to face.' This can be either a or WorkPlane object.
ExtendToFace Boolean
Input Boolean that defines whether the 'to face' should be extended to contain
the extents of the hole.
CSinkDiameter Variant
Input Variant that defines the diameter of the countersink. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
CSinkAngle Variant
Input Variant that defines the angle of the countersink. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are radians. If a string is input, the units can be specified as part of the
string or it will default to the current angle units of the document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom of the hole should be flat
or pointed. True indicates a flat hole. If False then the BottomTipAngle
argument needs to be provided to specify the angle. The default value is True.
This is an optional argument whose default value is True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip at the bottom of a hole.
This argument is only used when the FlatBottom argument is False. If
FlatBottom is false and this argument is not supplied a default value of 118
degrees is assigned. This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are radians. If a string is input, the units
can be specified as part of the string or it will default to the current angle units
of the document.
This is an optional argument whose default value is null.
HoleFeatures Object Page 10 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Version
Introduced in version 5
HoleFeatures.AddDrilledByDistanceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new drilled HoleFeature using distance extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddDrilledByDistanceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, Depth As Variant, ExtentDirection As PartFeatureExtentDirectionEnum, [FlatBottom] As Boolean,
[BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
Depth Variant
Input Variant that defines the depth of the hole. This
can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or
value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default
to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
HoleFeatures Object Page 11 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom
of the hole should be flat or pointed. True indicates a
flat hole. If False then the BottomTipAngle argument
needs to be provided to specify the angle. The default
value is True.
This is an optional argument whose default value is
True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip
at the bottom of a hole. This argument is only used
when the FlatBottom argument is False. If FlatBottom
is false and this argument is not supplied a default
value of 118 degrees is assigned. This can be either a
numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are radians. If a string is input, the units can be
specified as part of the string or it will default to the
current angle units of the document.
This is an optional argument whose default value is
null.
Version
Introduced in version 5
HoleFeatures.AddDrilledByThroughAllExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new drilled HoleFeature using 'through all' extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddDrilledByThroughAllExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ExtentDirection As PartFeatureExtentDirectionEnum ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
HoleFeatures Object Page 12 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap
information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude toward. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
Samples
Name Description
Hole Feature - Through holes
(RegularAndTapped)
This sample demonstrates the creation of through holes, both
regular and tapped.
Hole feature linear placement
This sample demonstrates the creation of a hole feature using the
linear placement type.
Version
Introduced in version 5
HoleFeatures.AddDrilledByToFaceExtent Method
Parent Object: HoleFeatures
Description
Method that creates a new drilled HoleFeature using 'to face' extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddDrilledByToFaceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ToFace As Object, ExtendToFace As Boolean, [FlatBottom] As Boolean, [BottomTipAngle] As
Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object Object that defines the centerpoint(s) of the hole feature. This object can be one
of the following four objects that derive from the HolePlacementDefinition
HoleFeatures Object Page 13 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
object: SketchHolePlacementDefinition, LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition, PointHolePlacementDefinition. These
objects can be created using methods provided on this HoleFeatures object.
This argument also supports an ObjectCollection of SketchPoints for
compatibility with the older version of this method.
DiameterOrTapInfo Variant
Defines either the diameter of the hole or the tap information (using a
HoleTapInfo or a TaperedThreadInfo object). In the case of a tapped hole, the
tap information defines the diameter of the hole. When the diameter is supplied,
this can be either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a value
is input, the units are centimeters. If a string is input, the units can be specified
as part of the string or it will default to the current length units of the document.
ToFace Object Input Object that defines the 'to face.' This can be either a or WorkPlane object.
ExtendToFace Boolean
Input Boolean that defines whether the 'to face' should be extended to contain
the entire hole diameter.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom of the hole should be flat
or pointed. True indicates a flat hole. If False then the BottomTipAngle
argument needs to be provided to specify the angle. The default value is True.
This is an optional argument whose default value is True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip at the bottom of a hole.
This argument is only used when the FlatBottom argument is False. If
FlatBottom is false and this argument is not supplied a default value of 118
degrees is assigned. This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are radians. If a string is input, the units
can be specified as part of the string or it will default to the current angle units
of the document.
This is an optional argument whose default value is null.
Version
Introduced in version 5
HoleFeatures.AddSpotFaceByDistanceExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new spotface HoleFeature using distance extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddSpotFaceByDistanceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, Depth As Variant, ExtentDirection As PartFeatureExtentDirectionEnum, SpotFaceDiameter As
Variant, SpotFaceDepth As Variant, [FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As
HoleFeature
HoleFeatures Object Page 14 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Parameters
Name Type Description
PlacementDefinition Object
Input Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant
Input Variant that defines either the diameter of the
hole or the tap information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter.
Depth Variant
Input Variant that defines the depth of the hole. This
can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or
value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default
to the current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude towards. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
SpotFaceDiameter Variant
Input Variant that defines the diameter of the spotface.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
SpotFaceDepth Variant
Input Variant that defines the depth of the spotface.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom
of the hole should be flat or pointed. True indicates a
flat hole. If False then the BottomTipAngle argument
needs to be provided to specify the angle. The default
value is True.
This is an optional argument whose default value is
True.
HoleFeatures Object Page 15 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
BottomTipAngle Variant Optional input Variant that defines the angle of the tip
at the bottom of a hole. This argument is only used
when the FlatBottom argument is False. If FlatBottom
is false and this argument is not supplied a default
value of 118 degrees is assigned. This can be either a
numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are radians. If a string is input, the units can be
specified as part of the string or it will default to the
current angle units of the document.
This is an optional argument whose default value is
null.
Version
Introduced in version 2008
HoleFeatures.AddSpotFaceByThroughAllExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new spotface HoleFeature using 'through all' extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddSpotFaceByThroughAllExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ExtentDirection As PartFeatureExtentDirectionEnum, SpotFaceDiameter As Variant,
SpotFaceDepth As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object
Input Object that defines the centerpoint(s) of the hole
feature. This object can be one of the following four
objects that derive from the HolePlacementDefinition
object: SketchHolePlacementDefinition,
LinearHolePlacementDefinition,
ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be
created using methods provided on this HoleFeatures
object. This argument also supports an
ObjectCollection of SketchPoints for compatibility
with the older version of this method.
DiameterOrTapInfo Variant Input Variant that defines either the diameter of the
hole or the tap information (using a HoleTapInfo or a
TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the
hole. When the diameter is supplied, this can be either
HoleFeatures Object Page 16 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
a numeric value or a string. A parameter for this value
will be created and the supplied string or value is
assigned to the parameter. If a value is input, the units
are centimeters. If a string is input, the units can be
specified as part of the string or it will default to the
current length units of the document.
ExtentDirection PartFeatureExtentDirectionEnum
Input constant that indicates which side of the sketch
plane to extrude towards. Valid input is kPositive or
kNegative. kPositive defines the offset direction to be
in the same direction as the normal of the sketch plane.
SpotFaceDiameter Variant
Input Variant that defines the diameter of the spotface.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
SpotFaceDepth Variant
Input Variant that defines the depth of the spotface.
This can be either a numeric value or a string. A
parameter for this value will be created and the
supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is
input, the units can be specified as part of the string or
it will default to the current length units of the
document.
Version
Introduced in version 2008
HoleFeatures.AddSpotFaceByToFaceExtent
Method
Parent Object: HoleFeatures
Description
Method that creates a new spotface HoleFeature using 'to face' extents. The new HoleFeature is returned.
Syntax
HoleFeatures.AddSpotFaceByToFaceExtent( PlacementDefinition As Object, DiameterOrTapInfo As
Variant, ToFace As Object, ExtendToFace As Boolean, SpotFaceDiameter As Variant, SpotFaceDepth As
Variant, [FlatBottom] As Boolean, [BottomTipAngle] As Variant ) As HoleFeature
Parameters
Name Type Description
PlacementDefinition Object Input Object that defines the centerpoint(s) of the hole feature. This object can
be one of the following four objects that derive from the
HolePlacementDefinition object: SketchHolePlacementDefinition,
HoleFeatures Object Page 17 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
LinearHolePlacementDefinition, ConcentricHolePlacementDefinition,
PointHolePlacementDefinition. These objects can be created using methods
provided on this HoleFeatures object. This argument also supports an
ObjectCollection of SketchPoints for compatibility with the older version of
this method.
DiameterOrTapInfo Variant
Input Variant that defines either the diameter of the hole or the tap information
(using a HoleTapInfo or a TaperedThreadInfo object). In the case of a tapped
hole, the tap information defines the diameter of the hole. When the diameter is
supplied, this can be either a numeric value or a string. A parameter for this
value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a string is input the
units can be specified as part of the string or it will default to the current length
units of the document.
ToFace Object
Input Object that defines the 'to face'. This can be either a Face or WorkPlane
object.
ExtendToFace Boolean
Input Boolean that defines whether the 'to face' should be extended to contain
the extents of the hole.
SpotFaceDiameter Variant
Input Variant that defines the diameter of the spotface. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
SpotFaceDepth Variant
Input Variant that defines the depth of the spotface. This can be either a
numeric value or a string. A parameter for this value will be created and the
supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
FlatBottom Boolean
Optional input Boolean that indicates that the bottom of the hole should be flat
or pointed. True indicates a flat hole. If False then the BottomTipAngle
argument needs to be provided to specify the angle. The default value is True.
This is an optional argument whose default value is True.
BottomTipAngle Variant
Optional input Variant that defines the angle of the tip at the bottom of a hole.
This argument is only used when the FlatBottom argument is False. If
FlatBottom is false and this argument is not supplied a default value of 118
degrees is assigned. This can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter. If a value is input, the units are radians. If a string is input, the units
can be specified as part of the string or it will default to the current angle units
of the document.
This is an optional argument whose default value is null.
Version
Introduced in version 2008
HoleFeatures.Application Property
Parent Object: HoleFeatures
Description
HoleFeatures Object Page 18 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
HoleFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
HoleFeatures.Count Property
Parent Object: HoleFeatures
Description
Property that returns the number of items in this collection.
Syntax
HoleFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
HoleFeatures.CreateClearanceInfo Method
Parent Object: HoleFeatures
Description
Creates a new ClearanceInfo object.
Syntax
HoleFeatures.CreateClearanceInfo( FastenerStandard As String, FastenerType As String, FastenerSize As
String, [FastenerFitType] As Variant ) As HoleClearanceInfo
HoleFeatures Object Page 19 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Parameters
Name Type Description
FastenerStandard String
Input String value that specifies the fastener standard. The standard is the name of
the sheet in the Clearance.xls file that is used to define the clearance info.
FastenerType String Input String value that specifies the fastener type.
FastenerSize String Input String value that specifies the fastener size.
FastenerFitType Variant
Optinal input FastenerFitTypeEnum value that specifies the fastener fit type. If not
provided the default kNormalFitType will be used.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
HoleFeatures.CreateConcentricPlacementDefinition
Method
Parent Object: HoleFeatures
Description
Method that creates a new ConcentricHolePlacementDefinition object that can be used for defining the
placement of Hole features concentric with a circular edge or a cylindrical face.
Syntax
HoleFeatures.CreateConcentricPlacementDefinition( Plane As Object, ConcentricReference As Object )
As ConcentricHolePlacementDefinition
Parameters
Name Type Description
Plane Object
Object that indicates the plane on which to place the hole feature. This can be
either a Face or a WorkPlane object. An error will occur if the input Face object
is non-planar.
ConcentricReference Object
Object that specifies the reference for the placement of the hole center. This can
either be a circular Edge or a cylindrical Face. If a circular edge is specified, it
must lie on a plane parallel to the plane of the input Plane object. If a cylindrical
face is specified, its axis must be perpendicular to the plane of the input Plane
object.
Version
Introduced in version 11
HoleFeatures Object Page 20 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
HoleFeatures.CreateLinearPlacementDefinition
Method
Parent Object: HoleFeatures
Description
Method that creates a new LinearHolePlacementDefinition object that can be used for defining the placement
of Hole features with respect to two linear edges.
Syntax
HoleFeatures.CreateLinearPlacementDefinition( Plane As Object, ReferenceEntityOne As Object,
DistanceOne As Variant, ReferenceEntityTwo As Object, DistanceTwo As Variant, BiasPoint As Point ) As
LinearHolePlacementDefinition
Parameters
Name Type Description
Plane Object
Object that indicates the plane on which to place the hole feature. Valid inputs
are Face and WorkPlane objects. The input Face object needs to be planar else
an error will occur.
ReferenceEntityOne Object
Object that specifies the first entity referenced for dimensioning the placement
of the hole. The only valid input is an Edge object and it needs to be linear. An
error will occur if the entity is perpendicular to the plane of the input face.
DistanceOne Variant
Specifies the distance of the hole center from the first reference entity. This can
be either a numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input, the units can be specified as part of
the string or it will default to the current length units of the document.
ReferenceEntityTwo Object
Object that specifies the second entity referenced for dimensioning the
placement of the hole. The only valid input is an Edge object and it needs to be
linear. An error will occur if the entity is perpendicular to the plane of the input
face. An error will also occur if the entity is parallel to the first reference entity.
DistanceTwo Variant
Specifies the distance of the hole center from the second reference entity. This
can be either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter. If a value is
input, the units are centimeters. If a string is input, the units can be specified as
part of the string or it will default to the current length units of the document.
BiasPoint Point
Object that specifies a point to be used as a bias point. This can simply be the
location where the hole needs to be placed and is equivalent to the pick point
when creating a hole feature with the linear placement option through the user
interface. The true location is decided by the DistanceOne and DistanceTwo
arguments. The point must lie on the infinite plane defined by the Plane
argument input, else an error will occur.
Samples
Name Description
Hole feature linear
placement
This sample demonstrates the creation of a hole feature using the linear
placement type.
HoleFeatures Object Page 21 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Version
Introduced in version 11
HoleFeatures.CreatePointPlacementDefinition
Method
Parent Object: HoleFeatures
Description
Method that creates a new PointHolePlacementDefinition object that can be used for defining the placement of
Hole features coincident with a work point and positioned with respect to an axis, edge or work plane.
Syntax
HoleFeatures.CreatePointPlacementDefinition( Point As Object, Direction As Object ) As
PointHolePlacementDefinition
Parameters
Name Type Description
Point Object Object that specifies the point to set as the hole center. The only valid input is a WorkPoint.
Direction Object
Object that specifies the direction of the hole axis. This can be a planar Face object or a
WorkPlane object with which the axis of the hole is perpendicular, or an Edge or WorkAxis
object with which the axis of the hole is parallel.
Version
Introduced in version 11
HoleFeatures.CreateSketchPlacementDefinition
Method
Parent Object: HoleFeatures
Description
Method that creates a new SketchHolePlacementDefinition object that can be used for defining the placement
of Hole features using sketch points.
Syntax
HoleFeatures.CreateSketchPlacementDefinition( HoleCenterPoints As ObjectCollection ) As
SketchHolePlacementDefinition
HoleFeatures Object Page 22 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Parameters
Name Type Description
HoleCenterPoints ObjectCollection
ObjectCollection object that contains the SketchPoint objects that will be
used to define the centers of the holes. All of the SketchPoint objects used
as input must be within the same sketch.
Version
Introduced in version 11
HoleFeatures.CreateTaperedTapInfo Method
Parent Object: HoleFeatures
Description
Method that creates a new TaperedThreadInfo object that can be used in creating HoleFeature objects. See the
Thread.xls file that is delivered with Inventor for examples of valid input for these arguments. The spreadsheet
columns match one for one with these arguments.
Syntax
HoleFeatures.CreateTaperedTapInfo( RightHanded As Boolean, ThreadType As String,
ThreadDesignation As String ) As TaperedThreadInfo
Parameters
Name Type Description
RightHanded Boolean
Input Boolean that indicates if the thread is right or left-handed thread. A value
of True indicates a right-handed thread.
ThreadType String
Input String that specifies the thread type. The thread type is the name of the
sheet in the Thread.xls file that is used by the Thread command to define valid
thread definitions.
ThreadDesignation String
Input String that contains the thread designation. This is input as the full thread
designation that will be used in a drawing for the thread callout. The nominal size
information is extracted from the designation.
Version
Introduced in version 2008
HoleFeatures.CreateTapInfo Method
Parent Object: HoleFeatures
Description
HoleFeatures Object Page 23 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Method that creates a new HoleTapInfo object that can be used in creating threads for Hole features. See the
Thread.xls file that is delivered with Autodesk Inventor for examples of valid input for these arguments.
Syntax
HoleFeatures.CreateTapInfo( RightHanded As Boolean, ThreadType As String, ThreadDesignation As
String, Class As String, FullTapDepth As Boolean, [ThreadDepth] As Variant ) As HoleTapInfo
Parameters
Name Type Description
RightHanded Boolean
Input Boolean that indicates if the thread is right or left-handed thread. A value
of True indicates a right-handed thread.
ThreadType String
Input String that specifies the sheet in the Thread.xls that this thread information
should be validated within. Each sheet within the Excel document is typically
used for different thread types. The string is the name of the sheet. For example
"ANSI Unified Screw Threads" or "ANSI Metric M Profile" are valid for English
versions of Autodesk Inventor.
ThreadDesignation String
Input String that contains the thread designation. This is input as the full thread
designation that will be used in a drawing for the thread callout. The nominal size
and pitch information are extracted from the designation. For example valid inch
thread designations are '10-24 UNC' and '7/16-20 UNF'. Examples of valid
metric designations are 'M16x1.5' and 'M55x1.5'.
Class String
Input String that defines the thread class. For example a valid class for an inch
internal thread is 2B. A valid class for a metric external thread is 6g.
FullTapDepth Boolean
Input Boolean that indicates if the thread extends the full length of the hole or
not. A value of True indicates the thread goes the full extent of the hole.
ThreadDepth Variant
Optional input Variant that defines the thread depth. This is only applicable when
the FullDepth argument is False, otherwise this argument is ignored. This can be
either a numeric value or a string. A parameter for this value will be created and
the supplied string or value is assigned to the parameter. If a value is input, the
units are centimeters. If a string is input, the units can be specified as part of the
string or it will default to the current length units of the document.
This is an optional argument whose default value is null.
Samples
Name Description
Hole Feature - Through holes
(RegularAndTapped)
This sample demonstrates the creation of through holes, both
regular and tapped.
Version
Introduced in version 5
HoleFeatures.Item Property
Parent Object: HoleFeatures
HoleFeatures Object Page 24 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
Description
Returns the specified HoleFeature object from the collection. This is the default property of the HoleFeatures
collection object.
Syntax
HoleFeatures.Item( Index As Variant ) As HoleFeature
Property Value
This is a read only property whose value is a HoleFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the feature to return. This can be either a numeric value
indicating the index of the item in the collection or it can be a string indicating the feature
name. If an out of range index or a name of a non-existent feature is provided, an error occurs.
Version
Introduced in version 5
HoleFeatures.Type Property
Parent Object: HoleFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
HoleFeatures Object Page 25 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBFAD.htm 16/06/2025
HolePlacementDefinition Object
Description
The HolePlacementDefinition object is the base class that defines the placement method for hole
features.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Parent
Property that returns the parent PartFeature of the definition. This property returns
Nothing in the case where the definition object is created using one of the Create
methods on the HoleFeatures object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleFeature.PlacementDefinition, HoleFeatureProxy.PlacementDefinition
Derived Classes
ConcentricHolePlacementDefinition, LinearHolePlacementDefinition,
PointHolePlacementDefinition, SketchHolePlacementDefinition
Version
Introduced in version 10
HolePlacementDefinition.Application
Property
Parent Object: HolePlacementDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
HolePlacementDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9E9.htm 16/06/2025
Syntax
HolePlacementDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HolePlacementDefinition.Parent Property
Parent Object: HolePlacementDefinition
Description
Property that returns the parent PartFeature of the definition. This property returns Nothing in the
case where the definition object is created using one of the Create methods on the HoleFeatures
object.
Syntax
HolePlacementDefinition.Parent() As HoleFeature
Property Value
This is a read only property whose value is a HoleFeature.
Version
Introduced in version 10
HolePlacementDefinition.Type Property
Parent Object: HolePlacementDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
HolePlacementDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9E9.htm 16/06/2025
Syntax
HolePlacementDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HolePlacementDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9E9.htm 16/06/2025
HoleTable Object
Description
A hole table contains information for some or all holes in a drawing view. A hole tag is associated
with each hole and a corresponding row in the table. If an existing hole is changed, the hole table
is updated when the drawing updates.
Methods
Name Description
Delete Method that deletes the HoleTable.
Export Method that saves the custom table to an external file.
GetReferenceKey Method that generates and returns the reference key for this entity.
MatchCustomHoles
Method that specifies two or more custom holes (designated with center
marks) to be the same.
ShowTags
Property that indicates whether to show or hide all the hole tags associated
with this table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object
is returned.
ArrangeByPosition
Gets/Sets whether to tags holes relative to their position on the
selected view or by their relative size.
AttributeSets
Property that returns the AttributeSets collection object
associated with this object.
ColumnHeaderTextStyle Gets/Sets the text style used for the column titles (headers).
DataTextStyle Gets/Sets the text style used for the contents of the table.
DeleteTagsOnRollup
Gets/Sets whether to delete tags except for the first in a series
of hole tags when the row merge type is kRollupRowMerge.
GroupHoleTypes Gets/Sets whether to group and tag holes by type.
HeadingPlacement Gets/Sets the placement position of the HoleTable heading.
HoleTableColumns Property that returns the HoleTableColumns collection object.
HoleTableRows Property that returns the HoleTableRows collection object.
HoleTableType Property that returns the type of the hole table.
IncludeCentermarks Gets/Sets whether to include center marks.
IncludeCircularCuts Gets/Sets whether to include extruded cuts.
IncludeCounterBoreHoleFeatures Gets/Sets whether to include counterbored hole features.
IncludeCounterSinkHoleFeatures Gets/Sets whether to include countersunk hole features.
HoleTable Object Page 1 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
IncludeDrilledHoleFeatures Gets/Sets whether to include drilled hole features.
IncludeHoleFeatures Gets/Sets whether to include hole features.
IncludeRecoveredPunchCenters Gets/Sets whether to include recovered punch center marks.
IncludeThreadedHoleFeatures Gets/Sets whether to include threaded hole features.
Layer Gets and sets the layer used by the HoleTable.
Parent Property that returns the parent object of this HoleTable.
ParentView
Property that returns the drawing view that this table is
associated with.
Position Gets/Sets the position of the HoleTable on the sheet.
PreserveTagging
Gets/Sets whether to preserve the hole tags assigned when the
table is created.
RangeBox
Property that returns a Box2D object which contains the lowerleft
and upper-right corners of a rectangle that is guaranteed to
enclose this object.
ReformatOnCustomHoleMatch
Gets/Sets whether to re-index the hole tags and resort contents
when a Match Custom Hole operation is done.
RowMergeType Gets/Sets the row merge option for the hole table.
SecondaryTagModifierOnRollup
Gets/Sets whether to include a secondary numeric tag when the
row merge type is kRollupRowMerge.
SequentialNumbering
Gets/Sets whether to replace the alphanumeric hole tags with
sequential numbering of the holes in the hole table.
ShowTitle Gets and sets whether to show the title of the hole table.
Style Gets/Sets the associated HoleTableStyle object.
Title Gets/Sets the title of the HoleTable.
TitleTextStyle Gets/Sets the text style used for the title of the table.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleTableCell.Parent, HoleTableColumn.Parent, HoleTableRow.Parent, HoleTables.Add,
HoleTables.AddByFeatureType, HoleTables.AddSelected, HoleTables.Item
Version
Introduced in version 10
HoleTable.Application Property
Parent Object: HoleTable
Description
HoleTable Object Page 2 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTable.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTable.ArrangeByPosition Property
Parent Object: HoleTable
Description
Gets/Sets whether to tags holes relative to their position on the selected view or by their relative
size.
Syntax
HoleTable.ArrangeByPosition() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.AttributeSets Property
Parent Object: HoleTable
Description
HoleTable Object Page 3 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property that returns the AttributeSets collection object associated with this object.
Syntax
HoleTable.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 10
HoleTable.ColumnHeaderTextStyle Property
Parent Object: HoleTable
Description
Gets/Sets the text style used for the column titles (headers).
Syntax
HoleTable.ColumnHeaderTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTable.DataTextStyle Property
Parent Object: HoleTable
Description
Gets/Sets the text style used for the contents of the table.
HoleTable Object Page 4 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Syntax
HoleTable.DataTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTable.Delete Method
Parent Object: HoleTable
Description
Method that deletes the HoleTable.
Syntax
HoleTable.Delete()
Version
Introduced in version 10
HoleTable.DeleteTagsOnRollup Property
Parent Object: HoleTable
Description
Gets/Sets whether to delete tags except for the first in a series of hole tags when the row merge
type is kRollupRowMerge.
Syntax
HoleTable.DeleteTagsOnRollup() As Boolean
HoleTable Object Page 5 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.Export Method
Parent Object: HoleTable
Description
Method that saves the custom table to an external file.
Syntax
HoleTable.Export( FileName As String, FileFormat As FileFormatEnum, [Options] As Variant )
Parameters
Name Type Description
FileName String
Input string that specifies the file name to export the table to. The
valid file extension for this file are .csv and .txt.
FileFormat FileFormatEnum
Input FileFormatEnum to specify the file format to export. Valid
values for export hole tables are:kTextFileCommaDelimitedFormat,
kTextFileTabDelimitedFormat,
kUnicodeTextFileCommaDelimitedFormat and
kUnicodeTextFileTabDelimitedFormat.
Options Variant
Optional input NameValueMap object that specifies additional
options for export. See Remarks for valid inputs:
This is an optional argument whose default value is null.
Remarks
Valid inputs for Options parameter:
Name Value type Valid for Export formats
TableName String kMicrosoftExcel, kMicrosoftAccess
ExportedColumns
String containing
semicolon
separated column
titles
All
HoleTable Object Page 6 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
IncludeTitle Boolean kMicrosoftExcel, kTextFileCommaDelimited,
kTextFileTabDelimited,
kUnicodeTextFileCommaDelimited,
kUnicodeTextFileTabDelimited
StartingCell String kMicrosoftExcel
Template String kMicrosoftExcel
AutoFitColumnWidth Boolean kMicrosoftExcel
Version
Introduced in version 2009
HoleTable.GetReferenceKey Method
Parent Object: HoleTable
Description
Method that generates and returns the reference key for this entity.
Syntax
HoleTable.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
HoleTable Object Page 7 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 10
HoleTable.GroupHoleTypes Property
Parent Object: HoleTable
Description
Gets/Sets whether to group and tag holes by type.
Syntax
HoleTable.GroupHoleTypes() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.HeadingPlacement Property
Parent Object: HoleTable
Description
Gets/Sets the placement position of the HoleTable heading.
Syntax
HoleTable.HeadingPlacement() As HeadingPlacementEnum
Property Value
This is a read/write property whose value is a HeadingPlacementEnum.
HoleTable Object Page 8 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 10
HoleTable.HoleTableColumns Property
Parent Object: HoleTable
Description
Property that returns the HoleTableColumns collection object.
Syntax
HoleTable.HoleTableColumns() As HoleTableColumns
Property Value
This is a read only property whose value is a HoleTableColumns.
Version
Introduced in version 10
HoleTable.HoleTableRows Property
Parent Object: HoleTable
Description
Property that returns the HoleTableRows collection object.
Syntax
HoleTable.HoleTableRows() As HoleTableRows
Property Value
This is a read only property whose value is a HoleTableRows.
HoleTable Object Page 9 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 10
HoleTable.HoleTableType Property
Parent Object: HoleTable
Description
Property that returns the type of the hole table.
Syntax
HoleTable.HoleTableType() As HoleTableTypeEnum
Property Value
This is a read only property whose value is a HoleTableTypeEnum.
Version
Introduced in version 2009
HoleTable.IncludeCentermarks Property
Parent Object: HoleTable
Description
Gets/Sets whether to include center marks.
Syntax
HoleTable.IncludeCentermarks() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTable Object Page 10 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 2009
HoleTable.IncludeCircularCuts Property
Parent Object: HoleTable
Description
Gets/Sets whether to include extruded cuts.
Syntax
HoleTable.IncludeCircularCuts() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.IncludeCounterBoreHoleFeatures
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include counterbored hole features.
Syntax
HoleTable.IncludeCounterBoreHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTable Object Page 11 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 2009
HoleTable.IncludeCounterSinkHoleFeatures
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include countersunk hole features.
Syntax
HoleTable.IncludeCounterSinkHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.IncludeDrilledHoleFeatures
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include drilled hole features.
Syntax
HoleTable.IncludeDrilledHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTable Object Page 12 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 2009
HoleTable.IncludeHoleFeatures Property
Parent Object: HoleTable
Description
Gets/Sets whether to include hole features.
Syntax
HoleTable.IncludeHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.IncludeRecoveredPunchCenters
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include recovered punch center marks.
Syntax
HoleTable.IncludeRecoveredPunchCenters() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTable Object Page 13 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 2009
HoleTable.IncludeThreadedHoleFeatures
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include threaded hole features.
Syntax
HoleTable.IncludeThreadedHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.Layer Property
Parent Object: HoleTable
Description
Gets and sets the layer used by the HoleTable.
Syntax
HoleTable.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
HoleTable Object Page 14 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Version
Introduced in version 10
HoleTable.MatchCustomHoles Method
Parent Object: HoleTable
Description
Method that specifies two or more custom holes (designated with center marks) to be the same.
Syntax
HoleTable.MatchCustomHoles( HoleTags As ObjectCollection )
Parameters
Name Type Description
HoleTags ObjectCollection
Input ObjectCollection containing HoleTag objects that represent
center marks. All the hole tags are matched to the first hole tag in the
collection. The method returns an error if any of the input hole tags
do not represent a center mark.
Version
Introduced in version 2009
HoleTable.Parent Property
Parent Object: HoleTable
Description
Property that returns the parent object of this HoleTable.
Syntax
HoleTable.Parent() As Sheet
HoleTable Object Page 15 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 10
HoleTable.ParentView Property
Parent Object: HoleTable
Description
Property that returns the drawing view that this table is associated with.
Syntax
HoleTable.ParentView() As DrawingView
Property Value
This is a read only property whose value is a DrawingView.
Version
Introduced in version 2009
HoleTable.Position Property
Parent Object: HoleTable
Description
Gets/Sets the position of the HoleTable on the sheet.
Syntax
HoleTable.Position() As Point2d
HoleTable Object Page 16 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 10
HoleTable.PreserveTagging Property
Parent Object: HoleTable
Description
Gets/Sets whether to preserve the hole tags assigned when the table is created.
Syntax
HoleTable.PreserveTagging() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.RangeBox Property
Parent Object: HoleTable
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
HoleTable.RangeBox() As Box2d
HoleTable Object Page 17 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read only property whose value is a Box2d.
Version
Introduced in version 2010
HoleTable.ReformatOnCustomHoleMatch
Property
Parent Object: HoleTable
Description
Gets/Sets whether to re-index the hole tags and resort contents when a Match Custom Hole
operation is done.
Syntax
HoleTable.ReformatOnCustomHoleMatch() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.RowMergeType Property
Parent Object: HoleTable
Description
Gets/Sets the row merge option for the hole table.
Syntax
HoleTable.RowMergeType() As RowMergeTypeEnum
HoleTable Object Page 18 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a RowMergeTypeEnum.
Version
Introduced in version 2009
HoleTable.SecondaryTagModifierOnRollup
Property
Parent Object: HoleTable
Description
Gets/Sets whether to include a secondary numeric tag when the row merge type is
kRollupRowMerge.
Syntax
HoleTable.SecondaryTagModifierOnRollup() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.SequentialNumbering Property
Parent Object: HoleTable
Description
Gets/Sets whether to replace the alphanumeric hole tags with sequential numbering of the holes in
the hole table.
Syntax
HoleTable.SequentialNumbering() As Boolean
HoleTable Object Page 19 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTable.ShowTags Method
Parent Object: HoleTable
Description
Property that indicates whether to show or hide all the hole tags associated with this table.
Syntax
HoleTable.ShowTags( Value As Boolean )
Parameters
Name Type Description
Value Boolean When set to True, show all the hole tags associated with this table.
Version
Introduced in version 10
HoleTable.ShowTitle Property
Parent Object: HoleTable
Description
Gets and sets whether to show the title of the hole table.
Syntax
HoleTable.ShowTitle() As Boolean
HoleTable Object Page 20 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2015
HoleTable.Style Property
Parent Object: HoleTable
Description
Gets/Sets the associated HoleTableStyle object.
Syntax
HoleTable.Style() As HoleTableStyle
Property Value
This is a read/write property whose value is a HoleTableStyle.
Version
Introduced in version 2009
HoleTable.Title Property
Parent Object: HoleTable
Description
Gets/Sets the title of the HoleTable.
Syntax
HoleTable.Title() As String
HoleTable Object Page 21 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTable.TitleTextStyle Property
Parent Object: HoleTable
Description
Gets/Sets the text style used for the title of the table.
Syntax
HoleTable.TitleTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTable.Type Property
Parent Object: HoleTable
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTable.Type() As ObjectTypeEnum
HoleTable Object Page 22 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTable Object Page 23 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A8.htm 16/06/2025
HoleTableCell Object
Description
The HoleTableCell object represents an individual cell in the hole table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
FormattedText Gets/Sets formatted text of the HoleTable cell.
Parent Property that returns the parent HoleTable object.
StackedTextPosition
Gets and sets the position (alignment) of the stacked text with respect to
regular text.
Text Gets/Sets the text of the HoleTable cell.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleTableRow.Item
Version
Introduced in version 10
HoleTableCell.Application Property
Parent Object: HoleTableCell
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTableCell.Application() As Object
HoleTableCell Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh301A.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTableCell.FormattedText Property
Parent Object: HoleTableCell
Description
Gets/Sets formatted text of the HoleTable cell.
Syntax
HoleTableCell.FormattedText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTableCell.Parent Property
Parent Object: HoleTableCell
Description
Property that returns the parent HoleTable object.
Syntax
HoleTableCell.Parent() As HoleTable
HoleTableCell Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh301A.htm 16/06/2025
Property Value
This is a read only property whose value is a HoleTable.
Version
Introduced in version 10
HoleTableCell.StackedTextPosition Property
Parent Object: HoleTableCell
Description
Gets and sets the position (alignment) of the stacked text with respect to regular text.
Syntax
HoleTableCell.StackedTextPosition() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2009
HoleTableCell.Text Property
Parent Object: HoleTableCell
Description
Gets/Sets the text of the HoleTable cell.
Syntax
HoleTableCell.Text() As String
HoleTableCell Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh301A.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTableCell.Type Property
Parent Object: HoleTableCell
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableCell.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTableCell Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh301A.htm 16/06/2025
HoleTableColumn Object
Description
The HoleTableColumn object defines a column within the hole table, including the column width.
Methods
Name Description
Delete Method that deletes the column from the table.
Reposition Method that repositions the column within the table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
CustomPropertyName
Property that returns the name of the custom property associated with this
column.
Parent Property that returns the parent HoleTable.
PropertyType Property that returns the property type associated with this column.
Title Specifies the title of the HoleTable column.
Type Returns an ObjectTypeEnum indicating this object's type.
UnitsFormatting Gets the units formatting of the column.
Width Gets/Sets the width of the HoleTable column.
Accessed From
HoleTableColumns.Add, HoleTableColumns.Item
Version
Introduced in version 10
HoleTableColumn.Application Property
Parent Object: HoleTableColumn
Description
HoleTableColumn Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTableColumn.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTableColumn.CustomPropertyName
Property
Parent Object: HoleTableColumn
Description
Property that returns the name of the custom property associated with this column.
Syntax
HoleTableColumn.CustomPropertyName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
HoleTableColumn.Delete Method
Parent Object: HoleTableColumn
HoleTableColumn Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Description
Method that deletes the column from the table.
Syntax
HoleTableColumn.Delete()
Version
Introduced in version 2009
HoleTableColumn.Parent Property
Parent Object: HoleTableColumn
Description
Property that returns the parent HoleTable.
Syntax
HoleTableColumn.Parent() As HoleTable
Property Value
This is a read only property whose value is a HoleTable.
Version
Introduced in version 10
HoleTableColumn.PropertyType Property
Parent Object: HoleTableColumn
Description
Property that returns the property type associated with this column.
HoleTableColumn Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Syntax
HoleTableColumn.PropertyType() As HolePropertyEnum
Property Value
This is a read only property whose value is a HolePropertyEnum.
Version
Introduced in version 2009
HoleTableColumn.Reposition Method
Parent Object: HoleTableColumn
Description
Method that repositions the column within the table.
Syntax
HoleTableColumn.Reposition( [TargetIndex] As Long, [InsertBefore] As Boolean )
Parameters
Name Type Description
TargetIndex Long
Optional input Long that specifies the existing column next to which the
column will be inserted. The valid range of values is 0 to the number of
existing columns in the table. The position remains unchanged if the index
of the column being moved is specified. A value of 0 will put the column at
the end. If not specified, a default value of 0 is used, indicating that the
column will be moved to the end.
This is an optional argument whose default value is 0.
InsertBefore Boolean
Optional input Boolean indicating if the column should be inserted before
or after the target index. If not specified, a default value of True is used
indicating that the column will be inserted before the target index. This
argument is ignored if the value of TargetIndex is 0.
This is an optional argument whose default value is True.
HoleTableColumn Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Version
Introduced in version 2009
HoleTableColumn.Title Property
Parent Object: HoleTableColumn
Description
Specifies the title of the HoleTable column.
Syntax
HoleTableColumn.Title() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTableColumn.Type Property
Parent Object: HoleTableColumn
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableColumn.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
HoleTableColumn Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Version
Introduced in version 10
HoleTableColumn.UnitsFormatting Property
Parent Object: HoleTableColumn
Description
Gets the units formatting of the column.
Syntax
HoleTableColumn.UnitsFormatting() As UnitsFormatting
Property Value
This is a read only property whose value is a UnitsFormatting.
Version
Introduced in version 2021
HoleTableColumn.Width Property
Parent Object: HoleTableColumn
Description
Gets/Sets the width of the HoleTable column.
Syntax
HoleTableColumn.Width() As Double
Property Value
This is a read/write property whose value is a Double.
HoleTableColumn Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
Version
Introduced in version 2010
HoleTableColumn Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4AA7.htm 16/06/2025
HoleTableColumns Object
Description
The HoleTableColumns collection object provides access to the existing collection of
HoleTableColumn objects.
Methods
Name Description
Add
Method that creates a new HoleTableColumn based on a property. The newly created
HoleTableColumn is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified Column object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleTable.HoleTableColumns
Version
Introduced in version 10
HoleTableColumns.Add Method
Parent Object: HoleTableColumns
Description
Method that creates a new HoleTableColumn based on a property. The newly created
HoleTableColumn is returned.
HoleTableColumns Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh64F5.htm 16/06/2025
Syntax
HoleTableColumns.Add( PropertyType As HolePropertyEnum, [CustomPropertyName] As
String, [TargetIndex] As Long, [InsertBefore] As Boolean ) As HoleTableColumn
Parameters
Name Type Description
PropertyType HolePropertyEnum
Input HolePropertyEnum that specifies the property
type to associate with the column. If
kCustomHoleProperty is specified, the
CustomPropertyName argument is required.
CustomPropertyName String
Optional input String that specifies the name of the
custom property to associate with the column. This
argument must be specified if the PropertyType is
specified to be kCustomHoleProperty, else the method
returns an error.
This is an optional argument whose default value is
"""".
TargetIndex Long
Optional input Long that specifies the existing column
next to which the new column will be inserted. The
valid range of values is 0 to the number of existing
columns in the table. A value of 0 will put the row at
the end. If not specified, a default value of 0 is used,
indicating that the column will be added at the end.
This is an optional argument whose default value is 0.
InsertBefore Boolean
Optional input Boolean indicating if the column
should be inserted before or after the target index. If
not specified, a default value of True is used. This
argument is ignored if the value of TargetIndex is 0.
This is an optional argument whose default value is
True.
Version
Introduced in version 2009
HoleTableColumns.Application Property
Parent Object: HoleTableColumns
Description
HoleTableColumns Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh64F5.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTableColumns.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTableColumns.Count Property
Parent Object: HoleTableColumns
Description
Property that returns the number of items in the collection.
Syntax
HoleTableColumns.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
HoleTableColumns.Item Property
Parent Object: HoleTableColumns
Description
Returns the specified Column object from the collection.
HoleTableColumns Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh64F5.htm 16/06/2025
Syntax
HoleTableColumns.Item( Index As Variant ) As HoleTableColumn
Property Value
This is a read only property whose value is a HoleTableColumn.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the HoleTableColumn to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string that corresponds to the title of a column header. If an out of range index or
a name of a non-existent HoleTableColumn is provided, an error will occur.
Version
Introduced in version 10
HoleTableColumns.Type Property
Parent Object: HoleTableColumns
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableColumns.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTableColumns Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh64F5.htm 16/06/2025
HoleTableRow Object
Description
The HoleTableRow object defines a row within the hole table, including the row height.
Methods
Name Description
Delete Method that deletes the HoleTableRow and the associated hole tag.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Height Gets/Sets the height of the HoleTable row.
HoleTag Property that returns the hole tag associated with this hole in the table.
Item Returns the specified Cell object from the collection.
Parent Property that returns the parent HoleTable.
ReferencedHole Property that returns the hole associated with this row.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleTableRows.Add, HoleTableRows.Item, HoleTag.Parent
Version
Introduced in version 10
HoleTableRow.Application Property
Parent Object: HoleTableRow
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
HoleTableRow Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
Syntax
HoleTableRow.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTableRow.Count Property
Parent Object: HoleTableRow
Description
Property that returns the number of items in the collection.
Syntax
HoleTableRow.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
HoleTableRow.Delete Method
Parent Object: HoleTableRow
Description
Method that deletes the HoleTableRow and the associated hole tag.
HoleTableRow Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
Syntax
HoleTableRow.Delete()
Version
Introduced in version 10
HoleTableRow.Height Property
Parent Object: HoleTableRow
Description
Gets/Sets the height of the HoleTable row.
Syntax
HoleTableRow.Height() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
HoleTableRow.HoleTag Property
Parent Object: HoleTableRow
Description
Property that returns the hole tag associated with this hole in the table.
Syntax
HoleTableRow.HoleTag() As HoleTag
HoleTableRow Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
Property Value
This is a read only property whose value is a HoleTag.
Version
Introduced in version 10
HoleTableRow.Item Property
Parent Object: HoleTableRow
Description
Returns the specified Cell object from the collection.
Syntax
HoleTableRow.Item( Index As Variant ) As HoleTableCell
Property Value
This is a read only property whose value is a HoleTableCell.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the HoleTableCell to return. This can be either a
numeric value indicating the index of the item in the collection, a string indicating
the title of a column header, or a HoleTableColumn object. If an out of range
index, a non-existent column header title, or an invalid HoleTableColumn object is
specified, an error occurs.
Version
Introduced in version 10
HoleTableRow.Parent Property
Parent Object: HoleTableRow
HoleTableRow Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
Description
Property that returns the parent HoleTable.
Syntax
HoleTableRow.Parent() As HoleTable
Property Value
This is a read only property whose value is a HoleTable.
Version
Introduced in version 10
HoleTableRow.ReferencedHole Property
Parent Object: HoleTableRow
Description
Property that returns the hole associated with this row.
Syntax
HoleTableRow.ReferencedHole() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HoleTableRow.Type Property
Parent Object: HoleTableRow
Description
HoleTableRow Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableRow.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTableRow Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8119.htm 16/06/2025
HoleTableRows Object
Description
The HoleTableRows collection object provides access to the existing collection of HoleTableRow
objects.
Methods
Name Description
Add Method that adds a row to the table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified row object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleTable.HoleTableRows
Version
Introduced in version 10
HoleTableRows.Add Method
Parent Object: HoleTableRows
Description
Method that adds a row to the table.
Syntax
HoleTableRows.Add( Hole As Object ) As HoleTableRow
HoleTableRows Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9B86.htm 16/06/2025
Parameters
Name Type Description
Hole Object
Input object that specifies the hole to be added to the table. This can either be a
DrawingCurve object (which represents the geometry of the hole to be added) or a
Centermark object. The method returns an error if the input DrawingCurve does not
represent a hole. For view based and feature type based hole tables, the method
returns an error if the input hole feature type is not included in the hole table.
Version
Introduced in version 2009
HoleTableRows.Application Property
Parent Object: HoleTableRows
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTableRows.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTableRows.Count Property
Parent Object: HoleTableRows
Description
Property that returns the number of items in the collection.
HoleTableRows Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9B86.htm 16/06/2025
Syntax
HoleTableRows.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
HoleTableRows.Item Property
Parent Object: HoleTableRows
Description
Returns the specified row object from the collection.
Syntax
HoleTableRows.Item( Index As Long ) As HoleTableRow
Property Value
This is a read only property whose value is a HoleTableRow.
Parameters
Name Type Description
Index Long
Input Long value that specifies the HoleTableRow to return. This is a numeric value
indicating the index of the item in the collection. If an out of range index is input, an
error occurs.
Version
Introduced in version 10
HoleTableRows.Type Property
Parent Object: HoleTableRows
HoleTableRows Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9B86.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableRows.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTableRows Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9B86.htm 16/06/2025
HoleTables Object
Description
The HoleTables collection object represents all the hole tables on a sheet.
Methods
Name Description
Add
Method that creates a new hole table by including all holes in the input
drawing view. Only those feature types specified in the input (or the default)
hole table style will be included. The newly created HoleTable is returned.
AddByFeatureType
Method that creates a new hole table by including only the holes that are of
the specified type in the input drawing view. The newly created HoleTable is
returned.
AddSelected
Method that creates a new hole table by including only the specified holes.
The newly created HoleTable is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified HoleTable object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Sheet.HoleTables
Version
Introduced in version 10
HoleTables.Add Method
Parent Object: HoleTables
Description
HoleTables Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
Method that creates a new hole table by including all holes in the input drawing view. Only those
feature types specified in the input (or the default) hole table style will be included. The newly
created HoleTable is returned.
Syntax
HoleTables.Add( DrawingView As DrawingView, PlacementPoint As Point2d, [HoleTableStyle]
As Variant, [Layer] As Variant ) As HoleTable
Parameters
Name Type Description
DrawingView DrawingView
Input DrawingView object that specifies the drawing view for
which the hole table is to be created.
PlacementPoint Point2d
Input Point2d object that specifies the position of the top left
corner of the table on the sheet.
HoleTableStyle Variant
Optional input HoleTableStyle object that specifies the hole table
style to use for the table. If not specified, the default style
specified by the standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for the
table. If not specified, the default layer specified by the standard is
used.
This is an optional argument whose default value is null.
Remarks
This method returns an error if the origin indicator is not set for the drawing view. Use the
DrawingView.HasOriginIndicator property to query if an origin has already been set and if not,
use DrawingView.CreateOriginIndicator method to set the origin of the drawing view. Note that
the origin of the drawing view may have already been defined for creating ordinate dimensions or
other hole tables based on this view.
Version
Introduced in version 2009
HoleTables.AddByFeatureType Method
Parent Object: HoleTables
Description
HoleTables Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
Method that creates a new hole table by including only the holes that are of the specified type in
the input drawing view. The newly created HoleTable is returned.
Syntax
HoleTables.AddByFeatureType( DrawingView As DrawingView, PlacementPoint As Point2d,
IncludeDrilledHoleFeatures As Boolean, IncludeCounterBoreHoleFeatures As Boolean,
IncludeCounterSinkHoleFeatures As Boolean, IncludeThreadedHoleFeatures As Boolean,
IncludeCircularCuts As Boolean, IncludeCentermarks As Boolean,
IncludeRecoveredPunchCenters As Boolean, [HoleTableStyle] As Variant, [Layer] As Variant )
As HoleTable
Parameters
Name Type Description
DrawingView DrawingView
Input DrawingView object that specifies the
drawing view for which the hole table is to be
created.
PlacementPoint Point2d
Input Point2d object that specifies the position
of the top left corner of the table on the sheet.
IncludeDrilledHoleFeatures Boolean
Input Boolean that specifies whether to include
drilled hole features.
IncludeCounterBoreHoleFeatures Boolean
Input Boolean that specifies whether to include
counterbored hole features.
IncludeCounterSinkHoleFeatures Boolean
Input Boolean that specifies whether to include
countersunk hole features.
IncludeThreadedHoleFeatures Boolean
Input Boolean that specifies whether to include
threaded hole features.
IncludeCircularCuts Boolean
Input Boolean that specifies whether to include
circular extruded cuts. Circular cuts are
recognized only as drilled thru or drilled blind
holes, and do not include mid-plane extrusions.
IncludeCentermarks Boolean
Input Boolean that specifies whether to include
center marks. Center marks with visibility
turned off are not included in the hole table.
IncludeRecoveredPunchCenters Boolean
Input Boolean that specifies whether to include
recovered punch center marks. Punch center
marks with visibility turned off are not included
in the hole table.
HoleTableStyle Variant
Optional input HoleTableStyle object that
specifies the hole table style to use for the table.
If not specified, the default style specified by the
standard is used.
This is an optional argument whose default
value is null.
Layer Variant Optional input Layer object that specifies the
layer to use for the table. If not specified, the
default layer specified by the standard is used.
HoleTables Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
This is an optional argument whose default
value is null.
Remarks
This method returns an error if the origin indicator is not set for the drawing view. Use the
DrawingView.HasOriginIndicator property to query if an origin has already been set and if not,
use DrawingView.CreateOriginIndicator method to set the origin of the drawing view. Note that
the origin of the drawing view may have already been defined for creating ordinate dimensions or
other hole tables based on this view.
Samples
Name Description
Creating hole tables This sample demonstrates the creation of hole tables in a drawing.
Version
Introduced in version 2009
HoleTables.AddSelected Method
Parent Object: HoleTables
Description
Method that creates a new hole table by including only the specified holes. The newly created
HoleTable is returned.
Syntax
HoleTables.AddSelected( Holes As ObjectCollection, PlacementPoint As Point2d,
[HoleTableStyle] As Variant, [Layer] As Variant ) As HoleTable
Parameters
Name Type Description
Holes ObjectCollection
Input ObjectCollection which specifies the holes to create the
table with. The collection may contain DrawingCurve objects
that represent hole features or circular extrude cuts, or
Centermark objects (which include recovered punch centers).
All the holes must belong to the same drawing view, else an
error will occur.
PlacementPoint Point2d
HoleTables Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
Input Point2d object that specifies the position of the top left
corner of the table on the sheet.
HoleTableStyle Variant
Optional input HoleTableStyle object that specifies the hole
table style to use for the table. If not specified, the default style
specified by the standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use for
the table. If not specified, the default layer specified by the
standard is used.
This is an optional argument whose default value is null.
Remarks
This method returns an error if the origin indicator is not set for the drawing view. Use the
DrawingView.HasOriginIndicator property to query if an origin has already been set and if not,
use DrawingView.CreateOriginIndicator method to set the origin of the drawing view. Note that
the origin of the drawing view may have already been defined for creating ordinate dimensions or
other hole tables based on this view.
Version
Introduced in version 2009
HoleTables.Application Property
Parent Object: HoleTables
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTables.Application() As Object
Property Value
This is a read only property whose value is an Object.
HoleTables Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
Version
Introduced in version 10
HoleTables.Count Property
Parent Object: HoleTables
Description
Property that returns the number of items in the collection.
Syntax
HoleTables.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 10
HoleTables.Item Property
Parent Object: HoleTables
Description
Returns the specified HoleTable object from the collection.
Syntax
HoleTables.Item( Index As Variant ) As HoleTable
Property Value
This is a read only property whose value is a HoleTable.
Parameters
HoleTables Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
Name Type Description
Index Variant
Input Variant value that specifies the HoleTable to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the HoleTable name. If an out of range index or a name of a nonexistent
HoleTable is provided, an error will occur .
Version
Introduced in version 10
HoleTables.Type Property
Parent Object: HoleTables
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTables.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTables Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB22B.htm 16/06/2025
HoleTableStyle Object
Derived from: Style Object
Description
The HoleTableStyle object represents a hole table style in a drawing. The properties and methods listed
below are in addition to those supported by the Style object.
Methods
Name Description
AddColumn Method that adds a column to the list of default columns in the style.
ConvertToLocal Method that creates a local cached copy of a global style and returns the local style.
Copy Method that creates a new local Style object. The newly created style is returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
GetReferenceKey Method that generates and returns the reference key for this entity.
RemoveAllColumns Method that removes all columns from the style.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same name
is found in the repository, that style is updated.
UpdateFromGlobal Method that updates this style from the global repository.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
ArrangeByPosition
Gets and sets whether to tags holes relative to their position on the
selected view or by their relative size.
ColumnHeaderTextStyle Gets and sets the text style used for the column titles (headers).
Comments Gets and sets comments associated with the style.
DataTextStyle Gets and sets the text style used for the contents of the table.
DeleteTagsOnRollup
Gets and sets whether to delete tags except for the first in a series of
hole tags when the row merge type is kRollupRowMerge.
GroupHoleTypes Gets and sets whether to group and tag holes by type.
HeadingPlacement Gets and sets the location of the heading (title).
IncludeCentermarks Gets and sets whether to include center marks.
IncludeCircularCuts Gets and sets whether to include extruded cuts.
IncludeCounterBoreHoleFeatures Gets and sets whether to include counterbored hole features.
IncludeCounterSinkHoleFeatures Gets and sets whether to include countersunk hole features.
IncludeDrilledHoleFeatures Gets and sets whether to include drilled hole features.
IncludeHoleFeatures
Gets and sets whether to include hole features. Applies only to view
based hole tables.
IncludeRecoveredPunchCenters Gets and sets whether to include recovered punch center marks.
IncludeThreadedHoleFeatures Gets and sets whether to include threaded hole features.
HoleTableStyle Object Page 1 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
InsideLineColor Gets and sets the color of the inner lines of the table.
InsideLineWeight Gets and sets the line weight of the inner lines of the table.
InternalName
Property that returns the internal name of the style. The name is the
internal English name of the standard style. This name will remain
constant and is not affected by locale. This name is never displayed to
the user. Note that this name is not guaranteed to be unique.
InUse Property that indicates if this style is in use.
Name Gets/Sets the name of the Style.
OutsideLineColor Gets and sets the color of the outer lines of the table.
OutsideLineWeight Gets and sets the line weight of the outer lines of the table.
Parent Property returning the parent of this object.
PreserveTagging
Gets and sets whether to preserve the hole tags assigned when the table
is created.
ReformatOnCustomHoleMatch
Gets and sets whether to re-index the hole tags and resort contents
when a Match Custom Hole operation is done.
RowMergeType Gets and sets the row merge option for the hole table.
SecondaryTagModifierOnRollup
Gets and sets whether to include a secondary numeric tag when the
row merge type is kRollupRowMerge.
SequentialNumbering
Gets and sets whether to replace the alphanumeric hole tags with
sequential numbering of the holes in the hole table.
StyleLocation
Property that returns the location of this style, i.e. local to the
document, cached locally in the document, exists in the library. Styles
that exist in the library cannot be edited.
StyleType Gets the type of the style.
Title Gets and sets the title of the HoleTable.
TitleTextStyle Gets and sets the text style used for the title of the table.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate
Property that gets the up-to-date status of the style against the global
repository.
UseLeaderForTags
Gets and sets whether to generate a leader for any hole tag dragged
away from the hole with which it is associated.
Accessed From
HoleTable.Style, HoleTableStylesEnumerator.Item, ObjectDefaultsStyle.HoleTableStyle
Version
Introduced in version 2009
HoleTableStyle.AddColumn Method
Parent Object: HoleTableStyle
Description
Method that adds a column to the list of default columns in the style.
HoleTableStyle Object Page 2 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Syntax
HoleTableStyle.AddColumn( PropertyType As HolePropertyEnum, [CustomPropertyName] As String,
[Title] As String, [Width] As Double, [TitleHorizontalJustification] As HorizontalTextAlignmentEnum,
[ValueHorizontalJustification] As HorizontalTextAlignmentEnum )
Parameters
Name Type Description
PropertyType HolePropertyEnum
Input HolePropertyEnum that specifies the
property type to associate with the column.
If kCustomHoleProperty is specified, the
CustomPropertyName argument is
required.
CustomPropertyName String
Optional input String that specifies the
name of the custom property to associate
with the column. This argument must be
specified if the PropertyType is specified
to be kCustomHoleProperty, else the
method returns an error.
This is an optional argument whose default
value is """".
Title String
Optional input String that specifies the
column title. If not specified, the property
name is used.
This is an optional argument whose default
value is """".
Width Double
Optional input Double that specifies the
width of the column. If not specified, the
default width value is used. A value of 0
indicates the default width value.
This is an optional argument whose default
value is 0.0.
TitleHorizontalJustification HorizontalTextAlignmentEnum
Optional input
HorizontalTextAlignmentEnum that
specifies the text justification for the
column title.
This is an optional argument whose default
value is 19969.
ValueHorizontalJustification HorizontalTextAlignmentEnum
Optional input
HorizontalTextAlignmentEnum that
specifies the text justification for the
column values.
This is an optional argument whose default
value is 19969.
HoleTableStyle Object Page 3 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2011
HoleTableStyle.Application Property
Parent Object: HoleTableStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
HoleTableStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HoleTableStyle.ArrangeByPosition Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to tags holes relative to their position on the selected view or by their relative size.
Syntax
HoleTableStyle.ArrangeByPosition() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle Object Page 4 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
HoleTableStyle.ColumnHeaderTextStyle
Property
Parent Object: HoleTableStyle
Description
Gets and sets the text style used for the column titles (headers).
Syntax
HoleTableStyle.ColumnHeaderTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTableStyle.Comments Property
Parent Object: HoleTableStyle
Description
Gets and sets comments associated with the style.
Syntax
HoleTableStyle.Comments() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
HoleTableStyle.ConvertToLocal Method
Parent Object: HoleTableStyle
HoleTableStyle Object Page 5 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
HoleTableStyle.ConvertToLocal() As Style
Version
Introduced in version 2009
HoleTableStyle.Copy Method
Parent Object: HoleTableStyle
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
HoleTableStyle.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String
Input String that specifies the name for the new style. This name must be unique with
respect to all other styles of a similar type in the document. That is, if a dimension style is
being copied, the name must be unique with respect to all the other dimension styles. If it is
not unique the method will fail.
Version
Introduced in version 2009
HoleTableStyle.DataTextStyle Property
Parent Object: HoleTableStyle
Description
Gets and sets the text style used for the contents of the table.
HoleTableStyle Object Page 6 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Syntax
HoleTableStyle.DataTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTableStyle.Delete Method
Parent Object: HoleTableStyle
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
HoleTableStyle.Delete()
Version
Introduced in version 2009
HoleTableStyle.DeleteTagsOnRollup Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to delete tags except for the first in a series of hole tags when the row merge type is
kRollupRowMerge.
Syntax
HoleTableStyle.DeleteTagsOnRollup() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTableStyle Object Page 7 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2009
HoleTableStyle.GetReferenceKey Method
Parent Object: HoleTableStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
HoleTableStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge,
EdgeUse and Vertex objects). A key context is created using the CreateKeyContext
method of the ReferenceKeyManager object. For all other object types, the key
context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2009
HoleTableStyle.GroupHoleTypes Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to group and tag holes by type.
Syntax
HoleTableStyle.GroupHoleTypes() As Boolean
HoleTableStyle Object Page 8 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.HeadingPlacement Property
Parent Object: HoleTableStyle
Description
Gets and sets the location of the heading (title).
Syntax
HoleTableStyle.HeadingPlacement() As HeadingPlacementEnum
Property Value
This is a read/write property whose value is a HeadingPlacementEnum.
Version
Introduced in version 2009
HoleTableStyle.IncludeCentermarks Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include center marks.
Syntax
HoleTableStyle.IncludeCentermarks() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTableStyle Object Page 9 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2009
HoleTableStyle.IncludeCircularCuts Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include extruded cuts.
Syntax
HoleTableStyle.IncludeCircularCuts() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.IncludeCounterBoreHoleFeatures
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include counterbored hole features.
Syntax
HoleTableStyle.IncludeCounterBoreHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle Object Page 10 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
HoleTableStyle.IncludeCounterSinkHoleFeatures
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include countersunk hole features.
Syntax
HoleTableStyle.IncludeCounterSinkHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.IncludeDrilledHoleFeatures
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include drilled hole features.
Syntax
HoleTableStyle.IncludeDrilledHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.IncludeHoleFeatures Property
HoleTableStyle Object Page 11 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Parent Object: HoleTableStyle
Description
Gets and sets whether to include hole features. Applies only to view based hole tables.
Syntax
HoleTableStyle.IncludeHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.IncludeRecoveredPunchCenters
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include recovered punch center marks.
Syntax
HoleTableStyle.IncludeRecoveredPunchCenters() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.IncludeThreadedHoleFeatures
Property
Parent Object: HoleTableStyle
HoleTableStyle Object Page 12 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Description
Gets and sets whether to include threaded hole features.
Syntax
HoleTableStyle.IncludeThreadedHoleFeatures() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.InsideLineColor Property
Parent Object: HoleTableStyle
Description
Gets and sets the color of the inner lines of the table.
Syntax
HoleTableStyle.InsideLineColor() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 2009
HoleTableStyle.InsideLineWeight Property
Parent Object: HoleTableStyle
Description
Gets and sets the line weight of the inner lines of the table.
HoleTableStyle Object Page 13 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Syntax
HoleTableStyle.InsideLineWeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
HoleTableStyle.InternalName Property
Parent Object: HoleTableStyle
Description
Property that returns the internal name of the style. The name is the internal English name of the standard
style. This name will remain constant and is not affected by locale. This name is never displayed to the
user. Note that this name is not guaranteed to be unique.
Syntax
HoleTableStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
HoleTableStyle.InUse Property
Parent Object: HoleTableStyle
Description
Property that indicates if this style is in use.
Syntax
HoleTableStyle.InUse() As Boolean
HoleTableStyle Object Page 14 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.Name Property
Parent Object: HoleTableStyle
Description
Gets/Sets the name of the Style.
Syntax
HoleTableStyle.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
HoleTableStyle.OutsideLineColor Property
Parent Object: HoleTableStyle
Description
Gets and sets the color of the outer lines of the table.
Syntax
HoleTableStyle.OutsideLineColor() As Color
Property Value
This is a read/write property whose value is a Color.
HoleTableStyle Object Page 15 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2009
HoleTableStyle.OutsideLineWeight Property
Parent Object: HoleTableStyle
Description
Gets and sets the line weight of the outer lines of the table.
Syntax
HoleTableStyle.OutsideLineWeight() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
HoleTableStyle.Parent Property
Parent Object: HoleTableStyle
Description
Property returning the parent of this object.
Syntax
HoleTableStyle.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HoleTableStyle Object Page 16 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
HoleTableStyle.PreserveTagging Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to preserve the hole tags assigned when the table is created.
Syntax
HoleTableStyle.PreserveTagging() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.ReformatOnCustomHoleMatch
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to re-index the hole tags and resort contents when a Match Custom Hole operation
is done.
Syntax
HoleTableStyle.ReformatOnCustomHoleMatch() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.RemoveAllColumns Method
Parent Object: HoleTableStyle
HoleTableStyle Object Page 17 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Description
Method that removes all columns from the style.
Syntax
HoleTableStyle.RemoveAllColumns()
Version
Introduced in version 2011
HoleTableStyle.RowMergeType Property
Parent Object: HoleTableStyle
Description
Gets and sets the row merge option for the hole table.
Syntax
HoleTableStyle.RowMergeType() As RowMergeTypeEnum
Property Value
This is a read/write property whose value is a RowMergeTypeEnum.
Version
Introduced in version 2009
HoleTableStyle.SaveToGlobal Method
Parent Object: HoleTableStyle
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
Syntax
HoleTableStyle.SaveToGlobal()
HoleTableStyle Object Page 18 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2009
HoleTableStyle.SecondaryTagModifierOnRollup
Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to include a secondary numeric tag when the row merge type is kRollupRowMerge.
Syntax
HoleTableStyle.SecondaryTagModifierOnRollup() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.SequentialNumbering Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to replace the alphanumeric hole tags with sequential numbering of the holes in the
hole table.
Syntax
HoleTableStyle.SequentialNumbering() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTableStyle Object Page 19 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Version
Introduced in version 2009
HoleTableStyle.StyleLocation Property
Parent Object: HoleTableStyle
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the document,
exists in the library. Styles that exist in the library cannot be edited.
Syntax
HoleTableStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2009
HoleTableStyle.StyleType Property
Parent Object: HoleTableStyle
Description
Gets the type of the style.
Syntax
HoleTableStyle.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2009
HoleTableStyle Object Page 20 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
HoleTableStyle.Title Property
Parent Object: HoleTableStyle
Description
Gets and sets the title of the HoleTable.
Syntax
HoleTableStyle.Title() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
HoleTableStyle.TitleTextStyle Property
Parent Object: HoleTableStyle
Description
Gets and sets the text style used for the title of the table.
Syntax
HoleTableStyle.TitleTextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
HoleTableStyle.Type Property
Parent Object: HoleTableStyle
HoleTableStyle Object Page 21 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableStyle.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
HoleTableStyle.UpdateFromGlobal Method
Parent Object: HoleTableStyle
Description
Method that updates this style from the global repository.
Syntax
HoleTableStyle.UpdateFromGlobal()
Version
Introduced in version 2009
HoleTableStyle.UpToDate Property
Parent Object: HoleTableStyle
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
HoleTableStyle.UpToDate() As Boolean
HoleTableStyle Object Page 22 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle.UseLeaderForTags Property
Parent Object: HoleTableStyle
Description
Gets and sets whether to generate a leader for any hole tag dragged away from the hole with which it is
associated.
Syntax
HoleTableStyle.UseLeaderForTags() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
HoleTableStyle Object Page 23 of 23
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3277.htm 16/06/2025
HoleTableStylesEnumerator Object
Description
The HoleTableStylesEnumerator object provides access to the existing HoleTableStyle objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified HoleTableStyle object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingStylesManager.HoleTableStyles
Version
Introduced in version 2009
HoleTableStylesEnumerator.Application
Property
Parent Object: HoleTableStylesEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTableStylesEnumerator.Application() As Object
HoleTableStylesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh629F.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
HoleTableStylesEnumerator.Count Property
Parent Object: HoleTableStylesEnumerator
Description
Property that returns the number of items in the collection.
Syntax
HoleTableStylesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
HoleTableStylesEnumerator.Item Property
Parent Object: HoleTableStylesEnumerator
Description
Returns the specified HoleTableStyle object from the collection.
Syntax
HoleTableStylesEnumerator.Item( Index As Variant ) As HoleTableStyle
HoleTableStylesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh629F.htm 16/06/2025
Property Value
This is a read only property whose value is a HoleTableStyle.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the HoleTableStyle to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the HoleTableStyle name. If an out of range index or a name of a nonexistent
HoleTableStyle is provided, an error will occur.
Version
Introduced in version 2009
HoleTableStylesEnumerator.Type Property
Parent Object: HoleTableStylesEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTableStylesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
HoleTableStylesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh629F.htm 16/06/2025
HoleTag Object
Description
The HoleTag object represents a hole tag associated with a hole table row.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DimensionStyle Property that gets and sets the associated DimensionStyle object.
FormattedText Gets/Sets formatted text of the HoleTag.
Layer Property that gets and sets the layer associated with this object.
Leader Property that returns the Leader object associated with the hole tag.
Parent Property that returns the parent HoleTableRow object.
Position Gets/Sets the position of the HoleTag on the sheet.
RangeBox
Property that returns a Box2D object which contains the lower-left and
upper-right corners of a rectangle that is guaranteed to enclose this object.
ShowLeader Property that gets and sets whether to display the leader line.
StackedTextPosition
Gets and sets the position (alignment) of the stacked text with respect to
regular text.
Text Gets/Sets the text of the HoleTag.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Property that gets and sets whether the tag is visible.
Accessed From
HoleTableRow.HoleTag
Version
Introduced in version 10
HoleTag.Application Property
Parent Object: HoleTag
Description
HoleTag Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTag.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
HoleTag.DimensionStyle Property
Parent Object: HoleTag
Description
Property that gets and sets the associated DimensionStyle object.
Syntax
HoleTag.DimensionStyle() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 10
HoleTag.FormattedText Property
Parent Object: HoleTag
Description
Gets/Sets formatted text of the HoleTag.
HoleTag Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.FormattedText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTag.Layer Property
Parent Object: HoleTag
Description
Property that gets and sets the layer associated with this object.
Syntax
HoleTag.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 11
HoleTag.Leader Property
Parent Object: HoleTag
Description
Property that returns the Leader object associated with the hole tag.
HoleTag Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.Leader() As Leader
Property Value
This is a read only property whose value is a Leader.
Version
Introduced in version 2009
HoleTag.Parent Property
Parent Object: HoleTag
Description
Property that returns the parent HoleTableRow object.
Syntax
HoleTag.Parent() As HoleTableRow
Property Value
This is a read only property whose value is a HoleTableRow.
Version
Introduced in version 10
HoleTag.Position Property
Parent Object: HoleTag
Description
Gets/Sets the position of the HoleTag on the sheet.
HoleTag Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 10
HoleTag.RangeBox Property
Parent Object: HoleTag
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
HoleTag.RangeBox() As Box2d
Property Value
This is a read only property whose value is a Box2d.
Version
Introduced in version 2010
HoleTag.ShowLeader Property
Parent Object: HoleTag
Description
Property that gets and sets whether to display the leader line.
HoleTag Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.ShowLeader() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
HoleTag.StackedTextPosition Property
Parent Object: HoleTag
Description
Gets and sets the position (alignment) of the stacked text with respect to regular text.
Syntax
HoleTag.StackedTextPosition() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2009
HoleTag.Text Property
Parent Object: HoleTag
Description
Gets/Sets the text of the HoleTag.
HoleTag Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.Text() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
HoleTag.Type Property
Parent Object: HoleTag
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTag.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
HoleTag.Visible Property
Parent Object: HoleTag
Description
Property that gets and sets whether the tag is visible.
HoleTag Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
Syntax
HoleTag.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
HoleTag Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA833.htm 16/06/2025
HoleTapInfo Object
Derived from: StandardThreadInfo Object
Description
This object is really a StandardThreadInfo object with the addition of the property specifying
which of the various diameter dimensions to use to model the cylindrical surface of the hole.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Class
Property that returns the thread class. For example a valid class for an
inch internal thread is '2B'. A valid class for a metric external thread
is '6g'.
CustomThreadDesignation
Indicates the custom thread designation from the Custom Thread
Designation column of the thread data spreadsheet.
FullThreadDepth Gets whether this thread is the full length of the cylinder or cone.
Internal Gets and sets whether this is an internal thread or external (False).
MajorDiameterMax
Property that gets and sets the maximum major diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
MajorDiameterMin
Property that gets and sets the minimum major diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
Metric Gets and sets whether this thread is metric or not.
MinorDiameterMax
Property that returns the maximum minor diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
MinorDiameterMin
Property that returns the minimum minor diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
NominalSize
Property that returns the description of the nominal size. Any string is
valid but the following examples are typical of the strings used, '1.6',
'M4', and '9/16'.
Pitch
Property that returns the actual thread pitch. This value is used when
displaying the threads in the model. This value is in millimeters if the
Metric argument is True and inches if False.
PitchDiameterMax
HoleTapInfo Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Property that returns the maximum pitch diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
PitchDiameterMin
Property that returns the minimum pitch diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
RightHanded
Gets and sets whether this is a right handed thread or left handed
(False).
TapDrillDiameter
Property that returns the maximum pitch diameter. This is in
millimeters if the Metric argument is True and inches if False. This
property contains a Double value or can be Nothing if the value is not
set.
ThreadBasePoints
Property that returns an enumerator of Point objects indicating the
base points for the thread. Typically, there is only one item in the
collection. The exception is a hole feature based on multiple sketch
points, in which case there are as many Point objects returned as there
are sketch points. The point accounts for any offsets applied to the
thread. The property returns a point only when the ThreadInfo object
is obtained from a feature and returns Nothing in the forward create
scenario.
ThreadDepth
Property that returns the parameter that controls the depth of the
thread. Even though the parameter for the thread depth is always
created and accessible through this property, it is only used in the case
where the FullDepth property is False.
ThreadDesignation
Property that returns a string that contains the thread designation. This
is the full thread designation that is used in a drawing for the thread
callout.
ThreadDirection
Property that returns the direction of the thread. The property returns
a vector only when the ThreadInfo object is obtained from a feature
and returns Nothing in the forward create scenario.
ThreadType Gets and sets the thread type.
ThreadTypeIdentifier
Property that returns the string that identifies the thread type. This
string is not localized and should not be changed by the user. The
thread type is the name of the sheet in the Thread.xls file.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
HoleFeatures.CreateTapInfo
Samples
Name Description
Hole Feature - Through holes
(RegularAndTapped)
This sample demonstrates the creation of through holes,
both regular and tapped.
HoleTapInfo Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.Application Property
Parent Object: HoleTapInfo
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleTapInfo.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
HoleTapInfo.Class Property
Parent Object: HoleTapInfo
Description
Property that returns the thread class. For example a valid class for an inch internal thread is '2B'.
A valid class for a metric external thread is '6g'.
Syntax
HoleTapInfo.Class() As String
Property Value
This is a read/write property whose value is a String.
HoleTapInfo Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.CustomThreadDesignation
Property
Parent Object: HoleTapInfo
Description
Indicates the custom thread designation from the Custom Thread Designation column of the
thread data spreadsheet.
Syntax
HoleTapInfo.CustomThreadDesignation() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 9
HoleTapInfo.FullThreadDepth Property
Parent Object: HoleTapInfo
Description
Gets whether this thread is the full length of the cylinder or cone.
Syntax
HoleTapInfo.FullThreadDepth() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTapInfo Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 2010
HoleTapInfo.Internal Property
Parent Object: HoleTapInfo
Description
Gets and sets whether this is an internal thread or external (False).
Syntax
HoleTapInfo.Internal() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
HoleTapInfo.MajorDiameterMax Property
Parent Object: HoleTapInfo
Description
Property that gets and sets the maximum major diameter. This is in millimeters if the Metric
argument is True and inches if False. This property contains a Double value or can be Nothing if
the value is not set.
Syntax
HoleTapInfo.MajorDiameterMax() As Variant
Property Value
This is a read/write property whose value is a Variant.
HoleTapInfo Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.MajorDiameterMin Property
Parent Object: HoleTapInfo
Description
Property that gets and sets the minimum major diameter. This is in millimeters if the Metric
argument is True and inches if False. This property contains a Double value or can be Nothing if
the value is not set.
Syntax
HoleTapInfo.MajorDiameterMin() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 5
HoleTapInfo.Metric Property
Parent Object: HoleTapInfo
Description
Gets and sets whether this thread is metric or not.
Syntax
HoleTapInfo.Metric() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleTapInfo Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.MinorDiameterMax Property
Parent Object: HoleTapInfo
Description
Property that returns the maximum minor diameter. This is in millimeters if the Metric argument
is True and inches if False. This property contains a Double value or can be Nothing if the value is
not set.
Syntax
HoleTapInfo.MinorDiameterMax() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 5
HoleTapInfo.MinorDiameterMin Property
Parent Object: HoleTapInfo
Description
Property that returns the minimum minor diameter. This is in millimeters if the Metric argument is
True and inches if False. This property contains a Double value or can be Nothing if the value is
not set.
Syntax
HoleTapInfo.MinorDiameterMin() As Variant
Property Value
This is a read/write property whose value is a Variant.
HoleTapInfo Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.NominalSize Property
Parent Object: HoleTapInfo
Description
Property that returns the description of the nominal size. Any string is valid but the following
examples are typical of the strings used, '1.6', 'M4', and '9/16'.
Syntax
HoleTapInfo.NominalSize() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 9
HoleTapInfo.Pitch Property
Parent Object: HoleTapInfo
Description
Property that returns the actual thread pitch. This value is used when displaying the threads in the
model. This value is in millimeters if the Metric argument is True and inches if False.
Syntax
HoleTapInfo.Pitch() As Double
Property Value
This is a read only property whose value is a Double.
HoleTapInfo Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 11
HoleTapInfo.PitchDiameterMax Property
Parent Object: HoleTapInfo
Description
Property that returns the maximum pitch diameter. This is in millimeters if the Metric argument is
True and inches if False. This property contains a Double value or can be Nothing if the value is
not set.
Syntax
HoleTapInfo.PitchDiameterMax() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 5
HoleTapInfo.PitchDiameterMin Property
Parent Object: HoleTapInfo
Description
Property that returns the minimum pitch diameter. This is in millimeters if the Metric argument is
True and inches if False. This property contains a Double value or can be Nothing if the value is
not set.
Syntax
HoleTapInfo.PitchDiameterMin() As Variant
Property Value
This is a read/write property whose value is a Variant.
HoleTapInfo Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.RightHanded Property
Parent Object: HoleTapInfo
Description
Gets and sets whether this is a right handed thread or left handed (False).
Syntax
HoleTapInfo.RightHanded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
HoleTapInfo.TapDrillDiameter Property
Parent Object: HoleTapInfo
Description
Property that returns the maximum pitch diameter. This is in millimeters if the Metric argument is
True and inches if False. This property contains a Double value or can be Nothing if the value is
not set.
Syntax
HoleTapInfo.TapDrillDiameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
HoleTapInfo Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Version
Introduced in version 5
HoleTapInfo.ThreadBasePoints Property
Parent Object: HoleTapInfo
Description
Property that returns an enumerator of Point objects indicating the base points for the thread.
Typically, there is only one item in the collection. The exception is a hole feature based on
multiple sketch points, in which case there are as many Point objects returned as there are sketch
points. The point accounts for any offsets applied to the thread. The property returns a point only
when the ThreadInfo object is obtained from a feature and returns Nothing in the forward create
scenario.
Syntax
HoleTapInfo.ThreadBasePoints() As ObjectsEnumerator
Property Value
This is a read only property whose value is an ObjectsEnumerator.
Version
Introduced in version 11
HoleTapInfo.ThreadDepth Property
Parent Object: HoleTapInfo
Description
Property that returns the parameter that controls the depth of the thread. Even though the
parameter for the thread depth is always created and accessible through this property, it is only
used in the case where the FullDepth property is False.
Syntax
HoleTapInfo.ThreadDepth() As Parameter
HoleTapInfo Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
HoleTapInfo.ThreadDesignation Property
Parent Object: HoleTapInfo
Description
Property that returns a string that contains the thread designation. This is the full thread
designation that is used in a drawing for the thread callout.
Syntax
HoleTapInfo.ThreadDesignation() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 9
HoleTapInfo.ThreadDirection Property
Parent Object: HoleTapInfo
Description
Property that returns the direction of the thread. The property returns a vector only when the
ThreadInfo object is obtained from a feature and returns Nothing in the forward create scenario.
Syntax
HoleTapInfo.ThreadDirection() As Vector
HoleTapInfo Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Property Value
This is a read only property whose value is a Vector.
Version
Introduced in version 11
HoleTapInfo.ThreadType Property
Parent Object: HoleTapInfo
Description
Gets and sets the thread type.
Syntax
HoleTapInfo.ThreadType() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
HoleTapInfo.ThreadTypeIdentifier Property
Parent Object: HoleTapInfo
Description
Property that returns the string that identifies the thread type. This string is not localized and
should not be changed by the user. The thread type is the name of the sheet in the Thread.xls file.
Syntax
HoleTapInfo.ThreadTypeIdentifier() As String
HoleTapInfo Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2008
HoleTapInfo.Type Property
Parent Object: HoleTapInfo
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleTapInfo.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
HoleTapInfo Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF53.htm 16/06/2025
HoleThreadNote Object
Derived from: DiameterGeneralDimension Object
Description
The HoleThreadNote object represents either a hole note or a thread note on a sheet and derives from
the DiameterGeneralDimension object.
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
Method that sets the data associated with an inspection dimension.
This method automatically sets the IsInspectionDimension property to
True, if it isn't already.
ShowAllExtensionLines
Method that un-hides all the extension lines associated with this
dimension. If there are no hidden extension lines associated with this
dimension, this method does nothing and returns a success.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
ArrowheadsInside Gets and sets the ArrowheadsInside setting.
Attached
Indicates whether this dimension is attached to anything. If not, it is
considered orphaned and can be removed.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
DimensionLine Property that returns the dimension line geometry of the dimension.
Edge Gets and sets the hole/thread edge associated with the note.
ExtensionLineOne Property that returns the first extension line of the dimension.
ExtensionLineTwo Property that returns the second extension line of the dimension.
FirstArrowheadInside
Read-write property that gets and sets whether the first arrowhead is
inside or outside.
FirstArrowheadType Read-write property that gets and sets the type of the first arrowhead.
FormattedHoleThreadNote
Gets and sets the fully formatted string that defines the contents of
the hole/thread note.
HoleThreadNote Object Page 1 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
FormattedQuantityNote Gets and sets the fully formatted string that defines the quantity note.
GeneralDimensionType Returns an enum indicating the type of general dimension.
HideValue Gets and sets the HideValue setting.
Intent Gets and sets the geometry associated with the dimension.
IsHoleNote
Property that indicates if this note is for a hole or thread feature.
Returns True if it is for a hole note. This is true even in the case
where the hole is tapped and has threads. Returns False in the case
where the note is for a thread feature. There is some difference in
behavior between the two and this property provides a convenient
way to determine the expected behavior.
IsInspectionDimension Gets and sets whether this is an inspection dimension.
Layer Gets and sets the layer applied to this dimension.
LeaderFromCenter
Gets and sets whether the leader starts from the center of the arc or
the circle.
ModelValue
Property that gets the dimension value as defined in the model or as
measured in the drawing.
ModelValueOverridden
Read-write property that gets and sets whether the model value is
overridden for the dimension.
OverrideModelValue Gets and sets the NominalValue setting.
Parent Property that returns the parent sheet of the object.
Precision Gets and sets the Precision setting.
QuantityDefinition Gets and sets how the quantity value is set for the note.
Retrieved
Property that indicates whether the dimension was created as a result
of retrieving it either from the model or a drawing view sketch. If
True, the RetrievedFrom property returns the object that the
dimension was retrieved from.
RetrievedFrom
Property that returns the object that this dimension was retrieved
from. Possible return objects include all sketch constraint objects that
derive from DimensionConstraint and their proxies,
FeatureDimension and FeatureDimensionProxy. The property returns
Nothing if the Retrieved property returns False.
SecondArrowheadInside
Read-write property that gets and sets whether the second arrowhead
is inside or outside.
SecondArrowheadType
Read-write property that gets and sets the type of the second
arrowhead.
SingleDimensionLine Gets and sets whether to use a single dimension line.
Style Gets and sets the DimensionStyle associated with the dimension.
TapDrill Gets and sets whether to set the hole note as tap drill type.
Text Gets and sets the DimensionText setting.
Tolerance
Property that returns the Tolerance object associated with this
dimension.
TolerancePrecision Gets and sets the precision of the tolerance text for the dimension.
Type Returns an ObjectTypeEnum indicating this object's type.
UseCustomThreadDesignation
Gets and sets whether to use the custom thread designation, as
defined in the Thread.xls spreadsheet for thread notes.
UseDefaultFormat Gets and sets whether to use the default format for hole notes.
UsePartUnits
Gets and sets whether to use model units or the units specified by
dimension style.
HoleThreadNote Object Page 2 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Accessed From
HoleThreadNotes.Add, HoleThreadNotes.Item
Samples
Name Description
Create thread note This sample demonstrates the creation of a thread note on a drawing view.
Version
Introduced in version 2010
HoleThreadNote.Application Property
Parent Object: HoleThreadNote
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
HoleThreadNote.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote.ArrowheadsInside Property
Parent Object: HoleThreadNote
Description
Gets and sets the ArrowheadsInside setting.
HoleThreadNote Object Page 3 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Syntax
HoleThreadNote.ArrowheadsInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.Attached Property
Parent Object: HoleThreadNote
Description
Indicates whether this dimension is attached to anything. If not, it is considered orphaned and can be
removed.
Syntax
HoleThreadNote.Attached() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.AttributeSets Property
Parent Object: HoleThreadNote
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HoleThreadNote.AttributeSets() As AttributeSets
HoleThreadNote Object Page 4 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
HoleThreadNote.Delete Method
Parent Object: HoleThreadNote
Description
Method that deletes the DrawingDimension.
Syntax
HoleThreadNote.Delete()
Version
Introduced in version 2010
HoleThreadNote.DimensionLine Property
Parent Object: HoleThreadNote
Description
Property that returns the dimension line geometry of the dimension.
Syntax
HoleThreadNote.DimensionLine() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote Object Page 5 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
HoleThreadNote.Edge Property
Parent Object: HoleThreadNote
Description
Gets and sets the hole/thread edge associated with the note.
Syntax
HoleThreadNote.Edge() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote.ExtensionLineOne Property
Parent Object: HoleThreadNote
Description
Property that returns the first extension line of the dimension.
Syntax
HoleThreadNote.ExtensionLineOne() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote.ExtensionLineTwo Property
Parent Object: HoleThreadNote
HoleThreadNote Object Page 6 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Description
Property that returns the second extension line of the dimension.
Syntax
HoleThreadNote.ExtensionLineTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote.FirstArrowheadInside
Property
Parent Object: HoleThreadNote
Description
Read-write property that gets and sets whether the first arrowhead is inside or outside.
Syntax
HoleThreadNote.FirstArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.FirstArrowheadType
Property
Parent Object: HoleThreadNote
HoleThreadNote Object Page 7 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Description
Read-write property that gets and sets the type of the first arrowhead.
Syntax
HoleThreadNote.FirstArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2011
HoleThreadNote.FormattedHoleThreadNote
Property
Parent Object: HoleThreadNote
Description
Gets and sets the fully formatted string that defines the contents of the hole/thread note.
Syntax
HoleThreadNote.FormattedHoleThreadNote() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
HoleThreadNote.FormattedQuantityNote
Property
Parent Object: HoleThreadNote
HoleThreadNote Object Page 8 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Description
Gets and sets the fully formatted string that defines the quantity note.
Syntax
HoleThreadNote.FormattedQuantityNote() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
HoleThreadNote.GeneralDimensionType
Property
Parent Object: HoleThreadNote
Description
Returns an enum indicating the type of general dimension.
Syntax
HoleThreadNote.GeneralDimensionType() As GeneralDimensionTypeEnum
Property Value
This is a read only property whose value is a GeneralDimensionTypeEnum.
Version
Introduced in version 2010
HoleThreadNote.GetInspectionDimensionData
Method
Parent Object: HoleThreadNote
HoleThreadNote Object Page 9 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Description
Method that returns the data associated with an inspection dimension. This method returns an error if
the IsInspectionDimension property returns False.
Syntax
HoleThreadNote.GetInspectionDimensionData( Shape As InspectionDimensionShapeEnum, Label
As String, Rate As String )
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
HoleThreadNote.GetReferenceKey Method
Parent Object: HoleThreadNote
Description
Method that generates and returns the reference key for this entity.
Syntax
HoleThreadNote.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
HoleThreadNote Object Page 10 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all other
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
HoleThreadNote.HideValue Property
Parent Object: HoleThreadNote
Description
Gets and sets the HideValue setting.
Syntax
HoleThreadNote.HideValue() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.Intent Property
Parent Object: HoleThreadNote
Description
Gets and sets the geometry associated with the dimension.
Syntax
HoleThreadNote.Intent() As GeometryIntent
HoleThreadNote Object Page 11 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2010
HoleThreadNote.IsHoleNote Property
Parent Object: HoleThreadNote
Description
Property that indicates if this note is for a hole or thread feature. Returns True if it is for a hole note.
This is true even in the case where the hole is tapped and has threads. Returns False in the case where
the note is for a thread feature. There is some difference in behavior between the two and this
property provides a convenient way to determine the expected behavior.
Syntax
HoleThreadNote.IsHoleNote() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.IsInspectionDimension
Property
Parent Object: HoleThreadNote
Description
Gets and sets whether this is an inspection dimension.
Syntax
HoleThreadNote.IsInspectionDimension() As Boolean
HoleThreadNote Object Page 12 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.Layer Property
Parent Object: HoleThreadNote
Description
Gets and sets the layer applied to this dimension.
Syntax
HoleThreadNote.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 2010
HoleThreadNote.LeaderFromCenter Property
Parent Object: HoleThreadNote
Description
Gets and sets whether the leader starts from the center of the arc or the circle.
Syntax
HoleThreadNote.LeaderFromCenter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleThreadNote Object Page 13 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Version
Introduced in version 2010
HoleThreadNote.ModelValue Property
Parent Object: HoleThreadNote
Description
Property that gets the dimension value as defined in the model or as measured in the drawing.
Syntax
HoleThreadNote.ModelValue() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 2010
HoleThreadNote.ModelValueOverridden
Property
Parent Object: HoleThreadNote
Description
Read-write property that gets and sets whether the model value is overridden for the dimension.
Syntax
HoleThreadNote.ModelValueOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleThreadNote Object Page 14 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Version
Introduced in version 2010
HoleThreadNote.OverrideModelValue
Property
Parent Object: HoleThreadNote
Description
Gets and sets the NominalValue setting.
Syntax
HoleThreadNote.OverrideModelValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
HoleThreadNote.Parent Property
Parent Object: HoleThreadNote
Description
Property that returns the parent sheet of the object.
Syntax
HoleThreadNote.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
HoleThreadNote Object Page 15 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Version
Introduced in version 2010
HoleThreadNote.Precision Property
Parent Object: HoleThreadNote
Description
Gets and sets the Precision setting.
Syntax
HoleThreadNote.Precision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
HoleThreadNote.PromoteToSketch Method
Parent Object: HoleThreadNote
Description
Method that copies the dimension to the underlying sketch. This method only works for dimensions
associated with a draft view.
Syntax
HoleThreadNote.PromoteToSketch() As DimensionConstraint
Version
Introduced in version 2010
HoleThreadNote Object Page 16 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
HoleThreadNote.QuantityDefinition Property
Parent Object: HoleThreadNote
Description
Gets and sets how the quantity value is set for the note.
Syntax
HoleThreadNote.QuantityDefinition() As HoleNoteQuantityEnum
Property Value
This is a read/write property whose value is a HoleNoteQuantityEnum.
Version
Introduced in version 2010
HoleThreadNote.Retrieved Property
Parent Object: HoleThreadNote
Description
Property that indicates whether the dimension was created as a result of retrieving it either from the
model or a drawing view sketch. If True, the RetrievedFrom property returns the object that the
dimension was retrieved from.
Syntax
HoleThreadNote.Retrieved() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote Object Page 17 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
HoleThreadNote.RetrievedFrom Property
Parent Object: HoleThreadNote
Description
Property that returns the object that this dimension was retrieved from. Possible return objects include
all sketch constraint objects that derive from DimensionConstraint and their proxies,
FeatureDimension and FeatureDimensionProxy. The property returns Nothing if the Retrieved
property returns False.
Syntax
HoleThreadNote.RetrievedFrom() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNote.SecondArrowheadInside
Property
Parent Object: HoleThreadNote
Description
Read-write property that gets and sets whether the second arrowhead is inside or outside.
Syntax
HoleThreadNote.SecondArrowheadInside() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote Object Page 18 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
HoleThreadNote.SecondArrowheadType
Property
Parent Object: HoleThreadNote
Description
Read-write property that gets and sets the type of the second arrowhead.
Syntax
HoleThreadNote.SecondArrowheadType() As ArrowheadTypeEnum
Property Value
This is a read/write property whose value is an ArrowheadTypeEnum.
Version
Introduced in version 2011
HoleThreadNote.SetInspectionDimensionData
Method
Parent Object: HoleThreadNote
Description
Method that sets the data associated with an inspection dimension. This method automatically sets the
IsInspectionDimension property to True, if it isn't already.
Syntax
HoleThreadNote.SetInspectionDimensionData( [Shape] As InspectionDimensionShapeEnum,
[Label] As String, [Rate] As String )
Parameters
Name Type Description
Shape InspectionDimensionShapeEnum Optional input InspectionDimensionShapeEnum that
specifies the border shape surrounding the inspection
dimension text. Valid values are kNoInspectionBorder,
kAngularEndsInspectionBorder and
kRoundedEndsInspectionBorder. If not specified,
HoleThreadNote Object Page 19 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
kNoInspectionBorder is used.
This is an optional argument whose default value is 79361.
Label String
Optional input string that specifies the text placed left of the
dimension value. The string can contain symbols specified
using the StyleOverride tag.
This is an optional argument whose default value is """".
Rate String
Optional input string that specifies the text (typically a
percentage value) placed to the right of the dimension
value. The string can contain symbols specified using the
StyleOverride tag.
This is an optional argument whose default value is """".
Version
Introduced in version 2010
HoleThreadNote.ShowAllExtensionLines
Method
Parent Object: HoleThreadNote
Description
Method that un-hides all the extension lines associated with this dimension. If there are no hidden
extension lines associated with this dimension, this method does nothing and returns a success.
Syntax
HoleThreadNote.ShowAllExtensionLines()
Version
Introduced in version 2011
HoleThreadNote.SingleDimensionLine
Property
Parent Object: HoleThreadNote
Description
HoleThreadNote Object Page 20 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Gets and sets whether to use a single dimension line.
Syntax
HoleThreadNote.SingleDimensionLine() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.Style Property
Parent Object: HoleThreadNote
Description
Gets and sets the DimensionStyle associated with the dimension.
Syntax
HoleThreadNote.Style() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 2010
HoleThreadNote.TapDrill Property
Parent Object: HoleThreadNote
Description
Gets and sets whether to set the hole note as tap drill type.
HoleThreadNote Object Page 21 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Syntax
HoleThreadNote.TapDrill() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.Text Property
Parent Object: HoleThreadNote
Description
Gets and sets the DimensionText setting.
Syntax
HoleThreadNote.Text() As DimensionText
Property Value
This is a read/write property whose value is a DimensionText.
Version
Introduced in version 2010
HoleThreadNote.Tolerance Property
Parent Object: HoleThreadNote
Description
Property that returns the Tolerance object associated with this dimension.
Syntax
HoleThreadNote.Tolerance() As Tolerance
HoleThreadNote Object Page 22 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Property Value
This is a read only property whose value is a Tolerance.
Version
Introduced in version 2010
HoleThreadNote.TolerancePrecision Property
Parent Object: HoleThreadNote
Description
Gets and sets the precision of the tolerance text for the dimension.
Syntax
HoleThreadNote.TolerancePrecision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
HoleThreadNote.Type Property
Parent Object: HoleThreadNote
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleThreadNote.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
HoleThreadNote Object Page 23 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Version
Introduced in version 2010
HoleThreadNote.UseCustomThreadDesignation
Property
Parent Object: HoleThreadNote
Description
Gets and sets whether to use the custom thread designation, as defined in the Thread.xls spreadsheet
for thread notes.
Syntax
HoleThreadNote.UseCustomThreadDesignation() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote.UseDefaultFormat Property
Parent Object: HoleThreadNote
Description
Gets and sets whether to use the default format for hole notes.
Syntax
HoleThreadNote.UseDefaultFormat() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
HoleThreadNote Object Page 24 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
Version
Introduced in version 2010
HoleThreadNote.UsePartUnits Property
Parent Object: HoleThreadNote
Description
Gets and sets whether to use model units or the units specified by dimension style.
Syntax
HoleThreadNote.UsePartUnits() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
HoleThreadNote Object Page 25 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE16.htm 16/06/2025
HoleThreadNotes Object
Description
The HoleThreadNotes collection object provides access to all of the hole and thread notes on the
sheet.
Methods
Name Description
Add
Method that creates a hole or thread note on the sheet. Different results are possible
depending on the input provided, as discussed below.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified HoleThreadNote object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingNotes.HoleThreadNotes
Samples
Name Description
Create thread note This sample demonstrates the creation of a thread note on a drawing view.
Version
Introduced in version 2010
HoleThreadNotes.Add Method
Parent Object: HoleThreadNotes
HoleThreadNotes Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
Description
Method that creates a hole or thread note on the sheet. Different results are possible depending on
the input provided, as discussed below.
Syntax
HoleThreadNotes.Add( Position As Point2d, HoleOrThreadEdge As Object,
[LinearDiameterType] As Boolean, [DimensionStyle] As Variant ) As HoleThreadNote
Parameters
Name Type Description
Position Point2d
Input Point2d that specifies the position of the hole/thread note on
the sheet.
HoleOrThreadEdge Object
Input DrawingCurve or GeometryIntent object that specifies the
edge to create the note for and the location along the edge the note
points to. If the drawing curve or geometry intent does not
represent a hole or thread edge, the method returns an error. See
the discussion above for more information about how to get
different results by providing different inputs for this argument.
LinearDiameterType Boolean
Optional Input Boolean that specifies whether to create a leader
type of note or a linear diameter type of note. There are two
examples of linear diameter types in the figure above. These are
the uncircled notes in the right view. The three circled notes
illustrate a leader type of note.
This is an optional argument whose default value is False.
DimensionStyle Variant
Optional input Variant that specifies which dimension style to use
for the note. The dimension style can be specified by providing the
name of an existing style or by supplying a DimensionStyle object.
This is an optional argument whose default value is null.
Remarks
In the example below there are three holes created using various modeling techniques. The top one
was created using an extrude feature and a subsequent thread feature was added to it. The middle
feature is a counter bore hole feature that is also tapped. The bottom feature is a standard hole.
HoleThreadNotes Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
To get any of the four notes shown on the left-hand view the only required input is the Position to
define the text position and a DrawingCurve defining which curve the note should point to. The
text position is enough to determine where the note points to the circle. Notice that in the case of
the thread feature you get a thread note if the input drawing curve is for the thread and you get a
hole note if the drawing curve is for the hole. The right view demonstrates some other
possibilities. The three circled notes can be created by defining the text position point, the
geometry to point to and a point along that geometry. The geometry and point on the geometry are
defined by providing a GeometryIntent object as input to the HoleOrThreadEdge argument. The
other two notes in the right view require the input of the text position and one of the lines that
represents the diameter of the thread. In addition, the LinearDiameterType argument must be set
to True.
Samples
Name Description
Create thread note This sample demonstrates the creation of a thread note on a drawing view.
Version
Introduced in version 2010
HoleThreadNotes.Application Property
Parent Object: HoleThreadNotes
Description
HoleThreadNotes Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HoleThreadNotes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
HoleThreadNotes.Count Property
Parent Object: HoleThreadNotes
Description
Property that returns the number of items in the collection.
Syntax
HoleThreadNotes.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
HoleThreadNotes.Item Property
Parent Object: HoleThreadNotes
Description
Returns the specified HoleThreadNote object from the collection.
HoleThreadNotes Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
Syntax
HoleThreadNotes.Item( Index As Long ) As HoleThreadNote
Property Value
This is a read only property whose value is a HoleThreadNote.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 2010
HoleThreadNotes.Type Property
Parent Object: HoleThreadNotes
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HoleThreadNotes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
HoleThreadNotes Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
HorizontalAlignConstraint Object
Derived from: GeometricConstraint Object
Description
The HorizontalAlignConstraint object represents a constraint that makes two sketch points align
horizontally.
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
GeometricConstraints.AddHorizontalAlign, HorizontalAlignConstraintProxy.NativeObject
Derived Classes
HorizontalAlignConstraintProxy
Version
Introduced in version 5
HorizontalAlignConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
HorizontalAlignConstraint.Application
Property
Parent Object: HorizontalAlignConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HorizontalAlignConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
HorizontalAlignConstraint.AttributeSets
Property
Parent Object: HorizontalAlignConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HorizontalAlignConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
HorizontalAlignConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
Version
Introduced in version 5
HorizontalAlignConstraint.Deletable
Property
Parent Object: HorizontalAlignConstraint
Description
Indicates whether this object is deletable.
Syntax
HorizontalAlignConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
HorizontalAlignConstraint.Delete Method
Parent Object: HorizontalAlignConstraint
Description
Method that deletes the constraint.
Syntax
HorizontalAlignConstraint.Delete()
Version
Introduced in version 5
HorizontalAlignConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
HorizontalAlignConstraint.GetReferenceKey
Method
Parent Object: HorizontalAlignConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
HorizontalAlignConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
HorizontalAlignConstraint.Parent Property
Parent Object: HorizontalAlignConstraint
Description
Property that returns the parent sketch of the object.
Syntax
HorizontalAlignConstraint.Parent() As Sketch
HorizontalAlignConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 5
HorizontalAlignConstraint.PointOne
Property
Parent Object: HorizontalAlignConstraint
Description
Property that returns the first sketch point being constrained.
Syntax
HorizontalAlignConstraint.PointOne() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 5
HorizontalAlignConstraint.PointTwo
Property
Parent Object: HorizontalAlignConstraint
Description
Property that returns the second sketch point being constrained.
Syntax
HorizontalAlignConstraint.PointTwo() As SketchPoint
HorizontalAlignConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 5
HorizontalAlignConstraint.Type Property
Parent Object: HorizontalAlignConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HorizontalAlignConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
HorizontalAlignConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh385E.htm 16/06/2025
HorizontalAlignConstraintProxy Object
Derived from: HorizontalAlignConstraint Object
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
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
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
HorizontalAlignConstraintProxy.Application Property
Parent Object: HorizontalAlignConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
HorizontalAlignConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
HorizontalAlignConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
Version
Introduced in version 6
HorizontalAlignConstraintProxy.AttributeSets
Property
Parent Object: HorizontalAlignConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HorizontalAlignConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.ContainingOccurrence
Property
Parent Object: HorizontalAlignConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
HorizontalAlignConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.Deletable Property
HorizontalAlignConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
Parent Object: HorizontalAlignConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
HorizontalAlignConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
HorizontalAlignConstraintProxy.Delete Method
Parent Object: HorizontalAlignConstraintProxy
Description
Method that deletes the constraint.
Syntax
HorizontalAlignConstraintProxy.Delete()
Version
Introduced in version 6
HorizontalAlignConstraintProxy.GetReferenceKey
Method
Parent Object: HorizontalAlignConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HorizontalAlignConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
HorizontalAlignConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with
any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A
key context is created using the CreateKeyContext method of the ReferenceKeyManager object.
For all other object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.NativeObject
Property
Parent Object: HorizontalAlignConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
HorizontalAlignConstraintProxy.NativeObject() As HorizontalAlignConstraint
Property Value
This is a read only property whose value is a HorizontalAlignConstraint.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.Parent Property
Parent Object: HorizontalAlignConstraintProxy
Description
Property that returns the parent sketch of the object.
Syntax
HorizontalAlignConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
HorizontalAlignConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
HorizontalAlignConstraintProxy.PointOne Property
Parent Object: HorizontalAlignConstraintProxy
Description
Property that returns the first sketch point being constrained.
Syntax
HorizontalAlignConstraintProxy.PointOne() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.PointTwo Property
Parent Object: HorizontalAlignConstraintProxy
Description
Property that returns the second sketch point being constrained.
Syntax
HorizontalAlignConstraintProxy.PointTwo() As SketchPoint
Property Value
This is a read only property whose value is a SketchPoint.
Version
Introduced in version 6
HorizontalAlignConstraintProxy.Type Property
Parent Object: HorizontalAlignConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HorizontalAlignConstraintProxy.Type() As ObjectTypeEnum
HorizontalAlignConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
HorizontalAlignConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh521F.htm 16/06/2025
HorizontalConstraint Object
Derived from: GeometricConstraint Object
Description
The HorizontalConstraint object represents a horizontal constraint within a sketch.
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
is horizontal. True if it is the major axis.
Accessed From
GeometricConstraints.AddHorizontal, HorizontalConstraintProxy.NativeObject
Derived Classes
HorizontalConstraintProxy
Version
Introduced in version 5
HorizontalConstraint Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
HorizontalConstraint.Application Property
Parent Object: HorizontalConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
HorizontalConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
HorizontalConstraint.AttributeSets Property
Parent Object: HorizontalConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HorizontalConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
HorizontalConstraint Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
HorizontalConstraint.Deletable Property
Parent Object: HorizontalConstraint
Description
Indicates whether this object is deletable.
Syntax
HorizontalConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
HorizontalConstraint.Delete Method
Parent Object: HorizontalConstraint
Description
Method that deletes the constraint.
Syntax
HorizontalConstraint.Delete()
Version
Introduced in version 5
HorizontalConstraint.Entity Property
Parent Object: HorizontalConstraint
Description
HorizontalConstraint Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
Property that returns the sketch entity being constrained. This can be a sketch line, ellipse, or
elliptical arc.
Syntax
HorizontalConstraint.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 5
HorizontalConstraint.GetReferenceKey
Method
Parent Object: HorizontalConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
HorizontalConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
HorizontalConstraint Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
Version
Introduced in version 5
HorizontalConstraint.Parent Property
Parent Object: HorizontalConstraint
Description
Property that returns the parent sketch of the object.
Syntax
HorizontalConstraint.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 5
HorizontalConstraint.Type Property
Parent Object: HorizontalConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HorizontalConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
HorizontalConstraint Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
Version
Introduced in version 5
HorizontalConstraint.UseEllipseMajorAxis
Property
Parent Object: HorizontalConstraint
Description
Property used in the case where the entity returned by the Entity property is an ellipse. This
property specifies if the major or minor axis of the ellipse is horizontal. True if it is the major axis.
Syntax
HorizontalConstraint.UseEllipseMajorAxis() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
HorizontalConstraint Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B26.htm 16/06/2025
HorizontalConstraintProxy Object
Derived from: HorizontalConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
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
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Deletable Indicates whether this object is deletable.
Entity
Property that returns the sketch entity being constrained. This can be a sketch line,
ellipse, or elliptical arc.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent sketch of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
UseEllipseMajorAxis
Property used in the case where the entity returned by the Entity property is an
ellipse. This property specifies if the major or minor axis of the ellipse is horizontal.
True if it is the major axis.
Version
Introduced in version 6
HorizontalConstraintProxy.Application Property
Parent Object: HorizontalConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
HorizontalConstraintProxy Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025
Syntax
HorizontalConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
HorizontalConstraintProxy.AttributeSets
Property
Parent Object: HorizontalConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
HorizontalConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
HorizontalConstraintProxy.ContainingOccurrence
Property
Parent Object: HorizontalConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
HorizontalConstraintProxy Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025
Syntax
HorizontalConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
HorizontalConstraintProxy.Deletable Property
Parent Object: HorizontalConstraintProxy
Description
Indicates whether this object is deletable.
Syntax
HorizontalConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
HorizontalConstraintProxy.Delete Method
Parent Object: HorizontalConstraintProxy
Description
Method that deletes the constraint.
Syntax
HorizontalConstraintProxy.Delete()
HorizontalConstraintProxy Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025
Version
Introduced in version 6
HorizontalConstraintProxy.Entity Property
Parent Object: HorizontalConstraintProxy
Description
Property that returns the sketch entity being constrained. This can be a sketch line, ellipse, or elliptical arc.
Syntax
HorizontalConstraintProxy.Entity() As SketchEntity
Property Value
This is a read only property whose value is a SketchEntity.
Version
Introduced in version 6
HorizontalConstraintProxy.GetReferenceKey
Method
Parent Object: HorizontalConstraintProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
HorizontalConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when
working with any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse
and Vertex objects). A key context is created using the CreateKeyContext method of
the ReferenceKeyManager object. For all other object types, the key context argument
is not used and is ignored if provided.
HorizontalConstraintProxy Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 6
HorizontalConstraintProxy.NativeObject Property
Parent Object: HorizontalConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
HorizontalConstraintProxy.NativeObject() As HorizontalConstraint
Property Value
This is a read only property whose value is a HorizontalConstraint.
Version
Introduced in version 6
HorizontalConstraintProxy.Parent Property
Parent Object: HorizontalConstraintProxy
Description
Property that returns the parent sketch of the object.
Syntax
HorizontalConstraintProxy.Parent() As Sketch
Property Value
This is a read only property whose value is a Sketch.
Version
Introduced in version 6
HorizontalConstraintProxy Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025
HorizontalConstraintProxy.Type Property
Parent Object: HorizontalConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
HorizontalConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
HorizontalConstraintProxy.UseEllipseMajorAxis
Property
Parent Object: HorizontalConstraintProxy
Description
Property used in the case where the entity returned by the Entity property is an ellipse. This property
specifies if the major or minor axis of the ellipse is horizontal. True if it is the major axis.
Syntax
HorizontalConstraintProxy.UseEllipseMajorAxis() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
HorizontalConstraintProxy Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8507.htm 16/06/2025