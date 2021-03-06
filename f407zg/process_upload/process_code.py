import os
import time

if __name__ == '__main__':
  list_res_setup = list('\n')
  list_res_loop = list('\n')
  code_resA = '\n'
  code_resB = '\n'
  print('start to process code')
  time.sleep(0.02)
  f = open('/home/user000/upload/code.txt')
  full_str = f.read()
  f.close()
  full_str = full_str.replace('delay','delay_ms')
  full_str = full_str.replace('OUTPUT','1')
  full_str = full_str.replace('INPUT','0')
  full_str = full_str.replace('HIGH','1')
  full_str = full_str.replace('LOW','0')
  full_str = full_str.replace('0.attach','attach')
  full_str = full_str.replace('1.attach','attach')
  full_str = full_str.replace('.write','_write')
  full_str = full_str.replace('volatile',' ')
  full_list = full_str.split('\n')
  setupA = setupB = loopA = loopB = -1
  block_index = 0;
  block_sum = 0;
  for i in range(len(full_list)):
    if ('{' in full_list[i]) or ('}' in full_list[i]):
      if '{' in full_list[i]:
        block_sum = block_sum+1
      if '}' in full_list[i]:
        block_sum = block_sum-1
      if block_sum == 1:
        if setupA == -1:
          setupA = i
        elif loopA == -1:
          loopA = i
      if block_sum == 0:
        if setupB == -1:
          setupB = i
        else:
          loopB = i
  # print("setupA:%d,setupB:%d,loopA:%d,loopB:%d"%(setupA,setupB,loopA,loopB))
  for i in range(setupA+1,setupB):
    list_res_setup.insert(len(list_res_setup),full_list[i])
    list_res_setup.insert(len(list_res_setup),'\n')
  code_resA = ''.join(list_res_setup)
  for i in range(loopA+1,loopB):
    list_res_loop.insert(len(list_res_loop),full_list[i])
    list_res_loop.insert(len(list_res_loop),'\n')
  code_resB = ''.join(list_res_loop)

  #print(code_resA)
  #print('-------------')
  #print(code_resB)
  
  f = open('/home/pico/hello8/f407zg/user/main.c')
  main_str = f.read()
  f.close()
  str_list = list(main_str)
  find = main_str.find('init functions')
  if find != -1:
    str_list.insert(find+14,code_resA)
    main_str = ''.join(str_list)
    str_list = list(main_str)
  else:
    print('can not find the str:init functions')
  find = main_str.find('while functions')
  if find != -1:
    str_list.insert(find+15,code_resB)
    main_str = ''.join(str_list)
  else:
    print('can not find the str:while functions')

  f = open('/home/pico/hello8/f407zg/user/main.c','w')
  f.write(main_str)
  f.close()
  print('end of process code')
