WebBrowserDialog Object
Description
WebBrowserDialog Object.
Methods
Name Description
Delete Method that deletes this web browser dialog.
Move Method that moves this web browser dialog.
Navigate Method that navigates to a url in this web browser dialog.
Refresh Method that refreshes the content in this web browser dialog.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed,
it can be set to (QueryInterfaced for) 'Application' when running with
Inventor whereas, 'ApprenticeServer' when running with the
Apprentice Server.
DisabledWindowState
Read-write property that gets and sets a bit-mask defining the disabled
window states of this web browser dialog.
Height
Read-write property that gets and sets the height of this web browser
dialog.
HWND
Read-only property that returns the HWND of this web browser
dialog.
InternalName
Read-only property that returns the internal name of the web browser
dialog.
Left
Read-write property that gets and sets the left edge of this web
browser dialog.
Modal
Read-only property that returns whether this dialog is modal dialog or
not.
Title
Read-write property that gets and sets the title of this web browser
dialog.
Top
Read-write property that gets and sets the top edge of this web
browser dialog.
Type Gets the constant that indicates the type of this object.
Visible
Read-write property that gets and sets the visibility of this web
browser dialog.
WebBrowserDialogEvents Read-only property that gets the WebBrowserDialogEvents object.
Width
Read-write property that gets and sets the width of this web browser
dialog.
WindowState
WebBrowserDialog Object Page 1 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Read-write property that gets and sets the window state of this web
browser dialog.
Accessed From
WebBrowserDialogEvents.Parent, WebBrowserDialogs.Add, WebBrowserDialogs.Item
Samples
Name Description
WebBrowserDialog
creation
This sample demonstrates how to create a web-based browser dialog,
you can use this dialog to show a html format file or navigate to a
website etc..
Version
Introduced in version 2017
WebBrowserDialog.Application Property
Parent Object: WebBrowserDialog
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
WebBrowserDialog.Application() As Application
Property Value
This is a read only property whose value is an Application.
Version
Introduced in version 2017
WebBrowserDialog.Delete Method
Parent Object: WebBrowserDialog
WebBrowserDialog Object Page 2 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Description
Method that deletes this web browser dialog.
Syntax
WebBrowserDialog.Delete()
Version
Introduced in version 2017
WebBrowserDialog.DisabledWindowState
Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets a bit-mask defining the disabled window states of this web
browser dialog.
Syntax
WebBrowserDialog.DisabledWindowState() As WindowsSizeEnum
Property Value
This is a read/write property whose value is a WindowsSizeEnum.
Version
Introduced in version 2017
WebBrowserDialog.Height Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the height of this web browser dialog.
WebBrowserDialog Object Page 3 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Syntax
WebBrowserDialog.Height() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialog.HWND Property
Parent Object: WebBrowserDialog
Description
Read-only property that returns the HWND of this web browser dialog.
Syntax
WebBrowserDialog.HWND() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialog.InternalName Property
Parent Object: WebBrowserDialog
Description
Read-only property that returns the internal name of the web browser dialog.
WebBrowserDialog Object Page 4 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Syntax
WebBrowserDialog.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2017
WebBrowserDialog.Left Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the left edge of this web browser dialog.
Syntax
WebBrowserDialog.Left() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialog.Modal Property
Parent Object: WebBrowserDialog
Description
Read-only property that returns whether this dialog is modal dialog or not.
WebBrowserDialog Object Page 5 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Syntax
WebBrowserDialog.Modal() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2017
WebBrowserDialog.Move Method
Parent Object: WebBrowserDialog
Description
Method that moves this web browser dialog.
Syntax
WebBrowserDialog.Move( Top As Long, Left As Long, Height As Long, Width As Long )
Parameters
Name Type Description
Top Long
Input Long that specifies the distance between the top of the screen and top of the
dialog.
Left Long
Input Long that specifies the distance between the left edge of the screen and left
edge of the window.
Height Long Input Long value that specifies the height of the dialog.
Width Long Input Long value that specifies the width of the dialog.
Version
Introduced in version 2017
WebBrowserDialog.Navigate Method
Parent Object: WebBrowserDialog
WebBrowserDialog Object Page 6 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Description
Method that navigates to a url in this web browser dialog.
Syntax
WebBrowserDialog.Navigate( Url As String )
Parameters
Name Type Description
Url String Input String value that specifies the url to navigate to.
Samples
Name Description
WebBrowserDialog
creation
This sample demonstrates how to create a web-based browser dialog,
you can use this dialog to show a html format file or navigate to a
website etc..
Version
Introduced in version 2017
WebBrowserDialog.Refresh Method
Parent Object: WebBrowserDialog
Description
Method that refreshes the content in this web browser dialog.
Syntax
WebBrowserDialog.Refresh()
Version
Introduced in version 2017
WebBrowserDialog.Title Property
WebBrowserDialog Object Page 7 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the title of this web browser dialog.
Syntax
WebBrowserDialog.Title() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2017
WebBrowserDialog.Top Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the top edge of this web browser dialog.
Syntax
WebBrowserDialog.Top() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialog.Type Property
Parent Object: WebBrowserDialog
WebBrowserDialog Object Page 8 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Description
Gets the constant that indicates the type of this object.
Syntax
WebBrowserDialog.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2017
WebBrowserDialog.Visible Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the visibility of this web browser dialog.
Syntax
WebBrowserDialog.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2017
WebBrowserDialog.WebBrowserDialogEvents
Property
Parent Object: WebBrowserDialog
WebBrowserDialog Object Page 9 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Description
Read-only property that gets the WebBrowserDialogEvents object.
Syntax
WebBrowserDialog.WebBrowserDialogEvents() As WebBrowserDialogEvents
Property Value
This is a read only property whose value is a WebBrowserDialogEvents.
Version
Introduced in version 2017
WebBrowserDialog.Width Property
Parent Object: WebBrowserDialog
Description
Read-write property that gets and sets the width of this web browser dialog.
Syntax
WebBrowserDialog.Width() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialog.WindowState Property
Parent Object: WebBrowserDialog
Description
WebBrowserDialog Object Page 10 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
Read-write property that gets and sets the window state of this web browser dialog.
Syntax
WebBrowserDialog.WindowState() As WindowsSizeEnum
Property Value
This is a read/write property whose value is a WindowsSizeEnum.
Version
Introduced in version 2017
WebBrowserDialog Object Page 11 of 11
file:///C:/Users/Cliente/AppData/Local/Temp/~hh50FD.htm 17/06/2025
WebBrowserDialogEvents Object
Description
WebBrowserDialogEvents Object.
Properties
Name Description
Application
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas,
'ApprenticeServer' when running with the Apprentice Server.
Parent Gets the parent object from whom this object can logically be reached.
Type Gets the constant that indicates the type of this object.
Events
Name Description
OnClose
Fires when the user clicks the close button on the Web Browser Dialog. Clients can use
this event to handle the close dialog event.
OnHelp Event that fires when F1 is pressed when the Web Browser Dialog is active.
Accessed From
WebBrowserDialog.WebBrowserDialogEvents
Version
Introduced in version 2017
WebBrowserDialogEvents.Application
Property
Parent Object: WebBrowserDialogEvents
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
WebBrowserDialogEvents Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9D1A.htm 17/06/2025
Syntax
WebBrowserDialogEvents.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2017
WebBrowserDialogEvents.OnClose Event
Parent Object: WebBrowserDialogEvents
Description
Fires when the user clicks the close button on the Web Browser Dialog. Clients can use this event
to handle the close dialog event.
Syntax
WebBrowserDialogEvents.OnClose( BeforeOrAfter As EventTimingEnum, Context As
NameValueMap, HandlingCode As HandlingCodeEnum )
Parameters
Name Type Description
BeforeOrAfter EventTimingEnum
Input EventTimingEnum indicating if the event is being fired
before (kBefore) or after (kAfter) the web browser dialog is
closed.
Context NameValueMap
Input object that can be used to determine the context of why
the event fired. No context information is provided for this
event.
HandlingCode HandlingCodeEnum
Output that indicates how you are handling the event. This
argument is ignored for this event.
Version
Introduced in version 2017
WebBrowserDialogEvents Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9D1A.htm 17/06/2025
WebBrowserDialogEvents.OnHelp Event
Parent Object: WebBrowserDialogEvents
Description
Event that fires when F1 is pressed when the Web Browser Dialog is active.
Syntax
WebBrowserDialogEvents.OnHelp( Context As NameValueMap, HandlingCode As
HandlingCodeEnum )
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
display some general browser help. Setting the value of this
argument to kEventHandled will allow you to handle
displaying help to the end-user and Inventor will not display
anything. To display help to the end-user you can choose to
use whatever help system you want. Inventor's API does not
provide support for the actual display of the clients help.
Version
Introduced in version 2017
WebBrowserDialogEvents.Parent Property
Parent Object: WebBrowserDialogEvents
Description
Gets the parent object from whom this object can logically be reached.
WebBrowserDialogEvents Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9D1A.htm 17/06/2025
Syntax
WebBrowserDialogEvents.Parent() As WebBrowserDialog
Property Value
This is a read only property whose value is a WebBrowserDialog.
Version
Introduced in version 2017
WebBrowserDialogEvents.Type Property
Parent Object: WebBrowserDialogEvents
Description
Gets the constant that indicates the type of this object.
Syntax
WebBrowserDialogEvents.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2017
WebBrowserDialogEvents Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9D1A.htm 17/06/2025
WebBrowserDialogs Object
Description
WebBrowserDialogs collection Object.
Methods
Name Description
Add Method that creates a new WebBrowserDialog, the new WebBrowserDialog is returned.
Properties
Name Description
Count Gets the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Gets the constant that indicates the type of this object.
Accessed From
Application.WebBrowserDialogs
Version
Introduced in version 2017
WebBrowserDialogs.Add Method
Parent Object: WebBrowserDialogs
Description
Method that creates a new WebBrowserDialog, the new WebBrowserDialog is returned.
Syntax
WebBrowserDialogs.Add( [InternalName] As Variant, [Modal] As Boolean ) As
WebBrowserDialog
Parameters
WebBrowserDialogs Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8EF.htm 17/06/2025
Name Type Description
InternalName Variant
Optional input String object that specifies the internal name of newly
created WebBrowserDialog. If provided, the internal name should be
unique in the WebBrowserDialogs collection, otherwise an error will
occur. If not provided, the internal name is automatically generated.
This is an optional argument whose default value is null.
Modal Boolean
Optional input Boolean value that specifies the whether the newly created
WebBrowserDialog is modal dialog or not. This defaults to False if not
specified.
This is an optional argument whose default value is False.
Samples
Name Description
WebBrowserDialog
creation
This sample demonstrates how to create a web-based browser dialog,
you can use this dialog to show a html format file or navigate to a
website etc..
Version
Introduced in version 2017
WebBrowserDialogs.Count Property
Parent Object: WebBrowserDialogs
Description
Gets the number of items in this collection.
Syntax
WebBrowserDialogs.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2017
WebBrowserDialogs Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8EF.htm 17/06/2025
WebBrowserDialogs.Item Property
Parent Object: WebBrowserDialogs
Description
Allows integer-indexed access to items in the collection.
Syntax
WebBrowserDialogs.Item( Index As Variant ) As WebBrowserDialog
Property Value
This is a read only property whose value is a WebBrowserDialog.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the WebBrowserDialog to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the WebBrowserDialog’s internal name. If an out of range index
or a name of a non-existent WebBrowserDialog is provided, an error occurs.
Version
Introduced in version 2017
WebBrowserDialogs.Type Property
Parent Object: WebBrowserDialogs
Description
Gets the constant that indicates the type of this object.
Syntax
WebBrowserDialogs.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
WebBrowserDialogs Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8EF.htm 17/06/2025
Version
Introduced in version 2017
WebBrowserDialogs Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB8EF.htm 17/06/2025
Weld Object
Description
The Weld object represents a weld within an assembly. The Weld object is a base class of the
CosmeticWeld and WeldBead objects. kAssemblyFeatureGroup : General assembly group.
kPreperationsFeatureGroup : Preparations group. kWeldsFeatureGroup : Welds group.
kMachiningFeatureGroup : Machining group.
Methods
Name Description
Delete
Method that deletes the weld. The arguments allow control over which dependent objects
are also deleted.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Name Gets and sets the name of the Weld.
SymbolAttachPoint
Property that returns the coordinate where the weld symbol attached to the
weld geometry.
SymbolBreakPoint
Property that returns the coordinate where the weld symbol leader line break
point is.
Type Returns an ObjectTypeEnum indicating this object's type.
WeldInfo
Gets the weld description information as a String containing XML formatted
data. For more information on XML formatting see More XML Weld Info...
Accessed From
Welds.Item
Derived Classes
CosmeticWeld, WeldBead
Version
Introduced in version 8
Weld Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD13A.htm 17/06/2025
Weld.Application Property
Parent Object: Weld
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Weld.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
Weld.Delete Method
Parent Object: Weld
Description
Method that deletes the weld. The arguments allow control over which dependent objects are also
deleted.
Syntax
Weld.Delete( [RetainConsumedSketches] As Boolean, [RetainDependentFeaturesAndSketches]
As Boolean, [RetainDependentWorkFeatures] As Boolean )
Parameters
Name Type Description
RetainConsumedSketches Boolean Optional input Boolean indicating if consumed
sketches within the feature should be deleted. If
the feature being deleted is not a sketch based
feature this argument is ignored.
Weld Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD13A.htm 17/06/2025
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
Introduced in version 8
Weld.Name Property
Parent Object: Weld
Description
Gets and sets the name of the Weld.
Syntax
Weld.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
Weld.SymbolAttachPoint Property
Parent Object: Weld
Weld Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD13A.htm 17/06/2025
Description
Property that returns the coordinate where the weld symbol attached to the weld geometry.
Syntax
Weld.SymbolAttachPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 8
Weld.SymbolBreakPoint Property
Parent Object: Weld
Description
Property that returns the coordinate where the weld symbol leader line break point is.
Syntax
Weld.SymbolBreakPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 8
Weld.Type Property
Parent Object: Weld
Description
Weld Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD13A.htm 17/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Weld.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
Weld.WeldInfo Property
Parent Object: Weld
Description
Gets the weld description information as a String containing XML formatted data. For more
information on XML formatting see More XML Weld Info...
Syntax
Weld.WeldInfo() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
Weld Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hhD13A.htm 17/06/2025
WeldBead Object
Derived from: Weld Object
Description
The WeldBead object represents a weld bead within an assembly. The WeldBead object is derived
from the Weld object.
Methods
Name Description
Delete
Method that deletes the weld. The arguments allow control over which dependent objects
are also deleted.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
BeadFaces
Property that returns the set of that define the geometric result of the weld
bead.
BeadLength Gets the length of the weld bead.
EndFaces Gets the set of faces that define the ends of the weld bead.
FaceSetOne Returns the first set of faces the weld bead is on.
FaceSetTwo Returns the second set of faces the weld bead is on.
Name Gets and sets the name of the Weld.
SideFaces Gets the set of faces that define the sides of the weld bead.
SymbolAttachPoint
Property that returns the coordinate where the weld symbol attached to the
weld geometry.
SymbolBreakPoint
Property that returns the coordinate where the weld symbol leader line break
point is.
Type Returns an ObjectTypeEnum indicating this object's type.
WeldInfo
Gets the weld description information as a String containing XML formatted
data. For more information on XML formatting see More XML Weld Info...
Accessed From
WeldBeads.Item
WeldBead Object Page 1 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
Version
Introduced in version 8
WeldBead.Application Property
Parent Object: WeldBead
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WeldBead.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
WeldBead.BeadFaces Property
Parent Object: WeldBead
Description
Property that returns the set of that define the geometric result of the weld bead.
Syntax
WeldBead.BeadFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
WeldBead Object Page 2 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
Version
Introduced in version 8
WeldBead.BeadLength Property
Parent Object: WeldBead
Description
Gets the length of the weld bead.
Syntax
WeldBead.BeadLength() As Double
Property Value
This is a read only property whose value is a Double.
Version
Introduced in version 11
WeldBead.Delete Method
Parent Object: WeldBead
Description
Method that deletes the weld. The arguments allow control over which dependent objects are also
deleted.
Syntax
WeldBead.Delete( [RetainConsumedSketches] As Boolean,
[RetainDependentFeaturesAndSketches] As Boolean, [RetainDependentWorkFeatures] As
Boolean )
Parameters
Name Type Description
WeldBead Object Page 3 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
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
Introduced in version 8
WeldBead.EndFaces Property
Parent Object: WeldBead
Description
Gets the set of faces that define the ends of the weld bead.
Syntax
WeldBead.EndFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 11
WeldBead Object Page 4 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
WeldBead.FaceSetOne Property
Parent Object: WeldBead
Description
Returns the first set of faces the weld bead is on.
Syntax
WeldBead.FaceSetOne() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2011
WeldBead.FaceSetTwo Property
Parent Object: WeldBead
Description
Returns the second set of faces the weld bead is on.
Syntax
WeldBead.FaceSetTwo() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 2011
WeldBead.Name Property
WeldBead Object Page 5 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
Parent Object: WeldBead
Description
Gets and sets the name of the Weld.
Syntax
WeldBead.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 8
WeldBead.SideFaces Property
Parent Object: WeldBead
Description
Gets the set of faces that define the sides of the weld bead.
Syntax
WeldBead.SideFaces() As Faces
Property Value
This is a read only property whose value is a Faces.
Version
Introduced in version 11
WeldBead.SymbolAttachPoint Property
Parent Object: WeldBead
WeldBead Object Page 6 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
Description
Property that returns the coordinate where the weld symbol attached to the weld geometry.
Syntax
WeldBead.SymbolAttachPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 8
WeldBead.SymbolBreakPoint Property
Parent Object: WeldBead
Description
Property that returns the coordinate where the weld symbol leader line break point is.
Syntax
WeldBead.SymbolBreakPoint() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 8
WeldBead.Type Property
Parent Object: WeldBead
Description
WeldBead Object Page 7 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WeldBead.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
WeldBead.WeldInfo Property
Parent Object: WeldBead
Description
Gets the weld description information as a String containing XML formatted data. For more
information on XML formatting see More XML Weld Info...
Syntax
WeldBead.WeldInfo() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
WeldBead Object Page 8 of 8
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEB3A.htm 17/06/2025
WeldBeads Object
Description
The WeldBeads object provides access to all the existing objects within a weldment.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in the collection.
Item Returns the specified WeldBead object from the collection
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Welds.WeldBeads
Version
Introduced in version 8
WeldBeads.Application Property
Parent Object: WeldBeads
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WeldBeads.Application() As Object
Property Value
This is a read only property whose value is an Object.
WeldBeads Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8E4.htm 17/06/2025
Version
Introduced in version 8
WeldBeads.Count Property
Parent Object: WeldBeads
Description
Property that returns the number of items in the collection.
Syntax
WeldBeads.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 8
WeldBeads.Item Property
Parent Object: WeldBeads
Description
Returns the specified WeldBead object from the collection
Syntax
WeldBeads.Item( Index As Variant ) As WeldBead
Property Value
This is a read only property whose value is a WeldBead.
Parameters
WeldBeads Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8E4.htm 17/06/2025
Name Type Description
Index Variant
Input Variant value that specifies the WeldBead to return. This can be either a
numeric value indicating the index of the item in the collection or it can be a string
indicating the WeldBead name. If an out of range index or a name of a nonexistent
WeldBead is provided, an error will occur.
Version
Introduced in version 8
WeldBeads.Type Property
Parent Object: WeldBeads
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WeldBeads.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
WeldBeads Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8E4.htm 17/06/2025
WeldmentComponentDefinition Object
Derived from: AssemblyComponentDefinition Object
Description
The WeldmentComponentDefinition object provides access to all of the assembly and weldment information of a weldment assembly.
Methods
Name Description
AdjustProxyContext
Returns the specified object proxy scoped into this assembly, trimming any portion of the context from any
assembly in which this assembly is a subassembly. In other words, for the given object proxy, this method
makes a new object proxy which has this component definition as the context definition.
AnalyzeInterference
Method that analyzes the interference between two components. The input ObjectCollections contain the
component occurrences that are to be checked for interference. If only one set is provided then interference
checking is performed between all occurrences provided in the set. If two sets are provided then the overlap
between the components of the two collections are calculated.
ClearAppearanceOverrides
Clears the appearance overrides on the provided objects. The objects can include faces, features, work surfaces,
surface bodies and occurrences.
CreateFactory
Method that converts an assembly to an iAssemblyFactory. The newly created iAssemblyFactory object will
have an empty excel spreadsheet.
CreateGeometryIntent
Method that creates a GeometryIntent object. GeometryIntent objects are used as input when creating assembly
joints. They are used to identify geometry and specific locations on that geometry.
CreateVisibleOccurrenceFinder
Method that creates an occurrence finder object that allows you to find all occurrences that are visible or hidden
by a defined amount. By default, visible is defined by a portion of the part being visible from any view of the
part. Optionally you can specify a camera to limit the viewing angle and the extents.
ExportObjects Method that marks all the input objects as exported.
FindUsingPoint Method that finds all the entities of the specified type at the specified location.
FindUsingRay
Method that fires a ray through the part or assembly and returns the entities intersected by the ray. The objects
intersected by the ray are returned in the order in which they are intersected, with the first entities returned
being those closest to the clipping plane.
FindUsingVector
Method that finds all the entities of the specified type along the specified vector using either a cylinder or cone
that to define the tolerance within the defined vector.
GetEndOfFeaturesPosition Gets the current end of Features position in the browser in an assembly.
GetUnusedGeometries Method that gets the unused sketches and work features.
HideAllRelationships Method that hides all of the assembly constraints, joints and iMate objects in the document.
PurgeUnusedGeometries Method that purges unused sketches and work features.
SetEndOfFeaturesToTopOrBottom Sets the End of Part marker to the top or bottom of the browser.
SetOccurrencesProperty Method that process the property of a collection of occurrences.
SuppressFeatures
Property that returns the SurfaceBodies collection. Surface bodies within the assembly is not currently
supported by Inventor. The returned SurfaceBodies collection will be a collection of zero.
TransformOccurrences Method that transforms a collection of occurrences.
UnsuppressFeatures Method that unsuppresses previously suppressed features.
Properties
Name Description
ActiveOccurrence Property that returns the that is currently in edit.
AppearanceOverridesObjects
Property that returns the objects that have appearance overrides in the active design view. The objects
returned in the collection can include occurrences.
Application
Returns the top-level parent application object. When used the context of Inventor, an Application object is
returned. When used in the context of Apprentice, an ApprenticeServer object is returned.
AssemblyEvents Property returning an AssemblyEvents collection object.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BIMComponent Read-only property that returns the BIMComponent object associated with this component definition.
BOM Property that returns the BOM object.
BOMQuantity Property that returns the BOMQuantity object.
BOMStructure Gets and sets how the component is used/viewed in a BOM.
ClientGraphicsCollection Property that returns the ClientGraphicsCollection object.
Constraints Property that returns the AssemblyConstraints collection object.
DataIO Gets the object that directly deals with I/O to and from a storage-medium, including Streams(IStream).
DefaultVirtualComponentMaterial
Gets and sets the default material associated with the assembly component. This is the material that is used
for newly created virtual components.
Document Property that returns the containing Document object.
FactoryDocument Read-only property that returns the model state factory document when IsModelStateMember returns True.
WeldmentComponentDefinition Object Page 1 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Features Gets the Features collection for this assembly (assembly features).
iAssemblyFactory
Property that returns the iAssemblyFactory object. This property will return Nothing in the case where the
assembly is not an iAssembly Factory. You can determine this by using the IsiAssemblyFactory property.
iAssemblyMember
Property that returns the iAssemblyMember object. This property will return Nothing in the case where the
assembly is not an iAssembly Member. You can determine this by using the IsiAssemblyMember property.
iMateDefinitions Property that returns the iMateDefinitions collection object associated with this assembly.
iMateResults Property that returns the iMateResults collection object associated with this assembly.
ImportedComponents Read-only property that returns the ImportedComponents collection object.
IsiAssemblyFactory
Property that returns if the assembly is an iAssembly factory or not. It returns True in the case where the
assembly is a factory. If True, the factory can be obtained using the iAssemblyFactory property.
IsiAssemblyMember
Property that returns if the assembly is an iAssembly Member or not. It returns True in the case where the
assembly is a member. If True, the member can be obtained using the iAssemblyMember property.
IsModelStateFactory Read-only property that returns whether the document is a model state factory document or not.
IsModelStateMember Read-only property that returns whether the document is a model state member document or not.
Joints
Read-only property that returns the AssemblyJoints collection object which provides access to the existing
joints in the assembly and provides the capability to create new joints.
Machining Property that returns the Machining object associated with this Weldment.
MassProperties
Property that returns the MassProperties object. This supports performing mass properties calculations for the
entire assembly.
ModelAnnotations Read-only property that returns the ModelAnnotations collection object.
ModelGeometryVersion
Property that returns a string that can be used to determine if the document has been modified. This version
string is changed every time the assembly is modified. By saving a previous version string, you can compare
the current version string to see if the assembly has been modified.
ModelStates Read-only property that returns the ModelStates object.
OccurrencePatterns Method that returns the pattern element this occurrence represents.
Occurrences Property that returns the collection object.
OrientedMinimumRangeBox Read-only property that returns the oriented minimum range box for this object.
Parameters Property that returns the parameters collection.
Parent Property that returns the parent of the object.
PointClouds
Gets the PointClouds collection object that encapsulates all of the point clouds defined in this Component
Definition.
PreciseRangeBox Gets a bounding box that tightly encloses all the solid and surface bodies under the ComponentDefinition.
Preparations Property that returns the Preparations object associated with this Weldment.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed
to enclose this object.
RepresentationsManager Property that returns the RepresentationsManager object.
RevitExports Read-only property that returns the RevitExports collection object.
SimulationManager
Read-only property that returns the SimulationManager object. This object provides access to the various
simulation API’s.
Sketches Gets the Sketches collection for this assembly component.
SurfaceBodies Property that returns all of the result SurfaceBody objects contained within this ComponentDefinition.
Type Returns an ObjectTypeEnum indicating this object's type.
UserCoordinateSystems Property that returns the UserCoordinateSystems collection object.
WeldBeadAppearance
Get and sets current appearance used for the weld beads. Setting to Nothing removes the overrides so that the
weld bead uses the appearance associated with the weld material.
WeldBeadAppearanceSourceType
Gets and sets the source of the appearance for the weld bead. Setting to kMaterialAppearance will clear any
overrides so that weld bead use the appearance associated with the weld material.
WeldBeadMaterial Gets and sets the material of the welds.
WeldEndFillAppearance
Gets and sets the currrent appearance used for the end caps of a weld. Setting to Nothing removes the
overrides so that the caps use same appearance as the weld beads.
WeldEndFillAppearanceSourceType
Gets and set the source of the appearance for the end caps of a weld bead. Setting to kWeldsAppearance will
clear any overrides so that the caps use same appearance as the weld beads.
Welds Property that returns the Welds object.
WeldsComponentDefinition Property that returns the associated WeldsComponentDefinition object.
WorkAxes
Property that returns the WorkAxes collection object that encapsulates all of the work axes defined in this
ComponentDefinition.
WorkPlanes
Property that returns the WorkPlanes collection object that encapsulates all of the work planes defined in this
ComponentDefinition.
WorkPoints
Property that returns the WorkPoints collection object that encapsulates all of the work points defined in this
ComponentDefinition.
Version
Introduced in version 8
WeldmentComponentDefinition.ActiveOccurrence Property
WeldmentComponentDefinition Object Page 2 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Parent Object: WeldmentComponentDefinition
Description
Property that returns the that is currently in edit.
Syntax
WeldmentComponentDefinition.ActiveOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 8
WeldmentComponentDefinition.AdjustProxyContext Method
Parent Object: WeldmentComponentDefinition
Description
Returns the specified object proxy scoped into this assembly, trimming any portion of the context from any assembly in which this assembly is a
subassembly. In other words, for the given object proxy, this method makes a new object proxy which has this component definition as the context
definition.
Syntax
WeldmentComponentDefinition.AdjustProxyContext( ObjectProxy As Object ) As Object
Parameters
Name Type Description
ObjectProxy Object
An object representing an Object Proxy - known in earlier versions of Inventor as a Geom Proxy. Each Object Proxy has an
associated ComponentOccurrence, which has a property called ContextDefinition. The value of this property is the top level
ComponentDefinition.
Version
Introduced in version 8
WeldmentComponentDefinition.AnalyzeInterference Method
Parent Object: WeldmentComponentDefinition
Description
Method that analyzes the interference between two components. The input ObjectCollections contain the component occurrences that are to be
checked for interference. If only one set is provided then interference checking is performed between all occurrences provided in the set. If two sets
are provided then the overlap between the components of the two collections are calculated.
Syntax
WeldmentComponentDefinition.AnalyzeInterference( Set1 As ObjectCollection, [Set2] As Variant ) As InterferenceResults
Parameters
Name Type Description
Set1 ObjectCollection
Input that contains ComponentOccurrenceobjects. If this set is provided without Set2, all occurrences in the set are
checked for interference against all other occurrences in the set.
Set2 Variant
Optional input that contains ComponentOccurrence objects. When this set is provided the occurrences in Set1 are checked
for interference against the occurrences in Set2.
This is an optional argument whose default value is null.
WeldmentComponentDefinition Object Page 3 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.AppearanceOverridesObjects
Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the objects that have appearance overrides in the active design view. The objects returned in the collection can include
occurrences.
Syntax
WeldmentComponentDefinition.AppearanceOverridesObjects() As ObjectsEnumerator
Property Value
This is a read only property whose value is an ObjectsEnumerator.
Version
Introduced in version 2014
WeldmentComponentDefinition.Application Property
Parent Object: WeldmentComponentDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Syntax
WeldmentComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
WeldmentComponentDefinition.AssemblyEvents Property
Parent Object: WeldmentComponentDefinition
Description
Property returning an AssemblyEvents collection object.
Syntax
WeldmentComponentDefinition.AssemblyEvents() As AssemblyEvents
Property Value
This is a read only property whose value is an AssemblyEvents.
WeldmentComponentDefinition Object Page 4 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.AttributeSets Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WeldmentComponentDefinition.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 8
WeldmentComponentDefinition.BIMComponent Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the BIMComponent object associated with this component definition.
Syntax
WeldmentComponentDefinition.BIMComponent() As BIMComponent
Property Value
This is a read only property whose value is a BIMComponent.
Version
Introduced in version 2011
WeldmentComponentDefinition.BOM Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the BOM object.
Syntax
WeldmentComponentDefinition.BOM() As BOM
Property Value
This is a read only property whose value is a BOM.
WeldmentComponentDefinition Object Page 5 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 10
WeldmentComponentDefinition.BOMQuantity Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the BOMQuantity object.
Syntax
WeldmentComponentDefinition.BOMQuantity() As BOMQuantity
Property Value
This is a read only property whose value is a BOMQuantity.
Version
Introduced in version 10
WeldmentComponentDefinition.BOMStructure Property
Parent Object: WeldmentComponentDefinition
Description
Gets and sets how the component is used/viewed in a BOM.
Syntax
WeldmentComponentDefinition.BOMStructure() As BOMStructureEnum
Property Value
This is a read/write property whose value is a BOMStructureEnum.
Version
Introduced in version 10
WeldmentComponentDefinition.ClearAppearanceOverrides Method
Parent Object: WeldmentComponentDefinition
Description
Clears the appearance overrides on the provided objects. The objects can include faces, features, work surfaces, surface bodies and occurrences.
Syntax
WeldmentComponentDefinition.ClearAppearanceOverrides( [AppearanceOverrideObjects] As Variant )
Parameters
Name Type Description
AppearanceOverrideObjects Variant
Optional input ObjectCollection including occurrences to clear their appearance overrides. If this argument is
not provided, then it will clear all the appearance overrides in active design view. If an object is provided that
does not have an override, it is ignored.
This is an optional argument whose default value is null.
WeldmentComponentDefinition Object Page 6 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2014
WeldmentComponentDefinition.ClientGraphicsCollection Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the ClientGraphicsCollection object.
Syntax
WeldmentComponentDefinition.ClientGraphicsCollection() As ClientGraphicsCollection
Property Value
This is a read only property whose value is a ClientGraphicsCollection.
Version
Introduced in version 8
WeldmentComponentDefinition.Constraints Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the AssemblyConstraints collection object.
Syntax
WeldmentComponentDefinition.Constraints() As AssemblyConstraints
Property Value
This is a read only property whose value is an AssemblyConstraints.
Version
Introduced in version 8
WeldmentComponentDefinition.CreateFactory Method
Parent Object: WeldmentComponentDefinition
Description
Method that converts an assembly to an iAssemblyFactory. The newly created iAssemblyFactory object will have an empty excel spreadsheet.
Syntax
WeldmentComponentDefinition.CreateFactory() As iAssemblyFactory
Version
Introduced in version 11
WeldmentComponentDefinition Object Page 7 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
WeldmentComponentDefinition.CreateGeometryIntent Method
Parent Object: WeldmentComponentDefinition
Description
Method that creates a GeometryIntent object. GeometryIntent objects are used as input when creating assembly joints. They are used to identify
geometry and specific locations on that geometry.
Syntax
WeldmentComponentDefinition.CreateGeometryIntent( Geometry As Object, [Intent] As Variant ) As GeometryIntent
Parameters
Name Type Description
Geometry Object
Input object that specifies the geometry.
Valid input objects are proxies of SketchLine, SketchCircle, SketchArc, SketchEllipse, SketchEllipticalArc, Edge, or Face
objects.
Intent Variant
Optional input that specifies a specific position on the geometry. This can be a value from PointIntentEnum, a Point, or a
GeometryIntent object that specifies a position on the geometry relative to model space, a double value indicating a position in
the parametric space of the input curve.
This is an optional argument whose default value is null.
Version
Introduced in version 2014
WeldmentComponentDefinition.CreateVisibleOccurrenceFinder
Method
Parent Object: WeldmentComponentDefinition
Description
Method that creates an occurrence finder object that allows you to find all occurrences that are visible or hidden by a defined amount. By default,
visible is defined by a portion of the part being visible from any view of the part. Optionally you can specify a camera to limit the viewing angle and
the extents.
Syntax
WeldmentComponentDefinition.CreateVisibleOccurrenceFinder( Visible As Boolean, PercentageVisible As Double, Compact As Boolean ) As
VisibleOccurrenceFinder
Parameters
Name Type Description
Visible Boolean
Input Boolean that defines if visible or hidden objects should be found. If True then fully and partially visible
occurrences will be returned. If False, completely and partially hidden occurrences will be returned.
PercentageVisible Double
Input Double that defines the percentage of the component that can be visible or hidden. A value of 1 (100%) indicates
that all components that are visible at all, or that are completely hidden (depending on the Visible argument) will be
returned. A value of 0 (0%) indicates that the most visible or hidden components will be returned.
Compact Boolean
Input Boolean that defines if all components that are found within an assembly will be consolidated so that their parent
assembly is returned instead of each one of the child components. A value of True indicates that they will be
consolidated.
Version
Introduced in version 2013
WeldmentComponentDefinition Object Page 8 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
WeldmentComponentDefinition.DataIO Property
Parent Object: WeldmentComponentDefinition
Description
Gets the object that directly deals with I/O to and from a storage-medium, including Streams(IStream).
Syntax
WeldmentComponentDefinition.DataIO() As DataIO
Property Value
This is a read only property whose value is a DataIO.
Version
Introduced in version 8
WeldmentComponentDefinition.DefaultVirtualComponentMaterial
Property
Parent Object: WeldmentComponentDefinition
Description
Gets and sets the default material associated with the assembly component. This is the material that is used for newly created virtual components.
Syntax
WeldmentComponentDefinition.DefaultVirtualComponentMaterial() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
WeldmentComponentDefinition.Document Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the containing Document object.
Syntax
WeldmentComponentDefinition.Document() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
WeldmentComponentDefinition Object Page 9 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
WeldmentComponentDefinition.ExportObjects Method
Parent Object: WeldmentComponentDefinition
Description
Method that marks all the input objects as exported.
Syntax
WeldmentComponentDefinition.ExportObjects( Objects As ObjectCollection )
Parameters
Name Type Description
Objects ObjectCollection Collection of objects to mark as exported.
Version
Introduced in version 2011
WeldmentComponentDefinition.FactoryDocument Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the model state factory document when IsModelStateMember returns True.
Syntax
WeldmentComponentDefinition.FactoryDocument() As Document
Property Value
This is a read only property whose value is a Document.
Version
Introduced in version 2022
WeldmentComponentDefinition.Features Property
Parent Object: WeldmentComponentDefinition
Description
Gets the Features collection for this assembly (assembly features).
Syntax
WeldmentComponentDefinition.Features() As Features
Property Value
This is a read only property whose value is a Features.
Version
Introduced in version 10
WeldmentComponentDefinition Object Page 10 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
WeldmentComponentDefinition.FindUsingPoint Method
Parent Object: WeldmentComponentDefinition
Description
Method that finds all the entities of the specified type at the specified location.
Syntax
WeldmentComponentDefinition.FindUsingPoint( Point As Point, ObjectTypes() As SelectionFilterEnum, [ProximityTolerance] As Variant,
[VisibleObjectsOnly] As Boolean ) As ObjectsEnumerator
Parameters
Name Type Description
Point Point Input Point object that specifies the model space point at which to find the entities.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to find. The values are the
enum values from the SelectionFilterEnum and can be combined to specify multiple object types.
ProximityTolerance Variant
Input Double that specifies the tolerance value for the search. This value defines the radius of a sphere at
the input point. All objects that intersect this sphere will be returned. If not specified, the default internal
tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean
Optional input Boolean that indicates whether or not invisible objects should be included in the search.
Defaults to True indicating that invisible objects will be ignored.
This is an optional argument whose default value is True.
Version
Introduced in version 2009
WeldmentComponentDefinition.FindUsingRay Method
Parent Object: WeldmentComponentDefinition
Description
Method that fires a ray through the part or assembly and returns the entities intersected by the ray. The objects intersected by the ray are returned in
the order in which they are intersected, with the first entities returned being those closest to the clipping plane.
Syntax
WeldmentComponentDefinition.FindUsingRay( RayStartPoint As Point, RayDirection As UnitVector, Radius As Double, FoundEntities As
ObjectsEnumerator, LocationPoints As ObjectsEnumerator, [FindFirstOnly] As Boolean )
Parameters
Name Type Description
RayStartPoint Point Input object that defines the start point of the ray in model space.
RayDirection UnitVector Input object that defines the direction of the ray. The ray is infinite in the direction defined.
Radius Double
Input Double that defines the radius of the ray. This value is specified in centimeters. Defining a radius for a
ray allows the intersection to be within a given tolerance. This radius essentially results in the definition of a
cylinder whose axis lies along the axis defined by the RayStartPoint and RayDirection. The intersection result
is between the cylinder and the model's entities. A value higher than zero is recommended, though not
explicitly required.
FoundEntities ObjectsEnumerator Output that returns the entities that were intersected by the ray.
LocationPoints ObjectsEnumerator
Output that returns a set of Point objects. One Point object is returned for each entity in the FoundEntities list.
The point defines the coordinate of the intersection between the ray and the corresponding entity.
FindFirstOnly Boolean
Optional input Boolean that specifies whether to find just the first entity in the ray's path. If False (the default)
then all entities found are returned.
This is an optional argument whose default value is False.
WeldmentComponentDefinition Object Page 11 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.FindUsingVector Method
Parent Object: WeldmentComponentDefinition
Description
Method that finds all the entities of the specified type along the specified vector using either a cylinder or cone that to define the tolerance within the
defined vector.
Syntax
WeldmentComponentDefinition.FindUsingVector( OriginPoint As Point, Direction As UnitVector, ObjectTypes() As SelectionFilterEnum,
[UseCylinder] As Boolean, [ProximityTolerance] As Variant, [VisibleObjectsOnly] As Boolean, [LocationPoints] As Variant ) As
ObjectsEnumerator
Parameters
Name Type Description
OriginPoint Point Input Point that defines the model space location to position the vector.
Direction UnitVector
Input UnitVector that defines direction to find all entities that the vector penetrates. The vector is treated
as infinite in both directions from the origin point so all entities that lie in the path of the vector on either
side of the origin point will be returned.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to find. The values are the
enum values from the SelectionFilterEnum and can be combined to specify multiple object types.
UseCylinder Boolean
Input argument that specifies if the vector defines a cylinder or cone when checking to see if an entity is
hit by the ray.
This is an optional argument whose default value is True.
ProximityTolerance Variant
Optional input Double that specifies the tolerance value for the search. This value defines the radius of a
cylinder if UseCylinder is True or the angle of the cone if False. If not specified, the default internal
tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean
Optional input Boolean that indicates whether or not invisible objects should be included in the search.
Defaults to True indicating that invisible objects will be ignored.
This is an optional argument whose default value is True.
LocationPoints Variant
Optional output that returns a set of Point objects. One Point object is returned for each entity in the
FoundEntities list. The point defines the coordinate of the intersection between the vector and the
corresponding entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
WeldmentComponentDefinition.GetEndOfFeaturesPosition Method
Parent Object: WeldmentComponentDefinition
Description
Gets the current end of Features position in the browser in an assembly.
Syntax
WeldmentComponentDefinition.GetEndOfFeaturesPosition( After As Object, Before As Object )
Parameters
Name Type Description
After Object
WeldmentComponentDefinition Object Page 12 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
The assembly feature or sketch that the "End of Features" node is positioned immediately after. If the "End of Features" node is at
the top of the tree this will return Nothing.
Before Object
The assembly feature or sketch that the "End of Features" node is positioned immediately before. If the "End of Features" node is at
the bottom of the tree this will return Nothing.
Version
Introduced in version 2010
WeldmentComponentDefinition.GetUnusedGeometries Method
Parent Object: WeldmentComponentDefinition
Description
Method that gets the unused sketches and work features.
Syntax
WeldmentComponentDefinition.GetUnusedGeometries( UnusedGeometries As ObjectCollection )
Parameters
Name Type Description
UnusedGeometries ObjectCollection Output ObjectCollection object the includes the unused sketches and work features.
Version
Introduced in version 2024
WeldmentComponentDefinition.HideAllRelationships Method
Parent Object: WeldmentComponentDefinition
Description
Method that hides all of the assembly constraints, joints and iMate objects in the document.
Syntax
WeldmentComponentDefinition.HideAllRelationships()
Version
Introduced in version 2014
WeldmentComponentDefinition.iAssemblyFactory Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the iAssemblyFactory object. This property will return Nothing in the case where the assembly is not an iAssembly Factory.
You can determine this by using the IsiAssemblyFactory property.
Syntax
WeldmentComponentDefinition.iAssemblyFactory() As iAssemblyFactory
Property Value
This is a read only property whose value is an iAssemblyFactory.
WeldmentComponentDefinition Object Page 13 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 11
WeldmentComponentDefinition.iAssemblyMember Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the iAssemblyMember object. This property will return Nothing in the case where the assembly is not an iAssembly Member.
You can determine this by using the IsiAssemblyMember property.
Syntax
WeldmentComponentDefinition.iAssemblyMember() As iAssemblyMember
Property Value
This is a read only property whose value is an iAssemblyMember.
Version
Introduced in version 11
WeldmentComponentDefinition.iMateDefinitions Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the iMateDefinitions collection object associated with this assembly.
Syntax
WeldmentComponentDefinition.iMateDefinitions() As iMateDefinitions
Property Value
This is a read only property whose value is an iMateDefinitions.
Version
Introduced in version 8
WeldmentComponentDefinition.iMateResults Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the iMateResults collection object associated with this assembly.
Syntax
WeldmentComponentDefinition.iMateResults() As iMateResults
Property Value
This is a read only property whose value is an iMateResults.
WeldmentComponentDefinition Object Page 14 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.ImportedComponents Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the ImportedComponents collection object.
Syntax
WeldmentComponentDefinition.ImportedComponents() As ImportedComponents
Property Value
This is a read only property whose value is an ImportedComponents.
Version
Introduced in version 2016
WeldmentComponentDefinition.IsiAssemblyFactory Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns if the assembly is an iAssembly factory or not. It returns True in the case where the assembly is a factory. If True, the factory
can be obtained using the iAssemblyFactory property.
Syntax
WeldmentComponentDefinition.IsiAssemblyFactory() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
WeldmentComponentDefinition.IsiAssemblyMember Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns if the assembly is an iAssembly Member or not. It returns True in the case where the assembly is a member. If True, the
member can be obtained using the iAssemblyMember property.
Syntax
WeldmentComponentDefinition.IsiAssemblyMember() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WeldmentComponentDefinition Object Page 15 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 11
WeldmentComponentDefinition.IsModelStateFactory Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns whether the document is a model state factory document or not.
Syntax
WeldmentComponentDefinition.IsModelStateFactory() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2022
WeldmentComponentDefinition.IsModelStateMember Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns whether the document is a model state member document or not.
Syntax
WeldmentComponentDefinition.IsModelStateMember() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2022
WeldmentComponentDefinition.Joints Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the AssemblyJoints collection object which provides access to the existing joints in the assembly and provides the
capability to create new joints.
Syntax
WeldmentComponentDefinition.Joints() As AssemblyJoints
Property Value
This is a read only property whose value is an AssemblyJoints.
WeldmentComponentDefinition Object Page 16 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2014
WeldmentComponentDefinition.Machining Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the Machining object associated with this Weldment.
Syntax
WeldmentComponentDefinition.Machining() As Machining
Property Value
This is a read only property whose value is a Machining.
Version
Introduced in version 2010
WeldmentComponentDefinition.MassProperties Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the MassProperties object. This supports performing mass properties calculations for the entire assembly.
Syntax
WeldmentComponentDefinition.MassProperties() As MassProperties
Property Value
This is a read only property whose value is a MassProperties.
Version
Introduced in version 8
WeldmentComponentDefinition.ModelAnnotations Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the ModelAnnotations collection object.
Syntax
WeldmentComponentDefinition.ModelAnnotations() As ModelAnnotations
Property Value
This is a read only property whose value is a ModelAnnotations.
WeldmentComponentDefinition Object Page 17 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2019
WeldmentComponentDefinition.ModelGeometryVersion Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns a string that can be used to determine if the document has been modified. This version string is changed every time the
assembly is modified. By saving a previous version string, you can compare the current version string to see if the assembly has been modified.
Syntax
WeldmentComponentDefinition.ModelGeometryVersion() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 8
WeldmentComponentDefinition.ModelStates Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the ModelStates object.
Syntax
WeldmentComponentDefinition.ModelStates() As ModelStates
Property Value
This is a read only property whose value is a ModelStates.
Version
Introduced in version 2022
WeldmentComponentDefinition.OccurrencePatterns Property
Parent Object: WeldmentComponentDefinition
Description
Method that returns the pattern element this occurrence represents.
Syntax
WeldmentComponentDefinition.OccurrencePatterns() As OccurrencePatterns
Property Value
This is a read only property whose value is an OccurrencePatterns.
WeldmentComponentDefinition Object Page 18 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.Occurrences Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the collection object.
Syntax
WeldmentComponentDefinition.Occurrences() As ComponentOccurrences
Property Value
This is a read only property whose value is a ComponentOccurrences.
Version
Introduced in version 8
WeldmentComponentDefinition.OrientedMinimumRangeBox
Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the oriented minimum range box for this object.
Syntax
WeldmentComponentDefinition.OrientedMinimumRangeBox() As OrientedBox
Property Value
This is a read only property whose value is an OrientedBox.
Version
Introduced in version 2024
WeldmentComponentDefinition.Parameters Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the parameters collection.
Syntax
WeldmentComponentDefinition.Parameters() As Parameters
Property Value
This is a read only property whose value is a Parameters.
WeldmentComponentDefinition Object Page 19 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.Parent Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the parent of the object.
Syntax
WeldmentComponentDefinition.Parent() As AssemblyDocument
Property Value
This is a read only property whose value is an AssemblyDocument.
Version
Introduced in version 8
WeldmentComponentDefinition.PointClouds Property
Parent Object: WeldmentComponentDefinition
Description
Gets the PointClouds collection object that encapsulates all of the point clouds defined in this Component Definition.
Syntax
WeldmentComponentDefinition.PointClouds() As PointClouds
Property Value
This is a read only property whose value is a PointClouds.
Version
Introduced in version 2016
WeldmentComponentDefinition.PreciseRangeBox Property
Parent Object: WeldmentComponentDefinition
Description
Gets a bounding box that tightly encloses all the solid and surface bodies under the ComponentDefinition.
Syntax
WeldmentComponentDefinition.PreciseRangeBox() As Box
Property Value
This is a read only property whose value is a Box.
WeldmentComponentDefinition Object Page 20 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2023
WeldmentComponentDefinition.Preparations Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the Preparations object associated with this Weldment.
Syntax
WeldmentComponentDefinition.Preparations() As Preparations
Property Value
This is a read only property whose value is a Preparations.
Version
Introduced in version 2010
WeldmentComponentDefinition.PurgeUnusedGeometries Method
Parent Object: WeldmentComponentDefinition
Description
Method that purges unused sketches and work features.
Syntax
WeldmentComponentDefinition.PurgeUnusedGeometries( [UnusedGeometries] As Variant )
Parameters
Name Type Description
UnusedGeometries Variant
Optional input ObjectCollection that including the sketches and work features to purge. The unused sketches and work
features can be retrieved using GetUnusedGeometries method. If this is not provided then all unused sketches and work
features will be purged.
This is an optional argument whose default value is null.
Version
Introduced in version 2024
WeldmentComponentDefinition.RangeBox Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose this object.
Syntax
WeldmentComponentDefinition.RangeBox() As Box
WeldmentComponentDefinition Object Page 21 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 11
WeldmentComponentDefinition.RepresentationsManager Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the RepresentationsManager object.
Syntax
WeldmentComponentDefinition.RepresentationsManager() As RepresentationsManager
Property Value
This is a read only property whose value is a RepresentationsManager.
Version
Introduced in version 11
WeldmentComponentDefinition.RevitExports Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the RevitExports collection object.
Syntax
WeldmentComponentDefinition.RevitExports() As RevitExports
Property Value
This is a read only property whose value is a RevitExports.
Version
Introduced in version 2022
WeldmentComponentDefinition.SetEndOfFeaturesToTopOrBottom
Method
Parent Object: WeldmentComponentDefinition
Description
Sets the End of Part marker to the top or bottom of the browser.
Syntax
WeldmentComponentDefinition.SetEndOfFeaturesToTopOrBottom( SetToTop As Boolean )
WeldmentComponentDefinition Object Page 22 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Parameters
Name Type Description
SetToTop Boolean
Input Boolean that specifies whether the "End of Features" node is to be moved to the top or the bottom of the modeling portion
of the browser. If True, the marker is moved to the top of the browser, just below the Origin folder. If False, it is moved to the
bottom of the browser modeling section of the browser.
Version
Introduced in version 2010
WeldmentComponentDefinition.SetOccurrencesProperty Method
Parent Object: WeldmentComponentDefinition
Description
Method that process the property of a collection of occurrences.
Syntax
WeldmentComponentDefinition.SetOccurrencesProperty( pOccurrences As ObjectCollection, PropertyName As String, Value As Variant )
Parameters
Name Type Description
pOccurrences ObjectCollection
Input ObjectCollection that contains the ComponentOccurrence objects to set the grounded on. The collection can
contain top-level occurrences only, if occurrences within a subassembly are specified then they will be ignored.
PropertyName String Input String that indicates the property of the occurrences to set. Valid properties include: Grounded.
Value Variant
Input value to set for the occurrences for their property. Valid values for the properties are as below:
PropertyName = “Grounded”. Value = Boolean that indicates whether the occurrences are grounded or not. A
value of True indicates that their grounded will be turned on. The Occurrences collection can contain top-level
occurrences only, if occurrences within a subassembly are specified then they will be ignored.
Version
Introduced in version 2022
WeldmentComponentDefinition.SimulationManager Property
Parent Object: WeldmentComponentDefinition
Description
Read-only property that returns the SimulationManager object. This object provides access to the various simulation API’s.
Syntax
WeldmentComponentDefinition.SimulationManager() As SimulationManager
Property Value
This is a read only property whose value is a SimulationManager.
Version
Introduced in version 2013
WeldmentComponentDefinition.Sketches Property
Parent Object: WeldmentComponentDefinition
WeldmentComponentDefinition Object Page 23 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Description
Gets the Sketches collection for this assembly component.
Syntax
WeldmentComponentDefinition.Sketches() As PlanarSketches
Property Value
This is a read only property whose value is a PlanarSketches.
Version
Introduced in version 11
WeldmentComponentDefinition.SuppressFeatures Method
Parent Object: WeldmentComponentDefinition
Description
Property that returns the SurfaceBodies collection. Surface bodies within the assembly is not currently supported by Inventor. The returned
SurfaceBodies collection will be a collection of zero.
Syntax
WeldmentComponentDefinition.SuppressFeatures( Features As ObjectCollection )
Parameters
Name Type Description
Features ObjectCollection Input ObjectCollection that contains the list of features to suppress.
Version
Introduced in version 2009
WeldmentComponentDefinition.SurfaceBodies Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns all of the result SurfaceBody objects contained within this ComponentDefinition.
Syntax
WeldmentComponentDefinition.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 8
WeldmentComponentDefinition.TransformOccurrences Method
Parent Object: WeldmentComponentDefinition
WeldmentComponentDefinition Object Page 24 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Description
Method that transforms a collection of occurrences.
Syntax
WeldmentComponentDefinition.TransformOccurrences( Occurrences As ObjectCollection, Transforms As ObjectCollection,
[IgnoreConstraints] As Boolean )
Parameters
Name Type Description
Occurrences ObjectCollection
Input ObjectCollection that contains the ComponentOccurrence objects to be transformed. The collection can
only contain top level occurrences from the document. An exception is the case of a flexible occurrence within
the top level assembly, in which case, deeper level occurrences may be provided.
Transforms ObjectCollection
Input ObjectCollection that contains Matrix objects defining the transform for the input occurrences. The
collection must have the same number of objects as the number of input occurrences, else the method returns
an error. The collection can also contain a single Matrix, in which case all occurrences are transformed
similarly using the single Matrix.
IgnoreConstraints Boolean
Optional input Boolean which specifies whether to transform the occurrences without re-applying the current
assembly constraints. An update of the Assembly will honor the constraints and ignore these transforms. If not
specified, a default value of False is used (i.e. constraints are honored).
This is an optional argument whose default value is False.
Version
Introduced in version 2009
WeldmentComponentDefinition.Type Property
Parent Object: WeldmentComponentDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WeldmentComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
WeldmentComponentDefinition.UnsuppressFeatures Method
Parent Object: WeldmentComponentDefinition
Description
Method that unsuppresses previously suppressed features.
Syntax
WeldmentComponentDefinition.UnsuppressFeatures( Features As ObjectCollection )
Parameters
Name Type Description
Features ObjectCollection Input ObjectCollection that contains the list of features to unsuppress.
WeldmentComponentDefinition Object Page 25 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2009
WeldmentComponentDefinition.UserCoordinateSystems Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the UserCoordinateSystems collection object.
Syntax
WeldmentComponentDefinition.UserCoordinateSystems() As UserCoordinateSystems
Property Value
This is a read only property whose value is a UserCoordinateSystems.
Version
Introduced in version 2010
WeldmentComponentDefinition.WeldBeadAppearance Property
Parent Object: WeldmentComponentDefinition
Description
Get and sets current appearance used for the weld beads. Setting to Nothing removes the overrides so that the weld bead uses the appearance
associated with the weld material.
Syntax
WeldmentComponentDefinition.WeldBeadAppearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
WeldmentComponentDefinition.WeldBeadAppearanceSourceType
Property
Parent Object: WeldmentComponentDefinition
Description
Gets and sets the source of the appearance for the weld bead. Setting to kMaterialAppearance will clear any overrides so that weld bead use the
appearance associated with the weld material.
Syntax
WeldmentComponentDefinition.WeldBeadAppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
WeldmentComponentDefinition Object Page 26 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2014
WeldmentComponentDefinition.WeldBeadMaterial Property
Parent Object: WeldmentComponentDefinition
Description
Gets and sets the material of the welds.
Syntax
WeldmentComponentDefinition.WeldBeadMaterial() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
WeldmentComponentDefinition.WeldEndFillAppearance Property
Parent Object: WeldmentComponentDefinition
Description
Gets and sets the currrent appearance used for the end caps of a weld. Setting to Nothing removes the overrides so that the caps use same
appearance as the weld beads.
Syntax
WeldmentComponentDefinition.WeldEndFillAppearance() As Asset
Property Value
This is a read/write property whose value is an Asset.
Version
Introduced in version 2014
WeldmentComponentDefinition.WeldEndFillAppearanceSourceType
Property
Parent Object: WeldmentComponentDefinition
Description
Gets and set the source of the appearance for the end caps of a weld bead. Setting to kWeldsAppearance will clear any overrides so that the caps use
same appearance as the weld beads.
Syntax
WeldmentComponentDefinition.WeldEndFillAppearanceSourceType() As AppearanceSourceTypeEnum
Property Value
This is a read/write property whose value is an AppearanceSourceTypeEnum.
WeldmentComponentDefinition Object Page 27 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 2014
WeldmentComponentDefinition.Welds Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the Welds object.
Syntax
WeldmentComponentDefinition.Welds() As Welds
Property Value
This is a read only property whose value is a Welds.
Version
Introduced in version 8
WeldmentComponentDefinition.WeldsComponentDefinition
Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the associated WeldsComponentDefinition object.
Syntax
WeldmentComponentDefinition.WeldsComponentDefinition() As WeldsComponentDefinition
Property Value
This is a read only property whose value is a WeldsComponentDefinition.
Version
Introduced in version 8
WeldmentComponentDefinition.WorkAxes Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the WorkAxes collection object that encapsulates all of the work axes defined in this ComponentDefinition.
Syntax
WeldmentComponentDefinition.WorkAxes() As WorkAxes
Property Value
This is a read only property whose value is a WorkAxes.
WeldmentComponentDefinition Object Page 28 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Version
Introduced in version 8
WeldmentComponentDefinition.WorkPlanes Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the WorkPlanes collection object that encapsulates all of the work planes defined in this ComponentDefinition.
Syntax
WeldmentComponentDefinition.WorkPlanes() As WorkPlanes
Property Value
This is a read only property whose value is a WorkPlanes.
Version
Introduced in version 8
WeldmentComponentDefinition.WorkPoints Property
Parent Object: WeldmentComponentDefinition
Description
Property that returns the WorkPoints collection object that encapsulates all of the work points defined in this ComponentDefinition.
Syntax
WeldmentComponentDefinition.WorkPoints() As WorkPoints
Property Value
This is a read only property whose value is a WorkPoints.
Version
Introduced in version 8
WeldmentComponentDefinition Object Page 29 of 29
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1FD7.htm 17/06/2025
Welds Object
Description
The Welds object provides access to all of the existing welds within a weldment.
Methods
Name Description
Edit Method that activates this object for editing by the user.
ExitEdit
Method that causes the current editing environment to be closed and the user interface to
return to weldment editing environment.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
CosmeticWelds Property that returns the CosmeticWelds object.
Count Property that returns the number of items in this collection.
Item Returns the specified Weld object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
WeldBeads Property that returns the WeldBeads object.
Accessed From
WeldmentComponentDefinition.Welds
Version
Introduced in version 8
Welds.Application Property
Parent Object: Welds
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Welds Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68A7.htm 17/06/2025
Syntax
Welds.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 8
Welds.CosmeticWelds Property
Parent Object: Welds
Description
Property that returns the CosmeticWelds object.
Syntax
Welds.CosmeticWelds() As CosmeticWelds
Property Value
This is a read only property whose value is a CosmeticWelds.
Version
Introduced in version 8
Welds.Count Property
Parent Object: Welds
Description
Property that returns the number of items in this collection.
Welds Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68A7.htm 17/06/2025
Syntax
Welds.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 8
Welds.Edit Method
Parent Object: Welds
Description
Method that activates this object for editing by the user.
Syntax
Welds.Edit()
Version
Introduced in version 2010
Welds.ExitEdit Method
Parent Object: Welds
Description
Method that causes the current editing environment to be closed and the user interface to return to
weldment editing environment.
Syntax
Welds.ExitEdit()
Welds Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68A7.htm 17/06/2025
Version
Introduced in version 2010
Welds.Item Property
Parent Object: Welds
Description
Returns the specified Weld object from the collection.
Syntax
Welds.Item( Index As Variant ) As Weld
Property Value
This is a read only property whose value is a Weld.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the Weld to return. This can be either a numeric
value indicating the index of the item in the collection or it can be a string
indicating the Weld name. If an out of range index or a name of a non-existent
Weld is provided, an error will occur.
Version
Introduced in version 8
Welds.Type Property
Parent Object: Welds
Description
Returns an ObjectTypeEnum indicating this object's type.
Welds Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68A7.htm 17/06/2025
Syntax
Welds.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 8
Welds.WeldBeads Property
Parent Object: Welds
Description
Property that returns the WeldBeads object.
Syntax
Welds.WeldBeads() As WeldBeads
Property Value
This is a read only property whose value is a WeldBeads.
Version
Introduced in version 8
Welds Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh68A7.htm 17/06/2025
WeldsComponentDefinition Object
Derived from: ComponentDefinition Object
Description
The WeldsComponentDefinition object derives from the PartComponentDefinition object. It adds weld-specific behavior
to the PartComponentDefinition.
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
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
AttributeSets Property that returns the AttributeSets collection object associated with this object.
BOMQuantity Property that returns the BOMQuantity object.
BOMStructure Gets and sets how the component is used/viewed in a BOM.
ClientGraphicsCollection Property that returns the ClientGraphicsCollection object.
DataIO
Gets the object that directly deals with I/O to and from a storage-medium, including
Streams(IStream).
Document Property that returns the containing Document object.
ModelGeometryVersion
Property that returns a string that can be used to determine if the document has been
modified. This version string is changed every time the assembly is modified. By saving a
previous version string, you can compare the current version string to see if the assembly
has been modified.
Occurrences Property that returns the collection object.
OrientedMinimumRangeBox Read-only property that returns the oriented minimum range box for this object.
PreciseRangeBox
Gets a bounding box that tightly encloses all the solid and surface bodies under the
ComponentDefinition.
RangeBox
Property that returns a Box object which contains the opposing points of a rectangular box
that is guaranteed to enclose this object.
SurfaceBodies
Property that returns all of the result SurfaceBody objects contained within this
ComponentDefinition.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
WeldmentComponentDefinition.WeldsComponentDefinition
Version
Introduced in version 6
WeldsComponentDefinition Object Page 1 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
WeldsComponentDefinition.Application Property
Parent Object: WeldsComponentDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned.
When used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
WeldsComponentDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2010
WeldsComponentDefinition.AttributeSets Property
Parent Object: WeldsComponentDefinition
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WeldsComponentDefinition.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 6
WeldsComponentDefinition.BOMQuantity Property
Parent Object: WeldsComponentDefinition
Description
Property that returns the BOMQuantity object.
Syntax
WeldsComponentDefinition.BOMQuantity() As BOMQuantity
WeldsComponentDefinition Object Page 2 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Property Value
This is a read only property whose value is a BOMQuantity.
Version
Introduced in version 10
WeldsComponentDefinition.BOMStructure Property
Parent Object: WeldsComponentDefinition
Description
Gets and sets how the component is used/viewed in a BOM.
Syntax
WeldsComponentDefinition.BOMStructure() As BOMStructureEnum
Property Value
This is a read/write property whose value is a BOMStructureEnum.
Version
Introduced in version 10
WeldsComponentDefinition.ClientGraphicsCollection
Property
Parent Object: WeldsComponentDefinition
Description
Property that returns the ClientGraphicsCollection object.
Syntax
WeldsComponentDefinition.ClientGraphicsCollection() As ClientGraphicsCollection
Property Value
This is a read only property whose value is a ClientGraphicsCollection.
Version
Introduced in version 6
WeldsComponentDefinition.DataIO Property
WeldsComponentDefinition Object Page 3 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Parent Object: WeldsComponentDefinition
Description
Gets the object that directly deals with I/O to and from a storage-medium, including Streams(IStream).
Syntax
WeldsComponentDefinition.DataIO() As DataIO
Property Value
This is a read only property whose value is a DataIO.
Version
Introduced in version 6
WeldsComponentDefinition.Document Property
Parent Object: WeldsComponentDefinition
Description
Property that returns the containing Document object.
Syntax
WeldsComponentDefinition.Document() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
WeldsComponentDefinition.FindUsingPoint Method
Parent Object: WeldsComponentDefinition
Description
Method that finds all the entities of the specified type at the specified location.
Syntax
WeldsComponentDefinition.FindUsingPoint( Point As Point, ObjectTypes() As SelectionFilterEnum,
[ProximityTolerance] As Variant, [VisibleObjectsOnly] As Boolean ) As ObjectsEnumerator
Parameters
WeldsComponentDefinition Object Page 4 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Name Type Description
Point Point
Input Point object that specifies the model space point at which to find the
entities.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to
find. The values are the enum values from the SelectionFilterEnum and can be
combined to specify multiple object types.
ProximityTolerance Variant
Input Double that specifies the tolerance value for the search. This value
defines the radius of a sphere at the input point. All objects that intersect this
sphere will be returned. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean
Optional input Boolean that indicates whether or not invisible objects should be
included in the search. Defaults to True indicating that invisible objects will be
ignored.
This is an optional argument whose default value is True.
Version
Introduced in version 2009
WeldsComponentDefinition.FindUsingVector Method
Parent Object: WeldsComponentDefinition
Description
Method that finds all the entities of the specified type along the specified vector using either a cylinder or cone that to
define the tolerance within the defined vector.
Syntax
WeldsComponentDefinition.FindUsingVector( OriginPoint As Point, Direction As UnitVector, ObjectTypes() As
SelectionFilterEnum, [UseCylinder] As Boolean, [ProximityTolerance] As Variant, [VisibleObjectsOnly] As Boolean,
[LocationPoints] As Variant ) As ObjectsEnumerator
Parameters
Name Type Description
OriginPoint Point Input Point that defines the model space location to position the vector.
Direction UnitVector
Input UnitVector that defines direction to find all entities that the vector
penetrates. The vector is treated as infinite in both directions from the origin
point so all entities that lie in the path of the vector on either side of the origin
point will be returned.
ObjectTypes SelectionFilterEnum
Input array of SelelctionFilterEnum values that indicate the type of objects to
find. The values are the enum values from the SelectionFilterEnum and can be
combined to specify multiple object types.
UseCylinder Boolean
Input argument that specifies if the vector defines a cylinder or cone when
checking to see if an entity is hit by the ray.
This is an optional argument whose default value is True.
ProximityTolerance Variant
Optional input Double that specifies the tolerance value for the search. This
value defines the radius of a cylinder if UseCylinder is True or the angle of the
cone if False. If not specified, the default internal tolerance is used.
This is an optional argument whose default value is null.
VisibleObjectsOnly Boolean Optional input Boolean that indicates whether or not invisible objects should be
included in the search. Defaults to True indicating that invisible objects will be
WeldsComponentDefinition Object Page 5 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
ignored.
This is an optional argument whose default value is True.
LocationPoints Variant
Optional output that returns a set of Point objects. One Point object is returned
for each entity in the FoundEntities list. The point defines the coordinate of the
intersection between the vector and the corresponding entity.
This is an optional argument whose default value is null.
Version
Introduced in version 2011
WeldsComponentDefinition.GetUnusedGeometries
Method
Parent Object: WeldsComponentDefinition
Description
Method that gets the unused sketches and work features.
Syntax
WeldsComponentDefinition.GetUnusedGeometries( UnusedGeometries As ObjectCollection )
Parameters
Name Type Description
UnusedGeometries ObjectCollection Output ObjectCollection object the includes the unused sketches and work features.
Version
Introduced in version 2024
WeldsComponentDefinition.ModelGeometryVersion
Property
Parent Object: WeldsComponentDefinition
Description
Property that returns a string that can be used to determine if the document has been modified. This version string is
changed every time the assembly is modified. By saving a previous version string, you can compare the current version
string to see if the assembly has been modified.
Syntax
WeldsComponentDefinition.ModelGeometryVersion() As String
WeldsComponentDefinition Object Page 6 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 6
WeldsComponentDefinition.Occurrences Property
Parent Object: WeldsComponentDefinition
Description
Property that returns the collection object.
Syntax
WeldsComponentDefinition.Occurrences() As ComponentOccurrences
Property Value
This is a read only property whose value is a ComponentOccurrences.
Version
Introduced in version 6
WeldsComponentDefinition.OrientedMinimumRangeBox
Property
Parent Object: WeldsComponentDefinition
Description
Read-only property that returns the oriented minimum range box for this object.
Syntax
WeldsComponentDefinition.OrientedMinimumRangeBox() As OrientedBox
Property Value
This is a read only property whose value is an OrientedBox.
Version
Introduced in version 2024
WeldsComponentDefinition.PreciseRangeBox Property
WeldsComponentDefinition Object Page 7 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Parent Object: WeldsComponentDefinition
Description
Gets a bounding box that tightly encloses all the solid and surface bodies under the ComponentDefinition.
Syntax
WeldsComponentDefinition.PreciseRangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 2023
WeldsComponentDefinition.PurgeUnusedGeometries
Method
Parent Object: WeldsComponentDefinition
Description
Method that purges unused sketches and work features.
Syntax
WeldsComponentDefinition.PurgeUnusedGeometries( [UnusedGeometries] As Variant )
Parameters
Name Type Description
UnusedGeometries Variant
Optional input ObjectCollection that including the sketches and work features to purge. The
unused sketches and work features can be retrieved using GetUnusedGeometries method. If
this is not provided then all unused sketches and work features will be purged.
This is an optional argument whose default value is null.
Version
Introduced in version 2024
WeldsComponentDefinition.RangeBox Property
Parent Object: WeldsComponentDefinition
Description
Property that returns a Box object which contains the opposing points of a rectangular box that is guaranteed to enclose
this object.
WeldsComponentDefinition Object Page 8 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
Syntax
WeldsComponentDefinition.RangeBox() As Box
Property Value
This is a read only property whose value is a Box.
Version
Introduced in version 11
WeldsComponentDefinition.SurfaceBodies Property
Parent Object: WeldsComponentDefinition
Description
Property that returns all of the result SurfaceBody objects contained within this ComponentDefinition.
Syntax
WeldsComponentDefinition.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Version
Introduced in version 6
WeldsComponentDefinition.Type Property
Parent Object: WeldsComponentDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WeldsComponentDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
WeldsComponentDefinition Object Page 9 of 9
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8883.htm 17/06/2025
WeldSymbol Object
Description
WeldSymbol Object.
Properties
Name Description
Angle Gets and sets the angle between weldments.
Application
Gets the root Application object. Where the property is weaklytyped,
it can be set to (QueryInterfaced for) 'Application' when
running with Inventor whereas, 'ApprenticeServer' when running
with the Apprentice Server.
Brazing Gets and sets whether the weld is brazed.
Clearance Gets and sets the clearance for the braze.
Contour Gets and sets the contour finish type for the weld.
CountersinkAngle Gets and sets the hole countersink angle of the plug weld.
Depth Gets and sets the depth of the weld.
Diameter Gets and sets the diameter of the weld.
EitherSide Gets and sets the either side of the weld.
EnableSecondaryFilletWeld Gets and sets whether to enable the secondary fillet weld or not.
FillingDepth Gets and sets the hole filling depth of the plug weld.
Gap Gets and sets the space between weldments.
Height Gets and sets the height of the weld.
IncludedAngle Gets and sets the groove included angle of the butt weld.
Leg1 Gets and sets the text for leg1.
Leg2 Gets and sets the text for leg2.
Length Gets and sets the length of the weld.
Method Gets and sets the contour finish method for the weld.
Number Gets and sets the number of welds.
Parent
Gets the parent object from whom this object can logically be
reached.
PenetrationDepth Gets and sets the penetration depth of the weld.
Pitch Gets and sets the distance between welds.
Prefix Gets and sets the prefix to precede the symbol.
PreparationDepth Gets and sets the preparation depth of the butt weld.
Root Gets and sets the root thickness of the weld.
RootGap Gets and sets the gap for the weld.
SecondaryWeldSymbol Returns the WeldSymbol object indicating the secondary fillet weld.
SizeOrStrength Gets and sets the size or strength of the weld.
Spacing Gets and sets the space between welds.
WeldSymbol Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Test Gets and sets the test of the weld.
Thickness Gets and sets the thickness of the weld.
Type Gets the constant that indicates the type of this object.
WeldSymbolType
Gets and sets the weld symbol type. This can be a value of
WeldSymbolTypeEnum or BackingSymbolTypeEnum.
Width Gets and sets the width of the weld.
Accessed From
DrawingWeldingSymbolDefinition.WeldSymbolOne,
DrawingWeldingSymbolDefinition.WeldSymbolTwo,
ModelWeldingSymbolDefinition.WeldSymbolOne,
ModelWeldingSymbolDefinition.WeldSymbolTwo, WeldSymbol.SecondaryWeldSymbol
Version
Introduced in version 2024
WeldSymbol.Angle Property
Parent Object: WeldSymbol
Description
Gets and sets the angle between weldments.
Syntax
WeldSymbol.Angle() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Application Property
Parent Object: WeldSymbol
WeldSymbol Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
WeldSymbol.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
WeldSymbol.Brazing Property
Parent Object: WeldSymbol
Description
Gets and sets whether the weld is brazed.
Syntax
WeldSymbol.Brazing() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbol.Clearance Property
Parent Object: WeldSymbol
WeldSymbol Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Description
Gets and sets the clearance for the braze.
Syntax
WeldSymbol.Clearance() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Contour Property
Parent Object: WeldSymbol
Description
Gets and sets the contour finish type for the weld.
Syntax
WeldSymbol.Contour() As ContourSymbolTypeEnum
Property Value
This is a read/write property whose value is a ContourSymbolTypeEnum.
Version
Introduced in version 2024
WeldSymbol.CountersinkAngle Property
Parent Object: WeldSymbol
Description
WeldSymbol Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Gets and sets the hole countersink angle of the plug weld.
Syntax
WeldSymbol.CountersinkAngle() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Depth Property
Parent Object: WeldSymbol
Description
Gets and sets the depth of the weld.
Syntax
WeldSymbol.Depth() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Diameter Property
Parent Object: WeldSymbol
Description
Gets and sets the diameter of the weld.
WeldSymbol Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Diameter() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.EitherSide Property
Parent Object: WeldSymbol
Description
Gets and sets the either side of the weld.
Syntax
WeldSymbol.EitherSide() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.EnableSecondaryFilletWeld
Property
Parent Object: WeldSymbol
Description
Gets and sets whether to enable the secondary fillet weld or not.
WeldSymbol Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.EnableSecondaryFilletWeld() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbol.FillingDepth Property
Parent Object: WeldSymbol
Description
Gets and sets the hole filling depth of the plug weld.
Syntax
WeldSymbol.FillingDepth() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Gap Property
Parent Object: WeldSymbol
Description
Gets and sets the space between weldments.
WeldSymbol Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Gap() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Height Property
Parent Object: WeldSymbol
Description
Gets and sets the height of the weld.
Syntax
WeldSymbol.Height() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.IncludedAngle Property
Parent Object: WeldSymbol
Description
Gets and sets the groove included angle of the butt weld.
WeldSymbol Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.IncludedAngle() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Leg1 Property
Parent Object: WeldSymbol
Description
Gets and sets the text for leg1.
Syntax
WeldSymbol.Leg1() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Leg2 Property
Parent Object: WeldSymbol
Description
Gets and sets the text for leg2.
WeldSymbol Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Leg2() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Length Property
Parent Object: WeldSymbol
Description
Gets and sets the length of the weld.
Syntax
WeldSymbol.Length() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Method Property
Parent Object: WeldSymbol
Description
Gets and sets the contour finish method for the weld.
WeldSymbol Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Method() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Number Property
Parent Object: WeldSymbol
Description
Gets and sets the number of welds.
Syntax
WeldSymbol.Number() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Parent Property
Parent Object: WeldSymbol
Description
Gets the parent object from whom this object can logically be reached.
WeldSymbol Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
WeldSymbol.PenetrationDepth Property
Parent Object: WeldSymbol
Description
Gets and sets the penetration depth of the weld.
Syntax
WeldSymbol.PenetrationDepth() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Pitch Property
Parent Object: WeldSymbol
Description
Gets and sets the distance between welds.
WeldSymbol Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Pitch() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Prefix Property
Parent Object: WeldSymbol
Description
Gets and sets the prefix to precede the symbol.
Syntax
WeldSymbol.Prefix() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.PreparationDepth Property
Parent Object: WeldSymbol
Description
Gets and sets the preparation depth of the butt weld.
WeldSymbol Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.PreparationDepth() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Root Property
Parent Object: WeldSymbol
Description
Gets and sets the root thickness of the weld.
Syntax
WeldSymbol.Root() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.RootGap Property
Parent Object: WeldSymbol
Description
Gets and sets the gap for the weld.
WeldSymbol Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.RootGap() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.SecondaryWeldSymbol
Property
Parent Object: WeldSymbol
Description
Returns the WeldSymbol object indicating the secondary fillet weld.
Syntax
WeldSymbol.SecondaryWeldSymbol() As WeldSymbol
Property Value
This is a read only property whose value is a WeldSymbol.
Version
Introduced in version 2024
WeldSymbol.SizeOrStrength Property
Parent Object: WeldSymbol
Description
Gets and sets the size or strength of the weld.
WeldSymbol Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.SizeOrStrength() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Spacing Property
Parent Object: WeldSymbol
Description
Gets and sets the space between welds.
Syntax
WeldSymbol.Spacing() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Test Property
Parent Object: WeldSymbol
Description
Gets and sets the test of the weld.
WeldSymbol Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Test() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Thickness Property
Parent Object: WeldSymbol
Description
Gets and sets the thickness of the weld.
Syntax
WeldSymbol.Thickness() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol.Type Property
Parent Object: WeldSymbol
Description
Gets the constant that indicates the type of this object.
WeldSymbol Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
WeldSymbol.WeldSymbolType Property
Parent Object: WeldSymbol
Description
Gets and sets the weld symbol type. This can be a value of WeldSymbolTypeEnum or
BackingSymbolTypeEnum.
Syntax
WeldSymbol.WeldSymbolType() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2024
WeldSymbol.Width Property
Parent Object: WeldSymbol
Description
Gets and sets the width of the weld.
WeldSymbol Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
Syntax
WeldSymbol.Width() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbol Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hhAA25.htm 17/06/2025
WeldSymbolStyle Object
Derived from: Style Object
Description
WeldSymbolStyle object.
Methods
Name Description
ConvertToLocal
Method that creates a local cached copy of a global style and returns the local
style.
Copy Method that creates a new local Style object. The newly created style is returned.
Delete Method that deletes the Style/Layer/UnfoldMethod.
GetBackingSymbolsFilter Method that gets the backing symbol filter.
GetContourSymbolFilterVariationType Gets the variation type of a contour symbol filter.
GetContourSymbolsFilter Method that gets the contour symbol filter.
GetIdentificationLineCustomLineType Gets information regarding the custom line type in use for identification line.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetWeldingSymbolFilterVariationType Gets the variation type of a welding symbol filter.
GetWeldingSymbolsFilter Method that gets the welding symbol filter.
SaveToGlobal
Method that saves this style to the global repository. If a style with the same name
is found in the repository, that style is updated.
SetBackingSymbolsFilter Method that sets the backing symbol filter.
SetContourSymbolFilterVariationType Sets the variation type of a contour symbol filter.
SetContourSymbolsFilter Method that sets the contour symbol filter.
SetIdentificationLineCustomLineType Sets a custom line type to the identification line from the specified .lin file.
SetWeldingSymbolFilterVariationType Sets the variation type of a welding symbol filter.
SetWeldingSymbolsFilter Method that sets the welding symbol filter.
UpdateFromGlobal Method that updates this style from the global repository.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor, an
Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
ArrowSidePositionAbove Gets and sets whether the arrow side position if above or below the reference line.
Comments Gets and sets comments associated with the style.
FieldFlagDirection Gets and sets the field weld symbol flag direction.
IdentificationLineOffset Gets and sets the distance between the identification line and weld symbol.
IdentificationLinePlacement Gets and sets the default identification line placement.
IdentificationLineType Gets and sets the default identification line type.
InternalName
Property that returns the internal name of the style. The name is the internal English name
of the standard style. This name will remain constant and is not affected by locale. This
name is never displayed to the user. Note that this name is not guaranteed to be unique.
InUse Property that indicates if this style is in use.
JustifyTextToLeader Gets and sets whether justifies the text to leader or not.
LeaderStyle Gets and sets the leader style used for the weld symbol style.
Name Gets/Sets the name of the Style.
Parent Property returning the parent of this object.
StyleLocation
Property that returns the location of this style, i.e. local to the document, cached locally in
the document, exists in the library. Styles that exist in the library cannot be edited.
WeldSymbolStyle Object Page 1 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
StyleType Gets the type of the style.
SymbolSizeLinkToTextHeight Gets and sets whether the symbol size is linked to text height or not.
SymbolSizeScaleFactor Gets and sets the symbol size scale factor. Scale factor must be between 0.5 and 2.00.
TextStyle Gets and sets the text style used for the weld symbol style.
Type Returns an ObjectTypeEnum indicating this object's type.
UpToDate Property that gets the up-to-date status of the style against the global repository.
Accessed From
DrawingWeldingSymbol.Style, ObjectDefaultsStyle.WeldSymbolStyle, WeldSymbolStylesEnumerator.Item
Version
Introduced in version 2024
WeldSymbolStyle.Application Property
Parent Object: WeldSymbolStyle
Description
Returns the top-level parent application object. When used the context of Inventor, an Application object is returned. When
used in the context of Apprentice, an ApprenticeServer object is returned.
Syntax
WeldSymbolStyle.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
WeldSymbolStyle.ArrowSidePositionAbove Property
Parent Object: WeldSymbolStyle
Description
Gets and sets whether the arrow side position if above or below the reference line.
Syntax
WeldSymbolStyle.ArrowSidePositionAbove() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WeldSymbolStyle Object Page 2 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Version
Introduced in version 2024
WeldSymbolStyle.Comments Property
Parent Object: WeldSymbolStyle
Description
Gets and sets comments associated with the style.
Syntax
WeldSymbolStyle.Comments() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 2024
WeldSymbolStyle.ConvertToLocal Method
Parent Object: WeldSymbolStyle
Description
Method that creates a local cached copy of a global style and returns the local style.
Syntax
WeldSymbolStyle.ConvertToLocal() As Style
Version
Introduced in version 2024
WeldSymbolStyle.Copy Method
Parent Object: WeldSymbolStyle
Description
Method that creates a new local Style object. The newly created style is returned.
Syntax
WeldSymbolStyle.Copy( Name As String ) As Style
WeldSymbolStyle Object Page 3 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Parameters
Name Type Description
Name String
Input String that specifies the name for the new style. This name must be unique with respect to all other
styles of a similar type in the document. That is, if a dimension style is being copied, the name must be
unique with respect to all the other dimension styles. If it is not unique the method will fail.
Version
Introduced in version 2024
WeldSymbolStyle.Delete Method
Parent Object: WeldSymbolStyle
Description
Method that deletes the Style/Layer/UnfoldMethod.
Syntax
WeldSymbolStyle.Delete()
Version
Introduced in version 2024
WeldSymbolStyle.FieldFlagDirection Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the field weld symbol flag direction.
Syntax
WeldSymbolStyle.FieldFlagDirection() As FieldFlagDirectionTypeEnum
Property Value
This is a read/write property whose value is a FieldFlagDirectionTypeEnum.
Version
Introduced in version 2024
WeldSymbolStyle.GetBackingSymbolsFilter Method
Parent Object: WeldSymbolStyle
WeldSymbolStyle Object Page 4 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Description
Method that gets the backing symbol filter.
Syntax
WeldSymbolStyle.GetBackingSymbolsFilter( BackingSymbolFilter() As BackingSymbolTypeEnum )
Parameters
Name Type Description
BackingSymbolFilter BackingSymbolTypeEnum
Output an array of BackingSymbolsTypeEnum indicating available
backing symbols.
Version
Introduced in version 2024
WeldSymbolStyle.GetContourSymbolFilterVariationType
Method
Parent Object: WeldSymbolStyle
Description
Gets the variation type of a contour symbol filter.
Syntax
WeldSymbolStyle.GetContourSymbolFilterVariationType( ContourSymbolFilter As ContourSymbolTypeEnum ) As
ContourSymbolVariationTypeEnum
Parameters
Name Type Description
ContourSymbolFilter ContourSymbolTypeEnum Input ContourSymbolTypeEnum to specify a contour symbol filter.
Version
Introduced in version 2024
WeldSymbolStyle.GetContourSymbolsFilter Method
Parent Object: WeldSymbolStyle
Description
Method that gets the contour symbol filter.
Syntax
WeldSymbolStyle.GetContourSymbolsFilter( ContourSymbolFilter() As ContourSymbolTypeEnum )
WeldSymbolStyle Object Page 5 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Parameters
Name Type Description
ContourSymbolFilter ContourSymbolTypeEnum
Input an array of ContourSymbolTypeEnum values to set contour
symbol filter.
Version
Introduced in version 2024
WeldSymbolStyle.GetIdentificationLineCustomLineType
Method
Parent Object: WeldSymbolStyle
Description
Gets information regarding the custom line type in use for identification line.
Syntax
WeldSymbolStyle.GetIdentificationLineCustomLineType( LineTypeName As String, LineTypeDescription As String )
As LineTypeEnum
Parameters
Name Type Description
LineTypeName String Output String value that indicates the line type name.
LineTypeDescription String Output String value that indicates the line type description.
Version
Introduced in version 2024
WeldSymbolStyle.GetReferenceKey Method
Parent Object: WeldSymbolStyle
Description
Method that generates and returns the reference key for this entity.
Syntax
WeldSymbolStyle.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long Input Long that specifies the key context. The key context must be supplied when working with any
B-Rep entities (and SurfaceBody, FaceShell, Face, Edge, EdgeUse and Vertex objects). A key context
is created using the CreateKeyContext method of the ReferenceKeyManager object. For all other
WeldSymbolStyle Object Page 6 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
object types, the key context argument is not used and is ignored if provided.
This is an optional argument whose default value is 0.
Version
Introduced in version 2024
WeldSymbolStyle.GetWeldingSymbolFilterVariationType
Method
Parent Object: WeldSymbolStyle
Description
Gets the variation type of a welding symbol filter.
Syntax
WeldSymbolStyle.GetWeldingSymbolFilterVariationType( WeldingSymbolFilter As WeldSymbolTypeEnum ) As
WeldSymbolVariationTypeEnum
Parameters
Name Type Description
WeldingSymbolFilter WeldSymbolTypeEnum Input WeldSymbolTypeEnum to specify a welding symbol filter.
Version
Introduced in version 2024
WeldSymbolStyle.GetWeldingSymbolsFilter Method
Parent Object: WeldSymbolStyle
Description
Method that gets the welding symbol filter.
Syntax
WeldSymbolStyle.GetWeldingSymbolsFilter( WeldingSymbolFilter() As WeldSymbolTypeEnum )
Parameters
Name Type Description
WeldingSymbolFilter WeldSymbolTypeEnum
Output an array of WeldSymbolTypeEnum indicating available welding
symbols.
Version
Introduced in version 2024
WeldSymbolStyle Object Page 7 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
WeldSymbolStyle.IdentificationLineOffset Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the distance between the identification line and weld symbol.
Syntax
WeldSymbolStyle.IdentificationLineOffset() As Double
Property Value
This is a read/write property whose value is a Double.
Version
Introduced in version 2024
WeldSymbolStyle.IdentificationLinePlacement Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the default identification line placement.
Syntax
WeldSymbolStyle.IdentificationLinePlacement() As IdentificationLinePlacementEnum
Property Value
This is a read/write property whose value is an IdentificationLinePlacementEnum.
Version
Introduced in version 2024
WeldSymbolStyle.IdentificationLineType Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the default identification line type.
Syntax
WeldSymbolStyle.IdentificationLineType() As LineTypeEnum
WeldSymbolStyle Object Page 8 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Property Value
This is a read/write property whose value is a LineTypeEnum.
Version
Introduced in version 2024
WeldSymbolStyle.InternalName Property
Parent Object: WeldSymbolStyle
Description
Property that returns the internal name of the style. The name is the internal English name of the standard style. This name
will remain constant and is not affected by locale. This name is never displayed to the user. Note that this name is not
guaranteed to be unique.
Syntax
WeldSymbolStyle.InternalName() As String
Property Value
This is a read only property whose value is a String.
Version
Introduced in version 2024
WeldSymbolStyle.InUse Property
Parent Object: WeldSymbolStyle
Description
Property that indicates if this style is in use.
Syntax
WeldSymbolStyle.InUse() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbolStyle.JustifyTextToLeader Property
WeldSymbolStyle Object Page 9 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Parent Object: WeldSymbolStyle
Description
Gets and sets whether justifies the text to leader or not.
Syntax
WeldSymbolStyle.JustifyTextToLeader() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbolStyle.LeaderStyle Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the leader style used for the weld symbol style.
Syntax
WeldSymbolStyle.LeaderStyle() As LeaderStyle
Property Value
This is a read/write property whose value is a LeaderStyle.
Version
Introduced in version 2024
WeldSymbolStyle.Name Property
Parent Object: WeldSymbolStyle
Description
Gets/Sets the name of the Style.
Syntax
WeldSymbolStyle.Name() As String
Property Value
This is a read/write property whose value is a String.
WeldSymbolStyle Object Page 10 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Version
Introduced in version 2024
WeldSymbolStyle.Parent Property
Parent Object: WeldSymbolStyle
Description
Property returning the parent of this object.
Syntax
WeldSymbolStyle.Parent() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
WeldSymbolStyle.SaveToGlobal Method
Parent Object: WeldSymbolStyle
Description
Method that saves this style to the global repository. If a style with the same name is found in the repository, that style is
updated.
Syntax
WeldSymbolStyle.SaveToGlobal()
Version
Introduced in version 2024
WeldSymbolStyle.SetBackingSymbolsFilter Method
Parent Object: WeldSymbolStyle
Description
Method that sets the backing symbol filter.
Syntax
WeldSymbolStyle.SetBackingSymbolsFilter( BackingSymbolFilter() As BackingSymbolTypeEnum )
WeldSymbolStyle Object Page 11 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Parameters
Name Type Description
BackingSymbolFilter BackingSymbolTypeEnum
Input an array of BackingSymbolsTypeEnum values to set backing
symbol filter.
Version
Introduced in version 2024
WeldSymbolStyle.SetContourSymbolFilterVariationType
Method
Parent Object: WeldSymbolStyle
Description
Sets the variation type of a contour symbol filter.
Syntax
WeldSymbolStyle.SetContourSymbolFilterVariationType( ContourSymbolFilter As ContourSymbolTypeEnum,
ContourSymbolVariation As ContourSymbolVariationTypeEnum )
Parameters
Name Type Description
ContourSymbolFilter ContourSymbolTypeEnum
Input ContourSymbolTypeEnum to specify a contour
symbol filter.
ContourSymbolVariation ContourSymbolVariationTypeEnum
Intput ContourSymbolVariationTypeEnum value that
indicates the included contour symbol filter variation type.
Version
Introduced in version 2024
WeldSymbolStyle.SetContourSymbolsFilter Method
Parent Object: WeldSymbolStyle
Description
Method that sets the contour symbol filter.
Syntax
WeldSymbolStyle.SetContourSymbolsFilter( ContourSymbolFilter() As ContourSymbolTypeEnum )
Parameters
Name Type Description
ContourSymbolFilter ContourSymbolTypeEnum
Input an array of ContourSymbolTypeEnum values to set contour
symbol filter.
WeldSymbolStyle Object Page 12 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Version
Introduced in version 2024
WeldSymbolStyle.SetIdentificationLineCustomLineType
Method
Parent Object: WeldSymbolStyle
Description
Sets a custom line type to the identification line from the specified .lin file.
Syntax
WeldSymbolStyle.SetIdentificationLineCustomLineType( FullFileName As String, LineTypeName As String,
ReplaceExisting As Boolean )
Parameters
Name Type Description
FullFileName String Input string that specifies the full file name of the *.lin file containing the custom line types.
LineTypeName String Input string that specifies the name of the line type.
ReplaceExisting Boolean
Input Boolean that specifies whether to replace the existing line type if a line type of the same
name exists. If set to False, and a line type of the same name exists, this method returns an error.
Version
Introduced in version 2024
WeldSymbolStyle.SetWeldingSymbolFilterVariationType
Method
Parent Object: WeldSymbolStyle
Description
Sets the variation type of a welding symbol filter.
Syntax
WeldSymbolStyle.SetWeldingSymbolFilterVariationType( WeldingSymbolFilter As WeldSymbolTypeEnum,
WeldingSymbolVariation As WeldSymbolVariationTypeEnum )
Parameters
Name Type Description
WeldingSymbolFilter WeldSymbolTypeEnum
Input WeldSymbolTypeEnum to specify a welding symbol
filter.
WeldingSymbolVariation WeldSymbolVariationTypeEnum
Intput WeldingSymbolVariationTypeEnum value that
indicates the included welding symbol filter variation type.
WeldSymbolStyle Object Page 13 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Version
Introduced in version 2024
WeldSymbolStyle.SetWeldingSymbolsFilter Method
Parent Object: WeldSymbolStyle
Description
Method that sets the welding symbol filter.
Syntax
WeldSymbolStyle.SetWeldingSymbolsFilter( WeldingSymbolFilter() As WeldSymbolTypeEnum )
Parameters
Name Type Description
WeldingSymbolFilter WeldSymbolTypeEnum
Input an array of WeldSymbolTypeEnum values to set welding symbol
filter.
Version
Introduced in version 2024
WeldSymbolStyle.StyleLocation Property
Parent Object: WeldSymbolStyle
Description
Property that returns the location of this style, i.e. local to the document, cached locally in the document, exists in the
library. Styles that exist in the library cannot be edited.
Syntax
WeldSymbolStyle.StyleLocation() As StyleLocationEnum
Property Value
This is a read only property whose value is a StyleLocationEnum.
Version
Introduced in version 2024
WeldSymbolStyle.StyleType Property
Parent Object: WeldSymbolStyle
WeldSymbolStyle Object Page 14 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Description
Gets the type of the style.
Syntax
WeldSymbolStyle.StyleType() As StyleTypeEnum
Property Value
This is a read only property whose value is a StyleTypeEnum.
Version
Introduced in version 2024
WeldSymbolStyle.SymbolSizeLinkToTextHeight
Property
Parent Object: WeldSymbolStyle
Description
Gets and sets whether the symbol size is linked to text height or not.
Syntax
WeldSymbolStyle.SymbolSizeLinkToTextHeight() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbolStyle.SymbolSizeScaleFactor Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the symbol size scale factor. Scale factor must be between 0.5 and 2.00.
Syntax
WeldSymbolStyle.SymbolSizeScaleFactor() As Double
Property Value
This is a read/write property whose value is a Double.
WeldSymbolStyle Object Page 15 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Version
Introduced in version 2024
WeldSymbolStyle.TextStyle Property
Parent Object: WeldSymbolStyle
Description
Gets and sets the text style used for the weld symbol style.
Syntax
WeldSymbolStyle.TextStyle() As TextStyle
Property Value
This is a read/write property whose value is a TextStyle.
Version
Introduced in version 2024
WeldSymbolStyle.Type Property
Parent Object: WeldSymbolStyle
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WeldSymbolStyle.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
WeldSymbolStyle.UpdateFromGlobal Method
Parent Object: WeldSymbolStyle
Description
Method that updates this style from the global repository.
WeldSymbolStyle Object Page 16 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
Syntax
WeldSymbolStyle.UpdateFromGlobal()
Version
Introduced in version 2024
WeldSymbolStyle.UpToDate Property
Parent Object: WeldSymbolStyle
Description
Property that gets the up-to-date status of the style against the global repository.
Syntax
WeldSymbolStyle.UpToDate() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2024
WeldSymbolStyle Object Page 17 of 17
file:///C:/Users/Cliente/AppData/Local/Temp/~hhEA1C.htm 17/06/2025
WeldSymbolStylesEnumerator Object
Description
WeldSymbolStylesEnumerator object.
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
DrawingStylesManager.WeldSymbolStyles
Version
Introduced in version 2024
WeldSymbolStylesEnumerator.Application
Property
Parent Object: WeldSymbolStylesEnumerator
Description
Gets the root Application object. Where the property is weakly-typed, it can be set to
(QueryInterfaced for) 'Application' when running with Inventor whereas, 'ApprenticeServer' when
running with the Apprentice Server.
Syntax
WeldSymbolStylesEnumerator.Application() As Object
WeldSymbolStylesEnumerator Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AFF.htm 17/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2024
WeldSymbolStylesEnumerator.Count
Property
Parent Object: WeldSymbolStylesEnumerator
Description
Gets the number of items in this collection.
Syntax
WeldSymbolStylesEnumerator.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2024
WeldSymbolStylesEnumerator.Item Property
Parent Object: WeldSymbolStylesEnumerator
Description
Allows VARIANT-indexed access to items in the collection. You can use names as indexes as
well.
Syntax
WeldSymbolStylesEnumerator.Item( Index As Variant ) As WeldSymbolStyle
WeldSymbolStylesEnumerator Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AFF.htm 17/06/2025
Property Value
This is a read only property whose value is a WeldSymbolStyle.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the WeldSymbolStyle to return. This can be
either a numeric value indicating the index of the item in the collection or it can be
a string indicating the WeldSymbolStyle name. If an out of range index or a name
of a non-existent WeldSymbolStyle is provided, an error will occur.
Version
Introduced in version 2024
WeldSymbolStylesEnumerator.Type Property
Parent Object: WeldSymbolStylesEnumerator
Description
Gets the constant that indicates the type of this object.
Syntax
WeldSymbolStylesEnumerator.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2024
WeldSymbolStylesEnumerator Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh1AFF.htm 17/06/2025
WidthOffsetWidthExtent Object
Derived from: PartFeatureExtent Object
Description
The WidthOffsetWidthExtent is used by sheet metal features when the position of a width defined
feature is relative to another entity.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Edge Property that gets the Edge object that the width is defined relative to.
OffsetDistance
Property that returns the parameter controlling the distance of the flange from
the offset entity.
OffsetEntity Property that gets and sets the entity the width is measured relative to.
Parent Property that returns the parent PartFeature of the definition.
PositiveDirection Property that specifies the side of the offset entity the flange is on.
Type Returns an ObjectTypeEnum indicating this object's type.
Width Property that returns the parameter controlling the width of the flange.
Version
Introduced in version 2009
WidthOffsetWidthExtent.Application
Property
Parent Object: WidthOffsetWidthExtent
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WidthOffsetWidthExtent.Application() As Object
WidthOffsetWidthExtent Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh380D.htm 17/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
WidthOffsetWidthExtent.Edge Property
Parent Object: WidthOffsetWidthExtent
Description
Property that gets the Edge object that the width is defined relative to.
Syntax
WidthOffsetWidthExtent.Edge() As Edge
Property Value
This is a read only property whose value is an Edge.
Version
Introduced in version 2009
WidthOffsetWidthExtent.OffsetDistance
Property
Parent Object: WidthOffsetWidthExtent
Description
Property that returns the parameter controlling the distance of the flange from the offset entity.
Syntax
WidthOffsetWidthExtent.OffsetDistance() As Parameter
WidthOffsetWidthExtent Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh380D.htm 17/06/2025
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2009
WidthOffsetWidthExtent.OffsetEntity
Property
Parent Object: WidthOffsetWidthExtent
Description
Property that gets and sets the entity the width is measured relative to.
Syntax
WidthOffsetWidthExtent.OffsetEntity() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2009
WidthOffsetWidthExtent.Parent Property
Parent Object: WidthOffsetWidthExtent
Description
Property that returns the parent PartFeature of the definition.
Syntax
WidthOffsetWidthExtent.Parent() As PartFeature
WidthOffsetWidthExtent Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh380D.htm 17/06/2025
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2009
WidthOffsetWidthExtent.PositiveDirection
Property
Parent Object: WidthOffsetWidthExtent
Description
Property that specifies the side of the offset entity the flange is on.
Syntax
WidthOffsetWidthExtent.PositiveDirection() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2009
WidthOffsetWidthExtent.Type Property
Parent Object: WidthOffsetWidthExtent
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WidthOffsetWidthExtent.Type() As ObjectTypeEnum
WidthOffsetWidthExtent Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh380D.htm 17/06/2025
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
WidthOffsetWidthExtent.Width Property
Parent Object: WidthOffsetWidthExtent
Description
Property that returns the parameter controlling the width of the flange.
Syntax
WidthOffsetWidthExtent.Width() As Parameter
Property Value
This is a read only property whose value is a Parameter.
Version
Introduced in version 2010
WidthOffsetWidthExtent Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh380D.htm 17/06/2025
Wire Object
Description
A Wire object represents a set of 3D curves. They are used in several different areas within the
Inventor API. The bend and fold lines on the 3D flattened model of a sheet metal part are returned
as a Wire object. It is also used to define 3D curves that are used as input when using some of the
functions to create transient B-Rep bodies.
Methods
Name Description
OffsetPlanarWire
Method that computes the offset for a planar wire. A SurfaceBody containing
the resulting Wire object(s) is returned. It’s possible that the offset result of a
single wire can result in multiple wires.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Edges Gets the referenced by this Wire.
EdgeUses Property that returns the EdgeUses collection object associated with this Wire.
IsPlanar Read-only property that indicates if this wire is planar or not.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Edge.Wire, EdgeProxy.Wire, EdgeUse.Wire, EdgeUseProxy.Wire, Wires.Item
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
Wire Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
Version
Introduced in version 2008
Wire.Application Property
Parent Object: Wire
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
Wire.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2008
Wire.Edges Property
Parent Object: Wire
Description
Gets the referenced by this Wire.
Syntax
Wire.Edges() As Edges
Property Value
This is a read only property whose value is an Edges.
Wire Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
Version
Introduced in version 2008
Wire.EdgeUses Property
Parent Object: Wire
Description
Property that returns the EdgeUses collection object associated with this Wire.
Syntax
Wire.EdgeUses() As EdgeUses
Property Value
This is a read only property whose value is an EdgeUses.
Version
Introduced in version 2008
Wire.IsPlanar Property
Parent Object: Wire
Description
Read-only property that indicates if this wire is planar or not.
Syntax
Wire.IsPlanar() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Wire Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
Version
Introduced in version 2013
Wire.OffsetPlanarWire Method
Parent Object: Wire
Description
Method that computes the offset for a planar wire. A SurfaceBody containing the resulting Wire
object(s) is returned. It’s possible that the offset result of a single wire can result in multiple wires.
Syntax
Wire.OffsetPlanarWire( Normal As UnitVector, Distance As Double, CornerClosureType As
OffsetCornerClosureTypeEnum ) As Wires
Parameters
Name Type Description
Normal UnitVector
Input UnitVector object that defines the
normal of the wire. This vector must be
normal to the plane of the wire and is used
to specify the positive side of the plane. This
is used to determine the side to offset the
curves to. A positive offset distance is in the
direction of the cross product (wire_tangent
x wire_plane_normal). A negative offset is
in the opposite direction.
Distance Double
Input double in centimeters that specifies
the offset distance of the new wire. See the
description for the Normal argument to see
how a positive or negative value for the
distance specifies the direction of the offset.
CornerClosureType OffsetCornerClosureTypeEnum Input enum value that defines how to close
the external corners of the offset. The valid
values are listed below:
kCircularCornerClosure - Circular arcs are
attached tangentially to the offset edges so
that gaps are replaced by rounded
corners. In the picture below, the original
curves are black, the offset curves are green
Wire Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
and the circular rounded corner is red.
kLinearCornerClosure - Linear extensions
are attached tangentially to offset edges
where there is a gap. The gap is closed
where the extensions intersect, giving a
sharp corner. In the picture below, the
original curves are black, the offset curves
are green and the linear extended corner is
red.
kExtendCornerClosure - Offset edges are
extended smoothly where there is a gap,
with the extension depending on the curve
type. The gap is closed where the extensions
intersect, giving a sharp corner. This method
may fall back to using linear extensions or
circular arcs if there is a problem.
Wire Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
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
Introduced in version 2013
Wire.Parent Property
Parent Object: Wire
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
Wire.Parent() As SurfaceBody
Property Value
This is a read only property whose value is a SurfaceBody.
Wire Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
Version
Introduced in version 2008
Wire.Type Property
Parent Object: Wire
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Wire.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2008
Wire Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hh553A.htm 17/06/2025
WireDefinition Object
Description
WireDefinition Object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
Type Returns an ObjectTypeEnum indicating this object's type.
WireEdgeDefinitions
Gets the collection of EdgeDefinition objects associated with this
WireDefinition object.
Accessed From
WireDefinitions.Add, WireDefinitions.Item
Samples
Name Description
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
Version
Introduced in version 2013
WireDefinition.Application Property
WireDefinition Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70E0.htm 17/06/2025
Parent Object: WireDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WireDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2013
WireDefinition.Type Property
Parent Object: WireDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WireDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2013
WireDefinition.WireEdgeDefinitions Property
Parent Object: WireDefinition
WireDefinition Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70E0.htm 17/06/2025
Description
Gets the collection of EdgeDefinition objects associated with this WireDefinition object.
Syntax
WireDefinition.WireEdgeDefinitions() As WireEdgeDefinitions
Property Value
This is a read only property whose value is a WireEdgeDefinitions.
Samples
Name Description
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
Introduced in version 2013
WireDefinition Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hh70E0.htm 17/06/2025
WireDefinitions Object
Description
Represents a set of definitions of 3D wireframe geometry that will be used to create an Wire
object.
Methods
Name Description
Add Creates a new WireDefinition within the associated SurfaceBodyDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified WireDefinition object from the collection
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
FaceShellDefinition.WireDefinitions
Version
Introduced in version 2013
WireDefinitions.Add Method
Parent Object: WireDefinitions
Description
Creates a new WireDefinition within the associated SurfaceBodyDefinition.
Syntax
WireDefinitions.Add() As WireDefinition
WireDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh869A.htm 17/06/2025
Samples
Name Description
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
Introduced in version 2013
WireDefinitions.Application Property
Parent Object: WireDefinitions
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WireDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2013
WireDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh869A.htm 17/06/2025
WireDefinitions.Count Property
Parent Object: WireDefinitions
Description
Property that returns the number of items in this collection.
Syntax
WireDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2013
WireDefinitions.Item Property
Parent Object: WireDefinitions
Description
Returns the specified WireDefinition object from the collection
Syntax
WireDefinitions.Item( Index As Long ) As WireDefinition
Property Value
This is a read only property whose value is a WireDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the WireDefinition object within the collection to
return.
WireDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh869A.htm 17/06/2025
Version
Introduced in version 2013
WireDefinitions.Type Property
Parent Object: WireDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WireDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2013
WireDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hh869A.htm 17/06/2025
WireEdgeDefinition Object
Description
WireEdgeDefinition Object.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of
Inventor, an Application object is returned. When used in the context of
Apprentice, an ApprenticeServer object is returned.
AssociativeID
Gets and sets the associate ID of this edge. This ID will be transferred to the
corresponding edge when this SurfaceBodyDefinition is used to create a
SurfaceBody. It is used by Inventor as the identifier for the edge and is used
for tracking this geometry f.
EndVertex
Gets and sets the end vertex of the edge. This can be Nothing where no end
vertex is specifically defined.
IsParamReversed
Gets and sets if the orientation of this EdgeUse is in the same direction or not
relative to the associated EdgeDefinition object.
ModelSpaceCurve
Gets and sets the definition of the edge in model space. This can be Nothing in
the case where no model space geometry is specified for this edge.
StartVertex
Gets and sets the starting vertex of the edge. This can be Nothing where no
start vertex is specifically defined.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
WireEdgeDefinitions.Add, WireEdgeDefinitions.Item
Version
Introduced in version 2013
WireEdgeDefinition.Application Property
Parent Object: WireEdgeDefinition
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
WireEdgeDefinition Object Page 1 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EE5.htm 17/06/2025
Syntax
WireEdgeDefinition.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2013
WireEdgeDefinition.AssociativeID Property
Parent Object: WireEdgeDefinition
Description
Gets and sets the associate ID of this edge. This ID will be transferred to the corresponding edge
when this SurfaceBodyDefinition is used to create a SurfaceBody. It is used by Inventor as the
identifier for the edge and is used for tracking this geometry f.
Syntax
WireEdgeDefinition.AssociativeID() As Long
Property Value
This is a read/write property whose value is a Long.
Version
Introduced in version 2013
WireEdgeDefinition.EndVertex Property
Parent Object: WireEdgeDefinition
Description
Gets and sets the end vertex of the edge. This can be Nothing where no end vertex is specifically
defined.
WireEdgeDefinition Object Page 2 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EE5.htm 17/06/2025
Syntax
WireEdgeDefinition.EndVertex() As VertexDefinition
Property Value
This is a read/write property whose value is a VertexDefinition.
Version
Introduced in version 2013
WireEdgeDefinition.IsParamReversed
Property
Parent Object: WireEdgeDefinition
Description
Gets and sets if the orientation of this EdgeUse is in the same direction or not relative to the
associated EdgeDefinition object.
Syntax
WireEdgeDefinition.IsParamReversed() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2013
WireEdgeDefinition.ModelSpaceCurve
Property
Parent Object: WireEdgeDefinition
Description
WireEdgeDefinition Object Page 3 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EE5.htm 17/06/2025
Gets and sets the definition of the edge in model space. This can be Nothing in the case where no
model space geometry is specified for this edge.
Syntax
WireEdgeDefinition.ModelSpaceCurve() As Object
Property Value
This is a read/write property whose value is an Object.
Version
Introduced in version 2013
WireEdgeDefinition.StartVertex Property
Parent Object: WireEdgeDefinition
Description
Gets and sets the starting vertex of the edge. This can be Nothing where no start vertex is
specifically defined.
Syntax
WireEdgeDefinition.StartVertex() As VertexDefinition
Property Value
This is a read/write property whose value is a VertexDefinition.
Version
Introduced in version 2013
WireEdgeDefinition.Type Property
Parent Object: WireEdgeDefinition
Description
Returns an ObjectTypeEnum indicating this object's type.
WireEdgeDefinition Object Page 4 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EE5.htm 17/06/2025
Syntax
WireEdgeDefinition.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2013
WireEdgeDefinition Object Page 5 of 5
file:///C:/Users/Cliente/AppData/Local/Temp/~hh9EE5.htm 17/06/2025
WireEdgeDefinitions Object
Description
Utility object used to create new WireEdgeDefinition objects.
Methods
Name Description
Add Creates a new WireEdgeDefinition within the associated SurfaceBodyDefinition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item Returns the specified WireEdgeDefinition object from the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
WireDefinition.WireEdgeDefinitions
Samples
Name Description
Transient B-Rep Ruled
Surface with Lines
Demonstrate creating a transient ruled surface. This sample uses all
straight line segments for each of the sections. A part document must
be open.
Transient B-Rep Ruled
Surface with Arc and
Line
Demonstrate creating a transient ruled surface. This sample uses
straight line segments for once section and an arc for the second. A part
document must be open.
Version
Introduced in version 2013
WireEdgeDefinitions.Add Method
Parent Object: WireEdgeDefinitions
WireEdgeDefinitions Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB6E2.htm 17/06/2025
Description
Creates a new WireEdgeDefinition within the associated SurfaceBodyDefinition.
Syntax
WireEdgeDefinitions.Add( StartVertex As VertexDefinition, EndVertex As VertexDefinition,
ModelSpaceCurve As Object ) As WireEdgeDefinition
Parameters
Name Type Description
StartVertex VertexDefinition
Input VertexDefinition object that defines the start of the
edge.
EndVertex VertexDefinition
Input VertexDefinition object that defines the end of the
edge.
ModelSpaceCurve Object
Input transient geometry curve object that defines the shape
of this edge using 3d geometry in model space. Valid input
is Arc3d, BsplineCurve, Circle, EllipseFull, EllipticalArc,
LineSegment and Polyline3D.
Samples
Name Description
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
Introduced in version 2013
WireEdgeDefinitions.Application Property
Parent Object: WireEdgeDefinitions
WireEdgeDefinitions Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB6E2.htm 17/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WireEdgeDefinitions.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 2013
WireEdgeDefinitions.Count Property
Parent Object: WireEdgeDefinitions
Description
Property that returns the number of items in this collection.
Syntax
WireEdgeDefinitions.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2013
WireEdgeDefinitions.Item Property
Parent Object: WireEdgeDefinitions
WireEdgeDefinitions Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB6E2.htm 17/06/2025
Description
Returns the specified WireEdgeDefinition object from the collection.
Syntax
WireEdgeDefinitions.Item( Index As Long ) As WireEdgeDefinition
Property Value
This is a read only property whose value is a WireEdgeDefinition.
Parameters
Name Type Description
Index Long
Input Long value that specifies the WireEdgeDefinition object within the collection
to return.
Version
Introduced in version 2013
WireEdgeDefinitions.Type Property
Parent Object: WireEdgeDefinitions
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WireEdgeDefinitions.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2013
WireEdgeDefinitions Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhB6E2.htm 17/06/2025
Wires Object
Description
The Wires collection object provides access to a set of Wire objects.
Properties
Name Description
Count Property that returns the number of items in this collection.
Item Allows integer-indexed access to items in the collection.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
Path.Wires, PathProxy.Wires, Profile.Wires, Profile3D.Wires, Profile3DProxy.Wires,
ProfileProxy.Wires, SurfaceBody.Wires, SurfaceBodyProxy.Wires, Wire.OffsetPlanarWire
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
Introduced in version 2009
Wires.Count Property
Parent Object: Wires
Description
Property that returns the number of items in this collection.
Wires Object Page 1 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCFB9.htm 17/06/2025
Syntax
Wires.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 2009
Wires.Item Property
Parent Object: Wires
Description
Allows integer-indexed access to items in the collection.
Syntax
Wires.Item( Index As Long ) As Wire
Property Value
This is a read only property whose value is a Wire.
Parameters
Name Type Description
Index Long Input Long value that specifies the index of the Wire object to return.
Version
Introduced in version 2009
Wires.Type Property
Parent Object: Wires
Wires Object Page 2 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCFB9.htm 17/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
Wires.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 2009
Wires Object Page 3 of 3
file:///C:/Users/Cliente/AppData/Local/Temp/~hhCFB9.htm 17/06/2025
WorkAxes Object
Description
The WorkAxes collection object provides access to all of the objects in the parent document and
provides methods to create new work axes.
Methods
Name Description
AddByAnalyticEdge
Method that creates a new work axis based on the input analytic edge.
This method is not currently supported when creating a work axis
within an assembly.
AddByLine
Method that creates a new work axis based on the input line. This
method is not currently supported when creating a work axis within an
assembly.
AddByLineAndPlane
Method that creates a new work axis that is along a line defined by
projecting the input line onto the input plane along the plane normal.
This method is not currently supported when creating a work axis
within an assembly.
AddByLineAndPoint
Method that creates a new work axis that is parallel to a line and passes
through the input point. This method is not currently supported when
creating a work axis within an assembly.
AddByNormalToSurface
Method that creates a new work axis that passes through the point and
is normal to the input surface. This method is not currently supported
when creating a work axis within an assembly.
AddByRevolvedFace
Method that creates a new work axis through the axis of a revolved
face. This method is not currently supported when creating a work axis
within an assembly.
AddByTwoPlanes
Method that creates a new work axis at the intersection of the two input
planes. This method is not currently supported when creating a work
axis within an assembly.
AddByTwoPoints
Method that creates a new work axis through the two input points. This
method is not currently supported when creating a work axis within an
assembly.
AddFixed
Method that creates a new work axis that passes through the input point
in the direction of the input vector. When used to create a work axis
within an assembly the resulting work axis will return an
AssemblyWorkAxisDef definition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
WorkAxes Object Page 1 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Count Property that returns the number of items in this collection.
Item
Returns the specified WorkAxis object from the collection. This is the default
property of the WorkAxes collection object.
Parent Property returning the parent object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.WorkAxes, FlatPattern.WorkAxes,
PartComponentDefinition.WorkAxes, SheetMetalComponentDefinition.WorkAxes,
WeldmentComponentDefinition.WorkAxes
Samples
Name Description
Create sheet metal face and cut
features
This sample demonstrates the creation of sheet metal face and
cut features.
Version
Introduced in version 4
WorkAxes.AddByAnalyticEdge Method
Parent Object: WorkAxes
Description
Method that creates a new work axis based on the input analytic edge. This method is not
currently supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByAnalyticEdge( Edge As Edge, [Construction] As Boolean ) As WorkAxis
Parameters
Name Type Description
Edge Edge Input Edge object that can be a circle, arc, or an ellipse.
Construction Boolean Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis. A construction work axis is hidden from the user and
is not displayed graphically or listed in the browser.
WorkAxes Object Page 2 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkAxes.AddByLine Method
Parent Object: WorkAxes
Description
Method that creates a new work axis based on the input line. This method is not currently
supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByLine( Line As Object, [Construction] As Boolean ) As WorkAxis
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
SketchLine, or SketchLine3D object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis. A construction work axis is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction: * Deleting any downstream feature that consumes
this construction work feature will have the effect of deleting this work
feature as well. * If there are no consumers of the construction work
feature, it is the responsibility of the creator to delete them since they will
never get cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes.AddByLineAndPlane Method
Parent Object: WorkAxes
WorkAxes Object Page 3 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Description
Method that creates a new work axis that is along a line defined by projecting the input line onto
the input plane along the plane normal. This method is not currently supported when creating a
work axis within an assembly.
Syntax
WorkAxes.AddByLineAndPlane( Line As Object, Plane As Object, [Construction] As
Boolean ) As WorkAxis
Parameters
Name Type Description
Line Object
Input line object to project along the plane. This object can be a linear
Edge, WorkAxis, or SketchLine object.
Plane Object
Input plane object along which to project the line. This object can be a
planar Face, WorkPlane, or Sketch object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis, not a construction work axis. A construction work axis
is hidden from the user and is not displayed graphically or listed in the
browser. If work features are created as construction: * Deleting any
downstream feature that consumes this construction work feature will have
the effect of deleting this work feature as well. * If there are no consumers
of the construction work feature, it is the responsibility of the creator to
delete them since they will never get cleaned up and are not visible to
users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes.AddByLineAndPoint Method
Parent Object: WorkAxes
Description
Method that creates a new work axis that is parallel to a line and passes through the input point.
This method is not currently supported when creating a work axis within an assembly.
WorkAxes Object Page 4 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Syntax
WorkAxes.AddByLineAndPoint( Line As Object, Point As Object, [Construction] As Boolean )
As WorkAxis
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, SketchLine, or SketchLine3D object.
Point Object
Input object that represents a point. This object can be a Vertex,
WorkPoint, SketchPoint, or SketchPoint3D object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis. A construction work axis is hidden from the user and
is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkAxes.AddByNormalToSurface Method
Parent Object: WorkAxes
Description
Method that creates a new work axis that passes through the point and is normal to the input
surface. This method is not currently supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByNormalToSurface( Surface As Object, Point As Object, [Construction] As
Boolean ) As WorkAxis
Parameters
Name Type Description
Surface Object
Input object that represents a surface entity. This object can be a Face
(planar or non-planar), a WorkPlane or a PlanarSketch object.
Point Object
WorkAxes Object Page 5 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Input object that represents a point. This object can be a WorkPoint,
Vertex, SketchPoint, or SketchPoint3D object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False which indicates to create a
standard work axis, not a construction work axis. A construction work axis
is hidden from the user and is not displayed graphically or listed in the
browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkAxes.AddByRevolvedFace Method
Parent Object: WorkAxes
Description
Method that creates a new work axis through the axis of a revolved face. This method is not
currently supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByRevolvedFace( Face As Face, [Construction] As Boolean ) As WorkAxis
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a revolved surface. Valid surface
types include cylinders, cones, and toroids.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis. A construction work axis is hidden from the user and
is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes Object Page 6 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
WorkAxes.AddByTwoPlanes Method
Parent Object: WorkAxes
Description
Method that creates a new work axis at the intersection of the two input planes. This method is not
currently supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByTwoPlanes( Plane1 As Object, Plane2 As Object, [Construction] As
Boolean ) As WorkAxis
Parameters
Name Type Description
Plane1 Object
First input plane object for which to find the intersection at which to create
the work axis. This object can be a planar Face, WorkPlane, or Sketch
object.
Plane2 Object
Second input plane object for which to find the intersection at which to
create the work axis. This object can be a planar Face, WorkPlane, or
Sketch object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis, not a construction work axis. A construction work axis
is hidden from the user and is not displayed graphically or listed in the
browser. If work features are created as construction: * Deleting any
downstream feature that consumes this construction work feature will have
the effect of deleting this work feature as well. * If there are no consumers
of the construction work feature, it is the responsibility of the creator to
delete them since they will never get cleaned up and are not visible to
users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes.AddByTwoPoints Method
Parent Object: WorkAxes
WorkAxes Object Page 7 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Description
Method that creates a new work axis through the two input points. This method is not currently
supported when creating a work axis within an assembly.
Syntax
WorkAxes.AddByTwoPoints( Point1 As Object, Point2 As Object, [Construction] As Boolean )
As WorkAxis
Parameters
Name Type Description
Point1 Object
Input object that represents a point. This object can be a WorkPoint,
Vertex, or SketchPoint object.
Point2 Object
Input object that represents a point. This object can be a WorkPoint,
Vertex, or SketchPoint object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as a
construction axis or not. The default is False, which indicates to create a
standard work axis, not a construction work axis. A construction work axis
is hidden from the user and is not displayed graphically or listed in the
browser. If work features are created as construction: * Deleting any
downstream feature that consumes this construction work feature will have
the effect of deleting this work feature as well. * If there are no consumers
of the construction work feature, it is the responsibility of the creator to
delete them since they will never get cleaned up and are not visible to
users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes.AddFixed Method
Parent Object: WorkAxes
Description
Method that creates a new work axis that passes through the input point in the direction of the
input vector. When used to create a work axis within an assembly the resulting work axis will
return an AssemblyWorkAxisDef definition.
WorkAxes Object Page 8 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Syntax
WorkAxes.AddFixed( Point As Point, Axis As UnitVector, [Construction] As Boolean ) As
WorkAxis
Parameters
Name Type Description
Point Point Input object.
Axis UnitVector
Input UnitVector object. that defines the X-axis vector of the work
plane.
Construction Boolean
Optional Input Boolean that specifies whether to create the work axis as
a construction axis or not. The default is False, which indicates to create
a standard work axis. A construction work axis is hidden from the user
and is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxes.Application Property
Parent Object: WorkAxes
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkAxes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkAxes Object Page 9 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
WorkAxes.Count Property
Parent Object: WorkAxes
Description
Property that returns the number of items in this collection.
Syntax
WorkAxes.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
WorkAxes.Item Property
Parent Object: WorkAxes
Description
Returns the specified WorkAxis object from the collection. This is the default property of the
WorkAxes collection object.
Syntax
WorkAxes.Item( Index As Variant ) As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Parameters
Name Type Description
Index Variant Input Variant value that specifies the object to return. This can be a numeric value
indicating the index of the item in the collection or it can be a string indicating the
WorkAxes Object Page 10 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
work axis name. If an out of range index or a name of a non-existent work axis is
specified, an error occurs.
Samples
Name Description
Create sheet metal face and cut
features
This sample demonstrates the creation of sheet metal face and
cut features.
Version
Introduced in version 4
WorkAxes.Parent Property
Parent Object: WorkAxes
Description
Property returning the parent object.
Syntax
WorkAxes.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkAxes.Type Property
Parent Object: WorkAxes
Description
Returns an ObjectTypeEnum indicating this object's type.
WorkAxes Object Page 11 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
Syntax
WorkAxes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
WorkAxes Object Page 12 of 12
file:///C:/Users/Cliente/AppData/Local/Temp/~hhE9D9.htm 17/06/2025
WorkAxis Object
Description
Represents a work axis. See here for an overview.
Methods
Name Description
Delete
Method that deletes the work axis. Optionally the dependent objects will
be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSize
Method that gets the current size of the displayed graphics for the work
axis. The returned points are in model coordinate space.
SetByAnalyticEdge Method that redefines the work axis to be based on the input edge.
SetByLine
Method that redefines the work axis to be based on the input line. This
method is not valid when the work axis exists in an Assembly
component definition.
SetByLineAndPlane
Method that redefines the work axis so that it is along a line defined by
projecting the input line onto the input plane along the plane normal.
SetByLineAndPoint
Method that redefines the work axis so that it is parallel to a line and
passes through the input point.
SetByNormalToSurface
Method that redefines the work axis to pass through the input point and
be normal to the input surface.
SetByRevolvedFace
Method that redefines the work axis to be at the axis of the input
revolved face.
SetByTwoPlanes
Method that redefines the work axis to be at the intersection of the two
input planes.
SetByTwoPoints Method that redefines the work axis to go between the two input points.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from. The argument defines if the end-of-part marker
will be positioned just before or just after the object. If the object is
contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the
calling object is contained within. An example of this case is a sketch
that has not been shared and has been consumed by a feature. Another
example is a nested work feature.
SetFixed
Method that redefines the work axis so it passes through the input point
in the direction of the input vector.
SetSize
Method that sets the current size of the displayed graphics for the work
axis.
WorkAxis Object Page 1 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Properties
Name Description
Adaptive Specifies whether the work axis is adaptive.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
AutoResize
Gets or sets whether this work axis should be resized automatically
based on the component size.
Construction
Boolean property that returns whether the work axis is a
construction work axis or not. A construction work axis is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkAxis object will
behave differently for a construction work axis. These are Adaptive,
Name, and Visible.
Consumed Gets whether the WorkAxis is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
Definition
Property that returns one of the work axis definition objects. Which
definition object returned will depend on how the work axis is
defined. The DefinitionType property can be used to determine the
type of definition the Definition property will return.
DefinitionType
Property that returns the type of definition that is used to define the
work axis. This can be kLineWorkAxis, kTwoPlanesWorkAxis,
kTwoPointsWorkAxis, kRevolvedFaceWorkAxis,
kNormalToSurfaceWorkAxis, kLineAndPlaneWorkAxis,
kLineAndPointWorkAxis, kAnalyticEdgeWorkAxis,
kFixedWorkAxis, or kAssemblyWorkAxis.
Dependents
Property that returns the collection of objects that have a direct
dependency on the work axis.
DrivenBy
Property that returns the collection of objects that the work axis is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work axis is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work axis belongs to a coordinate
system. If so, edits and delete are not allowed.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch Property that indicates whether the work axis belongs to a 3d sketch.
WorkAxis Object Page 2 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
IsPatternElement Property that gets whether the work axis was created by a pattern. If
so, edits and delete are not allowed.
Line
Property that returns a Line geometry. The Line object returned
provides information about the position and direction of the work
axis.
Name Specifies the name of the work axis.
OwnedBy
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch Property that returns the parent ComponentDefinition object.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity Property indicating the object this entity is dependent on.
Shared Gets and sets whether the work axis is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work axis.
Accessed From
AnalyticEdgeWorkAxisDef.Parent, AssemblyWorkAxisDef.Parent, FixedWorkAxisDef.Parent,
LineAndPlaneWorkAxisDef.Parent, LineAndPointWorkAxisDef.Parent,
LineWorkAxisDef.Parent, NormalToSurfaceWorkAxisDef.Parent,
PointAndPlaneWorkAxisDef.Parent, RevolvedFaceWorkAxisDef.Parent,
TwoPlanesWorkAxisDef.Parent, TwoPointsWorkAxisDef.Parent, UserCoordinateSystem.XAxis,
UserCoordinateSystem.YAxis, UserCoordinateSystem.ZAxis,
UserCoordinateSystemProxy.XAxis, UserCoordinateSystemProxy.YAxis,
UserCoordinateSystemProxy.ZAxis, WorkAxes.AddByAnalyticEdge, WorkAxes.AddByLine,
WorkAxes.AddByLineAndPlane, WorkAxes.AddByLineAndPoint,
WorkAxes.AddByNormalToSurface, WorkAxes.AddByRevolvedFace,
WorkAxes.AddByTwoPlanes, WorkAxes.AddByTwoPoints, WorkAxes.AddFixed,
WorkAxes.Item, WorkAxis.ReferencedEntity, WorkAxisProxy.NativeObject,
WorkAxisProxy.ReferencedEntity
Derived Classes
WorkAxisProxy
Version
Introduced in version 4
WorkAxis.Adaptive Property
Parent Object: WorkAxis
WorkAxis Object Page 3 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Description
Specifies whether the work axis is adaptive.
Syntax
WorkAxis.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkAxis.Application Property
Parent Object: WorkAxis
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkAxis.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkAxis.AttributeSets Property
Parent Object: WorkAxis
WorkAxis Object Page 4 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkAxis.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
WorkAxis.AutoResize Property
Parent Object: WorkAxis
Description
Gets or sets whether this work axis should be resized automatically based on the component size.
Syntax
WorkAxis.AutoResize() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
WorkAxis.Construction Property
Parent Object: WorkAxis
Description
WorkAxis Object Page 5 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Boolean property that returns whether the work axis is a construction work axis or not. A
construction work axis is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkAxis object will behave differently for a
construction work axis. These are Adaptive, Name, and Visible.
Syntax
WorkAxis.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
WorkAxis.Consumed Property
Parent Object: WorkAxis
Description
Gets whether the WorkAxis is consumed or not.
Syntax
WorkAxis.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
WorkAxis.ConsumeInputs Property
Parent Object: WorkAxis
Description
WorkAxis Object Page 6 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
WorkAxis.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkAxis.Definition Property
Parent Object: WorkAxis
Description
Property that returns one of the work axis definition objects. Which definition object returned will
depend on how the work axis is defined. The DefinitionType property can be used to determine
the type of definition the Definition property will return.
Syntax
WorkAxis.Definition() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkAxis.DefinitionType Property
Parent Object: WorkAxis
Description
WorkAxis Object Page 7 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Property that returns the type of definition that is used to define the work axis. This can be
kLineWorkAxis, kTwoPlanesWorkAxis, kTwoPointsWorkAxis, kRevolvedFaceWorkAxis,
kNormalToSurfaceWorkAxis, kLineAndPlaneWorkAxis, kLineAndPointWorkAxis,
kAnalyticEdgeWorkAxis, kFixedWorkAxis, or kAssemblyWorkAxis.
Syntax
WorkAxis.DefinitionType() As WorkAxisDefinitionEnum
Property Value
This is a read only property whose value is a WorkAxisDefinitionEnum.
Version
Introduced in version 4
WorkAxis.Delete Method
Parent Object: WorkAxis
Description
Method that deletes the work axis. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
Syntax
WorkAxis.Delete( [RetainDependents] As Boolean )
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This argument is ignored in the case of an assembly work plane.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkAxis Object Page 8 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
WorkAxis.Dependents Property
Parent Object: WorkAxis
Description
Property that returns the collection of objects that have a direct dependency on the work axis.
Syntax
WorkAxis.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
WorkAxis.DrivenBy Property
Parent Object: WorkAxis
Description
Property that returns the collection of objects that the work axis is dependent on.
Syntax
WorkAxis.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
WorkAxis.Exported Property
WorkAxis Object Page 9 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkAxis.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkAxis.GetReferenceKey Method
Parent Object: WorkAxis
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkAxis.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkAxis Object Page 10 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Remarks
The reference key is an array of bytes that can be used as a persistent reference for this entity. To
obtain the entity at a later time using the reference key you use the BindKeyToObject method of
the object. The ReferenceKeyManager object is obtained using the ReferenceKeyManager
property of the Document object.
Version
Introduced in version 5
WorkAxis.GetSize Method
Parent Object: WorkAxis
Description
Method that gets the current size of the displayed graphics for the work axis. The returned points
are in model coordinate space.
Syntax
WorkAxis.GetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Output Point object that defines the first end point of the work axis.
Point2 Point Output Point object that defines the other end point of the work axis.
Remarks
The work axis is functionally infinite but has a line that is displayed to allow the user to interact
with it graphically. The size and the position of the line can be adjusted to make it easier for the
user to interact with. Construction work axes are never visible to the user and don't need to have a
size defined. This method will fail in the case of a construction work axis. You can determine if
the work axis is a construction work axis by checking the Construction property of the WorkAxis
object. The two points define the end points of the displayed line.
Version
Introduced in version 2008
WorkAxis Object Page 11 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
WorkAxis.Grounded Property
Parent Object: WorkAxis
Description
Gets/Sets the Boolean flag that specifies whether this work axis is grounded or not.
Syntax
WorkAxis.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkAxis.HasReferenceComponent Property
Parent Object: WorkAxis
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkAxis.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5.3
WorkAxis.HealthStatus Property
WorkAxis Object Page 12 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkAxis.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 4
WorkAxis.IsCoordinateSystemElement
Property
Parent Object: WorkAxis
Description
Property that returns whether the work axis belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkAxis.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
WorkAxis.IsOwnedByFeature Property
WorkAxis Object Page 13 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkAxis.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkAxis.IsParentSketch Property
Parent Object: WorkAxis
Description
Property that indicates whether the work axis belongs to a 3d sketch.
Syntax
WorkAxis.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkAxis.IsPatternElement Property
Parent Object: WorkAxis
WorkAxis Object Page 14 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Description
Property that gets whether the work axis was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkAxis.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
WorkAxis.Line Property
Parent Object: WorkAxis
Description
Property that returns a Line geometry. The Line object returned provides information about the
position and direction of the work axis.
Syntax
WorkAxis.Line() As Line
Property Value
This is a read only property whose value is a Line.
Version
Introduced in version 4
WorkAxis.Name Property
Parent Object: WorkAxis
WorkAxis Object Page 15 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Description
Specifies the name of the work axis.
Syntax
WorkAxis.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
WorkAxis.OwnedBy Property
Parent Object: WorkAxis
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkAxis.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
WorkAxis.Parent Property
Parent Object: WorkAxis
WorkAxis Object Page 16 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Description
Property returning the parent object.
Syntax
WorkAxis.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkAxis.ParentSketch Property
Parent Object: WorkAxis
Description
Property that returns the parent ComponentDefinition object.
Syntax
WorkAxis.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2008
WorkAxis.ReferenceComponent Property
Parent Object: WorkAxis
Description
WorkAxis Object Page 17 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkAxis.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 5.3
WorkAxis.ReferencedEntity Property
Parent Object: WorkAxis
Description
Property indicating the object this entity is dependent on.
Syntax
WorkAxis.ReferencedEntity() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 5.3
WorkAxis.SetByAnalyticEdge Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to be based on the input edge.
WorkAxis Object Page 18 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Syntax
WorkAxis.SetByAnalyticEdge( Edge As Edge )
Parameters
Name Type Description
Edge Edge Input Edge object that can be a circle, arc, or an ellipse.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 2008
WorkAxis.SetByLine Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to be based on the input line. This method is not valid when
the work axis exists in an Assembly component definition.
Syntax
WorkAxis.SetByLine( Line As Object )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, SketchLine, or
SketchLine3D object.
Version
Introduced in version 4
WorkAxis.SetByLineAndPlane Method
WorkAxis Object Page 19 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Method that redefines the work axis so that it is along a line defined by projecting the input line
onto the input plane along the plane normal.
Syntax
WorkAxis.SetByLineAndPlane( Line As Object, Plane As Object )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Plane Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 4
WorkAxis.SetByLineAndPoint Method
Parent Object: WorkAxis
Description
Method that redefines the work axis so that it is parallel to a line and passes through the input
point.
Syntax
WorkAxis.SetByLineAndPoint( Line As Object, Point As Object )
Parameters
Name Type Description
Line Object
WorkAxis Object Page 20 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Point Object
Input object that represents a point. This object can be a Vertex, WorkPoint,
SketchPoint, or SketchPoint3D object.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 2008
WorkAxis.SetByNormalToSurface Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to pass through the input point and be normal to the input
surface.
Syntax
WorkAxis.SetByNormalToSurface( Surface As Object, Point As Object )
Parameters
Name Type Description
Surface Object
Input object that represents a surface entity. This object can be a Face (planar or
non-planar), a WorkPlane or a PlanarSketch object.
Point Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 2008
WorkAxis Object Page 21 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
WorkAxis.SetByRevolvedFace Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to be at the axis of the input revolved face.
Syntax
WorkAxis.SetByRevolvedFace( Face As Face )
Parameters
Name Type Description
Face Face
Input Face whose geometry is a revolved surface. Valid surface types include
cylinders, cones, and toroids.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 4
WorkAxis.SetByTwoPlanes Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to be at the intersection of the two input planes.
Syntax
WorkAxis.SetByTwoPlanes( Plane1 As Object, Plane2 As Object )
Parameters
Name Type Description
Plane1 Object Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
WorkAxis Object Page 22 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Plane2 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 4
WorkAxis.SetByTwoPoints Method
Parent Object: WorkAxis
Description
Method that redefines the work axis to go between the two input points.
Syntax
WorkAxis.SetByTwoPoints( Point1 As Object, Point2 As Object )
Parameters
Name Type Description
Point1 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Point2 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 4
WorkAxis.SetEndOfPart Method
WorkAxis Object Page 23 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkAxis.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkAxis.SetFixed Method
Parent Object: WorkAxis
Description
Method that redefines the work axis so it passes through the input point in the direction of the
input vector.
Syntax
WorkAxis.SetFixed( Point As Point, Axis As UnitVector )
Parameters
Name Type Description
Point Point Input Point object.
Axis UnitVector Input UnitVector object.
WorkAxis Object Page 24 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Remarks
This method is not valid when the work axis exists in an Assembly component definition.
Version
Introduced in version 4
WorkAxis.SetSize Method
Parent Object: WorkAxis
Description
Method that sets the current size of the displayed graphics for the work axis.
Syntax
WorkAxis.SetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Input Point object that defines the first end point of the work axis.
Point2 Point Input Point object that defines the other end point of the work axis.
Remarks
The input points should be in model coordinate space. The work axis is functionally infinite but
has a line that is displayed to allow the user to interact with it graphically. The size and the
position of the line can be adjusted to make it easier for the user to interact with. Construction
work axes are never visible to the user and don't need to have a size defined. This method will fail
in the case of a construction work axis. You can determine if the work plane is a construction
work axis by checking the Construction property of the WorkAxis object. This method will also
fail if the AutoResize property is set to True. The two points define the two ends of the displayed
line. The points must lie on the underlying Line geometry of the work axis.
Version
Introduced in version 2008
WorkAxis Object Page 25 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
WorkAxis.Shared Property
Parent Object: WorkAxis
Description
Gets and sets whether the work axis is shared or not.
Syntax
WorkAxis.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkAxis.Type Property
Parent Object: WorkAxis
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkAxis.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
WorkAxis.Visible Property
WorkAxis Object Page 26 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
Parent Object: WorkAxis
Description
Specifies the visibility of the work axis.
Syntax
WorkAxis.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkAxis Object Page 27 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5BD.htm 17/06/2025
WorkAxisProxy Object
Derived from: WorkAxis Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the work axis. Optionally the dependent objects will
be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSize
Method that gets the current size of the displayed graphics for the work
axis. The returned points are in model coordinate space.
SetByAnalyticEdge Method that redefines the work axis to be based on the input edge.
SetByLine
Method that redefines the work axis to be based on the input line. This
method is not valid when the work axis exists in an Assembly
component definition.
SetByLineAndPlane
Method that redefines the work axis so that it is along a line defined by
projecting the input line onto the input plane along the plane normal.
SetByLineAndPoint
Method that redefines the work axis so that it is parallel to a line and
passes through the input point.
SetByNormalToSurface
Method that redefines the work axis to pass through the input point and
be normal to the input surface.
SetByRevolvedFace
Method that redefines the work axis to be at the axis of the input
revolved face.
SetByTwoPlanes
Method that redefines the work axis to be at the intersection of the two
input planes.
SetByTwoPoints Method that redefines the work axis to go between the two input points.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from. The argument defines if the end-of-part marker
will be positioned just before or just after the object. If the object is
contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the
calling object is contained within. An example of this case is a sketch
that has not been shared and has been consumed by a feature. Another
example is a nested work feature.
SetFixed
Method that redefines the work axis so it passes through the input point
in the direction of the input vector.
SetSize
Method that sets the current size of the displayed graphics for the work
axis.
WorkAxisProxy Object Page 1 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Properties
Name Description
Adaptive Specifies whether the work axis is adaptive.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
AutoResize
Gets or sets whether this work axis should be resized automatically
based on the component size.
Construction
Boolean property that returns whether the work axis is a
construction work axis or not. A construction work axis is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkAxis object will
behave differently for a construction work axis. These are Adaptive,
Name, and Visible.
Consumed Gets whether the WorkAxis is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native
object is being referenced through. The returned occurrence is the
containing occurrence.
Definition
Property that returns one of the work axis definition objects. Which
definition object returned will depend on how the work axis is
defined. The DefinitionType property can be used to determine the
type of definition the Definition property will return.
DefinitionType
Property that returns the type of definition that is used to define the
work axis. This can be kLineWorkAxis, kTwoPlanesWorkAxis,
kTwoPointsWorkAxis, kRevolvedFaceWorkAxis,
kNormalToSurfaceWorkAxis, kLineAndPlaneWorkAxis,
kLineAndPointWorkAxis, kAnalyticEdgeWorkAxis,
kFixedWorkAxis, or kAssemblyWorkAxis.
Dependents
Property that returns the collection of objects that have a direct
dependency on the work axis.
DrivenBy
Property that returns the collection of objects that the work axis is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work axis is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work axis belongs to a coordinate
system. If so, edits and delete are not allowed.
WorkAxisProxy Object Page 2 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
IsOwnedByFeature Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch Property that indicates whether the work axis belongs to a 3d sketch.
IsPatternElement
Property that gets whether the work axis was created by a pattern. If
so, edits and delete are not allowed.
Line
Property that returns a Line geometry. The Line object returned
provides information about the position and direction of the work
axis.
Name Specifies the name of the work axis.
NativeObject
Gets the object in the context of the definition instead of the
containing assembly.
OwnedBy
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch Property that returns the parent ComponentDefinition object.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity Property indicating the object this entity is dependent on.
Shared Gets and sets whether the work axis is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work axis.
Version
Introduced in version 5
WorkAxisProxy.Adaptive Property
Parent Object: WorkAxisProxy
Description
Specifies whether the work axis is adaptive.
Syntax
WorkAxisProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WorkAxisProxy Object Page 3 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.Application Property
Parent Object: WorkAxisProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkAxisProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
WorkAxisProxy.AttributeSets Property
Parent Object: WorkAxisProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkAxisProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
WorkAxisProxy Object Page 4 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.AutoResize Property
Parent Object: WorkAxisProxy
Description
Gets or sets whether this work axis should be resized automatically based on the component size.
Syntax
WorkAxisProxy.AutoResize() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2008
WorkAxisProxy.Construction Property
Parent Object: WorkAxisProxy
Description
Boolean property that returns whether the work axis is a construction work axis or not. A
construction work axis is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkAxis object will behave differently for a
construction work axis. These are Adaptive, Name, and Visible.
Syntax
WorkAxisProxy.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkAxisProxy Object Page 5 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.Consumed Property
Parent Object: WorkAxisProxy
Description
Gets whether the WorkAxis is consumed or not.
Syntax
WorkAxisProxy.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
WorkAxisProxy.ConsumeInputs Property
Parent Object: WorkAxisProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
WorkAxisProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WorkAxisProxy Object Page 6 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 11
WorkAxisProxy.ContainingOccurrence
Property
Parent Object: WorkAxisProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
WorkAxisProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 5
WorkAxisProxy.Definition Property
Parent Object: WorkAxisProxy
Description
Property that returns one of the work axis definition objects. Which definition object returned will
depend on how the work axis is defined. The DefinitionType property can be used to determine
the type of definition the Definition property will return.
Syntax
WorkAxisProxy.Definition() As Object
WorkAxisProxy Object Page 7 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
WorkAxisProxy.DefinitionType Property
Parent Object: WorkAxisProxy
Description
Property that returns the type of definition that is used to define the work axis. This can be
kLineWorkAxis, kTwoPlanesWorkAxis, kTwoPointsWorkAxis, kRevolvedFaceWorkAxis,
kNormalToSurfaceWorkAxis, kLineAndPlaneWorkAxis, kLineAndPointWorkAxis,
kAnalyticEdgeWorkAxis, kFixedWorkAxis, or kAssemblyWorkAxis.
Syntax
WorkAxisProxy.DefinitionType() As WorkAxisDefinitionEnum
Property Value
This is a read only property whose value is a WorkAxisDefinitionEnum.
Version
Introduced in version 5
WorkAxisProxy.Delete Method
Parent Object: WorkAxisProxy
Description
Method that deletes the work axis. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
WorkAxisProxy Object Page 8 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Syntax
WorkAxisProxy.Delete( [RetainDependents] As Boolean )
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This argument is ignored in the case of an assembly work plane.
This is an optional argument whose default value is False.
Version
Introduced in version 5
WorkAxisProxy.Dependents Property
Parent Object: WorkAxisProxy
Description
Property that returns the collection of objects that have a direct dependency on the work axis.
Syntax
WorkAxisProxy.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkAxisProxy.DrivenBy Property
Parent Object: WorkAxisProxy
WorkAxisProxy Object Page 9 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Description
Property that returns the collection of objects that the work axis is dependent on.
Syntax
WorkAxisProxy.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkAxisProxy.Exported Property
Parent Object: WorkAxisProxy
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkAxisProxy.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkAxisProxy.GetReferenceKey Method
Parent Object: WorkAxisProxy
WorkAxisProxy Object Page 10 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkAxisProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkAxisProxy.GetSize Method
Parent Object: WorkAxisProxy
Description
Method that gets the current size of the displayed graphics for the work axis. The returned points
are in model coordinate space.
Syntax
WorkAxisProxy.GetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Output Point object that defines the first end point of the work axis.
Point2 Point Output Point object that defines the other end point of the work axis.
WorkAxisProxy Object Page 11 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 2008
WorkAxisProxy.Grounded Property
Parent Object: WorkAxisProxy
Description
Gets/Sets the Boolean flag that specifies whether this work axis is grounded or not.
Syntax
WorkAxisProxy.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkAxisProxy.HasReferenceComponent
Property
Parent Object: WorkAxisProxy
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkAxisProxy.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkAxisProxy Object Page 12 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5.3
WorkAxisProxy.HealthStatus Property
Parent Object: WorkAxisProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkAxisProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
WorkAxisProxy.IsCoordinateSystemElement
Property
Parent Object: WorkAxisProxy
Description
Property that returns whether the work axis belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkAxisProxy.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkAxisProxy Object Page 13 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 2010
WorkAxisProxy.IsOwnedByFeature Property
Parent Object: WorkAxisProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkAxisProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkAxisProxy.IsParentSketch Property
Parent Object: WorkAxisProxy
Description
Property that indicates whether the work axis belongs to a 3d sketch.
Syntax
WorkAxisProxy.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkAxisProxy Object Page 14 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 2008
WorkAxisProxy.IsPatternElement Property
Parent Object: WorkAxisProxy
Description
Property that gets whether the work axis was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkAxisProxy.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
WorkAxisProxy.Line Property
Parent Object: WorkAxisProxy
Description
Property that returns a Line geometry. The Line object returned provides information about the
position and direction of the work axis.
Syntax
WorkAxisProxy.Line() As Line
Property Value
This is a read only property whose value is a Line.
WorkAxisProxy Object Page 15 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.Name Property
Parent Object: WorkAxisProxy
Description
Specifies the name of the work axis.
Syntax
WorkAxisProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
WorkAxisProxy.NativeObject Property
Parent Object: WorkAxisProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
WorkAxisProxy.NativeObject() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
WorkAxisProxy Object Page 16 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.OwnedBy Property
Parent Object: WorkAxisProxy
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkAxisProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
WorkAxisProxy.Parent Property
Parent Object: WorkAxisProxy
Description
Property returning the parent object.
Syntax
WorkAxisProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
WorkAxisProxy Object Page 17 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5
WorkAxisProxy.ParentSketch Property
Parent Object: WorkAxisProxy
Description
Property that returns the parent ComponentDefinition object.
Syntax
WorkAxisProxy.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2008
WorkAxisProxy.ReferenceComponent
Property
Parent Object: WorkAxisProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkAxisProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
WorkAxisProxy Object Page 18 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 5.3
WorkAxisProxy.ReferencedEntity Property
Parent Object: WorkAxisProxy
Description
Property indicating the object this entity is dependent on.
Syntax
WorkAxisProxy.ReferencedEntity() As WorkAxis
Property Value
This is a read only property whose value is a WorkAxis.
Version
Introduced in version 5.3
WorkAxisProxy.SetByAnalyticEdge Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis to be based on the input edge.
Syntax
WorkAxisProxy.SetByAnalyticEdge( Edge As Edge )
Parameters
Name Type Description
Edge Edge Input Edge object that can be a circle, arc, or an ellipse.
WorkAxisProxy Object Page 19 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Version
Introduced in version 2008
WorkAxisProxy.SetByLine Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis to be based on the input line. This method is not valid when
the work axis exists in an Assembly component definition.
Syntax
WorkAxisProxy.SetByLine( Line As Object )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, SketchLine, or
SketchLine3D object.
Version
Introduced in version 2008
WorkAxisProxy.SetByLineAndPlane Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis so that it is along a line defined by projecting the input line
onto the input plane along the plane normal.
Syntax
WorkAxisProxy.SetByLineAndPlane( Line As Object, Plane As Object )
Parameters
WorkAxisProxy Object Page 20 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Plane Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Version
Introduced in version 2008
WorkAxisProxy.SetByLineAndPoint Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis so that it is parallel to a line and passes through the input
point.
Syntax
WorkAxisProxy.SetByLineAndPoint( Line As Object, Point As Object )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Point Object
Input object that represents a point. This object can be a Vertex, WorkPoint,
SketchPoint, or SketchPoint3D object.
Version
Introduced in version 2008
WorkAxisProxy.SetByNormalToSurface
Method
Parent Object: WorkAxisProxy
WorkAxisProxy Object Page 21 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Description
Method that redefines the work axis to pass through the input point and be normal to the input
surface.
Syntax
WorkAxisProxy.SetByNormalToSurface( Surface As Object, Point As Object )
Parameters
Name Type Description
Surface Object
Input object that represents a surface entity. This object can be a Face (planar or
non-planar), a WorkPlane or a PlanarSketch object.
Point Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Version
Introduced in version 2008
WorkAxisProxy.SetByRevolvedFace Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis to be at the axis of the input revolved face.
Syntax
WorkAxisProxy.SetByRevolvedFace( Face As Face )
Parameters
Name Type Description
Face Face
Input Face whose geometry is a revolved surface. Valid surface types include
cylinders, cones, and toroids.
Version
Introduced in version 2008
WorkAxisProxy Object Page 22 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
WorkAxisProxy.SetByTwoPlanes Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis to be at the intersection of the two input planes.
Syntax
WorkAxisProxy.SetByTwoPlanes( Plane1 As Object, Plane2 As Object )
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Version
Introduced in version 2008
WorkAxisProxy.SetByTwoPoints Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis to go between the two input points.
Syntax
WorkAxisProxy.SetByTwoPoints( Point1 As Object, Point2 As Object )
Parameters
Name Type Description
Point1 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
WorkAxisProxy Object Page 23 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Point2 Object Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Version
Introduced in version 2008
WorkAxisProxy.SetEndOfPart Method
Parent Object: WorkAxisProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkAxisProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkAxisProxy.SetFixed Method
Parent Object: WorkAxisProxy
Description
Method that redefines the work axis so it passes through the input point in the direction of the
input vector.
WorkAxisProxy Object Page 24 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Syntax
WorkAxisProxy.SetFixed( Point As Point, Axis As UnitVector )
Parameters
Name Type Description
Point Point Input Point object.
Axis UnitVector Input UnitVector object.
Version
Introduced in version 2008
WorkAxisProxy.SetSize Method
Parent Object: WorkAxisProxy
Description
Method that sets the current size of the displayed graphics for the work axis.
Syntax
WorkAxisProxy.SetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Input Point object that defines the first end point of the work axis.
Point2 Point Input Point object that defines the other end point of the work axis.
Version
Introduced in version 2008
WorkAxisProxy.Shared Property
Parent Object: WorkAxisProxy
WorkAxisProxy Object Page 25 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Description
Gets and sets whether the work axis is shared or not.
Syntax
WorkAxisProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkAxisProxy.Type Property
Parent Object: WorkAxisProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkAxisProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
WorkAxisProxy.Visible Property
Parent Object: WorkAxisProxy
Description
WorkAxisProxy Object Page 26 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
Specifies the visibility of the work axis.
Syntax
WorkAxisProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
WorkAxisProxy Object Page 27 of 27
file:///C:/Users/Cliente/AppData/Local/Temp/~hh348E.htm 17/06/2025
WorkPlane Object
Description
Represents a work plane. See here for an overview.
Methods
Name Description
Delete
Method that deletes the work plane. Optionally the dependent objects
will be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
FlipNormal
Method that reverses the normal of the work plane. The current
normal direction can be determined by using the Plane object returned
by Plane property of the work plane.
GetPosition
Method that returns the position and orientation of a work plane.
When sketches are created on a work plane they inherit the work
plane's origin and orientation. This method is useful to predetermine
what the orientation will be before the sketch is created.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSize
Method that gets the current size of the displayed graphics for the
work plane. The returned points are in the coordinate space of the
workplane.
SetByLineAndTangent
Method that redefines the work plane to be through the input line and
tangent to the input surface.
SetByLinePlaneAndAngle
Method that redefines the work plane to be through the input line at
the specified angle from the input plane.
SetByNormalToCurve
Method that redefines the work plane to pass through the input point
and normal to the input curve.
SetByPlaneAndOffset
Method that redefines the work plane to be parallel to the input plane
at a specified distance in the specified direction.
SetByPlaneAndPoint
Method that redefines the work plane to be parallel to the input plane
and passing through the input point.
SetByPlaneAndTangent
Method that redefines the work plane to be parallel to the input plane
and tangent to the input surface.
SetByPointAndTangent
Method that redefines the work plane to pass through the input point
and tangent to the input surface.
SetByThreePoints
Method that redefines the work plane to be based on the three input
points.
SetByTorusMidPlane
Method that redefines the work plane to be at the mid-plane of the
torus specified by the input face.
SetByTwoLines
Method that redefines the work plane to be based on the two input
lines.
SetByTwoPlanes
WorkPlane Object Page 1 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Method that redefines a bisection work plane to be based on the two
planes.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from. The argument defines if the end-of-part
marker will be positioned just before or just after the object. If the
object is contained within another object and is not in the top level of
the browser, the positioning of the marker will be relative to the toplevel
object the calling object is contained within. An example of this
case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
SetFixed
Method that redefines the work plane at the position and orientation
defined by the point and X and Y axis vectors.
SetSize
Method that sets the current size of the displayed graphics for the
work plane.
Properties
Name Description
Adaptive Specifies whether the work plane is adaptive.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
AutoResize
Gets and sets whether this work plane should be resized
automatically based on the component size.
Construction
Boolean property that returns whether the work plane is a
construction work plane or not. A construction work plane is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPlane object will
behave differently for a construction work plane. These are
Adaptive, Name, Visible, GetSize, and SetSize.
Consumed Gets whether the WorkPlane is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
Definition
Property that returns one of the work plane definition objects.
Which definition object returned will depend on how the work plane
is defined. The DefinitionType property can be used to determine
the type of definition the Definition property will return.
DefinitionType
Property that returns the type of definition that is used to define the
work plane. This can be kThreePointsWorkPlane,
kTwoLinesWorkPlane, kLineAndPointWorkPlane,
kPlaneAndPointWorkPlane, kLinePlaneAndAngleWorkPlane,
kPlaneAndOffsetWorkPlane, kLineAndTangentWorkPlane,
kPlaneAndTangentWorkPlane, kSketchWorkPlane,
kFixedWorkPlane, kNormalToCurveWorkPlane,
kTwoPlanesWorkPlane, kTorusMidPlaneWorkPlane, or
AssemblyWorkPlane.
Dependents
WorkPlane Object Page 2 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Property that returns the collection of objects that have a direct
dependency on the work plane.
DrivenBy
Property that returns the collection of objects that the work plane is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work plane is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work plane belongs to a coordinate
system. If so, edits and delete are not allowed.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch
Property that indicates whether the work plane belongs to a 3d
sketch.
IsPatternElement
Property that gets whether the work plane was created by a pattern.
If so, edits and delete are not allowed.
Name Specifies the name of the work plane.
OwnedBy
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch
Gets the parent 3d sketch if this work plane belongs to a 3d sketch,
Gets Nothing otherwise.
Plane
Property that returns a Plane's geometry. The Plane object returned
provides information about the position and normal of the work
plane.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the referenced WorkPlane in the case where
this work plane was created using a referenced component. An
example of this is when a work plane is selected as part of a derived
part. The HasReferenceComponent property indicates if this work
plane is based on a referenced component or not. This property
returns Nothing in the case where it is not based on a referenced
component.
Shared Gets and sets whether the work plane is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work plane.
Accessed From
AssemblyWorkPlaneDef.Parent, FixedWorkPlaneDef.Parent,
LineAndPointWorkPlaneDef.Parent, LineAndTangentWorkPlaneDef.Parent,
WorkPlane Object Page 3 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
LinePlaneAndAngleWorkPlaneDef.Parent, NormalToCurveWorkPlaneDef.Parent,
PlaneAndOffsetWorkPlaneDef.Parent, PlaneAndPointWorkPlaneDef.Parent,
PlaneAndTangentWorkPlaneDef.Parent, PointAndTangentWorkPlaneDef.Parent,
ThreePointsWorkPlaneDef.Parent, TorusMidPlaneWorkPlaneDef.Parent,
TwoLinesWorkPlaneDef.Parent, TwoPlanesWorkPlaneDef.Parent,
UserCoordinateSystem.XYPlane, UserCoordinateSystem.XZPlane,
UserCoordinateSystem.YZPlane, UserCoordinateSystemProxy.XYPlane,
UserCoordinateSystemProxy.XZPlane, UserCoordinateSystemProxy.YZPlane,
WorkPlane.ReferencedEntity, WorkPlaneProxy.NativeObject,
WorkPlaneProxy.ReferencedEntity, WorkPlanes.AddByLineAndTangent,
WorkPlanes.AddByLinePlaneAndAngle, WorkPlanes.AddByNormalToCurve,
WorkPlanes.AddByPlaneAndOffset, WorkPlanes.AddByPlaneAndPoint,
WorkPlanes.AddByPlaneAndTangent, WorkPlanes.AddByPointAndTangent,
WorkPlanes.AddByThreePoints, WorkPlanes.AddByTorusMidPlane,
WorkPlanes.AddByTwoLines, WorkPlanes.AddByTwoPlanes, WorkPlanes.AddFixed,
WorkPlanes.Item
Derived Classes
WorkPlaneProxy
Samples
Name Description
Add mate
constraint using
work planes in
parts
This sample demonstrates creating a mate constraint between two occurrences
using the work planes within those occurrences.
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another.
This is equivalent to the Promote command, but the API is much more flexible.
In order for the sample to be self-contained, it creates two parts on the fly that
will be used to demonstrate copying a body from one part to another. When
copying a body into a part, you provide the surface body and a matrix to define
its position in the new part. This sample creates a matrix based on the position
of these parts within an assembly.
Create sheet
metal lofted
flange feature
The following sample demonstrates the creation of a sheet metal lofted flange
feature.
Spline - create
NURBS
This sample demonstrates the creation of a sketch spline using a geometry
definition (a NURB). The API also supports creation of 3D sketch splines in a
similar way.
Sweep Feature
Add
This sample demonstrates the creation of a sweep feature. The profile is a
circle, but the path is made up of a 3D sketch and a 2D sketch.
WorkPlane Object Page 4 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 4
WorkPlane.Adaptive Property
Parent Object: WorkPlane
Description
Specifies whether the work plane is adaptive.
Syntax
WorkPlane.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkPlane.Application Property
Parent Object: WorkPlane
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkPlane.Application() As Object
Property Value
This is a read only property whose value is an Object.
WorkPlane Object Page 5 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 4
WorkPlane.AttributeSets Property
Parent Object: WorkPlane
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkPlane.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
WorkPlane.AutoResize Property
Parent Object: WorkPlane
Description
Gets and sets whether this work plane should be resized automatically based on the component
size.
Syntax
WorkPlane.AutoResize() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WorkPlane Object Page 6 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 2008
WorkPlane.Construction Property
Parent Object: WorkPlane
Description
Boolean property that returns whether the work plane is a construction work plane or not. A
construction work plane is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPlane object will behave differently for a
construction work plane. These are Adaptive, Name, Visible, GetSize, and SetSize.
Syntax
WorkPlane.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
WorkPlane.Consumed Property
Parent Object: WorkPlane
Description
Gets whether the WorkPlane is consumed or not.
Syntax
WorkPlane.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkPlane Object Page 7 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 11
WorkPlane.ConsumeInputs Property
Parent Object: WorkPlane
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
WorkPlane.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPlane.Definition Property
Parent Object: WorkPlane
Description
Property that returns one of the work plane definition objects. Which definition object returned
will depend on how the work plane is defined. The DefinitionType property can be used to
determine the type of definition the Definition property will return.
Syntax
WorkPlane.Definition() As Object
Property Value
This is a read only property whose value is an Object.
WorkPlane Object Page 8 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 4
WorkPlane.DefinitionType Property
Parent Object: WorkPlane
Description
Property that returns the type of definition that is used to define the work plane. This can be
kThreePointsWorkPlane, kTwoLinesWorkPlane, kLineAndPointWorkPlane,
kPlaneAndPointWorkPlane, kLinePlaneAndAngleWorkPlane, kPlaneAndOffsetWorkPlane,
kLineAndTangentWorkPlane, kPlaneAndTangentWorkPlane, kSketchWorkPlane,
kFixedWorkPlane, kNormalToCurveWorkPlane, kTwoPlanesWorkPlane,
kTorusMidPlaneWorkPlane, or AssemblyWorkPlane.
Syntax
WorkPlane.DefinitionType() As WorkPlaneDefinitionEnum
Property Value
This is a read only property whose value is a WorkPlaneDefinitionEnum.
Version
Introduced in version 4
WorkPlane.Delete Method
Parent Object: WorkPlane
Description
Method that deletes the work plane. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
Syntax
WorkPlane.Delete( [RetainDependents] As Boolean )
WorkPlane Object Page 9 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This argument is ignored in the case of an assembly work plane.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlane.Dependents Property
Parent Object: WorkPlane
Description
Property that returns the collection of objects that have a direct dependency on the work plane.
Syntax
WorkPlane.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
WorkPlane.DrivenBy Property
Parent Object: WorkPlane
Description
Property that returns the collection of objects that the work plane is dependent on.
WorkPlane Object Page 10 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Syntax
WorkPlane.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
WorkPlane.Exported Property
Parent Object: WorkPlane
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkPlane.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkPlane.FlipNormal Method
Parent Object: WorkPlane
Description
Method that reverses the normal of the work plane. The current normal direction can be
determined by using the Plane object returned by Plane property of the work plane.
WorkPlane Object Page 11 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Syntax
WorkPlane.FlipNormal()
Version
Introduced in version 11
WorkPlane.GetPosition Method
Parent Object: WorkPlane
Description
Method that returns the position and orientation of a work plane. When sketches are created on a
work plane they inherit the work plane's origin and orientation. This method is useful to
predetermine what the orientation will be before the sketch is created.
Syntax
WorkPlane.GetPosition( Origin As Point, XAxis As UnitVector, YAxis As UnitVector )
Parameters
Name Type Description
Origin Point Output Point object that defines the origin of the work plane.
XAxis UnitVector Output UnitVector object that defines the X-axis vector of the work plane.
YAxis UnitVector Output UnitVector object that defines the Y-axis vector of the work plane.
Version
Introduced in version 4
WorkPlane.GetReferenceKey Method
Parent Object: WorkPlane
Description
Method that generates and returns the reference key for this entity.
WorkPlane Object Page 12 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Syntax
WorkPlane.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkPlane.GetSize Method
Parent Object: WorkPlane
Description
Method that gets the current size of the displayed graphics for the work plane. The returned points
are in the coordinate space of the workplane.
Syntax
WorkPlane.GetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Output Point object that defines the first corner of the work plane.
WorkPlane Object Page 13 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Point2 Point Output Point object that defines the diagonal corner of the work plane.
Remarks
The work plane is functionally infinite but has a plane that is displayed to allow the user to interact
with it graphically. The size and the position of the plane can be adjusted to make it easier for the
user to interact with. Construction work planes are never visible to the user and don't need to have
a size defined. This method will fail in the case of a construction work plane. You can determine if
the work plane is a construction work plane by checking the Construction property of the
WorkPlane object. The two points define the diagonal corners of the displayed rectangle. The
rectangle is parallel to the X-axis of the plane.
Version
Introduced in version 4
WorkPlane.Grounded Property
Parent Object: WorkPlane
Description
Gets/Sets the Boolean flag that specifies whether this work plane is grounded or not.
Syntax
WorkPlane.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkPlane.HasReferenceComponent
Property
Parent Object: WorkPlane
WorkPlane Object Page 14 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkPlane.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5.3
WorkPlane.HealthStatus Property
Parent Object: WorkPlane
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkPlane.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 4
WorkPlane.IsCoordinateSystemElement
Property
Parent Object: WorkPlane
WorkPlane Object Page 15 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Property that returns whether the work plane belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkPlane.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
WorkPlane.IsOwnedByFeature Property
Parent Object: WorkPlane
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkPlane.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPlane.IsParentSketch Property
Parent Object: WorkPlane
WorkPlane Object Page 16 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Property that indicates whether the work plane belongs to a 3d sketch.
Syntax
WorkPlane.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPlane.IsPatternElement Property
Parent Object: WorkPlane
Description
Property that gets whether the work plane was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkPlane.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
WorkPlane.Name Property
Parent Object: WorkPlane
WorkPlane Object Page 17 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Specifies the name of the work plane.
Syntax
WorkPlane.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 4
WorkPlane.OwnedBy Property
Parent Object: WorkPlane
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkPlane.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
WorkPlane.Parent Property
Parent Object: WorkPlane
WorkPlane Object Page 18 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Property returning the parent object.
Syntax
WorkPlane.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkPlane.ParentSketch Property
Parent Object: WorkPlane
Description
Gets the parent 3d sketch if this work plane belongs to a 3d sketch, Gets Nothing otherwise.
Syntax
WorkPlane.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2008
WorkPlane.Plane Property
Parent Object: WorkPlane
Description
WorkPlane Object Page 19 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Property that returns a Plane's geometry. The Plane object returned provides information about the
position and normal of the work plane.
Syntax
WorkPlane.Plane() As Plane
Property Value
This is a read only property whose value is a Plane.
Version
Introduced in version 4
WorkPlane.ReferenceComponent Property
Parent Object: WorkPlane
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkPlane.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 5.3
WorkPlane.ReferencedEntity Property
Parent Object: WorkPlane
Description
Property that returns the referenced WorkPlane in the case where this work plane was created
using a referenced component. An example of this is when a work plane is selected as part of a
WorkPlane Object Page 20 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
derived part. The HasReferenceComponent property indicates if this work plane is based on a
referenced component or not. This property returns Nothing in the case where it is not based on a
referenced component.
Syntax
WorkPlane.ReferencedEntity() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 5.3
WorkPlane.SetByLineAndTangent Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be through the input line and tangent to the input surface.
Syntax
WorkPlane.SetByLineAndTangent( Line As Object, Face As Face, ProximityPoint As Point )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, SketchLine, or SketchLine3D object.
Face Face
Input Face object that indicates the tangent surface. Valid geometry for
the face includes cylinders, cones, and spheres. This face must either be a
cylinder whose axis is parallel to the line, a cone that is positioned such
that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. For cylinders and spheres the plane can be on either side of the
surface. Which solution to use will be determined by which side the
proximity point is closest to. This point is only used for the initial
computation. During a recompute of the model the plane will remain on
the same side of the tangent surface regardless of its position relative to
the originally specified point.
WorkPlane Object Page 21 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Remarks
This method is not valid when the work plane exists in an Assembly component definition
Version
Introduced in version 4
WorkPlane.SetByLinePlaneAndAngle
Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be through the input line at the specified angle from the
input plane.
Syntax
WorkPlane.SetByLinePlaneAndAngle( Line As Object, Plane As Object, Angle As Variant )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Angle Variant
Input Variant that defines the offset angle of the work plane from the input plane.
This can be a numeric value or a string. The offset angle of a work plane is always
defined by a parameter. When a new work plane is created, the parameter is
automatically created. If a numeric value is supplied the new parameter is set to
the value specified and the value is always in radians. If a string is supplied it is
used as the expression for the newly created parameter and will be interpreted the
same as if the user entered it in a dialog. This means if a value is specified without
a unit qualifier it will default to the current document length unit. The following is
a valid entry for the angle, assuming the parameter d2 already exists and defines
an angle, 'd2 + 10 deg'. The positive angle direction is computed by crossing the
axis vector with the plane normal vector.
WorkPlane Object Page 22 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 4
WorkPlane.SetByNormalToCurve Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to pass through the input point and normal to the input
curve.
Syntax
WorkPlane.SetByNormalToCurve( CurveEntity As Object, Point As Object )
Parameters
Name Type Description
CurveEntity Object
Input object that represents a curve entity. This object can be an Edge, 3D
sketch entity, 2D sketch entity or a WorkAxis. For an Edge or 3D sketch
entity the geometry must be a Spline, Arc, Circle, EllipticalArc, or Ellipse.
For a 2D sketch entity, the geometry must be a Spline2d, Arc2d, Circle2d,
EllipticalArc2d, or Ellipse2d.
Point Object
Input object that represents a point, The point must lie on the curve, as
described below. This object can be a WorkPoint, Vertex, SketchPoint, or
SketchPoint3D object. If the input curve is a 2D sketch entity, the point must
be a SketchPoint that meets one of the following conditions: start or end
point of the curve, one of the fit points of a spline, or constrained to the curve
with a coincident constraint. If the input curve is a 3D curve, the point must
be related to the curve. For a 3D point to be related to a 3D curve, it can be
the start, mid, or end point of the curve.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
WorkPlane Object Page 23 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 2008
WorkPlane.SetByPlaneAndOffset Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be parallel to the input plane at a specified distance in the
specified direction.
Syntax
WorkPlane.SetByPlaneAndOffset( Plane As Object, Offset As Variant )
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object..
Offset Variant
Input Variant that defines the offset distance of the Plane. This can be a numeric
value or a string. The offset distance of a work plane is always defined by a
parameter. When a new work plane is created that requires a parameter, that
parameter is automatically created when the work plane is created. If a numeric
value is supplied the new parameter is set to the value specified. The input value is
in centimeters. If a string is supplied this will be used as the expression for the
newly created parameter and will be interpreted the same as if the user entered it
in a dialog. This means if a value is specified without a unit qualifier it will default
to the current document length unit. The following is a valid entry for the offset,
assuming the parameter d2 already exists and defines a length, 'd2 + 3 in'. The sign
of the value controls which side of the plane the offset is in. A positive value will
be in the positive normal side of the plane.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 4
WorkPlane Object Page 24 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
WorkPlane.SetByPlaneAndPoint Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be parallel to the input plane and passing through the
input point.
Syntax
WorkPlane.SetByPlaneAndPoint( Plane As Object, Point As Object )
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Point Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 4
WorkPlane.SetByPlaneAndTangent Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be parallel to the input plane and tangent to the input
surface.
Syntax
WorkPlane.SetByPlaneAndTangent( Plane As Object, Face As Face, ProximityPoint As Point )
WorkPlane Object Page 25 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Face Face
Input Face object that indicates the tangent surface. This face must either
be a cylinder whose axis is parallel to the line, a cone that is positioned
such that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. Valid geometry for the face includes cylinders, cones, and spheres.
For cylinders and spheres the plane can be on either side of the surface.
Which solution to use will be determined by which side the proximity
point is closest to. This point is only used for the initial computation.
During a recompute the plane will remain on the same side of the tangent
surface regardless of its position relative to the originally specified point.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 4
WorkPlane.SetByPointAndTangent Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to pass through the input point and tangent to the input
surface.
Syntax
WorkPlane.SetByPointAndTangent( Point As Object, Face As Face )
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex, WorkPoint,
SketchPoint3D or SketchPoint object. The input point must lie on the input surface.
WorkPlane Object Page 26 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Face Face Input Face object that indicates the tangent surface. This face must either be a
cylinder, a cone that is positioned such that a valid tangent exists, a sphere or a
bspline surface.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPlane.SetByThreePoints Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be based on the three input points.
Syntax
WorkPlane.SetByThreePoints( Point1 As Object, Point2 As Object, Point3 As Object )
Parameters
Name Type Description
Point1 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Point2 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Point3 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Remarks
The three input points must be unique non-coincident points. Point1 to Point2 defines the positive
X axis and Point3 defines the positive Y direction. This method is not valid when the work plane
exists in an Assembly component definition.
WorkPlane Object Page 27 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Version
Introduced in version 2008
WorkPlane.SetByTorusMidPlane Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be at the mid-plane of the torus specified by the input
face.
Syntax
WorkPlane.SetByTorusMidPlane( Face As Face )
Parameters
Name Type Description
Face Face Input Face object that represents a torus surface.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPlane.SetByTwoLines Method
Parent Object: WorkPlane
Description
Method that redefines the work plane to be based on the two input lines.
Syntax
WorkPlane.SetByTwoLines( Line1 As Object, Line2 As Object )
WorkPlane Object Page 28 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Parameters
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Line2 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Remarks
Line1 defines the X axis. If the two lines are not in the same plane, the plane is calculated by
crossing the vectors defined by Line1 and Line2. This method is not valid when the work plane
exists in an Assembly component definition.
Version
Introduced in version 4
WorkPlane.SetByTwoPlanes Method
Parent Object: WorkPlane
Description
Method that redefines a bisection work plane to be based on the two planes.
Syntax
WorkPlane.SetByTwoPlanes( Plane1 As Object, Plane2 As Object, [QuadrantPoint] As
Variant )
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
QuadrantPoint Variant Optional input Point to indicate which quadrant the new work plane
should be created in. If the two input planes are parallel this argument will
be ignored, while the two input planes are intersected then this argument
is required to determine which quadrant the new work plane will be
created in.
WorkPlane Object Page 29 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
This is an optional argument whose default value is null.
Remarks
This method is not valid when the work plane exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPlane.SetEndOfPart Method
Parent Object: WorkPlane
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkPlane.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkPlane.SetFixed Method
Parent Object: WorkPlane
WorkPlane Object Page 30 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Description
Method that redefines the work plane at the position and orientation defined by the point and X
and Y axis vectors.
Syntax
WorkPlane.SetFixed( OriginPoint As Point, XAxis As UnitVector, YAxis As UnitVector )
Parameters
Name Type Description
OriginPoint Point Input Point object that defines the origin of the work plane.
XAxis UnitVector Input UnitVector object that defines the X-axis vector of the work plane.
YAxis UnitVector Input UnitVector object that defines the Y-axis vector of the work plane.
Remarks
This method works for both the work plane that exists in part and assembly document.
Version
Introduced in version 4
WorkPlane.SetSize Method
Parent Object: WorkPlane
Description
Method that sets the current size of the displayed graphics for the work plane.
Syntax
WorkPlane.SetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Input object that defines the first corner of the work plane.
Point2 Point Input object that defines the diagonal corner of the work plane.
WorkPlane Object Page 31 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Remarks
The input points should be in the coordinate space of the workplane. The work plane is
functionally infinite but has a plane that is displayed to allow the user to interact with it
graphically. The size and the position of the plane can be adjusted to make it easier for the user to
interact with. Construction work planes are never visible to the user and don't need to have a size
defined. This method will fail in the case of a construction work plane. You can determine if the
work plane is a construction work plane by checking the Construction property of the WorkPlane
object. This method will also fail if the AutoResize property is set to True. The two points define
the diagonal corners of the displayed rectangle. The rectangles sides are parallel to the X and Y
axes of the plane.
Version
Introduced in version 4
WorkPlane.Shared Property
Parent Object: WorkPlane
Description
Gets and sets whether the work plane is shared or not.
Syntax
WorkPlane.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPlane.Type Property
Parent Object: WorkPlane
Description
Returns an ObjectTypeEnum indicating this object's type.
WorkPlane Object Page 32 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
Syntax
WorkPlane.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
WorkPlane.Visible Property
Parent Object: WorkPlane
Description
Specifies the visibility of the work plane.
Syntax
WorkPlane.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkPlane Object Page 33 of 33
file:///C:/Users/Cliente/AppData/Local/Temp/~hh5E2E.htm 17/06/2025
WorkPlaneProxy Object
Derived from: WorkPlane Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the work plane. Optionally the dependent objects
will be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
FlipNormal
Method that reverses the normal of the work plane. The current
normal direction can be determined by using the Plane object returned
by Plane property of the work plane.
GetPosition
Method that returns the position and orientation of a work plane.
When sketches are created on a work plane they inherit the work
plane's origin and orientation. This method is useful to predetermine
what the orientation will be before the sketch is created.
GetReferenceKey Method that generates and returns the reference key for this entity.
GetSize
Method that gets the current size of the displayed graphics for the
work plane. The returned points are in the coordinate space of the
workplane.
SetByLineAndTangent
Method that redefines the work plane to be through the input line and
tangent to the input surface.
SetByLinePlaneAndAngle
Method that redefines the work plane to be through the input line at
the specified angle from the input plane.
SetByNormalToCurve
Method that redefines the work plane to pass through the input point
and normal to the input curve.
SetByPlaneAndOffset
Method that redefines the work plane to be parallel to the input plane
at a specified distance in the specified direction.
SetByPlaneAndPoint
Method that redefines the work plane to be parallel to the input plane
and passing through the input point.
SetByPlaneAndTangent
Method that redefines the work plane to be parallel to the input plane
and tangent to the input surface.
SetByPointAndTangent
Method that redefines the work plane to pass through the input point
and tangent to the input surface.
SetByThreePoints
Method that redefines the work plane to be based on the three input
points.
SetByTorusMidPlane
Method that redefines the work plane to be at the mid-plane of the
torus specified by the input face.
SetByTwoLines
Method that redefines the work plane to be based on the two input
lines.
WorkPlaneProxy Object Page 1 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
SetByTwoPlanes
Method that redefines a bisection work plane to be based on the two
planes.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object
this method is called from. The argument defines if the end-of-part
marker will be positioned just before or just after the object. If the
object is contained within another object and is not in the top level of
the browser, the positioning of the marker will be relative to the toplevel
object the calling object is contained within. An example of this
case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
SetFixed
Method that redefines the work plane at the position and orientation
defined by the point and X and Y axis vectors.
SetSize
Method that sets the current size of the displayed graphics for the
work plane.
Properties
Name Description
Adaptive Specifies whether the work plane is adaptive.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
AutoResize
Gets and sets whether this work plane should be resized
automatically based on the component size.
Construction
Boolean property that returns whether the work plane is a
construction work plane or not. A construction work plane is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPlane object will
behave differently for a construction work plane. These are
Adaptive, Name, Visible, GetSize, and SetSize.
Consumed Gets whether the WorkPlane is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native
object is being referenced through. The returned occurrence is the
containing occurrence.
Definition
Property that returns one of the work plane definition objects.
Which definition object returned will depend on how the work plane
is defined. The DefinitionType property can be used to determine
the type of definition the Definition property will return.
DefinitionType Property that returns the type of definition that is used to define the
work plane. This can be kThreePointsWorkPlane,
kTwoLinesWorkPlane, kLineAndPointWorkPlane,
kPlaneAndPointWorkPlane, kLinePlaneAndAngleWorkPlane,
kPlaneAndOffsetWorkPlane, kLineAndTangentWorkPlane,
kPlaneAndTangentWorkPlane, kSketchWorkPlane,
kFixedWorkPlane, kNormalToCurveWorkPlane,
WorkPlaneProxy Object Page 2 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
kTwoPlanesWorkPlane, kTorusMidPlaneWorkPlane, or
AssemblyWorkPlane.
Dependents
Property that returns the collection of objects that have a direct
dependency on the work plane.
DrivenBy
Property that returns the collection of objects that the work plane is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work plane is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work plane belongs to a coordinate
system. If so, edits and delete are not allowed.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch
Property that indicates whether the work plane belongs to a 3d
sketch.
IsPatternElement
Property that gets whether the work plane was created by a pattern.
If so, edits and delete are not allowed.
Name Specifies the name of the work plane.
NativeObject
Gets the object in the context of the definition instead of the
containing assembly.
OwnedBy
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch
Gets the parent 3d sketch if this work plane belongs to a 3d sketch,
Gets Nothing otherwise.
Plane
Property that returns a Plane's geometry. The Plane object returned
provides information about the position and normal of the work
plane.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the referenced WorkPlane in the case where
this work plane was created using a referenced component. An
example of this is when a work plane is selected as part of a derived
part. The HasReferenceComponent property indicates if this work
plane is based on a referenced component or not. This property
returns Nothing in the case where it is not based on a referenced
component.
Shared Gets and sets whether the work plane is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work plane.
WorkPlaneProxy Object Page 3 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.Adaptive Property
Parent Object: WorkPlaneProxy
Description
Specifies whether the work plane is adaptive.
Syntax
WorkPlaneProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
WorkPlaneProxy.Application Property
Parent Object: WorkPlaneProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkPlaneProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
WorkPlaneProxy Object Page 4 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.AttributeSets Property
Parent Object: WorkPlaneProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkPlaneProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
WorkPlaneProxy.AutoResize Property
Parent Object: WorkPlaneProxy
Description
Gets and sets whether this work plane should be resized automatically based on the component
size.
Syntax
WorkPlaneProxy.AutoResize() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WorkPlaneProxy Object Page 5 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 2008
WorkPlaneProxy.Construction Property
Parent Object: WorkPlaneProxy
Description
Boolean property that returns whether the work plane is a construction work plane or not. A
construction work plane is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPlane object will behave differently for a
construction work plane. These are Adaptive, Name, Visible, GetSize, and SetSize.
Syntax
WorkPlaneProxy.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
WorkPlaneProxy.Consumed Property
Parent Object: WorkPlaneProxy
Description
Gets whether the WorkPlane is consumed or not.
Syntax
WorkPlaneProxy.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkPlaneProxy Object Page 6 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 11
WorkPlaneProxy.ConsumeInputs Property
Parent Object: WorkPlaneProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
WorkPlaneProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPlaneProxy.ContainingOccurrence
Property
Parent Object: WorkPlaneProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
WorkPlaneProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
WorkPlaneProxy Object Page 7 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.Definition Property
Parent Object: WorkPlaneProxy
Description
Property that returns one of the work plane definition objects. Which definition object returned
will depend on how the work plane is defined. The DefinitionType property can be used to
determine the type of definition the Definition property will return.
Syntax
WorkPlaneProxy.Definition() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
WorkPlaneProxy.DefinitionType Property
Parent Object: WorkPlaneProxy
Description
Property that returns the type of definition that is used to define the work plane. This can be
kThreePointsWorkPlane, kTwoLinesWorkPlane, kLineAndPointWorkPlane,
kPlaneAndPointWorkPlane, kLinePlaneAndAngleWorkPlane, kPlaneAndOffsetWorkPlane,
kLineAndTangentWorkPlane, kPlaneAndTangentWorkPlane, kSketchWorkPlane,
kFixedWorkPlane, kNormalToCurveWorkPlane, kTwoPlanesWorkPlane,
kTorusMidPlaneWorkPlane, or AssemblyWorkPlane.
Syntax
WorkPlaneProxy.DefinitionType() As WorkPlaneDefinitionEnum
WorkPlaneProxy Object Page 8 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Property Value
This is a read only property whose value is a WorkPlaneDefinitionEnum.
Version
Introduced in version 5
WorkPlaneProxy.Delete Method
Parent Object: WorkPlaneProxy
Description
Method that deletes the work plane. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
Syntax
WorkPlaneProxy.Delete( [RetainDependents] As Boolean )
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This argument is ignored in the case of an assembly work plane.
This is an optional argument whose default value is False.
Version
Introduced in version 5
WorkPlaneProxy.Dependents Property
Parent Object: WorkPlaneProxy
Description
Property that returns the collection of objects that have a direct dependency on the work plane.
WorkPlaneProxy Object Page 9 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Syntax
WorkPlaneProxy.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkPlaneProxy.DrivenBy Property
Parent Object: WorkPlaneProxy
Description
Property that returns the collection of objects that the work plane is dependent on.
Syntax
WorkPlaneProxy.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkPlaneProxy.Exported Property
Parent Object: WorkPlaneProxy
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
WorkPlaneProxy Object Page 10 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Syntax
WorkPlaneProxy.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkPlaneProxy.FlipNormal Method
Parent Object: WorkPlaneProxy
Description
Method that reverses the normal of the work plane. The current normal direction can be
determined by using the Plane object returned by Plane property of the work plane.
Syntax
WorkPlaneProxy.FlipNormal()
Version
Introduced in version 11
WorkPlaneProxy.GetPosition Method
Parent Object: WorkPlaneProxy
Description
Method that returns the position and orientation of a work plane. When sketches are created on a
work plane they inherit the work plane's origin and orientation. This method is useful to
predetermine what the orientation will be before the sketch is created.
Syntax
WorkPlaneProxy.GetPosition( Origin As Point, XAxis As UnitVector, YAxis As UnitVector )
WorkPlaneProxy Object Page 11 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Parameters
Name Type Description
Origin Point Output Point object that defines the origin of the work plane.
XAxis UnitVector Output UnitVector object that defines the X-axis vector of the work plane.
YAxis UnitVector Output UnitVector object that defines the Y-axis vector of the work plane.
Version
Introduced in version 5
WorkPlaneProxy.GetReferenceKey Method
Parent Object: WorkPlaneProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkPlaneProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkPlaneProxy.GetSize Method
WorkPlaneProxy Object Page 12 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Parent Object: WorkPlaneProxy
Description
Method that gets the current size of the displayed graphics for the work plane. The returned points
are in the coordinate space of the workplane.
Syntax
WorkPlaneProxy.GetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Output Point object that defines the first corner of the work plane.
Point2 Point Output Point object that defines the diagonal corner of the work plane.
Version
Introduced in version 5
WorkPlaneProxy.Grounded Property
Parent Object: WorkPlaneProxy
Description
Gets/Sets the Boolean flag that specifies whether this work plane is grounded or not.
Syntax
WorkPlaneProxy.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkPlaneProxy Object Page 13 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
WorkPlaneProxy.HasReferenceComponent
Property
Parent Object: WorkPlaneProxy
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkPlaneProxy.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5.3
WorkPlaneProxy.HealthStatus Property
Parent Object: WorkPlaneProxy
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkPlaneProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
WorkPlaneProxy Object Page 14 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
WorkPlaneProxy.IsCoordinateSystemElement
Property
Parent Object: WorkPlaneProxy
Description
Property that returns whether the work plane belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkPlaneProxy.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
WorkPlaneProxy.IsOwnedByFeature
Property
Parent Object: WorkPlaneProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkPlaneProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkPlaneProxy Object Page 15 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 2008
WorkPlaneProxy.IsParentSketch Property
Parent Object: WorkPlaneProxy
Description
Property that indicates whether the work plane belongs to a 3d sketch.
Syntax
WorkPlaneProxy.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPlaneProxy.IsPatternElement Property
Parent Object: WorkPlaneProxy
Description
Property that gets whether the work plane was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkPlaneProxy.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkPlaneProxy Object Page 16 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 9
WorkPlaneProxy.Name Property
Parent Object: WorkPlaneProxy
Description
Specifies the name of the work plane.
Syntax
WorkPlaneProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
WorkPlaneProxy.NativeObject Property
Parent Object: WorkPlaneProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
WorkPlaneProxy.NativeObject() As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
WorkPlaneProxy Object Page 17 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.OwnedBy Property
Parent Object: WorkPlaneProxy
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkPlaneProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
WorkPlaneProxy.Parent Property
Parent Object: WorkPlaneProxy
Description
Property returning the parent object.
Syntax
WorkPlaneProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
WorkPlaneProxy Object Page 18 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.ParentSketch Property
Parent Object: WorkPlaneProxy
Description
Gets the parent 3d sketch if this work plane belongs to a 3d sketch, Gets Nothing otherwise.
Syntax
WorkPlaneProxy.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2008
WorkPlaneProxy.Plane Property
Parent Object: WorkPlaneProxy
Description
Property that returns a Plane's geometry. The Plane object returned provides information about the
position and normal of the work plane.
Syntax
WorkPlaneProxy.Plane() As Plane
Property Value
This is a read only property whose value is a Plane.
WorkPlaneProxy Object Page 19 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 5
WorkPlaneProxy.ReferenceComponent
Property
Parent Object: WorkPlaneProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkPlaneProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 5.3
WorkPlaneProxy.ReferencedEntity Property
Parent Object: WorkPlaneProxy
Description
Property that returns the referenced WorkPlane in the case where this work plane was created
using a referenced component. An example of this is when a work plane is selected as part of a
derived part. The HasReferenceComponent property indicates if this work plane is based on a
referenced component or not. This property returns Nothing in the case where it is not based on a
referenced component.
Syntax
WorkPlaneProxy.ReferencedEntity() As WorkPlane
WorkPlaneProxy Object Page 20 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Property Value
This is a read only property whose value is a WorkPlane.
Version
Introduced in version 5.3
WorkPlaneProxy.SetByLineAndTangent
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be through the input line and tangent to the input surface.
Syntax
WorkPlaneProxy.SetByLineAndTangent( Line As Object, Face As Face, ProximityPoint As
Point )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, SketchLine, or SketchLine3D object.
Face Face
Input Face object that indicates the tangent surface. Valid geometry for
the face includes cylinders, cones, and spheres. This face must either be a
cylinder whose axis is parallel to the line, a cone that is positioned such
that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. For cylinders and spheres the plane can be on either side of the
surface. Which solution to use will be determined by which side the
proximity point is closest to. This point is only used for the initial
computation. During a recompute of the model the plane will remain on
the same side of the tangent surface regardless of its position relative to
the originally specified point.
Version
Introduced in version 2008
WorkPlaneProxy Object Page 21 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
WorkPlaneProxy.SetByLinePlaneAndAngle
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be through the input line at the specified angle from the
input plane.
Syntax
WorkPlaneProxy.SetByLinePlaneAndAngle( Line As Object, Plane As Object, Angle As
Variant )
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Angle Variant
Input Variant that defines the offset angle of the work plane from the input plane.
This can be a numeric value or a string. The offset angle of a work plane is always
defined by a parameter. When a new work plane is created, the parameter is
automatically created. If a numeric value is supplied the new parameter is set to
the value specified and the value is always in radians. If a string is supplied it is
used as the expression for the newly created parameter and will be interpreted the
same as if the user entered it in a dialog. This means if a value is specified without
a unit qualifier it will default to the current document length unit. The following is
a valid entry for the angle, assuming the parameter d2 already exists and defines
an angle, 'd2 + 10 deg'. The positive angle direction is computed by crossing the
axis vector with the plane normal vector.
Version
Introduced in version 2008
WorkPlaneProxy.SetByNormalToCurve
Method
Parent Object: WorkPlaneProxy
WorkPlaneProxy Object Page 22 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Description
Method that redefines the work plane to pass through the input point and normal to the input
curve.
Syntax
WorkPlaneProxy.SetByNormalToCurve( CurveEntity As Object, Point As Object )
Parameters
Name Type Description
CurveEntity Object
Input object that represents a curve entity. This object can be an Edge, 3D
sketch entity, 2D sketch entity or a WorkAxis. For an Edge or 3D sketch
entity the geometry must be a Spline, Arc, Circle, EllipticalArc, or Ellipse.
For a 2D sketch entity, the geometry must be a Spline2d, Arc2d, Circle2d,
EllipticalArc2d, or Ellipse2d.
Point Object
Input object that represents a point, The point must lie on the curve, as
described below. This object can be a WorkPoint, Vertex, SketchPoint, or
SketchPoint3D object. If the input curve is a 2D sketch entity, the point must
be a SketchPoint that meets one of the following conditions: start or end
point of the curve, one of the fit points of a spline, or constrained to the curve
with a coincident constraint. If the input curve is a 3D curve, the point must
be related to the curve. For a 3D point to be related to a 3D curve, it can be
the start, mid, or end point of the curve.
Version
Introduced in version 2008
WorkPlaneProxy.SetByPlaneAndOffset
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be parallel to the input plane at a specified distance in the
specified direction.
Syntax
WorkPlaneProxy.SetByPlaneAndOffset( Plane As Object, Offset As Variant )
WorkPlaneProxy Object Page 23 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object..
Offset Variant
Input Variant that defines the offset distance of the Plane. This can be a numeric
value or a string. The offset distance of a work plane is always defined by a
parameter. When a new work plane is created that requires a parameter, that
parameter is automatically created when the work plane is created. If a numeric
value is supplied the new parameter is set to the value specified. The input value is
in centimeters. If a string is supplied this will be used as the expression for the
newly created parameter and will be interpreted the same as if the user entered it
in a dialog. This means if a value is specified without a unit qualifier it will default
to the current document length unit. The following is a valid entry for the offset,
assuming the parameter d2 already exists and defines a length, 'd2 + 3 in'. The sign
of the value controls which side of the plane the offset is in. A positive value will
be in the positive normal side of the plane.
Version
Introduced in version 5
WorkPlaneProxy.SetByPlaneAndPoint
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be parallel to the input plane and passing through the
input point.
Syntax
WorkPlaneProxy.SetByPlaneAndPoint( Plane As Object, Point As Object )
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Point Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
WorkPlaneProxy Object Page 24 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Version
Introduced in version 2008
WorkPlaneProxy.SetByPlaneAndTangent
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be parallel to the input plane and tangent to the input
surface.
Syntax
WorkPlaneProxy.SetByPlaneAndTangent( Plane As Object, Face As Face, ProximityPoint As
Point )
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Face Face
Input Face object that indicates the tangent surface. This face must either
be a cylinder whose axis is parallel to the line, a cone that is positioned
such that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. Valid geometry for the face includes cylinders, cones, and spheres.
For cylinders and spheres the plane can be on either side of the surface.
Which solution to use will be determined by which side the proximity
point is closest to. This point is only used for the initial computation.
During a recompute the plane will remain on the same side of the tangent
surface regardless of its position relative to the originally specified point.
Version
Introduced in version 2008
WorkPlaneProxy Object Page 25 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
WorkPlaneProxy.SetByPointAndTangent
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to pass through the input point and tangent to the input
surface.
Syntax
WorkPlaneProxy.SetByPointAndTangent( Point As Object, Face As Face )
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex, WorkPoint,
SketchPoint3D or SketchPoint object. The input point must lie on the input surface.
Face Face
Input Face object that indicates the tangent surface. This face must either be a
cylinder, a cone that is positioned such that a valid tangent exists, a sphere or a
bspline surface.
Version
Introduced in version 2008
WorkPlaneProxy.SetByThreePoints Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be based on the three input points.
Syntax
WorkPlaneProxy.SetByThreePoints( Point1 As Object, Point2 As Object, Point3 As Object )
Parameters
Name Type Description
WorkPlaneProxy Object Page 26 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Point1 Object Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Point2 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Point3 Object
Input object that represents a point. This object can be a WorkPoint, Vertex,
SketchPoint, or SketchPoint3D object.
Version
Introduced in version 2008
WorkPlaneProxy.SetByTorusMidPlane
Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane to be at the mid-plane of the torus specified by the input
face.
Syntax
WorkPlaneProxy.SetByTorusMidPlane( Face As Face )
Parameters
Name Type Description
Face Face Input Face object that represents a torus surface.
Version
Introduced in version 2008
WorkPlaneProxy.SetByTwoLines Method
Parent Object: WorkPlaneProxy
Description
WorkPlaneProxy Object Page 27 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Method that redefines the work plane to be based on the two input lines.
Syntax
WorkPlaneProxy.SetByTwoLines( Line1 As Object, Line2 As Object )
Parameters
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Line2 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Version
Introduced in version 2008
WorkPlaneProxy.SetByTwoPlanes Method
Parent Object: WorkPlaneProxy
Description
Method that redefines a bisection work plane to be based on the two planes.
Syntax
WorkPlaneProxy.SetByTwoPlanes( Plane1 As Object, Plane2 As Object, [QuadrantPoint] As
Variant )
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
QuadrantPoint Variant Optional input Point to indicate which quadrant the new work plane
should be created in. If the two input planes are parallel this argument will
be ignored, while the two input planes are intersected then this argument
is required to determine which quadrant the new work plane will be
created in.
WorkPlaneProxy Object Page 28 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
This is an optional argument whose default value is null.
Version
Introduced in version 2008
WorkPlaneProxy.SetEndOfPart Method
Parent Object: WorkPlaneProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkPlaneProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkPlaneProxy.SetFixed Method
Parent Object: WorkPlaneProxy
Description
Method that redefines the work plane at the position and orientation defined by the point and X
and Y axis vectors.
WorkPlaneProxy Object Page 29 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Syntax
WorkPlaneProxy.SetFixed( OriginPoint As Point, XAxis As UnitVector, YAxis As UnitVector )
Parameters
Name Type Description
OriginPoint Point Input Point object that defines the origin of the work plane.
XAxis UnitVector Input UnitVector object that defines the X-axis vector of the work plane.
YAxis UnitVector Input UnitVector object that defines the Y-axis vector of the work plane.
Version
Introduced in version 2008
WorkPlaneProxy.SetSize Method
Parent Object: WorkPlaneProxy
Description
Method that sets the current size of the displayed graphics for the work plane.
Syntax
WorkPlaneProxy.SetSize( Point1 As Point, Point2 As Point )
Parameters
Name Type Description
Point1 Point Input object that defines the first corner of the work plane.
Point2 Point Input object that defines the diagonal corner of the work plane.
Version
Introduced in version 5
WorkPlaneProxy.Shared Property
Parent Object: WorkPlaneProxy
WorkPlaneProxy Object Page 30 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Description
Gets and sets whether the work plane is shared or not.
Syntax
WorkPlaneProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPlaneProxy.Type Property
Parent Object: WorkPlaneProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkPlaneProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
WorkPlaneProxy.Visible Property
Parent Object: WorkPlaneProxy
Description
WorkPlaneProxy Object Page 31 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
Specifies the visibility of the work plane.
Syntax
WorkPlaneProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
WorkPlaneProxy Object Page 32 of 32
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8B97.htm 17/06/2025
WorkPlanes Object
Description
The WorkPlanes collection object provides access to all of the objects in the parent document and
provides methods to create new work planes.
Methods
Name Description
AddByLineAndTangent
Method that creates a new work plane through the input line and
tangent to the input surface. This method is not currently supported
when creating a work plane within an assembly.
AddByLinePlaneAndAngle
Method that creates a new work plane through the input line at the
specified angle from the input plane. This method is not currently
supported when creating a work plane within an assembly.
AddByNormalToCurve
Method that creates a new work plane that passes through the point
and is normal to the input curve. The point must lie on the curve, as
described below. This method is not currently supported when
creating a work plane within an assembly.
AddByPlaneAndOffset
Method that creates a new work plane that is parallel to the input
plane at a specified distance in the specified direction. This method is
not currently supported when creating a work plane within an
assembly.
AddByPlaneAndPoint
Method that creates a new work plane that is parallel to the input
plane and passes through the input point. This method is not
currently supported when creating a work plane within an assembly.
AddByPlaneAndTangent
Method that creates a new work plane that is parallel to the input
plane and tangent to the input surface. Valid geometry for the face
includes cylinders, cones, and spheres. This method is not currently
supported when creating a work plane within an assembly.
AddByPointAndTangent
Method that creates a new work plane through the input point and
tangent to the input surface. The input point must lie on the input
surface. This method is not currently supported when creating a work
plane within an assembly.
AddByThreePoints
Method that creates a new work plane based on the three input
points. The three input points must be unique non-coincident points.
Point1 to Point2 defines the positive X axis and Point3 defines the
positive Y direction. This method is not currently supported when
creating a work plane within an assembly.
AddByTorusMidPlane
Method that creates a new work plane at the mid-plane of the torus
specified by the input face. This method is not currently supported
when creating a work plane within an assembly.
AddByTwoLines Method that creates a new work plane based on the two input lines.
Line1 defines the X axis. If the two lines are not in the same plane,
the plane is calculated by crossing the vectors defined by Line1 and
WorkPlanes Object Page 1 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Line2. This method is not currently supported when creating a work
plane within an assembly.
AddByTwoPlanes
Creates a new work plane that bisects the two input planes. This
method is not currently supported when creating a work plane within
an assembly.
AddFixed
Method that creates a new work plane at the position and orientation
defined by the point and X and Y axis vectors. When used to create a
work plane within an assembly the resulting work plane will return
an AssemblyWorkPlaneDef definition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified WorkPlane object from the collection. This is the default
property of the WorkPlanes collection object.
Parent Property returning the parent object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.WorkPlanes, FlatPattern.WorkPlanes,
PartComponentDefinition.WorkPlanes, SheetMetalComponentDefinition.WorkPlanes,
WeldmentComponentDefinition.WorkPlanes
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
Create sheet
metal lofted
flange feature
The following sample demonstrates the creation of a sheet metal lofted flange
feature.
Projection -
project across
parts
This sample demonstrates projecting a sketch entity across parts in an assembly.
To use the sample, have an assembly open that contains at least two
occurrences, (parts only), and run the program.
Spline - create
NURBS
This sample demonstrates the creation of a sketch spline using a geometry
definition (a NURB). The API also supports creation of 3D sketch splines in a
similar way.
WorkPlanes Object Page 2 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Sweep Feature
Add
This sample demonstrates the creation of a sweep feature. The profile is a circle,
but the path is made up of a 3D sketch and a 2D sketch.
Version
Introduced in version 4
WorkPlanes.AddByLineAndTangent Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane through the input line and tangent to the input surface. This
method is not currently supported when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByLineAndTangent( Line As Object, Face As Face, ProximityPoint As Point,
[Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, SketchLine, or SketchLine3D object.
Face Face
Input Face object that indicates the tangent surface. This face must either
be a cylinder whose axis is parallel to the line, a cone that is positioned
such that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. For cylinders and spheres the plane can be on either side of the
surface. Which solution to use will be determined by which side the
proximity point is closest to. This point is only used for the initial
computation. During a recompute of the model the plane will remain on
the same side of the tangent surface regardless of its position relative to
the originally specified point.
Construction Boolean
Optional Input Boolean that specifies whether to create the work plane
as a construction plane or not. The default is False, which indicates to
create a standard work plane, not a construction work plane. A
construction work plane is hidden from the user and is not displayed
graphically or listed in the browser.
This is an optional argument whose default value is False.
WorkPlanes Object Page 3 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Version
Introduced in version 4
WorkPlanes.AddByLinePlaneAndAngle
Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane through the input line at the specified angle from the input
plane. This method is not currently supported when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByLinePlaneAndAngle( Line As Object, Plane As Object, Angle As Variant,
[Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Line Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object.
Plane Object
Input object that represents a Plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Angle Variant
Input Variant that defines the offset angle of the work plane from the input
plane. This can be a numeric value or a string. The offset angle of a work
plane is always defined by a parameter. When a new work plane is created
that requires a parameter, that parameter is automatically created when the
work plane is created. If a numeric value is supplied the new parameter is
set to the value specified. The input value is in radians. If a string is
supplied it is used as the expression for the newly created parameter and
will be interpreted the same as if the user entered it in a dialog. This means
if a value is specified without a unit qualifier it will default to the current
document length unit. The following is a valid entry for the angle,
assuming the parameter d2 already exists and defines an angle, "d2 + 10
deg." The positive angle direction is computed by crossing the axis vector
with the plane normal vector.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser. If work features are created as construction:
WorkPlanes Object Page 4 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.AddByNormalToCurve Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane that passes through the point and is normal to the input
curve. The point must lie on the curve, as described below. This method is not currently supported
when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByNormalToCurve( CurveEntity As Object, Point As Object, [Construction]
As Boolean ) As WorkPlane
Parameters
Name Type Description
CurveEntity Object
Input object that represents a curve entity. This object can be an Edge, 3D
sketch entity, or a 2D sketch entity. For an Edge or 3D sketch entity the
geometry must be a Spline, Arc, Circle, EllipticalArc, or Ellipse. For a 2D
sketch entity, the geometry must be a Spline2d, Arc2d, Circle2d,
EllipticalArc2d, or Ellipse2d.
Point Object Input object that represents a point. This object can be a WorkPoint,
Vertex, SketchPoint, or SketchPoint3D object. If the input curve is a 2D
WorkPlanes Object Page 5 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
sketch entity, the point must be a SketchPoint that meets one of the
following conditions: start or end point of the curve, one of the fit points of
a spline, or constrained to the curve with a coincident constraint. If the
input curve is a 3D curve, the point must be related to the curve. For a 3D
point to be related to a 3D curve, it can be the start, mid, or end point of the
curve.
Construction Boolean
Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser. If work features are created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Samples
Name Description
Sweep
Feature Add
This sample demonstrates the creation of a sweep feature. The profile is a circle,
but the path is made up of a 3D sketch and a 2D sketch.
Version
Introduced in version 6
WorkPlanes.AddByPlaneAndOffset Method
Parent Object: WorkPlanes
Description
WorkPlanes Object Page 6 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Method that creates a new work plane that is parallel to the input plane at a specified distance in
the specified direction. This method is not currently supported when creating a work plane within
an assembly.
Syntax
WorkPlanes.AddByPlaneAndOffset( Plane As Object, Offset As Variant, [Construction] As
Boolean ) As WorkPlane
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Offset Variant
Input Variant that defines the offset distance of the Plane. This can be a
numeric value or a string. The offset distance of a work plane is always
defined by a parameter. When a new work plane is created that requires a
parameter, that parameter is automatically created when the work plane is
created. If a numeric value is supplied the new parameter is set to the value
specified. The input value is in centimeters. If a string is supplied this will
be used as the expression for the newly created parameter and will be
interpreted the same as if the user entered it in a dialog. This means if a
value is specified without a unit qualifier it will default to the current
document length unit. The following is a valid entry for the offset,
assuming the parameter d2 already exists and defines a length, "d2 + 3 in."
The sign of the value controls which side of the plane the offset is in. A
positive value will be in the positive normal side of the plane.
Construction Boolean
Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser. If work features are created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
WorkPlanes Object Page 7 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Samples
Name Description
Navigation
between browser
and data
This sample demonstrates the navigation between a browser node and it's
corresponding data model object and vice versa. This sample creates a work
plane, finds its browser node and gets the work plane object back from the
browser node.
Create sheet metal
lofted flange
feature
The following sample demonstrates the creation of a sheet metal lofted flange
feature.
Spline - create
NURBS
This sample demonstrates the creation of a sketch spline using a geometry
definition (a NURB). The API also supports creation of 3D sketch splines in a
similar way.
Version
Introduced in version 4
WorkPlanes.AddByPlaneAndPoint Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane that is parallel to the input plane and passes through the
input point. This method is not currently supported when creating a work plane within an
assembly.
Syntax
WorkPlanes.AddByPlaneAndPoint( Plane As Object, Point As Object, [Construction] As
Boolean ) As WorkPlane
Parameters
Name Type Description
Plane Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Point Object
Input object that represents a point. This object can be a WorkPoint,
Vertex or SketchPoint object.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
WorkPlanes Object Page 8 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
the browser. If work features are created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.AddByPlaneAndTangent
Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane that is parallel to the input plane and tangent to the input
surface. Valid geometry for the face includes cylinders, cones, and spheres. This method is not
currently supported when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByPlaneAndTangent( Plane As Object, Face As Face, ProximityPoint As
Point, [Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Plane Object
Input object that represents a Plane. This object can be a planar Face,
WorkPlane, or Sketch object.
WorkPlanes Object Page 9 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Face Face Input Face object that indicates the tangent surface. This face must either
be a cylinder whose axis is parallel to the plane, a cone that is positioned
such that a valid tangent exists, or a sphere.
ProximityPoint Point
Input Point object that indicates which of the possible two solutions to
use. For cylinders and spheres the plane can be on either side of the
surface. Which solution to use will be determined by which side the
proximity point is closest to. This point is only used for the initial
computation. During a recompute the plane will remain on the same side
of the tangent surface regardless of its position relative to the originally
specified point.
Construction Boolean
Optional Input Boolean that specifies whether to create the work plane
as a construction plane or not. The default is False, which indicates to
create a standard work plane, not a construction work plane. A
construction work plane is hidden from the user and is not displayed
graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.AddByPointAndTangent Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane through the input point and tangent to the input surface. The
input point must lie on the input surface. This method is not currently supported when creating a
work plane within an assembly.
Syntax
WorkPlanes.AddByPointAndTangent( Point As Object, Face As Face, [Construction] As
Boolean ) As WorkPlane
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex,
WorkPoint, SketchPoint3D, or SketchPoint object.
Face Face
WorkPlanes Object Page 10 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Input Face object that indicates the tangent surface. This face must either
be a cylinder, a cone that is positioned such that a valid tangent exists, a
sphere, or a bspline surface.
Construction Boolean
Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkPlanes.AddByThreePoints Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane based on the three input points. The three input points must
be unique non-coincident points. Point1 to Point2 defines the positive X axis and Point3 defines
the positive Y direction. This method is not currently supported when creating a work plane within
an assembly.
Syntax
WorkPlanes.AddByThreePoints( Point1 As Object, Point2 As Object, Point3 As Object,
[Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Point1 Object
Input object that represents a point. This object can be a WorkPoint,
Vertex, or SketchPoint object.
Point2 Object
Input object that represents a point. This object can be a WorkPoint,
Vertex, or SketchPoint object.
Point3 Object
Input object that represents a point. This object can be a WorkPoint,
Vertex, or SketchPoint object.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
WorkPlanes Object Page 11 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
the browser. If work features are created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.AddByTorusMidPlane Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane at the mid-plane of the torus specified by the input face.
This method is not currently supported when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByTorusMidPlane( Face As Face, [Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Face Face Input Face object that represents a torus surface.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser.
WorkPlanes Object Page 12 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkPlanes.AddByTwoLines Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane based on the two input lines. Line1 defines the X axis. If
the two lines are not in the same plane, the plane is calculated by crossing the vectors defined by
Line1 and Line2. This method is not currently supported when creating a work plane within an
assembly.
Syntax
WorkPlanes.AddByTwoLines( Line1 As Object, Line2 As Object, [Construction] As Boolean )
As WorkPlane
Parameters
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object.
Line2 Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane as a
construction plane or not. The default is False, which indicates to create a
standard work plane, not a construction work plane. A construction work
plane is hidden from the user and is not displayed graphically or listed in
the browser. If work features are created as construction: *
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
WorkPlanes Object Page 13 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.AddByTwoPlanes Method
Parent Object: WorkPlanes
Description
Creates a new work plane that bisects the two input planes. This method is not currently supported
when creating a work plane within an assembly.
Syntax
WorkPlanes.AddByTwoPlanes( Plane1 As Object, Plane2 As Object, [QuadrantPoint] As
Variant, [Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane or PlanarSketch object.
QuadrantPoint Variant
Optional input Point to indicate which quadrant the new work plane
should be created in. If the two input planes are parallel this argument
will be ignored, while the two input planes are intersected then this
argument is required to determine which quadrant the new work plane
will be created in.
This is an optional argument whose default value is null.
Construction Boolean
Optional input Boolean that specifies whether to create the work plane as
a construction plane or not. The default is False, which indicates to create
a standard work plane, not a construction work plane. A construction
work plane is hidden from the user and is not displayed graphically or
listed in the browser.
This is an optional argument whose default value is False.
WorkPlanes Object Page 14 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Version
Introduced in version 6
WorkPlanes.AddFixed Method
Parent Object: WorkPlanes
Description
Method that creates a new work plane at the position and orientation defined by the point and X
and Y axis vectors. When used to create a work plane within an assembly the resulting work plane
will return an AssemblyWorkPlaneDef definition.
Syntax
WorkPlanes.AddFixed( OriginPoint As Point, XAxis As UnitVector, YAxis As UnitVector,
[Construction] As Boolean ) As WorkPlane
Parameters
Name Type Description
OriginPoint Point Input Point object that defines the origin of the work plane.
XAxis UnitVector
Input UnitVector object that defines the X-axis vector of the work
plane.
YAxis UnitVector
Input UnitVector object that defines the Y-axis vector of the work
plane.
Construction Boolean Optional Input Boolean that specifies whether to create the work plane
as a construction plane or not. The default is False, which indicates to
create a standard work plane, not a construction work plane. A
construction work plane is hidden from the user and is not displayed
graphically or listed in the browser. If work features are created as
construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is
the responsibility of the creator to delete them since they will
never get cleaned up and are not visible to users.
WorkPlanes Object Page 15 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPlanes.Application Property
Parent Object: WorkPlanes
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkPlanes.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkPlanes.Count Property
Parent Object: WorkPlanes
Description
Property that returns the number of items in this collection.
Syntax
WorkPlanes.Count() As Long
WorkPlanes Object Page 16 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
WorkPlanes.Item Property
Parent Object: WorkPlanes
Description
Returns the specified WorkPlane object from the collection. This is the default property of the
WorkPlanes collection object.
Syntax
WorkPlanes.Item( Index As Variant ) As WorkPlane
Property Value
This is a read only property whose value is a WorkPlane.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the object to return. This can be a numeric value
indicating the index of the item in the collection or it can be a string indicating the
WorkPlane name. If an out of range index or a name of a non-existent WorkPlane
is specified, an error occurs.
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This is
equivalent to the Promote command, but the API is much more flexible. In order
for the sample to be self-contained, it creates two parts on the fly that will be used
to demonstrate copying a body from one part to another. When copying a body
into a part, you provide the surface body and a matrix to define its position in the
new part. This sample creates a matrix based on the position of these parts within
an assembly.
Extrude
sketch text
This sample demonstrates the creation of an extrude feature from sketch text.
WorkPlanes Object Page 17 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Sweep
Feature Add
This sample demonstrates the creation of a sweep feature. The profile is a circle,
but the path is made up of a 3D sketch and a 2D sketch.
Version
Introduced in version 4
WorkPlanes.Parent Property
Parent Object: WorkPlanes
Description
Property returning the parent object.
Syntax
WorkPlanes.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkPlanes.Type Property
Parent Object: WorkPlanes
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkPlanes.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
WorkPlanes Object Page 18 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
Version
Introduced in version 4
WorkPlanes Object Page 19 of 19
file:///C:/Users/Cliente/AppData/Local/Temp/~hh30D0.htm 17/06/2025
WorkPoint Object
Description
Represents a work point. See here for an overview.
Methods
Name Description
Delete
Method that deletes the work point. Optionally the dependent objects
will be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetAtCentroid
Method that redefines a work point to be located at the centroid of the
input entities.
SetByCurveAndEntity
Method that redefines a work point to be at the intersection of the input
curve and an entity.
SetByMidPoint
Method that redefines the work point to be at the midpoint of the input
edge.
SetByPoint Method that redefines the work point to be at the input point.
SetBySphereCenterPoint
Redefines the work point to be at the center of the Sphere specified by
the input face.
SetByThreePlanes
Method that redefines the work point to be at the intersection of the
three input planes.
SetByTorusCenterPoint
Method that redefines the work point to be at the center of the torus
specified by the input face.
SetByTwoLines
Method that redefines the work point to be at the intersection of the two
input lines.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from. The argument defines if the end-of-part marker
will be positioned just before or just after the object. If the object is
contained within another object and is not in the top level of the
browser, the positioning of the marker will be relative to the top-level
object the calling object is contained within. An example of this case is
a sketch that has not been shared and has been consumed by a feature.
Another example is a nested work feature.
SetFixed
Method that redefines the work point to be at the position specified by
the input point.
Properties
Name Description
Adaptive Specifies whether the work point is adaptive.
Application
WorkPoint Object Page 1 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
Construction
Boolean property that returns whether the work point is a
construction work point or not. A construction work point is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPoint object will
behave differently for a construction work point. These are
Adaptive, Name, and Visible.
Consumed Gets whether the WorkPoint is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
Definition
Property that returns one of the work point definition objects. Which
definition object returned will depend on how the work point is
defined. The DefinitionType property can be used to determine the
type of definition the Definition property will return.
DefinitionType
Property that returns the type of definition that is used to define the
work axis. This can be kThreePlanesWorkPoint,
kTwoLinesWorkPoint, kCurveAndEntityWorkPoint,
kPointWorkPoint, kMidPointWorkPoint,
kNonLinearEdgeWorkPoint, kCentroidWorkPoint,
kFixedWorkPoint, kTorusCenterPointWorkPoint and
kAssemblyWorkPoint.
Dependents
Property that returns the collection of objects that have a direct
dependency on the work point.
DrivenBy
Property that returns the collection of objects that the work point is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work point is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work point belongs to a coordinate
system. If so, edits and delete are not allowed.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch
Property that indicates whether the work point belongs to a 3d
sketch.
IsPatternElement
Property that gets whether the work point was created by a pattern.
If so, edits and delete are not allowed.
Name Specifies the name of the work point.
OwnedBy
WorkPoint Object Page 2 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch Property that returns the parent ComponentDefinition object.
Point
Property that returns a Point geometry object. The Point object
returned provides information about the position of the work point.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the referenced WorkPoint in the case where
this work point was created using a referenced component. An
example of this is when a work point is selected as part of a derived
part. The HasReferenceComponent property indicates if this work
point is based on a referenced component or not. This property
returns Nothing in the case where it is not based on a referenced
component.
Shared Gets and sets whether the work point is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work point.
Accessed From
AssemblyWorkPointDef.Parent, CentroidWorkPointDef.Parent,
CurveAndEntityWorkPointDef.Parent, FixedWorkPointDef.Parent,
LineAndFaceWorkPointDef.Parent, MidPointWorkPointDef.Parent,
NonLinearEdgeWorkPointDef.Parent, PointWorkPointDef.Parent,
SphereCenterPointWorkPointDef.Parent, ThreePlanesWorkPointDef.Parent,
TorusCenterPointWorkPointDef.Parent, TwoLinesWorkPointDef.Parent,
UserCoordinateSystem.Origin, UserCoordinateSystemProxy.Origin, WorkPoint.ReferencedEntity,
WorkPointProxy.NativeObject, WorkPointProxy.ReferencedEntity, WorkPoints.AddAtCentroid,
WorkPoints.AddByCurveAndEntity, WorkPoints.AddByMidPoint, WorkPoints.AddByPoint,
WorkPoints.AddBySphereCenterPoint, WorkPoints.AddByThreePlanes,
WorkPoints.AddByTorusCenterPoint, WorkPoints.AddByTwoLines, WorkPoints.AddFixed,
WorkPoints.Item
Derived Classes
WorkPointProxy
Samples
Name Description
Create sheet metal
rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Sweep Feature
Add
This sample demonstrates the creation of a sweep feature. The profile is a
circle, but the path is made up of a 3D sketch and a 2D sketch.
UCS by three
points
WorkPoint Object Page 3 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
OnDrag Event -
dragging a
WorkPoint
This sample demonstrates the use of the OnDrag event to drag fixed work
points when no command is active. This sample only allows drags parallel to
the X-Y plane. This sample is dependent on events and VB only supports
events within a class module.
Version
Introduced in version 4
WorkPoint.Adaptive Property
Parent Object: WorkPoint
Description
Specifies whether the work point is adaptive.
Syntax
WorkPoint.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkPoint.Application Property
Parent Object: WorkPoint
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
WorkPoint Object Page 4 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Syntax
WorkPoint.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkPoint.AttributeSets Property
Parent Object: WorkPoint
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkPoint.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 5
WorkPoint.Construction Property
Parent Object: WorkPoint
Description
Boolean property that returns whether the work point is a construction work point or not. A
construction work point is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPoint object will behave differently for a
construction work point. These are Adaptive, Name, and Visible.
WorkPoint Object Page 5 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Syntax
WorkPoint.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 4
WorkPoint.Consumed Property
Parent Object: WorkPoint
Description
Gets whether the WorkPoint is consumed or not.
Syntax
WorkPoint.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 11
WorkPoint.ConsumeInputs Property
Parent Object: WorkPoint
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
WorkPoint Object Page 6 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Syntax
WorkPoint.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPoint.Definition Property
Parent Object: WorkPoint
Description
Property that returns one of the work point definition objects. Which definition object returned
will depend on how the work point is defined. The DefinitionType property can be used to
determine the type of definition the Definition property will return.
Syntax
WorkPoint.Definition() As Object
Property Value
This is a read only property whose value is an Object.
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
WorkPoint Object Page 7 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
WorkPoint.DefinitionType Property
Parent Object: WorkPoint
Description
Property that returns the type of definition that is used to define the work axis. This can be
kThreePlanesWorkPoint, kTwoLinesWorkPoint, kCurveAndEntityWorkPoint, kPointWorkPoint,
kMidPointWorkPoint, kNonLinearEdgeWorkPoint, kCentroidWorkPoint, kFixedWorkPoint,
kTorusCenterPointWorkPoint and kAssemblyWorkPoint.
Syntax
WorkPoint.DefinitionType() As WorkPointDefinitionEnum
Property Value
This is a read only property whose value is a WorkPointDefinitionEnum.
Version
Introduced in version 4
WorkPoint.Delete Method
Parent Object: WorkPoint
Description
Method that deletes the work point. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
Syntax
WorkPoint.Delete( [RetainDependents] As Boolean )
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This is an optional argument whose default value is False.
WorkPoint Object Page 8 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 4
WorkPoint.Dependents Property
Parent Object: WorkPoint
Description
Property that returns the collection of objects that have a direct dependency on the work point.
Syntax
WorkPoint.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 4
WorkPoint.DrivenBy Property
Parent Object: WorkPoint
Description
Property that returns the collection of objects that the work point is dependent on.
Syntax
WorkPoint.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
WorkPoint Object Page 9 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 4
WorkPoint.Exported Property
Parent Object: WorkPoint
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkPoint.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkPoint.GetReferenceKey Method
Parent Object: WorkPoint
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkPoint.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
Parameters
Name Type Description
ReferenceKey Byte Input/output array of Bytes that contains the reference key.
KeyContext Long
WorkPoint Object Page 10 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
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
WorkPoint.Grounded Property
Parent Object: WorkPoint
Description
Gets/Sets the Boolean flag that specifies whether this work point is grounded or not.
Syntax
WorkPoint.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkPoint.HasReferenceComponent
Property
WorkPoint Object Page 11 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Parent Object: WorkPoint
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkPoint.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5.3
WorkPoint.HealthStatus Property
Parent Object: WorkPoint
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkPoint.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 4
WorkPoint.IsCoordinateSystemElement
Property
Parent Object: WorkPoint
WorkPoint Object Page 12 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Description
Property that returns whether the work point belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkPoint.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
WorkPoint.IsOwnedByFeature Property
Parent Object: WorkPoint
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkPoint.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPoint.IsParentSketch Property
Parent Object: WorkPoint
WorkPoint Object Page 13 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Description
Property that indicates whether the work point belongs to a 3d sketch.
Syntax
WorkPoint.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPoint.IsPatternElement Property
Parent Object: WorkPoint
Description
Property that gets whether the work point was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkPoint.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
WorkPoint.Name Property
Parent Object: WorkPoint
WorkPoint Object Page 14 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Description
Specifies the name of the work point.
Syntax
WorkPoint.Name() As String
Property Value
This is a read/write property whose value is a String.
Samples
Name Description
Work point
at mass
center
This sample demonstrates creating a fixed work point and edit its position. It does
this by computing the the center of mass of the part and creating a work point at that
position. Subsequent runs of the sample reposition the work point at the new center
of mass.
Version
Introduced in version 4
WorkPoint.OwnedBy Property
Parent Object: WorkPoint
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkPoint.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
WorkPoint Object Page 15 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 2008
WorkPoint.Parent Property
Parent Object: WorkPoint
Description
Property returning the parent object.
Syntax
WorkPoint.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkPoint.ParentSketch Property
Parent Object: WorkPoint
Description
Property that returns the parent ComponentDefinition object.
Syntax
WorkPoint.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
WorkPoint Object Page 16 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 2008
WorkPoint.Point Property
Parent Object: WorkPoint
Description
Property that returns a Point geometry object. The Point object returned provides information
about the position of the work point.
Syntax
WorkPoint.Point() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 4
WorkPoint.ReferenceComponent Property
Parent Object: WorkPoint
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkPoint.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
WorkPoint Object Page 17 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 5.3
WorkPoint.ReferencedEntity Property
Parent Object: WorkPoint
Description
Property that returns the referenced WorkPoint in the case where this work point was created
using a referenced component. An example of this is when a work point is selected as part of a
derived part. The HasReferenceComponent property indicates if this work point is based on a
referenced component or not. This property returns Nothing in the case where it is not based on a
referenced component.
Syntax
WorkPoint.ReferencedEntity() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Version
Introduced in version 5.3
WorkPoint.SetAtCentroid Method
Parent Object: WorkPoint
Description
Method that redefines a work point to be located at the centroid of the input entities.
Syntax
WorkPoint.SetAtCentroid( Entities As Object )
Parameters
Name Type Description
WorkPoint Object Page 18 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Entities Object
Input object that specifies the entities. This can be an Edge, an EdgeLoop object
or an EdgeCollection containing one or more edges. If an EdgeCollection is input,
the collection must contain connected edges. If isolated edges appear in the
collection, the method will fail.
Remarks
This method is not valid when the work point exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPoint.SetByCurveAndEntity Method
Parent Object: WorkPoint
Description
Method that redefines a work point to be at the intersection of the input curve and an entity.
Syntax
WorkPoint.SetByCurveAndEntity( Curve As Object, Entity As Object, [ProximityPoint] As
Variant )
Parameters
Name Type Description
Curve Object
Input object that represents a curve. This object can be an edge or a 2d or
3d sketch entity.
Entity Object
Input object that will be intersected with the curve. This object can be a
face or a work plane. There is a current limitation that this must be a
planar face or work plane when anything but a line is input as the curve.
Any face can be used when the curve is a line.
ProximityPoint Variant
Optional input Point object that indicates multiple solutions to use. For
example, a circle can intersect a plane twice, or a spline can intersect
multiple times. If this argument is supplied, the result closest to the input
point will be used. If this argument is not supplied and multiple solutions
are possible, one solution will be arbitrarily chosen.
This is an optional argument whose default value is null.
WorkPoint Object Page 19 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Remarks
If the curve and entity don't intersect an error will occur. This method is not valid when the work
point exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPoint.SetByMidPoint Method
Parent Object: WorkPoint
Description
Method that redefines the work point to be at the midpoint of the input edge.
Syntax
WorkPoint.SetByMidPoint( Edge As Edge )
Parameters
Name Type Description
Edge Edge
Input Edge object. Any open edge is valid as input. Inputting a closed edge, (i.e.
circle), will cause and error to occur.
Remarks
This method is not valid when the work point exists in an Assembly component definition.
Version
Introduced in version 4
WorkPoint.SetByPoint Method
Parent Object: WorkPoint
Description
Method that redefines the work point to be at the input point.
WorkPoint Object Page 20 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Syntax
WorkPoint.SetByPoint( Point As Object )
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex, SketchPoint, or
SketchPoint3D object.
Remarks
This method is not valid when the work point exists in an Assembly component definition.
Version
Introduced in version 4
WorkPoint.SetBySphereCenterPoint Method
Parent Object: WorkPoint
Description
Redefines the work point to be at the center of the Sphere specified by the input face.
Syntax
WorkPoint.SetBySphereCenterPoint( Face As Face )
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a spherical surface. An error occurs if the
geometry of the input face is not a spherical surface
Remarks
This method is not valid when the work point exists in an Assembly component definition.
WorkPoint Object Page 21 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Version
Introduced in version 2014
WorkPoint.SetByThreePlanes Method
Parent Object: WorkPoint
Description
Method that redefines the work point to be at the intersection of the three input planes.
Syntax
WorkPoint.SetByThreePlanes( Plane1 As Object, Plane2 As Object, Plane3 As Object )
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Plane3 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Remarks
If the three input planes don't intersect an error will occur. This method is not valid when the work
point exists in an Assembly component definition.
Version
Introduced in version 4
WorkPoint.SetByTorusCenterPoint Method
Parent Object: WorkPoint
Description
WorkPoint Object Page 22 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Method that redefines the work point to be at the center of the torus specified by the input face.
Syntax
WorkPoint.SetByTorusCenterPoint( Face As Face )
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a torus surface. An error occurs if the geometry
of the input face is not a torus surface.
Remarks
This method is not valid when the work point exists in an Assembly component definition.
Version
Introduced in version 2008
WorkPoint.SetByTwoLines Method
Parent Object: WorkPoint
Description
Method that redefines the work point to be at the intersection of the two input lines.
Syntax
WorkPoint.SetByTwoLines( Line1 As Object, Line2 As Object )
Parameters
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Line2 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
WorkPoint Object Page 23 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Remarks
If the lines don't intersect an error will occur. This method is not valid when the work point exists
in an Assembly component definition.
Version
Introduced in version 4
WorkPoint.SetEndOfPart Method
Parent Object: WorkPoint
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkPoint.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkPoint.SetFixed Method
Parent Object: WorkPoint
Description
WorkPoint Object Page 24 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Method that redefines the work point to be at the position specified by the input point.
Syntax
WorkPoint.SetFixed( Point As Point )
Parameters
Name Type Description
Point Point Input Point object.
Remarks
This method works for the work point that exists in both part and assembly.
Version
Introduced in version 4
WorkPoint.Shared Property
Parent Object: WorkPoint
Description
Gets and sets whether the work point is shared or not.
Syntax
WorkPoint.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPoint.Type Property
Parent Object: WorkPoint
WorkPoint Object Page 25 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkPoint.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
WorkPoint.Visible Property
Parent Object: WorkPoint
Description
Specifies the visibility of the work point.
Syntax
WorkPoint.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 4
WorkPoint Object Page 26 of 26
file:///C:/Users/Cliente/AppData/Local/Temp/~hh58CA.htm 17/06/2025
WorkPointProxy Object
Derived from: WorkPoint Object
Description
This is an assembly-context proxy object derived from its native definition-context object.
Methods
Name Description
Delete
Method that deletes the work point. Optionally the dependent objects
will be deleted. This method will fail in the case where this object was
created as a result of a derived part. The HasReferenceComponent
property can be used to determine when this is the case.
GetReferenceKey Method that generates and returns the reference key for this entity.
SetAtCentroid
Method that redefines a work point to be located at the centroid of the
input entities.
SetByCurveAndEntity
Method that redefines a work point to be at the intersection of the input
curve and an entity.
SetByMidPoint
Method that redefines the work point to be at the midpoint of the input
edge.
SetByPoint Method that redefines the work point to be at the input point.
SetBySphereCenterPoint
Redefines the work point to be at the center of the Sphere specified by
the input face.
SetByThreePlanes
Method that redefines the work point to be at the intersection of the
three input planes.
SetByTorusCenterPoint
Method that redefines the work point to be at the center of the torus
specified by the input face.
SetByTwoLines
Method that redefines the work point to be at the intersection of the two
input lines.
SetEndOfPart
Method that repositions the end-of-part marker relative to the object this
method is called from. The argument defines if the end-of-part marker
will be positioned just before or just after the object. If the object is
contained within another object and is not in the top level of the
browser, the positioning of the marker will be relative to the top-level
object the calling object is contained within. An example of this case is
a sketch that has not been shared and has been consumed by a feature.
Another example is a nested work feature.
SetFixed
Method that redefines the work point to be at the position specified by
the input point.
Properties
Name Description
WorkPointProxy Object Page 1 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Adaptive Specifies whether the work point is adaptive.
Application
Returns the top-level parent application object. When used the
context of Inventor, an Application object is returned. When used in
the context of Apprentice, an ApprenticeServer object is returned.
AttributeSets
Property that returns the AttributeSets collection object associated
with this object.
Construction
Boolean property that returns whether the work point is a
construction work point or not. A construction work point is hidden
from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPoint object will
behave differently for a construction work point. These are
Adaptive, Name, and Visible.
Consumed Gets whether the WorkPoint is consumed or not.
ConsumeInputs
Gets and sets whether the inputs to this feature should be nested
under this feature in the browser.
ContainingOccurrence
Property that returns the ComponentOccurrence that the native
object is being referenced through. The returned occurrence is the
containing occurrence.
Definition
Property that returns one of the work point definition objects. Which
definition object returned will depend on how the work point is
defined. The DefinitionType property can be used to determine the
type of definition the Definition property will return.
DefinitionType
Property that returns the type of definition that is used to define the
work axis. This can be kThreePlanesWorkPoint,
kTwoLinesWorkPoint, kCurveAndEntityWorkPoint,
kPointWorkPoint, kMidPointWorkPoint,
kNonLinearEdgeWorkPoint, kCentroidWorkPoint,
kFixedWorkPoint, kTorusCenterPointWorkPoint and
kAssemblyWorkPoint.
Dependents
Property that returns the collection of objects that have a direct
dependency on the work point.
DrivenBy
Property that returns the collection of objects that the work point is
dependent on.
Exported
Read-write property that gets and sets whether the object is
exported. Objects must be marked for export in order for them to be
derived.
Grounded
Gets/Sets the Boolean flag that specifies whether this work point is
grounded or not.
HasReferenceComponent
Property that specifies if the object was created as the result of a
derived part.
HealthStatus
Property that returns an enum indicating the current state of the
object.
IsCoordinateSystemElement
Property that returns whether the work point belongs to a coordinate
system. If so, edits and delete are not allowed.
IsOwnedByFeature
Property that returns whether this object is owned by a feature. If
True, the OwnedBy property returns the owning feature.
IsParentSketch
Property that indicates whether the work point belongs to a 3d
sketch.
IsPatternElement
WorkPointProxy Object Page 2 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Property that gets whether the work point was created by a pattern.
If so, edits and delete are not allowed.
Name Specifies the name of the work point.
NativeObject
Gets the object in the context of the definition instead of the
containing assembly.
OwnedBy
Read-only property that returns the client feature that owns this
object. This property returns Nothing if the IsOwnedByFeature
property returns False.
Parent Property returning the parent object.
ParentSketch Property that returns the parent ComponentDefinition object.
Point
Property that returns a Point geometry object. The Point object
returned provides information about the position of the work point.
ReferenceComponent
Property that returns the ReferenceComponent that resulted in the
creation of this feature.
ReferencedEntity
Property that returns the referenced WorkPoint in the case where
this work point was created using a referenced component. An
example of this is when a work point is selected as part of a derived
part. The HasReferenceComponent property indicates if this work
point is based on a referenced component or not. This property
returns Nothing in the case where it is not based on a referenced
component.
Shared Gets and sets whether the work point is shared or not.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work point.
Version
Introduced in version 5
WorkPointProxy.Adaptive Property
Parent Object: WorkPointProxy
Description
Specifies whether the work point is adaptive.
Syntax
WorkPointProxy.Adaptive() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
WorkPointProxy Object Page 3 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Version
Introduced in version 5
WorkPointProxy.Application Property
Parent Object: WorkPointProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkPointProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
WorkPointProxy.AttributeSets Property
Parent Object: WorkPointProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkPointProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
WorkPointProxy Object Page 4 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Version
Introduced in version 5
WorkPointProxy.Construction Property
Parent Object: WorkPointProxy
Description
Boolean property that returns whether the work point is a construction work point or not. A
construction work point is hidden from the user and is not displayed graphically or listed in the
browser. Some properties and methods of the WorkPoint object will behave differently for a
construction work point. These are Adaptive, Name, and Visible.
Syntax
WorkPointProxy.Construction() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5
WorkPointProxy.Consumed Property
Parent Object: WorkPointProxy
Description
Gets whether the WorkPoint is consumed or not.
Syntax
WorkPointProxy.Consumed() As Boolean
Property Value
This is a read only property whose value is a Boolean.
WorkPointProxy Object Page 5 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Version
Introduced in version 11
WorkPointProxy.ConsumeInputs Property
Parent Object: WorkPointProxy
Description
Gets and sets whether the inputs to this feature should be nested under this feature in the browser.
Syntax
WorkPointProxy.ConsumeInputs() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPointProxy.ContainingOccurrence
Property
Parent Object: WorkPointProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
WorkPointProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
WorkPointProxy Object Page 6 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Version
Introduced in version 5
WorkPointProxy.Definition Property
Parent Object: WorkPointProxy
Description
Property that returns one of the work point definition objects. Which definition object returned
will depend on how the work point is defined. The DefinitionType property can be used to
determine the type of definition the Definition property will return.
Syntax
WorkPointProxy.Definition() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 5
WorkPointProxy.DefinitionType Property
Parent Object: WorkPointProxy
Description
Property that returns the type of definition that is used to define the work axis. This can be
kThreePlanesWorkPoint, kTwoLinesWorkPoint, kCurveAndEntityWorkPoint, kPointWorkPoint,
kMidPointWorkPoint, kNonLinearEdgeWorkPoint, kCentroidWorkPoint, kFixedWorkPoint,
kTorusCenterPointWorkPoint and kAssemblyWorkPoint.
Syntax
WorkPointProxy.DefinitionType() As WorkPointDefinitionEnum
WorkPointProxy Object Page 7 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Property Value
This is a read only property whose value is a WorkPointDefinitionEnum.
Version
Introduced in version 5
WorkPointProxy.Delete Method
Parent Object: WorkPointProxy
Description
Method that deletes the work point. Optionally the dependent objects will be deleted. This method
will fail in the case where this object was created as a result of a derived part. The
HasReferenceComponent property can be used to determine when this is the case.
Syntax
WorkPointProxy.Delete( [RetainDependents] As Boolean )
Parameters
Name Type Description
RetainDependents Boolean
Optional input Boolean that specifies whether any dependent objects
should also be deleted. If True, no dependent objects will be deleted.
This is an optional argument whose default value is False.
Version
Introduced in version 5
WorkPointProxy.Dependents Property
Parent Object: WorkPointProxy
Description
Property that returns the collection of objects that have a direct dependency on the work point.
WorkPointProxy Object Page 8 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Syntax
WorkPointProxy.Dependents() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkPointProxy.DrivenBy Property
Parent Object: WorkPointProxy
Description
Property that returns the collection of objects that the work point is dependent on.
Syntax
WorkPointProxy.DrivenBy() As ObjectCollection
Property Value
This is a read only property whose value is an ObjectCollection.
Version
Introduced in version 5
WorkPointProxy.Exported Property
Parent Object: WorkPointProxy
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
WorkPointProxy Object Page 9 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Syntax
WorkPointProxy.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkPointProxy.GetReferenceKey Method
Parent Object: WorkPointProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkPointProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkPointProxy.Grounded Property
WorkPointProxy Object Page 10 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Parent Object: WorkPointProxy
Description
Gets/Sets the Boolean flag that specifies whether this work point is grounded or not.
Syntax
WorkPointProxy.Grounded() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 7
WorkPointProxy.HasReferenceComponent
Property
Parent Object: WorkPointProxy
Description
Property that specifies if the object was created as the result of a derived part.
Syntax
WorkPointProxy.HasReferenceComponent() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 5.3
WorkPointProxy.HealthStatus Property
Parent Object: WorkPointProxy
WorkPointProxy Object Page 11 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Property that returns an enum indicating the current state of the object.
Syntax
WorkPointProxy.HealthStatus() As HealthStatusEnum
Property Value
This is a read only property whose value is a HealthStatusEnum.
Version
Introduced in version 5
WorkPointProxy.IsCoordinateSystemElement
Property
Parent Object: WorkPointProxy
Description
Property that returns whether the work point belongs to a coordinate system. If so, edits and delete
are not allowed.
Syntax
WorkPointProxy.IsCoordinateSystemElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2010
WorkPointProxy.IsOwnedByFeature
Property
WorkPointProxy Object Page 12 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Parent Object: WorkPointProxy
Description
Property that returns whether this object is owned by a feature. If True, the OwnedBy property
returns the owning feature.
Syntax
WorkPointProxy.IsOwnedByFeature() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPointProxy.IsParentSketch Property
Parent Object: WorkPointProxy
Description
Property that indicates whether the work point belongs to a 3d sketch.
Syntax
WorkPointProxy.IsParentSketch() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 2008
WorkPointProxy.IsPatternElement Property
Parent Object: WorkPointProxy
WorkPointProxy Object Page 13 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Property that gets whether the work point was created by a pattern. If so, edits and delete are not
allowed.
Syntax
WorkPointProxy.IsPatternElement() As Boolean
Property Value
This is a read only property whose value is a Boolean.
Version
Introduced in version 9
WorkPointProxy.Name Property
Parent Object: WorkPointProxy
Description
Specifies the name of the work point.
Syntax
WorkPointProxy.Name() As String
Property Value
This is a read/write property whose value is a String.
Version
Introduced in version 5
WorkPointProxy.NativeObject Property
Parent Object: WorkPointProxy
WorkPointProxy Object Page 14 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
WorkPointProxy.NativeObject() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Version
Introduced in version 5
WorkPointProxy.OwnedBy Property
Parent Object: WorkPointProxy
Description
Read-only property that returns the client feature that owns this object. This property returns
Nothing if the IsOwnedByFeature property returns False.
Syntax
WorkPointProxy.OwnedBy() As PartFeature
Property Value
This is a read only property whose value is a PartFeature.
Version
Introduced in version 2008
WorkPointProxy.Parent Property
Parent Object: WorkPointProxy
WorkPointProxy Object Page 15 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Property returning the parent object.
Syntax
WorkPointProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 5
WorkPointProxy.ParentSketch Property
Parent Object: WorkPointProxy
Description
Property that returns the parent ComponentDefinition object.
Syntax
WorkPointProxy.ParentSketch() As Sketch3D
Property Value
This is a read only property whose value is a Sketch3D.
Version
Introduced in version 2008
WorkPointProxy.Point Property
Parent Object: WorkPointProxy
Description
WorkPointProxy Object Page 16 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Property that returns a Point geometry object. The Point object returned provides information
about the position of the work point.
Syntax
WorkPointProxy.Point() As Point
Property Value
This is a read only property whose value is a Point.
Version
Introduced in version 5
WorkPointProxy.ReferenceComponent
Property
Parent Object: WorkPointProxy
Description
Property that returns the ReferenceComponent that resulted in the creation of this feature.
Syntax
WorkPointProxy.ReferenceComponent() As ReferenceComponent
Property Value
This is a read only property whose value is a ReferenceComponent.
Version
Introduced in version 5.3
WorkPointProxy.ReferencedEntity Property
Parent Object: WorkPointProxy
Description
WorkPointProxy Object Page 17 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Property that returns the referenced WorkPoint in the case where this work point was created
using a referenced component. An example of this is when a work point is selected as part of a
derived part. The HasReferenceComponent property indicates if this work point is based on a
referenced component or not. This property returns Nothing in the case where it is not based on a
referenced component.
Syntax
WorkPointProxy.ReferencedEntity() As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Version
Introduced in version 5.3
WorkPointProxy.SetAtCentroid Method
Parent Object: WorkPointProxy
Description
Method that redefines a work point to be located at the centroid of the input entities.
Syntax
WorkPointProxy.SetAtCentroid( Entities As Object )
Parameters
Name Type Description
Entities Object
Input object that specifies the entities. This can be an Edge, an EdgeLoop object
or an EdgeCollection containing one or more edges. If an EdgeCollection is input,
the collection must contain connected edges. If isolated edges appear in the
collection, the method will fail.
Version
Introduced in version 2008
WorkPointProxy Object Page 18 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
WorkPointProxy.SetByCurveAndEntity
Method
Parent Object: WorkPointProxy
Description
Method that redefines a work point to be at the intersection of the input curve and an entity.
Syntax
WorkPointProxy.SetByCurveAndEntity( Curve As Object, Entity As Object, [ProximityPoint]
As Variant )
Parameters
Name Type Description
Curve Object
Input object that represents a curve. This object can be an edge or a 2d or
3d sketch entity.
Entity Object
Input object that will be intersected with the curve. This object can be a
face or a work plane. There is a current limitation that this must be a
planar face or work plane when anything but a line is input as the curve.
Any face can be used when the curve is a line.
ProximityPoint Variant
Optional input Point object that indicates multiple solutions to use. For
example, a circle can intersect a plane twice, or a spline can intersect
multiple times. If this argument is supplied, the result closest to the input
point will be used. If this argument is not supplied and multiple solutions
are possible, one solution will be arbitrarily chosen.
This is an optional argument whose default value is null.
Version
Introduced in version 2008
WorkPointProxy.SetByMidPoint Method
Parent Object: WorkPointProxy
Description
Method that redefines the work point to be at the midpoint of the input edge.
WorkPointProxy Object Page 19 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Syntax
WorkPointProxy.SetByMidPoint( Edge As Edge )
Parameters
Name Type Description
Edge Edge
Input Edge object. Any open edge is valid as input. Inputting a closed edge, (i.e.
circle), will cause and error to occur.
Version
Introduced in version 2008
WorkPointProxy.SetByPoint Method
Parent Object: WorkPointProxy
Description
Method that redefines the work point to be at the input point.
Syntax
WorkPointProxy.SetByPoint( Point As Object )
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex, SketchPoint, or
SketchPoint3D object.
Version
Introduced in version 2008
WorkPointProxy.SetBySphereCenterPoint
Method
Parent Object: WorkPointProxy
WorkPointProxy Object Page 20 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Redefines the work point to be at the center of the Sphere specified by the input face.
Syntax
WorkPointProxy.SetBySphereCenterPoint( Face As Face )
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a spherical surface. An error occurs if the
geometry of the input face is not a spherical surface
Version
Introduced in version 2014
WorkPointProxy.SetByThreePlanes Method
Parent Object: WorkPointProxy
Description
Method that redefines the work point to be at the intersection of the three input planes.
Syntax
WorkPointProxy.SetByThreePlanes( Plane1 As Object, Plane2 As Object, Plane3 As Object )
Parameters
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
Plane3 Object
Input object that represents a plane. This object can be a planar Face, WorkPlane,
or Sketch object.
WorkPointProxy Object Page 21 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Version
Introduced in version 2008
WorkPointProxy.SetByTorusCenterPoint
Method
Parent Object: WorkPointProxy
Description
Method that redefines the work point to be at the center of the torus specified by the input face.
Syntax
WorkPointProxy.SetByTorusCenterPoint( Face As Face )
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a torus surface. An error occurs if the geometry
of the input face is not a torus surface.
Version
Introduced in version 2008
WorkPointProxy.SetByTwoLines Method
Parent Object: WorkPointProxy
Description
Method that redefines the work point to be at the intersection of the two input lines.
Syntax
WorkPointProxy.SetByTwoLines( Line1 As Object, Line2 As Object )
Parameters
WorkPointProxy Object Page 22 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Line2 Object
Input object that represents a line. This object can be a linear Edge, WorkAxis,
SketchLine, or SketchLine3D object.
Version
Introduced in version 2008
WorkPointProxy.SetEndOfPart Method
Parent Object: WorkPointProxy
Description
Method that repositions the end-of-part marker relative to the object this method is called from.
The argument defines if the end-of-part marker will be positioned just before or just after the
object. If the object is contained within another object and is not in the top level of the browser,
the positioning of the marker will be relative to the top-level object the calling object is contained
within. An example of this case is a sketch that has not been shared and has been consumed by a
feature. Another example is a nested work feature.
Syntax
WorkPointProxy.SetEndOfPart( Before As Boolean )
Parameters
Name Type Description
Before Boolean
Input Boolean that indicates if the end of part marker should be immediately
before or after this work feature. A value of True indicates before and False
indicates after.
Version
Introduced in version 6
WorkPointProxy.SetFixed Method
Parent Object: WorkPointProxy
WorkPointProxy Object Page 23 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Method that redefines the work point to be at the position specified by the input point.
Syntax
WorkPointProxy.SetFixed( Point As Point )
Parameters
Name Type Description
Point Point Input Point object.
Version
Introduced in version 2008
WorkPointProxy.Shared Property
Parent Object: WorkPointProxy
Description
Gets and sets whether the work point is shared or not.
Syntax
WorkPointProxy.Shared() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 11
WorkPointProxy.Type Property
Parent Object: WorkPointProxy
WorkPointProxy Object Page 24 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkPointProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 5
WorkPointProxy.Visible Property
Parent Object: WorkPointProxy
Description
Specifies the visibility of the work point.
Syntax
WorkPointProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 5
WorkPointProxy Object Page 25 of 25
file:///C:/Users/Cliente/AppData/Local/Temp/~hh8019.htm 17/06/2025
WorkPoints Object
Description
Provides access to all of the objects in the parent document and provides methods to create new
work points.
Methods
Name Description
AddAtCentroid
Method that creates a new work point at the centroid of the input
entities. This method is not currently supported when creating a work
point within an assembly.
AddByCurveAndEntity
Method that creates a new work point at the intersection of the input
curve and entity. This method is not currently supported when creating
a work point within an assembly.
AddByMidPoint
Method that creates a new work point at the midpoint of the input
edge. This method is not currently supported when creating a work
point within an assembly.
AddByPoint
Method that creates a new work point at the input point. This method
is not currently supported when creating a work point within an
assembly.
AddBySphereCenterPoint
Creates a new work point at the center of the sphere specified by the
input face. This method is not currently supported when creating a
work point within an assembly.
AddByThreePlanes
Method that creates a new work point at the intersection of the three
input planes. If the three input planes don't intersect an error will
occur. This method is not currently supported when creating a work
point within an assembly.
AddByTorusCenterPoint
Method that creates a new work point at the center of the torus
specified by the input face. This method is not currently supported
when creating a work point within an assembly.
AddByTwoLines
Method that creates a new work point at the intersection of the two
input lines. If the lines don't intersect an error will occur. This method
is not currently supported when creating a work point within an
assembly.
AddFixed
Method that creates a new work point at the position specified by the
input point. When used to create a work point within an assembly the
resulting work point will return an AssemblyWorkPointDef definition.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
WorkPoints Object Page 1 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Count Property that returns the number of items in this collection.
Item
Returns the specified WorkPoint object from the collection. This is the default
property of the WorkPoints collection object.
Parent Property returning the parent object.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
AssemblyComponentDefinition.WorkPoints, FlatPattern.WorkPoints,
PartComponentDefinition.WorkPoints, SheetMetalComponentDefinition.WorkPoints,
WeldmentComponentDefinition.WorkPoints
Samples
Name Description
Create sheet metal
rip feature
This sample demonstrates the creation of a rip sheet metal feature.
Create sheet metal
face and cut features
This sample demonstrates the creation of sheet metal face and cut features.
Sweep Feature Add
This sample demonstrates the creation of a sweep feature. The profile is a
circle, but the path is made up of a 3D sketch and a 2D sketch.
UCS by three points
This sample demonstrates the creation of a User Coordinate System (UCS)
based on 3 points that define the origin, x-direction and y-direction for the
UCS.
Version
Introduced in version 4
WorkPoints.AddAtCentroid Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the centroid of the input entities. This method is not
currently supported when creating a work point within an assembly.
Syntax
WorkPoints.AddAtCentroid( Entities As Object, [Construction] As Boolean ) As WorkPoint
Parameters
WorkPoints Object Page 2 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Name Type Description
Entities Object
Input object that specifies the entities. This can be an Edge, an EdgeLoop
object or an EdgeCollection containing one or more edges. If an
EdgeCollection is input, the collection must contain connected edges. If
isolated edges appear in the collection, the method will fail.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkPoints.AddByCurveAndEntity Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the intersection of the input curve and entity. This method
is not currently supported when creating a work point within an assembly.
Syntax
WorkPoints.AddByCurveAndEntity( Curve As Object, Entity As Object, [ProximityPoint] As
Variant, [Construction] As Boolean ) As WorkPoint
Parameters
Name Type Description
Curve Object
Input object that represents a curve. This object can be an edge or a 2d
or 3d sketch entity.
Entity Object
Input object that will be intersected with the curve. This object can be a
face or a work plane. There is a current limitation that this must be a
planar face or work plane when anything but a line is input as the curve.
Any face can be used when the curve is a line.
ProximityPoint Variant Input Point object that indicates multiple solutions to use. For example, a
circle can intersect a plane twice, or a spline can intersect multiple times.
If this argument is supplied, the result closest to the input point will be
used. If this argument is not supplied and multiple solutions are possible,
one solution will be arbitrarily chosen.
WorkPoints Object Page 3 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
This is an optional argument whose default value is null.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as
a construction point or not. The default is False, which indicates to
create a standard work point. A construction work point is hidden from
the user and is not displayed graphically or listed in the browser. If work
features are created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never
get cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Remarks
If the curve and entity don't intersect an error will occur. A current limitation is that intersections
between entities that are non-planar can only be performed with linear curves.
Version
Introduced in version 6
WorkPoints.AddByMidPoint Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the midpoint of the input edge. This method is not
currently supported when creating a work point within an assembly.
WorkPoints Object Page 4 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Syntax
WorkPoints.AddByMidPoint( Edge As Edge, [Construction] As Boolean ) As WorkPoint
Parameters
Name Type Description
Edge Edge
Input Edge object. Any open edge is valid as input. Inputting a closed
edge, (i.e. circle), will cause and error to occur.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Samples
Name Description
Create sheet metal rip feature This sample demonstrates the creation of a rip sheet metal feature.
Version
Introduced in version 4
WorkPoints.AddByPoint Method
Parent Object: WorkPoints
WorkPoints Object Page 5 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Description
Method that creates a new work point at the input point. This method is not currently supported
when creating a work point within an assembly.
Syntax
WorkPoints.AddByPoint( Point As Object, [Construction] As Boolean ) As WorkPoint
Parameters
Name Type Description
Point Object
Input object that represents a point. This object can be a Vertex or
SketchPoint object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPoints.AddBySphereCenterPoint
Method
WorkPoints Object Page 6 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Parent Object: WorkPoints
Description
Creates a new work point at the center of the sphere specified by the input face. This method is not
currently supported when creating a work point within an assembly.
Syntax
WorkPoints.AddBySphereCenterPoint( Face As Face, [Construction] As Boolean ) As
WorkPoint
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a spherical surface. An error occurs if
the geometry of the input face is not a spherical surface.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2014
WorkPoints.AddByThreePlanes Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the intersection of the three input planes. If the three
input planes don't intersect an error will occur. This method is not currently supported when
creating a work point within an assembly.
Syntax
WorkPoints.AddByThreePlanes( Plane1 As Object, Plane2 As Object, Plane3 As Object,
[Construction] As Boolean ) As WorkPoint
Parameters
WorkPoints Object Page 7 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Name Type Description
Plane1 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Plane2 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Plane3 Object
Input object that represents a plane. This object can be a planar Face,
WorkPlane, or Sketch object.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 6
WorkPoints.AddByTorusCenterPoint Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the center of the torus specified by the input face. This
method is not currently supported when creating a work point within an assembly.
WorkPoints Object Page 8 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Syntax
WorkPoints.AddByTorusCenterPoint( Face As Face, [Construction] As Boolean ) As
WorkPoint
Parameters
Name Type Description
Face Face
Input Face object whose geometry is a torus surface. An error occurs if the
geometry of the input face is not a torus surface.
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser.
This is an optional argument whose default value is False.
Version
Introduced in version 2008
WorkPoints.AddByTwoLines Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the intersection of the two input lines. If the lines don't
intersect an error will occur. This method is not currently supported when creating a work point
within an assembly.
Syntax
WorkPoints.AddByTwoLines( Line1 As Object, Line2 As Object, [Construction] As Boolean )
As WorkPoint
Parameters
Name Type Description
Line1 Object
Input object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object.
Line2 Object Input object that represents a line. This object can be a linear Edge,
WorkAxis, or SketchLine object.
WorkPoints Object Page 9 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Construction Boolean
Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Version
Introduced in version 4
WorkPoints.AddFixed Method
Parent Object: WorkPoints
Description
Method that creates a new work point at the position specified by the input point. When used to
create a work point within an assembly the resulting work point will return an
AssemblyWorkPointDef definition.
Syntax
WorkPoints.AddFixed( Point As Point, [Construction] As Boolean ) As WorkPoint
Parameters
Name Type Description
Point Point Input Point object.
WorkPoints Object Page 10 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Construction Boolean Optional Input Boolean that specifies whether to create the work point as a
construction point or not. The default is False, which indicates to create a
standard work point. A construction work point is hidden from the user and
is not displayed graphically or listed in the browser. If work features are
created as construction:
• Deleting any downstream feature that consumes this construction
work feature will have the effect of deleting this work feature as
well.
• If there are no consumers of the construction work feature, it is the
responsibility of the creator to delete them since they will never get
cleaned up and are not visible to users.
This is an optional argument whose default value is False.
Samples
Name Description
Loft Feature
With Non-
Planar Section
This sample demonstrates the creation of a loft feature. It uses two sections for
the loft, one is from a 2d sketch and the other is a non-planar section from a 3d
sketch. Because one of the sketches isn't planar, a surface is created instead of a
solid.
Work point at
mass center
This sample demonstrates creating a fixed work point and edit its position. It
does this by computing the the center of mass of the part and creating a work
point at that position. Subsequent runs of the sample reposition the work point at
the new center of mass.
Sweep Feature
Add
This sample demonstrates the creation of a sweep feature. The profile is a circle,
but the path is made up of a 3D sketch and a 2D sketch.
UCS by three
points
This sample demonstrates the creation of a User Coordinate System (UCS) based
on 3 points that define the origin, x-direction and y-direction for the UCS.
Version
Introduced in version 4
WorkPoints.Application Property
Parent Object: WorkPoints
WorkPoints Object Page 11 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkPoints.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 4
WorkPoints.Count Property
Parent Object: WorkPoints
Description
Property that returns the number of items in this collection.
Syntax
WorkPoints.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 4
WorkPoints.Item Property
Parent Object: WorkPoints
WorkPoints Object Page 12 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Description
Returns the specified WorkPoint object from the collection. This is the default property of the
WorkPoints collection object.
Syntax
WorkPoints.Item( Index As Variant ) As WorkPoint
Property Value
This is a read only property whose value is a WorkPoint.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the object to return. This can be a numeric value
indicating the index of the item in the collection or it can be a string indicating the
work point name. If an out of range index or a name of a non-existent work point
is specified, an error occurs.
Samples
Name Description
Create sheet metal face and cut
features
This sample demonstrates the creation of sheet metal face and
cut features.
Version
Introduced in version 4
WorkPoints.Parent Property
Parent Object: WorkPoints
Description
Property returning the parent object.
Syntax
WorkPoints.Parent() As ComponentDefinition
WorkPoints Object Page 13 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 4
WorkPoints.Type Property
Parent Object: WorkPoints
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkPoints.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 4
WorkPoints Object Page 14 of 14
file:///C:/Users/Cliente/AppData/Local/Temp/~hhA583.htm 17/06/2025
WorkSurface Object
Description
The WorkSurface object represents a work surface, which is a type of work feature.
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
Exported
Read-write property that gets and sets whether the object is exported. Objects
must be marked for export in order for them to be derived.
Parent
Property that returns the parent object from whom this object can logically be
reached.
SurfaceBodies
Property that returns the surface bodies associated with this work surface. A work
surface can contain more than one surface body.
Translucent Specifies the translucency of the work surface.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work surface.
Accessed From
WorkSurfaceProxy.NativeObject, WorkSurfaces.Item
Derived Classes
WorkSurfaceProxy
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This is
equivalent to the Promote command, but the API is much more flexible. In order
for the sample to be self-contained, it creates two parts on the fly that will be used
WorkSurface Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
to demonstrate copying a body from one part to another. When copying a body
into a part, you provide the surface body and a matrix to define its position in the
new part. This sample creates a matrix based on the position of these parts within
an assembly.
Version
Introduced in version 6
WorkSurface.Application Property
Parent Object: WorkSurface
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkSurface.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
WorkSurface.AttributeSets Property
Parent Object: WorkSurface
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkSurface.AttributeSets() As AttributeSets
WorkSurface Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
WorkSurface.Exported Property
Parent Object: WorkSurface
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkSurface.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkSurface.GetReferenceKey Method
Parent Object: WorkSurface
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkSurface.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
WorkSurface Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
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
WorkSurface.Parent Property
Parent Object: WorkSurface
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
WorkSurface.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 6
WorkSurface Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
WorkSurface.SurfaceBodies Property
Parent Object: WorkSurface
Description
Property that returns the surface bodies associated with this work surface. A work surface can
contain more than one surface body.
Syntax
WorkSurface.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
Samples
Name Description
SurfaceBody
Copy
This sample demonstrates copying a surface body from one part to another. This is
equivalent to the Promote command, but the API is much more flexible. In order
for the sample to be self-contained, it creates two parts on the fly that will be used
to demonstrate copying a body from one part to another. When copying a body
into a part, you provide the surface body and a matrix to define its position in the
new part. This sample creates a matrix based on the position of these parts within
an assembly.
Version
Introduced in version 11
WorkSurface.Translucent Property
Parent Object: WorkSurface
Description
Specifies the translucency of the work surface.
Syntax
WorkSurface.Translucent() As Boolean
WorkSurface Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
WorkSurface.Type Property
Parent Object: WorkSurface
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkSurface.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
WorkSurface.Visible Property
Parent Object: WorkSurface
Description
Specifies the visibility of the work surface.
Syntax
WorkSurface.Visible() As Boolean
WorkSurface Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
WorkSurface Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhC129.htm 17/06/2025
WorkSurfaceProxy Object
Derived from: WorkSurface Object
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
Exported
Read-write property that gets and sets whether the object is exported.
Objects must be marked for export in order for them to be derived.
NativeObject
Gets the object in the context of the definition instead of the containing
assembly.
Parent
Property that returns the parent object from whom this object can logically
be reached.
SurfaceBodies
Property that returns the surface bodies associated with this work surface.
A work surface can contain more than one surface body.
Translucent Specifies the translucency of the work surface.
Type Returns an ObjectTypeEnum indicating this object's type.
Visible Specifies the visibility of the work surface.
Version
Introduced in version 6
WorkSurfaceProxy.Application Property
WorkSurfaceProxy Object Page 1 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
Parent Object: WorkSurfaceProxy
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkSurfaceProxy.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
WorkSurfaceProxy.AttributeSets Property
Parent Object: WorkSurfaceProxy
Description
Property that returns the AttributeSets collection object associated with this object.
Syntax
WorkSurfaceProxy.AttributeSets() As AttributeSets
Property Value
This is a read only property whose value is an AttributeSets.
Version
Introduced in version 9
WorkSurfaceProxy Object Page 2 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
WorkSurfaceProxy.ContainingOccurrence
Property
Parent Object: WorkSurfaceProxy
Description
Property that returns the ComponentOccurrence that the native object is being referenced through.
The returned occurrence is the containing occurrence.
Syntax
WorkSurfaceProxy.ContainingOccurrence() As ComponentOccurrence
Property Value
This is a read only property whose value is a ComponentOccurrence.
Version
Introduced in version 6
WorkSurfaceProxy.Exported Property
Parent Object: WorkSurfaceProxy
Description
Read-write property that gets and sets whether the object is exported. Objects must be marked for
export in order for them to be derived.
Syntax
WorkSurfaceProxy.Exported() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 2011
WorkSurfaceProxy Object Page 3 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
WorkSurfaceProxy.GetReferenceKey Method
Parent Object: WorkSurfaceProxy
Description
Method that generates and returns the reference key for this entity.
Syntax
WorkSurfaceProxy.GetReferenceKey( ReferenceKey() As Byte, [KeyContext] As Long )
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
WorkSurfaceProxy.NativeObject Property
Parent Object: WorkSurfaceProxy
Description
Gets the object in the context of the definition instead of the containing assembly.
Syntax
WorkSurfaceProxy.NativeObject() As WorkSurface
Property Value
This is a read only property whose value is a WorkSurface.
WorkSurfaceProxy Object Page 4 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
Version
Introduced in version 6
WorkSurfaceProxy.Parent Property
Parent Object: WorkSurfaceProxy
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
WorkSurfaceProxy.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 6
WorkSurfaceProxy.SurfaceBodies Property
Parent Object: WorkSurfaceProxy
Description
Property that returns the surface bodies associated with this work surface. A work surface can
contain more than one surface body.
Syntax
WorkSurfaceProxy.SurfaceBodies() As SurfaceBodies
Property Value
This is a read only property whose value is a SurfaceBodies.
WorkSurfaceProxy Object Page 5 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
Version
Introduced in version 11
WorkSurfaceProxy.Translucent Property
Parent Object: WorkSurfaceProxy
Description
Specifies the translucency of the work surface.
Syntax
WorkSurfaceProxy.Translucent() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
WorkSurfaceProxy.Type Property
Parent Object: WorkSurfaceProxy
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkSurfaceProxy.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
WorkSurfaceProxy Object Page 6 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
Version
Introduced in version 6
WorkSurfaceProxy.Visible Property
Parent Object: WorkSurfaceProxy
Description
Specifies the visibility of the work surface.
Syntax
WorkSurfaceProxy.Visible() As Boolean
Property Value
This is a read/write property whose value is a Boolean.
Version
Introduced in version 6
WorkSurfaceProxy Object Page 7 of 7
file:///C:/Users/Cliente/AppData/Local/Temp/~hhDAEB.htm 17/06/2025
WorkSurfaces Object
Description
The WorkSurfaces collection object represents all of the objects associated with this part or
component.
Properties
Name Description
Application
Returns the top-level parent application object. When used the context of Inventor,
an Application object is returned. When used in the context of Apprentice, an
ApprenticeServer object is returned.
Count Property that returns the number of items in this collection.
Item
Returns the specified WorkSurface object from the collection. This is the default
property of the WorkSurfaces collection object.
Parent
Property that returns the parent object from whom this object can logically be
reached.
Type Returns an ObjectTypeEnum indicating this object's type.
Accessed From
PartComponentDefinition.WorkSurfaces, SheetMetalComponentDefinition.WorkSurfaces
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
Adding a new
stitch (knit)
feature
This sample demonstrates the creation of a stitch feature (known as the Knit
feature in the API). The sample creates two work surfaces using surface
extrusions and stitches them together.
Version
Introduced in version 6
WorkSurfaces Object Page 1 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFAF6.htm 17/06/2025
WorkSurfaces.Application Property
Parent Object: WorkSurfaces
Description
Returns the top-level parent application object. When used the context of Inventor, an Application
object is returned. When used in the context of Apprentice, an ApprenticeServer object is
returned.
Syntax
WorkSurfaces.Application() As Object
Property Value
This is a read only property whose value is an Object.
Version
Introduced in version 6
WorkSurfaces.Count Property
Parent Object: WorkSurfaces
Description
Property that returns the number of items in this collection.
Syntax
WorkSurfaces.Count() As Long
Property Value
This is a read only property whose value is a Long.
Version
Introduced in version 6
WorkSurfaces Object Page 2 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFAF6.htm 17/06/2025
WorkSurfaces.Item Property
Parent Object: WorkSurfaces
Description
Returns the specified WorkSurface object from the collection. This is the default property of the
WorkSurfaces collection object.
Syntax
WorkSurfaces.Item( Index As Variant ) As WorkSurface
Property Value
This is a read only property whose value is a WorkSurface.
Parameters
Name Type Description
Index Variant
Input Variant value that specifies the object to return. This can be a numeric value
indicating the index of the item in the collection or it can be a string indicating the
work point name. If an out of range index or a name of a non-existent work point
is specified, an error occurs.
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
Adding a new
stitch (knit)
feature
This sample demonstrates the creation of a stitch feature (known as the Knit
feature in the API). The sample creates two work surfaces using surface
extrusions and stitches them together.
Version
Introduced in version 6
WorkSurfaces Object Page 3 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFAF6.htm 17/06/2025
WorkSurfaces.Parent Property
Parent Object: WorkSurfaces
Description
Property that returns the parent object from whom this object can logically be reached.
Syntax
WorkSurfaces.Parent() As ComponentDefinition
Property Value
This is a read only property whose value is a ComponentDefinition.
Version
Introduced in version 6
WorkSurfaces.Type Property
Parent Object: WorkSurfaces
Description
Returns an ObjectTypeEnum indicating this object's type.
Syntax
WorkSurfaces.Type() As ObjectTypeEnum
Property Value
This is a read only property whose value is an ObjectTypeEnum.
Version
Introduced in version 6
WorkSurfaces Object Page 4 of 4
file:///C:/Users/Cliente/AppData/Local/Temp/~hhFAF6.htm 17/06/2025