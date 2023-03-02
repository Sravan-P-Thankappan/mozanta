package com.mozanta.student_management;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mozanta.student_management.model.Student;

public interface StudentRepo extends MongoRepository<Student,String> {

    
    
}
