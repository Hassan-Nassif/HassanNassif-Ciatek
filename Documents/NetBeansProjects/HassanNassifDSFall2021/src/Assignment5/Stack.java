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
public class Stack { 

    private ArrayList list = new ArrayList();
    
    public int size()
    {
        return list.size();
    }
    
    public void push(Object element)
    {
        list.add(element);
    }
    
    public Object pop()
    {
        return list.remove(list.size()-1);
    }
   
   
    public void print(){
        list.print();
    }
     public Stack copy()
    {
        Stack list2 = new Stack();
        for(int i=0;i<list.size();i++){
            list2.push(list.getElement(i));
        }
        return list2;
    }
    public Stack copyReverse()
     {
         Stack list2 = new Stack();
        for(int i=0;i<list.size();i++){
            list2.push(list.getElement(i-1));
        }
        return list2;
     }
       
     
}
