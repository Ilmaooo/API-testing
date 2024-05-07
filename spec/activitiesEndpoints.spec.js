const activitiesTasks = require("./api_handlers/activitiesTasks");

describe("Activities endpoints", () => {
  it("should retrieve all activities data", async () => {
    const activities = await activitiesTasks.getActivities();
    console.log("Activities: ", activities.data);
    await expect(activities.data.length).toBeGreaterThan(0);
  });

  it("should create a new activity", async () => {
    const newActivity = {
      title: "nova aktivnost",
      dueDate: "2024-05-07T08:19:12.354Z",
      completed: true,
    };
    const response = await activitiesTasks.createActivity(newActivity);
    console.log("New Activity: ", response.data);
    await expect(newActivity).toBeDefined();
  });

  it("should retrieve a single activity data", async () => {
    const activityId = 1;
    const activity = await activitiesTasks.getActivityById(activityId);
    console.log(`Activity with id ${activityId}:`, activity);
    await expect(activity.data.id).toBe(activityId);
    await expect(activity.status).toBe(200);
  });

  it("should update an activity", async () => {
    const activityId = 1;
    const updatedActivity = {
      id: activityId,
      title: "updated activity",
      dueDate: "2024-05-06T09:36:05.644Z",
      completed: true,
    };
    const updated = await activitiesTasks.updateActivity(
      activityId,
      updatedActivity,
    );
    console.log("Updated activity:", updated.data);
    await expect(updatedActivity.id).toBe(activityId);
  });

  it("should delete an activity", async () => {
    const deletedActivity = await activitiesTasks.deleteActivity(2);
    await expect(deletedActivity.status).toBe(200);
    await expect(deletedActivity.headers["content-length"]).toBe("0");
  });
});
