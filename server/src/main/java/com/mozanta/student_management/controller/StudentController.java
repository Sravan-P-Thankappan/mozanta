package com.mozanta.student_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mozanta.student_management.StudentRepo;
import com.mozanta.student_management.model.Student;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentRepo repo;

    @Autowired
    private MongoTemplate mongoTemplate;

    @RequestMapping(value = "/")

    public void check() {
        System.out.println("api checking");
    }




    // ---------getting all student---------

    @GetMapping("/students")

    public List<Student> getAllStudent() {
        return repo.findAll();
    }




    // ---------adding new student-----------

    @CrossOrigin
    @PostMapping("/student")

    public String addStudent(@RequestBody Student student) {
         
        System.out.println(student);
        Query query = new Query();

        query.with(Sort.by(Sort.Direction.DESC, "admissionNumber"));

        Student lastStudent = mongoTemplate.findOne(query, Student.class);

        int admissionNumber = lastStudent != null ? lastStudent.getAdmissionNumber() + 1 : 100;

        student.setAdmissionNumber(admissionNumber);

        repo.save(student);

        return "Student added";

    }

}
