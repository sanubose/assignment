let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    // Method to build the sentence
    buildSentence: function() {
        return (this.subject && this.verb && this.object) ?
            `${this.subject} ${this.verb} ${this.object}` : 
            "Incomplete sentence";
    },

    // Method to update a specific property dynamically
    updateProperty: function(property, value) {
    
        if (this.hasOwnProperty(property)) {
            this[property] = value;  
            return `Updated ${property} to "${value}"`;
        } else {
            return "Invalid property";
        }
    }
};

// Examples

// Example 1
console.log(sentenceBuilder.buildSentence());  


// Example 2
console.log(sentenceBuilder.updateProperty("verb", "am learning"));
console.log(sentenceBuilder.buildSentence());  


// Example 3
console.log(sentenceBuilder.updateProperty("subject", "The cat"));
console.log(sentenceBuilder.buildSentence());  


// Example 4
console.log(sentenceBuilder.updateProperty("mood", "happy"));


// Example 5
console.log(sentenceBuilder.updateProperty("verb", ""));
console.log(sentenceBuilder.buildSentence());  

