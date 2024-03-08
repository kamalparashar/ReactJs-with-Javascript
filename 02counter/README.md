For Interview:


setCounter(counter+1);
setCounter(counter+1);
setCounter(counter+1);
setCounter(counter+1);

1. It will increment ONLY ONCE NOT 4 TIMES!!

2. This is due to useState hook as we know hooks handle UI updation and also updating values of variables.

3. React try to optimise the process by sending updation in bunch,and reflecting only the final state of the variable NOT INTERMIDIATE STATE OF THE VARIABLE.

4. Here we are doing same task again and again. So, react will reconsider it and update the variable only once.

5. To update it 4 times do this:
      
setCounter((prevcounter) => prevcounter+1);
setCounter((prevcounter) => prevcounter+1);
setCounter((prevcounter) => prevcounter+1);
setCounter((prevcounter) => prevcounter+1);

6. setCounter has a callback function which ask for previous state of the variable.

7. we can get the desired result now as each call will be dealt seperatly since function is asking for previous state of the variable.
