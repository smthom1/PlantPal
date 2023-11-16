import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

class Plant implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private String scientificName;
    private String bestTimeToPlant;
    private String wateringSchedule;
    private String typeOfSoil;
    private String maintenanceRequirements;
    private int lightNeededInLux;
    private String notes;

    // Constructor
    public Plant(String name, String scientificName, String bestTimeToPlant, String wateringSchedule,
                 String typeOfSoil, String maintenanceRequirements, int lightNeededInLux, String notes) {
        this.name = name;
        this.scientificName = scientificName;
        this.bestTimeToPlant = bestTimeToPlant;
        this.wateringSchedule = wateringSchedule;
        this.typeOfSoil = typeOfSoil;
        this.maintenanceRequirements = maintenanceRequirements;
        this.lightNeededInLux = lightNeededInLux;
        this.notes = notes;
    }

    // Getters and setters

    @Override
    public String toString() {
        return "Plant{" +
                "name='" + name + '\'' +
                ", scientificName='" + scientificName + '\'' +
                ", bestTimeToPlant='" + bestTimeToPlant + '\'' +
                ", wateringSchedule='" + wateringSchedule + '\'' +
                ", typeOfSoil='" + typeOfSoil + '\'' +
                ", maintenanceRequirements='" + maintenanceRequirements + '\'' +
                ", lightNeededInLux=" + lightNeededInLux +
                ", notes='" + notes + '\'' +
                '}';
    }
}

public class PlantDataManager {

    private static final String CSV_FILE = "plants.csv";

    public static void writePlantToFile(Plant plant, String filename) {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
            oos.writeObject(plant);
            System.out.println("Plant data written to " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Plant readPlantFromFile(String filename) {
        Plant plant = null;
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            plant = (Plant) ois.readObject();
            System.out.println("Plant data read from " + filename);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return plant;
    }

    public static List<Plant> readPlantsFromCSV(String filename) {
        List<Plant> plants = new ArrayList<>();
        try (CSVReader csvReader = new CSVReader(new FileReader(filename))) {
            String[] nextRecord;
            while ((nextRecord = csvReader.readNext()) != null) {
                String name = nextRecord[0];
                String scientificName = nextRecord[1];
                String bestTimeToPlant = nextRecord[2];
                String wateringSchedule = nextRecord[3];
                String typeOfSoil = nextRecord[4];
                String maintenanceRequirements = nextRecord[5];
                int lightNeededInLux = Integer.parseInt(nextRecord[6]);
                String notes = nextRecord[7];

                Plant plant = new Plant(name, scientificName, bestTimeToPlant, wateringSchedule,
                        typeOfSoil, maintenanceRequirements, lightNeededInLux, notes);
                plants.add(plant);
            }
            System.out.println("Plants data read from " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return plants;
    }

    public static void writePlantsToCSV(List<Plant> plants, String filename) {
        try (CSVWriter csvWriter = new CSVWriter(new FileWriter(filename))) {
            for (Plant plant : plants) {
                String[] record = {
                        plant.getName(),
                        plant.getScientificName(),
                        plant.getBestTimeToPlant(),
                        plant.getWateringSchedule(),
                        plant.getTypeOfSoil(),
                        plant.getMaintenanceRequirements(),
                        String.valueOf(plant.getLightNeededInLux()),
                        plant.getNotes()
                };
                csvWriter.writeNext(record);
            }
            System.out.println("Plants data written to " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void displayPlantInformation(Plant plant) {
        String message = "Plant Information:\n\n" +
                "Name: " + plant.getName() + "\n" +
                "Scientific Name: " + plant.getScientificName() + "\n" +
                "Best Time to Plant: " + plant.getBestTimeToPlant() + "\n" +
                "Watering Schedule: " + plant.getWateringSchedule() + "\n" +
                "Type of Soil: " + plant.getTypeOfSoil() + "\n" +
                "Maintenance Requirements: " + plant.getMaintenanceRequirements() + "\n" +
                "Light Needed (Lux): " + plant.getLightNeededInLux() + "\n" +
                "Notes: " + plant.getNotes();

        JOptionPane.showMessageDialog(null, message, "Plant Information", JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) {
        // Reading plants from CSV
        List<Plant> plantsFromCSV = readPlantsFromCSV(CSV_FILE);

        // Adding a new plant with notes
        Plant newPlant = new Plant("Sunflower", "Helianthus annuus", "Spring", "Regularly",
                "Well-draining soil", "Moderate", 800, "");
        plantsFromCSV.add(newPlant);

        // Writing plants back to CSV
        writePlantsToCSV(plantsFromCSV, CSV_FILE);

        // Reading plants from CSV again
        List<Plant> updatedPlantsFromCSV = readPlantsFromCSV(CSV_FILE);

        // Displaying the updated plant list
        for (Plant plant : updatedPlantsFromCSV) {
            System.out.println(plant);
        }

        // Display plant information interactively using a pop-up window
        String plantNameToDisplay = JOptionPane.showInputDialog(null,
                "Enter the name of the plant to display information:", "Plant Information", JOptionPane.QUESTION_MESSAGE);

        if (plantNameToDisplay != null && !plantNameToDisplay.isEmpty()) {
            Plant plantToDisplay = updatedPlantsFromCSV.stream()
                    .filter(plant -> plant.getName().equalsIgnoreCase(plantNameToDisplay))
                    .findFirst()
                    .orElse(null);

            if (plantToDisplay != null) {
                // Display plant information
                displayPlantInformation(plantToDisplay);

                // Prompt user to add or edit notes
                String notesInput = JOptionPane.showInputDialog(null,
                        "Enter or edit notes for the plant:", "Add/Edit Notes", JOptionPane.PLAIN_MESSAGE);

                // Update plant notes
                plantToDisplay.setNotes(notesInput);

                // Write updated plants back to CSV
                writePlantsToCSV(updatedPlantsFromCSV, CSV_FILE);
            } else {
                JOptionPane.showMessageDialog(null, "Plant not found!", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }
}
