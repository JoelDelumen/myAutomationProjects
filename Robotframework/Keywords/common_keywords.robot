*** Settings ***
Resource                                    ../Libraries/global_library.robot


*** Keywords ***
Open URL
    [Documentation]                         Opens the given URL.
    Open Available Browser                  ${home_page_url}
    ...                                     maximized=true

Open Workspace Page
    [Documentation]                         Opens the Workspace page
    Wait And Click                          ${workspace_btn}
    Element Should Be Visible               ${workspace_header}

Open Input Page
    [Documentation]                         Opens the Input page
    Wait And Click                          ${main_edit_btn}

Open Button Page
    [Documentation]                         Opens the BUtton page
    Wait And Click                          ${main_button_btn}
    Element Should Be Visible               ${main_button_page_header}


