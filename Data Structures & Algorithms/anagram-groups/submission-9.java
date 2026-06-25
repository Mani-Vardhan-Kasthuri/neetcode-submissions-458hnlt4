class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> list = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();

        for(int i=0; i<strs.length; i++) {
            if(!visited.contains(i)) {
                String str = strs[i];
                visited.add(i);
                List<String> li = new ArrayList<>();
                li.add(str);

                for(int j=i+1; j<strs.length; j++) {
                    if(!visited.contains(j) && isAnagram(str, strs[j])) {
                        visited.add(j);
                        li.add(strs[j]);
                    }
                }

                list.add(li);
            }
        }

        return list;
    }

    public Boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) {
            return false;
        }
        Map<Character, Integer> fq = new HashMap<>();
        for(char c: s.toCharArray()) {
            fq.merge(c, 1, Integer::sum);
        }
        for(char c: t.toCharArray()) {
            if(!fq.containsKey(c)) {
                return false;
            }
            fq.put(c, fq.get(c) - 1);
            if(fq.get(c) == 0) {
                fq.remove(c);
            }
        }
        return true;
    }
}
