async function solution(plansInput) {
  const plans = plansInput
    .map((plan) => {
      const [hour, minute] = plan[1].split(':').map(Number);
      const startMinute = hour * 60 + minute;
      return [plan[0], startMinute, Number(plan[2])];
    })
    .sort((a, b) => b[1] - a[1]);

  class Plan {
    subject;
    startMinute;
    remainingMinute;
    isComplete;

    constructor(subject, startMinute, remainingMinute) {
      this.subject = subject;
      this.startMinute = startMinute;
      this.remainingMinute = remainingMinute;
    }

    progress(minute) {
      if (minute >= this.remainingMinute) {
        this.isComplete = true;
        this.remainingMinute = 0;
      } else {
        this.isComplete = false;
        this.remainingMinute -= minute;
      }

      return this;
    }
  }

  class Student {
    plans;
    unCompletedPlans;
    completedPlans;
    currentMinute;
    freeMinute;

    constructor(plans) {
      this.plans = plans;
      this.unCompletedPlans = [];
      this.completedPlans = [];
      this.currentMinute = plans.at(-1)[1];
      this.freeMinute = 0;
    }

    progressPlan() {
      const currentPlan = this.takeCurrentPlan();
      const nextPlan = this.nextPlan();
      const freeMinute = nextPlan.startTime - this.currentMinute;
      const availableMinute = freeMinute - currentPlan.remainingMinute;

      if (availableMinute > 0) {
      }
    }

    takeCurrentPlan() {
      return this.unCompletedPlans.pop() || this.plans.pop();
    }

    get nextPlan() {
      return this.plans.at(-1);
    }
  }

  const unfinishedPlans = [];
  const finishedSubjects = [];
  let freeMinute = 0;
  let currentMinute = plans.at(-1)[1];

  console.log(plans);

  while (plans.length > 0 || unfinishedPlans > 0) {
    await new Promise((res) => setTimeout(res, 100));
    const currentPlan = unfinishedPlans.pop() || plans.pop();
    const [subject, startTime, remainingMinute] = currentPlan;
    const nextPlan = plans.at(-1);
    // console.log(currentMinute, freeMinute);
    // console.log(plans);
    // console.log(unfinishedPlans);

    if (nextPlan === undefined) {
      freeMinute = Infinity;
    } else {
      freeMinute = nextPlan[1] - currentMinute;
    }

    if (freeMinute >= remainingMinute) {
      finishedSubjects.push(subject);
      currentMinute += remainingMinute;
    } else {
      unfinishedPlans.push([subject, startTime, remainingMinute - freeMinute]);
      currentMinute = nextPlan[1];
    }
  }

  console.log(finishedSubjects);
}

// solution([
//   ['korean', '11:40', '30'],
//   ['english', '12:10', '20'],
//   ['math', '12:30', '40'],
// ]);

solution([
  ['science', '12:40', '50'],
  ['music', '12:20', '40'],
  ['history', '14:00', '30'],
  ['computer', '12:30', '100'],
]);
