import java.nio.file.*;
import java.nio.file.attribute.*;
import java.io.IOException;
import java.util.Date;
import java.util.List;

/**
 * The FileInfoNIO class demonstrates how to work with files using the java.nio.file package.
 * It shows how to obtain file information such as path, permissions, size, and modification time.
 * Additionally, it demonstrates renaming a file and checking if the file still exists after renaming.
 */
public class FileInfoNIO {

    /**
     * This method prints various information about a given file.
     * It uses java.nio.file API to gather and display file details.
     * 
     * @param testPath The Path object representing the file to get information about.
     */
    public void getInfo(Path testPath) {
        try {
            // Check if file exists
            if (Files.exists(testPath)) {
                System.out.println("Absolute path: " + testPath.toAbsolutePath());
                
                // Print file permissions
                System.out.println("Can read: " + Files.isReadable(testPath));
                System.out.println("Can write: " + Files.isWritable(testPath));
                System.out.println("Can execute: " + Files.isExecutable(testPath));
                
                // Print file attributes
                BasicFileAttributes attrs = Files.readAttributes(testPath, BasicFileAttributes.class);
                System.out.println("File size: " + attrs.size() + " bytes");
                System.out.println("Creation time: " + new Date(attrs.creationTime().toMillis()));
                System.out.println("Last modified: " + new Date(attrs.lastModifiedTime().toMillis()));
                System.out.println("Last accessed: " + new Date(attrs.lastAccessTime().toMillis()));
                
                // Print file or directory info
                if (Files.isDirectory(testPath)) {
                    System.out.println("It's a directory");
                } else if (Files.isRegularFile(testPath)) {
                    System.out.println("It's a file");
                }
                
                System.out.println();
            } else {
                System.out.println(testPath.getFileName() + " does not exist");
            }
        } catch (IOException e) {
            System.err.println("An error occurred while retrieving file info: " + e.getMessage());
        }
    }

    /**
     * The main method that demonstrates file operations using java.nio.file.
     * It checks for the existence of files, prints their information, renames them, 
     * and checks if the original file exists after renaming.
     * 
     * @param args Command-line arguments (not used in this example).
     */
    public static void main(String[] args) {
        Path testPath, oldFilePath, renamedFilePath;

        // Create an instance of FileInfoNIO to call getInfo()
        FileInfoNIO myTester = new FileInfoNIO();
        
        // Define paths for the files
        testPath = Paths.get("stuff.txt");
        
        // Check if "stuff.txt" exists
        if (Files.exists(testPath)) {
            System.out.println("stuff.txt exists");
        } else {
            System.out.println("stuff.txt doesn't exist");
        }
        
        // Display information about "stuff.txt"
        myTester.getInfo(testPath);
        
        // Define another path for "copy.txt"
        oldFilePath = Paths.get("copy.txt");
        
        // Display information about "copy.txt"
        myTester.getInfo(oldFilePath);
        
        // Rename "copy.txt" to "copy2.txt"
        renamedFilePath = Paths.get("copy2.txt");
        try {
            Files.move(oldFilePath, renamedFilePath);
            System.out.println("File renamed from copy.txt to copy2.txt");
        } catch (IOException e) {
            System.err.println("Error renaming file: " + e.getMessage());
        }
        
        // Display information about the renamed file "copy2.txt"
        myTester.getInfo(renamedFilePath);

        // Check to see if original "copy.txt" exists after renaming
        if (Files.exists(oldFilePath)) {
            System.out.println("copy.txt still exists");
        } else {
            System.out.println("copy.txt is gone");
        }
    }
}
