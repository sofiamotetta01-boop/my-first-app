alter table messages
  add constraint messages_message_length_check
  check (char_length(message) <= 200)
  not valid;
