function solution(input) {
    if (input == 'upvote') {
        upvote.call(this);
    } else if (input == 'downvote') {
        downvote.call(this);
    } else if (input == 'score') {
        return score.call(this);
    } else {
        throw new Error();
    }

    function upvote() {
        this.upvotes++;
    }

    function downvote() {
        this.downvotes++;
    }

    function score() {
        let reportUpvotes = this.upvotes;
        let reportDownvotes = this.downvotes;

        const total = reportUpvotes + reportDownvotes;
        const balance = reportUpvotes - reportDownvotes;

        let rating;

        if (total < 10) {
            rating = 'new';
        } else if (reportUpvotes > total * 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && total > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        if (total > 50) {
            const obfuscation = Math.ceil(Math.max(reportUpvotes, reportDownvotes) * 0.25);
            reportUpvotes += obfuscation;
            reportDownvotes += obfuscation;
        }

        return [reportUpvotes, reportDownvotes, balance, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 0
};
console.log(solution.call(post, 'score'))
