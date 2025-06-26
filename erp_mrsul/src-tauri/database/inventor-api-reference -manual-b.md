BrowserPanes Object
Description
The BrowserPanes object provides access to the existing objects of the browser and allows you to create additional panes. See the
article in the overviews section.
Methods
Name Description
Add
Method that creates and returns a new BrowserPane object. The BrowserPane
created is one that is explicitly used to house ActiveX controls.
AddByManifest
Method that creates and returns a new BrowserPane object. The BrowserPane
created is one that is explicitly used to house un-registered ActiveX Controls.
AddTreeBrowserPane
Method that creates and returns a new BrowserPane object. The BrowserPane
created is one in which Inventor's BrowserTreeNodes can be instanced to
generate a completely customizable tree view.
CreateBrowserNodeDefinition
Method that creates a new The definition object can then be further used to
construct ClientBrowserNodes that make up the tree in a custom tree-browser
pane. The new ClientBrowserNodeDefinition is returned. Note that this node
definition object is constructed and has an identity within the 'name space' or
context of the entire owning document.
GetClientBrowserNodeDefinition Method that returns the specified ClientBrowserNodeDefinition.
GetNativeBrowserNodeDefinition
Method to obtain the NativeBrowserNodeDefinition object corresponding to a
data model object.Also see CreateNativeBrowserNodeDefinition for information
on creating a new client browser node definition.
GetNativeBrowserNodeDefinitionWithOptions
Method that returns the NativeBrowserNodeDefinition that corresponds to the
input object.
Properties
Name Description
ActivePane Property that returns the that is currently being displayed.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
BrowserPanesEvents Property that returns the events sink object for the BrowserPanes object.
ClientNodeResources
Property that returns the collection of ClientNodeResource objects. A ClientNodeResource holds the icons
necessary to define the open, closed and status images for all of the ClientBrowserNodes associated with
this document. The ClientNodeResources collection has a method that allows you to add a new set of
images that can then be used to create a new ClientBrowserNodeDefinition.
Count Property that returns the number of browser panes in the collection.
Item Returns the specified object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyDocument.BrowserPanes, Document.BrowserPanes, DrawingDocument.BrowserPanes, PartDocument.BrowserPanes,
PresentationDocument.BrowserPanes
Samples
Name Description
Add assembly
occurrences to a new
folder
Demonstrates assembly occurrences to a new folder
Demote occurence
This sample demonstrates how to demote a top level occurrence in an assembly into a new sub-assembly
occurrence.
Navigation between
browser and data
BrowserPanes Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
This sample demonstrates the navigation between a browser node and it's corresponding data model
object and vice versa. This sample creates a work plane, finds its browser node and gets the work plane
object back from the browser node.
Version
Introduced in version 5
BrowserPanes.ActivePane Property
Parent Object: BrowserPanes
Description
Property that returns the that is currently being displayed.
Syntax
BrowserPanes.ActivePane() As BrowserPane
Property Value
This is a read only property whose value is a BrowserPane.
Samples
Name Description
Add assembly
occurrences to a new
folder
Demonstrates assembly occurrences to a new folder
Navigation between
browser and data
This sample demonstrates the navigation between a browser node and it's corresponding data model
object and vice versa. This sample creates a work plane, finds its browser node and gets the work plane
object back from the browser node.
Version
Introduced in version 5
BrowserPanes.Add Method
Parent Object: BrowserPanes
Description
Method that creates and returns a new BrowserPane object. The BrowserPane created is one that is explicitly used to house
ActiveX controls.
Syntax
BrowserPanes.Add( Name As String, InternalName As String ) As BrowserPane
Parameters
Name Type Description
Name String Input String that specifies the name of the BrowserPane object. This is the name that will be displayed to the
user. The name must be unique with respect to the other browser panes currently created for the document.
It can be changed programmatically at any time, and can be localized. It can also be used as an index into
the BrowserPanes collection.
BrowserPanes Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
InternalName String
Input string that identifies the ActiveX control that will be displayed on the pane. This identifier can be
either the ProgID or the GUID of the control as a string, (including the braces "{ }"). This string will also be
used to uniquely identify the BrowserPane within the collection. This identifier string once provided cannot
be changed.
Version
Introduced in version 5
BrowserPanes.AddByManifest Method
Parent Object: BrowserPanes
Description
Method that creates and returns a new BrowserPane object. The BrowserPane created is one that is explicitly used to house unregistered
ActiveX Controls.
Syntax
BrowserPanes.AddByManifest( Name As String, InternalName As String, ManifestFileName As String ) As BrowserPane
Parameters
Name Type Description
Name String
Input string that specifies the name of the browser pane. This is the name that will be displayed to the
user. And thus is expected to be localized. The name must be unique with respect to the other browser
panes currently created for the document. It can be changed, programmatically, at any time. It may also
be used to index into the BrowserPanes collection.
InternalName String
Input string that uniquely identifies the application. Suggestions are to use the 'ProgID' of the Add-In
creating the pane or its CLSID in a string form, e.g. "{C9A6C580-3817-11D0-BE4E-
080036E87B02}", although any unique string is valid. If the Add-In is going to create more than one
such pane, you would want to further qualify the string by appending a suffix to the CLSID, say "{}:0"
and "{}:1", etc.
ManifestFileName String
Input the full filename of the manifest which defines the information of an un-registered ActiveX
control.
Sample manifest can be like below:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
< assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
< file name = "x64\SimpleMFCControl.ocx">
<typelib tlbid="{E230D8E9-C189-49AA-A932-01B5F43507EB}" version="1.0" helpdir=""/>
<comClass progid = "SIMPLEMFCCONTROL.SIMPLEMFCCONTROLCtrl.1" clsid="{50CCD357-
FA53-42B6-8B06-C5D6AB37CDBF}" threadingModel = "Apartment"/>
< /file>
< comInterfaceExternalProxyStub name="_DSIMPLEMFCCONTROLEvents" iid="{B1A2EFBEA44E-
4A40-A4CA-801685A6A624}" tlbid="{E230D8E9-C189-49AA-A932-01B5F43507EB}"
proxyStubClsid32="{00020420-0000-0000-C000-000000000046}"/>
< comInterfaceExternalProxyStub name="_DSIMPLEMFCCONTROL" iid="{EA9F39CD-0356-
4F7C-8DA8-DE913DB64D99}" tlbid="{E230D8E9-C189-49AA-A932-01B5F43507EB}"
proxyStubClsid32="{00020420-0000-0000-C000-000000000046}"/>
< /assembly>
Version
Introduced in version 2017
BrowserPanes Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
BrowserPanes.AddTreeBrowserPane Method
Parent Object: BrowserPanes
Description
Method that creates and returns a new BrowserPane object. The BrowserPane created is one in which Inventor's
BrowserTreeNodes can be instanced to generate a completely customizable tree view.
Syntax
BrowserPanes.AddTreeBrowserPane( Name As String, InternalName As String, TopNodeDefinition As
BrowserNodeDefinition ) As BrowserPane
Parameters
Name Type Description
Name String
Input string that specifies the name of the browser pane. This is the name that will
be displayed to the user. The name must be unique with respect to the other browser
panes currently created for the document. It can be changed programmatically at any
time, and can be localized. It can also be used as an index into the BrowserPanes
collection.
InternalName String
Input string that uniquely identifies the application. Suggestions are to use the
'ProgID' of the Add-In creating the pane or its CLSID in a string form, e.g.
"{C9A6C580-3817-11D0-BE4E-080036E87B02}", although any unique string is
valid. If the Add-In is going to create more than one such pane, you would want to
further qualify the string by appending a suffix to the CLSID, say "{}:0" and "{}:1",
etc.
TopNodeDefinition BrowserNodeDefinition
Input definition object that will be used to build the single topmost node that starts
the browser tree.
Version
Introduced in version 8
BrowserPanes.Application Property
Parent Object: BrowserPanes
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BrowserPanes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
BrowserPanes Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
BrowserPanes.BrowserPanesEvents Property
Parent Object: BrowserPanes
Description
Property that returns the events sink object for the BrowserPanes object.
Syntax
BrowserPanes.BrowserPanesEvents() As BrowserPanesEvents
Property Value
This is a read only property whose value is a BrowserPanesEvents.
Version
Introduced in version 9
BrowserPanes.ClientNodeResources Property
Parent Object: BrowserPanes
Description
Property that returns the collection of ClientNodeResource objects. A ClientNodeResource holds the icons necessary to define the
open, closed and status images for all of the ClientBrowserNodes associated with this document. The ClientNodeResources
collection has a method that allows you to add a new set of images that can then be used to create a new
ClientBrowserNodeDefinition.
Syntax
BrowserPanes.ClientNodeResources() As ClientNodeResources
Property Value
This is a read only property whose value is a ClientNodeResources.
Version
Introduced in version 8
BrowserPanes.Count Property
Parent Object: BrowserPanes
Description
Property that returns the number of browser panes in the collection.
Syntax
BrowserPanes.Count() As Long
BrowserPanes Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5
BrowserPanes.CreateBrowserNodeDefinition Method
Parent Object: BrowserPanes
Description
Method that creates a new The definition object can then be further used to construct ClientBrowserNodes that make up the tree in
a custom tree-browser pane. The new ClientBrowserNodeDefinition is returned. Note that this node definition object is
constructed and has an identity within the 'name space' or context of the entire owning document.
Syntax
BrowserPanes.CreateBrowserNodeDefinition( Label As String, Id As Long, Icon As ClientNodeResource, [ToolTipText] As
Variant, [ExpandedIcon] As Variant, [DisplayState] As Variant, [StateIconToolTipText] As Variant ) As
ClientBrowserNodeDefinition
Parameters
Name Type Description
Label String
Input string that specifies the label of the browser node. This label will be displayed
as the text of this resulting browser node.
Id Long
Input long that uniquely identifies the Client Browser Node Definition within the
scope of this Document.
Icon ClientNodeResource ClientNodeResource that specifies the bitmap pictures for the node.
ToolTipText Variant
Optional input string that specifies the tool tip to be displayed for the node.
This is an optional argument whose default value is null.
ExpandedIcon Variant
Optional input of a 16X16 pixel image. If this argument is not supplied then the
StandardIcon is used for the purpose when the corresponding BrowserNode is to be
displayed in an expanded state.
This is an optional argument whose default value is null.
DisplayState Variant
Optional input BrowserNodeDisplayStateEnum that specifies the display state to use
for the node.
This is an optional argument whose default value is null.
StateIconToolTipText Variant
Optional input string that specifies the tool tip to be displayed for the state icon.
This is an optional argument whose default value is null.
Version
Introduced in version 8
BrowserPanes.GetClientBrowserNodeDefinition Method
Parent Object: BrowserPanes
Description
BrowserPanes Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
Method that returns the specified ClientBrowserNodeDefinition.
Syntax
BrowserPanes.GetClientBrowserNodeDefinition( ClientId As String, Id As Long ) As ClientBrowserNodeDefinition
Parameters
Name Type Description
ClientId String Input string that specifies ClientId associated with the definition.
Id Long Input long that uniquely identifies the Client Browser Node Definition within the scope of this Document.
Version
Introduced in version 11
BrowserPanes.GetNativeBrowserNodeDefinition Method
Parent Object: BrowserPanes
Description
Method to obtain the NativeBrowserNodeDefinition object corresponding to a data model object.Also see
CreateNativeBrowserNodeDefinition for information on creating a new client browser node definition.
Syntax
BrowserPanes.GetNativeBrowserNodeDefinition( NativeObject As Object ) As NativeBrowserNodeDefinition
Parameters
Name Type Description
NativeObject Object The object for whom to obtain the NativeBrowserNodeDefinition.
Samples
Name Description
Navigation between
browser and data
This sample demonstrates the navigation between a browser node and it's corresponding data model object
and vice versa. This sample creates a work plane, finds its browser node and gets the work plane object
back from the browser node.
Version
Introduced in version 9
BrowserPanes.GetNativeBrowserNodeDefinitionWithOptions
Method
Parent Object: BrowserPanes
Description
Method that returns the NativeBrowserNodeDefinition that corresponds to the input object.
BrowserPanes Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
Syntax
BrowserPanes.GetNativeBrowserNodeDefinitionWithOptions( NativeObject As Object, [Options] As Variant ) As
NativeBrowserNodeDefinition
Parameters
Name Type Description
NativeObject Object Input object to return the definition for.
Options Variant
Optinoal input NameValueMap object to specify options for how to find the definition. Below are the valid
values:
Name = DepthFirst, Value = Boolean that indicates whether the search is depth first. If this is set to Ture
then it will search the browser nodes recursively in depth level, otherwise it will search the top browser
nodes first and then their children. If this is not specified it defaults to True.
This is an optional argument whose default value is null.
Version
Introduced in version 2020
BrowserPanes.Item Property
Parent Object: BrowserPanes
Description
Returns the specified object from the collection.
Syntax
BrowserPanes.Item( Index As Variant ) As BrowserPane
Property Value
This is a read only property whose value is a BrowserPane.
Parameters
Name Type Description
Index Variant
Input Variant that specifies the object within the collection to return. This can be either a Long to indicate the
index of the item within the collection or a String indicating the name of the . If there is no BrowserPane with this
name currently, the function further checks to see if the string supplied is an InternalName of any BrowserPane. If
no BrowserPane can be identified, a failure occurs.
Samples
Name Description
Demote
occurence
This sample demonstrates how to demote a top level occurrence in an assembly into a new sub-assembly
occurrence.
Version
Introduced in version 5
BrowserPanes Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
BrowserPanes.Type Property
Parent Object: BrowserPanes
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserPanes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
BrowserPanes Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBE7.htm 16/06/2025
BrowserPanesEvents Object
Description
Object providing event notification for browser events.
Events
Name Description
OnBrowserNodeActivate Event that is fired whenever a node is activated by the user.
OnBrowserNodeDeleteEntry Event that is fired whenever the user requests that a node be deleted.
OnBrowserNodeGetDisplayObjects
Event that is fired when a user requests that the objects represented by a browser
node be highlighted.
OnBrowserNodeLabelEdit Event that is fired whenever a node is renamed by the user.
OnBrowserNodesReorder Event that fires just before and after browser nodes are reordered.
Accessed From
BrowserPanes.BrowserPanesEvents
Version
Introduced in version 9
BrowserPanesEvents.OnBrowserNodeActivate Event
Parent Object: BrowserPanesEvents
Description
Event that is fired whenever a node is activated by the user.
Syntax
BrowserPanesEvents.OnBrowserNodeActivate( BrowserNodeDefinition As Object, Context As NameValueMap,
HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BrowserNodeDefinition Object
The ClientBrowserNodeDefinition associated with the node just
activated.
Context NameValueMap
This event provides additional information through the Context argument
as described below:
Name = “Browser Node”, Value = The BrowserNode object that the enduser
double-clicked on.
HandlingCode HandlingCodeEnum This argument is ignored for this event.
BrowserPanesEvents Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6590.htm 16/06/2025
Version
Introduced in version 9
BrowserPanesEvents.OnBrowserNodeDeleteEntry
Event
Parent Object: BrowserPanesEvents
Description
Event that is fired whenever the user requests that a node be deleted.
Syntax
BrowserPanesEvents.OnBrowserNodeDeleteEntry( BrowserNodeDefinition As Object, BeforeOrAfter As
EventTimingEnum, Context As NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BrowserNodeDefinition Object
The ClientBrowserNodeDefinition associated with the node the end-user
has right-clicked on.
BeforeOrAfter EventTimingEnum
When this value is kBefore you are able to control whether the Delete
command is available in the context menu or not by setting the
appropriate handling code. When this value is kAfter it signals that the
end-user has requested that this node and associated objects be deleted.
Context NameValueMap No context information is provided for this event.
HandlingCode HandlingCodeEnum
When the BeforeOrAfter argument is kBefore you can set the
HandlingCode argument to kEventCanceled to disable the Delete
command from being displayed in the context menu. Any other value for
this argument will allow Delete command to be displayed. This argument
has no meaning when the BeforeOrAfter argument is kAfter.
Version
Introduced in version 10
BrowserPanesEvents.OnBrowserNodeGetDisplayObjects
Event
Parent Object: BrowserPanesEvents
Description
Event that is fired when a user requests that the objects represented by a browser node be highlighted.
Syntax
BrowserPanesEvents.OnBrowserNodeGetDisplayObjects( BrowserNodeDefinition As Object, Objects As
ObjectCollection, Context As NameValueMap, HandlingCode As HandlingCodeEnum )
BrowserPanesEvents Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6590.htm 16/06/2025
Parameters
Name Type Description
BrowserNodeDefinition Object
The ClientBrowserNodeDefinition associated with the node the mouse is
over.
Objects ObjectCollection
An Object collection that the client must create and populate with the
objects associated with the browser node.
Context NameValueMap
This event provides additional information through the Context argument
as described below:
Name = “Browser Node”, Value = The BrowserNode object that the
mouse is over.
HandlingCode HandlingCodeEnum This argument is ignored for this event.
Version
Introduced in version 9
BrowserPanesEvents.OnBrowserNodeLabelEdit Event
Parent Object: BrowserPanesEvents
Description
Event that is fired whenever a node is renamed by the user.
Syntax
BrowserPanesEvents.OnBrowserNodeLabelEdit( BrowserNodeDefinition As Object, NewLabel As String,
BeforeOrAfter As EventTimingEnum, Context As NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BrowserNodeDefinition Object
The ClientBrowserNodeDefinition associated with the node being
edited. It’s the Label property of this object that will be affected by an
edit.
NewLabel String
When BeforeOrAfter is kBefore this is the current label of the
node. When BeforeOrAFter is kAfter this is the new label of the node.
BeforeOrAfter EventTimingEnum
Notification is sent before and after the label edit occurs. When the
BeforeOrAfter argument is kBefore you can set the HandlingCode
argument to kEventCanceled to abort the edit and prohibit the end-user
from editing the label. Any other value for this argument will allow the
end-user to edit the label. If the HandlingCode is set to kEventCanceled,
this notification is only sent before. For the other cases this notification is
also sent after the edit is finished.
Context NameValueMap No context information is provided for this event.
HandlingCode HandlingCodeEnum
When the BeforeOrAfter argument is kBefore you can set the
HandlingCode argument to kEventCanceled to abort the edit and prohibit
the end-user from editing the label. Any other value for this argument will
allow the end-user to edit the label.
Version
Introduced in version 9
BrowserPanesEvents Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6590.htm 16/06/2025
BrowserPanesEvents.OnBrowserNodesReorder Event
Parent Object: BrowserPanesEvents
Description
Event that fires just before and after browser nodes are reordered.
Syntax
BrowserPanesEvents.OnBrowserNodesReorder( BrowserPane As BrowserPane, DragNodes As
BrowserNodesEnumerator, TargetNode As BrowserNode, eInsertionLoactionType As InsertionLocationTypeEnum,
BeforeOrAfter As EventTimingEnum, Context As NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BrowserPane BrowserPane
Input BrowserPane object indicating which browser pane has its
browser nodes reordered.
DragNodes BrowserNodesEnumerator
Input the BrowserNodesEnumerator that contains the browser
nodes being moved.
TargetNode BrowserNode
Input the BrowserNode to position the DragNodes next to or
under.
eInsertionLoactionType InsertionLocationTypeEnum
Input the InsertionLocationTypeEnum indicating where to
position the DragNodes.
BeforeOrAfter EventTimingEnum
Input EventTimingEnum indicating if the event is being fired
before (kBefore) or after (kAfter) the browser nodes are
reordered.
Context NameValueMap
Input NameValueMap object that can be used to determine the
context of why the event fired.
HandlingCode HandlingCodeEnum
Output HandlingCodeEnum that indicates how you are handling
the event. The value of this argument is currently ignored for this
event.
Version
Introduced in version 2018
BrowserPanesEvents Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6590.htm 16/06/2025
BSplineCurve Object
Description
The BSplineCurve object is a mathematical utility object that represents a NURBS curve. It is a
transient object that is never shown graphically or saved in the Inventor document
Methods
Name Description
Copy
Creates a copy of this BSplineCurve object. The result is entirely
independent and can be edited without affecting the original
BSplineCurve object.
ExtractPartial Creates a new curve by extracting a portion of an existing curve.
GetBSplineData Get the data defining this B-spline.
GetBSplineInfo
Gets general information about the definition of the spline, including its
order, number of poles and knots, and its rational, periodic, closed, and
planar states.
PutBSplineInfoAndData Sets the definition data of the spline.
Split
Creates two new curves that are the result of splitting this curve at the
specified point. The original curve is left unchanged.
Properties
Name Description
Evaluator
Property that returns an evaluator object for the curve. The evaluator supports
general curve evaluation functions.
PoleAtIndex Property that returns the x, y, z position of a specified pole.
Accessed From
BSplineCurve.Copy, BSplineCurve.ExtractPartial, BSplineCurve.Split,
SketchControlPointSpline.Geometry3d, SketchControlPointSpline3D.Geometry,
SketchControlPointSpline3DProxy.Geometry, SketchControlPointSplineProxy.Geometry3d,
SketchEquationCurve.Geometry3d, SketchEquationCurve3D.Geometry,
SketchEquationCurve3DProxy.Geometry, SketchEquationCurveProxy.Geometry3d,
SketchFixedSpline.Geometry3d, SketchFixedSpline3D.Geometry,
SketchFixedSpline3DProxy.Geometry, SketchFixedSplineProxy.Geometry3d,
SketchOffsetSpline.Geometry3d, SketchOffsetSplineProxy.Geometry3d,
SketchSpline.Geometry3d, SketchSpline3D.Geometry, SketchSpline3DProxy.Geometry,
SketchSplineProxy.Geometry3d, TransientGeometry.CreateBSplineCurve,
TransientGeometry.CreateFittedBSplineCurve
BSplineCurve Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
Version
Introduced in version 4
BSplineCurve.Copy Method
Parent Object: BSplineCurve
Description
Creates a copy of this BSplineCurve object. The result is entirely independent and can be edited
without affecting the original BSplineCurve object.
Syntax
BSplineCurve.Copy() As BSplineCurve
Version
Introduced in version 2013
BSplineCurve.Evaluator Property
Parent Object: BSplineCurve
Description
Property that returns an evaluator object for the curve. The evaluator supports general curve
evaluation functions.
Syntax
BSplineCurve.Evaluator() As CurveEvaluator
Property Value
This is a read only property whose value is a CurveEvaluator.
Version
Introduced in version 4
BSplineCurve Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
BSplineCurve.ExtractPartial Method
Parent Object: BSplineCurve
Description
Creates a new curve by extracting a portion of an existing curve.
Syntax
BSplineCurve.ExtractPartial( StartParam As Double, EndParam As Double ) As BSplineCurve
Parameters
Name Type Description
StartParam Double
Input Double that specifies the starting parameter of where the new curve is
extracted.
EndParam Double
Input Double that specifies the ending parameter of where the new curve is
extracted.
Version
Introduced in version 2013
BSplineCurve.GetBSplineData Method
Parent Object: BSplineCurve
Description
Get the data defining this B-spline.
Syntax
BSplineCurve.GetBSplineData( Poles() As Double, Knots() As Double, Weights() As Double )
Parameters
Name Type Description
Poles Double Input/output Double that specifies the poles of the B-Spline.
Knots Double Input/output Double that specifies the knots of the B-Spline.
Weights Double Input/output Double that specifies the B-spline's weights.
BSplineCurve Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
Version
Introduced in version 4
BSplineCurve.GetBSplineInfo Method
Parent Object: BSplineCurve
Description
Gets general information about the definition of the spline, including its order, number of poles
and knots, and its rational, periodic, closed, and planar states.
Syntax
BSplineCurve.GetBSplineInfo( Order As Long, NumPoles As Long, NumKnots As Long,
IsRational As Boolean, IsPeriodic As Boolean, IsClosed As Boolean, IsPlanar As Boolean,
PlaneVector() As Double )
Parameters
Name Type Description
Order Long Output Long that specifies the order of the spline.
NumPoles Long Output Long that specifies the number of poles.
NumKnots Long Output Long that specifies the number of knots.
IsRational Boolean Output Boolean that specifies whether the B-Spline is rational.
IsPeriodic Boolean Output Boolean that specifies whether the B-Spline is periodic.
IsClosed Boolean Output Boolean that specifies whether the curve is closed.
IsPlanar Boolean Output Boolean that specifies whether the B-Spline is planar.
PlaneVector Double Output Double that specifies the B-Spline's plane vector.
Version
Introduced in version 4
BSplineCurve.PoleAtIndex Property
Parent Object: BSplineCurve
Description
Property that returns the x, y, z position of a specified pole.
BSplineCurve Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
Syntax
BSplineCurve.PoleAtIndex( Index As Long ) As Point
Property Value
This is a read/write property whose value is a Point.
Parameters
Name Type Description
Index Long
Version
Introduced in version 4
BSplineCurve.PutBSplineInfoAndData
Method
Parent Object: BSplineCurve
Description
Sets the definition data of the spline.
Syntax
BSplineCurve.PutBSplineInfoAndData( Order As Long, Poles() As Double, Knots() As Double,
Weights() As Double, IsPeriodic As Boolean )
Parameters
Name Type Description
Order Long Input Long that specifies the order of the spline.
Poles Double Input/output Double that specifies the poles of the B-Spline.
Knots Double Input/output Double that specifies the knots of the B-Spline.
Weights Double Input/output Double that specifies the B-spline's weights.
IsPeriodic Boolean Input Boolean that specifies whether the B-Spline is periodic.
BSplineCurve Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
Version
Introduced in version 4
BSplineCurve.Split Method
Parent Object: BSplineCurve
Description
Creates two new curves that are the result of splitting this curve at the specified point. The original
curve is left unchanged.
Syntax
BSplineCurve.Split( SplitParam As Double, CurveOne As BSplineCurve, CurveTwo As
BSplineCurve )
Parameters
Name Type Description
SplitParam Double Input Double that specifies the parameter where the curve is to be split.
CurveOne BSplineCurve
Output BSplineCurve that is the portion of the curve from the start of
the curve to the split parameter location.
CurveTwo BSplineCurve
Output BSplineCurve that is the portion of the curve from the split
parameter location to the end of the curve.
Version
Introduced in version 2013
BSplineCurve Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh949F.htm 16/06/2025
BSplineCurve2d Object
Description
The BSplineCurve2d object. For more information, see the Transient Geometry overview.
Methods
Name Description
Copy
Creates a copy of this BSplineCurve2d object. The result is entirely
independent and can be edited without affecting the original
BSplineCurve2d object.
ExtractPartial Creates a new curve by extracting a portion of an existing curve.
GetBSplineData Get the data defining this B-spline.
GetBSplineInfo
Gets general information about the definition of the spline, including its
order, number of poles and knots, and its rational, periodic, closed, and
planar states.
PutBSplineInfoAndData Sets the definition data of the spline.
Split
Creates two new curves that are the result of splitting this curve at the
specified point. The original curve is left unchanged.
Properties
Name Description
Evaluator Gets the Curve2dEvaluator for this curve.
PoleAtIndex
Indicates the pole coordinate point at the specified index into the spline's pole
vector.
Accessed From
BSplineCurve2d.Copy, BSplineCurve2d.ExtractPartial, BSplineCurve2d.Split,
SketchControlPointSpline.Geometry, SketchControlPointSplineProxy.Geometry,
SketchEquationCurve.Geometry, SketchEquationCurveProxy.Geometry,
SketchFixedSpline.Geometry, SketchFixedSplineProxy.Geometry, SketchOffsetSpline.Geometry,
SketchOffsetSplineProxy.Geometry, SketchSpline.Geometry, SketchSplineProxy.Geometry,
TransientGeometry.CreateBSplineCurve2d, TransientGeometry.CreateFittedBSplineCurve2d
Samples
Name Description
Create
Approximate
Polyline to 3D
Curve
Draws a polyline that is an approximation of the selected curve. To use this
have a part open that contains a 3D skech that contains curves.
BSplineCurve2d Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
Extract a Partial
Curve from a Curve
Demonstrates the ability to extract partial curves from a transient geometry
curve. This sample has you select an existing sketch spline and extracts three
curves from the curve. It then creates real curves using the extracted curves
and deletes the original sketch curve.
Spline - create
NURBS
This sample demonstrates the creation of a sketch spline using a geometry
definition (a NURB). The API also supports creation of 3D sketch splines in
a similar way.
Split a 2D Curve
Demonstrates the ability to extract split curves from a transient geometry
curve. This sample has you select an existing sketch spline and splits it at the
midpoint of parametric space. It then creates real curves using the split curve
results and deletes the original sketch curve.
Version
Introduced in version 4
BSplineCurve2d.Copy Method
Parent Object: BSplineCurve2d
Description
Creates a copy of this BSplineCurve2d object. The result is entirely independent and can be edited
without affecting the original BSplineCurve2d object.
Syntax
BSplineCurve2d.Copy() As BSplineCurve2d
Version
Introduced in version 2013
BSplineCurve2d.Evaluator Property
Parent Object: BSplineCurve2d
Description
Gets the Curve2dEvaluator for this curve.
BSplineCurve2d Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
Syntax
BSplineCurve2d.Evaluator() As Curve2dEvaluator
Property Value
This is a read only property whose value is a Curve2dEvaluator.
Samples
Name Description
Create
Approximate
Polyline to 3D
Curve
Draws a polyline that is an approximation of the selected curve. To use this
have a part open that contains a 3D skech that contains curves.
Extract a Partial
Curve from a Curve
Demonstrates the ability to extract partial curves from a transient geometry
curve. This sample has you select an existing sketch spline and extracts three
curves from the curve. It then creates real curves using the extracted curves
and deletes the original sketch curve.
Split a 2D Curve
Demonstrates the ability to extract split curves from a transient geometry
curve. This sample has you select an existing sketch spline and splits it at the
midpoint of parametric space. It then creates real curves using the split curve
results and deletes the original sketch curve.
Version
Introduced in version 4
BSplineCurve2d.ExtractPartial Method
Parent Object: BSplineCurve2d
Description
Creates a new curve by extracting a portion of an existing curve.
Syntax
BSplineCurve2d.ExtractPartial( StartParam As Double, EndParam As Double ) As
BSplineCurve2d
Parameters
Name Type Description
BSplineCurve2d Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
StartParam Double Input Double that specifies the starting parameter of where the new curve is
extracted.
EndParam Double
Input Double that specifies the ending parameter of where the new curve is
extracted.
Samples
Name Description
Extract a
Partial Curve
from a Curve
Demonstrates the ability to extract partial curves from a transient geometry
curve. This sample has you select an existing sketch spline and extracts three
curves from the curve. It then creates real curves using the extracted curves and
deletes the original sketch curve.
Version
Introduced in version 2013
BSplineCurve2d.GetBSplineData Method
Parent Object: BSplineCurve2d
Description
Get the data defining this B-spline.
Syntax
BSplineCurve2d.GetBSplineData( Poles() As Double, Knots() As Double, Weights() As
Double )
Parameters
Name Type Description
Poles Double Input/output Double that specifies the poles of the B-Spline.
Knots Double Input/output Double that specifies the knots of the B-Spline.
Weights Double Input/output Double that specifies the B-spline's weights.
Version
Introduced in version 4
BSplineCurve2d Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
BSplineCurve2d.GetBSplineInfo Method
Parent Object: BSplineCurve2d
Description
Gets general information about the definition of the spline, including its order, number of poles
and knots, and its rational, periodic, closed, and planar states.
Syntax
BSplineCurve2d.GetBSplineInfo( Order As Long, NumPoles As Long, NumKnots As Long,
IsRational As Boolean, IsPeriodic As Boolean, IsClosed As Boolean )
Parameters
Name Type Description
Order Long Output Long that specifies the order of the spline.
NumPoles Long Output Long that specifies the number of poles.
NumKnots Long Output Long that specifies the number of knots.
IsRational Boolean Output Boolean that specifies whether the B-Spline is rational.
IsPeriodic Boolean Output Boolean that specifies whether the B-Spline is periodic.
IsClosed Boolean Output Boolean that specifies whether the curve is closed.
Version
Introduced in version 4
BSplineCurve2d.PoleAtIndex Property
Parent Object: BSplineCurve2d
Description
Indicates the pole coordinate point at the specified index into the spline's pole vector.
Syntax
BSplineCurve2d.PoleAtIndex( Index As Long ) As Point2d
Property Value
This is a read/write property whose value is a Point2d.
BSplineCurve2d Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
Parameters
Name Type Description
Index Long
Version
Introduced in version 4
BSplineCurve2d.PutBSplineInfoAndData
Method
Parent Object: BSplineCurve2d
Description
Sets the definition data of the spline.
Syntax
BSplineCurve2d.PutBSplineInfoAndData( Order As Long, Poles() As Double, Knots() As
Double, Weights() As Double, IsPeriodic As Boolean )
Parameters
Name Type Description
Order Long
Input Long array of two elements that specifies the order of the spline in U
and V respectively.
Poles Double Input/output Double that specifies the poles of the B-Spline.
Knots Double Input/output Double that specifies the knots of the B-Spline.
Weights Double Input/output Double that specifies the B-spline's weights.
IsPeriodic Boolean Input Boolean that specifies whether the B-Spline is periodic.
Version
Introduced in version 4
BSplineCurve2d.Split Method
Parent Object: BSplineCurve2d
BSplineCurve2d Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
Description
Creates two new curves that are the result of splitting this curve at the specified point. The original
curve is left unchanged.
Syntax
BSplineCurve2d.Split( SplitParam As Double, CurveOne As BSplineCurve2d, CurveTwo As
BSplineCurve2d )
Parameters
Name Type Description
SplitParam Double
Input Double that specifies the parameter where the curve is to be
split.
CurveOne BSplineCurve2d
Output BSplineCurve2d that is the portion of the curve from the
start of the curve to the split parameter location.
CurveTwo BSplineCurve2d
Output BSplineCurve2d that is the portion of the curve from the
split parameter location to the end of the curve.
Samples
Name Description
Split a
2D
Curve
Demonstrates the ability to extract split curves from a transient geometry curve. This
sample has you select an existing sketch spline and splits it at the midpoint of
parametric space. It then creates real curves using the split curve results and deletes the
original sketch curve.
Version
Introduced in version 2013
BSplineCurve2d Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8F0.htm 16/06/2025
BSplineCurve2dDefinition Object
Description
The BSplineCurve2dDefinition object is a transient object. It is a convenient way to define a
spline, perhaps to then create a BSplineCurve2D object. For more information, see the Transient
Geometry overview.
Methods
Name Description
AddPoint
Method that adds point and its corresponding weight and tangent information to the
definition.
Properties
Name Description
FitMethod Gets and sets the FitMethod setting.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
TransientGeometry.CreateBSplineCurve2dDefinition
Version
Introduced in version 9
BSplineCurve2dDefinition.AddPoint Method
Parent Object: BSplineCurve2dDefinition
Description
Method that adds point and its corresponding weight and tangent information to the definition.
Syntax
BSplineCurve2dDefinition.AddPoint( Point As Point2d, [Weight] As Double, [Tangent] As
Variant )
BSplineCurve2dDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD5FD.htm 16/06/2025
Parameters
Name Type Description
Point Point2d Input object that specifies the point.
Weight Double
Optional input double that specifies the weight for the input point. If not
specified, a default value of 1 is used.
This is an optional argument whose default value is 1.0.
Tangent Variant
Optional input UnitVector2d object that defines the tangent of the BSpline curve
at this point.
This is an optional argument whose default value is null.
Version
Introduced in version 9
BSplineCurve2dDefinition.FitMethod
Property
Parent Object: BSplineCurve2dDefinition
Description
Gets and sets the FitMethod setting.
Syntax
BSplineCurve2dDefinition.FitMethod() As SplineFitMethodEnum
Property Value
This is a read/write property whose value is a SplineFitMethodEnum.
Version
Introduced in version 9
BSplineCurve2dDefinition.Type Property
Parent Object: BSplineCurve2dDefinition
BSplineCurve2dDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD5FD.htm 16/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BSplineCurve2dDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BSplineCurve2dDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD5FD.htm 16/06/2025
BSplineCurveDefinition Object
Description
The BSplineCurveDefinition object is a transient object. It is a convenient way to define a spline,
perhaps to then create a BSplineCurve object. For more information, see the Transient Geometry
overview.
Methods
Name Description
AddPoint
Method that adds point and its corresponding weight and tangent information to the
definition.
Properties
Name Description
FitMethod Gets and sets the FitMethod setting.
FixedLength Gets and sets whether the curve should have a fixed length.
Length Gets and sets the length for the curve.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
TransientGeometry.CreateBSplineCurveDefinition
Version
Introduced in version 9
BSplineCurveDefinition.AddPoint Method
Parent Object: BSplineCurveDefinition
Description
Method that adds point and its corresponding weight and tangent information to the definition.
Syntax
BSplineCurveDefinition.AddPoint( Point As Point, [Weight] As Double, [Tangent] As Variant )
BSplineCurveDefinition Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF194.htm 16/06/2025
Parameters
Name Type Description
Point Point Input object that specifies the point.
Weight Double
Optional input double that specifies the weight for the input point. If not
specified, a default value of 1 is used.
This is an optional argument whose default value is 1.0.
Tangent Variant
Optional input UnitVector object that defines the tangent of the BSpline curve at
this point.
This is an optional argument whose default value is null.
Version
Introduced in version 9
BSplineCurveDefinition.FitMethod Property
Parent Object: BSplineCurveDefinition
Description
Gets and sets the FitMethod setting.
Syntax
BSplineCurveDefinition.FitMethod() As SplineFitMethodEnum
Property Value
This is a read/write property whose value is a SplineFitMethodEnum.
Version
Introduced in version 9
BSplineCurveDefinition.FixedLength
Property
Parent Object: BSplineCurveDefinition
BSplineCurveDefinition Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF194.htm 16/06/2025
Description
Gets and sets whether the curve should have a fixed length.
Syntax
BSplineCurveDefinition.FixedLength() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2019
BSplineCurveDefinition.Length Property
Parent Object: BSplineCurveDefinition
Description
Gets and sets the length for the curve.
Syntax
BSplineCurveDefinition.Length() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2019
BSplineCurveDefinition.Type Property
Parent Object: BSplineCurveDefinition
Description
BSplineCurveDefinition Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF194.htm 16/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BSplineCurveDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BSplineCurveDefinition Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF194.htm 16/06/2025
BSplineSurface Object
Description
The BSplineSurface object represent a surface curved according to BSpline poles, order, weights,
and knots.
Methods
Name Description
Copy
Creates a copy of this BSplineSurface object. The result is entirely
independent and can be edited without affecting the original
BSplineSurface object.
GetBSplineData Get the data defining this B-spline.
GetBSplineInfo
Gets general information about the definition of the spline, including its
order, number of poles and knots, and its rational, periodic, closed, and
planar states.
PutBSplineInfoAndData Sets the definition data of the spline surface.
Properties
Name Description
Evaluator Gets the surface evaluator for this surface.
PoleAtIndex
Indicates the pole coordinate point at the specified UV indices into the spline's pole
array.
Accessed From
BSplineSurface.Copy, TransientGeometry.CreateBSplineSurface
Version
Introduced in version 4
BSplineSurface.Copy Method
Parent Object: BSplineSurface
Description
Creates a copy of this BSplineSurface object. The result is entirely independent and can be edited
without affecting the original BSplineSurface object.
BSplineSurface Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC4F.htm 16/06/2025
Syntax
BSplineSurface.Copy() As BSplineSurface
Version
Introduced in version 2013
BSplineSurface.Evaluator Property
Parent Object: BSplineSurface
Description
Gets the surface evaluator for this surface.
Syntax
BSplineSurface.Evaluator() As SurfaceEvaluator
Property Value
This is a read only property whose value is a SurfaceEvaluator.
Version
Introduced in version 4
BSplineSurface.GetBSplineData Method
Parent Object: BSplineSurface
Description
Get the data defining this B-spline.
Syntax
BSplineSurface.GetBSplineData( Poles() As Double, KnotsU() As Double, KnotsV() As Double,
Weights() As Double )
BSplineSurface Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC4F.htm 16/06/2025
Parameters
Name Type Description
Poles Double Input/output Double that specifies the poles of the B-Spline.
KnotsU Double Input/output Double that specifies the knots of the B-Spline in U.
KnotsV Double Input/output Double that specifies the knots of the B-Spline in V.
Weights Double Input/output Double that specifies the B-spline's weights.
Version
Introduced in version 4
BSplineSurface.GetBSplineInfo Method
Parent Object: BSplineSurface
Description
Gets general information about the definition of the spline, including its order, number of poles
and knots, and its rational, periodic, closed, and planar states.
Syntax
BSplineSurface.GetBSplineInfo( Order() As Long, NumPoles() As Long, NumKnots() As Long,
IsRational As Boolean, IsPeriodic() As Boolean, IsClosed() As Boolean, IsPlanar As Boolean,
PlaneVector() As Double )
Parameters
Name Type Description
Order Long
Input Long array of two elements that specifies the order of the spline in U
and V respectively.
NumPoles Long Input/output Long that specifies the number of poles.
NumKnots Long Input/output array of Longs that specifies the number of knots.
IsRational Boolean Output Boolean that specifies whether the B-Spline is rational.
IsPeriodic Boolean Input/Output Boolean that specifies whether the B-Spline is periodic.
IsClosed Boolean Input/Output Boolean that specifies whether the curve is closed.
IsPlanar Boolean Output Boolean that specifies whether the B-Spline is planar.
PlaneVector Double Output Double that specifies the B-Spline's plane vector.
BSplineSurface Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC4F.htm 16/06/2025
Version
Introduced in version 4
BSplineSurface.PoleAtIndex Property
Parent Object: BSplineSurface
Description
Indicates the pole coordinate point at the specified UV indices into the spline's pole array.
Syntax
BSplineSurface.PoleAtIndex( IndexU As Long, IndexV As Long ) As Point
Property Value
This is a read/write property whose value is a Point.
Parameters
Name Type Description
IndexU Long
IndexV Long
Version
Introduced in version 4
BSplineSurface.PutBSplineInfoAndData
Method
Parent Object: BSplineSurface
Description
Sets the definition data of the spline surface.
BSplineSurface Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC4F.htm 16/06/2025
Syntax
BSplineSurface.PutBSplineInfoAndData( Order() As Long, Poles() As Double, KnotsU() As
Double, KnotsV() As Double, Weights() As Double, IsPeriodic() As Boolean )
Parameters
Name Type Description
Order Long
Input Long array of two elements that specifies the order of the spline in U
and V respectively.
Poles Double Input/output Double that specifies the poles of the B-Spline.
KnotsU Double Input/output Double that specifies the knots of the B-Spline in U.
KnotsV Double Input/output Double that specifies the knots of the B-Spline in V.
Weights Double Input/output Double that specifies the B-spline's weights.
IsPeriodic Boolean Input/Output Boolean that specifies whether the B-Spline is periodic.
Version
Introduced in version 4
BSplineSurface Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC4F.htm 16/06/2025
ButtonDefinition Object
Description
The ButtonDefinition object represents any command whose user interface is a button.
Methods
Name Description
AutoAddToGUI Adds it to AddIn Toolbar.
Delete Method that deletes the UIDefinition Object.
Execute Executes this ControlDefinition object.
Execute2 Executes the ControlDefinition synchronously or asynchronously.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BuiltIn Gets the BuiltIn status for a UIDefinition.
Classification Gets the classification.
ClientId Gets ClientID.
DefaultShortcut
Gets/Sets the default (internal) shortcut assigned to the command. Setting
this property fails for built-in ControlDefinitions.
DefaultShortcutType
Gets the type of default shortcut assigned to this command. Possible return
values are kNoShortcut (no shortcut has been assigned),
kAcceleratorShortcut (a shortcut that directly launches the command), or
kAliasShortcut (a command alias).
DefinitionType Gets the ControlDefinitionType.
DescriptionText Gets/Sets Description Text.
DisplayName Gets the Display Name.
Enabled Enables/Disables the UIDefinition object.
InternalName Gets the Internal Name.
IntroducedInVersion
Read-write property that gets and sets the introduced in version of the
control definition. The values from AvailableComparisonVersions can be
used to set this property. This is read only if the control definition is builtin.
IsShortcutOverridden
Gets whether the default (internal) shortcut has been overridden by the
user or through the API.
LargeIcon Gets/Sets LargeIcon.
LastUpdatedVersion Read-write property that gets and sets the last updated version of the
control definition. The values from AvailableComparisonVersions can be
ButtonDefinition Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
used to set this property. This is read only if the control definition is builtin.
OverrideShortcut
Gets/Sets the override shortcut assigned to the command. Setting this
property to a null string clears the override.
OverrideShortcutType
Gets the type of override shortcut assigned to this command. Possible
return values are kNoShortcut (no shortcut has been assigned),
kAcceleratorShortcut (a shortcut that directly launches the command), or
kAliasShortcut (a command alias).
Parent Gets the parent object from whom this object can logically be reached.
Pressed Gets/Sets Pressed property.
ProgressiveToolTip
Returns a ProgressiveToolTip object providing access to enhanced tooltip
display for controls in the ribbon interface.
StandardIcon Gets/Sets StandardIcon.
ToolTipText Gets/Sets Tooltip.
Type Returns an ObjectTypeEnum indicating this object's type.
Events
Name Description
OnExecute Event that fires when the ButtonDefinition is executed.
OnHelp
Event that is fired when the user selects F1 while the progressive tooltip of this
command is being displayed in the ribbon interface.
Accessed From
ControlDefinitions.AddButtonDefinition
Samples
Name Description
Add commands to the application menu Demonstrates adding command to the application menu.
Creation of an override environment for
a document
A new ribbon tab is created and associated with the
override environment.
Create a ribbon panel in an existing tab
Demonstrates creating a new ribbon panel within an
existing ribbon tab.
Version
Introduced in version 6
ButtonDefinition.Application Property
Parent Object: ButtonDefinition
ButtonDefinition Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
ButtonDefinition.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 9
ButtonDefinition.AutoAddToGUI Method
Parent Object: ButtonDefinition
Description
Adds it to AddIn Toolbar.
Syntax
ButtonDefinition.AutoAddToGUI()
Version
Introduced in version 6
ButtonDefinition.BuiltIn Property
Parent Object: ButtonDefinition
Description
Gets the BuiltIn status for a UIDefinition.
ButtonDefinition Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Syntax
ButtonDefinition.BuiltIn() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
ButtonDefinition.Classification Property
Parent Object: ButtonDefinition
Description
Gets the classification.
Syntax
ButtonDefinition.Classification() As CommandTypesEnum
Property Value
This is a read only property whose value is a CommandTypesEnum.
Version
Introduced in version 9
ButtonDefinition.ClientId Property
Parent Object: ButtonDefinition
Description
Gets ClientID.
ButtonDefinition Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Syntax
ButtonDefinition.ClientId() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 9
ButtonDefinition.DefaultShortcut Property
Parent Object: ButtonDefinition
Description
Gets/Sets the default (internal) shortcut assigned to the command. Setting this property fails for
built-in ControlDefinitions.
Syntax
ButtonDefinition.DefaultShortcut() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
ButtonDefinition.DefaultShortcutType
Property
Parent Object: ButtonDefinition
Description
ButtonDefinition Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Gets the type of default shortcut assigned to this command. Possible return values are
kNoShortcut (no shortcut has been assigned), kAcceleratorShortcut (a shortcut that directly
launches the command), or kAliasShortcut (a command alias).
Syntax
ButtonDefinition.DefaultShortcutType() As ShortcutTypeEnum
Property Value
This is a read only property whose value is a ShortcutTypeEnum.
Version
Introduced in version 2008
ButtonDefinition.DefinitionType Property
Parent Object: ButtonDefinition
Description
Gets the ControlDefinitionType.
Syntax
ButtonDefinition.DefinitionType() As ControlDefinitionTypeEnum
Property Value
This is a read only property whose value is a ControlDefinitionTypeEnum.
Version
Introduced in version 9
ButtonDefinition.Delete Method
Parent Object: ButtonDefinition
Description
Method that deletes the UIDefinition Object.
ButtonDefinition Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Syntax
ButtonDefinition.Delete()
Version
Introduced in version 9
ButtonDefinition.DescriptionText Property
Parent Object: ButtonDefinition
Description
Gets/Sets Description Text.
Syntax
ButtonDefinition.DescriptionText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
ButtonDefinition.DisplayName Property
Parent Object: ButtonDefinition
Description
Gets the Display Name.
Syntax
ButtonDefinition.DisplayName() As String
ButtonDefinition Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 7
ButtonDefinition.Enabled Property
Parent Object: ButtonDefinition
Description
Enables/Disables the UIDefinition object.
Syntax
ButtonDefinition.Enabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
ButtonDefinition.Execute Method
Parent Object: ButtonDefinition
Description
Executes this ControlDefinition object.
Syntax
ButtonDefinition.Execute()
ButtonDefinition Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Version
Introduced in version 8
ButtonDefinition.Execute2 Method
Parent Object: ButtonDefinition
Description
Executes the ControlDefinition synchronously or asynchronously.
Syntax
ButtonDefinition.Execute2( Synchronous As Boolean )
Parameters
Name Type Description
Synchronous Boolean
Input Boolean that specifies whether to execute the control definition
synchronously ('Send Message') or asynchronously ('Post Message').
Version
Introduced in version 2008
ButtonDefinition.InternalName Property
Parent Object: ButtonDefinition
Description
Gets the Internal Name.
Syntax
ButtonDefinition.InternalName() As String
Property Value
This is a read only property whose value is a String.
ButtonDefinition Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Version
Introduced in version 7
ButtonDefinition.IntroducedInVersion
Property
Parent Object: ButtonDefinition
Description
Read-write property that gets and sets the introduced in version of the control definition. The
values from AvailableComparisonVersions can be used to set this property. This is read only if the
control definition is built-in.
Syntax
ButtonDefinition.IntroducedInVersion() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2020
ButtonDefinition.IsShortcutOverridden
Property
Parent Object: ButtonDefinition
Description
Gets whether the default (internal) shortcut has been overridden by the user or through the API.
Syntax
ButtonDefinition.IsShortcutOverridden() As Boolean
ButtonDefinition Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
ButtonDefinition.LargeIcon Property
Parent Object: ButtonDefinition
Description
Gets/Sets LargeIcon.
Syntax
ButtonDefinition.LargeIcon() As IPictureDisp
Property Value
This is a read/write property whose value is an IPictureDisp.
Version
Introduced in version 2011
ButtonDefinition.LastUpdatedVersion
Property
Parent Object: ButtonDefinition
Description
Read-write property that gets and sets the last updated version of the control definition. The values
from AvailableComparisonVersions can be used to set this property. This is read only if the
control definition is built-in.
Syntax
ButtonDefinition.LastUpdatedVersion() As String
ButtonDefinition Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2020
ButtonDefinition.OnExecute Event
Parent Object: ButtonDefinition
Description
Event that fires when the ButtonDefinition is executed.
Syntax
ButtonDefinition.OnExecute( Context As NameValueMap )
Parameters
Name Type Description
Context NameValueMap
Input object that can be used to determine the context of why the event
fired.
Version
Introduced in version 9
ButtonDefinition.OnHelp Event
Parent Object: ButtonDefinition
Description
Event that is fired when the user selects F1 while the progressive tooltip of this command is being
displayed in the ribbon interface.
Syntax
ButtonDefinition.OnHelp( Context As NameValueMap, HandlingCode As HandlingCodeEnum )
ButtonDefinition Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Parameters
Name Type Description
Context NameValueMap
Input object that can be used to determine the context of why
the event fired. No context information is provided for this
event.
HandlingCode HandlingCodeEnum
Output that indicates how you are handling the event. Setting
the value of the HandlingCode argument specifies how
Inventor is to handle displaying help. If you set this argument
to kEventNotHandled or kEventCanceled, Inventor will
display some general help. Setting the value of this argument
to kEventHandled will allow you to handle displaying help to
the end-user and Inventor will not display anything. To
display help to the end-user you can choose to use whatever
help system you want. Inventor's API does not provide
support for the actual display of the clients help.
Version
Introduced in version 2011
ButtonDefinition.OverrideShortcut Property
Parent Object: ButtonDefinition
Description
Gets/Sets the override shortcut assigned to the command. Setting this property to a null string
clears the override.
Syntax
ButtonDefinition.OverrideShortcut() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
ButtonDefinition Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
ButtonDefinition.OverrideShortcutType
Property
Parent Object: ButtonDefinition
Description
Gets the type of override shortcut assigned to this command. Possible return values are
kNoShortcut (no shortcut has been assigned), kAcceleratorShortcut (a shortcut that directly
launches the command), or kAliasShortcut (a command alias).
Syntax
ButtonDefinition.OverrideShortcutType() As ShortcutTypeEnum
Property Value
This is a read only property whose value is a ShortcutTypeEnum.
Version
Introduced in version 2008
ButtonDefinition.Parent Property
Parent Object: ButtonDefinition
Description
Gets the parent object from whom this object can logically be reached.
Syntax
ButtonDefinition.Parent() As CommandManager
Property Value
This is a read only property whose value is a CommandManager.
Version
Introduced in version 9
ButtonDefinition Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
ButtonDefinition.Pressed Property
Parent Object: ButtonDefinition
Description
Gets/Sets Pressed property.
Syntax
ButtonDefinition.Pressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
ButtonDefinition.ProgressiveToolTip
Property
Parent Object: ButtonDefinition
Description
Returns a ProgressiveToolTip object providing access to enhanced tooltip display for controls in
the ribbon interface.
Syntax
ButtonDefinition.ProgressiveToolTip() As ProgressiveToolTip
Property Value
This is a read only property whose value is a ProgressiveToolTip.
Version
Introduced in version 2011
ButtonDefinition Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
ButtonDefinition.StandardIcon Property
Parent Object: ButtonDefinition
Description
Gets/Sets StandardIcon.
Syntax
ButtonDefinition.StandardIcon() As IPictureDisp
Property Value
This is a read/write property whose value is an IPictureDisp.
Version
Introduced in version 2011
ButtonDefinition.ToolTipText Property
Parent Object: ButtonDefinition
Description
Gets/Sets Tooltip.
Syntax
ButtonDefinition.ToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
ButtonDefinition.Type Property
ButtonDefinition Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Parent Object: ButtonDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
ButtonDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
ButtonDefinition Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh298C.htm 16/06/2025
Balloon Object
Description
The Balloon object provides the ability to access existing balloons.
Methods
Name Description
Delete Method to delete this Balloon.
GetBalloonType Method that gets the balloon type.
GetReferenceKey Method that generates and returns the reference key for this entity.
SaveItemOverridesToBOM
Method that saves any overrides to the item values in the balloon to
the model BOM. Only the overrides applies to the
BallonValueSet.Value property are saved. The value of the
OverrideValue property is ignored.
SetBalloonType Method that sets the balloon type.
SortValueSets Method that sorts the balloon value sets.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Attached Property that returns whether the balloon is attached to a component.
AttributeSets
Property that returns the AttributeSets collection object associated with this
object.
BalloonValueSets
This property gets the collection of objects. See the BalloonValueSets and
BalloonValueSet objects for more information.
Layer Gets and sets the layer applied to this balloons.
Leader Property that returns the leader associated with the balloon.
Parent
Property returning the parent sheet (the sheet object this balloon is associated
with).
ParentView
Property that returns the parent DrawingView object. In other words, the
sheet contains a view with which this balloon is associated.
PlacementDirection Gets and sets the direction in which to place attached balloons.
Position Gets and sets the position of the balloon on the Sheet.
Style Gets and sets the associated BalloonStyle object.
Type Returns an ObjectTypeEnum indicating this object's type.
Balloon Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Accessed From
Balloons.Add, Balloons.Item, BalloonValueSet.Parent
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Version
Introduced in version 9
Balloon.Application Property
Parent Object: Balloon
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Balloon.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
Balloon.Attached Property
Parent Object: Balloon
Balloon Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Description
Property that returns whether the balloon is attached to a component.
Syntax
Balloon.Attached() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
Balloon.AttributeSets Property
Parent Object: Balloon
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
Balloon.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
Balloon.BalloonValueSets Property
Parent Object: Balloon
Description
Balloon Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
This property gets the collection of objects. See the BalloonValueSets and BalloonValueSet
objects for more information.
Syntax
Balloon.BalloonValueSets() As BalloonValueSets
Property Value
This is a read only property whose value is a BalloonValueSets.
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Version
Introduced in version 9
Balloon.Delete Method
Parent Object: Balloon
Description
Method to delete this Balloon.
Syntax
Balloon.Delete()
Version
Introduced in version 9
Balloon.GetBalloonType Method
Parent Object: Balloon
Balloon Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Description
Method that gets the balloon type.
Syntax
Balloon.GetBalloonType( BalloonType As BalloonTypeEnum, BalloonTypeData As Variant )
Parameters
Name Type Description
BalloonType BalloonTypeEnum
Gets the constant that indicates the balloon type. Valid
types are kCircularWithOneEntryBalloonType,
kCircularWithTwoEntriesBalloonType,
kHexagonBalloonType, kLinearBalloonType,
kNoneBalloonType and kSketchedSymbolBalloonType.
BalloonTypeData Variant
Returns the data associated with certain balloon types. If
the balloon type is kSketchedSymbolBalloonType, this
returns a SketchedSymbol object. Else, this returns
Nothing.
Version
Introduced in version 9
Balloon.GetReferenceKey Method
Parent Object: Balloon
Description
Method that generates and returns the reference key for this entity.
Syntax
Balloon.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
Balloon Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
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
Introduced in version 2009
Balloon.Layer Property
Parent Object: Balloon
Description
Gets and sets the layer applied to this balloons.
Syntax
Balloon.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 10
Balloon.Leader Property
Parent Object: Balloon
Description
Balloon Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Property that returns the leader associated with the balloon.
Syntax
Balloon.Leader() As Leader
Property Value
This is a read only property whose value is a Leader.
Version
Introduced in version 2009
Balloon.Parent Property
Parent Object: Balloon
Description
Property returning the parent sheet (the sheet object this balloon is associated with).
Syntax
Balloon.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 9
Balloon.ParentView Property
Parent Object: Balloon
Description
Property that returns the parent DrawingView object. In other words, the sheet contains a view
with which this balloon is associated.
Balloon Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Syntax
Balloon.ParentView() As DrawingView
Property Value
This is a read only property whose value is a DrawingView.
Version
Introduced in version 9
Balloon.PlacementDirection Property
Parent Object: Balloon
Description
Gets and sets the direction in which to place attached balloons.
Syntax
Balloon.PlacementDirection() As BalloonDirectionEnum
Property Value
This is a read/write property whose value is a BalloonDirectionEnum.
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Version
Introduced in version 9
Balloon.Position Property
Parent Object: Balloon
Balloon Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Description
Gets and sets the position of the balloon on the Sheet.
Syntax
Balloon.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 9
Balloon.SaveItemOverridesToBOM Method
Parent Object: Balloon
Description
Method that saves any overrides to the item values in the balloon to the model BOM. Only the
overrides applies to the BallonValueSet.Value property are saved. The value of the OverrideValue
property is ignored.
Syntax
Balloon.SaveItemOverridesToBOM()
Version
Introduced in version 2010
Balloon.SetBalloonType Method
Parent Object: Balloon
Description
Method that sets the balloon type.
Balloon Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Syntax
Balloon.SetBalloonType( BalloonType As BalloonTypeEnum, [BalloonTypeData] As Variant )
Parameters
Name Type Description
BalloonType BalloonTypeEnum
Constant that indicates the balloon type. Valid types are
kCircularWithOneEntryBalloonType,
kCircularWithTwoEntriesBalloonType,
kHexagonBalloonType, kLinearBalloonType,
kNoneBalloonType and kSketchedSymbolBalloonType.
Setting the type to kNoneBalloonType specifies that all the
properties chosen in the style will be displayed.
BalloonTypeData Variant
Optional input data associated with certain balloon types. If
the balloon type is kSketchedSymbolBalloonType, this
argument requires a SketchedSymbolDefinition object.
Else, this argument is ignored.
This is an optional argument whose default value is null.
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Version
Introduced in version 9
Balloon.SortValueSets Method
Parent Object: Balloon
Description
Method that sorts the balloon value sets.
Syntax
Balloon.SortValueSets()
Balloon Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Version
Introduced in version 2024
Balloon.Style Property
Parent Object: Balloon
Description
Gets and sets the associated BalloonStyle object.
Syntax
Balloon.Style() As BalloonStyle
Property Value
This is a read/write property whose value is a BalloonStyle.
Version
Introduced in version 2009
Balloon.Type Property
Parent Object: Balloon
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Balloon.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Balloon Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Version
Introduced in version 9
Balloon Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD59A.htm 13/06/2025
Balloons Object
Description
The Balloons collection object provides access to all of the objects on a sheet. This collection is
available via the Balloons property of the Sheet object.
Methods
Name Description
Add
Method that creates a new Balloon. The newly created Balloon is returned. The
corresponding BOMView in the model is automatically enabled if not already enabled.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Sheet.Balloons
Version
Introduced in version 9
Balloons.Add Method
Parent Object: Balloons
Description
Method that creates a new Balloon. The newly created Balloon is returned. The corresponding
BOMView in the model is automatically enabled if not already enabled.
Balloons Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
Syntax
Balloons.Add( LeaderPoints As ObjectCollection, [VirtualComponent] As Variant, [Level] As
Variant, [NumberingScheme] As Variant, [BalloonStyle] As Variant, [Layer] As Variant ) As
Balloon
Parameters
Name Type Description
LeaderPoints ObjectCollection
Input ObjectCollection containing a series of Point2d
objects representing the leader originating at the note. The
last item in the collection (even if it is the only item) must
be a GeometryIntent object indicating a geometry to attach
the leader to. A GeometryIntent object can be created using
the Sheet.CreateGeometryIntent method. The
ObjectCollection must contain at least one item (a
GeometryIntent), else the method will fail. Note that the
component that the balloon will attach to is inferred from
the GeometryIntent object.
VirtualComponent Variant
Optional input object that defines the virtual or custom
component that this balloon will be attached to. This can
either be a ComponentOccurrence /
ComponentOccurrenceProxy object representing a virtual
component, a BOMRow that represents a virtual component
or a custom/virtual DrawingBOMRow.
This is an optional argument whose default value is null.
Level Variant
Optional input PartsListLevelEnum that sets the view type
for the parts list. If supplied, this input is only used in the
case where the balloon references an assembly document. If
this value was previously set as a result of creating a parts
list or a balloon in the drawing based on the same model,
this argument is ignored. Use the
DrawingDocument.DrawingBOMs.IsDrawingBOMDefined
method to check whether or not to supply this argument.
Valid enums are: kStructured, that creates a 'first level only'
parts list in which a simple integer value is assigned to
direct children, kStructuredAllLevels that creates an 'all
level' parts list with full expanded numbering, and
kPartsOnly, that creates a parts list that sequentially
numbers all parts in the top level assembly, even if they are
contained in subassemblies.
This is an optional argument whose default value is null.
NumberingScheme Variant
Optional input NameValueMap object that specifies the
numbering scheme to use for the parts list. This argument is
Balloons Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
ignored if the numbering schemes have already been set for
this model as a result of creating a parts list or a balloon
based on the same model. Use the
DrawingDocument.DrawingBOMs.IsDrawingBOMDefined
method to check whether or not to supply this argument.
Also, this argument is ignored if the numbering schemes
have been defined in the model BOM views. The
NameValueMap can contain the following entries based on
the input 'Level' argument:
For kStructured: 'MinimumDigits' As Long
For kStructuredAllLevels: 'Delimiter' As String
For kPartsOnly: 'NumberingScheme' As
NumberingSchemeEnum and 'MinimumDigits' As Long
Valid values for NumberingSchemeEnum are
kNumericNumbering, kLowercaseAlphaNumbering and
kUppercaseAlphaNumbering. This input should be supplied
only if the input argument Level is specified to be
kPartsOnly. If this argument is not supplied for a 'parts
only' parts list, a default value of kNumericNumbering is
assumed.
This is an optional argument whose default value is null.
BalloonStyle Variant
Optional input BalloonStyle object that specifies the
balloon style to use for the balloon. If not specified, the
style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use
for the balloon. If not specified, the layer defined by the
active standard is used.
This is an optional argument whose default value is null.
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Version
Introduced in version 2009
Balloons Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
Balloons.Application Property
Parent Object: Balloons
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Balloons.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
Balloons.Count Property
Parent Object: Balloons
Description
Property that returns the number of items in the collection.
Syntax
Balloons.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
Balloons Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
Balloons.Item Property
Parent Object: Balloons
Description
Returns the specified object from the collection.
Syntax
Balloons.Item( Index As Long ) As Balloon
Property Value
This is a read only property whose value is a Balloon.
Parameters
Name Type Description
Index Long
Input Long value that specifies the index number of the Balloon to return. If an out
of range index is provided, an error will occur.
Version
Introduced in version 9
Balloons.Type Property
Parent Object: Balloons
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Balloons.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Balloons Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
Version
Introduced in version 9
Balloons Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3C24.htm 13/06/2025
BalloonStyle Object
Derived from: Style Object
Description
The BalloonStyle object represents a balloon style in a drawing. The properties and methods listed
below are in addition to those supported by the Style object.
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
AlternateLeaderStyle
Property that gets and sets the alternate leader style used for the balloon
style. Alternate leader style is used when a balloon termination is dragged
away from its associative edge.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BalloonDiameter
Property that gets and sets the balloon diameter. This value is used only if
the ScaleToTextHeight property is set to False. This property is not
applicable if the balloon type is kNoneBalloonType or
kLinearBalloonType.
BalloonType
Property that gets and sets the shape of the balloon. Valid types are
kCircularWithOneEntryBalloonType,
kCircularWithTwoEntriesBalloonType, kHexagonBalloonType,
kLinearBalloonType and kNoneBalloonType.
Comments Gets and sets comments associated with the style.
DefaultOffset
Property that gets and sets the default distance between balloons when
they are aligned. Changing this value has no effect on previously created
balloons.
InternalName Property that returns the internal name of the style. The name is the
internal English name of the standard style. This name will remain
BalloonStyle Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
constant and is not affected by locale. This name is never displayed to the
user. Note that this name is not guaranteed to be unique.
InUse Property that indicates if this style is in use.
LeaderStyle Property that gets and sets the leader style used for a balloon.
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
Properties
Property that gets and sets the properties to display in the balloon. The
number of properties displayed depends on the balloon shape.
ScaleToTextHeight
Property that gets and sets whether to define the balloon size by text
height. This property is not applicable if the balloon type is
kNoneBalloonType or kLinearBalloonType.
StretchBalloonToText
Property that gets and sets whether to size the balloon horizontally to
accommodate long text strings. If set to False, the balloon is restricted to
the defined size. This property is not applicable if the balloon type is
kNoneBalloonType or kLinearBalloonType.
StyleLocation
Property that returns the location of this style, i.e. local to the document,
cached locally in the document, exists in the library. Styles that exist in the
library cannot be edited.
StyleType Gets the type of the style.
TextStyle
Property that gets and sets the text style used to format the text in a
balloon.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate
Property that gets the up-to-date status of the style against the global
repository.
Accessed From
Balloon.Style, BalloonStylesEnumerator.Item, ObjectDefaultsStyle.BalloonStyle
Version
Introduced in version 2009
BalloonStyle.AlternateLeaderStyle Property
Parent Object: BalloonStyle
Description
Property that gets and sets the alternate leader style used for the balloon style. Alternate leader
style is used when a balloon termination is dragged away from its associative edge.
Syntax
BalloonStyle.AlternateLeaderStyle() As LeaderStyle
BalloonStyle Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read/write property whose value is a LeaderStyle.
Version
Introduced in version 2009
BalloonStyle.Application Property
Parent Object: BalloonStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
BalloonStyle.BalloonDiameter Property
Parent Object: BalloonStyle
Description
Property that gets and sets the balloon diameter. This value is used only if the ScaleToTextHeight
property is set to False. This property is not applicable if the balloon type is kNoneBalloonType or
kLinearBalloonType.
Syntax
BalloonStyle.BalloonDiameter() As Double
BalloonStyle Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
BalloonStyle.BalloonType Property
Parent Object: BalloonStyle
Description
Property that gets and sets the shape of the balloon. Valid types are
kCircularWithOneEntryBalloonType, kCircularWithTwoEntriesBalloonType,
kHexagonBalloonType, kLinearBalloonType and kNoneBalloonType.
Syntax
BalloonStyle.BalloonType() As BalloonTypeEnum
Property Value
This is a read/write property whose value is a BalloonTypeEnum.
Version
Introduced in version 2009
BalloonStyle.Comments Property
Parent Object: BalloonStyle
Description
Gets and sets comments associated with the style.
Syntax
BalloonStyle.Comments() As String
BalloonStyle Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
BalloonStyle.ConvertToLocal Method
Parent Object: BalloonStyle
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
BalloonStyle.ConvertToLocal() As Style
Version
Introduced in version 2009
BalloonStyle.Copy Method
Parent Object: BalloonStyle
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
BalloonStyle.Copy( Name As String ) As Style
Parameters
Name Type Description
Name String Input String that specifies the name for the new style. This name must be unique
with respect to all other styles of a similar type in the document. That is, if a
BalloonStyle Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
dimension style is being copied, the name must be unique with respect to all the
other dimension styles. If it is not unique the method will fail.
Version
Introduced in version 2009
BalloonStyle.DefaultOffset Property
Parent Object: BalloonStyle
Description
Property that gets and sets the default distance between balloons when they are aligned. Changing
this value has no effect on previously created balloons.
Syntax
BalloonStyle.DefaultOffset() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2009
BalloonStyle.Delete Method
Parent Object: BalloonStyle
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
BalloonStyle.Delete()
BalloonStyle Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Version
Introduced in version 2009
BalloonStyle.GetReferenceKey Method
Parent Object: BalloonStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
BalloonStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BalloonStyle.InternalName Property
Parent Object: BalloonStyle
Description
Property that returns the internal name of the style. The name is the internal English name of the
standard style. This name will remain constant and is not affected by locale. This name is never
displayed to the user. Note that this name is not guaranteed to be unique.
BalloonStyle Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Syntax
BalloonStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2009
BalloonStyle.InUse Property
Parent Object: BalloonStyle
Description
Property that indicates if this style is in use.
Syntax
BalloonStyle.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
BalloonStyle.LeaderStyle Property
Parent Object: BalloonStyle
Description
Property that gets and sets the leader style used for a balloon.
BalloonStyle Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Syntax
BalloonStyle.LeaderStyle() As LeaderStyle
Property Value
This is a read/write property whose value is a LeaderStyle.
Version
Introduced in version 2009
BalloonStyle.Name Property
Parent Object: BalloonStyle
Description
Gets/Sets the name of the Style.
Syntax
BalloonStyle.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
BalloonStyle.Parent Property
Parent Object: BalloonStyle
Description
Property returning the parent of this object.
BalloonStyle Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Syntax
BalloonStyle.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
BalloonStyle.Properties Property
Parent Object: BalloonStyle
Description
Property that gets and sets the properties to display in the balloon. The number of properties
displayed depends on the balloon shape.
Syntax
BalloonStyle.Properties() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
BalloonStyle.SaveToGlobal Method
Parent Object: BalloonStyle
Description
Method that saves this style to the global repository. If a style with the same name is found in the
repository, that style is updated.
BalloonStyle Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Syntax
BalloonStyle.SaveToGlobal()
Version
Introduced in version 2009
BalloonStyle.ScaleToTextHeight Property
Parent Object: BalloonStyle
Description
Property that gets and sets whether to define the balloon size by text height. This property is not
applicable if the balloon type is kNoneBalloonType or kLinearBalloonType.
Syntax
BalloonStyle.ScaleToTextHeight() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
BalloonStyle.StretchBalloonToText Property
Parent Object: BalloonStyle
Description
Property that gets and sets whether to size the balloon horizontally to accommodate long text
strings. If set to False, the balloon is restricted to the defined size. This property is not applicable
if the balloon type is kNoneBalloonType or kLinearBalloonType.
Syntax
BalloonStyle.StretchBalloonToText() As Boolean
BalloonStyle Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
BalloonStyle.StyleLocation Property
Parent Object: BalloonStyle
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the
document, exists in the library. Styles that exist in the library cannot be edited.
Syntax
BalloonStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2009
BalloonStyle.StyleType Property
Parent Object: BalloonStyle
Description
Gets the type of the style.
Syntax
BalloonStyle.StyleType() As StyleTypeEnum
BalloonStyle Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2009
BalloonStyle.TextStyle Property
Parent Object: BalloonStyle
Description
Property that gets and sets the text style used to format the text in a balloon.
Syntax
BalloonStyle.TextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2009
BalloonStyle.Type Property
Parent Object: BalloonStyle
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonStyle.Type() As ObjectTypeEnum
BalloonStyle Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
BalloonStyle.UpdateFromGlobal Method
Parent Object: BalloonStyle
Description
Method that updates this style from the global repository.
Syntax
BalloonStyle.UpdateFromGlobal()
Version
Introduced in version 2009
BalloonStyle.UpToDate Property
Parent Object: BalloonStyle
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
BalloonStyle.UpToDate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
BalloonStyle Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
Version
Introduced in version 2009
BalloonStyle Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5F6B.htm 13/06/2025
BalloonStylesEnumerator Object
Description
The BalloonStylesEnumerator object provides access to the existing BalloonStyle objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified BalloonStyle object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingStylesManager.BalloonStyles
Version
Introduced in version 2009
BalloonStylesEnumerator.Application
Property
Parent Object: BalloonStylesEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonStylesEnumerator.Application() As Object
BalloonStylesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA195.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
BalloonStylesEnumerator.Count Property
Parent Object: BalloonStylesEnumerator
Description
Property that returns the number of items in the collection.
Syntax
BalloonStylesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
BalloonStylesEnumerator.Item Property
Parent Object: BalloonStylesEnumerator
Description
Returns the specified BalloonStyle object from the collection.
Syntax
BalloonStylesEnumerator.Item( Index As Variant ) As BalloonStyle
BalloonStylesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA195.htm 13/06/2025
Property Value
This is a read only property whose value is a BalloonStyle.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BalloonStyle to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the BalloonStyle name. If an out of range index or a name of a nonexistent
BalloonStyle is provided, an error will occur.
Version
Introduced in version 2009
BalloonStylesEnumerator.Type Property
Parent Object: BalloonStylesEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonStylesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
BalloonStylesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA195.htm 13/06/2025
BalloonTip Object
Description
BalloonTip Object.
Methods
Name Description
Delete Method that deletes the BalloonTip object.
Display Method that displays the BalloonTip object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
ClientData
Gets/sets property that contains some additional data that the client would like to
store with the BalloonTip.
Enabled Read-write property that gets and sets if the BalloonTip object is enabled or not.
InternalName Read-only property that returns the internal name of the BalloonTip object.
Interval
Read-write property that gets and sets the time interval for displaying the
BalloonTip object.
Message
Gets/sets the message of the BalloonTip object. This message supports the :
<Hyperlink></Hyperlink> tag to create hyperlink string.
Parent Gets the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Events
Name Description
OnClick Event that fires when the BalloonTip object is clicked on a hyperlink.
OnDisplay Event that fires when the BalloonTip object is being displayed.
Accessed From
BalloonTips.Add, BalloonTips.Item
Version
Introduced in version 2012
BalloonTip Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
BalloonTip.Application Property
Parent Object: BalloonTip
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonTip.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2012
BalloonTip.ClientData Property
Parent Object: BalloonTip
Description
Gets/sets property that contains some additional data that the client would like to store with the
BalloonTip.
Syntax
BalloonTip.ClientData() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2012
BalloonTip Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
BalloonTip.Delete Method
Parent Object: BalloonTip
Description
Method that deletes the BalloonTip object.
Syntax
BalloonTip.Delete()
Version
Introduced in version 2012
BalloonTip.Display Method
Parent Object: BalloonTip
Description
Method that displays the BalloonTip object.
Syntax
BalloonTip.Display( [Message] As String )
Parameters
Name Type Description
Message String
Input String to override the default message that was specified by the message
property of BalloonTip. If an empty String is provided then the default message
is used.
This is an optional argument whose default value is """".
Version
Introduced in version 2012
BalloonTip Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
BalloonTip.Enabled Property
Parent Object: BalloonTip
Description
Read-write property that gets and sets if the BalloonTip object is enabled or not.
Syntax
BalloonTip.Enabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2012
BalloonTip.InternalName Property
Parent Object: BalloonTip
Description
Read-only property that returns the internal name of the BalloonTip object.
Syntax
BalloonTip.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BalloonTip.Interval Property
BalloonTip Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
Parent Object: BalloonTip
Description
Read-write property that gets and sets the time interval for displaying the BalloonTip object.
Syntax
BalloonTip.Interval() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2012
BalloonTip.Message Property
Parent Object: BalloonTip
Description
Gets/sets the message of the BalloonTip object. This message supports the :
<Hyperlink></Hyperlink> tag to create hyperlink string.
Syntax
BalloonTip.Message() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2012
BalloonTip.OnClick Event
Parent Object: BalloonTip
BalloonTip Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
Description
Event that fires when the BalloonTip object is clicked on a hyperlink.
Syntax
BalloonTip.OnClick( Context As NameValueMap )
Parameters
Name Type Description
Context NameValueMap
Input NameValueMap object that can be used to determine the context
of why the event fired. Currently the following name-value pair is
supported.
• Name = "HyperlinkIndex", Value = Long. The Index of the hyper
link that was clicked.
Version
Introduced in version 2012
BalloonTip.OnDisplay Event
Parent Object: BalloonTip
Description
Event that fires when the BalloonTip object is being displayed.
Syntax
BalloonTip.OnDisplay( Cancel As Boolean )
Parameters
Name Type Description
Cancel Boolean
BalloonTip Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
Boolean value indicating if the display of the balloon tip should be
canceled. This is an input/output argument and defaults to False, indicating the
balloon tip should be displayed. Changing the value to True will cancel the
display of the balloon tip.
Version
Introduced in version 2012
BalloonTip.Parent Property
Parent Object: BalloonTip
Description
Gets the parent object from whom this object can logically be reached.
Syntax
BalloonTip.Parent() As UserInterfaceManager
Property Value
This is a read only property whose value is a UserInterfaceManager.
Version
Introduced in version 2012
BalloonTip.Type Property
Parent Object: BalloonTip
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonTip.Type() As ObjectTypeEnum
BalloonTip Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
BalloonTip Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC8C4.htm 13/06/2025
BalloonTips Object
Description
BalloonTips Object.
Methods
Name Description
Add Method that creates a new BalloonTip object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Gets the number of items in this collection.
Item
Allows VARIANT-indexed access to items in the collection. You can use names as
indexes as well.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
UserInterfaceManager.BalloonTips
Version
Introduced in version 2012
BalloonTips.Add Method
Parent Object: BalloonTips
Description
Method that creates a new BalloonTip object.
Syntax
BalloonTips.Add( InternalName As String, Title As String, Message As String ) As BalloonTip
BalloonTips Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF0ED.htm 13/06/2025
Parameters
Name Type Description
InternalName String
Input String value that specifies the internal name of the BalloonTip. This
must be unique with respect to all other ballon tips.
Title String Input String value that specifies the title of the BalloonTip.
Message String
Optional input String value that specifies the message for the BalloonTip.
You can provide hyperlinks as part of the message using the format:
<Hyperlink>http://www.yoursite.com</Hyperlink>.
Version
Introduced in version 2012
BalloonTips.Application Property
Parent Object: BalloonTips
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonTips.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2012
BalloonTips.Count Property
Parent Object: BalloonTips
Description
BalloonTips Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF0ED.htm 13/06/2025
Gets the number of items in this collection.
Syntax
BalloonTips.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2012
BalloonTips.Item Property
Parent Object: BalloonTips
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as
well.
Syntax
BalloonTips.Item( Index As Variant ) As BalloonTip
Property Value
This is a read only property whose value is a BalloonTip.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BalloonTip to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the BalloonTip internal name. If an out of range index or a name of a
non-existent BalloonTip is provided, an error will occur.
Version
Introduced in version 2012
BalloonTips Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF0ED.htm 13/06/2025
BalloonTips.Type Property
Parent Object: BalloonTips
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonTips.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
BalloonTips Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF0ED.htm 13/06/2025
BalloonValueSet Object
Description
The BalloonValueSet object allows for setting and overriding of balloon content.
Methods
Name Description
Delete Deletes this BalloonValueSet object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ItemNumber Returns the associated item number.
OverrideValue Gets and sets the override value of the balloon.
Parent Property returning the parent balloon.
ReferencedRow Property that returns the referenced DrawingBOMRow object.
Static Gets and sets whether the Value property has been overridden.
Type Returns an ObjectTypeEnum indicating this object's type.
Value
Gets and sets the value of the balloon. This value corresponds to the item
number of a row in a parts list if any have been created.
Accessed From
BalloonValueSets.Add, BalloonValueSets.Item
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Version
Introduced in version 9
BalloonValueSet Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
BalloonValueSet.Application Property
Parent Object: BalloonValueSet
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonValueSet.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BalloonValueSet.Delete Method
Parent Object: BalloonValueSet
Description
Deletes this BalloonValueSet object.
Syntax
BalloonValueSet.Delete()
Version
Introduced in version 9
BalloonValueSet.ItemNumber Property
Parent Object: BalloonValueSet
BalloonValueSet Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
Description
Returns the associated item number.
Syntax
BalloonValueSet.ItemNumber() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2011
BalloonValueSet.OverrideValue Property
Parent Object: BalloonValueSet
Description
Gets and sets the override value of the balloon.
Syntax
BalloonValueSet.OverrideValue() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Balloons - edit This sample demonstrates the editing of balloons in a drawing.
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Version
Introduced in version 9
BalloonValueSet Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
BalloonValueSet.Parent Property
Parent Object: BalloonValueSet
Description
Property returning the parent balloon.
Syntax
BalloonValueSet.Parent() As Balloon
Property Value
This is a read only property whose value is a Balloon.
Version
Introduced in version 9
BalloonValueSet.ReferencedRow Property
Parent Object: BalloonValueSet
Description
Property that returns the referenced DrawingBOMRow object.
Syntax
BalloonValueSet.ReferencedRow() As DrawingBOMRow
Property Value
This is a read only property whose value is a DrawingBOMRow.
Samples
Name Description
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
BalloonValueSet Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
Version
Introduced in version 2009
BalloonValueSet.Static Property
Parent Object: BalloonValueSet
Description
Gets and sets whether the Value property has been overridden.
Syntax
BalloonValueSet.Static() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BalloonValueSet.Type Property
Parent Object: BalloonValueSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonValueSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BalloonValueSet Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
Version
Introduced in version 9
BalloonValueSet.Value Property
Parent Object: BalloonValueSet
Description
Gets and sets the value of the balloon. This value corresponds to the item number of a row in a
parts list if any have been created.
Syntax
BalloonValueSet.Value() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Version
Introduced in version 9
BalloonValueSet Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1231.htm 13/06/2025
BalloonValueSets Object
Description
The BalloonValueSets object represents a collection of objects. Note that this collection does not
yet support an Add method. See the article in the overviews section.
Methods
Name Description
Add Method that creates a new BalloonValueSet.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Balloon.BalloonValueSets
Version
Introduced in version 9
BalloonValueSets.Add Method
Parent Object: BalloonValueSets
Description
Method that creates a new BalloonValueSet.
Syntax
BalloonValueSets.Add( Component As Object ) As BalloonValueSet
BalloonValueSets Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3960.htm 13/06/2025
Parameters
Name Type Description
Component Object
Input object that defines the component that this balloon will be attached to.
This can be one of the following: a ComponentOccurrence /
ComponentOccurrenceProxy object, or a DrawingBOMRow object.
Remarks
The new created BalloonValueSet is returned. This is the equivalent of the 'Attach Balloon' and
'Attach Balloon From List' commands in the user interface.
Version
Introduced in version 2009
BalloonValueSets.Application Property
Parent Object: BalloonValueSets
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BalloonValueSets.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BalloonValueSets.Count Property
Parent Object: BalloonValueSets
BalloonValueSets Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3960.htm 13/06/2025
Description
Property that returns the number of items in the collection.
Syntax
BalloonValueSets.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
BalloonValueSets.Item Property
Parent Object: BalloonValueSets
Description
Returns the specified object from the collection.
Syntax
BalloonValueSets.Item( Index As Long ) As BalloonValueSet
Property Value
This is a read only property whose value is a BalloonValueSet.
Parameters
Name Type Description
Index Long
Input Long value that specifies the index number of the BalloonValueSet to return. If
an out of range index is provided, an error will occur.
Version
Introduced in version 9
BalloonValueSets Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3960.htm 13/06/2025
BalloonValueSets.Type Property
Parent Object: BalloonValueSets
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BalloonValueSets.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BalloonValueSets Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3960.htm 13/06/2025
BaselineDimensionSet Object
Description
The BaselineDimensionSet object represents a baseline dimension set placed on a sheet.
Methods
Name Description
AddMember
Method that adds a member to the baseline set and returns a
LinearGeneralDimension object. If an existing LinearGeneralDimension is
input into the method, the same object is returned.
ArrangeText Method that automatically arranges the text of all members.
Delete Method that deletes the BaselineDimensionSet.
DetachMember
Method that detaches the member from the set. The member is not deleted, it is
merely converted into a vanilla linear general dimension.
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
DimensionType
Property that returns the dimension type of the baseline set. Possible values are
kAlignedDimensionType, kHorizontalDimensionType and
kVerticalDimensionType.
Layer Gets and sets the layer for the dimension set.
Members Property that returns all the member LinearGeneralDimension objects.
Origin Gets and sets the origin for the baseline dimension set.
Parent Property that returns the parent sheet of the object.
Precision
Gets and sets the number of decimal places displayed for all the members in this
set.
Style Gets and sets the dimension style used for this dimension set.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BaselineDimensionSets.Add, BaselineDimensionSets.Item,
LinearGeneralDimension.BaselineDimensionSet
BaselineDimensionSet Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Samples
Name Description
Baseline dimension
sets
This sample demonstrates the creation of a baseline set dimension in a
drawing.
Version
Introduced in version 2010
BaselineDimensionSet.AddMember Method
Parent Object: BaselineDimensionSet
Description
Method that adds a member to the baseline set and returns a LinearGeneralDimension object. If an
existing LinearGeneralDimension is input into the method, the same object is returned.
Syntax
BaselineDimensionSet.AddMember( DimensionOrGeometry As Object ) As
LinearGeneralDimension
Parameters
Name Type Description
DimensionOrGeometry Object
Input object that specifies the member. This can either be an
existing LinearGeneralDimension object or a GeometryIntent
object that specifies the geometry to dimension to.
Version
Introduced in version 2010
BaselineDimensionSet.Application Property
Parent Object: BaselineDimensionSet
Description
BaselineDimensionSet Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BaselineDimensionSet.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BaselineDimensionSet.ArrangeText Method
Parent Object: BaselineDimensionSet
Description
Method that automatically arranges the text of all members.
Syntax
BaselineDimensionSet.ArrangeText()
Version
Introduced in version 2010
BaselineDimensionSet.AttributeSets Property
Parent Object: BaselineDimensionSet
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BaselineDimensionSet.AttributeSets() As AttributeSets
BaselineDimensionSet Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
BaselineDimensionSet.Delete Method
Parent Object: BaselineDimensionSet
Description
Method that deletes the BaselineDimensionSet.
Syntax
BaselineDimensionSet.Delete()
Version
Introduced in version 2010
BaselineDimensionSet.DetachMember
Method
Parent Object: BaselineDimensionSet
Description
Method that detaches the member from the set. The member is not deleted, it is merely converted
into a vanilla linear general dimension.
Syntax
BaselineDimensionSet.DetachMember( Member As LinearGeneralDimension )
Parameters
Name Type Description
BaselineDimensionSet Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Member LinearGeneralDimension
Version
Introduced in version 2010
BaselineDimensionSet.DimensionType
Property
Parent Object: BaselineDimensionSet
Description
Property that returns the dimension type of the baseline set. Possible values are
kAlignedDimensionType, kHorizontalDimensionType and kVerticalDimensionType.
Syntax
BaselineDimensionSet.DimensionType() As DimensionTypeEnum
Property Value
This is a read only property whose value is a DimensionTypeEnum.
Version
Introduced in version 2010
BaselineDimensionSet.GetReferenceKey
Method
Parent Object: BaselineDimensionSet
Description
Method that generates and returns the reference key for this entity.
Syntax
BaselineDimensionSet.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
BaselineDimensionSet Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
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
BaselineDimensionSet.Layer Property
Parent Object: BaselineDimensionSet
Description
Gets and sets the layer for the dimension set.
Syntax
BaselineDimensionSet.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 2010
BaselineDimensionSet Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
BaselineDimensionSet.Members Property
Parent Object: BaselineDimensionSet
Description
Property that returns all the member LinearGeneralDimension objects.
Syntax
BaselineDimensionSet.Members() As GeneralDimensionsEnumerator
Property Value
This is a read only property whose value is a GeneralDimensionsEnumerator.
Version
Introduced in version 2010
BaselineDimensionSet.Origin Property
Parent Object: BaselineDimensionSet
Description
Gets and sets the origin for the baseline dimension set.
Syntax
BaselineDimensionSet.Origin() As GeometryIntent
Property Value
This is a read/write property whose value is a GeometryIntent.
Version
Introduced in version 2010
BaselineDimensionSet.Parent Property
BaselineDimensionSet Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Parent Object: BaselineDimensionSet
Description
Property that returns the parent sheet of the object.
Syntax
BaselineDimensionSet.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 2010
BaselineDimensionSet.Precision Property
Parent Object: BaselineDimensionSet
Description
Gets and sets the number of decimal places displayed for all the members in this set.
Syntax
BaselineDimensionSet.Precision() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
BaselineDimensionSet.Style Property
Parent Object: BaselineDimensionSet
BaselineDimensionSet Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
Description
Gets and sets the dimension style used for this dimension set.
Syntax
BaselineDimensionSet.Style() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 2010
BaselineDimensionSet.Type Property
Parent Object: BaselineDimensionSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BaselineDimensionSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BaselineDimensionSet Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5EDA.htm 13/06/2025
BaselineDimensionSets Object
Description
The BaselineDimensionSets collection object provides access to all of the baseline dimension sets
on the sheet.
Methods
Name Description
Add
Method that creates a baseline dimension set and returns the newly created
BaselineDimensionSet object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Method that returns the specified dimension set object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingDimensions.BaselineDimensionSets
Samples
Name Description
Baseline dimension
sets
This sample demonstrates the creation of a baseline set dimension in a
drawing.
Version
Introduced in version 2010
BaselineDimensionSets.Add Method
Parent Object: BaselineDimensionSets
BaselineDimensionSets Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Description
Method that creates a baseline dimension set and returns the newly created BaselineDimensionSet
object.
Syntax
BaselineDimensionSets.Add( GeometryIntents As ObjectCollection, PlacementPoint As Point2d,
DimensionType As DimensionTypeEnum, [DimensionStyle] As Variant, [Layer] As Variant ) As
BaselineDimensionSet
Parameters
Name Type Description
GeometryIntents ObjectCollection
Input ObjectCollection containing GeometryIntent
objects. The GeometryIntent objects specify the
geometries to use for the dimension. The first geometry
in the collection is assumed to be the origin.
PlacementPoint Point2d
Input Point2d object that specifies the placement point of
the dimension set on the sheet.
DimensionType DimensionTypeEnum
' Input DimensionTypeEnum that specifies the dimension
type. Valid values kHorizontalDimensionType,
kVerticalDimensionType and kAlignedDimensionType.
See Remarks.
DimensionStyle Variant
Optional input DimensionStyle object that specifies the
dimension style to use for the dimension. If not specified,
the style defined by the active standard is used.
This is an optional argument whose default value is null.
Layer Variant
Optional input Layer object that specifies the layer to use
for the dimension. If not specified, the layer defined by
the active standard is used.
This is an optional argument whose default value is null.
Remarks
The value kAlignedDimensionType for the DimensionType parameter can be specified only if the
first geometry specified in the input GeometryIntents collection represents a line which is not
parallel to the x or y axes of the sheet. If kAlignedDimensionType is specified, the placement
point decides the orientation of the dimension set as demonstrated in the pictures below.
BaselineDimensionSets Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Aligned dimension set: Placement point along the direction of the first geometry with a tolerance
of 0.25 cm on either side of the line.
Aligned dimension set: Placement point not along the direction of the first geometry
Samples
Name Description
BaselineDimensionSets Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Baseline dimension
sets
This sample demonstrates the creation of a baseline set dimension in a
drawing.
Version
Introduced in version 2010
BaselineDimensionSets.Application Property
Parent Object: BaselineDimensionSets
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BaselineDimensionSets.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BaselineDimensionSets.Count Property
Parent Object: BaselineDimensionSets
Description
Property that returns the number of items in the collection.
Syntax
BaselineDimensionSets.Count() As Long
BaselineDimensionSets Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BaselineDimensionSets.Item Property
Parent Object: BaselineDimensionSets
Description
Method that returns the specified dimension set object from the collection.
Syntax
BaselineDimensionSets.Item( Index As Long ) As BaselineDimensionSet
Property Value
This is a read only property whose value is a BaselineDimensionSet.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 2010
BaselineDimensionSets.Type Property
Parent Object: BaselineDimensionSets
Description
Returns an ObjectTypeEnum indicating this object's type.
BaselineDimensionSets Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Syntax
BaselineDimensionSets.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BaselineDimensionSets Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2B23.htm 13/06/2025
Bend Object
Description
The Bend object represents a bend in a sheet metal part.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
BackFaces
Property that returns the collection of front faces in the model that represent this
bend.
FrontFaces Property that returns the collection of faces in the model that represent this bend.
IsFlat Property that indicates if the bend is in a folded or flat state
Parent Property that returns the parent SheetMetalComponentDefinition of this Bend object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BendsEnumerator.Item, FlatBendResult.Bend
Version
Introduced in version 2010
Bend.Application Property
Parent Object: Bend
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Bend.Application() As Object
Bend Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh538A.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
Bend.BackFaces Property
Parent Object: Bend
Description
Property that returns the collection of front faces in the model that represent this bend.
Syntax
Bend.BackFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
Bend.FrontFaces Property
Parent Object: Bend
Description
Property that returns the collection of faces in the model that represent this bend.
Syntax
Bend.FrontFaces() As Faces
Bend Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh538A.htm 13/06/2025
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
Bend.IsFlat Property
Parent Object: Bend
Description
Property that indicates if the bend is in a folded or flat state
Syntax
Bend.IsFlat() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
Bend.Parent Property
Parent Object: Bend
Description
Property that returns the parent SheetMetalComponentDefinition of this Bend object.
Syntax
Bend.Parent() As SheetMetalComponentDefinition
Bend Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh538A.htm 13/06/2025
Property Value
This is a read only property whose value is a SheetMetalComponentDefinition.
Version
Introduced in version 2010
Bend.Type Property
Parent Object: Bend
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Bend.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
Bend Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh538A.htm 13/06/2025
BendConstraint Object
Derived from: GeometricConstraint3D Object
Description
The BendConstraint object represents a bend constraint within a 3D sketch.
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
Arc Property that returns the SketchArc3D object associated with the bend.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
Deletable Indicates whether this object can be deleted.
LineOne Property that returns the Sketch Line used to construct the bend feature.
LineTwo Property that returns the Sketch Line used to construct the bend feature.
Parent Property that returns the parent sketch of the object.
Radius Property that returns the parameter controlling the radius of the bend.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BendConstraintProxy.NativeObject
Derived Classes
BendConstraintProxy
Version
Introduced in version 6
BendConstraint Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
BendConstraint.Application Property
Parent Object: BendConstraint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendConstraint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
BendConstraint.Arc Property
Parent Object: BendConstraint
Description
Property that returns the SketchArc3D object associated with the bend.
Syntax
BendConstraint.Arc() As SketchArc3D
Property Value
This is a read only property whose value is a SketchArc3D.
Version
Introduced in version 6
BendConstraint Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
BendConstraint.AttributeSets Property
Parent Object: BendConstraint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendConstraint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
BendConstraint.Deletable Property
Parent Object: BendConstraint
Description
Indicates whether this object can be deleted.
Syntax
BendConstraint.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
BendConstraint.Delete Method
BendConstraint Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
Parent Object: BendConstraint
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
BendConstraint.Delete()
Version
Introduced in version 6
BendConstraint.GetReferenceKey Method
Parent Object: BendConstraint
Description
Method that generates and returns the reference key for this entity.
Syntax
BendConstraint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 6
BendConstraint Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
BendConstraint.LineOne Property
Parent Object: BendConstraint
Description
Property that returns the Sketch Line used to construct the bend feature.
Syntax
BendConstraint.LineOne() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
Version
Introduced in version 6
BendConstraint.LineTwo Property
Parent Object: BendConstraint
Description
Property that returns the Sketch Line used to construct the bend feature.
Syntax
BendConstraint.LineTwo() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
Version
Introduced in version 6
BendConstraint.Parent Property
BendConstraint Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
Parent Object: BendConstraint
Description
Property that returns the parent sketch of the object.
Syntax
BendConstraint.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 6
BendConstraint.Radius Property
Parent Object: BendConstraint
Description
Property that returns the parameter controlling the radius of the bend.
Syntax
BendConstraint.Radius() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
BendConstraint.Type Property
Parent Object: BendConstraint
BendConstraint Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendConstraint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
BendConstraint Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7CBD.htm 13/06/2025
BendConstraintProxy Object
Derived from: BendConstraint Object
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
Arc Property that returns the SketchArc3D object associated with the bend.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is
being referenced through. The returned occurrence is the containing
occurrence.
Deletable Indicates whether this object can be deleted.
LineOne Property that returns the Sketch Line used to construct the bend feature.
LineTwo Property that returns the Sketch Line used to construct the bend feature.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent Property that returns the parent sketch of the object.
Radius Property that returns the parameter controlling the radius of the bend.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 6
BendConstraintProxy.Application Property
BendConstraintProxy Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Parent Object: BendConstraintProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendConstraintProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
BendConstraintProxy.Arc Property
Parent Object: BendConstraintProxy
Description
Property that returns the SketchArc3D object associated with the bend.
Syntax
BendConstraintProxy.Arc() As SketchArc3D
Property Value
This is a read only property whose value is a SketchArc3D.
Version
Introduced in version 6
BendConstraintProxy.AttributeSets Property
Parent Object: BendConstraintProxy
BendConstraintProxy Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendConstraintProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
BendConstraintProxy.ContainingOccurrence
Property
Parent Object: BendConstraintProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
BendConstraintProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
BendConstraintProxy.Deletable Property
Parent Object: BendConstraintProxy
BendConstraintProxy Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Description
Indicates whether this object can be deleted.
Syntax
BendConstraintProxy.Deletable() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
BendConstraintProxy.Delete Method
Parent Object: BendConstraintProxy
Description
Method that deletes the constraint. In the case of coincident constraint, all the connected lines are
disconnected and the constraint is deleted.
Syntax
BendConstraintProxy.Delete()
Version
Introduced in version 6
BendConstraintProxy.GetReferenceKey
Method
Parent Object: BendConstraintProxy
Description
Method that generates and returns the reference key for this entity.
BendConstraintProxy Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Syntax
BendConstraintProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 6
BendConstraintProxy.LineOne Property
Parent Object: BendConstraintProxy
Description
Property that returns the Sketch Line used to construct the bend feature.
Syntax
BendConstraintProxy.LineOne() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
Version
Introduced in version 6
BendConstraintProxy.LineTwo Property
BendConstraintProxy Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Parent Object: BendConstraintProxy
Description
Property that returns the Sketch Line used to construct the bend feature.
Syntax
BendConstraintProxy.LineTwo() As SketchLine3D
Property Value
This is a read only property whose value is a SketchLine3D.
Version
Introduced in version 6
BendConstraintProxy.NativeObject Property
Parent Object: BendConstraintProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
BendConstraintProxy.NativeObject() As BendConstraint
Property Value
This is a read only property whose value is a BendConstraint.
Version
Introduced in version 6
BendConstraintProxy.Parent Property
Parent Object: BendConstraintProxy
BendConstraintProxy Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Description
Property that returns the parent sketch of the object.
Syntax
BendConstraintProxy.Parent() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 6
BendConstraintProxy.Radius Property
Parent Object: BendConstraintProxy
Description
Property that returns the parameter controlling the radius of the bend.
Syntax
BendConstraintProxy.Radius() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 6
BendConstraintProxy.Type Property
Parent Object: BendConstraintProxy
Description
BendConstraintProxy Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendConstraintProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
BendConstraintProxy Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA39E.htm 13/06/2025
BendDefinition Object
Description
The BendDefinition object represents all of the information that defines a bend.
Methods
Name Description
Copy Method that creates a copy of this BendDefinition object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used
in the context of Apprentice, an ApprenticeServer object is
returned.
BendOptions
Gets and sets the BendOptions object that defines the options for a
bend.
BendRadius Gets and sets the bend radius.
DoubleBendType Specifies if the bend is a double bend or not.
Edges Gets and sets the set of edges that define the location of the bend.
ExtendFaces
Specifies if the existing faces will be extended to the bend or if a
perpendicular section should be created to connect to the bend.
IsDoubleBendFirstEdgeFixed
Specify which face remains fixed and which one is extended or
trimmed in the case of double bends.
IsUnfoldMethodOverridden
Read-write property that gets and set whether the unfold method
has been overridden for this feature. Setting this property to False
clears the override. Setting the property to True returns a failure.
Parent
Property that returns the parent feature of this BendDefinition
object.
Type Returns an ObjectTypeEnum indicating this object's type.
UnfoldMethod
Gets and sets the UnfoldMethod object that defines how this bend
is unfolded.
Accessed From
BendDefinition.Copy, BendFeature.Definition, BendFeatureProxy.Definition,
BendFeatures.CreateBendDefinition, FaceFeatureDefinition.BendDefinition
Samples
Name Description
BendDefinition Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 2009
BendDefinition.Application Property
Parent Object: BendDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
BendDefinition.BendOptions Property
Parent Object: BendDefinition
Description
Gets and sets the BendOptions object that defines the options for a bend.
Syntax
BendDefinition.BendOptions() As BendOptions
Property Value
This is a read/write property whose value is a BendOptions.
BendDefinition Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2009
BendDefinition.BendRadius Property
Parent Object: BendDefinition
Description
Gets and sets the bend radius.
Syntax
BendDefinition.BendRadius() As Variant
Property Value
This is a read/write property whose value is a Variant.
Samples
Name Description
Create sheet metal face and flange
features
This sample demonstrates the creation of sheet metal face and
flange features.
Version
Introduced in version 2009
BendDefinition.Copy Method
Parent Object: BendDefinition
Description
Method that creates a copy of this BendDefinition object.
Syntax
BendDefinition.Copy() As BendDefinition
BendDefinition Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2010
BendDefinition.DoubleBendType Property
Parent Object: BendDefinition
Description
Specifies if the bend is a double bend or not.
Syntax
BendDefinition.DoubleBendType() As DoubleBendTypeEnum
Property Value
This is a read/write property whose value is a DoubleBendTypeEnum.
Version
Introduced in version 2009
BendDefinition.Edges Property
Parent Object: BendDefinition
Description
Gets and sets the set of edges that define the location of the bend.
Syntax
BendDefinition.Edges() As EdgeCollection
Property Value
This is a read/write property whose value is an EdgeCollection.
BendDefinition Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2009
BendDefinition.ExtendFaces Property
Parent Object: BendDefinition
Description
Specifies if the existing faces will be extended to the bend or if a perpendicular section should be
created to connect to the bend.
Syntax
BendDefinition.ExtendFaces() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2009
BendDefinition.IsDoubleBendFirstEdgeFixed
Property
Parent Object: BendDefinition
Description
Specify which face remains fixed and which one is extended or trimmed in the case of double
bends.
Syntax
BendDefinition.IsDoubleBendFirstEdgeFixed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendDefinition Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2009
BendDefinition.IsUnfoldMethodOverridden
Property
Parent Object: BendDefinition
Description
Read-write property that gets and set whether the unfold method has been overridden for this
feature. Setting this property to False clears the override. Setting the property to True returns a
failure.
Syntax
BendDefinition.IsUnfoldMethodOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BendDefinition.Parent Property
Parent Object: BendDefinition
Description
Property that returns the parent feature of this BendDefinition object.
Syntax
BendDefinition.Parent() As Object
Property Value
This is a read only property whose value is an Object.
BendDefinition Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2009
BendDefinition.Type Property
Parent Object: BendDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
BendDefinition.UnfoldMethod Property
Parent Object: BendDefinition
Description
Gets and sets the UnfoldMethod object that defines how this bend is unfolded.
Syntax
BendDefinition.UnfoldMethod() As UnfoldMethod
Property Value
This is a read/write property whose value is a UnfoldMethod.
BendDefinition Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
Version
Introduced in version 2009
BendDefinition Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCF42.htm 13/06/2025
BendFeature Object
Derived from: PartFeature Object
Description
The BendFeature object represents a sheet metal bend feature.
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
Property that gets the BendDefinition object associated with this bend
feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
BendFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
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
BendFeatures.Add, BendFeatures.Item, ContourFlangeFeature.BendFeature,
ContourFlangeFeatureProxy.BendFeature, FaceFeature.BendFeature,
FaceFeatureProxy.BendFeature, FlangeFeature.BendFeature, FlangeFeatureProxy.BendFeature
Derived Classes
BendFeatureProxy
Samples
Name Description
Sheet Metal Feature
Display
This sample illustrates getting basic information from the various sheet
metal features.
Version
Introduced in version 5.3
BendFeature.Adaptive Property
BendFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Parent Object: BendFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BendFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5.3
BendFeature.Appearance Property
Parent Object: BendFeature
Description
Gets and sets the current appearance of the feature.
Syntax
BendFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BendFeature.AppearanceSourceType
Property
Parent Object: BendFeature
BendFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Description
Gets and sets the source of the appearance for the feature.
Syntax
BendFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
BendFeature.Application Property
Parent Object: BendFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
BendFeature.AttributeSets Property
Parent Object: BendFeature
BendFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5.3
BendFeature.ConsumeInputs Property
Parent Object: BendFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BendFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BendFeature.Definition Property
Parent Object: BendFeature
Description
BendFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Property that gets the BendDefinition object associated with this bend feature.
Syntax
BendFeature.Definition() As BendDefinition
Property Value
This is a read only property whose value is a BendDefinition.
Version
Introduced in version 2009
BendFeature.Delete Method
Parent Object: BendFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
BendFeature.Delete( [RetainConsumedSketches] As Boolean,
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
BendFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Optional input Boolean that specifies if
dependent work features should be deleted. If
there are no dependent work features this
argument is ignored.
This is an optional argument whose default value
is False.
Version
Introduced in version 5.3
BendFeature.ExtendedName Property
Parent Object: BendFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BendFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BendFeature.Faces Property
Parent Object: BendFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
BendFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Syntax
BendFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 5.3
BendFeature.FeatureDimensions Property
Parent Object: BendFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
BendFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
BendFeature.GetReferenceKey Method
Parent Object: BendFeature
Description
Method that generates and returns the reference key for this entity.
BendFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Syntax
BendFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BendFeature.GetSuppressionCondition
Method
Parent Object: BendFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
BendFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose
value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum ComparisonTypeEnum that specifies the type of
comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison,
BendFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with
the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 11
BendFeature.HealthStatus Property
Parent Object: BendFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
BendFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5.3
BendFeature.IsOwnedByFeature Property
Parent Object: BendFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
BendFeature.IsOwnedByFeature() As Boolean
BendFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
BendFeature.Name Property
Parent Object: BendFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BendFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5.3
BendFeature.OwnedBy Property
Parent Object: BendFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
BendFeature.OwnedBy() As PartFeature
BendFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
BendFeature.Parameters Property
Parent Object: BendFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
BendFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
BendFeature.Parent Property
Parent Object: BendFeature
Description
Property that returns the parent of the feature.
Syntax
BendFeature.Parent() As ComponentDefinition
BendFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5.3
BendFeature.Participants Property
Parent Object: BendFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
BendFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
BendFeature.RangeBox Property
Parent Object: BendFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
BendFeature.RangeBox() As Box
BendFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 5.3
BendFeature.RemoveParticipant Method
Parent Object: BendFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
BendFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
BendFeature.SetAffectedBodies Method
Parent Object: BendFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
BendFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Syntax
BendFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BendFeature.SetEndOfPart Method
Parent Object: BendFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BendFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
BendFeature.SetSuppressionCondition
Method
Parent Object: BendFeature
BendFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Description
Method that sets the suppression condition for the feature.
Syntax
BendFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BendFeature.Shared Property
Parent Object: BendFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
BendFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Syntax
BendFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BendFeature.Suppressed Property
Parent Object: BendFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BendFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5.3
BendFeature.SurfaceBodies Property
Parent Object: BendFeature
Description
Property that returns the bodies that this feature has created or modified.
BendFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
Syntax
BendFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BendFeature.Type Property
Parent Object: BendFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
BendFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF8E3.htm 13/06/2025
BendFeatureProxy Object
Derived from: BendFeature Object
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
Property that gets the BendDefinition object associated with this bend
feature.
ExtendedName
Read-only property that returns the full feature name including any
extended information.
Faces Property that returns a collection that provides access to all of the faces
of the feature. The Faces collection object will return the faces that still
BendFeatureProxy Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
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
BendFeatureProxy.Adaptive Property
Parent Object: BendFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BendFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendFeatureProxy Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.Appearance Property
Parent Object: BendFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
BendFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BendFeatureProxy.AppearanceSourceType
Property
Parent Object: BendFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
BendFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
BendFeatureProxy Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 2014
BendFeatureProxy.Application Property
Parent Object: BendFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BendFeatureProxy.AttributeSets Property
Parent Object: BendFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
BendFeatureProxy Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.ConsumeInputs Property
Parent Object: BendFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BendFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BendFeatureProxy.Definition Property
Parent Object: BendFeatureProxy
Description
Property that gets the BendDefinition object associated with this bend feature.
Syntax
BendFeatureProxy.Definition() As BendDefinition
Property Value
This is a read only property whose value is a BendDefinition.
BendFeatureProxy Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 2009
BendFeatureProxy.Delete Method
Parent Object: BendFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
BendFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
BendFeatureProxy Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.ExtendedName Property
Parent Object: BendFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BendFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BendFeatureProxy.Faces Property
Parent Object: BendFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
BendFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
BendFeatureProxy Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.FeatureDimensions
Property
Parent Object: BendFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
BendFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
BendFeatureProxy.GetReferenceKey Method
Parent Object: BendFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
BendFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
BendFeatureProxy Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 9
BendFeatureProxy.GetSuppressionCondition
Method
Parent Object: BendFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
BendFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BendFeatureProxy Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 11
BendFeatureProxy.HealthStatus Property
Parent Object: BendFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
BendFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
BendFeatureProxy.IsOwnedByFeature
Property
Parent Object: BendFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
BendFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
BendFeatureProxy Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 2008
BendFeatureProxy.Name Property
Parent Object: BendFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BendFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
BendFeatureProxy.OwnedBy Property
Parent Object: BendFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
BendFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
BendFeatureProxy Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 2008
BendFeatureProxy.Parameters Property
Parent Object: BendFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
BendFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
BendFeatureProxy.Parent Property
Parent Object: BendFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
BendFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
BendFeatureProxy Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.Participants Property
Parent Object: BendFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
BendFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
BendFeatureProxy.RangeBox Property
Parent Object: BendFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
BendFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
BendFeatureProxy Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Version
Introduced in version 9
BendFeatureProxy.RemoveParticipant
Method
Parent Object: BendFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
BendFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 10
BendFeatureProxy.SetAffectedBodies Method
Parent Object: BendFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BendFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
BendFeatureProxy Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BendFeatureProxy.SetEndOfPart Method
Parent Object: BendFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BendFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 9
BendFeatureProxy.SetSuppressionCondition
Method
Parent Object: BendFeatureProxy
Description
Method that sets the suppression condition for the feature.
BendFeatureProxy Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Syntax
BendFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BendFeatureProxy.Shared Property
Parent Object: BendFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BendFeatureProxy.Shared() As Boolean
BendFeatureProxy Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BendFeatureProxy.Suppressed Property
Parent Object: BendFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BendFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
BendFeatureProxy.SurfaceBodies Property
Parent Object: BendFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BendFeatureProxy.SurfaceBodies() As SurfaceBodies
BendFeatureProxy Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BendFeatureProxy.Type Property
Parent Object: BendFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BendFeatureProxy Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hh20AE.htm 13/06/2025
BendFeatures Object
Description
The BendFeatures collection object provides access to all of the objects in a sheet metal
component definition. It"s also through the BendFeatures object that you create new BendFeature
objects.
Methods
Name Description
Add
Method that creates a new bend feature. The newly created BendFeature
object is returned.
CreateBendDefinition
Method that creates a new BendDefinition object. This object is not a bend
feature but contains the information that defines bend information and can
be used to help create a new feature that contains bends or edit the bend of
an existing feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified BendFeature object from the collection. This is the default
property of the BendFeatures collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
SheetMetalFeatures.BendFeatures
Samples
Name Description
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 5.3
BendFeatures Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh529B.htm 13/06/2025
BendFeatures.Add Method
Parent Object: BendFeatures
Description
Method that creates a new bend feature. The newly created BendFeature object is returned.
Syntax
BendFeatures.Add( BendDefinition As BendDefinition ) As BendFeature
Parameters
Name Type Description
BendDefinition BendDefinition
Input BendDefinition object that defines the bend feature you
want to create. A BendDefinition object can be created using the
BendFeatures.CreateBendDefinition method. It can also be
obtained from an existing feature that has an associated bend.
Samples
Name Description
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 2010
BendFeatures.Application Property
Parent Object: BendFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendFeatures.Application() As Object
BendFeatures Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh529B.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
BendFeatures.Count Property
Parent Object: BendFeatures
Description
Property that returns the number of items in this collection.
Syntax
BendFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
BendFeatures.CreateBendDefinition Method
Parent Object: BendFeatures
Description
Method that creates a new BendDefinition object. This object is not a bend feature but contains
the information that defines bend information and can be used to help create a new feature that
contains bends or edit the bend of an existing feature.
Syntax
BendFeatures.CreateBendDefinition( Edges As EdgeCollection ) As BendDefinition
BendFeatures Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh529B.htm 13/06/2025
Parameters
Name Type Description
Edges EdgeCollection
Input EdgeCollection object that defines the existing edges on the sheet
metal part that you want to create bends for. The EdgeCollection can
contain either one or two edges depending on the geometry where you
want to apply the bend and the type of feature the definition is being used
with. To best understand what's valid you should try creating the same
feature interactively to see what edges can be selected to create a valid
bend.
Samples
Name Description
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 2010
BendFeatures.Item Property
Parent Object: BendFeatures
Description
Returns the specified BendFeature object from the collection. This is the default property of the
BendFeatures collection object.
Syntax
BendFeatures.Item( Index As Variant ) As BendFeature
Property Value
This is a read only property whose value is a BendFeature.
Parameters
Name Type Description
Index Variant
Input Long value that specifies the index of the to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the attribute set name. If an out-of-range index or a name of a
nonexistent attribute set is provided, an error occurs.
BendFeatures Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh529B.htm 13/06/2025
Version
Introduced in version 5.3
BendFeatures.Type Property
Parent Object: BendFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
BendFeatures Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh529B.htm 13/06/2025
BendNote Object
Derived from: LeaderNote Object
Description
The BendNote object represents a bend note on a sheet and derives from the LeaderNote object.
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
BendEdge Property that returns the bend edge associated with the note.
Color Gets/Sets color of the DrawingNote.
DimensionStyle Gets/Sets the DimensionStyle associated with the LeaderNote.
FormattedBendNote
Gets and sets the fully formatted string that defines the contents of the
bend note.
FormattedText Gets/Sets formatted text of the DrawingNote.
HideValue Gets and sets whether to display the bend note value in the note.
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
BendNote Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Text Gets/Sets text of the DrawingNote.
Type Returns an ObjectTypeEnum indicating this object's type.
UnitAttributes Get the unit attributes associated with the LeaderNote.
UseBackgroundColor Gets/Sets the UseBackgroundColor associated with the LeaderNote.
UsePartUnits
Gets and sets whether to use model units or the units specified by
dimension style.
VerticalJustification Gets/Sets vertical justification of the DrawingNote.
WidthScale Gets/Sets the width scale factor of the DrawingNote.
Accessed From
BendNotes.Add, BendNotes.Item
Samples
Name Description
Create bend
note
This sample demonstrates the creation of a bend note on the drawing view of a
flat pattern.
Version
Introduced in version 2010
BendNote.Application Property
Parent Object: BendNote
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendNote.Application() As Object
Property Value
This is a read only property whose value is an Object.
BendNote Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.AttributeSets Property
Parent Object: BendNote
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendNote.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
BendNote.BackgroundColor Property
Parent Object: BendNote
Description
Gets/Sets the BackgroundColor associated with the LeaderNote.
Syntax
BendNote.BackgroundColor() As Color
Property Value
This is a read/write property whose value is a Color.
BendNote Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2017
BendNote.BendEdge Property
Parent Object: BendNote
Description
Property that returns the bend edge associated with the note.
Syntax
BendNote.BendEdge() As DrawingCurve
Property Value
This is a read only property whose value is a DrawingCurve.
Version
Introduced in version 2010
BendNote.Color Property
Parent Object: BendNote
Description
Gets/Sets color of the DrawingNote.
Syntax
BendNote.Color() As Color
Property Value
This is a read/write property whose value is a Color.
BendNote Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.Delete Method
Parent Object: BendNote
Description
Method that deletes the DrawingNote.
Syntax
BendNote.Delete()
Version
Introduced in version 2010
BendNote.DimensionStyle Property
Parent Object: BendNote
Description
Gets/Sets the DimensionStyle associated with the LeaderNote.
Syntax
BendNote.DimensionStyle() As DimensionStyle
Property Value
This is a read/write property whose value is a DimensionStyle.
Version
Introduced in version 2010
BendNote Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
BendNote.FormattedBendNote Property
Parent Object: BendNote
Description
Gets and sets the fully formatted string that defines the contents of the bend note.
Syntax
BendNote.FormattedBendNote() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
BendNote.FormattedText Property
Parent Object: BendNote
Description
Gets/Sets formatted text of the DrawingNote.
Syntax
BendNote.FormattedText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
BendNote.GetReferenceKey Method
BendNote Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Parent Object: BendNote
Description
Method that generates and returns the reference key for this entity.
Syntax
BendNote.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BendNote.HideValue Property
Parent Object: BendNote
Description
Gets and sets whether to display the bend note value in the note.
Syntax
BendNote.HideValue() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendNote Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.HorizontalJustification Property
Parent Object: BendNote
Description
Gets/Sets horizontal justification of the DrawingNote.
Syntax
BendNote.HorizontalJustification() As HorizontalTextAlignmentEnum
Property Value
This is a read/write property whose value is a HorizontalTextAlignmentEnum.
Version
Introduced in version 2010
BendNote.Layer Property
Parent Object: BendNote
Description
Gets/Sets the layer used by the DrawingNote.
Syntax
BendNote.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
BendNote Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.Leader Property
Parent Object: BendNote
Description
Property that returns the Leader object.
Syntax
BendNote.Leader() As Leader
Property Value
This is a read only property whose value is a Leader.
Version
Introduced in version 2010
BendNote.LineSpacing Property
Parent Object: BendNote
Description
Gets/Sets the LineSpacing used by the DrawingNote.
Syntax
BendNote.LineSpacing() As Double
Property Value
This is a read/write property whose value is a Double.
BendNote Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.LineSpacingType Property
Parent Object: BendNote
Description
Gets/Sets the LineSpacingType used by the DrawingNote.
Syntax
BendNote.LineSpacingType() As TextLineSpacingTypeEnum
Property Value
This is a read/write property whose value is a TextLineSpacingTypeEnum.
Version
Introduced in version 2010
BendNote.Parent Property
Parent Object: BendNote
Description
Property that returns the parent sheet of the object.
Syntax
BendNote.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
BendNote Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.Position Property
Parent Object: BendNote
Description
Gets/Sets the position of the DrawingNote on the sheet.
Syntax
BendNote.Position() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2010
BendNote.RangeBox Property
Parent Object: BendNote
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
BendNote.RangeBox() As Box2d
Property Value
This is a read only property whose value is a Box2d.
BendNote Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.Rotation Property
Parent Object: BendNote
Description
Gets/Sets the rotation of the LeaderNote.
Syntax
BendNote.Rotation() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2016
BendNote.ShowTextBorder Property
Parent Object: BendNote
Description
Gets/Sets whether to show the text border or not.
Syntax
BendNote.ShowTextBorder() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendNote Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2023
BendNote.StackedTextPosition Property
Parent Object: BendNote
Description
Gets and sets the position (alignment) of the stacked text with respect to regular text.
Syntax
BendNote.StackedTextPosition() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2010
BendNote.Text Property
Parent Object: BendNote
Description
Gets/Sets text of the DrawingNote.
Syntax
BendNote.Text() As String
Property Value
This is a read/write property whose value is a String.
BendNote Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.Type Property
Parent Object: BendNote
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendNote.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BendNote.UnitAttributes Property
Parent Object: BendNote
Description
Get the unit attributes associated with the LeaderNote.
Syntax
BendNote.UnitAttributes() As UnitAttributes
Property Value
This is a read only property whose value is a UnitAttributes.
BendNote Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2016
BendNote.UseBackgroundColor Property
Parent Object: BendNote
Description
Gets/Sets the UseBackgroundColor associated with the LeaderNote.
Syntax
BendNote.UseBackgroundColor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
BendNote.UsePartUnits Property
Parent Object: BendNote
Description
Gets and sets whether to use model units or the units specified by dimension style.
Syntax
BendNote.UsePartUnits() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendNote Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote.VerticalJustification Property
Parent Object: BendNote
Description
Gets/Sets vertical justification of the DrawingNote.
Syntax
BendNote.VerticalJustification() As VerticalTextAlignmentEnum
Property Value
This is a read/write property whose value is a VerticalTextAlignmentEnum.
Version
Introduced in version 2010
BendNote.WidthScale Property
Parent Object: BendNote
Description
Gets/Sets the width scale factor of the DrawingNote.
Syntax
BendNote.WidthScale() As Double
Property Value
This is a read/write property whose value is a Double.
BendNote Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
Version
Introduced in version 2010
BendNote Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7640.htm 13/06/2025
BendNotes Object
Description
The BendNotes collection object provides access to all of the bend notes on the sheet.
Methods
Name Description
Add
Method that creates a bend note based on the input bend edge on the sheet. The initial
placement of the bend note will be along the bend edge without a leader.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified BendNote object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingNotes.BendNotes
Samples
Name Description
Create bend
note
This sample demonstrates the creation of a bend note on the drawing view of a
flat pattern.
Version
Introduced in version 2010
BendNotes.Add Method
Parent Object: BendNotes
BendNotes Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA30D.htm 13/06/2025
Description
Method that creates a bend note based on the input bend edge on the sheet. The initial placement
of the bend note will be along the bend edge without a leader.
Syntax
BendNotes.Add( BendEdge As DrawingCurve, [DimensionStyle] As Variant ) As BendNote
Parameters
Name Type Description
BendEdge DrawingCurve
Input DrawingCurve object that specifies the bend edge to create
the note for. If the DrawingCurve does not represent a bend edge,
the method returns an error.
DimensionStyle Variant
Optional input Variant that specifies which dimension style to
use for the note. The dimension style can be specified by
providing the name of an existing style or by supplying a
DimensionStyle object.
This is an optional argument whose default value is null.
Samples
Name Description
Create bend
note
This sample demonstrates the creation of a bend note on the drawing view of a
flat pattern.
Version
Introduced in version 2010
BendNotes.Application Property
Parent Object: BendNotes
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BendNotes Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA30D.htm 13/06/2025
Syntax
BendNotes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BendNotes.Count Property
Parent Object: BendNotes
Description
Property that returns the number of items in the collection.
Syntax
BendNotes.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BendNotes.Item Property
Parent Object: BendNotes
Description
Returns the specified BendNote object from the collection.
BendNotes Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA30D.htm 13/06/2025
Syntax
BendNotes.Item( Index As Long ) As BendNote
Property Value
This is a read only property whose value is a BendNote.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 2010
BendNotes.Type Property
Parent Object: BendNotes
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendNotes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BendNotes Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA30D.htm 13/06/2025
BendOptions Object
Description
The BendOptions object defines the settings that influence the creation of a bend in a sheet metal
part.
Methods
Name Description
Copy Function that creates a copy of this BendOptions object.
Properties
Name Description
BendReliefDepth Provides access to the bend relief depth of a sheet metal feature.
BendReliefShape
Defines the type of bend relief shape to use for the associated sheet
metal feature.
BendReliefWidth Provides access to the bend relief width of a sheet metal feature.
BendTransition
Defines the type of bend transition to use for the associated sheet
metal feature.
BendTransitionArcRadius Provides access to the radius for an arc bend transition.
MinimumRemnant Provides access to the minimum remnant of a sheet metal feature.
Parent Property that returns the parent object of this BendOptions object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BendDefinition.BendOptions, BendOptions.Copy, ContourFlangeDefinition.BendOptions,
CornerDefinition.BendOptions, FlangeDefinition.BendOptions, FoldDefinition.BendOptions,
HemDefinition.BendOptions
Version
Introduced in version 2009
BendOptions.BendReliefDepth Property
Parent Object: BendOptions
Description
BendOptions Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
Provides access to the bend relief depth of a sheet metal feature.
Syntax
BendOptions.BendReliefDepth() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2009
BendOptions.BendReliefShape Property
Parent Object: BendOptions
Description
Defines the type of bend relief shape to use for the associated sheet metal feature.
Syntax
BendOptions.BendReliefShape() As BendReliefShapeEnum
Property Value
This is a read/write property whose value is a BendReliefShapeEnum.
Version
Introduced in version 2009
BendOptions.BendReliefWidth Property
Parent Object: BendOptions
Description
Provides access to the bend relief width of a sheet metal feature.
BendOptions Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
Syntax
BendOptions.BendReliefWidth() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2009
BendOptions.BendTransition Property
Parent Object: BendOptions
Description
Defines the type of bend transition to use for the associated sheet metal feature.
Syntax
BendOptions.BendTransition() As BendTransitionEnum
Property Value
This is a read/write property whose value is a BendTransitionEnum.
Version
Introduced in version 2009
BendOptions.BendTransitionArcRadius
Property
Parent Object: BendOptions
Description
Provides access to the radius for an arc bend transition.
BendOptions Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
Syntax
BendOptions.BendTransitionArcRadius() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2009
BendOptions.Copy Method
Parent Object: BendOptions
Description
Function that creates a copy of this BendOptions object.
Syntax
BendOptions.Copy() As BendOptions
Version
Introduced in version 2010
BendOptions.MinimumRemnant Property
Parent Object: BendOptions
Description
Provides access to the minimum remnant of a sheet metal feature.
Syntax
BendOptions.MinimumRemnant() As Variant
BendOptions Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2009
BendOptions.Parent Property
Parent Object: BendOptions
Description
Property that returns the parent object of this BendOptions object.
Syntax
BendOptions.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
BendOptions.Type Property
Parent Object: BendOptions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendOptions.Type() As ObjectTypeEnum
BendOptions Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
BendOptions Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC6C2.htm 13/06/2025
BendPartFeature Object
Derived from: PartFeature Object
Description
The BendPartFeature object represents an existing bend part feature in an Inventor part document.
Methods
Name Description
Delete Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Edit Method that edits the bend part feature using the new inputs.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
RemoveParticipant Method that removes the specified participant from the assembly feature. This method fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BendInSketchNormalDirection Property that gets and sets the bend direction.
BendLine Property that gets and sets the sketch line that represents the bend line.
BendMinimum Property that gets and sets whether minimum bend should be applied.
BendPartType
Property that returns the type of the bend part feature. The valid return values are kArcLengthAndAngleBendPart,
kRadiusAndAngleBendPart and kRadiusAndArcLengthBendPart.
BendSide Property that gets and sets the bend side.
ConsumeInputs Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
ExtendedName Read-only property that returns the full feature name including any extended information.
Faces
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputOne Input Variant that defines the first input for the bend arc.
InputTwo Input Variant that defines the second input for the bend arc.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BendPartFeatureProxy.NativeObject, BendPartFeatures.Add, BendPartFeatures.Item
BendPartFeature Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Derived Classes
BendPartFeatureProxy
Version
Introduced in version 2008
BendPartFeature.Adaptive Property
Parent Object: BendPartFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BendPartFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeature.Appearance Property
Parent Object: BendPartFeature
Description
Gets and sets the current appearance of the feature.
Syntax
BendPartFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BendPartFeature.AppearanceSourceType Property
Parent Object: BendPartFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
BendPartFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
BendPartFeature Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Version
Introduced in version 2014
BendPartFeature.Application Property
Parent Object: BendPartFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Syntax
BendPartFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BendPartFeature.AttributeSets Property
Parent Object: BendPartFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendPartFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2008
BendPartFeature.BendInSketchNormalDirection Property
Parent Object: BendPartFeature
Description
Property that gets and sets the bend direction.
Syntax
BendPartFeature.BendInSketchNormalDirection() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendPartFeature Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Version
Introduced in version 2010
BendPartFeature.BendLine Property
Parent Object: BendPartFeature
Description
Property that gets and sets the sketch line that represents the bend line.
Syntax
BendPartFeature.BendLine() As SketchLine
Property Value
This is a read/write property whose value is a SketchLine.
Version
Introduced in version 2010
BendPartFeature.BendMinimum Property
Parent Object: BendPartFeature
Description
Property that gets and sets whether minimum bend should be applied.
Syntax
BendPartFeature.BendMinimum() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BendPartFeature.BendPartType Property
Parent Object: BendPartFeature
Description
Property that returns the type of the bend part feature. The valid return values are kArcLengthAndAngleBendPart, kRadiusAndAngleBendPart and
kRadiusAndArcLengthBendPart.
Syntax
BendPartFeature.BendPartType() As BendPartTypeEnum
Property Value
This is a read only property whose value is a BendPartTypeEnum.
BendPartFeature Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Version
Introduced in version 2010
BendPartFeature.BendSide Property
Parent Object: BendPartFeature
Description
Property that gets and sets the bend side.
Syntax
BendPartFeature.BendSide() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
Version
Introduced in version 2010
BendPartFeature.ConsumeInputs Property
Parent Object: BendPartFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BendPartFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeature.Delete Method
Parent Object: BendPartFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
BendPartFeature.Delete( [RetainConsumedSketches] As Boolean, [RetainDependentFeaturesAndSketches] As Boolean,
[RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature this argument is ignored.
This is an optional argument whose default value is False.
BendPartFeature Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent features should be deleted. If there are no
dependent features this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features should be deleted. If there are no
dependent work features this argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
BendPartFeature.Edit Method
Parent Object: BendPartFeature
Description
Method that edits the bend part feature using the new inputs.
Syntax
BendPartFeature.Edit( BendLine As SketchLine, BendPartType As BendPartTypeEnum, InputOne As Variant, InputTwo As Variant, BendSide
As PartFeatureExtentDirectionEnum, BendInSketchNormalDirection As Boolean, [Body] As Variant, [BendMinimum] As Boolean )
Parameters
Name Type Description
BendLine SketchLine Input SketchLine object that represents the bend line.
BendPartType BendPartTypeEnum
Input constant that indicates the type of the bend part feature.
The BendPartType argument specifies the type of the input values used to define
the bend arc. The values specified for the InputOne and InputTwo arguments will
depend on the value specified for this argument.
The valid input is one of the constants in BendPartTypeEnum:
kArcLengthAndAngleBendPart, kRadiusAndAngleBendPart and
kRadiusAndArcLengthBendPart.
The following table describes how this argument determines the values that need
to be specified for the InputOne and InputTwo arguments:
BendPartType
InputOne InputOne
kArcLengthAndAngleBendPart Arc
Length
Angle
kRadiusAndAngleBendPart Radius Angle
kRadiusAndArcLengthBendPart Radius Arc
Length
For example, if kArcLengthAndAngleBendPart is specified for this argument,
then the arc length value should be specified in the InputOne argument and the
angle value should be specified in the InputTwo argument.
InputOne Variant
Input Variant that defines the first input for the bend arc.
The InputOne parameter can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter.
The type of the input value will be determined by the BendPartType argument.
The following table shows what this input value should be based on the
BendPartType argument:
BendPartType
Page BendPartFeature Object 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
InputOne
kArcLengthAndAngleBendPart Arc
Length
kRadiusAndAngleBendPart Radius
kRadiusAndArcLengthBendPart Radius
For example, if the bend is defined using the arc length and angle as indicated by
the BendPartType argument being kArcLengthAndAngleBendPart, then this
argument should be used to specify the arc length of the bend arc. Similarly, if the
bend is defined using the radius and angle as indicated by the BendPartType
argument being kRadiusAndAngleBendPart, then this argument should be used to
specify the radius of the bend arc.
If a value is input, the units are the default database units (centimeters for distance
and radians for angle). If a string is input, the units can be specified as part of the
string or it will default to the current unit type for the document.
InputTwo Variant
Input Variant that defines the second input for the bend arc.
The InputTwo parameter can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter.
The type of the input value will be determined by the BendPartType argument.
The following table shows what this input value should be based on the
BendPartType argument:
BendPartType
InputTwo
kArcLengthAndAngleBendPart Angle
kRadiusAndAngleBendPart Angle
kRadiusAndArcLengthBendPart Arc
Length
For example, if the bend is defined using the arc length and angle as indicated by
the BendPartType argument being kArcLengthAndAngleBendPart, then this
argument should be used to specify the angle of the bend arc. Similarly, if the
bend is defined using the radius and arc length as indicated by the BendPartType
argument being kRadiusAndArcLengthBendPart, then this argument should be
used to specify the arc length of the bend arc. If a value is input, the units are the
default database units (centimeters for distance and radians for angle). If a string
is input, the units can be specified as part of the string or it will default to the
current unit type for the document.
BendSide PartFeatureExtentDirectionEnum
Input constant that indicates which side of the model to bend.
The bend side is specified with respect to the input bend line (sketch line), i.e.
whether the model to the left, right or both sides of the bend line should be bent.
The left side is the natural normal direction at any point on the sketch line (the
cross-product of the vector representing the direction of the sketch line and the
vector representing the sketch normal). The right side refers to the direction
opposite to that of the natural normal. The following figure demonstrates an
example of how the bend side is determined based on the normal direction of the
sketch line.
BendPartFeature Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
The figure represents a model in which a sketch plane has been drawn on the
rectangular side face. The sketch plane consists of a single sketch line which
represents the bend line. The sketch plane normal direction is perpendicular to the
face and coming out of the model. The direction of the sketch line which can be
inferred from the start point and end points of the sketch line is towards the right.
Therefore, the normal vector at any point on the sketch line is pointing in the
downward direction (imagine standing on the normal side of the sketch plane and
viewing in the direction of the sketch line, the normal of the sketch line will be
towards your right). For the bend part feature, the left side of the bend
corresponds to this normal direction of the sketch line. As indicated by the
preview in the figure, when the left side is specified, the model in the normal
direction of the sketch line is selected for the bend.
The valid input is one of the constants in PartFeatureExtentDirectionEnum:
kNegativeExtentDirection, kPositiveExtentDirection or
kSymmetricExtentDirection.
• If kNegativeExtentDirection is specified, the model on the left side of the
input bend line will be bent.
• If kPositiveExtentDirection is specified, the model on the right side of the
input bend line will be bent.
• If kSymmetricExtentDirection is specified, the model on both sides of the
input bend line will be bent.
BendInSketchNormalDirection Boolean
Input boolean that indicates the bend direction. If True is specified, the model will
be bent in the direction normal to the sketch on which the input bend line (sketch
line) exists. If False is specified, the model will be bent in the direction opposite
to the sketch normal. If no value is explicitly specified, the default value of True
will be used.
Body Variant Optional input SurfaceBody object that specifies the solid body to bend. If not
specified, the body used for creating the feature is used.
BendPartFeature Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
This is an optional argument whose default value is null.
BendMinimum Boolean
Optional Input boolean that indicates whether minimum bend should be applied.
If True is specified, minium bend will be applied. If no value is explicitly
specified, the default value of True will be used.
This is an optional argument whose default value is True.
Version
Introduced in version 2010
BendPartFeature.ExtendedName Property
Parent Object: BendPartFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BendPartFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BendPartFeature.Faces Property
Parent Object: BendPartFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by additional modeling operations it will not be returned.
Syntax
BendPartFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2008
BendPartFeature.FeatureDimensions Property
Parent Object: BendPartFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
BendPartFeature.FeatureDimensions() As FeatureDimensions
BendPartFeature Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
BendPartFeature.GetReferenceKey Method
Parent Object: BendPartFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
BendPartFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2008
BendPartFeature.GetSuppressionCondition Method
Parent Object: BendPartFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
Syntax
BendPartFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As ComparisonTypeEnum, Expression As Variant ) As
Boolean
Parameters
Name Type Description
Parameter Parameter Parameter object that specifies the parameter whose value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison, kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 2008
BendPartFeature.HealthStatus Property
BendPartFeature Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Parent Object: BendPartFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
BendPartFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2008
BendPartFeature.InputOne Property
Parent Object: BendPartFeature
Description
Input Variant that defines the first input for the bend arc.
Syntax
BendPartFeature.InputOne() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
BendPartFeature.InputTwo Property
Parent Object: BendPartFeature
Description
Input Variant that defines the second input for the bend arc.
Syntax
BendPartFeature.InputTwo() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
BendPartFeature.IsOwnedByFeature Property
Parent Object: BendPartFeature
BendPartFeature Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning feature.
Syntax
BendPartFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeature.Name Property
Parent Object: BendPartFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BendPartFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
BendPartFeature.OwnedBy Property
Parent Object: BendPartFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature property returns False.
Syntax
BendPartFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
BendPartFeature.Parameters Property
Parent Object: BendPartFeature
Description
Property that returns all the parameters associated with the feature.
BendPartFeature Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Syntax
BendPartFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2008
BendPartFeature.Parent Property
Parent Object: BendPartFeature
Description
Property that returns the parent of the feature.
Syntax
BendPartFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2008
BendPartFeature.Participants Property
Parent Object: BendPartFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
BendPartFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2008
BendPartFeature.RangeBox Property
Parent Object: BendPartFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose this object.
Syntax
BendPartFeature.RangeBox() As Box
BendPartFeature Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2008
BendPartFeature.RemoveParticipant Method
Parent Object: BendPartFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
BendPartFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2008
BendPartFeature.SetAffectedBodies Method
Parent Object: BendPartFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BendPartFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BendPartFeature.SetEndOfPart Method
Parent Object: BendPartFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BendPartFeature.SetEndOfPart( Before As Boolean )
BendPartFeature Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this work feature. A value of True
indicates before and False indicates after.
Version
Introduced in version 2008
BendPartFeature.SetSuppressionCondition Method
Parent Object: BendPartFeature
Description
Method that sets the suppression condition for the feature.
Syntax
BendPartFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter Parameter object that specifies the parameter whose value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can either be a string, a
value or a parameter object. If a value is input, the database units for the units defined by the parameter
are used. For instance, if the parameter defines length units, the value is assumed to be in centimeters. If a
string is input, the units can be specified as part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units, the current length units of the document are
used.
Version
Introduced in version 2008
BendPartFeature.Shared Property
Parent Object: BendPartFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BendPartFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeature.Suppressed Property
Parent Object: BendPartFeature
BendPartFeature Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BendPartFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeature.SurfaceBodies Property
Parent Object: BendPartFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BendPartFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BendPartFeature.Type Property
Parent Object: BendPartFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendPartFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
BendPartFeature Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE5B4.htm 13/06/2025
BendPartFeatureProxy Object
Derived from: BendPartFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Edit Method that edits the bend part feature using the new inputs.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
RemoveParticipant Method that removes the specified participant from the assembly feature. This method fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEndOfPart Method that repositions the end-of-part marker relative to the object this method is called from.
SetSuppressionCondition Method that sets the suppression condition for the feature.
Properties
Name Description
Adaptive Gets and sets whether this feature is adaptive or not.
Appearance Gets and sets the current appearance of the feature.
AppearanceSourceType Gets and sets the source of the appearance for the feature.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BendInSketchNormalDirection Property that gets and sets the bend direction.
BendLine Property that gets and sets the sketch line that represents the bend line.
BendMinimum Property that gets and sets whether minimum bend should be applied.
BendPartType
Property that returns the type of the bend part feature. The valid return values are kArcLengthAndAngleBendPart,
kRadiusAndAngleBendPart and kRadiusAndArcLengthBendPart.
BendSide Property that gets and sets the bend side.
ConsumeInputs Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
ExtendedName Read-only property that returns the full feature name including any extended information.
Faces
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
InputOne Input Variant that defines the first input for the bend arc.
InputTwo Input Variant that defines the second input for the bend arc.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
BendPartFeatureProxy Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Version
Introduced in version 2008
BendPartFeatureProxy.Adaptive Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BendPartFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeatureProxy.Appearance Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
BendPartFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BendPartFeatureProxy.AppearanceSourceType Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
BendPartFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
BendPartFeatureProxy Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Version
Introduced in version 2014
BendPartFeatureProxy.Application Property
Parent Object: BendPartFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Syntax
BendPartFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BendPartFeatureProxy.AttributeSets Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BendPartFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2008
BendPartFeatureProxy.BendInSketchNormalDirection Property
Parent Object: BendPartFeatureProxy
Description
Property that gets and sets the bend direction.
Syntax
BendPartFeatureProxy.BendInSketchNormalDirection() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BendPartFeatureProxy Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Version
Introduced in version 2010
BendPartFeatureProxy.BendLine Property
Parent Object: BendPartFeatureProxy
Description
Property that gets and sets the sketch line that represents the bend line.
Syntax
BendPartFeatureProxy.BendLine() As SketchLine
Property Value
This is a read/write property whose value is a SketchLine.
Version
Introduced in version 2010
BendPartFeatureProxy.BendMinimum Property
Parent Object: BendPartFeatureProxy
Description
Property that gets and sets whether minimum bend should be applied.
Syntax
BendPartFeatureProxy.BendMinimum() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BendPartFeatureProxy.BendPartType Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the type of the bend part feature. The valid return values are kArcLengthAndAngleBendPart, kRadiusAndAngleBendPart and
kRadiusAndArcLengthBendPart.
Syntax
BendPartFeatureProxy.BendPartType() As BendPartTypeEnum
Property Value
This is a read only property whose value is a BendPartTypeEnum.
BendPartFeatureProxy Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Version
Introduced in version 2010
BendPartFeatureProxy.BendSide Property
Parent Object: BendPartFeatureProxy
Description
Property that gets and sets the bend side.
Syntax
BendPartFeatureProxy.BendSide() As PartFeatureExtentDirectionEnum
Property Value
This is a read/write property whose value is a PartFeatureExtentDirectionEnum.
Version
Introduced in version 2010
BendPartFeatureProxy.ConsumeInputs Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BendPartFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeatureProxy.ContainingOccurrence Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned occurrence is the containing
occurrence.
Syntax
BendPartFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
BendPartFeatureProxy Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Version
Introduced in version 2008
BendPartFeatureProxy.Delete Method
Parent Object: BendPartFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
BendPartFeatureProxy.Delete( [RetainConsumedSketches] As Boolean, [RetainDependentFeaturesAndSketches] As Boolean,
[RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within the feature should be deleted. If the
feature being deleted is not a sketch based feature this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent features should be deleted. If there are no
dependent features this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features should be deleted. If there are no
dependent work features this argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
BendPartFeatureProxy.Edit Method
Parent Object: BendPartFeatureProxy
Description
Method that edits the bend part feature using the new inputs.
Syntax
BendPartFeatureProxy.Edit( BendLine As SketchLine, BendPartType As BendPartTypeEnum, InputOne As Variant, InputTwo As Variant,
BendSide As PartFeatureExtentDirectionEnum, BendInSketchNormalDirection As Boolean, [Body] As Variant, [BendMinimum] As Boolean )
Parameters
Name Type Description
BendLine SketchLine Input SketchLine object that represents the bend line.
BendPartType BendPartTypeEnum
Input constant that indicates the type of the bend part feature.
The BendPartType argument specifies the type of the input values used to define
the bend arc. The values specified for the InputOne and InputTwo arguments will
depend on the value specified for this argument.
The valid input is one of the constants in BendPartTypeEnum:
kArcLengthAndAngleBendPart, kRadiusAndAngleBendPart and
kRadiusAndArcLengthBendPart.
The following table describes how this argument determines the values that need
to be specified for the InputOne and InputTwo arguments:
BendPartFeatureProxy Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
BendPartType
InputOne InputOne
kArcLengthAndAngleBendPart Arc
Length
Angle
kRadiusAndAngleBendPart Radius Angle
kRadiusAndArcLengthBendPart Radius Arc
Length
For example, if kArcLengthAndAngleBendPart is specified for this argument,
then the arc length value should be specified in the InputOne argument and the
angle value should be specified in the InputTwo argument.
InputOne Variant
Input Variant that defines the first input for the bend arc.
The InputOne parameter can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter.
The type of the input value will be determined by the BendPartType argument.
The following table shows what this input value should be based on the
BendPartType argument:
BendPartType
InputOne
kArcLengthAndAngleBendPart Arc
Length
kRadiusAndAngleBendPart Radius
kRadiusAndArcLengthBendPart Radius
For example, if the bend is defined using the arc length and angle as indicated by
the BendPartType argument being kArcLengthAndAngleBendPart, then this
argument should be used to specify the arc length of the bend arc. Similarly, if the
bend is defined using the radius and angle as indicated by the BendPartType
argument being kRadiusAndAngleBendPart, then this argument should be used to
specify the radius of the bend arc.
If a value is input, the units are the default database units (centimeters for distance
and radians for angle). If a string is input, the units can be specified as part of the
string or it will default to the current unit type for the document.
InputTwo Variant
Input Variant that defines the second input for the bend arc.
The InputTwo parameter can be either a numeric value or a string. A parameter
for this value will be created and the supplied string or value is assigned to the
parameter.
The type of the input value will be determined by the BendPartType argument.
The following table shows what this input value should be based on the
BendPartType argument:
BendPartType
InputTwo
kArcLengthAndAngleBendPart Angle
kRadiusAndAngleBendPart Angle
kRadiusAndArcLengthBendPart Arc
Length
For example, if the bend is defined using the arc length and angle as indicated by
the BendPartType argument being kArcLengthAndAngleBendPart, then this
argument should be used to specify the angle of the bend arc. Similarly, if the
bend is defined using the radius and arc length as indicated by the BendPartType
argument being kRadiusAndArcLengthBendPart, then this argument should be
used to specify the arc length of the bend arc. If a value is input, the units are the
default database units (centimeters for distance and radians for angle). If a string
BendPartFeatureProxy Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
is input, the units can be specified as part of the string or it will default to the
current unit type for the document.
BendSide PartFeatureExtentDirectionEnum
Input constant that indicates which side of the model to bend.
The bend side is specified with respect to the input bend line (sketch line), i.e.
whether the model to the left, right or both sides of the bend line should be bent.
The left side is the natural normal direction at any point on the sketch line (the
cross-product of the vector representing the direction of the sketch line and the
vector representing the sketch normal). The right side refers to the direction
opposite to that of the natural normal. The following figure demonstrates an
example of how the bend side is determined based on the normal direction of the
sketch line.
The figure represents a model in which a sketch plane has been drawn on the
rectangular side face. The sketch plane consists of a single sketch line which
represents the bend line. The sketch plane normal direction is perpendicular to the
face and coming out of the model. The direction of the sketch line which can be
inferred from the start point and end points of the sketch line is towards the right.
Therefore, the normal vector at any point on the sketch line is pointing in the
downward direction (imagine standing on the normal side of the sketch plane and
viewing in the direction of the sketch line, the normal of the sketch line will be
towards your right). For the bend part feature, the left side of the bend
corresponds to this normal direction of the sketch line. As indicated by the
preview in the figure, when the left side is specified, the model in the normal
direction of the sketch line is selected for the bend.
The valid input is one of the constants in PartFeatureExtentDirectionEnum:
kNegativeExtentDirection, kPositiveExtentDirection or
kSymmetricExtentDirection.
• If kNegativeExtentDirection is specified, the model on the left side of the
input bend line will be bent.
BendPartFeatureProxy Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
• If kPositiveExtentDirection is specified, the model on the right side of the
input bend line will be bent.
• If kSymmetricExtentDirection is specified, the model on both sides of the
input bend line will be bent.
BendInSketchNormalDirection Boolean
Input boolean that indicates the bend direction. If True is specified, the model will
be bent in the direction normal to the sketch on which the input bend line (sketch
line) exists. If False is specified, the model will be bent in the direction opposite
to the sketch normal. If no value is explicitly specified, the default value of True
will be used.
Body Variant
Optional input SurfaceBody object that specifies the solid body to bend. If not
specified, the body used for creating the feature is used.
This is an optional argument whose default value is null.
BendMinimum Boolean
Optional Input boolean that indicates whether minimum bend should be applied.
If True is specified, minium bend will be applied. If no value is explicitly
specified, the default value of True will be used.
This is an optional argument whose default value is True.
Version
Introduced in version 2010
BendPartFeatureProxy.ExtendedName Property
Parent Object: BendPartFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BendPartFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BendPartFeatureProxy.Faces Property
Parent Object: BendPartFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object will return the faces that still
currently exist in the part. For example, if a face has been consumed by additional modeling operations it will not be returned.
Syntax
BendPartFeatureProxy.Faces() As Faces
BendPartFeatureProxy Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2008
BendPartFeatureProxy.FeatureDimensions Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
BendPartFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
BendPartFeatureProxy.GetReferenceKey Method
Parent Object: BendPartFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
BendPartFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2008
BendPartFeatureProxy.GetSuppressionCondition Method
Parent Object: BendPartFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
BendPartFeatureProxy Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Syntax
BendPartFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As ComparisonTypeEnum, Expression As
Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter Parameter object that specifies the parameter whose value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid return types are
kEqualToComparison, kNotEqualToComparison, kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can either be a string or a
parameter object.
Version
Introduced in version 2008
BendPartFeatureProxy.HealthStatus Property
Parent Object: BendPartFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
BendPartFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2008
BendPartFeatureProxy.InputOne Property
Parent Object: BendPartFeatureProxy
Description
Input Variant that defines the first input for the bend arc.
Syntax
BendPartFeatureProxy.InputOne() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
BendPartFeatureProxy.InputTwo Property
Parent Object: BendPartFeatureProxy
BendPartFeatureProxy Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Description
Input Variant that defines the second input for the bend arc.
Syntax
BendPartFeatureProxy.InputTwo() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
BendPartFeatureProxy.IsOwnedByFeature Property
Parent Object: BendPartFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning feature.
Syntax
BendPartFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeatureProxy.Name Property
Parent Object: BendPartFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BendPartFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2008
BendPartFeatureProxy.NativeObject Property
Parent Object: BendPartFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
BendPartFeatureProxy Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Syntax
BendPartFeatureProxy.NativeObject() As BendPartFeature
Property Value
This is a read only property whose value is a BendPartFeature.
Version
Introduced in version 2008
BendPartFeatureProxy.OwnedBy Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature property returns False.
Syntax
BendPartFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
BendPartFeatureProxy.Parameters Property
Parent Object: BendPartFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
BendPartFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2008
BendPartFeatureProxy.Parent Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
BendPartFeatureProxy.Parent() As ComponentDefinition
BendPartFeatureProxy Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2008
BendPartFeatureProxy.Participants Property
Parent Object: BendPartFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
BendPartFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2008
BendPartFeatureProxy.RangeBox Property
Parent Object: BendPartFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose this object.
Syntax
BendPartFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2008
BendPartFeatureProxy.RemoveParticipant Method
Parent Object: BendPartFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
BendPartFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
BendPartFeatureProxy Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Occurrence ComponentOccurrence ComponentOccurrence object that specifies the participant to be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2008
BendPartFeatureProxy.SetAffectedBodies Method
Parent Object: BendPartFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BendPartFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BendPartFeatureProxy.SetEndOfPart Method
Parent Object: BendPartFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BendPartFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this work feature. A value of True
indicates before and False indicates after.
Version
Introduced in version 2008
BendPartFeatureProxy.SetSuppressionCondition Method
Parent Object: BendPartFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
BendPartFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As ComparisonTypeEnum, Expression As
Variant )
BendPartFeatureProxy Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Parameters
Name Type Description
Parameter Parameter Parameter object that specifies the parameter whose value is to be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value. This can either be a string, a
value or a parameter object. If a value is input, the database units for the units defined by the parameter
are used. For instance, if the parameter defines length units, the value is assumed to be in centimeters. If a
string is input, the units can be specified as part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units, the current length units of the document are
used.
Version
Introduced in version 2008
BendPartFeatureProxy.Shared Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BendPartFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeatureProxy.Suppressed Property
Parent Object: BendPartFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BendPartFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
BendPartFeatureProxy.SurfaceBodies Property
Parent Object: BendPartFeatureProxy
Description
BendPartFeatureProxy Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
Property that returns the bodies that this feature has created or modified.
Syntax
BendPartFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BendPartFeatureProxy.Type Property
Parent Object: BendPartFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendPartFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
BendPartFeatureProxy Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2702.htm 13/06/2025
BendPartFeatures Object
Description
The BendPartFeatures collection object provides access to existing bend part features and supports
the ability to create new bend part features.
Methods
Name Description
Add
Method that creates a new bend part feature. If the bend part feature is created
successfully, a BendPartFeature object corresponding to the newly created bend part
feature is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified BendPartFeature object from the collection. This is the default
property of the BendPartFeatures collection object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.BendPartFeatures, SheetMetalFeatures.BendPartFeatures
Version
Introduced in version 2008
BendPartFeatures.Add Method
Parent Object: BendPartFeatures
Description
Method that creates a new bend part feature. If the bend part feature is created successfully, a
BendPartFeature object corresponding to the newly created bend part feature is returned.
BendPartFeatures Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
Syntax
BendPartFeatures.Add( BendLine As SketchLine, BendPartType As BendPartTypeEnum,
InputOne As Variant, InputTwo As Variant, BendSide As PartFeatureExtentDirectionEnum,
BendInSketchNormalDirection As Boolean, [Body] As Variant, [BendMinimum] As Boolean )
As BendPartFeature
Parameters
Name Type Description
BendLine SketchLine
Input SketchLine object that
represents the bend line.
BendPartType BendPartTypeEnum
Input constant that indicates the
type of the bend part feature.
See Note 1.
InputOne Variant
Input Variant that defines the
first input for the bend arc. See
Note 2.
InputTwo Variant
Input Variant that defines the
second input for the bend arc.
See Note 3.
BendSide PartFeatureExtentDirectionEnum
Input constant that indicates
which side of the model to
bend. See Note 4
BendInSketchNormalDirection Boolean
Input boolean that indicates the
bend direction. If True is
specified, the model will be
bent in the direction normal to
the sketch on which the input
bend line (sketch line) exists. If
False is specified, the model
will be bent in the direction
opposite to the sketch normal.
If no value is explicitly
specified, the default value of
True will be used.
Body Variant
Optional input SurfaceBody
object that specifies the solid
body to bend. If not specified, a
default body is chosen in the
case of multi solid body parts.
This is an optional argument
whose default value is null.
BendMinimum Boolean Optional Input boolean that
indicates whether minimum
bend should be applied. If True
is specified, minium bend will
be applied. If no value is
explicitly specified, the default
BendPartFeatures Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
value of True will be used.
This is an optional argument
whose default value is True.
Notes
Note 1.
The BendPartType argument specifies the type of the input values used to define the bend arc. The
values specified for the InputOne and InputTwo arguments will depend on the value specified for
this argument.
The valid input is one of the constants in BendPartTypeEnum: kArcLengthAndAngleBendPart,
kRadiusAndAngleBendPart and kRadiusAndArcLengthBendPart.
The following table describes how this argument determines the values that need to be specified
for the InputOne and InputTwo arguments:
BendPartType InputOne InputOne
kArcLengthAndAngleBendPart Arc Length Angle
kRadiusAndAngleBendPart Radius Angle
kRadiusAndArcLengthBendPart Radius Arc Length
For example, if kArcLengthAndAngleBendPart is specified for this argument, then the arc length
value should be specified in the InputOne argument and the angle value should be specified in the
InputTwo argument.
Note 2.
The InputOne parameter can be either a numeric value or a string. A parameter for this value will
be created and the supplied string or value is assigned to the parameter.
The type of the input value will be determined by the BendPartType argument. The following
table shows what this input value should be based on the BendPartType argument:
BendPartType InputOne
kArcLengthAndAngleBendPart Arc Length
kRadiusAndAngleBendPart Radius
kRadiusAndArcLengthBendPart Radius
For example, if the bend is defined using the arc length and angle as indicated by the
BendPartType argument being kArcLengthAndAngleBendPart, then this argument should be used
to specify the arc length of the bend arc. Similarly, if the bend is defined using the radius and
angle as indicated by the BendPartType argument being kRadiusAndAngleBendPart, then this
argument should be used to specify the radius of the bend arc.
If a value is input, the units are the default database units (centimeters for distance and radians for
angle). If a string is input, the units can be specified as part of the string or it will default to the
current unit type for the document.
BendPartFeatures Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
Note 3.
The InputTwo parameter can be either a numeric value or a string. A parameter for this value will
be created and the supplied string or value is assigned to the parameter.
The type of the input value will be determined by the BendPartType argument. The following
table shows what this input value should be based on the BendPartType argument:
BendPartType InputTwo
kArcLengthAndAngleBendPart Angle
kRadiusAndAngleBendPart Angle
kRadiusAndArcLengthBendPart Arc Length
For example, if the bend is defined using the arc length and angle as indicated by the
BendPartType argument being kArcLengthAndAngleBendPart, then this argument should be used
to specify the angle of the bend arc. Similarly, if the bend is defined using the radius and arc
length as indicated by the BendPartType argument being kRadiusAndArcLengthBendPart, then
this argument should be used to specify the arc length of the bend arc. If a value is input, the units
are the default database units (centimeters for distance and radians for angle). If a string is input,
the units can be specified as part of the string or it will default to the current unit type for the
document.
Note 4.
The bend side is specified with respect to the input bend line (sketch line), i.e. whether the model
to the left, right or both sides of the bend line should be bent. The left side is the natural normal
direction at any point on the sketch line (the cross-product of the vector representing the direction
of the sketch line and the vector representing the sketch normal). The right side refers to the
direction opposite to that of the natural normal. The following figure demonstrates an example of
how the bend side is determined based on the normal direction of the sketch line.
BendPartFeatures Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
The figure represents a model in which a sketch plane has been drawn on the rectangular side face.
The sketch plane consists of a single sketch line which represents the bend line. The sketch plane
normal direction is perpendicular to the face and coming out of the model. The direction of the
sketch line which can be inferred from the start point and end points of the sketch line is towards
the right. Therefore, the normal vector at any point on the sketch line is pointing in the downward
direction (imagine standing on the normal side of the sketch plane and viewing in the direction of
the sketch line, the normal of the sketch line will be towards your right). For the bend part feature,
the left side of the bend corresponds to this normal direction of the sketch line. As indicated by the
preview in the figure, when the left side is specified, the model in the normal direction of the
sketch line is selected for the bend.
The valid input is one of the constants in PartFeatureExtentDirectionEnum:
kNegativeExtentDirection, kPositiveExtentDirection or kSymmetricExtentDirection.
• If kNegativeExtentDirection is specified, the model on the left side of the input bend line
will be bent.
• If kPositiveExtentDirection is specified, the model on the right side of the input bend line
will be bent.
• If kSymmetricExtentDirection is specified, the model on both sides of the input bend line
will be bent.
Version
Introduced in version 2010
BendPartFeatures.Application Property
BendPartFeatures Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
Parent Object: BendPartFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendPartFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BendPartFeatures.Count Property
Parent Object: BendPartFeatures
Description
Property that returns the number of items in this collection.
Syntax
BendPartFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2008
BendPartFeatures.Item Property
Parent Object: BendPartFeatures
BendPartFeatures Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
Description
Returns the specified BendPartFeature object from the collection. This is the default property of
the BendPartFeatures collection object.
Syntax
BendPartFeatures.Item( Index As Variant ) As BendPartFeature
Property Value
This is a read only property whose value is a BendPartFeature.
Parameters
Name Type Description
Index Variant
Value that specifies the index of the BendPartFeature to return. This can be either
a numeric value indicating the index of the item in the collection or it can be a
string indicating the attribute set name. If an out-of-range index or a name of a
nonexistent attribute set is provided, an error occurs.
Version
Introduced in version 2008
BendPartFeatures.Type Property
Parent Object: BendPartFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendPartFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BendPartFeatures Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
Version
Introduced in version 2008
BendPartFeatures Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh599B.htm 13/06/2025
BendsEnumerator Object
Description
The BendsEnumerator object represents all of the bends in a sheet metal part.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of Bend objects in the collection.
Item Returns the specified Bend object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
RefoldFeature.Bends, RefoldFeatureProxy.Bends, SheetMetalComponentDefinition.Bends,
UnfoldFeature.Bends, UnfoldFeatureProxy.Bends
Version
Introduced in version 2010
BendsEnumerator.Application Property
Parent Object: BendsEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BendsEnumerator.Application() As Object
Property Value
This is a read only property whose value is an Object.
BendsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B2D.htm 13/06/2025
Version
Introduced in version 2010
BendsEnumerator.Count Property
Parent Object: BendsEnumerator
Description
Property that returns the number of Bend objects in the collection.
Syntax
BendsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BendsEnumerator.Item Property
Parent Object: BendsEnumerator
Description
Returns the specified Bend object from the collection.
Syntax
BendsEnumerator.Item( Index As Variant ) As Bend
Property Value
This is a read only property whose value is a Bend.
Parameters
BendsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B2D.htm 13/06/2025
Name Type Description
Index Variant
Input Long or Face object that specifies the Bend object within the collection to
return. Inputting a Long indicates the index of the Bend within the collection to
return. When a Face object is input the Bend that contains that face is returned. If
the index is out of range or the input face is not part of a bend this property will
fail.
Version
Introduced in version 2010
BendsEnumerator.Type Property
Parent Object: BendsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BendsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BendsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7B2D.htm 13/06/2025
BIMCableTrayConnectorDefinition Object
Derived from: BIMConnectorDefinition Object
Description
BIMCableTrayConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
ConnectionType Read-write property that gets and sets the connection type for this connector.
ConnectorShape
Read-only property that specifies the shape of the connector. To change the shape, use the
SetShape method.
Direction
Read-only property that indicates the direction of the connection. This property will return
Nothing in the case where a valid set of referenced geometries have not yet been defined.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The
returned collection is independent of the connector and any changes made to the contents of the
collection will not affect the connector. To change the geometry or the shape of the connector
use the SetShape method.
Height
Read-only property that provides access to the connector height. When the
BIMCableTrayConnectorDefinition object has been created using the
CreateCableTrayConnectorDefinition method, this property returns a Double indicating the
height, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the
height of the connector.
To change the height of an existing connector you can either edit the geometry that’s
controlling the height or set the override height using the HeightOverride property.
HeightDirection
Read-only property that returns the direction of the connector height. This returns Nothing in
the case where the height has not yet been defined.
HeightOverride Read-write property that gets and sets the height override for this connector.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the
definition was created using one of the Create methods this property will return Nothing since
the definition isn’t associated with a connector yet.
Type Returns an ObjectTypeEnum indicating this object's type.
Width
Read-only property that provides access to the connector width. When the
BIMCableTrayConnectorDefinition object has been created using the
CreateCableTrayConnectorDefinition method, this property returns a Double indicating the
width, (in centimeters), of the connector as defined by the input geometry. After the definition
BIMCableTrayConnectorDefinition Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
object has been used to create a connector, this property returns a parameter that defines the
width of the connector.
To change the width of an existing connector you can either edit the geometry that’s
controlling the width or set the override width using the WidthOverride property.
WidthDirection
Read-only property that returns the direction of the connector width. This returns Nothing in
the case where the width has not yet been defined.
WidthOverride Read-write property that gets and sets the width override for this connector.
Accessed From
BIMConnectors.CreateCableTrayConnectorDefinition
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Application
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMCableTrayConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.ConnectionType
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-write property that gets and sets the connection type for this connector.
BIMCableTrayConnectorDefinition Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Syntax
BIMCableTrayConnectorDefinition.ConnectionType() As BIMCableTrayConnectionTypeEnum
Property Value
This is a read/write property whose value is a BIMCableTrayConnectionTypeEnum.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.ConnectorShape
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMCableTrayConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Direction
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case
where a valid set of referenced geometries have not yet been defined.
Syntax
BIMCableTrayConnectorDefinition.Direction() As UnitVector
BIMCableTrayConnectorDefinition Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Geometry
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is
independent of the connector and any changes made to the contents of the collection will not affect the
connector. To change the geometry or the shape of the connector use the SetShape method.
Syntax
BIMCableTrayConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Height Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that provides access to the connector height. When the BIMCableTrayConnectorDefinition
object has been created using the CreateCableTrayConnectorDefinition method, this property returns a Double
indicating the height, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the height of the
connector.
To change the height of an existing connector you can either edit the geometry that’s controlling the height or set
the override height using the HeightOverride property.
BIMCableTrayConnectorDefinition Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Syntax
BIMCableTrayConnectorDefinition.Height() As Variant
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.HeightDirection
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that returns the direction of the connector height. This returns Nothing in the case where the
height has not yet been defined.
Syntax
BIMCableTrayConnectorDefinition.HeightDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2014
BIMCableTrayConnectorDefinition.HeightOverride
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-write property that gets and sets the height override for this connector.
Syntax
BIMCableTrayConnectorDefinition.HeightOverride() As Variant
BIMCableTrayConnectorDefinition Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Origin Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that returns the origin of the connector.
Syntax
BIMCableTrayConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
BIMCableTrayConnectorDefinition.Parent Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was created
using one of the Create methods this property will return Nothing since the definition isn’t associated with a
connector yet.
Syntax
BIMCableTrayConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
BIMCableTrayConnectorDefinition Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.ReverseDirection
Method
Parent Object: BIMCableTrayConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMCableTrayConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.SetShape
Method
Parent Object: BIMCableTrayConnectorDefinition
Description
Method that used to set the shape of the connector.
Syntax
BIMCableTrayConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As
BIMConnectorShapeEnum )
Parameters
Name Type Description
Geometry ObjectCollection
Input ObjectCollection that specifies the set of geometry used to
define the connector position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and
how the geometry is to be evaluated. Valid values for the various
types of connectors is shown below.
BIMCableTrayConnectorDefinition Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
• Cable tray connectors: kRectangularShapeConnector or
kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or
kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector,
kCircularShapeConnector, kOvalShapeConnector or
kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or
kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
• Rectangular shape
◦ Rectangular planar face.
◦ Four edges that define a rectangle as illustrated below.
BIMCableTrayConnectorDefinition Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
◦ Slot shape
◾ Planar face that has a slot shape.
◾ Four edges that define a slot or oval shape, as
illustrated below
BIMCableTrayConnectorDefinition Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
This is an optional argument whose default value is 92673.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Type Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMCableTrayConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.Width Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that provides access to the connector width. When the BIMCableTrayConnectorDefinition
object has been created using the CreateCableTrayConnectorDefinition method, this property returns a Double
indicating the width, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the width of the
connector.
To change the width of an existing connector you can either edit the geometry that’s controlling the width or set
the override width using the WidthOverride property.
Syntax
BIMCableTrayConnectorDefinition.Width() As Variant
BIMCableTrayConnectorDefinition Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition.WidthDirection
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-only property that returns the direction of the connector width. This returns Nothing in the case where the
width has not yet been defined.
Syntax
BIMCableTrayConnectorDefinition.WidthDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2014
BIMCableTrayConnectorDefinition.WidthOverride
Property
Parent Object: BIMCableTrayConnectorDefinition
Description
Read-write property that gets and sets the width override for this connector.
Syntax
BIMCableTrayConnectorDefinition.WidthOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
BIMCableTrayConnectorDefinition Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
Version
Introduced in version 2011
BIMCableTrayConnectorDefinition Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9992.htm 13/06/2025
BIMComponent Object
Description
BIMComponent object.
Methods
Name Description
ExportBuildingComponent Method that exports the BIM component as an adsk, ifc or rfa file.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ComponentDefinition
Read-only property that returns the Inventor PartComponentDefinition or
AssemblyComponentDefinition that this BIMComponent object is
associated with.
ComponentDescription
Read-only property that returns the BIMComponentDescription object
associated this document.
ConnectorLinks
Read-only property that returns the collection of connector links for this
document. Through the returned object you can access all existing links
between connectors and create new links between connectors.
Connectors
Read-only property that returns the collection of connectors for this
document. Through the returned object you can access all existing
connectors and create new connectors.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.BIMComponent, BIMComponentPropertySet.Parent,
BIMConnector.Parent, BIMExchangeServer.GetBIMComponent,
PartComponentDefinition.BIMComponent, SheetMetalComponentDefinition.BIMComponent,
WeldmentComponentDefinition.BIMComponent
Version
Introduced in version 2011
BIMComponent.Application Property
BIMComponent Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6791.htm 13/06/2025
Parent Object: BIMComponent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BIMComponent.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMComponent.ComponentDefinition
Property
Parent Object: BIMComponent
Description
Read-only property that returns the Inventor PartComponentDefinition or
AssemblyComponentDefinition that this BIMComponent object is associated with.
Syntax
BIMComponent.ComponentDefinition() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2011
BIMComponent Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6791.htm 13/06/2025
BIMComponent.ComponentDescription
Property
Parent Object: BIMComponent
Description
Read-only property that returns the BIMComponentDescription object associated this document.
Syntax
BIMComponent.ComponentDescription() As BIMComponentDescription
Property Value
This is a read only property whose value is a BIMComponentDescription.
Version
Introduced in version 2011
BIMComponent.ConnectorLinks Property
Parent Object: BIMComponent
Description
Read-only property that returns the collection of connector links for this document. Through the
returned object you can access all existing links between connectors and create new links between
connectors.
Syntax
BIMComponent.ConnectorLinks() As BIMConnectorLinks
Property Value
This is a read only property whose value is a BIMConnectorLinks.
Version
Introduced in version 2011
BIMComponent Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6791.htm 13/06/2025
BIMComponent.Connectors Property
Parent Object: BIMComponent
Description
Read-only property that returns the collection of connectors for this document. Through the
returned object you can access all existing connectors and create new connectors.
Syntax
BIMComponent.Connectors() As BIMConnectors
Property Value
This is a read only property whose value is a BIMConnectors.
Version
Introduced in version 2011
BIMComponent.ExportBuildingComponent
Method
Parent Object: BIMComponent
Description
Method that exports the BIM component as an adsk, ifc or rfa file.
Syntax
BIMComponent.ExportBuildingComponent( FullFileName As String )
Parameters
Name Type Description
FullFileName String
Input String that defines the full filename to write the building component
to. The filename should have an adsk, ifc or rfa extension.
BIMComponent Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6791.htm 13/06/2025
Version
Introduced in version 2011
BIMComponent.Type Property
Parent Object: BIMComponent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMComponent.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMComponent Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6791.htm 13/06/2025
BIMComponentDescription Object
Description
BIMComponentDescription object.
Methods
Name Description
SetCustomThumbnail
Method that lets you set the custom thumbnail by providing the filename of an image file. The file should be a
bmp, jpg, or png format and should be 256x256 pixels.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
ComponentPropertySets
Read-only property that returns the collection object containing the property sets for a BIM
component.
ComponentType Read-write property that gets and sets the component type.
FamilyType
Read-write property that gets and sets the family type. This is applicable for IFC and RFA
formats.
ModelProperties
Read-write property that gets and sets the standard Inventor iProperties that are exported with this
component.
OrientationType
Read-write property that specifies which orientation type will be used when exporting the BIM
component.
Thumbnail Read-write property that gets and sets the thumbnail for this component.
Type Returns an ObjectTypeEnum indicating this object's type.
UserCoordinateSystemOrientation
Read-write property that defines which user coordinate system will be used when exporting the
component. If the OrientationType is not kUserCoordinateSystemOrientationType this property
returns Nothing.
ViewCubeOrientationOrigin
Read-write property that gets and set the origin of the coordinate system when the orientation is
defined using the ViewCube.
Accessed From
BIMComponent.ComponentDescription
Version
Introduced in version 2011
BIMComponentDescription.Application Property
Parent Object: BIMComponentDescription
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMComponentDescription.Application() As Object
BIMComponentDescription Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88E4.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMComponentDescription.ComponentPropertySets Property
Parent Object: BIMComponentDescription
Description
Read-only property that returns the collection object containing the property sets for a BIM component.
Syntax
BIMComponentDescription.ComponentPropertySets() As BIMComponentPropertySets
Property Value
This is a read only property whose value is a BIMComponentPropertySets.
Version
Introduced in version 2011
BIMComponentDescription.ComponentType Property
Parent Object: BIMComponentDescription
Description
Read-write property that gets and sets the component type.
Syntax
BIMComponentDescription.ComponentType() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMComponentDescription.FamilyType Property
Parent Object: BIMComponentDescription
Description
Read-write property that gets and sets the family type. This is applicable for IFC and RFA formats.
BIMComponentDescription Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88E4.htm 13/06/2025
Syntax
BIMComponentDescription.FamilyType() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2018
BIMComponentDescription.ModelProperties Property
Parent Object: BIMComponentDescription
Description
Read-write property that gets and sets the standard Inventor iProperties that are exported with this component.
Syntax
BIMComponentDescription.ModelProperties() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMComponentDescription.OrientationType Property
Parent Object: BIMComponentDescription
Description
Read-write property that specifies which orientation type will be used when exporting the BIM component.
Syntax
BIMComponentDescription.OrientationType() As BIMComponentOrientationTypeEnum
Property Value
This is a read/write property whose value is a BIMComponentOrientationTypeEnum.
Version
Introduced in version 2014
BIMComponentDescription.SetCustomThumbnail Method
Parent Object: BIMComponentDescription
BIMComponentDescription Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88E4.htm 13/06/2025
Description
Method that lets you set the custom thumbnail by providing the filename of an image file. The file should be a bmp, jpg, or png
format and should be 256x256 pixels.
Syntax
BIMComponentDescription.SetCustomThumbnail( FullFileName As String )
Parameters
Name Type Description
FullFileName String Input String of the full filename of the image file.
Version
Introduced in version 2011
BIMComponentDescription.Thumbnail Property
Parent Object: BIMComponentDescription
Description
Read-write property that gets and sets the thumbnail for this component.
Syntax
BIMComponentDescription.Thumbnail() As IPictureDisp
Property Value
This is a read/write property whose value is an IPictureDisp.
Version
Introduced in version 2011
BIMComponentDescription.Type Property
Parent Object: BIMComponentDescription
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMComponentDescription.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMComponentDescription Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88E4.htm 13/06/2025
BIMComponentDescription.UserCoordinateSystemOrientation
Property
Parent Object: BIMComponentDescription
Description
Read-write property that defines which user coordinate system will be used when exporting the component. If the OrientationType is
not kUserCoordinateSystemOrientationType this property returns Nothing.
Syntax
BIMComponentDescription.UserCoordinateSystemOrientation() As UserCoordinateSystem
Property Value
This is a read/write property whose value is a UserCoordinateSystem.
Version
Introduced in version 2014
BIMComponentDescription.ViewCubeOrientationOrigin
Property
Parent Object: BIMComponentDescription
Description
Read-write property that gets and set the origin of the coordinate system when the orientation is defined using the ViewCube.
Syntax
BIMComponentDescription.ViewCubeOrientationOrigin() As Point
Property Value
This is a read/write property whose value is a Point.
Version
Introduced in version 2014
BIMComponentDescription Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh88E4.htm 13/06/2025
BIMComponentProperty Object
Description
BIMComponentProperty object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
InternalName
Read-only property that gets the internal name of this component property. This
name is consistent and can be used as a reliable index for this property.
Name
Read-only property that gets the visible name of this property. This is the name
shown to the end-user in the Component Properties list in the Export Building
Components dialog. This name is localized and can change for different languages.
Parent Gets the parent object from whom this object can logically be reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Value Read-write property that gets the value of this BIM property.
Accessed From
BIMComponentPropertySet.Item
Version
Introduced in version 2011
BIMComponentProperty.Application
Property
Parent Object: BIMComponentProperty
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BIMComponentProperty Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA5B3.htm 13/06/2025
Syntax
BIMComponentProperty.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMComponentProperty.InternalName
Property
Parent Object: BIMComponentProperty
Description
Read-only property that gets the internal name of this component property. This name is
consistent and can be used as a reliable index for this property.
Syntax
BIMComponentProperty.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2011
BIMComponentProperty.Name Property
Parent Object: BIMComponentProperty
Description
BIMComponentProperty Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA5B3.htm 13/06/2025
Read-only property that gets the visible name of this property. This is the name shown to the enduser
in the Component Properties list in the Export Building Components dialog. This name is
localized and can change for different languages.
Syntax
BIMComponentProperty.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2011
BIMComponentProperty.Parent Property
Parent Object: BIMComponentProperty
Description
Gets the parent object from whom this object can logically be reached.
Syntax
BIMComponentProperty.Parent() As BIMComponentPropertySet
Property Value
This is a read only property whose value is a BIMComponentPropertySet.
Version
Introduced in version 2011
BIMComponentProperty.Type Property
Parent Object: BIMComponentProperty
Description
Returns an ObjectTypeEnum indicating this object's type.
BIMComponentProperty Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA5B3.htm 13/06/2025
Syntax
BIMComponentProperty.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMComponentProperty.Value Property
Parent Object: BIMComponentProperty
Description
Read-write property that gets the value of this BIM property.
Syntax
BIMComponentProperty.Value() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMComponentProperty Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA5B3.htm 13/06/2025
BIMComponentPropertySet Object
Description
BIMComponentPropertySet object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Gets the number of items in this collection.
InternalName
Read-only property that gets the internal name of this property set. This name is
consistent and can be used as a reliable index for this property set.
Item Returns the specified BIMComponentProperty object from the collection.
Name
Read-only property that gets the visible name of this property set. This is the name
shown to the end-user in the Component Properties list in the Export Building
Components dialog. This name is localized and can change for different languages.
Parent Read-only property that returns the parent BIMComponent object of this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMComponentProperty.Parent, BIMComponentPropertySets.Item
Version
Introduced in version 2011
BIMComponentPropertySet.Application
Property
Parent Object: BIMComponentPropertySet
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BIMComponentPropertySet Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC31E.htm 13/06/2025
Syntax
BIMComponentPropertySet.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMComponentPropertySet.Count Property
Parent Object: BIMComponentPropertySet
Description
Gets the number of items in this collection.
Syntax
BIMComponentPropertySet.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
BIMComponentPropertySet.InternalName
Property
Parent Object: BIMComponentPropertySet
Description
Read-only property that gets the internal name of this property set. This name is consistent and
can be used as a reliable index for this property set.
BIMComponentPropertySet Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC31E.htm 13/06/2025
Syntax
BIMComponentPropertySet.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2011
BIMComponentPropertySet.Item Property
Parent Object: BIMComponentPropertySet
Description
Returns the specified BIMComponentProperty object from the collection.
Syntax
BIMComponentPropertySet.Item( Index As Variant ) As BIMComponentProperty
Property Value
This is a read only property whose value is a BIMComponentProperty.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BIM component property to return. This is
the index of the item in the collection where the first item is 1. It can also be the
name or internal name of the property. If an out of range value or an unknown
name is provided an error will occur.
Version
Introduced in version 2011
BIMComponentPropertySet.Name Property
BIMComponentPropertySet Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC31E.htm 13/06/2025
Parent Object: BIMComponentPropertySet
Description
Read-only property that gets the visible name of this property set. This is the name shown to the
end-user in the Component Properties list in the Export Building Components dialog. This name is
localized and can change for different languages.
Syntax
BIMComponentPropertySet.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2011
BIMComponentPropertySet.Parent Property
Parent Object: BIMComponentPropertySet
Description
Read-only property that returns the parent BIMComponent object of this object.
Syntax
BIMComponentPropertySet.Parent() As BIMComponent
Property Value
This is a read only property whose value is a BIMComponent.
Version
Introduced in version 2011
BIMComponentPropertySet.Type Property
Parent Object: BIMComponentPropertySet
BIMComponentPropertySet Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC31E.htm 13/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMComponentPropertySet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMComponentPropertySet Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC31E.htm 13/06/2025
BIMComponentPropertySets Object
Description
BIMComponentPropertySets object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count
Read-only property that returns the total number of BIM component property sets
this BIM document.
Item
Returns the specified BIMComponentPropertySet object from the collection. This
collection is empty until the component type is defined using the ComponentType
property of the BIMComponentDescription object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMComponentDescription.ComponentPropertySets
Version
Introduced in version 2011
BIMComponentPropertySets.Application
Property
Parent Object: BIMComponentPropertySets
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BIMComponentPropertySets.Application() As Object
BIMComponentPropertySets Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2EB.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMComponentPropertySets.Count Property
Parent Object: BIMComponentPropertySets
Description
Read-only property that returns the total number of BIM component property sets this BIM
document.
Syntax
BIMComponentPropertySets.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
BIMComponentPropertySets.Item Property
Parent Object: BIMComponentPropertySets
Description
Returns the specified BIMComponentPropertySet object from the collection. This collection is
empty until the component type is defined using the ComponentType property of the
BIMComponentDescription object.
Syntax
BIMComponentPropertySets.Item( Index As Variant ) As BIMComponentPropertySet
BIMComponentPropertySets Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2EB.htm 13/06/2025
Property Value
This is a read only property whose value is a BIMComponentPropertySet.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BIM component property set to return. This
is the index of the item in the collection where the first item is 1. It can also be the
name or internal name of the property set. If an out of range value or an unknown
name is provided an error will occur.
Version
Introduced in version 2011
BIMComponentPropertySets.Type Property
Parent Object: BIMComponentPropertySets
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMComponentPropertySets.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMComponentPropertySets Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE2EB.htm 13/06/2025
BIMConduitConnectorDefinition Object
Derived from: BIMConnectorDefinition Object
Description
BIMConduitConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
ConnectionType Read-write property that gets and sets the connection type for this connector.
ConnectorShape
Read-only property that specifies the shape of the connector. To change the shape, use the
SetShape method.
Diameter
Read-only property that provides access to the connector diameter. When the
BIMConduitConnectorDefinition object has been created using the
CreateConduitConnectorDefinition method, this property returns a Double indicating the
diameter, (in centimeters), of the connector as defined by the input geometry. After the
definition object has been used to create a connector, this property returns a parameter that
defines the diameter of the connector.
To change the diameter of an existing connector you can either edit the geometry that’s
controlling the diameter or set the override diameter using the DiameterOverride property.
DiameterOverride Read-write property that gets and sets the diameter override for this connector.
Direction
Read-only property that indicates the direction of the connection. This property will return
Nothing in the case where a valid set of referenced geometries have not yet been defined.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The
returned collection is independent of the connector and any changes made to the contents of
the collection will not affect the connector. To change the geometry or the shape of the
connector use the SetShape method.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the
definition was created using one of the Create methods this property will return Nothing
since the definition isn’t associated with a connector yet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMConnectors.CreateConduitConnectorDefinition
BIMConduitConnectorDefinition Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
Version
Introduced in version 2011
BIMConduitConnectorDefinition.Application
Property
Parent Object: BIMConduitConnectorDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMConduitConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.ConnectionType
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-write property that gets and sets the connection type for this connector.
Syntax
BIMConduitConnectorDefinition.ConnectionType() As BIMConduitConnectionTypeEnum
Property Value
This is a read/write property whose value is a BIMConduitConnectionTypeEnum.
Version
Introduced in version 2011
BIMConduitConnectorDefinition Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
BIMConduitConnectorDefinition.ConnectorShape
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMConduitConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.Diameter
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-only property that provides access to the connector diameter. When the BIMConduitConnectorDefinition
object has been created using the CreateConduitConnectorDefinition method, this property returns a Double
indicating the diameter, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the diameter of the
connector.
To change the diameter of an existing connector you can either edit the geometry that’s controlling the diameter
or set the override diameter using the DiameterOverride property.
Syntax
BIMConduitConnectorDefinition.Diameter() As Variant
Property Value
This is a read only property whose value is a Variant.
BIMConduitConnectorDefinition Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
Version
Introduced in version 2011
BIMConduitConnectorDefinition.DiameterOverride
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-write property that gets and sets the diameter override for this connector.
Syntax
BIMConduitConnectorDefinition.DiameterOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.Direction
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case
where a valid set of referenced geometries have not yet been defined.
Syntax
BIMConduitConnectorDefinition.Direction() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMConduitConnectorDefinition Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
BIMConduitConnectorDefinition.Geometry
Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is
independent of the connector and any changes made to the contents of the collection will not affect the
connector. To change the geometry or the shape of the connector use the SetShape method.
Syntax
BIMConduitConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.Origin Property
Parent Object: BIMConduitConnectorDefinition
Description
Read-only property that returns the origin of the connector.
Syntax
BIMConduitConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
BIMConduitConnectorDefinition.Parent Property
Parent Object: BIMConduitConnectorDefinition
BIMConduitConnectorDefinition Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was
created using one of the Create methods this property will return Nothing since the definition isn’t associated
with a connector yet.
Syntax
BIMConduitConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.ReverseDirection
Method
Parent Object: BIMConduitConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMConduitConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMConduitConnectorDefinition.SetShape Method
Parent Object: BIMConduitConnectorDefinition
Description
Method that used to set the shape of the connector.
Syntax
BIMConduitConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As
BIMConnectorShapeEnum )
BIMConduitConnectorDefinition Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
Parameters
Name Type Description
Geometry ObjectCollection
Input ObjectCollection that specifies the set of geometry used to
define the connector position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and
how the geometry is to be evaluated. Valid values for the various
types of connectors is shown below.
• Cable tray connectors: kRectangularShapeConnector or
kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or
kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector,
kCircularShapeConnector, kOvalShapeConnector or
kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or
kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
BIMConduitConnectorDefinition Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
• Rectangular shape
◦ Rectangular planar face.
◦ Four edges that define a rectangle as illustrated below.
◦ Slot shape
◾ Planar face that has a slot shape.
◾ Four edges that define a slot or oval shape, as
illustrated below
BIMConduitConnectorDefinition Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
This is an optional argument whose default value is 92673.
Version
Introduced in version 2011
BIMConduitConnectorDefinition.Type Property
Parent Object: BIMConduitConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConduitConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMConduitConnectorDefinition Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8F.htm 13/06/2025
BIMConnector Object
Description
BIMConnector object.
Methods
Name Description
Delete Method that deletes the connector.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Definition
Read-only property that gets the definition object associated with this
connector.
DefinitionType
Read-only property that returns the type of definition associated with this
connector. This property lets you determine what type of connector this
object represents.
MissingAttachment Read-only property that returns whether the attachment is missing or not.
Name
Read-write property that gets and sets the displayed name of the connector.
This is the name that is visible in the browser and is editable by the end-user.
Parent Gets the parent object from whom this object can logically be reached.
Suppressed
Read-write property that defines whether the connector is suppressed or not.
A value of True indicates the connector is suppressed.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMCableTrayConnectorDefinition.Parent, BIMConduitConnectorDefinition.Parent,
BIMConnectorDefinition.Parent, BIMConnectorLink.ConnectorOne,
BIMConnectorLink.ConnectorTwo, BIMConnectors.Add, BIMConnectors.Item,
BIMDuctConnectorDefinition.Parent, BIMElectricalConnectorDefinition.Parent,
BIMPipeConnectorDefinition.Parent
Version
Introduced in version 2011
BIMConnector Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
BIMConnector.Application Property
Parent Object: BIMConnector
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BIMConnector.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConnector.Definition Property
Parent Object: BIMConnector
Description
Read-only property that gets the definition object associated with this connector.
Syntax
BIMConnector.Definition() As BIMConnectorDefinition
Property Value
This is a read only property whose value is a BIMConnectorDefinition.
Version
Introduced in version 2011
BIMConnector Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
BIMConnector.DefinitionType Property
Parent Object: BIMConnector
Description
Read-only property that returns the type of definition associated with this connector. This property
lets you determine what type of connector this object represents.
Syntax
BIMConnector.DefinitionType() As BIMConnectorDefinitionTypeEnum
Property Value
This is a read only property whose value is a BIMConnectorDefinitionTypeEnum.
Version
Introduced in version 2011
BIMConnector.Delete Method
Parent Object: BIMConnector
Description
Method that deletes the connector.
Syntax
BIMConnector.Delete()
Version
Introduced in version 2011
BIMConnector.GetReferenceKey Method
Parent Object: BIMConnector
BIMConnector Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
BIMConnector.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BIMConnector.MissingAttachment Property
Parent Object: BIMConnector
Description
Read-only property that returns whether the attachment is missing or not.
Syntax
BIMConnector.MissingAttachment() As Boolean
BIMConnector Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2022
BIMConnector.Name Property
Parent Object: BIMConnector
Description
Read-write property that gets and sets the displayed name of the connector. This is the name that
is visible in the browser and is editable by the end-user.
Syntax
BIMConnector.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMConnector.Parent Property
Parent Object: BIMConnector
Description
Gets the parent object from whom this object can logically be reached.
Syntax
BIMConnector.Parent() As BIMComponent
BIMConnector Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
Property Value
This is a read only property whose value is a BIMComponent.
Version
Introduced in version 2011
BIMConnector.Suppressed Property
Parent Object: BIMConnector
Description
Read-write property that defines whether the connector is suppressed or not. A value of True
indicates the connector is suppressed.
Syntax
BIMConnector.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BIMConnector.Type Property
Parent Object: BIMConnector
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConnector.Type() As ObjectTypeEnum
BIMConnector Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMConnector Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3030.htm 13/06/2025
BIMConnectorDefinition Object
Description
BIMConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an ApprenticeServer
object is returned.
ConnectorShape
Read-only property that specifies the shape of the connector. To change the shape, use the
SetShape method.
Direction
Read-only property that indicates the direction of the connection. This property will return
Nothing in the case where a valid set of referenced geometries have not yet been defined.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The
returned collection is independent of the connector and any changes made to the contents of
the collection will not affect the connector. To change the geometry or the shape of the
connector use the SetShape method.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the
definition was created using one of the Create methods this property will return Nothing since
the definition isn’t associated with a connector yet.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMConnector.Definition
Derived Classes
BIMCableTrayConnectorDefinition, BIMConduitConnectorDefinition, BIMDuctConnectorDefinition,
BIMElectricalConnectorDefinition, BIMPipeConnectorDefinition
Version
Introduced in version 2011
BIMConnectorDefinition.Application Property
Parent Object: BIMConnectorDefinition
BIMConnectorDefinition Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConnectorDefinition.ConnectorShape Property
Parent Object: BIMConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMConnectorDefinition.Direction Property
Parent Object: BIMConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case
where a valid set of referenced geometries have not yet been defined.
Syntax
BIMConnectorDefinition.Direction() As UnitVector
BIMConnectorDefinition Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMConnectorDefinition.Geometry Property
Parent Object: BIMConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is
independent of the connector and any changes made to the contents of the collection will not affect the
connector. To change the geometry or the shape of the connector use the SetShape method.
Syntax
BIMConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMConnectorDefinition.Origin Property
Parent Object: BIMConnectorDefinition
Description
Read-only property that returns the origin of the connector.
Syntax
BIMConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
BIMConnectorDefinition Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
Version
Introduced in version 2014
BIMConnectorDefinition.Parent Property
Parent Object: BIMConnectorDefinition
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was
created using one of the Create methods this property will return Nothing since the definition isn’t associated
with a connector yet.
Syntax
BIMConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMConnectorDefinition.ReverseDirection Method
Parent Object: BIMConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMConnectorDefinition.SetShape Method
Parent Object: BIMConnectorDefinition
BIMConnectorDefinition Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
Description
Method that used to set the shape of the connector.
Syntax
BIMConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As
BIMConnectorShapeEnum )
Parameters
Name Type Description
Geometry ObjectCollection
Input ObjectCollection that specifies the set of geometry used to
define the connector position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and
how the geometry is to be evaluated. Valid values for the various
types of connectors is shown below.
• Cable tray connectors: kRectangularShapeConnector or
kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or
kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector,
kCircularShapeConnector, kOvalShapeConnector or
kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or
kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
BIMConnectorDefinition Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
• Rectangular shape
◦ Rectangular planar face.
◦ Four edges that define a rectangle as illustrated below.
◦ Slot shape
◾ Planar face that has a slot shape.
BIMConnectorDefinition Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
◾ Four edges that define a slot or oval shape, as
illustrated below
This is an optional argument whose default value is 92673.
Version
Introduced in version 2011
BIMConnectorDefinition.Type Property
Parent Object: BIMConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BIMConnectorDefinition Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
Version
Introduced in version 2011
BIMConnectorDefinition Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hh4C24.htm 13/06/2025
BIMConnectorLink Object
Description
BIMConnectorLink object.
Methods
Name Description
Delete Method that deletes the connectorlink.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
ConnectorOne Read-only property that gets the first of two connectors that this link is between.
ConnectorTwo Read-only property that gets the first of two connectors that this link is between.
Name
Read-write property that gets and sets the displayed name of the connectorlink.
This is the name that is visible in the browser and is editable by the end-user.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMConnectorLinks.Add, BIMConnectorLinks.Item
Version
Introduced in version 2011
BIMConnectorLink.Application Property
Parent Object: BIMConnectorLink
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BIMConnectorLink Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B74.htm 13/06/2025
Syntax
BIMConnectorLink.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConnectorLink.ConnectorOne Property
Parent Object: BIMConnectorLink
Description
Read-only property that gets the first of two connectors that this link is between.
Syntax
BIMConnectorLink.ConnectorOne() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMConnectorLink.ConnectorTwo Property
Parent Object: BIMConnectorLink
Description
Read-only property that gets the first of two connectors that this link is between.
BIMConnectorLink Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B74.htm 13/06/2025
Syntax
BIMConnectorLink.ConnectorTwo() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMConnectorLink.Delete Method
Parent Object: BIMConnectorLink
Description
Method that deletes the connectorlink.
Syntax
BIMConnectorLink.Delete()
Version
Introduced in version 2011
BIMConnectorLink.GetReferenceKey
Method
Parent Object: BIMConnectorLink
Description
Method that generates and returns the reference key for this entity.
Syntax
BIMConnectorLink.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
BIMConnectorLink Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B74.htm 13/06/2025
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
BIMConnectorLink.Name Property
Parent Object: BIMConnectorLink
Description
Read-write property that gets and sets the displayed name of the connectorlink. This is the name
that is visible in the browser and is editable by the end-user.
Syntax
BIMConnectorLink.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMConnectorLink Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B74.htm 13/06/2025
BIMConnectorLink.Type Property
Parent Object: BIMConnectorLink
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConnectorLink.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMConnectorLink Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6B74.htm 13/06/2025
BIMConnectorLinks Object
Description
BIMConnectorLinks object.
Methods
Name Description
Add Method that creates a new BIMConnectorLink.The new BIMConnectorLink is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Gets the number of items in this collection.
Item Returns the specified BIMConnector object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMComponent.ConnectorLinks
Version
Introduced in version 2011
BIMConnectorLinks.Add Method
Parent Object: BIMConnectorLinks
Description
Method that creates a new BIMConnectorLink.The new BIMConnectorLink is returned.
Syntax
BIMConnectorLinks.Add( ConnectorOne As BIMConnector, ConnectorTwo As
BIMConnector ) As BIMConnectorLink
BIMConnectorLinks Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8739.htm 13/06/2025
Parameters
Name Type Description
ConnectorOne BIMConnector
Input BIMConnector that defines the first of two connectors to be
connected by the link.
ConnectorTwo BIMConnector
Input BIMConnector that defines the second of two connectors to
be connected by the link.
Version
Introduced in version 2011
BIMConnectorLinks.Application Property
Parent Object: BIMConnectorLinks
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BIMConnectorLinks.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConnectorLinks.Count Property
Parent Object: BIMConnectorLinks
Description
Gets the number of items in this collection.
BIMConnectorLinks Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8739.htm 13/06/2025
Syntax
BIMConnectorLinks.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
BIMConnectorLinks.Item Property
Parent Object: BIMConnectorLinks
Description
Returns the specified BIMConnector object from the collection.
Syntax
BIMConnectorLinks.Item( Index As Variant ) As BIMConnectorLink
Property Value
This is a read only property whose value is a BIMConnectorLink.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BIM connector link to return. This is the
index of the item in the collection where the first item is 1. It can also be the name
of the connector. If an out of range value or an unknown name is provided an error
will occur.
Version
Introduced in version 2011
BIMConnectorLinks.Type Property
BIMConnectorLinks Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8739.htm 13/06/2025
Parent Object: BIMConnectorLinks
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConnectorLinks.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMConnectorLinks Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8739.htm 13/06/2025
BIMConnectors Object
Description
BIMConnectors object.
Methods
Name Description
Add
Method that creates a new BIMConnector. The type of connector definition
supplied will determine the type of connector created. The new
BIMConnector is returned.
CreateCableTrayConnectorDefinition
Method that creates a new cable tray connector definition. The created
definition object defines the inputs to create a cable tray connector and is
used as input to the Add method of the BIMConnectors object to create a
new connector.
CreateConduitConnectorDefinition
Method that creates a new conduit connector definition. The created
definition object defines the inputs to create a conduit connector and is used
as input to the Add method of the BIMConnectors object to create a new
conduit connector.
CreateDuctConnectorDefinition
Method that creates a new duct connector definition. The created definition
object defines the inputs to create a duct connector and is used as input to the
Add method of the BIMConnectors object to create a new connector.
CreateElectricalConnectorDefinition
Method that creates a new electrical connector definition. The created
definition object defines the inputs to create a electrical connector and is
used as input to the Add method of the BIMConnectors object to create a
new connector.
CreatePipeConnectorDefinition
Method that creates a new pipe connector definition. The created definition
object defines the inputs to create a pipe connector and is used as input to the
Add method of the BIMConnectors object to create a new connector.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Count Gets the number of items in this collection.
Item Returns the specified BIMConnector object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMComponent.Connectors
Version
Introduced in version 2011
BIMConnectors.Add Method
Parent Object: BIMConnectors
BIMConnectors Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Description
Method that creates a new BIMConnector. The type of connector definition supplied will determine the type of
connector created. The new BIMConnector is returned.
Syntax
BIMConnectors.Add( Definition As BIMConnectorDefinition, [Name] As String ) As BIMConnector
Parameters
Name Type Description
Definition BIMConnectorDefinition
Input definition object that defines all of the required inputs to create a new
connector.
Name String
Defines the name of the new connector. It must be unique with respect to all
existing connectors. If not provided, or an empty string is supplied then BIM
Exchange will generate a default name.
This is an optional argument whose default value is """".
Version
Introduced in version 2011
BIMConnectors.Application Property
Parent Object: BIMConnectors
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMConnectors.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMConnectors.Count Property
Parent Object: BIMConnectors
Description
BIMConnectors Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Gets the number of items in this collection.
Syntax
BIMConnectors.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2011
BIMConnectors.CreateCableTrayConnectorDefinition
Method
Parent Object: BIMConnectors
Description
Method that creates a new cable tray connector definition. The created definition object defines the inputs to create a
cable tray connector and is used as input to the Add method of the BIMConnectors object to create a new connector.
Syntax
BIMConnectors.CreateCableTrayConnectorDefinition( Geometry As ObjectCollection, ConnectorShape As
BIMConnectorShapeEnum ) As BIMCableTrayConnectorDefinition
Parameters
Name Type Description
Geometry ObjectCollection
Input object collection that contains the geometry that defines the
shape of the connector. When the specified shape is rectangular, valid
input includes a single rectangular face or four linear edges on a
planar face that define a rectangle. These edges do not need to connect
but two of them need to be parallel to each other and perpendicular to
the other two edge. For example, the picture below illustrates four
valid lines and the resulting rectangle.
BIMConnectors Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
When the specified shape is undefined, valid input includes the input
described above for a rectangular shape but also allows a circular
planar face, a circular edge (it can be an arc), a planar face that has a
slot shape, or four edges that define a slot or oval shape, as illustrated
below.
ConnectorShape BIMConnectorShapeEnum
Input value that specifies the shape of the connector. This setting
affects how the geometry is evaluated to determine the shape of the
connector. The following inputs are valid for a cable tray connector:
kRectangularShapeConnector or kUndefinedShapeConnector
Remarks
The created definition defaults to a rectangular shape, the height and width are defined by the input geometry, and
the connection type is electrically bonded. You can change any of these settings by using the methods and properties
on the returned BIMCableTrayConnectorDefinition.
BIMConnectors Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Version
Introduced in version 2011
BIMConnectors.CreateConduitConnectorDefinition
Method
Parent Object: BIMConnectors
Description
Method that creates a new conduit connector definition. The created definition object defines the inputs to create a
conduit connector and is used as input to the Add method of the BIMConnectors object to create a new conduit
connector.
Syntax
BIMConnectors.CreateConduitConnectorDefinition( Geometry As ObjectCollection, ConnectorShape As
BIMConnectorShapeEnum ) As BIMConduitConnectorDefinition
Parameters
Name Type Description
Geometry ObjectCollection
Input object collection that contains the geometry that defines the
shape of the connector. When the specified shape is circular, valid
input includes a single circular face or a circular edge (it can be an
arc).
When the specified shape is undefined, valid input includes the input
described above for a rectangular shape but also allows a rectangular
planar face, four edges that define a rectangle as illustrated below.
BIMConnectors Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
a planar face that has a slot shape, or four edges that define a slot or
oval shape, as illustrated below.
ConnectorShape BIMConnectorShapeEnum
Input value that specifies the shape of the connector. This setting
affects how the geometry is evaluated to determine the shape of the
connector. The following inputs are valid for a conduit connector:
kCircularShapeConnector or kUndefinedShapeConnector
Remarks
The created definition defaults to a circular shape and the diameter is defined by the input geometry. You can
change any of these settings by using the methods and properties on the returned BIMConduitConnectorDefinition.
BIMConnectors Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Version
Introduced in version 2011
BIMConnectors.CreateDuctConnectorDefinition
Method
Parent Object: BIMConnectors
Description
Method that creates a new duct connector definition. The created definition object defines the inputs to create a duct
connector and is used as input to the Add method of the BIMConnectors object to create a new connector.
Syntax
BIMConnectors.CreateDuctConnectorDefinition( Geometry As ObjectCollection, ConnectorShape As
BIMConnectorShapeEnum ) As BIMDuctConnectorDefinition
Parameters
Name Type Description
Geometry ObjectCollection
Input object collection that contains the geometry that defines the
shape of the connector. When the specified shape is rectangular, valid
input includes a single rectangular face or four linear edges on a
planar face that define a rectangle. These edges do not need to connect
but two of them need to be parallel to each other and perpendicular to
the other two edge. For example, the picture below illustrates four
valid lines and the resulting rectangle.
BIMConnectors Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
When the specified shape is oval, valid input includes a face that
defines an oval or four edges that define an oval as illustrated below.
When the specified shape is circular, valid input includes a single
circular face or a circular edge (it can be an arc). When the specified
shape is undefined, valid input includes any of the above.
ConnectorShape BIMConnectorShapeEnum
Input value that specifies the shape of the connector. This setting
affects how the geometry is evaluated to determine the shape of the
connector. The following inputs are valid for a duct connector:
kRectangularShapeConnector, kCircularShapeConnector,
kOvalShapeConnector or kUndefinedShapeConnector
Version
Introduced in version 2011
BIMConnectors.CreateElectricalConnectorDefinition
Method
Parent Object: BIMConnectors
Description
Method that creates a new electrical connector definition. The created definition object defines the inputs to create a
electrical connector and is used as input to the Add method of the BIMConnectors object to create a new connector.
BIMConnectors Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Syntax
BIMConnectors.CreateElectricalConnectorDefinition( Geometry As ObjectCollection ) As
BIMElectricalConnectorDefinition
Parameters
Name Type Description
Geometry ObjectCollection Input object collection that contains the geometry that defines the shape of the
connector. Valid input includes:
• Single circular face.
• Circular edge (it can be an arc)
• Rectangular planar face.
• Four edges that define a rectangle as illustrated below.
• Planar face that has a slot shape.
• Four edges that define a slot or oval shape, as illustrated below.
BIMConnectors Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
Version
Introduced in version 2011
BIMConnectors.CreatePipeConnectorDefinition
Method
Parent Object: BIMConnectors
Description
Method that creates a new pipe connector definition. The created definition object defines the inputs to create a pipe
connector and is used as input to the Add method of the BIMConnectors object to create a new connector.
Syntax
BIMConnectors.CreatePipeConnectorDefinition( Geometry As ObjectCollection, ConnectorShape As
BIMConnectorShapeEnum ) As BIMPipeConnectorDefinition
Parameters
Name Type Description
Geometry ObjectCollection
Input object collection that contains the geometry that defines the
shape of the connector. When the specified shape is circular, valid
input includes a single circular face or a circular edge (it can be an
arc).
When the specified shape is undefined, valid input includes the input
described above for a rectangular shape but also allows a rectangular
planar face, four edges that define a rectangle as illustrated below:
BIMConnectors Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
a planar face that has a slot shape, or four edges that define a slot or
oval shape, as illustrated below.
ConnectorShape BIMConnectorShapeEnum
Input value that specifies the shape of the connector. This setting
affects how the geometry is evaluated to determine the shape of the
connector. The following inputs are valid for a pipe connector:
kCircularShapeConnector or kUndefinedShapeConnector.
Version
Introduced in version 2011
BIMConnectors Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
BIMConnectors.Item Property
Parent Object: BIMConnectors
Description
Returns the specified BIMConnector object from the collection.
Syntax
BIMConnectors.Item( Index As Variant ) As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BIM connector to return. This is the index of the item in the
collection where the first item is 1. It can also be the name of the connector. If an out of range value
or an unknown name is provided an error will occur.
Version
Introduced in version 2011
BIMConnectors.Type Property
Parent Object: BIMConnectors
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMConnectors.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMConnectors Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA1E6.htm 13/06/2025
BIMDuctConnectorDefinition Object
Derived from: BIMConnectorDefinition Object
Description
BIMDuctConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
ConnectionType Read-write property that gets and sets the connection type for this connector.
ConnectorShape
Read-only property that specifies the shape of the connector. To change the shape, use the
SetShape method.
Description Read-write property that gets and sets the description of this connector.
DescriptionParameter Read-write property that gets and sets the description with expression or parameter.
Diameter
Read-only property that provides access to the connector diameter. When the
BIMDuctConnectorDefinition object has been created using the
CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the
diameter, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the
diameter of the connector.
To change the diameter of an existing connector you can either edit the geometry that’s controlling
the diameter or set the override diameter using the DiameterOverride property.
DiameterOverride Read-write property that gets and sets the diameter override for this connector.
Direction
Read-only property that indicates the direction of the connection. This property will return
Nothing in the case where a valid set of referenced geometries have not yet been defined.
ExposeDescriptionAsParameter Read-write property that gets and sets if expose the description as parameter.
ExposeFlowValueAsParameter Read-write property that gets and sets if expose the flow value as parameter.
ExposeLossValueAsParameter Read-write property that gets and sets if expose the loss value as parameter.
FlowConfiguration Read-write property that gets and sets the flow configuration used for this connector.
FlowDirection Read-write property that gets and sets the flow direction for this Duct connector.
FlowValue Read-write property that gets and sets the value for the flow.
FlowValueParameter Read-write property that gets and sets the flow value with expression or parameter.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The returned
collection is independent of the connector and any changes made to the contents of the collection
will not affect the connector. To change the geometry or the shape of the connector use the
SetShape method.
Height
Read-only property that provides access to the connector height. When the
BIMDuctConnectorDefinition object has been created using the
CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the height,
(in centimeters), of the connector as defined by the input geometry. After the definition object has
been used to create a connector, this property returns a parameter that defines the height of the
connector.
To change the height of an existing connector you can either edit the geometry that’s controlling
the height or set the override height using the HeightOverride property.
HeightDirection
Read-only property that returns the direction of the connector height. This returns Nothing in the
case where the height has not yet been defined.
BIMDuctConnectorDefinition Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
HeightOverride Read-write property that gets and sets the height override for this connector.
LossMethod Read-write property that gets and sets the loss method used for this connector.
LossValue Read-write property that gets and sets the value for the loss method.
LossValueParameter Read-write property that gets and sets the loss value with expression or parameter.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the
definition was created using one of the Create methods this property will return Nothing since the
definition isn’t associated with a connector yet.
SystemType Read-write property that specifies the system type for this connector.
Type Returns an ObjectTypeEnum indicating this object's type.
Width
Read-only property that provides access to the connector width. When the
BIMDuctConnectorDefinition object has been created using the
CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the width,
(in centimeters), of the connector as defined by the input geometry. After the definition object has
been used to create a connector, this property returns a parameter that defines the width of the
connector.
To change the width of an existing connector you can either edit the geometry that’s controlling
the width or set the override width using the WidthOverride property.
WidthDirection
Read-only property that returns the direction of the connector width. This returns Nothing in the
case where the width has not yet been defined.
WidthOverride Read-write property that gets and sets the width override for this connector.
Accessed From
BIMConnectors.CreateDuctConnectorDefinition
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Application Property
Parent Object: BIMDuctConnectorDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BIMDuctConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.ConnectionType Property
Parent Object: BIMDuctConnectorDefinition
BIMDuctConnectorDefinition Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Description
Read-write property that gets and sets the connection type for this connector.
Syntax
BIMDuctConnectorDefinition.ConnectionType() As BIMDuctConnectionTypeEnum
Property Value
This is a read/write property whose value is a BIMDuctConnectionTypeEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.ConnectorShape Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMDuctConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Description Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the description of this connector.
Syntax
BIMDuctConnectorDefinition.Description() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMDuctConnectorDefinition Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
BIMDuctConnectorDefinition.DescriptionParameter
Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the description with expression or parameter.
Syntax
BIMDuctConnectorDefinition.DescriptionParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.Diameter Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that provides access to the connector diameter. When the BIMDuctConnectorDefinition object has been created
using the CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the diameter, (in centimeters), of
the connector as defined by the input geometry. After the definition object has been used to create a connector, this property returns
a parameter that defines the diameter of the connector.
To change the diameter of an existing connector you can either edit the geometry that’s controlling the diameter or set the override
diameter using the DiameterOverride property.
Syntax
BIMDuctConnectorDefinition.Diameter() As Variant
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.DiameterOverride Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the diameter override for this connector.
BIMDuctConnectorDefinition Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Syntax
BIMDuctConnectorDefinition.DiameterOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Direction Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case where a valid set of
referenced geometries have not yet been defined.
Syntax
BIMDuctConnectorDefinition.Direction() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.ExposeDescriptionAsParameter
Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets if expose the description as parameter.
Syntax
BIMDuctConnectorDefinition.ExposeDescriptionAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMDuctConnectorDefinition Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
BIMDuctConnectorDefinition.ExposeFlowValueAsParameter
Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets if expose the flow value as parameter.
Syntax
BIMDuctConnectorDefinition.ExposeFlowValueAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.ExposeLossValueAsParameter
Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets if expose the loss value as parameter.
Syntax
BIMDuctConnectorDefinition.ExposeLossValueAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.FlowConfiguration Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the flow configuration used for this connector.
Syntax
BIMDuctConnectorDefinition.FlowConfiguration() As BIMDuctFlowConfigurationEnum
BIMDuctConnectorDefinition Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Property Value
This is a read/write property whose value is a BIMDuctFlowConfigurationEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.FlowDirection Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the flow direction for this Duct connector.
Syntax
BIMDuctConnectorDefinition.FlowDirection() As BIMFlowDirectionEnum
Property Value
This is a read/write property whose value is a BIMFlowDirectionEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.FlowValue Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the value for the flow.
Syntax
BIMDuctConnectorDefinition.FlowValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.FlowValueParameter Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the flow value with expression or parameter.
BIMDuctConnectorDefinition Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Syntax
BIMDuctConnectorDefinition.FlowValueParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.Geometry Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is independent of the
connector and any changes made to the contents of the collection will not affect the connector. To change the geometry or the shape
of the connector use the SetShape method.
Syntax
BIMDuctConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Height Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that provides access to the connector height. When the BIMDuctConnectorDefinition object has been created
using the CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the height, (in centimeters), of the
connector as defined by the input geometry. After the definition object has been used to create a connector, this property returns a
parameter that defines the height of the connector.
To change the height of an existing connector you can either edit the geometry that’s controlling the height or set the override height
using the HeightOverride property.
Syntax
BIMDuctConnectorDefinition.Height() As Variant
Property Value
This is a read only property whose value is a Variant.
BIMDuctConnectorDefinition Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Version
Introduced in version 2011
BIMDuctConnectorDefinition.HeightDirection Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that returns the direction of the connector height. This returns Nothing in the case where the height has not yet
been defined.
Syntax
BIMDuctConnectorDefinition.HeightDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.HeightOverride Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the height override for this connector.
Syntax
BIMDuctConnectorDefinition.HeightOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.LossMethod Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the loss method used for this connector.
Syntax
BIMDuctConnectorDefinition.LossMethod() As BIMDuctLossMethodEnum
BIMDuctConnectorDefinition Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Property Value
This is a read/write property whose value is a BIMDuctLossMethodEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.LossValue Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the value for the loss method.
Syntax
BIMDuctConnectorDefinition.LossValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.LossValueParameter Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the loss value with expression or parameter.
Syntax
BIMDuctConnectorDefinition.LossValueParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.Origin Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that returns the origin of the connector.
BIMDuctConnectorDefinition Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Syntax
BIMDuctConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.Parent Property
Parent Object: BIMDuctConnectorDefinition
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was created using one of the
Create methods this property will return Nothing since the definition isn’t associated with a connector yet.
Syntax
BIMDuctConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.ReverseDirection Method
Parent Object: BIMDuctConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMDuctConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMDuctConnectorDefinition.SetShape Method
Parent Object: BIMDuctConnectorDefinition
Description
Method that used to set the shape of the connector.
BIMDuctConnectorDefinition Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Syntax
BIMDuctConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As BIMConnectorShapeEnum )
Parameters
Name Type Description
Geometry ObjectCollection
Input ObjectCollection that specifies the set of geometry used to define the connector
position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and how the geometry is
to be evaluated. Valid values for the various types of connectors is shown below.
• Cable tray connectors: kRectangularShapeConnector or
kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector, kCircularShapeConnector,
kOvalShapeConnector or kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
• Rectangular shape
◦ Rectangular planar face.
BIMDuctConnectorDefinition Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
◦ Four edges that define a rectangle as illustrated below.
◦ Slot shape
◾ Planar face that has a slot shape.
◾ Four edges that define a slot or oval shape, as illustrated below
This is an optional argument whose default value is 92673.
BIMDuctConnectorDefinition Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
Version
Introduced in version 2011
BIMDuctConnectorDefinition.SystemType Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that specifies the system type for this connector.
Syntax
BIMDuctConnectorDefinition.SystemType() As BIMDuctSystemTypeEnum
Property Value
This is a read/write property whose value is a BIMDuctSystemTypeEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Type Property
Parent Object: BIMDuctConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMDuctConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.Width Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that provides access to the connector width. When the BIMDuctConnectorDefinition object has been created
using the CreateBIMDuctConnectorDefinition method, this property returns a Double indicating the width, (in centimeters), of the
connector as defined by the input geometry. After the definition object has been used to create a connector, this property returns a
parameter that defines the width of the connector.
BIMDuctConnectorDefinition Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
To change the width of an existing connector you can either edit the geometry that’s controlling the width or set the override width
using the WidthOverride property.
Syntax
BIMDuctConnectorDefinition.Width() As Variant
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 2011
BIMDuctConnectorDefinition.WidthDirection Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-only property that returns the direction of the connector width. This returns Nothing in the case where the width has not yet
been defined.
Syntax
BIMDuctConnectorDefinition.WidthDirection() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2014
BIMDuctConnectorDefinition.WidthOverride Property
Parent Object: BIMDuctConnectorDefinition
Description
Read-write property that gets and sets the width override for this connector.
Syntax
BIMDuctConnectorDefinition.WidthOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMDuctConnectorDefinition Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC646.htm 13/06/2025
BIMElectricalConnectorDefinition Object
Derived from: BIMConnectorDefinition Object
Description
BIMElectricalConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
ApparentLoad Read-write property that gets and sets the apparent load associated with this connector.
ApparentLoadParameter Read-write property that gets and sets the apparent load with expression or parameter.
ApparentLoadPhase1 Read-write property that gets and sets the phase 1 apparent load associated with this connector.
ApparentLoadPhase1Parameter Read-write property that gets and sets the apparent load phase 1 with expression or parameter.
ApparentLoadPhase2 Read-write property that gets and sets the phase 2 apparent load associated with this connector.
ApparentLoadPhase2Parameter Read-write property that gets and sets the apparent load phase 2 with expression or parameter.
ApparentLoadPhase3 Read-write property that gets and sets the phase 3 apparent load associated with this connector.
ApparentLoadPhase3Parameter Read-write property that gets and sets the apparent load phase 3 with expression or parameter.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
ConnectorShape Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Description Read-write property that gets and sets the description of this connector.
DescriptionParameter Read-write property that gets and sets the description with expression or parameter.
Direction
Read-only property that indicates the direction of the connection. This property will return Nothing in the case where a
valid set of referenced geometries have not yet been defined.
ExposeApparentLoadAsParameter Read-write property that gets and sets if expose the apparent load as parameter.
ExposeApparentLoadPhase1AsParameter Read-write property that gets and sets if expose the apparent load phase 1 as parameter.
ExposeApparentLoadPhase2AsParameter Read-write property that gets and sets if expose the apparent load phase 2 as parameter.
ExposeApparentLoadPhase3AsParameter Read-write property that gets and sets if expose the apparent load phase 3 as parameter.
ExposeDescriptionAsParameter Read-write property that gets and sets if expose the description as parameter.
ExposeHasMotorAsParameter Read-write property that gets and sets if expose the HasMotor as parameter.
ExposeLoadClassificationAsParameter Read-write property that gets and sets if expose the load classification as parameter.
ExposeNumberOfPolesAsParameter Read-write property that gets and sets if expose the number of poles as parameter.
ExposePowerFactorAsParameter Read-write property that gets and sets if expose the power factor as parameter.
ExposeVoltageAsParameter Read-write property that gets and sets if expose the voltage as parameter.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is independent
of the connector and any changes made to the contents of the collection will not affect the connector. To change the
geometry or the shape of the connector use the SetShape method.
HasMotor Read-write property that gets and sets whether or not there is a motor associated with this connector.
HasMotorParameter Read-write property that gets and sets the HasMotor with Boolean value or parameter.
LoadClassification Read-write property that gets and sets the load classification associated with this connector.
LoadClassificationParameter Read-write property that gets and sets the load classification with expression or parameter.
NumberOfPoles Read-write property that gets and sets the number of poles associated with this connector. Valid values are 1, 2, or 3.
NumberOfPolesParameter Read-write property that gets and sets the number of poles with expression or parameter.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the definition was created using
one of the Create methods this property will return Nothing since the definition isn’t associated with a connector yet.
PowerFactor Read-write property that gets and sets the power factor associated with this connector.
PowerFactorParameter Read-write property that gets and sets the power factor with expression or parameter.
PowerFactorState Read-write property that gets and sets the power factor associated with this connector.
SystemType Read-write property that specifies the system type for this connector.
Type Returns an ObjectTypeEnum indicating this object's type.
Voltage Read-write property that gets and sets the voltage associated with this connector. The units of voltage is the Volt.
VoltageParameter Read-write property that gets and sets the voltage with expression or parameter.
Accessed From
BIMConnectors.CreateElectricalConnectorDefinition
Version
Introduced in version 2011
BIMElectricalConnectorDefinition Object Page 1 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
BIMElectricalConnectorDefinition.ApparentLoad Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the apparent load associated with this connector.
Syntax
BIMElectricalConnectorDefinition.ApparentLoad() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ApparentLoadParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the apparent load with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ApparentLoadPhase1 Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the phase 1 apparent load associated with this connector.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase1() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ApparentLoadPhase1Parameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the apparent load phase 1 with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase1Parameter() As Variant
BIMElectricalConnectorDefinition Object Page 2 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ApparentLoadPhase2 Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the phase 2 apparent load associated with this connector.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase2() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ApparentLoadPhase2Parameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the apparent load phase 2 with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase2Parameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ApparentLoadPhase3 Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the phase 3 apparent load associated with this connector.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase3() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ApparentLoadPhase3Parameter Property
BIMElectricalConnectorDefinition Object Page 3 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the apparent load phase 3 with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.ApparentLoadPhase3Parameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.Application Property
Parent Object: BIMElectricalConnectorDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Syntax
BIMElectricalConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ConnectorShape Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMElectricalConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.Description Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the description of this connector.
Syntax
BIMElectricalConnectorDefinition.Description() As String
BIMElectricalConnectorDefinition Object Page 4 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.DescriptionParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the description with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.DescriptionParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.Direction Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case where a valid set of referenced geometries have not yet
been defined.
Syntax
BIMElectricalConnectorDefinition.Direction() As UnitVector
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ExposeApparentLoadAsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the apparent load as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeApparentLoadAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition Object Page 5 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase1AsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the apparent load phase 1 as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase1AsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase2AsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the apparent load phase 2 as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase2AsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase3AsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the apparent load phase 3 as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeApparentLoadPhase3AsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeDescriptionAsParameter Property
Parent Object: BIMElectricalConnectorDefinition
BIMElectricalConnectorDefinition Object Page 6 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Description
Read-write property that gets and sets if expose the description as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeDescriptionAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeHasMotorAsParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the HasMotor as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeHasMotorAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeLoadClassificationAsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the load classification as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeLoadClassificationAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeNumberOfPolesAsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the number of poles as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeNumberOfPolesAsParameter() As Boolean
BIMElectricalConnectorDefinition Object Page 7 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposePowerFactorAsParameter
Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the power factor as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposePowerFactorAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.ExposeVoltageAsParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets if expose the voltage as parameter.
Syntax
BIMElectricalConnectorDefinition.ExposeVoltageAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.Geometry Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is independent of the connector and any changes made to
the contents of the collection will not affect the connector. To change the geometry or the shape of the connector use the SetShape method.
Syntax
BIMElectricalConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition Object Page 8 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
BIMElectricalConnectorDefinition.HasMotor Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets whether or not there is a motor associated with this connector.
Syntax
BIMElectricalConnectorDefinition.HasMotor() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.HasMotorParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the HasMotor with Boolean value or parameter.
Syntax
BIMElectricalConnectorDefinition.HasMotorParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.LoadClassification Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the load classification associated with this connector.
Syntax
BIMElectricalConnectorDefinition.LoadClassification() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.LoadClassificationParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the load classification with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.LoadClassificationParameter() As Variant
BIMElectricalConnectorDefinition Object Page 9 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.NumberOfPoles Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the number of poles associated with this connector. Valid values are 1, 2, or 3.
Syntax
BIMElectricalConnectorDefinition.NumberOfPoles() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.NumberOfPolesParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the number of poles with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.NumberOfPolesParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.Origin Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-only property that returns the origin of the connector.
Syntax
BIMElectricalConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.Parent Property
BIMElectricalConnectorDefinition Object Page 10 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Parent Object: BIMElectricalConnectorDefinition
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was created using one of the Create methods this property will
return Nothing since the definition isn’t associated with a connector yet.
Syntax
BIMElectricalConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.PowerFactor Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the power factor associated with this connector.
Syntax
BIMElectricalConnectorDefinition.PowerFactor() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.PowerFactorParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the power factor with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.PowerFactorParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition.PowerFactorState Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the power factor associated with this connector.
Syntax
BIMElectricalConnectorDefinition.PowerFactorState() As BIMElectricalPowerFactorStateEnum
BIMElectricalConnectorDefinition Object Page 11 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Property Value
This is a read/write property whose value is a BIMElectricalPowerFactorStateEnum.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.ReverseDirection Method
Parent Object: BIMElectricalConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMElectricalConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.SetShape Method
Parent Object: BIMElectricalConnectorDefinition
Description
Method that used to set the shape of the connector.
Syntax
BIMElectricalConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As BIMConnectorShapeEnum )
Parameters
Name Type Description
Geometry ObjectCollection Input ObjectCollection that specifies the set of geometry used to define the connector position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and how the geometry is to be evaluated. Valid values for
the various types of connectors is shown below.
• Cable tray connectors: kRectangularShapeConnector or kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector, kCircularShapeConnector, kOvalShapeConnector or
kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
BIMElectricalConnectorDefinition Object Page 12 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
• Rectangular shape
◦ Rectangular planar face.
◦ Four edges that define a rectangle as illustrated below.
◦ Slot shape
◾ Planar face that has a slot shape.
◾ Four edges that define a slot or oval shape, as illustrated below
This is an optional argument whose default value is 92673.
BIMElectricalConnectorDefinition Object Page 13 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.SystemType Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that specifies the system type for this connector.
Syntax
BIMElectricalConnectorDefinition.SystemType() As BIMElectricalSystemTypeEnum
Property Value
This is a read/write property whose value is a BIMElectricalSystemTypeEnum.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.Type Property
Parent Object: BIMElectricalConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMElectricalConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.Voltage Property
Parent Object: BIMElectricalConnectorDefinition
Description
Read-write property that gets and sets the voltage associated with this connector. The units of voltage is the Volt.
Syntax
BIMElectricalConnectorDefinition.Voltage() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMElectricalConnectorDefinition.VoltageParameter Property
Parent Object: BIMElectricalConnectorDefinition
Description
BIMElectricalConnectorDefinition Object Page 14 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
Read-write property that gets and sets the voltage with expression or parameter.
Syntax
BIMElectricalConnectorDefinition.VoltageParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMElectricalConnectorDefinition Object Page 15 of 15
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEF89.htm 13/06/2025
BIMExchangeServer Object
Description
BIMExchangeServer object.
Methods
Name Description
GetBIMComponent
Method that returns the BIMComponent associated with the provided
Inventor part or assembly component definition.
Version
Introduced in version 2011
BIMExchangeServer.GetBIMComponent
Method
Parent Object: BIMExchangeServer
Description
Method that returns the BIMComponent associated with the provided Inventor part or assembly
component definition.
Syntax
BIMExchangeServer.GetBIMComponent( ComponentDefinition As ComponentDefinition ) As
BIMComponent
Parameters
Name Type Description
ComponentDefinition ComponentDefinition
Input PartComponentDefinition or
AssemblyComponentDefinition object that specifies
which Inventor part or assembly you want to get the
associated BIMComponent for.
BIMExchangeServer Object Page 1 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh18FA.htm 13/06/2025
Version
Introduced in version 2011
BIMExchangeServer Object Page 2 of 2
file:///C:/Users/Cliente/AppData/Local/Temp/~hh18FA.htm 13/06/2025
BIMPipeConnectorDefinition Object
Derived from: BIMConnectorDefinition Object
Description
BIMPipeConnectorDefinition object.
Methods
Name Description
ReverseDirection Method that will reverse the direction of the connection.
SetShape Method that used to set the shape of the connector.
Properties
Name Description
AllowSlopeAdjustment Read-write property that gets and sets whether or not slope adjustment is allowed for this connector.
AllowSlopeAdjustmentParameter Read-write property that gets and sets the AllowSlopeAdjustment with expression or parameter.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
ConnectionType Read-write property that gets and sets the connection type for this connector.
ConnectorShape Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Description Read-write property that gets and sets the description of this connector.
DescriptionParameter Read-write property that gets and sets the description with expression or parameter.
Diameter
Read-only property that provides access to the connector diameter. When the BIMPipeConnectorDefinition
object has been created using the CreateBIMPipeConnectorDefinition method, this property returns a Double
indicating the diameter, (in centimeters), of the connector as defined by the input geometry. After the definition
object has been used to create a connector, this property returns a parameter that defines the diameter of the
connector.
To change the diameter of an existing connector you can either edit the geometry that’s controlling the diameter
or set the override diameter using the DiameterOverride property.
DiameterOverride Read-write property that gets and sets the diameter override for this connector.
Direction
Read-only property that indicates the direction of the connection. This property will return Nothing in the case
where a valid set of referenced geometries have not yet been defined.
ExposeAllowSlopeAdjustmentAsParameter Read-write property that gets and sets if expose the AllowSlopeAdjustment as parameter.
ExposeDescriptionAsParameter Read-write property that gets and sets if expose the description as parameter.
ExposeFlowValueAsParameter Read-write property that gets and sets if expose the flow value as parameter.
ExposeLossValueAsParameter Read-write property that gets and sets if expose the loss value as parameter.
FlowConfiguration Read-write property that gets and sets the flow configuration used for this connector.
FlowDirection Read-write property that gets and sets the flow direction for this pipe connector.
FlowValue Read-write property that gets and sets the value for the flow.
FlowValueParameter Read-write property that gets and sets the flow value with expression or parameter.
Geometry
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is
independent of the connector and any changes made to the contents of the collection will not affect the
connector. To change the geometry or the shape of the connector use the SetShape method.
LossMethod Read-write property that gets and sets the loss method used for this connector.
LossValue Read-write property that gets and sets the value for the loss method.
LossValueParameter Read-write property that gets and sets the loss value with expression or parameter.
NominalDiameter Read-write property that provides access to the nominal diameter of the pipe connection.
Origin Read-only property that returns the origin of the connector.
Parent
Property that returns the parent BIMConnector that this definition is associated with. If the definition was
created using one of the Create methods this property will return Nothing since the definition isn’t associated
with a connector yet.
SystemType Read-write property that specifies the system type for this connector.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BIMConnectors.CreatePipeConnectorDefinition
Version
Introduced in version 2011
BIMPipeConnectorDefinition Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
BIMPipeConnectorDefinition.AllowSlopeAdjustment Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets whether or not slope adjustment is allowed for this connector.
Syntax
BIMPipeConnectorDefinition.AllowSlopeAdjustment() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.AllowSlopeAdjustmentParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the AllowSlopeAdjustment with expression or parameter.
Syntax
BIMPipeConnectorDefinition.AllowSlopeAdjustmentParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.Application Property
Parent Object: BIMPipeConnectorDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of Apprentice,
an ApprenticeServer object is returned.
Syntax
BIMPipeConnectorDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.ConnectionType Property
Parent Object: BIMPipeConnectorDefinition
Description
BIMPipeConnectorDefinition Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Read-write property that gets and sets the connection type for this connector.
Syntax
BIMPipeConnectorDefinition.ConnectionType() As BIMPipeConnectionTypeEnum
Property Value
This is a read/write property whose value is a BIMPipeConnectionTypeEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.ConnectorShape Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-only property that specifies the shape of the connector. To change the shape, use the SetShape method.
Syntax
BIMPipeConnectorDefinition.ConnectorShape() As BIMConnectorShapeEnum
Property Value
This is a read only property whose value is a BIMConnectorShapeEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.Description Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the description of this connector.
Syntax
BIMPipeConnectorDefinition.Description() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.DescriptionParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the description with expression or parameter.
Syntax
BIMPipeConnectorDefinition.DescriptionParameter() As Variant
BIMPipeConnectorDefinition Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.Diameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-only property that provides access to the connector diameter. When the BIMPipeConnectorDefinition object has been created using the
CreateBIMPipeConnectorDefinition method, this property returns a Double indicating the diameter, (in centimeters), of the connector as defined by the input
geometry. After the definition object has been used to create a connector, this property returns a parameter that defines the diameter of the connector.
To change the diameter of an existing connector you can either edit the geometry that’s controlling the diameter or set the override diameter using the
DiameterOverride property.
Syntax
BIMPipeConnectorDefinition.Diameter() As Variant
Property Value
This is a read only property whose value is a Variant.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.DiameterOverride Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the diameter override for this connector.
Syntax
BIMPipeConnectorDefinition.DiameterOverride() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.Direction Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-only property that indicates the direction of the connection. This property will return Nothing in the case where a valid set of referenced geometries
have not yet been defined.
Syntax
BIMPipeConnectorDefinition.Direction() As UnitVector
BIMPipeConnectorDefinition Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Property Value
This is a read only property whose value is a UnitVector.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.ExposeAllowSlopeAdjustmentAsParameter
Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets if expose the AllowSlopeAdjustment as parameter.
Syntax
BIMPipeConnectorDefinition.ExposeAllowSlopeAdjustmentAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.ExposeDescriptionAsParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets if expose the description as parameter.
Syntax
BIMPipeConnectorDefinition.ExposeDescriptionAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.ExposeFlowValueAsParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets if expose the flow value as parameter.
Syntax
BIMPipeConnectorDefinition.ExposeFlowValueAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BIMPipeConnectorDefinition Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Version
Introduced in version 2014
BIMPipeConnectorDefinition.ExposeLossValueAsParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets if expose the loss value as parameter.
Syntax
BIMPipeConnectorDefinition.ExposeLossValueAsParameter() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.FlowConfiguration Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the flow configuration used for this connector.
Syntax
BIMPipeConnectorDefinition.FlowConfiguration() As BIMPipeFlowConfigurationEnum
Property Value
This is a read/write property whose value is a BIMPipeFlowConfigurationEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.FlowDirection Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the flow direction for this pipe connector.
Syntax
BIMPipeConnectorDefinition.FlowDirection() As BIMFlowDirectionEnum
Property Value
This is a read/write property whose value is a BIMFlowDirectionEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.FlowValue Property
BIMPipeConnectorDefinition Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the value for the flow.
Syntax
BIMPipeConnectorDefinition.FlowValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.FlowValueParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the flow value with expression or parameter.
Syntax
BIMPipeConnectorDefinition.FlowValueParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.Geometry Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-only property that gets the geometry that defines the shape of the connection. The returned collection is independent of the connector and any changes
made to the contents of the collection will not affect the connector. To change the geometry or the shape of the connector use the SetShape method.
Syntax
BIMPipeConnectorDefinition.Geometry() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.LossMethod Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the loss method used for this connector.
BIMPipeConnectorDefinition Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Syntax
BIMPipeConnectorDefinition.LossMethod() As BIMPipeLossMethodEnum
Property Value
This is a read/write property whose value is a BIMPipeLossMethodEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.LossValue Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the value for the loss method.
Syntax
BIMPipeConnectorDefinition.LossValue() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.LossValueParameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that gets and sets the loss value with expression or parameter.
Syntax
BIMPipeConnectorDefinition.LossValueParameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.NominalDiameter Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that provides access to the nominal diameter of the pipe connection.
Syntax
BIMPipeConnectorDefinition.NominalDiameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
BIMPipeConnectorDefinition Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Version
Introduced in version 2011
BIMPipeConnectorDefinition.Origin Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-only property that returns the origin of the connector.
Syntax
BIMPipeConnectorDefinition.Origin() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 2014
BIMPipeConnectorDefinition.Parent Property
Parent Object: BIMPipeConnectorDefinition
Description
Property that returns the parent BIMConnector that this definition is associated with. If the definition was created using one of the Create methods this
property will return Nothing since the definition isn’t associated with a connector yet.
Syntax
BIMPipeConnectorDefinition.Parent() As BIMConnector
Property Value
This is a read only property whose value is a BIMConnector.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.ReverseDirection Method
Parent Object: BIMPipeConnectorDefinition
Description
Method that will reverse the direction of the connection.
Syntax
BIMPipeConnectorDefinition.ReverseDirection()
Version
Introduced in version 2011
BIMPipeConnectorDefinition.SetShape Method
Parent Object: BIMPipeConnectorDefinition
BIMPipeConnectorDefinition Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Description
Method that used to set the shape of the connector.
Syntax
BIMPipeConnectorDefinition.SetShape( Geometry As ObjectCollection, [ConnectorShape] As BIMConnectorShapeEnum )
Parameters
Name Type Description
Geometry ObjectCollection Input ObjectCollection that specifies the set of geometry used to define the connector position and shape.
ConnectorShape BIMConnectorShapeEnum
Input value that indicates the desired shape of the connector and how the geometry is to be evaluated. Valid
values for the various types of connectors is shown below.
• Cable tray connectors: kRectangularShapeConnector or kUndefinedShapeConnector
• Conduit connectors: kCircularShapeConnector or kUndefinedShapeConnector
• Duct connectors: kRectangularShapeConnector, kCircularShapeConnector, kOvalShapeConnector or
kUndefinedShapeConnector
• Electrical connectors: kUndefinedShapeConnector
• Pipe connectors: kCircularShapeConnector or kUndefinedShapeConnector
The input geometry for the various shapes can be the following:
• Circular shape
◦ Single circular face.
◦ Circular edge (it can be an arc)
• Rectangular shape
◦ Rectangular planar face.
◦ Four edges that define a rectangle as illustrated below.
BIMPipeConnectorDefinition Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
◦ Slot shape
◾ Planar face that has a slot shape.
◾ Four edges that define a slot or oval shape, as illustrated below
This is an optional argument whose default value is 92673.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.SystemType Property
Parent Object: BIMPipeConnectorDefinition
Description
Read-write property that specifies the system type for this connector.
Syntax
BIMPipeConnectorDefinition.SystemType() As BIMPipeSystemTypeEnum
BIMPipeConnectorDefinition Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
Property Value
This is a read/write property whose value is a BIMPipeSystemTypeEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition.Type Property
Parent Object: BIMPipeConnectorDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BIMPipeConnectorDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2011
BIMPipeConnectorDefinition Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hh31F1.htm 13/06/2025
BOM Object
Description
The BOM object represents the Bill Of Materials (BOM) data of a document.
Methods
Name Description
ExportBOMCustomization Export BOM column customization as XML file.
GetPartNumberMergeSettings
Method that gets the part number row merge settings for the
BOM.
GetPartNumberMergeSettings2 Gets the part number row merge settings for the BOM.
ImportBOMCustomization Import BOM column customization as XML file.
SetPartNumberMergeSettings
Method that sets the part number row merge settings for the
BOM.
SetPartNumberMergeSettings2 Sets the part number row merge settings for the BOM.
Properties
Name Description
Application
Returns the top-level parent application object. When used
the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an
ApprenticeServer object is returned.
BOMViews Property that gets the BOMViews collection object.
HideSuppressedComponentsInBOM
Gets and sets whether to hide the suppressed components in
BOM.
Parent
Property that returns the parent ComponentDefinition
object.
PartsOnlyViewEnabled Gets and sets whether the parts only BOM view is enabled.
PartsOnlyViewMinimumDigits
Gets and sets the minimum number of digits displayed in a
parts only view with the PartsOnlyViewNumberingScheme
set to kNumericNumbering.
PartsOnlyViewNumberingScheme gets and sets the numbering scheme for a 'Parts Only' view.
RenumberItemsSequentially
Gets and sets whether to renumber the items sequentially or
not.
RequiresUpdate Determines whether the BOM requires an update.
RevisionId
Property that returns the GUID that represents the last saved
revision of this BOM.
StructuredViewDelimiter
Gets and sets the delimiter to use for numbering. This
property applies only for an all-level structured view.
StructuredViewEnabled Gets and sets whether the structured BOM view is enabled.
StructuredViewFirstLevelOnly
BOM Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Gets and sets whether the structured view is an 'all-level' or
a 'first level only' view.
StructuredViewMinimumDigits
Gets and sets the minimum number of digits displayed in a
'first level only' structured view.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.BOM, BOMView.Parent, WeldmentComponentDefinition.BOM
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 10
BOM.Application Property
Parent Object: BOM
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOM.Application() As Object
Property Value
This is a read only property whose value is an Object.
BOM Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Version
Introduced in version 10
BOM.BOMViews Property
Parent Object: BOM
Description
Property that gets the BOMViews collection object.
Syntax
BOM.BOMViews() As BOMViews
Property Value
This is a read only property whose value is a BOMViews.
Samples
Name Description
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 10
BOM.ExportBOMCustomization Method
Parent Object: BOM
Description
Export BOM column customization as XML file.
BOM Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Syntax
BOM.ExportBOMCustomization( FileName As String )
Parameters
Name Type Description
FileName String
Input String that defines the name of the xml file to write the BOM
customization information to.
Version
Introduced in version 2015
BOM.GetPartNumberMergeSettings Method
Parent Object: BOM
Description
Method that gets the part number row merge settings for the BOM.
Syntax
BOM.GetPartNumberMergeSettings( MergeEnabled As Boolean, MergeExcludeList() As
String )
Parameters
Name Type Description
MergeEnabled Boolean
Boolean that indicates whether the row merging based on part
number match is enabled.
MergeExcludeList String
Array that returns the strings to exclude when merging based on part
number match. This array will contain a minimum of one string ('').
Version
Introduced in version 11
BOM Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
BOM.GetPartNumberMergeSettings2
Method
Parent Object: BOM
Description
Gets the part number row merge settings for the BOM.
Syntax
BOM.GetPartNumberMergeSettings2( MergeEnabled As Boolean, MergeExcludeList() As
String, MergeInstanceRows As Boolean )
Parameters
Name Type Description
MergeEnabled Boolean
Output Boolean that indicates whether the row merging based on
part number match is enabled.
MergeExcludeList String
Output array that returns the strings to exclude when merging
based on part number match. This array will contain a minimum of
one string (“”).
MergeInstanceRows Boolean
Output Boolean that indicates whether the merge instance rows is
enabled or not.
Version
Introduced in version 2022
BOM.HideSuppressedComponentsInBOM
Property
Parent Object: BOM
Description
Gets and sets whether to hide the suppressed components in BOM.
Syntax
BOM.HideSuppressedComponentsInBOM() As Boolean
BOM Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
BOM.ImportBOMCustomization Method
Parent Object: BOM
Description
Import BOM column customization as XML file.
Syntax
BOM.ImportBOMCustomization( FileName As String )
Parameters
Name Type Description
FileName String
Input String that defines the name of an existing xml file that contains BOM
customization information.
Version
Introduced in version 2015
BOM.Parent Property
Parent Object: BOM
Description
Property that returns the parent ComponentDefinition object.
Syntax
BOM.Parent() As Object
BOM Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
BOM.PartsOnlyViewEnabled Property
Parent Object: BOM
Description
Gets and sets whether the parts only BOM view is enabled.
Syntax
BOM.PartsOnlyViewEnabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 10
BOM.PartsOnlyViewMinimumDigits
Property
Parent Object: BOM
Description
BOM Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Gets and sets the minimum number of digits displayed in a parts only view with the
PartsOnlyViewNumberingScheme set to kNumericNumbering.
Syntax
BOM.PartsOnlyViewMinimumDigits() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 11
BOM.PartsOnlyViewNumberingScheme
Property
Parent Object: BOM
Description
gets and sets the numbering scheme for a 'Parts Only' view.
Syntax
BOM.PartsOnlyViewNumberingScheme() As NumberingSchemeEnum
Property Value
This is a read/write property whose value is a NumberingSchemeEnum.
Version
Introduced in version 11
BOM.RenumberItemsSequentially Property
Parent Object: BOM
Description
BOM Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Gets and sets whether to renumber the items sequentially or not.
Syntax
BOM.RenumberItemsSequentially() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2023
BOM.RequiresUpdate Property
Parent Object: BOM
Description
Determines whether the BOM requires an update.
Syntax
BOM.RequiresUpdate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
BOM.RevisionId Property
Parent Object: BOM
Description
Property that returns the GUID that represents the last saved revision of this BOM.
BOM Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Syntax
BOM.RevisionId() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
BOM.SetPartNumberMergeSettings Method
Parent Object: BOM
Description
Method that sets the part number row merge settings for the BOM.
Syntax
BOM.SetPartNumberMergeSettings( MergeEnabled As Boolean, [MergeKeys] As Variant )
Parameters
Name Type Description
MergeEnabled Boolean
Boolean that indicates whether the row merging based on part number
match is enabled.
MergeKeys Variant
Optional input array that contains the strings to exclude when merging
based on part number match. If supplied, this array should contain a
minimum of one string ('').
This is an optional argument whose default value is null.
Version
Introduced in version 11
BOM.SetPartNumberMergeSettings2 Method
Parent Object: BOM
BOM Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Description
Sets the part number row merge settings for the BOM.
Syntax
BOM.SetPartNumberMergeSettings2( MergeEnabled As Boolean, [MergeKeys] As Variant,
[MergeInstanceRows] As Variant )
Parameters
Name Type Description
MergeEnabled Boolean
Input Boolean that indicates whether the row merging based on
part number match is enabled.
MergeKeys Variant
Optional input array that contains the strings to exclude when
merging based on part number match. If supplied, this array should
contain a minimum of one string (“”).
This is an optional argument whose default value is null.
MergeInstanceRows Variant
Output Boolean that indicates whether the merge instance rows is
enabled or not.
This is an optional argument whose default value is null.
Version
Introduced in version 2022
BOM.StructuredViewDelimiter Property
Parent Object: BOM
Description
Gets and sets the delimiter to use for numbering. This property applies only for an all-level
structured view.
Syntax
BOM.StructuredViewDelimiter() As String
Property Value
This is a read/write property whose value is a String.
BOM Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Version
Introduced in version 11
BOM.StructuredViewEnabled Property
Parent Object: BOM
Description
Gets and sets whether the structured BOM view is enabled.
Syntax
BOM.StructuredViewEnabled() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 11
BOM.StructuredViewFirstLevelOnly
Property
Parent Object: BOM
Description
Gets and sets whether the structured view is an 'all-level' or a 'first level only' view.
BOM Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
Syntax
BOM.StructuredViewFirstLevelOnly() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Samples
Name Description
Creation a balloon This sample demonstrates the creation of a balloon.
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 11
BOM.StructuredViewMinimumDigits
Property
Parent Object: BOM
Description
Gets and sets the minimum number of digits displayed in a 'first level only' structured view.
Syntax
BOM.StructuredViewMinimumDigits() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 11
BOM Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
BOM.Type Property
Parent Object: BOM
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOM.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
BOM Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E6F.htm 13/06/2025
BOMQuantity Object
Description
This object provides methods and properties allowing the BOM row unit quantity to be computed.
Methods
Name Description
GetBaseQuantity Method that retrieves the base quantity for the component.
GetEvaluatedBaseQuantity Method that retrieves the stored base quantity for the component.
SetBaseQuantity Method that sets the base quantity for the component.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
BaseUnits
Gets and sets the true unit that the component is quantified in. This property only
applies if the BaseQuantity is set to a parameter.
Parent Property that returns the parent ComponentDefinition object.
Type Returns an ObjectTypeEnum indicating this object's type.
UnitQuantity
Property that returns the unit quantity derived from two other properties, the
BaseQuantity and the BaseUnits.
Accessed From
AssemblyComponentDefinition.BOMQuantity, ComponentDefinition.BOMQuantity,
FlatPattern.BOMQuantity, PartComponentDefinition.BOMQuantity,
SheetMetalComponentDefinition.BOMQuantity, VirtualComponentDefinition.BOMQuantity,
WeldmentComponentDefinition.BOMQuantity, WeldsComponentDefinition.BOMQuantity
Version
Introduced in version 10
BOMQuantity.Application Property
Parent Object: BOMQuantity
BOMQuantity Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOMQuantity.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
BOMQuantity.BaseUnits Property
Parent Object: BOMQuantity
Description
Gets and sets the true unit that the component is quantified in. This property only applies if the
BaseQuantity is set to a parameter.
Syntax
BOMQuantity.BaseUnits() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
BOMQuantity.GetBaseQuantity Method
Parent Object: BOMQuantity
BOMQuantity Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
Description
Method that retrieves the base quantity for the component.
Syntax
BOMQuantity.GetBaseQuantity( QuantityType As BOMQuantityTypeEnum, [Quantity] As
Variant )
Parameters
Name Type Description
QuantityType BOMQuantityTypeEnum
Output BOMQuantityTypeEnum indicating the quantity
type. If kParameterBOMQuantity is returned, the
Quantity argument returns the corresponding parameter
object.
Quantity Variant
Output Variant returning the quantity. This argument
returns a Parameter object if the QuantityType returned
is kParameterBOMQuantity.
This is an optional argument whose default value is null.
Version
Introduced in version 10
BOMQuantity.GetEvaluatedBaseQuantity
Method
Parent Object: BOMQuantity
Description
Method that retrieves the stored base quantity for the component.
Syntax
BOMQuantity.GetEvaluatedBaseQuantity( QuantityType As BOMQuantityTypeEnum ) As
Double
Parameters
Name Type Description
QuantityType BOMQuantityTypeEnum
BOMQuantity Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
BOMQuantityTypeEnum indicating the stored quantity
type. This can currently return either
kEachBOMQuantity or kParameterBOMQuantity. If
kParameterBOMQuantity is returned, the Quantity
argument returns the evaluated string indicating the base
quantity.
Version
Introduced in version 11
BOMQuantity.Parent Property
Parent Object: BOMQuantity
Description
Property that returns the parent ComponentDefinition object.
Syntax
BOMQuantity.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 10
BOMQuantity.SetBaseQuantity Method
Parent Object: BOMQuantity
Description
Method that sets the base quantity for the component.
Syntax
BOMQuantity.SetBaseQuantity( QuantityType As BOMQuantityTypeEnum, [Quantity] As
Variant )
BOMQuantity Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
Parameters
Name Type Description
QuantityType BOMQuantityTypeEnum
Input BOMQuantityTypeEnum indicating the quantity
type. If kParameterBOMQuantity is set, a Parameter
needs to be specified as the second argument.
Quantity Variant
Input Variant specifying the quantity. If QuantityType is
kParameterBOMQuantity, this argument expects a
Parameter input, else this argument can be left
unspecified. Only such parameters whose units resolve
to being a linear length, a volume, or a mass are valid.
This is an optional argument whose default value is null.
Version
Introduced in version 10
BOMQuantity.Type Property
Parent Object: BOMQuantity
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOMQuantity.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
BOMQuantity.UnitQuantity Property
Parent Object: BOMQuantity
BOMQuantity Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
Description
Property that returns the unit quantity derived from two other properties, the BaseQuantity and the
BaseUnits.
Syntax
BOMQuantity.UnitQuantity() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
BOMQuantity Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8418.htm 13/06/2025
BOMRow Object
Description
The BOMRow object represents an item in the BOM based on the parent BOMView.
Methods
Name Description
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
BOMStructure
Gets and sets how the BOM item represented by this row is
used/viewed relating to design.
ChildRows
Property that gets the BOMRowsEnumerator object containing the
locally-stored rows under this BOMRow. This property will return
Nothing for BOMRows in a parts-only view and if there are no subrows
for this BOMRow.
ComponentDefinitions
Property that returns the ComponentDefinitions associated with this
row in the BOM. These could be part, sheet metal, assembly,
weldment or a virtual component definitions. This enumerator will
return just one component definition unless this row is a merged one,
in which case all associated component definitions are returned. The
first component definition in the enumerator is always the primary
component definition.
ComponentOccurrences Gets the ComponentOccurrences associated with this row in the BOM.
ItemNumber Gets and sets the item number of the BOM item.
ItemNumberLocked Gets and sets whether the item identifier can be edited.
ItemQuantity
Property that gets the number of instances not marked as phantom or
reference represented by this BOM row.
Merged
Property that returns whether this row is a result of a merging multiple
rows. If true, the ComponentDefinitions property returns all the
associated component definitions. This property will return False for
all rows in the data BOMView.
OccurrencePropertySets
Read-only property that returns a PropertySets object associated with
this BOMRow. This only applies to non merged component rows with
Instance Properties.
Parent Property that returns the parent BOMView or the BOMRow object.
BOMRow Object Page 1 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Promoted Property that returns whether this row was promoted (for instance, as a
result of the parent subassembly being marked phantom). This property
will return False for all rows in the data BOMView.
ReferencedFileDescriptor
Gets the FileDescriptor for the component referenced by this row. This
only applies to non merged component rows and non local components
and immediately referenced components. Therefore this would only be
useful in the data view.
RolledUp
Indicates whether this row is a result of rolling up multiple promoted
rows of the same ComponentDefinition.
TotalQuantity
Gets and sets the total quantity of the BOM item. Overrides cannot be
set for parts only views.
TotalQuantityOverridden
Gets and sets whether the TotalQuantity property has been overridden.
This property can only be set to False, in which case the override on
the value will be removed.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BOMRowsEnumerator.Item, DrawingBOMRow.BOMRow
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 10
BOMRow.Application Property
Parent Object: BOMRow
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOMRow.Application() As Object
BOMRow Object Page 2 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
BOMRow.AttributeSets Property
Parent Object: BOMRow
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BOMRow.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2009
BOMRow.BOMStructure Property
Parent Object: BOMRow
Description
Gets and sets how the BOM item represented by this row is used/viewed relating to design.
Syntax
BOMRow.BOMStructure() As BOMStructureEnum
BOMRow Object Page 3 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read/write property whose value is a BOMStructureEnum.
Version
Introduced in version 10
BOMRow.ChildRows Property
Parent Object: BOMRow
Description
Property that gets the BOMRowsEnumerator object containing the locally-stored rows under this
BOMRow. This property will return Nothing for BOMRows in a parts-only view and if there are
no sub-rows for this BOMRow.
Syntax
BOMRow.ChildRows() As BOMRowsEnumerator
Property Value
This is a read only property whose value is a BOMRowsEnumerator.
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 11
BOMRow.ComponentDefinitions Property
Parent Object: BOMRow
Description
BOMRow Object Page 4 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property that returns the ComponentDefinitions associated with this row in the BOM. These could
be part, sheet metal, assembly, weldment or a virtual component definitions. This enumerator will
return just one component definition unless this row is a merged one, in which case all associated
component definitions are returned. The first component definition in the enumerator is always the
primary component definition.
Syntax
BOMRow.ComponentDefinitions() As ComponentDefinitionsEnumerator
Property Value
This is a read only property whose value is a ComponentDefinitionsEnumerator.
Samples
Name Description
Find component referenced by
balloon
This sample demonstrates how to find the component that a
balloon references.
Using the BOM APIs
This sample demonstrates the Bill of Materials API
functionality in assemblies.
Version
Introduced in version 10
BOMRow.ComponentOccurrences Property
Parent Object: BOMRow
Description
Gets the ComponentOccurrences associated with this row in the BOM.
Syntax
BOMRow.ComponentOccurrences() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
BOMRow Object Page 5 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Version
Introduced in version 2022
BOMRow.GetReferenceKey Method
Parent Object: BOMRow
Description
Method that generates and returns the reference key for this entity.
Syntax
BOMRow.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 2009
BOMRow.ItemNumber Property
Parent Object: BOMRow
BOMRow Object Page 6 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Description
Gets and sets the item number of the BOM item.
Syntax
BOMRow.ItemNumber() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 10
BOMRow.ItemNumberLocked Property
Parent Object: BOMRow
Description
Gets and sets whether the item identifier can be edited.
Syntax
BOMRow.ItemNumberLocked() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BOMRow Object Page 7 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
BOMRow.ItemQuantity Property
Parent Object: BOMRow
Description
Property that gets the number of instances not marked as phantom or reference represented by this
BOM row.
Syntax
BOMRow.ItemQuantity() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 10
BOMRow.Merged Property
Parent Object: BOMRow
Description
Property that returns whether this row is a result of a merging multiple rows. If true, the
ComponentDefinitions property returns all the associated component definitions. This property
will return False for all rows in the data BOMView.
Syntax
BOMRow.Merged() As Boolean
BOMRow Object Page 8 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
BOMRow.OccurrencePropertySets Property
Parent Object: BOMRow
Description
Read-only property that returns a PropertySets object associated with this BOMRow. This only
applies to non merged component rows with Instance Properties.
Syntax
BOMRow.OccurrencePropertySets() As PropertySets
Property Value
This is a read only property whose value is a PropertySets.
Version
Introduced in version 2022
BOMRow.Parent Property
Parent Object: BOMRow
Description
Property that returns the parent BOMView or the BOMRow object.
Syntax
BOMRow.Parent() As Object
BOMRow Object Page 9 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
BOMRow.Promoted Property
Parent Object: BOMRow
Description
Property that returns whether this row was promoted (for instance, as a result of the parent
subassembly being marked phantom). This property will return False for all rows in the data
BOMView.
Syntax
BOMRow.Promoted() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
BOMRow.ReferencedFileDescriptor Property
Parent Object: BOMRow
Description
Gets the FileDescriptor for the component referenced by this row. This only applies to non merged
component rows and non local components and immediately referenced components. Therefore
this would only be useful in the data view.
Syntax
BOMRow.ReferencedFileDescriptor() As FileDescriptor
BOMRow Object Page 10 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read only property whose value is a FileDescriptor.
Version
Introduced in version 2008
BOMRow.RolledUp Property
Parent Object: BOMRow
Description
Indicates whether this row is a result of rolling up multiple promoted rows of the same
ComponentDefinition.
Syntax
BOMRow.RolledUp() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 10
BOMRow.TotalQuantity Property
Parent Object: BOMRow
Description
Gets and sets the total quantity of the BOM item. Overrides cannot be set for parts only views.
Syntax
BOMRow.TotalQuantity() As String
BOMRow Object Page 11 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 10
BOMRow.TotalQuantityOverridden Property
Parent Object: BOMRow
Description
Gets and sets whether the TotalQuantity property has been overridden. This property can only be
set to False, in which case the override on the value will be removed.
Syntax
BOMRow.TotalQuantityOverridden() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 10
BOMRow.Type Property
Parent Object: BOMRow
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOMRow.Type() As ObjectTypeEnum
BOMRow Object Page 12 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
BOMRow Object Page 13 of 13
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA2CB.htm 13/06/2025
BOMRowsEnumerator Object
Description
The BOMRowsEnumerator object provides access to BOMRow objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of items in the collection.
Item Returns an item in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BOMRow.ChildRows, BOMView.BOMRows
Version
Introduced in version 11
BOMRowsEnumerator.Application Property
Parent Object: BOMRowsEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOMRowsEnumerator.Application() As Object
Property Value
This is a read only property whose value is an Object.
BOMRowsEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9DB.htm 13/06/2025
Version
Introduced in version 11
BOMRowsEnumerator.Count Property
Parent Object: BOMRowsEnumerator
Description
Property that specifies the number of items in the collection.
Syntax
BOMRowsEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 11
BOMRowsEnumerator.Item Property
Parent Object: BOMRowsEnumerator
Description
Returns an item in the collection.
Syntax
BOMRowsEnumerator.Item( Index As Long ) As BOMRow
Property Value
This is a read only property whose value is a BOMRow.
Parameters
BOMRowsEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9DB.htm 13/06/2025
Name Type Description
Index Long
Value that specifies the BOMRow to return. This is a numeric value indicating the
index of the item in the collection. If an out of range index is input, an error occurs.
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 11
BOMRowsEnumerator.Type Property
Parent Object: BOMRowsEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOMRowsEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 11
BOMRowsEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC9DB.htm 13/06/2025
BOMView Object
Description
The BOMView object represents a view (or an ordering scheme) of the BOM.
Methods
Name Description
Export Method that saves the BOM as viewed in this BOM view to an external file.
Renumber
Method that renumbers all rows in the BOM view. If the BOMRowsToRenumber
argument is provided, only those rows are renumbered. Applies only to structured and
parts only views. This method returns a failure for the model data BOM view.
Sort
Method that changes the sort order of items in the BOM view. Applies only to
structured and parts only views. This method returns a failure for the model data BOM
view.
Sort2
Method that changes the sort order of items in the BOM view. Applies only to
structured and parts only views. This method returns a failure for the model data BOM
view.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the
context of Apprentice, an ApprenticeServer object is returned.
BOMRows
Property that gets the BOMRows enumerator object containing the top
level BOM rows.
iAssemblyMemberName
Gets and sets the name of the iAssembly member that the BOM view
is based on.
ModelStateMemberName
Gets the name of the model state member that the BOM view is based
on.
Name Property that gets the name of the BOMView.
Parent Property that returns the parent BOM object.
RevisionId
Property that returns the GUID that represents the last saved revision
of this BOMView.
Type Returns an ObjectTypeEnum indicating this object's type.
ViewType
Property that returns the BOM View type. Possible return values are
kModelDataBOMViewType (for the 'raw' view),
kStructuredBOMViewType (for the structured view) and
kPartsOnlyBOMViewType (for the parts-only view).
BOMView Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Accessed From
BOMViews.Item
Samples
Name Description
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 10
BOMView.Application Property
Parent Object: BOMView
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOMView.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 10
BOMView.BOMRows Property
Parent Object: BOMView
BOMView Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Description
Property that gets the BOMRows enumerator object containing the top level BOM rows.
Syntax
BOMView.BOMRows() As BOMRowsEnumerator
Property Value
This is a read only property whose value is a BOMRowsEnumerator.
Version
Introduced in version 10
BOMView.Export Method
Parent Object: BOMView
Description
Method that saves the BOM as viewed in this BOM view to an external file.
Syntax
BOMView.Export( FileName As String, FileFormat As FileFormatEnum, [Options] As
Variant )
Parameters
Name Type Description
FileName String Input string that specifies the file name to export the BOM to.
FileFormat FileFormatEnum Input FileFormatEnum that specifies the file format to save to.
Options Variant
Optional input String that specifies the 'Table Name' for
kMicrosoftAccess and kMicrosoftExcel file formats. This is the
name of the Excel/Access sheet. If not provided, the name of the
file is used as the sheet name. For other formats, this argument is
ignored.
This is an optional argument whose default value is null.
Samples
BOMView Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Name Description
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 2009
BOMView.iAssemblyMemberName Property
Parent Object: BOMView
Description
Gets and sets the name of the iAssembly member that the BOM view is based on.
Syntax
BOMView.iAssemblyMemberName() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
BOMView.ModelStateMemberName
Property
Parent Object: BOMView
Description
Gets the name of the model state member that the BOM view is based on.
Syntax
BOMView.ModelStateMemberName() As String
BOMView Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2022
BOMView.Name Property
Parent Object: BOMView
Description
Property that gets the name of the BOMView.
Syntax
BOMView.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
BOMView.Parent Property
Parent Object: BOMView
Description
Property that returns the parent BOM object.
Syntax
BOMView.Parent() As BOM
BOMView Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Property Value
This is a read only property whose value is a BOM.
Version
Introduced in version 10
BOMView.Renumber Method
Parent Object: BOMView
Description
Method that renumbers all rows in the BOM view. If the BOMRowsToRenumber argument is
provided, only those rows are renumbered. Applies only to structured and parts only views. This
method returns a failure for the model data BOM view.
Syntax
BOMView.Renumber( [StartValue] As Long, [Increment] As Long, [BOMRowsToRenumber]
As Variant )
Parameters
Name Type Description
StartValue Long
Optional input long that specifies the start value for
renumbering. If not specified, this value defaults to 1.
This is an optional argument whose default value is 1.
Increment Long
Optional input long that specifies the increment to use for
renumbering. If not specified, this value defaults to 1.
This is an optional argument whose default value is 1.
BOMRowsToRenumber Variant
Optional input ObjectCollection of BOMRow objects. If not
supplied, all rows in the BOMView are renumbered. If
provided, only the input rows are renumbered.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
BOMView Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
BOMView.RevisionId Property
Parent Object: BOMView
Description
Property that returns the GUID that represents the last saved revision of this BOMView.
Syntax
BOMView.RevisionId() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 10
BOMView.Sort Method
Parent Object: BOMView
Description
Method that changes the sort order of items in the BOM view. Applies only to structured and parts
only views. This method returns a failure for the model data BOM view.
Syntax
BOMView.Sort( PrimaryColumnTitle As String, [PrimaryColumnAscending] As Boolean,
[SecondaryColumnTitle] As String, [SecondaryColumnAscending] As Boolean,
[TertiaryColumnTitle] As String, [TertiaryColumnAscending] As Boolean )
Parameters
Name Type Description
PrimaryColumnTitle String
Input string that specifies the primary column to use for
the sorting. If the name of a non-existing column is
provided, an error occurs.
PrimaryColumnAscending Boolean Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
BOMView Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
SecondaryColumnTitle String
Optional input string that specifies the secondary column
to use for the sorting. If the name of a non-existing column
or the primary column is provided, an error occurs.
This is an optional argument whose default value is """".
SecondaryColumnAscending Boolean
Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
TertiaryColumnTitle String
Optional input string that specifies the tertiary column to
use for the sorting. If the name of a non-existing column,
the primary column or the secondary column is provided,
an error occurs.
This is an optional argument whose default value is """".
TertiaryColumnAscending Boolean
Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
Version
Introduced in version 2011
BOMView.Sort2 Method
Parent Object: BOMView
Description
Method that changes the sort order of items in the BOM view. Applies only to structured and parts
only views. This method returns a failure for the model data BOM view.
Syntax
BOMView.Sort2( PrimaryColumnTitle As String, [PrimaryColumnAscending] As Boolean,
[SecondaryColumnTitle] As String, [SecondaryColumnAscending] As Boolean,
[TertiaryColumnTitle] As String, [TertiaryColumnAscending] As Boolean, [SortByString] As
Boolean )
BOMView Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Parameters
Name Type Description
PrimaryColumnTitle String
Input string that specifies the primary column to use for
the sorting. If the name of a non-existing column is
provided, an error occurs.
PrimaryColumnAscending Boolean
Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
SecondaryColumnTitle String
Optional input string that specifies the secondary column
to use for the sorting. If the name of a non-existing column
or the primary column is provided, an error occurs.
This is an optional argument whose default value is """".
SecondaryColumnAscending Boolean
Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
TertiaryColumnTitle String
Optional input string that specifies the tertiary column to
use for the sorting. If the name of a non-existing column,
the primary column or the secondary column is provided,
an error occurs.
This is an optional argument whose default value is """".
TertiaryColumnAscending Boolean
Optional input Boolean that specifies whether to sort from
the lowest value to the highest or vice versa. If not
specified, a default value of True is used indicating that
the sorting will be from the lowest value to the highest.
This is an optional argument whose default value is True.
SortByString Boolean
Optional input Boolean that specifies whether to sort the
columns by string. This defaults to False to indicate the
columns are sorted numerically.
This is an optional argument whose default value is True.
Version
Introduced in version 2018
BOMView.Type Property
BOMView Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
Parent Object: BOMView
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOMView.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
BOMView.ViewType Property
Parent Object: BOMView
Description
Property that returns the BOM View type. Possible return values are kModelDataBOMViewType
(for the 'raw' view), kStructuredBOMViewType (for the structured view) and
kPartsOnlyBOMViewType (for the parts-only view).
Syntax
BOMView.ViewType() As BOMViewTypeEnum
Property Value
This is a read only property whose value is a BOMViewTypeEnum.
Version
Introduced in version 11
BOMView Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE8DD.htm 13/06/2025
BOMViews Object
Description
The BOMViews collection object provides access to the existing BOMView objects.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified BOMView object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BOM.BOMViews
Version
Introduced in version 10
BOMViews.Application Property
Parent Object: BOMViews
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BOMViews.Application() As Object
Property Value
This is a read only property whose value is an Object.
BOMViews Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh373B.htm 13/06/2025
Version
Introduced in version 10
BOMViews.Count Property
Parent Object: BOMViews
Description
Property that returns the number of items in the collection.
Syntax
BOMViews.Count() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
Using the BOM
APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Version
Introduced in version 10
BOMViews.Item Property
Parent Object: BOMViews
Description
Returns the specified BOMView object from the collection.
Syntax
BOMViews.Item( Index As Variant ) As BOMView
BOMViews Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh373B.htm 13/06/2025
Property Value
This is a read only property whose value is a BOMView.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BOMView to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the name of a BOMView. If an out of range index or a name of a nonexistent
BOMView is provided, an error will occur.
Samples
Name Description
Using the BOM APIs
This sample demonstrates the Bill of Materials API functionality in
assemblies.
Exporting the assembly
BOM
This sample demonstrates exporting the Assembly BOM to an
external file.
Version
Introduced in version 10
BOMViews.Type Property
Parent Object: BOMViews
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BOMViews.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 10
BOMViews Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh373B.htm 13/06/2025
BooleanAssetValue Object
Derived from: AssetValue Object
Description
The BooleanAssetValue object represents an asset value that consists of a Boolean. The Value
property will return and must be set with a Boolean.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
DisplayName
Gets the name of this value as seen in the Material or Appearance Browser. This
can change based on the current Inventor language.
IsReadOnly
Gets the boolean flag that indicates if this asset value is read-only. If True any
attempted edits will fail.
Name
Gets the key name of the value. This name will remain constant for all languages
and is the name used as input to the Item property or the Asset object.
Parent Read-only property that returns the parent Asset object.
Type Read-only property returning kAssetValueObject indicating this object’s type.
Value Gets and sets this asset value.
ValueType
Read-only property that returns the data type that the Value property for this
AssetValue object will return.
Samples
Name Description
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
BooleanAssetValue Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
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
BooleanAssetValue.Application Property
Parent Object: BooleanAssetValue
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BooleanAssetValue.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2014
BooleanAssetValue.DisplayName Property
Parent Object: BooleanAssetValue
Description
BooleanAssetValue Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
Gets the name of this value as seen in the Material or Appearance Browser. This can change based
on the current Inventor language.
Syntax
BooleanAssetValue.DisplayName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2014
BooleanAssetValue.IsReadOnly Property
Parent Object: BooleanAssetValue
Description
Gets the boolean flag that indicates if this asset value is read-only. If True any attempted edits will
fail.
Syntax
BooleanAssetValue.IsReadOnly() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2014
BooleanAssetValue.Name Property
Parent Object: BooleanAssetValue
Description
BooleanAssetValue Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
Gets the key name of the value. This name will remain constant for all languages and is the name
used as input to the Item property or the Asset object.
Syntax
BooleanAssetValue.Name() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2014
BooleanAssetValue.Parent Property
Parent Object: BooleanAssetValue
Description
Read-only property that returns the parent Asset object.
Syntax
BooleanAssetValue.Parent() As Asset
Property Value
This is a read only property whose value is an Asset.
Version
Introduced in version 2014
BooleanAssetValue.Type Property
Parent Object: BooleanAssetValue
Description
Read-only property returning kAssetValueObject indicating this object’s type.
BooleanAssetValue Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
Syntax
BooleanAssetValue.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2014
BooleanAssetValue.Value Property
Parent Object: BooleanAssetValue
Description
Gets and sets this asset value.
Syntax
BooleanAssetValue.Value() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
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
BooleanAssetValue Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
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
BooleanAssetValue.ValueType Property
Parent Object: BooleanAssetValue
Description
Read-only property that returns the data type that the Value property for this AssetValue object
will return.
Syntax
BooleanAssetValue.ValueType() As AssetValueTypeEnum
Property Value
This is a read only property whose value is an AssetValueTypeEnum.
Version
Introduced in version 2014
BooleanAssetValue Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh6FC0.htm 13/06/2025
Border Object
Description
The Border object represents the instance of a border on a sheet.
Methods
Name Description
Delete Method that deletes the title block from the sheet.
GetResultText
Method that returns the text that is currently displayed for a specific text
box. This is useful for text boxes that use input form other sources to define
their content, i.e. properties and prompted text. The string displayed within
this text box is returned.
SetPromptResultText
Method that sets the text that was supplied for a specified border that
contains prompted text. The string displayed within this border is changed.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Definition Property returning the border definition object that this border is an instance of.
Name Gets and sets the name of the border instance.
Parent Property returning the parent sheet object.
RangeBox
Property that returns a Box2D object which contains the lower-left and upper-right
corners of a rectangle that is guaranteed to enclose this object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Sheet.AddBorder, Sheet.Border
Derived Classes
DefaultBorder
Samples
Name Description
Creating a
parts list
Border Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
This sample demonstrates the creation of a parts list. The parts list is placed at the
top right corner of the border if one exists, else it is placed at the top right corner
of the sheet.
Border Insert This sample illustrates inserting a default border.
Border Insert
Default
This sample illustrates inserting a default border using the default values.
Version
Introduced in version 5.3
Border.Application Property
Parent Object: Border
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Border.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
Border.Definition Property
Parent Object: Border
Description
Property returning the border definition object that this border is an instance of.
Border Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
Syntax
Border.Definition() As BorderDefinition
Property Value
This is a read only property whose value is a BorderDefinition.
Version
Introduced in version 5.3
Border.Delete Method
Parent Object: Border
Description
Method that deletes the title block from the sheet.
Syntax
Border.Delete()
Samples
Name Description
Border Create and
Insert
This sample illustrates creating a new border definition object and using it
for a sheet.
Border Insert This sample illustrates inserting a default border.
Border Insert Default This sample illustrates inserting a default border using the default values.
Version
Introduced in version 5.3
Border.GetResultText Method
Parent Object: Border
Description
Border Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
Method that returns the text that is currently displayed for a specific text box. This is useful for
text boxes that use input form other sources to define their content, i.e. properties and prompted
text. The string displayed within this text box is returned.
Syntax
Border.GetResultText( DefinitionText As TextBox ) As String
Parameters
Name Type Description
DefinitionText TextBox
Input object from the referenced TitleBlockDefinition object. This text
box is used as in index to specify which text box in the instance to return
the text for.
Version
Introduced in version 5.3
Border.Name Property
Parent Object: Border
Description
Gets and sets the name of the border instance.
Syntax
Border.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2009
Border.Parent Property
Parent Object: Border
Border Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
Description
Property returning the parent sheet object.
Syntax
Border.Parent() As Sheet
Property Value
This is a read only property whose value is a Sheet.
Version
Introduced in version 5.3
Border.RangeBox Property
Parent Object: Border
Description
Property that returns a Box2D object which contains the lower-left and upper-right corners of a
rectangle that is guaranteed to enclose this object.
Syntax
Border.RangeBox() As Box2d
Property Value
This is a read only property whose value is a Box2d.
Samples
Name Description
Creating hole
tables
This sample demonstrates the creation of hole tables in a drawing.
Creating a
parts list
This sample demonstrates the creation of a parts list. The parts list is placed at the
top right corner of the border if one exists, else it is placed at the top right corner of
the sheet.
Border Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
Version
Introduced in version 11
Border.SetPromptResultText Method
Parent Object: Border
Description
Method that sets the text that was supplied for a specified border that contains prompted text. The
string displayed within this border is changed.
Syntax
Border.SetPromptResultText( DefinitionText As TextBox, NewValue As String )
Parameters
Name Type Description
DefinitionText TextBox
Input TextBox object from the referenced BorderDefinition object. This
text box is used to specify which prompted text box to set the text for.
NewValue String
Input String that defines the new text to use for the specified prompted
text.
Version
Introduced in version 5.3
Border.Type Property
Parent Object: Border
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Border.Type() As ObjectTypeEnum
Border Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
Border Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh69C0.htm 13/06/2025
BorderDefinition Object
Description
The BorderDefinition object represents a border definition.
Methods
Name Description
CopyTo Method that copies the definition to the target drawing document.
Delete
Method that deletes the BorderDefinition object. This method will fail in the
case where the definition is being referenced. This can be determined by using
the IsReferenced property.
Edit
Method that opens a copy of the border definition's sketch for edit in the
Sketch environment.
ExitEdit
Method that closes the currently active sketch (see below for limitations) and
depending on the input parameters, replaces the sketch of the border definition
with the edited sketch.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
IsDefault Gets if the border definition is default or not.
IsReferenced
Property that specifies if the border definition is being referenced or not. A border
definition is referenced whenever it is used on a sheet. A referenced border
definition cannot be deleted.
Name Gets and sets the name of the border definition.
Parent Property returning the parent .
Sketch
Property that returns the sketch associated with the border definition. The
DrawingSketch returned by the Sketch property supports all query functionality but
cannot be edited. To edit the contents of a border definition, use the Edit method.
This creates a copy of the border definition's sketch for edit. The ExitEdit method
of the BorderDefinition can then be used to save the edited sketch as the border
definition's sketch.
Type Returns an ObjectTypeEnum indicating this object's type.
BorderDefinition Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Accessed From
Border.Definition, BorderDefinition.CopyTo, BorderDefinitions.Add, BorderDefinitions.Item,
DefaultBorder.Definition, SheetFormat.ReferencedBorderDefinition
Version
Introduced in version 5.3
BorderDefinition.Application Property
Parent Object: BorderDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BorderDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5.3
BorderDefinition.AttributeSets Property
Parent Object: BorderDefinition
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BorderDefinition.AttributeSets() As AttributeSets
BorderDefinition Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2008
BorderDefinition.CopyTo Method
Parent Object: BorderDefinition
Description
Method that copies the definition to the target drawing document.
Syntax
BorderDefinition.CopyTo( TargetDocument As DrawingDocument, [ReplaceExisting] As
Boolean ) As BorderDefinition
Parameters
Name Type Description
TargetDocument DrawingDocument
Input DrawingDocument object that specifies the document
to copy the definition into.
ReplaceExisting Boolean
Optional input Boolean that specifies whether to replace or
create a new definition with a different name if a definition
of the same name exists in the target document. If not
specified, the argument defaults to False indicating that a
new definition will be created.
This is an optional argument whose default value is False.
Version
Introduced in version 10
BorderDefinition.Delete Method
Parent Object: BorderDefinition
BorderDefinition Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Description
Method that deletes the BorderDefinition object. This method will fail in the case where the
definition is being referenced. This can be determined by using the IsReferenced property.
Syntax
BorderDefinition.Delete()
Version
Introduced in version 5.3
BorderDefinition.Edit Method
Parent Object: BorderDefinition
Description
Method that opens a copy of the border definition's sketch for edit in the Sketch environment.
Syntax
BorderDefinition.Edit( Sketch As DrawingSketch )
Parameters
Name Type Description
Sketch DrawingSketch
Output DrawingSketch object. This is a copy of the DrawingSketch
associated with the border definition. This new DrawingSketch is opened
within the sketch environment.
Remarks
The DrawingSketch returned is a new sketch that Autodesk Inventor creates by copying the sketch
associated with the border definition. The new sketch supports all edit operations. The ExitEdit
method of the BorderDefinition object can be used to replace the border definition's sketch with
the new sketch.
Samples
Name Description
Border Create and
Insert
This sample illustrates creating a new border definition object and using it
for a sheet.
BorderDefinition Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Version
Introduced in version 5.3
BorderDefinition.ExitEdit Method
Parent Object: BorderDefinition
Description
Method that closes the currently active sketch (see below for limitations) and depending on the
input parameters, replaces the sketch of the border definition with the edited sketch.
Syntax
BorderDefinition.ExitEdit( [SaveChanges] As Boolean, [SaveAsName] As Variant )
Parameters
Name Type Description
SaveChanges Boolean
Input Boolean that specifies whether to save the changes or not. True
indicates to save the changes. Setting this property to False will cause the
sketch to close and lose all edits.
This is an optional argument whose default value is True.
SaveAsName Variant
Input String that specifies the name of the new border definition to create.
This argument is used in the case where the SaveChanges argument is
True. If not specified, or an empty string is supplied, the edited sketch
replaces the sketch associated with the border definition being edited. If a
string is supplied, a new border definition is created and the edited sketch
is used for it. The supplied name must be unique with respect to all other
objects in the document.
This is an optional argument whose default value is null.
Remarks
You can also choose to create a new border definition using the edited sketch or close the edited
sketch without saving any changes. This method is only valid to be called when a sketch
associated with a BorderDefinition object has been opened for edit using the Edit method of the
BorderDefinition object, otherwise an error will occur.
BorderDefinition Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Samples
Name Description
Border Create and
Insert
This sample illustrates creating a new border definition object and using it
for a sheet.
Version
Introduced in version 5.3
BorderDefinition.GetReferenceKey Method
Parent Object: BorderDefinition
Description
Method that generates and returns the reference key for this entity.
Syntax
BorderDefinition.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BorderDefinition Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Version
Introduced in version 2008
BorderDefinition.IsDefault Property
Parent Object: BorderDefinition
Description
Gets if the border definition is default or not.
Syntax
BorderDefinition.IsDefault() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
BorderDefinition.IsReferenced Property
Parent Object: BorderDefinition
Description
Property that specifies if the border definition is being referenced or not. A border definition is
referenced whenever it is used on a sheet. A referenced border definition cannot be deleted.
Syntax
BorderDefinition.IsReferenced() As Boolean
Property Value
This is a read only property whose value is a Boolean.
BorderDefinition Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Version
Introduced in version 5.3
BorderDefinition.Name Property
Parent Object: BorderDefinition
Description
Gets and sets the name of the border definition.
Syntax
BorderDefinition.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5.3
BorderDefinition.Parent Property
Parent Object: BorderDefinition
Description
Property returning the parent .
Syntax
BorderDefinition.Parent() As DrawingDocument
Property Value
This is a read only property whose value is a DrawingDocument.
BorderDefinition Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Version
Introduced in version 5.3
BorderDefinition.Sketch Property
Parent Object: BorderDefinition
Description
Property that returns the sketch associated with the border definition. The DrawingSketch returned
by the Sketch property supports all query functionality but cannot be edited. To edit the contents
of a border definition, use the Edit method. This creates a copy of the border definition's sketch for
edit. The ExitEdit method of the BorderDefinition can then be used to save the edited sketch as the
border definition's sketch.
Syntax
BorderDefinition.Sketch() As DrawingSketch
Property Value
This is a read only property whose value is a DrawingSketch.
Version
Introduced in version 5.3
BorderDefinition.Type Property
Parent Object: BorderDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BorderDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BorderDefinition Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
Version
Introduced in version 5.3
BorderDefinition Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8C0D.htm 13/06/2025
BorderDefinitions Object
Description
The BorderDefinitions collection object provides access to all the existing objects in a drawing
document and provides methods to create additional border definitions.
Methods
Name Description
Add
Method that creates a new border definition. The new BorderDefinition object is returned.
This method will fail in the case where a sketch is currently active. You can check for this
case using the ActiveEditObject property of the Application object to see if a sketch is
active.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified BorderDefinition object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DrawingDocument.BorderDefinitions
Samples
Name Description
Border Create and
Insert
This sample illustrates creating a new border definition object and using it
for a sheet.
Version
Introduced in version 5.3
BorderDefinitions.Add Method
Parent Object: BorderDefinitions
BorderDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAC1.htm 13/06/2025
Description
Method that creates a new border definition. The new BorderDefinition object is returned. This
method will fail in the case where a sketch is currently active. You can check for this case using
the ActiveEditObject property of the Application object to see if a sketch is active.
Syntax
BorderDefinitions.Add( Name As String ) As BorderDefinition
Parameters
Name Type Description
Name String
Input String that defines the name of the new border definition. The name specified
must be unique with respect to the other border definitions in the document. If a
unique name is not specified, an error will occur.
Samples
Name Description
Border Create and
Insert
This sample illustrates creating a new border definition object and using it
for a sheet.
Version
Introduced in version 5.3
BorderDefinitions.Application Property
Parent Object: BorderDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BorderDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
BorderDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAC1.htm 13/06/2025
Version
Introduced in version 5.3
BorderDefinitions.Count Property
Parent Object: BorderDefinitions
Description
Property that returns the number of items in the collection.
Syntax
BorderDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 5.3
BorderDefinitions.Item Property
Parent Object: BorderDefinitions
Description
Returns the specified BorderDefinition object from the collection.
Syntax
BorderDefinitions.Item( Index As Variant ) As BorderDefinition
Property Value
This is a read only property whose value is a BorderDefinition.
Parameters
BorderDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAC1.htm 13/06/2025
Name Type Description
Index Variant
Input Variant value that specifies the to return. This can be either a numeric value
indicating the index of the item in the collection or it can be a string indicating the
border definition's name. If an out-of-range index or a name of a non-existent
border definition is specified, an error occurs.
Version
Introduced in version 5.3
BorderDefinitions.Type Property
Parent Object: BorderDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BorderDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5.3
BorderDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAAC1.htm 13/06/2025
BossFeature Object
Derived from: PartFeature Object
Description
The BossFeature object represents a boss feature within the model.
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
BossFeature Object Page 1 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
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
BossFeatureProxy.NativeObject, BossFeatures.Item
Derived Classes
BossFeatureProxy
Version
Introduced in version 2010
BossFeature.Adaptive Property
Parent Object: BossFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BossFeature.Adaptive() As Boolean
BossFeature Object Page 2 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BossFeature.Appearance Property
Parent Object: BossFeature
Description
Gets and sets the current appearance of the feature.
Syntax
BossFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BossFeature.AppearanceSourceType
Property
Parent Object: BossFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
BossFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
BossFeature Object Page 3 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
BossFeature.Application Property
Parent Object: BossFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BossFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BossFeature.AttributeSets Property
Parent Object: BossFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BossFeature.AttributeSets() As AttributeSets
BossFeature Object Page 4 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
BossFeature.ConsumeInputs Property
Parent Object: BossFeature
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BossFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BossFeature.Delete Method
Parent Object: BossFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
BossFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
BossFeature Object Page 5 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
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
BossFeature.ExtendedName Property
Parent Object: BossFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BossFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
BossFeature Object Page 6 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2012
BossFeature.Faces Property
Parent Object: BossFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
BossFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2010
BossFeature.FeatureDimensions Property
Parent Object: BossFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
BossFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
BossFeature Object Page 7 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2010
BossFeature.GetReferenceKey Method
Parent Object: BossFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
BossFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BossFeature.GetSuppressionCondition
Method
Parent Object: BossFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
BossFeature Object Page 8 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Syntax
BossFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BossFeature.HealthStatus Property
Parent Object: BossFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
BossFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
BossFeature Object Page 9 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
BossFeature.IsOwnedByFeature Property
Parent Object: BossFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
BossFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
BossFeature.Name Property
Parent Object: BossFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BossFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
BossFeature Object Page 10 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
BossFeature.OwnedBy Property
Parent Object: BossFeature
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
BossFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
BossFeature.Parameters Property
Parent Object: BossFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
BossFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 2010
BossFeature Object Page 11 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
BossFeature.Parent Property
Parent Object: BossFeature
Description
Property that returns the parent of the feature.
Syntax
BossFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
BossFeature.Participants Property
Parent Object: BossFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
BossFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 2010
BossFeature Object Page 12 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
BossFeature.RangeBox Property
Parent Object: BossFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
BossFeature.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
BossFeature.RemoveParticipant Method
Parent Object: BossFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
BossFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
BossFeature Object Page 13 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2010
BossFeature.SetAffectedBodies Method
Parent Object: BossFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BossFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BossFeature.SetEndOfPart Method
Parent Object: BossFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BossFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
BossFeature Object Page 14 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
BossFeature.SetSuppressionCondition
Method
Parent Object: BossFeature
Description
Method that sets the suppression condition for the feature.
Syntax
BossFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BossFeature Object Page 15 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2010
BossFeature.Shared Property
Parent Object: BossFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BossFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BossFeature.Suppressed Property
Parent Object: BossFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BossFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BossFeature Object Page 16 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2010
BossFeature.SurfaceBodies Property
Parent Object: BossFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BossFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BossFeature.Type Property
Parent Object: BossFeature
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BossFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BossFeature Object Page 17 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
Version
Introduced in version 2010
BossFeature Object Page 18 of 18
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC945.htm 13/06/2025
BossFeatureProxy Object
Derived from: BossFeature Object
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
BossFeatureProxy Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
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
BossFeatureProxy.Adaptive Property
Parent Object: BossFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BossFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BossFeatureProxy Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.Appearance Property
Parent Object: BossFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
BossFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BossFeatureProxy.AppearanceSourceType
Property
Parent Object: BossFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
BossFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
BossFeatureProxy Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2014
BossFeatureProxy.Application Property
Parent Object: BossFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BossFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BossFeatureProxy.AttributeSets Property
Parent Object: BossFeatureProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BossFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
BossFeatureProxy Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.ConsumeInputs Property
Parent Object: BossFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BossFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BossFeatureProxy.ContainingOccurrence
Property
Parent Object: BossFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
BossFeatureProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
BossFeatureProxy Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.Delete Method
Parent Object: BossFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are
also deleted.
Syntax
BossFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
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
BossFeatureProxy Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.ExtendedName Property
Parent Object: BossFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BossFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BossFeatureProxy.Faces Property
Parent Object: BossFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has
been consumed by additional modeling operations it will not be returned.
Syntax
BossFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
BossFeatureProxy Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.FeatureDimensions
Property
Parent Object: BossFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
BossFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2010
BossFeatureProxy.GetReferenceKey Method
Parent Object: BossFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
BossFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
BossFeatureProxy Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
KeyContext Long Input Long that specifies the key context. The key context must be supplied
when working with any B-Rep entities (and SurfaceBody, FaceShell, Face,
Edge, EdgeUse and Vertex objects). A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2010
BossFeatureProxy.GetSuppressionCondition
Method
Parent Object: BossFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
Syntax
BossFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BossFeatureProxy Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.HealthStatus Property
Parent Object: BossFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
BossFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 2010
BossFeatureProxy.IsOwnedByFeature
Property
Parent Object: BossFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
BossFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
BossFeatureProxy Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.Name Property
Parent Object: BossFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BossFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
BossFeatureProxy.NativeObject Property
Parent Object: BossFeatureProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
BossFeatureProxy.NativeObject() As BossFeature
Property Value
This is a read only property whose value is a BossFeature.
BossFeatureProxy Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.OwnedBy Property
Parent Object: BossFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
BossFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2010
BossFeatureProxy.Parameters Property
Parent Object: BossFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
BossFeatureProxy.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
BossFeatureProxy Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.Parent Property
Parent Object: BossFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
BossFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 2010
BossFeatureProxy.Participants Property
Parent Object: BossFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features
in a part.
Syntax
BossFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
BossFeatureProxy Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.RangeBox Property
Parent Object: BossFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
BossFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2010
BossFeatureProxy.RemoveParticipant
Method
Parent Object: BossFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for
features in a part.
Syntax
BossFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
BossFeatureProxy Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to
be removed. An error occurs if the input
ComponentOccurrence is not a participant.
Version
Introduced in version 2010
BossFeatureProxy.SetAffectedBodies Method
Parent Object: BossFeatureProxy
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BossFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BossFeatureProxy.SetEndOfPart Method
Parent Object: BossFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BossFeatureProxy.SetEndOfPart( Before As Boolean )
BossFeatureProxy Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 2010
BossFeatureProxy.SetSuppressionCondition
Method
Parent Object: BossFeatureProxy
Description
Method that sets the suppression condition for the feature.
Syntax
BossFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
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
BossFeatureProxy Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
instance, if the parameter defines length units, the
current length units of the document are used.
Version
Introduced in version 2010
BossFeatureProxy.Shared Property
Parent Object: BossFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BossFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BossFeatureProxy.Suppressed Property
Parent Object: BossFeatureProxy
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BossFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BossFeatureProxy Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy.SurfaceBodies Property
Parent Object: BossFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BossFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BossFeatureProxy.Type Property
Parent Object: BossFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BossFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BossFeatureProxy Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
Version
Introduced in version 2010
BossFeatureProxy Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEE42.htm 13/06/2025
BossFeatures Object
Description
The BossFeatures collection object provides access to existing boss features.
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
PartFeatures.BossFeatures, SheetMetalFeatures.BossFeatures
Version
Introduced in version 2010
BossFeatures.Application Property
Parent Object: BossFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BossFeatures.Application() As Object
BossFeatures Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh184F.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BossFeatures.Count Property
Parent Object: BossFeatures
Description
Property that returns the number of items in this collection.
Syntax
BossFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BossFeatures.Item Property
Parent Object: BossFeatures
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
Syntax
BossFeatures.Item( Index As Variant ) As BossFeature
BossFeatures Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh184F.htm 13/06/2025
Property Value
This is a read only property whose value is a BossFeature.
Parameters
Name Type Description
Index Variant
Specifies the object within the collection to return. This can be either a Long to
indicate the index of the item within the collection, or a String indicating the name
of the feature. This is the name of the feature as seen in the browser.
Version
Introduced in version 2010
BossFeatures.Type Property
Parent Object: BossFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BossFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BossFeatures Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh184F.htm 13/06/2025
BossSet Object
Description
Object containing boss definition of the rib.
Methods
Name Description
Delete Method that deletes the boss set from the collection.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Centers
Read-write property that gets and sets the collection of SketchPoint objects which
specify the boss centers.
Diameter Read-write property that returns the boss diameter value.
Offset Read-write property that returns the value of boss offset from the sketch plane.
Parent Gets the parent object from whom this object can logically be reached.
TaperAngle Read-write property that returns the boss taper angle value.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BossSets.Add, BossSets.Item
Version
Introduced in version 2012
BossSet.Application Property
Parent Object: BossSet
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BossSet Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98BA.htm 13/06/2025
Syntax
BossSet.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2012
BossSet.Centers Property
Parent Object: BossSet
Description
Read-write property that gets and sets the collection of SketchPoint objects which specify the boss
centers.
Syntax
BossSet.Centers() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2012
BossSet.Delete Method
Parent Object: BossSet
Description
Method that deletes the boss set from the collection.
BossSet Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98BA.htm 13/06/2025
Syntax
BossSet.Delete()
Version
Introduced in version 2012
BossSet.Diameter Property
Parent Object: BossSet
Description
Read-write property that returns the boss diameter value.
Syntax
BossSet.Diameter() As Variant
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2012
BossSet.Offset Property
Parent Object: BossSet
Description
Read-write property that returns the value of boss offset from the sketch plane.
Syntax
BossSet.Offset() As Variant
BossSet Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98BA.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2012
BossSet.Parent Property
Parent Object: BossSet
Description
Gets the parent object from whom this object can logically be reached.
Syntax
BossSet.Parent() As RibDefinition
Property Value
This is a read only property whose value is a RibDefinition.
Version
Introduced in version 2012
BossSet.TaperAngle Property
Parent Object: BossSet
Description
Read-write property that returns the boss taper angle value.
Syntax
BossSet.TaperAngle() As Variant
BossSet Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98BA.htm 13/06/2025
Property Value
This is a read/write property whose value is a Variant.
Version
Introduced in version 2012
BossSet.Type Property
Parent Object: BossSet
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BossSet.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
BossSet Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh98BA.htm 13/06/2025
BossSets Object
Description
Collection Object containing boss definitions of the rib.
Methods
Name Description
Add Method that creates a new Boss set. The newly created BossSet object is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Gets the number of items in this collection.
Item
Property that returns an item from the collection. You can provide either the index of
the item in the collection, where the first item is index 1, or you can provide the
name of the object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
RibDefinition.BossSets
Version
Introduced in version 2012
BossSets.Add Method
Parent Object: BossSets
Description
Method that creates a new Boss set. The newly created BossSet object is returned.
BossSets Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB962.htm 13/06/2025
Syntax
BossSets.Add( Centers As ObjectCollection, Type As BossTypeEnum, Diameter As Variant,
Offset As Variant, Taper As Variant ) As BossSet
Parameters
Name Type Description
Centers ObjectCollection
Input ObjectCollection containing SketchPoint objects that define
boss centers.
Type BossTypeEnum
Input BossTypeEnum that defines the boss type. This can either be
kHeadBossType or kThreadBossType.
Diameter Variant
Input Variant that defines the boss diameter. This can be either a
numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current
length units of the document.
Offset Variant
Input Variant that defines the offset value. This can be either a
numeric value or a string. A parameter for this value will be created
and the supplied string or value is assigned to the parameter. If a
value is input, the units are centimeters. If a string is input, the units
can be specified as part of the string or it will default to the current
length units of the document.
Taper Variant
Input Variant that defines the taper angle for the boss. This can be
either a numeric value or a string. A parameter for this value will be
created and the supplied string or value is assigned to the parameter.
If a value is input, the units are radians. If a string is input, the units
can be specified as part of the string or it will default to the current
angle units of the document.
Version
Introduced in version 2012
BossSets.Application Property
Parent Object: BossSets
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
BossSets Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB962.htm 13/06/2025
Syntax
BossSets.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2012
BossSets.Count Property
Parent Object: BossSets
Description
Gets the number of items in this collection.
Syntax
BossSets.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2012
BossSets.Item Property
Parent Object: BossSets
Description
Property that returns an item from the collection. You can provide either the index of the item in
the collection, where the first item is index 1, or you can provide the name of the object.
BossSets Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB962.htm 13/06/2025
Syntax
BossSets.Item( Index As Long ) As BossSet
Property Value
This is a read only property whose value is a BossSet.
Parameters
Name Type Description
Index Long
Input Variant value that specifies the feature to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a String indicating
the feature name. If an out of range index or a name of a non-existent feature is
provided, an error occurs.
Version
Introduced in version 2012
BossSets.Type Property
Parent Object: BossSets
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BossSets.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2012
BossSets Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB962.htm 13/06/2025
BoundaryPatchDefinition Object
Description
The BoundaryPatchDefinition object is used to define the input required for creating boundary patch
features.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BoundaryPatchLoops
Property that specifies the set of boundary loops used to create the boundary
patch feature.
GuideRails Property that gets and sets the guide rail objects for the boundary patch.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BoundaryPatchFeature.Definition, BoundaryPatchFeatureProxy.Definition,
BoundaryPatchFeatures.CreateBoundaryPatchDefinition
Samples
Name Description
Delete Face, Boundary Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch
features.
Version
Introduced in version 2008
BoundaryPatchDefinition.Application Property
Parent Object: BoundaryPatchDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
BoundaryPatchDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD612.htm 13/06/2025
Syntax
BoundaryPatchDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BoundaryPatchDefinition.BoundaryPatchLoops
Property
Parent Object: BoundaryPatchDefinition
Description
Property that specifies the set of boundary loops used to create the boundary patch feature.
Syntax
BoundaryPatchDefinition.BoundaryPatchLoops() As BoundaryPatchLoops
Property Value
This is a read only property whose value is a BoundaryPatchLoops.
Samples
Name Description
Delete Face, Boundary Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch
features.
Version
Introduced in version 2008
BoundaryPatchDefinition.GuideRails Property
Parent Object: BoundaryPatchDefinition
BoundaryPatchDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD612.htm 13/06/2025
Description
Property that gets and sets the guide rail objects for the boundary patch.
Syntax
BoundaryPatchDefinition.GuideRails() As ObjectCollection
Property Value
This is a read/write property whose value is an ObjectCollection.
Version
Introduced in version 2017
BoundaryPatchDefinition.Type Property
Parent Object: BoundaryPatchDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BoundaryPatchDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
BoundaryPatchDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD612.htm 13/06/2025
BoundaryPatchFeature Object
Derived from: PartFeature Object
Description
This is the Part BoundaryPatchFeature object. A BoundaryPatchFeature is produced by the creation of a
planar surface within the specified boundary.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which
dependent objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns
False if no condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature. This
method fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
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
Definition
Property that returns the BoundaryPatchDefinition object which defines the
various input used to create the boundary patch feature.
ExtendedName
Read-only property that returns the full feature name including any extended
information.
Faces
Property that returns a collection that provides access to all of the faces of the
feature. The Faces collection object will return the faces that still currently exist
in the part. For example, if a face has been consumed by additional modeling
operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
BoundaryPatchFeature Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Property that returns whether this object is owned by a feature. If True, the
OwnedBy property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
OwnedBy
Property that returns the owning PartFeature object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
Participants
Property that returns the list of participants for an assembly feature. This list is
empty for features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a
rectangular box that is guaranteed to enclose this object.
Shared
Gets and sets whether the part feature is shared or not, applies only to surface
features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BoundaryPatchFeatureProxy.NativeObject, BoundaryPatchFeatures.Add, BoundaryPatchFeatures.Item
Derived Classes
BoundaryPatchFeatureProxy
Version
Introduced in version 9
BoundaryPatchFeature.Adaptive Property
Parent Object: BoundaryPatchFeature
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BoundaryPatchFeature.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BoundaryPatchFeature Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Version
Introduced in version 9
BoundaryPatchFeature.Appearance Property
Parent Object: BoundaryPatchFeature
Description
Gets and sets the current appearance of the feature.
Syntax
BoundaryPatchFeature.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
BoundaryPatchFeature.AppearanceSourceType
Property
Parent Object: BoundaryPatchFeature
Description
Gets and sets the source of the appearance for the feature.
Syntax
BoundaryPatchFeature.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
BoundaryPatchFeature Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
BoundaryPatchFeature.Application Property
Parent Object: BoundaryPatchFeature
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object
is returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BoundaryPatchFeature.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BoundaryPatchFeature.AttributeSets Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BoundaryPatchFeature.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
BoundaryPatchFeature.ConsumeInputs Property
Parent Object: BoundaryPatchFeature
BoundaryPatchFeature Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BoundaryPatchFeature.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BoundaryPatchFeature.Definition Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the BoundaryPatchDefinition object which defines the various input used to create
the boundary patch feature.
Syntax
BoundaryPatchFeature.Definition() As BoundaryPatchDefinition
Property Value
This is a read only property whose value is a BoundaryPatchDefinition.
Version
Introduced in version 2008
BoundaryPatchFeature.Delete Method
Parent Object: BoundaryPatchFeature
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also
deleted.
BoundaryPatchFeature Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Syntax
BoundaryPatchFeature.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches
within the feature should be deleted. If the feature being
deleted is not a sketch based feature this argument is
ignored.
This is an optional argument whose default value is
False.
RetainDependentFeaturesAndSketches Boolean
Optional input Boolean that specifies if dependent
features should be deleted. If there are no dependent
features this argument is ignored.
This is an optional argument whose default value is
False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work
features should be deleted. If there are no dependent
work features this argument is ignored.
This is an optional argument whose default value is
False.
Version
Introduced in version 9
BoundaryPatchFeature.ExtendedName Property
Parent Object: BoundaryPatchFeature
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BoundaryPatchFeature.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
BoundaryPatchFeature Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Version
Introduced in version 2012
BoundaryPatchFeature.Faces Property
Parent Object: BoundaryPatchFeature
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces
collection object will return the faces that still currently exist in the part. For example, if a face has been
consumed by additional modeling operations it will not be returned.
Syntax
BoundaryPatchFeature.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 9
BoundaryPatchFeature.FeatureDimensions
Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the FeatureDimensions collection object.
Syntax
BoundaryPatchFeature.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
BoundaryPatchFeature Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Version
Introduced in version 2008
BoundaryPatchFeature.GetReferenceKey
Method
Parent Object: BoundaryPatchFeature
Description
Method that generates and returns the reference key for this entity.
Syntax
BoundaryPatchFeature.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
Introduced in version 9
BoundaryPatchFeature.GetSuppressionCondition
Method
Parent Object: BoundaryPatchFeature
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has
been applied.
BoundaryPatchFeature Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Syntax
BoundaryPatchFeature.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to
be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison.
Valid return types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison, kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string or a parameter
object.
Version
Introduced in version 11
BoundaryPatchFeature.HealthStatus Property
Parent Object: BoundaryPatchFeature
Description
Property that returns an enum indicating the current state of the object.
Syntax
BoundaryPatchFeature.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 9
BoundaryPatchFeature Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
BoundaryPatchFeature.IsOwnedByFeature
Property
Parent Object: BoundaryPatchFeature
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the
owning feature.
Syntax
BoundaryPatchFeature.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
BoundaryPatchFeature.Name Property
Parent Object: BoundaryPatchFeature
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BoundaryPatchFeature.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
BoundaryPatchFeature.OwnedBy Property
Parent Object: BoundaryPatchFeature
BoundaryPatchFeature Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Description
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Syntax
BoundaryPatchFeature.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
BoundaryPatchFeature.Parameters Property
Parent Object: BoundaryPatchFeature
Description
Property that returns all the parameters associated with the feature.
Syntax
BoundaryPatchFeature.Parameters() As ParametersEnumerator
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
BoundaryPatchFeature.Parent Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the parent of the feature.
BoundaryPatchFeature Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Syntax
BoundaryPatchFeature.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
BoundaryPatchFeature.Participants Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a
part.
Syntax
BoundaryPatchFeature.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
BoundaryPatchFeature.RangeBox Property
Parent Object: BoundaryPatchFeature
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is
guaranteed to enclose this object.
Syntax
BoundaryPatchFeature.RangeBox() As Box
BoundaryPatchFeature Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
BoundaryPatchFeature.RemoveParticipant
Method
Parent Object: BoundaryPatchFeature
Description
Method that removes the specified participant from the assembly feature. This method fails for features in
a part.
Syntax
BoundaryPatchFeature.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be
removed. An error occurs if the input ComponentOccurrence is not a
participant.
Version
Introduced in version 10
BoundaryPatchFeature.SetAffectedBodies
Method
Parent Object: BoundaryPatchFeature
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
BoundaryPatchFeature Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Syntax
BoundaryPatchFeature.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BoundaryPatchFeature.SetEndOfPart Method
Parent Object: BoundaryPatchFeature
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BoundaryPatchFeature.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or
after this work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 9
BoundaryPatchFeature.SetSuppressionCondition
Method
Parent Object: BoundaryPatchFeature
Description
Method that sets the suppression condition for the feature.
BoundaryPatchFeature Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Syntax
BoundaryPatchFeature.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to
be checked for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison.
Valid types are kEqualToComparison,
kNotEqualToComparison, kLessThanComparison,
kGreaterThanComparison, kLessThanOrEqualToComparison,
kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the
parameter value. This can either be a string, a value or a
parameter object. If a value is input, the database units for the
units defined by the parameter are used. For instance, if the
parameter defines length units, the value is assumed to be in
centimeters. If a string is input, the units can be specified as
part of the string or it will default to the current units of the
document. For instance, if the parameter defines length units,
the current length units of the document are used.
Version
Introduced in version 11
BoundaryPatchFeature.Shared Property
Parent Object: BoundaryPatchFeature
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BoundaryPatchFeature.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BoundaryPatchFeature Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
BoundaryPatchFeature.Suppressed Property
Parent Object: BoundaryPatchFeature
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BoundaryPatchFeature.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
BoundaryPatchFeature.SurfaceBodies Property
Parent Object: BoundaryPatchFeature
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BoundaryPatchFeature.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BoundaryPatchFeature.Type Property
Parent Object: BoundaryPatchFeature
BoundaryPatchFeature Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BoundaryPatchFeature.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BoundaryPatchFeature Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhF86E.htm 13/06/2025
BoundaryPatchFeatureProxy Object
Derived from: BoundaryPatchFeature Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the feature. The arguments allow control over which dependent
objects are also deleted.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSuppressionCondition
Method that gets the suppression condition for the feature. The method returns False if no
condition has been applied.
RemoveParticipant
Method that removes the specified participant from the assembly feature. This method
fails for features in a part.
SetAffectedBodies Method that sets a collection of SurfaceBody objects affected by this feature.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this method is called
from.
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
ContainingOccurrence
Property that returns the ComponentOccurrence that the native object is being referenced
through. The returned occurrence is the containing occurrence.
Definition
Property that returns the BoundaryPatchDefinition object which defines the various input
used to create the boundary patch feature.
ExtendedName Read-only property that returns the full feature name including any extended information.
Faces
Property that returns a collection that provides access to all of the faces of the feature. The
Faces collection object will return the faces that still currently exist in the part. For example,
if a face has been consumed by additional modeling operations it will not be returned.
FeatureDimensions Property that returns the FeatureDimensions collection object.
HealthStatus Property that returns an enum indicating the current state of the object.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If True, the OwnedBy
property returns the owning feature.
Name Gets/Sets the name of this Part Feature within the scope of this Document.
NativeObject Gets the object in the context of the definition instead of the containing assembly.
OwnedBy
Property that returns the owning PartFeature object. This property returns Nothing if the
IsOwnedByFeature property returns False.
Parameters Property that returns all the parameters associated with the feature.
Parent Property that returns the parent of the feature.
BoundaryPatchFeatureProxy Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Participants
Property that returns the list of participants for an assembly feature. This list is empty for
features in a part.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box
that is guaranteed to enclose this object.
Shared Gets and sets whether the part feature is shared or not, applies only to surface features.
Suppressed Gets and sets whether this feature is suppressed or not.
SurfaceBodies Property that returns the bodies that this feature has created or modified.
Type Returns an ObjectTypeEnum indicating this object's type.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.Adaptive Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets and sets whether this feature is adaptive or not.
Syntax
BoundaryPatchFeatureProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.Appearance Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets and sets the current appearance of the feature.
Syntax
BoundaryPatchFeatureProxy.Appearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
BoundaryPatchFeatureProxy Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Version
Introduced in version 2014
BoundaryPatchFeatureProxy.AppearanceSourceType
Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets and sets the source of the appearance for the feature.
Syntax
BoundaryPatchFeatureProxy.AppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
Version
Introduced in version 2014
BoundaryPatchFeatureProxy.Application Property
Parent Object: BoundaryPatchFeatureProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BoundaryPatchFeatureProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.AttributeSets Property
Parent Object: BoundaryPatchFeatureProxy
BoundaryPatchFeatureProxy Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BoundaryPatchFeatureProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.ConsumeInputs
Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
BoundaryPatchFeatureProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BoundaryPatchFeatureProxy.ContainingOccurrence
Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through. The returned
occurrence is the containing occurrence.
Syntax
BoundaryPatchFeatureProxy.ContainingOccurrence() As ComponentOccurrence
BoundaryPatchFeatureProxy Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.Definition Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the BoundaryPatchDefinition object which defines the various input used to create the boundary
patch feature.
Syntax
BoundaryPatchFeatureProxy.Definition() As BoundaryPatchDefinition
Property Value
This is a read only property whose value is a BoundaryPatchDefinition.
Version
Introduced in version 2008
BoundaryPatchFeatureProxy.Delete Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that deletes the feature. The arguments allow control over which dependent objects are also deleted.
Syntax
BoundaryPatchFeatureProxy.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean
Optional input Boolean indicating if consumed sketches within the
feature should be deleted. If the feature being deleted is not a sketch
based feature this argument is ignored.
This is an optional argument whose default value is False.
RetainDependentFeaturesAndSketches Boolean Optional input Boolean that specifies if dependent features should
be deleted. If there are no dependent features this argument is
BoundaryPatchFeatureProxy Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
ignored.
This is an optional argument whose default value is False.
RetainDependentWorkFeatures Boolean
Optional input Boolean that specifies if dependent work features
should be deleted. If there are no dependent work features this
argument is ignored.
This is an optional argument whose default value is False.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.ExtendedName Property
Parent Object: BoundaryPatchFeatureProxy
Description
Read-only property that returns the full feature name including any extended information.
Syntax
BoundaryPatchFeatureProxy.ExtendedName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2012
BoundaryPatchFeatureProxy.Faces Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns a collection that provides access to all of the faces of the feature. The Faces collection object
will return the faces that still currently exist in the part. For example, if a face has been consumed by additional
modeling operations it will not be returned.
Syntax
BoundaryPatchFeatureProxy.Faces() As Faces
Property Value
This is a read only property whose value is a Faces.
BoundaryPatchFeatureProxy Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Version
Introduced in version 9
BoundaryPatchFeatureProxy.FeatureDimensions
Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the FeatureDimensions collection object.
Syntax
BoundaryPatchFeatureProxy.FeatureDimensions() As FeatureDimensions
Property Value
This is a read only property whose value is a FeatureDimensions.
Version
Introduced in version 2008
BoundaryPatchFeatureProxy.GetReferenceKey
Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
BoundaryPatchFeatureProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with
any B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A
key context is created using the CreateKeyContext method of the ReferenceKeyManager object.
For all other object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
BoundaryPatchFeatureProxy Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Version
Introduced in version 9
BoundaryPatchFeatureProxy.GetSuppressionCondition
Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that gets the suppression condition for the feature. The method returns False if no condition has been applied.
Syntax
BoundaryPatchFeatureProxy.GetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant ) As Boolean
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be checked
for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid return
types are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value.
This can either be a string or a parameter object.
Version
Introduced in version 11
BoundaryPatchFeatureProxy.HealthStatus Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
BoundaryPatchFeatureProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
BoundaryPatchFeatureProxy Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Version
Introduced in version 9
BoundaryPatchFeatureProxy.IsOwnedByFeature
Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property returns the owning
feature.
Syntax
BoundaryPatchFeatureProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
BoundaryPatchFeatureProxy.Name Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets/Sets the name of this Part Feature within the scope of this Document.
Syntax
BoundaryPatchFeatureProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.NativeObject Property
Parent Object: BoundaryPatchFeatureProxy
BoundaryPatchFeatureProxy Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
BoundaryPatchFeatureProxy.NativeObject() As BoundaryPatchFeature
Property Value
This is a read only property whose value is a BoundaryPatchFeature.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.OwnedBy Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the owning PartFeature object. This property returns Nothing if the IsOwnedByFeature property
returns False.
Syntax
BoundaryPatchFeatureProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
BoundaryPatchFeatureProxy.Parameters Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns all the parameters associated with the feature.
Syntax
BoundaryPatchFeatureProxy.Parameters() As ParametersEnumerator
BoundaryPatchFeatureProxy Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Property Value
This is a read only property whose value is a ParametersEnumerator.
Version
Introduced in version 11
BoundaryPatchFeatureProxy.Parent Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the parent of the feature.
Syntax
BoundaryPatchFeatureProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.Participants Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the list of participants for an assembly feature. This list is empty for features in a part.
Syntax
BoundaryPatchFeatureProxy.Participants() As ComponentOccurrencesEnumerator
Property Value
This is a read only property whose value is a ComponentOccurrencesEnumerator.
Version
Introduced in version 10
BoundaryPatchFeatureProxy Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
BoundaryPatchFeatureProxy.RangeBox Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to
enclose this object.
Syntax
BoundaryPatchFeatureProxy.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.RemoveParticipant
Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that removes the specified participant from the assembly feature. This method fails for features in a part.
Syntax
BoundaryPatchFeatureProxy.RemoveParticipant( Occurrence As ComponentOccurrence )
Parameters
Name Type Description
Occurrence ComponentOccurrence
ComponentOccurrence object that specifies the participant to be removed. An
error occurs if the input ComponentOccurrence is not a participant.
Version
Introduced in version 10
BoundaryPatchFeatureProxy.SetAffectedBodies
Method
Parent Object: BoundaryPatchFeatureProxy
BoundaryPatchFeatureProxy Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Description
Method that sets a collection of SurfaceBody objects affected by this feature.
Syntax
BoundaryPatchFeatureProxy.SetAffectedBodies( Bodies As ObjectCollection )
Parameters
Name Type Description
Bodies ObjectCollection ObjectCollection of SurfaceBody objects.
Version
Introduced in version 2010
BoundaryPatchFeatureProxy.SetEndOfPart Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
Syntax
BoundaryPatchFeatureProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately before or after this
work feature. A value of True indicates before and False indicates after.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.SetSuppressionCondition
Method
Parent Object: BoundaryPatchFeatureProxy
Description
Method that sets the suppression condition for the feature.
BoundaryPatchFeatureProxy Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Syntax
BoundaryPatchFeatureProxy.SetSuppressionCondition( Parameter As Parameter, ComparisonType As
ComparisonTypeEnum, Expression As Variant )
Parameters
Name Type Description
Parameter Parameter
Parameter object that specifies the parameter whose value is to be checked
for feature suppression.
ComparisonType ComparisonTypeEnum
ComparisonTypeEnum that specifies the type of comparison. Valid types
are kEqualToComparison, kNotEqualToComparison,
kLessThanComparison, kGreaterThanComparison,
kLessThanOrEqualToComparison, kGreaterThanOrEqualToComparison.
Expression Variant
Specifies the expression used for the comparison with the parameter value.
This can either be a string, a value or a parameter object. If a value is
input, the database units for the units defined by the parameter are used.
For instance, if the parameter defines length units, the value is assumed to
be in centimeters. If a string is input, the units can be specified as part of
the string or it will default to the current units of the document. For
instance, if the parameter defines length units, the current length units of
the document are used.
Version
Introduced in version 11
BoundaryPatchFeatureProxy.Shared Property
Parent Object: BoundaryPatchFeatureProxy
Description
Gets and sets whether the part feature is shared or not, applies only to surface features.
Syntax
BoundaryPatchFeatureProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
BoundaryPatchFeatureProxy.Suppressed Property
Parent Object: BoundaryPatchFeatureProxy
BoundaryPatchFeatureProxy Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Description
Gets and sets whether this feature is suppressed or not.
Syntax
BoundaryPatchFeatureProxy.Suppressed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 9
BoundaryPatchFeatureProxy.SurfaceBodies Property
Parent Object: BoundaryPatchFeatureProxy
Description
Property that returns the bodies that this feature has created or modified.
Syntax
BoundaryPatchFeatureProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 2010
BoundaryPatchFeatureProxy.Type Property
Parent Object: BoundaryPatchFeatureProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BoundaryPatchFeatureProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BoundaryPatchFeatureProxy Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
Version
Introduced in version 9
BoundaryPatchFeatureProxy Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh2357.htm 13/06/2025
BoundaryPatchFeatures Object
Description
The BoundaryPatchFeatures collection object provides access to all of the objects in a part component definition and
provides methods to create additional BoundaryPatchFeatures.
Methods
Name Description
Add Method that creates a new boundary patch feature.
CreateBoundaryPatchDefinition
Method that creates a BoundaryPatchDefinition object that defines the input definition
for a boundary patch feature.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified object in the collection. The index can be numeric or the object name.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartFeatures.BoundaryPatchFeatures, SheetMetalFeatures.BoundaryPatchFeatures
Version
Introduced in version 9
BoundaryPatchFeatures.Add Method
Parent Object: BoundaryPatchFeatures
Description
Method that creates a new boundary patch feature.
Syntax
BoundaryPatchFeatures.Add( Definition As BoundaryPatchDefinition ) As BoundaryPatchFeature
Parameters
Name Type Description
Definition BoundaryPatchDefinition
Input BoundaryPatchDefinition object that defines the input definition for the
boundary patch feature. The BoundaryPatchDefinition object can be created using
the CreateBoundaryPatchDefinition method of the BoundaryPatchFeatures object.
The BoundaryPatchDefinition object defines the boundary loops for creating the
boundary patch feature.
BoundaryPatchFeatures Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh593C.htm 13/06/2025
Version
Introduced in version 2008
BoundaryPatchFeatures.Application Property
Parent Object: BoundaryPatchFeatures
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BoundaryPatchFeatures.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 9
BoundaryPatchFeatures.Count Property
Parent Object: BoundaryPatchFeatures
Description
Property that returns the number of items in this collection.
Syntax
BoundaryPatchFeatures.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 9
BoundaryPatchFeatures.CreateBoundaryPatchDefinition
Method
Parent Object: BoundaryPatchFeatures
BoundaryPatchFeatures Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh593C.htm 13/06/2025
Description
Method that creates a BoundaryPatchDefinition object that defines the input definition for a boundary patch feature.
Syntax
BoundaryPatchFeatures.CreateBoundaryPatchDefinition() As BoundaryPatchDefinition
Samples
Name Description
Delete Face, Boundary Patch and Stitch features Demonstrates creating Face, Boundary Patch and Stitch features.
Version
Introduced in version 2008
BoundaryPatchFeatures.Item Property
Parent Object: BoundaryPatchFeatures
Description
Returns the specified object in the collection. The index can be numeric or the object name.
Syntax
BoundaryPatchFeatures.Item( Index As Variant ) As BoundaryPatchFeature
Property Value
This is a read only property whose value is a BoundaryPatchFeature.
Parameters
Name Type Description
Index Variant Input Variant that specifies the index within the collection of the item to return.
Version
Introduced in version 9
BoundaryPatchFeatures.Type Property
Parent Object: BoundaryPatchFeatures
Description
Returns an ObjectTypeEnum indicating this object's type.
BoundaryPatchFeatures Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh593C.htm 13/06/2025
Syntax
BoundaryPatchFeatures.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 9
BoundaryPatchFeatures Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh593C.htm 13/06/2025
BoundaryPatchLoop Object
Description
The BoundaryPatchLoop object is used to define a boundary loop for a boundary patch feature.
Methods
Name Description
Delete Method that deletes this boundary patch loop.
GetBoundaryCondition
Method that gets the boundary condition for the specified boundary path
loop entity.
GetBoundaryTangentWeight
Method that gets the tangent weight for the specified boundary path loop
entity.
SetBoundaryCondition
Method that sets the boundary condition for the specified boundary path
loop entity.
SetBoundaryTangentWeight
Method that sets the tangetn weight for the specified boundary path loop
entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
BoundaryPath Property that gets and sets the boundary path for a boundary patch loop.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BoundaryPatchLoops.Add, BoundaryPatchLoops.Item
Version
Introduced in version 2008
BoundaryPatchLoop.Application Property
Parent Object: BoundaryPatchLoop
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
BoundaryPatchLoop Object Page 1 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
Syntax
BoundaryPatchLoop.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BoundaryPatchLoop.BoundaryPath Property
Parent Object: BoundaryPatchLoop
Description
Property that gets and sets the boundary path for a boundary patch loop.
Syntax
BoundaryPatchLoop.BoundaryPath() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2008
BoundaryPatchLoop.Delete Method
Parent Object: BoundaryPatchLoop
Description
Method that deletes this boundary patch loop.
Syntax
BoundaryPatchLoop.Delete()
BoundaryPatchLoop Object Page 2 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
Version
Introduced in version 2008
BoundaryPatchLoop.GetBoundaryCondition
Method
Parent Object: BoundaryPatchLoop
Description
Method that gets the boundary condition for the specified boundary path loop entity.
Syntax
BoundaryPatchLoop.GetBoundaryCondition( BoundaryPathEntity As Object ) As
BoundaryPatchConditionEnum
Parameters
Name Type Description
BoundaryPathEntity Object
Input object that specifies the boundary path loop entity for which the
boundary condition needs to be returned. If a boundary condition is not
applicable to the boundary path entity, then this method will fail. The valid
objects for the boundary path entity depend on the type of the boundary path
object, i.e. the object returned by the BoundaryPath property. The following
list shows the valid BoundaryPathEntity objects for the corresponding
BoundaryPath object: * If BoundaryPath object is Profile3D, then the
BoundaryPathEntity object can be one of the sketch 3D entities that constitute
the Profile3D. * If BoundaryPath object is Path, then the BoundaryPathEntity
object can be one of the sketch 2D or 3D entities that constitute the Path. * If
BoundaryPath object is EdgeLoop, then the BoundaryPathEntity object can be
one of the edges that constitute the EdgeLoop. * If BoundaryPath object is
EdgeCollection, then the BoundaryPathEntity object can be one of the edges
that belong to the EdgeCollection. * If BoundaryPath object is an
ObjectCollection that contains SketchEntity, SketchEntity3D or Edge objects,
then the BoundaryPathEntity object can be one of the entities that belong to
the ObjectCollection.
Notes
If the boundary path object, i.e. the object returned by the BoundaryPath property is a Profile then the
boundary condition does not apply. If the Profile object or one of the sketch 2D entities that constitute the
profile is specified for the BoundaryPathEntity argument then, this method will fail.
Remarks
The method returns a constant that indicates the boundary condition that has been applied. The constant is
one of the values in BoundaryPatchConditionEnum: kFreeBoundaryPatchCondition or
kTangentBoundaryPatchCondition.
BoundaryPatchLoop Object Page 3 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
Version
Introduced in version 2008
BoundaryPatchLoop.GetBoundaryTangentWeight
Method
Parent Object: BoundaryPatchLoop
Description
Method that gets the tangent weight for the specified boundary path loop entity.
Syntax
BoundaryPatchLoop.GetBoundaryTangentWeight( BoundaryPathEntity As Object ) As Variant
Parameters
Name Type Description
BoundaryPathEntity Object
Version
Introduced in version 2014
BoundaryPatchLoop.SetBoundaryCondition
Method
Parent Object: BoundaryPatchLoop
Description
Method that sets the boundary condition for the specified boundary path loop entity.
Syntax
BoundaryPatchLoop.SetBoundaryCondition( BoundaryPathEntity As Object, BoundaryPathCondition
As BoundaryPatchConditionEnum )
Parameters
Name Type Description
BoundaryPathEntity Object
BoundaryPatchLoop Object Page 4 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
Input object that specifies the boundary path loop
entity to which the boundary condition needs to
be applied. If a boundary condition is not
applicable to the boundary path entity, then this
method will fail. The valid objects for the
boundary path entity depend on the type of the
boundary path object, i.e. the object returned by
the BoundaryPath property. The following table
lists the valid BoundaryPathEntity objects for the
corresponding BoundaryPath object:
If BoundaryPath object is: Then, the
BoundaryPathEntity object can be:
Profile3D One of the sketch 3D entities that
constitute the Profile3D
Path One of the sketch 2D or 3D entities that
constitute the Path
EdgeLoop One of the edges that constitute the
EdgeLoop
EdgeCollection One of the edges that belong to
the EdgeCollection
ObjectCollection that contains SketchEntity,
SketchEntity3D or Edge objects One of the
entities that belong to the ObjectCollectionNote:
If the boundary path object, i.e. the object
returned by the BoundaryPath property is a
Profile then the boundary condition does not
apply. If the Profile object or one of the sketch
2D entities that constitute the profile is specified
for the BoundaryPathEntity argument then, this
method will fail.
BoundaryPathCondition BoundaryPatchConditionEnum
Input constant that specifies the type of boundary
condition to apply. Valid input is one of the
values in BoundaryPatchConditionEnum:
kFreeBoundaryPatchCondition or
kTangentBoundaryPatchCondition. If the
specified condition cannot be applied to the
boundary path entity, then this method will fail.
Notes
If the boundary path object, i.e. the object returned by the BoundaryPath property is a Profile then the
boundary condition does not apply. If the Profile object or one of the sketch 2D entities that constitute the
profile is specified for the BoundaryPathEntity argument then, this method will fail. If the specified
condition cannot be applied to the boundary path entity, then this method will fail.
Version
Introduced in version 2008
BoundaryPatchLoop Object Page 5 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
BoundaryPatchLoop.SetBoundaryTangentWeight
Method
Parent Object: BoundaryPatchLoop
Description
Method that sets the tangetn weight for the specified boundary path loop entity.
Syntax
BoundaryPatchLoop.SetBoundaryTangentWeight( BoundaryPathEntity As Object,
BoundaryPathTangentWeight As Variant )
Parameters
Name Type Description
BoundaryPathEntity Object
BoundaryPathTangentWeight Variant
Version
Introduced in version 2014
BoundaryPatchLoop.Type Property
Parent Object: BoundaryPatchLoop
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BoundaryPatchLoop.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
BoundaryPatchLoop Object Page 6 of 6
file:///C:/Users/Cliente/AppData/Local/Temp/~hh7F61.htm 13/06/2025
BoundaryPatchLoops Object
Description
The BoundaryPatchLoops object is used to define the boundary loops for a boundary patch
feature.
Methods
Name Description
Add Method that creates a new BoundaryPatchLoop object using the specified boundary path.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that specifies the number of BoundaryPatchLoop objects in the collection.
Item Method that returns the specified BoundaryPatchLoop object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BoundaryPatchDefinition.BoundaryPatchLoops
Version
Introduced in version 2008
BoundaryPatchLoops.Add Method
Parent Object: BoundaryPatchLoops
Description
Method that creates a new BoundaryPatchLoop object using the specified boundary path.
Syntax
BoundaryPatchLoops.Add( BoundaryPath As Object ) As BoundaryPatchLoop
BoundaryPatchLoops Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA095.htm 13/06/2025
Parameters
Name Type Description
BoundaryPath Object
Input Object that defines the boundary path for a boundary patch loop.
Valid objects for the boundary path can be one of the following types:
One of the following objects: Path, Profile, Profile3D, EdgeLoop or
EdgeCollection If a Path, Profile or Profile3D object is specified, then it
must represent a set of connected sketch entities that form a closed loop,
otherwise the creation of the boundary loop will fail. If an EdgeCollection
object is specified, then it must contain a set of tangentially connected
edges that form a closed loop, otherwise the creation of the boundary loop
will fail.
An ObjectCollection that can contain any combination of SketchEntity,
SketchEntity3D and Edge objects These objects can be used to specify a
set of connected entities that form a closed boundary loop. Also, the order
of the objects in the collection must be such that the entities that represent
them are end-to-end connected. If the entities do not form a closed loop or
if their order in the collection does not represent a set of end-to-end
connected entities, then the creation of the boundary loop will fail.
Remarks
You can then use functionality provided by the resulting BoundaryPatchLoop object to access the
entities that constitute the boundary loop and define the boundary conditions, if applicable, for
these boundary entities.
Samples
Name Description
Delete Face, Boundary Patch and Stitch
features
Demonstrates creating Face, Boundary Patch and Stitch
features.
Version
Introduced in version 2008
BoundaryPatchLoops.Application Property
Parent Object: BoundaryPatchLoops
Description
BoundaryPatchLoops Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA095.htm 13/06/2025
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BoundaryPatchLoops.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
BoundaryPatchLoops.Count Property
Parent Object: BoundaryPatchLoops
Description
Property that specifies the number of BoundaryPatchLoop objects in the collection.
Syntax
BoundaryPatchLoops.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2008
BoundaryPatchLoops.Item Property
Parent Object: BoundaryPatchLoops
Description
Method that returns the specified BoundaryPatchLoop object from the collection.
BoundaryPatchLoops Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA095.htm 13/06/2025
Syntax
BoundaryPatchLoops.Item( Index As Long ) As BoundaryPatchLoop
Property Value
This is a read only property whose value is a BoundaryPatchLoop.
Parameters
Name Type Description
Index Long Input Long value that specifies the BoundaryPatchLoop to return.
Version
Introduced in version 2008
BoundaryPatchLoops.Type Property
Parent Object: BoundaryPatchLoops
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BoundaryPatchLoops.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
BoundaryPatchLoops Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA095.htm 13/06/2025
Box Object
Description
The Box object is a mathematical utility object that represents a rectangular box whose faces are
always parallel to the model XYZ planes. A common use of the Box object is as a means of
passing the range box information of an entity and interacting with that range box.
Methods
Name Description
Contains Determines whether the specified point is contained within this Box.
Copy
Creates a copy of this Box object. The result is entirely independent and can be
edited without affecting the original Box object.
Expand Expands the Box on all sides by the specified distance.
Extend Extends the Box to include the specified point.
GetBoxData Get the data defining this Box.
IsDisjoint
Determines whether this Box intersects the specified Box. A return value of True
indicates that the box do not intersect.
PutBoxData Method that sets the data defining this Box.
Properties
Name Description
MaxPoint Property that gets and sets the maximum corner of the box.
MinPoint Property that gets and sets the minimum corner of the box.
Accessed From
AliasFreeformFeature.RangeBox, AliasFreeformFeatureProxy.RangeBox,
AssemblyComponentDefinition.PreciseRangeBox, AssemblyComponentDefinition.RangeBox,
BendFeature.RangeBox, BendFeatureProxy.RangeBox, BendPartFeature.RangeBox,
BendPartFeatureProxy.RangeBox, BossFeature.RangeBox, BossFeatureProxy.RangeBox,
BoundaryPatchFeature.RangeBox, BoundaryPatchFeatureProxy.RangeBox, Box.Copy,
ChamferFeature.RangeBox, ChamferFeatureProxy.RangeBox, CircularPatternFeature.RangeBox,
CircularPatternFeatureProxy.RangeBox, ClientFeature.RangeBox, ClientFeatureProxy.RangeBox,
ClientGraphics.RangeBox, CoilFeature.RangeBox, CoilFeatureProxy.RangeBox,
CombineFeature.RangeBox, CombineFeatureProxy.RangeBox,
ComponentDefinition.PreciseRangeBox, ComponentDefinition.RangeBox,
ComponentGraphics.RangeBox, ComponentOccurrence.PreciseRangeBox,
ComponentOccurrence.RangeBox, ComponentOccurrenceProxy.PreciseRangeBox,
ComponentOccurrenceProxy.RangeBox, ContourFlangeFeature.RangeBox,
ContourFlangeFeatureProxy.RangeBox, ContourRollFeature.RangeBox,
ContourRollFeatureProxy.RangeBox, CoreCavityFeature.RangeBox,
CoreCavityFeatureProxy.RangeBox, CornerChamferFeature.RangeBox,
Box Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
CornerChamferFeatureProxy.RangeBox, CornerFeature.RangeBox,
CornerFeatureProxy.RangeBox, CornerRoundFeature.RangeBox,
CornerRoundFeatureProxy.RangeBox, CosmeticBendFeature.RangeBox,
CosmeticBendFeatureProxy.RangeBox, CurveEvaluator.RangeBox, CurveGraphics.RangeBox,
CutFeature.RangeBox, CutFeatureProxy.RangeBox, DecalFeature.RangeBox,
DecalFeatureProxy.RangeBox, DeleteFaceFeature.RangeBox,
DeleteFaceFeatureProxy.RangeBox, DirectEditFeature.RangeBox,
DirectEditFeatureProxy.RangeBox, EdgeLoop.RangeBox, EdgeLoopProxy.RangeBox,
EmbossFeature.RangeBox, EmbossFeatureProxy.RangeBox, ExtendFeature.RangeBox,
ExtendFeatureProxy.RangeBox, ExtrudeFeature.RangeBox, ExtrudeFeatureProxy.RangeBox,
FaceDraftFeature.RangeBox, FaceDraftFeatureProxy.RangeBox, FaceFeature.RangeBox,
FaceFeatureProxy.RangeBox, FaceOffsetFeature.RangeBox, FaceOffsetFeatureProxy.RangeBox,
FaceShell.RangeBox, FaceShellProxy.RangeBox, FeatureGraphics.RangeBox,
FilletFeature.RangeBox, FilletFeatureProxy.RangeBox, FinishFeature.RangeBox,
FinishFeatureProxy.RangeBox, FlangeFeature.RangeBox, FlangeFeatureProxy.RangeBox,
FlatPattern.PreciseRangeBox, FlatPattern.RangeBox, FoldFeature.RangeBox,
FoldFeatureProxy.RangeBox, FreeformFeature.RangeBox, FreeformFeatureProxy.RangeBox,
GraphicsNode.RangeBox, GraphicsNodeProxy.RangeBox, GraphicsPrimitive.RangeBox,
GrillFeature.RangeBox, GrillFeatureProxy.RangeBox, HelicalCurve.RangeBox,
HelicalCurveProxy.RangeBox, HemFeature.RangeBox, HemFeatureProxy.RangeBox,
HoleFeature.RangeBox, HoleFeatureProxy.RangeBox, iFeature.RangeBox,
iFeatureProxy.RangeBox, ImportedDWGComponent.RangeBox,
ImportedDWGComponentProxy.RangeBox, KnitFeature.RangeBox,
KnitFeatureProxy.RangeBox, LineGraphics.RangeBox, LineStripGraphics.RangeBox,
LipFeature.RangeBox, LipFeatureProxy.RangeBox, LoftedFlangeFeature.RangeBox,
LoftedFlangeFeatureProxy.RangeBox, LoftFeature.RangeBox, LoftFeatureProxy.RangeBox,
MarkFeature.RangeBox, MarkFeatureProxy.RangeBox, MeshFeature.RangeBox,
MeshFeatureProxy.RangeBox, MeshFeatureSet.RangeBox, MeshFeatureSetProxy.RangeBox,
MidSurfaceFeature.RangeBox, MidSurfaceFeatureProxy.RangeBox, MirrorFeature.RangeBox,
MirrorFeatureProxy.RangeBox, MoveFaceFeature.RangeBox, MoveFaceFeatureProxy.RangeBox,
MoveFeature.RangeBox, MoveFeatureProxy.RangeBox, NonParametricBaseFeature.RangeBox,
NonParametricBaseFeatureProxy.RangeBox, OnFaceCurve.RangeBox,
OnFaceCurveProxy.RangeBox, PartComponentDefinition.PreciseRangeBox,
PartComponentDefinition.RangeBox, PartFeature.RangeBox, PointCloud.RangeBox,
PointCloud.RangeBoxInPointCloudSpace, PointCloudProxy.RangeBox,
PointCloudProxy.RangeBoxInPointCloudSpace, PointGraphics.RangeBox,
PresentationBody.RangeBox, PublicationBody.RangeBox, PublicationComponent.RangeBox,
PunchToolFeature.RangeBox, PunchToolFeatureProxy.RangeBox,
RectangularPatternFeature.RangeBox, RectangularPatternFeatureProxy.RangeBox,
ReferenceFeature.RangeBox, ReferenceFeatureProxy.RangeBox, RefoldFeature.RangeBox,
RefoldFeatureProxy.RangeBox, ReplaceFaceFeature.RangeBox,
ReplaceFaceFeatureProxy.RangeBox, RestFeature.RangeBox, RestFeatureProxy.RangeBox,
RevolveFeature.RangeBox, RevolveFeatureProxy.RangeBox, RibFeature.RangeBox,
RibFeatureProxy.RangeBox, RipFeature.RangeBox, RipFeatureProxy.RangeBox,
RuledSurfaceFeature.RangeBox, RuledSurfaceFeatureProxy.RangeBox,
RuleFilletFeature.RangeBox, RuleFilletFeatureProxy.RangeBox, SculptFeature.RangeBox,
SculptFeatureProxy.RangeBox, SheetMetalComponentDefinition.PreciseRangeBox,
SheetMetalComponentDefinition.RangeBox, ShellFeature.RangeBox,
ShellFeatureProxy.RangeBox, SketchArc3D.RangeBox, SketchArc3DProxy.RangeBox,
SketchCircle3D.RangeBox, SketchCircle3DProxy.RangeBox,
SketchControlPointSpline3D.RangeBox, SketchControlPointSpline3DProxy.RangeBox,
SketchDrivenPatternFeature.RangeBox, SketchDrivenPatternFeatureProxy.RangeBox,
SketchEllipse3D.RangeBox, SketchEllipse3DProxy.RangeBox,
Box Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
SketchEllipticalArc3D.RangeBox, SketchEllipticalArc3DProxy.RangeBox,
SketchEntity3D.RangeBox, SketchEquationCurve3D.RangeBox,
SketchEquationCurve3DProxy.RangeBox, SketchFixedSpline3D.RangeBox,
SketchFixedSpline3DProxy.RangeBox, SketchLine3D.RangeBox,
SketchLine3DProxy.RangeBox, SketchPoint3D.RangeBox, SketchPoint3DProxy.RangeBox,
SketchSpline3D.RangeBox, SketchSpline3DProxy.RangeBox, SketchSplineHandle3D.RangeBox,
SketchSplineHandle3DProxy.RangeBox, SnapFitFeature.RangeBox,
SnapFitFeatureProxy.RangeBox, SplitFeature.RangeBox, SplitFeatureProxy.RangeBox,
SurfaceBody.PreciseRangeBox, SurfaceBody.RangeBox, SurfaceBodyProxy.PreciseRangeBox,
SurfaceBodyProxy.RangeBox, SurfaceEvaluator.RangeBox, SurfaceGraphics.RangeBox,
SweepFeature.RangeBox, SweepFeatureProxy.RangeBox, SweepGraphics.RangeBox,
TextGraphics.RangeBox, ThickenFeature.RangeBox, ThickenFeatureProxy.RangeBox,
ThreadFeature.RangeBox, ThreadFeatureProxy.RangeBox, TransientGeometry.CreateBox,
TriangleFanGraphics.RangeBox, TriangleGraphics.RangeBox, TriangleStripGraphics.RangeBox,
TrimFeature.RangeBox, TrimFeatureProxy.RangeBox, UnfoldFeature.RangeBox,
UnfoldFeatureProxy.RangeBox, UnwrapFeature.RangeBox, UnwrapFeatureProxy.RangeBox,
VirtualComponentDefinition.PreciseRangeBox, VirtualComponentDefinition.RangeBox,
WeldmentComponentDefinition.PreciseRangeBox, WeldmentComponentDefinition.RangeBox,
WeldsComponentDefinition.PreciseRangeBox, WeldsComponentDefinition.RangeBox
Samples
Name Description
Client Graphics - Draw
Range Box
This sample demonstrates the use of client graphics to draw the
range box of selected entities.
Text Using Client Graphics
(Multiple fonts and lines)
This sample demonstrates creating text using client graphics. It
illustrates the more complex case of changes in font and more than
one line.
Sheet Metal Feature Display
This sample illustrates getting basic information from the various
sheet metal features.
Sketch Display Entities
This sample demonstrates the query functionality available for
sketch entities.
Create primitive BRep This sample demonstrates the creation of primitive (solid) BRep.
Version
Introduced in version 4
Box.Contains Method
Parent Object: Box
Description
Determines whether the specified point is contained within this Box.
Box Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Syntax
Box.Contains( Point As Point ) As Boolean
Parameters
Name Type Description
Point Point Input Point object that specifies the coordinate to check.
Version
Introduced in version 4
Box.Copy Method
Parent Object: Box
Description
Creates a copy of this Box object. The result is entirely independent and can be edited without
affecting the original Box object.
Syntax
Box.Copy() As Box
Version
Introduced in version 2013
Box.Expand Method
Parent Object: Box
Description
Expands the Box on all sides by the specified distance.
Syntax
Box.Expand( Distance As Double )
Box Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Parameters
Name Type Description
Distance Double Input Double that defines the distance by which to expand the box.
Samples
Name Description
Create primitive BRep This sample demonstrates the creation of primitive (solid) BRep.
Version
Introduced in version 4
Box.Extend Method
Parent Object: Box
Description
Extends the Box to include the specified point.
Syntax
Box.Extend( Point As Point )
Parameters
Name Type Description
Point Point Input Point object that specifies the coordinate to include in the box.
Version
Introduced in version 4
Box.GetBoxData Method
Parent Object: Box
Description
Box Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Get the data defining this Box.
Syntax
Box.GetBoxData( MinPoint() As Double, MaxPoint() As Double )
Parameters
Name Type Description
MinPoint Double Input Double array that sets the smallest coordinate values for the box.
MaxPoint Double Input Double array that sets the largest coordinate values for the box.
Samples
Name Description
Client Graphics - Draw
Range Box
This sample demonstrates the use of client graphics to draw the range
box of selected entities.
Version
Introduced in version 4
Box.IsDisjoint Method
Parent Object: Box
Description
Determines whether this Box intersects the specified Box. A return value of True indicates that the
box do not intersect.
Syntax
Box.IsDisjoint( Box As Box ) As Boolean
Parameters
Name Type Description
Box Box Input Box object to compare.
Box Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Version
Introduced in version 4
Box.MaxPoint Property
Parent Object: Box
Description
Property that gets and sets the maximum corner of the box.
Syntax
Box.MaxPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Samples
Name Description
Client Graphics
- Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth
blend of color from blue to red.
Text Using
Client Graphics
(Multiple fonts
and lines)
This sample demonstrates creating text using client graphics. It illustrates the
more complex case of changes in font and more than one line.
Sheet Metal
Feature Display
This sample illustrates getting basic information from the various sheet metal
features.
Sketch Display
Entities
This sample demonstrates the query functionality available for sketch entities.
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
Box Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Version
Introduced in version 4
Box.MinPoint Property
Parent Object: Box
Description
Property that gets and sets the minimum corner of the box.
Syntax
Box.MinPoint() As Point
Property Value
This is a read/write property whose value is a Point.
Samples
Name Description
Client Graphics
- Vertex Color
by Z Height
This sample demonstrates using client graphics and some other functions that
help to support display control. It uses the currently active part and replaces the
part display with a display where the part's color varies from blue to red where
blue is assigned to the lowest Z portion of the part and red is assigned to the
highest Z portion of the part. Areas in between are represented by a smooth
blend of color from blue to red.
Text Using
Client Graphics
(Multiple fonts
and lines)
This sample demonstrates creating text using client graphics. It illustrates the
more complex case of changes in font and more than one line.
Sheet Metal
Feature Display
This sample illustrates getting basic information from the various sheet metal
features.
Sketch Display
Entities
This sample demonstrates the query functionality available for sketch entities.
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
Box Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Version
Introduced in version 4
Box.PutBoxData Method
Parent Object: Box
Description
Method that sets the data defining this Box.
Syntax
Box.PutBoxData( MinPoint() As Double, MaxPoint() As Double )
Parameters
Name Type Description
MinPoint Double Input Double array that sets the smallest coordinate values for the box.
MaxPoint Double Input Double array that sets the largest coordinate values for the box.
Version
Introduced in version 4
Box Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBC6A.htm 13/06/2025
Box2d Object
Description
The Box2d object is a mathematical utility object that represents a rectangle whose edges are
always parallel to the x-y axes. A common use of the Box2d object is as a means of passing the
range box information of a 2d entity and interacting with that range box.
Methods
Name Description
Contains Determines whether the specified point is contained within this Box.
Copy
Creates a copy of this Box2d object. The result is entirely independent and can be
edited without affecting the original Box2d object.
Expand Expands the Box on all sides by the specified distance.
Extend Extends the Box to include the specified point.
GetBoxData Get the data defining this Box.
IsDisjoint
Determines whether this Box intersects the specified Box. A return value of True
indicates that the box do not intersect.
PutBoxData Method that sets the data defining this Box.
Properties
Name Description
MaxPoint Property that gets and sets the maximum corner of the box.
MinPoint Property that gets and sets the minimum corner of the box.
Accessed From
BendNote.RangeBox, Border.RangeBox, Box2d.Copy, ChamferNote.RangeBox,
Curve2dEvaluator.RangeBox, CustomTable.RangeBox, DefaultBorder.RangeBox,
DimensionText.RangeBox, DrawingNote.RangeBox, DrawingViewHatchArea.RangeBox,
DrawingViewHatchRegion.RangeBox, DrawingViewLabel.RangeBox, GeneralNote.RangeBox,
HoleTable.RangeBox, HoleTag.RangeBox, ImportedDWGComponent.Crop,
ImportedDWGComponentProxy.Crop, LeaderNote.RangeBox, PartsList.RangeBox,
PunchNote.RangeBox, RevisionCloud.RangeBox, RevisionTable.RangeBox,
SketchArc.RangeBox, SketchArcProxy.RangeBox, SketchCircle.RangeBox,
SketchCircleProxy.RangeBox, SketchControlPointSpline.RangeBox,
SketchControlPointSplineProxy.RangeBox, SketchEllipse.RangeBox,
SketchEllipseProxy.RangeBox, SketchEllipticalArc.RangeBox,
SketchEllipticalArcProxy.RangeBox, SketchEntity.RangeBox, SketchEquationCurve.RangeBox,
SketchEquationCurveProxy.RangeBox, SketchFixedSpline.RangeBox,
SketchFixedSplineProxy.RangeBox, SketchLine.RangeBox, SketchLineProxy.RangeBox,
SketchOffsetSpline.RangeBox, SketchOffsetSplineProxy.RangeBox, SketchPoint.RangeBox,
SketchPointProxy.RangeBox, SketchSpline.RangeBox, SketchSplineHandle.RangeBox,
Box2d Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
SketchSplineHandleProxy.RangeBox, SketchSplineProxy.RangeBox,
SurfaceEvaluator.ParamRangeRect, TextBox.RangeBox, TextBoxProxy.RangeBox,
TitleBlock.RangeBox, TransientGeometry.CreateBox2d
Samples
Name Description
3D Curve from
Parametric
Curve
Demonstrates the conversion of a 2d parameteric space curve into the
equivalent 3d model space curve. To use this sample you must have a part
open. You can select any face and 3D curves will be drawn on the face using
client graphics.
Version
Introduced in version 4
Box2d.Contains Method
Parent Object: Box2d
Description
Determines whether the specified point is contained within this Box.
Syntax
Box2d.Contains( Point As Point2d ) As Boolean
Parameters
Name Type Description
Point Point2d Input Point2d object that specifies the coordinate to check.
Version
Introduced in version 2008
Box2d.Copy Method
Parent Object: Box2d
Box2d Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
Description
Creates a copy of this Box2d object. The result is entirely independent and can be edited without
affecting the original Box2d object.
Syntax
Box2d.Copy() As Box2d
Version
Introduced in version 2013
Box2d.Expand Method
Parent Object: Box2d
Description
Expands the Box on all sides by the specified distance.
Syntax
Box2d.Expand( Distance As Double )
Parameters
Name Type Description
Distance Double Input Double that defines the distance by which to expand the box.
Version
Introduced in version 2008
Box2d.Extend Method
Parent Object: Box2d
Description
Extends the Box to include the specified point.
Box2d Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
Syntax
Box2d.Extend( Point As Point2d )
Parameters
Name Type Description
Point Point2d Input Point2d object that specifies the coordinate to include in the box.
Version
Introduced in version 2008
Box2d.GetBoxData Method
Parent Object: Box2d
Description
Get the data defining this Box.
Syntax
Box2d.GetBoxData( MinPoint() As Double, MaxPoint() As Double )
Parameters
Name Type Description
MinPoint Double Input Double array that sets the smallest coordinate values for the box.
MaxPoint Double Input Double array that sets the largest coordinate values for the box.
Version
Introduced in version 4
Box2d.IsDisjoint Method
Parent Object: Box2d
Description
Box2d Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
Determines whether this Box intersects the specified Box. A return value of True indicates that the
box do not intersect.
Syntax
Box2d.IsDisjoint( Box As Box2d ) As Boolean
Parameters
Name Type Description
Box Box2d Input Box2d object to compare.
Version
Introduced in version 2008
Box2d.MaxPoint Property
Parent Object: Box2d
Description
Property that gets and sets the maximum corner of the box.
Syntax
Box2d.MaxPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Samples
Name Description
3D Curve from
Parametric
Curve
Demonstrates the conversion of a 2d parameteric space curve into the
equivalent 3d model space curve. To use this sample you must have a part
open. You can select any face and 3D curves will be drawn on the face using
client graphics.
Creating a parts
list
This sample demonstrates the creation of a parts list. The parts list is placed at
the top right corner of the border if one exists, else it is placed at the top right
corner of the sheet.
Box2d Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
Version
Introduced in version 4
Box2d.MinPoint Property
Parent Object: Box2d
Description
Property that gets and sets the minimum corner of the box.
Syntax
Box2d.MinPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Samples
Name Description
3D Curve from
Parametric
Curve
Demonstrates the conversion of a 2d parameteric space curve into the
equivalent 3d model space curve. To use this sample you must have a part
open. You can select any face and 3D curves will be drawn on the face using
client graphics.
Version
Introduced in version 4
Box2d.PutBoxData Method
Parent Object: Box2d
Description
Method that sets the data defining this Box.
Box2d Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
Syntax
Box2d.PutBoxData( MinPoint() As Double, MaxPoint() As Double )
Parameters
Name Type Description
MinPoint Double Input Double array that sets the smallest coordinate values for the box.
MaxPoint Double Input Double array that sets the largest coordinate values for the box.
Version
Introduced in version 4
Box2d Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAA1.htm 13/06/2025
BreakOperation Object
Description
A BreakOperation object represents a break applied to a drawing view. Editing or deleting this
BreakOperation object will modify all affected views.
Methods
Name Description
Delete
Method that deletes the break operation from the drawing view. The break is
deleted from all other affected drawing views as well.
GetReferenceKey Method that generates and returns the reference key for this entity.
Properties
Name Description
AllAffectedViews
Property that returns all the DrawingView objects affected by this break
operation. Multiple drawing views can be affected by a break operation
if children views inherit breaks or if the break is propagated up to the
parent view.
Application
Returns the top-level parent application object. When used the context
of Inventor, an Application object is returned. When used in the context
of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated with
this object.
BreakStyle Read-write property that gets and sets the break style.
DisplayLevel Read-write property that gets and sets the appearance of the break lines.
EndPoint
Read-write property that gets and sets the end point of the break in sheet
space.
Gap
Read-write property that gets and sets the gap (in centimeters) between
the break lines.
IsSourceBreakOperation
Property that returns whether this break operation is the source for
inherited break operations. The property returns True if there are no
related break operations. If the property returns False, use the
SourceBreakOperation property to find the source break.
Layer Gets and sets the layer associated with this object.
MidPoint
Read-write property that gets and sets the midpoint of the break in sheet
space.
NumberOfSymbols
Read-write property that gets and sets the number of break symbols to
use for a structural style break.
Orientation
Property that returns whether the orientation of the break is horizontal
or vertical. Possible return values are kHorizontalBreakOrientation and
kVerticalBreakOrientation.
Parent
BreakOperation Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Property that returns the parent drawing view from which this
BreakOperation was retrieved.
SourceBreakOperation
Property that returns the source BreakOperation object. For instance, if
a projected view inherits the break from the parent base view, this
property on the BreakOperation retrieved from the projected view will
return the corresponding BreakOperation from the base view. If this
BreakOperation itself is the source, the property returns nothing.
StartPoint
Read-write property that gets and sets the start point of the break in
sheet space.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BreakOperation.SourceBreakOperation, BreakOperations.Add, BreakOperations.Item
Samples
Name Description
Creation of a break operation in a drawing view Demonstrates the creation of a break operation.
Version
Introduced in version 2010
BreakOperation.AllAffectedViews Property
Parent Object: BreakOperation
Description
Property that returns all the DrawingView objects affected by this break operation. Multiple
drawing views can be affected by a break operation if children views inherit breaks or if the break
is propagated up to the parent view.
Syntax
BreakOperation.AllAffectedViews() As ObjectsEnumerator
Property Value
This is a read only property whose value is an ObjectsEnumerator.
BreakOperation Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Version
Introduced in version 2010
BreakOperation.Application Property
Parent Object: BreakOperation
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BreakOperation.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BreakOperation.AttributeSets Property
Parent Object: BreakOperation
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BreakOperation.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
BreakOperation Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Version
Introduced in version 2010
BreakOperation.BreakStyle Property
Parent Object: BreakOperation
Description
Read-write property that gets and sets the break style.
Syntax
BreakOperation.BreakStyle() As BreakStyleEnum
Property Value
This is a read/write property whose value is a BreakStyleEnum.
Version
Introduced in version 2010
BreakOperation.Delete Method
Parent Object: BreakOperation
Description
Method that deletes the break operation from the drawing view. The break is deleted from all
other affected drawing views as well.
Syntax
BreakOperation.Delete()
Version
Introduced in version 2010
BreakOperation Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
BreakOperation.DisplayLevel Property
Parent Object: BreakOperation
Description
Read-write property that gets and sets the appearance of the break lines.
Syntax
BreakOperation.DisplayLevel() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
BreakOperation.EndPoint Property
Parent Object: BreakOperation
Description
Read-write property that gets and sets the end point of the break in sheet space.
Syntax
BreakOperation.EndPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2010
BreakOperation.Gap Property
BreakOperation Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Parent Object: BreakOperation
Description
Read-write property that gets and sets the gap (in centimeters) between the break lines.
Syntax
BreakOperation.Gap() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2010
BreakOperation.GetReferenceKey Method
Parent Object: BreakOperation
Description
Method that generates and returns the reference key for this entity.
Syntax
BreakOperation.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
BreakOperation Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To
obtain the entity at a later time using the reference key you use the BindKeyToObject method of
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 2010
BreakOperation.IsSourceBreakOperation
Property
Parent Object: BreakOperation
Description
Property that returns whether this break operation is the source for inherited break operations. The
property returns True if there are no related break operations. If the property returns False, use the
SourceBreakOperation property to find the source break.
Syntax
BreakOperation.IsSourceBreakOperation() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
BreakOperation.Layer Property
Parent Object: BreakOperation
Description
Gets and sets the layer associated with this object.
BreakOperation Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Syntax
BreakOperation.Layer() As Layer
Property Value
This is a read/write property whose value is a Layer.
Version
Introduced in version 2010
BreakOperation.MidPoint Property
Parent Object: BreakOperation
Description
Read-write property that gets and sets the midpoint of the break in sheet space.
Syntax
BreakOperation.MidPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2010
BreakOperation.NumberOfSymbols Property
Parent Object: BreakOperation
Description
Read-write property that gets and sets the number of break symbols to use for a structural style
break.
BreakOperation Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Syntax
BreakOperation.NumberOfSymbols() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2010
BreakOperation.Orientation Property
Parent Object: BreakOperation
Description
Property that returns whether the orientation of the break is horizontal or vertical. Possible return
values are kHorizontalBreakOrientation and kVerticalBreakOrientation.
Syntax
BreakOperation.Orientation() As BreakOrientationEnum
Property Value
This is a read only property whose value is a BreakOrientationEnum.
Version
Introduced in version 2010
BreakOperation.Parent Property
Parent Object: BreakOperation
Description
Property that returns the parent drawing view from which this BreakOperation was retrieved.
BreakOperation Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Syntax
BreakOperation.Parent() As DrawingView
Property Value
This is a read only property whose value is a DrawingView.
Version
Introduced in version 2010
BreakOperation.SourceBreakOperation
Property
Parent Object: BreakOperation
Description
Property that returns the source BreakOperation object. For instance, if a projected view inherits
the break from the parent base view, this property on the BreakOperation retrieved from the
projected view will return the corresponding BreakOperation from the base view. If this
BreakOperation itself is the source, the property returns nothing.
Syntax
BreakOperation.SourceBreakOperation() As BreakOperation
Property Value
This is a read only property whose value is a BreakOperation.
Version
Introduced in version 2010
BreakOperation.StartPoint Property
Parent Object: BreakOperation
Description
BreakOperation Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
Read-write property that gets and sets the start point of the break in sheet space.
Syntax
BreakOperation.StartPoint() As Point2d
Property Value
This is a read/write property whose value is a Point2d.
Version
Introduced in version 2010
BreakOperation.Type Property
Parent Object: BreakOperation
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BreakOperation.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BreakOperation Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFE17.htm 13/06/2025
BreakOperations Object
Description
The BreakOperations collection object contains information about all the break operations applied
to a drawing view as well as methods to add breaks to the view.
Methods
Name Description
Add
Method that adds a break to a drawing view. The newly created BreakOperation object is
returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Method that returns the specified break operation object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DetailDrawingView.BreakOperations, DrawingView.BreakOperations,
SectionDrawingView.BreakOperations
Samples
Name Description
Creation of a break operation in a drawing view Demonstrates the creation of a break operation.
Version
Introduced in version 2010
BreakOperations.Add Method
Parent Object: BreakOperations
BreakOperations Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A78.htm 13/06/2025
Description
Method that adds a break to a drawing view. The newly created BreakOperation object is returned.
Syntax
BreakOperations.Add( Orientation As BreakOrientationEnum, StartPoint As Point2d, EndPoint
As Point2d, [BreakStyle] As BreakStyleEnum, [DisplayLevel] As Long, [Gap] As Double,
[NumberOfSymbols] As Long, [PropagateToParentView] As Boolean ) As BreakOperation
Parameters
Name Type Description
Orientation BreakOrientationEnum
Input BreakOrientationEnum that specifies
whether the orientation of the break is horizontal
or vertical. Valid values are
kHorizontalBreakOrientation and
kVerticalBreakOrientation.
StartPoint Point2d
Input Point2d object that specifies the start point
of the break in sheet space. For a horizontal
break orientation, only the 'x' component of the
point is used and the 'y' component is ignored.
For a vertical break, only the 'y' component of
the point is used and the 'x' component is
ignored.
EndPoint Point2d
Input Point2d object that specifies the end point
of the break in sheet space. For a horizontal
break orientation, only the 'x' component of the
point is used and the 'y' component is ignored.
For a vertical break, only the 'y' component of
the point is used and the 'x' component is
ignored.
BreakStyle BreakStyleEnum
Optional input BreakStyleEnum that specifies
the break style. Valid values are
kRectangularBreakStyle and
kStructuralBreakStyle. If not specified, a
rectangular style break is created.
This is an optional argument whose default
value is 84481.
DisplayLevel Long Optional input Long that specifies the
appearance of the break lines. Valid range of
values is 1 through10. For rectangular break
style, this value controls the quantity or pitch of
break edges displayed. For structural break
style, this value controls amplitude of break line.
If not specified, a value of 5 is used.
This is an optional argument whose default
value is 5.
BreakOperations Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A78.htm 13/06/2025
Gap Double
Optional input Double that specifies the gap (in
centimeters) between the break lines. If not
specified, a gap value is automatically
calculated based on the view size.
This is an optional argument whose default
value is 0.0.
NumberOfSymbols Long
Optional input Long that specifies the number of
break symbols to use for a structural style break.
Valid values are 1, 2 and 3. This argument is not
applicable and is ignored for rectangular style
breaks. If not specified, a value of 1 is assumed.
This is an optional argument whose default
value is 1.
PropagateToParentView Boolean
Optional input Boolean that specifies whether to
apply this break to the parent view as well. This
is not applicable in all situations and is ignored
if not applicable. The default value is False.
This is an optional argument whose default
value is False.
Samples
Name Description
Creation of a break operation in a drawing view Demonstrates the creation of a break operation.
Version
Introduced in version 2010
BreakOperations.Application Property
Parent Object: BreakOperations
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BreakOperations.Application() As Object
BreakOperations Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A78.htm 13/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BreakOperations.Count Property
Parent Object: BreakOperations
Description
Property that returns the number of items in the collection.
Syntax
BreakOperations.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BreakOperations.Item Property
Parent Object: BreakOperations
Description
Method that returns the specified break operation object from the collection.
Syntax
BreakOperations.Item( Index As Long ) As BreakOperation
BreakOperations Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A78.htm 13/06/2025
Property Value
This is a read only property whose value is a BreakOperation.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 2010
BreakOperations.Type Property
Parent Object: BreakOperations
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BreakOperations.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BreakOperations Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1A78.htm 13/06/2025
BreakOutOperation Object
Description
A BreakOutOperation object represents a break out applied to a drawing view. Editing or deleting this BreakOutOperation object will
modify all affected views.
Methods
Name Description
Delete
Method that deletes the break out operation from the drawing view. The break out is deleted from all other
affected drawing views as well.
GetDepth Method that returns the information controlling the depth of the break out.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetDepth Method that sets the depth of the break out.
Properties
Name Description
AllAffectedViews
Property that returns all the DrawingView objects affected by this break out operation.
Multiple drawing views can be affected by a break out operation if children views inherit
break outs.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
DepthType
Property returns how the depth of the break out is defined. To change to another type use
the DepthSource property.
DisplayComponentsWithinTheSectionCut
Read-write property that gets and sets whether or not to display the components within the
section cut.
Parent
Property that returns the parent drawing view from which this BreakOutOperation was
retrieved.
Profile Read-write property that gets and sets the sketch profile used for the break out.
SectionAllParts Read-write property that gets and sets whether to section all parts in the break out area.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BreakOutOperations.Add, BreakOutOperations.Item
Version
Introduced in version 2010
BreakOutOperation.AllAffectedViews Property
Parent Object: BreakOutOperation
Description
Property that returns all the DrawingView objects affected by this break out operation. Multiple drawing views can be affected by a
break out operation if children views inherit break outs.
Syntax
BreakOutOperation.AllAffectedViews() As ObjectsEnumerator
BreakOutOperation Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Property Value
This is a read only property whose value is an ObjectsEnumerator.
Version
Introduced in version 2010
BreakOutOperation.Application Property
Parent Object: BreakOutOperation
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BreakOutOperation.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BreakOutOperation.AttributeSets Property
Parent Object: BreakOutOperation
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
BreakOutOperation.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 2010
BreakOutOperation.Delete Method
Parent Object: BreakOutOperation
Description
Method that deletes the break out operation from the drawing view. The break out is deleted from all other affected drawing views as
well.
BreakOutOperation Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Syntax
BreakOutOperation.Delete()
Version
Introduced in version 2010
BreakOutOperation.DepthType Property
Parent Object: BreakOutOperation
Description
Property returns how the depth of the break out is defined. To change to another type use the DepthSource property.
Syntax
BreakOutOperation.DepthType() As BreakOutDepthTypeEnum
Property Value
This is a read only property whose value is a BreakOutDepthTypeEnum.
Version
Introduced in version 2010
BreakOutOperation.DisplayComponentsWithinTheSectionCut
Property
Parent Object: BreakOutOperation
Description
Read-write property that gets and sets whether or not to display the components within the section cut.
Syntax
BreakOutOperation.DisplayComponentsWithinTheSectionCut() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
BreakOutOperation.GetDepth Method
Parent Object: BreakOutOperation
Description
Method that returns the information controlling the depth of the break out.
BreakOutOperation Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Syntax
BreakOutOperation.GetDepth( DepthSource As Object, DepthValue As Double )
Parameters
Name Type Description
DepthSource Object
Graphic object that defines the depth of the break out. Several different types of objects can be returned
depending on how the depth of the break out has been defined. The DepthType property can be used to know
what type(s) of objects will be returned by this method. Based on the depth type here are the object types you
can expect to be returned.
kFromPointBreakOutType * An Edge or Vertex object from the model being displayed in the view is
returned. This is different than the GeometryIntent object that would have been provided during creation.
Model geometry is returned in this case because in many cases the drawing curve that defines the depth is not
visible, and so does not exist in the view containing the break out. * The DepthValue argument is applicable in
this case and gives the offset from this point.
kToSketchBreakOutType * A DrawingSketch object which is associated with a dependant projected view.
kToHoleBreakOutType * A DrawingCurve object that is used to specify a 'hole'. A hole in this case is defined
as any geometry from a HoleFeature object or any cylinder or cone in the model. The axis of the hole, cylinder,
or cone is parallel to the sheet plane and defines the depth of the hole.
kThroughPartBreakOutType * A PartComponentDefinition object indicates that the entire part is cut. This is
only applicable when the drawing view contains a part, not an assembly. * A ComponentOccurrence (or a
ComponentOccurrenceProxy) object in the context of the parent drawing view. The depth is defined by the
depth of the associated part. * An ObjectCollection containing multiple ComponentOccurrence (or
ComponentOccurrenceProxy) objects. The depth is defined by the depths of the associated parts.
DepthValue Double
This argument is only applicable when the DepthType is kFromPointBreakOutType otherwise it should be
ignored. The depth value is always returned as centimeters.
Version
Introduced in version 2010
BreakOutOperation.GetReferenceKey Method
Parent Object: BreakOutOperation
Description
Method that generates and returns the reference key for this entity.
Syntax
BreakOutOperation.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. The key context must be supplied when working with any B-Rep
entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context is created using
the CreateKeyContext method of the ReferenceKeyManager object. For all other object types, the key context
argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
BreakOutOperation Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To obtain the entity at a later time using
the reference key you use the BindKeyToObject method of the object. The ReferenceKeyManager object is obtained using the
ReferenceKeyManager property of the Document object.
Version
Introduced in version 2010
BreakOutOperation.Parent Property
Parent Object: BreakOutOperation
Description
Property that returns the parent drawing view from which this BreakOutOperation was retrieved.
Syntax
BreakOutOperation.Parent() As DrawingView
Property Value
This is a read only property whose value is a DrawingView.
Version
Introduced in version 2010
BreakOutOperation.Profile Property
Parent Object: BreakOutOperation
Description
Read-write property that gets and sets the sketch profile used for the break out.
Syntax
BreakOutOperation.Profile() As Profile
Property Value
This is a read/write property whose value is a Profile.
Version
Introduced in version 2010
BreakOutOperation.SectionAllParts Property
Parent Object: BreakOutOperation
Description
Read-write property that gets and sets whether to section all parts in the break out area.
BreakOutOperation Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Syntax
BreakOutOperation.SectionAllParts() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2010
BreakOutOperation.SetDepth Method
Parent Object: BreakOutOperation
Description
Method that sets the depth of the break out.
Syntax
BreakOutOperation.SetDepth( [DepthSource] As Variant, [DepthValue] As Double )
Parameters
Name Type Description
DepthSource Variant
Graphic object that defines the depth of the break out. This argument is optional in the case where the depth is
defined by a point (DepthType property returns kFromPointBreakOutType) and you only want to modify the
depth value.
Several different types of objects can be used as input depending on how the depth of the break is to be
defined. Here are the various valid inputs. 1. A GeometryIntent object that represents a point. This specifies
the starting point of the break out area. In this case, the DepthValue argument must be specified to indicate the
depth of the break out area from the specified point. 2. A DrawingSketch object which is associated with a
dependant projected view. 3. A DrawingCurve object that is used to specify a 'hole'. A hole in this case is any
geometry from a HoleFeature object or any cylinder or cone in the model. The axis of the hole, cylinder, or
cone must be parallel to the sheet plane. The axis defines the depth of the hole. 4. A
PartComponentDefinition object to indicate that the entire part is to be cut. This is only applicable when the
drawing view contains a part. The PartComponentDefinition supplied must be the component definition of the
part in the view. 5. A ComponentOccurrence (or a ComponentOccurrenceProxy) object in the context of the
parent drawing view. The depth is defined by the depth of the associated part. This is only applicable when the
drawing view contains an assembly. 6. An ObjectCollection containing multiple ComponentOccurrence (or
ComponentOccurrenceProxy) objects. The depth is defined by the depths of the associated parts. This is only
applicable when the drawing view contains an assembly.
This is an optional argument whose default value is null.
DepthValue Double
This argument is only applicable when the DepthType is already kFromPointBreakOutType or you're setting
the depth type to be measured from a point. If it is already kFromPointBreakOutType and you want to use the
existing from point you can just provide a new depth value. If you want set or change the depth point then the
DepthSource argument must also be used to define the new from point. In all other cases the value of this
argument is ignored. The value is always input as centimeters.
This is an optional argument whose default value is 0.0.
Version
Introduced in version 2010
BreakOutOperation.Type Property
BreakOutOperation Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
Parent Object: BreakOutOperation
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BreakOutOperation.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BreakOutOperation Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh3BAC.htm 13/06/2025
BreakOutOperations Object
Description
The BreakOutOperations collection object contains information about all the break out operations
applied to a drawing view as well as methods to add break outs to the view.
Methods
Name Description
Add
Method that adds a break out to a drawing view. The newly created BreakOutOperation
object is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Method that returns the specified break out operation object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
DetailDrawingView.BreakOutOperations, DrawingView.BreakOutOperations,
SectionDrawingView.BreakOutOperations
Version
Introduced in version 2010
BreakOutOperations.Add Method
Parent Object: BreakOutOperations
Description
Method that adds a break out to a drawing view. The newly created BreakOutOperation object is
returned.
BreakOutOperations Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CC.htm 13/06/2025
Syntax
BreakOutOperations.Add( Profile As Profile, DepthSource As Object, [DepthValue] As Double,
[SectionAllParts] As Boolean ) As BreakOutOperation
Parameters
Name Type Description
Profile Profile
Input Profile object that specifies the sketch profile for the break out.
This profile must be closed so it should be created using the
AddForSolid method of the Profiles object.
DepthSource Object
Input object that specifies the source for the break out depth. Valid input
objects are:
1. A GeometryIntent object that represents a point. This specifies
the starting point of the break out area. In this case, the
DepthValue argument must be specified to indicate the depth of
the break out area from the specified point.
2. A DrawingSketch object which is associated with a dependant
projected view.
3. A DrawingCurve object that is used to specify a 'hole'. A hole in
this case is any geometry from a HoleFeature object or any
cylinder or cone in the model. The axis of the hole, cylinder, or
cone must be parallel to the sheet plane. The axis defines the
depth of the hole.
4. A PartComponentDefinition object to indicate that the entire
part is to be cut. This is only applicable when the drawing view
contains a part. The PartComponentDefinition supplied must be
the component definition of the part in the view.
5. A ComponentOccurrence (or a ComponentOccurrenceProxy)
object in the context of the parent drawing view. The depth is
defined by the depth of the associated part. This is only applicable
when the drawing view contains an assembly.
6. An ObjectCollection containing multiple ComponentOccurrence
(or ComponentOccurrenceProxy) objects. The depth is defined by
the depths of the associated parts. This is only applicable when
the drawing view contains an assembly.
BreakOutOperations Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CC.htm 13/06/2025
DepthValue Double Optional input Double that specifies the depth value for the break out if
the input DepthSource is a point. This argument is ignored if the input
source is not a point.
This is an optional argument whose default value is 0.0.
SectionAllParts Boolean
Optional input Boolean that specifies whether to section all parts in the
break out area. The default value is False indicating that all parts will
not be sectioned.
This is an optional argument whose default value is False.
Version
Introduced in version 2010
BreakOutOperations.Application Property
Parent Object: BreakOutOperations
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BreakOutOperations.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BreakOutOperations.Count Property
Parent Object: BreakOutOperations
Description
Property that returns the number of items in the collection.
BreakOutOperations Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CC.htm 13/06/2025
Syntax
BreakOutOperations.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BreakOutOperations.Item Property
Parent Object: BreakOutOperations
Description
Method that returns the specified break out operation object from the collection.
Syntax
BreakOutOperations.Item( Index As Long ) As BreakOutOperation
Property Value
This is a read only property whose value is a BreakOutOperation.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the object to return.
Version
Introduced in version 2010
BreakOutOperations.Type Property
Parent Object: BreakOutOperations
BreakOutOperations Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CC.htm 13/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BreakOutOperations.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BreakOutOperations Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh62CC.htm 13/06/2025
BrowserFolder Object
Description
The BrowserFolder object represents a folder in the browser.
Methods
Name Description
Add
Method that adds a node to the folder. The node is automatically reordered in
the browser if required. If the node cannot be reordered as needed, the method
returns an error.
Delete
Method that deletes the browser folder. The contents of the folder are retained
and moved up one level in the browser.
GetReferenceKey
Generate the sequence of bytes, called this object's reference key, which can be
held onto beyond document edits and which will allow the caller to be bound
back to the live object.
Remove
Method that removes a node from the folder. The node is automatically
reordered in the browser if required. If the node cannot be reordered as needed,
the method returns an error.
SetEndOfPart
Method that moves the end of part before or after the folder. The method only
applies for first level folders in part documents and first level folders in the
features portion of the browser in assembly documents. The method returns an
error for all other folders.
Properties
Name Description
AllowAddRemove
Read-write property that gets and sets whether items can be added to and
removed from the folder by the user. If set to False, the add/remove restriction
applies to the user interface only - the contents of folder can still be modified
via the API.
AllowDelete
Read-write property that gets and sets whether the folder can be deleted by
the user. If set to False, the delete restriction applies to the user interface only
- the folder can still be deleted via the API.
AllowRename
Read-write property that gets and sets whether the folder can be renamed by
the user. If set to False, the rename restriction applies to the user interface
only - the folder can still be renamed via the API.
AllowReorder
Read-write property that gets and sets whether the folder can be reordered in
the browser by the user. If set to False, the reorder restriction applies to the
user interface only - the folder can still be reordered via the API.
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BrowserNode
BrowserFolder Object Page 1 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Property that returns the corresponding browser node for the folder. The
contents of the folder (including sub-folders) can be accessed via the browser
node.
InternalName Read-only property that returns the unique internal name of the folder.
Name Read-write property that gets and sets the name of the folder.
Parent Property that returns the parent browser node for the folder.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BrowserFoldersEnumerator.Item, BrowserPane.AddBrowserFolder
Samples
Name Description
Add assembly occurrences to a new folder Demonstrates assembly occurrences to a new folder
Version
Introduced in version 2010
BrowserFolder.Add Method
Parent Object: BrowserFolder
Description
Method that adds a node to the folder. The node is automatically reordered in the browser if
required. If the node cannot be reordered as needed, the method returns an error.
Syntax
BrowserFolder.Add( BrowserNode As BrowserNode, [TargetNode] As Variant, [Before] As
Boolean )
Parameters
Name Type Description
BrowserNode BrowserNode
Input BrowserNode object that specifies the object to be moved into
the folder.
TargetNode Variant Optional input BrowserNode object that specifies the object within
the folder adjacent to which the input node should be positioned.
This node should be found directly under the folder, else the method
returns an error. If not specified, the node is added to the top of the
BrowserFolder Object Page 2 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
list in the folder.
This is an optional argument whose default value is null.
Before Boolean
Optional input Boolean that specifies whether the input node should
be moved before or after the target node. If not specified, the node is
positioned after the target node. This argument is ignored if the
TargetNode argument is not specified.
This is an optional argument whose default value is False.
Version
Introduced in version 2010
BrowserFolder.AllowAddRemove Property
Parent Object: BrowserFolder
Description
Read-write property that gets and sets whether items can be added to and removed from the folder
by the user. If set to False, the add/remove restriction applies to the user interface only - the
contents of folder can still be modified via the API.
Syntax
BrowserFolder.AllowAddRemove() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BrowserFolder.AllowDelete Property
Parent Object: BrowserFolder
Description
Read-write property that gets and sets whether the folder can be deleted by the user. If set to False,
the delete restriction applies to the user interface only - the folder can still be deleted via the API.
BrowserFolder Object Page 3 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Syntax
BrowserFolder.AllowDelete() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BrowserFolder.AllowRename Property
Parent Object: BrowserFolder
Description
Read-write property that gets and sets whether the folder can be renamed by the user. If set to
False, the rename restriction applies to the user interface only - the folder can still be renamed via
the API.
Syntax
BrowserFolder.AllowRename() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BrowserFolder.AllowReorder Property
Parent Object: BrowserFolder
Description
Read-write property that gets and sets whether the folder can be reordered in the browser by the
user. If set to False, the reorder restriction applies to the user interface only - the folder can still be
reordered via the API.
BrowserFolder Object Page 4 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Syntax
BrowserFolder.AllowReorder() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
BrowserFolder.Application Property
Parent Object: BrowserFolder
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BrowserFolder.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BrowserFolder.BrowserNode Property
Parent Object: BrowserFolder
Description
Property that returns the corresponding browser node for the folder. The contents of the folder
(including sub-folders) can be accessed via the browser node.
BrowserFolder Object Page 5 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Syntax
BrowserFolder.BrowserNode() As BrowserNode
Property Value
This is a read only property whose value is a BrowserNode.
Version
Introduced in version 2010
BrowserFolder.Delete Method
Parent Object: BrowserFolder
Description
Method that deletes the browser folder. The contents of the folder are retained and moved up one
level in the browser.
Syntax
BrowserFolder.Delete( [Reserved] As Boolean )
Parameters
Name Type Description
Reserved Boolean
Optional input Boolean reserved for future use. The value is currently ignored.
This is an optional argument whose default value is True.
Version
Introduced in version 2010
BrowserFolder.GetReferenceKey Method
Parent Object: BrowserFolder
Description
BrowserFolder Object Page 6 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Generate the sequence of bytes, called this object's reference key, which can be held onto beyond
document edits and which will allow the caller to be bound back to the live object.
Syntax
BrowserFolder.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Output array of Bytes that contains the reference key.
KeyContext Long
Input Long that specifies the key context. A key context is created using the
CreateKeyContext method of the ReferenceKeyManager object. The key
context must be supplied when working with any B-Rep entities
(SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). For all
other object types, the key context argument is not used and is ignored if
provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2023
BrowserFolder.InternalName Property
Parent Object: BrowserFolder
Description
Read-only property that returns the unique internal name of the folder.
Syntax
BrowserFolder.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2023
BrowserFolder Object Page 7 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
BrowserFolder.Name Property
Parent Object: BrowserFolder
Description
Read-write property that gets and sets the name of the folder.
Syntax
BrowserFolder.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2010
BrowserFolder.Parent Property
Parent Object: BrowserFolder
Description
Property that returns the parent browser node for the folder.
Syntax
BrowserFolder.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
BrowserFolder.Remove Method
BrowserFolder Object Page 8 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Parent Object: BrowserFolder
Description
Method that removes a node from the folder. The node is automatically reordered in the browser if
required. If the node cannot be reordered as needed, the method returns an error.
Syntax
BrowserFolder.Remove( BrowserNode As BrowserNode, [TargetNode] As Variant, [Before] As
Boolean )
Parameters
Name Type Description
BrowserNode BrowserNode
Input BrowserNode object that specifies the object to be removed
from the folder.
TargetNode Variant
Optional input BrowserNode object that specifies the object outside
the folder adjacent to which the input node should be positioned. If
not specified, the node is positioned adjacent to the folder (either
before or after).
This is an optional argument whose default value is null.
Before Boolean
Optional input Boolean that specifies whether the input node should
be moved before or after the target node. If not specified, the node is
positioned after the target node.
This is an optional argument whose default value is False.
Version
Introduced in version 2010
BrowserFolder.SetEndOfPart Method
Parent Object: BrowserFolder
Description
Method that moves the end of part before or after the folder. The method only applies for first
level folders in part documents and first level folders in the features portion of the browser in
assembly documents. The method returns an error for all other folders.
BrowserFolder Object Page 9 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
Syntax
BrowserFolder.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that specifies whether to move the end of part before or after the
folder. True for before.
Version
Introduced in version 2010
BrowserFolder.Type Property
Parent Object: BrowserFolder
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserFolder.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BrowserFolder Object Page 10 of 10
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8095.htm 13/06/2025
BrowserFoldersEnumerator Object
Description
The BrowserFoldersEnumerator object provides access to all browser folders directly under a
browser node.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified BrowserFolder object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BrowserNode.BrowserFolders
Version
Introduced in version 2010
BrowserFoldersEnumerator.Application
Property
Parent Object: BrowserFoldersEnumerator
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BrowserFoldersEnumerator.Application() As Application
BrowserFoldersEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA014.htm 13/06/2025
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2010
BrowserFoldersEnumerator.Count Property
Parent Object: BrowserFoldersEnumerator
Description
Property that returns the number of items in this collection.
Syntax
BrowserFoldersEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2010
BrowserFoldersEnumerator.Item Property
Parent Object: BrowserFoldersEnumerator
Description
Returns the specified BrowserFolder object from the collection.
Syntax
BrowserFoldersEnumerator.Item( Index As Variant ) As BrowserFolder
BrowserFoldersEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA014.htm 13/06/2025
Property Value
This is a read only property whose value is a BrowserFolder.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BrowserFolder to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the BrowserFolder label. If an out of range index or a label of a nonexistent
BrowserFolder is provided, an error will occur. If multiple folders in the
collection share the same label, the first one found will be returned.
Version
Introduced in version 2010
BrowserFoldersEnumerator.Type Property
Parent Object: BrowserFoldersEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserFoldersEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2010
BrowserFoldersEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA014.htm 13/06/2025
BrowserNode Object
Description
The BrowserNode object represents a node in the browser.
Methods
Name Description
AddChild
Method that creates a new as a nested child of this one. The new
BrowserNode is returned.
AllReferencedNodes
Method that returns all browser nodes referencing the specified
BrowserNodeDefinition below this BrowserNode. For instance, in the case
of a shared sketch, two browser nodes reference the same definition.
Delete
Method that deletes the browser node. All of its child browser nodes are
deleted as well. None of the corresponding browser node definitions nor the
client node resources are deleted, however. This method will fail for built-in
browser nodes.
DoPreSelect This method will simulate a mouse hover on the browser node.
DoSelect This method will simulate a mouse click on the browser node.
EnsureVisible Method that ensures the BrowserNode object is visible.
InsertChild
Method that creates a new BrowserNode at the specified location. The new
BrowserNode is returned.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BrowserFolders
Property that returns a collection of all browser folders contained
directly under this node in the browser.
BrowserNodeDefinition
Property that returns a object which defines the various inputs that were
used to create the browser node.
BrowserNodes
Property that returns a collection of the top level BrowserNode objects
contained under this node.
Expanded Specifies the BrowserNode object is expanded.
FullPath Gets the fully qualified label of the BrowserNode.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent
Property that returns the parent of the BrowserNode object. This may
either be another BrowserNode or a BrowserPane.
Selected Property that returns whether the object is selected or not.
Type Returns an ObjectTypeEnum indicating this object's type.
BrowserNode Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Visible Gets and sets whether the browser node is visible or not.
Accessed From
BrowserFolder.BrowserNode, BrowserNode.AddChild, BrowserNode.InsertChild,
BrowserNodesEnumerator.Item, BrowserNodesEnumerator.ItemById,
BrowserPane.GetBrowserNodeFromObject, BrowserPane.TopNode, ClientFeature.BrowserNode,
ClientFeatureProxy.BrowserNode
Samples
Name Description
Add assembly
occurrences to a
new folder
Demonstrates assembly occurrences to a new folder
Demote occurence
This sample demonstrates how to demote a top level occurrence in an
assembly into a new sub-assembly occurrence.
Navigation between
browser and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
Version
Introduced in version 8
BrowserNode.AddChild Method
Parent Object: BrowserNode
Description
Method that creates a new as a nested child of this one. The new BrowserNode is returned.
Syntax
BrowserNode.AddChild( Definition As BrowserNodeDefinition ) As BrowserNode
Parameters
Name Type Description
Definition BrowserNodeDefinition
Input object that specifies the input definition for the browser
node.
BrowserNode Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Remarks
It is not possible to add client nodes to built-in panes.
Version
Introduced in version 8
BrowserNode.AllReferencedNodes Method
Parent Object: BrowserNode
Description
Method that returns all browser nodes referencing the specified BrowserNodeDefinition below
this BrowserNode. For instance, in the case of a shared sketch, two browser nodes reference the
same definition.
Syntax
BrowserNode.AllReferencedNodes( Definition As BrowserNodeDefinition ) As
BrowserNodesEnumerator
Parameters
Name Type Description
Definition BrowserNodeDefinition
Input BrowserNodeDefinition object to get the referenced
nodes for.
Samples
Name Description
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
Version
Introduced in version 11
BrowserNode Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
BrowserNode.Application Property
Parent Object: BrowserNode
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BrowserNode.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
BrowserNode.BrowserFolders Property
Parent Object: BrowserNode
Description
Property that returns a collection of all browser folders contained directly under this node in the
browser.
Syntax
BrowserNode.BrowserFolders() As BrowserFoldersEnumerator
Property Value
This is a read only property whose value is a BrowserFoldersEnumerator.
Version
Introduced in version 2010
BrowserNode Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
BrowserNode.BrowserNodeDefinition
Property
Parent Object: BrowserNode
Description
Property that returns a object which defines the various inputs that were used to create the browser
node.
Syntax
BrowserNode.BrowserNodeDefinition() As BrowserNodeDefinition
Property Value
This is a read only property whose value is a BrowserNodeDefinition.
Samples
Name Description
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
Version
Introduced in version 8
BrowserNode.BrowserNodes Property
Parent Object: BrowserNode
Description
Property that returns a collection of the top level BrowserNode objects contained under this node.
Syntax
BrowserNode.BrowserNodes() As BrowserNodesEnumerator
BrowserNode Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Property Value
This is a read only property whose value is a BrowserNodesEnumerator.
Version
Introduced in version 8
BrowserNode.Delete Method
Parent Object: BrowserNode
Description
Method that deletes the browser node. All of its child browser nodes are deleted as well. None of
the corresponding browser node definitions nor the client node resources are deleted, however.
This method will fail for built-in browser nodes.
Syntax
BrowserNode.Delete()
Version
Introduced in version 8
BrowserNode.DoPreSelect Method
Parent Object: BrowserNode
Description
This method will simulate a mouse hover on the browser node.
Syntax
BrowserNode.DoPreSelect()
Version
Introduced in version 8
BrowserNode Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
BrowserNode.DoSelect Method
Parent Object: BrowserNode
Description
This method will simulate a mouse click on the browser node.
Syntax
BrowserNode.DoSelect()
Version
Introduced in version 8
BrowserNode.EnsureVisible Method
Parent Object: BrowserNode
Description
Method that ensures the BrowserNode object is visible.
Syntax
BrowserNode.EnsureVisible()
Version
Introduced in version 8
BrowserNode.Expanded Property
Parent Object: BrowserNode
Description
Specifies the BrowserNode object is expanded.
BrowserNode Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Syntax
BrowserNode.Expanded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 8
BrowserNode.FullPath Property
Parent Object: BrowserNode
Description
Gets the fully qualified label of the BrowserNode.
Syntax
BrowserNode.FullPath() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
BrowserNode.InsertChild Method
Parent Object: BrowserNode
Description
Method that creates a new BrowserNode at the specified location. The new BrowserNode is
returned.
BrowserNode Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Syntax
BrowserNode.InsertChild( Definition As BrowserNodeDefinition, TargetNode As
BrowserNode, InsertBefore As Boolean ) As BrowserNode
Parameters
Name Type Description
Definition BrowserNodeDefinition
Input object that defines the input definition for the browser
node.
TargetNode BrowserNode
Input BrowserNode object that specifies the node adjacent
to which the new node should be inserted.
InsertBefore Boolean
Input Boolean that specifies whether the new node should
be inserted before or after the target node.
Version
Introduced in version 2011
BrowserNode.NativeObject Property
Parent Object: BrowserNode
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
BrowserNode.NativeObject() As Object
Property Value
This is a read only property whose value is an Object.
Samples
Name Description
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
BrowserNode Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Version
Introduced in version 2009
BrowserNode.Parent Property
Parent Object: BrowserNode
Description
Property that returns the parent of the BrowserNode object. This may either be another
BrowserNode or a BrowserPane.
Syntax
BrowserNode.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
BrowserNode.Selected Property
Parent Object: BrowserNode
Description
Property that returns whether the object is selected or not.
Syntax
BrowserNode.Selected() As Boolean
Property Value
This is a read only property whose value is a Boolean.
BrowserNode Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Version
Introduced in version 8
BrowserNode.Type Property
Parent Object: BrowserNode
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserNode.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
BrowserNode.Visible Property
Parent Object: BrowserNode
Description
Gets and sets whether the browser node is visible or not.
Syntax
BrowserNode.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
BrowserNode Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
Version
Introduced in version 8
BrowserNode Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhBA91.htm 13/06/2025
BrowserNodeDefinition Object
Description
The BrowserNodeDefinition object contains the definition of a node in the browser.
Properties
Name Description
AdditionalDisplayState Gets and sets the additional display state of browsernodes that use this definition.
AdditionalStateIconToolTipText Gets and sets additional state icon tool tip text on a existing definition object.
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
BuiltIn Property that specifies if the node is a standard Autodesk Inventor node or not.
DisplayState Gets and sets the display state of browsernodes that use this definition.
Label
Property that gets the label of the BrowserNode. This is the string that is displayed to
the user. In the case of BuiltIns, this Label is really a reflection of the corresponding
name held by the underlying data - for example, a Sketch or a WorkPlane object. In
order to set the Label of a ClientBrowserNodeDefinition, see SetLabel on that object.
Parent Property that returns the owning of this BrowserNodeDefinition object.
StateIconToolTipText Gets and sets state icon tool tip text on a existing definition object.
ToolTipText Gets and sets tool tip text on a existing definition object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BrowserNode.BrowserNodeDefinition
Version
Introduced in version 8
BrowserNodeDefinition.AdditionalDisplayState
Property
Parent Object: BrowserNodeDefinition
Description
Gets and sets the additional display state of browsernodes that use this definition.
Syntax
BrowserNodeDefinition.AdditionalDisplayState() As BrowserNodeDisplayStateEnum
Property Value
This is a read/write property whose value is a BrowserNodeDisplayStateEnum.
BrowserNodeDefinition Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCFD.htm 13/06/2025
Version
Introduced in version 11
BrowserNodeDefinition.AdditionalStateIconToolTipText
Property
Parent Object: BrowserNodeDefinition
Description
Gets and sets additional state icon tool tip text on a existing definition object.
Syntax
BrowserNodeDefinition.AdditionalStateIconToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 11
BrowserNodeDefinition.Application Property
Parent Object: BrowserNodeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
BrowserNodeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
BrowserNodeDefinition.BuiltIn Property
Parent Object: BrowserNodeDefinition
BrowserNodeDefinition Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCFD.htm 13/06/2025
Description
Property that specifies if the node is a standard Autodesk Inventor node or not.
Syntax
BrowserNodeDefinition.BuiltIn() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 8
BrowserNodeDefinition.DisplayState Property
Parent Object: BrowserNodeDefinition
Description
Gets and sets the display state of browsernodes that use this definition.
Syntax
BrowserNodeDefinition.DisplayState() As BrowserNodeDisplayStateEnum
Property Value
This is a read/write property whose value is a BrowserNodeDisplayStateEnum.
Version
Introduced in version 9
BrowserNodeDefinition.Label Property
Parent Object: BrowserNodeDefinition
Description
Property that gets the label of the BrowserNode. This is the string that is displayed to the user. In the case of BuiltIns,
this Label is really a reflection of the corresponding name held by the underlying data - for example, a Sketch or a
WorkPlane object. In order to set the Label of a ClientBrowserNodeDefinition, see SetLabel on that object.
Syntax
BrowserNodeDefinition.Label() As String
BrowserNodeDefinition Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCFD.htm 13/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
BrowserNodeDefinition.Parent Property
Parent Object: BrowserNodeDefinition
Description
Property that returns the owning of this BrowserNodeDefinition object.
Syntax
BrowserNodeDefinition.Parent() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 8
BrowserNodeDefinition.StateIconToolTipText Property
Parent Object: BrowserNodeDefinition
Description
Gets and sets state icon tool tip text on a existing definition object.
Syntax
BrowserNodeDefinition.StateIconToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
BrowserNodeDefinition.ToolTipText Property
Parent Object: BrowserNodeDefinition
BrowserNodeDefinition Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCFD.htm 13/06/2025
Description
Gets and sets tool tip text on a existing definition object.
Syntax
BrowserNodeDefinition.ToolTipText() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
BrowserNodeDefinition.Type Property
Parent Object: BrowserNodeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserNodeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
BrowserNodeDefinition Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDCFD.htm 13/06/2025
BrowserNodesEnumerator Object
Description
This object provides access to the individual objects in a collection of nodes; for example the
nested children of a given .
Methods
Name Description
ItemById Returns the specified object from the collection.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count
Property that returns the number of items in the collection. Only the immediate
children are counted.
Item Returns the specified object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
BrowserNode.AllReferencedNodes, BrowserNode.BrowserNodes
Samples
Name Description
Demote
occurence
This sample demonstrates how to demote a top level occurrence in an assembly
into a new sub-assembly occurrence.
Version
Introduced in version 8
BrowserNodesEnumerator.Application
Property
Parent Object: BrowserNodesEnumerator
BrowserNodesEnumerator Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFD7.htm 13/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BrowserNodesEnumerator.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 8
BrowserNodesEnumerator.Count Property
Parent Object: BrowserNodesEnumerator
Description
Property that returns the number of items in the collection. Only the immediate children are
counted.
Syntax
BrowserNodesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Samples
Name Description
Demote
occurence
This sample demonstrates how to demote a top level occurrence in an assembly
into a new sub-assembly occurrence.
BrowserNodesEnumerator Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFD7.htm 13/06/2025
Version
Introduced in version 8
BrowserNodesEnumerator.Item Property
Parent Object: BrowserNodesEnumerator
Description
Returns the specified object from the collection.
Syntax
BrowserNodesEnumerator.Item( Index As Variant ) As BrowserNode
Property Value
This is a read only property whose value is a BrowserNode.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the BrowserNode to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the BrowserNode label. If an out-of-range index or a label of a nonexistent
BrowserNode is provided, an error will occur. If multiple nodes in the
collection share the same label, the first one found will be returned.
Version
Introduced in version 8
BrowserNodesEnumerator.ItemById Method
Parent Object: BrowserNodesEnumerator
Description
Returns the specified object from the collection.
BrowserNodesEnumerator Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFD7.htm 13/06/2025
Syntax
BrowserNodesEnumerator.ItemById( Id As Long ) As BrowserNode
Parameters
Name Type Description
Id Long
Input long value that specifies the unique and custom identifier of a in this collection.
The identifier was supplied at creation time of the ClientBrowserNode. If no such
ClientBrowserNode is found in the collection, an error will occur.
Version
Introduced in version 8
BrowserNodesEnumerator.Type Property
Parent Object: BrowserNodesEnumerator
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserNodesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
BrowserNodesEnumerator Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFFD7.htm 13/06/2025
BrowserPane Object
Description
The BrowserPane object represents an independent window or panel inside the browser that is
currently associated with the active document.
Methods
Name Description
Activate Method that causes the pane to become the active browser pane.
AddBrowserFolder
Creates a new browser folder at the location specified by the input
nodes.
ClearPreSelect Clears any pre-selection(s) for this pane.
Delete
Method that deletes the browser pane. If this pane is currently
active, the default Inventor pane will become active. This method
will fail for built-in browser panes.
GetBrowserNodeFromObject
Returns the browser node that corresponds to the input object. The
method returns an error if no corresponding node is found within
this pane. If multiple matches are found, the method returns the
first match.
GetDockingState Method that gets the docking state of the browser pane.
Refresh
Rebuilds assembly browser by incorporating information from subdoc(
s) default browser pane into the top level document's 'Model'
pane. Should be used on a top level assembly's 'Model' pane after a
sub-doc's default pane is changed via BrowserPane::Default.
Reorder
Moves a node or group of nodes to a new target position within the
browser pane.
SetDockingState Method that sets the docking state of the browser pane.
Update
Refreshes the browser view. Should be used after changing
browser node status (e.g. DisplayState).
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
BuiltIn
Property that specifies if the pane is a standard Inventor pane or not. Built-in panes
have restrictions in the edits that can be performed.
Control
Property that returns the ActiveX control that may be associated with the pane.
This property will return Nothing in the case this is a Tree Browser Pane.
Default Specifies if this pane is set as the default when the document is opened.
InternalName
Gets either control identifier or the internal identifier depending on whether this
browser pane is a ActiveX control identifier or an Inventor tree browser.
BrowserPane Object Page 1 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Name Property that gets and sets the name of the pane. When setting the name, an error
will occur if the name is not unique with respect to the other panes of the
document. The name of built-in panes cannot be set.
Parent Gets the parent object from whom this object can logically be reached.
SearchBox Read-only property that gets SearchBox object.
TopNode Gets the top browser node.
TreeBrowser
Gets the property that specifies if the pane hosts TreeBrowser nodes constructed by
Inventor.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible
Gets and sets the boolean flag which can turn the availability of browser pane in
the UI, off or on.
Events
Name Description
OnActivate
The OnActivate event notifies a client when the BrowserPane has become the
active pane.
OnDeactivate The OnDeactivate event notifies a client when a BrowserPane is deactivated.
OnHelp
The OnHelp event notifies a client when the end-user clicks the help button on the
browser pane.
Accessed From
BrowserPanes.ActivePane, BrowserPanes.Add, BrowserPanes.AddByManifest,
BrowserPanes.AddTreeBrowserPane, BrowserPanes.Item
Samples
Name Description
Add assembly occurrences
to a new folder
Demonstrates assembly occurrences to a new folder
Demote occurence
This sample demonstrates how to demote a top level occurrence in
an assembly into a new sub-assembly occurrence.
Promote occurence This sample demonstrates how to promote an occurrence.
Dock browser pane to a
custom ViewFrame
This sample demonstrates how to dock the browser pane to a
custom ViewFrame.
Version
Introduced in version 5
BrowserPane.Activate Method
Parent Object: BrowserPane
BrowserPane Object Page 2 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Description
Method that causes the pane to become the active browser pane.
Syntax
BrowserPane.Activate()
Version
Introduced in version 5
BrowserPane.AddBrowserFolder Method
Parent Object: BrowserPane
Description
Creates a new browser folder at the location specified by the input nodes.
Syntax
BrowserPane.AddBrowserFolder( [Name] As String, [BrowserNodes] As Variant ) As
BrowserFolder
Parameters
Name Type Description
Name String
Optional input String that specifies a name for the folder. If not specified,
the default naming scheme is used to assign a name to the folder.
This is an optional argument whose default value is """".
BrowserNodes Variant
Optional input ObjectCollection containing BrowserNode objects to
create the folder for. If not specified, an empty folder is created as the last
node in the browser. The input nodes should be contiguous in the
browser. If not contiguous, Inventor attempts to reorder the nodes so they
are contiguous before putting them in a folder. Use
GetBrowserNodeFromObject method to get corresponding browser nodes
for Inventor objects.
This is an optional argument whose default value is null.
Samples
Name Description
BrowserPane Object Page 3 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Add assembly occurrences to a new folder Demonstrates assembly occurrences to a new folder
Version
Introduced in version 2010
BrowserPane.Application Property
Parent Object: BrowserPane
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
BrowserPane.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
BrowserPane.BuiltIn Property
Parent Object: BrowserPane
Description
Property that specifies if the pane is a standard Inventor pane or not. Built-in panes have
restrictions in the edits that can be performed.
Syntax
BrowserPane.BuiltIn() As Boolean
BrowserPane Object Page 4 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
BrowserPane.ClearPreSelect Method
Parent Object: BrowserPane
Description
Clears any pre-selection(s) for this pane.
Syntax
BrowserPane.ClearPreSelect()
Version
Introduced in version 2018
BrowserPane.Control Property
Parent Object: BrowserPane
Description
Property that returns the ActiveX control that may be associated with the pane. This property will
return Nothing in the case this is a Tree Browser Pane.
Syntax
BrowserPane.Control() As Object
Property Value
This is a read only property whose value is an Object.
BrowserPane Object Page 5 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Version
Introduced in version 5
BrowserPane.Default Property
Parent Object: BrowserPane
Description
Specifies if this pane is set as the default when the document is opened.
Syntax
BrowserPane.Default() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 8
BrowserPane.Delete Method
Parent Object: BrowserPane
Description
Method that deletes the browser pane. If this pane is currently active, the default Inventor pane
will become active. This method will fail for built-in browser panes.
Syntax
BrowserPane.Delete()
Version
Introduced in version 5
BrowserPane Object Page 6 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
BrowserPane.GetBrowserNodeFromObject
Method
Parent Object: BrowserPane
Description
Returns the browser node that corresponds to the input object. The method returns an error if no
corresponding node is found within this pane. If multiple matches are found, the method returns
the first match.
Syntax
BrowserPane.GetBrowserNodeFromObject( NativeObject As Object ) As BrowserNode
Parameters
Name Type Description
NativeObject Object
Samples
Name Description
Add assembly occurrences
to a new folder
Demonstrates assembly occurrences to a new folder
Demote occurence
This sample demonstrates how to demote a top level occurrence in
an assembly into a new sub-assembly occurrence.
Promote occurence This sample demonstrates how to promote an occurrence.
Version
Introduced in version 2010
BrowserPane.GetDockingState Method
Parent Object: BrowserPane
Description
Method that gets the docking state of the browser pane.
BrowserPane Object Page 7 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Syntax
BrowserPane.GetDockingState( DockingState As DockingStateEnum, DockToObject As
Object )
Parameters
Name Type Description
DockingState DockingStateEnum
Output DockingStateEnum value that indicates the docking
state.
DockToObject Object
Output object to indicate where the browser pane docks to.
This returns Nothing if the DockingState returns kFloat.
Version
Introduced in version 2022
BrowserPane.InternalName Property
Parent Object: BrowserPane
Description
Gets either control identifier or the internal identifier depending on whether this browser pane is a
ActiveX control identifier or an Inventor tree browser.
Syntax
BrowserPane.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
BrowserPane.Name Property
Parent Object: BrowserPane
BrowserPane Object Page 8 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Description
Property that gets and sets the name of the pane. When setting the name, an error will occur if the
name is not unique with respect to the other panes of the document. The name of built-in panes
cannot be set.
Syntax
BrowserPane.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
BrowserPane.OnActivate Event
Parent Object: BrowserPane
Description
The OnActivate event notifies a client when the BrowserPane has become the active pane.
Syntax
BrowserPane.OnActivate()
Version
Introduced in version 5
BrowserPane.OnDeactivate Event
Parent Object: BrowserPane
Description
The OnDeactivate event notifies a client when a BrowserPane is deactivated.
BrowserPane Object Page 9 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Syntax
BrowserPane.OnDeactivate()
Version
Introduced in version 5
BrowserPane.OnHelp Event
Parent Object: BrowserPane
Description
The OnHelp event notifies a client when the end-user clicks the help button on the browser pane.
Syntax
BrowserPane.OnHelp( BeforeOrAfter As EventTimingEnum, Context As NameValueMap,
HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BeforeOrAfter EventTimingEnum
Input indicating if the event is being fired before (kBefore)
or after (kAfter). This notification is only provided before
any help is displayed so the value of this argument will
always be kBefore.
Context NameValueMap
Input object that can be used to determine the context of why
the event fired. No context information is provided for this
event.
HandlingCode HandlingCodeEnum
Output that indicates how you are handling the event. Setting
the value of the HandlingCode argument specifies how
Inventor is to handle displaying help. If you set this
argument to kEventNotHandled or kEventCanceled, Inventor
will display some general browser help. Setting the value of
this argument to kEventHandled will allow you to handle
displaying help to the end-user and Inventor will not display
anything. To display help to the end-user you can choose to
use whatever help system you want. Inventor's API does not
provide support for the actual display of the clients help.
BrowserPane Object Page 10 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Remarks
By setting the HandlingCode argument, the client can choose to handle displaying help themselves
or let Inventor handle displaying some help information.
Version
Introduced in version 6
BrowserPane.Parent Property
Parent Object: BrowserPane
Description
Gets the parent object from whom this object can logically be reached.
Syntax
BrowserPane.Parent() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 5
BrowserPane.Refresh Method
Parent Object: BrowserPane
Description
Rebuilds assembly browser by incorporating information from sub-doc(s) default browser pane
into the top level document's 'Model' pane. Should be used on a top level assembly's 'Model' pane
after a sub-doc's default pane is changed via BrowserPane::Default.
Syntax
BrowserPane.Refresh()
BrowserPane Object Page 11 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Version
Introduced in version 9
BrowserPane.Reorder Method
Parent Object: BrowserPane
Description
Moves a node or group of nodes to a new target position within the browser pane.
Syntax
BrowserPane.Reorder( TargetNode As BrowserNode, Before As Boolean, StartNode As
BrowserNode, [EndNode] As Variant )
Parameters
Name Type Description
TargetNode BrowserNode
Input BrowserNode object to position the browser nodes next to. An
error will occur if the target node is not at the same level in the
browser as the node(s) being repositioned. The input node must
belong to this pane.
Before Boolean
Input Boolean that indicates whether to position the node(s) before or
after the target browser node. A value of True indicates that the node
(s) will be positioned before the target node.
StartNode BrowserNode
Input BrowserNode object that specifies the node to be
repositioned. The input node must belong to this pane.
EndNode Variant
Optional input BrowserNode object. If specified, all the browser node
objects from the StartNode to the EndNode, both inclusive, will be
repositioned to the specified position in the tree. If not specified, only
the StartNode will be repositioned. This argument is currently ignored
in drawings.
This is an optional argument whose default value is null.
Samples
Name Description
Demote
occurence
This sample demonstrates how to demote a top level occurrence in an assembly
into a new sub-assembly occurrence.
Promote
occurence
This sample demonstrates how to promote an occurrence.
BrowserPane Object Page 12 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Version
Introduced in version 9
BrowserPane.SearchBox Property
Parent Object: BrowserPane
Description
Read-only property that gets SearchBox object.
Syntax
BrowserPane.SearchBox() As SearchBox
Property Value
This is a read only property whose value is a SearchBox.
Samples
Name Description
Browser Search Box
Sample
This sample demonstrates how to use the search box in a document's
browser pane.
Version
Introduced in version 2018
BrowserPane.SetDockingState Method
Parent Object: BrowserPane
Description
Method that sets the docking state of the browser pane.
Syntax
BrowserPane.SetDockingState( DockingState As DockingStateEnum, [DockToObject] As
Variant )
BrowserPane Object Page 13 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Parameters
Name Type Description
DockingState DockingStateEnum
Input DockingStateEnum value that specifies the docking
state.
DockToObject Variant
Optional input object to specify where the browser pane
docks to. If the DockingState is specified as kFloat then this
argument is ignored. Valid object includes: ViewFrame,
DockableWindow, BrowserPane.
This is an optional argument whose default value is null.
Samples
Name Description
Dock browser pane to a custom
ViewFrame
This sample demonstrates how to dock the browser pane to a
custom ViewFrame.
Version
Introduced in version 2022
BrowserPane.TopNode Property
Parent Object: BrowserPane
Description
Gets the top browser node.
Syntax
BrowserPane.TopNode() As BrowserNode
Property Value
This is a read only property whose value is a BrowserNode.
Samples
Name Description
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
BrowserPane Object Page 14 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
plane, finds its browser node and gets the work plane object back from the
browser node.
Version
Introduced in version 8
BrowserPane.TreeBrowser Property
Parent Object: BrowserPane
Description
Gets the property that specifies if the pane hosts TreeBrowser nodes constructed by Inventor.
Syntax
BrowserPane.TreeBrowser() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 8
BrowserPane.Type Property
Parent Object: BrowserPane
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
BrowserPane.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
BrowserPane Object Page 15 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025
Version
Introduced in version 5
BrowserPane.Update Method
Parent Object: BrowserPane
Description
Refreshes the browser view. Should be used after changing browser node status (e.g.
DisplayState).
Syntax
BrowserPane.Update()
Version
Introduced in version 11
BrowserPane.Visible Property
Parent Object: BrowserPane
Description
Gets and sets the boolean flag which can turn the availability of browser pane in the UI, off or on.
Syntax
BrowserPane.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 8
BrowserPane Object Page 16 of 16
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1CA6.htm 13/06/2025