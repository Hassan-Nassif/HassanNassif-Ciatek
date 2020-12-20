package Quiz1;
import java.util.Arrays;

/**
 *
 * @author Bilal
 */
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

public class Arraylist {
    int counter = 0;
    private int effectiveSize;
    public int countOccurrences(Object element){
         for(int i=0;i<effectiveSize;i++)
            if(list[i] == element){
                counter++;
            }else{
        return counter;
    }
      
    
    

