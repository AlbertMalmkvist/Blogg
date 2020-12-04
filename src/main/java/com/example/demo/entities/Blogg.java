package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "article")
public class Blogg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;

    @Column(name = "publication")
    private long publish;

    public Blogg() {
    }
    public Blogg(int id, String title, String description, int publication) {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getPublication() {
        return publish;
    }

    public void setPublication(long publish) {
        this.publish = publish;
    }
}