*** Settings ***
Resource                                    ../Libraries/global_library.robot
Test Setup                                  Open URL
Test Teardown                               Close Browser


*** Test Cases ***
Enter Full Name
    ${firstName}                            FakerLibrary.Name
    ${lastName}                             FakerLibrary.Lastname
    Open Workspace Page
    Open Input Page
    Wait And Input                          ${input_fullname_input}
    ...                                     ${firstName} ${lastName}

Append a Text
    [Documentation]                         Add a text to the end of an existing Paragraph in the textbox.
    Open Workspace Page
    Open Input Page
    ${existing_text}                        RPA.Browser.Selenium.Get Element Attribute
    ...                                     id:join  attribute=value
    Wait And Input                          id:join   ${existing_text} THIS IS TEXT.
    RPA.Browser.Selenium.Press Keys
    ...                                     NONE  TAB

Get the Text
    [Documentation]                         Get the text inside the textbox
    Open Workspace Page
    Open Input Page
    ${text_value}                           RPA.Browser.Selenium.Get Element Attribute
    ...                                     id:getMe  value
    Log To Console                          ${text_value}

Clear the Text
    [Documentation]                         Remove any text from the textbox
    Open Workspace Page
    Open Input Page
    RPA.Browser.Selenium.Set Element Attribute
    ...                                     id:clearMe  attribute=value  value=""

Confirm edit field is disabled
    [Documentation]                         Confirm if the given textfield is disabled
    Open Workspace Page
    Open Input Page
    ${disabled}                             Is Element Disabled   id:noEdit
    IF                                      "${disabled}" == "true"
        Log To Console                      Element is Disabled!
    ELSE
        Log To Console                      No its Not!
    END

Confirm text is readonly
    [Documentation]                 Confirm if the textbox is Read-only or can be manipulated
    Open Workspace Page
    Open Input Page
    ${readOnly}                     RPA.Browser.Selenium.Get Element Attribute   id:dontwrite   readonly
    Log To Console   ${readOnly}
    IF                              "${readOnly}" == "true"
        Log To Console              The Element is Read-Only!
    ELSE
        Log To Console              The Element is not Read-Only!
    END