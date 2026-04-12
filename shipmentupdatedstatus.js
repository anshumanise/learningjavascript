function main() {
    // 1. Create the Shipment constructor function
    function Shipment(id, location, destination, status, resources) {
        this.id = id;
        this.location = location;
        this.destination = destination;
        this.status = status;
        // Initialize as empty array if no resources are passed
        this.resources = resources || [];
    }

    // 2. Add updateStatusandResources to the prototype
    Shipment.prototype.updateStatusandResources = function (newStatus, newResources) {
        this.status = newStatus;
        // Replace the current resources array with the new one
        this.resources = newResources;
    };

    // 3. Add assignResources to the prototype
    // This uses the rest operator (...) to handle any number of arguments
    Shipment.prototype.assignResources = function (...args) {
        this.resources.push(...args);
    };

    // 4. Create the TrackingSystem object literal
    const TrackingSystem = {
        shipments: [],

        updateStatus: function (id, status) {
            // Find the shipment by ID and update its status
            const shipment = this.shipments.find(s => s.id === id);
            if (shipment) {
                shipment.status = status;
            }
        },

        viewShipment: function (id) {
            const shipment = this.shipments.find(s => s.id === id);
            if (shipment) {
                // Use destructuring to extract properties
                const { id: sId, status, resources, location, destination } = shipment;
                
                console.log(`Shipment ID: ${sId}`);
                console.log(`Status: ${status}`);
                console.log(`Resources: ${resources.join(", ")}`);
                console.log(`Location: ${location}`);
                console.log(`Destination: ${destination}`);
            }
        }
    };

    return { Shipment, TrackingSystem };
}