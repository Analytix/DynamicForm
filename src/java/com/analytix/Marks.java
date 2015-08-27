
package com.analytix;

/**
 *
 * @author Mallick
 */
public class Marks 
{

    public int getEnglish() {
        return English;
    }

    public void setEnglish(int English) {
        this.English = English;
    }

    public int getBengali() {
        return Bengali;
    }

    public void setBengali(int Bengali) {
        this.Bengali = Bengali;
    }

    @Override
    public String toString() {
        return "Marks{" + "English=" + English + ", Bengali=" + Bengali + '}';
    }

    public Marks(int English, int Bengali) {
        this.English = English;
        this.Bengali = Bengali;
    }

    public Marks() {
    }
    private int English;
    private int Bengali;
    
    
}
