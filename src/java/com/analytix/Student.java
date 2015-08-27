
package com.analytix;
import org.codehaus.jackson.annotate.*;
/**
@author Mallick
 */
@JsonIgnoreProperties
public class Student
{

    public Student()
    {
    
    }

    public String getNAME() {
        return name;
    }

    public void setNAME(String name) {
        this.name = name;
    }

    public String getBranch()
    {
        return branch;
    }

    public void setBranch(String branch) 
    {
        this.branch = branch;
    }

    @Override
    public String toString()
    {
        return "Student{" + "name=" + name + ", branch=" + branch + '}';
    }

    public Student(String name, String branch) 
    {
        this.name = name;
        this.branch = branch;
    }
  
    private String name;
    private String branch;
 

}
