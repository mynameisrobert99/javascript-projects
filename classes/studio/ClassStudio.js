//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;  
        this.mass = mass;   
        this.scores = scores; 
    }
    addScore(score){
        this.score.push(score);
    }

    avrage(){
        let sum = 0;
        for (let i = 0; i< this.score.length; i++) {
            sum += this.score[i];
        }
        let avg = sum/this.score.length;
        return avg.toFixed(1);
    }

    status(){
        let status;
        let avgScore = this.avrage();
        if(avgScore >=90) {
            status = "Accepted";
        }
        else if (avgScore >= 80 && avgScore <= 90){
            status = "Reserve";
        }
        else if (avgScore >= 70 && avgScore <=80){
            status = "Probationary";
        }
        else {
            status = "Rejected";
        }

    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

gladGator.addScore(100)
console.log(gladGator.status());

gladGator.addScore(81)
console.log(gladGator.average())
console.log(gladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.