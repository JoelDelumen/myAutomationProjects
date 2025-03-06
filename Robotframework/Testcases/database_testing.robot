*** Settings ***
Library         DatabaseLibrary
Library         FakerLibrary
Test Setup      Connect to the Database

*** Variables ***
${DBModule}   pymysql
${DBName}   employees
${DBUser}   root
${DBPass}   J03l@Delum3n
${DBHost}   localhost
${DBPort}   3306

*** Keywords ***
Connect to the Database
    Connect To Database    ${DBModule}   ${DBName}  ${DBUser}  ${DBPass}   ${DBHost}  ${DBPort}



*** Test Cases ***
Add New Users to the Database
    [Tags]      addUser
    FOR  ${employee_count}  IN RANGE  0  10
        ${employee_no}  FakerLibrary.Random Int  min=3  max=4  step=1
        ${firstName}    FakerLibrary.First Name
        ${lastName}     FakerLibrary.Last Name
        ${bdate}     FakerLibrary.Date Of Birth  minimum_age=25  maximum_age=55
        ${gender}   FakerLibrary.Passport Gender
        ${hireDate}     FakerLibrary.Date
        Execute Sql String   USE employees;
        Execute Sql String   INSERT INTO employess (emp_no, birth_date, first_name, last_name, gender, hire_date) VALUES (${employee_count}, '${firstName}');
    END

Query into the Database
    [Tags]  query
    Execute Sql String   USE employees;
    ${output}       Query   SELECT * FROM user_lists;
    Log To Console      ${output}

