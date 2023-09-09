var mergeTwoLists = function (list1, list2, answer = null, isFirtst = true) {
  if (list1 || list2) {
    if (isFirtst) {
      answer = new ListNode();
    }
    isFirtst = false;
    let actual = answer;
    if (list1) {
      if (list2) {
        if (list1.val < list2.val) {
          actual.val = list1.val;

          list1 = list1.next;
        } else {
          actual.val = list2.val;

          list2 = list2.next;
        }
      } else {
        actual.val = list1.val;

        list1 = list1.next;
      }
    } else {
      actual.val = list2.val;

      list2 = list2.next;
    }
    if (list1 || list2) {
      actual.next = new ListNode();
      actual = actual.next;
    }
    mergeTwoLists(list1, list2, actual, isFirtst);
  }

  return answer;
};
