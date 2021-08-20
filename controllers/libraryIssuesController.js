const { LibraryIssue, Student, User } = require("../models");

const index = async (req, res) => {
  try {
    const issues = await LibraryIssue.findAll({
      include: "student",
    });
    res.json(issues);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unexpected error occured",
    });
    console.log(error);
  }
};

const retreive = async (req, res) => {
  const { issueId } = req.params;
  try {
    const issue = LibraryIssue.findOne({
      where: { uuid: issueId },
      include: "student",
    });
    if (!issue)
      return res.status(404).json({ detail: "Library issue does not exist" });
    const user = User.findOne({
      where: { id: issue.dataValues.student.userId },
    });
    res.json({
      issue,
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unexpected error occured",
    });
    console.log(error);
  }
};

const create = async (req, res) => {
  const { detail } = req.body;
  const { studentId } = req.params;
  try {
    const student = await Student.findOne({ where: { id: studentId } });
    if (!student)
      return res.status(404).json({ detail: "Student does not exist" });

    let issue = LibraryIssue.create({
      detail,
      studentId,
    });
    issue = await LibraryIssue.findOne({
      where: { id: issue.id },
      include: "student",
    });
    res.status(201).json({
      status: "success",
      message: "Issue created succefully",
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unexpected error occured",
    });
    console.log(error);
  }
};

const update = async (req, res) => {
  const { issueId } = req.params;
  try {
    const issue = await LibraryIssue.findOne({ where: { uuid: issueId } });
    if (!issue)
      return res.status(404).json({ detail: "Library issue does not exist" });
    const { detail, resolved } = req.body;
    await LibraryIssue.update(
      { detail: detail || issue.detail, resolved: resolved || issue.resolved },
      {
        where: { where: { id: issue.id } },
      }
    );
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unexpected error occured",
    });
    console.log(error);
  }
};

const deleteIssue = () => {
  const { issueId } = req.params;

  try {
    const issue = await LibraryIssue.findOne({
      where: { uuid: issueId },
    });
    if (!issue)
      return res.status(404).json({ detail: "Library issue does not exist" });

    await LibraryIssue.destroy({where:{id:issue.id}})
    res.json({
        status:"ok",
        message:"Library issue deleted successfully",
        data: issue
    })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unexpected error occured",
    });
    console.log(error);
  }
};
module.exports = { index, create, retreive, update, deleteIssue };
