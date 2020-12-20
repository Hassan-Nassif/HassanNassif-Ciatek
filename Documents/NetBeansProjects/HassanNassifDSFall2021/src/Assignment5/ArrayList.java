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
import java.util.Arrays;
public class ArrayList implements List {

    private Object[] list;
    private int effectiveSize;
    private int BUFFER_SIZE = 10;

    public ArrayList() {
        list = new Object[BUFFER_SIZE];
        effectiveSize = 0;
    }

    @Override
    public void add(Object newElement) {
        if (list.length == effectiveSize) {
            list = Arrays.copyOf(list, list.length + BUFFER_SIZE);
        }
        list[effectiveSize] = newElement;
        effectiveSize++;
    }

    @Override
    public int size() {
        return effectiveSize;
    }

    @Override
    public Object get(int index) {
        if (index < 0 || index >= effectiveSize) {
            throw new ArrayIndexOutOfBoundsException("Invlaid Index " + index);
        }
        return list[index];
    }

    @Override
    public Object remove(int index) {
        if (index < 0 || index >= effectiveSize) {
            throw new ArrayIndexOutOfBoundsException("Invlaid Index " + index);
        }
        final Object valueToRemove = list[index];
        for (int i = index + 1; i < effectiveSize; i++) {
            list[i - 1] = list[i];
        }
        effectiveSize--;
        if (effectiveSize % BUFFER_SIZE == 0) {
            list = Arrays.copyOf(list, list.length - BUFFER_SIZE);
        }

        return valueToRemove;
    }

    @Override
    public boolean remove(Object element) {
        final int indexOfElementToRemove = indexOf(element);
        if (indexOfElementToRemove == -1) {
            return false;
        }
        remove(indexOfElementToRemove);
        return true;
    }

    @Override
    public int indexOf(Object element) {
        for (int i = 0; i < list.length; i++) {
            if (list[i].equals(element)) {
                return i;
            }
        }
        return -1;
    }
    public void replace(int index, Object newElement){
        for(int i = 0;i<effectiveSize;i++){
            if(i==index){
                list[i] = newElement;
            }
        }
        throw new RuntimeException("index not found");
      
    }
    public int countOccurrences(Object element){ // quiz
        int counter = 0;
        for(int i=0;i<effectiveSize;i++)
            if(list[i] == element){
                counter++;
            }
        return counter;
    } 
   public ArrayList intersect(ArrayList anotherList){
        for(int i = 0; i<effectiveSize;i++){
            for(int j = 0;j<effectiveSize;j++){
                if(list[i].equals(list[j]))
                    anotherList.add(this.list[i]);
            }
            
        }
        return anotherList;
        

   }
      public Object getElement(int index) {
        if (index > 0 || index < effectiveSize) {
            return list[index];
        } else {
            throw new IndexOutOfBoundsException("index");
        }
    }
    public void print() {
        System.out.print("Index  : \t");
        for (int i = 0; i < effectiveSize; i++) {
            System.out.print((i) + "\t");
        }

        System.out.print("\nElement : \t");

        for (int i = 0; i < effectiveSize; i++) {
            System.out.print(list[i] + "\t");
        }

        System.out.println("\n");
    }
    public boolean contains(Object item){
        for(int i=0;i<effectiveSize;i++){
            if(list[i].equals(item)){
                return true;
            }
        }
        return false;
    }
    public ArrayList merge(ArrayList l2){
        ArrayList l1 = this;
        for(int i=0;i<effectiveSize;i++){
            l1.add(l2.getElement(i));
        }
        return l1;
    }
    public boolean doesNotContain(List anotherList){
        ArrayList list1 = this;
         if(!(list1.contains(anotherList))){
             return true;
         }else{
         return false;
    }
    }


    public List getDistinct(List anotherList){
        ArrayList list1 = this;
         if(list1.doesNotContain(anotherList)){
             return list1.getDistinct(anotherList);
         }else{
             throw new RuntimeException("");
         
    }
        
         
    }
}

    

