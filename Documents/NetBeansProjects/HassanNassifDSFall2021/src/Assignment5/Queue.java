/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Assignment5;



/**
 *
 * @author Hassan Nassif
 */
public class Queue {
    
    private ArrayList list = new ArrayList();
    
     public int size()
    {
        return list.size();
    }
     
    public void enqueue(Object element)
    {
        list.add(element);
    }
    public Object dequeue()
    {
        return list.remove(list.size());
    }
    public void print(){
        list.print();
    }
    
}