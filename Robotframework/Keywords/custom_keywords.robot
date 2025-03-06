*** Settings ***
Resource                                        ../Libraries/global_library.robot

*** Keywords ***
Wait And Click
    [Documentation]                             this keyword will wait for the given time (in Second) and click the element once found
    [Arguments]                                 ${element}  ${waiting_time}=20s
    RPA.Browser.Selenium.Wait Until Element Is Visible               ${element}
    RPA.Browser.Selenium.Click Element                               ${element}

Wait And Input
    [Documentation]    this keyword will wait for the given time (in Second) and input the value into the input element once found
    [Arguments]                                 ${input_element}  ${input_value}  ${waiting_time}=20s
    RPA.Browser.Selenium.Wait Until Element Is Visible               ${input_element}
    RPA.Browser.Selenium.Input Text                                  ${input_element}  ${input_value}

