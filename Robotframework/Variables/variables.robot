*** Settings ***
Resource    ../Libraries/global_library.robot

*** Variables ***
#-----------------------------------------------------------
# COMMON
#-----------------------------------------------------------
${home_page_url}                        https://letcode.in/
${main_url}                             https://letcode.in/test
${home_header}                          //*[contains(text(), " LetCode with Koushik ")]
${workspace_header}                     //*[contains(text(), "Ready to be a Pro Engineer?")]
${workspace_btn}                        //*[contains(text(), "Work-Space")]

#-----------------------------------------------------------
# INPUT PAGE
#-----------------------------------------------------------
${main_edit_btn}                        //*[contains(text(), "Edit")]
${input_fullname_input}                 id:fullName

#-----------------------------------------------------------
# BUTTON PAGE
#-----------------------------------------------------------
${main_button_btn}                      //*[contains(text(), " Click ")]
${main_button_page_header}              //h1[@class="title has-text-centered is-pulled-left" and contains(text(), "Button")]
${home_btn}                             //app-root/app-header/nav/div/div[1]

