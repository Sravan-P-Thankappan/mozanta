package com.mozanta.student_management.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {
    
    private String name;
    private String standard;
    private String division;
    private String gender;
    private String dateOfBirth;
    private int admissionNumber;

    
    public Student(){

    }


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public String getStandard() {
        return standard;
    }
    public void setStandard(String standard) {
        this.standard = standard;
    }


    public String getDivision() {
        return division;
    }
    public void setDivision(String division) {
        this.division = division;
    }


    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    
    public int getAdmissionNumber() {
        return admissionNumber;
    }


    public void setAdmissionNumber(int admissionNumber) {
        this.admissionNumber = admissionNumber;
    }


    @Override
    public String toString() {
        return "Student [name=" + name + ", standard=" + standard + ", division=" + division + ", gender=" + gender
                + ", dateOfBirth=" + dateOfBirth + ", admissionNumber=" + admissionNumber + "]";
    }

    

}
