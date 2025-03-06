*** Settings ***
Resource                                    ../Libraries/global_library.robot
Test Setup                                  Open URL
Test Teardown                               Close Browser

*** Test Cases ***
Go to Home
    [Documentation]
    Wait And Click                          ${home_btn}
    RPA.Browser.Selenium.Element Should Be Visible
    ...                                     ${home_header}

Get the Coordinates of the Button
    [Documentation]                         Here, we are using both Robotframework and Javascript code to get the coordinates
    ...                                     of an element.
    [Tags]                                  test
    Open Workspace Page
    Open Button Page
    ${y_coord}                              Get Horizontal Position   id:position
    ${x_coord}                              Get Vertical Position   id:position
    ${coordinates}                          set variable  ${x_coord}x${y_coord}
    Log To Console                          ${coordinates}
    ${test}                                 Execute Javascript  return document.getElementById('position').getBoundingClientRect();
    ${y_coords}                             Set Variable  ${test}[y]
    ${x_coords}                             Set Variable  ${test}[x]
    ${final_coords}                         Set Variable  ${x_coords}x${y_coords}
    Log To Console                          ${final_coords}

Color of the Button
    [Documentation]                         Here, we utilizes the use of Javascript code to get the color of the button
    ...                                     as Robotframework has no available Library for this kind of actions.
    Open Workspace Page
    Open Button Page
    ${RGB-color}                            Execute Javascript  return window.getComputedStyle(document.getElementById('color')).getPropertyValue('color');
    Log To Console                          ${RGB-color}

Find Height and Width of an Element
    [Documentation]                         Here, we utilizes javascript to identify the height and width of an element.
    [Tags]                                  test3
    Open Workspace Page
    Open Button Page
    ${test}                                 Execute Javascript  return document.getElementById('property').getBoundingClientRect();
    ${height}                               Set Variable     ${test}[height]
    ${width}                                Set Variable     ${test}[width]
    Log To Console                          \nElement Height is: ${height}
    Log To Console                          Element Width is: ${height} ${width}

Button is Disabled
    [Documentation]                         This is to test if Robotframework shall be able to identify if the element is
    ...                                     disabled or not.
    [Tags]                                  test4
    Open Workspace Page
    Open Button Page
    ${button_}                              Get Element Attribute   id:isDisabled   disabled
    IF                                      "${button_}" == "true"
        Log To Console                      Button is Disabled.
    ELSE
        Log To Console                      Button is not Disabled.
    END

Long Press the Button
    [Documentation]                         This is to test if Robotframework shall be able to identify if the element is
    ...                                     disabled or not.
    [Tags]                                  test5
    Open Workspace Page
    Open Button Page
    Mouse Down                              id:isDisabled