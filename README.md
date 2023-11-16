# PlantPal

PlantPal is a side project that originated from the experiences gained during the Plant Propagation & Nursery Management Internship at UC Davis in 2023. This project aimed to enhance plant care and management by providing a digital solution for keeping track of essential information about plants.

## Background

### Internship at UC Davis
During the Plant Propagation & Nursery Management Internship at UC Davis, I had the opportunity to work with a diverse range of plants and learn about various aspects of nursery management. The need for an organized and efficient way to manage plant information became apparent, leading to the development of PlantPal.

## Features

### Plant Information
- Record detailed information about each plant, including:
  - Common name
  - Scientific name
  - Best time to plant
  - Watering schedule
  - Type of soil
  - Maintenance requirements
  - Light needed in lux
  - Personal notes

### Interactive User Interface
- Use a user-friendly interface to add, view, and edit plant details.
- View a summary of plant information through pop-up windows.
- Add or edit personal notes for each plant.

### CSV Integration
- Import and export plant data using CSV files.
- Easily share and backup your plant information.

## Implementation

### Technologies Used
- Java programming language.
- OpenCSV library for CSV file handling.

### How It Was Done
1. **Object-Oriented Design:** The project utilized object-oriented design principles to create a `Plant` class with attributes representing plant details.

2. **File Handling:** Java's serialization was used to write and read individual plant objects to and from files. The OpenCSV library facilitated the import and export of plant data in CSV format.

3. **User Interaction:** The Swing library in Java was employed for creating a simple graphical user interface (GUI) that allowed users to interactively manage plant information.

4. **Notes Feature:** The addition of a `notes` field in the `Plant` class enabled users to include personal notes for each plant, enhancing the utility of the application.

## Getting Started

### Prerequisites
- Java Development Kit (JDK)
- OpenCSV library (included in the project)

### Usage
1. Clone the repository or download the source code.
2. Compile and run the `PlantDataManager` class.
3. Use the interactive menu to add, view, and edit plant information.

## Example

```java
// Adding a new plant
Plant newPlant = new Plant("Sunflower", "Helianthus annuus", "Spring", "Regularly",
        "Well-draining soil", "Moderate", 800, "Keep soil moist during flowering.");

// Displaying plant information
displayPlantInformation(newPlant);

// Adding or editing plant notes interactively
String notesInput = JOptionPane.showInputDialog(null,
        "Enter or edit notes for the plant:", "Add/Edit Notes", JOptionPane.PLAIN_MESSAGE);

// Update plant notes
newPlant.setNotes(notesInput);
```

## Acknowledgments

Special thanks to UC Davis for providing the internship opportunity and inspiring the development of PlantPal.
