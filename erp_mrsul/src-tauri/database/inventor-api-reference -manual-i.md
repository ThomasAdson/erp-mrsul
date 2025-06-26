ImportedModelEntity Object
Description
ImportedModelEntity Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be
set to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
EntityType
Read-only property that returns the ImportedModelEntityTypeEnum indicating
the type of the ImportedModelEntity.
ImportedStatus Read-write property that gets and set the imported status for the entity.
Name Read-only property that returns the name of this object.
Parent Gets the parent object from whom this object can logically be reached.
ParentEntity Read-only property that returns the parent ImportedModelEntity object.
SubEntities Read-only property that returns the sub ImportedModelEntities collection.
Type Gets the constant that indicates the type of this object.
Accessed From
ImportedModelEntities.Item, ImportedModelEntity.ParentEntity
Version
Introduced in version 2016
ImportedModelEntity.Application Property
Parent Object: ImportedModelEntity
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
ImportedModelEntity.Application() As Object
ImportedModelEntity Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh409E.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedModelEntity.EntityType Property
Parent Object: ImportedModelEntity
Description
Read-only property that returns the ImportedModelEntityTypeEnum indicating the type of the
ImportedModelEntity.
Syntax
ImportedModelEntity.EntityType() As ImportedModelEntityTypeEnum
Property Value
This is a read only property whose value is an ImportedModelEntityTypeEnum.
Version
Introduced in version 2016
ImportedModelEntity.ImportedStatus
Property
Parent Object: ImportedModelEntity
Description
Read-write property that gets and set the imported status for the entity.
Syntax
ImportedModelEntity.ImportedStatus() As ImportedModelEntityStatusEnum
ImportedModelEntity Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh409E.htm 16/06/2025
Property Value
This is a read/write property whose value is an ImportedModelEntityStatusEnum.
Version
Introduced in version 2016
ImportedModelEntity.Name Property
Parent Object: ImportedModelEntity
Description
Read-only property that returns the name of this object.
Syntax
ImportedModelEntity.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedModelEntity.Parent Property
Parent Object: ImportedModelEntity
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedModelEntity.Parent() As ImportedComponentDefinition
ImportedModelEntity Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh409E.htm 16/06/2025
Property Value
This is a read only property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedModelEntity.ParentEntity Property
Parent Object: ImportedModelEntity
Description
Read-only property that returns the parent ImportedModelEntity object.
Syntax
ImportedModelEntity.ParentEntity() As ImportedModelEntity
Property Value
This is a read only property whose value is an ImportedModelEntity.
Version
Introduced in version 2016
ImportedModelEntity.SubEntities Property
Parent Object: ImportedModelEntity
Description
Read-only property that returns the sub ImportedModelEntities collection.
Syntax
ImportedModelEntity.SubEntities() As ImportedModelEntities
ImportedModelEntity Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh409E.htm 16/06/2025
Property Value
This is a read only property whose value is an ImportedModelEntities.
Version
Introduced in version 2016
ImportedModelEntity.Type Property
Parent Object: ImportedModelEntity
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedModelEntity.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedModelEntity Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh409E.htm 16/06/2025
ImportedRVTComponent Object
Derived from: ImportedComponent Object
Description
ImportedRVTComponent Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was
created. When the link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the
various inputs that were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded document or
a linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or
assembly document. If True, the link still exists. If False, the link has been broken and the
ReferencedFile property will return Nothing.
Name Property that returns the component's name.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported
component with the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ImportedRVTComponentProxy.NativeObject
Derived Classes
ImportedRVTComponentProxy
Samples
Name Description
Import Revit data into
Inventor
The samples demonstrate how to import Revit data(.rvt) into Inventor part and assembly
documents.
ImportedRVTComponent Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponent.Application Property
Parent Object: ImportedRVTComponent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedRVTComponent.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2021
ImportedRVTComponent.AttributeSets Property
Parent Object: ImportedRVTComponent
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedRVTComponent.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2021
ImportedRVTComponent.BreakLinkToFile Method
Parent Object: ImportedRVTComponent
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the
link is broken the ReferencedFile property will return Nothing.
ImportedRVTComponent Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Syntax
ImportedRVTComponent.BreakLinkToFile()
Version
Introduced in version 2021
ImportedRVTComponent.Definition Property
Parent Object: ImportedRVTComponent
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to
create the imported component.
Syntax
ImportedRVTComponent.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2021
ImportedRVTComponent.Delete Method
Parent Object: ImportedRVTComponent
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedRVTComponent.Delete()
Version
Introduced in version 2021
ImportedRVTComponent.GetReferenceKey Method
Parent Object: ImportedRVTComponent
Description
Method that generates and returns the reference key for this entity.
ImportedRVTComponent Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Syntax
ImportedRVTComponent.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context
is created using the CreateKeyContext method of the ReferenceKeyManager object. For all other object
types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2021
ImportedRVTComponent.HealthStatus Property
Parent Object: ImportedRVTComponent
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedRVTComponent.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2021
ImportedRVTComponent.IsEmbedded Property
Parent Object: ImportedRVTComponent
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedRVTComponent.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
ImportedRVTComponent Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponent.LinkedToFile Property
Parent Object: ImportedRVTComponent
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link
still exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedRVTComponent.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponent.Name Property
Parent Object: ImportedRVTComponent
Description
Property that returns the component's name.
Syntax
ImportedRVTComponent.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2021
ImportedRVTComponent.Parent Property
Parent Object: ImportedRVTComponent
Description
Property that returns the parent object.
ImportedRVTComponent Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Syntax
ImportedRVTComponent.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2021
ImportedRVTComponent.ReferencedDocumentDescriptor
Property
Parent Object: ImportedRVTComponent
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedRVTComponent.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2021
ImportedRVTComponent.SetEndOfPart Method
Parent Object: ImportedRVTComponent
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedRVTComponent.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference
component. A value of True indicates before and False indicates after.
ImportedRVTComponent Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponent.SuppressLinkToFile Property
Parent Object: ImportedRVTComponent
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from
which it was created.
Syntax
ImportedRVTComponent.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponent.Type Property
Parent Object: ImportedRVTComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedRVTComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
ImportedRVTComponent Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F03.htm 16/06/2025
ImportedRVTComponentDefinition Object
Description
ImportedRVTComponentDefinition Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for)
'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
FullFileName Read-only property that returns the full filename of the source file.
Imported3DView Read-write property that gets and sets the name of the 3D view of the Revit data to import.
ImportedAssemblyOrganizationType Read-write property that gets and sets the imported assembly organization type.
ImportedLanguage Read-write property that gets and sets the imported Revit language type.
Parent Gets the parent object from whom this object can logically be reached.
ReferenceModel Read-write property that gets and sets whether to import the component as linked reference.
Type Gets the constant that indicates the type of this object.
Samples
Name Description
Import Revit data into Inventor The samples demonstrate how to import Revit data(.rvt) into Inventor part and assembly documents.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.Application Property
Parent Object: ImportedRVTComponentDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when running with Inventor
whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedRVTComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.FullFileName Property
Parent Object: ImportedRVTComponentDefinition
Description
Read-only property that returns the full filename of the source file.
Syntax
ImportedRVTComponentDefinition.FullFileName() As String
Property Value
This is a read only property whose value is a String.
ImportedRVTComponentDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC9.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponentDefinition.Imported3DView Property
Parent Object: ImportedRVTComponentDefinition
Description
Read-write property that gets and sets the name of the 3D view of the Revit data to import.
Syntax
ImportedRVTComponentDefinition.Imported3DView() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.ImportedAssemblyOrganizationType
Property
Parent Object: ImportedRVTComponentDefinition
Description
Read-write property that gets and sets the imported assembly organization type.
Syntax
ImportedRVTComponentDefinition.ImportedAssemblyOrganizationType() As ImportedAssemblyOrganizationTypeEnum
Property Value
This is a read/write property whose value is an ImportedAssemblyOrganizationTypeEnum.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.ImportedLanguage Property
Parent Object: ImportedRVTComponentDefinition
Description
Read-write property that gets and sets the imported Revit language type.
Syntax
ImportedRVTComponentDefinition.ImportedLanguage() As ImportedRevitLanguageTypeEnum
Property Value
This is a read/write property whose value is an ImportedRevitLanguageTypeEnum.
Version
Introduced in version 2021
ImportedRVTComponentDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC9.htm 16/06/2025
ImportedRVTComponentDefinition.Parent Property
Parent Object: ImportedRVTComponentDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedRVTComponentDefinition.Parent() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.ReferenceModel Property
Parent Object: ImportedRVTComponentDefinition
Description
Read-write property that gets and sets whether to import the component as linked reference.
Syntax
ImportedRVTComponentDefinition.ReferenceModel() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponentDefinition.Type Property
Parent Object: ImportedRVTComponentDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedRVTComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
ImportedRVTComponentDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1EC9.htm 16/06/2025
ImportedRVTComponentProxy Object
Derived from: ImportedRVTComponent Object
Description
ImportedRVTComponentProxy Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was created.
When the link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence Get the component occurrence context through which the native object is being seen through.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the various
inputs that were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded document or a linked
document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly
document. If True, the link still exists. If False, the link has been broken and the ReferencedFile
property will return Nothing.
Name Property that returns the component's name.
NativeObject Get the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported component
with the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2021
ImportedRVTComponentProxy.Application Property
Parent Object: ImportedRVTComponentProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedRVTComponentProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
ImportedRVTComponentProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponentProxy.AttributeSets Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedRVTComponentProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2021
ImportedRVTComponentProxy.BreakLinkToFile Method
Parent Object: ImportedRVTComponentProxy
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is
broken the ReferencedFile property will return Nothing.
Syntax
ImportedRVTComponentProxy.BreakLinkToFile()
Version
Introduced in version 2021
ImportedRVTComponentProxy.ContainingOccurrence
Property
Parent Object: ImportedRVTComponentProxy
Description
Get the component occurrence context through which the native object is being seen through.
Syntax
ImportedRVTComponentProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
ImportedRVTComponentProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
Version
Introduced in version 2021
ImportedRVTComponentProxy.Definition Property
Parent Object: ImportedRVTComponentProxy
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create the
imported component.
Syntax
ImportedRVTComponentProxy.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2021
ImportedRVTComponentProxy.Delete Method
Parent Object: ImportedRVTComponentProxy
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedRVTComponentProxy.Delete()
Version
Introduced in version 2021
ImportedRVTComponentProxy.GetReferenceKey Method
Parent Object: ImportedRVTComponentProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedRVTComponentProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities
(and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the
ImportedRVTComponentProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key context argument
is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2021
ImportedRVTComponentProxy.HealthStatus Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedRVTComponentProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2021
ImportedRVTComponentProxy.IsEmbedded Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedRVTComponentProxy.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponentProxy.LinkedToFile Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still exists. If
False, the link has been broken and the ReferencedFile property will return Nothing.
ImportedRVTComponentProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
Syntax
ImportedRVTComponentProxy.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponentProxy.Name Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns the component's name.
Syntax
ImportedRVTComponentProxy.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2021
ImportedRVTComponentProxy.NativeObject Property
Parent Object: ImportedRVTComponentProxy
Description
Get the object in the context of the definition instead of the containing assembly.
Syntax
ImportedRVTComponentProxy.NativeObject() As ImportedRVTComponent
Property Value
This is a read only property whose value is an ImportedRVTComponent.
Version
Introduced in version 2021
ImportedRVTComponentProxy.Parent Property
Parent Object: ImportedRVTComponentProxy
Description
ImportedRVTComponentProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
Property that returns the parent object.
Syntax
ImportedRVTComponentProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2021
ImportedRVTComponentProxy.ReferencedDocumentDescriptor
Property
Parent Object: ImportedRVTComponentProxy
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedRVTComponentProxy.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2021
ImportedRVTComponentProxy.SetEndOfPart Method
Parent Object: ImportedRVTComponentProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedRVTComponentProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference component. A
value of True indicates before and False indicates after.
Version
Introduced in version 2021
ImportedRVTComponentProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
ImportedRVTComponentProxy.SuppressLinkToFile Property
Parent Object: ImportedRVTComponentProxy
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it was
created.
Syntax
ImportedRVTComponentProxy.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2021
ImportedRVTComponentProxy.Type Property
Parent Object: ImportedRVTComponentProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedRVTComponentProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2021
ImportedRVTComponentProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh41D2.htm 16/06/2025
InsertConstraint Object
Derived from: AssemblyConstraint Object
Description
Object that represents an insert assembly constraint.
Methods
Name Description
ConvertToAngleConstraint
Method that converts the constraint to an angle constraint, and returns the
AngleConstraint object. This method can also be used to edit the geometries
associated with an angle constraint without changing its type, in which case the
same object is returned by the method.
ConvertToCustomConstraint
Method that converts the constraint to a custom constraint, and returns the
CustomConstraint object. This method can also be used to edit the geometries
associated with a custom constraint without changing its type, in which case
the same object is returned by the method.
ConvertToFlushConstraint
Method that converts the constraint to a flush constraint, and returns the
FlushConstraint object. This method can also be used to edit the geometries
associated with a flush constraint without changing its type, in which case the
same object is returned by the method.
ConvertToInsertConstraint
Method that converts the constraint to an insert constraint, and returns the
InsertConstraint object. This method can also be used to edit the geometries
associated with an insert constraint without changing its type, in which case the
same object is returned by the method.
ConvertToInsertConstraint2
Converts the constraint to an insert constraint, and returns the InsertConstraint
object.
ConvertToMateConstraint
Method that converts the constraint to a mate constraint, and returns the
MateConstraint object. This method can also be used to edit the geometries
associated with a mate constraint without changing its type, in which case the
same object is returned by the method.
ConvertToMateConstraint2
Converts the constraint to a mate constraint, and returns the MateConstraint
object.
ConvertToRotateRotateConstraint
Method that converts the constraint to a rotate-rotate constraint, and returns the
RotateRotateConstraint object. This method can also be used to edit the
geometries associated with a rotate-rotate constraint without changing its type,
in which case the same object is returned by the method.
ConvertToRotateTranslateConstraint
Method that converts the constraint to a rotate-translate constraint, and returns
the RotateTranslateConstraint object. This method can also be used to edit the
geometries associated with a rotate-translate constraint without changing its
type, in which case the same object is returned by the method.
ConvertToSymmetryConstraint
Converts the constraint to a symmetry constraint, and returns the
AssemblySymmetryConstraint object.
ConvertToTangentConstraint
Method that converts the constraint to a tangent constraint, and returns the
TangentConstraint object. This method can also be used to edit the geometries
associated with a tangent constraint without changing its type, in which case
the same object is returned by the method.
ConvertToTransitionalConstraint
Method that converts the constraint to a transitional constraint, and returns the
TransitionalConstraint object. This method can also be used to edit the
geometries associated with a transitional constraint without changing its type,
in which case the same object is returned by the method.
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
InsertConstraint Object Page 1 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Properties
Name Description
AffectedOccurrenceOne
Property that returns the first of the two objects affected by this constraint. This is the
same as the owning occurrence obtained from the OccurrenceOne property in the case
where the owning assembly is not adaptive. Else, this is the first non-adaptive occurrence
in the path leading from the owning occurrence to the occurrence that contains the first of
the two geometries that this constraint is between.
AffectedOccurrenceTwo
Property that returns the second of the two objects affected by this constraint. This is the
same as the owning occurrence obtained from the OccurrenceTwo property in the case
where the owning assembly is not adaptive. Else, this is the first non-adaptive occurrence
in the path leading from the owning occurrence to the occurrence that contains the second
of the two geometries that this constraint is between.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
AxesOpposed Property that gets whether the direction of the two axes is opposed.
ConstraintLimits
Property that returns the ConstraintLimits object that provides access to various limits
related settings for the constraint.
Distance
Property that returns the Parameter object that controls the offset distance of the
constraint.
DriveSettings Returns the DriveSettings object for the constraint.
EntityOne
Property that indicates the first of the geometric entities (Face, Axis, Edge, etc.) being
constrained.
EntityTwo
Property that indicates the second of the geometric entities (Face, Axis, Edge, etc.) being
constrained.
GeometryOne
Property that returns the geometry of the first of the two entities that this constraint is
between. The geometry returned is in the space of the assembly and for face or work
plane geometries it accounts for the orientation of the face or work plane.
GeometryTwo
Property that returns the geometry of the second of the two entities that this constraint is
between. The geometry returned is in the space of the assembly and for face or work
plane geometries it accounts for the orientation of the face or work plane.
HealthStatus Property that returns an enum indicating the current state of the object.
iMateResult Property that returns the iMateResult object that resulted in the creation of this constraint.
IsDefaultName
Indicates if the name of this constraint is the original default name or if the user has
changed the name. A value of True indicates the name is the original default name.
LayoutConstraint
Property that returns the layout constraint this constraint is a member of. Returns Nothing
in the case where this constraint is not a member of a layout constraint. You can also
determine if a constraint is a member of a layout constraint by using the
ResultOfLayoutConstraint property.
LockRotation Property that gets/sets whether to lock the rotation freedom or not.
Name Gets/Sets the displayable name of this constraint.
OccurrenceOne Property that returns the first of the two objects this constraint is between.
OccurrenceTwo Property that returns the second of the two objects this constraint is between.
Parent Property that returns the parent of the object.
ResultOfiMate Property that indicates if this iMateResult represents a composite iMate.
ResultOfLayoutConstraint
Property that indicates if this constraint is a member of a layout constraint. If True then it
is a member of a layout constraint. The layout constraint can be obtained by using the
LayoutConstraint property.
Suppressed Gets/Sets the Boolean flag indicating whether this constraint is suppressed.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets/Sets the Visible indicating whether this constraint is visible.
InsertConstraint Object Page 2 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Accessed From
AngleConstraint.ConvertToInsertConstraint, AngleConstraint.ConvertToInsertConstraint2,
AngleConstraintProxy.ConvertToInsertConstraint, AngleConstraintProxy.ConvertToInsertConstraint2,
AssemblyConstraint.ConvertToInsertConstraint, AssemblyConstraint.ConvertToInsertConstraint2,
AssemblyConstraints.AddInsertConstraint, AssemblyConstraints.AddInsertConstraint2,
AssemblySymmetryConstraint.ConvertToInsertConstraint,
AssemblySymmetryConstraint.ConvertToInsertConstraint2,
AssemblySymmetryConstraintProxy.ConvertToInsertConstraint,
AssemblySymmetryConstraintProxy.ConvertToInsertConstraint2, CustomConstraint.ConvertToInsertConstraint,
CustomConstraintProxy.ConvertToInsertConstraint, FlushConstraint.ConvertToInsertConstraint,
FlushConstraint.ConvertToInsertConstraint2, FlushConstraintProxy.ConvertToInsertConstraint,
FlushConstraintProxy.ConvertToInsertConstraint2, InsertConstraint.ConvertToInsertConstraint,
InsertConstraint.ConvertToInsertConstraint2, InsertConstraintProxy.ConvertToInsertConstraint,
InsertConstraintProxy.ConvertToInsertConstraint2, InsertConstraintProxy.NativeObject,
MateConstraint.ConvertToInsertConstraint, MateConstraint.ConvertToInsertConstraint2,
MateConstraintProxy.ConvertToInsertConstraint, MateConstraintProxy.ConvertToInsertConstraint2,
RotateRotateConstraint.ConvertToInsertConstraint, RotateRotateConstraint.ConvertToInsertConstraint2,
RotateRotateConstraintProxy.ConvertToInsertConstraint, RotateRotateConstraintProxy.ConvertToInsertConstraint2,
RotateTranslateConstraint.ConvertToInsertConstraint, RotateTranslateConstraint.ConvertToInsertConstraint2,
RotateTranslateConstraintProxy.ConvertToInsertConstraint,
RotateTranslateConstraintProxy.ConvertToInsertConstraint2, TangentConstraint.ConvertToInsertConstraint,
TangentConstraint.ConvertToInsertConstraint2, TangentConstraintProxy.ConvertToInsertConstraint,
TangentConstraintProxy.ConvertToInsertConstraint2, TransitionalConstraint.ConvertToInsertConstraint,
TransitionalConstraint.ConvertToInsertConstraint2, TransitionalConstraintProxy.ConvertToInsertConstraint,
TransitionalConstraintProxy.ConvertToInsertConstraint2, TranslateTranslateConstraint.ConvertToInsertConstraint,
TranslateTranslateConstraint.ConvertToInsertConstraint2,
TranslateTranslateConstraintProxy.ConvertToInsertConstraint,
TranslateTranslateConstraintProxy.ConvertToInsertConstraint2
Derived Classes
InsertConstraintProxy
Samples
Name Description
Add assembly insert constraint This sample demonstrates the creation of an assembly insert constraint.
Version
Introduced in version 4
InsertConstraint.AffectedOccurrenceOne Property
Parent Object: InsertConstraint
Description
Property that returns the first of the two objects affected by this constraint. This is the same as the owning occurrence
obtained from the OccurrenceOne property in the case where the owning assembly is not adaptive. Else, this is the
first non-adaptive occurrence in the path leading from the owning occurrence to the occurrence that contains the first
of the two geometries that this constraint is between.
InsertConstraint Object Page 3 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Syntax
InsertConstraint.AffectedOccurrenceOne() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
InsertConstraint.AffectedOccurrenceTwo Property
Parent Object: InsertConstraint
Description
Property that returns the second of the two objects affected by this constraint. This is the same as the owning
occurrence obtained from the OccurrenceTwo property in the case where the owning assembly is not adaptive. Else,
this is the first non-adaptive occurrence in the path leading from the owning occurrence to the occurrence that
contains the second of the two geometries that this constraint is between.
Syntax
InsertConstraint.AffectedOccurrenceTwo() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
InsertConstraint.Application Property
Parent Object: InsertConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
InsertConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
InsertConstraint Object Page 4 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 4
InsertConstraint.AttributeSets Property
Parent Object: InsertConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
InsertConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
InsertConstraint.AxesOpposed Property
Parent Object: InsertConstraint
Description
Property that gets whether the direction of the two axes is opposed.
Syntax
InsertConstraint.AxesOpposed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
InsertConstraint.ConstraintLimits Property
Parent Object: InsertConstraint
InsertConstraint Object Page 5 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Description
Property that returns the ConstraintLimits object that provides access to various limits related settings for the
constraint.
Syntax
InsertConstraint.ConstraintLimits() As ConstraintLimits
Property Value
This is a read only property whose value is a ConstraintLimits.
Version
Introduced in version 2011
InsertConstraint.ConvertToAngleConstraint Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to an angle constraint, and returns the AngleConstraint object. This method can
also be used to edit the geometries associated with an angle constraint without changing its type, in which case the
same object is returned by the method.
Syntax
InsertConstraint.ConvertToAngleConstraint( EntityOne As Object, EntityTwo As Object, Angle As Variant,
[SolutionType] As AngleConstraintSolutionTypeEnum, [ReferenceVectorEntity] As Variant, [BiasPointOne] As
Variant, [BiasPointTwo] As Variant ) As AngleConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object. This object can
be a planar face, work plane, linear edge, work axis, or a
face that defines an axis.
EntityTwo Object
Input object that defines the second object. This object
can be a planar face, work plane, linear edge, work axis,
or a face that defines an axis.
Angle Variant
Input Variant that defines the angle between the two
input entities. This can be either a numeric value or a
string. A parameter for this value is created and the
supplied string or value is assigned to the parameter. If a
value is input, the units are radians. If a string is input
the units can be specified as part of the string or will
default to the current angle units of the document.
SolutionType AngleConstraintSolutionTypeEnum Optional input AngleConstraintSolutionTypeEnum that
specifies the solution type. If specified to be
kDirectedSolution, the solution always applies the right
hand rule. If specified to be kUndirectedSolution, the
solution allows either orientation, thus resolving
situations where component orientation flips during a
InsertConstraint Object Page 6 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
constraint drive or drag. If specified to be
kReferenceVectorSolution, the ReferenceVectorEntity
argument must be provided with a third entity for the
solution. The default value is kDirectedSolution.
This is an optional argument whose default value is
78593.
ReferenceVectorEntity Variant
Optional input object that provides a third entity to solve
the angle constraint. This argument is ignored if the
SolutionType argument is not
kReferenceVectorSolution. This object can be a planar
face, work plane, linear edge, work axis, or a face that
defines an axis.
This is an optional argument whose default value is null.
BiasPointOne Variant
Optional input Point object that is used help in
determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the
two bias points coincident. This provides some general
control over the position of the occurrence when it isn't
being controlled by another constraint. An example of
when the bias points are useful is the case when the first
constraint on a part is a mate constraint. In the case
where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines
their mating contact. Using the bias points you can
define the position of the two occurrences, relative to
each other. If a bias point is not given, one is calculated
that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in
determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the
two bias points coincident. This provides some general
control over the position of the occurrence when it isn't
being controlled by another constraint. An example of
when the bias points are useful is the case when the first
constraint on a part is a mate constraint. In the case
where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines
their mating contact. Using the bias points you can
define the position of the two occurrences, relative to
each other. If a bias point is not given, one is calculated
that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.ConvertToCustomConstraint Method
Parent Object: InsertConstraint
InsertConstraint Object Page 7 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Description
Method that converts the constraint to a custom constraint, and returns the CustomConstraint object. This method can
also be used to edit the geometries associated with a custom constraint without changing its type, in which case the
same object is returned by the method.
Syntax
InsertConstraint.ConvertToCustomConstraint( EntityOne As Object, EntityTwo As Object, ClientId As String )
As CustomConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object.
ClientId String Input String that specifies the ClientId, typically the ClassId of the Add-in creating the constraint.
Version
Introduced in version 2011
InsertConstraint.ConvertToFlushConstraint Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a flush constraint, and returns the FlushConstraint object. This method can also
be used to edit the geometries associated with a flush constraint without changing its type, in which case the same
object is returned by the method.
Syntax
InsertConstraint.ConvertToFlushConstraint( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As FlushConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object. The input object must be either a planar Face object
or WorkPlane object.
EntityTwo Object
Input object that defines the second object. The input object must be either a planar Face
object or WorkPlane object
Offset Variant
Input Variant that defines the offset between the two input entities. This can be either a
numeric value or a string. A parameter for this value is created and the supplied string or
value is assigned to the parameter. If a value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or will default to the current length units
of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
InsertConstraint Object Page 8 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
An example of when the bias points are useful is the case when the first constraint on a part is
a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is
a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.ConvertToInsertConstraint Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to an insert constraint, and returns the InsertConstraint object. This method can
also be used to edit the geometries associated with an insert constraint without changing its type, in which case the
same object is returned by the method.
Syntax
InsertConstraint.ConvertToInsertConstraint( EntityOne As Object, EntityTwo As Object, AxesOpposed As
Boolean, Distance As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As InsertConstraint
InsertConstraint Object Page 9 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Parameters
Name Type Description
EntityOne Object Input object that defines the first object. This object is a circular edge.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
AxesOpposed Boolean
Input Boolean that specifies whether the direction of the axies of the input entities are in the
same direction or opposed. A value of True indicates they are opposed.
Distance Variant
Input Variant that defines the offset between the two input entities. This can be either a
numeric value or a string. A parameter for this value is created and the supplied string or
value is assigned to the parameter. If a value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or will default to the current length units
of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
InsertConstraint Object Page 10 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 2011
InsertConstraint.ConvertToInsertConstraint2 Method
Parent Object: InsertConstraint
Description
Converts the constraint to an insert constraint, and returns the InsertConstraint object.
Syntax
InsertConstraint.ConvertToInsertConstraint2( EntityOne As Object, EntityTwo As Object, AxesOpposed As
Boolean, Distance As Variant, [LockRotation] As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant )
As InsertConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object. This object is a circular edge.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
AxesOpposed Boolean
Input Boolean that specifies whether the direction of the axies of the input entities are in the
same direction or opposed. A value of True indicates they are opposed.
Distance Variant
Input Variant that defines the offset between the two input entities. This can be either a
numeric value or a string. A parameter for this value is created and the supplied string or
value is assigned to the parameter. If a value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or will default to the current length units
of the document.
LockRotation Variant
Optional input Boolean that specifies whether to lock the rotation freedom or not.
This is an optional argument whose default value is null.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
InsertConstraint Object Page 11 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2019
InsertConstraint.ConvertToMateConstraint Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a mate constraint, and returns the MateConstraint object. This method can also
be used to edit the geometries associated with a mate constraint without changing its type, in which case the same
object is returned by the method.
Syntax
InsertConstraint.ConvertToMateConstraint( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum, [BiasPointOne]
As Variant, [BiasPointTwo] As Variant ) As MateConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object.
Offset Variant
Input Variant that defines the offset between the two input entities. This
can be either a numeric value or a string. A parameter for this value is
created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can
be specified as part of the string or will default to the current length
units of the document.
EntityOneInferredType InferredTypeEnum Optional input enum that specifies how the geometry of entity one is to
be interpreted. Depending on the geometry of the entity one, different
options are possible.
InsertConstraint Object Page 12 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
If entity one is a cylinder this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cylinder, entity two
must also be a cylinder and they must be the same radius.
If entity one is a sphere this can be either kNoInferrence or
kInferredPoint. For kNoInferrence to be valid for a sphere, entity two
must also be a sphere and they must be the same radius.
If entity one is a cone this can be either kNoInferrence or kInferredLine.
For kNoInferrence to be valid for a cone, entity two must also be a cone
and they must have the same taper angle.
If entity one is a torus this can be either kInferredLine or kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
EntityTwoInferredType InferredTypeEnum
Input enum that specifies how the geometry of entity two is to be
interpreted. Depending on the geometry of the entity two, different
options are possible.
If entity two is a cylinder this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cylinder, entity one
must also be a cylinder and they must be the same radius.
If entity two is a sphere this can be either kNoInferrence or
kInferredPoint. For kNoInferrence to be valid for a sphere, entity one
must also be a sphere and they must be the same radius.
If entity two is a cone this can be either kNoInferrence or kInferredLine.
For kNoInferrence to be valid for a cone, entity one must also be a cone
and they must have the same taper angle.
If entity two is a torus this can be either kInferredLine or kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being
controlled by another constraint.
An example of when the bias points are useful is the case when the first
constraint on a part is a mate constraint. In the case where the mate is
between two planes, the parts can be positioned anywhere along the
infinite plane that defines their mating contact. Using the bias points you
can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
InsertConstraint Object Page 13 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
general control over the position of the occurrence when it isn't being
controlled by another constraint.
An example of when the bias points are useful is the case when the first
constraint on a part is a mate constraint. In the case where the mate is
between two planes, the parts can be positioned anywhere along the
infinite plane that defines their mating contact. Using the bias points you
can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.ConvertToMateConstraint2 Method
Parent Object: InsertConstraint
Description
Converts the constraint to a mate constraint, and returns the MateConstraint object.
Syntax
InsertConstraint.ConvertToMateConstraint2( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum, [SolutionType]
As MateConstraintSolutionTypeEnum, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As MateConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first geometry.
EntityTwo Object Input object that defines the second geometry
Offset Variant
Input Variant that defines the offset between the two
input entities. This can be either a numeric value or a
string. A parameter for this value is created and the
supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or
will default to the current length units of the document.
EntityOneInferredType InferredTypeEnum Optional input enum that specifies how the geometry of
entity one is to be interpreted. Depending on the
geometry of the entity one, different options are
possible.
If entity one is a cylinder this can be either
kNoInferrence or kInferredLine. For kNoInferrence to
be valid for a cylinder, entity two must also be a
cylinder and they must be the same radius.
If entity one is a sphere this can be either kNoInferrence
InsertConstraint Object Page 14 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
or kInferredPoint. For kNoInferrence to be valid for a
sphere, entity two must also be a sphere and they must
be the same radius.
If entity one is a cone this can be either kNoInferrence
or kInferredLine. For kNoInferrence to be valid for a
cone, entity two must also be a cone and they must have
the same taper angle.
If entity one is a torus this can be either kInferredLine or
kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is
24833.
EntityTwoInferredType InferredTypeEnum
Optional input enum that specifies how the geometry of
entity two is to be interpreted. Depending on the
geometry of the entity two, different options are
possible.
If entity two is a cylinder this can be either
kNoInferrence or kInferredLine. For kNoInferrence to
be valid for a cylinder, entity one must also be a cylinder
and they must be the same radius.
If entity two is a sphere this can be either kNoInferrence
or kInferredPoint. For kNoInferrence to be valid for a
sphere, entity one must also be a sphere and they must
be the same radius.
If entity two is a cone this can be either kNoInferrence
or kInferredLine. For kNoInferrence to be valid for a
cone, entity one must also be a cone and they must have
the same taper angle.
If entity two is a torus this can be either kInferredLine or
kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is
24833.
SolutionType MateConstraintSolutionTypeEnum
Optional input MateConstraintSolutionTypeEnum that
specifies the solution type for the mate constraint. If not
provided this defaults to kOpposedSolutionType.
This is an optional argument whose default value is
115457.
BiasPointOne Variant Optional input Point object that is used help in
determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the
two bias points coincident. This provides some general
control over the position of the occurrence when it isn’t
being controlled by another constraint.
An example of when the bias points are useful is the
case when the first constraint on a part is a mate
constraint. In the case where the mate is between two
planes, the parts can be positioned anywhere along the
infinite plane that defines their mating contact. Using the
bias points you can define the position of the two
InsertConstraint Object Page 15 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the
center of the parameter range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in
determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the
two bias points coincident. This provides some general
control over the position of the occurrence when it isn’t
being controlled by another constraint.
An example of when the bias points are useful is the
case when the first constraint on a part is a mate
constraint. In the case where the mate is between two
planes, the parts can be positioned anywhere along the
infinite plane that defines their mating contact. Using the
bias points you can define the position of the two
occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the
center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2019
InsertConstraint.ConvertToRotateRotateConstraint
Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a rotate-rotate constraint, and returns the RotateRotateConstraint object. This
method can also be used to edit the geometries associated with a rotate-rotate constraint without changing its type, in
which case the same object is returned by the method.
Syntax
InsertConstraint.ConvertToRotateRotateConstraint( EntityOne As Object, EntityTwo As Object, Ratio As
Variant, ForwardDirection As Boolean, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As
RotateRotateConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object and its rotation axis. The input object must be a
planar Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For
planar objects the rotation axis is normal to the input face.
EntityTwo Object
Input object that defines the second object and its rotation axis. The input object must be
a planar Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object.
Ratio Variant
InsertConstraint Object Page 16 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Input Variant that defines the rotation ratio between the two input entities. This can be
either a numeric value or a string. A parameter for this value is created and the supplied
string or value is assigned to the parameter. The input value is unitless.
ForwardDirection Boolean
Input Boolean that defines the direction of rotation of the objects with respect to the axis
direction. If the input value is True then both objects will rotate the same direction
around their axes. If False, then they will rotate in opposite directions.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when
it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a
part is a mate constraint. In the case where the mate is between two planes, the parts can
be positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when
it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a
part is a mate constraint. In the case where the mate is between two planes, the parts can
be positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.ConvertToRotateTranslateConstraint
Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a rotate-translate constraint, and returns the RotateTranslateConstraint object.
This method can also be used to edit the geometries associated with a rotate-translate constraint without changing its
type, in which case the same object is returned by the method.
InsertConstraint Object Page 17 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Syntax
InsertConstraint.ConvertToRotateTranslateConstraint( EntityOne As Object, EntityTwo As Object, Ratio As
Variant, ForwardDirection As Boolean, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As
RotateTranslateConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object and its rotation axis. The input object must be a
planar Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For
planar objects the rotation axis is normal to the input face.
EntityTwo Object
Input object that defines the second object and its translation axis. The input object must
be a planar Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For
planar objects the translation axis is normal to the input face.
Ratio Variant
Input Variant that defines the distance of translation for every revolution of the rotated
occurrence. This can be either a numeric value or a string. A parameter for this value is
created and the supplied string or value is assigned to the parameter. If a value is input,
the units are centimeters. If a string is input the units can be specified as part of the string
or will default to the current length units of the document.
ForwardDirection Boolean
Input Boolean that defines the direction of translation with respect to the rotation
direction relative to the axes directions. If the input value is True then when the rotation
object is rotated in a positive direction about its axis, the translation object will move in
the positive direction of its vector, If False, it will move in the negative direction.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when
it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a
part is a mate constraint. In the case where the mate is between two planes, the parts can
be positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when
it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a
part is a mate constraint. In the case where the mate is between two planes, the parts can
be positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
This is an optional argument whose default value is null.
InsertConstraint Object Page 18 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 2011
InsertConstraint.ConvertToSymmetryConstraint
Method
Parent Object: InsertConstraint
Description
Converts the constraint to a symmetry constraint, and returns the AssemblySymmetryConstraint object.
Syntax
InsertConstraint.ConvertToSymmetryConstraint( EntityOne As Object, EntityTwo As Object, SymmetryPlane As
Object, [EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum,
[NormalsOpposed] As Boolean ) As AssemblySymmetryConstraint
Parameters
Name Type Description
EntityOne Object Input entity that is to be symmetric.
EntityTwo Object Input entity that is to be symmetric.
SymmetryPlane Object
Input planar entity that defines the symmetry plane. This can either be a
planar face or a work plane.
EntityOneInferredType InferredTypeEnum
Optional input constant that specifies how the geometry of entity one is
to be interpreted. Depending on the geometry of the entity one, different
options are possible.
If entity one is a linear entity this can be either kNoInference or
kInferredPoint, for kInferredPoint the mid-point of the linear entity is
used for the constraint. If entity one is a circular/elliptical sketch entity,
this can be either kInferredPiont or kInferredLine. If entity one is a
cylindrical, elliptic-cylindrical, conical face this can be kNoInference or
kInferredLine. If entity one is a toroidal face this can be either
kInferredLine or kInferredPoint. If entity one is a spherical face this can
be kInferredPoint. For a plane, only kNoInference is valid.
This is an optional argument whose default value is 24833.
EntityTwoInferredType InferredTypeEnum
Optional input enum that specifies how the geometry of entity two is to
be interpreted. Depending on the geometry of the entity two, different
options are possible. If entity two is a linear entity this can be either
kNoInference or kInferredPoint, for kInferredPoint the mid-point of the
linear entity is used for the constraint. If entity two is a circular/elliptical
sketch entity, this can be either kInferredPiont or kInferredLine. If entity
two is a cylindrical, elliptic-cylindrical, conical face this can be
kNoInference or kInferredLine. If entity two is a toroidal face this can
be either kInferredLine or kInferredPoint. If entity two is a spherical
face this can be kInferredPoint. For a plane, only kNoInference is valid.
This is an optional argument whose default value is 24833.
NormalsOpposed Boolean This argument only applies when the two entities are planar (planar face
or work plane) and defines if the normal of the planar entities are
oriented so they are opposed or aligned. If the input entities are not
InsertConstraint Object Page 19 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
planar, this argument is ignored. If they are planar and this argument is
not specified they will defined to be opposed.
This is an optional argument whose default value is True.
Version
Introduced in version 2014
InsertConstraint.ConvertToTangentConstraint
Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a tangent constraint, and returns the TangentConstraint object. This method can
also be used to edit the geometries associated with a tangent constraint without changing its type, in which case the
same object is returned by the method.
Syntax
InsertConstraint.ConvertToTangentConstraint( EntityOne As Object, EntityTwo As Object, InsideTangency As
Boolean, Offset As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As TangentConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
InsideTangency Boolean
Input Boolean that specifies the orientation of the surfaces at the tangent contact point of
the surfaces.
Offset Variant
Input Variant that defines the offset between the two input entities. This can be either a
numeric value or a string. A parameter for this value is created and the supplied string or
value is assigned to the parameter. If a value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or will default to the current length
units of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the
bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
InsertConstraint Object Page 20 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part
is a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the
bias points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of
the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.ConvertToTransitionalConstraint
Method
Parent Object: InsertConstraint
Description
Method that converts the constraint to a transitional constraint, and returns the TransitionalConstraint object. This
method can also be used to edit the geometries associated with a transitional constraint without changing its type, in
which case the same object is returned by the method.
Syntax
InsertConstraint.ConvertToTransitionalConstraint( FaceOne As Face, FaceTwo As Face, [BiasPointOne] As
Variant, [BiasPointTwo] As Variant ) As TransitionalConstraint
Parameters
Name Type Description
FaceOne Face
First input face that defines the initial face that is used in repositioning the parts. Once the
constraint is placed it can move along any of the faces of the part.
FaceTwo Face
Second input face that defines the initial face that is used in repositioning the parts. Once the
constraint is placed it can move along any of the faces of the part.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
InsertConstraint Object Page 21 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is
a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias points
coincident. This provides some general control over the position of the occurrence when it
isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is
a mate constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the
input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraint.Delete Method
Parent Object: InsertConstraint
Description
Method that deletes the constraint.
Syntax
InsertConstraint.Delete()
InsertConstraint Object Page 22 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 5
InsertConstraint.Distance Property
Parent Object: InsertConstraint
Description
Property that returns the Parameter object that controls the offset distance of the constraint.
Syntax
InsertConstraint.Distance() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 5
InsertConstraint.DriveSettings Property
Parent Object: InsertConstraint
Description
Returns the DriveSettings object for the constraint.
Syntax
InsertConstraint.DriveSettings() As DriveSettings
Property Value
This is a read only property whose value is a DriveSettings.
Version
Introduced in version 2014
InsertConstraint.EntityOne Property
Parent Object: InsertConstraint
InsertConstraint Object Page 23 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Description
Property that indicates the first of the geometric entities (Face, Axis, Edge, etc.) being constrained.
Syntax
InsertConstraint.EntityOne() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertConstraint.EntityTwo Property
Parent Object: InsertConstraint
Description
Property that indicates the second of the geometric entities (Face, Axis, Edge, etc.) being constrained.
Syntax
InsertConstraint.EntityTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertConstraint.GeometryOne Property
Parent Object: InsertConstraint
Description
Property that returns the geometry of the first of the two entities that this constraint is between. The geometry
returned is in the space of the assembly and for face or work plane geometries it accounts for the orientation of the
face or work plane.
Syntax
InsertConstraint.GeometryOne() As Object
InsertConstraint Object Page 24 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
InsertConstraint.GeometryTwo Property
Parent Object: InsertConstraint
Description
Property that returns the geometry of the second of the two entities that this constraint is between. The geometry
returned is in the space of the assembly and for face or work plane geometries it accounts for the orientation of the
face or work plane.
Syntax
InsertConstraint.GeometryTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
InsertConstraint.GetReferenceKey Method
Parent Object: InsertConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
InsertConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with
any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A
key context is created using the CreateKeyContext method of the ReferenceKeyManager object.
For all other object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
InsertConstraint Object Page 25 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 5
InsertConstraint.HealthStatus Property
Parent Object: InsertConstraint
Description
Property that returns an enum indicating the current state of the object.
Syntax
InsertConstraint.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
InsertConstraint.iMateResult Property
Parent Object: InsertConstraint
Description
Property that returns the iMateResult object that resulted in the creation of this constraint.
Syntax
InsertConstraint.iMateResult() As iMateResult
Property Value
This is a read only property whose value is an iMateResult.
Version
Introduced in version 6
InsertConstraint.IsDefaultName Property
Parent Object: InsertConstraint
InsertConstraint Object Page 26 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Description
Indicates if the name of this constraint is the original default name or if the user has changed the name. A value of
True indicates the name is the original default name.
Syntax
InsertConstraint.IsDefaultName() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2013
InsertConstraint.LayoutConstraint Property
Parent Object: InsertConstraint
Description
Property that returns the layout constraint this constraint is a member of. Returns Nothing in the case where this
constraint is not a member of a layout constraint. You can also determine if a constraint is a member of a layout
constraint by using the ResultOfLayoutConstraint property.
Syntax
InsertConstraint.LayoutConstraint() As LayoutConstraint
Property Value
This is a read only property whose value is a LayoutConstraint.
Version
Introduced in version 2010
InsertConstraint.LockRotation Property
Parent Object: InsertConstraint
Description
Property that gets/sets whether to lock the rotation freedom or not.
Syntax
InsertConstraint.LockRotation() As Boolean
InsertConstraint Object Page 27 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
InsertConstraint.Name Property
Parent Object: InsertConstraint
Description
Gets/Sets the displayable name of this constraint.
Syntax
InsertConstraint.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
InsertConstraint.OccurrenceOne Property
Parent Object: InsertConstraint
Description
Property that returns the first of the two objects this constraint is between.
Syntax
InsertConstraint.OccurrenceOne() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
InsertConstraint Object Page 28 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
InsertConstraint.OccurrenceTwo Property
Parent Object: InsertConstraint
Description
Property that returns the second of the two objects this constraint is between.
Syntax
InsertConstraint.OccurrenceTwo() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 4
InsertConstraint.Parent Property
Parent Object: InsertConstraint
Description
Property that returns the parent of the object.
Syntax
InsertConstraint.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
Version
Introduced in version 4
InsertConstraint.ResultOfiMate Property
Parent Object: InsertConstraint
Description
Property that indicates if this iMateResult represents a composite iMate.
InsertConstraint Object Page 29 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Syntax
InsertConstraint.ResultOfiMate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
InsertConstraint.ResultOfLayoutConstraint Property
Parent Object: InsertConstraint
Description
Property that indicates if this constraint is a member of a layout constraint. If True then it is a member of a layout
constraint. The layout constraint can be obtained by using the LayoutConstraint property.
Syntax
InsertConstraint.ResultOfLayoutConstraint() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
InsertConstraint.Suppressed Property
Parent Object: InsertConstraint
Description
Gets/Sets the Boolean flag indicating whether this constraint is suppressed.
Syntax
InsertConstraint.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
InsertConstraint Object Page 30 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
Version
Introduced in version 4
InsertConstraint.Type Property
Parent Object: InsertConstraint
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InsertConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
InsertConstraint.Visible Property
Parent Object: InsertConstraint
Description
Gets/Sets the Visible indicating whether this constraint is visible.
Syntax
InsertConstraint.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
InsertConstraint Object Page 31 of 31
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F3D.htm 16/06/2025
InsertConstraintProxy Object
Derived from: InsertConstraint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
ConvertToAngleConstraint
Method that converts the constraint to an angle constraint, and returns the AngleConstraint
object. This method can also be used to edit the geometries associated with an angle
constraint without changing its type, in which case the same object is returned by the
method.
ConvertToCustomConstraint
Method that converts the constraint to a custom constraint, and returns the
CustomConstraint object. This method can also be used to edit the geometries associated
with a custom constraint without changing its type, in which case the same object is
returned by the method.
ConvertToFlushConstraint
Method that converts the constraint to a flush constraint, and returns the FlushConstraint
object. This method can also be used to edit the geometries associated with a flush
constraint without changing its type, in which case the same object is returned by the
method.
ConvertToInsertConstraint
Method that converts the constraint to an insert constraint, and returns the InsertConstraint
object. This method can also be used to edit the geometries associated with an insert
constraint without changing its type, in which case the same object is returned by the
method.
ConvertToInsertConstraint2 Converts the constraint to an insert constraint, and returns the InsertConstraint object.
ConvertToMateConstraint
Method that converts the constraint to a mate constraint, and returns the MateConstraint
object. This method can also be used to edit the geometries associated with a mate
constraint without changing its type, in which case the same object is returned by the
method.
ConvertToMateConstraint2 Converts the constraint to a mate constraint, and returns the MateConstraint object.
ConvertToRotateRotateConstraint
Method that converts the constraint to a rotate-rotate constraint, and returns the
RotateRotateConstraint object. This method can also be used to edit the geometries
associated with a rotate-rotate constraint without changing its type, in which case the same
object is returned by the method.
ConvertToRotateTranslateConstraint
Method that converts the constraint to a rotate-translate constraint, and returns the
RotateTranslateConstraint object. This method can also be used to edit the geometries
associated with a rotate-translate constraint without changing its type, in which case the
same object is returned by the method.
ConvertToSymmetryConstraint
Converts the constraint to a symmetry constraint, and returns the
AssemblySymmetryConstraint object.
ConvertToTangentConstraint
Method that converts the constraint to a tangent constraint, and returns the
TangentConstraint object. This method can also be used to edit the geometries associated
with a tangent constraint without changing its type, in which case the same object is
returned by the method.
ConvertToTransitionalConstraint
Method that converts the constraint to a transitional constraint, and returns the
TransitionalConstraint object. This method can also be used to edit the geometries
associated with a transitional constraint without changing its type, in which case the same
object is returned by the method.
Delete Method that deletes the constraint.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AffectedOccurrenceOne Property that returns the first of the two objects affected by this constraint. This is the same as the
owning occurrence obtained from the OccurrenceOne property in the case where the owning assembly
is not adaptive. Else, this is the first non-adaptive occurrence in the path leading from the owning
InsertConstraintProxy Object Page 1 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
occurrence to the occurrence that contains the first of the two geometries that this constraint is
between.
AffectedOccurrenceTwo
Property that returns the second of the two objects affected by this constraint. This is the same as the
owning occurrence obtained from the OccurrenceTwo property in the case where the owning
assembly is not adaptive. Else, this is the first non-adaptive occurrence in the path leading from the
owning occurrence to the occurrence that contains the second of the two geometries that this
constraint is between.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
AxesOpposed Property that gets whether the direction of the two axes is opposed.
ConstraintLimits
Property that returns the ConstraintLimits object that provides access to various limits related settings
for the constraint.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Distance Property that returns the Parameter object that controls the offset distance of the constraint.
DriveSettings Returns the DriveSettings object for the constraint.
EntityOne Property that indicates the first of the geometric entities (Face, Axis, Edge, etc.) being constrained.
EntityTwo Property that indicates the second of the geometric entities (Face, Axis, Edge, etc.) being constrained.
GeometryOne
Property that returns the geometry of the first of the two entities that this constraint is between. The
geometry returned is in the space of the assembly and for face or work plane geometries it accounts
for the orientation of the face or work plane.
GeometryTwo
Property that returns the geometry of the second of the two entities that this constraint is between. The
geometry returned is in the space of the assembly and for face or work plane geometries it accounts
for the orientation of the face or work plane.
HealthStatus Property that returns an enum indicating the current state of the object.
iMateResult Property that returns the iMateResult object that resulted in the creation of this constraint.
IsDefaultName
Indicates if the name of this constraint is the original default name or if the user has changed the
name. A value of True indicates the name is the original default name.
LayoutConstraint
Property that returns the layout constraint this constraint is a member of. Returns Nothing in the case
where this constraint is not a member of a layout constraint. You can also determine if a constraint is a
member of a layout constraint by using the ResultOfLayoutConstraint property.
LockRotation Property that gets/sets whether to lock the rotation freedom or not.
Name Gets/Sets the displayable name of this constraint.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OccurrenceOne Property that returns the first of the two objects this constraint is between.
OccurrenceTwo Property that returns the second of the two objects this constraint is between.
Parent Property that returns the parent of the object.
ResultOfiMate Property that indicates if this iMateResult represents a composite iMate.
ResultOfLayoutConstraint
Property that indicates if this constraint is a member of a layout constraint. If True then it is a member
of a layout constraint. The layout constraint can be obtained by using the LayoutConstraint property.
Suppressed Gets/Sets the Boolean flag indicating whether this constraint is suppressed.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Gets/Sets the Visible indicating whether this constraint is visible.
Version
Introduced in version 11
InsertConstraintProxy.AffectedOccurrenceOne Property
Parent Object: InsertConstraintProxy
Description
Property that returns the first of the two objects affected by this constraint. This is the same as the owning occurrence obtained
from the OccurrenceOne property in the case where the owning assembly is not adaptive. Else, this is the first non-adaptive
occurrence in the path leading from the owning occurrence to the occurrence that contains the first of the two geometries that this
constraint is between.
InsertConstraintProxy Object Page 2 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Syntax
InsertConstraintProxy.AffectedOccurrenceOne() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
InsertConstraintProxy.AffectedOccurrenceTwo Property
Parent Object: InsertConstraintProxy
Description
Property that returns the second of the two objects affected by this constraint. This is the same as the owning occurrence obtained
from the OccurrenceTwo property in the case where the owning assembly is not adaptive. Else, this is the first non-adaptive
occurrence in the path leading from the owning occurrence to the occurrence that contains the second of the two geometries that
this constraint is between.
Syntax
InsertConstraintProxy.AffectedOccurrenceTwo() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
InsertConstraintProxy.Application Property
Parent Object: InsertConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
InsertConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
InsertConstraintProxy Object Page 3 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
InsertConstraintProxy.AttributeSets Property
Parent Object: InsertConstraintProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
InsertConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
InsertConstraintProxy.AxesOpposed Property
Parent Object: InsertConstraintProxy
Description
Property that gets whether the direction of the two axes is opposed.
Syntax
InsertConstraintProxy.AxesOpposed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
InsertConstraintProxy.ConstraintLimits Property
Parent Object: InsertConstraintProxy
Description
Property that returns the ConstraintLimits object that provides access to various limits related settings for the constraint.
Syntax
InsertConstraintProxy.ConstraintLimits() As ConstraintLimits
Property Value
This is a read only property whose value is a ConstraintLimits.
InsertConstraintProxy Object Page 4 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Version
Introduced in version 2011
InsertConstraintProxy.ContainingOccurrence Property
Parent Object: InsertConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is the
containing occurrence.
Syntax
InsertConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
InsertConstraintProxy.ConvertToAngleConstraint Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to an angle constraint, and returns the AngleConstraint object. This method can also be used to
edit the geometries associated with an angle constraint without changing its type, in which case the same object is returned by the
method.
Syntax
InsertConstraintProxy.ConvertToAngleConstraint( EntityOne As Object, EntityTwo As Object, Angle As Variant,
[SolutionType] As AngleConstraintSolutionTypeEnum, [ReferenceVectorEntity] As Variant, [BiasPointOne] As Variant,
[BiasPointTwo] As Variant ) As AngleConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object. This object can be a planar
face, work plane, linear edge, work axis, or a face that defines an
axis.
EntityTwo Object
Input object that defines the second object. This object can be a
planar face, work plane, linear edge, work axis, or a face that defines
an axis.
Angle Variant
Input Variant that defines the angle between the two input entities.
This can be either a numeric value or a string. A parameter for this
value is created and the supplied string or value is assigned to the
parameter. If a value is input, the units are radians. If a string is input
the units can be specified as part of the string or will default to the
current angle units of the document.
SolutionType AngleConstraintSolutionTypeEnum Optional input AngleConstraintSolutionTypeEnum that specifies the
solution type. If specified to be kDirectedSolution, the solution
always applies the right hand rule. If specified to be
InsertConstraintProxy Object Page 5 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
kUndirectedSolution, the solution allows either orientation, thus
resolving situations where component orientation flips during a
constraint drive or drag. If specified to be kReferenceVectorSolution,
the ReferenceVectorEntity argument must be provided with a third
entity for the solution. The default value is kDirectedSolution.
This is an optional argument whose default value is 78593.
ReferenceVectorEntity Variant
Optional input object that provides a third entity to solve the angle
constraint. This argument is ignored if the SolutionType argument is
not kReferenceVectorSolution. This object can be a planar face,
work plane, linear edge, work axis, or a face that defines an axis.
This is an optional argument whose default value is null.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being
controlled by another constraint. An example of when the bias points
are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the
parts can be positioned anywhere along the infinite plane that defines
their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other. If a bias point
is not given, one is calculated that is at the center of the parameter
range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being
controlled by another constraint. An example of when the bias points
are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the
parts can be positioned anywhere along the infinite plane that defines
their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other. If a bias point
is not given, one is calculated that is at the center of the parameter
range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToCustomConstraint Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a custom constraint, and returns the CustomConstraint object. This method can also be used
to edit the geometries associated with a custom constraint without changing its type, in which case the same object is returned by
the method.
Syntax
InsertConstraintProxy.ConvertToCustomConstraint( EntityOne As Object, EntityTwo As Object, ClientId As String ) As
CustomConstraint
Parameters
Name Type Description
InsertConstraintProxy Object Page 6 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object.
ClientId String Input String that specifies the ClientId, typically the ClassId of the Add-in creating the constraint.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToFlushConstraint Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a flush constraint, and returns the FlushConstraint object. This method can also be used to
edit the geometries associated with a flush constraint without changing its type, in which case the same object is returned by the
method.
Syntax
InsertConstraintProxy.ConvertToFlushConstraint( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As FlushConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object. The input object must be either a planar Face object or
WorkPlane object.
EntityTwo Object
Input object that defines the second object. The input object must be either a planar Face object or
WorkPlane object
Offset Variant
Input Variant that defines the offset between the two input entities. This can be either a numeric value or a
string. A parameter for this value is created and the supplied string or value is assigned to the parameter. If
a value is input, the units are centimeters. If a string is input the units can be specified as part of the string
or will default to the current length units of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of the
two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
InsertConstraintProxy Object Page 7 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of the
two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToInsertConstraint Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to an insert constraint, and returns the InsertConstraint object. This method can also be used to
edit the geometries associated with an insert constraint without changing its type, in which case the same object is returned by the
method.
Syntax
InsertConstraintProxy.ConvertToInsertConstraint( EntityOne As Object, EntityTwo As Object, AxesOpposed As Boolean,
Distance As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As InsertConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object. This object is a circular edge.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
AxesOpposed Boolean
Input Boolean that specifies whether the direction of the axies of the input entities are in the same
direction or opposed. A value of True indicates they are opposed.
Distance Variant
Input Variant that defines the offset between the two input entities. This can be either a numeric value or
a string. A parameter for this value is created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a string is input the units can be specified as
part of the string or will default to the current length units of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of
the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
InsertConstraintProxy Object Page 8 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of
the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToInsertConstraint2 Method
Parent Object: InsertConstraintProxy
Description
Converts the constraint to an insert constraint, and returns the InsertConstraint object.
Syntax
InsertConstraintProxy.ConvertToInsertConstraint2( EntityOne As Object, EntityTwo As Object, AxesOpposed As Boolean,
Distance As Variant, [LockRotation] As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As InsertConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object. This object is a circular edge.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
AxesOpposed Boolean
Input Boolean that specifies whether the direction of the axies of the input entities are in the same
direction or opposed. A value of True indicates they are opposed.
Distance Variant
Input Variant that defines the offset between the two input entities. This can be either a numeric value or
a string. A parameter for this value is created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a string is input the units can be specified as
part of the string or will default to the current length units of the document.
LockRotation Variant
Optional input Boolean that specifies whether to lock the rotation freedom or not.
This is an optional argument whose default value is null.
BiasPointOne Variant Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
InsertConstraintProxy Object Page 9 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of
the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of
the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2019
InsertConstraintProxy.ConvertToMateConstraint Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a mate constraint, and returns the MateConstraint object. This method can also be used to
edit the geometries associated with a mate constraint without changing its type, in which case the same object is returned by the
method.
Syntax
InsertConstraintProxy.ConvertToMateConstraint( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum, [BiasPointOne] As Variant,
[BiasPointTwo] As Variant ) As MateConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object.
Offset Variant Input Variant that defines the offset between the two input entities. This can be either
a numeric value or a string. A parameter for this value is created and the supplied
string or value is assigned to the parameter. If a value is input, the units are
InsertConstraintProxy Object Page 10 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
centimeters. If a string is input the units can be specified as part of the string or will
default to the current length units of the document.
EntityOneInferredType InferredTypeEnum
Optional input enum that specifies how the geometry of entity one is to be
interpreted. Depending on the geometry of the entity one, different options are
possible.
If entity one is a cylinder this can be either kNoInferrence or kInferredLine. For
kNoInferrence to be valid for a cylinder, entity two must also be a cylinder and they
must be the same radius.
If entity one is a sphere this can be either kNoInferrence or kInferredPoint. For
kNoInferrence to be valid for a sphere, entity two must also be a sphere and they
must be the same radius.
If entity one is a cone this can be either kNoInferrence or kInferredLine. For
kNoInferrence to be valid for a cone, entity two must also be a cone and they must
have the same taper angle.
If entity one is a torus this can be either kInferredLine or kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
EntityTwoInferredType InferredTypeEnum
Input enum that specifies how the geometry of entity two is to be interpreted.
Depending on the geometry of the entity two, different options are possible.
If entity two is a cylinder this can be either kNoInferrence or kInferredLine. For
kNoInferrence to be valid for a cylinder, entity one must also be a cylinder and they
must be the same radius.
If entity two is a sphere this can be either kNoInferrence or kInferredPoint. For
kNoInferrence to be valid for a sphere, entity one must also be a sphere and they
must be the same radius.
If entity two is a cone this can be either kNoInferrence or kInferredLine. For
kNoInferrence to be valid for a cone, entity one must also be a cone and they must
have the same taper angle.
If entity two is a torus this can be either kInferredLine or kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias
points coincident. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on
a part is a mate constraint. In the case where the mate is between two planes, the
parts can be positioned anywhere along the infinite plane that defines their mating
contact. Using the bias points you can define the position of the two occurrences,
relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter
range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the
occurrence. The occurrences are repositioned in an attempt to make the two bias
points coincident. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint.
InsertConstraintProxy Object Page 11 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
An example of when the bias points are useful is the case when the first constraint on
a part is a mate constraint. In the case where the mate is between two planes, the
parts can be positioned anywhere along the infinite plane that defines their mating
contact. Using the bias points you can define the position of the two occurrences,
relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter
range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToMateConstraint2 Method
Parent Object: InsertConstraintProxy
Description
Converts the constraint to a mate constraint, and returns the MateConstraint object.
Syntax
InsertConstraintProxy.ConvertToMateConstraint2( EntityOne As Object, EntityTwo As Object, Offset As Variant,
[EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum, [SolutionType] As
MateConstraintSolutionTypeEnum, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As MateConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first geometry.
EntityTwo Object Input object that defines the second geometry
Offset Variant
Input Variant that defines the offset between the two input
entities. This can be either a numeric value or a string. A parameter
for this value is created and the supplied string or value is assigned to
the parameter. If a value is input, the units are centimeters. If a string
is input the units can be specified as part of the string or will default
to the current length units of the document.
EntityOneInferredType InferredTypeEnum Optional input enum that specifies how the geometry of entity one is
to be interpreted. Depending on the geometry of the entity one,
different options are possible.
If entity one is a cylinder this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cylinder, entity
two must also be a cylinder and they must be the same radius.
If entity one is a sphere this can be either kNoInferrence or
kInferredPoint. For kNoInferrence to be valid for a sphere, entity two
must also be a sphere and they must be the same radius.
If entity one is a cone this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cone, entity two
must also be a cone and they must have the same taper angle.
If entity one is a torus this can be either kInferredLine or
kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
InsertConstraintProxy Object Page 12 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
EntityTwoInferredType InferredTypeEnum
Optional input enum that specifies how the geometry of entity two is
to be interpreted. Depending on the geometry of the entity two,
different options are possible.
If entity two is a cylinder this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cylinder, entity
one must also be a cylinder and they must be the same radius.
If entity two is a sphere this can be either kNoInferrence or
kInferredPoint. For kNoInferrence to be valid for a sphere, entity one
must also be a sphere and they must be the same radius.
If entity two is a cone this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cone, entity one
must also be a cone and they must have the same taper angle.
If entity two is a torus this can be either kInferredLine or
kInferredPoint.
For a plane, only kNoInferrence is valid.
This is an optional argument whose default value is 24833.
SolutionType MateConstraintSolutionTypeEnum
Optional input MateConstraintSolutionTypeEnum that specifies the
solution type for the mate constraint. If not provided this defaults to
kOpposedSolutionType.
This is an optional argument whose default value is 115457.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn’t
being controlled by another constraint.
An example of when the bias points are useful is the case when the
first constraint on a part is a mate constraint. In the case where the
mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the
bias points you can define the position of the two occurrences,
relative to each other.
If a bias point is not given, one is calculated that is at the center of
the parameter range of the input entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial
position of the occurrence. The occurrences are repositioned in an
attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn’t
being controlled by another constraint.
An example of when the bias points are useful is the case when the
first constraint on a part is a mate constraint. In the case where the
mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the
bias points you can define the position of the two occurrences,
relative to each other.
If a bias point is not given, one is calculated that is at the center of
the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2019
InsertConstraintProxy Object Page 13 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
InsertConstraintProxy.ConvertToRotateRotateConstraint
Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a rotate-rotate constraint, and returns the RotateRotateConstraint object. This method can
also be used to edit the geometries associated with a rotate-rotate constraint without changing its type, in which case the same
object is returned by the method.
Syntax
InsertConstraintProxy.ConvertToRotateRotateConstraint( EntityOne As Object, EntityTwo As Object, Ratio As Variant,
ForwardDirection As Boolean, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As RotateRotateConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object and its rotation axis. The input object must be a planar Face, a
revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For planar objects the rotation axis
is normal to the input face.
EntityTwo Object
Input object that defines the second object and its rotation axis. The input object must be a planar
Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object.
Ratio Variant
Input Variant that defines the rotation ratio between the two input entities. This can be either a
numeric value or a string. A parameter for this value is created and the supplied string or value is
assigned to the parameter. The input value is unitless.
ForwardDirection Boolean
Input Boolean that defines the direction of rotation of the objects with respect to the axis direction. If
the input value is True then both objects will rotate the same direction around their axes. If False, then
they will rotate in opposite directions.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
InsertConstraintProxy Object Page 14 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToRotateTranslateConstraint
Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a rotate-translate constraint, and returns the RotateTranslateConstraint object. This method
can also be used to edit the geometries associated with a rotate-translate constraint without changing its type, in which case the
same object is returned by the method.
Syntax
InsertConstraintProxy.ConvertToRotateTranslateConstraint( EntityOne As Object, EntityTwo As Object, Ratio As Variant,
ForwardDirection As Boolean, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As RotateTranslateConstraint
Parameters
Name Type Description
EntityOne Object
Input object that defines the first object and its rotation axis. The input object must be a planar Face, a
revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For planar objects the rotation axis
is normal to the input face.
EntityTwo Object
Input object that defines the second object and its translation axis. The input object must be a planar
Face, a revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For planar objects the
translation axis is normal to the input face.
Ratio Variant
Input Variant that defines the distance of translation for every revolution of the rotated occurrence.
This can be either a numeric value or a string. A parameter for this value is created and the supplied
string or value is assigned to the parameter. If a value is input, the units are centimeters. If a string is
input the units can be specified as part of the string or will default to the current length units of the
document.
ForwardDirection Boolean
Input Boolean that defines the direction of translation with respect to the rotation direction relative to
the axes directions. If the input value is True then when the rotation object is rotated in a positive
direction about its axis, the translation object will move in the positive direction of its vector, If False,
it will move in the negative direction.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
InsertConstraintProxy Object Page 15 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToSymmetryConstraint
Method
Parent Object: InsertConstraintProxy
Description
Converts the constraint to a symmetry constraint, and returns the AssemblySymmetryConstraint object.
Syntax
InsertConstraintProxy.ConvertToSymmetryConstraint( EntityOne As Object, EntityTwo As Object, SymmetryPlane As
Object, [EntityOneInferredType] As InferredTypeEnum, [EntityTwoInferredType] As InferredTypeEnum, [NormalsOpposed]
As Boolean ) As AssemblySymmetryConstraint
Parameters
Name Type Description
EntityOne Object Input entity that is to be symmetric.
EntityTwo Object Input entity that is to be symmetric.
SymmetryPlane Object
Input planar entity that defines the symmetry plane. This can either be a planar face
or a work plane.
EntityOneInferredType InferredTypeEnum
Optional input constant that specifies how the geometry of entity one is to be
interpreted. Depending on the geometry of the entity one, different options are
possible.
If entity one is a linear entity this can be either kNoInference or kInferredPoint, for
kInferredPoint the mid-point of the linear entity is used for the constraint. If entity
one is a circular/elliptical sketch entity, this can be either kInferredPiont or
kInferredLine. If entity one is a cylindrical, elliptic-cylindrical, conical face this can
be kNoInference or kInferredLine. If entity one is a toroidal face this can be either
kInferredLine or kInferredPoint. If entity one is a spherical face this can be
kInferredPoint. For a plane, only kNoInference is valid.
This is an optional argument whose default value is 24833.
EntityTwoInferredType InferredTypeEnum
Optional input enum that specifies how the geometry of entity two is to be
interpreted. Depending on the geometry of the entity two, different options are
possible. If entity two is a linear entity this can be either kNoInference or
kInferredPoint, for kInferredPoint the mid-point of the linear entity is used for the
constraint. If entity two is a circular/elliptical sketch entity, this can be either
kInferredPiont or kInferredLine. If entity two is a cylindrical, elliptic-cylindrical,
conical face this can be kNoInference or kInferredLine. If entity two is a toroidal
face this can be either kInferredLine or kInferredPoint. If entity two is a spherical
face this can be kInferredPoint. For a plane, only kNoInference is valid.
This is an optional argument whose default value is 24833.
NormalsOpposed Boolean This argument only applies when the two entities are planar (planar face or work
plane) and defines if the normal of the planar entities are oriented so they are
opposed or aligned. If the input entities are not planar, this argument is ignored. If
they are planar and this argument is not specified they will defined to be opposed.
InsertConstraintProxy Object Page 16 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
This is an optional argument whose default value is True.
Version
Introduced in version 2014
InsertConstraintProxy.ConvertToTangentConstraint
Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a tangent constraint, and returns the TangentConstraint object. This method can also be
used to edit the geometries associated with a tangent constraint without changing its type, in which case the same object is
returned by the method.
Syntax
InsertConstraintProxy.ConvertToTangentConstraint( EntityOne As Object, EntityTwo As Object, InsideTangency As Boolean,
Offset As Variant, [BiasPointOne] As Variant, [BiasPointTwo] As Variant ) As TangentConstraint
Parameters
Name Type Description
EntityOne Object Input object that defines the first object.
EntityTwo Object Input object that defines the second object. This object is a circular edge.
InsideTangency Boolean Input Boolean that specifies the orientation of the surfaces at the tangent contact point of the surfaces.
Offset Variant
Input Variant that defines the offset between the two input entities. This can be either a numeric value
or a string. A parameter for this value is created and the supplied string or value is assigned to the
parameter. If a value is input, the units are centimeters. If a string is input the units can be specified as
part of the string or will default to the current length units of the document.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
BiasPointTwo Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
InsertConstraintProxy Object Page 17 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias points you can define the
position of the two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input
entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.ConvertToTransitionalConstraint
Method
Parent Object: InsertConstraintProxy
Description
Method that converts the constraint to a transitional constraint, and returns the TransitionalConstraint object. This method can also
be used to edit the geometries associated with a transitional constraint without changing its type, in which case the same object is
returned by the method.
Syntax
InsertConstraintProxy.ConvertToTransitionalConstraint( FaceOne As Face, FaceTwo As Face, [BiasPointOne] As Variant,
[BiasPointTwo] As Variant ) As TransitionalConstraint
Parameters
Name Type Description
FaceOne Face
First input face that defines the initial face that is used in repositioning the parts. Once the constraint is
placed it can move along any of the faces of the part.
FaceTwo Face
Second input face that defines the initial face that is used in repositioning the parts. Once the constraint is
placed it can move along any of the faces of the part.
BiasPointOne Variant
Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of the
two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
InsertConstraintProxy Object Page 18 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
BiasPointTwo Variant Optional input Point object that is used help in determining the initial position of the occurrence. The
occurrences are repositioned in an attempt to make the two bias points coincident. This provides some
general control over the position of the occurrence when it isn't being controlled by another constraint.
An example of when the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be positioned anywhere along
the infinite plane that defines their mating contact. Using the bias points you can define the position of the
two occurrences, relative to each other.
If a bias point is not given, one is calculated that is at the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
InsertConstraintProxy.Delete Method
Parent Object: InsertConstraintProxy
Description
Method that deletes the constraint.
Syntax
InsertConstraintProxy.Delete()
Version
Introduced in version 11
InsertConstraintProxy.Distance Property
Parent Object: InsertConstraintProxy
Description
Property that returns the Parameter object that controls the offset distance of the constraint.
Syntax
InsertConstraintProxy.Distance() As Parameter
Property Value
This is a read only property whose value is a Parameter.
InsertConstraintProxy Object Page 19 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Version
Introduced in version 11
InsertConstraintProxy.DriveSettings Property
Parent Object: InsertConstraintProxy
Description
Returns the DriveSettings object for the constraint.
Syntax
InsertConstraintProxy.DriveSettings() As DriveSettings
Property Value
This is a read only property whose value is a DriveSettings.
Version
Introduced in version 2014
InsertConstraintProxy.EntityOne Property
Parent Object: InsertConstraintProxy
Description
Property that indicates the first of the geometric entities (Face, Axis, Edge, etc.) being constrained.
Syntax
InsertConstraintProxy.EntityOne() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
InsertConstraintProxy.EntityTwo Property
Parent Object: InsertConstraintProxy
Description
Property that indicates the second of the geometric entities (Face, Axis, Edge, etc.) being constrained.
Syntax
InsertConstraintProxy.EntityTwo() As Object
InsertConstraintProxy Object Page 20 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
InsertConstraintProxy.GeometryOne Property
Parent Object: InsertConstraintProxy
Description
Property that returns the geometry of the first of the two entities that this constraint is between. The geometry returned is in the
space of the assembly and for face or work plane geometries it accounts for the orientation of the face or work plane.
Syntax
InsertConstraintProxy.GeometryOne() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
InsertConstraintProxy.GeometryTwo Property
Parent Object: InsertConstraintProxy
Description
Property that returns the geometry of the second of the two entities that this constraint is between. The geometry returned is in the
space of the assembly and for face or work plane geometries it accounts for the orientation of the face or work plane.
Syntax
InsertConstraintProxy.GeometryTwo() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
InsertConstraintProxy.GetReferenceKey Method
Parent Object: InsertConstraintProxy
InsertConstraintProxy Object Page 21 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
InsertConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep
entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created
using the CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key
context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 11
InsertConstraintProxy.HealthStatus Property
Parent Object: InsertConstraintProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
InsertConstraintProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 11
InsertConstraintProxy.iMateResult Property
Parent Object: InsertConstraintProxy
Description
Property that returns the iMateResult object that resulted in the creation of this constraint.
Syntax
InsertConstraintProxy.iMateResult() As iMateResult
InsertConstraintProxy Object Page 22 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Property Value
This is a read only property whose value is an iMateResult.
Version
Introduced in version 11
InsertConstraintProxy.IsDefaultName Property
Parent Object: InsertConstraintProxy
Description
Indicates if the name of this constraint is the original default name or if the user has changed the name. A value of True indicates
the name is the original default name.
Syntax
InsertConstraintProxy.IsDefaultName() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2013
InsertConstraintProxy.LayoutConstraint Property
Parent Object: InsertConstraintProxy
Description
Property that returns the layout constraint this constraint is a member of. Returns Nothing in the case where this constraint is not a
member of a layout constraint. You can also determine if a constraint is a member of a layout constraint by using the
ResultOfLayoutConstraint property.
Syntax
InsertConstraintProxy.LayoutConstraint() As LayoutConstraint
Property Value
This is a read only property whose value is a LayoutConstraint.
Version
Introduced in version 2010
InsertConstraintProxy.LockRotation Property
Parent Object: InsertConstraintProxy
InsertConstraintProxy Object Page 23 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Description
Property that gets/sets whether to lock the rotation freedom or not.
Syntax
InsertConstraintProxy.LockRotation() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
InsertConstraintProxy.Name Property
Parent Object: InsertConstraintProxy
Description
Gets/Sets the displayable name of this constraint.
Syntax
InsertConstraintProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
InsertConstraintProxy.NativeObject Property
Parent Object: InsertConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
InsertConstraintProxy.NativeObject() As InsertConstraint
Property Value
This is a read only property whose value is an InsertConstraint.
Version
Introduced in version 11
InsertConstraintProxy Object Page 24 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
InsertConstraintProxy.OccurrenceOne Property
Parent Object: InsertConstraintProxy
Description
Property that returns the first of the two objects this constraint is between.
Syntax
InsertConstraintProxy.OccurrenceOne() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
InsertConstraintProxy.OccurrenceTwo Property
Parent Object: InsertConstraintProxy
Description
Property that returns the second of the two objects this constraint is between.
Syntax
InsertConstraintProxy.OccurrenceTwo() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
InsertConstraintProxy.Parent Property
Parent Object: InsertConstraintProxy
Description
Property that returns the parent of the object.
Syntax
InsertConstraintProxy.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
InsertConstraintProxy Object Page 25 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Version
Introduced in version 11
InsertConstraintProxy.ResultOfiMate Property
Parent Object: InsertConstraintProxy
Description
Property that indicates if this iMateResult represents a composite iMate.
Syntax
InsertConstraintProxy.ResultOfiMate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
InsertConstraintProxy.ResultOfLayoutConstraint Property
Parent Object: InsertConstraintProxy
Description
Property that indicates if this constraint is a member of a layout constraint. If True then it is a member of a layout constraint. The
layout constraint can be obtained by using the LayoutConstraint property.
Syntax
InsertConstraintProxy.ResultOfLayoutConstraint() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
InsertConstraintProxy.Suppressed Property
Parent Object: InsertConstraintProxy
Description
Gets/Sets the Boolean flag indicating whether this constraint is suppressed.
InsertConstraintProxy Object Page 26 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
Syntax
InsertConstraintProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
InsertConstraintProxy.Type Property
Parent Object: InsertConstraintProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InsertConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
InsertConstraintProxy.Visible Property
Parent Object: InsertConstraintProxy
Description
Gets/Sets the Visible indicating whether this constraint is visible.
Syntax
InsertConstraintProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
InsertConstraintProxy Object Page 27 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9040.htm 16/06/2025
InsertiMateDefinition Object
Derived from: iMateDefinition Object
Description
The InsertiMateDefinition object represents an insert iMate definition. It is derived from the
iMateDefinition object.
Methods
Name Description
Delete Method that deletes the iMateDefinition.
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
AxesOpposed Property that gets whether the direction of the two axes is opposed.
ConstraintLimits
Property that returns the ConstraintLimits object that provides access to
various limits related settings for the iMate definition.
Distance
Property that returns the Parameter object that controls the distance of the
insert iMate definition.
Entity Property that returns the entity used for the iMate definition.
Exported
Read-write property that gets and sets whether the object is exported.
Objects must be marked for export in order for them to be derived.
HasReferenceComponent
Property that specifies if the object was created as the result of a derived
part.
Identifier
Property that returns the internal unique identifier for this
iMateDefinition.
MatchList
Gets and sets an array of strings that specifies the priority order for iMate
definition matches.
Name Gets the name of this iMateDefinition.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the creation
of this feature.
ReferencedEntity Gets the object this entity is dependent on.
SequenceIndex Gets the index of this iMateDefinition.
Suppressed
Gets the boolean flag that indicates whether this iMateDefinition is
suppressed or not.
Type Returns an ObjectTypeEnum indicating this object's type.
InsertiMateDefinition Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Accessed From
iMateDefinitions.AddInsertiMateDefinition
Derived Classes
InsertiMateDefinitionProxy
Samples
Name Description
Add iMate
Definition
Add iMate definitions using AddMateiMateDefinition and
AddInsertiMateDefinition.
Version
Introduced in version 6
InsertiMateDefinition.Application Property
Parent Object: InsertiMateDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
InsertiMateDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertiMateDefinition.AttributeSets Property
Parent Object: InsertiMateDefinition
InsertiMateDefinition Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
InsertiMateDefinition.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
InsertiMateDefinition.AxesOpposed Property
Parent Object: InsertiMateDefinition
Description
Property that gets whether the direction of the two axes is opposed.
Syntax
InsertiMateDefinition.AxesOpposed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
InsertiMateDefinition.ConstraintLimits
Property
Parent Object: InsertiMateDefinition
Description
InsertiMateDefinition Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Property that returns the ConstraintLimits object that provides access to various limits related settings
for the iMate definition.
Syntax
InsertiMateDefinition.ConstraintLimits() As ConstraintLimits
Property Value
This is a read only property whose value is a ConstraintLimits.
Version
Introduced in version 2011
InsertiMateDefinition.Delete Method
Parent Object: InsertiMateDefinition
Description
Method that deletes the iMateDefinition.
Syntax
InsertiMateDefinition.Delete()
Version
Introduced in version 11
InsertiMateDefinition.Distance Property
Parent Object: InsertiMateDefinition
Description
Property that returns the Parameter object that controls the distance of the insert iMate definition.
Syntax
InsertiMateDefinition.Distance() As Parameter
InsertiMateDefinition Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
InsertiMateDefinition.Entity Property
Parent Object: InsertiMateDefinition
Description
Property that returns the entity used for the iMate definition.
Syntax
InsertiMateDefinition.Entity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertiMateDefinition.Exported Property
Parent Object: InsertiMateDefinition
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
InsertiMateDefinition.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
InsertiMateDefinition Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Version
Introduced in version 2011
InsertiMateDefinition.GetReferenceKey
Method
Parent Object: InsertiMateDefinition
Description
Method that generates and returns the reference key for this entity.
Syntax
InsertiMateDefinition.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 7
InsertiMateDefinition.HasReferenceComponent
Property
Parent Object: InsertiMateDefinition
Description
Property that specifies if the object was created as the result of a derived part.
InsertiMateDefinition Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Syntax
InsertiMateDefinition.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
InsertiMateDefinition.Identifier Property
Parent Object: InsertiMateDefinition
Description
Property that returns the internal unique identifier for this iMateDefinition.
Syntax
InsertiMateDefinition.Identifier() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
InsertiMateDefinition.MatchList Property
Parent Object: InsertiMateDefinition
Description
Gets and sets an array of strings that specifies the priority order for iMate definition matches.
Syntax
InsertiMateDefinition.MatchList() As Variant
InsertiMateDefinition Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 11
InsertiMateDefinition.Name Property
Parent Object: InsertiMateDefinition
Description
Gets the name of this iMateDefinition.
Syntax
InsertiMateDefinition.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
InsertiMateDefinition.ReferenceComponent
Property
Parent Object: InsertiMateDefinition
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
InsertiMateDefinition.ReferenceComponent() As ReferenceComponent
InsertiMateDefinition Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2009
InsertiMateDefinition.ReferencedEntity
Property
Parent Object: InsertiMateDefinition
Description
Gets the object this entity is dependent on.
Syntax
InsertiMateDefinition.ReferencedEntity() As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Version
Introduced in version 2009
InsertiMateDefinition.SequenceIndex Property
Parent Object: InsertiMateDefinition
Description
Gets the index of this iMateDefinition.
Syntax
InsertiMateDefinition.SequenceIndex() As Long
InsertiMateDefinition Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
InsertiMateDefinition.Suppressed Property
Parent Object: InsertiMateDefinition
Description
Gets the boolean flag that indicates whether this iMateDefinition is suppressed or not.
Syntax
InsertiMateDefinition.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
InsertiMateDefinition.Type Property
Parent Object: InsertiMateDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InsertiMateDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
InsertiMateDefinition Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
Version
Introduced in version 6
InsertiMateDefinition Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBF2F.htm 16/06/2025
InsertiMateDefinitionProxy Object
Derived from: InsertiMateDefinition Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the iMateDefinition.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
AxesOpposed Property that gets whether the direction of the two axes is opposed.
ConstraintLimits
Property that returns the ConstraintLimits object that provides access to various limits
related settings for the iMate definition.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being
referenced through. The returned occurrence is the containing occurrence.
Distance
Property that returns the Parameter object that controls the distance of the insert iMate
definition.
Entity Property that returns the entity used for the iMate definition.
Exported
Read-write property that gets and sets whether the object is exported. Objects must be
marked for export in order for them to be derived.
HasReferenceComponent Property that specifies if the object was created as the result of a derived part.
Identifier Property that returns the internal unique identifier for this iMateDefinition.
IsConsumed
Property that gets whether this object is consumed in the context of the active
assembly/part/sketch.
MatchList
Gets and sets an array of strings that specifies the priority order for iMate definition
matches.
Name Gets the name of this iMateDefinition.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the creation of this
feature.
ReferencedEntity Gets the object this entity is dependent on.
SequenceIndex Gets the index of this iMateDefinition.
Suppressed Gets the boolean flag that indicates whether this iMateDefinition is suppressed or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
InsertiMateDefinitionProxy Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
InsertiMateDefinitionProxy.Application Property
Parent Object: InsertiMateDefinitionProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
InsertiMateDefinitionProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertiMateDefinitionProxy.AttributeSets Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
InsertiMateDefinitionProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
InsertiMateDefinitionProxy.AxesOpposed Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that gets whether the direction of the two axes is opposed.
InsertiMateDefinitionProxy Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Syntax
InsertiMateDefinitionProxy.AxesOpposed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
InsertiMateDefinitionProxy.ConstraintLimits
Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the ConstraintLimits object that provides access to various limits related settings for the
iMate definition.
Syntax
InsertiMateDefinitionProxy.ConstraintLimits() As ConstraintLimits
Property Value
This is a read only property whose value is a ConstraintLimits.
Version
Introduced in version 2011
InsertiMateDefinitionProxy.ContainingOccurrence
Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
InsertiMateDefinitionProxy.ContainingOccurrence() As ComponentOccurrence
InsertiMateDefinitionProxy Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
InsertiMateDefinitionProxy.Delete Method
Parent Object: InsertiMateDefinitionProxy
Description
Method that deletes the iMateDefinition.
Syntax
InsertiMateDefinitionProxy.Delete()
Version
Introduced in version 11
InsertiMateDefinitionProxy.Distance Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the Parameter object that controls the distance of the insert iMate definition.
Syntax
InsertiMateDefinitionProxy.Distance() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
InsertiMateDefinitionProxy.Entity Property
Parent Object: InsertiMateDefinitionProxy
InsertiMateDefinitionProxy Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Description
Property that returns the entity used for the iMate definition.
Syntax
InsertiMateDefinitionProxy.Entity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InsertiMateDefinitionProxy.Exported Property
Parent Object: InsertiMateDefinitionProxy
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for export in order
for them to be derived.
Syntax
InsertiMateDefinitionProxy.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
InsertiMateDefinitionProxy.GetReferenceKey
Method
Parent Object: InsertiMateDefinitionProxy
Description
Method that generates and returns the reference key for this entity.
InsertiMateDefinitionProxy Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Syntax
InsertiMateDefinitionProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 7
InsertiMateDefinitionProxy.HasReferenceComponent
Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
InsertiMateDefinitionProxy.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
InsertiMateDefinitionProxy.Identifier Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the internal unique identifier for this iMateDefinition.
InsertiMateDefinitionProxy Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Syntax
InsertiMateDefinitionProxy.Identifier() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
InsertiMateDefinitionProxy.IsConsumed Property
Parent Object: InsertiMateDefinitionProxy
Description
Property that gets whether this object is consumed in the context of the active assembly/part/sketch.
Syntax
InsertiMateDefinitionProxy.IsConsumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
InsertiMateDefinitionProxy.MatchList Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets and sets an array of strings that specifies the priority order for iMate definition matches.
Syntax
InsertiMateDefinitionProxy.MatchList() As Variant
Property Value
This is a read/write property whose value is a Variant.
InsertiMateDefinitionProxy Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Version
Introduced in version 11
InsertiMateDefinitionProxy.Name Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets the name of this iMateDefinition.
Syntax
InsertiMateDefinitionProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
InsertiMateDefinitionProxy.NativeObject Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
InsertiMateDefinitionProxy.NativeObject() As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Version
Introduced in version 6
InsertiMateDefinitionProxy.ReferenceComponent
Property
InsertiMateDefinitionProxy Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Parent Object: InsertiMateDefinitionProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
InsertiMateDefinitionProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2009
InsertiMateDefinitionProxy.ReferencedEntity
Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets the object this entity is dependent on.
Syntax
InsertiMateDefinitionProxy.ReferencedEntity() As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Version
Introduced in version 2009
InsertiMateDefinitionProxy.SequenceIndex Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets the index of this iMateDefinition.
InsertiMateDefinitionProxy Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Syntax
InsertiMateDefinitionProxy.SequenceIndex() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
InsertiMateDefinitionProxy.Suppressed Property
Parent Object: InsertiMateDefinitionProxy
Description
Gets the boolean flag that indicates whether this iMateDefinition is suppressed or not.
Syntax
InsertiMateDefinitionProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
InsertiMateDefinitionProxy.Type Property
Parent Object: InsertiMateDefinitionProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InsertiMateDefinitionProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
InsertiMateDefinitionProxy Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
Version
Introduced in version 6
InsertiMateDefinitionProxy Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6256.htm 16/06/2025
IntegerAssetValue Object
Derived from: AssetValue Object
Description
The IntegerAssetValue object represents an integer value. The value is returned as a Long and a
Long should be used when setting the value. This object also provides any limits that the value
must meet to be valid.
Methods
Name Description
GetLimits Method that returns the limits for this value.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DisplayName
Gets the name of this value as seen in the Material or Appearance Browser.
This can change based on the current Inventor language.
HasLimits
Gets the boolean flag that indicates if this value has any limits it must be
within to be valid. If True, use the GetLimits method to get the limit values.
HasMultipleValues Gets the boolean flag that indicates if this value has multiple values or not.
IsReadOnly
Gets the boolean flag that indicates if this asset value is read-only. If True
any attempted edits will fail.
Name
Gets the key name of the value. This name will remain constant for all
languages and is the name used as input to the Item property or the Asset
object.
Parent Read-only property that returns the parent Asset object.
Type
Read-only property returning kAssetValueObject indicating this object’s
type.
Value Gets and sets this asset value.
Values
Gets and sets the values associated with this asset value. HasMultipleValues
property indicates if this property will be returning more than one value.
ValueType
Read-only property that returns the data type that the Value property for this
AssetValue object will return.
Samples
Name Description
IntegerAssetValue Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Write out all
appearance
information to a file.
This sample writes out information about all of the appearances in all
libraries. This can be useful when trying to use the API to modify existing
appearances by allowing to easily see what information is available for an
appearance.
Write out all materials
to a file.
This sample writes out information about all of the materials in all
libraries. This can be useful when trying to use the API to modify existing
materials by allowing to easily see what information is available for a
material.
Write out all physical
properties to a file.
This sample writes out information about all of the physical properties in
all libraries. This can be useful when trying to use the API to modify
existing materials by allowing to easily see what information is available
for a physical property.
Write out all
document
appearances
This sample writes out information about all of the appearances in the
active document. This can be useful when trying to use the API to modify
existing appearances by allowing you to easily see what information is
available for an appearance.
Write out all
document materials to
a file.
This sample writes out information about all of the materials in the active
document. This can be useful when trying to use the API to modify
existing materials by allowing you to easily see what information is
available for a material.
Write out all
document physical
properties to a file.
This sample writes out information about all of the physical properties in
the active document. This can be useful when trying to use the API to
modify existing materials by allowing you to easily see what information
is available for a physical property
Version
Introduced in version 2014
IntegerAssetValue.Application Property
Parent Object: IntegerAssetValue
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
IntegerAssetValue.Application() As Object
Property Value
This is a read only property whose value is an Object.
IntegerAssetValue Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Version
Introduced in version 2014
IntegerAssetValue.DisplayName Property
Parent Object: IntegerAssetValue
Description
Gets the name of this value as seen in the Material or Appearance Browser. This can change based
on the current Inventor language.
Syntax
IntegerAssetValue.DisplayName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2014
IntegerAssetValue.GetLimits Method
Parent Object: IntegerAssetValue
Description
Method that returns the limits for this value.
Syntax
IntegerAssetValue.GetLimits( HasLowLimit As Boolean, LowLimit As Long, HasHighLimit As
Boolean, HighLimit As Long )
Parameters
Name Type Description
HasLowLimit Boolean
IntegerAssetValue Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Output Boolean that indicates if there is a lower limit. If False then the
value of the LowLimit argument should be ignored.
LowLimit Long Output Long that is the lowest valid value.
HasHighLimit Boolean
Output Boolean that indicates if there is an upper limit. If False then the
value of the HighLimit argument should be ignored.
HighLimit Long Output Long that is the upper valid value.
Version
Introduced in version 2014
IntegerAssetValue.HasLimits Property
Parent Object: IntegerAssetValue
Description
Gets the boolean flag that indicates if this value has any limits it must be within to be valid. If
True, use the GetLimits method to get the limit values.
Syntax
IntegerAssetValue.HasLimits() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2014
IntegerAssetValue.HasMultipleValues
Property
Parent Object: IntegerAssetValue
Description
Gets the boolean flag that indicates if this value has multiple values or not.
IntegerAssetValue Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Syntax
IntegerAssetValue.HasMultipleValues() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2014
IntegerAssetValue.IsReadOnly Property
Parent Object: IntegerAssetValue
Description
Gets the boolean flag that indicates if this asset value is read-only. If True any attempted edits will
fail.
Syntax
IntegerAssetValue.IsReadOnly() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2014
IntegerAssetValue.Name Property
Parent Object: IntegerAssetValue
Description
Gets the key name of the value. This name will remain constant for all languages and is the name
used as input to the Item property or the Asset object.
IntegerAssetValue Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Syntax
IntegerAssetValue.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2014
IntegerAssetValue.Parent Property
Parent Object: IntegerAssetValue
Description
Read-only property that returns the parent Asset object.
Syntax
IntegerAssetValue.Parent() As Asset
Property Value
This is a read only property whose value is an Asset.
Version
Introduced in version 2014
IntegerAssetValue.Type Property
Parent Object: IntegerAssetValue
Description
Read-only property returning kAssetValueObject indicating this object’s type.
IntegerAssetValue Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Syntax
IntegerAssetValue.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
IntegerAssetValue.Value Property
Parent Object: IntegerAssetValue
Description
Gets and sets this asset value.
Syntax
IntegerAssetValue.Value() As Long
Property Value
This is a read/write property whose value is a Long.
Samples
Name Description
Write out all
appearance
information to a file.
This sample writes out information about all of the appearances in all
libraries. This can be useful when trying to use the API to modify existing
appearances by allowing to easily see what information is available for an
appearance.
Write out all
materials to a file.
This sample writes out information about all of the materials in all
libraries. This can be useful when trying to use the API to modify existing
materials by allowing to easily see what information is available for a
material.
Write out all physical
properties to a file.
This sample writes out information about all of the physical properties in
all libraries. This can be useful when trying to use the API to modify
existing materials by allowing to easily see what information is available
for a physical property.
This sample writes out information about all of the appearances in the
active document. This can be useful when trying to use the API to modify
IntegerAssetValue Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Write out all
document
appearances
existing appearances by allowing you to easily see what information is
available for an appearance.
Write out all
document materials
to a file.
This sample writes out information about all of the materials in the active
document. This can be useful when trying to use the API to modify
existing materials by allowing you to easily see what information is
available for a material.
Write out all
document physical
properties to a file.
This sample writes out information about all of the physical properties in
the active document. This can be useful when trying to use the API to
modify existing materials by allowing you to easily see what information
is available for a physical property
Version
Introduced in version 2014
IntegerAssetValue.Values Property
Parent Object: IntegerAssetValue
Description
Gets and sets the values associated with this asset value. HasMultipleValues property indicates if
this property will be returning more than one value.
Syntax
IntegerAssetValue.Values() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2014
IntegerAssetValue.ValueType Property
Parent Object: IntegerAssetValue
Description
IntegerAssetValue Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
Read-only property that returns the data type that the Value property for this AssetValue object
will return.
Syntax
IntegerAssetValue.ValueType() As AssetValueTypeEnum
Property Value
This is a read only property whose value is an AssetValueTypeEnum.
Version
Introduced in version 2014
IntegerAssetValue Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh888B.htm 16/06/2025
InteractionEvents Object
Description
The InteractionEvents object provides the ability to obtain input from the user. This includes
selecting objects, various mouse inputs, and using the keyboard.
Methods
Name Description
CreateMiniToolbar
Method that creates a MiniToolbar object associated with the parent
InteractionEvents.
GetCursor Gets the cursor for the command in which this interaction takes place.
SetCursor Sets the cursor for the command in which this interaction takes place.
Start
Starts this object inside Inventor. This will cause the OnActivate to fire
initiating the activity linked with this object.
Stop
Stops this object inside Inventor. This will cause the OnTerminate to fire
halting all activity linked with this object.
Properties
Name Description
AllowCommandAliases
Gets/Sets the Boolean flag indicating whether command aliases are
allowed while the interaction command is active.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
InteractionDisabled
Gets/Sets the Boolean flag that disables this object's Selection, Mouse
and Keyboard Events. Setting this to True, continues to honor the
SelectionActive flag.
InteractionGraphics Gets the Interaction Graphics object.
KeyboardEvents Gets the Keyboard Events object.
ManipulatorEvents Gets the ManipulatorEvents object.
MeasureEvents Gets the Measure Events object.
MouseEvents Gets the Mouse Events object.
Name
Gets/Sets the name for the command in which this interaction takes
place.
Parent Gets the parent object from whom this object can logically be reached.
SelectEvents Gets the Selection Events object.
StatusBarText
Gets/Sets the status bar message for the command in which this
interaction takes place.
TargetDocument
Gets the Document which is the context in which this interaction takes
place.
TriadEvents Gets the TriadEvents object.
InteractionEvents Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Type Returns an ObjectTypeEnum indicating this object's type.
Events
Name Description
OnActivate
Event that notifies the command that control has been passed to it. This event is
fired when the command initially starts, (when the Start method has been called).
OnHelp Event that fires to signal the client to present help for the associated activity.
OnResume Event that notifies the command to resume execution after being suspended.
OnSuspend
Event that notifies the InteractionEvents object to temporarily suspend itself. This
happens when the user selects a command that stacks on the current command.
Invocation of any of the view commands will cause the stacking behavior.
OnTerminate
Event that notifies the command has been terminated. This can happen when the
user selects another command or presses escape. It can be forced by calling the
Stop method on the InteractionEvents object as well.
Accessed From
CommandManager.CreateInteractionEvents, KeyboardEvents.Parent, ManipulatorEvents.Parent,
MeasureEvents.Parent, MouseEvents.Parent, SelectEvents.Parent, TriadEvents.Parent
Samples
Name Description
Basic Selection
Using
Interaction
Events
This sample demonstrates using the selection events to select a face. Selection is
dependent on events and VB only supports events within a class module.
Using measure
events
This sample demonstrates using the measure events to measure distance and
angle. Interactive measure is dependent on events and VB only supports events
within a class module. To use the sample copy the InteractiveMeasureDistance
and InteractiveMeasureAngle subs into a code module. Create a new class
module called clsMeasure and copy all of the rest of the code into it.
Window
Selection
This sample demonstrates using the selection events to window-select multiple
edges. Selection is dependent on events and VB only supports events within a
class module.
OnDrag Event
- dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
InteractionEvents Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
InteractionEvents.AllowCommandAliases
Property
Parent Object: InteractionEvents
Description
Gets/Sets the Boolean flag indicating whether command aliases are allowed while the interaction
command is active.
Syntax
InteractionEvents.AllowCommandAliases() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
InteractionEvents.Application Property
Parent Object: InteractionEvents
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
InteractionEvents.Application() As Application
Property Value
This is a read only property whose value is an Application.
InteractionEvents Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.CreateMiniToolbar
Method
Parent Object: InteractionEvents
Description
Method that creates a MiniToolbar object associated with the parent InteractionEvents.
Syntax
InteractionEvents.CreateMiniToolbar() As MiniToolbar
Samples
Name Description
Change color of part,
features or faces
This sample demonstrates how to use MiniToolBar to change
appearance color of part or features or faces.
Version
Introduced in version 2012
InteractionEvents.GetCursor Method
Parent Object: InteractionEvents
Description
Gets the cursor for the command in which this interaction takes place.
Syntax
InteractionEvents.GetCursor( CursorType As CursorTypeEnum, Cursor As Variant,
CursorHotSpot As CursorHotSpotEnum )
InteractionEvents Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Parameters
Name Type Description
CursorType CursorTypeEnum Returns the CursorTypeEnum indicating the cursor type.
Cursor Variant Returns the cursor.
CursorHotSpot CursorHotSpotEnum
Returns the CursorHotSpotEnum indicating the hotspot
location relative to the cursor.
Version
Introduced in version 9
InteractionEvents.InteractionDisabled
Property
Parent Object: InteractionEvents
Description
Gets/Sets the Boolean flag that disables this object's Selection, Mouse and Keyboard Events.
Setting this to True, continues to honor the SelectionActive flag.
Syntax
InteractionEvents.InteractionDisabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Basic Selection Using
Interaction Events
This sample demonstrates using the selection events to select a face.
Selection is dependent on events and VB only supports events within a
class module.
Window Selection
This sample demonstrates using the selection events to window-select
multiple edges. Selection is dependent on events and VB only supports
events within a class module.
InteractionEvents Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.InteractionGraphics
Property
Parent Object: InteractionEvents
Description
Gets the Interaction Graphics object.
Syntax
InteractionEvents.InteractionGraphics() As InteractionGraphics
Property Value
This is a read only property whose value is an InteractionGraphics.
Samples
Name Description
InteractionGraphics The sample creates overlay graphics.
OnDrag Event -
dragging a WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed
work points when no command is active. This sample only allows drags
parallel to the X-Y plane. This sample is dependent on events and VB
only supports events within a class module.
Version
Introduced in version 8
InteractionEvents.KeyboardEvents Property
Parent Object: InteractionEvents
Description
Gets the Keyboard Events object.
InteractionEvents Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Syntax
InteractionEvents.KeyboardEvents() As KeyboardEvents
Property Value
This is a read only property whose value is a KeyboardEvents.
Version
Introduced in version 5
InteractionEvents.ManipulatorEvents
Property
Parent Object: InteractionEvents
Description
Gets the ManipulatorEvents object.
Syntax
InteractionEvents.ManipulatorEvents() As ManipulatorEvents
Property Value
This is a read only property whose value is a ManipulatorEvents.
Version
Introduced in version 2017
InteractionEvents.MeasureEvents Property
Parent Object: InteractionEvents
Description
Gets the Measure Events object.
InteractionEvents Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Syntax
InteractionEvents.MeasureEvents() As MeasureEvents
Property Value
This is a read only property whose value is a MeasureEvents.
Samples
Name Description
Using
measure
events
This sample demonstrates using the measure events to measure distance and angle.
Interactive measure is dependent on events and VB only supports events within a class
module. To use the sample copy the InteractiveMeasureDistance and
InteractiveMeasureAngle subs into a code module. Create a new class module called
clsMeasure and copy all of the rest of the code into it.
Version
Introduced in version 2009
InteractionEvents.MouseEvents Property
Parent Object: InteractionEvents
Description
Gets the Mouse Events object.
Syntax
InteractionEvents.MouseEvents() As MouseEvents
Property Value
This is a read only property whose value is a MouseEvents.
Samples
Name Description
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
InteractionEvents Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.Name Property
Parent Object: InteractionEvents
Description
Gets/Sets the name for the command in which this interaction takes place.
Syntax
InteractionEvents.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
InteractionEvents.OnActivate Event
Parent Object: InteractionEvents
Description
Event that notifies the command that control has been passed to it. This event is fired when the
command initially starts, (when the Start method has been called).
Syntax
InteractionEvents.OnActivate()
Version
Introduced in version 5
InteractionEvents Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
InteractionEvents.OnHelp Event
Parent Object: InteractionEvents
Description
Event that fires to signal the client to present help for the associated activity.
Syntax
InteractionEvents.OnHelp( BeforeOrAfter As EventTimingEnum, Context As NameValueMap,
HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BeforeOrAfter EventTimingEnum
Input indicating if the event is being fired before (kBefore)
or after (kAfter) the assembly structure is changed.
Context NameValueMap
Input NameValueMap object that can be used to determine
the context of why the event fired. In this case it specifies
whether the user pressed the F1 key or selected "How to..."
from the context menu. A value of "Help" maps to the F1
key, and "HowTo" to the context menu.
HandlingCode HandlingCodeEnum
Output that indicates how you are handling the event. The
value of this argument is currently ignored for this event.
Version
Introduced in version 7
InteractionEvents.OnResume Event
Parent Object: InteractionEvents
Description
Event that notifies the command to resume execution after being suspended.
Syntax
InteractionEvents.OnResume()
InteractionEvents Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.OnSuspend Event
Parent Object: InteractionEvents
Description
Event that notifies the InteractionEvents object to temporarily suspend itself. This happens when
the user selects a command that stacks on the current command. Invocation of any of the view
commands will cause the stacking behavior.
Syntax
InteractionEvents.OnSuspend()
Version
Introduced in version 5
InteractionEvents.OnTerminate Event
Parent Object: InteractionEvents
Description
Event that notifies the command has been terminated. This can happen when the user selects
another command or presses escape. It can be forced by calling the Stop method on the
InteractionEvents object as well.
Syntax
InteractionEvents.OnTerminate()
Samples
Name Description
Change color of part,
features or faces
This sample demonstrates how to use MiniToolBar to change
appearance color of part or features or faces.
InteractionEvents Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.Parent Property
Parent Object: InteractionEvents
Description
Gets the parent object from whom this object can logically be reached.
Syntax
InteractionEvents.Parent() As CommandManager
Property Value
This is a read only property whose value is a CommandManager.
Version
Introduced in version 5
InteractionEvents.SelectEvents Property
Parent Object: InteractionEvents
Description
Gets the Selection Events object.
Syntax
InteractionEvents.SelectEvents() As SelectEvents
Property Value
This is a read only property whose value is a SelectEvents.
Samples
InteractionEvents Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Name Description
Basic Selection Using
Interaction Events
This sample demonstrates using the selection events to select a face.
Selection is dependent on events and VB only supports events within a
class module.
Window Selection
This sample demonstrates using the selection events to window-select
multiple edges. Selection is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 5
InteractionEvents.SetCursor Method
Parent Object: InteractionEvents
Description
Sets the cursor for the command in which this interaction takes place.
Syntax
InteractionEvents.SetCursor( CursorType As CursorTypeEnum, [Cursor] As Variant,
[CursorHotSpot] As Variant )
Parameters
Name Type Description
CursorType CursorTypeEnum Specify the CursorTypeEnum indicating the cursor type.
Cursor Variant Input the cursor.
When the CursorType is specified as kCursorTypeCustom, this
is required to be set as String indicating a cursor file(.cur, .ani)
name or IPictureDisp object(32x32 pixels). If the CursorType
is specified as kCursorTypeWindows, this is required to be set
as Long indicating the Windows cursor ID, below table shows
the map between the Long value and Windows cursor ID:
Long value Windows Cursor Id
0 IDC_ARROW
1 IDC_ARROW
2 IDC_CROSS
3 IDC_IBEAM
4 IDC_ARROW
InteractionEvents Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
5 IDC_SIZEALL
6 IDC_SIZENESW
7 IDC_SIZENS
8 IDC_SIZENWSE
9 IDC_SIZEWE
10 IDC_UPARROW
11 IDC_WAIT
12 IDC_NO
13 IDC_WAIT
14 IDC_HELP
15 IDC_SIZEALL
This is an optional argument whose default value is null.
CursorHotSpot Variant
Specify the CursorHotSpotEnum indicating the hotspot
location relative to the cursor.
This is an optional argument whose default value is null.
Version
Introduced in version 9
InteractionEvents.Start Method
Parent Object: InteractionEvents
Description
Starts this object inside Inventor. This will cause the OnActivate to fire initiating the activity
linked with this object.
Syntax
InteractionEvents.Start()
Samples
Name Description
Basic Selection
Using
Interaction
Events
This sample demonstrates using the selection events to select a face. Selection is
dependent on events and VB only supports events within a class module.
InteractionEvents Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Using measure
events
This sample demonstrates using the measure events to measure distance and
angle. Interactive measure is dependent on events and VB only supports events
within a class module. To use the sample copy the InteractiveMeasureDistance
and InteractiveMeasureAngle subs into a code module. Create a new class
module called clsMeasure and copy all of the rest of the code into it.
Window
Selection
This sample demonstrates using the selection events to window-select multiple
edges. Selection is dependent on events and VB only supports events within a
class module.
OnDrag Event
- dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work points
when no command is active. This sample only allows drags parallel to the X-Y
plane. This sample is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
InteractionEvents.StatusBarText Property
Parent Object: InteractionEvents
Description
Gets/Sets the status bar message for the command in which this interaction takes place.
Syntax
InteractionEvents.StatusBarText() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Window
Selection
This sample demonstrates using the selection events to window-select multiple
edges. Selection is dependent on events and VB only supports events within a class
module.
Version
Introduced in version 6
InteractionEvents Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
InteractionEvents.Stop Method
Parent Object: InteractionEvents
Description
Stops this object inside Inventor. This will cause the OnTerminate to fire halting all activity linked
with this object.
Syntax
InteractionEvents.Stop()
Samples
Name Description
Basic Selection Using
Interaction Events
This sample demonstrates using the selection events to select a face.
Selection is dependent on events and VB only supports events within a
class module.
Version
Introduced in version 5
InteractionEvents.TargetDocument Property
Parent Object: InteractionEvents
Description
Gets the Document which is the context in which this interaction takes place.
Syntax
InteractionEvents.TargetDocument() As Document
Property Value
This is a read only property whose value is a Document.
InteractionEvents Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents.TriadEvents Property
Parent Object: InteractionEvents
Description
Gets the TriadEvents object.
Syntax
InteractionEvents.TriadEvents() As TriadEvents
Property Value
This is a read only property whose value is a TriadEvents.
Version
Introduced in version 9
InteractionEvents.Type Property
Parent Object: InteractionEvents
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InteractionEvents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
InteractionEvents Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
Version
Introduced in version 5
InteractionEvents Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA7DB.htm 16/06/2025
InteractionGraphics Object
Description
Inventor supports the creation of preview and overlay graphics.
Methods
Name Description
UpdateOverlayGraphics Redraw just the overlay graphics only in a specified view.
Properties
Name Description
GraphicsDataSets
The object that can be used with the preview and overlay graphics
properties.
OverlayClientGraphics
The top level object for graphics that are rendered independently from the
main scene.
PreviewClientGraphics The top level object for graphics that are rendered with the main scene.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
InteractionEvents.InteractionGraphics
Samples
Name Description
InteractionGraphics The sample creates overlay graphics.
OnDrag Event -
dragging a WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed
work points when no command is active. This sample only allows drags
parallel to the X-Y plane. This sample is dependent on events and VB
only supports events within a class module.
Version
Introduced in version 8
InteractionGraphics.GraphicsDataSets
Property
InteractionGraphics Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8E0.htm 16/06/2025
Parent Object: InteractionGraphics
Description
The object that can be used with the preview and overlay graphics properties.
Syntax
InteractionGraphics.GraphicsDataSets() As GraphicsDataSets
Property Value
This is a read only property whose value is a GraphicsDataSets.
Samples
Name Description
InteractionGraphics The sample creates overlay graphics.
OnDrag Event -
dragging a WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed
work points when no command is active. This sample only allows drags
parallel to the X-Y plane. This sample is dependent on events and VB
only supports events within a class module.
Version
Introduced in version 8
InteractionGraphics.OverlayClientGraphics
Property
Parent Object: InteractionGraphics
Description
The top level object for graphics that are rendered independently from the main scene.
Syntax
InteractionGraphics.OverlayClientGraphics() As ClientGraphics
Property Value
This is a read only property whose value is a ClientGraphics.
InteractionGraphics Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8E0.htm 16/06/2025
Samples
Name Description
InteractionGraphics The sample creates overlay graphics.
Version
Introduced in version 8
InteractionGraphics.PreviewClientGraphics
Property
Parent Object: InteractionGraphics
Description
The top level object for graphics that are rendered with the main scene.
Syntax
InteractionGraphics.PreviewClientGraphics() As ClientGraphics
Property Value
This is a read only property whose value is a ClientGraphics.
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
Introduced in version 8
InteractionGraphics.Type Property
Parent Object: InteractionGraphics
InteractionGraphics Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8E0.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InteractionGraphics.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
InteractionGraphics.UpdateOverlayGraphics
Method
Parent Object: InteractionGraphics
Description
Redraw just the overlay graphics only in a specified view.
Syntax
InteractionGraphics.UpdateOverlayGraphics( TheView As View )
Parameters
Name Type Description
TheView View View object representing the view to redraw.
Samples
Name Description
InteractionGraphics The sample creates overlay graphics.
InteractionGraphics Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8E0.htm 16/06/2025
Version
Introduced in version 8
InteractionGraphics Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8E0.htm 16/06/2025
InterferenceResult Object
Description
In an assembly, two or more components cannot occupy the same space at the same time. To
detect such errors, you can analyze assemblies for interference.
Properties
Name Description
Centroid Property that returns the centroid of the volume of interference.
InterferenceBody Gets the transient body representing the interference volume.
OccurrenceOne Property that returns the first interfering .
OccurrenceTwo Property that returns the second interfering .
Type Returns an ObjectTypeEnum indicating this object's type.
Volume Property that returns the volume of interference in cubic centimeters.
Accessed From
InterferenceResults.Item
Version
Introduced in version 6
InterferenceResult.Centroid Property
Parent Object: InterferenceResult
Description
Property that returns the centroid of the volume of interference.
Syntax
InterferenceResult.Centroid() As Point
Property Value
This is a read only property whose value is a Point.
InterferenceResult Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE11B.htm 16/06/2025
Version
Introduced in version 6
InterferenceResult.InterferenceBody
Property
Parent Object: InterferenceResult
Description
Gets the transient body representing the interference volume.
Syntax
InterferenceResult.InterferenceBody() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Version
Introduced in version 2012
InterferenceResult.OccurrenceOne Property
Parent Object: InterferenceResult
Description
Property that returns the first interfering .
Syntax
InterferenceResult.OccurrenceOne() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
InterferenceResult Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE11B.htm 16/06/2025
Version
Introduced in version 6
InterferenceResult.OccurrenceTwo Property
Parent Object: InterferenceResult
Description
Property that returns the second interfering .
Syntax
InterferenceResult.OccurrenceTwo() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
InterferenceResult.Type Property
Parent Object: InterferenceResult
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InterferenceResult.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
InterferenceResult Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE11B.htm 16/06/2025
Version
Introduced in version 6
InterferenceResult.Volume Property
Parent Object: InterferenceResult
Description
Property that returns the volume of interference in cubic centimeters.
Syntax
InterferenceResult.Volume() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 6
InterferenceResult Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE11B.htm 16/06/2025
InterferenceResults Object
Description
In an assembly, two or more components cannot occupy the same space at the same time. To
detect such errors, you can analyze assemblies for interference.
Properties
Name Description
Count Property that returns the number of items in the collection.
Item Returns the specified InterferenceResult object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.AnalyzeInterference,
WeldmentComponentDefinition.AnalyzeInterference
Samples
Name Description
Interference
Analysis
This sample demonstrates the functions used to calculate interference
analysis in an assembly.
Version
Introduced in version 6
InterferenceResults.Count Property
Parent Object: InterferenceResults
Description
Property that returns the number of items in the collection.
Syntax
InterferenceResults.Count() As Long
InterferenceResults Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3A.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
InterferenceResults.Item Property
Parent Object: InterferenceResults
Description
Returns the specified InterferenceResult object from the collection.
Syntax
InterferenceResults.Item( Index As Long ) As InterferenceResult
Property Value
This is a read only property whose value is an InterferenceResult.
Parameters
Name Type Description
Index Long
Input value that specifies the InterferenceResult object to return. If an out-of-range
index is provided, an error will occur.
Version
Introduced in version 6
InterferenceResults.Type Property
Parent Object: InterferenceResults
Description
Returns an ObjectTypeEnum indicating this object's type.
InterferenceResults Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3A.htm 16/06/2025
Syntax
InterferenceResults.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InterferenceResults Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFB3A.htm 16/06/2025
IntersectionCurve Object
Description
The IntersectionCurve object represents the results of creating an intersection curve calculation. It
consists of one or more sketch entities that represent the intersection of the original input entities.
Methods
Name Description
BreakLink
Method that breaks the link between the intersection curve and the model. This
breaks the associativity to the model, allowing you to edit the individual sketch
entities.
Delete
Method that deletes the intersection curve. This will delete all of the related
sketch entities.
Edit
Method that edits all of the inputs used to compute the intersection curve. This
method is more efficient than setting each of the individual properties since
this will result in a single compute rather than computing after each property
edit.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
EntityOne Read-write property that defines the first entity involved in the intersection.
EntityTwo Read-write property that defines the second entity(s) involved in the intersection.
Name Property that gets and sets name of the intersection curve.
Parent Read-only property that returns the parent 3D sketch of the intersection curve.
SketchEntities
Read-only property that returns a collection of sketch entities that belong to the
intersection curve. The sketch entities returned by this property cannot be edited
or deleted because they are associated with the intersection curve in the model.
The BreakLink method can be used to break this association so they are
individually editable.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
IntersectionCurve.Edit, IntersectionCurveProxy.Edit, IntersectionCurveProxy.NativeObject,
IntersectionCurves.Add, IntersectionCurves.Item
IntersectionCurve Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
Derived Classes
IntersectionCurveProxy
Version
Introduced in version 2014
IntersectionCurve.Application Property
Parent Object: IntersectionCurve
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
IntersectionCurve.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurve.AttributeSets Property
Parent Object: IntersectionCurve
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
IntersectionCurve.AttributeSets() As AttributeSets
IntersectionCurve Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2014
IntersectionCurve.BreakLink Method
Parent Object: IntersectionCurve
Description
Method that breaks the link between the intersection curve and the model. This breaks the
associativity to the model, allowing you to edit the individual sketch entities.
Syntax
IntersectionCurve.BreakLink()
Version
Introduced in version 2014
IntersectionCurve.Delete Method
Parent Object: IntersectionCurve
Description
Method that deletes the intersection curve. This will delete all of the related sketch entities.
Syntax
IntersectionCurve.Delete()
Version
Introduced in version 2014
IntersectionCurve Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
IntersectionCurve.Edit Method
Parent Object: IntersectionCurve
Description
Method that edits all of the inputs used to compute the intersection curve. This method is more
efficient than setting each of the individual properties since this will result in a single compute
rather than computing after each property edit.
Syntax
IntersectionCurve.Edit( EntityOne As Object, EntityTwo As Object ) As IntersectionCurve
Parameters
Name Type Description
EntityOne Object
Input object that defines the first entity. This can be one of the following:
SurfaceBody, Face, WorkPlane or 2D sketch curve object. If a 2D sketch curve
is specified, the sketch curves connected with the sketch curve might be
automatically included for intersection operation.
EntityTwo Object
Input object that defines the second entity or set of entities being intersected by
the first entity. This can be one of the following: SurfaceBody, Face, Faces,
FaceCollection, WorkPlane or 2D sketch curve object with the following
restrictions:
• If the EntityOne is a WorkPlane then EntityTwo cannot be a WorkPlane.
• If a Faces or FaceCollection object is provided, all the Face objects in
the collection must belong to the same SurfaceBody.
• If EntityOne is a 2D sketch curve, then EntityTwo must also be a 2D
sketch curve in a different 2D sketch. The 2D sketch curves connected
with the one specified as EntityTwo might be automatically included for
intersection operation.
Version
Introduced in version 2014
IntersectionCurve Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
IntersectionCurve.EntityOne Property
Parent Object: IntersectionCurve
Description
Read-write property that defines the first entity involved in the intersection.
Syntax
IntersectionCurve.EntityOne() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurve.EntityTwo Property
Parent Object: IntersectionCurve
Description
Read-write property that defines the second entity(s) involved in the intersection.
Syntax
IntersectionCurve.EntityTwo() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurve.GetReferenceKey Method
IntersectionCurve Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
Parent Object: IntersectionCurve
Description
Method that generates and returns the reference key for this entity.
Syntax
IntersectionCurve.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2014
IntersectionCurve.Name Property
Parent Object: IntersectionCurve
Description
Property that gets and sets name of the intersection curve.
Syntax
IntersectionCurve.Name() As String
IntersectionCurve Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2014
IntersectionCurve.Parent Property
Parent Object: IntersectionCurve
Description
Read-only property that returns the parent 3D sketch of the intersection curve.
Syntax
IntersectionCurve.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2014
IntersectionCurve.SketchEntities Property
Parent Object: IntersectionCurve
Description
Read-only property that returns a collection of sketch entities that belong to the intersection curve.
The sketch entities returned by this property cannot be edited or deleted because they are
associated with the intersection curve in the model. The BreakLink method can be used to break
this association so they are individually editable.
Syntax
IntersectionCurve.SketchEntities() As SketchEntities3DEnumerator
IntersectionCurve Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2014
IntersectionCurve.Type Property
Parent Object: IntersectionCurve
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
IntersectionCurve.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
IntersectionCurve Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C20.htm 16/06/2025
IntersectionCurveProxy Object
Derived from: IntersectionCurve Object
Description
Represent a part IntersectionCurveProxy object within an assembly.
Methods
Name Description
BreakLink
Method that breaks the link between the intersection curve and the model. This
breaks the associativity to the model, allowing you to edit the individual sketch
entities.
Delete
Method that deletes the intersection curve. This will delete all of the related
sketch entities.
Edit
Method that edits all of the inputs used to compute the intersection curve. This
method is more efficient than setting each of the individual properties since this
will result in a single compute rather than computing after each property edit.
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
EntityOne Read-write property that defines the first entity involved in the intersection.
EntityTwo
Read-write property that defines the second entity(s) involved in the
intersection.
Name Property that gets and sets name of the intersection curve.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent
Read-only property that returns the parent 3D sketch of the intersection
curve.
SketchEntities
Read-only property that returns a collection of sketch entities that belong to
the intersection curve. The sketch entities returned by this property cannot
be edited or deleted because they are associated with the intersection curve
in the model. The BreakLink method can be used to break this association
so they are individually editable.
Type Returns an ObjectTypeEnum indicating this object's type.
IntersectionCurveProxy Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
Version
Introduced in version 2014
IntersectionCurveProxy.Application Property
Parent Object: IntersectionCurveProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
IntersectionCurveProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurveProxy.AttributeSets
Property
Parent Object: IntersectionCurveProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
IntersectionCurveProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
IntersectionCurveProxy Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
Version
Introduced in version 2014
IntersectionCurveProxy.BreakLink Method
Parent Object: IntersectionCurveProxy
Description
Method that breaks the link between the intersection curve and the model. This breaks the
associativity to the model, allowing you to edit the individual sketch entities.
Syntax
IntersectionCurveProxy.BreakLink()
Version
Introduced in version 2014
IntersectionCurveProxy.ContainingOccurrence
Property
Parent Object: IntersectionCurveProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
IntersectionCurveProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2014
IntersectionCurveProxy Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
IntersectionCurveProxy.Delete Method
Parent Object: IntersectionCurveProxy
Description
Method that deletes the intersection curve. This will delete all of the related sketch entities.
Syntax
IntersectionCurveProxy.Delete()
Version
Introduced in version 2014
IntersectionCurveProxy.Edit Method
Parent Object: IntersectionCurveProxy
Description
Method that edits all of the inputs used to compute the intersection curve. This method is more
efficient than setting each of the individual properties since this will result in a single compute rather
than computing after each property edit.
Syntax
IntersectionCurveProxy.Edit( EntityOne As Object, EntityTwo As Object ) As IntersectionCurve
Parameters
Name Type Description
EntityOne Object
Input object that defines the first entity. This can be one of the following:
SurfaceBody, Face, WorkPlane or 2D sketch curve object. If a 2D sketch curve
is specified, the sketch curves connected with the sketch curve might be
automatically included for intersection operation.
EntityTwo Object
Input object that defines the second entity or set of entities being intersected by
the first entity. This can be one of the following: SurfaceBody, Face, Faces,
FaceCollection, WorkPlane or 2D sketch curve object with the following
restrictions:
IntersectionCurveProxy Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
• If the EntityOne is a WorkPlane then EntityTwo cannot be a WorkPlane.
• If a Faces or FaceCollection object is provided, all the Face objects in the
collection must belong to the same SurfaceBody.
• If EntityOne is a 2D sketch curve, then EntityTwo must also be a 2D
sketch curve in a different 2D sketch. The 2D sketch curves connected
with the one specified as EntityTwo might be automatically included for
intersection operation.
Version
Introduced in version 2014
IntersectionCurveProxy.EntityOne Property
Parent Object: IntersectionCurveProxy
Description
Read-write property that defines the first entity involved in the intersection.
Syntax
IntersectionCurveProxy.EntityOne() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurveProxy.EntityTwo Property
Parent Object: IntersectionCurveProxy
Description
IntersectionCurveProxy Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
Read-write property that defines the second entity(s) involved in the intersection.
Syntax
IntersectionCurveProxy.EntityTwo() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurveProxy.GetReferenceKey
Method
Parent Object: IntersectionCurveProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
IntersectionCurveProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2014
IntersectionCurveProxy Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
IntersectionCurveProxy.Name Property
Parent Object: IntersectionCurveProxy
Description
Property that gets and sets name of the intersection curve.
Syntax
IntersectionCurveProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2014
IntersectionCurveProxy.NativeObject
Property
Parent Object: IntersectionCurveProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
IntersectionCurveProxy.NativeObject() As IntersectionCurve
Property Value
This is a read only property whose value is an IntersectionCurve.
Version
Introduced in version 2014
IntersectionCurveProxy Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
IntersectionCurveProxy.Parent Property
Parent Object: IntersectionCurveProxy
Description
Read-only property that returns the parent 3D sketch of the intersection curve.
Syntax
IntersectionCurveProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2014
IntersectionCurveProxy.SketchEntities
Property
Parent Object: IntersectionCurveProxy
Description
Read-only property that returns a collection of sketch entities that belong to the intersection curve.
The sketch entities returned by this property cannot be edited or deleted because they are associated
with the intersection curve in the model. The BreakLink method can be used to break this
association so they are individually editable.
Syntax
IntersectionCurveProxy.SketchEntities() As SketchEntities3DEnumerator
Property Value
This is a read only property whose value is a SketchEntities3DEnumerator.
Version
Introduced in version 2014
IntersectionCurveProxy Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
IntersectionCurveProxy.Type Property
Parent Object: IntersectionCurveProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
IntersectionCurveProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
IntersectionCurveProxy Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3640.htm 16/06/2025
IntersectionCurves Object
Description
The IntersectionCurves object provides access to all the intersection curve results in a 3D sketch
and supports the ability to create new intersection curves.
Methods
Name Description
Add Creates a new intersection curve.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Gets the number of items in this collection.
Item returns the specified IntersectionCurve object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Sketch3D.IntersectionCurves, Sketch3DProxy.IntersectionCurves
Version
Introduced in version 2014
IntersectionCurves.Add Method
Parent Object: IntersectionCurves
Description
Creates a new intersection curve.
Syntax
IntersectionCurves.Add( EntityOne As Object, EntityTwo As Object ) As IntersectionCurve
IntersectionCurves Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5689.htm 16/06/2025
Parameters
Name Type Description
EntityOne Object
Input object that defines the first entity. This can be one of the following:
SurfaceBody, Face, WorkPlane or 2D sketch curve object. If a 2D sketch curve
is specified, then sketch curves connected with the sketch curve might be
automatically included for intersection operation.
EntityTwo Object
Input object that defines the second entity or set of entities being intersected by
the first entity. This can be one of the following: SurfaceBody, Face, Faces,
FaceCollection, WorkPlane or 2D sketch curve object with the following
restrictions:
• If the EntityOne is a WorkPlane then EntityTwo cannot be a WorkPlane.
• If a Faces or FaceCollection object is provided, all the Face objects in
the collection must belong to the same SurfaceBody.
• If EntityOne is a 2D sketch curve, then EntityTwo must also be a 2D
sketch curve in a different 2D sketch. The 2D sketch curves connected
with the one specified as EntityTwo might be automatically included for
intersection operation.
Samples
Name Description
Control point,
equation, and
intersection curve
creation.
This sample demonstrates several new curve creation techniques introduced
in Inventor 2014. It creates a new part and then create a 2d control point
spline and a 2d equation curve. Surfaces are created from these two curves
by extruding them. A 3d intersection curve is created between the
extrusions. A 3d control point spline and 3d equation curve are also created.
Version
Introduced in version 2014
IntersectionCurves.Application Property
Parent Object: IntersectionCurves
IntersectionCurves Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5689.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
IntersectionCurves.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2014
IntersectionCurves.Count Property
Parent Object: IntersectionCurves
Description
Gets the number of items in this collection.
Syntax
IntersectionCurves.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2014
IntersectionCurves.Item Property
Parent Object: IntersectionCurves
IntersectionCurves Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5689.htm 16/06/2025
Description
returns the specified IntersectionCurve object from the collection.
Syntax
IntersectionCurves.Item( Index As Long ) As IntersectionCurve
Property Value
This is a read only property whose value is an IntersectionCurve.
Parameters
Name Type Description
Index Long
Input Variant value that specifies the intersection curve to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the intersection curve name. If an out of range index or a name of a nonexistent
intersection curve is provided, an error occurs.
Version
Introduced in version 2014
IntersectionCurves.Type Property
Parent Object: IntersectionCurves
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
IntersectionCurves.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
IntersectionCurves Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5689.htm 16/06/2025
InventorVBAArgument Object
Description
Represents a VBAArgument object.
Properties
Name Description
ArgumentType Property that returns the argument's type.
Name Property that returns the argument's name.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Get/Sets the argument's value.
Accessed From
InventorVBAArguments.Item
Version
Introduced in version 6
InventorVBAArgument.ArgumentType
Property
Parent Object: InventorVBAArgument
Description
Property that returns the argument's type.
Syntax
InventorVBAArgument.ArgumentType() As String
Property Value
This is a read only property whose value is a String.
InventorVBAArgument Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F70.htm 16/06/2025
Version
Introduced in version 6
InventorVBAArgument.Name Property
Parent Object: InventorVBAArgument
Description
Property that returns the argument's name.
Syntax
InventorVBAArgument.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
InventorVBAArgument.Parent Property
Parent Object: InventorVBAArgument
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
InventorVBAArgument.Parent() As InventorVBAMember
Property Value
This is a read only property whose value is an InventorVBAMember.
InventorVBAArgument Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F70.htm 16/06/2025
Version
Introduced in version 6
InventorVBAArgument.Type Property
Parent Object: InventorVBAArgument
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAArgument.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAArgument.Value Property
Parent Object: InventorVBAArgument
Description
Get/Sets the argument's value.
Syntax
InventorVBAArgument.Value() As Variant
Property Value
This is a read/write property whose value is a Variant.
InventorVBAArgument Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F70.htm 16/06/2025
Version
Introduced in version 6
InventorVBAArgument Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6F70.htm 16/06/2025
InventorVBAArguments Object
Description
Represents a collection of objects in an InventorVBAMember.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item
Returns the specified InventorVBAArgument object from the collection. This is the
default property of the InventorVBAArguments collection object.
Parent Property that returns the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
InventorVBAMember.Arguments
Version
Introduced in version 6
InventorVBAArguments.Count Property
Parent Object: InventorVBAArguments
Description
Property that returns the number of items in this collection.
Syntax
InventorVBAArguments.Count() As Long
Property Value
This is a read only property whose value is a Long.
InventorVBAArguments Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh874E.htm 16/06/2025
Version
Introduced in version 6
InventorVBAArguments.Item Property
Parent Object: InventorVBAArguments
Description
Returns the specified InventorVBAArgument object from the collection. This is the default
property of the InventorVBAArguments collection object.
Syntax
InventorVBAArguments.Item( Index As Variant ) As InventorVBAArgument
Property Value
This is a read only property whose value is an InventorVBAArgument.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the OccurrencePattern to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the pattern name. This is the name that is displayed to the user
in the assembly browser. If an out of range index or a name of a non-existent
occurrence name is provided, an error occurs.
Version
Introduced in version 6
InventorVBAArguments.Parent Property
Parent Object: InventorVBAArguments
Description
Property that returns the parent object from whom this object can logically be reached.
InventorVBAArguments Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh874E.htm 16/06/2025
Syntax
InventorVBAArguments.Parent() As InventorVBAMember
Property Value
This is a read only property whose value is an InventorVBAMember.
Version
Introduced in version 6
InventorVBAArguments.Type Property
Parent Object: InventorVBAArguments
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAArguments.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAArguments Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh874E.htm 16/06/2025
InventorVBAComponent Object
Description
The InventorVBAComponent object represents a code, class or form module.
Properties
Name Description
InventorVBAMembers Property that returns the InventorVBAMembers collection.
Name Gets/Sets the components display name.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
VBComponent
Property that returns the VBComponent object corresponding to this
InventorVBAComponent.
Accessed From
InventorVBAComponents.Add, InventorVBAComponents.Item, InventorVBAMember.Parent,
InventorVBAMembers.Parent
Version
Introduced in version 6
InventorVBAComponent.InventorVBAMembers
Property
Parent Object: InventorVBAComponent
Description
Property that returns the InventorVBAMembers collection.
Syntax
InventorVBAComponent.InventorVBAMembers() As InventorVBAMembers
Property Value
This is a read only property whose value is an InventorVBAMembers.
InventorVBAComponent Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA565.htm 16/06/2025
Version
Introduced in version 6
InventorVBAComponent.Name Property
Parent Object: InventorVBAComponent
Description
Gets/Sets the components display name.
Syntax
InventorVBAComponent.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
InventorVBAComponent.Parent Property
Parent Object: InventorVBAComponent
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
InventorVBAComponent.Parent() As InventorVBAProject
Property Value
This is a read only property whose value is an InventorVBAProject.
Version
Introduced in version 6
InventorVBAComponent Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA565.htm 16/06/2025
InventorVBAComponent.Type Property
Parent Object: InventorVBAComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAComponent.VBComponent
Property
Parent Object: InventorVBAComponent
Description
Property that returns the VBComponent object corresponding to this InventorVBAComponent.
Syntax
InventorVBAComponent.VBComponent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InventorVBAComponent Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA565.htm 16/06/2025
InventorVBAComponents Object
Description
The InventorVBAComponents collection object represents a collection of objects in an
InventorVBAProject, and provides methods to create new InventorVBAComponent objects.
Methods
Name Description
Add Method that adds a component to the collection.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item
Returns the specified InventorVBAComponent object from the collection. This is the
default property of the InventorVBAComponents collection object.
Parent Property that returns the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
InventorVBAProject.InventorVBAComponents
Version
Introduced in version 6
InventorVBAComponents.Add Method
Parent Object: InventorVBAComponents
Description
Method that adds a component to the collection.
Syntax
InventorVBAComponents.Add( Name As String ) As InventorVBAComponent
InventorVBAComponents Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9C5.htm 16/06/2025
Parameters
Name Type Description
Name String Input String that specifies the name of the new component to add to the collection.
Version
Introduced in version 6
InventorVBAComponents.Count Property
Parent Object: InventorVBAComponents
Description
Property that returns the number of items in this collection.
Syntax
InventorVBAComponents.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
InventorVBAComponents.Item Property
Parent Object: InventorVBAComponents
Description
Returns the specified InventorVBAComponent object from the collection. This is the default
property of the InventorVBAComponents collection object.
Syntax
InventorVBAComponents.Item( Index As Variant ) As InventorVBAComponent
InventorVBAComponents Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9C5.htm 16/06/2025
Property Value
This is a read only property whose value is an InventorVBAComponent.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the InventorVBAComponent to return. This can
be either a numeric value indicating the index of the item in the collection or it can
be a string indicating the component's name. If an out-of-range index or a name of
a non-existent component name is provided, an error occurs.
Version
Introduced in version 6
InventorVBAComponents.Parent Property
Parent Object: InventorVBAComponents
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
InventorVBAComponents.Parent() As InventorVBAProject
Property Value
This is a read only property whose value is an InventorVBAProject.
Version
Introduced in version 6
InventorVBAComponents.Type Property
Parent Object: InventorVBAComponents
Description
InventorVBAComponents Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9C5.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAComponents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAComponents Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9C5.htm 16/06/2025
InventorVBAMember Object
Description
Represents a member within a InventorVBAComponent.
Methods
Name Description
Execute Method that is used to execute this member.
Properties
Name Description
Arguments Property that returns the collection containing the member's arguments.
MemberType Property that returns a constant that specifies the member type.
Name Property that indicates the member's display name.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
VBMember
Property that returns the member object that corresponds to this
InventorVBAMember object.
Accessed From
InventorVBAArgument.Parent, InventorVBAArguments.Parent, InventorVBAMembers.Item
Version
Introduced in version 6
InventorVBAMember.Arguments Property
Parent Object: InventorVBAMember
Description
Property that returns the collection containing the member's arguments.
InventorVBAMember Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE740.htm 16/06/2025
Syntax
InventorVBAMember.Arguments() As InventorVBAArguments
Property Value
This is a read only property whose value is an InventorVBAArguments.
Version
Introduced in version 6
InventorVBAMember.Execute Method
Parent Object: InventorVBAMember
Description
Method that is used to execute this member.
Syntax
InventorVBAMember.Execute( [FunctionReturnValue] As Variant )
Parameters
Name Type Description
FunctionReturnValue Variant
Optional input Variant that specifies the function's return value.
This is an optional argument whose default value is null.
Version
Introduced in version 6
InventorVBAMember.MemberType Property
Parent Object: InventorVBAMember
Description
Property that returns a constant that specifies the member type.
InventorVBAMember Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE740.htm 16/06/2025
Syntax
InventorVBAMember.MemberType() As MemberTypeEnum
Property Value
This is a read only property whose value is a MemberTypeEnum.
Version
Introduced in version 6
InventorVBAMember.Name Property
Parent Object: InventorVBAMember
Description
Property that indicates the member's display name.
Syntax
InventorVBAMember.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
InventorVBAMember.Parent Property
Parent Object: InventorVBAMember
Description
Property that returns the parent object from whom this object can logically be reached.
InventorVBAMember Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE740.htm 16/06/2025
Syntax
InventorVBAMember.Parent() As InventorVBAComponent
Property Value
This is a read only property whose value is an InventorVBAComponent.
Version
Introduced in version 6
InventorVBAMember.Type Property
Parent Object: InventorVBAMember
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAMember.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAMember.VBMember Property
Parent Object: InventorVBAMember
Description
Property that returns the member object that corresponds to this InventorVBAMember object.
InventorVBAMember Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE740.htm 16/06/2025
Syntax
InventorVBAMember.VBMember() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InventorVBAMember Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE740.htm 16/06/2025
InventorVBAMembers Object
Description
Represents a collection of objects in an InventorVBAComponent object.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item
Returns the specified InventorVBAMember object from the collection. This is the default
property of the InventorVBAMemberscollection object.
Parent Property that returns the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
InventorVBAComponent.InventorVBAMembers
Version
Introduced in version 6
InventorVBAMembers.Count Property
Parent Object: InventorVBAMembers
Description
Property that returns the number of items in this collection.
Syntax
InventorVBAMembers.Count() As Long
Property Value
This is a read only property whose value is a Long.
InventorVBAMembers Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
Version
Introduced in version 6
InventorVBAMembers.Item Property
Parent Object: InventorVBAMembers
Description
Returns the specified InventorVBAMember object from the collection. This is the default property
of the InventorVBAMemberscollection object.
Syntax
InventorVBAMembers.Item( Index As Variant ) As InventorVBAMember
Property Value
This is a read only property whose value is an InventorVBAMember.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the InventorVBAMember to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the member name. If an out of range index or a name of a nonexistent
name is provided, an error occurs.
Version
Introduced in version 6
InventorVBAMembers.Parent Property
Parent Object: InventorVBAMembers
Description
Property that returns the parent object from whom this object can logically be reached.
InventorVBAMembers Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
Syntax
InventorVBAMembers.Parent() As InventorVBAComponent
Property Value
This is a read only property whose value is an InventorVBAComponent.
Version
Introduced in version 6
InventorVBAMembers.Type Property
Parent Object: InventorVBAMembers
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAMembers.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAMembers Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1C5A.htm 16/06/2025
InventorVBAProject Object
Description
Represents Autodesk Inventor's VBA project.
Methods
Name Description
Close
Method that closes this project. Please note that this method works only for user-defined
VBA projects. It will not work with Application or Document VBA projects, which are
built in.
Save Method that saves the VBA project.
SaveAs
Method that saves the project to a specified location. Please note that this method works
only for user-defined VBA projects. It will not work with Application or Document VBA
projects, which are built in.
Properties
Name Description
InventorVBAComponents Gets the InventorVBAComponents contained in this project.
Name Gets/Sets the projects display name.
Parent
Property that returns the parent object from whom this object can
logically be reached.
ProjectType
Property that returns a constant specifying the type of VBA project this
project is.
Saved Property that indicates if this project has been saved or not.
Type Returns an ObjectTypeEnum indicating this object's type.
VBProject
Property that returns the VBA project that corresponds to this
InventorVBAProject.
Accessed From
AssemblyDocument.VBAProject, Document.VBAProject, DrawingDocument.VBAProject,
InventorVBAComponent.Parent, InventorVBAComponents.Parent, InventorVBAProjects.Add,
InventorVBAProjects.Item, PartDocument.VBAProject, PresentationDocument.VBAProject
Version
Introduced in version 6
InventorVBAProject.Close Method
InventorVBAProject Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
Parent Object: InventorVBAProject
Description
Method that closes this project. Please note that this method works only for user-defined VBA
projects. It will not work with Application or Document VBA projects, which are built in.
Syntax
InventorVBAProject.Close()
Version
Introduced in version 6
InventorVBAProject.InventorVBAComponents
Property
Parent Object: InventorVBAProject
Description
Gets the InventorVBAComponents contained in this project.
Syntax
InventorVBAProject.InventorVBAComponents() As InventorVBAComponents
Property Value
This is a read only property whose value is an InventorVBAComponents.
Version
Introduced in version 6
InventorVBAProject.Name Property
Parent Object: InventorVBAProject
Description
Gets/Sets the projects display name.
InventorVBAProject Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
Syntax
InventorVBAProject.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
InventorVBAProject.Parent Property
Parent Object: InventorVBAProject
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
InventorVBAProject.Parent() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 6
InventorVBAProject.ProjectType Property
Parent Object: InventorVBAProject
Description
Property that returns a constant specifying the type of VBA project this project is.
Syntax
InventorVBAProject.ProjectType() As VBAProjectTypeEnum
InventorVBAProject Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
Property Value
This is a read only property whose value is a VBAProjectTypeEnum.
Version
Introduced in version 6
InventorVBAProject.Save Method
Parent Object: InventorVBAProject
Description
Method that saves the VBA project.
Syntax
InventorVBAProject.Save()
Version
Introduced in version 6
InventorVBAProject.SaveAs Method
Parent Object: InventorVBAProject
Description
Method that saves the project to a specified location. Please note that this method works only for
user-defined VBA projects. It will not work with Application or Document VBA projects, which are
built in.
Syntax
InventorVBAProject.SaveAs( FullFileName As String )
Parameters
Name Type Description
FullFileName String Input String that specifies the full path of the project file to save.
InventorVBAProject Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
Version
Introduced in version 6
InventorVBAProject.Saved Property
Parent Object: InventorVBAProject
Description
Property that indicates if this project has been saved or not.
Syntax
InventorVBAProject.Saved() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
InventorVBAProject.Type Property
Parent Object: InventorVBAProject
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAProject.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
InventorVBAProject Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
Version
Introduced in version 6
InventorVBAProject.VBProject Property
Parent Object: InventorVBAProject
Description
Property that returns the VBA project that corresponds to this InventorVBAProject.
Syntax
InventorVBAProject.VBProject() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
InventorVBAProject Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh37E1.htm 16/06/2025
InventorVBAProjects Object
Description
A collection of Autodesk Inventor's VBA projects ( objects).
Methods
Name Description
Add
Method that creates a new Autodesk Inventor VBA project. Please note that this method
works only for user-defined VBA projects.
Open Method that opens the specified VBA project.
Properties
Name Description
Count Property that returns the number of items in the collection.
Item Returns the specified InventorVBAProject object from the collection.
Parent Property that returns the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.VBAProjects, InventorServer.VBAProjects, InventorServerObject.VBAProjects
Version
Introduced in version 6
InventorVBAProjects.Add Method
Parent Object: InventorVBAProjects
Description
Method that creates a new Autodesk Inventor VBA project. Please note that this method works
only for user-defined VBA projects.
Syntax
InventorVBAProjects.Add() As InventorVBAProject
InventorVBAProjects Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh527D.htm 16/06/2025
Version
Introduced in version 6
InventorVBAProjects.Count Property
Parent Object: InventorVBAProjects
Description
Property that returns the number of items in the collection.
Syntax
InventorVBAProjects.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
InventorVBAProjects.Item Property
Parent Object: InventorVBAProjects
Description
Returns the specified InventorVBAProject object from the collection.
Syntax
InventorVBAProjects.Item( Index As Long ) As InventorVBAProject
Property Value
This is a read only property whose value is an InventorVBAProject.
Parameters
InventorVBAProjects Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh527D.htm 16/06/2025
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 6
InventorVBAProjects.Open Method
Parent Object: InventorVBAProjects
Description
Method that opens the specified VBA project.
Syntax
InventorVBAProjects.Open( FullFileName As String )
Parameters
Name Type Description
FullFileName String Input String that specifies the name of the project file to open.
Version
Introduced in version 6
InventorVBAProjects.Parent Property
Parent Object: InventorVBAProjects
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
InventorVBAProjects.Parent() As Application
InventorVBAProjects Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh527D.htm 16/06/2025
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 6
InventorVBAProjects.Type Property
Parent Object: InventorVBAProjects
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
InventorVBAProjects.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
InventorVBAProjects Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh527D.htm 16/06/2025
iPartFactory Object
Description
The iPartFactory object provides access to the iPart table and provides methods to create
additional iPart members ( objects).
Methods
Name Description
CreateCustomMember
Method that creates an iPart member for a custom factory using the
parameter values in a row. The created iPartMember is returned.
CreateMember
Method that creates an iPart member using the parameter values in a row.
The created iPartMember is returned.
Delete
Method that converts an iPart factory to a regular part. When an iPart
factory is converted to a regular part, all of the iPart members created
from the factory become sick.
Export Exports the iPartFactory to an external file.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
CustomFactory
Property that specifies whether this iPartFactory object represents a custom
factory or a standard factory. This property is True in the case where it
represents a custom factory.
DefaultRow Gets and sets the default row for this iPart factory.
DisplayStyleColumn Gets and sets the column to use as the display (render) style column.
ExcelWorkSheet Property that returns the Excel spreadsheet that represents the iPart table.
FactoryOptions Property that gets the options for the factory.
FileNameColumn Gets and sets the column to use as the file name column.
MaterialColumn Gets and sets the column to use as the material column.
MemberCacheDir
Property that returns the directory location for the newly created iPart
members.
MemberEditScope
Gets and sets whether the edits to a member should affect just the active
member or all members within the factory.
Parent Property that returns the parent PartDocument of the factory.
TableColumns Property that returns the iPartTableColumns collection object.
TableRows Property that returns the iPartTableRows collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
iPartFactory Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Accessed From
iPartMember.ParentFactory, iPartTableCell.Parent, iPartTableColumn.Parent,
iPartTableRow.Parent, PartComponentDefinition.CreateFactory,
PartComponentDefinition.iPartFactory, SheetMetalComponentDefinition.CreateFactory,
SheetMetalComponentDefinition.iPartFactory
Samples
Name Description
Adding iPart occurrences
to an assembly
This sample demonstrates adding iPart occurrences to an assembly.
Create a Configuration
Table
This sample demonstrates the creation of a configuration
(iPart/iAssembly) table in a drawing from a factory document.
Version
Introduced in version 6
iPartFactory.Application Property
Parent Object: iPartFactory
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartFactory.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iPartFactory.CreateCustomMember Method
iPartFactory Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Parent Object: iPartFactory
Description
Method that creates an iPart member for a custom factory using the parameter values in a row.
The created iPartMember is returned.
Syntax
iPartFactory.CreateCustomMember( FullFileName As String, [Row] As Variant,
[CustomInput] As Variant ) As iPartMember
Parameters
Name Type Description
FullFileName String Input String that specifies the full filename of the iPart member.
Row Variant
Optional input Variant that specifies the row number within an iPart table.
The row index is specified either by a Long (row index), a String
(PartIdentifier), or an iPartTableRow object. If a RowIndex is not
specified, default row will be used to create the iPart member.
This is an optional argument whose default value is null.
CustomInput Variant
Optional input safearray of Strings that specifies the input to use for the
custom input. If the factory is a custom factory and this is not supplied the
default values for custom values are used. The custom input strings are
supplied in a column order. If the factory is not a custom factory this
argument is ignored.
This is an optional argument whose default value is null.
Version
Introduced in version 6
iPartFactory.CreateMember Method
Parent Object: iPartFactory
Description
Method that creates an iPart member using the parameter values in a row. The created
iPartMember is returned.
iPartFactory Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Syntax
iPartFactory.CreateMember( [Row] As Variant ) As iPartMember
Parameters
Name Type Description
Row Variant
Optional input Variant that specifies the row number within an iPart table. The
row index is specified either by a Long (row index), a String (PartIdentifier), or an
iPartTableRow object. If a RowIndex is not specified, the default row will be used
to create the iPart member.
This is an optional argument whose default value is null.
Version
Introduced in version 6
iPartFactory.CustomFactory Property
Parent Object: iPartFactory
Description
Property that specifies whether this iPartFactory object represents a custom factory or a standard
factory. This property is True in the case where it represents a custom factory.
Syntax
iPartFactory.CustomFactory() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
iPartFactory.DefaultRow Property
Parent Object: iPartFactory
iPartFactory Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Description
Gets and sets the default row for this iPart factory.
Syntax
iPartFactory.DefaultRow() As iPartTableRow
Property Value
This is a read/write property whose value is an iPartTableRow.
Version
Introduced in version 6
iPartFactory.Delete Method
Parent Object: iPartFactory
Description
Method that converts an iPart factory to a regular part. When an iPart factory is converted to a
regular part, all of the iPart members created from the factory become sick.
Syntax
iPartFactory.Delete()
Version
Introduced in version 6
iPartFactory.DisplayStyleColumn Property
Parent Object: iPartFactory
Description
Gets and sets the column to use as the display (render) style column.
iPartFactory Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Syntax
iPartFactory.DisplayStyleColumn() As iPartTableColumn
Property Value
This is a read/write property whose value is an iPartTableColumn.
Version
Introduced in version 2011
iPartFactory.ExcelWorkSheet Property
Parent Object: iPartFactory
Description
Property that returns the Excel spreadsheet that represents the iPart table.
Syntax
iPartFactory.ExcelWorkSheet() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartFactory.Export Method
Parent Object: iPartFactory
Description
Exports the iPartFactory to an external file.
iPartFactory Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Syntax
iPartFactory.Export( FileName As String, FileFormat As FileFormatEnum, [Options] As
Variant )
Parameters
Name Type Description
FileName String Input string that specifies the file name to export the iPartFactory to.
FileFormat FileFormatEnum Input FileFormatEnum that specifies the file format to save to.
Options Variant
Optional input NameValueMap object that specifies additional
options for export.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
iPartFactory.FactoryOptions Property
Parent Object: iPartFactory
Description
Property that gets the options for the factory.
Syntax
iPartFactory.FactoryOptions() As FactoryOptions
Property Value
This is a read only property whose value is a FactoryOptions.
Version
Introduced in version 2010
iPartFactory.FileNameColumn Property
Parent Object: iPartFactory
iPartFactory Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Description
Gets and sets the column to use as the file name column.
Syntax
iPartFactory.FileNameColumn() As iPartTableColumn
Property Value
This is a read/write property whose value is an iPartTableColumn.
Version
Introduced in version 2011
iPartFactory.MaterialColumn Property
Parent Object: iPartFactory
Description
Gets and sets the column to use as the material column.
Syntax
iPartFactory.MaterialColumn() As iPartTableColumn
Property Value
This is a read/write property whose value is an iPartTableColumn.
Version
Introduced in version 2011
iPartFactory.MemberCacheDir Property
Parent Object: iPartFactory
Description
iPartFactory Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Property that returns the directory location for the newly created iPart members.
Syntax
iPartFactory.MemberCacheDir() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iPartFactory.MemberEditScope Property
Parent Object: iPartFactory
Description
Gets and sets whether the edits to a member should affect just the active member or all members
within the factory.
Syntax
iPartFactory.MemberEditScope() As MemberEditScopeEnum
Property Value
This is a read/write property whose value is a MemberEditScopeEnum.
Version
Introduced in version 11
iPartFactory.Parent Property
Parent Object: iPartFactory
Description
Property that returns the parent PartDocument of the factory.
iPartFactory Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Syntax
iPartFactory.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartFactory.TableColumns Property
Parent Object: iPartFactory
Description
Property that returns the iPartTableColumns collection object.
Syntax
iPartFactory.TableColumns() As iPartTableColumns
Property Value
This is a read only property whose value is an iPartTableColumns.
Samples
Name Description
Create a
Configuration Table
This sample demonstrates the creation of a configuration
(iPart/iAssembly) table in a drawing from a factory document.
Version
Introduced in version 6
iPartFactory.TableRows Property
Parent Object: iPartFactory
iPartFactory Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
Description
Property that returns the iPartTableRows collection object.
Syntax
iPartFactory.TableRows() As iPartTableRows
Property Value
This is a read only property whose value is an iPartTableRows.
Samples
Name Description
Adding iPart occurrences to an
assembly
This sample demonstrates adding iPart occurrences to an
assembly.
Version
Introduced in version 6
iPartFactory.Type Property
Parent Object: iPartFactory
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartFactory.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartFactory Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69FD.htm 16/06/2025
iFeatureVectorInput Object
Derived from: iFeatureInput Object
Description
The iFeatureVectorInput object represents the vector input information of an iFeature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
FlipOption Gets and sets whether the geometry selection needs to be flipped.
LineInput Gets and sets the geometry matching the vector input.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the desired
values and entities.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
iFeatureVectorInput.Application Property
Parent Object: iFeatureVectorInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureVectorInput.Application() As Object
iFeatureVectorInput Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8D74.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureVectorInput.EntityType Property
Parent Object: iFeatureVectorInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureVectorInput.EntityType() As iFeatureEntityInputTypeEnum
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
Version
Introduced in version 6
iFeatureVectorInput.FlipOption Property
Parent Object: iFeatureVectorInput
Description
Gets and sets whether the geometry selection needs to be flipped.
Syntax
iFeatureVectorInput.FlipOption() As Boolean
iFeatureVectorInput Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8D74.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
iFeatureVectorInput.LineInput Property
Parent Object: iFeatureVectorInput
Description
Gets and sets the geometry matching the vector input.
Syntax
iFeatureVectorInput.LineInput() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 6
iFeatureVectorInput.Name Property
Parent Object: iFeatureVectorInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API
you can use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureVectorInput.Name() As String
iFeatureVectorInput Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8D74.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureVectorInput.Prompt Property
Parent Object: iFeatureVectorInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
Syntax
iFeatureVectorInput.Prompt() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureVectorInput.Type Property
Parent Object: iFeatureVectorInput
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureVectorInput.Type() As ObjectTypeEnum
iFeatureVectorInput Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8D74.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureVectorInput Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8D74.htm 16/06/2025
iFeatureWorkPlaneInput Object
Derived from: iFeatureInput Object
Description
The iFeatureWorkPlaneInput object represents the work plane input information of an iFeature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
FlipOption Gets and sets whether direction of the selection needs to be flipped.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the desired
values and entities.
PlaneInput Gets and sets the geometry matching the plane input.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
iFeatureWorkPlaneInput.Application
Property
Parent Object: iFeatureWorkPlaneInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
iFeatureWorkPlaneInput Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAEF.htm 16/06/2025
Syntax
iFeatureWorkPlaneInput.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureWorkPlaneInput.EntityType
Property
Parent Object: iFeatureWorkPlaneInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureWorkPlaneInput.EntityType() As iFeatureEntityInputTypeEnum
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
Version
Introduced in version 6
iFeatureWorkPlaneInput.FlipOption
Property
Parent Object: iFeatureWorkPlaneInput
Description
iFeatureWorkPlaneInput Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAEF.htm 16/06/2025
Gets and sets whether direction of the selection needs to be flipped.
Syntax
iFeatureWorkPlaneInput.FlipOption() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
iFeatureWorkPlaneInput.Name Property
Parent Object: iFeatureWorkPlaneInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API
you can use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureWorkPlaneInput.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureWorkPlaneInput.PlaneInput
Property
Parent Object: iFeatureWorkPlaneInput
Description
iFeatureWorkPlaneInput Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAEF.htm 16/06/2025
Gets and sets the geometry matching the plane input.
Syntax
iFeatureWorkPlaneInput.PlaneInput() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 6
iFeatureWorkPlaneInput.Prompt Property
Parent Object: iFeatureWorkPlaneInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
Syntax
iFeatureWorkPlaneInput.Prompt() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureWorkPlaneInput.Type Property
Parent Object: iFeatureWorkPlaneInput
Description
Returns an ObjectTypeEnum indicating this object's type.
iFeatureWorkPlaneInput Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAEF.htm 16/06/2025
Syntax
iFeatureWorkPlaneInput.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureWorkPlaneInput Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAEF.htm 16/06/2025
iMateDefinition Object
Description
The iMateDefinition object is the base class for all iMate definition objects.
Methods
Name Description
Delete Method that deletes the iMateDefinition.
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
Exported
Read-write property that gets and sets whether the object is exported.
Objects must be marked for export in order for them to be derived.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
Identifier
Property that returns the internal unique identifier for this
iMateDefinition.
MatchList
Gets and sets an array of strings that specifies the priority order for
iMate definition matches.
Name Gets the name of this iMateDefinition.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity Gets the object this entity is dependent on.
SequenceIndex Gets the index of this iMateDefinition.
Suppressed
Gets the boolean flag that indicates whether this iMateDefinition is
suppressed or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AngleiMateDefinition.ReferencedEntity, AngleiMateDefinitionProxy.NativeObject,
AngleiMateDefinitionProxy.ReferencedEntity, CompositeiMateDefinition.Item,
CompositeiMateDefinition.ReferencedEntity, CompositeiMateDefinitionProxy.Item,
CompositeiMateDefinitionProxy.NativeObject,
CompositeiMateDefinitionProxy.ReferencedEntity, FlushiMateDefinition.ReferencedEntity,
iMateDefinition Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
FlushiMateDefinitionProxy.NativeObject, FlushiMateDefinitionProxy.ReferencedEntity,
iMateDefinition.ReferencedEntity, iMateDefinitions.Item, iMateDefinitionsEnumerator.Item,
iMateResult.GetInputs, iMateResultProxy.GetInputs, InsertiMateDefinition.ReferencedEntity,
InsertiMateDefinitionProxy.NativeObject, InsertiMateDefinitionProxy.ReferencedEntity,
MateiMateDefinition.ReferencedEntity, MateiMateDefinitionProxy.NativeObject,
MateiMateDefinitionProxy.ReferencedEntity, RotateRotateiMateDefinition.ReferencedEntity,
RotateRotateiMateDefinitionProxy.NativeObject,
RotateRotateiMateDefinitionProxy.ReferencedEntity,
RotateTranslateiMateDefinition.ReferencedEntity,
RotateTranslateiMateDefinitionProxy.NativeObject,
RotateTranslateiMateDefinitionProxy.ReferencedEntity,
TangentiMateDefinition.ReferencedEntity, TangentiMateDefinitionProxy.NativeObject,
TangentiMateDefinitionProxy.ReferencedEntity
Derived Classes
AngleiMateDefinition, CompositeiMateDefinition, FlushiMateDefinition, InsertiMateDefinition,
MateiMateDefinition, RotateRotateiMateDefinition, RotateTranslateiMateDefinition,
TangentiMateDefinition
Version
Introduced in version 6
iMateDefinition.Application Property
Parent Object: iMateDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iMateDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iMateDefinition Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
iMateDefinition.AttributeSets Property
Parent Object: iMateDefinition
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iMateDefinition.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
iMateDefinition.Delete Method
Parent Object: iMateDefinition
Description
Method that deletes the iMateDefinition.
Syntax
iMateDefinition.Delete()
Version
Introduced in version 11
iMateDefinition.Exported Property
Parent Object: iMateDefinition
Description
iMateDefinition Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
iMateDefinition.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
iMateDefinition.GetReferenceKey Method
Parent Object: iMateDefinition
Description
Method that generates and returns the reference key for this entity.
Syntax
iMateDefinition.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
iMateDefinition Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 7
iMateDefinition.HasReferenceComponent
Property
Parent Object: iMateDefinition
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
iMateDefinition.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
iMateDefinition.Identifier Property
Parent Object: iMateDefinition
Description
Property that returns the internal unique identifier for this iMateDefinition.
Syntax
iMateDefinition.Identifier() As String
iMateDefinition Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iMateDefinition.MatchList Property
Parent Object: iMateDefinition
Description
Gets and sets an array of strings that specifies the priority order for iMate definition matches.
Syntax
iMateDefinition.MatchList() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 11
iMateDefinition.Name Property
Parent Object: iMateDefinition
Description
Gets the name of this iMateDefinition.
Syntax
iMateDefinition.Name() As String
iMateDefinition Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
iMate Result
Creation
This sample demonstrates creating an iMate result using two existin iMate
definitions.
Version
Introduced in version 6
iMateDefinition.ReferenceComponent
Property
Parent Object: iMateDefinition
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
iMateDefinition.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2009
iMateDefinition.ReferencedEntity Property
Parent Object: iMateDefinition
Description
iMateDefinition Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
Gets the object this entity is dependent on.
Syntax
iMateDefinition.ReferencedEntity() As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Version
Introduced in version 2009
iMateDefinition.SequenceIndex Property
Parent Object: iMateDefinition
Description
Gets the index of this iMateDefinition.
Syntax
iMateDefinition.SequenceIndex() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 6
iMateDefinition.Suppressed Property
Parent Object: iMateDefinition
Description
Gets the boolean flag that indicates whether this iMateDefinition is suppressed or not.
iMateDefinition Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
Syntax
iMateDefinition.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
iMateDefinition.Type Property
Parent Object: iMateDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iMateDefinition Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC156.htm 16/06/2025
iMateDefinitions Object
Description
The iMateDefinitions collection provides access to all of the objects in a part or assembly.
Methods
Name Description
AddAngleiMateDefinition
Method that creates a new angle iMate definition. The newly created
AngleiMateDefinition object is returned.
AddCompositeiMateDefinition
Method that creates a new composite iMate definition. The newly created
CompositeiMateDefinition object is returned. When iMate definition
objects are used as input for a composite iMate, the iMateDefinition objects
are no longer directly accessible through the iMateDefinitions collection.
They are only accessible through the CompositeiMateDefinition object.
AddFlushiMateDefinition
Method that creates a new flush iMate definition. The newly created
FlushiMateDefinition object is returned.
AddInsertiMateDefinition
Method that creates a new insert iMate definition. The newly created
InsertiMateDefinition object is returned.
AddMateiMateDefinition Method that creates a new mate iMate definition.
AddRotateRotateiMateDefinition Method that creates a new rotation motion iMate definition.
AddRotateTranslateiMateDefinition Method that creates a new rotate-translate motion iMate definition.
AddTangentiMateDefinition Method that creates a new tangent iMate definition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified iMateDefinition object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.iMateDefinitions, PartComponentDefinition.iMateDefinitions,
SheetMetalComponentDefinition.iMateDefinitions, WeldmentComponentDefinition.iMateDefinitions
Version
Introduced in version 6
iMateDefinitions.AddAngleiMateDefinition Method
Parent Object: iMateDefinitions
Description
iMateDefinitions Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Method that creates a new angle iMate definition. The newly created AngleiMateDefinition object is returned.
Syntax
iMateDefinitions.AddAngleiMateDefinition( Entity As Object, DirectionReversed As Boolean, Angle As
Variant, [BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As AngleiMateDefinition
Parameters
Name Type Description
Entity Object
Object that defines the entity. This object can be a planar face, work plane, linear
edge, work axis, or a face that defines an axis.
DirectionReversed Boolean Boolean that specifies whether to reverse the direction of the entity.
Angle Variant
Defines the angle value. This can be either a numeric value or a string. A parameter
for this value is created and the supplied string or value is assigned to the parameter.
If a value is input, the units are radians. If a string is input the units can be specified
as part of the string or will default to the current angle units of the document.
BiasPoint Variant
Point object that is used to help determine the initial position when this iMate
definition is used. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint. An example of when
the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each
other. If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
Name String
String that specifies the name of the iMate definition. If not specified, a name is
automatically generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.AddCompositeiMateDefinition
Method
Parent Object: iMateDefinitions
Description
Method that creates a new composite iMate definition. The newly created CompositeiMateDefinition object is
returned. When iMate definition objects are used as input for a composite iMate, the iMateDefinition objects are
no longer directly accessible through the iMateDefinitions collection. They are only accessible through the
CompositeiMateDefinition object.
iMateDefinitions Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Syntax
iMateDefinitions.AddCompositeiMateDefinition( iMates As ObjectCollection, [Name] As String, [MatchList]
As Variant ) As CompositeiMateDefinition
Parameters
Name Type Description
iMates ObjectCollection
Contains the iMates that are used as input for the composite iMate. The collection
must contain only iMateDefinition objects. It will fail if any other object types are
input or if any of the objects are a CompositeiMateDefinition object.
Name String
Specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.AddFlushiMateDefinition Method
Parent Object: iMateDefinitions
Description
Method that creates a new flush iMate definition. The newly created FlushiMateDefinition object is returned.
Syntax
iMateDefinitions.AddFlushiMateDefinition( Entity As Object, Offset As Variant, [BiasPoint] As Variant,
[Name] As String, [MatchList] As Variant ) As FlushiMateDefinition
Parameters
Name Type Description
Entity Object
Object that defines the entity. The input object must be either a planar Face object or
WorkPlane object.
Offset Variant
Defines the offset value. This can be either a numeric value or a string. A parameter for this
value is created and the supplied string or value is assigned to the parameter. If a value is
input, the units are centimeters. If a string is input the units can be specified as part of the
string or will default to the current length units of the document.
BiasPoint Variant Point object that is used to help determine the initial position when this iMate definition is
used. This provides some general control over the position of the occurrence when it isn't
being controlled by another constraint. An example of when the bias points are useful is the
case when the first constraint on a part is a mate constraint. In the case where the mate is
between two planes, the parts can be positioned anywhere along the infinite plane that defines
their mating contact. Using the bias points you can define the position of the two occurrences,
relative to each other. If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
iMateDefinitions Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
This is an optional argument whose default value is null.
Name String
String that specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.AddInsertiMateDefinition Method
Parent Object: iMateDefinitions
Description
Method that creates a new insert iMate definition. The newly created InsertiMateDefinition object is returned.
Syntax
iMateDefinitions.AddInsertiMateDefinition( Entity As Object, AxesOpposed As Boolean, Distance As Variant,
[BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As InsertiMateDefinition
Parameters
Name Type Description
Entity Object Object that defines the entity. This object must be a circular edge.
AxesOpposed Boolean
Specifies whether the direction of the axis of the input entities are in the same direction
or opposed. A value of True indicates they are opposed.
Distance Variant
Defines the offset value. This can be either a numeric value or a string. A parameter for
this value is created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can be specified as
part of the string or will default to the current length units of the document.
BiasPoint Variant
Used to help determine the initial position when this iMate definition is used. This
provides some general control over the position of the occurrence when it isn't being
controlled by another constraint. An example of when the bias points are useful is the
case when the first constraint on a part is a mate constraint. In the case where the mate is
between two planes, the parts can be positioned anywhere along the infinite plane that
defines their mating contact. Using the bias points you can define the position of the two
occurrences, relative to each other. If a bias point is not given, one is calculated that is at
the center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Name String
Specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
iMateDefinitions Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Samples
Name Description
Add iMate Definition Add iMate definitions using AddMateiMateDefinition and AddInsertiMateDefinition.
Version
Introduced in version 11
iMateDefinitions.AddMateiMateDefinition Method
Parent Object: iMateDefinitions
Description
Method that creates a new mate iMate definition.
Syntax
iMateDefinitions.AddMateiMateDefinition( Entity As Object, Offset As Variant, [EntityInferredType] As
InferredTypeEnum, [BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As
MateiMateDefinition
Parameters
Name Type Description
Entity Object Defines the entity to mate.
Offset Variant
Defines the offset value. This can be either a numeric value or a string. A
parameter for this value is created and the supplied string or value is
assigned to the parameter. If a value is input, the units are centimeters. If
a string is input the units can be specified as part of the string or will
default to the current length units of the document.
EntityInferredType InferredTypeEnum
Enum that specifies how the geometry of the entity is to be interpreted.
Depending on the geometry of the entity, different options are possible.
If the entity is a cylinder this can be either kNoInferrence or
kInferredLine. For kNoInferrence to be valid for a cylinder, the matching
iMate must also be on a cylinder and they must be the same radius. If the
entity is a sphere this can be either kNoInferrence or kInferredPoint. For
kNoInferrence to be valid for a sphere, the matching iMate must also be
on a sphere and they must be the same radius. If the entity is a cone this
can be either kNoInferrence or kInferredLine. For kNoInferrence to be
valid for a cone, the matching iMate must also be on a cone and they
must have the same taper angle. If the entity is a torus this can be either
kInferredLine or kInferredPoint. For a plane, only kNoInferrence is
valid.
This is an optional argument whose default value is 24833.
BiasPoint Variant Point object that is used to help determine the initial position when this
iMate definition is used. This provides some general control over the
position of the occurrence when it isn't being controlled by another
constraint. An example of when the bias points are useful is the case
when the first constraint on a part is a mate constraint. In the case where
iMateDefinitions Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
the mate is between two planes, the parts can be positioned anywhere
along the infinite plane that defines their mating contact. Using the bias
points you can define the position of the two occurrences, relative to
each other. If a bias point is not given, one is calculated that is at the
center of the parameter range of the input entity.
This is an optional argument whose default value is null.
Name String
Specifies the name of the iMate definition. If not specified, a name is
automatically generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions
to match.
This is an optional argument whose default value is null.
Samples
Name Description
Add iMate Definition Add iMate definitions using AddMateiMateDefinition and AddInsertiMateDefinition.
Version
Introduced in version 11
iMateDefinitions.AddRotateRotateiMateDefinition
Method
Parent Object: iMateDefinitions
Description
Method that creates a new rotation motion iMate definition.
Syntax
iMateDefinitions.AddRotateRotateiMateDefinition( Entity As Object, Ratio As Variant, ForwardDirection As
Boolean, [BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As RotateRotateiMateDefinition
Parameters
Name Type Description
Entity Object
Defines the entity and it rotation axis. The input object must be a planar Face, a
revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For planar objects
the rotation axis is normal to the input face.
Ratio Variant
Defines the rotation ratio value. This can be either a numeric value or a string. A
parameter for this value is created and the supplied string or value is assigned to the
parameter. The input value is unitless.
ForwardDirection Boolean
Defines the direction of rotation of the objects with respect to the axis direction. If
the input value is True then both objects will rotate the same direction around their
axes. If False, then they will rotate in opposite directions.
BiasPoint Variant
iMateDefinitions Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Point object that is used to help determine the initial position when this iMate
definition is used. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint. An example of when
the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each
other. If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
Name String
Specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.AddRotateTranslateiMateDefinition
Method
Parent Object: iMateDefinitions
Description
Method that creates a new rotate-translate motion iMate definition.
Syntax
iMateDefinitions.AddRotateTranslateiMateDefinition( Entity As Object, Ratio As Variant, ForwardDirection
As Boolean, [BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As
RotateTranslateiMateDefinition
Parameters
Name Type Description
Entity Object
Defines the entity and its rotation axis. The input object must be a planar Face, a
revolved Face, a linear Edge, a WorkPlane, or a WorkAxis object. For planar objects
the rotation axis is normal to the input face.
Ratio Variant
Input Variant that defines the distance of translation for every revolution of the
rotated occurrence. This can be either a numeric value or a string. A parameter for
this value is created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can be specified
as part of the string or will default to the current length units of the document.
ForwardDirection Boolean
Defines the direction of translation with respect to the rotation direction relative to
the axes directions. If the input value is True then when the rotation object is rotated
in a positive direction about its axis, the translation object will move in the positive
direction of its vector, If False, it will move in the negative direction.
iMateDefinitions Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
BiasPoint Variant Point object that is used to help determine the initial position when this iMate
definition is used. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint. An example of when
the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each
other. If a bias point is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
Name String
Specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.AddTangentiMateDefinition
Method
Parent Object: iMateDefinitions
Description
Method that creates a new tangent iMate definition.
Syntax
iMateDefinitions.AddTangentiMateDefinition( Entity As Object, InsideTangency As Boolean, Offset As
Variant, [BiasPoint] As Variant, [Name] As String, [MatchList] As Variant ) As TangentiMateDefinition
Parameters
Name Type Description
Entity Object Defines the entity to use for the tangency.
InsideTangency Boolean Specifies the orientation of the surfaces at the tangent contact point of the surfaces.
Offset Variant
Defines the offset value. This can be either a numeric value or a string. A parameter for
this value is created and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input the units can be specified as
part of the string or will default to the current length units of the document.
BiasPoint Variant Point object that is used to help determine the initial position when this iMate
definition is used. This provides some general control over the position of the
occurrence when it isn't being controlled by another constraint. An example of when
the bias points are useful is the case when the first constraint on a part is a mate
constraint. In the case where the mate is between two planes, the parts can be
positioned anywhere along the infinite plane that defines their mating contact. Using
the bias points you can define the position of the two occurrences, relative to each
iMateDefinitions Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
other. If a bias point is not given, one is calculated that is at the center of the parameter
range of the input entity.
This is an optional argument whose default value is null.
Name String
Specifies the name of the iMate definition. If not specified, a name is automatically
generated.
This is an optional argument whose default value is """".
MatchList Variant
Array of Strings that specifies the priority order of the iMate definitions to match.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iMateDefinitions.Application Property
Parent Object: iMateDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iMateDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iMateDefinitions.Count Property
Parent Object: iMateDefinitions
Description
Property that returns the number of items in this collection.
Syntax
iMateDefinitions.Count() As Long
iMateDefinitions Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iMateDefinitions.Item Property
Parent Object: iMateDefinitions
Description
Returns the specified iMateDefinition object from the collection.
Syntax
iMateDefinitions.Item( Index As Long ) As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Parameters
Name Type Description
Index Long Specifies the index of the to return.
Samples
Name Description
iMate Result Creation This sample demonstrates creating an iMate result using two existin iMate definitions.
Version
Introduced in version 6
iMateDefinitions.Type Property
Parent Object: iMateDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
iMateDefinitions Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
Syntax
iMateDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iMateDefinitions Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD9C0.htm 16/06/2025
iMateDefinitionsEnumerator Object
Description
Object that represents an iMateDefinitionsEnumerator. Presents a snapshot of the set of objects.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ComponentOccurrence.iMateDefinitions, ComponentOccurrenceProxy.iMateDefinitions,
DerivedPartComponent.iMateDefinitions, DerivedPartComponentProxy.iMateDefinitions
Version
Introduced in version 6
iMateDefinitionsEnumerator.Count Property
Parent Object: iMateDefinitionsEnumerator
Description
Property that returns the number of items in this collection.
Syntax
iMateDefinitionsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iMateDefinitionsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF640.htm 16/06/2025
iMateDefinitionsEnumerator.Item Property
Parent Object: iMateDefinitionsEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
iMateDefinitionsEnumerator.Item( Index As Long ) As iMateDefinition
Property Value
This is a read only property whose value is an iMateDefinition.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 6
iMateDefinitionsEnumerator.Type Property
Parent Object: iMateDefinitionsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateDefinitionsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
iMateDefinitionsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF640.htm 16/06/2025
Version
Introduced in version 6
iMateDefinitionsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF640.htm 16/06/2025
iMateResult Object
Description
The iMateResult object represents the result of using an iMate in an assembly.
Methods
Name Description
Delete
Method that deletes the iMateResult. This method will fail if the iMateResult
is a part of a composite iMateResult.
GetInputs
Method that returns the input entities that were used to create this iMateResult
object.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetInputs Method that edits the inputs of an iMate result.
Properties
Name Description
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
Constraints
Property that returns an AssemblyConstraintstEnumerator containing the
constraints associated with this iMate. If the iMate is not a composite iMate this
collection will contain one constraint. If it is a composite it can contain any
number of constraints.
IsComposite Property that indicates if this iMateResult represents a composite iMate result.
Name Gets and sets the name of the iMateResult.
ParentComposite
Property that returns the parent iMateResult object. This property is only valid
in the case when the iMateResult object it is being called from is not a
composite. This can be checked for by using the IsComposite property of the
iMateResult object.
Results
Property that returns an iMateResultsEnumerator object that provides access to
the iMate results object that are part of a composite iMate. This property is only
valid in the case when the iMateResult object it is being called from is a
composite. This can be checked for by using the IsComposite property of the
iMateResult object.
Suppressed Gets and sets whether the iMateResult is suppressed or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AngleConstraint.iMateResult, AngleConstraintProxy.iMateResult,
AssemblyConstraint.iMateResult, AssemblySymmetryConstraint.iMateResult,
AssemblySymmetryConstraintProxy.iMateResult, CustomConstraint.iMateResult,
CustomConstraintProxy.iMateResult, FlushConstraint.iMateResult,
iMateResult Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
FlushConstraintProxy.iMateResult, iMateResult.ParentComposite,
iMateResultProxy.NativeObject, iMateResultProxy.ParentComposite,
iMateResults.AddByiMateAndEntity, iMateResults.AddByTwoiMates, iMateResults.Item,
iMateResultsEnumerator.Item, InsertConstraint.iMateResult, InsertConstraintProxy.iMateResult,
MateConstraint.iMateResult, MateConstraintProxy.iMateResult,
RotateRotateConstraint.iMateResult, RotateRotateConstraintProxy.iMateResult,
RotateTranslateConstraint.iMateResult, RotateTranslateConstraintProxy.iMateResult,
TangentConstraint.iMateResult, TangentConstraintProxy.iMateResult,
TransitionalConstraint.iMateResult, TransitionalConstraintProxy.iMateResult,
TranslateTranslateConstraint.iMateResult, TranslateTranslateConstraintProxy.iMateResult
Derived Classes
iMateResultProxy
Version
Introduced in version 6
iMateResult.AttributeSets Property
Parent Object: iMateResult
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iMateResult.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
iMateResult.Constraints Property
Parent Object: iMateResult
iMateResult Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
Description
Property that returns an AssemblyConstraintstEnumerator containing the constraints associated
with this iMate. If the iMate is not a composite iMate this collection will contain one constraint. If
it is a composite it can contain any number of constraints.
Syntax
iMateResult.Constraints() As AssemblyConstraintsEnumerator
Property Value
This is a read only property whose value is an AssemblyConstraintsEnumerator.
Version
Introduced in version 6
iMateResult.Delete Method
Parent Object: iMateResult
Description
Method that deletes the iMateResult. This method will fail if the iMateResult is a part of a
composite iMateResult.
Syntax
iMateResult.Delete()
Version
Introduced in version 11
iMateResult.GetInputs Method
Parent Object: iMateResult
Description
Method that returns the input entities that were used to create this iMateResult object.
iMateResult Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
Syntax
iMateResult.GetInputs( iMateDefinition As iMateDefinition, Entity As Object )
Parameters
Name Type Description
iMateDefinition iMateDefinition Output object that defines the output iMate.
Entity Object
Output object that defines the second entity. This object can be
either an object or a geometric entity.
Version
Introduced in version 6
iMateResult.GetReferenceKey Method
Parent Object: iMateResult
Description
Method that generates and returns the reference key for this entity.
Syntax
iMateResult.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
iMateResult Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 11
iMateResult.IsComposite Property
Parent Object: iMateResult
Description
Property that indicates if this iMateResult represents a composite iMate result.
Syntax
iMateResult.IsComposite() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
iMateResult.Name Property
Parent Object: iMateResult
Description
Gets and sets the name of the iMateResult.
Syntax
iMateResult.Name() As String
Property Value
This is a read/write property whose value is a String.
iMateResult Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
Version
Introduced in version 11
iMateResult.ParentComposite Property
Parent Object: iMateResult
Description
Property that returns the parent iMateResult object. This property is only valid in the case when
the iMateResult object it is being called from is not a composite. This can be checked for by using
the IsComposite property of the iMateResult object.
Syntax
iMateResult.ParentComposite() As iMateResult
Property Value
This is a read only property whose value is an iMateResult.
Version
Introduced in version 6
iMateResult.Results Property
Parent Object: iMateResult
Description
Property that returns an iMateResultsEnumerator object that provides access to the iMate results
object that are part of a composite iMate. This property is only valid in the case when the
iMateResult object it is being called from is a composite. This can be checked for by using the
IsComposite property of the iMateResult object.
Syntax
iMateResult.Results() As iMateResultsEnumerator
iMateResult Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
Property Value
This is a read only property whose value is an iMateResultsEnumerator.
Version
Introduced in version 6
iMateResult.SetInputs Method
Parent Object: iMateResult
Description
Method that edits the inputs of an iMate result.
Syntax
iMateResult.SetInputs( iMateDefinition As iMateDefinition, Entity As Object, [EntityBiasPoint]
As Variant, [SolutionType] As AngleConstraintSolutionTypeEnum )
Parameters
Name Type Description
iMateDefinition iMateDefinition
Input iMateDefinitionProxy object that
defines the input iMate.
Entity Object
Input object that defines the second entity.
This object can be either a iMateDefinition
proxy object or a geometric entity.
EntityBiasPoint Variant Optional input Point object that is used to
help in determining the initial position of
the occurrence. The occurrences are
repositioned in an attempt to make the bias
point coincident with the iMate. This
provides some general control over the
position of the occurrence when it isn't
being controlled by another constraint.
An example of when the bias points are
useful is the case when the first constraint
on a part is a mate constraint. In the case
where the mate is between two planes, the
parts can be positioned anywhere along the
infinite plane that defines their mating
contact. Using the bias point you can define
iMateResult Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
the position of the two occurrences, relative
to each other.
If a bias point is not given, one is calculated
that is at the center of the parameter range
of the input entity.
This is an optional argument whose default
value is null.
SolutionType AngleConstraintSolutionTypeEnum
Optional input
AngleConstraintSolutionTypeEnum that
specifies the solution type when creating an
angle constraint. If specified to be
kDirectedSolution, the solution always
applies the right hand rule. If specified to be
kUndirectedSolution, the solution allows
either orientation, thus resolving situations
where component orientation flips during a
constraint drive or drag. The default value is
kDirectedSolution.
This is an optional argument whose default
value is 78593.
Version
Introduced in version 2011
iMateResult.Suppressed Property
Parent Object: iMateResult
Description
Gets and sets whether the iMateResult is suppressed or not.
Syntax
iMateResult.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
iMateResult Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
Version
Introduced in version 11
iMateResult.Type Property
Parent Object: iMateResult
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateResult.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iMateResult Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE6C.htm 16/06/2025
iMateResultProxy Object
Derived from: iMateResult Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the iMateResult. This method will fail if the iMateResult
is a part of a composite iMateResult.
GetInputs
Method that returns the input entities that were used to create this iMateResult
object.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetInputs Method that edits the inputs of an iMate result.
Properties
Name Description
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
Constraints
Property that returns an AssemblyConstraintstEnumerator containing the
constraints associated with this iMate. If the iMate is not a composite
iMate this collection will contain one constraint. If it is a composite it can
contain any number of constraints.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
IsComposite
Property that indicates if this iMateResult represents a composite iMate
result.
Name Gets and sets the name of the iMateResult.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
ParentComposite
Property that returns the parent iMateResult object. This property is only
valid in the case when the iMateResult object it is being called from is not
a composite. This can be checked for by using the IsComposite property
of the iMateResult object.
Results
Property that returns an iMateResultsEnumerator object that provides
access to the iMate results object that are part of a composite iMate. This
property is only valid in the case when the iMateResult object it is being
called from is a composite. This can be checked for by using the
IsComposite property of the iMateResult object.
Suppressed Gets and sets whether the iMateResult is suppressed or not.
iMateResultProxy Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 11
iMateResultProxy.AttributeSets Property
Parent Object: iMateResultProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iMateResultProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
iMateResultProxy.Constraints Property
Parent Object: iMateResultProxy
Description
Property that returns an AssemblyConstraintstEnumerator containing the constraints associated
with this iMate. If the iMate is not a composite iMate this collection will contain one constraint. If
it is a composite it can contain any number of constraints.
Syntax
iMateResultProxy.Constraints() As AssemblyConstraintsEnumerator
Property Value
This is a read only property whose value is an AssemblyConstraintsEnumerator.
iMateResultProxy Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Version
Introduced in version 11
iMateResultProxy.ContainingOccurrence
Property
Parent Object: iMateResultProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
iMateResultProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 11
iMateResultProxy.Delete Method
Parent Object: iMateResultProxy
Description
Method that deletes the iMateResult. This method will fail if the iMateResult is a part of a
composite iMateResult.
Syntax
iMateResultProxy.Delete()
iMateResultProxy Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Version
Introduced in version 11
iMateResultProxy.GetInputs Method
Parent Object: iMateResultProxy
Description
Method that returns the input entities that were used to create this iMateResult object.
Syntax
iMateResultProxy.GetInputs( iMateDefinition As iMateDefinition, Entity As Object )
Parameters
Name Type Description
iMateDefinition iMateDefinition Output object that defines the output iMate.
Entity Object
Output object that defines the second entity. This object can be
either an object or a geometric entity.
Version
Introduced in version 11
iMateResultProxy.GetReferenceKey Method
Parent Object: iMateResultProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
iMateResultProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
iMateResultProxy Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
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
iMateResultProxy.IsComposite Property
Parent Object: iMateResultProxy
Description
Property that indicates if this iMateResult represents a composite iMate result.
Syntax
iMateResultProxy.IsComposite() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
iMateResultProxy.Name Property
Parent Object: iMateResultProxy
Description
Gets and sets the name of the iMateResult.
iMateResultProxy Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Syntax
iMateResultProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iMateResultProxy.NativeObject Property
Parent Object: iMateResultProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
iMateResultProxy.NativeObject() As iMateResult
Property Value
This is a read only property whose value is an iMateResult.
Version
Introduced in version 11
iMateResultProxy.ParentComposite Property
Parent Object: iMateResultProxy
Description
Property that returns the parent iMateResult object. This property is only valid in the case when
the iMateResult object it is being called from is not a composite. This can be checked for by using
the IsComposite property of the iMateResult object.
iMateResultProxy Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Syntax
iMateResultProxy.ParentComposite() As iMateResult
Property Value
This is a read only property whose value is an iMateResult.
Version
Introduced in version 11
iMateResultProxy.Results Property
Parent Object: iMateResultProxy
Description
Property that returns an iMateResultsEnumerator object that provides access to the iMate results
object that are part of a composite iMate. This property is only valid in the case when the
iMateResult object it is being called from is a composite. This can be checked for by using the
IsComposite property of the iMateResult object.
Syntax
iMateResultProxy.Results() As iMateResultsEnumerator
Property Value
This is a read only property whose value is an iMateResultsEnumerator.
Version
Introduced in version 11
iMateResultProxy.SetInputs Method
Parent Object: iMateResultProxy
Description
Method that edits the inputs of an iMate result.
iMateResultProxy Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Syntax
iMateResultProxy.SetInputs( iMateDefinition As iMateDefinition, Entity As Object,
[EntityBiasPoint] As Variant, [SolutionType] As AngleConstraintSolutionTypeEnum )
Parameters
Name Type Description
iMateDefinition iMateDefinition
Input iMateDefinitionProxy object that
defines the input iMate.
Entity Object
Input object that defines the second entity.
This object can be either a iMateDefinition
proxy object or a geometric entity.
EntityBiasPoint Variant
Optional input Point object that is used to
help in determining the initial position of
the occurrence. The occurrences are
repositioned in an attempt to make the bias
point coincident with the iMate. This
provides some general control over the
position of the occurrence when it isn't
being controlled by another constraint.
An example of when the bias points are
useful is the case when the first constraint
on a part is a mate constraint. In the case
where the mate is between two planes, the
parts can be positioned anywhere along the
infinite plane that defines their mating
contact. Using the bias point you can define
the position of the two occurrences, relative
to each other.
If a bias point is not given, one is calculated
that is at the center of the parameter range
of the input entity.
This is an optional argument whose default
value is null.
SolutionType AngleConstraintSolutionTypeEnum Optional input
AngleConstraintSolutionTypeEnum that
specifies the solution type when creating an
angle constraint. If specified to be
kDirectedSolution, the solution always
applies the right hand rule. If specified to be
kUndirectedSolution, the solution allows
either orientation, thus resolving situations
where component orientation flips during a
constraint drive or drag. The default value is
kDirectedSolution.
iMateResultProxy Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
This is an optional argument whose default
value is 78593.
Version
Introduced in version 2011
iMateResultProxy.Suppressed Property
Parent Object: iMateResultProxy
Description
Gets and sets whether the iMateResult is suppressed or not.
Syntax
iMateResultProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
iMateResultProxy.Type Property
Parent Object: iMateResultProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateResultProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
iMateResultProxy Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
Version
Introduced in version 11
iMateResultProxy Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh288B.htm 16/06/2025
iMateResults Object
Description
The iMateResults collection provides access to all of the objects in an assembly. It also supports
the methods that allow the creation of iMateResult objects.
Methods
Name Description
AddByiMateAndEntity
Method that creates a new iMate result. The newly created iMateResult
object is returned. If the two inputs do not define a valid iMateResult the
method will fail.
AddByTwoiMates
Method that creates a new iMate result. The newly created iMateResult
object is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified iMateResult object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.iMateResults, WeldmentComponentDefinition.iMateResults
Version
Introduced in version 6
iMateResults.AddByiMateAndEntity Method
Parent Object: iMateResults
Description
Method that creates a new iMate result. The newly created iMateResult object is returned. If the
two inputs do not define a valid iMateResult the method will fail.
iMateResults Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh429B.htm 16/06/2025
Syntax
iMateResults.AddByiMateAndEntity( iMateDefinition As iMateDefinition, Entity As Object,
[EntityBiasPoint] As Variant, [AngleEntityReversed] As Variant ) As iMateResult
Parameters
Name Type Description
iMateDefinition iMateDefinition Input object that defines the input iMate.
Entity Object
Input object that defines the second entity. This object
must be a valid geometric entity in the assembly, such as
a , WorkAxis, SketchLine, etc.
EntityBiasPoint Variant
Optional input object that is used to help in determining
the initial position of the occurrence. The occurrences are
repositioned in an attempt to make the bias point
coincident with the iMate. This provides some general
control over the position of the occurrence when it isn't
being controlled by another constraint. An example of
when the bias points are useful is the case when the first
constraint on a part is a mate constraint. In the case where
the mate is between two planes, the parts can be positioned
anywhere along the infinite plane that defines their mating
contact. Using the bias point you can define the position of
the two occurrences, relative to each other. If a bias point
is not given, one is calculated that is at the center of the
parameter range of the input entity.
This is an optional argument whose default value is null.
AngleEntityReversed Variant
Optional input Boolean that is only used when creating an
angle constraint. This argument specifies if the direction of
the entity should be reversed or not. A value of True
indicates it should be reversed. If this argument is not
provided for an angle constraint it defaults to False. This
argument is ignored for all other constraint types.
This is an optional argument whose default value is null.
Version
Introduced in version 6
iMateResults.AddByTwoiMates Method
Parent Object: iMateResults
Description
iMateResults Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh429B.htm 16/06/2025
Method that creates a new iMate result. The newly created iMateResult object is returned.
Syntax
iMateResults.AddByTwoiMates( iMateDefinitionOne As iMateDefinition, iMateDefinitionTwo
As iMateDefinition ) As iMateResult
Parameters
Name Type Description
iMateDefinitionOne iMateDefinition Input object that defines the first input iMate.
iMateDefinitionTwo iMateDefinition Input object that defines the second input iMate.
Remarks
If the two inputs do not define a valid iMateResult the method will fail. The result of adding an
iMate will create a single iMateResult and one or more assembly constraints. If a
CompositeiMateDefinition is input, multiple constraints will result.
Samples
Name Description
iMate Result
Creation
This sample demonstrates creating an iMate result using two existin iMate
definitions.
Version
Introduced in version 6
iMateResults.Application Property
Parent Object: iMateResults
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iMateResults.Application() As Object
iMateResults Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh429B.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iMateResults.Count Property
Parent Object: iMateResults
Description
Property that returns the number of items in the collection.
Syntax
iMateResults.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iMateResults.Item Property
Parent Object: iMateResults
Description
Returns the specified iMateResult object from the collection.
Syntax
iMateResults.Item( Index As Variant ) As iMateResult
iMateResults Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh429B.htm 16/06/2025
Property Value
This is a read only property whose value is an iMateResult.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the to return. This can be either a numeric value
indicating the index of the item in the collection or it can be a string indicating the
name of the iMateResult object. If an out-of-range index or a name of a nonexistent
iMateResult is provided, an error will occur.
Version
Introduced in version 6
iMateResults.Type Property
Parent Object: iMateResults
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateResults.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iMateResults Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh429B.htm 16/06/2025
iMateResultsEnumerator Object
Description
Object that represents an iMateResultsEnumerator. Presents a snapshot of the set of objects.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iMateResult.Results, iMateResultProxy.Results
Version
Introduced in version 6
iMateResultsEnumerator.Count Property
Parent Object: iMateResultsEnumerator
Description
Property that returns the number of items in this collection.
Syntax
iMateResultsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iMateResultsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5B34.htm 16/06/2025
iMateResultsEnumerator.Item Property
Parent Object: iMateResultsEnumerator
Description
Allows integer-indexed access to items in the collection.
Syntax
iMateResultsEnumerator.Item( Index As Long ) As iMateResult
Property Value
This is a read only property whose value is an iMateResult.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 6
iMateResultsEnumerator.Type Property
Parent Object: iMateResultsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iMateResultsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
iMateResultsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5B34.htm 16/06/2025
Version
Introduced in version 6
iMateResultsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5B34.htm 16/06/2025
ImportedComponent Object
Derived from: ReferenceComponent Object
Description
ImportedComponent Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from
which it was created. When the link is broken the ReferencedFile property will return
Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this method is called
from.
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
Read-write property that gets and sets the ImportedComponentDefinition which
defines the various inputs that were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded
document or a linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base
part or assembly document. If True, the link still exists. If False, the link has
been broken and the ReferencedFile property will return Nothing.
Name Property that returns the component's name.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the
imported component with the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ComponentOccurrence.ImportedComponent, ComponentOccurrenceProxy.ImportedComponent,
ImportedComponentDefinition.Parent, ImportedComponentProxy.NativeObject, ImportedComponents.Add,
ImportedComponents.Item, ImportedDataExchangeComponentDefinition.Parent,
ImportedDWGComponentDefinition.Parent, ImportedGenericComponentDefinition.Parent,
ImportedRVTComponentDefinition.Parent
ImportedComponent Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Derived Classes
ImportedDataExchangeComponent, ImportedDWGComponent, ImportedGenericComponent,
ImportedRVTComponent
Version
Introduced in version 2016
ImportedComponent.Application Property
Parent Object: ImportedComponent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedComponent.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedComponent.AttributeSets Property
Parent Object: ImportedComponent
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedComponent.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
ImportedComponent Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Version
Introduced in version 2016
ImportedComponent.BreakLinkToFile Method
Parent Object: ImportedComponent
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created.
When the link is broken the ReferencedFile property will return Nothing.
Syntax
ImportedComponent.BreakLinkToFile()
Version
Introduced in version 2016
ImportedComponent.Definition Property
Parent Object: ImportedComponent
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that
were used to create the imported component.
Syntax
ImportedComponent.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedComponent.Delete Method
Parent Object: ImportedComponent
Description
ImportedComponent Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Method that deletes the ReferenceComponent.
Syntax
ImportedComponent.Delete()
Version
Introduced in version 2016
ImportedComponent.GetReferenceKey Method
Parent Object: ImportedComponent
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedComponent.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2016
ImportedComponent.HealthStatus Property
Parent Object: ImportedComponent
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedComponent.HealthStatus() As HealthStatusEnum
ImportedComponent Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedComponent.IsEmbedded Property
Parent Object: ImportedComponent
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedComponent.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponent.LinkedToFile Property
Parent Object: ImportedComponent
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If
True, the link still exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedComponent.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponent Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
ImportedComponent.Name Property
Parent Object: ImportedComponent
Description
Property that returns the component's name.
Syntax
ImportedComponent.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedComponent.Parent Property
Parent Object: ImportedComponent
Description
Property that returns the parent object.
Syntax
ImportedComponent.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedComponent.ReferencedDocumentDescriptor
Property
Parent Object: ImportedComponent
Description
Property that returns the DocumentDescriptor object.
ImportedComponent Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Syntax
ImportedComponent.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2016
ImportedComponent.SetEndOfPart Method
Parent Object: ImportedComponent
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedComponent.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this
reference component. A value of True indicates before and False indicates after.
Version
Introduced in version 2016
ImportedComponent.SuppressLinkToFile Property
Parent Object: ImportedComponent
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file
from which it was created.
Syntax
ImportedComponent.SuppressLinkToFile() As Boolean
ImportedComponent Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponent.Type Property
Parent Object: ImportedComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedComponent Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh73BD.htm 16/06/2025
ImportedComponentDefinition Object
Description
ImportedComponentDefinition Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set
to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
FullFileName Read-only property that returns the full filename of the source file.
Parent Gets the parent object from whom this object can logically be reached.
Type Gets the constant that indicates the type of this object.
Accessed From
ImportedComponent.Definition, ImportedComponentProxy.Definition,
ImportedComponents.CreateDataExchangeDefinition, ImportedComponents.CreateDefinition,
ImportedDataExchangeComponent.Definition,
ImportedDataExchangeComponentProxy.Definition, ImportedDWGComponent.Definition,
ImportedDWGComponentProxy.Definition, ImportedGenericComponent.Definition,
ImportedGenericComponentProxy.Definition, ImportedModelEntity.Parent,
ImportedRVTComponent.Definition, ImportedRVTComponentProxy.Definition
Derived Classes
ImportedDWGComponentDefinition
Version
Introduced in version 2016
ImportedComponentDefinition.Application
Property
Parent Object: ImportedComponentDefinition
Description
ImportedComponentDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F92.htm 16/06/2025
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
ImportedComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedComponentDefinition.FullFileName
Property
Parent Object: ImportedComponentDefinition
Description
Read-only property that returns the full filename of the source file.
Syntax
ImportedComponentDefinition.FullFileName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedComponentDefinition.Parent
Property
Parent Object: ImportedComponentDefinition
ImportedComponentDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F92.htm 16/06/2025
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedComponentDefinition.Parent() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Version
Introduced in version 2016
ImportedComponentDefinition.Type
Property
Parent Object: ImportedComponentDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedComponentDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F92.htm 16/06/2025
ImportedComponentProxy Object
Description
ImportedComponentProxy Object.
Methods
Name Description
BreakLinkToFile Breaks the connection of the Reference Component with the file from which it was created.
Delete Deletes the Reference Component.
GetReferenceKey
Generate the sequence of bytes, called this object's reference key, which can be held onto beyond document
edits and which will allow the caller to be bound back to the live object.
SetEndOfPart Method that repositions the end of part marker relative to the object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer'
when running with the Apprentice Server.
AttributeSets Gets the Attribute Sets collection on this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced
through. The returned occurrence is the containing occurrence.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the
various inputs that were used to create the imported component.
HealthStatus Gets the health status of this object.
IsEmbedded
Gets whether or not the Reference Component refers to an embedded document or a linked
document.
LinkedToFile Gets whether or not the Reference Component is still connected to the source file.
Name Gets the name of this Reference Component within the scope of this Document.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Parent Gets the parent object from whom this object can logically be reached.
ReferencedDocumentDescriptor Gets the the descriptor of the document that was used to create this Reference Component.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported
component with the file from which it was created.
Type Gets the constant that indicates the type of this object.
Version
Introduced in version 2016
ImportedComponentProxy.Application Property
Parent Object: ImportedComponentProxy
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedComponentProxy.Application() As Object
ImportedComponentProxy Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedComponentProxy.AttributeSets Property
Parent Object: ImportedComponentProxy
Description
Gets the Attribute Sets collection on this object.
Syntax
ImportedComponentProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2016
ImportedComponentProxy.BreakLinkToFile Method
Parent Object: ImportedComponentProxy
Description
Breaks the connection of the Reference Component with the file from which it was created.
Syntax
ImportedComponentProxy.BreakLinkToFile()
Version
Introduced in version 2016
ImportedComponentProxy.ContainingOccurrence
Property
Parent Object: ImportedComponentProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is
the containing occurrence.
ImportedComponentProxy Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Syntax
ImportedComponentProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2016
ImportedComponentProxy.Definition Property
Parent Object: ImportedComponentProxy
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to
create the imported component.
Syntax
ImportedComponentProxy.Definition() As ImportedComponentDefinition
Property Value
This is a read only property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedComponentProxy.Delete Method
Parent Object: ImportedComponentProxy
Description
Deletes the Reference Component.
Syntax
ImportedComponentProxy.Delete()
Version
Introduced in version 2016
ImportedComponentProxy.GetReferenceKey Method
Parent Object: ImportedComponentProxy
ImportedComponentProxy Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Description
Generate the sequence of bytes, called this object's reference key, which can be held onto beyond document edits and which
will allow the caller to be bound back to the live object.
Syntax
ImportedComponentProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte
KeyContext Long
This is an optional argument whose default value is 0.
Version
Introduced in version 2016
ImportedComponentProxy.HealthStatus Property
Parent Object: ImportedComponentProxy
Description
Gets the health status of this object.
Syntax
ImportedComponentProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedComponentProxy.IsEmbedded Property
Parent Object: ImportedComponentProxy
Description
Gets whether or not the Reference Component refers to an embedded document or a linked document.
Syntax
ImportedComponentProxy.IsEmbedded() As Boolean
ImportedComponentProxy Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponentProxy.LinkedToFile Property
Parent Object: ImportedComponentProxy
Description
Gets whether or not the Reference Component is still connected to the source file.
Syntax
ImportedComponentProxy.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponentProxy.Name Property
Parent Object: ImportedComponentProxy
Description
Gets the name of this Reference Component within the scope of this Document.
Syntax
ImportedComponentProxy.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedComponentProxy.NativeObject Property
Parent Object: ImportedComponentProxy
ImportedComponentProxy Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
ImportedComponentProxy.NativeObject() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Version
Introduced in version 2016
ImportedComponentProxy.Parent Property
Parent Object: ImportedComponentProxy
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedComponentProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedComponentProxy.ReferencedDocumentDescriptor
Property
Parent Object: ImportedComponentProxy
Description
Gets the the descriptor of the document that was used to create this Reference Component.
Syntax
ImportedComponentProxy.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
ImportedComponentProxy Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Version
Introduced in version 2016
ImportedComponentProxy.SetEndOfPart Method
Parent Object: ImportedComponentProxy
Description
Method that repositions the end of part marker relative to the object.
Syntax
ImportedComponentProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Version
Introduced in version 2016
ImportedComponentProxy.SuppressLinkToFile Property
Parent Object: ImportedComponentProxy
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which
it was created.
Syntax
ImportedComponentProxy.SuppressLinkToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedComponentProxy.Type Property
Parent Object: ImportedComponentProxy
Description
Gets the constant that indicates the type of this object.
ImportedComponentProxy Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
Syntax
ImportedComponentProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedComponentProxy Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA86A.htm 16/06/2025
ImportedComponents Object
Description
ImportedComponents Object.
Methods
Name Description
Add
Method that creates a new ImportedComponent object using the information
supplied by the input ImportedComponentDefinition object. Returns the imported
component.
CreateDataExchangeDefinition
Method that creates a new ImportedComponentDefinition object. Suitable for
online import like FDX.
CreateDefinition
Method that creates a new ImportedComponentDefinition object. The returned
definition provides access to all of the items in the file that can be imported.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Count Gets the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Parent Gets the parent object from whom this object can logically be reached.
Type Gets the constant that indicates the type of this object.
Accessed From
AssemblyComponentDefinition.ImportedComponents, ReferenceComponents.ImportedComponents,
WeldmentComponentDefinition.ImportedComponents
Samples
Name Description
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into
Inventor part document, and project the DWG entities onto Inventor planar
sketch.
Version
Introduced in version 2016
ImportedComponents.Add Method
Parent Object: ImportedComponents
ImportedComponents Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC48D.htm 16/06/2025
Description
Method that creates a new ImportedComponent object using the information supplied by the input
ImportedComponentDefinition object. Returns the imported component.
Syntax
ImportedComponents.Add( Definition As ImportedComponentDefinition ) As ImportedComponent
Parameters
Name Type Description
Definition ImportedComponentDefinition
Input ImportedComponentDefinition object that defines the imported
component.
Samples
Name Description
Associatively import
AutoCAD
This sample demonstrates how to import AutoCAD associatively.
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into
Inventor part document, and project the DWG entities onto Inventor planar
sketch.
Import Revit data into
Inventor
The samples demonstrate how to import Revit data(.rvt) into Inventor part and
assembly documents.
Version
Introduced in version 2016
ImportedComponents.Application Property
Parent Object: ImportedComponents
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for)
'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedComponents.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedComponents Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC48D.htm 16/06/2025
ImportedComponents.Count Property
Parent Object: ImportedComponents
Description
Gets the number of items in this collection.
Syntax
ImportedComponents.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2016
ImportedComponents.CreateDataExchangeDefinition
Method
Parent Object: ImportedComponents
Description
Method that creates a new ImportedComponentDefinition object. Suitable for online import like FDX.
Syntax
ImportedComponents.CreateDataExchangeDefinition( exchangeUrn As String, [Options] As Variant ) As
ImportedComponentDefinition
Parameters
Name Type Description
exchangeUrn String Input string that specifies the Data Exchange urn.
Options Variant
Optional input NameValueMap that specifies additional options. This is ignored at present.
This is an optional argument whose default value is null.
Version
Introduced in version 2023
ImportedComponents.CreateDefinition Method
ImportedComponents Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC48D.htm 16/06/2025
Parent Object: ImportedComponents
Description
Method that creates a new ImportedComponentDefinition object. The returned definition provides access to all of
the items in the file that can be imported.
Syntax
ImportedComponents.CreateDefinition( FullFileName As String ) As ImportedComponentDefinition
Parameters
Name Type Description
FullFileName String Input string that specifies the full filename of a CAD file.
Samples
Name Description
Associatively import
AutoCAD
This sample demonstrates how to import AutoCAD associatively.
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into
Inventor part document, and project the DWG entities onto Inventor planar
sketch.
Import Revit data into
Inventor
The samples demonstrate how to import Revit data(.rvt) into Inventor part and
assembly documents.
Version
Introduced in version 2016
ImportedComponents.Item Property
Parent Object: ImportedComponents
Description
Allows integer-indexed access to items in the collection.
Syntax
ImportedComponents.Item( Index As Variant ) As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Parameters
Name Type Description
Index Variant
ImportedComponents Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC48D.htm 16/06/2025
Input Variant value that specifies the ImportedComponent to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string indicating the imported
component’s name. If an out of range index or a name of a non-existent ImportedComponent is
provided, an error occurs.
Version
Introduced in version 2016
ImportedComponents.Parent Property
Parent Object: ImportedComponents
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedComponents.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedComponents.Type Property
Parent Object: ImportedComponents
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedComponents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedComponents Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC48D.htm 16/06/2025
ImportedDataExchangeComponent Object
Derived from: ImportedComponent Object
Description
ImportedDataExchangeComponent Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the
link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Update Updates the component from the exchange if there is update available.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that
were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded Property that returns whether the reference component refers to an embedded document or a linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly document. If
True, the link still exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Name Property that returns the component's name.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported component with the
file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Urn Read-only property that returns the DataExchange urn.
Accessed From
ImportedDataExchangeComponentProxy.NativeObject
Derived Classes
ImportedDataExchangeComponentProxy
Version
Introduced in version 2023
ImportedDataExchangeComponent.Application Property
Parent Object: ImportedDataExchangeComponent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedDataExchangeComponent.Application() As Object
ImportedDataExchangeComponent Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2023
ImportedDataExchangeComponent.AttributeSets Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedDataExchangeComponent.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2023
ImportedDataExchangeComponent.BreakLinkToFile Method
Parent Object: ImportedDataExchangeComponent
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is broken the
ReferencedFile property will return Nothing.
Syntax
ImportedDataExchangeComponent.BreakLinkToFile()
Version
Introduced in version 2023
ImportedDataExchangeComponent.Definition Property
Parent Object: ImportedDataExchangeComponent
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create the imported
component.
Syntax
ImportedDataExchangeComponent.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
ImportedDataExchangeComponent Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Version
Introduced in version 2023
ImportedDataExchangeComponent.Delete Method
Parent Object: ImportedDataExchangeComponent
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedDataExchangeComponent.Delete()
Version
Introduced in version 2023
ImportedDataExchangeComponent.GetReferenceKey Method
Parent Object: ImportedDataExchangeComponent
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedDataExchangeComponent.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities (and
SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the CreateKeyContext
method of the ReferenceKeyManager object. For all other object types, the key context argument is not used and is ignored
if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2023
ImportedDataExchangeComponent.HealthStatus Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedDataExchangeComponent.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
ImportedDataExchangeComponent Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Version
Introduced in version 2023
ImportedDataExchangeComponent.IsEmbedded Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedDataExchangeComponent.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponent.LinkedToFile Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still exists. If False, the
link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedDataExchangeComponent.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponent.Name Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns the component's name.
Syntax
ImportedDataExchangeComponent.Name() As String
Property Value
This is a read only property whose value is a String.
ImportedDataExchangeComponent Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Version
Introduced in version 2023
ImportedDataExchangeComponent.Parent Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns the parent object.
Syntax
ImportedDataExchangeComponent.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2023
ImportedDataExchangeComponent.ReferencedDocumentDescriptor
Property
Parent Object: ImportedDataExchangeComponent
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedDataExchangeComponent.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2023
ImportedDataExchangeComponent.SetEndOfPart Method
Parent Object: ImportedDataExchangeComponent
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedDataExchangeComponent.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
ImportedDataExchangeComponent Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Input Boolean that indicates if the end of part marker should be immediately before or after this reference component. A value of
True indicates before and False indicates after.
Version
Introduced in version 2023
ImportedDataExchangeComponent.SuppressLinkToFile Property
Parent Object: ImportedDataExchangeComponent
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it was created.
Syntax
ImportedDataExchangeComponent.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponent.Type Property
Parent Object: ImportedDataExchangeComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedDataExchangeComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2023
ImportedDataExchangeComponent.Update Method
Parent Object: ImportedDataExchangeComponent
Description
Updates the component from the exchange if there is update available.
Syntax
ImportedDataExchangeComponent.Update( [Options] As Variant )
Parameters
Name Type Description
ImportedDataExchangeComponent Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
Options Variant Optional input NameValueMap that specifies additional options. This is ignored at present.
This is an optional argument whose default value is null.
Version
Introduced in version 2023
ImportedDataExchangeComponent.Urn Property
Parent Object: ImportedDataExchangeComponent
Description
Read-only property that returns the DataExchange urn.
Syntax
ImportedDataExchangeComponent.Urn() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
ImportedDataExchangeComponent Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCF7.htm 16/06/2025
ImportedDataExchangeComponentDefinition Object
Description
ImportedDataExchangeComponentDefinition Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for)
'Application' when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice
Server.
FullFileName Read-only property that returns the full filename of the source file.
Parent Gets the parent object from whom this object can logically be reached.
Type Gets the constant that indicates the type of this object.
Version
Introduced in version 2023
ImportedDataExchangeComponentDefinition.Application
Property
Parent Object: ImportedDataExchangeComponentDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedDataExchangeComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2023
ImportedDataExchangeComponentDefinition.FullFileName
Property
Parent Object: ImportedDataExchangeComponentDefinition
Description
Read-only property that returns the full filename of the source file.
ImportedDataExchangeComponentDefinition Object Page 1 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFC08.htm 16/06/2025
Syntax
ImportedDataExchangeComponentDefinition.FullFileName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
ImportedDataExchangeComponentDefinition.Parent
Property
Parent Object: ImportedDataExchangeComponentDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedDataExchangeComponentDefinition.Parent() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Version
Introduced in version 2023
ImportedDataExchangeComponentDefinition.Type
Property
Parent Object: ImportedDataExchangeComponentDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedDataExchangeComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2023
ImportedDataExchangeComponentDefinition Object Page 2 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFC08.htm 16/06/2025
ImportedDataExchangeComponentProxy Object
Derived from: ImportedDataExchangeComponent Object
Description
ImportedDataExchangeComponentProxy Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is broken
the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Update Updates the component from the exchange if there is update available.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence Get the component occurrence context through which the native object is being seen through.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to
create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded Property that returns whether the reference component refers to an embedded document or a linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link
still exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Name Property that returns the component's name.
NativeObject Get the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from
which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Urn Read-only property that returns the DataExchange urn.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Application Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of Apprentice,
an ApprenticeServer object is returned.
Syntax
ImportedDataExchangeComponentProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.AttributeSets Property
ImportedDataExchangeComponentProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedDataExchangeComponentProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.BreakLinkToFile Method
Parent Object: ImportedDataExchangeComponentProxy
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is broken the ReferencedFile
property will return Nothing.
Syntax
ImportedDataExchangeComponentProxy.BreakLinkToFile()
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.ContainingOccurrence
Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Get the component occurrence context through which the native object is being seen through.
Syntax
ImportedDataExchangeComponentProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Definition Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create the imported component.
Syntax
ImportedDataExchangeComponentProxy.Definition() As ImportedComponentDefinition
ImportedDataExchangeComponentProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Delete Method
Parent Object: ImportedDataExchangeComponentProxy
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedDataExchangeComponentProxy.Delete()
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.GetReferenceKey Method
Parent Object: ImportedDataExchangeComponentProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedDataExchangeComponentProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities (and SurfaceBody,
FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the CreateKeyContext method of the
ReferenceKeyManager object. For all other object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.HealthStatus Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedDataExchangeComponentProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
ImportedDataExchangeComponentProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.IsEmbedded Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedDataExchangeComponentProxy.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.LinkedToFile Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still exists. If False, the link has
been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedDataExchangeComponentProxy.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Name Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns the component's name.
Syntax
ImportedDataExchangeComponentProxy.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
ImportedDataExchangeComponentProxy.NativeObject Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Get the object in the context of the definition instead of the containing assembly.
Syntax
ImportedDataExchangeComponentProxy.NativeObject() As ImportedDataExchangeComponent
Property Value
This is a read only property whose value is an ImportedDataExchangeComponent.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Parent Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns the parent object.
Syntax
ImportedDataExchangeComponentProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.ReferencedDocumentDescriptor
Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedDataExchangeComponentProxy.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.SetEndOfPart Method
Parent Object: ImportedDataExchangeComponentProxy
ImportedDataExchangeComponentProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedDataExchangeComponentProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference component. A value of True
indicates before and False indicates after.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.SuppressLinkToFile Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it was created.
Syntax
ImportedDataExchangeComponentProxy.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Type Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedDataExchangeComponentProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Update Method
Parent Object: ImportedDataExchangeComponentProxy
Description
Updates the component from the exchange if there is update available.
ImportedDataExchangeComponentProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
Syntax
ImportedDataExchangeComponentProxy.Update( [Options] As Variant )
Parameters
Name Type Description
Options Variant
Optional input NameValueMap that specifies additional options. This is ignored at present.
This is an optional argument whose default value is null.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy.Urn Property
Parent Object: ImportedDataExchangeComponentProxy
Description
Read-only property that returns the DataExchange urn.
Syntax
ImportedDataExchangeComponentProxy.Urn() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
ImportedDataExchangeComponentProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1712.htm 16/06/2025
ImportedDWGComponent Object
Derived from: ImportedComponent Object
Description
ImportedDWGComponent Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was
created. When the link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Crop
Read-write property that gets and sets the crop in LocationPlane space. Set this to Nothing
will clear the crop.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the
various inputs that were used to create the imported component.
Grounded Read-write property that gets and sets whether the object is grounded or not.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded document or a
linked document.
Layers Read-only property that returns the ImportedDWGLayersEnumerator collection object.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or
assembly document. If True, the link still exists. If False, the link has been broken and the
ReferencedFile property will return Nothing.
ModelSpaceDefinition Read-only property that returns the DWGModelSpaceDefinition object.
Name Property that returns the component's name.
Origin Read-only property that returns the work point that represents the origin for the component.
Parent Property that returns the parent object.
RangeBox Read-only property that returns the bounding box of the DWG graphics.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported
component with the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Read-write property that gets and sets whether this object is visible or not.
XAxis Read-only property that returns the work axis that represents the x-axis for the component.
XYPlane
Read-only property that returns the work plane that represents the X-Y plane for the
component.
XZPlane
Read-only property that returns the work plane that represents the X-Z plane for the
component.
YAxis Read-only property that returns the work axis that represents the y-axis for the component.
YZPlane
Read-only property that returns the work plane that represents the Y-Z plane for the
component.
ZAxis Read-only property that returns the work axis that represents the z-axis for the component.
ImportedDWGComponent Object Page 1 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Accessed From
DWGAcadSupportedProxy.Parent, DWGAcadSupportedProxyProxy.Parent, DWGACMStandardPart.Parent,
DWGACMStandardPartProxy.Parent, DWGArc.Parent, DWGArcProxy.Parent, DWGBlockDefinition.Parent,
DWGBlockDefinitionProxy.Parent, DWGBlockReference.Parent, DWGBlockReferenceProxy.Parent,
DWGEllipticalArc.Parent, DWGEllipticalArcProxy.Parent, DWGEntity.Parent, DWGEntityProxy.Parent,
DWGEntitySegmentProxy.Parent, DWGLine.Parent, DWGLineProxy.Parent, DWGPoint.Parent, DWGPointProxy.Parent,
DWGPolyline.Parent, DWGPolyline2D.Parent, DWGPolyline2DProxy.Parent, DWGPolyline3D.Parent,
DWGPolyline3DProxy.Parent, DWGPolylineProxy.Parent, DWGSpline.Parent, DWGSplineProxy.Parent,
DWGUnderlays.Add, DWGUnderlays.Item, ImportedDWGComponentProxy.NativeObject
Derived Classes
ImportedDWGComponentProxy
Samples
Name Description
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into Inventor part
document, and project the DWG entities onto Inventor planar sketch.
Version
Introduced in version 2016
ImportedDWGComponent.Application Property
Parent Object: ImportedDWGComponent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedDWGComponent.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedDWGComponent.AttributeSets Property
Parent Object: ImportedDWGComponent
Description
Property that returns the AttributeSets collection object associated with this object.
ImportedDWGComponent Object Page 2 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Syntax
ImportedDWGComponent.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2016
ImportedDWGComponent.BreakLinkToFile Method
Parent Object: ImportedDWGComponent
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the
link is broken the ReferencedFile property will return Nothing.
Syntax
ImportedDWGComponent.BreakLinkToFile()
Version
Introduced in version 2016
ImportedDWGComponent.Crop Property
Parent Object: ImportedDWGComponent
Description
Read-write property that gets and sets the crop in LocationPlane space. Set this to Nothing will clear the crop.
Syntax
ImportedDWGComponent.Crop() As Box2d
Property Value
This is a read/write property whose value is a Box2d.
Version
Introduced in version 2017
ImportedDWGComponent.Definition Property
Parent Object: ImportedDWGComponent
ImportedDWGComponent Object Page 3 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to
create the imported component.
Syntax
ImportedDWGComponent.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedDWGComponent.Delete Method
Parent Object: ImportedDWGComponent
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedDWGComponent.Delete()
Version
Introduced in version 2016
ImportedDWGComponent.GetReferenceKey Method
Parent Object: ImportedDWGComponent
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedDWGComponent.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is
created using the CreateKeyContext method of the ReferenceKeyManager object. For all other object
types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
ImportedDWGComponent Object Page 4 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Version
Introduced in version 2016
ImportedDWGComponent.Grounded Property
Parent Object: ImportedDWGComponent
Description
Read-write property that gets and sets whether the object is grounded or not.
Syntax
ImportedDWGComponent.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
ImportedDWGComponent.HealthStatus Property
Parent Object: ImportedDWGComponent
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedDWGComponent.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedDWGComponent.IsEmbedded Property
Parent Object: ImportedDWGComponent
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
ImportedDWGComponent Object Page 5 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Syntax
ImportedDWGComponent.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponent.Layers Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the ImportedDWGLayersEnumerator collection object.
Syntax
ImportedDWGComponent.Layers() As ImportedDWGLayersEnumerator
Property Value
This is a read only property whose value is an ImportedDWGLayersEnumerator.
Version
Introduced in version 2017
ImportedDWGComponent.LinkedToFile Property
Parent Object: ImportedDWGComponent
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still
exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedDWGComponent.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponent Object Page 6 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
ImportedDWGComponent.ModelSpaceDefinition Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the DWGModelSpaceDefinition object.
Syntax
ImportedDWGComponent.ModelSpaceDefinition() As DWGBlockDefinition
Property Value
This is a read only property whose value is a DWGBlockDefinition.
Samples
Name Description
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into Inventor part
document, and project the DWG entities onto Inventor planar sketch.
Version
Introduced in version 2016
ImportedDWGComponent.Name Property
Parent Object: ImportedDWGComponent
Description
Property that returns the component's name.
Syntax
ImportedDWGComponent.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedDWGComponent.Origin Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work point that represents the origin for the component.
ImportedDWGComponent Object Page 7 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Syntax
ImportedDWGComponent.Origin() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent.Parent Property
Parent Object: ImportedDWGComponent
Description
Property that returns the parent object.
Syntax
ImportedDWGComponent.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedDWGComponent.RangeBox Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the bounding box of the DWG graphics.
Syntax
ImportedDWGComponent.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2018
ImportedDWGComponent Object Page 8 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
ImportedDWGComponent.ReferencedDocumentDescriptor
Property
Parent Object: ImportedDWGComponent
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedDWGComponent.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2016
ImportedDWGComponent.SetEndOfPart Method
Parent Object: ImportedDWGComponent
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedDWGComponent.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference
component. A value of True indicates before and False indicates after.
Version
Introduced in version 2016
ImportedDWGComponent.SuppressLinkToFile Property
Parent Object: ImportedDWGComponent
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which
it was created.
ImportedDWGComponent Object Page 9 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Syntax
ImportedDWGComponent.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponent.Type Property
Parent Object: ImportedDWGComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedDWGComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedDWGComponent.Visible Property
Parent Object: ImportedDWGComponent
Description
Read-write property that gets and sets whether this object is visible or not.
Syntax
ImportedDWGComponent.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
ImportedDWGComponent Object Page 10 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
ImportedDWGComponent.XAxis Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work axis that represents the x-axis for the component.
Syntax
ImportedDWGComponent.XAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent.XYPlane Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work plane that represents the X-Y plane for the component.
Syntax
ImportedDWGComponent.XYPlane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent.XZPlane Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work plane that represents the X-Z plane for the component.
Syntax
ImportedDWGComponent.XZPlane() As Object
Property Value
This is a read only property whose value is an Object.
ImportedDWGComponent Object Page 11 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Version
Introduced in version 2018
ImportedDWGComponent.YAxis Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work axis that represents the y-axis for the component.
Syntax
ImportedDWGComponent.YAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent.YZPlane Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work plane that represents the Y-Z plane for the component.
Syntax
ImportedDWGComponent.YZPlane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent.ZAxis Property
Parent Object: ImportedDWGComponent
Description
Read-only property that returns the work axis that represents the z-axis for the component.
ImportedDWGComponent Object Page 12 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
Syntax
ImportedDWGComponent.ZAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponent Object Page 13 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hh371D.htm 16/06/2025
ImportedDWGComponentDefinition Object
Derived from: ImportedComponentDefinition Object
Description
ImportedDWGComponentDefinition Collection Object.
Methods
Name Description
Copy Method that creates a copy of this ImportedDWGComponentDefinition object.
SetLocation Method that sets the plane and origin to define the location of the imported DWG component.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application'
when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
DWGReferenceOrigin Read-write property that gets and sets the reference origin for the imported DWG component.
DWGReferenceOriginInLocationPlane Read-write property that gets and sets the position of the imported DWG component origin.
DWGRotationInLocationPlane
Read-write property that gets and sets the absolute rotation angle of the imported DWG component in LocationPlane
space.
FullFileName Read-only property that returns the full filename of the source file.
ImportDWGBodyStyle Read-write property determines how solid and surface bodies are handled on import.
LocationOrigin Read-write property that gets and sets the object indicating the position for the origin of the imported DWG component.
LocationPlane Read-write property that gets and sets the location plane for the imported DWG component.
Parent Gets the parent object from whom this object can logically be reached.
Transformation Read-write property that gets and sets the translation and rotation of the imported DWG in part space.
Type Gets the constant that indicates the type of this object.
Accessed From
ImportedDWGComponentDefinition.Copy
Samples
Name Description
Associatively import AutoCAD This sample demonstrates how to import AutoCAD associatively.
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into Inventor part document, and project the DWG
entities onto Inventor planar sketch.
Version
Introduced in version 2016
ImportedDWGComponentDefinition.Application Property
Parent Object: ImportedDWGComponentDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedDWGComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedDWGComponentDefinition.Copy Method
ImportedDWGComponentDefinition Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56EA.htm 16/06/2025
Parent Object: ImportedDWGComponentDefinition
Description
Method that creates a copy of this ImportedDWGComponentDefinition object.
Syntax
ImportedDWGComponentDefinition.Copy() As ImportedDWGComponentDefinition
Version
Introduced in version 2016
ImportedDWGComponentDefinition.DWGReferenceOrigin Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the reference origin for the imported DWG component.
Syntax
ImportedDWGComponentDefinition.DWGReferenceOrigin() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2017
ImportedDWGComponentDefinition.DWGReferenceOriginInLocationPlane
Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the position of the imported DWG component origin.
Syntax
ImportedDWGComponentDefinition.DWGReferenceOriginInLocationPlane() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2017
ImportedDWGComponentDefinition.DWGRotationInLocationPlane
Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the absolute rotation angle of the imported DWG component in LocationPlane space.
Syntax
ImportedDWGComponentDefinition.DWGRotationInLocationPlane() As Variant
ImportedDWGComponentDefinition Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56EA.htm 16/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2017
ImportedDWGComponentDefinition.FullFileName Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-only property that returns the full filename of the source file.
Syntax
ImportedDWGComponentDefinition.FullFileName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedDWGComponentDefinition.ImportDWGBodyStyle Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property determines how solid and surface bodies are handled on import.
Syntax
ImportedDWGComponentDefinition.ImportDWGBodyStyle() As ImportDWGBodyStyleEnum
Property Value
This is a read/write property whose value is an ImportDWGBodyStyleEnum.
Version
Introduced in version 2018
ImportedDWGComponentDefinition.LocationOrigin Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the object indicating the position for the origin of the imported DWG component.
Syntax
ImportedDWGComponentDefinition.LocationOrigin() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2017
ImportedDWGComponentDefinition Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56EA.htm 16/06/2025
ImportedDWGComponentDefinition.LocationPlane Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the location plane for the imported DWG component.
Syntax
ImportedDWGComponentDefinition.LocationPlane() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2017
ImportedDWGComponentDefinition.Parent Property
Parent Object: ImportedDWGComponentDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedDWGComponentDefinition.Parent() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
Version
Introduced in version 2016
ImportedDWGComponentDefinition.SetLocation Method
Parent Object: ImportedDWGComponentDefinition
Description
Method that sets the plane and origin to define the location of the imported DWG component.
Syntax
ImportedDWGComponentDefinition.SetLocation( LocationPlane As Object, LocationOrigin As Object )
Parameters
Name Type Description
LocationPlane Object
LocationOrigin Object
Version
Introduced in version 2017
ImportedDWGComponentDefinition.Transformation Property
Parent Object: ImportedDWGComponentDefinition
Description
Read-write property that gets and sets the translation and rotation of the imported DWG in part space.
ImportedDWGComponentDefinition Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56EA.htm 16/06/2025
Syntax
ImportedDWGComponentDefinition.Transformation() As Matrix
Property Value
This is a read/write property whose value is a Matrix.
Samples
Name Description
ImportedDWGComponent
Creation
This sample demonstrates how to create an imported DWG component into Inventor part document, and project the DWG
entities onto Inventor planar sketch.
Version
Introduced in version 2018
ImportedDWGComponentDefinition.Type Property
Parent Object: ImportedDWGComponentDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedDWGComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedDWGComponentDefinition Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56EA.htm 16/06/2025
ImportedDWGComponentProxy Object
Derived from: ImportedDWGComponent Object
Description
ImportedDWGComponentProxy Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was created. When
the link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
Crop
Read-write property that gets and sets the crop in LocationPlane space. Set this to Nothing will clear the
crop.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs
that were used to create the imported component.
Grounded Read-write property that gets and sets whether the object is grounded or not.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded document or a linked
document.
Layers Read-only property that returns the ImportedDWGLayersEnumerator collection object.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly document.
If True, the link still exists. If False, the link has been broken and the ReferencedFile property will return
Nothing.
ModelSpaceDefinition Read-only property that returns the DWGModelSpaceDefinition object.
Name Property that returns the component's name.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
Origin Read-only property that returns the work point that represents the origin for the component.
Parent Property that returns the parent object.
RangeBox Read-only property that returns the bounding box of the DWG graphics.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported component with
the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Read-write property that gets and sets whether this object is visible or not.
XAxis Read-only property that returns the work axis that represents the x-axis for the component.
XYPlane Read-only property that returns the work plane that represents the X-Y plane for the component.
XZPlane Read-only property that returns the work plane that represents the X-Z plane for the component.
YAxis Read-only property that returns the work axis that represents the y-axis for the component.
YZPlane Read-only property that returns the work plane that represents the Y-Z plane for the component.
ZAxis Read-only property that returns the work axis that represents the z-axis for the component.
Version
Introduced in version 2016
ImportedDWGComponentProxy Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
ImportedDWGComponentProxy.Application Property
Parent Object: ImportedDWGComponentProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedDWGComponentProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedDWGComponentProxy.AttributeSets Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedDWGComponentProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2016
ImportedDWGComponentProxy.BreakLinkToFile Method
Parent Object: ImportedDWGComponentProxy
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is broken
the ReferencedFile property will return Nothing.
Syntax
ImportedDWGComponentProxy.BreakLinkToFile()
Version
Introduced in version 2016
ImportedDWGComponentProxy Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
ImportedDWGComponentProxy.ContainingOccurrence
Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is the
containing occurrence.
Syntax
ImportedDWGComponentProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Crop Property
Parent Object: ImportedDWGComponentProxy
Description
Read-write property that gets and sets the crop in LocationPlane space. Set this to Nothing will clear the crop.
Syntax
ImportedDWGComponentProxy.Crop() As Box2d
Property Value
This is a read/write property whose value is a Box2d.
Version
Introduced in version 2017
ImportedDWGComponentProxy.Definition Property
Parent Object: ImportedDWGComponentProxy
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create the
imported component.
Syntax
ImportedDWGComponentProxy.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
ImportedDWGComponentProxy Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Version
Introduced in version 2016
ImportedDWGComponentProxy.Delete Method
Parent Object: ImportedDWGComponentProxy
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedDWGComponentProxy.Delete()
Version
Introduced in version 2016
ImportedDWGComponentProxy.GetReferenceKey Method
Parent Object: ImportedDWGComponentProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedDWGComponentProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2016
ImportedDWGComponentProxy.Grounded Property
Parent Object: ImportedDWGComponentProxy
Description
Read-write property that gets and sets whether the object is grounded or not.
Syntax
ImportedDWGComponentProxy.Grounded() As Boolean
ImportedDWGComponentProxy Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2018
ImportedDWGComponentProxy.HealthStatus Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedDWGComponentProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedDWGComponentProxy.IsEmbedded Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedDWGComponentProxy.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Layers Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the ImportedDWGLayersEnumerator collection object.
Syntax
ImportedDWGComponentProxy.Layers() As ImportedDWGLayersEnumerator
ImportedDWGComponentProxy Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Property Value
This is a read only property whose value is an ImportedDWGLayersEnumerator.
Version
Introduced in version 2017
ImportedDWGComponentProxy.LinkedToFile Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still exists. If
False, the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedDWGComponentProxy.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponentProxy.ModelSpaceDefinition Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the DWGModelSpaceDefinition object.
Syntax
ImportedDWGComponentProxy.ModelSpaceDefinition() As DWGBlockDefinition
Property Value
This is a read only property whose value is a DWGBlockDefinition.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Name Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns the component's name.
Syntax
ImportedDWGComponentProxy.Name() As String
ImportedDWGComponentProxy Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedDWGComponentProxy.NativeObject Property
Parent Object: ImportedDWGComponentProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
ImportedDWGComponentProxy.NativeObject() As ImportedDWGComponent
Property Value
This is a read only property whose value is an ImportedDWGComponent.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Origin Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the work point that represents the origin for the component.
Syntax
ImportedDWGComponentProxy.Origin() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.Parent Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns the parent object.
Syntax
ImportedDWGComponentProxy.Parent() As ComponentDefinition
ImportedDWGComponentProxy Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedDWGComponentProxy.RangeBox Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the bounding box of the DWG graphics.
Syntax
ImportedDWGComponentProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2018
ImportedDWGComponentProxy.ReferencedDocumentDescriptor
Property
Parent Object: ImportedDWGComponentProxy
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedDWGComponentProxy.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2016
ImportedDWGComponentProxy.SetEndOfPart Method
Parent Object: ImportedDWGComponentProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
ImportedDWGComponentProxy Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Syntax
ImportedDWGComponentProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference component. A
value of True indicates before and False indicates after.
Version
Introduced in version 2016
ImportedDWGComponentProxy.SuppressLinkToFile Property
Parent Object: ImportedDWGComponentProxy
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it was
created.
Syntax
ImportedDWGComponentProxy.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Type Property
Parent Object: ImportedDWGComponentProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedDWGComponentProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedDWGComponentProxy.Visible Property
Parent Object: ImportedDWGComponentProxy
ImportedDWGComponentProxy Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Description
Read-write property that gets and sets whether this object is visible or not.
Syntax
ImportedDWGComponentProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
ImportedDWGComponentProxy.XAxis Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the work axis that represents the x-axis for the component.
Syntax
ImportedDWGComponentProxy.XAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.XYPlane Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the work plane that represents the X-Y plane for the component.
Syntax
ImportedDWGComponentProxy.XYPlane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.XZPlane Property
Parent Object: ImportedDWGComponentProxy
ImportedDWGComponentProxy Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Description
Read-only property that returns the work plane that represents the X-Z plane for the component.
Syntax
ImportedDWGComponentProxy.XZPlane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.YAxis Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the work axis that represents the y-axis for the component.
Syntax
ImportedDWGComponentProxy.YAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.YZPlane Property
Parent Object: ImportedDWGComponentProxy
Description
Read-only property that returns the work plane that represents the Y-Z plane for the component.
Syntax
ImportedDWGComponentProxy.YZPlane() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy.ZAxis Property
Parent Object: ImportedDWGComponentProxy
ImportedDWGComponentProxy Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
Description
Read-only property that returns the work axis that represents the z-axis for the component.
Syntax
ImportedDWGComponentProxy.ZAxis() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2018
ImportedDWGComponentProxy Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh72FD.htm 16/06/2025
ImportedDWGLayer Object
Description
The ImportedDWGLayer object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Name Read-only property that returns the name of the imported DWG layer.
Type Gets the constant that indicates the type of this object.
Visible Read-write property that gets and sets the visibility of the imported DWG layer.
Accessed From
ImportedDWGLayersEnumerator.Item
Version
Introduced in version 2017
ImportedDWGLayer.Application Property
Parent Object: ImportedDWGLayer
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
ImportedDWGLayer.Application() As Object
Property Value
This is a read only property whose value is an Object.
ImportedDWGLayer Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9460.htm 16/06/2025
Version
Introduced in version 2017
ImportedDWGLayer.Name Property
Parent Object: ImportedDWGLayer
Description
Read-only property that returns the name of the imported DWG layer.
Syntax
ImportedDWGLayer.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2017
ImportedDWGLayer.Type Property
Parent Object: ImportedDWGLayer
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedDWGLayer.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
ImportedDWGLayer Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9460.htm 16/06/2025
Version
Introduced in version 2017
ImportedDWGLayer.Visible Property
Parent Object: ImportedDWGLayer
Description
Read-write property that gets and sets the visibility of the imported DWG layer.
Syntax
ImportedDWGLayer.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
ImportedDWGLayer Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9460.htm 16/06/2025
ImportedDWGLayersEnumerator Object
Description
The ImportedDWGLayersEnumerator collection object.
Properties
Name Description
Count Gets the number of items in this collection.
Item
Allows VARIANT-indexed access to items in the collection. You can use names as
indexes as well.
Type Gets the constant that indicates the type of this object.
Accessed From
ImportedDWGComponent.Layers, ImportedDWGComponentProxy.Layers
Version
Introduced in version 2017
ImportedDWGLayersEnumerator.Count
Property
Parent Object: ImportedDWGLayersEnumerator
Description
Gets the number of items in this collection.
Syntax
ImportedDWGLayersEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
ImportedDWGLayersEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB1EB.htm 16/06/2025
Version
Introduced in version 2017
ImportedDWGLayersEnumerator.Item
Property
Parent Object: ImportedDWGLayersEnumerator
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as
well.
Syntax
ImportedDWGLayersEnumerator.Item( Index As Variant ) As ImportedDWGLayer
Property Value
This is a read only property whose value is an ImportedDWGLayer.
Parameters
Name Type Description
Index Variant
Version
Introduced in version 2017
ImportedDWGLayersEnumerator.Type
Property
Parent Object: ImportedDWGLayersEnumerator
Description
Gets the constant that indicates the type of this object.
ImportedDWGLayersEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB1EB.htm 16/06/2025
Syntax
ImportedDWGLayersEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2017
ImportedDWGLayersEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB1EB.htm 16/06/2025
ImportedGenericComponent Object
Derived from: ImportedComponent Object
Description
ImportedGenericComponent Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was
created. When the link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the
various inputs that were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded
Property that returns whether the reference component refers to an embedded document or a
linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly
document. If True, the link still exists. If False, the link has been broken and the ReferencedFile
property will return Nothing.
Name Property that returns the component's name.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported
component with the file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ImportedGenericComponentProxy.NativeObject
Derived Classes
ImportedGenericComponentProxy
Version
Introduced in version 2016
ImportedGenericComponent.Application Property
Parent Object: ImportedGenericComponent
Description
ImportedGenericComponent Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedGenericComponent.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedGenericComponent.AttributeSets Property
Parent Object: ImportedGenericComponent
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedGenericComponent.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2016
ImportedGenericComponent.BreakLinkToFile Method
Parent Object: ImportedGenericComponent
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is
broken the ReferencedFile property will return Nothing.
Syntax
ImportedGenericComponent.BreakLinkToFile()
Version
Introduced in version 2016
ImportedGenericComponent.Definition Property
Parent Object: ImportedGenericComponent
ImportedGenericComponent Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create
the imported component.
Syntax
ImportedGenericComponent.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedGenericComponent.Delete Method
Parent Object: ImportedGenericComponent
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedGenericComponent.Delete()
Version
Introduced in version 2016
ImportedGenericComponent.GetReferenceKey Method
Parent Object: ImportedGenericComponent
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedGenericComponent.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep
entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created
using the CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key
context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
ImportedGenericComponent Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
Version
Introduced in version 2016
ImportedGenericComponent.HealthStatus Property
Parent Object: ImportedGenericComponent
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedGenericComponent.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedGenericComponent.IsEmbedded Property
Parent Object: ImportedGenericComponent
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedGenericComponent.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponent.LinkedToFile Property
Parent Object: ImportedGenericComponent
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still
exists. If False, the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedGenericComponent.LinkedToFile() As Boolean
ImportedGenericComponent Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponent.Name Property
Parent Object: ImportedGenericComponent
Description
Property that returns the component's name.
Syntax
ImportedGenericComponent.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedGenericComponent.Parent Property
Parent Object: ImportedGenericComponent
Description
Property that returns the parent object.
Syntax
ImportedGenericComponent.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedGenericComponent.ReferencedDocumentDescriptor
Property
Parent Object: ImportedGenericComponent
Description
ImportedGenericComponent Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
Property that returns the DocumentDescriptor object.
Syntax
ImportedGenericComponent.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2016
ImportedGenericComponent.SetEndOfPart Method
Parent Object: ImportedGenericComponent
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedGenericComponent.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference
component. A value of True indicates before and False indicates after.
Version
Introduced in version 2016
ImportedGenericComponent.SuppressLinkToFile Property
Parent Object: ImportedGenericComponent
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it
was created.
Syntax
ImportedGenericComponent.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponent Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
ImportedGenericComponent.Type Property
Parent Object: ImportedGenericComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedGenericComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponent Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD31F.htm 16/06/2025
ImportedGenericComponentDefinition Object
Description
ImportedGenericComponentDefinition Object.
Methods
Name Description
Copy Method that creates a copy of this ImportedGenericComponentDefinition object.
ExcludeAll Method that causes all model entities to be excluded.
IncludeAll Method that causes all model entities to be included.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application'
when running with Inventor whereas, 'ApprenticeServer' when running with the Apprentice Server.
FullFileName Read-only property that returns the full filename of the source file.
ImportedAssemblyOrganizationType Read-write property that gets and sets the imported assembly organization type.
ImportedModelEntities Read-only property that returns the ImportedModelEntities collection object.
ImportedModelGeometryTypes
Read-write property that gets and sets a bit mask defining the imported model geometry types. A combination of enum
values can be provided.
ImportedSurfaceOrganizationType Read-write property that gets and sets the imported surface organization type.
ImportedWorkGeometryTypes
Read-write property that gets and sets a bit mask defining the imported work geometry types. A combination of enum values
can be provided.
ImportUnitsType Read-write property that gets and sets the import units type.
Parent Gets the parent object from whom this object can logically be reached.
ReferenceModel Read-write property that gets and sets whether to import the component as linked reference.
SaveFileNamesPrefixOrSuffix Read-write property that gets and sets the prefix or suffix that being added to file names.
SaveFileNamesWithPrefix Read-write property that gets and sets whether to add string as prefix for file names.
SaveFilesLocation Read-write property that gets and sets the location for save files.
Type Gets the constant that indicates the type of this object.
Accessed From
ImportedGenericComponentDefinition.Copy
Version
Introduced in version 2016
ImportedGenericComponentDefinition.Application Property
Parent Object: ImportedGenericComponentDefinition
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to (QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Syntax
ImportedGenericComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.Copy Method
Parent Object: ImportedGenericComponentDefinition
Description
ImportedGenericComponentDefinition Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
Method that creates a copy of this ImportedGenericComponentDefinition object.
Syntax
ImportedGenericComponentDefinition.Copy() As ImportedGenericComponentDefinition
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ExcludeAll Method
Parent Object: ImportedGenericComponentDefinition
Description
Method that causes all model entities to be excluded.
Syntax
ImportedGenericComponentDefinition.ExcludeAll()
Version
Introduced in version 2016
ImportedGenericComponentDefinition.FullFileName Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-only property that returns the full filename of the source file.
Syntax
ImportedGenericComponentDefinition.FullFileName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ImportedAssemblyOrganizationType
Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets the imported assembly organization type.
Syntax
ImportedGenericComponentDefinition.ImportedAssemblyOrganizationType() As ImportedAssemblyOrganizationTypeEnum
Property Value
This is a read/write property whose value is an ImportedAssemblyOrganizationTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
ImportedGenericComponentDefinition.ImportedModelEntities Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-only property that returns the ImportedModelEntities collection object.
Syntax
ImportedGenericComponentDefinition.ImportedModelEntities() As ImportedModelEntities
Property Value
This is a read only property whose value is an ImportedModelEntities.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ImportedModelGeometryTypes
Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets a bit mask defining the imported model geometry types. A combination of enum values can be provided.
Syntax
ImportedGenericComponentDefinition.ImportedModelGeometryTypes() As ImportedModelGeometryTypeEnum
Property Value
This is a read/write property whose value is an ImportedModelGeometryTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ImportedSurfaceOrganizationType
Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets the imported surface organization type.
Syntax
ImportedGenericComponentDefinition.ImportedSurfaceOrganizationType() As ImportedSurfaceOrganizationTypeEnum
Property Value
This is a read/write property whose value is an ImportedSurfaceOrganizationTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ImportedWorkGeometryTypes
Property
Parent Object: ImportedGenericComponentDefinition
ImportedGenericComponentDefinition Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
Description
Read-write property that gets and sets a bit mask defining the imported work geometry types. A combination of enum values can be provided.
Syntax
ImportedGenericComponentDefinition.ImportedWorkGeometryTypes() As ImportedWorkGeometryTypeEnum
Property Value
This is a read/write property whose value is an ImportedWorkGeometryTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ImportUnitsType Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets the import units type.
Syntax
ImportedGenericComponentDefinition.ImportUnitsType() As ImportUnitsTypeEnum
Property Value
This is a read/write property whose value is an ImportUnitsTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.IncludeAll Method
Parent Object: ImportedGenericComponentDefinition
Description
Method that causes all model entities to be included.
Syntax
ImportedGenericComponentDefinition.IncludeAll()
Version
Introduced in version 2016
ImportedGenericComponentDefinition.Parent Property
Parent Object: ImportedGenericComponentDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ImportedGenericComponentDefinition.Parent() As ImportedComponent
Property Value
This is a read only property whose value is an ImportedComponent.
ImportedGenericComponentDefinition Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
Version
Introduced in version 2016
ImportedGenericComponentDefinition.ReferenceModel Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets whether to import the component as linked reference.
Syntax
ImportedGenericComponentDefinition.ReferenceModel() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.SaveFileNamesPrefixOrSuffix
Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets the prefix or suffix that being added to file names.
Syntax
ImportedGenericComponentDefinition.SaveFileNamesPrefixOrSuffix() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.SaveFileNamesWithPrefix Property
Parent Object: ImportedGenericComponentDefinition
Description
Read-write property that gets and sets whether to add string as prefix for file names.
Syntax
ImportedGenericComponentDefinition.SaveFileNamesWithPrefix() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.SaveFilesLocation Property
Parent Object: ImportedGenericComponentDefinition
ImportedGenericComponentDefinition Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
Description
Read-write property that gets and sets the location for save files.
Syntax
ImportedGenericComponentDefinition.SaveFilesLocation() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2016
ImportedGenericComponentDefinition.Type Property
Parent Object: ImportedGenericComponentDefinition
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedGenericComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentDefinition Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF61.htm 16/06/2025
ImportedGenericComponentProxy Object
Derived from: ImportedGenericComponent Object
Description
ImportedGenericComponentProxy Object.
Methods
Name Description
BreakLinkToFile
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the
link is broken the ReferencedFile property will return Nothing.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ContainingOccurrence Get the component occurrence context through which the native object is being seen through.
Definition
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs
that were used to create the imported component.
HealthStatus Property that returns an enum indicating the current state of the object.
IsEmbedded Property that returns whether the reference component refers to an embedded document or a linked document.
LinkedToFile
Property that returns whether the derived component is still linked to the base part or assembly document. If
True, the link still exists. If False, the link has been broken and the ReferencedFile property will return
Nothing.
Name Property that returns the component's name.
NativeObject Get the object in the context of the definition instead of the containing assembly.
Parent Property that returns the parent object.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
SuppressLinkToFile
Read-write property that gets and sets whether to suppress the connection of the imported component with the
file from which it was created.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2016
ImportedGenericComponentProxy.Application Property
Parent Object: ImportedGenericComponentProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
Syntax
ImportedGenericComponentProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
ImportedGenericComponentProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
Version
Introduced in version 2016
ImportedGenericComponentProxy.AttributeSets Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
ImportedGenericComponentProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2016
ImportedGenericComponentProxy.BreakLinkToFile Method
Parent Object: ImportedGenericComponentProxy
Description
Method that breaks the connection of the derived component with the part or assembly from which it was created. When the link is broken the
ReferencedFile property will return Nothing.
Syntax
ImportedGenericComponentProxy.BreakLinkToFile()
Version
Introduced in version 2016
ImportedGenericComponentProxy.ContainingOccurrence
Property
Parent Object: ImportedGenericComponentProxy
Description
Get the component occurrence context through which the native object is being seen through.
Syntax
ImportedGenericComponentProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
ImportedGenericComponentProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
Version
Introduced in version 2016
ImportedGenericComponentProxy.Definition Property
Parent Object: ImportedGenericComponentProxy
Description
Read-write property that gets and sets the ImportedComponentDefinition which defines the various inputs that were used to create the imported
component.
Syntax
ImportedGenericComponentProxy.Definition() As ImportedComponentDefinition
Property Value
This is a read/write property whose value is an ImportedComponentDefinition.
Version
Introduced in version 2016
ImportedGenericComponentProxy.Delete Method
Parent Object: ImportedGenericComponentProxy
Description
Method that deletes the ReferenceComponent.
Syntax
ImportedGenericComponentProxy.Delete()
Version
Introduced in version 2016
ImportedGenericComponentProxy.GetReferenceKey Method
Parent Object: ImportedGenericComponentProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
ImportedGenericComponentProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with any B-Rep entities (and
SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using the CreateKeyContext
method of the ReferenceKeyManager object. For all other object types, the key context argument is not used and is
ignored if provided.
ImportedGenericComponentProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 2016
ImportedGenericComponentProxy.HealthStatus Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
ImportedGenericComponentProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2016
ImportedGenericComponentProxy.IsEmbedded Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns whether the reference component refers to an embedded document or a linked document.
Syntax
ImportedGenericComponentProxy.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponentProxy.LinkedToFile Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns whether the derived component is still linked to the base part or assembly document. If True, the link still exists. If False,
the link has been broken and the ReferencedFile property will return Nothing.
Syntax
ImportedGenericComponentProxy.LinkedToFile() As Boolean
ImportedGenericComponentProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponentProxy.Name Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns the component's name.
Syntax
ImportedGenericComponentProxy.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2016
ImportedGenericComponentProxy.NativeObject Property
Parent Object: ImportedGenericComponentProxy
Description
Get the object in the context of the definition instead of the containing assembly.
Syntax
ImportedGenericComponentProxy.NativeObject() As ImportedGenericComponent
Property Value
This is a read only property whose value is an ImportedGenericComponent.
Version
Introduced in version 2016
ImportedGenericComponentProxy.Parent Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns the parent object.
Syntax
ImportedGenericComponentProxy.Parent() As ComponentDefinition
ImportedGenericComponentProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2016
ImportedGenericComponentProxy.ReferencedDocumentDescriptor
Property
Parent Object: ImportedGenericComponentProxy
Description
Property that returns the DocumentDescriptor object.
Syntax
ImportedGenericComponentProxy.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 2016
ImportedGenericComponentProxy.SetEndOfPart Method
Parent Object: ImportedGenericComponentProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
ImportedGenericComponentProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this reference component. A value
of True indicates before and False indicates after.
Version
Introduced in version 2016
ImportedGenericComponentProxy.SuppressLinkToFile Property
Parent Object: ImportedGenericComponentProxy
Description
Read-write property that gets and sets whether to suppress the connection of the imported component with the file from which it was created.
ImportedGenericComponentProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
Syntax
ImportedGenericComponentProxy.SuppressLinkToFile() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2016
ImportedGenericComponentProxy.Type Property
Parent Object: ImportedGenericComponentProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ImportedGenericComponentProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedGenericComponentProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBD2.htm 16/06/2025
ImportedModelEntities Object
Description
ImportedModelEntities Object.
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
ImportedGenericComponentDefinition.ImportedModelEntities, ImportedModelEntity.SubEntities
Version
Introduced in version 2016
ImportedModelEntities.Application Property
Parent Object: ImportedModelEntities
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
ImportedModelEntities.Application() As Object
Property Value
This is a read only property whose value is an Object.
ImportedModelEntities Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2824.htm 16/06/2025
Version
Introduced in version 2016
ImportedModelEntities.Count Property
Parent Object: ImportedModelEntities
Description
Gets the number of items in this collection.
Syntax
ImportedModelEntities.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2016
ImportedModelEntities.Item Property
Parent Object: ImportedModelEntities
Description
Allows integer-indexed access to items in the collection.
Syntax
ImportedModelEntities.Item( Index As Variant ) As ImportedModelEntity
Property Value
This is a read only property whose value is an ImportedModelEntity.
Parameters
ImportedModelEntities Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2824.htm 16/06/2025
Name Type Description
Index Variant
Input Variant value that specifies the ImportedModelEntity to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the ImportedModelEntity name. If an out of range index or a
name of a non-existent ImportedModelEntity is provided, an error will occur.
Version
Introduced in version 2016
ImportedModelEntities.Type Property
Parent Object: ImportedModelEntities
Description
Gets the constant that indicates the type of this object.
Syntax
ImportedModelEntities.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2016
ImportedModelEntities Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2824.htm 16/06/2025
iAssemblyFactory Object
Description
The iAssemblyFactory object provides access to the iAssembly table and provides methods to
create iAssembly members.
Methods
Name Description
CreateMember
Method that creates an iAssembly member using the parameter values in a row.
The created iAssemblyMember is returned. If the member already exists, the
member is updated and the iAssemblyMember object is returned.
Delete
Method that converts the iAssembly factory to a regular assembly. When an
iAssembly factory is converted to a regular assembly, all of the iAssembly
members created from the factory become sick.
Export Method that exports the iAssemblyFactory to an external file.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DefaultRow
Read-write property that gets and sets the default row for this
iAssemblyFactory.
ExcelWorkSheet
Property that returns the excel spreadsheet that represents the iAssembly
table.
FactoryOptions Property that gets the options for the factory.
FileNameColumn
Read-write property that gets and sets the column to use as the file name
column.
MemberCacheDir
Property that returns the directory location for the newly created iAssembly
members.
MemberEditScope
Read-write property that gets and sets whether the edits to a member should
affect just the active member or all members within the factory.
Parent Property that returns the parent AssemblyComponentDefinition of the factory.
TableColumns Property that returns the iAssemblyTableColumns collection object.
TableRows Property that returns the iAssemblyTableRows collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.CreateFactory,
AssemblyComponentDefinition.iAssemblyFactory, iAssemblyMember.ParentFactory,
iAssemblyFactory Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyTableCell.Parent, iAssemblyTableColumn.Parent, iAssemblyTableRow.Parent,
WeldmentComponentDefinition.CreateFactory,
WeldmentComponentDefinition.iAssemblyFactory
Samples
Name Description
Adding iAssembly
occurrences
This sample demonstrates adding iAssembly occurrences to an
assembly.
Version
Introduced in version 11
iAssemblyFactory.Application Property
Parent Object: iAssemblyFactory
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iAssemblyFactory.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyFactory.CreateMember Method
Parent Object: iAssemblyFactory
Description
iAssemblyFactory Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
Method that creates an iAssembly member using the parameter values in a row. The created
iAssemblyMember is returned. If the member already exists, the member is updated and the
iAssemblyMember object is returned.
Syntax
iAssemblyFactory.CreateMember( [Row] As Variant )
Parameters
Name Type Description
Row Variant
Optional input Variant that specifies the row number within an iAssembly table.
The row index is specified either by a Long (row index), a String (MemberName),
or an iAssemblyTableRow object. If the argument is not specified, the default row
of the factory will be used to create the iAssembly member.
This is an optional argument whose default value is null.
Version
Introduced in version 11
iAssemblyFactory.DefaultRow Property
Parent Object: iAssemblyFactory
Description
Read-write property that gets and sets the default row for this iAssemblyFactory.
Syntax
iAssemblyFactory.DefaultRow() As iAssemblyTableRow
Property Value
This is a read/write property whose value is an iAssemblyTableRow.
Version
Introduced in version 11
iAssemblyFactory Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyFactory.Delete Method
Parent Object: iAssemblyFactory
Description
Method that converts the iAssembly factory to a regular assembly. When an iAssembly factory is
converted to a regular assembly, all of the iAssembly members created from the factory become
sick.
Syntax
iAssemblyFactory.Delete()
Version
Introduced in version 11
iAssemblyFactory.ExcelWorkSheet Property
Parent Object: iAssemblyFactory
Description
Property that returns the excel spreadsheet that represents the iAssembly table.
Syntax
iAssemblyFactory.ExcelWorkSheet() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyFactory.Export Method
Parent Object: iAssemblyFactory
iAssemblyFactory Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
Description
Method that exports the iAssemblyFactory to an external file.
Syntax
iAssemblyFactory.Export( FileName As String, FileFormat As FileFormatEnum, [Options] As
Variant )
Parameters
Name Type Description
FileName String
Input string that specifies the file name to export the
iAssemblyFactory to.
FileFormat FileFormatEnum Input FileFormatEnum that specifies the file format to save to.
Options Variant
Optional input NameValueMap object that specifies additional
options for export.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
iAssemblyFactory.FactoryOptions Property
Parent Object: iAssemblyFactory
Description
Property that gets the options for the factory.
Syntax
iAssemblyFactory.FactoryOptions() As FactoryOptions
Property Value
This is a read only property whose value is a FactoryOptions.
Version
Introduced in version 2010
iAssemblyFactory Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyFactory.FileNameColumn Property
Parent Object: iAssemblyFactory
Description
Read-write property that gets and sets the column to use as the file name column.
Syntax
iAssemblyFactory.FileNameColumn() As iAssemblyTableColumn
Property Value
This is a read/write property whose value is an iAssemblyTableColumn.
Version
Introduced in version 2011
iAssemblyFactory.MemberCacheDir
Property
Parent Object: iAssemblyFactory
Description
Property that returns the directory location for the newly created iAssembly members.
Syntax
iAssemblyFactory.MemberCacheDir() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iAssemblyFactory Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyFactory.MemberEditScope
Property
Parent Object: iAssemblyFactory
Description
Read-write property that gets and sets whether the edits to a member should affect just the active
member or all members within the factory.
Syntax
iAssemblyFactory.MemberEditScope() As MemberEditScopeEnum
Property Value
This is a read/write property whose value is a MemberEditScopeEnum.
Version
Introduced in version 11
iAssemblyFactory.Parent Property
Parent Object: iAssemblyFactory
Description
Property that returns the parent AssemblyComponentDefinition of the factory.
Syntax
iAssemblyFactory.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
Version
Introduced in version 11
iAssemblyFactory Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyFactory.TableColumns Property
Parent Object: iAssemblyFactory
Description
Property that returns the iAssemblyTableColumns collection object.
Syntax
iAssemblyFactory.TableColumns() As iAssemblyTableColumns
Property Value
This is a read only property whose value is an iAssemblyTableColumns.
Version
Introduced in version 11
iAssemblyFactory.TableRows Property
Parent Object: iAssemblyFactory
Description
Property that returns the iAssemblyTableRows collection object.
Syntax
iAssemblyFactory.TableRows() As iAssemblyTableRows
Property Value
This is a read only property whose value is an iAssemblyTableRows.
Samples
Name Description
Adding iAssembly
occurrences
This sample demonstrates adding iAssembly occurrences to an
assembly.
iAssemblyFactory Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
Version
Introduced in version 11
iAssemblyFactory.Type Property
Parent Object: iAssemblyFactory
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyFactory.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyFactory Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE3E0.htm 16/06/2025
iAssemblyMember Object
Description
The iAssemblyMember object provides access to a member of an iAssembly.
Methods
Name Description
BreakLinkToFactory
Method that breaks the link to the parent factory and converts the iAssembly member
to a regular assembly.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
HealthStatus Property that returns an enum indicating the current state of the object.
Parent
Property that returns the parent AssemblyComponentDefinition of the
member.
ParentFactory
Property that returns the iAssembly factory that created this
iAssemblyMember.
ReferencedDocumentDescriptor Property that returns the descriptor of the iAssembly factory document.
Row
Property that returns the row in the iAssembly table that this
iAssemblyMember represents.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.iAssemblyMember, WeldmentComponentDefinition.iAssemblyMember
Version
Introduced in version 11
iAssemblyMember.Application Property
Parent Object: iAssemblyMember
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
iAssemblyMember Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D8E.htm 16/06/2025
Syntax
iAssemblyMember.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyMember.BreakLinkToFactory Method
Parent Object: iAssemblyMember
Description
Method that breaks the link to the parent factory and converts the iAssembly member to a regular assembly.
Syntax
iAssemblyMember.BreakLinkToFactory()
Version
Introduced in version 11
iAssemblyMember.HealthStatus Property
Parent Object: iAssemblyMember
Description
Property that returns an enum indicating the current state of the object.
Syntax
iAssemblyMember.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
iAssemblyMember Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D8E.htm 16/06/2025
Version
Introduced in version 11
iAssemblyMember.Parent Property
Parent Object: iAssemblyMember
Description
Property that returns the parent AssemblyComponentDefinition of the member.
Syntax
iAssemblyMember.Parent() As AssemblyComponentDefinition
Property Value
This is a read only property whose value is an AssemblyComponentDefinition.
Version
Introduced in version 11
iAssemblyMember.ParentFactory Property
Parent Object: iAssemblyMember
Description
Property that returns the iAssembly factory that created this iAssemblyMember.
Syntax
iAssemblyMember.ParentFactory() As iAssemblyFactory
Property Value
This is a read only property whose value is an iAssemblyFactory.
Version
Introduced in version 11
iAssemblyMember Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D8E.htm 16/06/2025
iAssemblyMember.ReferencedDocumentDescriptor
Property
Parent Object: iAssemblyMember
Description
Property that returns the descriptor of the iAssembly factory document.
Syntax
iAssemblyMember.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 11
iAssemblyMember.Row Property
Parent Object: iAssemblyMember
Description
Property that returns the row in the iAssembly table that this iAssemblyMember represents.
Syntax
iAssemblyMember.Row() As iAssemblyTableRow
Property Value
This is a read only property whose value is an iAssemblyTableRow.
Version
Introduced in version 11
iAssemblyMember.Type Property
Parent Object: iAssemblyMember
iAssemblyMember Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D8E.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyMember.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyMember Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1D8E.htm 16/06/2025
iAssemblyTableCell Object
Description
The iAssemblyTableCell object represents an individual cell in the iAssembly factory table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Column Property that returns the index of this cell within the parent iAssemblyTableColumn.
HasFormula
Property that returns whether a formula (equation) was input into this cell via Excel.
Such cells show with a red background in the user interface and are not editable.
IsValid
Property that returns whether the contents of this cell are valid. Invalid cells show
with a yellow background in the user interface.
Parent Property that returns the parent iAssemblyFactory object.
Row Property that returns the index of this cell within the parent iAssemblyTableRow.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Read-write property that gets and sets the value of the cell.
Accessed From
iAssemblyTableColumn.Item, iAssemblyTableRow.Item
Version
Introduced in version 11
iAssemblyTableCell.Application Property
Parent Object: iAssemblyTableCell
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
iAssemblyTableCell Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3730.htm 16/06/2025
Syntax
iAssemblyTableCell.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyTableCell.Column Property
Parent Object: iAssemblyTableCell
Description
Property that returns the index of this cell within the parent iAssemblyTableColumn.
Syntax
iAssemblyTableCell.Column() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableCell.HasFormula Property
Parent Object: iAssemblyTableCell
Description
Property that returns whether a formula (equation) was input into this cell via Excel. Such cells
show with a red background in the user interface and are not editable.
iAssemblyTableCell Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3730.htm 16/06/2025
Syntax
iAssemblyTableCell.HasFormula() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iAssemblyTableCell.IsValid Property
Parent Object: iAssemblyTableCell
Description
Property that returns whether the contents of this cell are valid. Invalid cells show with a yellow
background in the user interface.
Syntax
iAssemblyTableCell.IsValid() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iAssemblyTableCell.Parent Property
Parent Object: iAssemblyTableCell
Description
Property that returns the parent iAssemblyFactory object.
iAssemblyTableCell Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3730.htm 16/06/2025
Syntax
iAssemblyTableCell.Parent() As iAssemblyFactory
Property Value
This is a read only property whose value is an iAssemblyFactory.
Version
Introduced in version 11
iAssemblyTableCell.Row Property
Parent Object: iAssemblyTableCell
Description
Property that returns the index of this cell within the parent iAssemblyTableRow.
Syntax
iAssemblyTableCell.Row() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableCell.Type Property
Parent Object: iAssemblyTableCell
Description
Returns an ObjectTypeEnum indicating this object's type.
iAssemblyTableCell Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3730.htm 16/06/2025
Syntax
iAssemblyTableCell.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyTableCell.Value Property
Parent Object: iAssemblyTableCell
Description
Read-write property that gets and sets the value of the cell.
Syntax
iAssemblyTableCell.Value() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iAssemblyTableCell Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3730.htm 16/06/2025
iAssemblyTableColumn Object
Description
The iAssemblyTableColumn object represents a column in the iAssembly factory table.
Methods
Name Description
Delete Deletes this column in the factory.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
DisplayHeading Property that returns the localized heading of the column.
FormattedHeading Property that returns the heading of the column in XML format.
Heading Property that returns the non-localized heading of the column.
Index
Property that returns the index of this column within the iAssembly factory
table.
Item Returns the specified iAssemblyTableCell object from the collection.
Key Read-write property that gets and sets the key order for the column.
Parent Property that returns the parent iAssemblyFactory object.
ReferencedDataType Property that returns the data type contained in the column.
ReferencedObject
Property that returns the object referenced by the column. For instance, if
the column references a fillet feature suppression, the corresponding
FilletFeature object is returned. Similarly, if a file property is referenced,
the corresponding Property object is returned. The property returns
Nothing if there is no corresponding object (e.g. when the
ReferencedDataType returns kMemberNameColumn).
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iAssemblyFactory.FileNameColumn, iAssemblyTableColumns.Item
Version
Introduced in version 11
iAssemblyTableColumn Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
iAssemblyTableColumn.Application Property
Parent Object: iAssemblyTableColumn
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iAssemblyTableColumn.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyTableColumn.Count Property
Parent Object: iAssemblyTableColumn
Description
Property that specifies the number of items in the collection.
Syntax
iAssemblyTableColumn.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableColumn Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
iAssemblyTableColumn.Delete Method
Parent Object: iAssemblyTableColumn
Description
Deletes this column in the factory.
Syntax
iAssemblyTableColumn.Delete()
Version
Introduced in version 2011
iAssemblyTableColumn.DisplayHeading
Property
Parent Object: iAssemblyTableColumn
Description
Property that returns the localized heading of the column.
Syntax
iAssemblyTableColumn.DisplayHeading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iAssemblyTableColumn.FormattedHeading
Property
iAssemblyTableColumn Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
Parent Object: iAssemblyTableColumn
Description
Property that returns the heading of the column in XML format.
Syntax
iAssemblyTableColumn.FormattedHeading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iAssemblyTableColumn.Heading Property
Parent Object: iAssemblyTableColumn
Description
Property that returns the non-localized heading of the column.
Syntax
iAssemblyTableColumn.Heading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iAssemblyTableColumn.Index Property
Parent Object: iAssemblyTableColumn
iAssemblyTableColumn Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
Description
Property that returns the index of this column within the iAssembly factory table.
Syntax
iAssemblyTableColumn.Index() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iAssemblyTableColumn.Item Property
Parent Object: iAssemblyTableColumn
Description
Returns the specified iAssemblyTableCell object from the collection.
Syntax
iAssemblyTableColumn.Item( Index As Variant ) As iAssemblyTableCell
Property Value
This is a read only property whose value is an iAssemblyTableCell.
Parameters
Name Type Description
Index Variant
Value that specifies the iAssemblyTableCell to return. This can be either a
numeric value indicating the index of a row where the first row has an index of 1
or it can be a string indicating the member name of a particular row. The member
name is obtained using the MemberName property on an iAssemblyTableRow
object. If an out of range index or a name of a non-existent member is provided, an
error will occur
iAssemblyTableColumn Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
Version
Introduced in version 11
iAssemblyTableColumn.Key Property
Parent Object: iAssemblyTableColumn
Description
Read-write property that gets and sets the key order for the column.
Syntax
iAssemblyTableColumn.Key() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
iAssemblyTableColumn.Parent Property
Parent Object: iAssemblyTableColumn
Description
Property that returns the parent iAssemblyFactory object.
Syntax
iAssemblyTableColumn.Parent() As iAssemblyFactory
Property Value
This is a read only property whose value is an iAssemblyFactory.
iAssemblyTableColumn Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
Version
Introduced in version 11
iAssemblyTableColumn.ReferencedDataType
Property
Parent Object: iAssemblyTableColumn
Description
Property that returns the data type contained in the column.
Syntax
iAssemblyTableColumn.ReferencedDataType() As iComponentColumnTypeEnum
Property Value
This is a read only property whose value is an iComponentColumnTypeEnum.
Version
Introduced in version 2011
iAssemblyTableColumn.ReferencedObject
Property
Parent Object: iAssemblyTableColumn
Description
Property that returns the object referenced by the column. For instance, if the column references a
fillet feature suppression, the corresponding FilletFeature object is returned. Similarly, if a file
property is referenced, the corresponding Property object is returned. The property returns
Nothing if there is no corresponding object (e.g. when the ReferencedDataType returns
kMemberNameColumn).
Syntax
iAssemblyTableColumn.ReferencedObject() As Object
iAssemblyTableColumn Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
iAssemblyTableColumn.Type Property
Parent Object: iAssemblyTableColumn
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyTableColumn.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyTableColumn Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4CEB.htm 16/06/2025
iAssemblyTableColumns Object
Description
The iAssemblyTableColumns collection object provides access to all existing
iAssemblyTableColumn objects in the iAssembly factory table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Returns the specified iAssemblyTableColumn object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iAssemblyFactory.TableColumns
Version
Introduced in version 11
iAssemblyTableColumns.Application
Property
Parent Object: iAssemblyTableColumns
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iAssemblyTableColumns.Application() As Object
iAssemblyTableColumns Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh693D.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iAssemblyTableColumns.Count Property
Parent Object: iAssemblyTableColumns
Description
Property that specifies the number of items in the collection.
Syntax
iAssemblyTableColumns.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableColumns.Item Property
Parent Object: iAssemblyTableColumns
Description
Returns the specified iAssemblyTableColumn object from the collection.
Syntax
iAssemblyTableColumns.Item( Index As Variant ) As iAssemblyTableColumn
iAssemblyTableColumns Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh693D.htm 16/06/2025
Property Value
This is a read only property whose value is an iAssemblyTableColumn.
Parameters
Name Type Description
Index Variant
Value that specifies the iAssemblyTableColumn to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the column heading. If an out of range index or a name of a non-existent
iAssemblyTableColumn is provided, an error will occur.
Version
Introduced in version 11
iAssemblyTableColumns.Type Property
Parent Object: iAssemblyTableColumns
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyTableColumns.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyTableColumns Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh693D.htm 16/06/2025
iAssemblyTableRow Object
Description
The iAssemblyTableRow object represents a row in the iAssembly factory table.
Methods
Name Description
Copy Method that creates a new row with all values equal to the original row.
Delete Method that deletes this row in the factory.
GetReferenceKey Method that generates and returns the reference key for this entity.
IsExcluded Method that returns whether the input object is excluded in this member.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Count Property that specifies the number of items in the collection.
DocumentName Gets and sets the document name corresponding to this row in the iAssembly table.
DocumentNameModifiable
Property that returns whether the name of the document corresponding to this member
can be modified.
Index Property that returns the index of this row within the iAssembly factory table.
IsDocumentNameBasedOnMemberName
Gets whether the member's filename is based on the member name or an explicitly set
filename.
Item Returns the specified iAssemblyTableCell object from the collection.
MemberName Property that returns the member name corresponding to this row in the iAssembly table.
Parent Property that returns the parent iAssemblyFactory object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iAssemblyFactory.DefaultRow, iAssemblyMember.Row, iAssemblyTableRow.Copy, iAssemblyTableRows.Item
Version
Introduced in version 11
iAssemblyTableRow.Application Property
Parent Object: iAssemblyTableRow
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iAssemblyTableRow.Application() As Object
Property Value
This is a read only property whose value is an Object.
iAssemblyTableRow Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Version
Introduced in version 11
iAssemblyTableRow.AttributeSets Property
Parent Object: iAssemblyTableRow
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iAssemblyTableRow.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
iAssemblyTableRow.Copy Method
Parent Object: iAssemblyTableRow
Description
Method that creates a new row with all values equal to the original row.
Syntax
iAssemblyTableRow.Copy( [NewMemberName] As String ) As iAssemblyTableRow
Parameters
Name Type Description
NewMemberName String
Name of new row member.
This is an optional argument whose default value is """".
Version
Introduced in version 11
iAssemblyTableRow.Count Property
Parent Object: iAssemblyTableRow
Description
Property that specifies the number of items in the collection.
iAssemblyTableRow Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Syntax
iAssemblyTableRow.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableRow.Delete Method
Parent Object: iAssemblyTableRow
Description
Method that deletes this row in the factory.
Syntax
iAssemblyTableRow.Delete()
Version
Introduced in version 11
iAssemblyTableRow.DocumentName Property
Parent Object: iAssemblyTableRow
Description
Gets and sets the document name corresponding to this row in the iAssembly table.
Syntax
iAssemblyTableRow.DocumentName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iAssemblyTableRow.DocumentNameModifiable Property
Parent Object: iAssemblyTableRow
Description
Property that returns whether the name of the document corresponding to this member can be modified.
iAssemblyTableRow Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Syntax
iAssemblyTableRow.DocumentNameModifiable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
iAssemblyTableRow.GetReferenceKey Method
Parent Object: iAssemblyTableRow
Description
Method that generates and returns the reference key for this entity.
Syntax
iAssemblyTableRow.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep
entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created
using the CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key
context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To obtain the entity at a later time
using the reference key you use the BindKeyToObject method of the object. The ReferenceKeyManager object is obtained using the
ReferenceKeyManager property of the Document object.
Version
Introduced in version 2009
iAssemblyTableRow.Index Property
Parent Object: iAssemblyTableRow
Description
Property that returns the index of this row within the iAssembly factory table.
Syntax
iAssemblyTableRow.Index() As Long
iAssemblyTableRow Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iAssemblyTableRow.IsDocumentNameBasedOnMemberName
Property
Parent Object: iAssemblyTableRow
Description
Gets whether the member's filename is based on the member name or an explicitly set filename.
Syntax
iAssemblyTableRow.IsDocumentNameBasedOnMemberName() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
iAssemblyTableRow.IsExcluded Method
Parent Object: iAssemblyTableRow
Description
Method that returns whether the input object is excluded in this member.
Syntax
iAssemblyTableRow.IsExcluded( Object As Object ) As Boolean
Parameters
Name Type Description
Object Object Object to check for exclusion.
Version
Introduced in version 11
iAssemblyTableRow.Item Property
Parent Object: iAssemblyTableRow
iAssemblyTableRow Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Description
Returns the specified iAssemblyTableCell object from the collection.
Syntax
iAssemblyTableRow.Item( Index As Variant ) As iAssemblyTableCell
Property Value
This is a read only property whose value is an iAssemblyTableCell.
Parameters
Name Type Description
Index Variant
Value that specifies the iAssemblyTableCell to return. This can be either a numeric value indicating the index of a
column where the first column has an index of 1 or it can be a string indicating the heading of a particular column.
The heading is obtained using the Heading property on an iAssemblyTableColumn object. If an out of range index
or a heading of a non-existent column is provided, an error will occur.
Version
Introduced in version 11
iAssemblyTableRow.MemberName Property
Parent Object: iAssemblyTableRow
Description
Property that returns the member name corresponding to this row in the iAssembly table.
Syntax
iAssemblyTableRow.MemberName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iAssemblyTableRow.Parent Property
Parent Object: iAssemblyTableRow
Description
Property that returns the parent iAssemblyFactory object.
Syntax
iAssemblyTableRow.Parent() As iAssemblyFactory
iAssemblyTableRow Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
Property Value
This is a read only property whose value is an iAssemblyFactory.
Version
Introduced in version 11
iAssemblyTableRow.Type Property
Parent Object: iAssemblyTableRow
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyTableRow.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyTableRow Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F64.htm 16/06/2025
iAssemblyTableRows Object
Description
The iAssemblyTableRows collection object provides access to all existing iAssemblyTableRow
objects in the iAssembly factory table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Returns an item from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iAssemblyFactory.TableRows
Version
Introduced in version 11
iAssemblyTableRows.Application Property
Parent Object: iAssemblyTableRows
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iAssemblyTableRows.Application() As Object
Property Value
This is a read only property whose value is an Object.
iAssemblyTableRows Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9C05.htm 16/06/2025
Version
Introduced in version 11
iAssemblyTableRows.Count Property
Parent Object: iAssemblyTableRows
Description
Property that specifies the number of items in the collection.
Syntax
iAssemblyTableRows.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
iAssemblyTableRows.Item Property
Parent Object: iAssemblyTableRows
Description
Returns an item from the collection.
Syntax
iAssemblyTableRows.Item( Index As Variant ) As iAssemblyTableRow
Property Value
This is a read only property whose value is an iAssemblyTableRow.
Parameters
iAssemblyTableRows Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9C05.htm 16/06/2025
Name Type Description
Index Variant
Value that specifies the iAssemblyTableRow to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the member name. If an out of range index or a name of a non-existent
iAssemblyTableRow is provided, an error will occur. This index value is not the
same as the index value indicated in the user interface dialog. Rows in the dialog
may be re-ordered.
Version
Introduced in version 11
iAssemblyTableRows.Type Property
Parent Object: iAssemblyTableRows
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iAssemblyTableRows.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iAssemblyTableRows Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9C05.htm 16/06/2025
iFeature Object
Derived from: ReferenceFeature Object
Description
The iFeature object represents the instance of a placed iFeature.
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
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces
Property that returns a collection that provides access to all of the
faces of the feature. The Faces collection object will return the faces
that still currently exist in the part. For example, if a face has been
consumed by additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
iFeature Object Page 1 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
HealthStatus Property that returns an enum indicating the current state of the
object.
iFeatureDefinition Property that returns the associated iFeatureDefinition.
iFeatureTemplateDescriptor
Property that returns the iFeatureTemplateDescriptor object
associated with this iFeature.
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
RangeBox
Property that returns a Box object which contains the opposing
points of a rectangular box that is guaranteed to enclose this object.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the entity in the base part or assembly
document. In the case of a derived assembly, the ReferencedEntity
property returns the component occurrence in the base assembly that
this ReferenceFeature represents. In the case of a derived part, the
ReferencedEntity property can return a solid or surface body of the
source part or a surface in the source part.. In cases where the
component occurrence, solid or surface body entity is referencing a
model entity, but the model entity no longer exists because it has
been consumed by a subsequent modeling operation, this property
will return Nothing.
Shared
Gets and sets whether the part feature is shared or not, applies only
to surface features.
Sketches
Property that returns the sketches that were created when the
iFeature was placed. In most case there will be a single sketch.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies
Property that returns the bodies that this feature has created or
modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureProxy.NativeObject, iFeatures.Add, iFeatures.Item
Derived Classes
iFeatureProxy
iFeature Object Page 2 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.Adaptive Property
Parent Object: iFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
iFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeature.Appearance Property
Parent Object: iFeature
Description
Gets and sets the current appearance of the feature.
Syntax
iFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
iFeature Object Page 3 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2014
iFeature.AppearanceSourceType Property
Parent Object: iFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
iFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
iFeature.Application Property
Parent Object: iFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeature Object Page 4 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.AttributeSets Property
Parent Object: iFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
iFeature.ConsumeInputs Property
Parent Object: iFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
iFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
iFeature Object Page 5 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.Delete Method
Parent Object: iFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
iFeature.Delete( [RetainConsumedSketches] As Boolean,
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
iFeature Object Page 6 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.ExtendedName Property
Parent Object: iFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
iFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
iFeature.Faces Property
Parent Object: iFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
iFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
iFeature Object Page 7 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.FeatureDimensions Property
Parent Object: iFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
iFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2009
iFeature.GetReferenceKey Method
Parent Object: iFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
iFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
iFeature Object Page 8 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2009
iFeature.GetSuppressionCondition Method
Parent Object: iFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
iFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 2009
iFeature Object Page 9 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
iFeature.HealthStatus Property
Parent Object: iFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
iFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2009
iFeature.iFeatureDefinition Property
Parent Object: iFeature
Description
Property that returns the associated iFeatureDefinition.
Syntax
iFeature.iFeatureDefinition() As iFeatureDefinition
Property Value
This is a read only property whose value is an iFeatureDefinition.
Samples
Name Description
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
iFeature Object Page 10 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.iFeatureTemplateDescriptor
Property
Parent Object: iFeature
Description
Property that returns the iFeatureTemplateDescriptor object associated with this iFeature.
Syntax
iFeature.iFeatureTemplateDescriptor() As iFeatureTemplateDescriptor
Property Value
This is a read only property whose value is an iFeatureTemplateDescriptor.
Version
Introduced in version 2009
iFeature.IsOwnedByFeature Property
Parent Object: iFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
iFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
iFeature Object Page 11 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.Name Property
Parent Object: iFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
iFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
iFeature.OwnedBy Property
Parent Object: iFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
iFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
iFeature Object Page 12 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.Parameters Property
Parent Object: iFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
iFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2009
iFeature.Parent Property
Parent Object: iFeature
Description
Property that returns the parent of the feature.
Syntax
iFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
iFeature Object Page 13 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.Participants Property
Parent Object: iFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
iFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2009
iFeature.RangeBox Property
Parent Object: iFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
iFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
iFeature Object Page 14 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Version
Introduced in version 2009
iFeature.ReferenceComponent Property
Parent Object: iFeature
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
iFeature.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2009
iFeature.ReferencedEntity Property
Parent Object: iFeature
Description
Property that returns the entity in the base part or assembly document. In the case of a derived
assembly, the ReferencedEntity property returns the component occurrence in the base assembly
that this ReferenceFeature represents. In the case of a derived part, the ReferencedEntity property
can return a solid or surface body of the source part or a surface in the source part.. In cases where
the component occurrence, solid or surface body entity is referencing a model entity, but the
model entity no longer exists because it has been consumed by a subsequent modeling operation,
this property will return Nothing.
Syntax
iFeature.ReferencedEntity() As Object
iFeature Object Page 15 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeature.RemoveParticipant Method
Parent Object: iFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
iFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2009
iFeature.SetAffectedBodies Method
Parent Object: iFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
iFeature Object Page 16 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Syntax
iFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
iFeature.SetEndOfPart Method
Parent Object: iFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
iFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2009
iFeature.SetSuppressionCondition Method
Parent Object: iFeature
Description
iFeature Object Page 17 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Method that sets the suppression condition for the feature.
Syntax
iFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 2009
iFeature.Shared Property
Parent Object: iFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
iFeature.Shared() As Boolean
iFeature Object Page 18 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeature.Sketches Property
Parent Object: iFeature
Description
Property that returns the sketches that were created when the iFeature was placed. In most case
there will be a single sketch.
Syntax
iFeature.Sketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2009
iFeature.Suppressed Property
Parent Object: iFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
iFeature.Suppressed() As Boolean
iFeature Object Page 19 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeature.SurfaceBodies Property
Parent Object: iFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
iFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
iFeature.Type Property
Parent Object: iFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeature.Type() As ObjectTypeEnum
iFeature Object Page 20 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeature Object Page 21 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB559.htm 16/06/2025
iFeatureDefinition Object
Description
The iFeatureDefinition object represents the positional and parameter information of an iFeature.
Properties
Name Description
ActiveTableRow
Gets and sets the row from the table that should be used to specify the sizes for
the iFeature instances.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
iFeatureInputs Property that indicates the input information of the iFeature.
iFeatureTable Property that returns the table information associated with this iFeature.
IsPunchTool
Property that specifies if this iFeature has been defined to be used as a punch
tool.
IsTableDriven Property that specifies if this iFeature is driven by a table.
PunchId Property that returns the PunchID associated with this iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeature.iFeatureDefinition, iFeatureProxy.iFeatureDefinition, iFeatures.CreateiFeatureDefinition,
PunchToolFeature.iFeatureDefinition, PunchToolFeatureProxy.iFeatureDefinition,
PunchToolFeatures.CreateiFeatureDefinition
Samples
Name Description
Placement of a
standard
iFeature
This program demonstrates the placement of a standard iFeature in a part.
Place table
driven iFeature
This program demonstrates the placement of a table driven iFeature in a part.
Add a punch
tool feature
This program demonstrates the creation of a punch tool feature. It uses one of the
punch features that's delivered with Inventor. It assumes you already have an
existing sheet metal part and have selected a face to place the punch feature on.
The selected face should be large so there is room for the punch features.
iFeatureDefinition Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
Version
Introduced in version 6
iFeatureDefinition.ActiveTableRow Property
Parent Object: iFeatureDefinition
Description
Gets and sets the row from the table that should be used to specify the sizes for the iFeature
instances.
Syntax
iFeatureDefinition.ActiveTableRow() As iFeatureTableRow
Property Value
This is a read/write property whose value is an iFeatureTableRow.
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureDefinition.Application Property
Parent Object: iFeatureDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
iFeatureDefinition Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
Syntax
iFeatureDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureDefinition.iFeatureInputs Property
Parent Object: iFeatureDefinition
Description
Property that indicates the input information of the iFeature.
Syntax
iFeatureDefinition.iFeatureInputs() As iFeatureInputs
Property Value
This is a read only property whose value is an iFeatureInputs.
Samples
Name Description
Placement of a standard
iFeature
This program demonstrates the placement of a standard iFeature in
a part.
Place table driven iFeature
This program demonstrates the placement of a table driven iFeature
in a part.
Version
Introduced in version 6
iFeatureDefinition.iFeatureTable Property
iFeatureDefinition Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
Parent Object: iFeatureDefinition
Description
Property that returns the table information associated with this iFeature.
Syntax
iFeatureDefinition.iFeatureTable() As iFeatureTable
Property Value
This is a read only property whose value is an iFeatureTable.
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureDefinition.IsPunchTool Property
Parent Object: iFeatureDefinition
Description
Property that specifies if this iFeature has been defined to be used as a punch tool.
Syntax
iFeatureDefinition.IsPunchTool() As Boolean
Property Value
This is a read only property whose value is a Boolean.
iFeatureDefinition Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
Version
Introduced in version 2009
iFeatureDefinition.IsTableDriven Property
Parent Object: iFeatureDefinition
Description
Property that specifies if this iFeature is driven by a table.
Syntax
iFeatureDefinition.IsTableDriven() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Samples
Name Description
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureDefinition.PunchId Property
Parent Object: iFeatureDefinition
Description
Property that returns the PunchID associated with this iFeature.
Syntax
iFeatureDefinition.PunchId() As String
iFeatureDefinition Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureDefinition.Type Property
Parent Object: iFeatureDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureDefinition Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD93C.htm 16/06/2025
iFeatureEntityInput Object
Derived from: iFeatureInput Object
Description
The iFeatureEntityInput object represents the positional information of an iFeature. The
iFeatureEntityInput object is used both to describe and specify the geometry necessary for the
placement of an iFeature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Entity Gets and sets the entity required for the input.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the desired
values and entities.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
iFeatureEntityInput.Application Property
Parent Object: iFeatureEntityInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureEntityInput.Application() As Object
iFeatureEntityInput Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF6B7.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureEntityInput.Entity Property
Parent Object: iFeatureEntityInput
Description
Gets and sets the entity required for the input.
Syntax
iFeatureEntityInput.Entity() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 6
iFeatureEntityInput.EntityType Property
Parent Object: iFeatureEntityInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureEntityInput.EntityType() As iFeatureEntityInputTypeEnum
iFeatureEntityInput Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF6B7.htm 16/06/2025
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
Version
Introduced in version 6
iFeatureEntityInput.Name Property
Parent Object: iFeatureEntityInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API
you can use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureEntityInput.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureEntityInput.Prompt Property
Parent Object: iFeatureEntityInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
Syntax
iFeatureEntityInput.Prompt() As String
iFeatureEntityInput Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF6B7.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureEntityInput.Type Property
Parent Object: iFeatureEntityInput
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureEntityInput.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureEntityInput Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF6B7.htm 16/06/2025
iFeatureInput Object
Description
The iFeatureInput object is the base class for iFeatureParameterInput, iFeatureEntityInput,
iFeatureSketchPlaneInput, iFeatureWorkPlaneInput and iFeatureVectorInput.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the desired
values and entities.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureInputs.Item
Derived Classes
iFeatureEntityInput, iFeatureParameterInput, iFeatureSketchPlaneInput, iFeatureVectorInput,
iFeatureWorkPlaneInput
Samples
Name Description
Placement of a
standard
iFeature
This program demonstrates the placement of a standard iFeature in a part.
Place table
driven iFeature
This program demonstrates the placement of a table driven iFeature in a part.
Add a punch
tool feature
This program demonstrates the creation of a punch tool feature. It uses one of the
punch features that's delivered with Inventor. It assumes you already have an
existing sheet metal part and have selected a face to place the punch feature on.
The selected face should be large so there is room for the punch features.
iFeatureInput Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF02.htm 16/06/2025
Version
Introduced in version 6
iFeatureInput.Application Property
Parent Object: iFeatureInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureInput.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureInput.EntityType Property
Parent Object: iFeatureInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureInput.EntityType() As iFeatureEntityInputTypeEnum
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
iFeatureInput Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF02.htm 16/06/2025
Version
Introduced in version 6
iFeatureInput.Name Property
Parent Object: iFeatureInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API
you can use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureInput.Name() As String
Property Value
This is a read only property whose value is a String.
Samples
Name Description
Add a
punch tool
feature
This program demonstrates the creation of a punch tool feature. It uses one of the
punch features that's delivered with Inventor. It assumes you already have an existing
sheet metal part and have selected a face to place the punch feature on. The selected
face should be large so there is room for the punch features.
Version
Introduced in version 2009
iFeatureInput.Prompt Property
Parent Object: iFeatureInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
iFeatureInput Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF02.htm 16/06/2025
Syntax
iFeatureInput.Prompt() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureInput.Type Property
Parent Object: iFeatureInput
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureInput.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureInput Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF02.htm 16/06/2025
iFeatureInputs Object
Description
The iFeatureInputs collection object provides access to all of the / iFeatureParameterInput objects
associated with a specific iFeatureDefinition object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified object in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureDefinition.iFeatureInputs
Version
Introduced in version 6
iFeatureInputs.Application Property
Parent Object: iFeatureInputs
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureInputs.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeatureInputs Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2597.htm 16/06/2025
Version
Introduced in version 6
iFeatureInputs.Count Property
Parent Object: iFeatureInputs
Description
Property that returns the number of items in the collection.
Syntax
iFeatureInputs.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iFeatureInputs.Item Property
Parent Object: iFeatureInputs
Description
Returns the specified object in the collection.
Syntax
iFeatureInputs.Item( Index As Long ) As iFeatureInput
Property Value
This is a read only property whose value is an iFeatureInput.
Parameters
iFeatureInputs Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2597.htm 16/06/2025
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 6
iFeatureInputs.Type Property
Parent Object: iFeatureInputs
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureInputs.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureInputs Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2597.htm 16/06/2025
iFeatureOptions Object
Description
The iFeatureOptions object provides access to properties that provide read and write access of the iFeature
related application options. This is somewhat equivalent to the iFeature tab of the Application Options
dialog.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
RootPath
Gets/Sets the location of iFeature files used by the View Catalog dialog
box.
SheetMetalPunchesRootPath
Gets/Sets the location of iFeature files used by the sheet metal Punch
Tool dialog box.
Type Returns an ObjectTypeEnum indicating this object's type.
UseKey1AsBrowserNameColumn
Gets/Sets whether to use the Key 1 column of a table-driven iFeature
as the Browser Name column.
UserRootPath
Gets/Sets the location of iFeature files used by both the Create iFeature
and Insert iFeature dialog boxes.
Viewer Gets/sets the viewer application used to manage the iFeature files.
ViewerArguments Gets/Sets the viewer command line arguments for run-time options.
Accessed From
Application.iFeatureOptions, InventorServer.iFeatureOptions, InventorServerObject.iFeatureOptions
Version
Introduced in version 11
iFeatureOptions.Application Property
Parent Object: iFeatureOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iFeatureOptions.Application() As Object
iFeatureOptions Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3EAD.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
iFeatureOptions.RootPath Property
Parent Object: iFeatureOptions
Description
Gets/Sets the location of iFeature files used by the View Catalog dialog box.
Syntax
iFeatureOptions.RootPath() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iFeatureOptions.SheetMetalPunchesRootPath
Property
Parent Object: iFeatureOptions
Description
Gets/Sets the location of iFeature files used by the sheet metal Punch Tool dialog box.
Syntax
iFeatureOptions.SheetMetalPunchesRootPath() As String
Property Value
This is a read/write property whose value is a String.
iFeatureOptions Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3EAD.htm 16/06/2025
Version
Introduced in version 11
iFeatureOptions.Type Property
Parent Object: iFeatureOptions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
iFeatureOptions.UseKey1AsBrowserNameColumn
Property
Parent Object: iFeatureOptions
Description
Gets/Sets whether to use the Key 1 column of a table-driven iFeature as the Browser Name column.
Syntax
iFeatureOptions.UseKey1AsBrowserNameColumn() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
iFeatureOptions Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3EAD.htm 16/06/2025
iFeatureOptions.UserRootPath Property
Parent Object: iFeatureOptions
Description
Gets/Sets the location of iFeature files used by both the Create iFeature and Insert iFeature dialog boxes.
Syntax
iFeatureOptions.UserRootPath() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iFeatureOptions.Viewer Property
Parent Object: iFeatureOptions
Description
Gets/sets the viewer application used to manage the iFeature files.
Syntax
iFeatureOptions.Viewer() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iFeatureOptions.ViewerArguments Property
Parent Object: iFeatureOptions
iFeatureOptions Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3EAD.htm 16/06/2025
Description
Gets/Sets the viewer command line arguments for run-time options.
Syntax
iFeatureOptions.ViewerArguments() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
iFeatureOptions Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3EAD.htm 16/06/2025
iFeatureParameterInput Object
Derived from: iFeatureInput Object
Description
The iFeatureParameterInput object contains the information associated with a parameter of an iFeature.
Methods
Name Description
LimitListExpressions
Method that gets the expressions of the LimitType kParamLimitList. This
property will fail in the case where the iFeatureDefinition object is associated
with an iFeature instance.
LimitRangeExpressions
Method that gets the expressions of the LimitType kParamLimitRange. If the
LeftLimitValue and LeftRangeSpec strings are NULL, there is no lower limit
for the values that the user can enter. Similarly if the RightLimitValue and
RightRangeSpec strings are NULL, there is no upper limit for the values that
the user can enter. This property will fail in the case where the
iFeatureDefinition object is associated with an iFeature instance.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
DefaultExpression
Property that gets the expression which specifies the default value and unit. This is
the default value of the Expression property. This property will fail in the case
where the iFeatureDefinition object is associated with an iFeature instance.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
Expression Gets and sets the expression of the parameter.
IsPunchToolDepth
Property specifies if this parameter input is used to define the custom depth of a
punch tool.
LimitListCount
Property that returns the number of limit values if the LimitType is
kParamLimitList. This property will fail in the case where the iFeatureDefinition
object is associated with an iFeature instance.
LimitType
Property that returns the limit type of the parameter. If this returns
kParamLimitRange, the LimitExpression property will return the upper and lower
limits will be two limit values: the value of the lower and upper bounds. If the
LimitType property is kParamLimitList there will be n values. This property will
fail in the case where the iFeatureDefinition object is associated with an iFeature
instance.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the
desired values and entities.
Parameter
iFeatureParameterInput Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
Property that returns the parameter in the model this iFeature parameter is
dependent on. This property will return Nothing in the case where the
iFeatureDefinition object is not associated with an iFeature instance.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Value
Gets/(Sets) the evaluation of this iFeature parameter in database units. Setting this
is equivalent to setting the 'Expression' with the constant string.
Samples
Name Description
Placement of a
standard
iFeature
This program demonstrates the placement of a standard iFeature in a part.
Add a punch
tool feature
This program demonstrates the creation of a punch tool feature. It uses one of the
punch features that's delivered with Inventor. It assumes you already have an existing
sheet metal part and have selected a face to place the punch feature on. The selected
face should be large so there is room for the punch features.
Version
Introduced in version 6
iFeatureParameterInput.Application Property
Parent Object: iFeatureParameterInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iFeatureParameterInput.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureParameterInput Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
iFeatureParameterInput.DefaultExpression
Property
Parent Object: iFeatureParameterInput
Description
Property that gets the expression which specifies the default value and unit. This is the default value of
the Expression property. This property will fail in the case where the iFeatureDefinition object is
associated with an iFeature instance.
Syntax
iFeatureParameterInput.DefaultExpression() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureParameterInput.EntityType Property
Parent Object: iFeatureParameterInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureParameterInput.EntityType() As iFeatureEntityInputTypeEnum
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
Version
Introduced in version 6
iFeatureParameterInput Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
iFeatureParameterInput.Expression Property
Parent Object: iFeatureParameterInput
Description
Gets and sets the expression of the parameter.
Syntax
iFeatureParameterInput.Expression() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Placement of a
standard
iFeature
This program demonstrates the placement of a standard iFeature in a part.
Add a punch
tool feature
This program demonstrates the creation of a punch tool feature. It uses one of the
punch features that's delivered with Inventor. It assumes you already have an existing
sheet metal part and have selected a face to place the punch feature on. The selected
face should be large so there is room for the punch features.
Version
Introduced in version 6
iFeatureParameterInput.IsPunchToolDepth
Property
Parent Object: iFeatureParameterInput
Description
Property specifies if this parameter input is used to define the custom depth of a punch tool.
Syntax
iFeatureParameterInput.IsPunchToolDepth() As Boolean
iFeatureParameterInput Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureParameterInput.LimitListCount
Property
Parent Object: iFeatureParameterInput
Description
Property that returns the number of limit values if the LimitType is kParamLimitList. This property will
fail in the case where the iFeatureDefinition object is associated with an iFeature instance.
Syntax
iFeatureParameterInput.LimitListCount() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iFeatureParameterInput.LimitListExpressions
Method
Parent Object: iFeatureParameterInput
Description
Method that gets the expressions of the LimitType kParamLimitList. This property will fail in the case
where the iFeatureDefinition object is associated with an iFeature instance.
Syntax
iFeatureParameterInput.LimitListExpressions( Index As Long ) As String
iFeatureParameterInput Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the expression to return.
Version
Introduced in version 6
iFeatureParameterInput.LimitRangeExpressions
Method
Parent Object: iFeatureParameterInput
Description
Method that gets the expressions of the LimitType kParamLimitRange. If the LeftLimitValue and
LeftRangeSpec strings are NULL, there is no lower limit for the values that the user can enter.
Similarly if the RightLimitValue and RightRangeSpec strings are NULL, there is no upper limit for the
values that the user can enter. This property will fail in the case where the iFeatureDefinition object is
associated with an iFeature instance.
Syntax
iFeatureParameterInput.LimitRangeExpressions( LeftLimitValue As String, LeftRangeSpec As
String, RightRangeSpec As String, RightLimitValue As String )
Parameters
Name Type Description
LeftLimitValue String
Output String that contains the expression of the lower limit value. If an empty
string is returned then there is no lower limit.
LeftRangeSpec String
Output String that contains the comparison operator used for the lower range.
If an empty string is returned then there is no lower limit.
RightRangeSpec String
Output String that contains the expression of the upper limit value. If an empty
string is returned then there is no upper limit.
RightLimitValue String
Output String that contains the comparison operator used for the upper range.
If an empty string is returned then there is no upper limit.
Version
Introduced in version 6
iFeatureParameterInput Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
iFeatureParameterInput.LimitType Property
Parent Object: iFeatureParameterInput
Description
Property that returns the limit type of the parameter. If this returns kParamLimitRange, the
LimitExpression property will return the upper and lower limits will be two limit values: the value of
the lower and upper bounds. If the LimitType property is kParamLimitList there will be n values. This
property will fail in the case where the iFeatureDefinition object is associated with an iFeature instance.
Syntax
iFeatureParameterInput.LimitType() As iFeatureParamLimitTypeEnum
Property Value
This is a read only property whose value is an iFeatureParamLimitTypeEnum.
Version
Introduced in version 6
iFeatureParameterInput.Name Property
Parent Object: iFeatureParameterInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API you can
use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureParameterInput.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureParameterInput Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
iFeatureParameterInput.Parameter Property
Parent Object: iFeatureParameterInput
Description
Property that returns the parameter in the model this iFeature parameter is dependent on. This property
will return Nothing in the case where the iFeatureDefinition object is not associated with an iFeature
instance.
Syntax
iFeatureParameterInput.Parameter() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
iFeatureParameterInput.Prompt Property
Parent Object: iFeatureParameterInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
Syntax
iFeatureParameterInput.Prompt() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureParameterInput.Type Property
iFeatureParameterInput Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
Parent Object: iFeatureParameterInput
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureParameterInput.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureParameterInput.Value Property
Parent Object: iFeatureParameterInput
Description
Gets/(Sets) the evaluation of this iFeature parameter in database units. Setting this is equivalent to
setting the 'Expression' with the constant string.
Syntax
iFeatureParameterInput.Value() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 6
iFeatureParameterInput Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh56C9.htm 16/06/2025
iFeatureProxy Object
Derived from: iFeature Object
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
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native
object is being referenced through. The returned occurrence is the
containing occurrence.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the
faces of the feature. The Faces collection object will return the faces
iFeatureProxy Object Page 1 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
that still currently exist in the part. For example, if a face has been
consumed by additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus
Property that returns an enum indicating the current state of the
object.
iFeatureDefinition Property that returns the associated iFeatureDefinition.
iFeatureTemplateDescriptor
Property that returns the iFeatureTemplateDescriptor object
associated with this iFeature.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
Name
Gets/Sets the name of this Part Feature within the scope of this
Document.
NativeObject
Gets the object in the context of the definition instead of the
containing assembly.
OwnedBy
Property that returns the owning PartFeature object. This property
returns Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature.
This list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing
points of a rectangular box that is guaranteed to enclose this object.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the entity in the base part or assembly
document. In the case of a derived assembly, the ReferencedEntity
property returns the component occurrence in the base assembly that
this ReferenceFeature represents. In the case of a derived part, the
ReferencedEntity property can return a solid or surface body of the
source part or a surface in the source part.. In cases where the
component occurrence, solid or surface body entity is referencing a
model entity, but the model entity no longer exists because it has
been consumed by a subsequent modeling operation, this property
will return Nothing.
Shared
Gets and sets whether the part feature is shared or not, applies only
to surface features.
Sketches
Property that returns the sketches that were created when the
iFeature was placed. In most case there will be a single sketch.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies
Property that returns the bodies that this feature has created or
modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 2009
iFeatureProxy Object Page 2 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatureProxy.Adaptive Property
Parent Object: iFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
iFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureProxy.Appearance Property
Parent Object: iFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
iFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
iFeatureProxy Object Page 3 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatureProxy.AppearanceSourceType
Property
Parent Object: iFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
iFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
iFeatureProxy.Application Property
Parent Object: iFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureProxy Object Page 4 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatureProxy.AttributeSets Property
Parent Object: iFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
iFeatureProxy.ConsumeInputs Property
Parent Object: iFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
iFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureProxy Object Page 5 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatureProxy.ContainingOccurrence
Property
Parent Object: iFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
iFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 2009
iFeatureProxy.Delete Method
Parent Object: iFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
iFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If
the feature being deleted is not a sketch based
iFeatureProxy Object Page 6 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
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
Introduced in version 2009
iFeatureProxy.ExtendedName Property
Parent Object: iFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
iFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
iFeatureProxy.Faces Property
iFeatureProxy Object Page 7 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Parent Object: iFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
iFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2009
iFeatureProxy.FeatureDimensions Property
Parent Object: iFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
iFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2009
iFeatureProxy.GetReferenceKey Method
Parent Object: iFeatureProxy
iFeatureProxy Object Page 8 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
iFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2009
iFeatureProxy.GetSuppressionCondition
Method
Parent Object: iFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
iFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
iFeatureProxy Object Page 9 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
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
Introduced in version 2009
iFeatureProxy.HealthStatus Property
Parent Object: iFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
iFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2009
iFeatureProxy.iFeatureDefinition Property
Parent Object: iFeatureProxy
Description
Property that returns the associated iFeatureDefinition.
iFeatureProxy Object Page 10 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.iFeatureDefinition() As iFeatureDefinition
Property Value
This is a read only property whose value is an iFeatureDefinition.
Version
Introduced in version 2009
iFeatureProxy.iFeatureTemplateDescriptor
Property
Parent Object: iFeatureProxy
Description
Property that returns the iFeatureTemplateDescriptor object associated with this iFeature.
Syntax
iFeatureProxy.iFeatureTemplateDescriptor() As iFeatureTemplateDescriptor
Property Value
This is a read only property whose value is an iFeatureTemplateDescriptor.
Version
Introduced in version 2009
iFeatureProxy.IsOwnedByFeature Property
Parent Object: iFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
iFeatureProxy Object Page 11 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureProxy.Name Property
Parent Object: iFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
iFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
iFeatureProxy.NativeObject Property
Parent Object: iFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
iFeatureProxy Object Page 12 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.NativeObject() As iFeature
Property Value
This is a read only property whose value is an iFeature.
Version
Introduced in version 2009
iFeatureProxy.OwnedBy Property
Parent Object: iFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
iFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2009
iFeatureProxy.Parameters Property
Parent Object: iFeatureProxy
Description
Property that returns all the parameters associated with the feature.
iFeatureProxy Object Page 13 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2009
iFeatureProxy.Parent Property
Parent Object: iFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
iFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2009
iFeatureProxy.Participants Property
Parent Object: iFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
iFeatureProxy Object Page 14 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2009
iFeatureProxy.RangeBox Property
Parent Object: iFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
iFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2009
iFeatureProxy.ReferenceComponent Property
Parent Object: iFeatureProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
iFeatureProxy Object Page 15 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Syntax
iFeatureProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 2009
iFeatureProxy.ReferencedEntity Property
Parent Object: iFeatureProxy
Description
Property that returns the entity in the base part or assembly document. In the case of a derived
assembly, the ReferencedEntity property returns the component occurrence in the base assembly
that this ReferenceFeature represents. In the case of a derived part, the ReferencedEntity property
can return a solid or surface body of the source part or a surface in the source part.. In cases where
the component occurrence, solid or surface body entity is referencing a model entity, but the
model entity no longer exists because it has been consumed by a subsequent modeling operation,
this property will return Nothing.
Syntax
iFeatureProxy.ReferencedEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureProxy.RemoveParticipant Method
Parent Object: iFeatureProxy
iFeatureProxy Object Page 16 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
iFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2009
iFeatureProxy.SetAffectedBodies Method
Parent Object: iFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
iFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
iFeatureProxy Object Page 17 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatureProxy.SetEndOfPart Method
Parent Object: iFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
iFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2009
iFeatureProxy.SetSuppressionCondition
Method
Parent Object: iFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
iFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
iFeatureProxy Object Page 18 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
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
Introduced in version 2009
iFeatureProxy.Shared Property
Parent Object: iFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
iFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureProxy.Sketches Property
Parent Object: iFeatureProxy
iFeatureProxy Object Page 19 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Description
Property that returns the sketches that were created when the iFeature was placed. In most case
there will be a single sketch.
Syntax
iFeatureProxy.Sketches() As SketchesEnumerator
Property Value
This is a read only property whose value is a SketchesEnumerator.
Version
Introduced in version 2009
iFeatureProxy.Suppressed Property
Parent Object: iFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
iFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
iFeatureProxy.SurfaceBodies Property
Parent Object: iFeatureProxy
iFeatureProxy Object Page 20 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
Description
Property that returns the bodies that this feature has created or modified.
Syntax
iFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
iFeatureProxy.Type Property
Parent Object: iFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureProxy Object Page 21 of 21
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7260.htm 16/06/2025
iFeatures Object
Description
The iFeatures collection object provides access to all of the iFeature objects in a part component
definition and provides methods to create additional iFeatures..
Methods
Name Description
Add
Method that creates a new iFeature using the input placement
information. If successfully created the new iFeature is returned.
CreateiFeatureDefinition
Method that creates a new iFeatrureDefinition. The returned definition
provides access to all of the inputs that are necessary for placing an
iFeature. Using this object you provide the parameter and the geometry
inputs necessary for placing the iFeature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Returns the specified iFeature object from the collection..
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
FlatPatternFeatures.iFeatures, PartFeatures.iFeatures, SheetMetalFeatures.iFeatures
Version
Introduced in version 2009
iFeatures.Add Method
Parent Object: iFeatures
Description
iFeatures Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh95A7.htm 16/06/2025
Method that creates a new iFeature using the input placement information. If successfully created
the new iFeature is returned.
Syntax
iFeatures.Add( Definition As iFeatureDefinition ) As iFeature
Parameters
Name Type Description
Definition iFeatureDefinition
Input iFeatureDefinition object used to define the various input
required for the placement of an iFeature. Appropriate input must
be defined in the iFeatureDefinition object in order to place the
iFeature.
Samples
Name Description
Placement of a standard
iFeature
This program demonstrates the placement of a standard iFeature in
a part.
Place table driven iFeature
This program demonstrates the placement of a table driven iFeature
in a part.
Version
Introduced in version 2009
iFeatures.Application Property
Parent Object: iFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeatures Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh95A7.htm 16/06/2025
Version
Introduced in version 2009
iFeatures.Count Property
Parent Object: iFeatures
Description
Property that specifies the number of items in the collection.
Syntax
iFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
iFeatures.CreateiFeatureDefinition Method
Parent Object: iFeatures
Description
Method that creates a new iFeatrureDefinition. The returned definition provides access to all of
the inputs that are necessary for placing an iFeature. Using this object you provide the parameter
and the geometry inputs necessary for placing the iFeature.
Syntax
iFeatures.CreateiFeatureDefinition( FullFileName As String ) As iFeatureDefinition
Parameters
Name Type Description
FullFileName String
iFeatures Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh95A7.htm 16/06/2025
Input string that specifies the name of the iFeature file (.ide) to create the
definition for. The file must be an existing iFeature file. If an invalid file is
specified an error will occur.
Samples
Name Description
Placement of a standard
iFeature
This program demonstrates the placement of a standard iFeature in
a part.
Place table driven iFeature
This program demonstrates the placement of a table driven iFeature
in a part.
Version
Introduced in version 2009
iFeatures.Item Property
Parent Object: iFeatures
Description
Returns the specified iFeature object from the collection..
Syntax
iFeatures.Item( Index As Variant ) As iFeature
Property Value
This is a read only property whose value is an iFeature.
Parameters
Name Type Description
Index Variant
Input Long or String value that specifies the iFeature to return. If a Long is input
then it is the index of the item to return. If a String is input then it must match the
name of an existing iFeature. If the index is out of range or the name does not exist
a failure will occur.
Samples
Name Description
iFeatures Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh95A7.htm 16/06/2025
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatures.Type Property
Parent Object: iFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatures Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh95A7.htm 16/06/2025
iFeatureSketchPlaneInput Object
Derived from: iFeatureInput Object
Description
The iFeatureSketchPlaneInput object represents the sketch plane input information of an iFeature.
The iFeatureSketchPlaneInput object is used specify the geometry's and other data necessary for
the sketch plane input of an iFeature.
Methods
Name Description
SetPosition Method that sets the position of the iFeature on the plane provided.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
EntityType
Property that returns the type of geometry that are valid. The value returned is the
sum of values specifying the valid entity types.
FlipOption Gets and sets whether the geometry selection needs to be flipped.
Name
Property that gets the name associated with this input. When placing an iFeature
using the API you can use the name to identify each input when assigning the desired
values and entities.
PlaneInput Gets and sets the geometry matching the sketch plane input.
Prompt
Property that gets the prompt that is used for this input during the placement of the
iFeature.
Type Returns an ObjectTypeEnum indicating this object's type.
Samples
Name Description
Placement of a standard
iFeature
This program demonstrates the placement of a standard iFeature in
a part.
Version
Introduced in version 6
iFeatureSketchPlaneInput Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
iFeatureSketchPlaneInput.Application
Property
Parent Object: iFeatureSketchPlaneInput
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureSketchPlaneInput.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iFeatureSketchPlaneInput.EntityType
Property
Parent Object: iFeatureSketchPlaneInput
Description
Property that returns the type of geometry that are valid. The value returned is the sum of values
specifying the valid entity types.
Syntax
iFeatureSketchPlaneInput.EntityType() As iFeatureEntityInputTypeEnum
Property Value
This is a read only property whose value is an iFeatureEntityInputTypeEnum.
iFeatureSketchPlaneInput Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
Version
Introduced in version 6
iFeatureSketchPlaneInput.FlipOption
Property
Parent Object: iFeatureSketchPlaneInput
Description
Gets and sets whether the geometry selection needs to be flipped.
Syntax
iFeatureSketchPlaneInput.FlipOption() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
iFeatureSketchPlaneInput.Name Property
Parent Object: iFeatureSketchPlaneInput
Description
Property that gets the name associated with this input. When placing an iFeature using the API
you can use the name to identify each input when assigning the desired values and entities.
Syntax
iFeatureSketchPlaneInput.Name() As String
Property Value
This is a read only property whose value is a String.
iFeatureSketchPlaneInput Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
Version
Introduced in version 2009
iFeatureSketchPlaneInput.PlaneInput
Property
Parent Object: iFeatureSketchPlaneInput
Description
Gets and sets the geometry matching the sketch plane input.
Syntax
iFeatureSketchPlaneInput.PlaneInput() As Object
Property Value
This is a read/write property whose value is an Object.
Samples
Name Description
Placement of a standard
iFeature
This program demonstrates the placement of a standard iFeature in
a part.
Place table driven iFeature
This program demonstrates the placement of a table driven iFeature
in a part.
Version
Introduced in version 6
iFeatureSketchPlaneInput.Prompt Property
Parent Object: iFeatureSketchPlaneInput
Description
Property that gets the prompt that is used for this input during the placement of the iFeature.
iFeatureSketchPlaneInput Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
Syntax
iFeatureSketchPlaneInput.Prompt() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iFeatureSketchPlaneInput.SetPosition
Method
Parent Object: iFeatureSketchPlaneInput
Description
Method that sets the position of the iFeature on the plane provided.
Syntax
iFeatureSketchPlaneInput.SetPosition( Point As Point, Axis As Vector, RotationAngle As
Double )
Parameters
Name Type Description
Point Point Input object that specifies the 3D location of the iFeature on the plane.
Axis Vector Specifies the vector along which the X-axis of iFeature will be aligned.
RotationAngle Double
Specifies the angle in radians by which the axis will be rotated about a
vector perpendicular to the plane used for placing the iFeature.
Version
Introduced in version 6
iFeatureSketchPlaneInput.Type Property
Parent Object: iFeatureSketchPlaneInput
iFeatureSketchPlaneInput Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureSketchPlaneInput.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iFeatureSketchPlaneInput Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhACB9.htm 16/06/2025
iFeatureTable Object
Description
The iFeatureTable object represents the table associated with a table driven iFeature. This object
provides access to the contents of the table and provides information about the default and active
rows.
Methods
Name Description
Delete
Method that deletes the iFeatureTable. This converts a table driven iFeature into a
standard iFeature.
Export Exports the iFeatureTable to an external file.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
DefaultRow Gets and sets the default row.
ExcelWorkSheet
Property that returns the Excel WorkSheet object representing the
iFeature table. After making changes to the Excel sheet, save and close
the parent WorkBook object of the sheet in order for Inventor to absorb
the changes.
iFeatureTableColumns Property returning the collection of columns in the table.
iFeatureTableRows Property returning the collection of rows in the table.
Parent Property returning the parent object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureDefinition.iFeatureTable, iFeatureTableCell.Parent, iFeatureTableColumn.Parent,
iFeatureTableRow.Parent
Version
Introduced in version 2009
iFeatureTable.Application Property
iFeatureTable Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
Parent Object: iFeatureTable
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTable.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureTable.DefaultRow Property
Parent Object: iFeatureTable
Description
Gets and sets the default row.
Syntax
iFeatureTable.DefaultRow() As iFeatureTableRow
Property Value
This is a read/write property whose value is an iFeatureTableRow.
Version
Introduced in version 2009
iFeatureTable.Delete Method
Parent Object: iFeatureTable
iFeatureTable Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
Description
Method that deletes the iFeatureTable. This converts a table driven iFeature into a standard
iFeature.
Syntax
iFeatureTable.Delete()
Version
Introduced in version 2010
iFeatureTable.ExcelWorkSheet Property
Parent Object: iFeatureTable
Description
Property that returns the Excel WorkSheet object representing the iFeature table. After making
changes to the Excel sheet, save and close the parent WorkBook object of the sheet in order for
Inventor to absorb the changes.
Syntax
iFeatureTable.ExcelWorkSheet() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
iFeatureTable.Export Method
Parent Object: iFeatureTable
Description
Exports the iFeatureTable to an external file.
iFeatureTable Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
Syntax
iFeatureTable.Export( FileName As String, FileFormat As FileFormatEnum, [Options] As
Variant )
Parameters
Name Type Description
FileName String
Input string that specifies the file name to export the iFeatureTable
to.
FileFormat FileFormatEnum Input FileFormatEnum that specifies the file format to save to.
Options Variant
Optional input NameValueMap object that specifies additional
options for export.
This is an optional argument whose default value is null.
Version
Introduced in version 2021
iFeatureTable.iFeatureTableColumns
Property
Parent Object: iFeatureTable
Description
Property returning the collection of columns in the table.
Syntax
iFeatureTable.iFeatureTableColumns() As iFeatureTableColumns
Property Value
This is a read only property whose value is an iFeatureTableColumns.
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
iFeatureTable Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureTable.iFeatureTableRows Property
Parent Object: iFeatureTable
Description
Property returning the collection of rows in the table.
Syntax
iFeatureTable.iFeatureTableRows() As iFeatureTableRows
Property Value
This is a read only property whose value is an iFeatureTableRows.
Version
Introduced in version 2009
iFeatureTable.Parent Property
Parent Object: iFeatureTable
Description
Property returning the parent object.
Syntax
iFeatureTable.Parent() As Object
Property Value
This is a read only property whose value is an Object.
iFeatureTable Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTable.Type Property
Parent Object: iFeatureTable
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTable.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTable Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6E8.htm 16/06/2025
iFeatureTableCell Object
Description
The iFeatureTableCell object represents a single cell within a table associated with a table driven
iFeature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
Column Property that returns the column this cell is within.
CustomCell Gets and sets whether this is a custom parameter cell.
CustomIncrement Gets and sets the increment value for custom parameter cell.
CustomRangeMaximum Gets and sets the maximum value for a custom parameter cell.
CustomRangeMinimum Gets and sets the minimum value for a custom parameter cell.
HasFormula Gets whether a formula (equation) was input into this cell via Excel.
IsValid Gets whether the contents of this cell are valid.
Parent Property that returns the parent iFeatureTable.
Row Property that returns the row this cell is within.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Gets and sets the value of the cell.
Accessed From
iFeatureTableColumn.Item, iFeatureTableRow.Item
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureTableCell Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableCell.Application Property
Parent Object: iFeatureTableCell
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTableCell.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureTableCell.Column Property
Parent Object: iFeatureTableCell
Description
Property that returns the column this cell is within.
Syntax
iFeatureTableCell.Column() As iFeatureTableColumn
Property Value
This is a read only property whose value is an iFeatureTableColumn.
Version
Introduced in version 2009
iFeatureTableCell Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableCell.CustomCell Property
Parent Object: iFeatureTableCell
Description
Gets and sets whether this is a custom parameter cell.
Syntax
iFeatureTableCell.CustomCell() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
iFeatureTableCell.CustomIncrement
Property
Parent Object: iFeatureTableCell
Description
Gets and sets the increment value for custom parameter cell.
Syntax
iFeatureTableCell.CustomIncrement() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iFeatureTableCell Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableCell.CustomRangeMaximum
Property
Parent Object: iFeatureTableCell
Description
Gets and sets the maximum value for a custom parameter cell.
Syntax
iFeatureTableCell.CustomRangeMaximum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iFeatureTableCell.CustomRangeMinimum
Property
Parent Object: iFeatureTableCell
Description
Gets and sets the minimum value for a custom parameter cell.
Syntax
iFeatureTableCell.CustomRangeMinimum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iFeatureTableCell Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableCell.HasFormula Property
Parent Object: iFeatureTableCell
Description
Gets whether a formula (equation) was input into this cell via Excel.
Syntax
iFeatureTableCell.HasFormula() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iFeatureTableCell.IsValid Property
Parent Object: iFeatureTableCell
Description
Gets whether the contents of this cell are valid.
Syntax
iFeatureTableCell.IsValid() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iFeatureTableCell.Parent Property
iFeatureTableCell Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
Parent Object: iFeatureTableCell
Description
Property that returns the parent iFeatureTable.
Syntax
iFeatureTableCell.Parent() As iFeatureTable
Property Value
This is a read only property whose value is an iFeatureTable.
Version
Introduced in version 2009
iFeatureTableCell.Row Property
Parent Object: iFeatureTableCell
Description
Property that returns the row this cell is within.
Syntax
iFeatureTableCell.Row() As iFeatureTableRow
Property Value
This is a read only property whose value is an iFeatureTableRow.
Samples
Name Description
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureTableCell Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableCell.Type Property
Parent Object: iFeatureTableCell
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTableCell.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTableCell.Value Property
Parent Object: iFeatureTableCell
Description
Gets and sets the value of the cell.
Syntax
iFeatureTableCell.Value() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
iFeatureTableCell Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableCell Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDFDF.htm 16/06/2025
iFeatureTableColumn Object
Description
The iFeatureTableColumn object represents a single column of a table associated with a table driven
iFeature.
Methods
Name Description
Delete Method that deletes the column from the table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Count Property that specifies the number of rows in the column.
CustomColumn Gets and sets whether this is a custom parameter column.
CustomIncrement Gets and sets the increment value for custom parameter column.
CustomRangeMaximum Gets and sets the maximum value for a custom parameter column.
CustomRangeMinimum Gets and sets the minimum value for a custom parameter column.
DisplayHeading
Property that returns the heading of the column as seen in the iFeature
author command.
FormattedHeading Property that returns the heading of the column in XML format.
Heading Property that returns the heading of the column in XML format.
Index
Property that returns the index of this column within the
iFeatureTableColumns collection where the first column has an index of
1.
Item Method that returns the specified iFeatureTableCell object from the row.
Key Read-write property that gets and sets the key order for the column.
Parent Property that returns the parent iFeatureTable.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureTableCell.Column, iFeatureTableColumns.Item
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
iFeatureTableColumn Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureTableColumn.Application Property
Parent Object: iFeatureTableColumn
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iFeatureTableColumn.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureTableColumn.Count Property
Parent Object: iFeatureTableColumn
Description
Property that specifies the number of rows in the column.
Syntax
iFeatureTableColumn.Count() As Long
Property Value
This is a read only property whose value is a Long.
iFeatureTableColumn Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableColumn.CustomColumn
Property
Parent Object: iFeatureTableColumn
Description
Gets and sets whether this is a custom parameter column.
Syntax
iFeatureTableColumn.CustomColumn() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
iFeatureTableColumn.CustomIncrement
Property
Parent Object: iFeatureTableColumn
Description
Gets and sets the increment value for custom parameter column.
Syntax
iFeatureTableColumn.CustomIncrement() As String
Property Value
This is a read/write property whose value is a String.
iFeatureTableColumn Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Version
Introduced in version 2011
iFeatureTableColumn.CustomRangeMaximum
Property
Parent Object: iFeatureTableColumn
Description
Gets and sets the maximum value for a custom parameter column.
Syntax
iFeatureTableColumn.CustomRangeMaximum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iFeatureTableColumn.CustomRangeMinimum
Property
Parent Object: iFeatureTableColumn
Description
Gets and sets the minimum value for a custom parameter column.
Syntax
iFeatureTableColumn.CustomRangeMinimum() As String
Property Value
This is a read/write property whose value is a String.
iFeatureTableColumn Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Version
Introduced in version 2011
iFeatureTableColumn.Delete Method
Parent Object: iFeatureTableColumn
Description
Method that deletes the column from the table.
Syntax
iFeatureTableColumn.Delete()
Version
Introduced in version 2011
iFeatureTableColumn.DisplayHeading
Property
Parent Object: iFeatureTableColumn
Description
Property that returns the heading of the column as seen in the iFeature author command.
Syntax
iFeatureTableColumn.DisplayHeading() As String
Property Value
This is a read only property whose value is a String.
Samples
Name Description
Place table driven
iFeature
This program demonstrates the placement of a table driven iFeature in a
part.
iFeatureTableColumn Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Changing row of table
driven iFeature
This program demonstrates the edit of a table driven iFeature to change
which row of the table is being used to drive the iFeature.
Version
Introduced in version 2009
iFeatureTableColumn.FormattedHeading
Property
Parent Object: iFeatureTableColumn
Description
Property that returns the heading of the column in XML format.
Syntax
iFeatureTableColumn.FormattedHeading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureTableColumn.Heading Property
Parent Object: iFeatureTableColumn
Description
Property that returns the heading of the column in XML format.
Syntax
iFeatureTableColumn.Heading() As String
Property Value
This is a read only property whose value is a String.
iFeatureTableColumn Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableColumn.Index Property
Parent Object: iFeatureTableColumn
Description
Property that returns the index of this column within the iFeatureTableColumns collection where the
first column has an index of 1.
Syntax
iFeatureTableColumn.Index() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iFeatureTableColumn.Item Property
Parent Object: iFeatureTableColumn
Description
Method that returns the specified iFeatureTableCell object from the row.
Syntax
iFeatureTableColumn.Item( Index As Variant ) As iFeatureTableCell
Property Value
This is a read only property whose value is an iFeatureTableCell.
Parameters
iFeatureTableColumn Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Name Type Description
Index Variant
Value that specifies the index of the iFeatureTableCell to return. The first row in the
column has an index of 1.
Version
Introduced in version 2009
iFeatureTableColumn.Key Property
Parent Object: iFeatureTableColumn
Description
Read-write property that gets and sets the key order for the column.
Syntax
iFeatureTableColumn.Key() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
iFeatureTableColumn.Parent Property
Parent Object: iFeatureTableColumn
Description
Property that returns the parent iFeatureTable.
Syntax
iFeatureTableColumn.Parent() As iFeatureTable
Property Value
This is a read only property whose value is an iFeatureTable.
iFeatureTableColumn Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableColumn.Type Property
Parent Object: iFeatureTableColumn
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTableColumn.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTableColumn Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF636.htm 16/06/2025
iFeatureTableColumns Object
Description
The iFeatureTableColumns collection object provides access to the columns of an iFeature table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Returns the specified iFeatureTableColumn object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureTable.iFeatureTableColumns
Version
Introduced in version 2009
iFeatureTableColumns.Application Property
Parent Object: iFeatureTableColumns
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTableColumns.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeatureTableColumns Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1297.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableColumns.Count Property
Parent Object: iFeatureTableColumns
Description
Property that specifies the number of items in the collection.
Syntax
iFeatureTableColumns.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
iFeatureTableColumns.Item Property
Parent Object: iFeatureTableColumns
Description
Returns the specified iFeatureTableColumn object from the collection.
Syntax
iFeatureTableColumns.Item( Index As Variant ) As iFeatureTableColumn
Property Value
This is a read only property whose value is an iFeatureTableColumn.
Parameters
iFeatureTableColumns Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1297.htm 16/06/2025
Name Type Description
Index Variant Value that specifies the index of the iFeatureTableColumn to return.
Version
Introduced in version 2009
iFeatureTableColumns.Type Property
Parent Object: iFeatureTableColumns
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTableColumns.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTableColumns Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1297.htm 16/06/2025
iFeatureTableRow Object
Description
The iFeatureTableRow object represents a single row of a table associated with a table driven
iFeature.
Methods
Name Description
Copy
Method that creates a new row with all cell values equal to the original row with the
exception of columns whose values must be unique for each row. These are automatically
modified to be unique using the same behavior that you see when inserting a new row in
the user-interface.
Delete Method that deletes the row from the table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of columns in the row.
Index
Property that returns the index of this row within the iFeatureTableRows
collection where the first row has an index of 1.
Item Method that returns the specified iFeatureTableCell object from the row.
MemberName Property that returns the name that identifies this row.
Parent Property that returns the parent iFeatureTable.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureDefinition.ActiveTableRow, iFeatureTable.DefaultRow, iFeatureTableCell.Row,
iFeatureTableRow.Copy, iFeatureTableRows.Item
Version
Introduced in version 2009
iFeatureTableRow.Application Property
Parent Object: iFeatureTableRow
iFeatureTableRow Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTableRow.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
iFeatureTableRow.Copy Method
Parent Object: iFeatureTableRow
Description
Method that creates a new row with all cell values equal to the original row with the exception of
columns whose values must be unique for each row. These are automatically modified to be
unique using the same behavior that you see when inserting a new row in the user-interface.
Syntax
iFeatureTableRow.Copy() As iFeatureTableRow
Version
Introduced in version 2010
iFeatureTableRow.Count Property
Parent Object: iFeatureTableRow
Description
Property that specifies the number of columns in the row.
iFeatureTableRow Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
Syntax
iFeatureTableRow.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
iFeatureTableRow.Delete Method
Parent Object: iFeatureTableRow
Description
Method that deletes the row from the table.
Syntax
iFeatureTableRow.Delete()
Version
Introduced in version 2010
iFeatureTableRow.Index Property
Parent Object: iFeatureTableRow
Description
Property that returns the index of this row within the iFeatureTableRows collection where the first
row has an index of 1.
Syntax
iFeatureTableRow.Index() As Long
iFeatureTableRow Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iFeatureTableRow.Item Property
Parent Object: iFeatureTableRow
Description
Method that returns the specified iFeatureTableCell object from the row.
Syntax
iFeatureTableRow.Item( Index As Variant ) As iFeatureTableCell
Property Value
This is a read only property whose value is an iFeatureTableCell.
Parameters
Name Type Description
Index Variant
Specifies the index of the iFeatureTableCell to return. The first column in the row
has an index of 1. This can be either a numeric value indicating the index of the
item in the collection, a string indicating the title of a column header, or a
iFeatureTableColumn object. If an out of range index, a non-existent column
header title, or an invalid iFeatureTableColumn object is specified, an error occurs.
Version
Introduced in version 2009
iFeatureTableRow.MemberName Property
Parent Object: iFeatureTableRow
iFeatureTableRow Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
Description
Property that returns the name that identifies this row.
Syntax
iFeatureTableRow.MemberName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
iFeatureTableRow.Parent Property
Parent Object: iFeatureTableRow
Description
Property that returns the parent iFeatureTable.
Syntax
iFeatureTableRow.Parent() As iFeatureTable
Property Value
This is a read only property whose value is an iFeatureTable.
Version
Introduced in version 2009
iFeatureTableRow.Type Property
Parent Object: iFeatureTableRow
Description
iFeatureTableRow Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTableRow.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTableRow Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2C0B.htm 16/06/2025
iFeatureTableRows Object
Description
The iFeatureTableRows collection object provides access to the rows of an iFeature table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Method that returns the specified iFeatureTableRow object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeatureTable.iFeatureTableRows
Version
Introduced in version 2009
iFeatureTableRows.Application Property
Parent Object: iFeatureTableRows
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTableRows.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeatureTableRows Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42EE.htm 16/06/2025
Version
Introduced in version 2009
iFeatureTableRows.Count Property
Parent Object: iFeatureTableRows
Description
Property that specifies the number of items in the collection.
Syntax
iFeatureTableRows.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
iFeatureTableRows.Item Property
Parent Object: iFeatureTableRows
Description
Method that returns the specified iFeatureTableRow object from the collection.
Syntax
iFeatureTableRows.Item( Index As Variant ) As iFeatureTableRow
Property Value
This is a read only property whose value is an iFeatureTableRow.
Parameters
iFeatureTableRows Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42EE.htm 16/06/2025
Name Type Description
Index Variant
Input Long or String value that specifies the iFeatureTableRow to return. If a Long
is input then it is the index of the item to return. If a String is input then it must
match the member name of one of the rows. If the index is out of range or the
name does not exist a failure will occur.
Version
Introduced in version 2009
iFeatureTableRows.Type Property
Parent Object: iFeatureTableRows
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTableRows.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
iFeatureTableRows Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh42EE.htm 16/06/2025
iFeatureTemplateDescriptor Object
Description
The iFeatureTemplateDescriptor object describes the iFeature file that was used to create the iFeature.
Methods
Name Description
DelayReplaceAll
Method that flags the ReferenceComponent corresponding to the iFeature as being out of date. The
next time this part is opened a message will be displayed to the user notifying them that the iFeature is
out of date and allowing them to update it using the file specified.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
InternalName Gets the Internal Name (a GUID) for this document.
LastKnownSourceFileName
Property that returns the name of the iFeature file (.ide) used to create this
iFeatureTemplateDescriptor.
Parent Property that returns the parent ComponentDefinition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iFeature.iFeatureTemplateDescriptor, iFeatureProxy.iFeatureTemplateDescriptor, iFeatureTemplateDescriptors.Item,
PunchToolFeature.iFeatureTemplateDescriptor, PunchToolFeatureProxy.iFeatureTemplateDescriptor
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.Application Property
Parent Object: iFeatureTemplateDescriptor
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iFeatureTemplateDescriptor.Application() As Object
Property Value
This is a read only property whose value is an Object.
iFeatureTemplateDescriptor Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F21.htm 16/06/2025
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.DelayReplaceAll Method
Parent Object: iFeatureTemplateDescriptor
Description
Method that flags the ReferenceComponent corresponding to the iFeature as being out of date. The next time this part is
opened a message will be displayed to the user notifying them that the iFeature is out of date and allowing them to update
it using the file specified.
Syntax
iFeatureTemplateDescriptor.DelayReplaceAll( NewSourceFilename As String )
Parameters
Name Type Description
NewSourceFilename String
Input String value that specifies the name of the file to use during the replacement of the
iFeatureTemplateDescriptor.
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.InternalName Property
Parent Object: iFeatureTemplateDescriptor
Description
Gets the Internal Name (a GUID) for this document.
Syntax
iFeatureTemplateDescriptor.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.LastKnownSourceFileName
Property
iFeatureTemplateDescriptor Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F21.htm 16/06/2025
Parent Object: iFeatureTemplateDescriptor
Description
Property that returns the name of the iFeature file (.ide) used to create this iFeatureTemplateDescriptor.
Syntax
iFeatureTemplateDescriptor.LastKnownSourceFileName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.Parent Property
Parent Object: iFeatureTemplateDescriptor
Description
Property that returns the parent ComponentDefinition object.
Syntax
iFeatureTemplateDescriptor.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5.3
iFeatureTemplateDescriptor.Type Property
Parent Object: iFeatureTemplateDescriptor
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTemplateDescriptor.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
iFeatureTemplateDescriptor Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F21.htm 16/06/2025
Version
Introduced in version 5.3
iFeatureTemplateDescriptor Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F21.htm 16/06/2025
iFeatureTemplateDescriptors Object
Description
The iFeatureTemplateDescriptors collection object provides access to all of the objects in a
document.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified iFeatureTemplateDescriptor object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
ReferenceComponents.iFeatureTemplateDescriptors
Version
Introduced in version 5.3
iFeatureTemplateDescriptors.Application
Property
Parent Object: iFeatureTemplateDescriptors
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iFeatureTemplateDescriptors.Application() As Object
iFeatureTemplateDescriptors Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh77BA.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
iFeatureTemplateDescriptors.Count Property
Parent Object: iFeatureTemplateDescriptors
Description
Property that returns the number of items in this collection.
Syntax
iFeatureTemplateDescriptors.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
iFeatureTemplateDescriptors.Item Property
Parent Object: iFeatureTemplateDescriptors
Description
Returns the specified iFeatureTemplateDescriptor object from the collection.
Syntax
iFeatureTemplateDescriptors.Item( Index As Long ) As iFeatureTemplateDescriptor
iFeatureTemplateDescriptors Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh77BA.htm 16/06/2025
Property Value
This is a read only property whose value is an iFeatureTemplateDescriptor.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the to return.
Version
Introduced in version 5.3
iFeatureTemplateDescriptors.Type Property
Parent Object: iFeatureTemplateDescriptors
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iFeatureTemplateDescriptors.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
iFeatureTemplateDescriptors Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh77BA.htm 16/06/2025
iPartMember Object
Derived from: ReferenceComponent Object
Description
The iPartMember object provides access to the iPart.
Methods
Name Description
BreakLinkToFactory
Method that breaks the link to the parent factory and converts the iPart
member to a derived part.
BreakLinkToFile
Method that breaks the connection of the derived component with the part
or assembly from which it was created. When the link is broken the
ReferencedFile property will return Nothing.
ChangeRow
Method that changes the row in the iPartTable that this custom
iPartMember represents. This method is only valid for custom members.
This can be determined using the CustomMember property.
Delete Method that deletes the ReferenceComponent.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is
returned.
AttributeSets
Property that returns the AttributeSets collection object
associated with this object.
CustomMember
Property that specifies whether this iPartMember represents a
custom member or a standard member. This property is True if
the iPartMember is a CustomMember.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsEmbedded
Property that returns whether the reference component refers to
an embedded document or a linked document.
LinkedToFile
Property that returns whether the derived component is still
linked to the base part or assembly document. If True, the link
still exists. If False, the link has been broken and the
ReferencedFile property will return Nothing.
Name Property that returns the component's name.
iPartMember Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Parent Property that returns the parent object.
ParentFactory
Property that returns the iPart factory that created this
iPartMember.
PrimaryBody
Property that returns the primary body as a solid body. The solid
body corresponds to the resultant body obtained from the
iPartFactory.
ReferencedDocumentDescriptor Property that returns the DocumentDescriptor object.
Row
Property that returns the row in the iPart table that this
iPartMember represents.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iPartFactory.CreateCustomMember, iPartFactory.CreateMember,
PartComponentDefinition.iPartMember, SheetMetalComponentDefinition.iPartMember
Version
Introduced in version 6
iPartMember.Application Property
Parent Object: iPartMember
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartMember.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartMember Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
iPartMember.AttributeSets Property
Parent Object: iPartMember
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iPartMember.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 11
iPartMember.BreakLinkToFactory Method
Parent Object: iPartMember
Description
Method that breaks the link to the parent factory and converts the iPart member to a derived part.
Syntax
iPartMember.BreakLinkToFactory()
Version
Introduced in version 11
iPartMember.BreakLinkToFile Method
Parent Object: iPartMember
Description
iPartMember Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Method that breaks the connection of the derived component with the part or assembly from
which it was created. When the link is broken the ReferencedFile property will return Nothing.
Syntax
iPartMember.BreakLinkToFile()
Version
Introduced in version 6
iPartMember.ChangeRow Method
Parent Object: iPartMember
Description
Method that changes the row in the iPartTable that this custom iPartMember represents. This
method is only valid for custom members. This can be determined using the CustomMember
property.
Syntax
iPartMember.ChangeRow( NewRow As Variant, [CustomInput] As Variant )
Parameters
Name Type Description
NewRow Variant
Input Variant that specifies the new row. The row index is specified either
by a Long (row index), a String (part identifier, i.e. ''[Height=1.000 in]
[Length=2.000 in][Radius=0.250 in]''), or an iPartTableRow object. If a
RowIndex is not specified, default row will be used to create the iPart
member.
CustomInput Variant
Optional input safearray of Strings that specifies the input to use for the
custom input. If the factory is a custom factory and this is not supplied the
default values for custom values are used. The custom input strings are
supplied in a column order. If the factory is not a custom factory this
argument is ignored.
This is an optional argument whose default value is null.
Version
Introduced in version 6
iPartMember Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
iPartMember.CustomMember Property
Parent Object: iPartMember
Description
Property that specifies whether this iPartMember represents a custom member or a standard
member. This property is True if the iPartMember is a CustomMember.
Syntax
iPartMember.CustomMember() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
iPartMember.Delete Method
Parent Object: iPartMember
Description
Method that deletes the ReferenceComponent.
Syntax
iPartMember.Delete()
Version
Introduced in version 6
iPartMember.GetReferenceKey Method
Parent Object: iPartMember
iPartMember Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
iPartMember.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
iPartMember.HealthStatus Property
Parent Object: iPartMember
Description
Property that returns an enum indicating the current state of the object.
Syntax
iPartMember.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
iPartMember Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember.IsEmbedded Property
Parent Object: iPartMember
Description
Property that returns whether the reference component refers to an embedded document or a
linked document.
Syntax
iPartMember.IsEmbedded() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 6
iPartMember.LinkedToFile Property
Parent Object: iPartMember
Description
Property that returns whether the derived component is still linked to the base part or assembly
document. If True, the link still exists. If False, the link has been broken and the ReferencedFile
property will return Nothing.
Syntax
iPartMember.LinkedToFile() As Boolean
Property Value
This is a read only property whose value is a Boolean.
iPartMember Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember.Name Property
Parent Object: iPartMember
Description
Property that returns the component's name.
Syntax
iPartMember.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iPartMember.Parent Property
Parent Object: iPartMember
Description
Property that returns the parent object.
Syntax
iPartMember.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
iPartMember Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember.ParentFactory Property
Parent Object: iPartMember
Description
Property that returns the iPart factory that created this iPartMember.
Syntax
iPartMember.ParentFactory() As iPartFactory
Property Value
This is a read only property whose value is an iPartFactory.
Version
Introduced in version 6
iPartMember.PrimaryBody Property
Parent Object: iPartMember
Description
Property that returns the primary body as a solid body. The solid body corresponds to the resultant
body obtained from the iPartFactory.
Syntax
iPartMember.PrimaryBody() As ReferenceFeature
Property Value
This is a read only property whose value is a ReferenceFeature.
iPartMember Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember.ReferencedDocumentDescriptor
Property
Parent Object: iPartMember
Description
Property that returns the DocumentDescriptor object.
Syntax
iPartMember.ReferencedDocumentDescriptor() As DocumentDescriptor
Property Value
This is a read only property whose value is a DocumentDescriptor.
Version
Introduced in version 11
iPartMember.Row Property
Parent Object: iPartMember
Description
Property that returns the row in the iPart table that this iPartMember represents.
Syntax
iPartMember.Row() As iPartTableRow
Property Value
This is a read only property whose value is an iPartTableRow.
iPartMember Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember.SetEndOfPart Method
Parent Object: iPartMember
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
iPartMember.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this reference component. A value of True indicates before and
False indicates after.
Version
Introduced in version 7
iPartMember.Type Property
Parent Object: iPartMember
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartMember.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
iPartMember Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
Version
Introduced in version 6
iPartMember Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8F09.htm 16/06/2025
iPartTableCell Object
Description
The iPartTableCell object represents an individual cell in the iPart factory table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
Column
Property that returns the index of this cell within the parent
iPartTableColumn.
CustomCell Gets and sets whether this is a custom parameter cell.
CustomIncrement Gets and sets the increment value for custom parameter cell.
CustomRangeMaximum Gets and sets the maximum value for a custom parameter.
CustomRangeMinimum Gets and sets the minimum value for a custom parameter.
HasFormula
Property that returns whether a formula (equation) was input into this
cell via Excel. Such cells show with a red background in the user
interface and are not editable.
IsValid
Property that returns whether the contents of this cell are valid. Invalid
cells show with a yellow background in the user interface.
Parent Property that returns the parent iPartTableRow object.
Row
Property that returns the index of this cell within the parent
iPartTableRow.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Gets and sets the value of the cell.
Accessed From
iPartTableColumn.Item, iPartTableRow.Item
Version
Introduced in version 6
iPartTableCell.Application Property
Parent Object: iPartTableCell
iPartTableCell Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartTableCell.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartTableCell.Column Property
Parent Object: iPartTableCell
Description
Property that returns the index of this cell within the parent iPartTableColumn.
Syntax
iPartTableCell.Column() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iPartTableCell.CustomCell Property
Parent Object: iPartTableCell
iPartTableCell Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Description
Gets and sets whether this is a custom parameter cell.
Syntax
iPartTableCell.CustomCell() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
iPartTableCell.CustomIncrement Property
Parent Object: iPartTableCell
Description
Gets and sets the increment value for custom parameter cell.
Syntax
iPartTableCell.CustomIncrement() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iPartTableCell.CustomRangeMaximum
Property
Parent Object: iPartTableCell
iPartTableCell Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Description
Gets and sets the maximum value for a custom parameter.
Syntax
iPartTableCell.CustomRangeMaximum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iPartTableCell.CustomRangeMinimum
Property
Parent Object: iPartTableCell
Description
Gets and sets the minimum value for a custom parameter.
Syntax
iPartTableCell.CustomRangeMinimum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iPartTableCell.HasFormula Property
Parent Object: iPartTableCell
iPartTableCell Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Description
Property that returns whether a formula (equation) was input into this cell via Excel. Such cells
show with a red background in the user interface and are not editable.
Syntax
iPartTableCell.HasFormula() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iPartTableCell.IsValid Property
Parent Object: iPartTableCell
Description
Property that returns whether the contents of this cell are valid. Invalid cells show with a yellow
background in the user interface.
Syntax
iPartTableCell.IsValid() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
iPartTableCell.Parent Property
Parent Object: iPartTableCell
iPartTableCell Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Description
Property that returns the parent iPartTableRow object.
Syntax
iPartTableCell.Parent() As iPartFactory
Property Value
This is a read only property whose value is an iPartFactory.
Version
Introduced in version 6
iPartTableCell.Row Property
Parent Object: iPartTableCell
Description
Property that returns the index of this cell within the parent iPartTableRow.
Syntax
iPartTableCell.Row() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iPartTableCell.Type Property
Parent Object: iPartTableCell
Description
iPartTableCell Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartTableCell.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartTableCell.Value Property
Parent Object: iPartTableCell
Description
Gets and sets the value of the cell.
Syntax
iPartTableCell.Value() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
iPartTableCell Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA88D.htm 16/06/2025
iPartTableColumn Object
Description
The iPartTableColumn object represents a column in the iPart factory table.
Methods
Name Description
Delete
Method that deletes this column in the factory. The "Member" and "Part Number"
columns cannot be deleted.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
CustomColumn Gets and sets whether this is a custom parameter column.
CustomIncrement Gets and sets the increment value for custom parameter columns.
CustomRangeMaximum Gets and sets the maximum value for a custom parameter.
CustomRangeMinimum Gets and sets the minimum value for a custom parameter.
DisplayHeading Property that returns the localized heading of the column.
FormattedHeading Property that returns the heading of the column in XML format.
Heading Property that returns the heading of the column.
Index
Property that returns the index of this column within the iPart factory
table.
Item
Returns the specified iPartTableCell object from the collection. This is
the default property of the iPartTableColumn object.
Key Gets and sets the key order for the column.
Parent Property that returns the parent iPartFactory object.
ReferencedDataType Property that returns the data type contained in the column.
ReferencedObject
Property that returns the object referenced by the column. For instance,
if the column references a fillet feature suppression, the corresponding
FilletFeature object is returned. Similarly, if a file property is
referenced, the corresponding Property object is returned.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iPartFactory.DisplayStyleColumn, iPartFactory.FileNameColumn, iPartFactory.MaterialColumn,
iPartTableColumns.Item
iPartTableColumn Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 6
iPartTableColumn.Application Property
Parent Object: iPartTableColumn
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartTableColumn.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartTableColumn.Count Property
Parent Object: iPartTableColumn
Description
Property that returns the number of items in this collection.
Syntax
iPartTableColumn.Count() As Long
Property Value
This is a read only property whose value is a Long.
iPartTableColumn Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 6
iPartTableColumn.CustomColumn Property
Parent Object: iPartTableColumn
Description
Gets and sets whether this is a custom parameter column.
Syntax
iPartTableColumn.CustomColumn() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
iPartTableColumn.CustomIncrement
Property
Parent Object: iPartTableColumn
Description
Gets and sets the increment value for custom parameter columns.
Syntax
iPartTableColumn.CustomIncrement() As String
Property Value
This is a read/write property whose value is a String.
iPartTableColumn Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 2011
iPartTableColumn.CustomRangeMaximum
Property
Parent Object: iPartTableColumn
Description
Gets and sets the maximum value for a custom parameter.
Syntax
iPartTableColumn.CustomRangeMaximum() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
iPartTableColumn.CustomRangeMinimum
Property
Parent Object: iPartTableColumn
Description
Gets and sets the minimum value for a custom parameter.
Syntax
iPartTableColumn.CustomRangeMinimum() As String
Property Value
This is a read/write property whose value is a String.
iPartTableColumn Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 2011
iPartTableColumn.Delete Method
Parent Object: iPartTableColumn
Description
Method that deletes this column in the factory. The "Member" and "Part Number" columns cannot
be deleted.
Syntax
iPartTableColumn.Delete()
Version
Introduced in version 2011
iPartTableColumn.DisplayHeading Property
Parent Object: iPartTableColumn
Description
Property that returns the localized heading of the column.
Syntax
iPartTableColumn.DisplayHeading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
iPartTableColumn Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
iPartTableColumn.FormattedHeading
Property
Parent Object: iPartTableColumn
Description
Property that returns the heading of the column in XML format.
Syntax
iPartTableColumn.FormattedHeading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iPartTableColumn.Heading Property
Parent Object: iPartTableColumn
Description
Property that returns the heading of the column.
Syntax
iPartTableColumn.Heading() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
iPartTableColumn Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
iPartTableColumn.Index Property
Parent Object: iPartTableColumn
Description
Property that returns the index of this column within the iPart factory table.
Syntax
iPartTableColumn.Index() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iPartTableColumn.Item Property
Parent Object: iPartTableColumn
Description
Returns the specified iPartTableCell object from the collection. This is the default property of the
iPartTableColumn object.
Syntax
iPartTableColumn.Item( Index As Variant ) As iPartTableCell
Property Value
This is a read only property whose value is an iPartTableCell.
Parameters
Name Type Description
Index Variant
Value that specifies the iPartTableCell to return. The first cell in the column has in
index of 1. If an out-of-range index is input, an error occurs.
iPartTableColumn Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 6
iPartTableColumn.Key Property
Parent Object: iPartTableColumn
Description
Gets and sets the key order for the column.
Syntax
iPartTableColumn.Key() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
iPartTableColumn.Parent Property
Parent Object: iPartTableColumn
Description
Property that returns the parent iPartFactory object.
Syntax
iPartTableColumn.Parent() As iPartFactory
Property Value
This is a read only property whose value is an iPartFactory.
iPartTableColumn Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Version
Introduced in version 6
iPartTableColumn.ReferencedDataType
Property
Parent Object: iPartTableColumn
Description
Property that returns the data type contained in the column.
Syntax
iPartTableColumn.ReferencedDataType() As iComponentColumnTypeEnum
Property Value
This is a read only property whose value is an iComponentColumnTypeEnum.
Version
Introduced in version 2011
iPartTableColumn.ReferencedObject
Property
Parent Object: iPartTableColumn
Description
Property that returns the object referenced by the column. For instance, if the column references a
fillet feature suppression, the corresponding FilletFeature object is returned. Similarly, if a file
property is referenced, the corresponding Property object is returned.
Syntax
iPartTableColumn.ReferencedObject() As Object
iPartTableColumn Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
iPartTableColumn.Type Property
Parent Object: iPartTableColumn
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartTableColumn.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartTableColumn Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCC41.htm 16/06/2025
iPartTableColumns Object
Description
The iPartTableColumns collection object provides access to all existing objects in the iPart factory
table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item
Returns the specified iPartTableColumn object from the collection. This is the
default property of the iPartTableColumns collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iPartFactory.TableColumns
Version
Introduced in version 6
iPartTableColumns.Application Property
Parent Object: iPartTableColumns
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartTableColumns.Application() As Object
iPartTableColumns Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE651.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartTableColumns.Count Property
Parent Object: iPartTableColumns
Description
Property that returns the number of items in the collection.
Syntax
iPartTableColumns.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iPartTableColumns.Item Property
Parent Object: iPartTableColumns
Description
Returns the specified iPartTableColumn object from the collection. This is the default property of
the iPartTableColumns collection object.
Syntax
iPartTableColumns.Item( Index As Long ) As iPartTableColumn
iPartTableColumns Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE651.htm 16/06/2025
Property Value
This is a read only property whose value is an iPartTableColumn.
Parameters
Name Type Description
Index Long
Value that specifies the index of the iPartTableColumn to return. The first column
has in index of 1. If an out-of-range index is input, an error occurs.
Version
Introduced in version 6
iPartTableColumns.Type Property
Parent Object: iPartTableColumns
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartTableColumns.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartTableColumns Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE651.htm 16/06/2025
iPartTableRow Object
Description
The iPartTableRow object represents a row in the iPart factory table.
Methods
Name Description
Copy Method that creates a new row with all values equal to the original row.
Delete Method that deletes this row in the factory.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
Count Property that returns the number of items in the collection.
Index Property that returns the index of this row within the iPart factory table.
IsPartNameBasedOnMemberName
Gets whether the member's filename is based on the member name or
an explicitly set filename.
Item
Returns the specified iPartTableCell object from the collection. This is
the default property of the iPartTableRow object.
MemberName
Property that returns the member name corresponding to this row in the
iPart table.
Parent Property that returns the parent iPartFactory object.
PartName Gets the filename corresponding to this row in the iPart table.
PartNameModifiable
Property that returns whether the name of the document corresponding
to this member can be modified. This property also returns False if the
corresponding cell in Excel contains a formula.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iPartFactory.DefaultRow, iPartMember.Row, iPartTableRow.Copy, iPartTableRows.Item
Version
Introduced in version 6
iPartTableRow.Application Property
iPartTableRow Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Parent Object: iPartTableRow
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
iPartTableRow.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartTableRow.AttributeSets Property
Parent Object: iPartTableRow
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
iPartTableRow.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
iPartTableRow.Copy Method
Parent Object: iPartTableRow
Description
Method that creates a new row with all values equal to the original row.
iPartTableRow Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Syntax
iPartTableRow.Copy( [NewMemberName] As String ) As iPartTableRow
Parameters
Name Type Description
NewMemberName String
Optional input string that specifies the member name for the new row. If not
specified, a member name is automatically generated.
This is an optional argument whose default value is """".
Version
Introduced in version 2008
iPartTableRow.Count Property
Parent Object: iPartTableRow
Description
Property that returns the number of items in the collection.
Syntax
iPartTableRow.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
iPartTableRow.Delete Method
Parent Object: iPartTableRow
Description
Method that deletes this row in the factory.
Syntax
iPartTableRow.Delete()
iPartTableRow Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Version
Introduced in version 11
iPartTableRow.GetReferenceKey Method
Parent Object: iPartTableRow
Description
Method that generates and returns the reference key for this entity.
Syntax
iPartTableRow.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To obtain the
entity at a later time using the reference key you use the BindKeyToObject method of the object. The
ReferenceKeyManager object is obtained using the ReferenceKeyManager property of the Document object.
Version
Introduced in version 2009
iPartTableRow.Index Property
Parent Object: iPartTableRow
Description
Property that returns the index of this row within the iPart factory table.
iPartTableRow Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Syntax
iPartTableRow.Index() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
iPartTableRow.IsPartNameBasedOnMemberName
Property
Parent Object: iPartTableRow
Description
Gets whether the member's filename is based on the member name or an explicitly set filename.
Syntax
iPartTableRow.IsPartNameBasedOnMemberName() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
iPartTableRow.Item Property
Parent Object: iPartTableRow
Description
Returns the specified iPartTableCell object from the collection. This is the default property of the
iPartTableRow object.
Syntax
iPartTableRow.Item( Index As Variant ) As iPartTableCell
iPartTableRow Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Property Value
This is a read only property whose value is an iPartTableCell.
Parameters
Name Type Description
Index Variant
Value that specifies the iPartTableCell to return. The first cell in the row has in index of 1. If
an out of range index is input, an error occurs.
Version
Introduced in version 6
iPartTableRow.MemberName Property
Parent Object: iPartTableRow
Description
Property that returns the member name corresponding to this row in the iPart table.
Syntax
iPartTableRow.MemberName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 11
iPartTableRow.Parent Property
Parent Object: iPartTableRow
Description
Property that returns the parent iPartFactory object.
Syntax
iPartTableRow.Parent() As iPartFactory
iPartTableRow Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Property Value
This is a read only property whose value is an iPartFactory.
Version
Introduced in version 6
iPartTableRow.PartName Property
Parent Object: iPartTableRow
Description
Gets the filename corresponding to this row in the iPart table.
Syntax
iPartTableRow.PartName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 6
iPartTableRow.PartNameModifiable Property
Parent Object: iPartTableRow
Description
Property that returns whether the name of the document corresponding to this member can be modified. This
property also returns False if the corresponding cell in Excel contains a formula.
Syntax
iPartTableRow.PartNameModifiable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
iPartTableRow Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
Version
Introduced in version 11
iPartTableRow.Type Property
Parent Object: iPartTableRow
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartTableRow.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartTableRow Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh860.htm 16/06/2025
iPartTableRows Object
Description
TheiPartTableRows collection object provides access to all existing objects in the iPart factory
table.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item
Returns the specified iPartTableRow object from the collection. This is the default
property of the iPartTableRows collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
iPartFactory.TableRows
Version
Introduced in version 6
iPartTableRows.Application Property
Parent Object: iPartTableRows
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
iPartTableRows.Application() As Object
iPartTableRows Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh26A6.htm 16/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
iPartTableRows.Count Property
Parent Object: iPartTableRows
Description
Property that returns the number of items in the collection.
Syntax
iPartTableRows.Count() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
Adding iPart occurrences to an
assembly
This sample demonstrates adding iPart occurrences to an
assembly.
Version
Introduced in version 6
iPartTableRows.Item Property
Parent Object: iPartTableRows
Description
Returns the specified iPartTableRow object from the collection. This is the default property of the
iPartTableRows collection object.
iPartTableRows Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh26A6.htm 16/06/2025
Syntax
iPartTableRows.Item( Index As Long ) As iPartTableRow
Property Value
This is a read only property whose value is an iPartTableRow.
Parameters
Name Type Description
Index Long
Input Variant value that specifies the iPartTableRow to return. The input can be
either an Integer value or a string. In the case of an Integer, the value specifies the
row where the first row has in index of 1. If a string is input it should be in a part
identifier format (i.e. ''[Height=1.000 in][Length=2.000 in][Radius=0.250 in]''). If the
part specified does not exist an error occurs. This index value is not the same as the
index value indicated in the user interface dialog. Rows in the dialog may be reordered.
Version
Introduced in version 6
iPartTableRows.Type Property
Parent Object: iPartTableRows
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
iPartTableRows.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
iPartTableRows Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh26A6.htm 16/06/2025