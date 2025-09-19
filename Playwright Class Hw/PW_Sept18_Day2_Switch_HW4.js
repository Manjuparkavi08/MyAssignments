// To Access Student Grades Using Switch Statement

function student() {
    let score = '>40';
    switch (score) {
        case '>90':
            console.log("Bravo! This Student Belongs to Grade A.");
            break;
            case '>80':
            console.log("Very Good! This Student Belongs to Grade B.");
            break;
            case '>70':
            console.log("Good! This Student Belongs to Grade C.");
            break;
            case '>60':
            console.log("Aim High! This Student Belongs to Grade D.");
            break;
            case '>50':
            console.log("Can do better! This Student Belongs to Grade E.");
            break;
            case '<50':
            console.log("Better Luck next time! This Student Belongs to Grade F.");
            break;
        default:
            console.log("Invalid Grade. Please check again. Thank you!");
            break;
    }
} 
 student()
