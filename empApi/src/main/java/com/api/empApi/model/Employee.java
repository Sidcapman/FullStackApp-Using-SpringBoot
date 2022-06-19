package com.api.empApi.model;


import lombok.*;

//import javax.persistence.*;
//import java.lang.annotation.Documented;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
@Getter
@Setter
@Document(collection = "employees")
public class Employee {
//    @Transient
//    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private String id;

//    @Field
//    private ObjectId test;

    @Field
    private String firstName;

    @Field
    private String lastName;

    @Field
    private String emailId;
}
