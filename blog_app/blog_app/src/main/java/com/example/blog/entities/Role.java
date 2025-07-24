package com.example.blog.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Role {

    @Id
    private int id;

    private String name;

//    @ManyToMany(mappedBy = "role", cascade = CascadeType.ALL)
//    private Set<User> users = new HashSet<>();


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
