NameValueMap Object
Description
The NameValueMap object. This object provides context-specific information, usually the context
in which an event occurred. For more information, see the Event Context Information article in the
overview section.
Methods
Name Description
Add Add a value associated to the specified key name.
Clear Removes all objects from the map.
Insert Insert a name value pair into the name value map with specified location.
Remove Removes the specified object from the map.
Properties
Name Description
Count Property that returns the count of name - value pairs in the map.
Item Gets the value at the specified index number or key name.
Name Property that returns the name associated with the specified integer index.
Value
Gets and sets the value of the item associated with the specified name. If the item with the
specified name does not exist, it is added to the map.
Accessed From
AssemblyDocument.GetSelectedObject, ControlDefinitionEvents.FireOnCommandInputs,
ControlDefinitionEvents.OnCommandInputs, DSValueGraph.GetSegmentInterpolationType,
FileDialog.OptionValues, OnFaceCurve.Faces, OnFaceCurveProxy.Faces,
PartDocument.GetSelectedObject, RigidBodyJoint.GetJointData,
SurfaceBodyDefinition.CreateTransientSurfaceBody, TransientObjects.CreateNameValueMap
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Open a Catia file using
the Catia Translator
Sample
This sample demonstrates how open an Catia file using the Catia
translator add-in.
Open an NX file suing
the NX Translator
Sample
This sample demonstrates how open an NX file using the NX translator
add-in.
NameValueMap Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Open Rhino Translator
Sample
This sample demonstrates how to opening a Rhino file using the Rhino
translator add-in.
Open an STL file using
the STL Translator
Sample
This sample demonstrates how open an STL file using the STL
translator add-in.
Create assembly
occurrence with
representations
This sample demonstrates how to create an assembly occurrence by
specifying various representations.
Save as DWF Translator
Sample
This sample demonstrates how to save a DWF file using the DWF
translator add-in.
Save as DWG Translator
Sample
This sample demonstrates how to save a DWG file using the DWG
translator add-in.
Save as DXF Translator
Sample
This sample demonstrates how to save a DXF file using the DXF
translator add-in.
Save as IGES Translator
Sample
This sample demonstrates how to save a IGES file using the IGES
translator add-in.
Save as PDF Translator
Sample
This sample demonstrates how to save a PDF file using the PDF
translator add-in.
Save as STEP Translator
Sample
This sample demonstrates how to save a STEP file using the STEP
translator add-in.
Transient solid body
creation
The following sample demonstrates the creation of a transient solid
block body. The newly created body is then displayed using client
graphics in a part.
Transient surface body
creation
The following sample demonstrates the creation of a transient surface
body consisting of a single rectangular face. The body is created in
transient space and then copied over to a part document as a base
feature.
Export to DWF This sample demonstrates publishing of Inventor files in DWF format.
Export to DWG This sample uses the DWG Translator Addin to publish to DWG.
Export to DXF This sample uses the DXF Translator Addin to publish to DXF.
Export to IGES This sample demonstrates exporting of Inventor files in IGES format.
Export to STEP This sample demonstrates exporting of Inventor files in STEP format.
Export to PDF This sample demonstrates exporting of Inventor files in PDF format.
Version
Introduced in version 4
NameValueMap.Add Method
Parent Object: NameValueMap
Description
Add a value associated to the specified key name.
NameValueMap Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Syntax
NameValueMap.Add( Name As String, Value As Variant )
Parameters
Name Type Description
Name String Input String that specifies the name of the key.
Value Variant Input Variant value that specifies the value of the attribute.
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Adding Representation views
This sample demonstrates how to create a base view by
specifying various representations.
Create flat pattern drawing view
This sample demonstrates the creation of a flat pattern base
view in a drawing.
Create base view with
representations
This sample demonstrates how to create a base view by
specifying various representations.
Create assembly occurrence with
representations
This sample demonstrates how to create an assembly
occurrence by specifying various representations.
Save as DWF Translator Sample
This sample demonstrates how to save a DWF file using the
DWF translator add-in.
Save as DWG Translator Sample
This sample demonstrates how to save a DWG file using the
DWG translator add-in.
Save as DXF Translator Sample
This sample demonstrates how to save a DXF file using the
DXF translator add-in.
Save as IGES Translator Sample
This sample demonstrates how to save a IGES file using the
IGES translator add-in.
Save as PDF Translator Sample
This sample demonstrates how to save a PDF file using the
PDF translator add-in.
Save as STEP Translator Sample
This sample demonstrates how to save a STEP file using the
STEP translator add-in.
Export to DWF
This sample demonstrates publishing of Inventor files in DWF
format.
Version
Introduced in version 4
NameValueMap.Clear Method
Parent Object: NameValueMap
NameValueMap Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Description
Removes all objects from the map.
Syntax
NameValueMap.Clear()
Version
Introduced in version 2008
NameValueMap.Count Property
Parent Object: NameValueMap
Description
Property that returns the count of name - value pairs in the map.
Syntax
NameValueMap.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
NameValueMap.Insert Method
Parent Object: NameValueMap
Description
Insert a name value pair into the name value map with specified location.
NameValueMap Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Syntax
NameValueMap.Insert( Name As String, Value As Variant, [TargetIndex] As Variant,
[InsertBefore] As Boolean )
Parameters
Name Type Description
Name String Input String that specifies the name of the key.
Value Variant Input Variant value that specifies the value of the attribute.
TargetIndex Variant
Optional input an index that specifies the existing name value pair next to
which the new name value pair will be inserted. This can either be a
numeric value indicating the index of an existing name value pair, or it can
be a string indicating the name of an existing name value pair in the
NameValueMap. If this is not specified, the new name value pair will be
added at the end.
This is an optional argument whose default value is null.
InsertBefore Boolean
Optional input Boolean indicating if the name value pair should be inserted
before or after the target index. If not specified, a default value of True is
used. This argument is ignored if the value of TargetIndex is not specified.
This is an optional argument whose default value is True.
Version
Introduced in version 2012
NameValueMap.Item Property
Parent Object: NameValueMap
Description
Gets the value at the specified index number or key name.
Syntax
NameValueMap.Item( Index As Variant ) As Variant
Property Value
This is a read only property whose value is a Variant.
NameValueMap Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Parameters
Name Type Description
Index Variant Input Variant that specifies the index of the value to return.
Version
Introduced in version 4
NameValueMap.Name Property
Parent Object: NameValueMap
Description
Property that returns the name associated with the specified integer index.
Syntax
NameValueMap.Name( Index As Long ) As String
Property Value
This is a read only property whose value is a String.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 5.3
NameValueMap.Remove Method
Parent Object: NameValueMap
Description
Removes the specified object from the map.
NameValueMap Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
Syntax
NameValueMap.Remove( Index As Variant )
Parameters
Name Type Description
Index Variant
Version
Introduced in version 2008
NameValueMap.Value Property
Parent Object: NameValueMap
Description
Gets and sets the value of the item associated with the specified name. If the item with the
specified name does not exist, it is added to the map.
Syntax
NameValueMap.Value( Name As String ) As Variant
Property Value
This is a read/write property whose value is a Variant.
Parameters
Name Type Description
Name String
Samples
Name Description
Open a Catia file using the Catia
Translator Sample
This sample demonstrates how open an Catia file using the
Catia translator add-in.
Open an NX file suing the NX
Translator Sample
This sample demonstrates how open an NX file using the
NX translator add-in.
Open Rhino Translator Sample
NameValueMap Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
This sample demonstrates how to opening a Rhino file using
the Rhino translator add-in.
Open an STL file using the STL
Translator Sample
This sample demonstrates how open an STL file using the
STL translator add-in.
Save as DWF Translator Sample
This sample demonstrates how to save a DWF file using the
DWF translator add-in.
Save as DWG Translator Sample
This sample demonstrates how to save a DWG file using the
DWG translator add-in.
Save as DXF Translator Sample
This sample demonstrates how to save a DXF file using the
DXF translator add-in.
Save as IGES Translator Sample
This sample demonstrates how to save a IGES file using the
IGES translator add-in.
Save as PDF Translator Sample
This sample demonstrates how to save a PDF file using the
PDF translator add-in.
Save as STEP Translator Sample
This sample demonstrates how to save a STEP file using the
STEP translator add-in.
Export to DWF
This sample demonstrates publishing of Inventor files in
DWF format.
Export to DWG
This sample uses the DWG Translator Addin to publish to
DWG.
Export to DXF
This sample uses the DXF Translator Addin to publish to
DXF.
Export to IGES
This sample demonstrates exporting of Inventor files in
IGES format.
Export to STEP
This sample demonstrates exporting of Inventor files in
STEP format.
Export to PDF
This sample demonstrates exporting of Inventor files in PDF
format.
Version
Introduced in version 4
NameValueMap Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2310.htm 16/06/2025
NativeBrowserNodeDefinition Object
Description
The BrowserNodeDefinition object contains the definition of a node in the browser.
Properties
Name Description
AdditionalDisplayState Gets and sets the additional display state of browsernodes that use this definition.
AdditionalStateIconToolTipText Gets and sets additional state icon tool tip text on a existing definition object.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
BuiltIn Specifies if the node is a standard Autodesk Inventor node or not.
DisplayState Gets and sets the display state of browsernodes that use this definition.
ExpandedIcon Gets the expanded icon on a existing definition object.
Icon Gets the icon on a existing definition object.
Label Gets the label of the BrowserNode.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OverrideExpandedIcon Gets and sets expanded icon override on a existing definition object.
OverrideIcon Gets and sets icon override on a existing definition object.
OverrideStateIcon Gets and sets state icon override on a existing definition object.
Parent Gets the parent object from whom this object can logically be reached.
StateIconToolTipText Gets and sets state icon tool tip text on a existing definition object.
ToolTipText Gets and sets tool tip text on a existing definition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BrowserPanes.GetNativeBrowserNodeDefinition, BrowserPanes.GetNativeBrowserNodeDefinitionWithOptions
Samples
Name Description
Navigation between
browser and data
This sample demonstrates the navigation between a browser node and it's corresponding data model object
and vice versa. This sample creates a work plane, finds its browser node and gets the work plane object back
from the browser node.
Version
Introduced in version 8
NativeBrowserNodeDefinition.AdditionalDisplayState
Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets the additional display state of browsernodes that use this definition.
Syntax
NativeBrowserNodeDefinition.AdditionalDisplayState() As BrowserNodeDisplayStateEnum
NativeBrowserNodeDefinition Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
Property Value
This is a read/write property whose value is a BrowserNodeDisplayStateEnum.
Version
Introduced in version 11
NativeBrowserNodeDefinition.AdditionalStateIconToolTipText
Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets additional state icon tool tip text on a existing definition object.
Syntax
NativeBrowserNodeDefinition.AdditionalStateIconToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
NativeBrowserNodeDefinition.Application Property
Parent Object: NativeBrowserNodeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
NativeBrowserNodeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
NativeBrowserNodeDefinition.BuiltIn Property
Parent Object: NativeBrowserNodeDefinition
Description
NativeBrowserNodeDefinition Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
Specifies if the node is a standard Autodesk Inventor node or not.
Syntax
NativeBrowserNodeDefinition.BuiltIn() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 8
NativeBrowserNodeDefinition.DisplayState Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets the display state of browsernodes that use this definition.
Syntax
NativeBrowserNodeDefinition.DisplayState() As BrowserNodeDisplayStateEnum
Property Value
This is a read/write property whose value is a BrowserNodeDisplayStateEnum.
Version
Introduced in version 9
NativeBrowserNodeDefinition.ExpandedIcon Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets the expanded icon on a existing definition object.
Syntax
NativeBrowserNodeDefinition.ExpandedIcon() As IPictureDisp
Property Value
This is a read only property whose value is an IPictureDisp.
Version
Introduced in version 8
NativeBrowserNodeDefinition.Icon Property
Parent Object: NativeBrowserNodeDefinition
NativeBrowserNodeDefinition Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
Description
Gets the icon on a existing definition object.
Syntax
NativeBrowserNodeDefinition.Icon() As IPictureDisp
Property Value
This is a read only property whose value is an IPictureDisp.
Version
Introduced in version 8
NativeBrowserNodeDefinition.Label Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets the label of the BrowserNode.
Syntax
NativeBrowserNodeDefinition.Label() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
NativeBrowserNodeDefinition.NativeObject Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
NativeBrowserNodeDefinition.NativeObject() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
NativeBrowserNodeDefinition Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
NativeBrowserNodeDefinition.OverrideExpandedIcon
Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets expanded icon override on a existing definition object.
Syntax
NativeBrowserNodeDefinition.OverrideExpandedIcon() As ClientNodeResource
Property Value
This is a read/write property whose value is a ClientNodeResource.
Version
Introduced in version 9
NativeBrowserNodeDefinition.OverrideIcon Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets icon override on a existing definition object.
Syntax
NativeBrowserNodeDefinition.OverrideIcon() As ClientNodeResource
Property Value
This is a read/write property whose value is a ClientNodeResource.
Version
Introduced in version 8
NativeBrowserNodeDefinition.OverrideStateIcon Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets state icon override on a existing definition object.
Syntax
NativeBrowserNodeDefinition.OverrideStateIcon() As ClientNodeResource
Property Value
This is a read/write property whose value is a ClientNodeResource.
NativeBrowserNodeDefinition Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
Version
Introduced in version 2022
NativeBrowserNodeDefinition.Parent Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
NativeBrowserNodeDefinition.Parent() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 8
NativeBrowserNodeDefinition.StateIconToolTipText Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets state icon tool tip text on a existing definition object.
Syntax
NativeBrowserNodeDefinition.StateIconToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
NativeBrowserNodeDefinition.ToolTipText Property
Parent Object: NativeBrowserNodeDefinition
Description
Gets and sets tool tip text on a existing definition object.
Syntax
NativeBrowserNodeDefinition.ToolTipText() As String
NativeBrowserNodeDefinition Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
NativeBrowserNodeDefinition.Type Property
Parent Object: NativeBrowserNodeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NativeBrowserNodeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
NativeBrowserNodeDefinition Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F9C.htm 16/06/2025
NonLinearEdgeWorkPointDef Object
Description
Object that allows you to get and set the information that specifies a work point using a non-linear
edge.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Edge Property that returns a non-linear Edge object.
Parent Property that returns the parent WorkPoint object.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 11
NonLinearEdgeWorkPointDef.Application
Property
Parent Object: NonLinearEdgeWorkPointDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
NonLinearEdgeWorkPointDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
NonLinearEdgeWorkPointDef Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7C6B.htm 16/06/2025
Version
Introduced in version 11
NonLinearEdgeWorkPointDef.Edge Property
Parent Object: NonLinearEdgeWorkPointDef
Description
Property that returns a non-linear Edge object.
Syntax
NonLinearEdgeWorkPointDef.Edge() As Edge
Property Value
This is a read only property whose value is an Edge.
Version
Introduced in version 11
NonLinearEdgeWorkPointDef.Parent
Property
Parent Object: NonLinearEdgeWorkPointDef
Description
Property that returns the parent WorkPoint object.
Syntax
NonLinearEdgeWorkPointDef.Parent() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
NonLinearEdgeWorkPointDef Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7C6B.htm 16/06/2025
Version
Introduced in version 11
NonLinearEdgeWorkPointDef.Type Property
Parent Object: NonLinearEdgeWorkPointDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NonLinearEdgeWorkPointDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
NonLinearEdgeWorkPointDef Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7C6B.htm 16/06/2025
NonParametricBaseFeature Object
Derived from: PartFeature Object
Description
The NonParametricBaseFeature object represents the feature that is created when a foreign file is translated into an
Autodesk Inventor part file. If the foreign file defines a solid, it is read in and used to define the base feature.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which dependent
objects are also deleted.
DeleteFaces
Edit Edits the base feature.
ExitEdit Exits the edit context of the base feature.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns False if
no condition has been applied.
Redefine Method that redefines the geometric contents of a non-parametric base feature.
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
ExtendedName Read-only property that returns the full feature name including any extended information.
Faces
Property that returns a collection that provides access to all of the faces of the feature.
The Faces collection object will return the faces that still currently exist in the part. For
example, if a face has been consumed by additional modeling operations it will not be
returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputSurfaceBodies Property that returns the underlying SurfaceBody object associated with this feature.
IsAssociative
Property that indicates whether this contents of this base feature are associatively copied
from bodies and faces in the assembly.
IsComposite
NonParametricBaseFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Property that indicates if the non-parametric base feature is a composite of multiple
solids and/or surfaces or is a single solid or surface.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy
property returns the owning feature.
IsSolid Indicates whether this base feature is a solid or surface.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list is empty for
features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular
box that is guaranteed to enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
NonParametricBaseFeatureProxy.NativeObject, NonParametricBaseFeatures.Add,
NonParametricBaseFeatures.AddByDefinition, NonParametricBaseFeatures.Item
Derived Classes
NonParametricBaseFeatureProxy
Samples
Name Description
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body consisting of a
single rectangular face. The body is created in transient space and then copied over to a part
document as a base feature.
Create primitive
BRep
This sample demonstrates the creation of primitive (solid) BRep.
Version
Introduced in version 5
NonParametricBaseFeature.Adaptive Property
Parent Object: NonParametricBaseFeature
Description
Gets and sets whether this feature is adaptive or not.
NonParametricBaseFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Syntax
NonParametricBaseFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
NonParametricBaseFeature.Appearance Property
Parent Object: NonParametricBaseFeature
Description
Gets and sets the current appearance of the feature.
Syntax
NonParametricBaseFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
NonParametricBaseFeature.AppearanceSourceType
Property
Parent Object: NonParametricBaseFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
NonParametricBaseFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
NonParametricBaseFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Version
Introduced in version 2014
NonParametricBaseFeature.Application Property
Parent Object: NonParametricBaseFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
NonParametricBaseFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
NonParametricBaseFeature.AttributeSets Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
NonParametricBaseFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
NonParametricBaseFeature.ConsumeInputs Property
Parent Object: NonParametricBaseFeature
NonParametricBaseFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
NonParametricBaseFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeature.Delete Method
Parent Object: NonParametricBaseFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
NonParametricBaseFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within
the feature should be deleted. If the feature being deleted is not a
sketch based feature this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent features
should be deleted. If there are no dependent features this
argument is ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features
should be deleted. If there are no dependent work features this
argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 5
NonParametricBaseFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
NonParametricBaseFeature.DeleteFaces Method
Parent Object: NonParametricBaseFeature
Description
Syntax
NonParametricBaseFeature.DeleteFaces( Faces As ObjectCollection )
Parameters
Name Type Description
Faces ObjectCollection
Version
Introduced in version 11
NonParametricBaseFeature.Edit Method
Parent Object: NonParametricBaseFeature
Description
Edits the base feature.
Syntax
NonParametricBaseFeature.Edit()
Version
Introduced in version 11
NonParametricBaseFeature.ExitEdit Method
Parent Object: NonParametricBaseFeature
Description
Exits the edit context of the base feature.
Syntax
NonParametricBaseFeature.ExitEdit()
NonParametricBaseFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Version
Introduced in version 11
NonParametricBaseFeature.ExtendedName Property
Parent Object: NonParametricBaseFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
NonParametricBaseFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
NonParametricBaseFeature.Faces Property
Parent Object: NonParametricBaseFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
Syntax
NonParametricBaseFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5
NonParametricBaseFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
NonParametricBaseFeature.FeatureDimensions
Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
NonParametricBaseFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
NonParametricBaseFeature.GetReferenceKey
Method
Parent Object: NonParametricBaseFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
NonParametricBaseFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 5
NonParametricBaseFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
NonParametricBaseFeature.GetSuppressionCondition
Method
Parent Object: NonParametricBaseFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been
applied.
Syntax
NonParametricBaseFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
Introduced in version 11
NonParametricBaseFeature.HealthStatus Property
Parent Object: NonParametricBaseFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
NonParametricBaseFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
NonParametricBaseFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Version
Introduced in version 5
NonParametricBaseFeature.InputSurfaceBodies
Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the underlying SurfaceBody object associated with this feature.
Syntax
NonParametricBaseFeature.InputSurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2009
NonParametricBaseFeature.IsAssociative Property
Parent Object: NonParametricBaseFeature
Description
Property that indicates whether this contents of this base feature are associatively copied from bodies and faces in
the assembly.
Syntax
NonParametricBaseFeature.IsAssociative() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2011
NonParametricBaseFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
NonParametricBaseFeature.IsComposite Property
Parent Object: NonParametricBaseFeature
Description
Property that indicates if the non-parametric base feature is a composite of multiple solids and/or surfaces or is a
single solid or surface.
Syntax
NonParametricBaseFeature.IsComposite() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
NonParametricBaseFeature.IsOwnedByFeature
Property
Parent Object: NonParametricBaseFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Syntax
NonParametricBaseFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
NonParametricBaseFeature.IsSolid Property
Parent Object: NonParametricBaseFeature
Description
NonParametricBaseFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Indicates whether this base feature is a solid or surface.
Syntax
NonParametricBaseFeature.IsSolid() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeature.Name Property
Parent Object: NonParametricBaseFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
NonParametricBaseFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
NonParametricBaseFeature.OwnedBy Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Syntax
NonParametricBaseFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
NonParametricBaseFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Version
Introduced in version 2008
NonParametricBaseFeature.Parameters Property
Parent Object: NonParametricBaseFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
NonParametricBaseFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
NonParametricBaseFeature.Parent Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the parent of the feature.
Syntax
NonParametricBaseFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5
NonParametricBaseFeature.Participants Property
Parent Object: NonParametricBaseFeature
NonParametricBaseFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
NonParametricBaseFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
NonParametricBaseFeature.RangeBox Property
Parent Object: NonParametricBaseFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Syntax
NonParametricBaseFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5
NonParametricBaseFeature.Redefine Method
Parent Object: NonParametricBaseFeature
Description
Method that redefines the geometric contents of a non-parametric base feature.
Syntax
NonParametricBaseFeature.Redefine( BRepEntities As Object )
NonParametricBaseFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Parameters
Name Type Description
BRepEntities Object
Input Object that defines the entity(s) that will replace the existing entity(s). The input for
this argument must currently be a SurfaceBody object.
Version
Introduced in version 2009
NonParametricBaseFeature.RemoveParticipant
Method
Parent Object: NonParametricBaseFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
NonParametricBaseFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed. An
error occurs if the input ComponentOccurrence is not a participant.
Version
Introduced in version 10
NonParametricBaseFeature.SetAffectedBodies
Method
Parent Object: NonParametricBaseFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
NonParametricBaseFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
NonParametricBaseFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
NonParametricBaseFeature.SetEndOfPart Method
Parent Object: NonParametricBaseFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
NonParametricBaseFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this
work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 6
NonParametricBaseFeature.SetSuppressionCondition
Method
Parent Object: NonParametricBaseFeature
Description
Method that sets the suppression condition for the feature.
Syntax
NonParametricBaseFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be
checked for feature suppression.
ComparisonType ComparisonTypeEnum
NonParametricBaseFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
ComparisonTypeEnum that specifies the type of comparison. Valid
types are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter
value. This can either be a string, a value or a parameter object. If a
value is input, the database units for the units defined by the parameter
are used. For instance, if the parameter defines length units, the value is
assumed to be in centimeters. If a string is input, the units can be
specified as part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 11
NonParametricBaseFeature.Shared Property
Parent Object: NonParametricBaseFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
NonParametricBaseFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeature.Suppressed Property
Parent Object: NonParametricBaseFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
NonParametricBaseFeature.Suppressed() As Boolean
NonParametricBaseFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
NonParametricBaseFeature.SurfaceBodies Property
Parent Object: NonParametricBaseFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
NonParametricBaseFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
NonParametricBaseFeature.Type Property
Parent Object: NonParametricBaseFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NonParametricBaseFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
NonParametricBaseFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9543.htm 16/06/2025
NonParametricBaseFeatureDefinition Object
Description
The NonParametricBaseFeatureDefinition is a utility object used for creating, querying, and editing non-parametric base
features. A NonParametricBaseFeatureDefinition object can be created using the CreateDefinition method of the
NonParametricBaseFeatures collection object. They can also be obtained from existing NonParametricBaseFeature
objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
BRepEntities
Read-write property that defines the geometry to be used for creating the non-parametric base
feature.
DeleteOriginal Read-write property that defines if the original geometry in the construction environment is deleted.
IsAssociative
Read-write property that defines if the copied geometry should be associative to the original
geometry.
OutputType Read-write property that specifies the desired result type.
TargetOccurrence Read-write property that specifies the desired target Occurrence.
Accessed From
NonParametricBaseFeatures.CreateDefinition
Samples
Name Description
Body Imprinting
and matching the
results
This sample is intended to demonstrate a technique of finding the matching surfaces between the
original input bodies and output imprinted bodies. This relies on transient keys, which is a unique
ID associated with each B-Rep entity. A transient key is only good as long as the model is not
recomputed.
Associative body
copy
The following sample demonstrates copying bodies (associatively and non-associatively) across
parts in an assembly.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body consisting of a single
rectangular face. The body is created in transient space and then copied over to a part document as
a base feature.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.Application
Property
Parent Object: NonParametricBaseFeatureDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
NonParametricBaseFeatureDefinition Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE27.htm 16/06/2025
Syntax
NonParametricBaseFeatureDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.BRepEntities
Property
Parent Object: NonParametricBaseFeatureDefinition
Description
Read-write property that defines the geometry to be used for creating the non-parametric base feature.
Syntax
NonParametricBaseFeatureDefinition.BRepEntities() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Samples
Name Description
Body Imprinting
and matching the
results
This sample is intended to demonstrate a technique of finding the matching surfaces between the
original input bodies and output imprinted bodies. This relies on transient keys, which is a unique
ID associated with each B-Rep entity. A transient key is only good as long as the model is not
recomputed.
Associative body
copy
The following sample demonstrates copying bodies (associatively and non-associatively) across
parts in an assembly.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body consisting of a single
rectangular face. The body is created in transient space and then copied over to a part document as
a base feature.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.DeleteOriginal
Property
Parent Object: NonParametricBaseFeatureDefinition
NonParametricBaseFeatureDefinition Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE27.htm 16/06/2025
Description
Read-write property that defines if the original geometry in the construction environment is deleted.
Syntax
NonParametricBaseFeatureDefinition.DeleteOriginal() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.IsAssociative
Property
Parent Object: NonParametricBaseFeatureDefinition
Description
Read-write property that defines if the copied geometry should be associative to the original geometry.
Syntax
NonParametricBaseFeatureDefinition.IsAssociative() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Associative body
copy
The following sample demonstrates copying bodies (associatively and non-associatively) across
parts in an assembly.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.OutputType
Property
Parent Object: NonParametricBaseFeatureDefinition
Description
Read-write property that specifies the desired result type.
NonParametricBaseFeatureDefinition Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE27.htm 16/06/2025
Syntax
NonParametricBaseFeatureDefinition.OutputType() As BaseFeatureOutputTypeEnum
Property Value
This is a read/write property whose value is a BaseFeatureOutputTypeEnum.
Samples
Name Description
Body Imprinting
and matching the
results
This sample is intended to demonstrate a technique of finding the matching surfaces between the
original input bodies and output imprinted bodies. This relies on transient keys, which is a unique
ID associated with each B-Rep entity. A transient key is only good as long as the model is not
recomputed.
Associative body
copy
The following sample demonstrates copying bodies (associatively and non-associatively) across
parts in an assembly.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body consisting of a single
rectangular face. The body is created in transient space and then copied over to a part document as
a base feature.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition.TargetOccurrence
Property
Parent Object: NonParametricBaseFeatureDefinition
Description
Read-write property that specifies the desired target Occurrence.
Syntax
NonParametricBaseFeatureDefinition.TargetOccurrence() As ComponentOccurrence
Property Value
This is a read/write property whose value is a ComponentOccurrence.
Samples
Name Description
Associative body
copy
The following sample demonstrates copying bodies (associatively and non-associatively) across
parts in an assembly.
Version
Introduced in version 2011
NonParametricBaseFeatureDefinition Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE27.htm 16/06/2025
NonParametricBaseFeatureProxy Object
Derived from: NonParametricBaseFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
DeleteFaces
Edit Edits the base feature.
ExitEdit Exits the edit context of the base feature.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns False if no condition
has been applied.
Redefine Method that redefines the geometric contents of a non-parametric base feature.
RemoveParticipant
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
ConsumeInputs Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through. The
returned occurrence is the containing occurrence.
ExtendedName Read-only property that returns the full feature name including any extended information.
Faces
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputSurfaceBodies Property that returns the underlying SurfaceBody object associated with this feature.
IsAssociative
Property that indicates whether this contents of this base feature are associatively copied from bodies
and faces in the assembly.
IsComposite
Property that indicates if the non-parametric base feature is a composite of multiple solids and/or
surfaces or is a single solid or surface.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns
the owning feature.
IsSolid Indicates whether this base feature is a solid or surface.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
NonParametricBaseFeatureProxy Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list is empty for features in a
part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.Adaptive Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
NonParametricBaseFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.Appearance Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
NonParametricBaseFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
NonParametricBaseFeatureProxy Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
NonParametricBaseFeatureProxy.AppearanceSourceType
Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
NonParametricBaseFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
NonParametricBaseFeatureProxy.Application Property
Parent Object: NonParametricBaseFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
NonParametricBaseFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.AttributeSets Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
NonParametricBaseFeatureProxy.AttributeSets() As AttributeSets
NonParametricBaseFeatureProxy Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.ConsumeInputs Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
NonParametricBaseFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeatureProxy.ContainingOccurrence
Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is
the containing occurrence.
Syntax
NonParametricBaseFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.Delete Method
Parent Object: NonParametricBaseFeatureProxy
NonParametricBaseFeatureProxy Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
NonParametricBaseFeatureProxy.Delete( [RetainConsumedSketches] As Boolean, [RetainDependentFeaturesAndSketches]
As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within the feature
should be deleted. If the feature being deleted is not a sketch based feature this
argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent features should be deleted.
If there are no dependent features this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features should be
deleted. If there are no dependent work features this argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.DeleteFaces Method
Parent Object: NonParametricBaseFeatureProxy
Description
Syntax
NonParametricBaseFeatureProxy.DeleteFaces( Faces As ObjectCollection )
Parameters
Name Type Description
Faces ObjectCollection
Version
Introduced in version 11
NonParametricBaseFeatureProxy.Edit Method
Parent Object: NonParametricBaseFeatureProxy
Description
Edits the base feature.
NonParametricBaseFeatureProxy Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Syntax
NonParametricBaseFeatureProxy.Edit()
Version
Introduced in version 11
NonParametricBaseFeatureProxy.ExitEdit Method
Parent Object: NonParametricBaseFeatureProxy
Description
Exits the edit context of the base feature.
Syntax
NonParametricBaseFeatureProxy.ExitEdit()
Version
Introduced in version 11
NonParametricBaseFeatureProxy.ExtendedName Property
Parent Object: NonParametricBaseFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
NonParametricBaseFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
NonParametricBaseFeatureProxy.Faces Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object will return the
faces that still currently exist in the part. For example, if a face has been consumed by additional modeling operations it will not
be returned.
NonParametricBaseFeatureProxy Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Syntax
NonParametricBaseFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.FeatureDimensions
Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
NonParametricBaseFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
NonParametricBaseFeatureProxy.GetReferenceKey
Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
NonParametricBaseFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with any B-Rep
entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created
using the CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the
key context argument is not used and is ignored if provided.
NonParametricBaseFeatureProxy Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
This is an optional argument whose default value is 0.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.GetSuppressionCondition
Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
Syntax
NonParametricBaseFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be checked for feature
suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison, kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can
either be a string or a parameter object.
Version
Introduced in version 11
NonParametricBaseFeatureProxy.HealthStatus Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
NonParametricBaseFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
NonParametricBaseFeatureProxy Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Version
Introduced in version 9
NonParametricBaseFeatureProxy.InputSurfaceBodies
Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the underlying SurfaceBody object associated with this feature.
Syntax
NonParametricBaseFeatureProxy.InputSurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2009
NonParametricBaseFeatureProxy.IsAssociative Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that indicates whether this contents of this base feature are associatively copied from bodies and faces in the assembly.
Syntax
NonParametricBaseFeatureProxy.IsAssociative() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2011
NonParametricBaseFeatureProxy.IsComposite Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that indicates if the non-parametric base feature is a composite of multiple solids and/or surfaces or is a single solid or
surface.
NonParametricBaseFeatureProxy Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Syntax
NonParametricBaseFeatureProxy.IsComposite() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
NonParametricBaseFeatureProxy.IsOwnedByFeature
Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning feature.
Syntax
NonParametricBaseFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
NonParametricBaseFeatureProxy.IsSolid Property
Parent Object: NonParametricBaseFeatureProxy
Description
Indicates whether this base feature is a solid or surface.
Syntax
NonParametricBaseFeatureProxy.IsSolid() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeatureProxy Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
NonParametricBaseFeatureProxy.Name Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
NonParametricBaseFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.NativeObject Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
NonParametricBaseFeatureProxy.NativeObject() As NonParametricBaseFeature
Property Value
This is a read only property whose value is a NonParametricBaseFeature.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.OwnedBy Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature property returns
False.
Syntax
NonParametricBaseFeatureProxy.OwnedBy() As PartFeature
NonParametricBaseFeatureProxy Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
NonParametricBaseFeatureProxy.Parameters Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
NonParametricBaseFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
NonParametricBaseFeatureProxy.Parent Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
NonParametricBaseFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.Participants Property
Parent Object: NonParametricBaseFeatureProxy
Description
NonParametricBaseFeatureProxy Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
NonParametricBaseFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
NonParametricBaseFeatureProxy.RangeBox Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose this
object.
Syntax
NonParametricBaseFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.Redefine Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that redefines the geometric contents of a non-parametric base feature.
Syntax
NonParametricBaseFeatureProxy.Redefine( BRepEntities As Object )
Parameters
Name Type Description
BRepEntities Object
Input Object that defines the entity(s) that will replace the existing entity(s). The input for this argument
must currently be a SurfaceBody object.
NonParametricBaseFeatureProxy Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Version
Introduced in version 2009
NonParametricBaseFeatureProxy.RemoveParticipant
Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
NonParametricBaseFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed. An error occurs
if the input ComponentOccurrence is not a participant.
Version
Introduced in version 10
NonParametricBaseFeatureProxy.SetAffectedBodies
Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
NonParametricBaseFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
NonParametricBaseFeatureProxy.SetEndOfPart Method
Parent Object: NonParametricBaseFeatureProxy
NonParametricBaseFeatureProxy Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
NonParametricBaseFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this work feature.
A value of True indicates before and False indicates after.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.SetSuppressionCondition
Method
Parent Object: NonParametricBaseFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
NonParametricBaseFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be checked for feature
suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid types are
kEqualToComparison, kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison, kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can
either be a string, a value or a parameter object. If a value is input, the database units
for the units defined by the parameter are used. For instance, if the parameter defines
length units, the value is assumed to be in centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units, the current length units
of the document are used.
Version
Introduced in version 11
NonParametricBaseFeatureProxy.Shared Property
Parent Object: NonParametricBaseFeatureProxy
NonParametricBaseFeatureProxy Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
NonParametricBaseFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NonParametricBaseFeatureProxy.Suppressed Property
Parent Object: NonParametricBaseFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
NonParametricBaseFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
NonParametricBaseFeatureProxy.SurfaceBodies Property
Parent Object: NonParametricBaseFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
NonParametricBaseFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
NonParametricBaseFeatureProxy Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
NonParametricBaseFeatureProxy.Type Property
Parent Object: NonParametricBaseFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NonParametricBaseFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
NonParametricBaseFeatureProxy Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD7F9.htm 16/06/2025
NonParametricBaseFeatures Object
Description
The object represented the base solid that was created when a file was imported into Autodesk
Inventor.
Methods
Name Description
Add Method that adds a NonParametricBaseFeature to the collection.
AddByDefinition Method that creates a new NonParametricBaseFeature object.
CreateDefinition
Method that creates and returns a NonParametricBaseFeatureDefinition object.
This object is not a non-parametric base feature but contains the information
that defines one and be used to create a new non-parametric base feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified NonParametricBaseFeature object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.NonParametricBaseFeatures, SheetMetalFeatures.NonParametricBaseFeatures
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more flexible.
In order for the sample to be self-contained, it creates two parts on the fly that
will be used to demonstrate copying a body from one part to another. When
copying a body into a part, you provide the surface body and a matrix to define
its position in the new part. This sample creates a matrix based on the position
of these parts within an assembly.
Body Imprinting
and matching
the results
This sample is intended to demonstrate a technique of finding the matching
surfaces between the original input bodies and output imprinted bodies. This
relies on transient keys, which is a unique ID associated with each B-Rep entity.
A transient key is only good as long as the model is not recomputed.
NonParametricBaseFeatures Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
Imprint bodies
within an
assembly.
This sample demonstrates creating imprinted bodies from two selected
occurrences in an assembly.
Associative
body copy
The following sample demonstrates copying bodies (associatively and nonassociatively)
across parts in an assembly.
Transient
surface body
creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Create primitive
BRep
This sample demonstrates the creation of primitive (solid) BRep.
Version
Introduced in version 6
NonParametricBaseFeatures.Add Method
Parent Object: NonParametricBaseFeatures
Description
Method that adds a NonParametricBaseFeature to the collection.
Syntax
NonParametricBaseFeatures.Add( SurfaceBody As SurfaceBody, [Transform] As Variant ) As
NonParametricBaseFeature
Parameters
Name Type Description
SurfaceBody SurfaceBody
Input SurfaceBody to create the new NonParametricBaseFeature in
the collection.
Transform Variant
Optional input Variant that specifies the transformation for the new
NonParametricBaseFeature in the collection.
This is an optional argument whose default value is null.
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more
flexible. In order for the sample to be self-contained, it creates two parts on the
fly that will be used to demonstrate copying a body from one part to another.
NonParametricBaseFeatures Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
When copying a body into a part, you provide the surface body and a matrix to
define its position in the new part. This sample creates a matrix based on the
position of these parts within an assembly.
Imprint bodies
within an
assembly.
This sample demonstrates creating imprinted bodies from two selected
occurrences in an assembly.
Create primitive
BRep
This sample demonstrates the creation of primitive (solid) BRep.
Transient B-Rep
Ruled Surface
with Lines
Demonstrate creating a transient ruled surface. This sample uses all straight
line segments for each of the sections. A part document must be open.
Transient B-Rep
Ruled Surface
with Arc and
Line
Demonstrate creating a transient ruled surface. This sample uses straight line
segments for once section and an arc for the second. A part document must be
open.
Version
Introduced in version 6
NonParametricBaseFeatures.AddByDefinition
Method
Parent Object: NonParametricBaseFeatures
Description
Method that creates a new NonParametricBaseFeature object.
Syntax
NonParametricBaseFeatures.AddByDefinition( Definition As
NonParametricBaseFeatureDefinition ) As NonParametricBaseFeature
Parameters
Name Type Description
Definition NonParametricBaseFeatureDefinition
Input NonParametricBaseFeatureDefinition
object that defines all of the input required to
create a non-parametric base feature. A
NonParametricBaseFeatureDefinition object is
created using the CreateDefinition method of
the NonParametricBaseFeatures collection
object.
NonParametricBaseFeatures Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
Remarks
This method is very similar to the Copy Object command. A difference is that the use of this
method will only ever result in the creation of a single NonParametricBaseFeature object whereas
in some case the Copy Object command will create multiple base features. If you need to
reproduce these cases using the API you'll need to call this method multiple times, once for each
required base feature.
Samples
Name Description
Body Imprinting
and matching the
results
This sample is intended to demonstrate a technique of finding the matching
surfaces between the original input bodies and output imprinted bodies. This
relies on transient keys, which is a unique ID associated with each B-Rep
entity. A transient key is only good as long as the model is not recomputed.
Associative body
copy
The following sample demonstrates copying bodies (associatively and nonassociatively)
across parts in an assembly.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
NonParametricBaseFeatures.Application
Property
Parent Object: NonParametricBaseFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
NonParametricBaseFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
NonParametricBaseFeatures Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
Version
Introduced in version 6
NonParametricBaseFeatures.Count Property
Parent Object: NonParametricBaseFeatures
Description
Property that returns the number of items in this collection.
Syntax
NonParametricBaseFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
NonParametricBaseFeatures.CreateDefinition
Method
Parent Object: NonParametricBaseFeatures
Description
Method that creates and returns a NonParametricBaseFeatureDefinition object. This object is not a
non-parametric base feature but contains the information that defines one and be used to create a
new non-parametric base feature.
Syntax
NonParametricBaseFeatures.CreateDefinition() As NonParametricBaseFeatureDefinition
Samples
Name Description
NonParametricBaseFeatures Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
Body Imprinting
and matching the
results
This sample is intended to demonstrate a technique of finding the matching
surfaces between the original input bodies and output imprinted bodies. This
relies on transient keys, which is a unique ID associated with each B-Rep
entity. A transient key is only good as long as the model is not recomputed.
Associative body
copy
The following sample demonstrates copying bodies (associatively and nonassociatively)
across parts in an assembly.
Transient surface
body creation
The following sample demonstrates the creation of a transient surface body
consisting of a single rectangular face. The body is created in transient space
and then copied over to a part document as a base feature.
Version
Introduced in version 2011
NonParametricBaseFeatures.Item Property
Parent Object: NonParametricBaseFeatures
Description
Returns the specified NonParametricBaseFeature object from the collection.
Syntax
NonParametricBaseFeatures.Item( Index As Variant ) As NonParametricBaseFeature
Property Value
This is a read only property whose value is a NonParametricBaseFeature.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the NonParametricBaseFeature to return. This
can be either a numeric value indicating the index of the item in the collection or it
can be a string indicating the border definition's name. If an out-of-range index or
a name of a non-existent border definition is specified, an error occurs.
Version
Introduced in version 6
NonParametricBaseFeatures Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
NonParametricBaseFeatures.Type Property
Parent Object: NonParametricBaseFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NonParametricBaseFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
NonParametricBaseFeatures Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh14B.htm 16/06/2025
NormalToCurveWorkPlaneDef Object
Description
The NormalToCurveWorkPlaneDef object that allows you to get and set the information that
specifies a work plane defined as normal to a curve and through a point.
Methods
Name Description
GetData Method that returns all of the data defining a work plane defined by a curve and a point.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
CurveEntity
Property that returns the curve entity of a normal to curve defined work plane. This
object can be an Edge, 3D Sketch entity, or 2D Sketch entity.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Point
Property that returns the point of a normal to curve defined work plane. The point
can be a WorkPoint, Vertex, SketchPoint3D or SketchPoint object. The work plane
passes through the point.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef.Application
Property
Parent Object: NormalToCurveWorkPlaneDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
NormalToCurveWorkPlaneDef Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F33.htm 16/06/2025
Syntax
NormalToCurveWorkPlaneDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef.CurveEntity
Property
Parent Object: NormalToCurveWorkPlaneDef
Description
Property that returns the curve entity of a normal to curve defined work plane. This object can be
an Edge, 3D Sketch entity, or 2D Sketch entity.
Syntax
NormalToCurveWorkPlaneDef.CurveEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef.GetData
Method
Parent Object: NormalToCurveWorkPlaneDef
Description
NormalToCurveWorkPlaneDef Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F33.htm 16/06/2025
Method that returns all of the data defining a work plane defined by a curve and a point.
Syntax
NormalToCurveWorkPlaneDef.GetData( CurveEntity As Object, Point As Object )
Parameters
Name Type Description
CurveEntity Object
Output argument that returns the curve object used to define the
NormalToCurveWorkPlaneDef. This object can be an Edge, 3D Sketch
entity, or 2D Sketch entity.
Point Object
Output argument that returns the point object used to define the
NormalToCurveWorkPlaneDef. This object can be a WorkPoint, Vertex,
SketchPoint3D, or SketchPoint object.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef.Parent
Property
Parent Object: NormalToCurveWorkPlaneDef
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
NormalToCurveWorkPlaneDef.Parent() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F33.htm 16/06/2025
NormalToCurveWorkPlaneDef.Point
Property
Parent Object: NormalToCurveWorkPlaneDef
Description
Property that returns the point of a normal to curve defined work plane. The point can be a
WorkPoint, Vertex, SketchPoint3D or SketchPoint object. The work plane passes through the
point.
Syntax
NormalToCurveWorkPlaneDef.Point() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
NormalToCurveWorkPlaneDef.Type
Property
Parent Object: NormalToCurveWorkPlaneDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NormalToCurveWorkPlaneDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
NormalToCurveWorkPlaneDef Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F33.htm 16/06/2025
Version
Introduced in version 6
NormalToCurveWorkPlaneDef Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1F33.htm 16/06/2025
NormalToSurfaceWorkAxisDef Object
Description
Object that allows you to get and set the information that specifies a work axis defined normal to a
surface and through a point.
Methods
Name Description
GetData
Method that gets all of the data defining a work axis defined normal to a surface at a
point.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Parent Property that returns the parent WorkAxis object.
Point
Property that returns the point of a normal to surface defined work axis. The point
can be a WorkPoint, Vertex, SketchPoint3D or SketchPoint object. The work axis
passes through the point.
SurfaceEntity
Property that returns the surface entity of a normal to surface defined work axis.
This object can be a Face, WorkPlane, or PlanarSketch.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.Application
Property
Parent Object: NormalToSurfaceWorkAxisDef
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
NormalToSurfaceWorkAxisDef Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3924.htm 16/06/2025
Syntax
NormalToSurfaceWorkAxisDef.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.GetData
Method
Parent Object: NormalToSurfaceWorkAxisDef
Description
Method that gets all of the data defining a work axis defined normal to a surface at a point.
Syntax
NormalToSurfaceWorkAxisDef.GetData( Point As Object, SurfaceEntity As Object )
Parameters
Name Type Description
Point Object
Output object that represents a Point. This object can be a WorkPoint,
Vertex, SketchPoint3D, or SketchPoint object.
SurfaceEntity Object
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.Parent
Property
Parent Object: NormalToSurfaceWorkAxisDef
NormalToSurfaceWorkAxisDef Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3924.htm 16/06/2025
Description
Property that returns the parent WorkAxis object.
Syntax
NormalToSurfaceWorkAxisDef.Parent() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.Point
Property
Parent Object: NormalToSurfaceWorkAxisDef
Description
Property that returns the point of a normal to surface defined work axis. The point can be a
WorkPoint, Vertex, SketchPoint3D or SketchPoint object. The work axis passes through the point.
Syntax
NormalToSurfaceWorkAxisDef.Point() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.SurfaceEntity
Property
NormalToSurfaceWorkAxisDef Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3924.htm 16/06/2025
Parent Object: NormalToSurfaceWorkAxisDef
Description
Property that returns the surface entity of a normal to surface defined work axis. This object can
be a Face, WorkPlane, or PlanarSketch.
Syntax
NormalToSurfaceWorkAxisDef.SurfaceEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef.Type
Property
Parent Object: NormalToSurfaceWorkAxisDef
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NormalToSurfaceWorkAxisDef.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
NormalToSurfaceWorkAxisDef Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3924.htm 16/06/2025
NotebookOptions Object
Description
The NotebookOptions object provides access to properties that provide read and write access of the
notebook related application options. This is somewhat equivalent to the Notebook tab of the
Application Options dialog.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
ArrowColor Gets/Sets the color for arrows in design notes.
DisplayNoteIcons
Gets/Sets whether enables or disables displaying icons for design
notes in the graphics window.
DisplayNoteText
Gets/Sets whether enables or disables displaying text for design
notes.
KeepNotesOnDeletedObjects
Gets/Sets whether design notes associated with model geometry
should be retained after the geometry has been deleted.
NoteHighlightColor Gets/Sets the color for the highlighted component in note views.
TextBackgroundColor
Gets/Sets the background color for the comment boxes in design
notes.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Application.NotebookOptions, InventorServer.NotebookOptions,
InventorServerObject.NotebookOptions
Version
Introduced in version 11
NotebookOptions.Application Property
Parent Object: NotebookOptions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
NotebookOptions Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh52E5.htm 16/06/2025
Syntax
NotebookOptions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 11
NotebookOptions.ArrowColor Property
Parent Object: NotebookOptions
Description
Gets/Sets the color for arrows in design notes.
Syntax
NotebookOptions.ArrowColor() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 11
NotebookOptions.DisplayNoteIcons Property
Parent Object: NotebookOptions
Description
Gets/Sets whether enables or disables displaying icons for design notes in the graphics window.
Syntax
NotebookOptions.DisplayNoteIcons() As Boolean
NotebookOptions Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh52E5.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NotebookOptions.DisplayNoteText Property
Parent Object: NotebookOptions
Description
Gets/Sets whether enables or disables displaying text for design notes.
Syntax
NotebookOptions.DisplayNoteText() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NotebookOptions.KeepNotesOnDeletedObjects
Property
Parent Object: NotebookOptions
Description
Gets/Sets whether design notes associated with model geometry should be retained after the
geometry has been deleted.
Syntax
NotebookOptions.KeepNotesOnDeletedObjects() As Boolean
NotebookOptions Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh52E5.htm 16/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
NotebookOptions.NoteHighlightColor
Property
Parent Object: NotebookOptions
Description
Gets/Sets the color for the highlighted component in note views.
Syntax
NotebookOptions.NoteHighlightColor() As Color
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 11
NotebookOptions.TextBackgroundColor
Property
Parent Object: NotebookOptions
Description
Gets/Sets the background color for the comment boxes in design notes.
Syntax
NotebookOptions.TextBackgroundColor() As Color
NotebookOptions Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh52E5.htm 16/06/2025
Property Value
This is a read/write property whose value is a Color.
Version
Introduced in version 11
NotebookOptions.Type Property
Parent Object: NotebookOptions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
NotebookOptions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
NotebookOptions Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh52E5.htm 16/06/2025